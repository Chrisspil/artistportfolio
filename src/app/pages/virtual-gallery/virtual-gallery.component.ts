import * as THREE from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { artworks, Artwork } from '../../artworks';
import { CommonModule } from '@angular/common';
import nipplejs from 'nipplejs';

@Component({
  selector: 'app-virtual-gallery',
  templateUrl: './virtual-gallery.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./virtual-gallery.component.scss'],
})
export class VirtualGalleryComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true })
  rendererContainer!: ElementRef<HTMLDivElement>;

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  controls!: FirstPersonControls;
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  isMouseMoving = false;
  mouseMoveTimeout: any;
  openDirections = false;
  controlsMobile!: OrbitControls;
  isMobile = false;

  animationFrameId!: number;

  objects: THREE.Mesh[] = [];
  wallBoxes: THREE.Box3[] = [];

  selectedArtwork: Artwork | null = null;

  pressedKeys = new Set<string>();

  clock = new THREE.Clock();

  ngAfterViewInit() {
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.initScene(this.isMobile);
    this.animate();

    if (!this.isMobile) {
      this.controls = new FirstPersonControls(
        this.camera,
        this.renderer.domElement
      );
      this.controls.lookSpeed = 0.05;
      this.controls.movementSpeed = 0;
      this.controls.lookVertical = true;
      this.controls.constrainVertical = true;
    }

    // --- MOBILE JOYSTICK ---
    if (this.isMobile) {
      // Δημιουργία zone για joystick
      const joystickZone = document.createElement('div');
      joystickZone.id = 'joystick';
      joystickZone.style.position = 'absolute';
      joystickZone.style.bottom = '80px';
      joystickZone.style.left = '80px';
      joystickZone.style.width = '150px';
      joystickZone.style.height = '150px';
      joystickZone.style.zIndex = '10';
      joystickZone.style.background = 'rgba(255, 255, 255, 0.05)';
      joystickZone.style.borderRadius = '50%';
      document.body.appendChild(joystickZone);

      // Δημιουργία joystick με nipplejs
      const manager = nipplejs.create({
        zone: joystickZone,
        mode: 'static',
        position: { left: '50%', top: '50%' },
        color: 'white',
        size: 100,
      });

      manager.on('move', (_evt, data) => {
        if (!data || !data.angle || !data.force) return;

        // Υπολογισμός κίνησης
        const speed = data.force * 0.05;
        const forward = Math.cos(data.angle.radian);
        const sideways = Math.sin(data.angle.radian);

        // Κίνηση κάμερας
        this.camera.position.x += sideways * speed;
        this.camera.position.z -= forward * speed;
      });
    }
  }

  initScene(isMobile: boolean) {
    this.openDirections = !isMobile;
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#111');

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 1.6, 5);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    if (isMobile) {
      // === MOBILE CONTROLS ===
      this.controlsMobile = new OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      this.controlsMobile.enablePan = false;
      this.controlsMobile.enableZoom = false;
      this.controlsMobile.minPolarAngle = Math.PI / 4; // περιορισμός κάτω
      this.controlsMobile.maxPolarAngle = Math.PI / 1.5; // περιορισμός πάνω
    } else {
      // === DESKTOP CONTROLS ===
      this.controls = new FirstPersonControls(
        this.camera,
        this.renderer.domElement
      );
      this.controls.lookSpeed = 0.05;
      this.controls.movementSpeed = 0;
      this.controls.lookVertical = true;
      this.controls.constrainVertical = true;
      this.controls.verticalMin = 1.0;
      this.controls.verticalMax = 2.0;
      this.controls.autoForward = false;
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(ambientLight);

    // Φως ταβανιού
    const ceilingLight = new THREE.PointLight(0xffffff, 20, 50);
    ceilingLight.position.set(0, 6.8, 0);
    ceilingLight.castShadow = true;
    this.scene.add(ceilingLight);

    // Ορατό φωτιστικό (λάμπα)
    const bulbGeometry = new THREE.SphereGeometry(0.15, 16, 8);
    const bulbMaterial = new THREE.MeshBasicMaterial({ color: 0xffffee });
    const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
    bulb.position.copy(ceilingLight.position);
    this.scene.add(bulb);

    const ceilingTexture = new THREE.TextureLoader().load(
      'assets/images/marble.jpg'
    );
    ceilingTexture.wrapS = THREE.RepeatWrapping;
    ceilingTexture.wrapT = THREE.RepeatWrapping;
    ceilingTexture.repeat.set(20, 20);

    const texturedMaterial = new THREE.MeshStandardMaterial({
      map: ceilingTexture,
      metalness: 0.3,
      roughness: 0.5,
    });

    const ceilingHeight = 7;
    const panelSize = 4;
    const ceilingMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      metalness: 0.2,
      roughness: 0.7,
    });

    for (let x = -16; x < 16; x += panelSize + 0.2) {
      for (let z = -16; z < 16; z += panelSize + 0.2) {
        const panel = new THREE.Mesh(
          new THREE.PlaneGeometry(panelSize, panelSize),
          texturedMaterial
        );
        panel.rotation.x = Math.PI / 2;
        panel.position.set(x, ceilingHeight, z);
        this.scene.add(panel);
      }
    }

    const trackLightPositions = [
      [-10, ceilingHeight - 0.1, -5],
      [0, ceilingHeight - 0.1, -5],
      [10, ceilingHeight - 0.1, -5],

      [-10, ceilingHeight - 0.1, 0],
      [0, ceilingHeight - 0.1, 0],
      [10, ceilingHeight - 0.1, 0],

      [-10, ceilingHeight - 0.1, 5],
      [0, ceilingHeight - 0.1, 5],
      [10, ceilingHeight - 0.1, 5],
    ];

    trackLightPositions.forEach(([x, y, z]) => {
      const barGeometry = new THREE.BoxGeometry(8, 0.05, 0.1);
      const barMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
      const bar = new THREE.Mesh(barGeometry, barMaterial);
      bar.position.set(x, y, z);
      this.scene.add(bar);

      // Φώτα πάνω στη ράγα
      for (let i = -3; i <= 3; i += 3) {
        const light = new THREE.SpotLight(0xffffff, 5, 10);
        light.decay = 1; // πιο ρεαλιστική μείωση φωτός
        light.angle = Math.PI / 5; // πιο ανοιχτή δέσμη
        light.penumbra = 0.5; // πιο μαλακές σκιές
        light.position.set(x + i, y - 0.1, z);
        light.castShadow = true;
        light.angle = Math.PI / 7;
        light.penumbra = 0.4;
        light.target.position.set(x + i, 1.5, z); // Κοιτάει προς τα κάτω
        const bulbGeo = new THREE.SphereGeometry(0.1, 8, 8);
        const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffffee });
        const bulb = new THREE.Mesh(bulbGeo, bulbMat);
        bulb.position.copy(light.position);
        this.scene.add(bulb);

        this.scene.add(light);
        this.scene.add(light.target);
      }
    });

    // Τοίχοι
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: '#FFFFF0',
      side: THREE.DoubleSide,
    });
    const wallThickness = 1;
    const wallHeight = 5;
    const wallWidth = 17;

    const frontWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallWidth, wallHeight, wallThickness),
      wallMaterial
    );
    frontWall.position.set(0, wallHeight / 2, -8.01);
    this.scene.add(frontWall);

    const rightWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallWidth, wallHeight, wallThickness),
      wallMaterial
    );
    rightWall.position.set(8.01, wallHeight / 2, 0);
    rightWall.rotation.y = -Math.PI / 2;
    this.scene.add(rightWall);

    const backWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallWidth, wallHeight, wallThickness),
      wallMaterial
    );
    backWall.position.set(0, wallHeight / 2, 8.01);
    backWall.rotation.y = Math.PI;
    this.scene.add(backWall);

    const leftWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallWidth, wallHeight, wallThickness),
      wallMaterial
    );
    leftWall.position.set(-8.01, wallHeight / 2, 0);
    leftWall.rotation.y = Math.PI / 2;
    this.scene.add(leftWall);

    // Δημιουργούμε τα bounding boxes των τοίχων για collision
    this.wallBoxes = [];
    [frontWall, rightWall, backWall, leftWall].forEach((wall) => {
      const box = new THREE.Box3().setFromObject(wall);
      this.wallBoxes.push(box);
    });

    //δαπεδο

    const marbleTexture = new THREE.TextureLoader().load(
      'assets/images/marble.jpg'
    );
    marbleTexture.wrapS = THREE.RepeatWrapping;
    marbleTexture.wrapT = THREE.RepeatWrapping;
    marbleTexture.repeat.set(16, 16);

    const floorMaterial = new THREE.MeshStandardMaterial({
      map: marbleTexture,
    });
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 16),
      floorMaterial
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    this.scene.add(floor);

    // Γλάστρες με φυτά
    this.addPlantPot(new THREE.Vector3(7, 0, 7));
    this.addPlantPot(new THREE.Vector3(-7, 0, 7));
    this.addPlantPot(new THREE.Vector3(-7, 0, -7));

    // Τοποθετούμε έργα με πραγματικές διαστάσεις και spacing
    const wallDistance = 8;
    const spacing = 1; // 1 μέτρο μεταξύ έργων

    // Front wall (Z = -wallDistance)
    this.placeWallArtworks(
      artworks.slice(0, 4),
      new THREE.Vector3(0, 1.6, -wallDistance),
      'front',
      spacing
    );

    // Right wall (X = wallDistance)
    this.placeWallArtworks(
      artworks.slice(4, 7),
      new THREE.Vector3(wallDistance, 1.6, 0),
      'right',
      spacing
    );

    // Back wall (Z = wallDistance)
    this.placeWallArtworks(
      artworks.slice(7, 10),
      new THREE.Vector3(0, 1.6, wallDistance),
      'back',
      spacing
    );

    // Left wall (X = -wallDistance)
    this.placeWallArtworks(
      artworks.slice(10),
      new THREE.Vector3(-wallDistance, 1.6, 0),
      'left',
      spacing
    );

    // Event listeners
    this.renderer.domElement.addEventListener('click', this.onClick.bind(this));
    this.renderer.domElement.addEventListener(
      'mousemove',
      this.onMouseMove.bind(this)
    );
  }

  addPlantPot(position: THREE.Vector3) {
    // Γλάστρα (καφέ κύλινδρος)
    const potGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.5, 32);
    const potMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const pot = new THREE.Mesh(potGeometry, potMaterial);
    pot.position.set(position.x, 0.25, position.z);
    this.scene.add(pot);

    // Φυτό (πράσινη σφαίρα πάνω από τη γλάστρα)
    const leavesGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
    const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves.position.set(position.x, 0.9, position.z);
    this.scene.add(leaves);
  }

  checkCollision(newPosition: THREE.Vector3): boolean {
    // Δημιουργούμε ένα κουτί γύρω από τον παίκτη (κάμερα)
    const playerBox = new THREE.Box3().setFromCenterAndSize(
      newPosition,
      new THREE.Vector3(0.5, 1.6, 0.5) // διαστάσεις "παίκτη"
    );

    // Επιστρέφει true αν υπάρχει σύγκρουση
    return this.wallBoxes.some((wallBox) => {
      const collision = wallBox.intersectsBox(playerBox);
      return collision;
    });
  }

  updateMovement(delta: number) {
    const moveVector = new THREE.Vector3();

    if (this.pressedKeys.has('w')) {
      moveVector.z -= 1;
    }
    if (this.pressedKeys.has('s')) {
      moveVector.z += 1;
    }
    if (this.pressedKeys.has('d')) {
      moveVector.x -= 1;
    }
    if (this.pressedKeys.has('a')) {
      moveVector.x += 1;
    }

    if (moveVector.length() > 0) {
      moveVector.normalize();

      const direction = new THREE.Vector3();
      this.camera.getWorldDirection(direction);
      direction.y = 0;
      direction.normalize();

      const sideDirection = new THREE.Vector3()
        .crossVectors(this.camera.up, direction)
        .normalize();

      const finalMove = new THREE.Vector3();
      finalMove.addScaledVector(direction, -moveVector.z);
      finalMove.addScaledVector(sideDirection, moveVector.x);
      finalMove.normalize();

      const speed = 5;

      const newPosition = this.camera.position
        .clone()
        .add(finalMove.multiplyScalar(speed * delta)); // κίνηση πιο γρήγορη (όσο θέλεις)

      if (!this.checkCollision(newPosition)) {
        this.camera.position.copy(newPosition);
      }
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if ('ontouchstart' in window) return;
    this.pressedKeys.add(event.key.toLowerCase());
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.pressedKeys.delete(event.key.toLowerCase());
  }

  placeWallArtworks(
    arts: Artwork[],
    wallCenter: THREE.Vector3,
    wall: 'front' | 'right' | 'back' | 'left',
    spacing: number
  ) {
    // Υπολογίζουμε συνολικό μήκος έργων + αποστάσεις για να κεντράρουμε
    const artsWidths = arts.map((art) => art.widthCm / 100); // σε μέτρα
    const totalWidth =
      artsWidths.reduce((acc, w) => acc + w, 0) + spacing * (arts.length - 1);

    // Αρχικό X ή Z για τοποθέτηση (ανάλογα τοίχου)
    let startPos = -totalWidth / 2;

    arts.forEach((art, i) => {
      const width = art.widthCm / 100;
      const height = art.heightCm / 100;

      const texture = new THREE.TextureLoader().load(art.src, (t) => {
        t.minFilter = THREE.LinearFilter;
        t.magFilter = THREE.LinearFilter;
        t.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      });

      const material = new THREE.MeshBasicMaterial({ map: texture });
      const geometry = new THREE.PlaneGeometry(width, height);
      const mesh = new THREE.Mesh(geometry, material);

      // Θέση και περιστροφή ανά τοίχο
      switch (wall) {
        case 'front':
          mesh.position.set(
            wallCenter.x + startPos + width / 2,
            wallCenter.y,
            wallCenter.z
          );
          mesh.rotation.y = 0;
          break;
        case 'right':
          mesh.position.set(
            wallCenter.x,
            wallCenter.y,
            wallCenter.z + startPos + width / 2
          );
          mesh.rotation.y = -Math.PI / 2;
          break;
        case 'back':
          mesh.position.set(
            wallCenter.x - (startPos + width / 2),
            wallCenter.y,
            wallCenter.z
          );
          mesh.rotation.y = Math.PI;
          break;
        case 'left':
          mesh.position.set(
            wallCenter.x,
            wallCenter.y,
            wallCenter.z - (startPos + width / 2)
          );
          mesh.rotation.y = Math.PI / 2;
          break;
      }

      // Σύνδεση artwork
      (mesh as any).artwork = art;
      this.objects.push(mesh);
      this.scene.add(mesh);

      // Φωτισμός πάνω από το έργο
      const light = new THREE.SpotLight(0xffffff, 1.5, 5);
      light.position.set(
        mesh.position.x,
        mesh.position.y + height / 2 + 1,
        mesh.position.z
      );
      light.angle = Math.PI / 6;
      light.penumbra = 0.3;
      light.castShadow = true;

      light.target.position.set(
        mesh.position.x,
        mesh.position.y,
        mesh.position.z
      );
      this.scene.add(light.target);

      this.scene.add(light);

      startPos += width + spacing;
    });
  }

  onClick(event: MouseEvent) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.objects);

    if (intersects.length > 0) {
      const mesh = intersects[0].object as any;
      this.selectedArtwork = mesh.artwork || null;
    }
  }

  toggleInfo() {
    this.selectedArtwork = null;
  }

  closeDirectionModal() {
    this.openDirections = !this.openDirections;
  }

  resetCamera() {
    this.camera.position.set(0, 1.6, 5);
    this.camera.lookAt(0, 1.6, 0);
    this.controls?.update(0);
  }

  onMouseMove(event: MouseEvent) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.objects);

    this.renderer.domElement.style.cursor =
      intersects.length > 0 ? 'pointer' : 'default';

    this.isMouseMoving = true;

    if (this.mouseMoveTimeout) {
      clearTimeout(this.mouseMoveTimeout);
    }

    this.mouseMoveTimeout = setTimeout(() => {
      this.isMouseMoving = false;
    }, 300);
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();

    // Desktop
    if (this.controls) {
      this.updateMovement(delta);
      if (this.isMouseMoving) this.controls.update(delta);
    }

    // Mobile
    if (this.controlsMobile) {
      this.controlsMobile.update();
    }

    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:resize')
  onResize() {
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);

    // Only call handleResize if desktop controls exist
    if (this.controls) {
      this.controls.handleResize();
    }
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
    this.renderer.domElement.removeEventListener('click', this.onClick);
    this.renderer.domElement.removeEventListener('mousemove', this.onMouseMove);
  }
}

import { CommonModule } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component } from '@angular/core';
import { Artwork, artworks } from '../../artworks';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  artworks: Artwork[] = artworks;

  categories = ['All', 'Abstract', 'Digital Art', 'Watercolors'];
  filteredArtworks = this.artworks;

  filterCategory(category: string) {
    this.filteredArtworks =
      category === 'All'
        ? this.artworks
        : this.artworks.filter((art) => art.category === category);
  }

  selectedArtwork: any = null;

  openModal(artwork: any) {
    this.selectedArtwork = artwork;
  }

  closeModal() {
    this.selectedArtwork = null;
  }
}

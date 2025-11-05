var Ew=Object.defineProperty,Cw=Object.defineProperties;var Tw=Object.getOwnPropertyDescriptors;var fv=Object.getOwnPropertySymbols;var Dw=Object.prototype.hasOwnProperty,Aw=Object.prototype.propertyIsEnumerable;var pv=(n,e,t)=>e in n?Ew(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ve=(n,e)=>{for(var t in e||={})Dw.call(e,t)&&pv(n,t,e[t]);if(fv)for(var t of fv(e))Aw.call(e,t)&&pv(n,t,e[t]);return n},Pt=(n,e)=>Cw(n,Tw(e));var Rs=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var mv=null;var Mh=1,gv=Symbol("SIGNAL");function ut(n){let e=mv;return mv=n,e}var vv={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Iw(n){if(!(bh(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Mh)){if(!n.producerMustRecompute(n)&&!Sh(n)){n.dirty=!1,n.lastCleanEpoch=Mh;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Mh}}function yv(n){return n&&(n.nextProducerIndex=0),ut(n)}function _v(n,e){if(ut(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(bh(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)wh(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Sh(n){Gc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Iw(t),i!==t.version))return!0}return!1}function xv(n){if(Gc(n),bh(n))for(let e=0;e<n.producerNode.length;e++)wh(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function wh(n,e){if(Rw(n),Gc(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)wh(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Gc(r),r.producerIndexOfThis[i]=e}}function bh(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Gc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Rw(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Pw(){throw new Error}var Nw=Pw;function Mv(n){Nw=n}function Ue(n){return typeof n=="function"}function Ps(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Wc=Ps(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function ca(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var kt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ue(i))try{i()}catch(s){e=s instanceof Wc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Sv(s)}catch(o){e=e??[],o instanceof Wc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Wc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Sv(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&ca(t,e)}remove(e){let{_finalizers:t}=this;t&&ca(t,e),e instanceof n&&e._removeParent(this)}};kt.EMPTY=(()=>{let n=new kt;return n.closed=!0,n})();var Eh=kt.EMPTY;function jc(n){return n instanceof kt||n&&"closed"in n&&Ue(n.remove)&&Ue(n.add)&&Ue(n.unsubscribe)}function Sv(n){Ue(n)?n():n.unsubscribe()}var Kn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ns={setTimeout(n,e,...t){let{delegate:i}=Ns;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Ns;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function $c(n){Ns.setTimeout(()=>{let{onUnhandledError:e}=Kn;if(e)e(n);else throw n})}function la(){}var wv=Ch("C",void 0,void 0);function bv(n){return Ch("E",void 0,n)}function Ev(n){return Ch("N",n,void 0)}function Ch(n,e,t){return{kind:n,value:e,error:t}}var Wr=null;function Os(n){if(Kn.useDeprecatedSynchronousErrorHandling){let e=!Wr;if(e&&(Wr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Wr;if(Wr=null,t)throw i}}else n()}function Cv(n){Kn.useDeprecatedSynchronousErrorHandling&&Wr&&(Wr.errorThrown=!0,Wr.error=n)}var jr=class extends kt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,jc(e)&&e.add(this)):this.destination=Fw}static create(e,t,i){return new Ls(e,t,i)}next(e){this.isStopped?Dh(Ev(e),this):this._next(e)}error(e){this.isStopped?Dh(bv(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Dh(wv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Ow=Function.prototype.bind;function Th(n,e){return Ow.call(n,e)}var Ah=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){qc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){qc(i)}else qc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){qc(t)}}},Ls=class extends jr{constructor(e,t,i){super();let r;if(Ue(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Kn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Th(e.next,s),error:e.error&&Th(e.error,s),complete:e.complete&&Th(e.complete,s)}):r=e}this.destination=new Ah(r)}};function qc(n){Kn.useDeprecatedSynchronousErrorHandling?Cv(n):$c(n)}function Lw(n){throw n}function Dh(n,e){let{onStoppedNotification:t}=Kn;t&&Ns.setTimeout(()=>t(n,e))}var Fw={closed:!0,next:la,error:Lw,complete:la};var Fs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Mn(n){return n}function Ih(...n){return Rh(n)}function Rh(n){return n.length===0?Mn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var vt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=Uw(t)?t:new Ls(t,i,r);return Os(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Tv(i),new i((r,s)=>{let o=new Ls({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Fs](){return this}pipe(...t){return Rh(t)(this)}toPromise(t){return t=Tv(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Tv(n){var e;return(e=n??Kn.Promise)!==null&&e!==void 0?e:Promise}function kw(n){return n&&Ue(n.next)&&Ue(n.error)&&Ue(n.complete)}function Uw(n){return n&&n instanceof jr||kw(n)&&jc(n)}function Ph(n){return Ue(n?.lift)}function it(n){return e=>{if(Ph(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function rt(n,e,t,i,r){return new Nh(n,e,t,i,r)}var Nh=class extends jr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function ks(){return it((n,e)=>{let t=null;n._refCount++;let i=rt(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Us=class extends vt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Ph(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new kt;let t=this.getSubject();e.add(this.source.subscribe(rt(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=kt.EMPTY)}return e}refCount(){return ks()(this)}};var Dv=Ps(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var nn=(()=>{class n extends vt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Xc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Dv}next(t){Os(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Os(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Os(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Eh:(this.currentObservers=null,s.push(t),new kt(()=>{this.currentObservers=null,ca(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new vt;return t.source=this,t}}return n.create=(e,t)=>new Xc(e,t),n})(),Xc=class extends nn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Eh}};var Jt=class extends nn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Sn=new vt(n=>n.complete());function Av(n){return n&&Ue(n.schedule)}function Iv(n){return n[n.length-1]}function Rv(n){return Ue(Iv(n))?n.pop():void 0}function or(n){return Av(Iv(n))?n.pop():void 0}function Nv(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Pv(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function $r(n){return this instanceof $r?(this.v=n,this):new $r(n)}function Ov(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(g){return Promise.resolve(g).then(p,d)}}function a(p,g){i[p]&&(r[p]=function(y){return new Promise(function(m,f){s.push([p,y,m,f])>1||c(p,y)})},g&&(r[p]=g(r[p])))}function c(p,g){try{l(i[p](g))}catch(y){h(s[0][3],y)}}function l(p){p.value instanceof $r?Promise.resolve(p.value.v).then(u,d):h(s[0][2],p)}function u(p){c("next",p)}function d(p){c("throw",p)}function h(p,g){p(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Lv(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Pv=="function"?Pv(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Yc=n=>n&&typeof n.length=="number"&&typeof n!="function";function Zc(n){return Ue(n?.then)}function Kc(n){return Ue(n[Fs])}function Jc(n){return Symbol.asyncIterator&&Ue(n?.[Symbol.asyncIterator])}function Qc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Bw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var el=Bw();function tl(n){return Ue(n?.[el])}function nl(n){return Ov(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield $r(t.read());if(r)return yield $r(void 0);yield yield $r(i)}}finally{t.releaseLock()}})}function il(n){return Ue(n?.getReader)}function Gt(n){if(n instanceof vt)return n;if(n!=null){if(Kc(n))return Vw(n);if(Yc(n))return Hw(n);if(Zc(n))return zw(n);if(Jc(n))return Fv(n);if(tl(n))return Gw(n);if(il(n))return Ww(n)}throw Qc(n)}function Vw(n){return new vt(e=>{let t=n[Fs]();if(Ue(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Hw(n){return new vt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function zw(n){return new vt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,$c)})}function Gw(n){return new vt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Fv(n){return new vt(e=>{jw(n,e).catch(t=>e.error(t))})}function Ww(n){return Fv(nl(n))}function jw(n,e){var t,i,r,s;return Nv(this,void 0,void 0,function*(){try{for(t=Lv(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function mn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function rl(n,e=0){return it((t,i)=>{t.subscribe(rt(i,r=>mn(i,n,()=>i.next(r),e),()=>mn(i,n,()=>i.complete(),e),r=>mn(i,n,()=>i.error(r),e)))})}function sl(n,e=0){return it((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function kv(n,e){return Gt(n).pipe(sl(e),rl(e))}function Uv(n,e){return Gt(n).pipe(sl(e),rl(e))}function Bv(n,e){return new vt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Vv(n,e){return new vt(t=>{let i;return mn(t,e,()=>{i=n[el](),mn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ue(i?.return)&&i.return()})}function ol(n,e){if(!n)throw new Error("Iterable cannot be null");return new vt(t=>{mn(t,e,()=>{let i=n[Symbol.asyncIterator]();mn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Hv(n,e){return ol(nl(n),e)}function zv(n,e){if(n!=null){if(Kc(n))return kv(n,e);if(Yc(n))return Bv(n,e);if(Zc(n))return Uv(n,e);if(Jc(n))return ol(n,e);if(tl(n))return Vv(n,e);if(il(n))return Hv(n,e)}throw Qc(n)}function Nt(n,e){return e?zv(n,e):Gt(n)}function Ae(...n){let e=or(n);return Nt(n,e)}function Bs(n,e){let t=Ue(n)?n:()=>n,i=r=>r.error(t());return new vt(e?r=>e.schedule(i,0,r):i)}function Oh(n){return!!n&&(n instanceof vt||Ue(n.lift)&&Ue(n.subscribe))}var Fi=Ps(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Je(n,e){return it((t,i)=>{let r=0;t.subscribe(rt(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:$w}=Array;function qw(n,e){return $w(e)?n(...e):n(e)}function Gv(n){return Je(e=>qw(n,e))}var{isArray:Xw}=Array,{getPrototypeOf:Yw,prototype:Zw,keys:Kw}=Object;function Wv(n){if(n.length===1){let e=n[0];if(Xw(e))return{args:e,keys:null};if(Jw(e)){let t=Kw(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function Jw(n){return n&&typeof n=="object"&&Yw(n)===Zw}function jv(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function ua(...n){let e=or(n),t=Rv(n),{args:i,keys:r}=Wv(n);if(i.length===0)return Nt([],e);let s=new vt(Qw(i,e,r?o=>jv(r,o):Mn));return t?s.pipe(Gv(t)):s}function Qw(n,e,t=Mn){return i=>{$v(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)$v(e,()=>{let l=Nt(n[c],e),u=!1;l.subscribe(rt(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function $v(n,e,t){n?mn(t,n,e):e()}function qv(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},p=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;Gt(t(y,u++)).subscribe(rt(e,f=>{r?.(f),s?p(f):e.next(f)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let f=c.shift();o?mn(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(rt(e,p,()=>{d=!0,h()})),()=>{a?.()}}function Ut(n,e,t=1/0){return Ue(e)?Ut((i,r)=>Je((s,o)=>e(i,s,r,o))(Gt(n(i,r))),t):(typeof e=="number"&&(t=e),it((i,r)=>qv(i,r,n,t)))}function ar(n=1/0){return Ut(Mn,n)}function Xv(){return ar(1)}function Vs(...n){return Xv()(Nt(n,or(n)))}function al(n){return new vt(e=>{Gt(n()).subscribe(e)})}function Un(n,e){return it((t,i)=>{let r=0;t.subscribe(rt(i,s=>n.call(e,s,r++)&&i.next(s)))})}function cr(n){return it((e,t)=>{let i=null,r=!1,s;i=e.subscribe(rt(t,void 0,void 0,o=>{s=Gt(n(o,cr(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Yv(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(rt(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function qr(n,e){return Ue(e)?Ut(n,e,1):Ut(n,1)}function lr(n){return it((e,t)=>{let i=!1;e.subscribe(rt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ki(n){return n<=0?()=>Sn:it((e,t)=>{let i=0;e.subscribe(rt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Lh(n){return Je(()=>n)}function cl(n=eb){return it((e,t)=>{let i=!1;e.subscribe(rt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function eb(){return new Fi}function da(n){return it((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function pi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Un((r,s)=>n(r,s,i)):Mn,ki(1),t?lr(e):cl(()=>new Fi))}function Hs(n){return n<=0?()=>Sn:it((e,t)=>{let i=[];e.subscribe(rt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Fh(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Un((r,s)=>n(r,s,i)):Mn,Hs(1),t?lr(e):cl(()=>new Fi))}function kh(n,e){return it(Yv(n,e,arguments.length>=2,!0))}function Uh(...n){let e=or(n);return it((t,i)=>{(e?Vs(n,t,e):Vs(n,t)).subscribe(i)})}function Bn(n,e){return it((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(rt(i,c=>{r?.unsubscribe();let l=0,u=s++;Gt(n(c,u)).subscribe(r=rt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Bh(n){return it((e,t)=>{Gt(n).subscribe(rt(t,()=>t.complete(),la)),!t.closed&&e.subscribe(t)})}function Qt(n,e,t){let i=Ue(n)||e||t?{next:n,error:e,complete:t}:n;return i?it((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(rt(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Mn}var Fy="https://g.co/ng/security#xss",De=class extends Error{constructor(e,t){super($f(e,t)),this.code=e}};function $f(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function ba(n){return{toString:n}.toString()}var ll="__parameters__";function tb(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function ky(n,e,t){return ba(()=>{let i=tb(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(ll)?c[ll]:Object.defineProperty(c,ll,{value:[]})[ll];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}var fa=globalThis;function xt(n){for(let e in n)if(n[e]===xt)return e;throw Error("Could not find renamed property on target object.")}function un(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(un).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Zv(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var nb=xt({__forward_ref__:xt});function Uy(n){return n.__forward_ref__=Uy,n.toString=function(){return un(this())},n}function Hn(n){return By(n)?n():n}function By(n){return typeof n=="function"&&n.hasOwnProperty(nb)&&n.__forward_ref__===Uy}function Ie(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Ea(n){return{providers:n.providers||[],imports:n.imports||[]}}function Ul(n){return Kv(n,Hy)||Kv(n,zy)}function Vy(n){return Ul(n)!==null}function Kv(n,e){return n.hasOwnProperty(e)?n[e]:null}function ib(n){let e=n&&(n[Hy]||n[zy]);return e||null}function Jv(n){return n&&(n.hasOwnProperty(Qv)||n.hasOwnProperty(rb))?n[Qv]:null}var Hy=xt({\u0275prov:xt}),Qv=xt({\u0275inj:xt}),zy=xt({ngInjectableDef:xt}),rb=xt({ngInjectorDef:xt}),Ve=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ie({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Gy(n){return n&&!!n.\u0275providers}var sb=xt({\u0275cmp:xt}),ob=xt({\u0275dir:xt}),ab=xt({\u0275pipe:xt}),cb=xt({\u0275mod:xt}),yl=xt({\u0275fac:xt}),ha=xt({__NG_ELEMENT_ID__:xt}),ey=xt({__NG_ENV_ID__:xt});function Bl(n){return typeof n=="string"?n:n==null?"":String(n)}function lb(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Bl(n)}function ub(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new De(-200,n)}function qf(n,e){throw new De(-201,!1)}var qe=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(qe||{}),Qh;function Wy(){return Qh}function Vn(n){let e=Qh;return Qh=n,e}function jy(n,e,t){let i=Ul(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&qe.Optional)return null;if(e!==void 0)return e;qf(n,"Injector")}var db={},pa=db,ef="__NG_DI_FLAG__",_l="ngTempTokenPath",hb="ngTokenPath",fb=/\n/gm,pb="\u0275",ty="__source",$s;function mb(){return $s}function ur(n){let e=$s;return $s=n,e}function gb(n,e=qe.Default){if($s===void 0)throw new De(-203,!1);return $s===null?jy(n,void 0,e):$s.get(n,e&qe.Optional?null:void 0,e)}function Be(n,e=qe.Default){return(Wy()||gb)(Hn(n),e)}function te(n,e=qe.Default){return Be(n,Vl(e))}function Vl(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function tf(n){let e=[];for(let t=0;t<n.length;t++){let i=Hn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new De(900,!1);let r,s=qe.Default;for(let o=0;o<i.length;o++){let a=i[o],c=vb(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Be(r,s))}else e.push(Be(i))}return e}function $y(n,e){return n[ef]=e,n.prototype[ef]=e,n}function vb(n){return n[ef]}function yb(n,e,t,i){let r=n[_l];throw e[ty]&&r.unshift(e[ty]),n.message=_b(`
`+n.message,r,t,i),n[hb]=r,n[_l]=null,n}function _b(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==pb?n.slice(2):n;let r=un(e);if(Array.isArray(e))r=e.map(un).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):un(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(fb,`
  `)}`}var Hl=$y(ky("Optional"),8);var Xf=$y(ky("SkipSelf"),4);function Xs(n,e){let t=n.hasOwnProperty(yl);return t?n[yl]:null}function xb(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function Mb(n){return n.flat(Number.POSITIVE_INFINITY)}function Yf(n,e){n.forEach(t=>Array.isArray(t)?Yf(t,e):e(t))}function qy(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function xl(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Sb(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function wb(n,e,t){let i=Ca(n,e);return i>=0?n[i|1]=t:(i=~i,Sb(n,i,e,t)),i}function Vh(n,e){let t=Ca(n,e);if(t>=0)return n[t|1]}function Ca(n,e){return bb(n,e,1)}function bb(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var ma={},Qn=[],Ys=new Ve(""),Xy=new Ve("",-1),Yy=new Ve(""),Ml=class{get(e,t=pa){if(t===pa){let i=new Error(`NullInjectorError: No provider for ${un(e)}!`);throw i.name="NullInjectorError",i}return t}},Zy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Zy||{}),vi=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(vi||{}),Zs=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Zs||{});function Eb(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function nf(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Cb(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function Ky(n){return n===3||n===4||n===6}function Cb(n){return n.charCodeAt(0)===64}function Zf(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?ny(n,t,r,null,e[++i]):ny(n,t,r,null,null))}}return n}function ny(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Jy="ng-template";function Tb(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Eb(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Kf(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Kf(n){return n.type===4&&n.value!==Jy}function Db(n,e,t){let i=n.type===4&&!t?Jy:n.value;return e===i}function Ab(n,e,t){let i=4,r=n.attrs,s=r!==null?Pb(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Jn(i)&&!Jn(c))return!1;if(o&&Jn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Db(n,c,t)||c===""&&e.length===1){if(Jn(i))return!1;o=!0}}else if(i&8){if(r===null||!Tb(n,r,c,t)){if(Jn(i))return!1;o=!0}}else{let l=e[++a],u=Ib(c,r,Kf(n),t);if(u===-1){if(Jn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Jn(i))return!1;o=!0}}}}return Jn(i)||o}function Jn(n){return(n&1)===0}function Ib(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Nb(e,n)}function Rb(n,e,t=!1){for(let i=0;i<e.length;i++)if(Ab(n,e[i],t))return!0;return!1}function Pb(n){for(let e=0;e<n.length;e++){let t=n[e];if(Ky(t))return e}return n.length}function Nb(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function iy(n,e){return n?":not("+e.trim()+")":e}function Ob(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Jn(o)&&(e+=iy(s,r),r=""),i=o,s=s||!Jn(i);t++}return r!==""&&(e+=iy(s,r)),e}function Lb(n){return n.map(Ob).join(",")}function Fb(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Jn(r))break;r=s}i++}return{attrs:e,classes:t}}function jt(n){return ba(()=>{let e=i_(n),t=Pt(ve({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Zy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||vi.Emulated,styles:n.styles||Qn,_:null,schemas:n.schemas||null,tView:null,id:""});r_(t);let i=n.dependencies;return t.directiveDefs=sy(i,!1),t.pipeDefs=sy(i,!0),t.id=Bb(t),t})}function kb(n){return fr(n)||Qy(n)}function Ub(n){return n!==null}function Ta(n){return ba(()=>({type:n.type,bootstrap:n.bootstrap||Qn,declarations:n.declarations||Qn,imports:n.imports||Qn,exports:n.exports||Qn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function ry(n,e){if(n==null)return ma;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Zs.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Zs.None?[i,a]:i,e[s]=o):t[s]=i}return t}function is(n){return ba(()=>{let e=i_(n);return r_(e),e})}function fr(n){return n[sb]||null}function Qy(n){return n[ob]||null}function e_(n){return n[ab]||null}function t_(n){let e=fr(n)||Qy(n)||e_(n);return e!==null?e.standalone:!1}function n_(n,e){let t=n[cb]||null;if(!t&&e===!0)throw new Error(`Type ${un(n)} does not have '\u0275mod' property.`);return t}function i_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||ma,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||Qn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:ry(n.inputs,e),outputs:ry(n.outputs),debugInfo:null}}function r_(n){n.features?.forEach(e=>e(n))}function sy(n,e){if(!n)return null;let t=e?e_:kb;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(Ub)}function Bb(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function zl(n){return{\u0275providers:n}}function Vb(...n){return{\u0275providers:s_(!0,n),\u0275fromNgModule:!0}}function s_(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Yf(e,o=>{let a=o;rf(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&o_(r,s),t}function o_(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Jf(r,s=>{e(s,i)})}}function rf(n,e,t,i){if(n=Hn(n),!n)return!1;let r=null,s=Jv(n),o=!s&&fr(n);if(!s&&!o){let c=n.ngModule;if(s=Jv(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)rf(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Yf(s.imports,u=>{rf(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&o_(l,e)}if(!a){let l=Xs(r)||(()=>new r);e({provide:r,useFactory:l,deps:Qn},r),e({provide:Yy,useValue:r,multi:!0},r),e({provide:Ys,useValue:()=>Be(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Jf(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Jf(n,e){for(let t of n)Gy(t)&&(t=t.\u0275providers),Array.isArray(t)?Jf(t,e):e(t)}var Hb=xt({provide:String,useValue:xt});function a_(n){return n!==null&&typeof n=="object"&&Hb in n}function zb(n){return!!(n&&n.useExisting)}function Gb(n){return!!(n&&n.useFactory)}function sf(n){return typeof n=="function"}var Gl=new Ve(""),hl={},Wb={},Hh;function Qf(){return Hh===void 0&&(Hh=new Ml),Hh}var gn=class{},ga=class extends gn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,af(e,o=>this.processProvider(o)),this.records.set(Xy,zs(void 0,this)),r.has("environment")&&this.records.set(gn,zs(void 0,this));let s=this.records.get(Gl);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Yy,Qn,qe.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=ut(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ut(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=ur(this),i=Vn(void 0),r;try{return e()}finally{ur(t),Vn(i)}}get(e,t=pa,i=qe.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(ey))return e[ey](this);i=Vl(i);let r,s=ur(this),o=Vn(void 0);try{if(!(i&qe.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=Zb(e)&&Ul(e);l&&this.injectableDefInScope(l)?c=zs(of(e),hl):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&qe.Self?Qf():this.parent;return t=i&qe.Optional&&t===pa?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[_l]=a[_l]||[]).unshift(un(e)),s)throw a;return yb(a,e,"R3InjectorError",this.source)}else throw a}finally{Vn(o),ur(s)}}resolveInjectorInitializers(){let e=ut(null),t=ur(this),i=Vn(void 0),r;try{let s=this.get(Ys,Qn,qe.Self);for(let o of s)o()}finally{ur(t),Vn(i),ut(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(un(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new De(205,!1)}processProvider(e){e=Hn(e);let t=sf(e)?e:Hn(e&&e.provide),i=$b(e);if(!sf(e)&&e.multi===!0){let r=this.records.get(t);r||(r=zs(void 0,hl,!0),r.factory=()=>tf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=ut(null);try{return t.value===hl&&(t.value=Wb,t.value=t.factory()),typeof t.value=="object"&&t.value&&Yb(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ut(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Hn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function of(n){let e=Ul(n),t=e!==null?e.factory:Xs(n);if(t!==null)return t;if(n instanceof Ve)throw new De(204,!1);if(n instanceof Function)return jb(n);throw new De(204,!1)}function jb(n){if(n.length>0)throw new De(204,!1);let t=ib(n);return t!==null?()=>t.factory(n):()=>new n}function $b(n){if(a_(n))return zs(void 0,n.useValue);{let e=qb(n);return zs(e,hl)}}function qb(n,e,t){let i;if(sf(n)){let r=Hn(n);return Xs(r)||of(r)}else if(a_(n))i=()=>Hn(n.useValue);else if(Gb(n))i=()=>n.useFactory(...tf(n.deps||[]));else if(zb(n))i=()=>Be(Hn(n.useExisting));else{let r=Hn(n&&(n.useClass||n.provide));if(Xb(n))i=()=>new r(...tf(n.deps));else return Xs(r)||of(r)}return i}function zs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Xb(n){return!!n.deps}function Yb(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Zb(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ve}function af(n,e){for(let t of n)Array.isArray(t)?af(t,e):t&&Gy(t)?af(t.\u0275providers,e):e(t)}function ni(n,e){n instanceof ga&&n.assertNotDestroyed();let t,i=ur(n),r=Vn(void 0);try{return e()}finally{ur(i),Vn(r)}}function c_(){return Wy()!==void 0||mb()!=null}function Kb(n){if(!c_())throw new De(-203,!1)}function Jb(n){return typeof n=="function"}var Vi=0,Xe=1,Le=2,rn=3,ei=4,ii=5,Sl=6,va=7,ti=8,Ks=9,yi=10,Wt=11,ya=12,oy=13,so=14,_i=15,Yr=16,Gs=17,Ui=18,Wl=19,l_=20,dr=21,zh=22,Zr=23,pr=25,u_=1;var Kr=7,wl=8,Js=9,wn=10,bl=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(bl||{});function hr(n){return Array.isArray(n)&&typeof n[u_]=="object"}function Hi(n){return Array.isArray(n)&&n[u_]===!0}function d_(n){return(n.flags&4)!==0}function jl(n){return n.componentOffset>-1}function ep(n){return(n.flags&1)===1}function Da(n){return!!n.template}function cf(n){return(n[Le]&512)!==0}var lf=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function h_(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function oo(){return f_}function f_(n){return n.type.prototype.ngOnChanges&&(n.setInput=eE),Qb}oo.ngInherit=!0;function Qb(){let n=m_(this),e=n?.current;if(e){let t=n.previous;if(t===ma)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function eE(n,e,t,i,r){let s=this.declaredInputs[i],o=m_(n)||tE(n,{previous:ma,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new lf(l&&l.currentValue,t,c===ma),h_(n,e,r,t)}var p_="__ngSimpleChanges__";function m_(n){return n[p_]||null}function tE(n,e){return n[p_]=e}var ay=null;var mi=function(n,e,t){ay?.(n,e,t)},nE="svg",iE="math";function xi(n){for(;Array.isArray(n);)n=n[Vi];return n}function g_(n,e){return xi(e[n])}function zn(n,e){return xi(e[n.index])}function v_(n,e){return n.data[e]}function gr(n,e){let t=e[n];return hr(t)?t:t[Vi]}function rE(n){return(n[Le]&4)===4}function tp(n){return(n[Le]&128)===128}function sE(n){return Hi(n[rn])}function El(n,e){return e==null?null:n[e]}function y_(n){n[Gs]=0}function oE(n){n[Le]&1024||(n[Le]|=1024,tp(n)&&$l(n))}function aE(n,e){for(;n>0;)e=e[so],n--;return e}function _a(n){return!!(n[Le]&9216||n[Zr]?.dirty)}function uf(n){n[yi].changeDetectionScheduler?.notify(7),n[Le]&64&&(n[Le]|=1024),_a(n)&&$l(n)}function $l(n){n[yi].changeDetectionScheduler?.notify(0);let e=xa(n);for(;e!==null&&!(e[Le]&8192||(e[Le]|=8192,!tp(e)));)e=xa(e)}function __(n,e){if((n[Le]&256)===256)throw new De(911,!1);n[dr]===null&&(n[dr]=[]),n[dr].push(e)}function cE(n,e){if(n[dr]===null)return;let t=n[dr].indexOf(e);t!==-1&&n[dr].splice(t,1)}function xa(n){let e=n[rn];return Hi(e)?e[rn]:e}var Ye={lFrame:D_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var x_=!1;function lE(){return Ye.lFrame.elementDepthCount}function uE(){Ye.lFrame.elementDepthCount++}function dE(){Ye.lFrame.elementDepthCount--}function M_(){return Ye.bindingsEnabled}function hE(){return Ye.skipHydrationRootTNode!==null}function fE(n){return Ye.skipHydrationRootTNode===n}function pE(){Ye.skipHydrationRootTNode=null}function yt(){return Ye.lFrame.lView}function bn(){return Ye.lFrame.tView}function En(n){return Ye.lFrame.contextLView=n,n[ti]}function Cn(n){return Ye.lFrame.contextLView=null,n}function vn(){let n=S_();for(;n!==null&&n.type===64;)n=n.parent;return n}function S_(){return Ye.lFrame.currentTNode}function mE(){let n=Ye.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Aa(n,e){let t=Ye.lFrame;t.currentTNode=n,t.isParent=e}function w_(){return Ye.lFrame.isParent}function gE(){Ye.lFrame.isParent=!1}function b_(){return x_}function cy(n){x_=n}function vE(){let n=Ye.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function yE(n){return Ye.lFrame.bindingIndex=n}function np(){return Ye.lFrame.bindingIndex++}function _E(n){let e=Ye.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function xE(){return Ye.lFrame.inI18n}function ME(n,e){let t=Ye.lFrame;t.bindingIndex=t.bindingRootIndex=n,df(e)}function SE(){return Ye.lFrame.currentDirectiveIndex}function df(n){Ye.lFrame.currentDirectiveIndex=n}function wE(n){let e=Ye.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function E_(){return Ye.lFrame.currentQueryIndex}function ip(n){Ye.lFrame.currentQueryIndex=n}function bE(n){let e=n[Xe];return e.type===2?e.declTNode:e.type===1?n[ii]:null}function C_(n,e,t){if(t&qe.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&qe.Host);)if(r=bE(s),r===null||(s=s[so],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Ye.lFrame=T_();return i.currentTNode=e,i.lView=n,!0}function rp(n){let e=T_(),t=n[Xe];Ye.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function T_(){let n=Ye.lFrame,e=n===null?null:n.child;return e===null?D_(n):e}function D_(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function A_(){let n=Ye.lFrame;return Ye.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var I_=A_;function sp(){let n=A_();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function EE(n){return(Ye.lFrame.contextLView=aE(n,Ye.lFrame.contextLView))[ti]}function ao(){return Ye.lFrame.selectedIndex}function Jr(n){Ye.lFrame.selectedIndex=n}function op(){let n=Ye.lFrame;return v_(n.tView,n.selectedIndex)}function CE(){return Ye.lFrame.currentNamespace}var R_=!0;function ap(){return R_}function cp(n){R_=n}function TE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=f_(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function lp(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function fl(n,e,t){P_(n,e,3,t)}function pl(n,e,t,i){(n[Le]&3)===t&&P_(n,e,t,i)}function Gh(n,e){let t=n[Le];(t&3)===e&&(t&=16383,t+=1,n[Le]=t)}function P_(n,e,t,i){let r=i!==void 0?n[Gs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Gs]+=65536),(a<s||s==-1)&&(DE(n,t,e,c),n[Gs]=(n[Gs]&4294901760)+c+2),c++}function ly(n,e){mi(4,n,e);let t=ut(null);try{e.call(n)}finally{ut(t),mi(5,n,e)}}function DE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Le]>>14<n[Gs]>>16&&(n[Le]&3)===e&&(n[Le]+=16384,ly(a,s)):ly(a,s)}var qs=-1,Ma=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function AE(n){return n instanceof Ma}function IE(n){return(n.flags&8)!==0}function RE(n){return(n.flags&16)!==0}function N_(n){return n!==qs}function Cl(n){return n&32767}function PE(n){return n>>16}function Tl(n,e){let t=PE(n),i=e;for(;t>0;)i=i[so],t--;return i}var hf=!0;function uy(n){let e=hf;return hf=n,e}var NE=256,O_=NE-1,L_=5,OE=0,gi={};function LE(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ha)&&(i=t[ha]),i==null&&(i=t[ha]=OE++);let r=i&O_,s=1<<r;e.data[n+(r>>L_)]|=s}function F_(n,e){let t=k_(n,e);if(t!==-1)return t;let i=e[Xe];i.firstCreatePass&&(n.injectorIndex=e.length,Wh(i.data,n),Wh(e,null),Wh(i.blueprint,null));let r=up(n,e),s=n.injectorIndex;if(N_(r)){let o=Cl(r),a=Tl(r,e),c=a[Xe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Wh(n,e){n.push(0,0,0,0,0,0,0,0,e)}function k_(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function up(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=z_(r),i===null)return qs;if(t++,r=r[so],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return qs}function FE(n,e,t){LE(n,e,t)}function kE(n,e){if(e==="class")return n.classes;if(e==="style")return n.styles;let t=n.attrs;if(t){let i=t.length,r=0;for(;r<i;){let s=t[r];if(Ky(s))break;if(s===0)r=r+2;else if(typeof s=="number")for(r++;r<i&&typeof t[r]=="string";)r++;else{if(s===e)return t[r+1];r=r+2}}}return null}function U_(n,e,t){if(t&qe.Optional||n!==void 0)return n;qf(e,"NodeInjector")}function B_(n,e,t,i){if(t&qe.Optional&&i===void 0&&(i=null),!(t&(qe.Self|qe.Host))){let r=n[Ks],s=Vn(void 0);try{return r?r.get(e,i,t&qe.Optional):jy(e,i,t&qe.Optional)}finally{Vn(s)}}return U_(i,e,t)}function V_(n,e,t,i=qe.Default,r){if(n!==null){if(e[Le]&2048&&!(i&qe.Self)){let o=HE(n,e,t,i,gi);if(o!==gi)return o}let s=H_(n,e,t,i,gi);if(s!==gi)return s}return B_(e,t,i,r)}function H_(n,e,t,i,r){let s=BE(t);if(typeof s=="function"){if(!C_(e,n,i))return i&qe.Host?U_(r,t,i):B_(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&qe.Optional))qf(t);else return o}finally{I_()}}else if(typeof s=="number"){let o=null,a=k_(n,e),c=qs,l=i&qe.Host?e[_i][ii]:null;for((a===-1||i&qe.SkipSelf)&&(c=a===-1?up(n,e):e[a+8],c===qs||!hy(i,!1)?a=-1:(o=e[Xe],a=Cl(c),e=Tl(c,e)));a!==-1;){let u=e[Xe];if(dy(s,a,u.data)){let d=UE(a,e,t,o,i,l);if(d!==gi)return d}c=e[a+8],c!==qs&&hy(i,e[Xe].data[a+8]===l)&&dy(s,a,e)?(o=u,a=Cl(c),e=Tl(c,e)):a=-1}}return r}function UE(n,e,t,i,r,s){let o=e[Xe],a=o.data[n+8],c=i==null?jl(a)&&hf:i!=o&&(a.type&3)!==0,l=r&qe.Host&&s===a,u=ml(a,o,t,c,l);return u!==null?Qs(e,o,u,a):gi}function ml(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let p=d;p<h;p++){let g=o[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(r){let p=o[c];if(p&&Da(p)&&p.type===t)return c}return null}function Qs(n,e,t,i){let r=n[t],s=e.data;if(AE(r)){let o=r;o.resolving&&ub(lb(s[t]));let a=uy(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Vn(o.injectImpl):null,u=C_(n,i,qe.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&TE(t,s[t],e)}finally{l!==null&&Vn(l),uy(a),o.resolving=!1,I_()}}return r}function BE(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ha)?n[ha]:void 0;return typeof e=="number"?e>=0?e&O_:VE:e}function dy(n,e,t){let i=1<<n;return!!(t[e+(n>>L_)]&i)}function hy(n,e){return!(n&qe.Self)&&!(n&qe.Host&&e)}var Xr=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return V_(this._tNode,this._lView,e,Vl(i),t)}};function VE(){return new Xr(vn(),yt())}function dp(n){return ba(()=>{let e=n.prototype.constructor,t=e[yl]||ff(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[yl]||ff(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function ff(n){return By(n)?()=>{let e=ff(Hn(n));return e&&e()}:Xs(n)}function HE(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Le]&2048&&!(o[Le]&512);){let a=H_(s,o,t,i|qe.Self,gi);if(a!==gi)return a;let c=s.parent;if(!c){let l=o[l_];if(l){let u=l.get(t,gi,i);if(u!==gi)return u}c=z_(o),o=o[so]}s=c}return r}function z_(n){let e=n[Xe],t=e.type;return t===2?e.declTNode:t===1?n[ii]:null}function hp(n){return kE(vn(),n)}function fy(n,e=null,t=null,i){let r=G_(n,e,t,i);return r.resolveInjectorInitializers(),r}function G_(n,e=null,t=null,i,r=new Set){let s=[t||Qn,Vb(n)];return i=i||(typeof n=="object"?void 0:un(n)),new ga(s,e||Qf(),i||null,r)}var Mi=class n{static{this.THROW_IF_NOT_FOUND=pa}static{this.NULL=new Ml}static create(e,t){if(Array.isArray(e))return fy({name:""},t,e,"");{let i=e.name??"";return fy({name:i},e.parent,e.providers,i)}}static{this.\u0275prov=Ie({token:n,providedIn:"any",factory:()=>Be(Xy)})}static{this.__NG_ELEMENT_ID__=-1}};var zE=new Ve("");zE.__NG_ELEMENT_ID__=n=>{let e=vn();if(e===null)throw new De(204,!1);if(e.type&2)return e.value;if(n&qe.Optional)return null;throw new De(204,!1)};var GE="ngOriginalError";function jh(n){return n[GE]}var Si=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&jh(e);for(;t&&jh(t);)t=jh(t);return t||null}},W_=new Ve("",{providedIn:"root",factory:()=>te(Si).handleError.bind(void 0)}),fp=(()=>{class n{static{this.__NG_ELEMENT_ID__=WE}static{this.__NG_ENV_ID__=t=>t}}return n})(),pf=class extends fp{constructor(e){super(),this._lView=e}onDestroy(e){return __(this._lView,e),()=>cE(this._lView,e)}};function WE(){return new pf(yt())}function jE(){return co(vn(),yt())}function co(n,e){return new zi(zn(n,e))}var zi=(()=>{class n{constructor(t){this.nativeElement=t}static{this.__NG_ELEMENT_ID__=jE}}return n})();function $E(n){return n instanceof zi?n.nativeElement:n}var mf=class extends nn{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,c_()&&(this.destroyRef=te(fp,{optional:!0})??void 0)}emit(e){let t=ut(null);try{super.next(e)}finally{ut(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=$h(s),r&&(r=$h(r)),o&&(o=$h(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof kt&&e.add(a),a}};function $h(n){return e=>{setTimeout(n,void 0,e)}}var en=mf;function qE(){return this._results[Symbol.iterator]()}var gf=class n{get changes(){return this._changes??=new en}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=qE)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=Mb(e);(this._changesDetected=!xb(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function j_(n){return(n.flags&128)===128}var $_=new Map,XE=0;function YE(){return XE++}function ZE(n){$_.set(n[Wl],n)}function KE(n){$_.delete(n[Wl])}var py="__ngContext__";function Qr(n,e){hr(e)?(n[py]=e[Wl],ZE(e)):n[py]=e}function q_(n){return Y_(n[ya])}function X_(n){return Y_(n[ei])}function Y_(n){for(;n!==null&&!Hi(n);)n=n[ei];return n}var vf;function Z_(n){vf=n}function JE(){if(vf!==void 0)return vf;if(typeof document<"u")return document;throw new De(210,!1)}var pp=new Ve("",{providedIn:"root",factory:()=>QE}),QE="ng",mp=new Ve(""),vr=new Ve("",{providedIn:"platform",factory:()=>"unknown"});var gp=new Ve("",{providedIn:"root",factory:()=>JE().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var eC="h",tC="b";var nC=()=>null;function vp(n,e,t=!1){return nC(n,e,t)}var K_=!1,iC=new Ve("",{providedIn:"root",factory:()=>K_});var ul;function rC(){if(ul===void 0&&(ul=null,fa.trustedTypes))try{ul=fa.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return ul}function my(n){return rC()?.createScriptURL(n)||n}var Dl=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Fy})`}};function Ia(n){return n instanceof Dl?n.changingThisBreaksApplicationSecurity:n}function yp(n,e){let t=sC(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${Fy})`)}return t===e}function sC(n){return n instanceof Dl&&n.getTypeName()||null}var oC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function J_(n){return n=String(n),n.match(oC)?n:"unsafe:"+n}var ql=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(ql||{});function lo(n){let e=e0();return e?e.sanitize(ql.URL,n)||"":yp(n,"URL")?Ia(n):J_(Bl(n))}function aC(n){let e=e0();if(e)return my(e.sanitize(ql.RESOURCE_URL,n)||"");if(yp(n,"ResourceURL"))return my(Ia(n));throw new De(904,!1)}function cC(n,e){return e==="src"&&(n==="embed"||n==="frame"||n==="iframe"||n==="media"||n==="script")||e==="href"&&(n==="base"||n==="link")?aC:lo}function Q_(n,e,t){return cC(e,t)(n)}function e0(){let n=yt();return n&&n[yi].sanitizer}function Xl(n){return n.ownerDocument.defaultView}function t0(n){return n instanceof Function?n():n}function lC(n){return(n??te(Mi)).get(vr)==="browser"}var Bi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Bi||{}),uC;function _p(n,e){return uC(n,e)}function Ws(n,e,t,i,r){if(i!=null){let s,o=!1;Hi(i)?s=i:hr(i)&&(o=!0,i=i[Vi]);let a=xi(i);n===0&&t!==null?r==null?o0(e,t,a):Al(e,t,a,r||null,!0):n===1&&t!==null?Al(e,t,a,r||null,!0):n===2?CC(e,a,o):n===3&&e.destroyNode(a),s!=null&&DC(e,n,s,t,r)}}function dC(n,e){return n.createText(e)}function hC(n,e,t){n.setValue(e,t)}function n0(n,e,t){return n.createElement(e,t)}function fC(n,e){i0(n,e),e[Vi]=null,e[ii]=null}function pC(n,e,t,i,r,s){i[Vi]=r,i[ii]=e,Yl(n,i,t,1,r,s)}function i0(n,e){e[yi].changeDetectionScheduler?.notify(8),Yl(n,e,e[Wt],2,null,null)}function mC(n){let e=n[ya];if(!e)return qh(n[Xe],n);for(;e;){let t=null;if(hr(e))t=e[ya];else{let i=e[wn];i&&(t=i)}if(!t){for(;e&&!e[ei]&&e!==n;)hr(e)&&qh(e[Xe],e),e=e[rn];e===null&&(e=n),hr(e)&&qh(e[Xe],e),t=e&&e[ei]}e=t}}function gC(n,e,t,i){let r=wn+i,s=t.length;i>0&&(t[r-1][ei]=e),i<s-wn?(e[ei]=t[r],qy(t,wn+i,e)):(t.push(e),e[ei]=null),e[rn]=t;let o=e[Yr];o!==null&&t!==o&&r0(o,e);let a=e[Ui];a!==null&&a.insertView(n),uf(e),e[Le]|=128}function r0(n,e){let t=n[Js],i=e[rn];if(hr(i))n[Le]|=bl.HasTransplantedViews;else{let r=i[rn][_i];e[_i]!==r&&(n[Le]|=bl.HasTransplantedViews)}t===null?n[Js]=[e]:t.push(e)}function xp(n,e){let t=n[Js],i=t.indexOf(e);t.splice(i,1)}function yf(n,e){if(n.length<=wn)return;let t=wn+e,i=n[t];if(i){let r=i[Yr];r!==null&&r!==n&&xp(r,i),e>0&&(n[t-1][ei]=i[ei]);let s=xl(n,wn+e);fC(i[Xe],i);let o=s[Ui];o!==null&&o.detachView(s[Xe]),i[rn]=null,i[ei]=null,i[Le]&=-129}return i}function s0(n,e){if(!(e[Le]&256)){let t=e[Wt];t.destroyNode&&Yl(n,e,t,3,null,null),mC(e)}}function qh(n,e){if(e[Le]&256)return;let t=ut(null);try{e[Le]&=-129,e[Le]|=256,e[Zr]&&xv(e[Zr]),yC(n,e),vC(n,e),e[Xe].type===1&&e[Wt].destroy();let i=e[Yr];if(i!==null&&Hi(e[rn])){i!==e[rn]&&xp(i,e);let r=e[Ui];r!==null&&r.detachView(n)}KE(e)}finally{ut(t)}}function vC(n,e){let t=n.cleanup,i=e[va];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[va]=null);let r=e[dr];if(r!==null){e[dr]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function yC(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Ma)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];mi(4,a,c);try{c.call(a)}finally{mi(5,a,c)}}else{mi(4,r,s);try{s.call(r)}finally{mi(5,r,s)}}}}}function _C(n,e,t){return xC(n,e.parent,t)}function xC(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[Vi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===vi.None||s===vi.Emulated)return null}return zn(i,t)}}function Al(n,e,t,i,r){n.insertBefore(e,t,i,r)}function o0(n,e,t){n.appendChild(e,t)}function gy(n,e,t,i,r){i!==null?Al(n,e,t,i,r):o0(n,e,t)}function MC(n,e,t,i){n.removeChild(e,t,i)}function Mp(n,e){return n.parentNode(e)}function SC(n,e){return n.nextSibling(e)}function wC(n,e,t){return EC(n,e,t)}function bC(n,e,t){return n.type&40?zn(n,t):null}var EC=bC,vy;function Sp(n,e,t,i){let r=_C(n,i,e),s=e[Wt],o=i.parent||e[ii],a=wC(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)gy(s,r,t[c],a,!1);else gy(s,r,t,a,!1);vy!==void 0&&vy(s,i,e,t,r)}function gl(n,e){if(e!==null){let t=e.type;if(t&3)return zn(e,n);if(t&4)return _f(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return gl(n,i);{let r=n[e.index];return Hi(r)?_f(-1,r):xi(r)}}else{if(t&32)return _p(e,n)()||xi(n[e.index]);{let i=a0(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=xa(n[_i]);return gl(r,i)}else return gl(n,e.next)}}}return null}function a0(n,e){if(e!==null){let i=n[_i][ii],r=e.projection;return i.projection[r]}return null}function _f(n,e){let t=wn+n+1;if(t<e.length){let i=e[t],r=i[Xe].firstChild;if(r!==null)return gl(i,r)}return e[Kr]}function CC(n,e,t){let i=Mp(n,e);i&&MC(n,i,e,t)}function wp(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Qr(xi(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)wp(n,e,t.child,i,r,s,!1),Ws(e,n,r,a,s);else if(c&32){let l=_p(t,i),u;for(;u=l();)Ws(e,n,r,u,s);Ws(e,n,r,a,s)}else c&16?TC(n,e,i,t,r,s):Ws(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Yl(n,e,t,i,r,s){wp(t,i,n.firstChild,e,r,s,!1)}function TC(n,e,t,i,r,s){let o=t[_i],c=o[ii].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ws(e,n,r,u,s)}else{let l=c,u=o[rn];j_(i)&&(l.flags|=128),wp(n,e,l,u,r,s,!0)}}function DC(n,e,t,i,r){let s=t[Kr],o=xi(t);s!==o&&Ws(e,n,i,s,r);for(let a=wn;a<t.length;a++){let c=t[a];Yl(c[Xe],c,n,e,i,s)}}function AC(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Bi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Bi.Important),n.setStyle(t,i,r,s))}}function IC(n,e,t){n.setAttribute(e,"style",t)}function c0(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function l0(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&nf(n,e,i),r!==null&&c0(n,e,r),s!==null&&IC(n,e,s)}var yr={};function Mt(n=1){u0(bn(),yt(),ao()+n,!1)}function u0(n,e,t,i){if(!i)if((e[Le]&3)===3){let s=n.preOrderCheckHooks;s!==null&&fl(e,s,t)}else{let s=n.preOrderHooks;s!==null&&pl(e,s,0,t)}Jr(t)}function $t(n,e=qe.Default){let t=yt();if(t===null)return Be(n,e);let i=vn();return V_(i,t,Hn(n),e)}function d0(){let n="invalid";throw new Error(n)}function h0(n,e,t,i,r,s){let o=ut(null);try{let a=null;r&Zs.SignalBased&&(a=e[i][gv]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Zs.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):h_(e,a,i,s)}finally{ut(o)}}function RC(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Jr(~r);else{let s=r,o=t[++i],a=t[++i];ME(o,s);let c=e[s];a(2,c)}}}finally{Jr(-1)}}function Zl(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Vi]=r,d[Le]=i|4|128|8|64,(l!==null||n&&n[Le]&2048)&&(d[Le]|=2048),y_(d),d[rn]=d[so]=n,d[ti]=t,d[yi]=o||n&&n[yi],d[Wt]=a||n&&n[Wt],d[Ks]=c||n&&n[Ks]||null,d[ii]=s,d[Wl]=YE(),d[Sl]=u,d[l_]=l,d[_i]=e.type==2?n[_i]:d,d}function Kl(n,e,t,i,r){let s=n.data[e];if(s===null)s=PC(n,e,t,i,r),xE()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=mE();s.injectorIndex=o===null?-1:o.injectorIndex}return Aa(s,!0),s}function PC(n,e,t,i,r){let s=S_(),o=w_(),a=o?s:s&&s.parent,c=n.data[e]=UC(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function f0(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function p0(n,e,t,i,r){let s=ao(),o=i&2;try{Jr(-1),o&&e.length>pr&&u0(n,e,pr,!1),mi(o?2:0,r),t(i,r)}finally{Jr(s),mi(o?3:1,r)}}function m0(n,e,t){if(d_(e)){let i=ut(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{ut(i)}}}function g0(n,e,t){M_()&&(WC(n,e,t,zn(t,e)),(t.flags&64)===64&&S0(n,e,t))}function v0(n,e,t=zn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function y0(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=bp(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function bp(n,e,t,i,r,s,o,a,c,l,u){let d=pr+i,h=d+r,p=NC(d,h),g=typeof l=="function"?l():l;return p[Xe]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function NC(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:yr);return t}function OC(n,e,t,i){let s=i.get(iC,K_)||t===vi.ShadowDom,o=n.selectRootElement(e,s);return LC(o),o}function LC(n){FC(n)}var FC=()=>null;function kC(n,e,t,i){let r=E0(e);r.push(t),n.firstCreatePass&&C0(n).push(i,r.length-1)}function UC(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return hE()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function yy(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Zs.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?_y(i,t,l,a,c):_y(i,t,l,a)}return i}function _y(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function BC(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,p=h?h.inputs:null,g=h?h.outputs:null;c=yy(0,d.inputs,u,c,p),l=yy(1,d.outputs,u,l,g);let y=c!==null&&o!==null&&!Kf(e)?tT(c,u,o):null;a.push(y)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function VC(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function _0(n,e,t,i,r,s,o,a){let c=zn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(Ep(n,t,u,i,r),jl(e)&&HC(t,e.index)):e.type&3?(i=VC(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function HC(n,e){let t=gr(e,n);t[Le]&16||(t[Le]|=64)}function x0(n,e,t,i){if(M_()){let r=i===null?null:{"":-1},s=$C(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&M0(n,e,t,o,r,a),r&&qC(t,i,r)}t.mergedAttrs=Zf(t.mergedAttrs,t.attrs)}function M0(n,e,t,i,r,s){for(let l=0;l<i.length;l++)FE(F_(t,e),n,i[l].type);YC(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=f0(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Zf(t.mergedAttrs,u.hostAttrs),ZC(n,t,e,c,u),XC(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}BC(n,t,s)}function zC(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;GC(o)!=a&&o.push(a),o.push(t,i,s)}}function GC(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function WC(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;jl(t)&&KC(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||F_(t,e),Qr(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Qs(e,n,a,t);if(Qr(l,e),o!==null&&eT(e,a-r,l,c,t,o),Da(c)){let u=gr(t.index,e);u[ti]=Qs(e,n,a,t)}}}function S0(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=SE();try{Jr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];df(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&jC(c,l)}}finally{Jr(-1),df(o)}}function jC(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function $C(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(Rb(e,o.selectors,!1))if(i||(i=[]),Da(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;xf(n,e,c)}else i.unshift(o),xf(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function xf(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function qC(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new De(-301,!1);i.push(e[r],s)}}}function XC(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Da(e)&&(t[""]=n)}}function YC(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function ZC(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Xs(r.type,!0)),o=new Ma(s,Da(r),$t);n.blueprint[i]=o,t[i]=o,zC(n,e,i,f0(n,t,r.hostVars,yr),r)}function KC(n,e,t){let i=zn(e,n),r=y0(t),s=n[yi].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Jl(n,Zl(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function JC(n,e,t,i,r,s){let o=zn(n,e);QC(e[Wt],o,s,n.value,t,i,r)}function QC(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?Bl(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function eT(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];h0(i,t,c,l,u,d)}}function tT(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function w0(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function b0(n,e){let t=n.contentQueries;if(t!==null){let i=ut(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];ip(s),a.contentQueries(2,e[o],o)}}}finally{ut(i)}}}function Jl(n,e){return n[ya]?n[oy][ei]=e:n[ya]=e,n[oy]=e,e}function Mf(n,e,t){ip(0);let i=ut(null);try{e(n,t)}finally{ut(i)}}function E0(n){return n[va]||(n[va]=[])}function C0(n){return n.cleanup||(n.cleanup=[])}function T0(n,e){let t=n[Ks],i=t?t.get(Si,null):null;i&&i.handleError(e)}function Ep(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];h0(u,l,i,a,c,r)}}function nT(n,e,t){let i=g_(e,n);hC(n[Wt],i,t)}function iT(n,e){let t=gr(e,n),i=t[Xe];rT(i,t);let r=t[Vi];r!==null&&t[Sl]===null&&(t[Sl]=vp(r,t[Ks])),Cp(i,t,t[ti])}function rT(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Cp(n,e,t){rp(e);try{let i=n.viewQuery;i!==null&&Mf(1,i,t);let r=n.template;r!==null&&p0(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Ui]?.finishViewCreation(n),n.staticContentQueries&&b0(n,e),n.staticViewQueries&&Mf(2,n.viewQuery,t);let s=n.components;s!==null&&sT(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Le]&=-5,sp()}}function sT(n,e){for(let t=0;t<e.length;t++)iT(n,e[t])}function oT(n,e,t,i){let r=ut(null);try{let s=e.tView,a=n[Le]&4096?4096:16,c=Zl(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Yr]=l;let u=n[Ui];return u!==null&&(c[Ui]=u.createEmbeddedView(s)),Cp(s,c,t),c}finally{ut(r)}}function xy(n,e){return!e||e.firstChild===null||j_(n)}function aT(n,e,t,i=!0){let r=e[Xe];if(gC(r,e,n,t),i){let o=_f(t,n),a=e[Wt],c=Mp(a,n[Kr]);c!==null&&pC(r,n[ii],a,e,c,o)}let s=e[Sl];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Il(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(xi(s)),Hi(s)&&cT(s,i);let o=t.type;if(o&8)Il(n,e,t.child,i);else if(o&32){let a=_p(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=a0(e,t);if(Array.isArray(a))i.push(...a);else{let c=xa(e[_i]);Il(c[Xe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function cT(n,e){for(let t=wn;t<n.length;t++){let i=n[t],r=i[Xe].firstChild;r!==null&&Il(i[Xe],i,r,e)}n[Kr]!==n[Vi]&&e.push(n[Kr])}var D0=[];function lT(n){return n[Zr]??uT(n)}function uT(n){let e=D0.pop()??Object.create(hT);return e.lView=n,e}function dT(n){n.lView[Zr]!==n&&(n.lView=null,D0.push(n))}var hT=Pt(ve({},vv),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{$l(n.lView)},consumerOnSignalRead(){this.lView[Zr]=this}}),fT=100;function A0(n,e=!0,t=0){let i=n[yi],r=i.rendererFactory,s=!1;s||r.begin?.();try{pT(n,t)}catch(o){throw e&&T0(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function pT(n,e){let t=b_();try{cy(!0),Sf(n,e);let i=0;for(;_a(n);){if(i===fT)throw new De(103,!1);i++,Sf(n,1)}}finally{cy(t)}}function mT(n,e,t,i){let r=e[Le];if((r&256)===256)return;let s=!1,o=!1;!s&&e[yi].inlineEffectRunner?.flush(),rp(e);let a=null,c=null;!s&&gT(n)&&(c=lT(e),a=yv(c));try{y_(e),yE(n.bindingStartIndex),t!==null&&p0(n,e,t,2,i);let l=(r&3)===3;if(!s)if(l){let h=n.preOrderCheckHooks;h!==null&&fl(e,h,null)}else{let h=n.preOrderHooks;h!==null&&pl(e,h,0,null),Gh(e,0)}if(o||vT(e),I0(e,0),n.contentQueries!==null&&b0(n,e),!s)if(l){let h=n.contentCheckHooks;h!==null&&fl(e,h)}else{let h=n.contentHooks;h!==null&&pl(e,h,1),Gh(e,1)}RC(n,e);let u=n.components;u!==null&&P0(e,u,0);let d=n.viewQuery;if(d!==null&&Mf(2,d,i),!s)if(l){let h=n.viewCheckHooks;h!==null&&fl(e,h)}else{let h=n.viewHooks;h!==null&&pl(e,h,2),Gh(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[zh]){for(let h of e[zh])h();e[zh]=null}s||(e[Le]&=-73)}catch(l){throw s||$l(e),l}finally{c!==null&&(_v(c,a),dT(c)),sp()}}function gT(n){return n.type!==2}function I0(n,e){for(let t=q_(n);t!==null;t=X_(t))for(let i=wn;i<t.length;i++){let r=t[i];R0(r,e)}}function vT(n){for(let e=q_(n);e!==null;e=X_(e)){if(!(e[Le]&bl.HasTransplantedViews))continue;let t=e[Js];for(let i=0;i<t.length;i++){let r=t[i];oE(r)}}}function yT(n,e,t){let i=gr(e,n);R0(i,t)}function R0(n,e){tp(n)&&Sf(n,e)}function Sf(n,e){let i=n[Xe],r=n[Le],s=n[Zr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Sh(s)),o||=!1,s&&(s.dirty=!1),n[Le]&=-9217,o)mT(i,n,i.template,n[ti]);else if(r&8192){I0(n,1);let a=i.components;a!==null&&P0(n,a,1)}}function P0(n,e,t){for(let i=0;i<e.length;i++)yT(n,e[i],t)}function Tp(n,e){let t=b_()?64:1088;for(n[yi].changeDetectionScheduler?.notify(e);n;){n[Le]|=t;let i=xa(n);if(cf(n)&&!i)return n;n=i}return null}var es=class{get rootNodes(){let e=this._lView,t=e[Xe];return Il(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[ti]}set context(e){this._lView[ti]=e}get destroyed(){return(this._lView[Le]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[rn];if(Hi(e)){let t=e[wl],i=t?t.indexOf(this):-1;i>-1&&(yf(e,i),xl(t,i))}this._attachedToViewContainer=!1}s0(this._lView[Xe],this._lView)}onDestroy(e){__(this._lView,e)}markForCheck(){Tp(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Le]&=-129}reattach(){uf(this._lView),this._lView[Le]|=128}detectChanges(){this._lView[Le]|=1024,A0(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new De(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=cf(this._lView),t=this._lView[Yr];t!==null&&!e&&xp(t,this._lView),i0(this._lView[Xe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new De(902,!1);this._appRef=e;let t=cf(this._lView),i=this._lView[Yr];i!==null&&!t&&r0(i,this._lView),uf(this._lView)}},ts=(()=>{class n{static{this.__NG_ELEMENT_ID__=MT}}return n})(),_T=ts,xT=class extends _T{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=oT(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new es(r)}};function MT(){return Dp(vn(),yt())}function Dp(n,e){return n.type&4?new xT(e,n,co(n,e)):null}var qB=new RegExp(`^(\\d+)*(${tC}|${eC})*(.*)`);var ST=()=>null;function My(n,e){return ST(n,e)}var eo=class{},Ap=new Ve("",{providedIn:"root",factory:()=>!1});var N0=new Ve(""),wf=class{},Rl=class{};function wT(n){let e=Error(`No component factory found for ${un(n)}.`);return e[bT]=n,e}var bT="ngComponent";var bf=class{resolveComponentFactory(e){throw wT(e)}},to=class{static{this.NULL=new bf}},no=class{},Ra=(()=>{class n{constructor(){this.destroyNode=null}static{this.__NG_ELEMENT_ID__=()=>ET()}}return n})();function ET(){let n=yt(),e=vn(),t=gr(e.index,n);return(hr(t)?t:n)[Wt]}var CT=(()=>{class n{static{this.\u0275prov=Ie({token:n,providedIn:"root",factory:()=>null})}}return n})(),Xh={};var Sy=new Set;function Ql(n){Sy.has(n)||(Sy.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function O0(n){let e=!0;return setTimeout(()=>{e&&(e=!1,n())}),typeof fa.requestAnimationFrame=="function"&&fa.requestAnimationFrame(()=>{e&&(e=!1,n())}),()=>{e=!1}}function wy(n){let e=!0;return queueMicrotask(()=>{e&&n()}),()=>{e=!1}}function by(...n){}var At=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new en(!1),this.onMicrotaskEmpty=new en(!1),this.onStable=new en(!1),this.onError=new en(!1),typeof Zone>"u")throw new De(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.callbackScheduled=!1,AT(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new De(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new De(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,TT,by,by);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},TT={};function Ip(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function DT(n){n.isCheckStableRunning||n.callbackScheduled||(n.callbackScheduled=!0,Zone.root.run(()=>{O0(()=>{n.callbackScheduled=!1,Ef(n),n.isCheckStableRunning=!0,Ip(n),n.isCheckStableRunning=!1})}),Ef(n))}function AT(n){let e=()=>{DT(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(IT(a))return t.invokeTask(r,s,o,a);try{return Ey(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Cy(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Ey(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!RT(a)&&e(),Cy(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Ef(n),Ip(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Ef(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Ey(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Cy(n){n._nesting--,Ip(n)}var Cf=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new en,this.onMicrotaskEmpty=new en,this.onStable=new en,this.onError=new en}run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function IT(n){return L0(n,"__ignore_ng_zone__")}function RT(n){return L0(n,"__scheduler_tick__")}function L0(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var js=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(js||{}),PT={destroy(){}};function eu(n,e){!e&&Kb(eu);let t=e?.injector??te(Mi);if(!lC(t))return PT;Ql("NgAfterNextRender");let i=t.get(Rp),r=i.handler??=new Df,s=e?.phase??js.MixedReadWrite,o=()=>{r.unregister(c),a()},a=t.get(fp).onDestroy(o),c=ni(t,()=>new Tf(s,()=>{o(),n()}));return r.register(c),{destroy:o}}var Tf=class{constructor(e,t){this.phase=e,this.callbackFn=t,this.zone=te(At),this.errorHandler=te(Si,{optional:!0}),te(eo,{optional:!0})?.notify(6)}invoke(){try{this.zone.runOutsideAngular(this.callbackFn)}catch(e){this.errorHandler?.handleError(e)}}},Df=class{constructor(){this.executingCallbacks=!1,this.buckets={[js.EarlyRead]:new Set,[js.Write]:new Set,[js.MixedReadWrite]:new Set,[js.Read]:new Set},this.deferredCallbacks=new Set}register(e){(this.executingCallbacks?this.deferredCallbacks:this.buckets[e.phase]).add(e)}unregister(e){this.buckets[e.phase].delete(e),this.deferredCallbacks.delete(e)}execute(){this.executingCallbacks=!0;for(let e of Object.values(this.buckets))for(let t of e)t.invoke();this.executingCallbacks=!1;for(let e of this.deferredCallbacks)this.buckets[e.phase].add(e);this.deferredCallbacks.clear()}destroy(){for(let e of Object.values(this.buckets))e.clear();this.deferredCallbacks.clear()}},Rp=(()=>{class n{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let t=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let i of t)i()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}static{this.\u0275prov=Ie({token:n,providedIn:"root",factory:()=>new n})}}return n})();function Af(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Zv(r,a);else if(s==2){let c=a,l=e[++o];i=Zv(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var Pl=class extends to{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=fr(e);return new io(t,this.ngModule)}};function Ty(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function NT(n){let e=n.toLowerCase();return e==="svg"?nE:e==="math"?iE:null}var If=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Vl(i);let r=this.injector.get(e,Xh,i);return r!==Xh||t===Xh?r:this.parentInjector.get(e,t,i)}},io=class extends Rl{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Ty(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Ty(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Lb(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=ut(null);try{r=r||this.ngModule;let o=r instanceof gn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new If(e,o):e,c=a.get(no,null);if(c===null)throw new De(407,!1);let l=a.get(CT,null),u=a.get(Rp,null),d=a.get(eo,null),h={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},p=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",y=i?OC(p,i,this.componentDef.encapsulation,a):n0(p,g,NT(g)),m=512;this.componentDef.signals?m|=4096:this.componentDef.onPush||(m|=16);let f=null;y!==null&&(f=vp(y,a,!0));let E=bp(0,null,null,1,0,null,null,null,null,null,null),b=Zl(null,E,null,m,null,null,h,p,a,null,f);rp(b);let M,I;try{let T=this.componentDef,C,N=null;T.findHostDirectiveDefs?(C=[],N=new Map,T.findHostDirectiveDefs(T,C,N),C.push(T)):C=[T];let S=OT(b,y),x=LT(S,y,T,C,b,h,p);I=v_(E,pr),y&&UT(p,T,y,i),t!==void 0&&BT(I,this.ngContentSelectors,t),M=kT(x,T,C,N,b,[VT]),Cp(E,b,null)}finally{sp()}return new Rf(this.componentType,M,co(I,b),b,I)}finally{ut(s)}}},Rf=class extends wf{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new es(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Ep(s[Xe],s,r,e,t),this.previousInputValues.set(e,t);let o=gr(this._tNode.index,s);Tp(o,1)}}get injector(){return new Xr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function OT(n,e){let t=n[Xe],i=pr;return n[i]=e,Kl(t,i,2,"#host",null)}function LT(n,e,t,i,r,s,o){let a=r[Xe];FT(i,n,e,o);let c=null;e!==null&&(c=vp(e,r[Ks]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Zl(r,y0(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&xf(a,n,i.length-1),Jl(r,d),r[n.index]=d}function FT(n,e,t,i){for(let r of n)e.mergedAttrs=Zf(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Af(e,e.mergedAttrs,!0),t!==null&&l0(i,t,e))}function kT(n,e,t,i,r,s){let o=vn(),a=r[Xe],c=zn(o,r);M0(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=Qs(r,a,d,o);Qr(h,r)}S0(a,r,o),c&&Qr(c,r);let l=Qs(r,a,o.directiveStart+o.componentOffset,o);if(n[ti]=r[ti]=l,s!==null)for(let u of s)u(l,e);return m0(a,o,r),l}function UT(n,e,t,i){if(i)nf(n,t,["ng-version","18.0.1"]);else{let{attrs:r,classes:s}=Fb(e.selectors[0]);r&&nf(n,t,r),s&&s.length>0&&c0(n,t,s.join(" "))}}function BT(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function VT(){let n=vn();lp(yt()[Xe],n)}var _r=(()=>{class n{static{this.__NG_ELEMENT_ID__=HT}}return n})();function HT(){let n=vn();return k0(n,yt())}var zT=_r,F0=class extends zT{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return co(this._hostTNode,this._hostLView)}get injector(){return new Xr(this._hostTNode,this._hostLView)}get parentInjector(){let e=up(this._hostTNode,this._hostLView);if(N_(e)){let t=Tl(e,this._hostLView),i=Cl(e),r=t[Xe].data[i+8];return new Xr(r,t)}else return new Xr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Dy(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-wn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=My(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,xy(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!Jb(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new io(fr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(gn,null);y&&(s=y)}let u=fr(c.componentType??{}),d=My(this._lContainer,u?.id??null),h=d?.firstChild??null,p=c.create(l,r,h,s);return this.insertImpl(p.hostView,a,xy(this._hostTNode,d)),p}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(sE(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[rn],l=new F0(c,c[ii],c[rn]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return aT(o,r,s,i),e.attachToViewContainerRef(),qy(Yh(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Dy(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=yf(this._lContainer,t);i&&(xl(Yh(this._lContainer),t),s0(i[Xe],i))}detach(e){let t=this._adjustIndex(e,-1),i=yf(this._lContainer,t);return i&&xl(Yh(this._lContainer),t)!=null?new es(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Dy(n){return n[wl]}function Yh(n){return n[wl]||(n[wl]=[])}function k0(n,e){let t,i=e[n.index];return Hi(i)?t=i:(t=w0(i,e,null,n),e[n.index]=t,Jl(e,t)),WT(t,e,n,i),new F0(t,n,e)}function GT(n,e){let t=n[Wt],i=t.createComment(""),r=zn(e,n),s=Mp(t,r);return Al(t,s,i,SC(t,r),!1),i}var WT=qT,jT=()=>!1;function $T(n,e,t){return jT(n,e,t)}function qT(n,e,t,i){if(n[Kr])return;let r;t.type&8?r=xi(i):r=GT(e,t),n[Kr]=r}var Pf=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Nf=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Pp(e,t).matches!==null&&this.queries[t].setDirty()}},Nl=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=tD(e):this.predicate=e}},Of=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Lf=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,XT(t,s)),this.matchTNodeWithReadOption(e,t,ml(t,e,s,!1,!1))}else i===ts?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,ml(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===zi||r===_r||r===ts&&t.type&4)this.addMatch(t.index,-2);else{let s=ml(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function XT(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function YT(n,e){return n.type&11?co(n,e):n.type&4?Dp(n,e):null}function ZT(n,e,t,i){return t===-1?YT(e,n):t===-2?KT(n,e,i):Qs(n,n[Xe],t,e)}function KT(n,e,t){if(t===zi)return co(e,n);if(t===ts)return Dp(e,n);if(t===_r)return k0(e,n)}function U0(n,e,t,i){let r=e[Ui].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(ZT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Ff(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=U0(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=wn;d<u.length;d++){let h=u[d];h[Yr]===h[rn]&&Ff(h[Xe],h,l,i)}if(u[Js]!==null){let d=u[Js];for(let h=0;h<d.length;h++){let p=d[h];Ff(p[Xe],p,l,i)}}}}}return i}function JT(n,e){return n[Ui].queries[e].queryList}function B0(n,e,t){let i=new gf((t&4)===4);return kC(n,e,i,i.destroy),(e[Ui]??=new Nf).queries.push(new Pf(i))-1}function QT(n,e,t){let i=bn();return i.firstCreatePass&&(V0(i,new Nl(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),B0(i,yt(),e)}function eD(n,e,t,i){let r=bn();if(r.firstCreatePass){let s=vn();V0(r,new Nl(e,t,i),s.index),nD(r,n),(t&2)===2&&(r.staticContentQueries=!0)}return B0(r,yt(),t)}function tD(n){return n.split(",").map(e=>e.trim())}function V0(n,e,t){n.queries===null&&(n.queries=new Of),n.queries.track(new Lf(e,t))}function nD(n,e){let t=n.contentQueries||(n.contentQueries=[]),i=t.length?t[t.length-1]:-1;e!==i&&t.push(n.queries.length-1,e)}function Pp(n,e){return n.queries.getByIndex(e)}function iD(n,e){let t=n[Xe],i=Pp(t,e);return i.crossesNgTemplate?Ff(t,n,e,[]):U0(t,n,i,e)}function Np(n){let e=n.inputConfig,t={};for(let i in e)if(e.hasOwnProperty(i)){let r=e[i];Array.isArray(r)&&r[3]&&(t[i]=r[3])}n.inputTransforms=t}var mr=class{},Sa=class{};var kf=class extends mr{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Pl(this);let r=n_(e);this._bootstrapComponents=t0(r.bootstrap),this._r3Injector=G_(e,t,[{provide:mr,useValue:this},{provide:to,useValue:this.componentFactoryResolver},...i],un(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Uf=class extends Sa{constructor(e){super(),this.moduleType=e}create(e){return new kf(this.moduleType,e,[])}};var Ol=class extends mr{constructor(e){super(),this.componentFactoryResolver=new Pl(this),this.instance=null;let t=new ga([...e.providers,{provide:mr,useValue:this},{provide:to,useValue:this.componentFactoryResolver}],e.parent||Qf(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function tu(n,e,t=null){return new Ol({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var Pa=(()=>{class n{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Jt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function H0(n){return sD(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function rD(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function sD(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function oD(n,e,t){return n[e]=t}function aD(n,e){return n[e]}function nu(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function cD(n){return(n.flags&32)===32}function lD(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Kl(e,n,4,o||null,a||null);x0(e,t,u,El(l,c)),lp(e,u);let d=u.tView=bp(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function uD(n,e,t,i,r,s,o,a,c,l){let u=t+pr,d=e.firstCreatePass?lD(u,e,n,i,r,s,o,a,c):e.data[u];Aa(d,!1);let h=dD(e,n,d,t);ap()&&Sp(e,n,h,d),Qr(h,n);let p=w0(h,n,h,d);return n[u]=p,Jl(n,p),$T(p,d,n),ep(d)&&g0(e,n,d),c!=null&&v0(n,d,l),d}function rs(n,e,t,i,r,s,o,a){let c=yt(),l=bn(),u=El(l.consts,s);return uD(c,l,n,e,t,i,r,u,o,a),rs}var dD=hD;function hD(n,e,t,i){return cp(!0),e[Wt].createComment("")}function Op(n,e,t,i){let r=yt(),s=np();if(nu(r,s,e)){let o=bn(),a=op();JC(a,r,n,e,t,i)}return Op}function z0(n,e,t,i){return nu(n,np(),t)?e+Bl(t)+i:yr}function dl(n,e){return n<<17|e<<2}function ns(n){return n>>17&32767}function fD(n){return(n&2)==2}function pD(n,e){return n&131071|e<<17}function Bf(n){return n|2}function ro(n){return(n&131068)>>2}function Zh(n,e){return n&-131069|e<<2}function mD(n){return(n&1)===1}function Vf(n){return n|1}function gD(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=ns(o),c=ro(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Ca(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let h=ns(n[a+1]);n[i+1]=dl(h,a),h!==0&&(n[h+1]=Zh(n[h+1],i)),n[a+1]=pD(n[a+1],i)}else n[i+1]=dl(a,0),a!==0&&(n[a+1]=Zh(n[a+1],i)),a=i;else n[i+1]=dl(c,0),a===0?a=i:n[c+1]=Zh(n[c+1],i),c=i;l&&(n[i+1]=Bf(n[i+1])),Ay(n,u,i,!0),Ay(n,u,i,!1),vD(e,u,n,i,s),o=dl(a,c),s?e.classBindings=o:e.styleBindings=o}function vD(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Ca(s,e)>=0&&(t[i+1]=Vf(t[i+1]))}function Ay(n,e,t,i){let r=n[t+1],s=e===null,o=i?ns(r):ro(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];yD(c,e)&&(a=!0,n[o+1]=i?Vf(l):Bf(l)),o=i?ns(l):ro(l)}a&&(n[t+1]=i?Bf(r):Vf(r))}function yD(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Ca(n,e)>=0:!1}function dn(n,e,t){let i=yt(),r=np();if(nu(i,r,e)){let s=bn(),o=op();_0(s,o,i,n,e,i[Wt],t,!1)}return dn}function Iy(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Ep(n,t,s[o],o,i)}function uo(n,e){return _D(n,e,null,!0),uo}function _D(n,e,t,i){let r=yt(),s=bn(),o=_E(2);if(s.firstUpdatePass&&MD(s,n,o,i),e!==yr&&nu(r,o,e)){let a=s.data[ao()];CD(s,a,r,r[Wt],n,r[o+1]=TD(e,t),i,o)}}function xD(n,e){return e>=n.expandoStartIndex}function MD(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[ao()],o=xD(n,t);DD(s,i)&&e===null&&!o&&(e=!1),e=SD(r,s,e,i),gD(r,s,e,t,o,i)}}function SD(n,e,t,i){let r=wE(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=Kh(null,n,e,t,i),t=wa(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=Kh(r,n,e,t,i),s===null){let c=wD(n,e,i);c!==void 0&&Array.isArray(c)&&(c=Kh(null,n,e,c[1],i),c=wa(c,e.attrs,i),bD(n,e,i,c))}else s=ED(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function wD(n,e,t){let i=t?e.classBindings:e.styleBindings;if(ro(i)!==0)return n[ns(i)]}function bD(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[ns(r)]=i}function ED(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=wa(i,o,t)}return wa(i,e.attrs,t)}function Kh(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=wa(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function wa(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),wb(n,o,t?!0:e[++s]))}return n===void 0?null:n}function CD(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=mD(l)?Ry(c,e,t,r,ro(l),o):void 0;if(!Ll(u)){Ll(s)||fD(l)&&(s=Ry(c,null,t,r,a,o));let d=g_(ao(),t);AC(i,o,d,r,s)}}function Ry(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,h=t[r+1];h===yr&&(h=d?Qn:void 0);let p=d?Vh(h,i):u===i?h:void 0;if(l&&!Ll(p)&&(p=Vh(c,i)),Ll(p)&&(a=p,o))return a;let g=n[r+1];r=o?ns(g):ro(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=Vh(c,i))}return a}function Ll(n){return n!==void 0}function TD(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=un(Ia(n)))),n}function DD(n,e){return(n.flags&(e?8:16))!==0}function AD(n,e,t,i,r,s){let o=e.consts,a=El(o,r),c=Kl(e,n,2,i,a);return x0(e,t,c,El(o,s)),c.attrs!==null&&Af(c,c.attrs,!1),c.mergedAttrs!==null&&Af(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function ue(n,e,t,i){let r=yt(),s=bn(),o=pr+n,a=r[Wt],c=s.firstCreatePass?AD(o,s,r,e,t,i):s.data[o],l=ID(s,r,c,a,e,n);r[o]=l;let u=ep(c);return Aa(c,!0),l0(a,l,c),!cD(c)&&ap()&&Sp(s,r,l,c),lE()===0&&Qr(l,r),uE(),u&&(g0(s,r,c),m0(s,c,r)),i!==null&&v0(r,c),ue}function he(){let n=vn();w_()?gE():(n=n.parent,Aa(n,!1));let e=n;fE(e)&&pE(),dE();let t=bn();return t.firstCreatePass&&(lp(t,n),d_(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&IE(e)&&Iy(t,e,yt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&RE(e)&&Iy(t,e,yt(),e.stylesWithoutHost,!1),he}function Vt(n,e,t,i){return ue(n,e,t,i),he(),Vt}var ID=(n,e,t,i,r,s)=>(cp(!0),n0(i,r,CE()));function ss(){return yt()}var Fl="en-US";var RD=Fl;function PD(n){typeof n=="string"&&(RD=n.toLowerCase().replace(/_/g,"-"))}var ND=(n,e,t)=>{};function Ct(n,e,t,i){let r=yt(),s=bn(),o=vn();return LD(s,r,r[Wt],o,n,e,i),Ct}function OD(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[va],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function LD(n,e,t,i,r,s,o){let a=ep(i),l=n.firstCreatePass&&C0(n),u=e[ti],d=E0(e),h=!0;if(i.type&3||o){let y=zn(i,e),m=o?o(y):y,f=d.length,E=o?M=>o(xi(M[i.index])):i.index;ND(y,r,s);let b=null;if(!o&&a&&(b=OD(n,e,r,i.index)),b!==null){let M=b.__ngLastListenerFn__||b;M.__ngNextListenerFn__=s,b.__ngLastListenerFn__=s,h=!1}else{s=Ny(i,e,u,s);let M=t.listen(m,r,s);d.push(s,M),l&&l.push(r,E,f,f+1)}}else s=Ny(i,e,u,s);let p=i.outputs,g;if(h&&p!==null&&(g=p[r])){let y=g.length;if(y)for(let m=0;m<y;m+=2){let f=g[m],E=g[m+1],I=e[f][E].subscribe(s),T=d.length;d.push(s,I),l&&l.push(r,i.index,T,-(T+1))}}}function Py(n,e,t,i){let r=ut(null);try{return mi(6,e,t),t(i)!==!1}catch(s){return T0(n,s),!1}finally{mi(7,e,t),ut(r)}}function Ny(n,e,t,i){return function r(s){if(s===Function)return i;let o=n.componentOffset>-1?gr(n.index,e):e;Tp(o,5);let a=Py(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=Py(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function Gn(n=1){return EE(n)}function Lp(n,e,t){return G0(n,"",e,"",t),Lp}function G0(n,e,t,i,r){let s=yt(),o=z0(s,e,t,i);if(o!==yr){let a=bn(),c=op();_0(a,c,s,n,o,s[Wt],r,!1)}return G0}function W0(n,e,t,i){eD(n,e,t,i)}function j0(n,e,t){QT(n,e,t)}function iu(n){let e=yt(),t=bn(),i=E_();ip(i+1);let r=Pp(t,i);if(n.dirty&&rE(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=iD(e,i);n.reset(s,$E),n.notifyOnChanges()}return!0}return!1}function ru(){return JT(yt(),E_())}function _e(n,e=""){let t=yt(),i=bn(),r=n+pr,s=i.firstCreatePass?Kl(i,r,1,e,null):i.data[r],o=FD(i,t,s,e,n);t[r]=o,ap()&&Sp(i,t,o,s),Aa(s,!1)}var FD=(n,e,t,i,r)=>(cp(!0),dC(e[Wt],i));function wi(n){return ho("",n,""),wi}function ho(n,e,t){let i=yt(),r=z0(i,n,e,t);return r!==yr&&nT(i,ao(),r),ho}var kD=(()=>{class n{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=s_(!1,t.type),r=i.length>0?tu([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static{this.\u0275prov=Ie({token:n,providedIn:"environment",factory:()=>new n(Be(gn))})}}return n})();function qt(n){Ql("NgStandalone"),n.getStandaloneInjector=e=>e.get(kD).getOrCreateStandaloneInjector(n)}function su(n,e,t){let i=vE()+n,r=yt();return r[i]===yr?oD(r,i,t?e.call(t):e()):aD(r,i)}var ou=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"platform"})}}return n})();var $0=new Ve("");function Na(n){return!!n&&typeof n.then=="function"}function q0(n){return!!n&&typeof n.subscribe=="function"}var au=new Ve(""),X0=(()=>{class n{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i}),this.appInits=te(au,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=r();if(Na(s))t.push(s);else if(q0(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),cu=new Ve("");function UD(){Mv(()=>{throw new De(600,!1)})}function BD(n){return n.isBoundToModule}var VD=10;function HD(n,e,t){try{let i=t();return Na(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var fo=(()=>{class n{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=te(W_),this.afterRenderEffectManager=te(Rp),this.zonelessEnabled=te(Ap),this.externalTestViews=new Set,this.beforeRender=new nn,this.afterTick=new nn,this.componentTypes=[],this.components=[],this.isStable=te(Pa).hasPendingTasks.pipe(Je(t=>!t)),this._injector=te(gn)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(t,i){let r=t instanceof Rl;if(!this._injector.get(X0).done){let h=!r&&t_(t),p=!1;throw new De(405,p)}let o;r?o=t:o=this._injector.get(to).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=BD(o)?void 0:this._injector.get(mr),c=i||o.selector,l=o.create(Mi.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get($0,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Jh(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this._tick(!0)}_tick(t){if(this._runningTick)throw new De(101,!1);let i=ut(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(t)}catch(r){this.internalErrorHandler(r)}finally{this._runningTick=!1,ut(i),this.afterTick.next()}}detectChangesInAttachedViews(t){let i=null;this._injector.destroyed||(i=this._injector.get(no,null,{optional:!0}));let r=0,s=this.afterRenderEffectManager;for(;r<VD;){let o=r===0;if(t||!o){this.beforeRender.next(o);for(let{_lView:a,notifyErrorHandler:c}of this._views)zD(a,c,o,this.zonelessEnabled)}else i?.begin?.(),i?.end?.();if(r++,s.executeInternalCallbacks(),!this.allViews.some(({_lView:a})=>_a(a))&&(s.execute(),!this.allViews.some(({_lView:a})=>_a(a))))break}}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Jh(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);let i=this._injector.get(cu,[]);[...this._bootstrapListeners,...i].forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Jh(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new De(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Jh(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function zD(n,e,t,i){if(!t&&!_a(n))return;A0(n,e,t&&!i?0:1)}var Hf=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},lu=(()=>{class n{compileModuleSync(t){return new Uf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=n_(t),s=t0(r.declarations).reduce((o,a)=>{let c=fr(a);return c&&o.push(new io(c)),o},[]);return new Hf(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var GD=(()=>{class n{constructor(){this.zone=te(At),this.changeDetectionScheduler=te(eo),this.applicationRef=te(fo)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Y0({ngZoneFactory:n,ignoreChangesOutsideZone:e}){return n??=()=>new At(K0()),[{provide:At,useFactory:n},{provide:Ys,multi:!0,useFactory:()=>{let t=te(GD,{optional:!0});return()=>t.initialize()}},{provide:Ys,multi:!0,useFactory:()=>{let t=te(jD);return()=>{t.initialize()}}},{provide:W_,useFactory:WD},e===!0?{provide:N0,useValue:!0}:[]]}function WD(){let n=te(At),e=te(Si);return t=>n.runOutsideAngular(()=>e.handleError(t))}function Z0(n){let e=n?.ignoreChangesOutsideZone,t=Y0({ngZoneFactory:()=>{let i=K0(n);return i.shouldCoalesceEventChangeDetection&&Ql("NgZone_CoalesceEvent"),new At(i)},ignoreChangesOutsideZone:e});return zl([[],{provide:Ap,useValue:!1},t])}function K0(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var jD=(()=>{class n{constructor(){this.subscription=new kt,this.initialized=!1,this.zone=te(At),this.pendingTasks=te(Pa)}initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{At.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{At.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var $D=(()=>{class n{constructor(){this.appRef=te(fo),this.taskService=te(Pa),this.ngZone=te(At),this.zonelessEnabled=te(Ap),this.disableScheduling=te(N0,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new kt,this.cancelScheduledCallback=null,this.shouldRefreshViews=!1,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Cf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 3:case 2:case 0:case 4:case 5:case 1:{this.shouldRefreshViews=!0;break}case 8:case 7:case 6:case 9:default:}if(!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?wy:O0;this.pendingRenderTaskId=this.taskService.add(),this.zoneIsDefined?Zone.root.run(()=>{this.cancelScheduledCallback=i(()=>{this.tick(this.shouldRefreshViews)})}):this.cancelScheduledCallback=i(()=>{this.tick(this.shouldRefreshViews)})}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&At.isInAngularZone())}tick(t){if(this.runningTick||this.appRef.destroyed)return;let i=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick(t)},void 0,this.schedulerTickApplyArgs)}catch(r){throw this.taskService.remove(i),r}finally{this.cleanup()}this.useMicrotaskScheduler=!0,wy(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(i)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.shouldRefreshViews=!1,this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function qD(){return typeof $localize<"u"&&$localize.locale||Fl}var Fp=new Ve("",{providedIn:"root",factory:()=>te(Fp,qe.Optional|qe.SkipSelf)||qD()});var J0=new Ve("");var vl=null;function XD(n=[],e){return Mi.create({name:e,providers:[{provide:Gl,useValue:"platform"},{provide:J0,useValue:new Set([()=>vl=null])},...n]})}function YD(n=[]){if(vl)return vl;let e=XD(n);return vl=e,UD(),ZD(e),e}function ZD(n){n.get(mp,null)?.forEach(t=>t())}var po=(()=>{class n{static{this.__NG_ELEMENT_ID__=KD}}return n})();function KD(n){return JD(vn(),yt(),(n&16)===16)}function JD(n,e,t){if(jl(n)&&!t){let i=gr(n.index,e);return new es(i,i)}else if(n.type&47){let i=e[_i];return new es(i,e)}return null}var zf=class{constructor(){}supports(e){return H0(e)}create(e){return new Gf(e)}},QD=(n,e)=>e,Gf=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||QD}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<Oy(i,r,s)?t:i,a=Oy(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let h=0;h<l;h++){let p=h<s.length?s[h]:s[h]=0,g=p+h;u<=g&&g<l&&(s[h]=p+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!H0(e))throw new De(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,rD(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new Wf(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new kl),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new kl),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Wf=class{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},jf=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},kl=class{constructor(){this.map=new Map}put(e){let t=e.trackById,i=this.map.get(t);i||(i=new jf,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Oy(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function Ly(){return new kp([new zf])}var kp=(()=>{class n{static{this.\u0275prov=Ie({token:n,providedIn:"root",factory:Ly})}constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||Ly()),deps:[[n,new Xf,new Hl]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new De(901,!1)}}return n})();function Q0(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=YD(i),s=[Y0({}),{provide:eo,useExisting:$D},...t||[]],a=new Ol({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(At);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(Si,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:p=>{l.handleError(p)}})});let d=()=>a.destroy(),h=r.get(J0);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),HD(l,c,()=>{let p=a.get(X0);return p.runInitializers(),p.donePromise.then(()=>{let g=a.get(Fp,Fl);PD(g||Fl);let y=a.get(fo);return e!==void 0&&y.bootstrap(e),y})})})}catch(e){return Promise.reject(e)}}function Oa(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}function ex(n){let e=fr(n);if(!e)return null;let t=new io(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var ox=null;function mo(){return ox}function ax(n){ox??=n}var uu=class{};var yn=new Ve(""),zp=(()=>{class n{historyGo(t){throw new Error("")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:()=>te(eA),providedIn:"platform"})}}return n})(),cx=new Ve(""),eA=(()=>{class n extends zp{constructor(){super(),this._doc=te(yn),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return mo().getBaseHref(this._doc)}onPopState(t){let i=mo().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=mo().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:()=>new n,providedIn:"platform"})}}return n})();function Gp(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function tx(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Gi(n){return n&&n[0]!=="?"?"?"+n:n}var Wi=(()=>{class n{historyGo(t){throw new Error("")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:()=>te(Wp),providedIn:"root"})}}return n})(),lx=new Ve(""),Wp=(()=>{class n extends Wi{constructor(t,i){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??te(yn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Gp(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Gi(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Gi(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Gi(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(i){return new(i||n)(Be(zp),Be(lx,8))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),ux=(()=>{class n extends Wi{constructor(t,i){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=Gp(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Gi(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Gi(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(i){return new(i||n)(Be(zp),Be(lx,8))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac})}}return n})(),go=(()=>{class n{constructor(t){this._subject=new en,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=iA(tx(nx(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Gi(i))}normalize(t){return n.stripTrailingSlash(nA(this._basePath,nx(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Gi(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Gi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i,complete:r})}static{this.normalizeQueryParams=Gi}static{this.joinWithSlash=Gp}static{this.stripTrailingSlash=tx}static{this.\u0275fac=function(i){return new(i||n)(Be(Wi))}}static{this.\u0275prov=Ie({token:n,factory:()=>tA(),providedIn:"root"})}}return n})();function tA(){return new go(Be(Wi))}function nA(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function nx(n){return n.replace(/\/index.html$/,"")}function iA(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function dx(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Up=class{constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},hx=(()=>{class n{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new Up(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),ix(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);ix(s,r)})}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)($t(_r),$t(ts),$t(kp))}}static{this.\u0275dir=is({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return n})();function ix(n,e){n.context.$implicit=e.item}var hu=(()=>{class n{constructor(t,i){this._viewContainer=t,this._context=new Bp,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){rx("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){rx("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)($t(_r),$t(ts))}}static{this.\u0275dir=is({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return n})(),Bp=class{constructor(){this.$implicit=null,this.ngIf=null}};function rx(n,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${un(e)}'.`)}var os=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Ta({type:n})}static{this.\u0275inj=Ea({})}}return n})(),jp="browser",rA="server";function sA(n){return n===jp}function $p(n){return n===rA}var fx=(()=>{class n{static{this.\u0275prov=Ie({token:n,providedIn:"root",factory:()=>sA(te(vr))?new Vp(te(yn),window):new Hp})}}return n})(),Vp=class{constructor(e,t){this.document=e,this.window=t,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=oA(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function oA(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var Hp=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},du=class{};var Zp=class extends uu{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Kp=class n extends Zp{static makeCurrent(){ax(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=aA();return t==null?null:cA(t)}resetBaseElement(){La=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return dx(document.cookie,e)}},La=null;function aA(){return La=La||document.querySelector("base"),La?La.getAttribute("href"):null}function cA(n){return new URL(n,document.baseURI).pathname}var lA=(()=>{class n{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac})}}return n})(),Jp=new Ve(""),vx=(()=>{class n{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new De(5101,!1);return this._eventNameToPlugin.set(t,i),i}static{this.\u0275fac=function(i){return new(i||n)(Be(Jp),Be(At))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac})}}return n})(),fu=class{constructor(e){this._doc=e}},Xp="ng-app-id",yx=(()=>{class n{constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=$p(s),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(r=>r.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Xp}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(r=>{r.textContent!=null&&i.set(r.textContent,r)}),i}return null}changeUsageCount(t,i){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=i,s.usage}return r.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let r=this.styleNodesInDOM,s=r?.get(i);if(s?.parentNode===t)return r.delete(i),s.removeAttribute(Xp),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=i,this.platformIsServer&&o.setAttribute(Xp,this.appId),t.appendChild(o),o}}addStyleToHost(t,i){let r=this.getStyleElement(t,i),s=this.styleRef,o=s.get(i)?.elements;o?o.push(r):s.set(i,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||n)(Be(yn),Be(pp),Be(gp,8),Be(vr))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac})}}return n})(),Yp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},em=/%COMP%/g,_x="%COMP%",uA=`_nghost-${_x}`,dA=`_ngcontent-${_x}`,hA=!0,fA=new Ve("",{providedIn:"root",factory:()=>hA});function pA(n){return dA.replace(em,n)}function mA(n){return uA.replace(em,n)}function xx(n,e){return e.map(t=>t.replace(em,n))}var px=(()=>{class n{constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=$p(a),this.defaultRenderer=new Fa(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===vi.ShadowDom&&(i=Pt(ve({},i),{encapsulation:vi.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof pu?r.applyToHost(t):r instanceof ka&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case vi.Emulated:s=new pu(c,l,i,this.appId,u,o,a,d);break;case vi.ShadowDom:return new Qp(c,l,t,i,o,a,this.nonce,d);default:s=new ka(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||n)(Be(vx),Be(yx),Be(pp),Be(fA),Be(yn),Be(vr),Be(At),Be(gp))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac})}}return n})(),Fa=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Yp[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(mx(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(mx(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new De(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Yp[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Yp[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Bi.DashCase|Bi.Important)?e.style.setProperty(t,i,r&Bi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Bi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=mo().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function mx(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Qp=class extends Fa{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=xx(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ka=class extends Fa{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?xx(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},pu=class extends ka{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=pA(l),this.hostAttr=mA(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},gA=(()=>{class n extends fu{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static{this.\u0275fac=function(i){return new(i||n)(Be(yn))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac})}}return n})(),gx=["alt","control","meta","shift"],vA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yA={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},_A=(()=>{class n extends fu{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>mo().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),gx.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=vA[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),gx.forEach(o=>{if(o!==r){let a=yA[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(i){return new(i||n)(Be(yn))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac})}}return n})();function Mx(n,e){return Q0(ve({rootComponent:n},xA(e)))}function xA(n){return{appProviders:[...EA,...n?.providers??[]],platformProviders:bA}}function MA(){Kp.makeCurrent()}function SA(){return new Si}function wA(){return Z_(document),document}var bA=[{provide:vr,useValue:jp},{provide:mp,useValue:MA,multi:!0},{provide:yn,useFactory:wA,deps:[]}];var EA=[{provide:Gl,useValue:"root"},{provide:Si,useFactory:SA,deps:[]},{provide:Jp,useClass:gA,multi:!0,deps:[yn,At,vr]},{provide:Jp,useClass:_A,multi:!0,deps:[yn]},px,yx,vx,{provide:no,useExisting:px},{provide:du,useClass:lA,deps:[]},[]];var Sx=(()=>{class n{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(i){return new(i||n)(Be(yn))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Ge="primary",Qa=Symbol("RouteTitle"),sm=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function So(n){return new sm(n)}function TA(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function DA(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!bi(n[t],e[t]))return!1;return!0}function bi(n,e){let t=n?om(n):void 0,i=e?om(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Nx(n[r],e[r]))return!1;return!0}function om(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Nx(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function Ox(n){return n.length>0?n[n.length-1]:null}function br(n){return Oh(n)?n:Na(n)?Nt(Promise.resolve(n)):Ae(n)}var AA={exact:Fx,subset:kx},Lx={exact:IA,subset:RA,ignored:()=>!0};function wx(n,e,t){return AA[t.paths](n.root,e.root,t.matrixParams)&&Lx[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function IA(n,e){return bi(n,e)}function Fx(n,e,t){if(!cs(n.segments,e.segments)||!vu(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Fx(n.children[i],e.children[i],t))return!1;return!0}function RA(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Nx(n[t],e[t]))}function kx(n,e,t){return Ux(n,e,e.segments,t)}function Ux(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!cs(r,t)||e.hasChildren()||!vu(r,t,i))}else if(n.segments.length===t.length){if(!cs(n.segments,t)||!vu(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!kx(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!cs(n.segments,r)||!vu(n.segments,r,i)||!n.children[Ge]?!1:Ux(n.children[Ge],e,s,i)}}function vu(n,e,t){return e.every((i,r)=>Lx[t](n[r].parameters,i.parameters))}var xr=class{constructor(e=new ft([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=So(this.queryParams),this._queryParamMap}toString(){return OA.serialize(this)}},ft=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return yu(this)}},as=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=So(this.parameters),this._parameterMap}toString(){return Vx(this)}};function PA(n,e){return cs(n,e)&&n.every((t,i)=>bi(t.parameters,e[i].parameters))}function cs(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function NA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ge&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ge&&(t=t.concat(e(r,i)))}),t}var ec=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:()=>new wo,providedIn:"root"})}}return n})(),wo=class{parse(e){let t=new cm(e);return new xr(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ua(e.root,!0)}`,i=kA(e.queryParams),r=typeof e.fragment=="string"?`#${LA(e.fragment)}`:"";return`${t}${i}${r}`}},OA=new wo;function yu(n){return n.segments.map(e=>Vx(e)).join("/")}function Ua(n,e){if(!n.hasChildren())return yu(n);if(e){let t=n.children[Ge]?Ua(n.children[Ge],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ge&&i.push(`${r}:${Ua(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=NA(n,(i,r)=>r===Ge?[Ua(n.children[Ge],!1)]:[`${r}:${Ua(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ge]!=null?`${yu(n)}/${t[0]}`:`${yu(n)}/(${t.join("//")})`}}function Bx(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function mu(n){return Bx(n).replace(/%3B/gi,";")}function LA(n){return encodeURI(n)}function am(n){return Bx(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _u(n){return decodeURIComponent(n)}function bx(n){return _u(n.replace(/\+/g,"%20"))}function Vx(n){return`${am(n.path)}${FA(n.parameters)}`}function FA(n){return Object.entries(n).map(([e,t])=>`;${am(e)}=${am(t)}`).join("")}function kA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${mu(t)}=${mu(r)}`).join("&"):`${mu(t)}=${mu(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var UA=/^[^\/()?;#]+/;function tm(n){let e=n.match(UA);return e?e[0]:""}var BA=/^[^\/()?;=#]+/;function VA(n){let e=n.match(BA);return e?e[0]:""}var HA=/^[^=?&#]+/;function zA(n){let e=n.match(HA);return e?e[0]:""}var GA=/^[^&#]+/;function WA(n){let e=n.match(GA);return e?e[0]:""}var cm=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ft([],{}):new ft([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Ge]=new ft(e,t)),i}parseSegment(){let e=tm(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new De(4009,!1);return this.capture(e),new as(_u(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=VA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=tm(this.remaining);r&&(i=r,this.capture(i))}e[_u(t)]=_u(i)}parseQueryParam(e){let t=zA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=WA(this.remaining);o&&(i=o,this.capture(i))}let r=bx(t),s=bx(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=tm(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new De(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ge);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ge]:new ft([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new De(4011,!1)}};function Hx(n){return n.segments.length>0?new ft([],{[Ge]:n}):n}function zx(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=zx(r);if(i===Ge&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ft(n.segments,e);return jA(t)}function jA(n){if(n.numberOfChildren===1&&n.children[Ge]){let e=n.children[Ge];return new ft(n.segments.concat(e.segments),e.children)}return n}function Wa(n){return n instanceof xr}function $A(n,e,t=null,i=null){let r=Gx(n);return Wx(r,e,t,i)}function Gx(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ft(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Hx(i);return e??r}function Wx(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return nm(r,r,r,t,i);let s=qA(e);if(s.toRoot())return nm(r,r,new ft([],{}),t,i);let o=XA(s,r,n),a=o.processChildren?Ha(o.segmentGroup,o.index,s.commands):$x(o.segmentGroup,o.index,s.commands);return nm(r,o.segmentGroup,a,t,i)}function xu(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ja(n){return typeof n=="object"&&n!=null&&n.outlets}function nm(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=jx(n,e,t);let a=Hx(zx(o));return new xr(a,s,r)}function jx(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=jx(s,e,t)}),new ft(n.segments,i)}var Mu=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&xu(i[0]))throw new De(4003,!1);let r=i.find(ja);if(r&&r!==Ox(i))throw new De(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function qA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Mu(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Mu(t,e,i)}var _o=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function XA(n,e,t){if(n.isAbsolute)return new _o(e,!0,0);if(!t)return new _o(e,!1,NaN);if(t.parent===null)return new _o(t,!0,0);let i=xu(n.commands[0])?0:1,r=t.segments.length-1+i;return YA(t,r,n.numberOfDoubleDots)}function YA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new De(4005,!1);r=i.segments.length}return new _o(i,!1,r-s)}function ZA(n){return ja(n[0])?n[0].outlets:{[Ge]:n}}function $x(n,e,t){if(n??=new ft([],{}),n.segments.length===0&&n.hasChildren())return Ha(n,e,t);let i=KA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ft(n.segments.slice(0,i.pathIndex),{});return s.children[Ge]=new ft(n.segments.slice(i.pathIndex),n.children),Ha(s,0,r)}else return i.match&&r.length===0?new ft(n.segments,{}):i.match&&!n.hasChildren()?lm(n,e,t):i.match?Ha(n,0,r):lm(n,e,t)}function Ha(n,e,t){if(t.length===0)return new ft(n.segments,{});{let i=ZA(t),r={};if(Object.keys(i).some(s=>s!==Ge)&&n.children[Ge]&&n.numberOfChildren===1&&n.children[Ge].segments.length===0){let s=Ha(n.children[Ge],e,t);return new ft(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=$x(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ft(n.segments,r)}}function KA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(ja(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Cx(c,l,o))return s;i+=2}else{if(!Cx(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function lm(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(ja(s)){let c=JA(s.outlets);return new ft(i,c)}if(r===0&&xu(t[0])){let c=n.segments[e];i.push(new as(c.path,Ex(t[0]))),r++;continue}let o=ja(s)?s.outlets[Ge]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&xu(a)?(i.push(new as(o,Ex(a))),r+=2):(i.push(new as(o,{})),r++)}return new ft(i,{})}function JA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=lm(new ft([],{}),0,i))}),e}function Ex(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function Cx(n,e,t){return n==t.path&&bi(e,t.parameters)}var za="imperative",Xt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Xt||{}),Wn=class{constructor(e,t){this.id=e,this.url=t}},bo=class extends Wn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=Xt.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},oi=class extends Wn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=Xt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Dn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Dn||{}),Su=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Su||{}),ji=class extends Wn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Xt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Mr=class extends Wn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Xt.NavigationSkipped}},$a=class extends Wn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=Xt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},wu=class extends Wn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Xt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},um=class extends Wn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Xt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dm=class extends Wn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=Xt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},hm=class extends Wn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Xt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fm=class extends Wn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Xt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},pm=class{constructor(e){this.route=e,this.type=Xt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},mm=class{constructor(e){this.route=e,this.type=Xt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},gm=class{constructor(e){this.snapshot=e,this.type=Xt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vm=class{constructor(e){this.snapshot=e,this.type=Xt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ym=class{constructor(e){this.snapshot=e,this.type=Xt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_m=class{constructor(e){this.snapshot=e,this.type=Xt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bu=class{constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i,this.type=Xt.Scroll}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},qa=class{},Eo=class{constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};var xm=class{constructor(e){this.injector=e,this.outlet=null,this.route=null,this.children=new tc(this.injector),this.attachRef=null}},tc=(()=>{class n{constructor(t){this.parentInjector=t,this.contexts=new Map}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new xm(this.parentInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static{this.\u0275fac=function(i){return new(i||n)(Be(gn))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Eu=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Mm(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Mm(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Sm(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Sm(e,this._root).map(t=>t.value)}};function Mm(n,e){if(n===e.value)return e;for(let t of e.children){let i=Mm(n,t);if(i)return i}return null}function Sm(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Sm(n,t);if(i.length)return i.unshift(e),i}return[]}var Tn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function yo(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Cu=class extends Eu{constructor(e,t){super(e),this.snapshot=t,Rm(this,e)}toString(){return this.snapshot.toString()}};function qx(n){let e=QA(n),t=new Jt([new as("",{})]),i=new Jt({}),r=new Jt({}),s=new Jt({}),o=new Jt(""),a=new Sr(t,i,s,o,r,Ge,n,e.root);return a.snapshot=e.root,new Cu(new Tn(a,[]),e)}function QA(n){let e={},t={},i={},r="",s=new xo([],e,i,r,t,Ge,n,null,{});return new Du("",new Tn(s,[]))}var Sr=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Je(l=>l[Qa]))??Ae(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Je(e=>So(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Je(e=>So(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Tu(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ve(ve({},e.params),n.params),data:ve(ve({},e.data),n.data),resolve:ve(ve(ve(ve({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ve({},n.params),data:ve({},n.data),resolve:ve(ve({},n.data),n._resolvedData??{})},r&&Yx(r)&&(i.resolve[Qa]=r.title),i}var xo=class{get title(){return this.data?.[Qa]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=So(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=So(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Du=class extends Eu{constructor(e,t){super(t),this.url=e,Rm(this,t)}toString(){return Xx(this._root)}};function Rm(n,e){e.value._routerState=n,e.children.forEach(t=>Rm(n,t))}function Xx(n){let e=n.children.length>0?` { ${n.children.map(Xx).join(", ")} } `:"";return`${n.value}${e}`}function im(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,bi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),bi(e.params,t.params)||n.paramsSubject.next(t.params),DA(e.url,t.url)||n.urlSubject.next(t.url),bi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function wm(n,e){let t=bi(n.params,e.params)&&PA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||wm(n.parent,e.parent))}function Yx(n){return typeof n.title=="string"||n.title===null}var Pm=(()=>{class n{constructor(){this.activated=null,this._activatedRoute=null,this.name=Ge,this.activateEvents=new en,this.deactivateEvents=new en,this.attachEvents=new en,this.detachEvents=new en,this.parentContexts=te(tc),this.location=te(_r),this.changeDetector=te(po),this.inputBinder=te(Pu,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new De(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new De(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new De(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new De(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new bm(t,a,r.injector);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=is({type:n,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[oo]})}}return n})(),bm=class n{__ngOutletInjector(e){return new n(this.route,this.childContexts,e)}constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Sr?this.route:e===tc?this.childContexts:this.parent.get(e,t)}},Pu=new Ve(""),Tx=(()=>{class n{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=ua([i.queryParams,i.params,i.data]).pipe(Bn(([s,o,a],c)=>(a=ve(ve(ve({},s),o),a),c===0?Ae(a):Promise.resolve(a)))).subscribe(s=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let o=ex(i.component);if(!o){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of o.inputs)t.activatedComponentRef.setInput(a,s[a])});this.outletDataSubscriptions.set(t,r)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac})}}return n})();function eI(n,e,t){let i=Xa(n,e._root,t?t._root:void 0);return new Cu(i,e)}function Xa(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=tI(n,e,t);return new Tn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Xa(n,a)),o}}let i=nI(e.value),r=e.children.map(s=>Xa(n,s));return new Tn(i,r)}}function tI(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Xa(n,i,r);return Xa(n,i)})}function nI(n){return new Sr(new Jt(n.url),new Jt(n.params),new Jt(n.queryParams),new Jt(n.fragment),new Jt(n.data),n.outlet,n.component,n)}var Ya=class{constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},Zx="ngNavigationCancelingError";function Au(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Wa(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Kx(!1,Dn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Kx(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[Zx]=!0,t.cancellationCode=e,t}function iI(n){return Jx(n)&&Wa(n.url)}function Jx(n){return!!n&&n[Zx]}var rI=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=jt({type:n,selectors:[["ng-component"]],standalone:!0,features:[qt],decls:1,vars:0,template:function(i,r){i&1&&Vt(0,"router-outlet")},dependencies:[Pm],encapsulation:2})}}return n})();function sI(n,e){return n.providers&&!n._injector&&(n._injector=tu(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Nm(n){let e=n.children&&n.children.map(Nm),t=e?Pt(ve({},n),{children:e}):ve({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ge&&(t.component=rI),t}function si(n){return n.outlet||Ge}function oI(n,e){let t=n.filter(i=>si(i)===e);return t.push(...n.filter(i=>si(i)!==e)),t}function nc(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var aI=(n,e,t,i)=>Je(r=>(new Em(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Em=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),im(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=yo(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=yo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=yo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=yo(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new _m(s.value.snapshot))}),e.children.length&&this.forwardEvent(new vm(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(im(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),im(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=nc(r.snapshot);o.attachRef=null,o.route=r,o.injector=a??o.injector,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},Iu=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Mo=class{constructor(e,t){this.component=e,this.route=t}};function cI(n,e,t){let i=n._root,r=e?e._root:null;return Ba(i,r,t,[i.value])}function lI(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function To(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Vy(n)?n:e.get(n):i}function Ba(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=yo(e);return n.children.forEach(o=>{uI(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Ga(a,t.getContext(o),r)),r}function uI(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=dI(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Iu(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ba(n,e,a?a.children:null,i,r):Ba(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Mo(a.outlet.component,o))}else o&&Ga(e,a,r),r.canActivateChecks.push(new Iu(i)),s.component?Ba(n,null,a?a.children:null,i,r):Ba(n,null,t,i,r);return r}function dI(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!cs(n.url,e.url);case"pathParamsOrQueryParamsChange":return!cs(n.url,e.url)||!bi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!wm(n,e)||!bi(n.queryParams,e.queryParams);case"paramsChange":default:return!wm(n,e)}}function Ga(n,e,t){let i=yo(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Ga(o,e.children.getContext(s),t):Ga(o,null,t):Ga(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Mo(e.outlet.component,r)):t.canDeactivateChecks.push(new Mo(null,r)):t.canDeactivateChecks.push(new Mo(null,r))}function ic(n){return typeof n=="function"}function hI(n){return typeof n=="boolean"}function fI(n){return n&&ic(n.canLoad)}function pI(n){return n&&ic(n.canActivate)}function mI(n){return n&&ic(n.canActivateChild)}function gI(n){return n&&ic(n.canDeactivate)}function vI(n){return n&&ic(n.canMatch)}function Qx(n){return n instanceof Fi||n?.name==="EmptyError"}var gu=Symbol("INITIAL_VALUE");function Co(){return Bn(n=>ua(n.map(e=>e.pipe(ki(1),Uh(gu)))).pipe(Je(e=>{for(let t of e)if(t!==!0){if(t===gu)return gu;if(t===!1||yI(t))return t}return!0}),Un(e=>e!==gu),ki(1)))}function yI(n){return Wa(n)||n instanceof Ya}function _I(n,e){return Ut(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ae(Pt(ve({},t),{guardsResult:!0})):xI(o,i,r,n).pipe(Ut(a=>a&&hI(a)?MI(i,s,n,e):Ae(a)),Je(a=>Pt(ve({},t),{guardsResult:a})))})}function xI(n,e,t,i){return Nt(n).pipe(Ut(r=>CI(r.component,r.route,t,e,i)),pi(r=>r!==!0,!0))}function MI(n,e,t,i){return Nt(e).pipe(qr(r=>Vs(wI(r.route.parent,i),SI(r.route,i),EI(n,r.path,t),bI(n,r.route,t))),pi(r=>r!==!0,!0))}function SI(n,e){return n!==null&&e&&e(new ym(n)),Ae(!0)}function wI(n,e){return n!==null&&e&&e(new gm(n)),Ae(!0)}function bI(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ae(!0);let r=i.map(s=>al(()=>{let o=nc(e)??t,a=To(s,o),c=pI(a)?a.canActivate(e,n):ni(o,()=>a(e,n));return br(c).pipe(pi())}));return Ae(r).pipe(Co())}function EI(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>lI(o)).filter(o=>o!==null).map(o=>al(()=>{let a=o.guards.map(c=>{let l=nc(o.node)??t,u=To(c,l),d=mI(u)?u.canActivateChild(i,n):ni(l,()=>u(i,n));return br(d).pipe(pi())});return Ae(a).pipe(Co())}));return Ae(s).pipe(Co())}function CI(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ae(!0);let o=s.map(a=>{let c=nc(e)??r,l=To(a,c),u=gI(l)?l.canDeactivate(n,e,t,i):ni(c,()=>l(n,e,t,i));return br(u).pipe(pi())});return Ae(o).pipe(Co())}function TI(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ae(!0);let s=r.map(o=>{let a=To(o,n),c=fI(a)?a.canLoad(e,t):ni(n,()=>a(e,t));return br(c)});return Ae(s).pipe(Co(),eM(i))}function eM(n){return Ih(Qt(e=>{if(typeof e!="boolean")throw Au(n,e)}),Je(e=>e===!0))}function DI(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ae(!0);let s=r.map(o=>{let a=To(o,n),c=vI(a)?a.canMatch(e,t):ni(n,()=>a(e,t));return br(c)});return Ae(s).pipe(Co(),eM(i))}var Za=class{constructor(e){this.segmentGroup=e||null}},Ka=class extends Error{constructor(e){super(),this.urlTree=e}};function vo(n){return Bs(new Za(n))}function AI(n){return Bs(new De(4e3,!1))}function II(n){return Bs(Kx(!1,Dn.GuardRejected))}var Cm=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ae(i);if(r.numberOfChildren>1||!r.children[Ge])return AI(`${e.redirectTo}`);r=r.children[Ge]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:h,params:p,data:g,title:y}=r,m=ni(s,()=>a({params:p,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:h,title:y}));if(m instanceof xr)throw new Ka(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new Ka(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new xr(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ft(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new De(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Tm={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function RI(n,e,t,i,r){let s=Om(n,e,t);return s.matched?(i=sI(e,i),DI(i,e,t,r).pipe(Je(o=>o===!0?s:ve({},Tm)))):Ae(s)}function Om(n,e,t){if(e.path==="**")return PI(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ve({},Tm):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||TA)(t,n,e);if(!r)return ve({},Tm);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ve(ve({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function PI(n){return{matched:!0,parameters:n.length>0?Ox(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function Dx(n,e,t,i){return t.length>0&&LI(n,t,i)?{segmentGroup:new ft(e,OI(i,new ft(t,n.children))),slicedSegments:[]}:t.length===0&&FI(n,t,i)?{segmentGroup:new ft(n.segments,NI(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ft(n.segments,n.children),slicedSegments:t}}function NI(n,e,t,i){let r={};for(let s of t)if(Nu(n,e,s)&&!i[si(s)]){let o=new ft([],{});r[si(s)]=o}return ve(ve({},i),r)}function OI(n,e){let t={};t[Ge]=e;for(let i of n)if(i.path===""&&si(i)!==Ge){let r=new ft([],{});t[si(i)]=r}return t}function LI(n,e,t){return t.some(i=>Nu(n,e,i)&&si(i)!==Ge)}function FI(n,e,t){return t.some(i=>Nu(n,e,i))}function Nu(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function kI(n,e,t,i){return si(n)!==i&&(i===Ge||!Nu(e,t,n))?!1:Om(e,n,t).matched}function UI(n,e,t){return e.length===0&&!n.children[t]}var Dm=class{};function BI(n,e,t,i,r,s,o="emptyOnly"){return new Am(n,e,t,i,r,o,s).recognize()}var VI=31,Am=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Cm(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new De(4002,`'${e.segmentGroup}'`)}recognize(){let e=Dx(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Je(({children:t,rootSnapshot:i})=>{let r=new Tn(i,t),s=new Du("",r),o=$A(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new xo([],Object.freeze({}),Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ge,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ge,t).pipe(Je(i=>({children:i,rootSnapshot:t})),cr(i=>{if(i instanceof Ka)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Za?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(Je(o=>o instanceof Tn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Nt(s).pipe(qr(o=>{let a=i.children[o],c=oI(t,o);return this.processSegmentGroup(e,c,a,o,r)}),kh((o,a)=>(o.push(...a),o)),lr(null),Fh(),Ut(o=>{if(o===null)return vo(i);let a=tM(o);return HI(a),Ae(a)}))}processSegment(e,t,i,r,s,o,a){return Nt(t).pipe(qr(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(cr(l=>{if(l instanceof Za)return Ae(null);throw l}))),pi(c=>!!c),cr(c=>{if(Qx(c))return UI(i,r,s)?Ae(new Dm):vo(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return kI(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):vo(r):vo(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:h}=Om(t,r,s);if(!c)return vo(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>VI&&(this.allowRedirects=!1));let p=new xo(s,l,Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,Ax(r),si(r),r.component??r._loadedComponent??null,r,Ix(r)),g=Tu(p,a,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,p,e);return this.applyRedirects.lineralizeSegments(r,y).pipe(Ut(m=>this.processSegment(e,i,t,m.concat(h),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=RI(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Bn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Bn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:h,remainingSegments:p}=c,g=new xo(h,d,Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,Ax(i),si(i),i.component??i._loadedComponent??null,i,Ix(i)),y=Tu(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:f}=Dx(t,h,p,l);if(f.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(Je(b=>new Tn(g,b)));if(l.length===0&&f.length===0)return Ae(new Tn(g,[]));let E=si(i)===s;return this.processSegment(u,l,m,f,E?Ge:s,!0,g).pipe(Je(b=>new Tn(g,b instanceof Tn?[b]:[])))}))):vo(t)))}getChildConfig(e,t,i){return t.children?Ae({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ae({routes:t._loadedRoutes,injector:t._loadedInjector}):TI(e,t,i,this.urlSerializer).pipe(Ut(r=>r?this.configLoader.loadChildren(e,t).pipe(Qt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):II(t))):Ae({routes:[],injector:e})}};function HI(n){n.sort((e,t)=>e.value.outlet===Ge?-1:t.value.outlet===Ge?1:e.value.outlet.localeCompare(t.value.outlet))}function zI(n){let e=n.value.routeConfig;return e&&e.path===""}function tM(n){let e=[],t=new Set;for(let i of n){if(!zI(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=tM(i.children);e.push(new Tn(i.value,r))}return e.filter(i=>!t.has(i))}function Ax(n){return n.data||{}}function Ix(n){return n.resolve||{}}function GI(n,e,t,i,r,s){return Ut(o=>BI(n,e,t,i,o.extractedUrl,r,s).pipe(Je(({state:a,tree:c})=>Pt(ve({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function WI(n,e){return Ut(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ae(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of nM(c))o.add(l);let a=0;return Nt(o).pipe(qr(c=>s.has(c)?jI(c,i,n,e):(c.data=Tu(c,c.parent,n).resolve,Ae(void 0))),Qt(()=>a++),Hs(1),Ut(c=>a===o.size?Ae(t):Sn))})}function nM(n){let e=n.children.map(t=>nM(t)).flat();return[n,...e]}function jI(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!Yx(r)&&(s[Qa]=r.title),$I(s,n,e,i).pipe(Je(o=>(n._resolvedData=o,n.data=Tu(n,n.parent,t).resolve,null)))}function $I(n,e,t,i){let r=om(n);if(r.length===0)return Ae({});let s={};return Nt(r).pipe(Ut(o=>qI(n[o],e,t,i).pipe(pi(),Qt(a=>{if(a instanceof Ya)throw Au(new wo,a);s[o]=a}))),Hs(1),Lh(s),cr(o=>Qx(o)?Sn:Bs(o)))}function qI(n,e,t,i){let r=nc(e)??i,s=To(n,r),o=s.resolve?s.resolve(e,t):ni(r,()=>s(e,t));return br(o)}function rm(n){return Bn(e=>{let t=n(e);return t?Nt(t).pipe(Je(()=>e)):Ae(e)})}var iM=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ge);return i}getResolvedTitleForRoute(t){return t.data[Qa]}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:()=>te(XI),providedIn:"root"})}}return n})(),XI=(()=>{class n extends iM{constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static{this.\u0275fac=function(i){return new(i||n)(Be(Sx))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),rc=new Ve("",{providedIn:"root",factory:()=>({})}),Ja=new Ve(""),Lm=(()=>{class n{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=te(lu)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Ae(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=br(t.loadComponent()).pipe(Je(rM),Qt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),da(()=>{this.componentLoaders.delete(t)})),r=new Us(i,()=>new nn).pipe(ks());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Ae({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=YI(i,this.compiler,t,this.onLoadEndListener).pipe(da(()=>{this.childrenLoaders.delete(i)})),o=new Us(s,()=>new nn).pipe(ks());return this.childrenLoaders.set(i,o),o}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function YI(n,e,t,i){return br(n.loadChildren()).pipe(Je(rM),Ut(r=>r instanceof Sa||Array.isArray(r)?Ae(r):Nt(e.compileModuleAsync(r))),Je(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Ja,[],{optional:!0,self:!0}).flat()),{routes:o.map(Nm),injector:s}}))}function ZI(n){return n&&typeof n=="object"&&"default"in n}function rM(n){return ZI(n)?n.default:n}var Fm=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:()=>te(KI),providedIn:"root"})}}return n})(),KI=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),sM=new Ve(""),oM=new Ve("");function JI(n,e,t){let i=n.get(oM),r=n.get(yn);return n.get(At).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),QI(n))),{onViewTransitionCreated:c}=i;return c&&ni(n,()=>c({transition:a,from:e,to:t})),o})}function QI(n){return new Promise(e=>{eu(e,{injector:n})})}var e1=new Ve(""),km=(()=>{class n{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new nn,this.transitionAbortSubject=new nn,this.configLoader=te(Lm),this.environmentInjector=te(gn),this.urlSerializer=te(ec),this.rootContexts=te(tc),this.location=te(go),this.inputBindingEnabled=te(Pu,{optional:!0})!==null,this.titleStrategy=te(iM),this.options=te(rc,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=te(Fm),this.createViewTransition=te(sM,{optional:!0}),this.navigationErrorHandler=te(e1,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Ae(void 0),this.rootComponentType=null;let t=r=>this.events.next(new pm(r)),i=r=>this.events.next(new mm(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(Pt(ve(ve({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new Jt({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:za,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Un(s=>s.id!==0),Je(s=>Pt(ve({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Bn(s=>{let o=!1,a=!1;return Ae(s).pipe(Bn(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",Dn.SupersededByNewNavigation),Sn;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?Pt(ve({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new Mr(c.id,this.urlSerializer.serialize(c.rawUrl),d,Su.IgnoredSameUrlNavigation)),c.resolve(!1),Sn}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Ae(c).pipe(Bn(d=>{let h=this.transitions?.getValue();return this.events.next(new bo(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),h!==this.transitions?.getValue()?Sn:Promise.resolve(d)}),GI(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Qt(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=Pt(ve({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let h=new wu(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(h)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:h,source:p,restoredState:g,extras:y}=c,m=new bo(d,this.urlSerializer.serialize(h),p,g);this.events.next(m);let f=qx(this.rootComponentType).snapshot;return this.currentTransition=s=Pt(ve({},c),{targetSnapshot:f,urlAfterRedirects:h,extras:Pt(ve({},y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=h,Ae(s)}else{let d="";return this.events.next(new Mr(c.id,this.urlSerializer.serialize(c.extractedUrl),d,Su.IgnoredByUrlHandlingStrategy)),c.resolve(!1),Sn}}),Qt(c=>{let l=new um(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),Je(c=>(this.currentTransition=s=Pt(ve({},c),{guards:cI(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),_I(this.environmentInjector,c=>this.events.next(c)),Qt(c=>{if(s.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Au(this.urlSerializer,c.guardsResult);let l=new dm(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),Un(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",Dn.GuardRejected),!1)),rm(c=>{if(c.guards.canActivateChecks.length)return Ae(c).pipe(Qt(l=>{let u=new hm(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Bn(l=>{let u=!1;return Ae(l).pipe(WI(this.paramsInheritanceStrategy,this.environmentInjector),Qt({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",Dn.NoDataFromResolver)}}))}),Qt(l=>{let u=new fm(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),rm(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Qt(h=>{u.component=h}),Je(()=>{})));for(let h of u.children)d.push(...l(h));return d};return ua(l(c.targetSnapshot.root)).pipe(lr(null),ki(1))}),rm(()=>this.afterPreactivation()),Bn(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?Nt(u).pipe(Je(()=>s)):Ae(s)}),Je(c=>{let l=eI(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=Pt(ve({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),Qt(()=>{this.events.next(new qa)}),aI(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),ki(1),Qt({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new oi(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),Bh(this.transitionAbortSubject.pipe(Qt(c=>{throw c}))),da(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",Dn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),cr(c=>{if(a=!0,Jx(c))this.events.next(new ji(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),iI(c)?this.events.next(new Eo(c.url,c.navigationBehaviorOptions)):s.resolve(!1);else{let l=new $a(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0);try{let u=ni(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof Ya){let{message:d,cancellationCode:h}=Au(this.urlSerializer,u);this.events.next(new ji(s.id,this.urlSerializer.serialize(s.extractedUrl),d,h)),this.events.next(new Eo(u.redirectTo,u.navigationBehaviorOptions))}else{this.events.next(l);let d=t.errorHandler(c);s.resolve(!!d)}}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return Sn}))}))}cancelNavigationTransition(t,i,r){let s=new ji(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function t1(n){return n!==za}var n1=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:()=>te(i1),providedIn:"root"})}}return n})(),Im=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},i1=(()=>{class n extends Im{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=dp(n)))(r||n)}})()}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),aM=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:()=>te(r1),providedIn:"root"})}}return n})(),r1=(()=>{class n extends aM{constructor(){super(...arguments),this.location=te(go),this.urlSerializer=te(ec),this.options=te(rc,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=te(Fm),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new xr,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=qx(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof bo)this.stateMemento=this.createStateMemento();else if(t instanceof Mr)this.rawUrlTree=i.initialUrl;else if(t instanceof wu){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(r,i)}}else t instanceof qa?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,i))):t instanceof ji&&(t.code===Dn.GuardRejected||t.code===Dn.NoDataFromResolver)?this.restoreHistory(i):t instanceof $a?this.restoreHistory(i,!0):t instanceof oi&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=this.urlSerializer.serialize(t);if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=ve(ve({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=ve(ve({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=dp(n)))(r||n)}})()}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Va=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Va||{});function cM(n,e){n.events.pipe(Un(t=>t instanceof oi||t instanceof ji||t instanceof $a||t instanceof Mr),Je(t=>t instanceof oi||t instanceof Mr?Va.COMPLETE:(t instanceof ji?t.code===Dn.Redirect||t.code===Dn.SupersededByNewNavigation:!1)?Va.REDIRECTING:Va.FAILED),Un(t=>t!==Va.REDIRECTING),ki(1)).subscribe(()=>{e()})}function s1(n){throw n}var o1={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},a1={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ei=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=te(ou),this.stateManager=te(aM),this.options=te(rc,{optional:!0})||{},this.pendingTasks=te(Pa),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=te(km),this.urlSerializer=te(ec),this.location=te(go),this.urlHandlingStrategy=te(Fm),this._events=new nn,this.errorHandler=this.options.errorHandler||s1,this.navigated=!1,this.routeReuseStrategy=te(n1),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=te(Ja,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!te(Pu,{optional:!0}),this.eventsSubscription=new kt,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof ji&&i.code!==Dn.Redirect&&i.code!==Dn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof oi)this.navigated=!0;else if(i instanceof Eo){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=ve({info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||t1(r.source)},o);this.scheduleNavigation(a,za,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}l1(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),za,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=ve({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Nm),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a){case"merge":u=ve(ve({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let h=r?r.snapshot:this.routerState.snapshot.root;d=Gx(h)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return Wx(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Wa(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,za,null,i)}navigate(t,i={skipLocationChange:!1}){return c1(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=ve({},o1):i===!1?r=ve({},a1):r=i,Wa(t))return wx(this.currentUrlTree,t,r);let s=this.parseUrl(t);return wx(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,h)=>{a=d,c=h});let u=this.pendingTasks.add();return cM(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function c1(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new De(4008,!1)}function l1(n){return!(n instanceof qa)&&!(n instanceof Eo)}var wr=(()=>{class n{constructor(t,i,r,s,o,a){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=s,this.el=o,this.locationStrategy=a,this.href=null,this.commands=null,this.onChanges=new nn,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area",this.isAnchorElement?this.subscription=t.events.subscribe(l=>{l instanceof oi&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(t){t!=null?(this.commands=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(t,i,r,s,o){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||i||r||s||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let i=this.href===null?null:Q_(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(t,i){let r=this.renderer,s=this.el.nativeElement;i!==null?r.setAttribute(s,t,i):r.removeAttribute(s,t)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static{this.\u0275fac=function(i){return new(i||n)($t(Ei),$t(Sr),hp("tabindex"),$t(Ra),$t(zi),$t(Wi))}}static{this.\u0275dir=is({type:n,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(i,r){i&1&&Ct("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&Op("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Oa],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Oa],replaceUrl:[2,"replaceUrl","replaceUrl",Oa],routerLink:"routerLink"},standalone:!0,features:[Np,oo]})}}return n})(),Ou=(()=>{class n{get isActive(){return this._isActive}constructor(t,i,r,s,o){this.router=t,this.element=i,this.renderer=r,this.cdr=s,this.link=o,this.classes=[],this._isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new en,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof oi&&this.update()})}ngAfterContentInit(){Ae(this.links.changes,Ae(null)).pipe(ar()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=Nt(t).pipe(ar()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(t){let i=Array.isArray(t)?t:t.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(i=>{t?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let i=u1(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let s=r.urlTree;return s?t.isActive(s,i):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static{this.\u0275fac=function(i){return new(i||n)($t(Ei),$t(zi),$t(Ra),$t(po),$t(wr,8))}}static{this.\u0275dir=is({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,s){if(i&1&&W0(s,wr,5),i&2){let o;iu(o=ru())&&(r.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],standalone:!0,features:[oo]})}}return n})();function u1(n){return!!n.paths}var Ru=class{};var d1=(()=>{class n{constructor(t,i,r,s,o){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Un(t=>t instanceof oi),qr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let r=[];for(let s of i){s.providers&&!s._injector&&(s._injector=tu(s.providers,t,`Route: ${s.path}`));let o=s._injector??t,a=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(a,s.children??s._loadedRoutes))}return Nt(r).pipe(ar())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(t,i):r=Ae(null);let s=r.pipe(Ut(o=>o===null?Ae(void 0):(i._loadedRoutes=o.routes,i._loadedInjector=o.injector,this.processRoutes(o.injector??t,o.routes))));if(i.loadComponent&&!i._loadedComponent){let o=this.loader.loadComponent(i);return Nt([s,o]).pipe(ar())}else return s})}static{this.\u0275fac=function(i){return new(i||n)(Be(Ei),Be(lu),Be(gn),Be(Ru),Be(Lm))}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),lM=new Ve(""),h1=(()=>{class n{constructor(t,i,r,s,o={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=s,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},this.environmentInjector=te(gn),o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof bo?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof oi?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Mr&&t.code===Su.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof bu&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>Rs(this,null,function*(){yield new Promise(r=>{setTimeout(()=>{r()}),eu(()=>{r()},{injector:this.environmentInjector})}),this.zone.run(()=>{this.transitions.events.next(new bu(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static{this.\u0275fac=function(i){d0()}}static{this.\u0275prov=Ie({token:n,factory:n.\u0275fac})}}return n})();function uM(n,...e){return zl([{provide:Ja,multi:!0,useValue:n},[],{provide:Sr,useFactory:dM,deps:[Ei]},{provide:cu,multi:!0,useFactory:hM},e.map(t=>t.\u0275providers)])}function dM(n){return n.routerState.root}function sc(n,e){return{\u0275kind:n,\u0275providers:e}}function hM(){let n=te(Mi);return e=>{let t=n.get(fo);if(e!==t.components[0])return;let i=n.get(Ei),r=n.get(fM);n.get(Um)===1&&i.initialNavigation(),n.get(pM,null,qe.Optional)?.setUpPreloading(),n.get(lM,null,qe.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var fM=new Ve("",{factory:()=>new nn}),Um=new Ve("",{providedIn:"root",factory:()=>1});function f1(){return sc(2,[{provide:Um,useValue:0},{provide:au,multi:!0,deps:[Mi],useFactory:e=>{let t=e.get(cx,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(Ei),s=e.get(fM);cM(r,()=>{i(!0)}),e.get(km).afterPreactivation=()=>(i(!0),s.closed?Ae(void 0):s),r.initialNavigation()}))}}])}function p1(){return sc(3,[{provide:au,multi:!0,useFactory:()=>{let e=te(Ei);return()=>{e.setUpLocationChangeListener()}}},{provide:Um,useValue:2}])}var pM=new Ve("");function m1(n){return sc(0,[{provide:pM,useExisting:d1},{provide:Ru,useExisting:n}])}function g1(){return sc(8,[Tx,{provide:Pu,useExisting:Tx}])}function v1(n){let e=[{provide:sM,useValue:JI},{provide:oM,useValue:ve({skipNextTransition:!!n?.skipInitialTransition},n)}];return sc(9,e)}var Rx=new Ve("ROUTER_FORROOT_GUARD"),y1=[go,{provide:ec,useClass:wo},Ei,tc,{provide:Sr,useFactory:dM,deps:[Ei]},Lm,[]],Do=(()=>{class n{constructor(t){}static forRoot(t,i){return{ngModule:n,providers:[y1,[],{provide:Ja,multi:!0,useValue:t},{provide:Rx,useFactory:S1,deps:[[Ei,new Hl,new Xf]]},{provide:rc,useValue:i||{}},i?.useHash?x1():M1(),_1(),i?.preloadingStrategy?m1(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?w1(i):[],i?.bindToComponentInputs?g1().\u0275providers:[],i?.enableViewTransitions?v1().\u0275providers:[],b1()]}}static forChild(t){return{ngModule:n,providers:[{provide:Ja,multi:!0,useValue:t}]}}static{this.\u0275fac=function(i){return new(i||n)(Be(Rx,8))}}static{this.\u0275mod=Ta({type:n})}static{this.\u0275inj=Ea({})}}return n})();function _1(){return{provide:lM,useFactory:()=>{let n=te(fx),e=te(At),t=te(rc),i=te(km),r=te(ec);return t.scrollOffset&&n.setOffset(t.scrollOffset),new h1(r,i,n,e,t)}}}function x1(){return{provide:Wi,useClass:ux}}function M1(){return{provide:Wi,useClass:Wp}}function S1(n){return"guarded"}function w1(n){return[n.initialNavigation==="disabled"?p1().\u0275providers:[],n.initialNavigation==="enabledBlocking"?f1().\u0275providers:[]]}var Px=new Ve("");function b1(){return[{provide:Px,useFactory:hM},{provide:cu,multi:!0,useExisting:Px}]}var ls=[{title:"Empty Space",src:"/assets/images/art2.jpg",text:"mixed media on canvas, 2021 size: 120X80 cm, Chris Spiliotis\xA9",category:"Abstract",widthCm:120,heightCm:80},{title:"Window to freedom",src:"/assets/images/art3.jpg",text:"mixed media on canvas, 2020 size: 120X80 cm, Chris Spiliotis\xA9",category:"Abstract",widthCm:80,heightCm:120},{title:"Meteora",src:"/assets/images/art5.jpg",text:"Digital art, variable dimensions, 2022, Chris Spiliotis\xA9",category:"Digital Art",widthCm:80,heightCm:120},{title:"\u03A4he sanctuary of Eleusis",src:"/assets/images/art4.jpg",text:"digital art, variable dimensions, 2022, Chris Spiliotis\xA9",category:"Digital Art",widthCm:120,heightCm:80},{title:"The men",src:"/assets/images/art6.jpg",text:"Digital art, variable dimensions, 2022, Chris Spiliotis\xA9",category:"Digital Art",widthCm:80,heightCm:120},{title:"The Mother",src:"/assets/images/art8.jpg",text:"Mixed media art acrylics, charcoal,ink....on canvas. size: 50X70 cm, Chris Spiliotis\xA9",category:"Abstract",widthCm:50,heightCm:70},{title:"The color of empty",src:"/assets/images/art9.jpg",text:"Watercolors on paper. size: 50X70 cm, Chris Spiliotis\xA9",category:"Watercolors",widthCm:70,heightCm:50},{title:"Light",src:"/assets/images/art10.jpg",text:"Mixed media on canvas. 2021 size: 70X70 cm, Chris Spiliotis\xA9",category:"Abstract",widthCm:70,heightCm:70},{title:"Eleusis, (\u03C0\u03B1\u03BB\u03B9\u03CC\u03C2 \u03C3\u03B9\u03B4\u03B7\u03C1\u03BF\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03CC\u03C2 \u03C3\u03C4\u03B1\u03B8\u03BC\u03CC\u03C2)",src:"/assets/images/art11.jpg",text:"Digital art, variable dimensions, 2022, Chris Spiliotis\xA9",category:"Digital Art",widthCm:120,heightCm:80},{title:"Oxilithos Evia Evaggelismos (volcano)",src:"/assets/images/art12.jpg",text:"Digital art, variable dimensions, 2022, Chris Spiliotis\xA9",category:"Digital Art",widthCm:80,heightCm:120},{title:"\u03BF \u0395\u03CD\u03B6\u03C9\u03BD\u03B1\u03C2",src:"/assets/images/art13tsolias.jpg",text:"Digital art, variable dimensions, 2023, Chris Spiliotis\xA9",category:"Digital Art",widthCm:100,heightCm:160},{title:"Greek Summer",src:"/assets/images/art14summer.jpg",text:"Digital art, variable dimensions, 2023, Chris Spiliotis\xA9",category:"Digital Art",widthCm:70,heightCm:50},{title:"Young woman",src:"/assets/images/art15women.jpg",text:"Digital art, variable dimensions, 2023, Chris Spiliotis\xA9",category:"Digital Art",widthCm:80,heightCm:120},{title:"Kimi Greece, the square",src:"/assets/images/art16kimi.jpg",text:"Digital art, variable dimensions, 2023, Chris Spiliotis\xA9",category:"Digital Art",widthCm:120,heightCm:80},{title:"Sunlight",src:"/assets/images/art17sunlight.jpg",text:"Digital art, variable dimensions, 2023, Chris Spiliotis\xA9",category:"Digital Art",widthCm:120,heightCm:80},{title:"Monodri Evia Brige",src:"/assets/images/art18thebrige.jpg",text:"Digital art, variable dimensions, 2023, Chris Spiliotis\xA9",category:"Digital Art",widthCm:120,heightCm:80}];function E1(n,e){if(n&1){let t=ss();ue(0,"button",7),Ct("click",function(){let r=En(t).$implicit,s=Gn();return Cn(s.filterCategory(r))}),_e(1),he()}if(n&2){let t=e.$implicit;Mt(),ho(" ",t," ")}}function C1(n,e){if(n&1){let t=ss();ue(0,"div",8),Ct("click",function(){let r=En(t).$implicit,s=Gn();return Cn(s.openModal(r))}),Vt(1,"img",9),ue(2,"h3"),_e(3),he(),ue(4,"p"),_e(5),he(),ue(6,"p"),_e(7),he()()}if(n&2){let t=e.$implicit;Mt(),dn("src",t.src,lo)("alt",t.title),Mt(2),wi(t.title),Mt(2),wi(t.category),Mt(2),wi(t.text)}}function T1(n,e){if(n&1){let t=ss();ue(0,"div",10),Ct("click",function(){En(t);let r=Gn();return Cn(r.closeModal())}),ue(1,"div",11),Ct("click",function(r){return En(t),Cn(r.stopPropagation())}),Vt(2,"img",12),ue(3,"h2"),_e(4),he(),ue(5,"p"),_e(6),he(),ue(7,"button",13),Ct("click",function(){En(t);let r=Gn();return Cn(r.closeModal())}),_e(8,"\u03A7"),he()()()}if(n&2){let t=Gn();Mt(2),dn("src",t.selectedArtwork.src,lo)("alt",t.selectedArtwork.title),Mt(2),wi(t.selectedArtwork.title),Mt(2),wi(t.selectedArtwork.text)}}var mM=(()=>{class n{constructor(){this.artworks=ls,this.categories=["All","Abstract","Digital Art","Watercolors"],this.filteredArtworks=this.artworks,this.selectedArtwork=null}filterCategory(t){this.filteredArtworks=t==="All"?this.artworks:this.artworks.filter(i=>i.category===t)}openModal(t){this.selectedArtwork=t}closeModal(){this.selectedArtwork=null}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=jt({type:n,selectors:[["app-gallery"]],standalone:!0,features:[qt],decls:8,vars:3,consts:[[1,"gallery"],[2,"color","aliceblue"],[1,"categories"],[3,"click",4,"ngFor","ngForOf"],[1,"grid"],["class","art-card",3,"click",4,"ngFor","ngForOf"],["class","modal",3,"click",4,"ngIf"],[3,"click"],[1,"art-card",3,"click"],["loading","lazy",3,"src","alt"],[1,"modal",3,"click"],[1,"modal-content",3,"click"],[3,"src","alt"],[1,"close-btn",3,"click"]],template:function(i,r){i&1&&(ue(0,"section",0)(1,"h2",1),_e(2,"My Artwork"),he(),ue(3,"div",2),rs(4,E1,2,1,"button",3),he(),ue(5,"div",4),rs(6,C1,8,5,"div",5),he(),rs(7,T1,9,4,"div",6),he()),i&2&&(Mt(4),dn("ngForOf",r.categories),Mt(2),dn("ngForOf",r.filteredArtworks),Mt(),dn("ngIf",r.selectedArtwork))},dependencies:[os,hx,hu],styles:[".gallery[_ngcontent-%COMP%]{padding:4rem 2rem;text-align:center}.gallery[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]{margin-bottom:2rem}.gallery[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:.5rem;padding:.5rem 1.2rem;border:none;background:#333;color:#fff;border-radius:4px;cursor:pointer}.gallery[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#555}.gallery[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:2rem}.gallery[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .art-card[_ngcontent-%COMP%]{background:#f7f7f7;border-radius:8px;padding:1rem}.gallery[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .art-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:6px}.gallery[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .art-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.2rem}.gallery[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .art-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#888;font-size:.9rem}.modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#000c;display:flex;align-items:center;justify-content:center;z-index:999;animation:_ngcontent-%COMP%_fadeIn .3s ease-in-out}.modal-content[_ngcontent-%COMP%]{background:#fff;padding:2rem;border-radius:10px;max-width:90%;max-height:90%;text-align:center;position:relative;overflow:auto}.modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:70vh;border-radius:8px}.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.5rem}.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#444;margin-top:.5rem}.modal-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem;background:#222;color:#fff;border:none;padding:.5rem 1rem;border-radius:5px;cursor:pointer}.modal-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover{background:#444}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"]})}}return n})();var gM=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=jt({type:n,selectors:[["app-home"]],standalone:!0,features:[qt],decls:7,vars:0,consts:[[1,"home-intro"],[2,"color","aliceblue"],["routerLink","/gallery",1,"btn"]],template:function(i,r){i&1&&(ue(0,"div",0)(1,"h1",1),_e(2,"Welcome to My Virtual Gallery"),he(),ue(3,"p"),_e(4," Explore a curated collection of digital and traditional art inspired by urban emptiness and emotional space. "),he(),ue(5,"a",2),_e(6," Enter Gallery"),he()())},dependencies:[Do,wr],styles:[".home-intro[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:6rem 2rem}.home-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:1rem}.home-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:600px;font-size:1.2rem;color:#666}.home-intro[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-top:2rem;background:#222;color:#fff;padding:.75rem 1.5rem;border:none;text-decoration:none;font-weight:700;border-radius:5px}.home-intro[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background:#444}"]})}}return n})();var vM=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=jt({type:n,selectors:[["app-about"]],standalone:!0,features:[qt],decls:27,vars:0,consts:[[1,"about-container"],[1,"about-text"],[1,"about-image"],["src","/assets/images/portrait-placeholder.jpg","alt","Artist Portrait"]],template:function(i,r){i&1&&(ue(0,"section",0)(1,"div",1)(2,"h1"),_e(3,"About the Artist"),he(),ue(4,"p"),_e(5," Christos Spiliotis was born in the 1980s in an urban environment, but by choice, he now resides far from the noise of the city, in a peaceful place where mountain and sea coexist in harmony. "),he(),ue(6,"p"),_e(7," Following his studies, he dedicated himself entirely to his artistic nature. Today, he sketches and paints on any surface, almost all day long. His work reflects both a restless spirit and a deeply artistic mind\u2014qualities that resonate throughout his creations. "),he(),ue(8,"p"),_e(9," Technology has naturally found its way into his practice as well, with a significant number of his works created digitally, yet still retaining the immediacy and soul of hand-drawn expression. "),he(),ue(10,"h1"),_e(11,"Artistic Statement"),he(),ue(12,"p"),_e(13," My approach is expressionistic, centered around still lifes and spaces\u2014always devoid of human presence. My work is marked by the immediacy of the gesture and the interplay of materials. "),he(),ue(14,"p"),_e(15," Each subject is deconstructed, and then reconstructed using only the elements essential to its narrative. What remains is what drives the evolution of the piece, emotionally and visually. "),he(),ue(16,"h1"),_e(17,"Group Exhibitions"),he(),ue(18,"ul")(19,"li"),_e(20," All That Unites Us, IWS, Chilli Art Gallery, Athens \u2013 Kosovo (2021\u20132022) "),he(),ue(21,"li"),_e(22,"New Normality, Artgrid, Chili Art Gallery, Athens (2021)"),he(),ue(23,"li"),_e(24,"3rd International Biennale, IWS Global, India (2022)"),he()()(),ue(25,"div",2),Vt(26,"img",3),he()())},styles:[".about-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;padding:4rem 2rem;gap:2rem;background-color:#f3f3f3;color:#333}.about-text[_ngcontent-%COMP%]{flex:1 1 400px;max-width:600px}.about-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem;font-family:Artifika,serif}.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.7;margin-bottom:1rem;font-size:1.1rem}.about-image[_ngcontent-%COMP%]{flex:1 1 300px;max-width:220px;text-align:center}.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:10px;box-shadow:0 8px 20px #0003}"]})}}return n})();var yM=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=jt({type:n,selectors:[["app-contact"]],standalone:!0,features:[qt],decls:25,vars:0,consts:[[1,"contact-container"],[1,"contact-info"],["href","mailto:spiliotisch@yahoo.gr"],["href","https://www.facebook.com/spiliotisch","target","_blank"],["href","https://www.instagram.com/chris___spiliotis/","target","_blank"]],template:function(i,r){i&1&&(ue(0,"div",0)(1,"h1"),_e(2,"Contact Me"),he(),ue(3,"p"),_e(4," If you have any questions or just want to connect, feel free to reach out! "),he(),ue(5,"div",1)(6,"a",2)(7,"p")(8,"strong"),_e(9,"Email:"),he(),_e(10," spiliotisch@yahoo.gr"),he()(),ue(11,"a",3)(12,"p")(13,"strong"),_e(14,"Facebook:"),he(),_e(15," Christos Spiliotis"),he()(),ue(16,"a",4)(17,"p")(18,"strong"),_e(19,"Instagram:"),he(),_e(20," chris___spiliotis"),he()(),ue(21,"p")(22,"strong"),_e(23,"Location:"),he(),_e(24," Kimi, Greece"),he()()())},styles:[".contact-container[_ngcontent-%COMP%]{max-width:600px;margin:4rem auto;padding:2rem;background:#f9f9f9;border-radius:10px;box-shadow:0 4px 12px #0000001a;color:#333}a[_ngcontent-%COMP%]{text-decoration:none}.contact-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:1rem;font-size:2rem}.contact-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem;color:#666}.contact-info[_ngcontent-%COMP%]{margin-top:2rem;font-size:.95rem;color:#444;text-align:center}"]})}}return n})();var wd="176";var GM=0,_g=1,WM=2;var xg=1,jM=2,Pi=3,Ji=0,fn=1,qn=2,nr=0,gs=1,Mg=2,Sg=3,wg=4,$M=5,Nr=100,qM=101,XM=102,YM=103,ZM=104,KM=200,JM=201,QM=202,eS=203,ed=204,td=205,tS=206,nS=207,iS=208,rS=209,sS=210,oS=211,aS=212,cS=213,lS=214,bd=0,Ed=1,Cd=2,vs=3,Td=4,Dd=5,Ad=6,Id=7,bg=0,uS=1,dS=2,ir=0,hS=1,fS=2,pS=3,mS=4,gS=5,vS=6,yS=7;var cg=300,ws=301,bs=302,Rd=303,Pd=304,Pc=306,Qi=1e3,Pr=1001,nd=1002,$n=1003,_S=1004;var Nc=1005;var _n=1006,Nd=1007;var Br=1008;var fi=1009,Eg=1010,Cg=1011,Jo=1012,Od=1013,Vr=1014,Ni=1015,Qo=1016,Ld=1017,Fd=1018,ea=1020,Tg=35902,Dg=1021,Ag=1022,Xn=1023,Go=1026,ta=1027,Ig=1028,kd=1029,Rg=1030,Ud=1031;var Bd=1033,Oc=33776,Lc=33777,Fc=33778,kc=33779,Vd=35840,Hd=35841,zd=35842,Gd=35843,Wd=36196,jd=37492,$d=37496,qd=37808,Xd=37809,Yd=37810,Zd=37811,Kd=37812,Jd=37813,Qd=37814,eh=37815,th=37816,nh=37817,ih=37818,rh=37819,sh=37820,oh=37821,Uc=36492,ah=36494,ch=36495,Pg=36283,lh=36284,uh=36285,dh=36286;var fc=2300,id=2301,Qu=2302,lg=2400,ug=2401,dg=2402;var xS=3200,MS=3201;var Ng=0,SS=1,rr="",Rn="srgb",ys="srgb-linear",pc="linear",gt="srgb";var ps=7680;var hg=519,wS=512,bS=513,ES=514,Og=515,CS=516,TS=517,DS=518,AS=519,fg=35044;var Lg="300 es",Ti=2e3,mc=2001;var Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_M=1234567,dc=Math.PI/180,_s=180/Math.PI;function na(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Fg(n,e){return(n%e+e)%e}function D1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function A1(n,e,t){return n!==e?(t-n)/(e-n):0}function hc(n,e,t){return(1-t)*n+t*e}function I1(n,e,t,i){return hc(n,e,1-Math.exp(-t*i))}function R1(n,e=1){return e-Math.abs(Fg(n,e*2)-e)}function P1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function N1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function O1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function L1(n,e){return n+Math.random()*(e-n)}function F1(n){return n*(.5-Math.random())}function k1(n){n!==void 0&&(_M=n);let e=_M+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function U1(n){return n*dc}function B1(n){return n*_s}function V1(n){return(n&n-1)===0&&n!==0}function H1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function z1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function G1(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ho(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Hr={DEG2RAD:dc,RAD2DEG:_s,generateUUID:na,clamp:Ze,euclideanModulo:Fg,mapLinear:D1,inverseLerp:A1,lerp:hc,damp:I1,pingpong:R1,smoothstep:P1,smootherstep:N1,randInt:O1,randFloat:L1,randFloatSpread:F1,seededRandom:k1,degToRad:U1,radToDeg:B1,isPowerOfTwo:V1,ceilPowerOfTwo:H1,floorPowerOfTwo:z1,setQuaternionFromProperEuler:G1,normalize:hn,denormalize:Ho},Qe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],y=r[0],m=r[3],f=r[6],E=r[1],b=r[4],M=r[7],I=r[2],T=r[5],C=r[8];return s[0]=o*y+a*E+c*I,s[3]=o*m+a*b+c*T,s[6]=o*f+a*M+c*C,s[1]=l*y+u*E+d*I,s[4]=l*m+u*b+d*T,s[7]=l*f+u*M+d*C,s[2]=h*y+p*E+g*I,s[5]=h*m+p*b+g*T,s[8]=h*f+p*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vm.makeScale(e,t)),this}rotate(e){return this.premultiply(Vm.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vm=new He;function kg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function IS(){let n=Wo("canvas");return n.style.display="block",n}var xM={};function Bc(n){n in xM||(xM[n]=!0,console.warn(n))}function RS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function PS(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NS(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var MM=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),SM=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W1(){let n={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=zo(r.r),r.g=zo(r.g),r.b=zo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?pc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ys]:{primaries:e,whitePoint:i,transfer:pc,toXYZ:MM,fromXYZ:SM,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:MM,fromXYZ:SM,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),n}var at=W1();function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ao,rd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ao===void 0&&(Ao=Wo("canvas")),Ao.width=e.width,Ao.height=e.height;let r=Ao.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ao}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},j1=0,jo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hm(r[o].image)):s.push(Hm(r[o]))}else s=Hm(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Hm(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $1=0,sr=(()=>{class n extends Di{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Pr,s=Pr,o=_n,a=Br,c=Xn,l=fi,u=n.DEFAULT_ANISOTROPY,d=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=na(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case Pr:t.x=t.x<0?0:1;break;case nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case Pr:t.y=t.y<0?0:1;break;case nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=cg,n.DEFAULT_ANISOTROPY=1,n})(),mt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(p+1)/2,I=(f+1)/2,T=(u+h)/4,C=(d+y)/4,N=(g+m)/4;return b>M&&b>I?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=C/i):M>I?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=N/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=N/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-y)/E,this.z=(h-u)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sd=class extends Di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);let s=new sr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new jo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ai=class extends sd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},gc=class extends sr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var od=class extends sr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==h||l!==p||u!==g){let m=1-a,f=c*h+l*p+u*g+d*y,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let I=Math.sqrt(b),T=Math.atan2(I,f*E);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}let M=a*E;if(c=c*m+h*M,l=l*m+p*M,u=u*m+g*M,d=d*m+y*M,m===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-a*p,e[t+2]=l*g+u*p+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wM.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wM.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zm.copy(this).projectOnVector(e),this.sub(zm)}reflect(e){return this.sub(zm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zm=new P,wM=new er,ui=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lu.copy(i.boundingBox)),Lu.applyMatrix4(e.matrixWorld),this.union(Lu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oc),Fu.subVectors(this.max,oc),Io.subVectors(e.a,oc),Ro.subVectors(e.b,oc),Po.subVectors(e.c,oc),Er.subVectors(Ro,Io),Cr.subVectors(Po,Ro),us.subVectors(Io,Po);let t=[0,-Er.z,Er.y,0,-Cr.z,Cr.y,0,-us.z,us.y,Er.z,0,-Er.x,Cr.z,0,-Cr.x,us.z,0,-us.x,-Er.y,Er.x,0,-Cr.y,Cr.x,0,-us.y,us.x,0];return!Gm(t,Io,Ro,Po,Fu)||(t=[1,0,0,0,1,0,0,0,1],!Gm(t,Io,Ro,Po,Fu))?!1:(ku.crossVectors(Er,Cr),t=[ku.x,ku.y,ku.z],Gm(t,Io,Ro,Po,Fu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$i=[new P,new P,new P,new P,new P,new P,new P,new P],ai=new P,Lu=new ui,Io=new P,Ro=new P,Po=new P,Er=new P,Cr=new P,us=new P,oc=new P,Fu=new P,ku=new P,ds=new P;function Gm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ds.fromArray(n,s);let a=r.x*Math.abs(ds.x)+r.y*Math.abs(ds.y)+r.z*Math.abs(ds.z),c=e.dot(ds),l=t.dot(ds),u=i.dot(ds);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var q1=new ui,ac=new P,Wm=new P,$o=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):q1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ac.subVectors(e,this.center);let t=ac.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ac,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ac.copy(e.center).add(Wm)),this.expandByPoint(ac.copy(e.center).sub(Wm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qi=new P,jm=new P,Uu=new P,Tr=new P,$m=new P,Bu=new P,qm=new P,vc=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jm.copy(e).add(t).multiplyScalar(.5),Uu.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(jm);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Uu),a=Tr.dot(this.direction),c=-Tr.dot(Uu),l=Tr.lengthSq(),u=Math.abs(1-o*o),d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(jm).addScaledVector(Uu,h),p}intersectSphere(e,t){qi.subVectors(e.center,this.origin);let i=qi.dot(this.direction),r=qi.dot(qi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,r,s){$m.subVectors(t,e),Bu.subVectors(i,e),qm.crossVectors($m,Bu);let o=this.direction.dot(qm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,e);let c=a*this.direction.dot(Bu.crossVectors(Tr,Bu));if(c<0)return null;let l=a*this.direction.dot($m.cross(Tr));if(l<0||c+l>o)return null;let u=-a*Tr.dot(qm);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,p,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/No.setFromMatrixColumn(e,0).length(),s=1/No.setFromMatrixColumn(e,1).length(),o=1/No.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,p=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,p=c*d,g=l*u,y=l*d;t[0]=h+y*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,p=c*d,g=l*u,y=l*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,p=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X1,e,Y1)}lookAt(e,t,i){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Dr.crossVectors(i,An),Dr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Dr.crossVectors(i,An)),Dr.normalize(),Vu.crossVectors(An,Dr),r[0]=Dr.x,r[4]=Vu.x,r[8]=An.x,r[1]=Dr.y,r[5]=Vu.y,r[9]=An.y,r[2]=Dr.z,r[6]=Vu.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],E=i[3],b=i[7],M=i[11],I=i[15],T=r[0],C=r[4],N=r[8],S=r[12],x=r[1],A=r[5],V=r[9],k=r[13],G=r[2],X=r[6],W=r[10],Z=r[14],H=r[3],ee=r[7],de=r[11],Me=r[15];return s[0]=o*T+a*x+c*G+l*H,s[4]=o*C+a*A+c*X+l*ee,s[8]=o*N+a*V+c*W+l*de,s[12]=o*S+a*k+c*Z+l*Me,s[1]=u*T+d*x+h*G+p*H,s[5]=u*C+d*A+h*X+p*ee,s[9]=u*N+d*V+h*W+p*de,s[13]=u*S+d*k+h*Z+p*Me,s[2]=g*T+y*x+m*G+f*H,s[6]=g*C+y*A+m*X+f*ee,s[10]=g*N+y*V+m*W+f*de,s[14]=g*S+y*k+m*Z+f*Me,s[3]=E*T+b*x+M*G+I*H,s[7]=E*C+b*A+M*X+I*ee,s[11]=E*N+b*V+M*W+I*de,s[15]=E*S+b*k+M*Z+I*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*p-i*c*p)+y*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],E=d*m*l-y*h*l+y*c*p-a*m*p-d*c*f+a*h*f,b=g*h*l-u*m*l-g*c*p+o*m*p+u*c*f-o*h*f,M=u*y*l-g*d*l+g*a*p-o*y*p-u*a*f+o*d*f,I=g*d*c-u*y*c-g*a*h+o*y*h+u*a*m-o*d*m,T=t*E+i*b+r*M+s*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=E*C,e[1]=(y*h*s-d*m*s-y*r*p+i*m*p+d*r*f-i*h*f)*C,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*f+i*c*f)*C,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*p-i*c*p)*C,e[4]=b*C,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*f+t*h*f)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*f-t*c*f)*C,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*C,e[8]=M*C,e[9]=(g*d*s-u*y*s-g*i*p+t*y*p+u*i*f-t*d*f)*C,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*f+t*a*f)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*C,e[12]=I*C,e[13]=(u*y*r-g*d*r+g*i*h-t*y*h-u*i*m+t*d*m)*C,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,p=s*u,g=s*d,y=o*u,m=o*d,f=a*d,E=c*l,b=c*u,M=c*d,I=i.x,T=i.y,C=i.z;return r[0]=(1-(y+f))*I,r[1]=(p+M)*I,r[2]=(g-b)*I,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(h+f))*T,r[6]=(m+E)*T,r[7]=0,r[8]=(g+b)*C,r[9]=(m-E)*C,r[10]=(1-(h+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=No.set(r[0],r[1],r[2]).length(),o=No.set(r[4],r[5],r[6]).length(),a=No.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ci.copy(this);let l=1/s,u=1/o,d=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ti){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),p,g;if(a===Ti)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===mc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ti){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,p=(i+r)*u,g,y;if(a===Ti)g=(o+s)*d,y=-2*d;else if(a===mc)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},No=new P,ci=new Tt,X1=new P(0,0,0),Y1=new P(1,1,1),Dr=new P,Vu=new P,An=new P,bM=new Tt,EM=new er,Or=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return bM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bM,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return EM.setFromEuler(this),this.setFromQuaternion(EM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Z1=0,CM=new P,Oo=new er,Xi=new Tt,Hu=new P,cc=new P,K1=new P,J1=new er,TM=new P(1,0,0),DM=new P(0,1,0),AM=new P(0,0,1),IM={type:"added"},Q1={type:"removed"},Lo={type:"childadded",child:null},Xm={type:"childremoved",child:null},Ii=(()=>{class n extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,i=new Or,r=new er,s=new P(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new He}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Oo.setFromAxisAngle(t,i),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(t,i){return Oo.setFromAxisAngle(t,i),this.quaternion.premultiply(Oo),this}rotateX(t){return this.rotateOnAxis(TM,t)}rotateY(t){return this.rotateOnAxis(DM,t)}rotateZ(t){return this.rotateOnAxis(AM,t)}translateOnAxis(t,i){return CM.copy(t).applyQuaternion(this.quaternion),this.position.add(CM.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(TM,t)}translateY(t){return this.translateOnAxis(DM,t)}translateZ(t){return this.translateOnAxis(AM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Hu.copy(t):Hu.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),cc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(cc,Hu,this.up):Xi.lookAt(Hu,cc,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Oo.setFromRotationMatrix(Xi),this.quaternion.premultiply(Oo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(IM),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Q1),Xm.child=t,this.dispatchEvent(Xm),Xm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(IM),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cc,t,K1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cc,J1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Pt(ve({},c),{boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(c=>ve({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),p=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new P(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),li=new P,Yi=new P,Ym=new P,Zi=new P,Fo=new P,ko=new P,RM=new P,Zm=new P,Km=new P,Jm=new P,Qm=new mt,eg=new mt,tg=new mt,Rr=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),li.subVectors(e,t),r.cross(li);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){li.subVectors(r,t),Yi.subVectors(i,t),Ym.subVectors(e,t);let o=li.dot(li),a=li.dot(Yi),c=li.dot(Ym),l=Yi.dot(Yi),u=Yi.dot(Ym),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zi.x),c.addScaledVector(o,Zi.y),c.addScaledVector(a,Zi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Qm.setScalar(0),eg.setScalar(0),tg.setScalar(0),Qm.fromBufferAttribute(e,t),eg.fromBufferAttribute(e,i),tg.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Qm,s.x),o.addScaledVector(eg,s.y),o.addScaledVector(tg,s.z),o}static isFrontFacing(e,t,i,r){return li.subVectors(i,t),Yi.subVectors(e,t),li.cross(Yi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),li.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Fo.subVectors(r,i),ko.subVectors(s,i),Zm.subVectors(e,i);let c=Fo.dot(Zm),l=ko.dot(Zm);if(c<=0&&l<=0)return t.copy(i);Km.subVectors(e,r);let u=Fo.dot(Km),d=ko.dot(Km);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Fo,o);Jm.subVectors(e,s);let p=Fo.dot(Jm),g=ko.dot(Jm);if(g>=0&&p<=g)return t.copy(s);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ko,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return RM.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(RM,a);let f=1/(m+y+h);return o=y*f,a=h*f,t.copy(i).addScaledVector(Fo,o).addScaledVector(ko,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},OS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},zu={h:0,s:0,l:0};function ng(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Fg(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ng(o,s,e+1/3),this.g=ng(o,s,e),this.b=ng(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){let i=OS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return at.fromWorkingColorSpace(on.copy(this),e),Math.round(Ze(on.r*255,0,255))*65536+Math.round(Ze(on.g*255,0,255))*256+Math.round(Ze(on.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(on.copy(this),t);let i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Rn){at.fromWorkingColorSpace(on.copy(this),e);let t=on.r,i=on.g,r=on.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(zu);let i=hc(Ar.h,zu.h,t),r=hc(Ar.s,zu.s,t),s=hc(Ar.l,zu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Ke;Ke.NAMES=OS;var eR=0,Lr=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=na(),this.name="",this.type="Material",this.blending=gs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ed&&(i.blendSrc=this.blendSrc),this.blendDst!==td&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tr=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new P,Gu=new Qe,tR=0,Pn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fg,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gu.fromBufferAttribute(this,t),Gu.applyMatrix3(e),this.setXY(t,Gu.x,Gu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ho(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fg&&(e.usage=this.usage),e}};var yc=class extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _c=class extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var an=class extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}},nR=0,jn=new Tt,ig=new Ii,Uo=new P,In=new ui,lc=new ui,Yt=new P,Ri=class n extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nR++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kg(e)?_c:yc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,i){return jn.makeTranslation(e,t,i),this.applyMatrix4(jn),this}scale(e,t,i){return jn.makeScale(e,t,i),this.applyMatrix4(jn),this}lookAt(e){return ig.lookAt(e),ig.updateMatrix(),this.applyMatrix4(ig.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];lc.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(In.min,lc.min),In.expandByPoint(Yt),Yt.addVectors(In.max,lc.max),In.expandByPoint(Yt)):(In.expandByPoint(lc.min),In.expandByPoint(lc.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Yt.fromBufferAttribute(a,l),c&&(Uo.fromBufferAttribute(e,l),Yt.add(Uo)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new P,c[N]=new P;let l=new P,u=new P,d=new P,h=new Qe,p=new Qe,g=new Qe,y=new P,m=new P;function f(N,S,x){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),p.sub(h),g.sub(h);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[N].add(y),a[S].add(y),a[x].add(y),c[N].add(m),c[S].add(m),c[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,S=E.length;N<S;++N){let x=E[N],A=x.start,V=x.count;for(let k=A,G=A+V;k<G;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let b=new P,M=new P,I=new P,T=new P;function C(N){I.fromBufferAttribute(r,N),T.copy(I);let S=a[N];b.copy(S),b.sub(I.multiplyScalar(I.dot(S))).normalize(),M.crossVectors(T,S);let A=M.dot(c[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,A)}for(let N=0,S=E.length;N<S;++N){let x=E[N],A=x.start,V=x.count;for(let k=A,G=A+V;k<G;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new Pn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},PM=new Tt,hs=new vc,Wu=new $o,NM=new P,ju=new P,$u=new P,qu=new P,rg=new P,Xu=new P,OM=new P,Yu=new P,bt=class extends Ii{constructor(e=new Ri,t=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Xu.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(rg.fromBufferAttribute(d,e),o?Xu.addScaledVector(rg,u):Xu.addScaledVector(rg.sub(t),u))}t.add(Xu)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wu.copy(i.boundingSphere),Wu.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(Wu.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Wu,NM)===null||hs.origin.distanceToSquared(NM)>(e.far-e.near)**2))&&(PM.copy(s).invert(),hs.copy(e.ray).applyMatrix4(PM),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,I=b;M<I;M+=3){let T=a.getX(M),C=a.getX(M+1),N=a.getX(M+2);r=Zu(this,f,e,i,l,u,d,T,C,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);r=Zu(this,o,e,i,l,u,d,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,I=b;M<I;M+=3){let T=M,C=M+1,N=M+2;r=Zu(this,f,e,i,l,u,d,T,C,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=m,b=m+1,M=m+2;r=Zu(this,o,e,i,l,u,d,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function iR(n,e,t,i,r,s,o,a){let c;if(e.side===fn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ji,a),c===null)return null;Yu.copy(a),Yu.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Yu);return l<t.near||l>t.far?null:{distance:l,point:Yu.clone(),object:n}}function Zu(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ju),n.getVertexPosition(c,$u),n.getVertexPosition(l,qu);let u=iR(n,e,t,i,ju,$u,qu,OM);if(u){let d=new P;Rr.getBarycoord(OM,ju,$u,qu,d),r&&(u.uv=Rr.getInterpolatedAttribute(r,a,c,l,d,new Qe)),s&&(u.uv1=Rr.getInterpolatedAttribute(s,a,c,l,d,new Qe)),o&&(u.normal=Rr.getInterpolatedAttribute(o,a,c,l,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new P,materialIndex:0};Rr.getNormal(ju,$u,qu,h.normal),u.face=h,u.barycoord=d}return u}var Fr=class n extends Ri{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2));function g(y,m,f,E,b,M,I,T,C,N,S){let x=M/C,A=I/N,V=M/2,k=I/2,G=T/2,X=C+1,W=N+1,Z=0,H=0,ee=new P;for(let de=0;de<W;de++){let Me=de*A-k;for(let We=0;We<X;We++){let _t=We*x-V;ee[y]=_t*E,ee[m]=Me*b,ee[f]=G,l.push(ee.x,ee.y,ee.z),ee[y]=0,ee[m]=0,ee[f]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(We/C),d.push(1-de/N),Z+=1}}for(let de=0;de<N;de++)for(let Me=0;Me<C;Me++){let We=h+Me+X*de,_t=h+Me+X*(de+1),$=h+(Me+1)+X*(de+1),ne=h+(Me+1)+X*de;c.push(We,_t,ne),c.push(_t,$,ne),H+=6}a.addGroup(p,H,S),p+=H,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function cn(n){let e={};for(let t=0;t<n.length;t++){let i=Es(n[t]);for(let r in i)e[r]=i[r]}return e}function rR(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ug(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var LS={clone:Es,merge:cn},sR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sR,this.fragmentShader=oR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=rR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},xc=class extends Ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ir=new P,LM=new Qe,FM=new Qe,Zt=class extends xc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,LM,FM),t.subVectors(FM,LM)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bo=-90,Vo=1,ad=class extends Ii{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(Bo,Vo,e,t);r.layers=this.layers,this.add(r);let s=new Zt(Bo,Vo,e,t);s.layers=this.layers,this.add(s);let o=new Zt(Bo,Vo,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Bo,Vo,e,t);a.layers=this.layers,this.add(a);let c=new Zt(Bo,Vo,e,t);c.layers=this.layers,this.add(c);let l=new Zt(Bo,Vo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Mc=class extends sr{constructor(e=[],t=ws,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cd=class extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:nr});s.uniforms.tEquirect.value=t;let o=new bt(r,s),a=t.minFilter;return t.minFilter===Br&&(t.minFilter=_n),new ad(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},ms=class extends Ii{constructor(){super(),this.isGroup=!0,this.type="Group"}},aR={type:"move"},Xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aR)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Sc=class extends Ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var sg=new P,cR=new P,lR=new He,Ci=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=sg.subVectors(i,t).cross(cR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(sg),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||lR.getNormalMatrix(e),r=this.coplanarPoint(sg).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new $o,Ku=new P,Yo=class{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],y=r[10],m=r[11],f=r[12],E=r[13],b=r[14],M=r[15];if(i[0].setComponents(c-s,h-l,m-p,M-f).normalize(),i[1].setComponents(c+s,h+l,m+p,M+f).normalize(),i[2].setComponents(c+o,h+u,m+g,M+E).normalize(),i[3].setComponents(c-o,h-u,m-g,M-E).normalize(),i[4].setComponents(c-a,h-d,m-y,M-b).normalize(),t===Ti)i[5].setComponents(c+a,h+d,m+y,M+b).normalize();else if(t===mc)i[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ku.x=r.normal.x>0?e.max.x:e.min.x,Ku.y=r.normal.y>0?e.max.y:e.min.y,Ku.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ku)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wc=class extends sr{constructor(e,t,i=Vr,r,s,o,a=$n,c=$n,l,u=Go){if(u!==Go&&u!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var bc=class n extends Ri{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],p=[],g=0,y=[],m=i/2,f=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(p,2));function E(){let M=new P,I=new P,T=0,C=(t-e)/i;for(let N=0;N<=s;N++){let S=[],x=N/s,A=x*(t-e)+e;for(let V=0;V<=r;V++){let k=V/r,G=k*c+a,X=Math.sin(G),W=Math.cos(G);I.x=A*X,I.y=-x*i+m,I.z=A*W,d.push(I.x,I.y,I.z),M.set(X,C,W).normalize(),h.push(M.x,M.y,M.z),p.push(k,1-x),S.push(g++)}y.push(S)}for(let N=0;N<r;N++)for(let S=0;S<s;S++){let x=y[S][N],A=y[S+1][N],V=y[S+1][N+1],k=y[S][N+1];(e>0||S!==0)&&(u.push(x,A,k),T+=3),(t>0||S!==s-1)&&(u.push(A,V,k),T+=3)}l.addGroup(f,T,0),f+=T}function b(M){let I=g,T=new Qe,C=new P,N=0,S=M===!0?e:t,x=M===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,m*x,0),h.push(0,x,0),p.push(.5,.5),g++;let A=g;for(let V=0;V<=r;V++){let G=V/r*c+a,X=Math.cos(G),W=Math.sin(G);C.x=S*W,C.y=m*x,C.z=S*X,d.push(C.x,C.y,C.z),h.push(0,x,0),T.x=X*.5+.5,T.y=W*.5*x+.5,p.push(T.x,T.y),g++}for(let V=0;V<r;V++){let k=I+V,G=A+V;M===!0?u.push(G,G+1,k):u.push(G+1,G,k),N+=3}l.addGroup(f,N,M===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Nn=class n extends Ri{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){let E=f*h-o;for(let b=0;b<l;b++){let M=b*d-s;g.push(M,-E,0),y.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){let b=E+l*f,M=E+l*(f+1),I=E+1+l*(f+1),T=E+1+l*f;p.push(b,M,T),p.push(M,I,T)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(y,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var xs=class n extends Ri{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new P,h=new P,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let E=[],b=f/i,M=0;f===0&&o===0?M=.5/t:f===i&&c===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){let T=I/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(T+M,1-b),E.push(l++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){let b=u[f][E+1],M=u[f][E],I=u[f+1][E],T=u[f+1][E+1];(f!==0||o>0)&&p.push(b,M,T),(f!==i-1||c<Math.PI)&&p.push(M,I,T)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(y,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hi=class extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ng,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ld=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ud=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ju(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ms=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dd=class extends Ms{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lg,endingEnd:lg}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ug:s=e,a=2*t-i;break;case dg:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ug:o=e,c=2*i-t;break;case dg:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,f=-h*m+2*h*y-h*g,E=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,b=(-1-p)*m+(1.5+p)*y+.5*g,M=p*m-p*y;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+E*o[l+I]+b*o[c+I]+M*o[d+I];return s}},hd=class extends Ms{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},fd=class extends Ms{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ju(t,this.TimeBufferType),this.values=Ju(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ju(e.times,Array),values:Ju(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fc:t=this.InterpolantFactoryMethodDiscrete;break;case id:t=this.InterpolantFactoryMethodLinear;break;case Qu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fc;case this.InterpolantFactoryMethodLinear:return id;case this.InterpolantFactoryMethodSmooth:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&uR(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Qu,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=id;var kr=class extends On{constructor(e,t,i){super(e,t,i)}};kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=fc;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var pd=class extends On{constructor(e,t,i,r){super(e,t,i,r)}};pd.prototype.ValueTypeName="color";var md=class extends On{constructor(e,t,i,r){super(e,t,i,r)}};md.prototype.ValueTypeName="number";var gd=class extends Ms{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)er.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ec=class extends On{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new gd(this.times,this.values,this.getValueSize(),e)}};Ec.prototype.ValueTypeName="quaternion";Ec.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends On{constructor(e,t,i){super(e,t,i)}};Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=fc;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var vd=class extends On{constructor(e,t,i,r){super(e,t,i,r)}};vd.prototype.ValueTypeName="vector";var pg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},yd=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},FS=new yd,Bg=(()=>{class n{constructor(t){this.manager=t!==void 0?t:FS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})();var _d=class extends Bg{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=pg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Wo("img");function c(){u(),pg.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Ss=class extends Bg{constructor(e){super(e)}load(e,t,i,r){let s=new sr,o=new _d(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Zo=class extends Ii{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var og=new Tt,kM=new P,UM=new P,xd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;kM.setFromMatrixPosition(e.matrixWorld),t.position.copy(kM),UM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(UM),t.updateMatrixWorld(),og.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(og),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(og)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mg=class extends xd{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=_s*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ko=class extends Zo{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ii.DEFAULT_UP),this.updateMatrix(),this.target=new Ii,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new mg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},BM=new Tt,uc=new P,ag=new P,gg=class extends xd{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),uc.setFromMatrixPosition(e.matrixWorld),i.position.copy(uc),ag.copy(i.position),ag.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ag),i.updateMatrixWorld(),r.makeTranslation(-uc.x,-uc.y,-uc.z),BM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(BM)}},Cc=class extends Zo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Md=class extends xc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Tc=class extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sd=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Dc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=VM(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=VM();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function VM(){return performance.now()}var Vg="\\[\\]\\.:\\/",dR=new RegExp("["+Vg+"]","g"),Hg="[^"+Vg+"]",hR="[^"+Vg.replace("\\.","")+"]",fR=/((?:WC+[\/:])*)/.source.replace("WC",Hg),pR=/(WCOD+)?/.source.replace("WCOD",hR),mR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hg),gR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hg),vR=new RegExp("^"+fR+pR+mR+gR+"$"),yR=["material","materials","bones","map"],vg=class{constructor(e,t,i){let r=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dR,"")}static parseTrackName(t){let i=vR.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);yR.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=vg,n})();Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gH=new Float32Array(1);var HM=new Tt,Ac=class{constructor(e,t,i=0,r=1/0){this.ray=new vc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return HM.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(HM),this}intersectObject(e,t=!0,i=[]){return yg(e,this,i,t),i.sort(zM),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yg(e[r],this,i,t);return i.sort(zM),i}};function zM(n,e){return n.distance-e.distance}function yg(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)yg(s[o],e,t,!0)}}var Ic=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Rc=class extends Di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zg(n,e,t,i){let r=_R(i);switch(t){case Dg:return n*e;case Ig:return n*e/r.components*r.byteLength;case kd:return n*e/r.components*r.byteLength;case Rg:return n*e*2/r.components*r.byteLength;case Ud:return n*e*2/r.components*r.byteLength;case Ag:return n*e*3/r.components*r.byteLength;case Xn:return n*e*4/r.components*r.byteLength;case Bd:return n*e*4/r.components*r.byteLength;case Oc:case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fc:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hd:case Gd:return Math.max(n,16)*Math.max(e,8)/4;case Vd:case zd:return Math.max(n,8)*Math.max(e,8)/2;case Wd:case jd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uc:case ah:case ch:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pg:case lh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uh:case dh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _R(n){switch(n){case fi:case Eg:return{byteLength:1,components:1};case Jo:case Cg:case Qo:return{byteLength:2,components:1};case Ld:case Fd:return{byteLength:2,components:4};case Vr:case Od:case Ni:return{byteLength:4,components:1};case Tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);function ow(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xR(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var MR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ER=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,IR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$R=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KR="gl_FragColor = linearToOutputTexel( gl_FragColor );",JR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_P=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$P=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_N=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ON=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$N=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:MR,alphahash_pars_fragment:SR,alphamap_fragment:wR,alphamap_pars_fragment:bR,alphatest_fragment:ER,alphatest_pars_fragment:CR,aomap_fragment:TR,aomap_pars_fragment:DR,batching_pars_vertex:AR,batching_vertex:IR,begin_vertex:RR,beginnormal_vertex:PR,bsdfs:NR,iridescence_fragment:OR,bumpmap_pars_fragment:LR,clipping_planes_fragment:FR,clipping_planes_pars_fragment:kR,clipping_planes_pars_vertex:UR,clipping_planes_vertex:BR,color_fragment:VR,color_pars_fragment:HR,color_pars_vertex:zR,color_vertex:GR,common:WR,cube_uv_reflection_fragment:jR,defaultnormal_vertex:$R,displacementmap_pars_vertex:qR,displacementmap_vertex:XR,emissivemap_fragment:YR,emissivemap_pars_fragment:ZR,colorspace_fragment:KR,colorspace_pars_fragment:JR,envmap_fragment:QR,envmap_common_pars_fragment:eP,envmap_pars_fragment:tP,envmap_pars_vertex:nP,envmap_physical_pars_fragment:fP,envmap_vertex:iP,fog_vertex:rP,fog_pars_vertex:sP,fog_fragment:oP,fog_pars_fragment:aP,gradientmap_pars_fragment:cP,lightmap_pars_fragment:lP,lights_lambert_fragment:uP,lights_lambert_pars_fragment:dP,lights_pars_begin:hP,lights_toon_fragment:pP,lights_toon_pars_fragment:mP,lights_phong_fragment:gP,lights_phong_pars_fragment:vP,lights_physical_fragment:yP,lights_physical_pars_fragment:_P,lights_fragment_begin:xP,lights_fragment_maps:MP,lights_fragment_end:SP,logdepthbuf_fragment:wP,logdepthbuf_pars_fragment:bP,logdepthbuf_pars_vertex:EP,logdepthbuf_vertex:CP,map_fragment:TP,map_pars_fragment:DP,map_particle_fragment:AP,map_particle_pars_fragment:IP,metalnessmap_fragment:RP,metalnessmap_pars_fragment:PP,morphinstance_vertex:NP,morphcolor_vertex:OP,morphnormal_vertex:LP,morphtarget_pars_vertex:FP,morphtarget_vertex:kP,normal_fragment_begin:UP,normal_fragment_maps:BP,normal_pars_fragment:VP,normal_pars_vertex:HP,normal_vertex:zP,normalmap_pars_fragment:GP,clearcoat_normal_fragment_begin:WP,clearcoat_normal_fragment_maps:jP,clearcoat_pars_fragment:$P,iridescence_pars_fragment:qP,opaque_fragment:XP,packing:YP,premultiplied_alpha_fragment:ZP,project_vertex:KP,dithering_fragment:JP,dithering_pars_fragment:QP,roughnessmap_fragment:eN,roughnessmap_pars_fragment:tN,shadowmap_pars_fragment:nN,shadowmap_pars_vertex:iN,shadowmap_vertex:rN,shadowmask_pars_fragment:sN,skinbase_vertex:oN,skinning_pars_vertex:aN,skinning_vertex:cN,skinnormal_vertex:lN,specularmap_fragment:uN,specularmap_pars_fragment:dN,tonemapping_fragment:hN,tonemapping_pars_fragment:fN,transmission_fragment:pN,transmission_pars_fragment:mN,uv_pars_fragment:gN,uv_pars_vertex:vN,uv_vertex:yN,worldpos_vertex:_N,background_vert:xN,background_frag:MN,backgroundCube_vert:SN,backgroundCube_frag:wN,cube_vert:bN,cube_frag:EN,depth_vert:CN,depth_frag:TN,distanceRGBA_vert:DN,distanceRGBA_frag:AN,equirect_vert:IN,equirect_frag:RN,linedashed_vert:PN,linedashed_frag:NN,meshbasic_vert:ON,meshbasic_frag:LN,meshlambert_vert:FN,meshlambert_frag:kN,meshmatcap_vert:UN,meshmatcap_frag:BN,meshnormal_vert:VN,meshnormal_frag:HN,meshphong_vert:zN,meshphong_frag:GN,meshphysical_vert:WN,meshphysical_frag:jN,meshtoon_vert:$N,meshtoon_frag:qN,points_vert:XN,points_frag:YN,shadow_vert:ZN,shadow_frag:KN,sprite_vert:JN,sprite_frag:QN},ie={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Oi={basic:{uniforms:cn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:cn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:cn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:cn([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:cn([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:cn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:cn([ie.points,ie.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:cn([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:cn([ie.common,ie.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:cn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:cn([ie.sprite,ie.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:cn([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:cn([ie.lights,ie.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Oi.physical={uniforms:cn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var hh={r:0,b:0,g:0},Cs=new Or,eO=new Tt;function tO(n,e,t,i,r,s,o){let a=new Ke(0),c=s===!0?0:1,l,u,d=null,h=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function y(b){let M=!1,I=g(b);I===null?f(a,c):I&&I.isColor&&(f(I,1),M=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){let I=g(M);I&&(I.isCubeTexture||I.mapping===Pc)?(u===void 0&&(u=new bt(new Fr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Es(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cs.copy(M.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eO.makeRotationFromEuler(Cs)),u.material.toneMapped=at.getTransfer(I.colorSpace)!==gt,(d!==I||h!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=I,h=I.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new bt(new Nn(2,2),new di({name:"BackgroundMaterial",uniforms:Es(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=at.getTransfer(I.colorSpace)!==gt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||h!==I.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=I,h=I.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(hh,Ug(n)),i.buffers.color.setClear(hh.r,hh.g,hh.b,M,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:y,addToRenderList:m,dispose:E}}function nO(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(x,A,V,k,G){let X=!1,W=d(k,V,A);s!==W&&(s=W,l(s.object)),X=p(x,k,V,G),X&&g(x,k,V,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(x,A,V,k),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,A,V){let k=V.wireframe===!0,G=i[x.id];G===void 0&&(G={},i[x.id]=G);let X=G[A.id];X===void 0&&(X={},G[A.id]=X);let W=X[k];return W===void 0&&(W=h(c()),X[k]=W),W}function h(x){let A=[],V=[],k=[];for(let G=0;G<t;G++)A[G]=0,V[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:V,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,A,V,k){let G=s.attributes,X=A.attributes,W=0,Z=V.getAttributes();for(let H in Z)if(Z[H].location>=0){let de=G[H],Me=X[H];if(Me===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),de===void 0||de.attribute!==Me||Me&&de.data!==Me.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(x,A,V,k){let G={},X=A.attributes,W=0,Z=V.getAttributes();for(let H in Z)if(Z[H].location>=0){let de=X[H];de===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let Me={};Me.attribute=de,de&&de.data&&(Me.data=de.data),G[H]=Me,W++}s.attributes=G,s.attributesNum=W,s.index=k}function y(){let x=s.newAttributes;for(let A=0,V=x.length;A<V;A++)x[A]=0}function m(x){f(x,0)}function f(x,A){let V=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;V[x]=1,k[x]===0&&(n.enableVertexAttribArray(x),k[x]=1),G[x]!==A&&(n.vertexAttribDivisor(x,A),G[x]=A)}function E(){let x=s.newAttributes,A=s.enabledAttributes;for(let V=0,k=A.length;V<k;V++)A[V]!==x[V]&&(n.disableVertexAttribArray(V),A[V]=0)}function b(x,A,V,k,G,X,W){W===!0?n.vertexAttribIPointer(x,A,V,G,X):n.vertexAttribPointer(x,A,V,k,G,X)}function M(x,A,V,k){y();let G=k.attributes,X=V.getAttributes(),W=A.defaultAttributeValues;for(let Z in X){let H=X[Z];if(H.location>=0){let ee=G[Z];if(ee===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){let de=ee.normalized,Me=ee.itemSize,We=e.get(ee);if(We===void 0)continue;let _t=We.buffer,$=We.type,ne=We.bytesPerElement,ye=$===n.INT||$===n.UNSIGNED_INT||ee.gpuType===Od;if(ee.isInterleavedBufferAttribute){let se=ee.data,Ce=se.stride,lt=ee.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)f(H.location+Ne,se.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)m(H.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Ne=0;Ne<H.locationSize;Ne++)b(H.location+Ne,Me/H.locationSize,$,de,Ce*ne,(lt+Me/H.locationSize*Ne)*ne,ye)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)f(H.location+se,ee.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let se=0;se<H.locationSize;se++)b(H.location+se,Me/H.locationSize,$,de,Me*ne,Me/H.locationSize*se*ne,ye)}}else if(W!==void 0){let de=W[Z];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}E()}function I(){N();for(let x in i){let A=i[x];for(let V in A){let k=A[V];for(let G in k)u(k[G].object),delete k[G];delete A[V]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;let A=i[x.id];for(let V in A){let k=A[V];for(let G in k)u(k[G].object),delete k[G];delete A[V]}delete i[x.id]}function C(x){for(let A in i){let V=i[A];if(V[x.id]===void 0)continue;let k=V[x.id];for(let G in k)u(k[G].object),delete k[G];delete V[x.id]}}function N(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function iO(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,h){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*h[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rO(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Xn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let N=C===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==fi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ni&&!N)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:I,maxSamples:T}}function sO(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Ci,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let E=s?0:i,b=E*4,M=f.clippingState||null;c.value=M,M=u(g,h,b,p);for(let I=0;I!==b;++I)M[I]=t[I];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let f=p+y*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=p;b!==y;++b,M+=4)o.copy(d[b]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function oO(n){let e=new WeakMap;function t(o,a){return a===Rd?o.mapping=ws:a===Pd&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rd||a===Pd)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new cd(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ra=4,kS=[.125,.215,.35,.446,.526,.582],As=20,Gg=new Md,US=new Ke,Wg=null,jg=0,$g=0,qg=!1,Ds=(1+Math.sqrt(5))/2,ia=1/Ds,BS=[new P(-Ds,ia,0),new P(Ds,ia,0),new P(-ia,0,Ds),new P(ia,0,Ds),new P(0,Ds,-ia),new P(0,Ds,ia),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],aO=new P,mh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=aO}=s;Wg=this._renderer.getRenderTarget(),jg=this._renderer.getActiveCubeFace(),$g=this._renderer.getActiveMipmapLevel(),qg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=HS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wg,jg,$g),this._renderer.xr.enabled=qg,e.scissorTest=!1,fh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wg=this._renderer.getRenderTarget(),jg=this._renderer.getActiveCubeFace(),$g=this._renderer.getActiveMipmapLevel(),qg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Qo,format:Xn,colorSpace:ys,depthBuffer:!1},r=VS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=VS(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cO(s)),this._blurMaterial=lO(s,e,t)}return r}_compileMaterial(e){let t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Gg)}_sceneToCubeUV(e,t,i,r,s){let c=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(US),d.toneMapping=ir,d.autoClear=!1;let g=new tr({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),y=new bt(new Fr,g),m=!1,f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(US),m=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):b===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));let M=this._cubeSize;fh(r,b*M,E>2?M:0,M,M),d.setRenderTarget(r),m&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ws||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=HS());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;fh(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Gg)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=BS[(r-s-1)%BS.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new bt(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*As-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):As;m>As&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);let f=[],E=0;for(let C=0;C<As;++C){let N=C/y,S=Math.exp(-N*N/2);f.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;let M=this._sizeLods[r],I=3*M*(r>b-ra?r-b+ra:0),T=4*(this._cubeSize-M);fh(t,I,T,3*M,2*M),c.setRenderTarget(t),c.render(d,Gg)}};function cO(n){let e=[],t=[],i=[],r=n,s=n-ra+1+kS.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-ra?c=kS[o-n+ra-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,m=2,f=1,E=new Float32Array(y*g*p),b=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,N=T>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];E.set(S,y*g*T),b.set(h,m*g*T);let x=[T,T,T,T,T,T];M.set(x,f*g*T)}let I=new Ri;I.setAttribute("position",new Pn(E,y)),I.setAttribute("uv",new Pn(b,m)),I.setAttribute("faceIndex",new Pn(M,f)),e.push(I),r>ra&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function VS(n,e,t){let i=new Ai(n,e,t);return i.texture.mapping=Pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lO(n,e,t){let i=new Float32Array(As),r=new P(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:iv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function HS(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function zS(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function iv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uO(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Rd||c===Pd,u=c===ws||c===bs;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new mh(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new mh(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dO(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Bc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hO(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(d){let h=[],p=d.index,g=d.attributes.position,y=0;if(p!==null){let E=p.array;y=p.version;for(let b=0,M=E.length;b<M;b+=3){let I=E[b+0],T=E[b+1],C=E[b+2];h.push(I,T,T,C,C,I)}}else if(g!==void 0){let E=g.array;y=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){let I=b+0,T=b+1,C=b+2;h.push(I,T,T,C,C,I)}}else return;let m=new(kg(h)?_c:yc)(h,1);m.version=y;let f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){let h=s.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function fO(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(h,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*y[E];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function pO(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mO(n,e,t){let i=new WeakMap,r=new mt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let x=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;g===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let I=a.attributes.position.count*M,T=1;I>e.maxTextureSize&&(T=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let C=new Float32Array(I*T*4*d),N=new gc(C,I,T,d);N.type=Ni,N.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let V=f[A],k=E[A],G=b[A],X=I*T*4*A;for(let W=0;W<V.count;W++){let Z=W*S;g===!0&&(r.fromBufferAttribute(V,W),C[X+Z+0]=r.x,C[X+Z+1]=r.y,C[X+Z+2]=r.z,C[X+Z+3]=0),y===!0&&(r.fromBufferAttribute(k,W),C[X+Z+4]=r.x,C[X+Z+5]=r.y,C[X+Z+6]=r.z,C[X+Z+7]=0),m===!0&&(r.fromBufferAttribute(G,W),C[X+Z+8]=r.x,C[X+Z+9]=r.y,C[X+Z+10]=r.z,C[X+Z+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:N,size:new Qe(I,T)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function gO(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var aw=new sr,GS=new wc(1,1),cw=new gc,lw=new od,uw=new Mc,WS=[],jS=[],$S=new Float32Array(16),qS=new Float32Array(9),XS=new Float32Array(4);function oa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=WS[r];if(s===void 0&&(s=new Float32Array(r),WS[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vh(n,e){let t=jS[e];t===void 0&&(t=new Int32Array(e),jS[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function _O(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function xO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function MO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,i))return;XS.set(i),n.uniformMatrix2fv(this.addr,!1,XS),zt(t,i)}}function SO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,i))return;qS.set(i),n.uniformMatrix3fv(this.addr,!1,qS),zt(t,i)}}function wO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,i))return;$S.set(i),n.uniformMatrix4fv(this.addr,!1,$S),zt(t,i)}}function bO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function EO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function CO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function TO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function DO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function IO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function RO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function PO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(GS.compareFunction=Og,s=GS):s=aw,t.setTexture2D(e||s,r)}function NO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lw,r)}function OO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||uw,r)}function LO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cw,r)}function FO(n){switch(n){case 5126:return vO;case 35664:return yO;case 35665:return _O;case 35666:return xO;case 35674:return MO;case 35675:return SO;case 35676:return wO;case 5124:case 35670:return bO;case 35667:case 35671:return EO;case 35668:case 35672:return CO;case 35669:case 35673:return TO;case 5125:return DO;case 36294:return AO;case 36295:return IO;case 36296:return RO;case 35678:case 36198:case 36298:case 36306:case 35682:return PO;case 35679:case 36299:case 36307:return NO;case 35680:case 36300:case 36308:case 36293:return OO;case 36289:case 36303:case 36311:case 36292:return LO}}function kO(n,e){n.uniform1fv(this.addr,e)}function UO(n,e){let t=oa(e,this.size,2);n.uniform2fv(this.addr,t)}function BO(n,e){let t=oa(e,this.size,3);n.uniform3fv(this.addr,t)}function VO(n,e){let t=oa(e,this.size,4);n.uniform4fv(this.addr,t)}function HO(n,e){let t=oa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zO(n,e){let t=oa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function GO(n,e){let t=oa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function WO(n,e){n.uniform1iv(this.addr,e)}function jO(n,e){n.uniform2iv(this.addr,e)}function $O(n,e){n.uniform3iv(this.addr,e)}function qO(n,e){n.uniform4iv(this.addr,e)}function XO(n,e){n.uniform1uiv(this.addr,e)}function YO(n,e){n.uniform2uiv(this.addr,e)}function ZO(n,e){n.uniform3uiv(this.addr,e)}function KO(n,e){n.uniform4uiv(this.addr,e)}function JO(n,e,t){let i=this.cache,r=e.length,s=vh(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||aw,s[o])}function QO(n,e,t){let i=this.cache,r=e.length,s=vh(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||lw,s[o])}function eL(n,e,t){let i=this.cache,r=e.length,s=vh(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||uw,s[o])}function tL(n,e,t){let i=this.cache,r=e.length,s=vh(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||cw,s[o])}function nL(n){switch(n){case 5126:return kO;case 35664:return UO;case 35665:return BO;case 35666:return VO;case 35674:return HO;case 35675:return zO;case 35676:return GO;case 5124:case 35670:return WO;case 35667:case 35671:return jO;case 35668:case 35672:return $O;case 35669:case 35673:return qO;case 5125:return XO;case 36294:return YO;case 36295:return ZO;case 36296:return KO;case 35678:case 36198:case 36298:case 36306:case 35682:return JO;case 35679:case 36299:case 36307:return QO;case 35680:case 36300:case 36308:case 36293:return eL;case 36289:case 36303:case 36311:case 36292:return tL}}var Yg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=FO(t.type)}},Zg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nL(t.type)}},Kg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Xg=/(\w+)(\])?(\[|\.)?/g;function YS(n,e){n.seq.push(e),n.map[e.id]=e}function iL(n,e,t){let i=n.name,r=i.length;for(Xg.lastIndex=0;;){let s=Xg.exec(i),o=Xg.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){YS(t,l===void 0?new Yg(a,n,e):new Zg(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Kg(a),YS(t,d)),t=d}}}var sa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);iL(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function ZS(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var rL=37297,sL=0;function oL(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var KS=new He;function aL(n){at._getMatrix(KS,at.workingColorSpace,n);let e=`mat3( ${KS.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case pc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function JS(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oL(n.getShaderSource(e),o)}else return r}function cL(n,e){let t=aL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lL(n,e){let t;switch(e){case hS:t="Linear";break;case fS:t="Reinhard";break;case pS:t="Cineon";break;case mS:t="ACESFilmic";break;case vS:t="AgX";break;case yS:t="Neutral";break;case gS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ph=new P;function uL(){at.getLuminanceCoefficients(ph);let n=ph.x.toFixed(4),e=ph.y.toFixed(4),t=ph.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vc).join(`
`)}function hL(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fL(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vc(n){return n!==""}function QS(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ew(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jg(n){return n.replace(pL,gL)}var mL=new Map;function gL(n,e){let t=$e[e];if(t===void 0){let i=mL.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jg(t)}var vL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tw(n){return n.replace(vL,yL)}function yL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nw(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _L(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function xL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case bs:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ML(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function SL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bg:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case dS:e="ENVMAP_BLENDING_ADD";break}return e}function wL(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bL(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=_L(t),l=xL(t),u=ML(t),d=SL(t),h=wL(t),p=dL(t),g=hL(s),y=r.createProgram(),m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vc).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vc).join(`
`),f.length>0&&(f+=`
`)):(m=[nw(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vc).join(`
`),f=[nw(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?$e.tonemapping_pars_fragment:"",t.toneMapping!==ir?lL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,cL("linearToOutputTexel",t.outputColorSpace),uL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vc).join(`
`)),o=Jg(o),o=QS(o,t),o=ew(o,t),a=Jg(a),a=QS(a,t),a=ew(a,t),o=tw(o),a=tw(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=E+m+o,M=E+f+a,I=ZS(r,r.VERTEX_SHADER,b),T=ZS(r,r.FRAGMENT_SHADER,M);r.attachShader(y,I),r.attachShader(y,T),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(A){if(n.debug.checkShaderErrors){let V=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(I).trim(),G=r.getShaderInfoLog(T).trim(),X=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,I,T);else{let Z=JS(r,I,"vertex"),H=JS(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+V+`
`+Z+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||G==="")&&(W=!1);W&&(A.diagnostics={runnable:X,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(I),r.deleteShader(T),N=new sa(r,y),S=fL(r,y)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,rL)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sL++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=T,this}var EL=0,Qg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ev(e),t.set(e,i)),i}},ev=class{constructor(e){this.id=EL++,this.code=e,this.usedTimes=0}};function CL(n,e,t,i,r,s,o){let a=new qo,c=new Qg,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,A,V,k){let G=V.fog,X=k.geometry,W=S.isMeshStandardMaterial?V.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),H=Z&&Z.mapping===Pc?Z.image.height:null,ee=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=de!==void 0?de.length:0,We=0;X.morphAttributes.position!==void 0&&(We=1),X.morphAttributes.normal!==void 0&&(We=2),X.morphAttributes.color!==void 0&&(We=3);let _t,$,ne,ye;if(ee){let pt=Oi[ee];_t=pt.vertexShader,$=pt.fragmentShader}else _t=S.vertexShader,$=S.fragmentShader,c.update(S),ne=c.getVertexShaderID(S),ye=c.getFragmentShaderID(S);let se=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),lt=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,Lt=!!S.map,Dt=!!S.matcap,et=!!Z,D=!!S.aoMap,Ln=!!S.lightMap,st=!!S.bumpMap,tt=!!S.normalMap,we=!!S.displacementMap,wt=!!S.emissiveMap,Se=!!S.metalnessMap,w=!!S.roughnessMap,v=S.anisotropy>0,F=S.clearcoat>0,q=S.dispersion>0,K=S.iridescence>0,j=S.sheen>0,xe=S.transmission>0,oe=v&&!!S.anisotropyMap,Te=F&&!!S.clearcoatMap,Re=F&&!!S.clearcoatNormalMap,J=F&&!!S.clearcoatRoughnessMap,pe=K&&!!S.iridescenceMap,Pe=K&&!!S.iridescenceThicknessMap,Fe=j&&!!S.sheenColorMap,me=j&&!!S.sheenRoughnessMap,nt=!!S.specularMap,je=!!S.specularColorMap,St=!!S.specularIntensityMap,R=xe&&!!S.transmissionMap,ae=xe&&!!S.thicknessMap,z=!!S.gradientMap,Y=!!S.alphaMap,le=S.alphaTest>0,ce=!!S.alphaHash,ze=!!S.extensions,It=ir;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(It=n.toneMapping);let tn={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:$,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:lt,instancingColor:lt&&k.instanceColor!==null,instancingMorph:lt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ys,alphaToCoverage:!!S.alphaToCoverage,map:Lt,matcap:Dt,envMap:et,envMapMode:et&&Z.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Ln,bumpMap:st,normalMap:tt,displacementMap:h&&we,emissiveMap:wt,normalMapObjectSpace:tt&&S.normalMapType===SS,normalMapTangentSpace:tt&&S.normalMapType===Ng,metalnessMap:Se,roughnessMap:w,anisotropy:v,anisotropyMap:oe,clearcoat:F,clearcoatMap:Te,clearcoatNormalMap:Re,clearcoatRoughnessMap:J,dispersion:q,iridescence:K,iridescenceMap:pe,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Fe,sheenRoughnessMap:me,specularMap:nt,specularColorMap:je,specularIntensityMap:St,transmission:xe,transmissionMap:R,thicknessMap:ae,gradientMap:z,opaque:S.transparent===!1&&S.blending===gs&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:le,alphaHash:ce,combine:S.combine,mapUv:Lt&&y(S.map.channel),aoMapUv:D&&y(S.aoMap.channel),lightMapUv:Ln&&y(S.lightMap.channel),bumpMapUv:st&&y(S.bumpMap.channel),normalMapUv:tt&&y(S.normalMap.channel),displacementMapUv:we&&y(S.displacementMap.channel),emissiveMapUv:wt&&y(S.emissiveMap.channel),metalnessMapUv:Se&&y(S.metalnessMap.channel),roughnessMapUv:w&&y(S.roughnessMap.channel),anisotropyMapUv:oe&&y(S.anisotropyMap.channel),clearcoatMapUv:Te&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&y(S.sheenRoughnessMap.channel),specularMapUv:nt&&y(S.specularMap.channel),specularColorMapUv:je&&y(S.specularColorMap.channel),specularIntensityMapUv:St&&y(S.specularIntensityMap.channel),transmissionMapUv:R&&y(S.transmissionMap.channel),thicknessMapUv:ae&&y(S.thicknessMap.channel),alphaMapUv:Y&&y(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(tt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(Lt||Y),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ce,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:We,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:Lt&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===gt,decodeVideoTextureEmissive:wt&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qn,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return tn.vertexUv1s=l.has(1),tn.vertexUv2s=l.has(2),tn.vertexUv3s=l.has(3),l.clear(),tn}function f(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)x.push(A),x.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(E(x,S),b(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function b(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let x=g[S.type],A;if(x){let V=Oi[x];A=LS.clone(V.uniforms)}else A=S.uniforms;return A}function I(S,x){let A;for(let V=0,k=u.length;V<k;V++){let G=u[V];if(G.cacheKey===x){A=G,++A.usedTimes;break}}return A===void 0&&(A=new bL(n,x,S,s),u.push(A)),A}function T(S){if(--S.usedTimes===0){let x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function C(S){c.remove(S)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:I,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:N}}function TL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function DL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function iw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rw(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,g,y,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=m),e++,f}function a(d,h,p,g,y,m){let f=o(d,h,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(d,h,p,g,y,m){let f=o(d,h,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||DL),i.length>1&&i.sort(h||iw),r.length>1&&r.sort(h||iw)}function u(){for(let d=e,h=n.length;d<h;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function AL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new rw,n.set(i,[o])):r>=s.length?(o=new rw,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ke};break;case"SpotLight":t={position:new P,direction:new P,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function RL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var PL=0;function NL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OL(n){let e=new IL,t=RL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let r=new P,s=new Tt,o=new Tt;function a(l){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,E=0,b=0,M=0,I=0,T=0,C=0;l.sort(NL);for(let S=0,x=l.length;S<x;S++){let A=l[S],V=A.color,k=A.intensity,G=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=V.r*k,d+=V.g*k,h+=V.b*k;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],k);C++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,H=t.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=A.shadow.matrix,E++}i.directional[p]=W,p++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(V).multiplyScalar(k),W.distance=G,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[y]=W;let Z=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,Z.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[y]=Z.matrix,A.castShadow){let H=t.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=X,M++}y++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(V).multiplyScalar(k),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=W,m++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let Z=A.shadow,H=t.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=A.shadow.matrix,b++}i.point[g]=W,g++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(k),W.groundColor.copy(A.groundColor).multiplyScalar(k),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==M||N.numSpotMaps!==I||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,N.directionalLength=p,N.pointLength=g,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=M,N.numSpotMaps=I,N.numLightProbes=C,i.version=PL++)}function c(l,u){let d=0,h=0,p=0,g=0,y=0,m=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){let b=l[f];if(b.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=i.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){let M=i.hemi[y];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function sw(n){let e=new OL(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function LL(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new sw(n),e.set(r,[a])):s>=o.length?(a=new sw(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var FL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UL(n,e,t){let i=new Yo,r=new Qe,s=new Qe,o=new mt,a=new ld({depthPacking:MS}),c=new ud,l={},u=t.maxTextureSize,d={[Ji]:fn,[fn]:Ji,[qn]:qn},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:FL,fragmentShader:kL}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ri;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xg;let f=this.type;this.render=function(T,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),V=n.state;V.setBlending(nr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let k=f!==Pi&&this.type===Pi,G=f===Pi&&this.type!==Pi;for(let X=0,W=T.length;X<W;X++){let Z=T[X],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||k===!0||G===!0){let Me=this.type!==Pi?{minFilter:$n,magFilter:$n}:{};H.map!==null&&H.map.dispose(),H.map=new Ai(r.x,r.y,Me),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let de=H.getViewportCount();for(let Me=0;Me<de;Me++){let We=H.getViewport(Me);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),V.viewport(o),H.updateMatrices(Z,Me),i=H.getFrustum(),M(C,N,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Pi&&E(H,N),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,A)};function E(T,C){let N=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ai(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,N,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,N,p,y,null)}function b(T,C,N,S){let x=null,A=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)x=A;else if(x=N.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let V=x.uuid,k=C.uuid,G=l[V];G===void 0&&(G={},l[V]=G);let X=G[k];X===void 0&&(X=x.clone(),G[k]=X,C.addEventListener("dispose",I)),x=X}if(x.visible=C.visible,x.wireframe=C.wireframe,S===Pi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let V=n.properties.get(x);V.light=N}return x}function M(T,C,N,S,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Pi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);let k=e.update(T),G=T.material;if(Array.isArray(G)){let X=k.groups;for(let W=0,Z=X.length;W<Z;W++){let H=X[W],ee=G[H.materialIndex];if(ee&&ee.visible){let de=b(T,ee,S,x);T.onBeforeShadow(n,T,C,N,k,de,H),n.renderBufferDirect(N,null,k,de,T,H),T.onAfterShadow(n,T,C,N,k,de,H)}}}else if(G.visible){let X=b(T,G,S,x);T.onBeforeShadow(n,T,C,N,k,X,null),n.renderBufferDirect(N,null,k,X,T,null),T.onAfterShadow(n,T,C,N,k,X,null)}}let V=T.children;for(let k=0,G=V.length;k<G;k++)M(V[k],C,N,S,x)}function I(T){T.target.removeEventListener("dispose",I);for(let N in l){let S=l[N],x=T.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}var BL={[bd]:Ed,[Cd]:Ad,[Td]:Id,[vs]:Dd,[Ed]:bd,[Ad]:Cd,[Id]:Td,[Dd]:vs};function VL(n,e){function t(){let R=!1,ae=new mt,z=null,Y=new mt(0,0,0,0);return{setMask:function(le){z!==le&&!R&&(n.colorMask(le,le,le,le),z=le)},setLocked:function(le){R=le},setClear:function(le,ce,ze,It,tn){tn===!0&&(le*=It,ce*=It,ze*=It),ae.set(le,ce,ze,It),Y.equals(ae)===!1&&(n.clearColor(le,ce,ze,It),Y.copy(ae))},reset:function(){R=!1,z=null,Y.set(-1,0,0,0)}}}function i(){let R=!1,ae=!1,z=null,Y=null,le=null;return{setReversed:function(ce){if(ae!==ce){let ze=e.get("EXT_clip_control");ce?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ae=ce;let It=le;le=null,this.setClear(It)}},getReversed:function(){return ae},setTest:function(ce){ce?se(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ce){z!==ce&&!R&&(n.depthMask(ce),z=ce)},setFunc:function(ce){if(ae&&(ce=BL[ce]),Y!==ce){switch(ce){case bd:n.depthFunc(n.NEVER);break;case Ed:n.depthFunc(n.ALWAYS);break;case Cd:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case Td:n.depthFunc(n.EQUAL);break;case Dd:n.depthFunc(n.GEQUAL);break;case Ad:n.depthFunc(n.GREATER);break;case Id:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=ce}},setLocked:function(ce){R=ce},setClear:function(ce){le!==ce&&(ae&&(ce=1-ce),n.clearDepth(ce),le=ce)},reset:function(){R=!1,z=null,Y=null,le=null,ae=!1}}}function r(){let R=!1,ae=null,z=null,Y=null,le=null,ce=null,ze=null,It=null,tn=null;return{setTest:function(pt){R||(pt?se(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(pt){ae!==pt&&!R&&(n.stencilMask(pt),ae=pt)},setFunc:function(pt,Yn,Li){(z!==pt||Y!==Yn||le!==Li)&&(n.stencilFunc(pt,Yn,Li),z=pt,Y=Yn,le=Li)},setOp:function(pt,Yn,Li){(ce!==pt||ze!==Yn||It!==Li)&&(n.stencilOp(pt,Yn,Li),ce=pt,ze=Yn,It=Li)},setLocked:function(pt){R=pt},setClear:function(pt){tn!==pt&&(n.clearStencil(pt),tn=pt)},reset:function(){R=!1,ae=null,z=null,Y=null,le=null,ce=null,ze=null,It=null,tn=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,b=null,M=null,I=null,T=null,C=new Ke(0,0,0),N=0,S=!1,x=null,A=null,V=null,k=null,G=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Z=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Z>=2);let ee=null,de={},Me=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),_t=new mt().fromArray(Me),$=new mt().fromArray(We);function ne(R,ae,z,Y){let le=new Uint8Array(4),ce=n.createTexture();n.bindTexture(R,ce),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<z;ze++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ae+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ce}let ye={};ye[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(vs),st(!1),tt(_g),se(n.CULL_FACE),D(nr);function se(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function Ce(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function lt(R,ae){return d[R]!==ae?(n.bindFramebuffer(R,ae),d[R]=ae,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ne(R,ae){let z=p,Y=!1;if(R){z=h.get(ae),z===void 0&&(z=[],h.set(ae,z));let le=R.textures;if(z.length!==le.length||z[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,ze=le.length;ce<ze;ce++)z[ce]=n.COLOR_ATTACHMENT0+ce;z.length=le.length,Y=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,Y=!0);Y&&n.drawBuffers(z)}function Lt(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let Dt={[Nr]:n.FUNC_ADD,[qM]:n.FUNC_SUBTRACT,[XM]:n.FUNC_REVERSE_SUBTRACT};Dt[YM]=n.MIN,Dt[ZM]=n.MAX;let et={[KM]:n.ZERO,[JM]:n.ONE,[QM]:n.SRC_COLOR,[ed]:n.SRC_ALPHA,[sS]:n.SRC_ALPHA_SATURATE,[iS]:n.DST_COLOR,[tS]:n.DST_ALPHA,[eS]:n.ONE_MINUS_SRC_COLOR,[td]:n.ONE_MINUS_SRC_ALPHA,[rS]:n.ONE_MINUS_DST_COLOR,[nS]:n.ONE_MINUS_DST_ALPHA,[oS]:n.CONSTANT_COLOR,[aS]:n.ONE_MINUS_CONSTANT_COLOR,[cS]:n.CONSTANT_ALPHA,[lS]:n.ONE_MINUS_CONSTANT_ALPHA};function D(R,ae,z,Y,le,ce,ze,It,tn,pt){if(R===nr){y===!0&&(Ce(n.BLEND),y=!1);return}if(y===!1&&(se(n.BLEND),y=!0),R!==$M){if(R!==m||pt!==S){if((f!==Nr||M!==Nr)&&(n.blendEquation(n.FUNC_ADD),f=Nr,M=Nr),pt)switch(R){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mg:n.blendFunc(n.ONE,n.ONE);break;case Sg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,b=null,I=null,T=null,C.set(0,0,0),N=0,m=R,S=pt}return}le=le||ae,ce=ce||z,ze=ze||Y,(ae!==f||le!==M)&&(n.blendEquationSeparate(Dt[ae],Dt[le]),f=ae,M=le),(z!==E||Y!==b||ce!==I||ze!==T)&&(n.blendFuncSeparate(et[z],et[Y],et[ce],et[ze]),E=z,b=Y,I=ce,T=ze),(It.equals(C)===!1||tn!==N)&&(n.blendColor(It.r,It.g,It.b,tn),C.copy(It),N=tn),m=R,S=!1}function Ln(R,ae){R.side===qn?Ce(n.CULL_FACE):se(n.CULL_FACE);let z=R.side===fn;ae&&(z=!z),st(z),R.blending===gs&&R.transparent===!1?D(nr):D(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let Y=R.stencilWrite;a.setTest(Y),Y&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),wt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(R){x!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),x=R)}function tt(R){R!==GM?(se(n.CULL_FACE),R!==A&&(R===_g?n.cullFace(n.BACK):R===WM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),A=R}function we(R){R!==V&&(W&&n.lineWidth(R),V=R)}function wt(R,ae,z){R?(se(n.POLYGON_OFFSET_FILL),(k!==ae||G!==z)&&(n.polygonOffset(ae,z),k=ae,G=z)):Ce(n.POLYGON_OFFSET_FILL)}function Se(R){R?se(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function w(R){R===void 0&&(R=n.TEXTURE0+X-1),ee!==R&&(n.activeTexture(R),ee=R)}function v(R,ae,z){z===void 0&&(ee===null?z=n.TEXTURE0+X-1:z=ee);let Y=de[z];Y===void 0&&(Y={type:void 0,texture:void 0},de[z]=Y),(Y.type!==R||Y.texture!==ae)&&(ee!==z&&(n.activeTexture(z),ee=z),n.bindTexture(R,ae||ye[R]),Y.type=R,Y.texture=ae)}function F(){let R=de[ee];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{n.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{n.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{n.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{n.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{n.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{n.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{n.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(R){_t.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),_t.copy(R))}function me(R){$.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),$.copy(R))}function nt(R,ae){let z=l.get(ae);z===void 0&&(z=new WeakMap,l.set(ae,z));let Y=z.get(R);Y===void 0&&(Y=n.getUniformBlockIndex(ae,R.name),z.set(R,Y))}function je(R,ae){let Y=l.get(ae).get(R);c.get(ae)!==Y&&(n.uniformBlockBinding(ae,Y,R.__bindingPointIndex),c.set(ae,Y))}function St(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,de={},d={},h=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,b=null,M=null,I=null,T=null,C=new Ke(0,0,0),N=0,S=!1,x=null,A=null,V=null,k=null,G=null,_t.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Ce,bindFramebuffer:lt,drawBuffers:Ne,useProgram:Lt,setBlending:D,setMaterial:Ln,setFlipSided:st,setCullFace:tt,setLineWidth:we,setPolygonOffset:wt,setScissorTest:Se,activeTexture:w,bindTexture:v,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:pe,texImage3D:Pe,updateUBOMapping:nt,uniformBlockBinding:je,texStorage2D:Re,texStorage3D:J,texSubImage2D:j,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Te,scissor:Fe,viewport:me,reset:St}}function HL(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,u=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):Wo("canvas")}function y(w,v,F){let q=1,K=Se(w);if((K.width>F||K.height>F)&&(q=F/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let j=Math.floor(q*K.width),xe=Math.floor(q*K.height);d===void 0&&(d=g(j,xe));let oe=v?g(j,xe):d;return oe.width=j,oe.height=xe,oe.getContext("2d").drawImage(w,0,0,j,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+xe+")."),oe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,v,F,q,K=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=v;if(v===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),v===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),v===n.RGBA){let xe=K?pc:at.getTransfer(q);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=xe===gt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(w,v){let F;return w?v===null||v===Vr||v===ea?F=n.DEPTH24_STENCIL8:v===Ni?F=n.DEPTH32F_STENCIL8:v===Jo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vr||v===ea?F=n.DEPTH_COMPONENT24:v===Ni?F=n.DEPTH_COMPONENT32F:v===Jo&&(F=n.DEPTH_COMPONENT16),F}function I(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==$n&&w.minFilter!==_n?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){let v=w.target;v.removeEventListener("dispose",T),N(v),v.isVideoTexture&&u.delete(v)}function C(w){let v=w.target;v.removeEventListener("dispose",C),x(v)}function N(w){let v=i.get(w);if(v.__webglInit===void 0)return;let F=w.source,q=h.get(F);if(q){let K=q[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(w),Object.keys(q).length===0&&h.delete(F)}i.remove(w)}function S(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let F=w.source,q=h.get(F);delete q[v.__cacheKey],o.memory.textures--}function x(w){let v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let K=0;K<v.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(v.__webglFramebuffer[q][K]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=w.textures;for(let q=0,K=F.length;q<K;q++){let j=i.get(F[q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(w)}let A=0;function V(){A=0}function k(){let w=A;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),A+=1,w}function G(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function X(w,v){let F=i.get(w);if(w.isVideoTexture&&we(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,w,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function W(w,v){let F=i.get(w);if(w.version>0&&F.__version!==w.version){$(F,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Z(w,v){let F=i.get(w);if(w.version>0&&F.__version!==w.version){$(F,w,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function H(w,v){let F=i.get(w);if(w.version>0&&F.__version!==w.version){ne(F,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}let ee={[Qi]:n.REPEAT,[Pr]:n.CLAMP_TO_EDGE,[nd]:n.MIRRORED_REPEAT},de={[$n]:n.NEAREST,[_S]:n.NEAREST_MIPMAP_NEAREST,[Nc]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Nd]:n.LINEAR_MIPMAP_NEAREST,[Br]:n.LINEAR_MIPMAP_LINEAR},Me={[wS]:n.NEVER,[AS]:n.ALWAYS,[bS]:n.LESS,[Og]:n.LEQUAL,[ES]:n.EQUAL,[DS]:n.GEQUAL,[CS]:n.GREATER,[TS]:n.NOTEQUAL};function We(w,v){if(v.type===Ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===_n||v.magFilter===Nd||v.magFilter===Nc||v.magFilter===Br||v.minFilter===_n||v.minFilter===Nd||v.minFilter===Nc||v.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ee[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ee[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ee[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$n||v.minFilter!==Nc&&v.minFilter!==Br||v.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function _t(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));let q=v.source,K=h.get(q);K===void 0&&(K={},h.set(q,K));let j=G(v);if(j!==w.__cacheKey){K[j]===void 0&&(K[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[j].usedTimes++;let xe=K[w.__cacheKey];xe!==void 0&&(K[w.__cacheKey].usedTimes--,xe.usedTimes===0&&S(v)),w.__cacheKey=j,w.__webglTexture=K[j].texture}return F}function $(w,v,F){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);let K=_t(w,v),j=v.source;t.bindTexture(q,w.__webglTexture,n.TEXTURE0+F);let xe=i.get(j);if(j.version!==xe.__version||K===!0){t.activeTexture(n.TEXTURE0+F);let oe=at.getPrimaries(at.workingColorSpace),Te=v.colorSpace===rr?null:at.getPrimaries(v.colorSpace),Re=v.colorSpace===rr||oe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let J=y(v.image,!1,r.maxTextureSize);J=wt(v,J);let pe=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type),Fe=b(v.internalFormat,pe,Pe,v.colorSpace,v.isVideoTexture);We(q,v);let me,nt=v.mipmaps,je=v.isVideoTexture!==!0,St=xe.__version===void 0||K===!0,R=j.dataReady,ae=I(v,J);if(v.isDepthTexture)Fe=M(v.format===ta,v.type),St&&(je?t.texStorage2D(n.TEXTURE_2D,1,Fe,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Fe,J.width,J.height,0,pe,Pe,null));else if(v.isDataTexture)if(nt.length>0){je&&St&&t.texStorage2D(n.TEXTURE_2D,ae,Fe,nt[0].width,nt[0].height);for(let z=0,Y=nt.length;z<Y;z++)me=nt[z],je?R&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(n.TEXTURE_2D,z,Fe,me.width,me.height,0,pe,Pe,me.data);v.generateMipmaps=!1}else je?(St&&t.texStorage2D(n.TEXTURE_2D,ae,Fe,J.width,J.height),R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,pe,Pe,J.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,J.width,J.height,0,pe,Pe,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Fe,nt[0].width,nt[0].height,J.depth);for(let z=0,Y=nt.length;z<Y;z++)if(me=nt[z],v.format!==Xn)if(pe!==null)if(je){if(R)if(v.layerUpdates.size>0){let le=zg(me.width,me.height,v.format,v.type);for(let ce of v.layerUpdates){let ze=me.data.subarray(ce*le/me.data.BYTES_PER_ELEMENT,(ce+1)*le/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,ce,me.width,me.height,1,pe,ze)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,me.width,me.height,J.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,Fe,me.width,me.height,J.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,me.width,me.height,J.depth,pe,Pe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,z,Fe,me.width,me.height,J.depth,0,pe,Pe,me.data)}else{je&&St&&t.texStorage2D(n.TEXTURE_2D,ae,Fe,nt[0].width,nt[0].height);for(let z=0,Y=nt.length;z<Y;z++)me=nt[z],v.format!==Xn?pe!==null?je?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,z,Fe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?R&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(n.TEXTURE_2D,z,Fe,me.width,me.height,0,pe,Pe,me.data)}else if(v.isDataArrayTexture)if(je){if(St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Fe,J.width,J.height,J.depth),R)if(v.layerUpdates.size>0){let z=zg(J.width,J.height,v.format,v.type);for(let Y of v.layerUpdates){let le=J.data.subarray(Y*z/J.data.BYTES_PER_ELEMENT,(Y+1)*z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,pe,Pe,le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pe,Pe,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,J.width,J.height,J.depth,0,pe,Pe,J.data);else if(v.isData3DTexture)je?(St&&t.texStorage3D(n.TEXTURE_3D,ae,Fe,J.width,J.height,J.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pe,Pe,J.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,J.width,J.height,J.depth,0,pe,Pe,J.data);else if(v.isFramebufferTexture){if(St)if(je)t.texStorage2D(n.TEXTURE_2D,ae,Fe,J.width,J.height);else{let z=J.width,Y=J.height;for(let le=0;le<ae;le++)t.texImage2D(n.TEXTURE_2D,le,Fe,z,Y,0,pe,Pe,null),z>>=1,Y>>=1}}else if(nt.length>0){if(je&&St){let z=Se(nt[0]);t.texStorage2D(n.TEXTURE_2D,ae,Fe,z.width,z.height)}for(let z=0,Y=nt.length;z<Y;z++)me=nt[z],je?R&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,pe,Pe,me):t.texImage2D(n.TEXTURE_2D,z,Fe,pe,Pe,me);v.generateMipmaps=!1}else if(je){if(St){let z=Se(J);t.texStorage2D(n.TEXTURE_2D,ae,Fe,z.width,z.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Pe,J)}else t.texImage2D(n.TEXTURE_2D,0,Fe,pe,Pe,J);m(v)&&f(q),xe.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ne(w,v,F){if(v.image.length!==6)return;let q=_t(w,v),K=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);let j=i.get(K);if(K.version!==j.__version||q===!0){t.activeTexture(n.TEXTURE0+F);let xe=at.getPrimaries(at.workingColorSpace),oe=v.colorSpace===rr?null:at.getPrimaries(v.colorSpace),Te=v.colorSpace===rr||xe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Re=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let Y=0;Y<6;Y++)!Re&&!J?pe[Y]=y(v.image[Y],!0,r.maxCubemapSize):pe[Y]=J?v.image[Y].image:v.image[Y],pe[Y]=wt(v,pe[Y]);let Pe=pe[0],Fe=s.convert(v.format,v.colorSpace),me=s.convert(v.type),nt=b(v.internalFormat,Fe,me,v.colorSpace),je=v.isVideoTexture!==!0,St=j.__version===void 0||q===!0,R=K.dataReady,ae=I(v,Pe);We(n.TEXTURE_CUBE_MAP,v);let z;if(Re){je&&St&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,nt,Pe.width,Pe.height);for(let Y=0;Y<6;Y++){z=pe[Y].mipmaps;for(let le=0;le<z.length;le++){let ce=z[le];v.format!==Xn?Fe!==null?je?R&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,ce.width,ce.height,Fe,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,nt,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,ce.width,ce.height,Fe,me,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,nt,ce.width,ce.height,0,Fe,me,ce.data)}}}else{if(z=v.mipmaps,je&&St){z.length>0&&ae++;let Y=Se(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,nt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){je?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pe[Y].width,pe[Y].height,Fe,me,pe[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,pe[Y].width,pe[Y].height,0,Fe,me,pe[Y].data);for(let le=0;le<z.length;le++){let ze=z[le].image[Y].image;je?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,ze.width,ze.height,Fe,me,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,nt,ze.width,ze.height,0,Fe,me,ze.data)}}else{je?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Fe,me,pe[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,Fe,me,pe[Y]);for(let le=0;le<z.length;le++){let ce=z[le];je?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,Fe,me,ce.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,nt,Fe,me,ce.image[Y])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),j.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ye(w,v,F,q,K,j){let xe=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),Te=b(F.internalFormat,xe,oe,F.colorSpace),Re=i.get(v),J=i.get(F);if(J.__renderTarget=v,!Re.__hasExternalTextures){let pe=Math.max(1,v.width>>j),Pe=Math.max(1,v.height>>j);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,j,Te,pe,Pe,v.depth,0,xe,oe,null):t.texImage2D(K,j,Te,pe,Pe,0,xe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,J.__webglTexture,0,st(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,J.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(w,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let q=v.depthTexture,K=q&&q.isDepthTexture?q.type:null,j=M(v.stencilBuffer,K),xe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=st(v);tt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,j,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,w)}else{let q=v.textures;for(let K=0;K<q.length;K++){let j=q[K],xe=s.convert(j.format,j.colorSpace),oe=s.convert(j.type),Te=b(j.internalFormat,xe,oe,j.colorSpace),Re=st(v);F&&tt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Te,v.width,v.height):tt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Te,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Te,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let K=q.__webglTexture,j=st(v);if(v.depthTexture.format===Go)tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===ta)tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function lt(w){let v=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let q=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=q}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let q=w.texture.mipmaps;q&&q.length>0?Ce(v.__webglFramebuffer[0],w):Ce(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),se(v.__webglDepthbuffer[q],w,!1);else{let K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}}else{let q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),se(v.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(w,v,F){let q=i.get(w);v!==void 0&&ye(q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&lt(w)}function Lt(w){let v=w.texture,F=i.get(w),q=i.get(v);w.addEventListener("dispose",C);let K=w.textures,j=w.isWebGLCubeRenderTarget===!0,xe=K.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let Te=0;Te<v.mipmaps.length;Te++)F.__webglFramebuffer[oe][Te]=n.createFramebuffer()}else F.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)F.__webglFramebuffer[oe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xe)for(let oe=0,Te=K.length;oe<Te;oe++){let Re=i.get(K[oe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&tt(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<K.length;oe++){let Te=K[oe];F.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);let Re=s.convert(Te.format,Te.colorSpace),J=s.convert(Te.type),pe=b(Te.internalFormat,Re,J,Te.colorSpace,w.isXRRenderTarget===!0),Pe=st(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,pe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),se(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),We(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ye(F.__webglFramebuffer[oe][Te],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te);else ye(F.__webglFramebuffer[oe],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,Te=K.length;oe<Te;oe++){let Re=K[oe],J=i.get(Re);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),We(n.TEXTURE_2D,Re),ye(F.__webglFramebuffer,w,Re,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Re)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(oe=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,q.__webglTexture),We(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ye(F.__webglFramebuffer[Te],w,v,n.COLOR_ATTACHMENT0,oe,Te);else ye(F.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,oe,0);m(v)&&f(oe),t.unbindTexture()}w.depthBuffer&&lt(w)}function Dt(w){let v=w.textures;for(let F=0,q=v.length;F<q;F++){let K=v[F];if(m(K)){let j=E(w),xe=i.get(K).__webglTexture;t.bindTexture(j,xe),f(j),t.unbindTexture()}}}let et=[],D=[];function Ln(w){if(w.samples>0){if(tt(w)===!1){let v=w.textures,F=w.width,q=w.height,K=n.COLOR_BUFFER_BIT,j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(w),oe=v.length>1;if(oe)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let Te=w.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);let J=i.get(v[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,K,n.NEAREST),c===!0&&(et.length=0,D.length=0,et.push(n.COLOR_ATTACHMENT0+Re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(et.push(j),D.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);let J=i.get(v[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function st(w){return Math.min(r.maxSamples,w.samples)}function tt(w){let v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function we(w){let v=o.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function wt(w,v){let F=w.colorSpace,q=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==ys&&F!==rr&&(at.getTransfer(F)===gt?(q!==Xn||K!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=tt}function zL(n,e){function t(i,r=rr){let s,o=at.getTransfer(r);if(i===fi)return n.UNSIGNED_BYTE;if(i===Ld)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eg)return n.BYTE;if(i===Cg)return n.SHORT;if(i===Jo)return n.UNSIGNED_SHORT;if(i===Od)return n.INT;if(i===Vr)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===Qo)return n.HALF_FLOAT;if(i===Dg)return n.ALPHA;if(i===Ag)return n.RGB;if(i===Xn)return n.RGBA;if(i===Go)return n.DEPTH_COMPONENT;if(i===ta)return n.DEPTH_STENCIL;if(i===Ig)return n.RED;if(i===kd)return n.RED_INTEGER;if(i===Rg)return n.RG;if(i===Ud)return n.RG_INTEGER;if(i===Bd)return n.RGBA_INTEGER;if(i===Oc||i===Lc||i===Fc||i===kc)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vd||i===Hd||i===zd||i===Gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wd||i===jd||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wd||i===jd)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$d)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qd||i===Xd||i===Yd||i===Zd||i===Kd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===th)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ih)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uc||i===ah||i===ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Uc)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pg||i===lh||i===uh||i===dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Uc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var GL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new sr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new di({vertexShader:GL,fragmentShader:WL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nv=class extends Di{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null,y=new tv,m=t.getContextAttributes(),f=null,E=null,b=[],M=[],I=new Qe,T=null,C=new Zt;C.viewport=new mt;let N=new Zt;N.viewport=new mt;let S=[C,N],x=new Sd,A=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=b[$];return ne===void 0&&(ne=new Xo,b[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=b[$];return ne===void 0&&(ne=new Xo,b[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=b[$];return ne===void 0&&(ne=new Xo,b[$]=ne),ne.getHandSpace()};function k($){let ne=M.indexOf($.inputSource);if(ne===-1)return;let ye=b[ne];ye!==void 0&&(ye.update($.inputSource,$.frame,l||o),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",X);for(let $=0;$<b.length;$++){let ne=M[$];ne!==null&&(M[$]=null,b[$].disconnect(ne))}A=null,V=null,y.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,E=null,_t.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function($){return Rs(this,null,function*(){if(r=$,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),T=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,se=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=m.stencil?ta:Go,se=m.stencil?ea:Vr);let lt={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(lt),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Ai(h.textureWidth,h.textureHeight,{format:Xn,type:fi,depthTexture:new wc(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ye={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ai(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),_t.setContext(r),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X($){for(let ne=0;ne<$.removed.length;ne++){let ye=$.removed[ne],se=M.indexOf(ye);se>=0&&(M[se]=null,b[se].disconnect(ye))}for(let ne=0;ne<$.added.length;ne++){let ye=$.added[ne],se=M.indexOf(ye);if(se===-1){for(let lt=0;lt<b.length;lt++)if(lt>=M.length){M.push(ye),se=lt;break}else if(M[lt]===null){M[lt]=ye,se=lt;break}if(se===-1)break}let Ce=b[se];Ce&&Ce.connect(ye)}}let W=new P,Z=new P;function H($,ne,ye){W.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ye.matrixWorld);let se=W.distanceTo(Z),Ce=ne.projectionMatrix.elements,lt=ye.projectionMatrix.elements,Ne=Ce[14]/(Ce[10]-1),Lt=Ce[14]/(Ce[10]+1),Dt=(Ce[9]+1)/Ce[5],et=(Ce[9]-1)/Ce[5],D=(Ce[8]-1)/Ce[0],Ln=(lt[8]+1)/lt[0],st=Ne*D,tt=Ne*Ln,we=se/(-D+Ln),wt=we*-D;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(wt),$.translateZ(we),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Se=Ne+we,w=Lt+we,v=st-wt,F=tt+(se-wt),q=Dt*Lt/w*Se,K=et*Lt/w*Se;$.projectionMatrix.makePerspective(v,F,q,K,Se,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ee($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,ye=$.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),x.near=N.near=C.near=ne,x.far=N.far=C.far=ye,(A!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,V=x.far),C.layers.mask=$.layers.mask|2,N.layers.mask=$.layers.mask|4,x.layers.mask=C.layers.mask|N.layers.mask;let se=$.parent,Ce=x.cameras;ee(x,se);for(let lt=0;lt<Ce.length;lt++)ee(Ce[lt],se);Ce.length===2?H(x,C,N):x.projectionMatrix.copy(C.projectionMatrix),de($,x,se)};function de($,ne,ye){ye===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_s*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Me=null;function We($,ne){if(u=ne.getViewerPose(l||o),g=ne,u!==null){let ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let se=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Ne=0;Ne<ye.length;Ne++){let Lt=ye[Ne],Dt=null;if(p!==null)Dt=p.getViewport(Lt);else{let D=d.getViewSubImage(h,Lt);Dt=D.viewport,Ne===0&&(e.setRenderTargetTextures(E,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(E))}let et=S[Ne];et===void 0&&(et=new Zt,et.layers.enable(Ne),et.viewport=new mt,S[Ne]=et),et.matrix.fromArray(Lt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Lt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ne===0&&(x.matrix.copy(et.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(et)}let Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Ne=d.getDepthInformation(ye[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let ye=0;ye<b.length;ye++){let se=M[ye],Ce=b[ye];se!==null&&Ce!==void 0&&Ce.update(se,ne,l||o)}Me&&Me($,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let _t=new ow;_t.setAnimationLoop(We),this.setAnimationLoop=function($){Me=$},this.dispose=function(){}}},Ts=new Or,jL=new Tt;function $L(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ug(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,E,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,Ts.copy(M),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(jL.makeRotationFromEuler(Ts)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qL(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){let M=b.program;i.uniformBlockBinding(E,M)}function l(E,b){let M=r[E.id];M===void 0&&(g(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",m));let I=b.program;i.updateUBOMapping(E,I);let T=e.render.frame;s[E.id]!==T&&(h(E),s[E.id]=T)}function u(E){let b=d();E.__bindingPointIndex=b;let M=n.createBuffer(),I=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let b=r[E.id],M=E.uniforms,I=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,C=M.length;T<C;T++){let N=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,x=N.length;S<x;S++){let A=N[S];if(p(A,T,S,I)===!0){let V=A.__offset,k=Array.isArray(A.value)?A.value:[A.value],G=0;for(let X=0;X<k.length;X++){let W=k[X],Z=y(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,V+G,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,M,I){let T=E.value,C=b+"_"+M;if(I[C]===void 0)return typeof T=="number"||typeof T=="boolean"?I[C]=T:I[C]=T.clone(),!0;{let N=I[C];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return I[C]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function g(E){let b=E.uniforms,M=0,I=16;for(let C=0,N=b.length;C<N;C++){let S=Array.isArray(b[C])?b[C]:[b[C]];for(let x=0,A=S.length;x<A;x++){let V=S[x],k=Array.isArray(V.value)?V.value:[V.value];for(let G=0,X=k.length;G<X;G++){let W=k[G],Z=y(W),H=M%I,ee=H%Z.boundary,de=H+ee;M+=ee,de!==0&&I-de<Z.storage&&(M+=I-de),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=Z.storage}}}let T=M%I;return T>0&&(M+=I-T),E.__size=M,E.__cache={},this}function y(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(let E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var gh=class{constructor(e={}){let{canvas:t=IS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,I=!1;this._outputColorSpace=Rn;let T=0,C=0,N=null,S=-1,x=null,A=new mt,V=new mt,k=null,G=new Ke(0),X=0,W=t.width,Z=t.height,H=1,ee=null,de=null,Me=new mt(0,0,W,Z),We=new mt(0,0,W,Z),_t=!1,$=new Yo,ne=!1,ye=!1,se=new Tt,Ce=new Tt,lt=new P,Ne=new mt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function et(){return N===null?H:1}let D=i;function Ln(_,O){return t.getContext(_,O)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wd}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){let O="webgl2";if(D=Ln(O,_),D===null)throw Ln(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let st,tt,we,wt,Se,w,v,F,q,K,j,xe,oe,Te,Re,J,pe,Pe,Fe,me,nt,je,St,R;function ae(){st=new dO(D),st.init(),je=new zL(D,st),tt=new rO(D,st,e,je),we=new VL(D,st),tt.reverseDepthBuffer&&h&&we.buffers.depth.setReversed(!0),wt=new pO(D),Se=new TL,w=new HL(D,st,we,Se,tt,je,wt),v=new oO(M),F=new uO(M),q=new xR(D),St=new nO(D,q),K=new hO(D,q,wt,St),j=new gO(D,K,q,wt),Fe=new mO(D,tt,w),J=new sO(Se),xe=new CL(M,v,F,st,tt,St,J),oe=new $L(M,Se),Te=new AL,Re=new LL(st),Pe=new tO(M,v,F,we,j,p,c),pe=new UL(M,j,tt),R=new qL(D,wt,tt,we),me=new iO(D,st,wt),nt=new fO(D,st,wt),wt.programs=xe.programs,M.capabilities=tt,M.extensions=st,M.properties=Se,M.renderLists=Te,M.shadowMap=pe,M.state=we,M.info=wt}ae();let z=new nv(M,D);this.xr=z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let _=st.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=st.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(W,Z,!1))},this.getSize=function(_){return _.set(W,Z)},this.setSize=function(_,O,U=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=_,Z=O,t.width=Math.floor(_*H),t.height=Math.floor(O*H),U===!0&&(t.style.width=_+"px",t.style.height=O+"px"),this.setViewport(0,0,_,O)},this.getDrawingBufferSize=function(_){return _.set(W*H,Z*H).floor()},this.setDrawingBufferSize=function(_,O,U){W=_,Z=O,H=U,t.width=Math.floor(_*U),t.height=Math.floor(O*U),this.setViewport(0,0,_,O)},this.getCurrentViewport=function(_){return _.copy(A)},this.getViewport=function(_){return _.copy(Me)},this.setViewport=function(_,O,U,B){_.isVector4?Me.set(_.x,_.y,_.z,_.w):Me.set(_,O,U,B),we.viewport(A.copy(Me).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(We)},this.setScissor=function(_,O,U,B){_.isVector4?We.set(_.x,_.y,_.z,_.w):We.set(_,O,U,B),we.scissor(V.copy(We).multiplyScalar(H).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(_){we.setScissorTest(_t=_)},this.setOpaqueSort=function(_){ee=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(_=!0,O=!0,U=!0){let B=0;if(_){let L=!1;if(N!==null){let Q=N.texture.format;L=Q===Bd||Q===Ud||Q===kd}if(L){let Q=N.texture.type,re=Q===fi||Q===Vr||Q===Jo||Q===ea||Q===Ld||Q===Fd,fe=Pe.getClearColor(),ge=Pe.getClearAlpha(),ke=fe.r,Oe=fe.g,be=fe.b;re?(g[0]=ke,g[1]=Oe,g[2]=be,g[3]=ge,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=ke,y[1]=Oe,y[2]=be,y[3]=ge,D.clearBufferiv(D.COLOR,0,y))}else B|=D.COLOR_BUFFER_BIT}O&&(B|=D.DEPTH_BUFFER_BIT),U&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Pe.dispose(),Te.dispose(),Re.dispose(),Se.dispose(),v.dispose(),F.dispose(),j.dispose(),St.dispose(),R.dispose(),xe.dispose(),z.dispose(),z.removeEventListener("sessionstart",ov),z.removeEventListener("sessionend",av),zr.stop()};function Y(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let _=wt.autoReset,O=pe.enabled,U=pe.autoUpdate,B=pe.needsUpdate,L=pe.type;ae(),wt.autoReset=_,pe.enabled=O,pe.autoUpdate=U,pe.needsUpdate=B,pe.type=L}function ce(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ze(_){let O=_.target;O.removeEventListener("dispose",ze),It(O)}function It(_){tn(_),Se.remove(_)}function tn(_){let O=Se.get(_).programs;O!==void 0&&(O.forEach(function(U){xe.releaseProgram(U)}),_.isShaderMaterial&&xe.releaseShaderCache(_))}this.renderBufferDirect=function(_,O,U,B,L,Q){O===null&&(O=Lt);let re=L.isMesh&&L.matrixWorld.determinant()<0,fe=_w(_,O,U,B,L);we.setMaterial(B,re);let ge=U.index,ke=1;if(B.wireframe===!0){if(ge=K.getWireframeAttribute(U),ge===void 0)return;ke=2}let Oe=U.drawRange,be=U.attributes.position,ot=Oe.start*ke,dt=(Oe.start+Oe.count)*ke;Q!==null&&(ot=Math.max(ot,Q.start*ke),dt=Math.min(dt,(Q.start+Q.count)*ke)),ge!==null?(ot=Math.max(ot,0),dt=Math.min(dt,ge.count)):be!=null&&(ot=Math.max(ot,0),dt=Math.min(dt,be.count));let Ft=dt-ot;if(Ft<0||Ft===1/0)return;St.setup(L,B,fe,U,ge);let Rt,ct=me;if(ge!==null&&(Rt=q.get(ge),ct=nt,ct.setIndex(Rt)),L.isMesh)B.wireframe===!0?(we.setLineWidth(B.wireframeLinewidth*et()),ct.setMode(D.LINES)):ct.setMode(D.TRIANGLES);else if(L.isLine){let Ee=B.linewidth;Ee===void 0&&(Ee=1),we.setLineWidth(Ee*et()),L.isLineSegments?ct.setMode(D.LINES):L.isLineLoop?ct.setMode(D.LINE_LOOP):ct.setMode(D.LINE_STRIP)}else L.isPoints?ct.setMode(D.POINTS):L.isSprite&&ct.setMode(D.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Bc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ct.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ee=L._multiDrawStarts,Kt=L._multiDrawCounts,ht=L._multiDrawCount,Zn=ge?q.get(ge).bytesPerElement:1,Is=Se.get(B).currentProgram.getUniforms();for(let xn=0;xn<ht;xn++)Is.setValue(D,"_gl_DrawID",xn),ct.render(Ee[xn]/Zn,Kt[xn])}else if(L.isInstancedMesh)ct.renderInstances(ot,Ft,L.count);else if(U.isInstancedBufferGeometry){let Ee=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Kt=Math.min(U.instanceCount,Ee);ct.renderInstances(ot,Ft,Kt)}else ct.render(ot,Ft)};function pt(_,O,U){_.transparent===!0&&_.side===qn&&_.forceSinglePass===!1?(_.side=fn,_.needsUpdate=!0,zc(_,O,U),_.side=Ji,_.needsUpdate=!0,zc(_,O,U),_.side=qn):zc(_,O,U)}this.compile=function(_,O,U=null){U===null&&(U=_),f=Re.get(U),f.init(O),b.push(f),U.traverseVisible(function(L){L.isLight&&L.layers.test(O.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),_!==U&&_.traverseVisible(function(L){L.isLight&&L.layers.test(O.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();let B=new Set;return _.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let Q=L.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){let fe=Q[re];pt(fe,U,L),B.add(fe)}else pt(Q,U,L),B.add(Q)}),f=b.pop(),B},this.compileAsync=function(_,O,U=null){let B=this.compile(_,O,U);return new Promise(L=>{function Q(){if(B.forEach(function(re){Se.get(re).currentProgram.isReady()&&B.delete(re)}),B.size===0){L(_);return}setTimeout(Q,10)}st.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Yn=null;function Li(_){Yn&&Yn(_)}function ov(){zr.stop()}function av(){zr.start()}let zr=new ow;zr.setAnimationLoop(Li),typeof self<"u"&&zr.setContext(self),this.setAnimationLoop=function(_){Yn=_,z.setAnimationLoop(_),_===null?zr.stop():zr.start()},z.addEventListener("sessionstart",ov),z.addEventListener("sessionend",av),this.render=function(_,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(O),O=z.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,O,N),f=Re.get(_,b.length),f.init(O),b.push(f),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Ce),ye=this.localClippingEnabled,ne=J.init(this.clippingPlanes,ye),m=Te.get(_,E.length),m.init(),E.push(m),z.enabled===!0&&z.isPresenting===!0){let Q=M.xr.getDepthSensingMesh();Q!==null&&_h(Q,O,-1/0,M.sortObjects)}_h(_,O,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ee,de),Dt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Dt&&Pe.addToRenderList(m,_),this.info.render.frame++,ne===!0&&J.beginShadows();let U=f.state.shadowsArray;pe.render(U,_,O),ne===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,L=m.transmissive;if(f.setupLights(),O.isArrayCamera){let Q=O.cameras;if(L.length>0)for(let re=0,fe=Q.length;re<fe;re++){let ge=Q[re];lv(B,L,_,ge)}Dt&&Pe.render(_);for(let re=0,fe=Q.length;re<fe;re++){let ge=Q[re];cv(m,_,ge,ge.viewport)}}else L.length>0&&lv(B,L,_,O),Dt&&Pe.render(_),cv(m,_,O);N!==null&&C===0&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N)),_.isScene===!0&&_.onAfterRender(M,_,O),St.resetDefaultState(),S=-1,x=null,b.pop(),b.length>0?(f=b[b.length-1],ne===!0&&J.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function _h(_,O,U,B){if(_.visible===!1)return;if(_.layers.test(O.layers)){if(_.isGroup)U=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(O);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||$.intersectsSprite(_)){B&&Ne.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ce);let re=j.update(_),fe=_.material;fe.visible&&m.push(_,re,fe,U,Ne.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||$.intersectsObject(_))){let re=j.update(_),fe=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ne.copy(_.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ne.copy(re.boundingSphere.center)),Ne.applyMatrix4(_.matrixWorld).applyMatrix4(Ce)),Array.isArray(fe)){let ge=re.groups;for(let ke=0,Oe=ge.length;ke<Oe;ke++){let be=ge[ke],ot=fe[be.materialIndex];ot&&ot.visible&&m.push(_,re,ot,U,Ne.z,be)}}else fe.visible&&m.push(_,re,fe,U,Ne.z,null)}}let Q=_.children;for(let re=0,fe=Q.length;re<fe;re++)_h(Q[re],O,U,B)}function cv(_,O,U,B){let L=_.opaque,Q=_.transmissive,re=_.transparent;f.setupLightsView(U),ne===!0&&J.setGlobalState(M.clippingPlanes,U),B&&we.viewport(A.copy(B)),L.length>0&&Hc(L,O,U),Q.length>0&&Hc(Q,O,U),re.length>0&&Hc(re,O,U),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function lv(_,O,U,B){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Ai(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Qo:fi,minFilter:Br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let Q=f.state.transmissionRenderTarget[B.id],re=B.viewport||A;Q.setSize(re.z*M.transmissionResolutionScale,re.w*M.transmissionResolutionScale);let fe=M.getRenderTarget();M.setRenderTarget(Q),M.getClearColor(G),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Dt&&Pe.render(U);let ge=M.toneMapping;M.toneMapping=ir;let ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),ne===!0&&J.setGlobalState(M.clippingPlanes,B),Hc(_,U,B),w.updateMultisampleRenderTarget(Q),w.updateRenderTargetMipmap(Q),st.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let be=0,ot=O.length;be<ot;be++){let dt=O[be],Ft=dt.object,Rt=dt.geometry,ct=dt.material,Ee=dt.group;if(ct.side===qn&&Ft.layers.test(B.layers)){let Kt=ct.side;ct.side=fn,ct.needsUpdate=!0,uv(Ft,U,B,Rt,ct,Ee),ct.side=Kt,ct.needsUpdate=!0,Oe=!0}}Oe===!0&&(w.updateMultisampleRenderTarget(Q),w.updateRenderTargetMipmap(Q))}M.setRenderTarget(fe),M.setClearColor(G,X),ke!==void 0&&(B.viewport=ke),M.toneMapping=ge}function Hc(_,O,U){let B=O.isScene===!0?O.overrideMaterial:null;for(let L=0,Q=_.length;L<Q;L++){let re=_[L],fe=re.object,ge=re.geometry,ke=re.group,Oe=re.material;Oe.allowOverride===!0&&B!==null&&(Oe=B),fe.layers.test(U.layers)&&uv(fe,O,U,ge,Oe,ke)}}function uv(_,O,U,B,L,Q){_.onBeforeRender(M,O,U,B,L,Q),_.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),L.onBeforeRender(M,O,U,B,_,Q),L.transparent===!0&&L.side===qn&&L.forceSinglePass===!1?(L.side=fn,L.needsUpdate=!0,M.renderBufferDirect(U,O,B,L,_,Q),L.side=Ji,L.needsUpdate=!0,M.renderBufferDirect(U,O,B,L,_,Q),L.side=qn):M.renderBufferDirect(U,O,B,L,_,Q),_.onAfterRender(M,O,U,B,L,Q)}function zc(_,O,U){O.isScene!==!0&&(O=Lt);let B=Se.get(_),L=f.state.lights,Q=f.state.shadowsArray,re=L.state.version,fe=xe.getParameters(_,L.state,Q,O,U),ge=xe.getProgramCacheKey(fe),ke=B.programs;B.environment=_.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(_.isMeshStandardMaterial?F:v).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?O.environmentRotation:_.envMapRotation,ke===void 0&&(_.addEventListener("dispose",ze),ke=new Map,B.programs=ke);let Oe=ke.get(ge);if(Oe!==void 0){if(B.currentProgram===Oe&&B.lightsStateVersion===re)return hv(_,fe),Oe}else fe.uniforms=xe.getUniforms(_),_.onBeforeCompile(fe,M),Oe=xe.acquireProgram(fe,ge),ke.set(ge,Oe),B.uniforms=fe.uniforms;let be=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(be.clippingPlanes=J.uniform),hv(_,fe),B.needsLights=Mw(_),B.lightsStateVersion=re,B.needsLights&&(be.ambientLightColor.value=L.state.ambient,be.lightProbe.value=L.state.probe,be.directionalLights.value=L.state.directional,be.directionalLightShadows.value=L.state.directionalShadow,be.spotLights.value=L.state.spot,be.spotLightShadows.value=L.state.spotShadow,be.rectAreaLights.value=L.state.rectArea,be.ltc_1.value=L.state.rectAreaLTC1,be.ltc_2.value=L.state.rectAreaLTC2,be.pointLights.value=L.state.point,be.pointLightShadows.value=L.state.pointShadow,be.hemisphereLights.value=L.state.hemi,be.directionalShadowMap.value=L.state.directionalShadowMap,be.directionalShadowMatrix.value=L.state.directionalShadowMatrix,be.spotShadowMap.value=L.state.spotShadowMap,be.spotLightMatrix.value=L.state.spotLightMatrix,be.spotLightMap.value=L.state.spotLightMap,be.pointShadowMap.value=L.state.pointShadowMap,be.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Oe,B.uniformsList=null,Oe}function dv(_){if(_.uniformsList===null){let O=_.currentProgram.getUniforms();_.uniformsList=sa.seqWithValue(O.seq,_.uniforms)}return _.uniformsList}function hv(_,O){let U=Se.get(_);U.outputColorSpace=O.outputColorSpace,U.batching=O.batching,U.batchingColor=O.batchingColor,U.instancing=O.instancing,U.instancingColor=O.instancingColor,U.instancingMorph=O.instancingMorph,U.skinning=O.skinning,U.morphTargets=O.morphTargets,U.morphNormals=O.morphNormals,U.morphColors=O.morphColors,U.morphTargetsCount=O.morphTargetsCount,U.numClippingPlanes=O.numClippingPlanes,U.numIntersection=O.numClipIntersection,U.vertexAlphas=O.vertexAlphas,U.vertexTangents=O.vertexTangents,U.toneMapping=O.toneMapping}function _w(_,O,U,B,L){O.isScene!==!0&&(O=Lt),w.resetTextureUnits();let Q=O.fog,re=B.isMeshStandardMaterial?O.environment:null,fe=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ys,ge=(B.isMeshStandardMaterial?F:v).get(B.envMap||re),ke=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Oe=!!U.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),be=!!U.morphAttributes.position,ot=!!U.morphAttributes.normal,dt=!!U.morphAttributes.color,Ft=ir;B.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ft=M.toneMapping);let Rt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ct=Rt!==void 0?Rt.length:0,Ee=Se.get(B),Kt=f.state.lights;if(ne===!0&&(ye===!0||_!==x)){let ln=_===x&&B.id===S;J.setState(B,_,ln)}let ht=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Kt.state.version||Ee.outputColorSpace!==fe||L.isBatchedMesh&&Ee.batching===!1||!L.isBatchedMesh&&Ee.batching===!0||L.isBatchedMesh&&Ee.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ee.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ee.instancing===!1||!L.isInstancedMesh&&Ee.instancing===!0||L.isSkinnedMesh&&Ee.skinning===!1||!L.isSkinnedMesh&&Ee.skinning===!0||L.isInstancedMesh&&Ee.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ee.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ee.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ee.instancingMorph===!1&&L.morphTexture!==null||Ee.envMap!==ge||B.fog===!0&&Ee.fog!==Q||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==J.numPlanes||Ee.numIntersection!==J.numIntersection)||Ee.vertexAlphas!==ke||Ee.vertexTangents!==Oe||Ee.morphTargets!==be||Ee.morphNormals!==ot||Ee.morphColors!==dt||Ee.toneMapping!==Ft||Ee.morphTargetsCount!==ct)&&(ht=!0):(ht=!0,Ee.__version=B.version);let Zn=Ee.currentProgram;ht===!0&&(Zn=zc(B,O,L));let Is=!1,xn=!1,aa=!1,Et=Zn.getUniforms(),Fn=Ee.uniforms;if(we.useProgram(Zn.program)&&(Is=!0,xn=!0,aa=!0),B.id!==S&&(S=B.id,xn=!0),Is||x!==_){we.buffers.depth.getReversed()?(se.copy(_.projectionMatrix),PS(se),NS(se),Et.setValue(D,"projectionMatrix",se)):Et.setValue(D,"projectionMatrix",_.projectionMatrix),Et.setValue(D,"viewMatrix",_.matrixWorldInverse);let pn=Et.map.cameraPosition;pn!==void 0&&pn.setValue(D,lt.setFromMatrixPosition(_.matrixWorld)),tt.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,xn=!0,aa=!0)}if(L.isSkinnedMesh){Et.setOptional(D,L,"bindMatrix"),Et.setOptional(D,L,"bindMatrixInverse");let ln=L.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Et.setValue(D,"boneTexture",ln.boneTexture,w))}L.isBatchedMesh&&(Et.setOptional(D,L,"batchingTexture"),Et.setValue(D,"batchingTexture",L._matricesTexture,w),Et.setOptional(D,L,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",L._indirectTexture,w),Et.setOptional(D,L,"batchingColorTexture"),L._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",L._colorsTexture,w));let kn=U.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Fe.update(L,U,Zn),(xn||Ee.receiveShadow!==L.receiveShadow)&&(Ee.receiveShadow=L.receiveShadow,Et.setValue(D,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Fn.envMap.value=ge,Fn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&O.environment!==null&&(Fn.envMapIntensity.value=O.environmentIntensity),xn&&(Et.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&xw(Fn,aa),Q&&B.fog===!0&&oe.refreshFogUniforms(Fn,Q),oe.refreshMaterialUniforms(Fn,B,H,Z,f.state.transmissionRenderTarget[_.id]),sa.upload(D,dv(Ee),Fn,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(sa.upload(D,dv(Ee),Fn,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(D,"center",L.center),Et.setValue(D,"modelViewMatrix",L.modelViewMatrix),Et.setValue(D,"normalMatrix",L.normalMatrix),Et.setValue(D,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let ln=B.uniformsGroups;for(let pn=0,xh=ln.length;pn<xh;pn++){let Gr=ln[pn];R.update(Gr,Zn),R.bind(Gr,Zn)}}return Zn}function xw(_,O){_.ambientLightColor.needsUpdate=O,_.lightProbe.needsUpdate=O,_.directionalLights.needsUpdate=O,_.directionalLightShadows.needsUpdate=O,_.pointLights.needsUpdate=O,_.pointLightShadows.needsUpdate=O,_.spotLights.needsUpdate=O,_.spotLightShadows.needsUpdate=O,_.rectAreaLights.needsUpdate=O,_.hemisphereLights.needsUpdate=O}function Mw(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(_,O,U){let B=Se.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Se.get(_.texture).__webglTexture=O,Se.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:U,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,O){let U=Se.get(_);U.__webglFramebuffer=O,U.__useDefaultFramebuffer=O===void 0};let Sw=D.createFramebuffer();this.setRenderTarget=function(_,O=0,U=0){N=_,T=O,C=U;let B=!0,L=null,Q=!1,re=!1;if(_){let ge=Se.get(_);if(ge.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(ge.__webglFramebuffer===void 0)w.setupRenderTarget(_);else if(ge.__hasExternalTextures)w.rebindTextures(_,Se.get(_.texture).__webglTexture,Se.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let be=_.depthTexture;if(ge.__boundDepthTexture!==be){if(be!==null&&Se.has(be)&&(_.width!==be.image.width||_.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(_)}}let ke=_.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(re=!0);let Oe=Se.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?L=Oe[O][U]:L=Oe[O],Q=!0):_.samples>0&&w.useMultisampledRTT(_)===!1?L=Se.get(_).__webglMultisampledFramebuffer:Array.isArray(Oe)?L=Oe[U]:L=Oe,A.copy(_.viewport),V.copy(_.scissor),k=_.scissorTest}else A.copy(Me).multiplyScalar(H).floor(),V.copy(We).multiplyScalar(H).floor(),k=_t;if(U!==0&&(L=Sw),we.bindFramebuffer(D.FRAMEBUFFER,L)&&B&&we.drawBuffers(_,L),we.viewport(A),we.scissor(V),we.setScissorTest(k),Q){let ge=Se.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,U)}else if(re){let ge=Se.get(_.texture),ke=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.__webglTexture,U,ke)}else if(_!==null&&U!==0){let ge=Se.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,U)}S=-1},this.readRenderTargetPixels=function(_,O,U,B,L,Q,re){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Se.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){we.bindFramebuffer(D.FRAMEBUFFER,fe);try{let ge=_.texture,ke=ge.format,Oe=ge.type;if(!tt.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=_.width-B&&U>=0&&U<=_.height-L&&D.readPixels(O,U,B,L,je.convert(ke),je.convert(Oe),Q)}finally{let ge=N!==null?Se.get(N).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=function(_,O,U,B,L,Q,re){return Rs(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Se.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe)if(O>=0&&O<=_.width-B&&U>=0&&U<=_.height-L){we.bindFramebuffer(D.FRAMEBUFFER,fe);let ge=_.texture,ke=ge.format,Oe=ge.type;if(!tt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(O,U,B,L,je.convert(ke),je.convert(Oe),0);let ot=N!==null?Se.get(N).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,ot);let dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),yield RS(D,dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(be),D.deleteSync(dt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,O=null,U=0){let B=Math.pow(2,-U),L=Math.floor(_.image.width*B),Q=Math.floor(_.image.height*B),re=O!==null?O.x:0,fe=O!==null?O.y:0;w.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,U,0,0,re,fe,L,Q),we.unbindTexture()};let ww=D.createFramebuffer(),bw=D.createFramebuffer();this.copyTextureToTexture=function(_,O,U=null,B=null,L=0,Q=null){Q===null&&(L!==0?(Bc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=L,L=0):Q=0);let re,fe,ge,ke,Oe,be,ot,dt,Ft,Rt=_.isCompressedTexture?_.mipmaps[Q]:_.image;if(U!==null)re=U.max.x-U.min.x,fe=U.max.y-U.min.y,ge=U.isBox3?U.max.z-U.min.z:1,ke=U.min.x,Oe=U.min.y,be=U.isBox3?U.min.z:0;else{let kn=Math.pow(2,-L);re=Math.floor(Rt.width*kn),fe=Math.floor(Rt.height*kn),_.isDataArrayTexture?ge=Rt.depth:_.isData3DTexture?ge=Math.floor(Rt.depth*kn):ge=1,ke=0,Oe=0,be=0}B!==null?(ot=B.x,dt=B.y,Ft=B.z):(ot=0,dt=0,Ft=0);let ct=je.convert(O.format),Ee=je.convert(O.type),Kt;O.isData3DTexture?(w.setTexture3D(O,0),Kt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),Kt=D.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),Kt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let ht=D.getParameter(D.UNPACK_ROW_LENGTH),Zn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Is=D.getParameter(D.UNPACK_SKIP_PIXELS),xn=D.getParameter(D.UNPACK_SKIP_ROWS),aa=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be);let Et=_.isDataArrayTexture||_.isData3DTexture,Fn=O.isDataArrayTexture||O.isData3DTexture;if(_.isDepthTexture){let kn=Se.get(_),ln=Se.get(O),pn=Se.get(kn.__renderTarget),xh=Se.get(ln.__renderTarget);we.bindFramebuffer(D.READ_FRAMEBUFFER,pn.__webglFramebuffer),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,xh.__webglFramebuffer);for(let Gr=0;Gr<ge;Gr++)Et&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(_).__webglTexture,L,be+Gr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(O).__webglTexture,Q,Ft+Gr)),D.blitFramebuffer(ke,Oe,re,fe,ot,dt,re,fe,D.DEPTH_BUFFER_BIT,D.NEAREST);we.bindFramebuffer(D.READ_FRAMEBUFFER,null),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(L!==0||_.isRenderTargetTexture||Se.has(_)){let kn=Se.get(_),ln=Se.get(O);we.bindFramebuffer(D.READ_FRAMEBUFFER,ww),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,bw);for(let pn=0;pn<ge;pn++)Et?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kn.__webglTexture,L,be+pn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kn.__webglTexture,L),Fn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,Q,Ft+pn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,Q),L!==0?D.blitFramebuffer(ke,Oe,re,fe,ot,dt,re,fe,D.COLOR_BUFFER_BIT,D.NEAREST):Fn?D.copyTexSubImage3D(Kt,Q,ot,dt,Ft+pn,ke,Oe,re,fe):D.copyTexSubImage2D(Kt,Q,ot,dt,ke,Oe,re,fe);we.bindFramebuffer(D.READ_FRAMEBUFFER,null),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Fn?_.isDataTexture||_.isData3DTexture?D.texSubImage3D(Kt,Q,ot,dt,Ft,re,fe,ge,ct,Ee,Rt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Kt,Q,ot,dt,Ft,re,fe,ge,ct,Rt.data):D.texSubImage3D(Kt,Q,ot,dt,Ft,re,fe,ge,ct,Ee,Rt):_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,ot,dt,re,fe,ct,Ee,Rt.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,ot,dt,Rt.width,Rt.height,ct,Rt.data):D.texSubImage2D(D.TEXTURE_2D,Q,ot,dt,re,fe,ct,Ee,Rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Is),D.pixelStorei(D.UNPACK_SKIP_ROWS,xn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,aa),Q===0&&O.generateMipmaps&&D.generateMipmap(Kt),we.unbindTexture()},this.copyTextureToTexture3D=function(_,O,U=null,B=null,L=0){return Bc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,O,U,B,L)},this.initRenderTarget=function(_){Se.get(_).__webglFramebuffer===void 0&&w.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?w.setTextureCube(_,0):_.isData3DTexture?w.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?w.setTexture2DArray(_,0):w.setTexture2D(_,0),we.unbindTexture()},this.resetState=function(){T=0,C=0,N=null,we.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var dw=new P,rv=new Ic,sv=new P,hw=new P,yh=class extends Rc{constructor(e,t=null){super(e,t),this.movementSpeed=1,this.lookSpeed=.005,this.lookVertical=!0,this.autoForward=!1,this.activeLook=!0,this.heightSpeed=!1,this.heightCoef=1,this.heightMin=0,this.heightMax=1,this.constrainVertical=!1,this.verticalMin=0,this.verticalMax=Math.PI,this.mouseDragOn=!1,this._autoSpeedFactor=0,this._pointerX=0,this._pointerY=0,this._moveForward=!1,this._moveBackward=!1,this._moveLeft=!1,this._moveRight=!1,this._viewHalfX=0,this._viewHalfY=0,this._lat=0,this._lon=0,this._onPointerMove=KL.bind(this),this._onPointerDown=YL.bind(this),this._onPointerUp=ZL.bind(this),this._onContextMenu=eF.bind(this),this._onKeyDown=JL.bind(this),this._onKeyUp=QL.bind(this),t!==null&&(this.connect(t),this.handleResize()),this._setOrientation()}connect(e){super.connect(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu)}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerMove),this.domElement.removeEventListener("pointermove",this._onPointerDown),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("contextmenu",this._onContextMenu)}dispose(){this.disconnect()}handleResize(){this.domElement===document?(this._viewHalfX=window.innerWidth/2,this._viewHalfY=window.innerHeight/2):(this._viewHalfX=this.domElement.offsetWidth/2,this._viewHalfY=this.domElement.offsetHeight/2)}lookAt(e,t,i){return e.isVector3?sv.copy(e):sv.set(e,t,i),this.object.lookAt(sv),this._setOrientation(),this}update(e){if(this.enabled===!1)return;if(this.heightSpeed){let l=Hr.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this._autoSpeedFactor=e*(l*this.heightCoef)}else this._autoSpeedFactor=0;let t=e*this.movementSpeed;(this._moveForward||this.autoForward&&!this._moveBackward)&&this.object.translateZ(-(t+this._autoSpeedFactor)),this._moveBackward&&this.object.translateZ(t),this._moveLeft&&this.object.translateX(-t),this._moveRight&&this.object.translateX(t),this._moveUp&&this.object.translateY(t),this._moveDown&&this.object.translateY(-t);let i=e*this.lookSpeed;this.activeLook||(i=0);let r=1;this.constrainVertical&&(r=Math.PI/(this.verticalMax-this.verticalMin)),this._lon-=this._pointerX*i,this.lookVertical&&(this._lat-=this._pointerY*i*r),this._lat=Math.max(-85,Math.min(85,this._lat));let s=Hr.degToRad(90-this._lat),o=Hr.degToRad(this._lon);this.constrainVertical&&(s=Hr.mapLinear(s,0,Math.PI,this.verticalMin,this.verticalMax));let a=this.object.position;hw.setFromSphericalCoords(1,s,o).add(a),this.object.lookAt(hw)}_setOrientation(){let e=this.object.quaternion;dw.set(0,0,-1).applyQuaternion(e),rv.setFromVector3(dw),this._lat=90-Hr.radToDeg(rv.phi),this._lon=Hr.radToDeg(rv.theta)}};function YL(n){if(this.domElement!==document&&this.domElement.focus(),this.activeLook)switch(n.button){case 0:this._moveForward=!0;break;case 2:this._moveBackward=!0;break}this.mouseDragOn=!0}function ZL(n){if(this.activeLook)switch(n.button){case 0:this._moveForward=!1;break;case 2:this._moveBackward=!1;break}this.mouseDragOn=!1}function KL(n){this.domElement===document?(this._pointerX=n.pageX-this._viewHalfX,this._pointerY=n.pageY-this._viewHalfY):(this._pointerX=n.pageX-this.domElement.offsetLeft-this._viewHalfX,this._pointerY=n.pageY-this.domElement.offsetTop-this._viewHalfY)}function JL(n){switch(n.code){case"ArrowUp":case"KeyW":this._moveForward=!0;break;case"ArrowLeft":case"KeyA":this._moveLeft=!0;break;case"ArrowDown":case"KeyS":this._moveBackward=!0;break;case"ArrowRight":case"KeyD":this._moveRight=!0;break;case"KeyR":this._moveUp=!0;break;case"KeyF":this._moveDown=!0;break}}function QL(n){switch(n.code){case"ArrowUp":case"KeyW":this._moveForward=!1;break;case"ArrowLeft":case"KeyA":this._moveLeft=!1;break;case"ArrowDown":case"KeyS":this._moveBackward=!1;break;case"ArrowRight":case"KeyD":this._moveRight=!1;break;case"KeyR":this._moveUp=!1;break;case"KeyF":this._moveDown=!1;break}}function eF(n){this.enabled!==!1&&n.preventDefault()}var tF=["rendererContainer"];function nF(n,e){if(n&1){let t=ss();ue(0,"div",3),Ct("click",function(){En(t);let r=Gn();return Cn(r.selectedArtwork=null)}),ue(1,"div",4),Ct("click",function(r){return En(t),Cn(r.stopPropagation())}),ue(2,"h2"),_e(3),he(),Vt(4,"img",5),ue(5,"p"),_e(6),he(),ue(7,"button",6),Ct("click",function(){En(t);let r=Gn();return Cn(r.selectedArtwork=null)}),_e(8,"Close"),he()()()}if(n&2){let t=Gn();Mt(3),wi(t.selectedArtwork.title),Mt(),Lp("alt",t.selectedArtwork.title),dn("src",t.selectedArtwork.src,lo),Mt(2),wi(t.selectedArtwork.text)}}function iF(n,e){if(n&1){let t=ss();ue(0,"div",3),Ct("click",function(){En(t);let r=Gn();return Cn(r.selectedArtwork=null)}),ue(1,"div",4),Ct("click",function(r){return En(t),Cn(r.stopPropagation())}),ue(2,"p"),_e(3,"Please use your keyboard and your mouse to navigate"),he(),Vt(4,"img",7),ue(5,"button",6),Ct("click",function(){En(t);let r=Gn();return Cn(r.closeDirectionModal())}),_e(6,"OK"),he()()()}}var fw=(()=>{class n{constructor(){this.raycaster=new Ac,this.mouse=new Qe,this.isMouseMoving=!1,this.openDirections=!1,this.objects=[],this.wallBoxes=[],this.selectedArtwork=null,this.pressedKeys=new Set,this.clock=new Dc}ngAfterViewInit(){this.initScene(),this.animate();let t="ontouchstart"in window||navigator.maxTouchPoints>0}initScene(){this.openDirections=!0;let t=this.rendererContainer.nativeElement.clientWidth,i=this.rendererContainer.nativeElement.clientHeight;this.scene=new Sc,this.scene.background=new Ke("#111"),this.camera=new Zt(75,t/i,.1,1e3),this.camera.position.set(0,1.6,5),this.renderer=new gh({antialias:!0}),this.renderer.setSize(t,i),this.rendererContainer.nativeElement.appendChild(this.renderer.domElement),this.controls=new yh(this.camera,this.renderer.domElement),this.controls.lookSpeed=.05,this.controls.movementSpeed=0,this.controls.lookVertical=!0,this.controls.constrainVertical=!0,this.controls.verticalMin=1,this.controls.verticalMax=2,this.controls.autoForward=!1;let r=new Tc(16777215,.3);this.scene.add(r);let s=new Cc(16777215,20,50);s.position.set(0,6.8,0),s.castShadow=!0,this.scene.add(s);let o=new xs(.15,16,8),a=new tr({color:16777198}),c=new bt(o,a);c.position.copy(s.position),this.scene.add(c);let l=new Ss().load("assets/images/marble.jpg");l.wrapS=Qi,l.wrapT=Qi,l.repeat.set(20,20);let u=new hi({map:l,metalness:.3,roughness:.5}),d=7,h=4,p=new hi({color:15658734,metalness:.2,roughness:.7});for(let V=-16;V<16;V+=h+.2)for(let k=-16;k<16;k+=h+.2){let G=new bt(new Nn(h,h),u);G.rotation.x=Math.PI/2,G.position.set(V,d,k),this.scene.add(G)}[[-10,d-.1,-5],[0,d-.1,-5],[10,d-.1,-5],[-10,d-.1,0],[0,d-.1,0],[10,d-.1,0],[-10,d-.1,5],[0,d-.1,5],[10,d-.1,5]].forEach(([V,k,G])=>{let X=new Fr(8,.05,.1),W=new hi({color:3355443}),Z=new bt(X,W);Z.position.set(V,k,G),this.scene.add(Z);for(let H=-3;H<=3;H+=3){let ee=new Ko(16777215,5,10);ee.decay=1,ee.angle=Math.PI/5,ee.penumbra=.5,ee.position.set(V+H,k-.1,G),ee.castShadow=!0,ee.angle=Math.PI/7,ee.penumbra=.4,ee.target.position.set(V+H,1.5,G);let de=new xs(.1,8,8),Me=new tr({color:16777198}),We=new bt(de,Me);We.position.copy(ee.position),this.scene.add(We),this.scene.add(ee),this.scene.add(ee.target)}});let y=new hi({color:"#FFFFF0",side:qn}),m=1,f=5,E=17,b=new bt(new Nn(E,f,m),y);b.position.set(0,f/2,-8.01),this.scene.add(b);let M=new bt(new Nn(E,f,m),y);M.position.set(8.01,f/2,0),M.rotation.y=-Math.PI/2,this.scene.add(M);let I=new bt(new Nn(E,f,m),y);I.position.set(0,f/2,8.01),I.rotation.y=Math.PI,this.scene.add(I);let T=new bt(new Nn(E,f,m),y);T.position.set(-8.01,f/2,0),T.rotation.y=Math.PI/2,this.scene.add(T),this.wallBoxes=[],[b,M,I,T].forEach(V=>{let k=new ui().setFromObject(V);this.wallBoxes.push(k)});let C=new Ss().load("assets/images/marble.jpg");C.wrapS=Qi,C.wrapT=Qi,C.repeat.set(16,16);let N=new hi({map:C}),S=new bt(new Nn(16,16),N);S.rotation.x=-Math.PI/2,S.position.y=0,this.scene.add(S),this.addPlantPot(new P(7,0,7)),this.addPlantPot(new P(-7,0,7)),this.addPlantPot(new P(-7,0,-7));let x=8,A=1;this.placeWallArtworks(ls.slice(0,4),new P(0,1.6,-x),"front",A),this.placeWallArtworks(ls.slice(4,7),new P(x,1.6,0),"right",A),this.placeWallArtworks(ls.slice(7,10),new P(0,1.6,x),"back",A),this.placeWallArtworks(ls.slice(10),new P(-x,1.6,0),"left",A),this.renderer.domElement.addEventListener("click",this.onClick.bind(this)),this.renderer.domElement.addEventListener("mousemove",this.onMouseMove.bind(this))}addPlantPot(t){let i=new bc(.3,.3,.5,32),r=new hi({color:9127187}),s=new bt(i,r);s.position.set(t.x,.25,t.z),this.scene.add(s);let o=new xs(.5,16,16),a=new hi({color:2263842}),c=new bt(o,a);c.position.set(t.x,.9,t.z),this.scene.add(c)}checkCollision(t){let i=new ui().setFromCenterAndSize(t,new P(.5,1.6,.5));return this.wallBoxes.some(r=>r.intersectsBox(i))}updateMovement(t){let i=new P;if(this.pressedKeys.has("w")&&(i.z-=1),this.pressedKeys.has("s")&&(i.z+=1),this.pressedKeys.has("d")&&(i.x-=1),this.pressedKeys.has("a")&&(i.x+=1),i.length()>0){i.normalize();let r=new P;this.camera.getWorldDirection(r),r.y=0,r.normalize();let s=new P().crossVectors(this.camera.up,r).normalize(),o=new P;o.addScaledVector(r,-i.z),o.addScaledVector(s,i.x),o.normalize();let c=this.camera.position.clone().add(o.multiplyScalar(5*t));this.checkCollision(c)||this.camera.position.copy(c)}}onKeyDown(t){this.pressedKeys.add(t.key.toLowerCase())}onKeyUp(t){this.pressedKeys.delete(t.key.toLowerCase())}placeWallArtworks(t,i,r,s){let c=-(t.map(l=>l.widthCm/100).reduce((l,u)=>l+u,0)+s*(t.length-1))/2;t.forEach((l,u)=>{let d=l.widthCm/100,h=l.heightCm/100,p=new Ss().load(l.src,E=>{E.minFilter=_n,E.magFilter=_n,E.anisotropy=this.renderer.capabilities.getMaxAnisotropy()}),g=new tr({map:p}),y=new Nn(d,h),m=new bt(y,g);switch(r){case"front":m.position.set(i.x+c+d/2,i.y,i.z),m.rotation.y=0;break;case"right":m.position.set(i.x,i.y,i.z+c+d/2),m.rotation.y=-Math.PI/2;break;case"back":m.position.set(i.x-(c+d/2),i.y,i.z),m.rotation.y=Math.PI;break;case"left":m.position.set(i.x,i.y,i.z-(c+d/2)),m.rotation.y=Math.PI/2;break}m.artwork=l,this.objects.push(m),this.scene.add(m);let f=new Ko(16777215,1.5,5);f.position.set(m.position.x,m.position.y+h/2+1,m.position.z),f.angle=Math.PI/6,f.penumbra=.3,f.castShadow=!0,f.target.position.set(m.position.x,m.position.y,m.position.z),this.scene.add(f.target),this.scene.add(f),c+=d+s})}onClick(t){let i=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-i.left)/i.width*2-1,this.mouse.y=-((t.clientY-i.top)/i.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let r=this.raycaster.intersectObjects(this.objects);if(r.length>0){let s=r[0].object;this.selectedArtwork=s.artwork||null}}toggleInfo(){this.selectedArtwork=null}closeDirectionModal(){this.openDirections=!this.openDirections}resetCamera(){this.camera.position.set(0,1.6,5),this.camera.lookAt(0,1.6,0),this.controls?.update(0)}onMouseMove(t){let i=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-i.left)/i.width*2-1,this.mouse.y=-((t.clientY-i.top)/i.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let r=this.raycaster.intersectObjects(this.objects);this.renderer.domElement.style.cursor=r.length>0?"pointer":"default",this.isMouseMoving=!0,this.mouseMoveTimeout&&clearTimeout(this.mouseMoveTimeout),this.mouseMoveTimeout=setTimeout(()=>{this.isMouseMoving=!1},300)}animate(){this.animationFrameId=requestAnimationFrame(()=>this.animate());let t=this.clock.getDelta();this.updateMovement(t),this.isMouseMoving&&this.controls.update(t),this.renderer.render(this.scene,this.camera)}onResize(){let t=this.rendererContainer.nativeElement.clientWidth,i=this.rendererContainer.nativeElement.clientHeight;this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i),this.controls.handleResize()}ngOnDestroy(){cancelAnimationFrame(this.animationFrameId),this.renderer.domElement.removeEventListener("click",this.onClick),this.renderer.domElement.removeEventListener("mousemove",this.onMouseMove)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=jt({type:n,selectors:[["app-virtual-gallery"]],viewQuery:function(i,r){if(i&1&&j0(tF,7),i&2){let s;iu(s=ru())&&(r.rendererContainer=s.first)}},hostBindings:function(i,r){i&1&&Ct("keydown",function(o){return r.onKeyDown(o)},!1,Xl)("keyup",function(o){return r.onKeyUp(o)},!1,Xl)("resize",function(){return r.onResize()},!1,Xl)},standalone:!0,features:[qt],decls:4,vars:2,consts:[["rendererContainer",""],[1,"renderer-container"],["class","modal",3,"click",4,"ngIf"],[1,"modal",3,"click"],[1,"modal-content",3,"click"],[3,"src","alt"],[3,"click"],["src","/assets/images/directions.png"]],template:function(i,r){i&1&&(Vt(0,"div",1,0),rs(2,nF,9,4,"div",2)(3,iF,7,0,"div",2)),i&2&&(Mt(2),dn("ngIf",r.selectedArtwork),Mt(),dn("ngIf",r.openDirections))},dependencies:[os,hu],styles:[".renderer-container[_ngcontent-%COMP%]{width:100%;height:100vh;display:block;overflow:hidden;background-color:#111}.modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000c;display:flex;justify-content:center;align-items:center;z-index:1000}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background:#222;padding:1rem 2rem;border-radius:8px;max-width:600px;max-height:80vh;overflow-y:auto;color:#fff;text-align:center}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:60vh;margin-bottom:1rem;border-radius:4px}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#444;border:none;padding:.5rem 1rem;color:#fff;border-radius:4px;cursor:pointer}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#666}"]})}}return n})();var pw=[{path:"",component:gM},{path:"gallery",component:mM},{path:"about",component:vM},{path:"contact",component:yM},{path:"virtual-gallery",component:fw}];var mw={providers:[Z0({eventCoalescing:!0}),uM(pw)]};var rF=()=>({exact:!0}),gw=(()=>{class n{constructor(){this.drawerOpen=!1}toggleDrawer(){this.drawerOpen=!this.drawerOpen}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=jt({type:n,selectors:[["app-navbar"]],standalone:!0,features:[qt],decls:24,vars:10,consts:[[1,"navbar"],[1,"logo"],["routerLink","/"],["src","/assets/images/spiliotis-logo.png","height","80px","width","180px","alt","logo"],[1,"burger",3,"click"],["routerLink","/","routerLinkActive","active",3,"click","routerLinkActiveOptions"],["routerLink","/gallery","routerLinkActive","active",3,"click"],["routerLink","/virtual-gallery","routerLinkActive","active",3,"click"],["routerLink","/about","routerLinkActive","active",3,"click"],["routerLink","/contact","routerLinkActive","active",3,"click"]],template:function(i,r){i&1&&(ue(0,"nav",0)(1,"div",1)(2,"a",2),Vt(3,"img",3),he()(),ue(4,"div",4),Ct("click",function(){return r.toggleDrawer()}),Vt(5,"div")(6,"div")(7,"div"),he(),ue(8,"ul")(9,"li")(10,"a",5),Ct("click",function(){return r.toggleDrawer()}),_e(11,"Home"),he()(),ue(12,"li")(13,"a",6),Ct("click",function(){return r.toggleDrawer()}),_e(14,"Artworks"),he()(),ue(15,"li")(16,"a",7),Ct("click",function(){return r.toggleDrawer()}),_e(17,"3D Gallery"),he()(),ue(18,"li")(19,"a",8),Ct("click",function(){return r.toggleDrawer()}),_e(20,"About"),he()(),ue(21,"li")(22,"a",9),Ct("click",function(){return r.toggleDrawer()}),_e(23,"Contact"),he()()()()),i&2&&(Mt(5),uo("open",r.drawerOpen),Mt(),uo("open",r.drawerOpen),Mt(),uo("open",r.drawerOpen),Mt(),uo("open",r.drawerOpen),Mt(2),dn("routerLinkActiveOptions",su(9,rF)))},dependencies:[Do,wr,Ou,os],styles:[".navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 14px;background:#111;color:#fff;position:relative;z-index:10}.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style:none;transition:all .3s ease}.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:2rem}.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-weight:500}.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom:2px solid #fff}.navbar[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]{display:none;flex-direction:column;cursor:pointer;gap:5px}.navbar[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:25px;height:3px;background:#fff;transition:all .3s ease}.navbar[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   div.open[_ngcontent-%COMP%]:nth-child(1){transform:rotate(45deg) translate(5px,5px)}.navbar[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   div.open[_ngcontent-%COMP%]:nth-child(2){opacity:0}.navbar[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   div.open[_ngcontent-%COMP%]:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]{display:flex}.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;background:#111;flex-direction:column;align-items:center;max-height:0;overflow:hidden;opacity:0;pointer-events:none}.navbar[_ngcontent-%COMP%]   ul.open[_ngcontent-%COMP%]{max-height:400px;opacity:1;pointer-events:auto}.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:1rem 0}}"]})}}return n})();var sF=()=>({exact:!0}),vw=(()=>{class n{constructor(){this.currentYear=new Date().getFullYear()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=jt({type:n,selectors:[["app-footer"]],standalone:!0,features:[qt],decls:24,vars:3,consts:[[1,"footer"],[1,"footer-content"],[1,"footer-logo"],["src","/assets/images/spiliotis-logo.png","alt","Spiliotis Logo"],[1,"footer-links"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/gallery","routerLinkActive","active"],["routerLink","/virtual-gallery","routerLinkActive","active"],["routerLink","/about","routerLinkActive","active"],["routerLink","/contact","routerLinkActive","active"],[1,"footer-info"],["href","mailto:spiliotisch@yahoo.gr"]],template:function(i,r){i&1&&(ue(0,"footer",0)(1,"div",1)(2,"div",2),Vt(3,"img",3),he(),ue(4,"div",4)(5,"a",5),_e(6,"Home"),he(),ue(7,"a",6),_e(8,"Gallery"),he(),ue(9,"a",7),_e(10,"3D Gallery"),he(),ue(11,"a",8),_e(12,"About"),he(),ue(13,"a",9),_e(14,"Contact"),he()(),ue(15,"div",10)(16,"p"),_e(17),he(),ue(18,"p"),_e(19," Email: "),ue(20,"a",11),_e(21,"spiliotisch@yahoo.gr"),he()(),ue(22,"p"),_e(23,"Based in Kimi, Greece"),he()()()()),i&2&&(Mt(5),dn("routerLinkActiveOptions",su(2,sF)),Mt(12),ho("\xA9 ",r.currentYear," Spiliotis. All rights reserved."))},dependencies:[Do,wr,Ou],styles:[".footer[_ngcontent-%COMP%]{background:#111;color:#fff;padding:3rem 2rem;text-align:center}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1.5rem}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:auto}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-weight:500}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ddd;text-decoration:underline}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}"]})}}return n})();var yw=(()=>{class n{constructor(){this.title="artist-portfolio"}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=jt({type:n,selectors:[["app-root"]],standalone:!0,features:[qt],decls:3,vars:0,template:function(i,r){i&1&&Vt(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[Pm,gw,vw]})}}return n})();Mx(yw,mw).catch(n=>console.error(n));

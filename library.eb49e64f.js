function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},t.parcelRequired7c6=a);var o=a("cBso0");var s=e(a("amrNH")).template({1:function(e,t,n,l,a){var o,s=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,r="function",i=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='gallery__item' id="+i(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:c)===r?o.call(s,{name:"id",hash:{},data:a,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):o)+">\n    <img\n      class='gallery__icon'\n      src='"+i(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:c)===r?o.call(s,{name:"poster_path",hash:{},data:a,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):o)+"'\n      alt='"+i(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===r?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):o)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+i(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===r?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):o)+"</p>\n      <p class='item__info'>\n        "+i(typeof(o=null!=(o=u(n,"genre_for_gallery")||(null!=t?u(t,"genre_for_gallery"):t))?o:c)===r?o.call(s,{name:"genre_for_gallery",hash:{},data:a,loc:{start:{line:14,column:8},end:{line:14,column:29}}}):o)+"&nbsp;\n        <span class='item__info--year'>&nbsp;"+i(typeof(o=null!=(o=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?o:c)===r?o.call(s,{name:"release_date",hash:{},data:a,loc:{start:{line:15,column:45},end:{line:15,column:61}}}):o)+"</span>\n      </p>\n      <p class='item__info--rating'>"+i(typeof(o=null!=(o=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?o:c)===r?o.call(s,{name:"vote_average",hash:{},data:a,loc:{start:{line:17,column:36},end:{line:17,column:52}}}):o)+"</p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:20,column:9}}}))?o:""},useData:!0}),c=a("5uEKZ");var r=e(a("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var o,s=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,r="function",i=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\n        <img\n          class="modal__poster"\n          src="'+i(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:c)===r?o.call(s,{name:"poster_path",hash:{},data:a,loc:{start:{line:4,column:15},end:{line:4,column:30}}}):o)+'"\n          alt="'+i(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===r?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:5,column:15},end:{line:5,column:24}}}):o)+'"\n          width="240"\n          height="357"\n        />\n      <div class="modal__info">\n        <h3 class="modal__title">'+i(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===r?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:10,column:33},end:{line:10,column:42}}}):o)+'</h3>\n        <table class="modal__table">\n          <tbody>\n            <tr>\n              <th class="modal__subtitle--table">Vote / Votes</th>\n              <th class="modal__table--text">\n                <span class="modal__table--vote modal__rating">'+i(typeof(o=null!=(o=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?o:c)===r?o.call(s,{name:"vote_average",hash:{},data:a,loc:{start:{line:16,column:63},end:{line:16,column:79}}}):o)+'</span>\n                <span class="table--splash">/</span>\n                <span class="modal__rating">'+i(typeof(o=null!=(o=u(n,"vote_count")||(null!=t?u(t,"vote_count"):t))?o:c)===r?o.call(s,{name:"vote_count",hash:{},data:a,loc:{start:{line:18,column:44},end:{line:18,column:58}}}):o)+'</span>\n              </th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Popularity</th>\n              <th class="modal__table--text">'+i(typeof(o=null!=(o=u(n,"popularity")||(null!=t?u(t,"popularity"):t))?o:c)===r?o.call(s,{name:"popularity",hash:{},data:a,loc:{start:{line:23,column:45},end:{line:23,column:59}}}):o)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Original Title</th>\n              <th class="modal__table--text">'+i(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===r?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:27,column:45},end:{line:27,column:54}}}):o)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Genre</th>\n              <th class="modal__table--text">'+i(typeof(o=null!=(o=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?o:c)===r?o.call(s,{name:"genre_ids",hash:{},data:a,loc:{start:{line:31,column:45},end:{line:31,column:58}}}):o)+'</th>\n            </tr>\n          </tbody>\n        </table>\n        <h4 class="modal__subtitle">about</h4>\n        <p class="modal__desc">'+i(typeof(o=null!=(o=u(n,"overview")||(null!=t?u(t,"overview"):t))?o:c)===r?o.call(s,{name:"overview",hash:{},data:a,loc:{start:{line:36,column:31},end:{line:36,column:43}}}):o)+'\n        </p>\n    <div class="modal__btns">\n          <button type="button" class="btn--add active" data-remove>remove</button>\n          <button type="button" class="btn--add" data-move>move to queue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},useData:!0}),i=a("eWCmQ");const u=document.querySelector(".library__icon use").href.baseVal,d=u.slice(0,u.indexOf("#")+1);function m(e,t){localStorage.setItem("pagesInfo",JSON.stringify({totalPages:e,currentPage:t}))}function p(){return JSON.parse(localStorage.getItem("pagesInfo")).totalPages}function f(){return JSON.parse(localStorage.getItem("pagesInfo")).currentPage}let h="",y=null;const g=`\n        <svg class="icon-points">\n          <use href="${d}icon-points"></use>\n        </svg>\n      `,v=document.querySelector(".pagination"),_=document.querySelector(".btn-right"),b=document.querySelector(".btn-left");document.querySelector(".pagination-wrapper");v.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;const t=p(),n=Number(e.target.textContent.trim());m(t,n),k(n)})),_.addEventListener("click",(function(e){console.log("=>");let t=f();const n=p();if(n===t)return;t+=1,y&&y.classList.remove("current-page");m(n,t),k(t),L(n,t)})),b.addEventListener("click",(function(e){console.log("<=");let t=f();const n=p();if(1===t)return;t-=1,y&&y.classList.remove("current-page");m(n,t),k(t),L(n,t)}));const S=`<svg class="btn-icon">\n<use href="${d}icon-left"></use>\n</svg>`,I=`<svg class="btn-icon">\n<use href="${d}icon-right"></use>\n</svg>\n`;function L(e,t){v.innerHTML="",h="",function(e,t){1===t?(b.disabled=!0,b.innerHTML="",_.disabled=!1,_.innerHTML=I):t===e?(_.disabled=!0,_.innerHTML="",b.disabled=!1,b.innerHTML=S):(b.disabled=!1,_.disabled=!1,_.innerHTML=I,b.innerHTML=S)}(e,t),e<=5?(!function(e,t){for(let n=1;n<=e;n+=1)h+=t!==n?`<a href="">${n}</a>`:`<a class="current-page" href="">${n}</a>`;v.innerHTML=h}(e,t),1===e&&(_.style.display="none",b.style.display="none")):t>=e-4?function(e,t){h='<a class="start-end-el" href="">1</a>',h+=g;for(let n=e-4;n<=e;n+=1)h+=t!==n?`<a href="">${n}</a>`:`<a class="current-page" href="">${n}</a>`;v.innerHTML=h}(e,t):t<=5?function(e,t){for(let e=1;e<=5;e+=1)h+=t!==e?`<a href="">${e}</a>`:`<a class="current-page" href="">${e}</a>`;h+=g,h+=`<a class="start-end-el" href="">${e}</a>`,v.innerHTML=h}(e,t):function(e,t){h='<a class="start-end-el" href="">1</a>',h+=g;const n=t+2;for(let e=t-2;e<=n;e+=1)h+=t!==e?`<a href="">${e}</a>`:`<a class="current-page" href="">${e}</a>`;h+=g,h+=`<a class="start-end-el" href="">${e}</a>`,v.innerHTML=h}(e,t),y=document.querySelector(".current-page")}function k(e){const t=JSON.parse(localStorage.getItem("keyInfo"));j(t,e),window.scrollTo(0,0)}e(i).Notify.init({success:{background:"#ff6b01",notiflixIconColor:"#32c682"}});const w={btnWatched:document.querySelector("[data-btn-watched]"),btnQueue:document.querySelector("[data-btn-queue]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),gallery:document.querySelector(".gallery__list"),modalContainer:document.querySelector(".modal__container"),galleryItemId:document.querySelector(".gallery__item"),backdrop:document.querySelector(".backdrop")},O={watched:[],queue:[]};w.btnQueue.addEventListener("click",(function(e){w.btnWatched.classList.remove("activeted"),w.btnWatched.classList.add("deactivated"),w.btnQueue.classList.remove("deactivated"),w.btnQueue.classList.add("activeted")})),w.btnWatched.addEventListener("click",(function(e){w.btnWatched.classList.remove("deactivated"),w.btnWatched.classList.add("activeted"),w.btnQueue.classList.remove("activeted"),w.btnQueue.classList.add("deactivated")})),w.gallery.addEventListener("click",(function(e){if("UL"===e.target.nodeName)return;document.addEventListener("keydown",M),x(),N=Number(e.target.closest("LI").id);try{let e;const t=JSON.parse(localStorage.getItem("keyInfo"));e="toWatched"===t?C.getMovieFromWatchedStorageById(N):C.getMovieFromQueueStorageById(N),w.modalContainer.innerHTML="",w.modalContainer.insertAdjacentHTML("beforeend",r(e));const n={removeBtnEl:document.querySelector("[data-remove]"),moveBtnEl:document.querySelector("[data-move]")};n.removeBtnEl.addEventListener("click",(()=>{w.btnWatched.classList.contains("activeted")?(O.watched=c.default.load("toWatched"),q(O.watched,"toWatched")):w.btnQueue.classList.contains("activeted")&&(O.queue=c.default.load("toQueue"),q(O.queue,"toQueue"))})),w.btnQueue.classList.contains("activeted")&&(n.moveBtnEl.textContent="move to watched"),n.moveBtnEl.addEventListener("click",(()=>{w.btnWatched.classList.contains("activeted")?(O.watched=c.default.load("toWatched"),O.queue=c.default.load("toQueue"),E("toWatched",O.watched,"toQueue")):w.btnQueue.classList.contains("activeted")&&(O.watched=c.default.load("toWatched"),O.queue=c.default.load("toQueue"),E("toQueue",O.queue,"toWatched"))}))}catch(e){console.log(e)}})),w.closeModalBtn.addEventListener("click",x),w.closeModalBtn.addEventListener("click",(()=>{document.removeEventListener("keydown",M)})),w.backdrop.addEventListener("click",(function(e){if(e.target!==e.currentTarget)return;x(),document.removeEventListener("keydown",M)}));let N=null;function q(t,n){console.log("remove");const l=t.findIndex((e=>e.id===N));if(-1===l)return void e(i).Notify.failure("Your movie has already been successfully moved or deleted!");console.log(l),10===l&&l===t.length-1?(console.log("first page ...current page 1"),m(p()-1,1)):l%10==0&&l===t.length-1&&(console.log("last movie... current page -1"),m(p()-1,f()-1)),t.splice(l,1),c.default.save(n,t),document.getElementById(N).remove();const a=JSON.parse(localStorage.getItem("keyInfo"));j(a,f()),e(i).Notify.success("Your movie has been successfully removed from the list"),x()}function E(t,n,l){console.log("move");const a=n.findIndex((e=>e.id===N));if(-1===a)return void e(i).Notify.failure("Your movie has already been successfully moved or deleted!");10===a&&a===n.length-1?(console.log("first page ...current page 1"),m(p()-1,1),window.scrollTo(0,0)):a%10==0&&a===n.length-1&&(console.log("last movie... current page -1"),m(p()-1,f()-1));const o=n.splice(a,1);c.default.save(t,n);const s=c.default.load(l);if(!s){const t=[o[0]];localStorage.setItem(l,JSON.stringify(t)),document.getElementById(N).remove();const n=JSON.parse(localStorage.getItem("keyInfo"));return j(n,f()),e(i).Notify.success("Your movie has been successfully moved!"),void x()}if(s.map((e=>e.id)).includes(o[0].id)){const t=s.findIndex((e=>e.id===N));s.splice(t,1),s.unshift(o[0]),c.default.save(l,s),document.getElementById(N).remove();const n=JSON.parse(localStorage.getItem("keyInfo"));j(n,f()),e(i).Notify.success("Your movie has been successfully moved!"),x()}else{s.unshift(o[0]),c.default.save(l,s),document.getElementById(N).remove();const t=JSON.parse(localStorage.getItem("keyInfo"));j(t,f()),e(i).Notify.success("Your movie has been successfully moved!"),x()}}function M(e){"Escape"===e.code&&(x(),document.removeEventListener("keydown",M))}function x(){w.modal.classList.toggle("is-hidden")}var T=e(a("amrNH")).template({1:function(e,t,n,l,a){var o,s=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,r="function",i=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='gallery__item' id="+i(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:c)===r?o.call(s,{name:"id",hash:{},data:a,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):o)+">\n    <img\n      class='gallery__icon'\n      src='"+i(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:c)===r?o.call(s,{name:"poster_path",hash:{},data:a,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):o)+"'\n      alt='"+i(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===r?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):o)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+i(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===r?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):o)+"</p>\n      <p class='item__info'>\n        "+i(typeof(o=null!=(o=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?o:c)===r?o.call(s,{name:"genre_ids",hash:{},data:a,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):o)+"&nbsp;\n        <span class='item__info--genres'>&nbsp;"+i(typeof(o=null!=(o=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?o:c)===r?o.call(s,{name:"release_date",hash:{},data:a,loc:{start:{line:15,column:47},end:{line:15,column:63}}}):o)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?o:""},useData:!0});var W=e(a("amrNH")).template({1:function(e,t,n,l,a){var o,s=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,r="function",i=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='gallery__item' id="+i(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:c)===r?o.call(s,{name:"id",hash:{},data:a,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):o)+">\n    <img\n      class='gallery__icon'\n      src='"+i(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:c)===r?o.call(s,{name:"poster_path",hash:{},data:a,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):o)+"'\n      alt='"+i(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===r?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):o)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+i(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===r?o.call(s,{name:"title",hash:{},data:a,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):o)+"</p>\n      <p class='item__info'>\n        "+i(typeof(o=null!=(o=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?o:c)===r?o.call(s,{name:"genre_ids",hash:{},data:a,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):o)+"&nbsp;\n        <span class='item__info--genres'>&nbsp;"+i(typeof(o=null!=(o=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?o:c)===r?o.call(s,{name:"release_date",hash:{},data:a,loc:{start:{line:15,column:47},end:{line:15,column:63}}}):o)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?o:""},useData:!0});c=a("5uEKZ");const H={gallery:document.querySelector(".gallery__list"),btnWatched:document.querySelector("[data-btn-watched]"),btnQueue:document.querySelector("[data-btn-queue]")};H.btnWatched.addEventListener("click",(function(){const e=c.default.load("toWatched");H.gallery.innerHTML="",H.gallery.insertAdjacentHTML("beforeend",T(e)),"toQueue"===JSON.parse(localStorage.getItem("keyInfo"))&&(m(p(),1),console.log("Должна быть пейдж 1"));localStorage.setItem("keyInfo",JSON.stringify("toWatched")),j("toWatched",f())})),H.btnQueue.addEventListener("click",(function(){const e=c.default.load("toQueue");H.gallery.innerHTML="",H.gallery.insertAdjacentHTML("beforeend",W(e)),"toWatched"===JSON.parse(localStorage.getItem("keyInfo"))&&(m(p(),1),console.log("Должна быть пейдж 1"));localStorage.setItem("keyInfo",JSON.stringify("toQueue")),j("toQueue",f())})),a("8Yq9A");const Q=document.querySelector(".pagination"),J=document.querySelector(".btn-right"),P=document.querySelector(".btn-left");Q.style.display="none",J.style.display="none",P.style.display="none",localStorage.setItem("keyInfo",JSON.stringify("toWatched")),localStorage.getItem("pagesInfo")&&m(1,1);const B=document.querySelector(".preview"),C=new(0,o.MovieApi);C.storeGenres(),localStorage.setItem("keyInfo",JSON.stringify("toWatched")),localStorage.getItem("pagesInfo")&&m(1,1);const $=document.querySelector(".gallery__list"),j=(e,t)=>{if(!localStorage.getItem(e))return B.style.display="block",Q.style.display="none",J.style.display="none",P.style.display="none",void window.scrollTo(0,0);if(0===JSON.parse(localStorage.getItem(e)).length)return B.style.display="block",Q.style.display="none",J.style.display="none",P.style.display="none",void window.scrollTo(0,0);if(JSON.parse(localStorage.getItem(e)).length<=10){B.style.display="none",Q.style.display="flex",J.style.display="none",P.style.display="none";let n=JSON.parse(localStorage.getItem(e)).length,l=Math.ceil(n/10);const a=D(t,n,e);return m(l,t),$.innerHTML=s(a),void L(l,t)}Q.style.display="flex",J.style.display="flex",P.style.display="flex",B.style.display="none",console.log(e),console.log(JSON.parse(localStorage.getItem("keyInfo"))),console.log(t);let n=JSON.parse(localStorage.getItem(e)).length,l=Math.ceil(n/10);const a=D(t,n,e);m(l,t),$.innerHTML=s(a),L(l,t)};function D(e,t,n){const l=[];let a=10*Number(e);const o=a-10;a>t&&(a=t);const s=JSON.parse(localStorage.getItem(n));for(let e=o;e<a;e+=1)l.push(s[e]);return l}localStorage.getItem("toWatched")&&j("toWatched",1);
//# sourceMappingURL=library.eb49e64f.js.map

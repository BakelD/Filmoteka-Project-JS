!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){l[e]=n},n.parcelRequired7c6=a);var o=a("9ZPoN"),r=a("l5bVx"),i=e(a("WMajR")).template({1:function(n,t,l,a,o){var i,c=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(i=null!=(i=m(l,"id")||(null!=t?m(t,"id"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"id",hash:{},data:o,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):i)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(i=null!=(i=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):i)+"'\n      alt='"+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"title",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):i)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"title",hash:{},data:o,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):i)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(i=null!=(i=m(l,"genre_for_gallery")||(null!=t?m(t,"genre_for_gallery"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"genre_for_gallery",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:29}}}):i)+"&nbsp;\n        <span class='item__info--year'>&nbsp;"+u((void 0===(i=null!=(i=m(l,"release_date")||(null!=t?m(t,"release_date"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"release_date",hash:{},data:o,loc:{start:{line:15,column:45},end:{line:15,column:61}}}):i)+"</span>\n      </p>\n      <p class='item__info--rating'>"+u((void 0===(i=null!=(i=m(l,"vote_average")||(null!=t?m(t,"vote_average"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"vote_average",hash:{},data:o,loc:{start:{line:17,column:36},end:{line:17,column:52}}}):i)+"</p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:20,column:9}}}))?o:""},useData:!0}),c=a("jzQFI"),s=(r=a("l5bVx"),e(a("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(n,t,l,a,o){var i,c=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'\n        <img\n          class="modal__poster"\n          src="'+u((void 0===(i=null!=(i=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:15},end:{line:4,column:30}}}):i)+'"\n          alt="'+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"title",hash:{},data:o,loc:{start:{line:5,column:15},end:{line:5,column:24}}}):i)+'"\n          width="240"\n          height="357"\n        />\n      <div class="modal__info">\n        <h3 class="modal__title">'+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"title",hash:{},data:o,loc:{start:{line:10,column:33},end:{line:10,column:42}}}):i)+'</h3>\n        <table class="modal__table">\n          <tbody>\n            <tr>\n              <th class="modal__subtitle--table">Vote / Votes</th>\n              <th class="modal__table--text">\n                <span class="modal__table--vote modal__rating">'+u((void 0===(i=null!=(i=m(l,"vote_average")||(null!=t?m(t,"vote_average"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"vote_average",hash:{},data:o,loc:{start:{line:16,column:63},end:{line:16,column:79}}}):i)+'</span>\n                <span class="table--splash">/</span>\n                <span class="modal__rating">'+u((void 0===(i=null!=(i=m(l,"vote_count")||(null!=t?m(t,"vote_count"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"vote_count",hash:{},data:o,loc:{start:{line:18,column:44},end:{line:18,column:58}}}):i)+'</span>\n              </th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Popularity</th>\n              <th class="modal__table--text">'+u((void 0===(i=null!=(i=m(l,"popularity")||(null!=t?m(t,"popularity"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"popularity",hash:{},data:o,loc:{start:{line:23,column:45},end:{line:23,column:59}}}):i)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Original Title</th>\n              <th class="modal__table--text">'+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"title",hash:{},data:o,loc:{start:{line:27,column:45},end:{line:27,column:54}}}):i)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Genre</th>\n              <th class="modal__table--text">'+u((void 0===(i=null!=(i=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"genre_ids",hash:{},data:o,loc:{start:{line:31,column:45},end:{line:31,column:58}}}):i)+'</th>\n            </tr>\n          </tbody>\n        </table>\n        <h4 class="modal__subtitle">about</h4>\n        <p class="modal__desc">'+u((void 0===(i=null!=(i=m(l,"overview")||(null!=t?m(t,"overview"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"overview",hash:{},data:o,loc:{start:{line:36,column:31},end:{line:36,column:43}}}):i)+'\n        </p>\n    <div class="modal__btns">\n          <button type="button" class="btn--add active button" data-remove>remove</button>\n          <button type="button" class="btn--add button" data-move>add to queue</button>\n          <button type="button" class="btn--add btn--trailer" data-trailer>try to find trailer</button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},useData:!0})),d=a("iU1Pc"),u=document.querySelector(".library__icon use").href.baseVal,m=u.slice(0,u.indexOf("#")+1);function f(e,n){localStorage.setItem("pagesInfo",JSON.stringify({totalPages:e,currentPage:n}))}function p(){return JSON.parse(localStorage.getItem("pagesInfo")).totalPages}function h(){return JSON.parse(localStorage.getItem("pagesInfo")).currentPage}var v="",y=null,g='\n        <svg class="icon-points">\n          <use href="'.concat(m,'icon-points"></use>\n        </svg>\n      '),_=document.querySelector(".pagination"),b=document.querySelector(".btn-right"),S=document.querySelector(".btn-left");document.querySelector(".pagination-wrapper");_.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;var n=p(),t=Number(e.target.textContent.trim());f(n,t),w(t)})),b.addEventListener("click",(function(e){var n=h(),t=p();if(t===n)return;n+=1,y&&y.classList.remove("current-page");f(t,n),w(n),k(t,n)})),S.addEventListener("click",(function(e){var n=h(),t=p();if(1===n)return;n-=1,y&&y.classList.remove("current-page");f(t,n),w(n),k(t,n)}));var L='<svg class="btn-icon">\n<use href="'.concat(m,'icon-left"></use>\n</svg>'),I='<svg class="btn-icon">\n<use href="'.concat(m,'icon-right"></use>\n</svg>\n');function k(e,n){_.innerHTML="",v="",function(e,n){1===n?(S.disabled=!0,S.innerHTML="",b.disabled=!1,b.innerHTML=I):n===e?(b.disabled=!0,b.innerHTML="",S.disabled=!1,S.innerHTML=L):(S.disabled=!1,b.disabled=!1,b.innerHTML=I,S.innerHTML=L)}(e,n),e<=5?(!function(e,n){for(var t=1;t<=e;t+=1)v+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");_.innerHTML=v}(e,n),1===e&&(b.style.display="none",S.style.display="none")):n>=e-4?function(e,n){v='<a class="start-end-el" href="">1</a>',v+=g;for(var t=e-4;t<=e;t+=1)v+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");_.innerHTML=v}(e,n):n<=5?function(e,n){for(var t=1;t<=5;t+=1)v+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");v+=g,v+='<a class="start-end-el" href="">'.concat(e,"</a>"),_.innerHTML=v}(e,n):function(e,n){v='<a class="start-end-el" href="">1</a>',v+=g;for(var t=n+2,l=n-2;l<=t;l+=1)v+=n!==l?'<a href="">'.concat(l,"</a>"):'<a class="current-page" href="">'.concat(l,"</a>");v+=g,v+='<a class="start-end-el" href="">'.concat(e,"</a>"),_.innerHTML=v}(e,n),y=document.querySelector(".current-page")}function w(e){var n=JSON.parse(localStorage.getItem("keyInfo"));V(n,e),window.scrollTo(0,0)}var O=a("cDXQO"),q=(O=a("cDXQO"),{btnWatched:document.querySelector("[data-btn-watched]"),btnQueue:document.querySelector("[data-btn-queue]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),gallery:document.querySelector(".gallery__list"),modalContainer:document.querySelector(".modal__container"),galleryItemId:document.querySelector(".gallery__item"),backdrop:document.querySelector(".backdrop")}),M={watched:[],queue:[]};q.btnQueue.addEventListener("click",(function(e){q.btnWatched.classList.remove("activeted"),q.btnWatched.classList.add("deactivated"),q.btnQueue.classList.remove("deactivated"),q.btnQueue.classList.add("activeted")})),q.btnWatched.addEventListener("click",(function(e){q.btnWatched.classList.remove("deactivated"),q.btnWatched.classList.add("activeted"),q.btnQueue.classList.remove("activeted"),q.btnQueue.classList.add("deactivated")})),q.gallery.addEventListener("click",(function(e){if("UL"===e.target.nodeName)return;document.addEventListener("keydown",E),W(),N=Number(e.target.closest("LI").id),localStorage.setItem("idForTrailer",JSON.stringify(N));try{var n,t=JSON.parse(localStorage.getItem("keyInfo"));n="toWatched"===t?D.getMovieFromWatchedStorageById(N):D.getMovieFromQueueStorageById(N),q.modalContainer.innerHTML="",q.modalContainer.insertAdjacentHTML("beforeend",s(n));var l={removeBtnEl:document.querySelector("[data-remove]"),moveBtnEl:document.querySelector("[data-move]"),btnTrailer:document.querySelector("[data-trailer]")};l.btnTrailer.addEventListener("click",O.onTrailerBtnClick),l.removeBtnEl.addEventListener("click",(function(){q.btnWatched.classList.contains("activeted")?(M.watched=c.default.load("toWatched"),x(M.watched,"toWatched")):q.btnQueue.classList.contains("activeted")&&(M.queue=c.default.load("toQueue"),x(M.queue,"toQueue"))})),q.btnQueue.classList.contains("activeted")&&(l.moveBtnEl.textContent="add to watched"),l.moveBtnEl.addEventListener("click",(function(){q.btnWatched.classList.contains("activeted")?(M.watched=c.default.load("toWatched"),M.queue=c.default.load("toQueue"),T("toWatched",M.watched,"toQueue")):q.btnQueue.classList.contains("activeted")&&(M.watched=c.default.load("toWatched"),M.queue=c.default.load("toQueue"),T("toQueue",M.queue,"toWatched"))}))}catch(e){console.log(e)}})),q.closeModalBtn.addEventListener("click",W),q.closeModalBtn.addEventListener("click",(function(){document.removeEventListener("keydown",E)})),q.backdrop.addEventListener("click",(function(e){if(e.target!==e.currentTarget)return;W(),document.removeEventListener("keydown",E)}));var N=null;function x(n,t){var l=n.findIndex((function(e){return e.id===N}));if(-1!==l){10===l&&l===n.length-1?f(p()-1,1):l%10==0&&l===n.length-1&&f(p()-1,h()-1),n.splice(l,1),c.default.save(t,n),document.getElementById(N).remove();var a=JSON.parse(localStorage.getItem("keyInfo"));V(a,h()),e(d).Notify.success("Your movie has been successfully removed from the list"),W()}else e(d).Notify.failure("Your movie has already been successfully moved or deleted!")}function T(n,t,l){var a=t.findIndex((function(e){return e.id===N}));if(-1!==a){10===a&&a===t.length-1?(f(p()-1,1),window.scrollTo(0,0)):a%10==0&&a===t.length-1&&f(p()-1,h()),c.default.save(n,t);var o=t.splice(a,1),r=c.default.load(l);if(!r){var i=[o[0]];localStorage.setItem(l,JSON.stringify(i));var s=JSON.parse(localStorage.getItem("keyInfo"));return V(s,h()),e(d).Notify.success("Your movie has been successfully moved!"),void W()}if(r.map((function(e){return e.id})).includes(o[0].id)){var u=r.findIndex((function(e){return e.id===N}));r.splice(u,1),r.unshift(o[0]),c.default.save(l,r);var m=JSON.parse(localStorage.getItem("keyInfo"));V(m,h()),e(d).Notify.success("Your movie has been successfully moved!"),W()}else{r.unshift(o[0]),c.default.save(l,r);var v=JSON.parse(localStorage.getItem("keyInfo"));V(v,h()),e(d).Notify.success("Your movie has been successfully moved!"),W()}}else e(d).Notify.failure("Your movie has already been successfully moved or deleted!")}function E(e){"Escape"===e.code&&(W(),document.removeEventListener("keydown",E))}function W(){q.modal.classList.toggle("is-hidden")}r=a("l5bVx");var Q=e(a("WMajR")).template({1:function(n,t,l,a,o){var i,c=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(i=null!=(i=m(l,"id")||(null!=t?m(t,"id"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"id",hash:{},data:o,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):i)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(i=null!=(i=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):i)+"'\n      alt='"+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"title",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):i)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"title",hash:{},data:o,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):i)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(i=null!=(i=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"genre_ids",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):i)+"&nbsp;\n        <span class='item__info--genres'>&nbsp;"+u((void 0===(i=null!=(i=m(l,"release_date")||(null!=t?m(t,"release_date"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"release_date",hash:{},data:o,loc:{start:{line:15,column:47},end:{line:15,column:63}}}):i)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?o:""},useData:!0}),J=(r=a("l5bVx"),e(a("WMajR")).template({1:function(n,t,l,a,o){var i,c=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(i=null!=(i=m(l,"id")||(null!=t?m(t,"id"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"id",hash:{},data:o,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):i)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(i=null!=(i=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):i)+"'\n      alt='"+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"title",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):i)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"title",hash:{},data:o,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):i)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(i=null!=(i=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"genre_ids",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):i)+"&nbsp;\n        <span class='item__info--genres'>&nbsp;"+u((void 0===(i=null!=(i=m(l,"release_date")||(null!=t?m(t,"release_date"):t))?i:s)?"undefined":e(r)(i))===d?i.call(c,{name:"release_date",hash:{},data:o,loc:{start:{line:15,column:47},end:{line:15,column:63}}}):i)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?o:""},useData:!0})),P=(c=a("jzQFI"),{gallery:document.querySelector(".gallery__list"),btnWatched:document.querySelector("[data-btn-watched]"),btnQueue:document.querySelector("[data-btn-queue]")});P.btnWatched.addEventListener("click",(function(){var e=c.default.load("toWatched");P.gallery.innerHTML="",P.gallery.insertAdjacentHTML("beforeend",Q(e)),"toQueue"===JSON.parse(localStorage.getItem("keyInfo"))&&(f(p(),1),document.querySelector(".trailer").src="",document.querySelector(".modal__trailer").style.display="none");localStorage.setItem("keyInfo",JSON.stringify("toWatched")),V("toWatched",h())})),P.btnQueue.addEventListener("click",(function(){var e=c.default.load("toQueue");P.gallery.innerHTML="",P.gallery.insertAdjacentHTML("beforeend",J(e)),document.querySelector(".trailer").src="",document.querySelector(".modal__trailer").style.display="none","toWatched"===JSON.parse(localStorage.getItem("keyInfo"))&&f(p(),1);localStorage.setItem("keyInfo",JSON.stringify("toQueue")),V("toQueue",h())})),a("7F1pg");var H=document.querySelector(".pagination"),j=document.querySelector(".btn-right"),C=document.querySelector(".btn-left");H.style.display="none",j.style.display="none",C.style.display="none",document.querySelector(".filter__buttons").style.display="none",localStorage.setItem("keyInfo",JSON.stringify("toWatched")),localStorage.getItem("pagesInfo")&&f(1,1);var B=document.querySelector(".preview"),D=new(0,o.MovieApi);D.storeGenres(),localStorage.setItem("keyInfo",JSON.stringify("toWatched")),localStorage.getItem("pagesInfo")&&f(1,1);var F=document.querySelector(".gallery__list"),V=function(e,n){if(!localStorage.getItem(e))return B.style.display="block",H.style.display="none",j.style.display="none",C.style.display="none",void window.scrollTo(0,0);if(0===JSON.parse(localStorage.getItem(e)).length)return B.style.display="block",H.style.display="none",j.style.display="none",C.style.display="none",void window.scrollTo(0,0);if(JSON.parse(localStorage.getItem(e)).length<=10){B.style.display="none",H.style.display="flex",j.style.display="none",C.style.display="none";var t=JSON.parse(localStorage.getItem(e)).length,l=Math.ceil(t/10),a=R(n,t,e);return f(l,n),F.innerHTML=i(a),void k(l,n)}H.style.display="flex",j.style.display="flex",C.style.display="flex",B.style.display="none";var o=JSON.parse(localStorage.getItem(e)).length,r=Math.ceil(o/10),c=R(n,o,e);f(r,n),F.innerHTML=i(c),k(r,n)};function R(e,n,t){var l=[],a=10*Number(e),o=a-10;a>n&&(a=n);for(var r=JSON.parse(localStorage.getItem(t)),i=o;i<a;i+=1)l.push(r[i]);return l}localStorage.getItem("toWatched")&&V("toWatched",1)}();
//# sourceMappingURL=library.9c1200bb.js.map
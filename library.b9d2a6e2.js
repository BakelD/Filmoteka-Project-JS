!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){l[e]=n},n.parcelRequired7c6=a);var o=a("9ZPoN"),i=a("l5bVx"),c=e(a("WMajR")).template({1:function(n,t,l,a,o){var c,r=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(c=null!=(c=m(l,"id")||(null!=t?m(t,"id"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"id",hash:{},data:o,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):c)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(c=null!=(c=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):c)+"'\n      alt='"+u((void 0===(c=null!=(c=m(l,"title")||(null!=t?m(t,"title"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"title",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):c)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(c=null!=(c=m(l,"title")||(null!=t?m(t,"title"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"title",hash:{},data:o,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):c)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(c=null!=(c=m(l,"genre_for_gallery")||(null!=t?m(t,"genre_for_gallery"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"genre_for_gallery",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:29}}}):c)+"&nbsp;\n        <span class='item__info--year'>&nbsp;"+u((void 0===(c=null!=(c=m(l,"release_date")||(null!=t?m(t,"release_date"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"release_date",hash:{},data:o,loc:{start:{line:15,column:45},end:{line:15,column:61}}}):c)+"</span>\n      </p>\n      <p class='item__info--rating'>"+u((void 0===(c=null!=(c=m(l,"vote_average")||(null!=t?m(t,"vote_average"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"vote_average",hash:{},data:o,loc:{start:{line:17,column:36},end:{line:17,column:52}}}):c)+"</p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:20,column:9}}}))?o:""},useData:!0}),r=a("jzQFI"),s=(i=a("l5bVx"),e(a("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(n,t,l,a,o){var c,r=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'\n        <img\n          class="modal__poster"\n          src="'+u((void 0===(c=null!=(c=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:15},end:{line:4,column:30}}}):c)+'"\n          alt="'+u((void 0===(c=null!=(c=m(l,"title")||(null!=t?m(t,"title"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"title",hash:{},data:o,loc:{start:{line:5,column:15},end:{line:5,column:24}}}):c)+'"\n          width="240"\n          height="357"\n        />\n      <div class="modal__info">\n        <h3 class="modal__title">'+u((void 0===(c=null!=(c=m(l,"title")||(null!=t?m(t,"title"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"title",hash:{},data:o,loc:{start:{line:10,column:33},end:{line:10,column:42}}}):c)+'</h3>\n        <table class="modal__table">\n          <tbody>\n            <tr>\n              <th class="modal__subtitle--table">Vote / Votes</th>\n              <th class="modal__table--text">\n                <span class="modal__table--vote modal__rating">'+u((void 0===(c=null!=(c=m(l,"vote_average")||(null!=t?m(t,"vote_average"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"vote_average",hash:{},data:o,loc:{start:{line:16,column:63},end:{line:16,column:79}}}):c)+'</span>\n                <span class="table--splash">/</span>\n                <span class="modal__rating">'+u((void 0===(c=null!=(c=m(l,"vote_count")||(null!=t?m(t,"vote_count"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"vote_count",hash:{},data:o,loc:{start:{line:18,column:44},end:{line:18,column:58}}}):c)+'</span>\n              </th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Popularity</th>\n              <th class="modal__table--text">'+u((void 0===(c=null!=(c=m(l,"popularity")||(null!=t?m(t,"popularity"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"popularity",hash:{},data:o,loc:{start:{line:23,column:45},end:{line:23,column:59}}}):c)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Original Title</th>\n              <th class="modal__table--text">'+u((void 0===(c=null!=(c=m(l,"title")||(null!=t?m(t,"title"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"title",hash:{},data:o,loc:{start:{line:27,column:45},end:{line:27,column:54}}}):c)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Genre</th>\n              <th class="modal__table--text">'+u((void 0===(c=null!=(c=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"genre_ids",hash:{},data:o,loc:{start:{line:31,column:45},end:{line:31,column:58}}}):c)+'</th>\n            </tr>\n          </tbody>\n        </table>\n        <h4 class="modal__subtitle">about</h4>\n        <p class="modal__desc">'+u((void 0===(c=null!=(c=m(l,"overview")||(null!=t?m(t,"overview"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"overview",hash:{},data:o,loc:{start:{line:36,column:31},end:{line:36,column:43}}}):c)+'\n        </p>\n    <div class="modal__btns">\n          <button type="button" class="btn--add active" data-remove>remove</button>\n          <button type="button" class="btn--add" data-move>move to queue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},useData:!0})),d=a("iU1Pc"),u=document.querySelector(".library__icon use").href.baseVal,m=u.slice(0,u.indexOf("#")+1);function f(e,n){localStorage.setItem("pagesInfo",JSON.stringify({totalPages:e,currentPage:n}))}function p(){return JSON.parse(localStorage.getItem("pagesInfo")).totalPages}function h(){return JSON.parse(localStorage.getItem("pagesInfo")).currentPage}var v="",g=null,y='\n        <svg class="icon-points">\n          <use href="'.concat(m,'icon-points"></use>\n        </svg>\n      '),_=document.querySelector(".pagination"),b=document.querySelector(".btn-right"),S=document.querySelector(".btn-left");document.querySelector(".pagination-wrapper");_.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;var n=p(),t=Number(e.target.textContent.trim());f(n,t),w(t)})),b.addEventListener("click",(function(e){console.log("=>");var n=h(),t=p();if(t===n)return;n+=1,g&&g.classList.remove("current-page");f(t,n),w(n),k(t,n)})),S.addEventListener("click",(function(e){console.log("<=");var n=h(),t=p();if(1===n)return;n-=1,g&&g.classList.remove("current-page");f(t,n),w(n),k(t,n)}));var I='<svg class="btn-icon">\n<use href="'.concat(m,'icon-left"></use>\n</svg>'),L='<svg class="btn-icon">\n<use href="'.concat(m,'icon-right"></use>\n</svg>\n');function k(e,n){_.innerHTML="",v="",function(e,n){1===n?(S.disabled=!0,S.innerHTML="",b.disabled=!1,b.innerHTML=L):n===e?(b.disabled=!0,b.innerHTML="",S.disabled=!1,S.innerHTML=I):(S.disabled=!1,b.disabled=!1,b.innerHTML=L,S.innerHTML=I)}(e,n),e<=5?(!function(e,n){for(var t=1;t<=e;t+=1)v+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");_.innerHTML=v}(e,n),1===e&&(b.style.display="none",S.style.display="none")):n>=e-4?function(e,n){v='<a class="start-end-el" href="">1</a>',v+=y;for(var t=e-4;t<=e;t+=1)v+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");_.innerHTML=v}(e,n):n<=5?function(e,n){for(var t=1;t<=5;t+=1)v+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");v+=y,v+='<a class="start-end-el" href="">'.concat(e,"</a>"),_.innerHTML=v}(e,n):function(e,n){v='<a class="start-end-el" href="">1</a>',v+=y;for(var t=n+2,l=n-2;l<=t;l+=1)v+=n!==l?'<a href="">'.concat(l,"</a>"):'<a class="current-page" href="">'.concat(l,"</a>");v+=y,v+='<a class="start-end-el" href="">'.concat(e,"</a>"),_.innerHTML=v}(e,n),g=document.querySelector(".current-page")}function w(e){var n=JSON.parse(localStorage.getItem("keyInfo"));V(n,e),window.scrollTo(0,0)}e(d).Notify.init({success:{background:"#ff6b01",notiflixIconColor:"#32c682"}});var O={btnWatched:document.querySelector("[data-btn-watched]"),btnQueue:document.querySelector("[data-btn-queue]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),gallery:document.querySelector(".gallery__list"),modalContainer:document.querySelector(".modal__container"),galleryItemId:document.querySelector(".gallery__item"),backdrop:document.querySelector(".backdrop")},M={watched:[],queue:[]};O.btnQueue.addEventListener("click",(function(e){O.btnWatched.classList.remove("activeted"),O.btnWatched.classList.add("deactivated"),O.btnQueue.classList.remove("deactivated"),O.btnQueue.classList.add("activeted")})),O.btnWatched.addEventListener("click",(function(e){O.btnWatched.classList.remove("deactivated"),O.btnWatched.classList.add("activeted"),O.btnQueue.classList.remove("activeted"),O.btnQueue.classList.add("deactivated")})),O.gallery.addEventListener("click",(function(e){if("UL"===e.target.nodeName)return;document.addEventListener("keydown",E),W(),N=Number(e.target.closest("LI").id);try{var n,t=JSON.parse(localStorage.getItem("keyInfo"));n="toWatched"===t?C.getMovieFromWatchedStorageById(N):C.getMovieFromQueueStorageById(N),O.modalContainer.innerHTML="",O.modalContainer.insertAdjacentHTML("beforeend",s(n));var l={removeBtnEl:document.querySelector("[data-remove]"),moveBtnEl:document.querySelector("[data-move]")};l.removeBtnEl.addEventListener("click",(function(){O.btnWatched.classList.contains("activeted")?(M.watched=r.default.load("toWatched"),q(M.watched,"toWatched")):O.btnQueue.classList.contains("activeted")&&(M.queue=r.default.load("toQueue"),q(M.queue,"toQueue"))})),O.btnQueue.classList.contains("activeted")&&(l.moveBtnEl.textContent="move to watched"),l.moveBtnEl.addEventListener("click",(function(){O.btnWatched.classList.contains("activeted")?(M.watched=r.default.load("toWatched"),M.queue=r.default.load("toQueue"),x("toWatched",M.watched,"toQueue")):O.btnQueue.classList.contains("activeted")&&(M.watched=r.default.load("toWatched"),M.queue=r.default.load("toQueue"),x("toQueue",M.queue,"toWatched"))}))}catch(e){console.log(e)}})),O.closeModalBtn.addEventListener("click",W),O.closeModalBtn.addEventListener("click",(function(){document.removeEventListener("keydown",E)})),O.backdrop.addEventListener("click",(function(e){if(e.target!==e.currentTarget)return;W(),document.removeEventListener("keydown",E)}));var N=null;function q(n,t){console.log("remove");var l=n.findIndex((function(e){return e.id===N}));if(-1!==l){console.log(l),10===l&&l===n.length-1?(console.log("first page ...current page 1"),f(p()-1,1)):l%10==0&&l===n.length-1&&(console.log("last movie... current page -1"),f(p()-1,h()-1)),n.splice(l,1),r.default.save(t,n),document.getElementById(N).remove();var a=JSON.parse(localStorage.getItem("keyInfo"));V(a,h()),e(d).Notify.success("Your movie has been successfully removed from the list"),W()}else e(d).Notify.failure("Your movie has already been successfully moved or deleted!")}function x(n,t,l){console.log("move");var a=t.findIndex((function(e){return e.id===N}));if(-1!==a){10===a&&a===t.length-1?(console.log("first page ...current page 1"),f(p()-1,1),window.scrollTo(0,0)):a%10==0&&a===t.length-1&&(console.log("last movie... current page -1"),f(p()-1,h()-1));var o=t.splice(a,1);r.default.save(n,t);var i=r.default.load(l);if(!i){var c=[o[0]];localStorage.setItem(l,JSON.stringify(c)),document.getElementById(N).remove();var s=JSON.parse(localStorage.getItem("keyInfo"));return V(s,h()),e(d).Notify.success("Your movie has been successfully moved!"),void W()}if(i.map((function(e){return e.id})).includes(o[0].id)){var u=i.findIndex((function(e){return e.id===N}));i.splice(u,1),i.unshift(o[0]),r.default.save(l,i),document.getElementById(N).remove();var m=JSON.parse(localStorage.getItem("keyInfo"));V(m,h()),e(d).Notify.success("Your movie has been successfully moved!"),W()}else{i.unshift(o[0]),r.default.save(l,i),document.getElementById(N).remove();var v=JSON.parse(localStorage.getItem("keyInfo"));V(v,h()),e(d).Notify.success("Your movie has been successfully moved!"),W()}}else e(d).Notify.failure("Your movie has already been successfully moved or deleted!")}function E(e){"Escape"===e.code&&(W(),document.removeEventListener("keydown",E))}function W(){O.modal.classList.toggle("is-hidden")}i=a("l5bVx");var T=e(a("WMajR")).template({1:function(n,t,l,a,o){var c,r=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(c=null!=(c=m(l,"id")||(null!=t?m(t,"id"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"id",hash:{},data:o,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):c)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(c=null!=(c=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):c)+"'\n      alt='"+u((void 0===(c=null!=(c=m(l,"title")||(null!=t?m(t,"title"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"title",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):c)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(c=null!=(c=m(l,"title")||(null!=t?m(t,"title"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"title",hash:{},data:o,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):c)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(c=null!=(c=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"genre_ids",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):c)+"&nbsp;\n        <span class='item__info--genres'>&nbsp;"+u((void 0===(c=null!=(c=m(l,"release_date")||(null!=t?m(t,"release_date"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"release_date",hash:{},data:o,loc:{start:{line:15,column:47},end:{line:15,column:63}}}):c)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?o:""},useData:!0}),Q=(i=a("l5bVx"),e(a("WMajR")).template({1:function(n,t,l,a,o){var c,r=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(c=null!=(c=m(l,"id")||(null!=t?m(t,"id"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"id",hash:{},data:o,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):c)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(c=null!=(c=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):c)+"'\n      alt='"+u((void 0===(c=null!=(c=m(l,"title")||(null!=t?m(t,"title"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"title",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):c)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(c=null!=(c=m(l,"title")||(null!=t?m(t,"title"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"title",hash:{},data:o,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):c)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(c=null!=(c=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"genre_ids",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):c)+"&nbsp;\n        <span class='item__info--genres'>&nbsp;"+u((void 0===(c=null!=(c=m(l,"release_date")||(null!=t?m(t,"release_date"):t))?c:s)?"undefined":e(i)(c))===d?c.call(r,{name:"release_date",hash:{},data:o,loc:{start:{line:15,column:47},end:{line:15,column:63}}}):c)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?o:""},useData:!0})),J=(r=a("jzQFI"),{gallery:document.querySelector(".gallery__list"),btnWatched:document.querySelector("[data-btn-watched]"),btnQueue:document.querySelector("[data-btn-queue]")});J.btnWatched.addEventListener("click",(function(){var e=r.default.load("toWatched");J.gallery.innerHTML="",J.gallery.insertAdjacentHTML("beforeend",T(e)),"toQueue"===JSON.parse(localStorage.getItem("keyInfo"))&&(f(p(),1),console.log("Должна быть пейдж 1"));localStorage.setItem("keyInfo",JSON.stringify("toWatched")),V("toWatched",h())})),J.btnQueue.addEventListener("click",(function(){var e=r.default.load("toQueue");J.gallery.innerHTML="",J.gallery.insertAdjacentHTML("beforeend",Q(e)),"toWatched"===JSON.parse(localStorage.getItem("keyInfo"))&&(f(p(),1),console.log("Должна быть пейдж 1"));localStorage.setItem("keyInfo",JSON.stringify("toQueue")),V("toQueue",h())})),a("7F1pg");var P=document.querySelector(".pagination"),H=document.querySelector(".btn-right"),j=document.querySelector(".btn-left");P.style.display="none",H.style.display="none",j.style.display="none",localStorage.setItem("keyInfo",JSON.stringify("toWatched")),localStorage.getItem("pagesInfo")&&f(1,1);var B=document.querySelector(".preview"),C=new(0,o.MovieApi);C.storeGenres(),localStorage.setItem("keyInfo",JSON.stringify("toWatched")),localStorage.getItem("pagesInfo")&&f(1,1);var D=document.querySelector(".gallery__list"),V=function(e,n){if(!localStorage.getItem(e))return B.style.display="block",P.style.display="none",H.style.display="none",j.style.display="none",void window.scrollTo(0,0);if(0===JSON.parse(localStorage.getItem(e)).length)return B.style.display="block",P.style.display="none",H.style.display="none",j.style.display="none",void window.scrollTo(0,0);if(JSON.parse(localStorage.getItem(e)).length<=10){B.style.display="none",P.style.display="flex",H.style.display="none",j.style.display="none";var t=JSON.parse(localStorage.getItem(e)).length,l=Math.ceil(t/10),a=F(n,t,e);return f(l,n),D.innerHTML=c(a),void k(l,n)}P.style.display="flex",H.style.display="flex",j.style.display="flex",B.style.display="none",console.log(e),console.log(JSON.parse(localStorage.getItem("keyInfo"))),console.log(n);var o=JSON.parse(localStorage.getItem(e)).length,i=Math.ceil(o/10),r=F(n,o,e);f(i,n),D.innerHTML=c(r),k(i,n)};function F(e,n,t){var l=[],a=10*Number(e),o=a-10;a>n&&(a=n);for(var i=JSON.parse(localStorage.getItem(t)),c=o;c<a;c+=1)l.push(i[c]);return l}localStorage.getItem("toWatched")&&V("toWatched",1)}();
//# sourceMappingURL=library.b9d2a6e2.js.map

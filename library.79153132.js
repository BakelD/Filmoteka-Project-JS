!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){l[e]=n},n.parcelRequired7c6=a);var o=a("9ZPoN"),i=a("l5bVx"),r=e(a("WMajR")).template({1:function(n,t,l,a,o){var r,c=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(r=null!=(r=m(l,"id")||(null!=t?m(t,"id"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"id",hash:{},data:o,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):r)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(r=null!=(r=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):r)+"'\n      alt='"+u((void 0===(r=null!=(r=m(l,"title")||(null!=t?m(t,"title"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"title",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):r)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(r=null!=(r=m(l,"title")||(null!=t?m(t,"title"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"title",hash:{},data:o,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):r)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(r=null!=(r=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"genre_ids",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):r)+"&nbsp;\n        <span class='item__info--year'>&nbsp;"+u((void 0===(r=null!=(r=m(l,"release_date")||(null!=t?m(t,"release_date"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"release_date",hash:{},data:o,loc:{start:{line:15,column:45},end:{line:15,column:61}}}):r)+"</span>\n      </p>\n      <p class='item__info--rating'>"+u((void 0===(r=null!=(r=m(l,"vote_average")||(null!=t?m(t,"vote_average"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"vote_average",hash:{},data:o,loc:{start:{line:17,column:36},end:{line:17,column:52}}}):r)+"</p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:20,column:9}}}))?o:""},useData:!0}),c=a("jzQFI"),s=(i=a("l5bVx"),e(a("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(n,t,l,a,o){var r,c=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'\n        <img\n          class="modal__poster"\n          src="'+u((void 0===(r=null!=(r=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:15},end:{line:4,column:30}}}):r)+'"\n          alt="'+u((void 0===(r=null!=(r=m(l,"title")||(null!=t?m(t,"title"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"title",hash:{},data:o,loc:{start:{line:5,column:15},end:{line:5,column:24}}}):r)+'"\n          width="240"\n          height="357"\n        />\n      <div class="modal__info">\n        <h3 class="modal__title">'+u((void 0===(r=null!=(r=m(l,"title")||(null!=t?m(t,"title"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"title",hash:{},data:o,loc:{start:{line:10,column:33},end:{line:10,column:42}}}):r)+'</h3>\n        <table class="modal__table">\n          <tbody>\n            <tr>\n              <th class="modal__subtitle--table">Vote / Votes</th>\n              <th class="modal__table--text">\n                <span class="modal__table--vote modal__rating">'+u((void 0===(r=null!=(r=m(l,"vote_average")||(null!=t?m(t,"vote_average"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"vote_average",hash:{},data:o,loc:{start:{line:16,column:63},end:{line:16,column:79}}}):r)+'</span>\n                <span class="table--splash">/</span>\n                <span class="modal__rating">'+u((void 0===(r=null!=(r=m(l,"vote_count")||(null!=t?m(t,"vote_count"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"vote_count",hash:{},data:o,loc:{start:{line:18,column:44},end:{line:18,column:58}}}):r)+'</span>\n              </th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Popularity</th>\n              <th class="modal__table--text">'+u((void 0===(r=null!=(r=m(l,"popularity")||(null!=t?m(t,"popularity"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"popularity",hash:{},data:o,loc:{start:{line:23,column:45},end:{line:23,column:59}}}):r)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Original Title</th>\n              <th class="modal__table--text">'+u((void 0===(r=null!=(r=m(l,"title")||(null!=t?m(t,"title"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"title",hash:{},data:o,loc:{start:{line:27,column:45},end:{line:27,column:54}}}):r)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Genre</th>\n              <th class="modal__table--text">'+u((void 0===(r=null!=(r=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"genre_ids",hash:{},data:o,loc:{start:{line:31,column:45},end:{line:31,column:58}}}):r)+'</th>\n            </tr>\n          </tbody>\n        </table>\n        <h4 class="modal__subtitle">about</h4>\n        <p class="modal__desc">'+u((void 0===(r=null!=(r=m(l,"overview")||(null!=t?m(t,"overview"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"overview",hash:{},data:o,loc:{start:{line:36,column:31},end:{line:36,column:43}}}):r)+'\n        </p>\n    <div class="modal__btns">\n          <button type="button" class="btn--add active" data-remove>remove</button>\n          <button type="button" class="btn--add" data-move>move to queue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},useData:!0})),d=a("iU1Pc");function u(e,n){localStorage.setItem("pagesInfo",JSON.stringify({totalPages:e,currentPage:n}))}function m(){return JSON.parse(localStorage.getItem("pagesInfo")).totalPages}function f(){return JSON.parse(localStorage.getItem("pagesInfo")).currentPage}var p="",h=null,v='\n        <svg class="icon-points">\n          <use href="/sprite.f14d31f7.svg#icon-points"></use>\n        </svg>\n      ',g=document.querySelector(".pagination"),y=document.querySelector(".btn-right"),_=document.querySelector(".btn-left");document.querySelector(".pagination-wrapper");g.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;var n=m(),t=Number(e.target.textContent.trim());u(n,t),L(t)})),y.addEventListener("click",(function(e){console.log("=>");var n=f(),t=m();if(t===n)return;n+=1,h&&h.classList.remove("current-page");u(t,n),L(n),I(t,n)})),_.addEventListener("click",(function(e){console.log("<=");var n=f(),t=m();if(1===n)return;n-=1,h&&h.classList.remove("current-page");u(t,n),L(n),I(t,n)}));var b='<svg class="btn-icon">\n<use href="/sprite.f14d31f7.svg#icon-left"></use>\n</svg>',S='<svg class="btn-icon">\n<use href="/sprite.f14d31f7.svg#icon-right"></use>\n</svg>\n';function I(e,n){g.innerHTML="",p="",function(e,n){1===n?(_.disabled=!0,_.innerHTML="",y.disabled=!1,y.innerHTML=S):n===e?(y.disabled=!0,y.innerHTML="",_.disabled=!1,_.innerHTML=b):(_.disabled=!1,y.disabled=!1,y.innerHTML=S,_.innerHTML=b)}(e,n),e<=5?(!function(e,n){for(var t=1;t<=e;t+=1)p+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");g.innerHTML=p}(e,n),1===e&&(y.style.display="none",_.style.display="none")):n>=e-4?function(e,n){p='<a class="start-end-el" href="">1</a>',p+=v;for(var t=e-4;t<=e;t+=1)p+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");g.innerHTML=p}(e,n):n<=5?function(e,n){for(var t=1;t<=5;t+=1)p+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");p+=v,p+='<a class="start-end-el" href="">'.concat(e,"</a>"),g.innerHTML=p}(e,n):function(e,n){p='<a class="start-end-el" href="">1</a>',p+=v;for(var t=n+2,l=n-2;l<=t;l+=1)p+=n!==l?'<a href="">'.concat(l,"</a>"):'<a class="current-page" href="">'.concat(l,"</a>");p+=v,p+='<a class="start-end-el" href="">'.concat(e,"</a>"),g.innerHTML=p}(e,n),h=document.querySelector(".current-page")}function L(e){var n=JSON.parse(localStorage.getItem("keyInfo"));C(n,e),window.scrollTo(0,0)}e(d).Notify.init({success:{background:"#ff6b01",notiflixIconColor:"#32c682"}});var k={btnWatched:document.querySelector("[data-btn-watched]"),btnQueue:document.querySelector("[data-btn-queue]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),gallery:document.querySelector(".gallery__list"),modalContainer:document.querySelector(".modal__container"),galleryItemId:document.querySelector(".gallery__item"),backdrop:document.querySelector(".backdrop")},w={watched:[],queue:[]};k.btnQueue.addEventListener("click",(function(e){k.btnWatched.classList.remove("activeted"),k.btnWatched.classList.add("deactivated"),k.btnQueue.classList.remove("deactivated"),k.btnQueue.classList.add("activeted")})),k.btnWatched.addEventListener("click",(function(e){k.btnWatched.classList.remove("deactivated"),k.btnWatched.classList.add("activeted"),k.btnQueue.classList.remove("activeted"),k.btnQueue.classList.add("deactivated")})),k.gallery.addEventListener("click",(function(e){if("UL"===e.target.nodeName)return;document.addEventListener("keydown",q),x(),O=Number(e.target.closest("LI").id);try{var n,t=JSON.parse(localStorage.getItem("keyInfo"));n="toWatched"===t?j.getMovieFromWatchedStorageById(O):j.getMovieFromQueueStorageById(O),k.modalContainer.innerHTML="",k.modalContainer.insertAdjacentHTML("beforeend",s(n));var l={removeBtnEl:document.querySelector("[data-remove]"),moveBtnEl:document.querySelector("[data-move]")};l.removeBtnEl.addEventListener("click",(function(){k.btnWatched.classList.contains("activeted")?(w.watched=c.default.load("toWatched"),M(w.watched,"toWatched")):k.btnQueue.classList.contains("activeted")&&(w.queue=c.default.load("toQueue"),M(w.queue,"toQueue"))})),k.btnQueue.classList.contains("activeted")&&(l.moveBtnEl.textContent="move to watched"),l.moveBtnEl.addEventListener("click",(function(){k.btnWatched.classList.contains("activeted")?(w.watched=c.default.load("toWatched"),w.queue=c.default.load("toQueue"),N("toWatched",w.watched,"toQueue")):k.btnQueue.classList.contains("activeted")&&(w.watched=c.default.load("toWatched"),w.queue=c.default.load("toQueue"),N("toQueue",w.queue,"toWatched"))}))}catch(e){console.log(e)}})),k.closeModalBtn.addEventListener("click",x),k.closeModalBtn.addEventListener("click",(function(){document.removeEventListener("keydown",q)})),k.backdrop.addEventListener("click",(function(e){if(e.target!==e.currentTarget)return;x(),document.removeEventListener("keydown",q)}));var O=null;function M(n,t){console.log("remove");var l=n.findIndex((function(e){return e.id===O}));if(-1!==l){console.log(l),10===l&&l===n.length-1?(console.log("first page ...current page 1"),u(m()-1,1)):l%10==0&&l===n.length-1&&(console.log("last movie... current page -1"),u(m()-1,f()-1)),n.splice(l,1),c.default.save(t,n),document.getElementById(O).remove();var a=JSON.parse(localStorage.getItem("keyInfo"));C(a,f()),e(d).Notify.success("Your movie has been successfully removed from the list"),x()}else e(d).Notify.failure("Your movie has already been successfully moved or deleted!")}function N(n,t,l){console.log("move");var a=t.findIndex((function(e){return e.id===O}));if(-1!==a){10===a&&a===t.length-1?(console.log("first page ...current page 1"),u(m()-1,1),window.scrollTo(0,0)):a%10==0&&a===t.length-1&&(console.log("last movie... current page -1"),u(m()-1,f()-1));var o=t.splice(a,1);c.default.save(n,t);var i=c.default.load(l);if(!i){var r=[o[0]];localStorage.setItem(l,JSON.stringify(r)),document.getElementById(O).remove();var s=JSON.parse(localStorage.getItem("keyInfo"));return C(s,f()),e(d).Notify.success("Your movie has been successfully moved!"),void x()}if(i.map((function(e){return e.id})).includes(o[0].id)){var p=i.findIndex((function(e){return e.id===O}));i.splice(p,1),i.unshift(o[0]),c.default.save(l,i),document.getElementById(O).remove();var h=JSON.parse(localStorage.getItem("keyInfo"));C(h,f()),e(d).Notify.success("Your movie has been successfully moved!"),x()}else{i.unshift(o[0]),c.default.save(l,i),document.getElementById(O).remove();var v=JSON.parse(localStorage.getItem("keyInfo"));C(v,f()),e(d).Notify.success("Your movie has been successfully moved!"),x()}}else e(d).Notify.failure("Your movie has already been successfully moved or deleted!")}function q(e){"Escape"===e.code&&(x(),document.removeEventListener("keydown",q))}function x(){k.modal.classList.toggle("is-hidden")}i=a("l5bVx");var E=e(a("WMajR")).template({1:function(n,t,l,a,o){var r,c=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(r=null!=(r=m(l,"id")||(null!=t?m(t,"id"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"id",hash:{},data:o,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):r)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(r=null!=(r=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):r)+"'\n      alt='"+u((void 0===(r=null!=(r=m(l,"title")||(null!=t?m(t,"title"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"title",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):r)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(r=null!=(r=m(l,"title")||(null!=t?m(t,"title"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"title",hash:{},data:o,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):r)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(r=null!=(r=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"genre_ids",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):r)+"&nbsp;\n        <span class='item__info--genres'>&nbsp;"+u((void 0===(r=null!=(r=m(l,"release_date")||(null!=t?m(t,"release_date"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"release_date",hash:{},data:o,loc:{start:{line:15,column:47},end:{line:15,column:63}}}):r)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?o:""},useData:!0}),W=(i=a("l5bVx"),e(a("WMajR")).template({1:function(n,t,l,a,o){var r,c=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(r=null!=(r=m(l,"id")||(null!=t?m(t,"id"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"id",hash:{},data:o,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):r)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(r=null!=(r=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):r)+"'\n      alt='"+u((void 0===(r=null!=(r=m(l,"title")||(null!=t?m(t,"title"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"title",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):r)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(r=null!=(r=m(l,"title")||(null!=t?m(t,"title"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"title",hash:{},data:o,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):r)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(r=null!=(r=m(l,"genre_ids")||(null!=t?m(t,"genre_ids"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"genre_ids",hash:{},data:o,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):r)+"&nbsp;\n        <span class='item__info--genres'>&nbsp;"+u((void 0===(r=null!=(r=m(l,"release_date")||(null!=t?m(t,"release_date"):t))?r:s)?"undefined":e(i)(r))===d?r.call(c,{name:"release_date",hash:{},data:o,loc:{start:{line:15,column:47},end:{line:15,column:63}}}):r)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?o:""},useData:!0})),T=(c=a("jzQFI"),{gallery:document.querySelector(".gallery__list"),btnWatched:document.querySelector("[data-btn-watched]"),btnQueue:document.querySelector("[data-btn-queue]")});T.btnWatched.addEventListener("click",(function(){var e=c.default.load("toWatched");T.gallery.innerHTML="",T.gallery.insertAdjacentHTML("beforeend",E(e)),"toQueue"===JSON.parse(localStorage.getItem("keyInfo"))&&(u(m(),1),console.log("Должна быть пейдж 1"));localStorage.setItem("keyInfo",JSON.stringify("toWatched")),C("toWatched",f())})),T.btnQueue.addEventListener("click",(function(){var e=c.default.load("toQueue");T.gallery.innerHTML="",T.gallery.insertAdjacentHTML("beforeend",W(e)),"toWatched"===JSON.parse(localStorage.getItem("keyInfo"))&&(u(m(),1),console.log("Должна быть пейдж 1"));localStorage.setItem("keyInfo",JSON.stringify("toQueue")),C("toQueue",f())})),a("7F1pg");var Q=document.querySelector(".pagination"),J=document.querySelector(".btn-right"),P=document.querySelector(".btn-left");Q.style.display="none",J.style.display="none",P.style.display="none",localStorage.setItem("keyInfo",JSON.stringify("toWatched")),localStorage.getItem("pagesInfo")&&u(1,1);var H=document.querySelector(".preview"),j=new(0,o.MovieApi);j.storeGenres(),localStorage.setItem("keyInfo",JSON.stringify("toWatched")),localStorage.getItem("pagesInfo")&&u(1,1);var B=document.querySelector(".gallery__list"),C=function(e,n){if(!localStorage.getItem(e))return H.style.display="block",Q.style.display="none",J.style.display="none",P.style.display="none",void window.scrollTo(0,0);if(0===JSON.parse(localStorage.getItem(e)).length)return H.style.display="block",Q.style.display="none",J.style.display="none",P.style.display="none",void window.scrollTo(0,0);if(JSON.parse(localStorage.getItem(e)).length<=10){H.style.display="none",Q.style.display="flex",J.style.display="none",P.style.display="none";var t=JSON.parse(localStorage.getItem(e)).length,l=Math.ceil(t/10),a=D(n,t,e);return u(l,n),B.innerHTML=r(a),void I(l,n)}Q.style.display="flex",J.style.display="flex",P.style.display="flex",H.style.display="none",console.log(e),console.log(JSON.parse(localStorage.getItem("keyInfo"))),console.log(n);var o=JSON.parse(localStorage.getItem(e)).length,i=Math.ceil(o/10),c=D(n,o,e);u(i,n),B.innerHTML=r(c),I(i,n)};function D(e,n,t){var l=[],a=10*Number(e),o=a-10;a>n&&(a=n);for(var i=JSON.parse(localStorage.getItem(t)),r=o;r<a;r+=1)l.push(i[r]);return l}localStorage.getItem("toWatched")&&C("toWatched",1)}();
//# sourceMappingURL=library.79153132.js.map
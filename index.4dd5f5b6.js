!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=l);var r=l("bpxeT"),o=l("2TvXO"),i=l("9ZPoN"),c=l("l5bVx"),s=e(l("WMajR")).template({1:function(n,t,a,l,r){var o,i=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,f=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__item' id="+u((void 0===(o=null!=(o=f(a,"id")||(null!=t?f(t,"id"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"id",hash:{},data:r,loc:{start:{line:2,column:31},end:{line:2,column:37}}}):o)+">\n    <img\n      class='gallery__icon'\n      src='"+u((void 0===(o=null!=(o=f(a,"poster_path")||(null!=t?f(t,"poster_path"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"poster_path",hash:{},data:r,loc:{start:{line:5,column:11},end:{line:5,column:26}}}):o)+"'\n      alt='"+u((void 0===(o=null!=(o=f(a,"title")||(null!=t?f(t,"title"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:6,column:11},end:{line:6,column:20}}}):o)+"'\n      width='280'\n      height='394'\n      loading='lazy'\n    />\n    <div class='item__description'>\n      <p class='item__title'>"+u((void 0===(o=null!=(o=f(a,"title")||(null!=t?f(t,"title"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:12,column:29},end:{line:12,column:38}}}):o)+"</p>\n      <p class='item__info'>\n        "+u((void 0===(o=null!=(o=f(a,"genre_for_gallery")||(null!=t?f(t,"genre_for_gallery"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"genre_for_gallery",hash:{},data:r,loc:{start:{line:14,column:8},end:{line:14,column:29}}}):o)+"&nbsp;\n        <span class='item__info--year'>&nbsp;"+u((void 0===(o=null!=(o=f(a,"release_date")||(null!=t?f(t,"release_date"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"release_date",hash:{},data:r,loc:{start:{line:15,column:45},end:{line:15,column:61}}}):o)+"</span>\n\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var r;return null!=(r=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:20,column:9}}}))?r:""},useData:!0}),d=(r=l("bpxeT"),o=l("2TvXO"),i=l("9ZPoN"),document.querySelector(".header__icon use").href.baseVal),u=d.slice(0,d.indexOf("#")+1);function f(e,n){localStorage.setItem("pagesInfo",JSON.stringify({totalPages:e,currentPage:n}))}function m(){return JSON.parse(localStorage.getItem("pagesInfo")).totalPages}function p(){return JSON.parse(localStorage.getItem("pagesInfo")).currentPage}var v="",h=null,g='\n        <svg class="icon-points">\n          <use href="'.concat(u,'icon-points"></use>\n        </svg>\n      '),y=document.querySelector(".pagination"),b=document.querySelector(".btn-right"),_=document.querySelector(".btn-left");document.querySelector(".pagination-wrapper");y.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;var n=m(),t=Number(e.target.textContent.trim());f(n,t),M(t)})),b.addEventListener("click",(function(e){console.log("=>");var n=p(),t=m();if(t===n)return;n+=1,h&&h.classList.remove("current-page");f(t,n),M(n),T(t,n)})),_.addEventListener("click",(function(e){console.log("<=");var n=p(),t=m();if(1===n)return;n-=1,h&&h.classList.remove("current-page");f(t,n),M(n),T(t,n)}));var L='<svg class="btn-icon">\n<use href="'.concat(u,'icon-left"></use>\n</svg>'),w='<svg class="btn-icon">\n<use href="'.concat(u,'icon-right"></use>\n</svg>\n');function T(e,n){y.innerHTML="",v="",function(e,n){1===n?(_.disabled=!0,_.innerHTML="",b.disabled=!1,b.innerHTML=w):n===e?(b.disabled=!0,b.innerHTML="",_.disabled=!1,_.innerHTML=L):(_.disabled=!1,b.disabled=!1,b.innerHTML=w,_.innerHTML=L)}(e,n),e<=5?(!function(e,n){for(var t=1;t<=e;t+=1)v+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");y.innerHTML=v}(e,n),1===e&&(b.style.display="none",_.style.display="none")):n>=e-4?function(e,n){v='<a class="start-end-el" href="">1</a>',v+=g;for(var t=e-4;t<=e;t+=1)v+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");y.innerHTML=v}(e,n):n<=5?function(e,n){for(var t=1;t<=5;t+=1)v+=n!==t?'<a href="">'.concat(t,"</a>"):'<a class="current-page" href="">'.concat(t,"</a>");v+=g,v+='<a class="start-end-el" href="">'.concat(e,"</a>"),y.innerHTML=v}(e,n):function(e,n){v='<a class="start-end-el" href="">1</a>',v+=g;for(var t=n+2,a=n-2;a<=t;a+=1)v+=n!==a?'<a href="">'.concat(a,"</a>"):'<a class="current-page" href="">'.concat(a,"</a>");v+=g,v+='<a class="start-end-el" href="">'.concat(e,"</a>"),y.innerHTML=v}(e,n),h=document.querySelector(".current-page")}function S(e,n){if("renderTrendingMovies"!==e)if("findMoviesByQuery"!==e);else{var t={functionName:e,searchingQuery:n};localStorage.setItem("calledFunction",JSON.stringify(t))}else localStorage.setItem("calledFunction",JSON.stringify({functionName:e}))}function M(e){var n=JSON.parse(localStorage.getItem("calledFunction"));return"findMoviesByQuery"===n.functionName?(I(n.searchingQuery,e),void window.scrollTo(0,0)):"renderTrendingMovies"===n.functionName?($(e),void window.scrollTo(0,0)):void 0}var x,k=l("7rQOT"),q=new(0,i.MovieApi),O=document.querySelector(".header__form"),N=document.querySelector(".header__warn"),E=document.querySelector(".gallery__list"),Q="";function I(e,n){return P.apply(this,arguments)}function P(){return(P=e(r)(e(o).mark((function n(t,a){var l,r,i,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.searchMovie(t,a);case 3:l=e.sent,r=l.data,i=r.results,f(r.total_pages,a),c=q.getPreparedData(i),console.log(c),q.temproraryStoreMovies(c),E.innerHTML=s(c),T(m(),p()),S("findMoviesByQuery",t),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),n,null,[[0,16]])})))).apply(this,arguments)}O.addEventListener("submit",(x=e(r)(e(o).mark((function n(t){var a,l,r,i,c,d,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=1,(l=t.target.elements["input-search"].value.trim())&&Q!==l){e.next=5;break}return e.abrupt("return");case 5:return N.classList.add("is-hidden"),k.Loading.dots({svgColor:"#ff6b08"}),e.prev=7,e.next=10,q.searchMovie(l,a);case 10:if(r=e.sent,i=r.data,c=i.results,d=i.total_pages){e.next=19;break}return N.classList.remove("is-hidden"),setTimeout((function(){N.classList.add("is-hidden")}),5e3),k.Loading.remove(),e.abrupt("return");case 19:f(d,a),u=q.getPreparedData(c),console.log(u),q.temproraryStoreMovies(u),E.innerHTML=s(u),T(m(),p()),S("findMoviesByQuery",l),Q=l,k.Loading.remove(),e.next=33;break;case 30:e.prev=30,e.t0=e.catch(7),console.log(e.t0);case 33:case"end":return e.stop()}}),n,null,[[7,30]])}))),function(e){return x.apply(this,arguments)}));r=l("bpxeT"),o=l("2TvXO"),i=l("9ZPoN"),c=l("l5bVx");var H=e(l("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(n,t,a,l,r){var o,i=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,f=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'\n        <img\n          class="modal__poster"\n          src="'+u((void 0===(o=null!=(o=f(a,"poster_path")||(null!=t?f(t,"poster_path"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"poster_path",hash:{},data:r,loc:{start:{line:4,column:15},end:{line:4,column:30}}}):o)+'"\n          alt="'+u((void 0===(o=null!=(o=f(a,"title")||(null!=t?f(t,"title"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:5,column:15},end:{line:5,column:24}}}):o)+'"\n          width="240"\n          height="357"\n        />\n      <div class="modal__info">\n        <h3 class="modal__title">'+u((void 0===(o=null!=(o=f(a,"title")||(null!=t?f(t,"title"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:10,column:33},end:{line:10,column:42}}}):o)+'</h3>\n        <table class="modal__table">\n          <tbody>\n            <tr>\n              <th class="modal__subtitle--table">Vote / Votes</th>\n              <th class="modal__table--text">\n                <span class="modal__table--vote modal__rating">'+u((void 0===(o=null!=(o=f(a,"vote_average")||(null!=t?f(t,"vote_average"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"vote_average",hash:{},data:r,loc:{start:{line:16,column:63},end:{line:16,column:79}}}):o)+'</span>\n                <span class="table--splash">/</span>\n                <span class="modal__rating">'+u((void 0===(o=null!=(o=f(a,"vote_count")||(null!=t?f(t,"vote_count"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"vote_count",hash:{},data:r,loc:{start:{line:18,column:44},end:{line:18,column:58}}}):o)+'</span>\n              </th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Popularity</th>\n              <th class="modal__table--text">'+u((void 0===(o=null!=(o=f(a,"popularity")||(null!=t?f(t,"popularity"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"popularity",hash:{},data:r,loc:{start:{line:23,column:45},end:{line:23,column:59}}}):o)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Original Title</th>\n              <th class="modal__table--text">'+u((void 0===(o=null!=(o=f(a,"title")||(null!=t?f(t,"title"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:27,column:45},end:{line:27,column:54}}}):o)+'</th>\n            </tr>\n            <tr>\n              <th class="modal__subtitle--table">Genre</th>\n              <th class="modal__table--text">'+u((void 0===(o=null!=(o=f(a,"genre_ids")||(null!=t?f(t,"genre_ids"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"genre_ids",hash:{},data:r,loc:{start:{line:31,column:45},end:{line:31,column:58}}}):o)+'</th>\n            </tr>\n          </tbody>\n        </table>\n        <h4 class="modal__subtitle">about</h4>\n        <p class="modal__desc">'+u((void 0===(o=null!=(o=f(a,"overview")||(null!=t?f(t,"overview"):t))?o:s)?"undefined":e(c)(o))===d?o.call(i,{name:"overview",hash:{},data:r,loc:{start:{line:36,column:31},end:{line:36,column:43}}}):o)+'\n        </p>\n    <div class="modal__btns">\n          <button type="button" class="btn--add active" data-add-watch>add to Watched</button>\n          <button type="button" class="btn--add" data-add-queue>add to queue</button>\n          <button type="button" class="btn--add btn--trailer" data-trailer>try to find trailer</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},useData:!0}),A=l("jzQFI"),W=(k=l("7rQOT"),l("iU1Pc")),C=l("cDXQO"),D=(C=l("cDXQO"),new(0,i.MovieApi)),B={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),gallery:document.querySelector(".gallery__list"),modalContainer:document.querySelector(".modal__container"),galleryItemId:document.querySelector(".gallery__item"),backdrop:document.querySelector(".backdrop"),body:document.querySelector("body")},F={watched:[],queue:[]},j=A.default.load("toWatched"),J=A.default.load("toQueue");function V(){return(V=e(r)(e(o).mark((function n(t){var a,l,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("UL"!==t.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:document.addEventListener("keydown",X),R(),a=Number(t.target.closest("LI").id),localStorage.setItem("idForTrailer",JSON.stringify(a)),k.Loading.dots({svgColor:"#ff6b08"}),B.body.style.overflow="hidden";try{l=D.getMovieFromStorageById(a),k.Loading.remove(),B.modalContainer.innerHTML="",B.modalContainer.insertAdjacentHTML("beforeend",H(l)),(r={btnAddWatch:B.modal.querySelector("[data-add-watch]"),btnAddQueue:B.modal.querySelector("[data-add-queue]"),btnTrailer:B.modal.querySelector("[data-trailer]")}).btnTrailer.addEventListener("click",C.onTrailerBtnClick),r.btnAddWatch.addEventListener("click",(function(e){r.btnAddWatch.setAttribute("disabled",!0),r.btnAddWatch.classList.remove("active"),j&&0!==j.length||(F.watched.map((function(e){return e.id})).includes(l.id)?Z():(F.watched.splice(0,0,l),A.default.save("toWatched",F.watched),U())),j.map((function(e){return e.id})).includes(l.id)?Z():(j.splice(0,0,l),A.default.save("toWatched",j),U())})),r.btnAddQueue.addEventListener("click",(function(e){r.btnAddQueue.setAttribute("disabled",!0),J&&0!==J.length||(F.queue.map((function(e){return e.id})).includes(l.id)?G():(F.queue.splice(0,0,l),A.default.save("toQueue",F.queue),z())),J.map((function(e){return e.id})).includes(l.id)?G():(J.splice(0,0,l),A.default.save("toQueue",J),z())}))}catch(e){console.log(e)}case 9:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function X(e){"Escape"===e.code&&(R(),document.removeEventListener("keydown",X),B.body.style.overflow="visible")}function R(){B.modal.classList.toggle("is-hidden"),B.body.style.overflow="visible"}function U(){e(W).Notify.success("This movie has been successfully added to Watched")}function Z(){e(W).Notify.failure("This movie you have in Watched")}function z(){e(W).Notify.success("This movie has been successfully added to Queue")}function G(){e(W).Notify.failure("This movie you have in Queue")}B.gallery.addEventListener("click",(function(e){return V.apply(this,arguments)})),B.closeModalBtn.addEventListener("click",R),B.closeModalBtn.addEventListener("click",(function(){document.removeEventListener("keydown",X)})),B.backdrop.addEventListener("click",(function(e){if(e.target!==e.currentTarget)return;R(),document.querySelector(".modal__trailer").style.display="none",document.querySelector(".trailer").src="",document.removeEventListener("keydown",X),B.body.style.overflow="visible"})),l("7F1pg"),localStorage.getItem("pagesInfo")||f(1,1);var K=new(0,i.MovieApi),Y=document.querySelector(".gallery__list");function $(e){return ee.apply(this,arguments)}function ee(){return(ee=e(r)(e(o).mark((function n(t){var a,l,r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.getTrendingMovies(t);case 3:a=e.sent,l=a.data,r=l.results,f(l.total_pages,t),i=K.getPreparedData(r),K.temproraryStoreMovies(i),Y.innerHTML=s(i),T(m(),p()),S("renderTrendingMovies"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),n,null,[[0,15]])})))).apply(this,arguments)}K.storeGenres(),localStorage.removeItem("temproraryStore"),$(1)}();
//# sourceMappingURL=index.4dd5f5b6.js.map

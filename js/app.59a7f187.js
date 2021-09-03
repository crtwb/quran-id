(function(e){function t(t){for(var r,n,u=t[0],s=t[1],c=t[2],l=0,h=[];l<u.length;l++)n=u[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&h.push(o[n][0]),o[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var u=a[n];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={1:0},o={1:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{2:"9e566551",3:"cf14d7c7",4:"e1b2a512",5:"258b03ce",6:"4cf10ea6",7:"d779e6fe",8:"96b3f8ab",9:"30134df8"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={2:1,3:1,4:1,5:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{2:"0e433876",3:"97f5c4e0",4:"97f5c4e0",5:"97f5c4e0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){c=h[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],d.parentNode.removeChild(d),a(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var h=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",h.name="ChunkLoadError",h.type=r,h.request=n,a[1](h)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/quran-id/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var d=l;i.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"0047":function(e,t,a){},"2f39":function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"getSurahList",(function(){return w})),a.d(r,"getSurah",(function(){return A})),a.d(r,"getSurahLastRead",(function(){return L})),a.d(r,"getQuranReaderScrollPosition",(function(){return R})),a.d(r,"getQuranSearchAyahScrollPosition",(function(){return Q})),a.d(r,"getSearchAyahResults",(function(){return _})),a.d(r,"getSearchAyahPaging",(function(){return T}));var n={};a.r(n),a.d(n,"showLoading",(function(){return j})),a.d(n,"hideLoading",(function(){return x})),a.d(n,"updateSurahList",(function(){return O})),a.d(n,"updateSurah",(function(){return q})),a.d(n,"updateSurahLastRead",(function(){return k})),a.d(n,"updateQuranReaderScrollPosition",(function(){return E})),a.d(n,"updateQuranSearchAyahScrollPosition",(function(){return N})),a.d(n,"addSearchAyahResults",(function(){return $})),a.d(n,"resetSearchAyahResults",(function(){return B})),a.d(n,"resetSearchAyahPaging",(function(){return C})),a.d(n,"updateSearchAyahPaging",(function(){return I}));var o={};a.r(o),a.d(o,"fetchSurahList",(function(){return M})),a.d(o,"fetchSurah",(function(){return V})),a.d(o,"setSurahLastRead",(function(){return D})),a.d(o,"removeSurahLastRead",(function(){return J})),a.d(o,"setQuranReaderScrollPosition",(function(){return z})),a.d(o,"setQuranSearchAyahScrollPosition",(function(){return F})),a.d(o,"searchByAyah",(function(){return G})),a.d(o,"resetSearchAyahResults",(function(){return U})),a.d(o,"resetSearchAyahPaging",(function(){return H}));a("e6cf"),a("5319"),a("7d6e"),a("e54f"),a("4848"),a("c382"),a("985d"),a("0047");var i=a("2b0e"),u=a("1f91"),s=a("42d2"),c=a("b05d"),l=a("2a19"),h=a("18d6"),d=a("9c64");i["a"].use(c["a"],{config:{},lang:u["a"],iconSet:s["a"],plugins:{Notify:l["a"],LocalStorage:h["a"],Meta:d["a"]}});var f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},p=[],m={name:"App"},g=m,y=a("2877"),b=Object(y["a"])(g,f,p,!1,null,null,null),S=b.exports,v=a("2f62"),P=function(){return{surahList:[],surah:null,surahLastRead:h["a"].getItem("surah-last-read"),quranReaderScrollPosition:h["a"].getItem("surah-list-scroll-position"),searchAyahScrollPosition:h["a"].getItem("search-ayah-scroll-position"),searchAyah:{paging:{total:0,perPage:20,currentPage:1,totalPage:0},results:[]},loading:{fetchSurahList:!1,fetchSurah:!1,searchAyah:!1}}};function w(e){return e.surahList}function A(e){return e.surah}function L(e){return e.surahLastRead}function R(e){return e.quranReaderScrollPosition}function Q(e){return e.searchAyahScrollPosition}function _(e){return e.searchAyah.results}function T(e){return e.searchAyah.paging}a("ddb0");function j(e,t){e.loading[t]=!0}function x(e,t){e.loading[t]=!1}function O(e,t){e.surahList=t}function q(e,t){e.surah=t}function k(e,t){e.surahLastRead=t}function E(e,t){e.quranReaderScrollPosition=t}function N(e,t){e.searchAyahScrollPosition=t}function $(e,t){e.searchAyah.results.push(...t)}function B(e){e.searchAyah.results=[]}function C(e){e.searchAyah.paging={total:0,perPage:20,totalPage:0,currentPage:1}}function I(e,t){e.searchAyah.paging=t}function M(e){return e.commit("showLoading","fetchSurahList"),new Promise(((t,a)=>{this.$httpQuran({url:"chapters",params:{language:"id"}}).then((a=>{e.commit("updateSurahList",a.data.chapters),e.commit("hideLoading","fetchSurahList"),t(a)})).catch((t=>{e.commit("hideLoading","fetchSurahList"),a(t)}))}))}async function V(e,t){e.commit("showLoading","fetchSurah");const a=await this.$httpQuran({url:`chapters/${t}`,params:{language:"id"}}).then((e=>e.data.chapter)).catch((e=>console.log(e))),r=[{url:"quran/verses/uthmani",params:{chapter_number:t}},{url:"quran/translations/33",params:{chapter_number:t,fields:"verse_number"}}],n=[];return r.forEach((e=>{n.push(new Promise(((t,a)=>{this.$httpQuran({url:e.url,params:e.params}).then((e=>{t(e.data)})).catch((e=>{console.log(e),a(e)}))})))})),Promise.all(n).then((t=>{const r=t[0].verses,n=t[1].translations,o=Object.assign({ayahs:r,translations:n},a);e.commit("updateSurah",o),e.commit("hideLoading","fetchSurah")})).catch((t=>{console.log(t),e.commit("hideLoading","fetchSurah")}))}function D(e,{surah:t,offsetTop:a}){const r=Object.assign({offsetTop:a},t);h["a"].set("surah-last-read",r),e.commit("updateSurahLastRead",r)}function J(e){h["a"].remove("surah-last-read"),e.commit("updateSurahLastRead",null)}function z(e,{offsetTop:t}){h["a"].set("surah-list-scroll-position",t),e.commit("updateQuranReaderScrollPosition",t)}function F(e,{offsetTop:t}){h["a"].set("search-ayah-scroll-position",t),e.commit("updateQuranSearchAyahScrollPosition",t)}async function G(e,{keyword:t,page:a=1}){e.commit("showLoading","searchAyah");const r=0!=e.state.surahList.length?e.state.surahList:await e.dispatch("fetchSurahList").then((e=>e.data.chapters)),n=e.state.searchAyah.paging.perPage;return new Promise(((o,i)=>{this.$httpQuran({url:"search",params:{query:t,size:n,page:a}}).then((t=>{if(204==t.status)return e.commit("hideLoading","searchAyah"),void o({results:[]});const i=t.data.search,u=i.results,s={total:i.total_results,perPage:n,totalPage:i.total_pages,currentPage:a};u.forEach(((e,t,a)=>{const n=e.verse_key.split(":"),o=r.find((e=>e.id==n[0]));a[t].surahId=o.id,a[t].surahName=o.name_simple,a[t].ayahNumber=n[1]})),e.commit("updateSearchAyahPaging",s),e.commit("addSearchAyahResults",u),e.commit("hideLoading","searchAyah"),o({results:u,paging:s})})).catch((t=>{e.commit("hideLoading","searchAyah"),i(t)}))}))}function U(e){e.commit("resetSearchAyahResults")}function H(e){e.commit("resetSearchAyahPaging")}var K={namespaced:!0,state:P,getters:r,mutations:n,actions:o};i["a"].use(v["a"]);var W=function(){const e=new v["a"].Store({modules:{quran:K},strict:!1});return e},X=a("8c4f");const Y=[{path:"/",component:()=>Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"713b")),children:[{path:"",alias:"reader",name:"QuranReader",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"8fc9"))},{path:"reader/:surahId",name:"QuranReaderDetail",component:()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"d942")),props:!0},{path:"search-by-ayah",name:"QuranSearchByAyah",component:()=>Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"6c4e"))},{path:"player",name:"QuranPlayer",component:()=>Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"9ad9"))},{path:"bookmark",name:"QuranBookmark",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"4d15"))},{path:"about",name:"AboutIndex",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"a7b5"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(9)]).then(a.bind(null,"e51e"))}];var Z=Y;i["a"].use(X["a"]);var ee=function(){const e=new X["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Z,mode:"history",base:"/quran-id/"});return e},te=async function(){const e="function"===typeof W?await W({Vue:i["a"]}):W,t="function"===typeof ee?await ee({Vue:i["a"],store:e}):ee;e.$router=t;const a={router:t,store:e,render:e=>e(S),el:"#q-app"};return{app:a,store:e,router:t}},ae=a("9483"),re=a("a002"),ne=a.n(re);Object(ae["a"])("/quran-id/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){l["a"].create({classes:"notify-update no-box-shadow",message:"Terdapat pembaruan.",icon:"update",closeBtn:"Perbarui",timeout:1e4,onDismiss(){ne.a.clear().then((function(){window.location.reload()})).catch((function(e){console.log("Localforage",e)}))}})},offline(){},error(){}});var oe=a("bc3a"),ie=a.n(oe),ue=a("6f0d");const se=Object(ue["setupCache"])({maxAge:0}),ce=ie.a.create({adapter:se.adapter,baseURL:"https://api.quran.com/api/v4/",headers:{"X-Requested-With":"xmlhttprequest"}});var le=({store:e,Vue:t})=>{t.prototype.$http=ie.a,e.$http=ie.a,t.prototype.$httpQuran=ce,e.$httpQuran=ce};l["a"].registerType("toast",{classes:"notify-toast no-box-shadow",badgeStyle:"display: none",timeout:3e3}),l["a"].registerType("toast-error",{classes:"notify-toast error no-box-shadow",badgeStyle:"display: none",timeout:3e3}),l["a"].registerType("toast-warning",{classes:"notify-toast warning no-box-shadow",badgeStyle:"display: none",timeout:3e3});var he=a("0831"),de=a("9224");const{getScrollTarget:fe,setScrollPosition:pe}=he["a"];var me=({Vue:e})=>{e.mixin({data(){return{basmalahArabic:"﷽",productName:de["b"],productDescription:de["a"]}},methods:{removeFootNote(e){const t=/<sup\s+foot_note=\d+>\d+<\/sup>/gi;return e.replaceAll(t,"")},scrollToElement(e,t=-66){const a=fe(e),r=e.offsetTop+t,n=1e3;pe(a,r,n)},normalizeSurahNameTranslation(e){return e.replace(/\\/g,"")},arabicNumber(e){const t=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],a="&#1757;";return a+e.toString().split("").map((e=>t[e])).join("")},track(e,t,a){const r=e,n=null!==t&&void 0!==t?t:window.location.pathname,o=null!==a&&void 0!==a?a:window.location.href;this.$gtag.pageview({page_title:r,page_path:n,page_location:o})}}})},ge=a("a584"),ye=async({Vue:e})=>{e.use(ge["a"],{config:{id:"G-3RT9MGB5RR"},enabled:!0})};/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&a.e(0).then(a.t.bind(null,"a0db",7));const be="/quran-id/",Se=/\/\//,ve=e=>(be+e).replace(Se,"/");async function Pe(){const{app:e,store:t,router:a}=await te();let r=!1;const n=e=>{r=!0;const t=Object(e)===e?ve(a.resolve(e).route.fullPath):e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),u=[le,void 0,me,ye];for(let c=0;!1===r&&c<u.length;c++)if("function"===typeof u[c])try{await u[c]({app:e,router:a,store:t,Vue:i["a"],ssrContext:null,redirect:n,urlPath:o,publicPath:be})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&new i["a"](e)}Pe()},9224:function(e){e.exports=JSON.parse('{"a":"Al-Quran dan Terjemahan","b":"Al-Quran"}')}});
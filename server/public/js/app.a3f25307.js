(function(){"use strict";var e={844:function(e,t,o){var r=o(9242),s=o(3396);const l=(0,s._)("nav",null,null,-1);function a(e,t){const o=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,(0,s.Wm)(o)],64)}var n=o(89);const u={},c=(0,n.Z)(u,[["render",a]]);var i=c,d=o(678);const p={class:"h-screen relative"},v=(0,s._)("div",{id:"map",class:"h-full z-[1]"},null,-1);function f(e,t,o,r,l,a){const n=(0,s.up)("BaseModal"),u=(0,s.up)("MapFeatures");return(0,s.wg)(),(0,s.iD)("div",p,[r.geoError?((0,s.wg)(),(0,s.j4)(n,{key:0,onCloseGeoError:r.closeGeoError,geoErrorMsg:r.geoErrorMsg},null,8,["onCloseGeoError","geoErrorMsg"])):(0,s.kq)("",!0),(0,s.Wm)(u,{onGetGeolocation:r.getGeolocation,onPlotResult:r.plotResult,onToggleSearchResults:r.toggleSearchResults,onRemoveResult:r.removeResult,coords:r.coords,fetchCoords:r.fetchCoords,searchResults:r.searchResults},null,8,["onGetGeolocation","onPlotResult","onToggleSearchResults","onRemoveResult","coords","fetchCoords","searchResults"]),v])}var m=o(3153),g=o.n(m),h=o(4870),w=o(7139);const x={class:"h-screen absolute w-full z-10 flex justify-center items-start pt-[125px] bg-black/50"},y={class:"flex flex-col bg-white w-[80%] sm:w-[450px] px-6 py-4 rounded-md"},b={class:"text-lg mb-1"},R=(0,s._)("p",{class:"text-sm mb-4"}," To take advantage of this applications features, please ensure location services are enabled ",-1);function k(e,t,o,r,l,a){return(0,s.wg)(),(0,s.iD)("div",x,[(0,s._)("div",y,[(0,s._)("h1",b,"Error: "+(0,w.zw)(this.geoErrorMsg),1),R,(0,s._)("button",{onClick:t[0]||(t[0]=t=>e.$emit("closeGeoError")),class:"self-start py-2 px-4 bg-red-500 text-white rounded-md text-sm"}," Close ")])])}var _={props:["geoErrorMsg"]};const z=(0,n.Z)(_,[["render",k]]);var S=z;const G={class:"w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent"},C={class:"relative flex-1 md:min-w-[350px]"},I=(0,s._)("div",{class:"absolute top-0 left-[8px] h-full flex items-center"},[(0,s._)("i",{class:"fas fa-search"})],-1),M={class:"absolute mt-[8px] w-full"},O={key:0,class:"h-[200px] overflow-scroll bg-white rounded-md"},j={key:1},D=["onClick"],E=(0,s._)("i",{class:"fas fa-map-marker-alt"},null,-1),H={class:"text-[12px]"},Y={key:1,class:"mt-[8px] px-4 py-3 bg-white rounded-md"},T={class:"text-lg"},Z={class:"text-xs mb-1"},L={class:"text-xs"};function N(e,t,o,l,a,n){const u=(0,s.up)("BaseLoader");return(0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("div",C,[(0,s.wy)((0,s._)("input",{class:"pl-9 pr-4 py-3 text-[14px] focus:outline-none w-full shadow-md rounded-md",type:"text",placeholder:"Start your search...","onUpdate:modelValue":t[0]||(t[0]=e=>l.searchQuery=e),onInput:t[1]||(t[1]=(...e)=>l.search&&l.search(...e)),onFocus:t[2]||(t[2]=t=>e.$emit("toggleSearchResults"))},null,544),[[r.nr,l.searchQuery]]),I,(0,s._)("div",M,[l.searchQuery&&o.searchResults?((0,s.wg)(),(0,s.iD)("div",O,[l.searchData?((0,s.wg)(),(0,s.iD)("div",j,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.searchData,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"px-4 py-2 flex gap-x-2 cursor-pointer hover:bg-slate-600 hover:text-white",key:t,onClick:t=>l.selectResult(e)},[E,(0,s._)("p",H,(0,w.zw)(e.place_name_en),1)],8,D)))),128))])):((0,s.wg)(),(0,s.j4)(u,{key:0}))])):(0,s.kq)("",!0),l.selectedResult?((0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("i",{onClick:t[3]||(t[3]=(...e)=>l.removeResult&&l.removeResult(...e)),class:"flex justify-end far fa-times-circle"}),(0,s._)("h1",T,(0,w.zw)(l.selectedResult.text),1),(0,s._)("p",Z,(0,w.zw)(l.selectedResult.properties.address)+", "+(0,w.zw)(l.selectedResult.city)+", "+(0,w.zw)(l.selectedResult.state),1),(0,s._)("p",L,(0,w.zw)(l.selectedResult.properties.category),1)])):(0,s.kq)("",!0)])]),(0,s._)("div",{class:(0,w.C_)(["px-4 bg-white flex items-center shadow-md rounded-md min-h-[45px]",{"bg-slate-600":o.coords}]),onClick:t[4]||(t[4]=t=>e.$emit("getGeolocation"))},[(0,s._)("i",{class:(0,w.C_)(["fas fa-location-arrow 'text-slate-600' text-[18px]",{"text-white":o.coords,"animate-pulse":o.fetchCoords}])},null,2)],2)])}var Q=o(6265),U=o.n(Q);const P={class:"h-full w-full flex items-center justify-center"},V=(0,s._)("span",{class:"block w-[60px] h-[60px] border-[5px] border-solid border-transparent border-t-black rounded-full animate-spin"},null,-1),$=[V];function B(e,t,o,r,l,a){return(0,s.wg)(),(0,s.iD)("div",P,$)}var F={name:"loadingSpinner"};const A=(0,n.Z)(F,[["render",B]]);var J=A,W={props:["fetchCoords","coords","searchResults"],components:{BaseLoader:J},setup(e,{emit:t}){const o=(0,h.iH)(null),r=(0,h.iH)(null),s=(0,h.iH)(null),l=(0,h.iH)(null),a=()=>{clearTimeout(s.value),r.value=null,s.value=setTimeout((async()=>{if(""!==o.value){const t=new URLSearchParams({fuzzyMatch:!0,language:"en",limit:10,proximity:e.coords?`${e.coords.lng},${e.coords.lat}`:"0,0"}),s=await U().get(`api/search/${o.value}?${t}`);r.value=s.data.features}}),750)},n=e=>{l.value=e,t("plotResult",e.geometry)},u=()=>{l.value=null,t("removeResult")};return{searchQuery:o,search:a,searchData:r,selectResult:n,selectedResult:l,removeResult:u}}};const q=(0,n.Z)(W,[["render",N]]);var K=q,X={name:"HomeView",components:{BaseModal:S,MapFeatures:K},setup(){let e;(0,s.bv)((()=>{e=g().map("map").setView([47.60357,-122.329449],10),g().tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1hem9ubGFuZGVkIiwiYSI6ImNreTZjNGhlMzB1ZDUyd21uY3YwbGNkY2IifQ.6YLgjdyl4IAwRzwvOl9AUQ",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiYW1hem9ubGFuZGVkIiwiYSI6ImNreTZjNGhlMzB1ZDUyd21uY3YwbGNkY2IifQ.6YLgjdyl4IAwRzwvOl9AUQ"}).addTo(e),e.on("moveend",(()=>{x()})),u()}));const t=(0,h.iH)(null),r=(0,h.iH)(null),l=(0,h.iH)(null),a=(0,h.iH)(null),n=(0,h.iH)(null),u=()=>{if(!t.value){if(sessionStorage.getItem("coords"))return t.value=JSON.parse(sessionStorage.getItem("coords")),void d(t.value);r.value=!0,navigator.geolocation.getCurrentPosition(c,i)}t.value=null,sessionStorage.removeItem("coords"),e.removeLayer(l.value)},c=e=>{r.value=null;const o={lat:e.coords.latitude,lng:e.coords.longitude};sessionStorage.setItem("coords",JSON.stringify(o)),t.value=o,d(t.value)},i=e=>{r.value=null,a.value=!0,n.value=e.message},d=t=>{const r=g().icon({iconUrl:o(3266),iconSize:[35,35]});l.value=g().marker([t.lat,t.lng],{icon:r}).addTo(e),e.setView([t.lat,t.lng],10)},p=()=>{a.value=null,n.value=null},v=(0,h.iH)(null),f=t=>{v.value&&e.removeLayer(v.value);const r=g().icon({iconUrl:o(2929),iconSize:[35,35]});v.value=g().marker([t.coordinates[1],t.coordinates[0]],{icon:r}).addTo(e),e.setView([t.coordinates[1],t.coordinates[0]],14)},m=(0,h.iH)(null),w=()=>{m.value=!m.value},x=()=>{m.value=null},y=()=>{e.removeLayer(v.value)};return{coords:t,fetchCoords:r,geoMarker:l,closeGeoError:p,geoError:a,geoErrorMsg:n,getGeolocation:u,plotResult:f,searchResults:m,toggleSearchResults:w,closeSearchResults:x,removeResult:y}}};const ee=(0,n.Z)(X,[["render",f]]);var te=ee;const oe=[{path:"/",name:"home",component:te}],re=(0,d.p7)({history:(0,d.PO)("/"),routes:oe});var se=re;(0,r.ri)(i).use(se).mount("#app")},2929:function(e,t,o){e.exports=o.p+"img/map-marker-blue.48a8e449.svg"},3266:function(e,t,o){e.exports=o.p+"img/map-marker-red.d479dee5.svg"}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,r,s,l){if(!r){var a=1/0;for(i=0;i<e.length;i++){r=e[i][0],s=e[i][1],l=e[i][2];for(var n=!0,u=0;u<r.length;u++)(!1&l||a>=l)&&Object.keys(o.O).every((function(e){return o.O[e](r[u])}))?r.splice(u--,1):(n=!1,l<a&&(a=l));if(n){e.splice(i--,1);var c=s();void 0!==c&&(t=c)}}return t}l=l||0;for(var i=e.length;i>0&&e[i-1][2]>l;i--)e[i]=e[i-1];e[i]=[r,s,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,l,a=r[0],n=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in n)o.o(n,s)&&(o.m[s]=n[s]);if(u)var i=u(o)}for(t&&t(r);c<a.length;c++)l=a[c],o.o(e,l)&&e[l]&&e[l][0](),e[a[c]]=0;return o.O(i)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(844)}));r=o.O(r)})();
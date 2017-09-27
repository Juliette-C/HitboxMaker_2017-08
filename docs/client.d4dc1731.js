webpackJsonp([0],[function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"d",function(){return i}),e.d(n,"a",function(){return c}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return s}),e.d(n,"g",function(){return L}),e.d(n,"f",function(){return U}),e.d(n,"e",function(){return ct});var i=function t(n,e){o(this,t),this.background=n,this.building=e},c=function t(n,e,i,c){o(this,t),this.nbLines=n,this.nbColumns=e,this.nbBackgrounds=i,this.arrayTiles=c},r=function t(n,e){o(this,t),this.cityMap=n,this.constrBuildingAccount={},this.selectedTool=null,this.selectedTile=null,this.typeSelectedTool=null,this.actualResources=e},s=function t(n,e,i,c){o(this,t),this.food=n,this.log=e,this.stone=i,this.iron=c},l=function t(n,e,i){o(this,t),this.src=n,this.alt=e,this.title=i},a=function t(n,e,i,c){o(this,t),this.id=n,this.name=e,this.descr=i,this.logo=c},u=function t(n,e,i,c,r,s){o(this,t),this.id=n,this.name=e,this.descr=i,this.logo=c,this.constr=r,this.prod=s},d=new l(e(11),"logo_farmer","Farmer"),f=new l(e(12),"logo_woodcutter","Woodcutter"),w=new l(e(13),"logo_stonecutter","Stonecutter"),g=new l(e(14),"logo_miner","Miner"),b=new l(e(15),"logo_townhall","Townhall"),h=new l(e(16),"logo_hospital","Hospital"),m=new l(e(17),"logo_circus","Circus"),v=new l(e(18),"logo_inn","Inn"),p=new l(e(19),"logo_watchTower","Watch Tower"),y=new l(e(20),"logo_well","Wishing Well"),T=new l(e(21),"logo_broom","Broom"),j=new l(e(22),"logo_food","Food"),O=new l(e(23),"logo_log","Log"),_=new l(e(24),"logo_stone","Stone"),x=new l(e(25),"logo_iron","Iron"),L={farmer:d,woodcutter:f,stonecutter:w,miner:g,townhall:b,hospital:h,circus:m,inn:v,watchTower:p,well:y,broom:T,food:j,log:O,stone:_,iron:x},B=new s(0,5,0,0),k=new s(5,0,0,0),E=new s(0,3,0,0),M=new s(0,5,0,0),S=new s(0,5,0,0),A=new s(0,0,5,0),I=new s(0,5,5,0),P=new s(0,0,0,5),C=new s(0,10,10,10),H=new s(0,0,0,0),W=new s(0,10,10,0),R=new s(0,0,0,0),F=new s(0,5,0,5),N=new s(0,0,0,0),J=new s(0,5,5,0),q=new s(0,0,0,0),z=new s(0,5,0,0),D=new s(0,0,0,0),G=new s(0,5,5,5),K=new s(5,0,0,0),Q=new a("broom","Broom","Remove building",L.broom),U={broom:Q},V=new u("farmer","Farmer","Products food",L.farmer,B,k),X=new u("woodcutter","Woodcutter","Products log",L.woodcutter,E,M),Y=new u("stonecutter","Stonecutter","Products stone",L.stonecutter,S,A),Z=new u("miner","Miner","Products iron",L.miner,I,P),$=new u("townhall","Townhall","Indicates informations city",L.townhall,C,H),tt=new u("hospital","Hospital","Provides care",L.hospital,W,R),nt=new u("circus","Circus","Improves happiness",L.circus,F,N),et=new u("inn","Inn","Improves happiness",L.inn,J,q),ot=new u("watchTower","Watchtower","Manages security",L.watchTower,z,D),it=new u("well","Well","Products water",L.well,G,K),ct={farmer:V,woodcutter:X,stonecutter:Y,miner:Z,townhall:$,hospital:tt,circus:nt,inn:et,watchTower:ot,well:it}},function(t,n,e){"use strict";function o(t){return'<img src="'+t.src+'" alt="'+t.alt+'" title="'+t.title+'">'}n.a=o},function(t,n,e){"use strict";function o(t,n,e){var o=s(t,n,e);return new u.a(t,n,e,o)}function i(t){document.getElementById("map").innerHTML=l(t)}function c(t){return t.split("_")[0].split("-")[1]}function r(t){return t.split("_")[1].split("-")[1]}function s(t,n,e){for(var o=Array(t).fill(null),i=0;i<t;i++){o[i]=Array(n).fill(null);for(var c=0;c<n;c++){var r=Math.trunc(100*Math.random())%e;o[i][c]=new u.d(r,null)}}return o}function l(t){for(var n="<table>",e=0;e<t.nbLines;e++){n+="<tr>";for(var o=0;o<t.nbColumns;o++)n+='<td id="lin-'+e+"_col-"+o+'" class="tile backgroundTile_'+t.arrayTiles[e][o].background+'"></td>';n+="</tr>"}return n}n.a=o,n.b=i,n.d=c,n.c=r;var a=e(26),u=(e.n(a),e(0))},function(t,n,e){"use strict";function o(){var t="";return Object.keys(r.e).forEach(function(n){t+='<div class="selectableTool building" id="'+r.e[n].id+'_toolsList">'+Object(a.a)(r.e[n].logo)+"</div>"}),t}function i(t,n){var e=Object(s.d)(t.id),o=Object(s.c)(t.id),i=n.cityMap.arrayTiles[e][o];i.building?console.log("tile is not empty..."):c(t,i,n)}function c(t,n,e){var o=e.selectedTool;n.building=o,e.constrBuildingAccount[o.id]?e.constrBuildingAccount[o.id]+=1:e.constrBuildingAccount[o.id]=1,Object(l.b)(e),t.innerHTML=Object(a.a)(o.logo)}n.b=o,n.a=i;var r=e(0),s=e(2),l=e(4),a=e(1)},function(t,n,e){"use strict";function o(){return new r.c(10,10,10,10)}function i(t){var n=t.selectedTool.constr;Object.keys(n).forEach(function(e){t.actualResources[e]-=n[e]}),console.log("production : ",c(t))}function c(t){var n=new r.c(0,0,0,0);return Object.keys(t.constrBuildingAccount).forEach(function(e){var o=r.e[e],i=t.constrBuildingAccount[e];Object.keys(o.prod).forEach(function(t){n[t]+=i*o.prod[t]})}),n}n.a=o,n.b=i;var r=e(0)},function(t,n,e){"use strict";function o(){var t="";return Object.keys(r.f).forEach(function(n){t+='<div class="selectableTool instruments" id="'+r.f[n].id+'_toolsList">'+Object(l.a)(r.f[n].logo)+"</div>"}),t}function i(t,n){var e=Object(s.d)(t.id),o=Object(s.c)(t.id),i=n.cityMap.arrayTiles[e][o];switch(n.selectedTool.id){case"broom":c(t,i,n)}}function c(t,n,e){n.building&&(t.innerHTML="",e.constrBuildingAccount[n.building.id]--,n.building=null,console.log("building removed !"))}n.a=o,n.b=i;var r=e(0),s=e(2),l=e(1)},function(t,n,e){t.exports=e(7)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(8),i=(e.n(o),e(9)),c=e(2),r=e(27),s=e(0),l=e(3),a=e(5),u=e(4),d=Object(c.a)(8,12,4),f=Object(u.a)(),w=new s.b(d,f);Object(i.a)(f),Object(r.a)(),Object(c.b)(d),console.log(w);var g=document.getElementsByClassName("selectableTool"),b=document.getElementsByClassName("tile"),h=!0,m=!1,v=void 0;try{for(var p,y=g[Symbol.iterator]();!(h=(p=y.next()).done);h=!0){var T=p.value;(function(t){t.addEventListener("click",function(n){n.stopPropagation();var e=!0,o=!1,i=void 0;try{for(var c,r=g[Symbol.iterator]();!(e=(c=r.next()).done);e=!0){c.value.classList.remove("selectedTool")}}catch(t){o=!0,i=t}finally{try{!e&&r.return&&r.return()}finally{if(o)throw i}}if(t.classList.add("selectedTool"),t.classList.contains("instruments"))w.selectedTool=s.f[t.id.split("_")[0]],w.typeSelectedTool="instrument";else{if(!t.classList.contains("building"))return;w.selectedTool=s.e[t.id.split("_")[0]],w.typeSelectedTool="building"}})})(T)}}catch(t){m=!0,v=t}finally{try{!h&&y.return&&y.return()}finally{if(m)throw v}}var j=!0,O=!1,_=void 0;try{for(var x,L=b[Symbol.iterator]();!(j=(x=L.next()).done);j=!0){var B=x.value;(function(t){t.addEventListener("click",function(n){if(n.stopPropagation(),w.selectedTool){switch(w.typeSelectedTool){case"building":Object(l.a)(t,w),console.log(w);break;case"instrument":Object(a.b)(t,w),console.log(w)}Object(i.a)(w.actualResources)}})})(B)}}catch(t){O=!0,_=t}finally{try{!j&&L.return&&L.return()}finally{if(O)throw _}}document.addEventListener("click",function(t){var n=!0,e=!1,o=void 0;try{for(var i,c=g[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){i.value.classList.remove("selectedTool")}}catch(t){e=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(e)throw o}}w.selectedTool=null,w.typeSelectedTool=null})},function(t,n){},function(t,n,e){"use strict";function o(t){var n=document.getElementById("dataBar"),e="";Object.keys(t).forEach(function(n){e+="<div>"+Object(r.a)(c.g[n])+" "+t[n]+"</div>"}),n.innerHTML=e}n.a=o;var i=e(10),c=(e.n(i),e(0)),r=e(1)},function(t,n){},function(t,n,e){t.exports=e.p+"static/media/farmer.5ff207aa.svg"},function(t,n,e){t.exports=e.p+"static/media/woodcutter.e8cb2bba.svg"},function(t,n,e){t.exports=e.p+"static/media/stonecutter.5b911d3c.svg"},function(t,n,e){t.exports=e.p+"static/media/miner.78c043a2.svg"},function(t,n,e){t.exports=e.p+"static/media/townhall.0ed1aad8.svg"},function(t,n,e){t.exports=e.p+"static/media/hospital.9b7983e2.svg"},function(t,n,e){t.exports=e.p+"static/media/circus.c280ed39.svg"},function(t,n,e){t.exports=e.p+"static/media/inn.a17e6da8.svg"},function(t,n,e){t.exports=e.p+"static/media/watchTower.a7a94702.svg"},function(t,n,e){t.exports=e.p+"static/media/well.02023742.svg"},function(t,n,e){t.exports=e.p+"static/media/broom.1210980b.svg"},function(t,n,e){t.exports=e.p+"static/media/food.69917311.svg"},function(t,n,e){t.exports=e.p+"static/media/log.57a1503f.svg"},function(t,n,e){t.exports=e.p+"static/media/stone.eebec38d.svg"},function(t,n,e){t.exports=e.p+"static/media/iron.819801c1.svg"},function(t,n){},function(t,n,e){"use strict";function o(){document.getElementById("toolsList").innerHTML=i()}function i(){var t="";return t+=Object(r.a)(),t+=Object(c.b)()}n.a=o;var c=e(3),r=e(5),s=e(28);e.n(s)},function(t,n){}],[6]);
//# sourceMappingURL=client.d4dc1731.js.map
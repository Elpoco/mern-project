(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{102:function(n,e,t){"use strict";t.r(e);var c=t(7),o=t.n(c),i=t(44),r=t.n(i),s=(t(51),t(19)),a=t(17),u=t.n(a),l=(t(69),t(45)),f=t.n(l),d=t(18),j=t.n(d),h=t(46);function p(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null==t&&(t=e,e="");var c="http://127.0.0.1:3000"+n,o=function(){var n=Object(h.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()({method:"GET",url:c,params:e}).then((function(n){t(n.data)})).catch((function(n){console.log("CallApi error : ",n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();o()}var b=t(0);var v=function(){var n=Object(c.useState)([]),e=Object(s.a)(n,2),t=e[0],o=e[1],i=Object(c.useState)([]),r=Object(s.a)(i,2),a=r[0],u=r[1],l=function(){p("/api/coins",(function(n){var e=[];n[0]&&(Object.entries(n[0]).map((function(n,t){e.push({key:n[0],value:n[1]})})),u(e))}))};return Object(c.useEffect)((function(){var n,e;n="data",e=function(n){return o(n)},f.a.connect("http://localhost:3000").on(n,(function(n){n=JSON.parse(n);var t=[];Object.entries(n[0]).map((function(n,e){t.push({key:n[0],value:n[1]})})),e(t)})),l(),setInterval((function(){l()}),1e3),p("/api/market",(function(n){console.log(n)}));p("/api/info",{user_srl:"10020",symbol:"GLM-ETH"},(function(n){console.log(n)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Hello world!!"}),Object(b.jsx)("button",{onClick:function(){p("/api/order",{user_srl:"10020",symbol:"GLM-ETH",price:"0.00016220",volume:"100",side:"ask"},(function(n){console.log(n)}))},children:"\uc8fc\ubb38\ud558\uae30"}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"socket"}),t.map((function(n,e){return Object(b.jsxs)("div",{children:[n.key," : ",n.value]},e)}))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"axios"}),a.map((function(n,e){return Object(b.jsxs)("div",{children:[n.key," : ",n.value]},e)}))]})]})]})},O=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,103)).then((function(e){var t=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),c(n),o(n),i(n),r(n)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),O()},51:function(n,e,t){},69:function(n,e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.85a523c2.chunk.js.map
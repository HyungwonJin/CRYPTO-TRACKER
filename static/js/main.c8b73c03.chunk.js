(this["webpackJsonptypescript-react-test"]=this["webpackJsonptypescript-react-test"]||[]).push([[0],{77:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),r=t(24),o=t.n(r),a=t(17),s=t(16),l=t(8),d=t(7),j=t(22),b=t(10),h=t(36),u="https://api.coinpaprika.com/v1";function p(){return fetch("".concat(u,"/coins")).then((function(e){return e.json()}))}var x=t(51),O=t.n(x),f=Object(s.b)({key:"isDark",default:!0}),g=t(1);var v,m,y,k=function(e){var n=e.coinId,t=Object(s.c)(f),c=Object(a.useQuery)(["ohlcv",n],(function(){return function(e){var n=Math.floor(Date.now()/1e3),t=n-1814400;return fetch("".concat(u,"/coins/").concat(e,"/ohlcv/historical?start=").concat(t,"&end=").concat(n)).then((function(e){return e.json()}))}(n)}),{refetchInterval:1e4}),i=c.isLoading,r=c.data;return Object(g.jsx)("div",{children:i?"Loading chart...":Object(g.jsx)(O.a,{type:"candlestick",series:[{name:"Price",data:null===r||void 0===r?void 0:r.map((function(e){return{x:e.time_close,y:[e.open,e.high,e.low,e.close]}}))}],options:{theme:{mode:t?"dark":"light"},chart:{type:"candlestick",height:500,width:500,background:"transparent"},plotOptions:{candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}}},yaxis:{show:!0,labels:{formatter:function(e,n){return e.toFixed(0)}}},xaxis:{type:"datetime",labels:{show:!0}}}})})},C=t(4),w=d.c.div(v||(v=Object(l.a)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n"]))),S=d.c.span(m||(m=Object(l.a)(["\n  font-weight: 800;\n  font-size: 18px;\n"]))),q=d.c.span(y||(y=Object(l.a)(["\n  color: ",";\n"])),(function(e){return e.isValue?"lightgreen":"red"})),_=function(e){if(e)return e>=0};var D,I,L,U,z,B,Q,F,M,P=function(e){var n=e.tickersData,t=Object(c.useState)(),i=Object(C.a)(t,2),r=i[0],o=i[1],a=Object(c.useState)(!0),s=Object(C.a)(a,2),l=s[0],d=s[1];return Object(c.useEffect)((function(){o(n),d(!1)}),[n]),Object(g.jsx)("div",{children:l?"Loading...":Object(g.jsxs)("div",{children:[Object(g.jsxs)(w,{children:[Object(g.jsx)(S,{children:"MarketCap : "}),"$ ",null===r||void 0===r?void 0:r.quotes.USD.market_cap]}),Object(g.jsxs)(w,{children:[Object(g.jsx)(S,{children:"Volume(24h) :"}),"$ ",null===r||void 0===r?void 0:r.quotes.USD.volume_24h]}),Object(g.jsxs)(w,{children:[Object(g.jsx)(S,{children:"Change Rate(1h) :"}),Object(g.jsx)(q,{isValue:_(null===r||void 0===r?void 0:r.quotes.USD.percent_change_1h),children:null===r||void 0===r?void 0:r.quotes.USD.percent_change_1h})]}),Object(g.jsxs)(w,{children:[Object(g.jsx)(S,{children:"Change Rate(24h) :"}),Object(g.jsx)(q,{isValue:_(null===r||void 0===r?void 0:r.quotes.USD.percent_change_24h),children:null===r||void 0===r?void 0:r.quotes.USD.percent_change_24h})]}),Object(g.jsxs)(w,{children:[Object(g.jsx)(S,{children:"Change Rate(7d) :"}),Object(g.jsx)(q,{isValue:_(null===r||void 0===r?void 0:r.quotes.USD.percent_change_7d),children:null===r||void 0===r?void 0:r.quotes.USD.percent_change_7d})]})]})})},R=d.c.h1(D||(D=Object(l.a)(["\n  font-size: 35px;\n  color: ",";\n  justify-self: center;\n  align-self: center;\n"])),(function(e){return e.theme.accentColor})),V=d.c.div(I||(I=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),$=d.c.div(L||(L=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),A=d.c.header(U||(U=Object(l.a)(["\n  height: 10vh;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  div {\n    align-self: center;\n  }\n"]))),E=d.c.div(z||(z=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),T=d.c.div(B||(B=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),J=d.c.p(Q||(Q=Object(l.a)(["\n  margin: 20px 0px;\n"]))),H=d.c.div(F||(F=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),G=d.c.span(M||(M=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(e){return e.isActive?e.theme.accentColor:e.theme.textColor}));var K,N,W,X,Y,Z,ee,ne=function(){var e=Object(b.h)().coinId,n=Object(b.g)().state,t=Object(b.i)("/:coinId/price"),c=Object(b.i)("/:coinId/chart"),i=Object(b.f)(),r=Object(a.useQuery)(["info",e],(function(){return function(e){return fetch("".concat(u,"/coins/").concat(e)).then((function(e){return e.json()}))}(e)})),o=r.isLoading,s=r.data,l=Object(a.useQuery)(["tickers",e],(function(){return function(e){return fetch("".concat(u,"/tickers/").concat(e)).then((function(e){return e.json()}))}(e)}),{refetchInterval:5e3}),d=l.isLoading,p=l.data,x=o||d;return Object(g.jsxs)($,{children:[Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:(null===n||void 0===n?void 0:n.name)?n.name:x?"Loading...":null===s||void 0===s?void 0:s.name})}),Object(g.jsxs)(A,{children:[Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){return i.goBack()},children:"Back"})}),Object(g.jsx)(R,{children:(null===n||void 0===n?void 0:n.name)?n.name:x?"Loading...":null===s||void 0===s?void 0:s.name})]}),x?Object(g.jsx)(V,{children:"Loading..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(E,{children:[Object(g.jsxs)(T,{children:[Object(g.jsx)("span",{children:"Rank:"}),Object(g.jsx)("span",{children:null===s||void 0===s?void 0:s.rank})]}),Object(g.jsxs)(T,{children:[Object(g.jsx)("span",{children:"Symbol:"}),Object(g.jsxs)("span",{children:["$",null===s||void 0===s?void 0:s.symbol]})]}),Object(g.jsxs)(T,{children:[Object(g.jsx)("span",{children:"Price:"}),Object(g.jsxs)("span",{children:["$ ",null===p||void 0===p?void 0:p.quotes.USD.price.toFixed(2)]})]})]}),Object(g.jsx)(J,{children:null===s||void 0===s?void 0:s.description}),Object(g.jsxs)(E,{children:[Object(g.jsxs)(T,{children:[Object(g.jsx)("span",{children:"Total Suply:"}),Object(g.jsx)("span",{children:null===p||void 0===p?void 0:p.total_supply})]}),Object(g.jsxs)(T,{children:[Object(g.jsx)("span",{children:"Max Supply:"}),Object(g.jsx)("span",{children:null===p||void 0===p?void 0:p.max_supply})]})]}),Object(g.jsxs)(H,{children:[Object(g.jsx)(G,{isActive:null!==t,children:Object(g.jsx)(j.b,{to:"/".concat(e,"/price"),children:"Price"})}),Object(g.jsx)(G,{isActive:null!==c,children:Object(g.jsx)(j.b,{to:"/".concat(e,"/chart"),children:"Chart"})})]}),Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/:coinId/price",children:Object(g.jsx)(P,{tickersData:p})}),Object(g.jsx)(b.a,{path:"/:coinId/chart",children:Object(g.jsx)(k,{coinId:e})})]})]})]})},te=d.c.div(K||(K=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),ce=d.c.header(N||(N=Object(l.a)(["\n  height: 10vh;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  div {\n    align-self: center;\n    justify-self: flex-end;\n  }\n"]))),ie=d.c.ul(W||(W=Object(l.a)([""]))),re=d.c.li(X||(X=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  border: 1px solid white;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.cardBgColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor})),oe=d.c.h1(Y||(Y=Object(l.a)(["\n  font-size: 40px;\n  color: ",";\n  justify-self: center;\n  align-self: center;\n"])),(function(e){return e.theme.accentColor})),ae=d.c.div(Z||(Z=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),se=d.c.img(ee||(ee=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var le=function(){var e=Object(s.d)(f),n=Object(a.useQuery)("allCoins",p),t=n.isLoading,c=n.data;return Object(g.jsxs)(te,{children:[Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:"\ucf54\uc778"})}),Object(g.jsxs)(ce,{children:[Object(g.jsx)("div",{}),Object(g.jsx)(oe,{children:"\ucf54\uc778"}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){return e((function(e){return!e}))},children:"Toggle Mode"})})]}),t?Object(g.jsx)(ae,{children:"Loading..."}):Object(g.jsx)(ie,{children:null===c||void 0===c?void 0:c.slice(0,100).map((function(e){return Object(g.jsx)(re,{children:Object(g.jsxs)(j.b,{to:{pathname:"/".concat(e.id),state:{name:e.name}},children:[Object(g.jsx)(se,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(e.symbol.toLowerCase())}),e.name," \u2192"]})},e.id)}))})]})};var de,je=function(){return Object(g.jsx)(j.a,{children:Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/:coinId",children:Object(g.jsx)(ne,{})}),Object(g.jsx)(b.a,{path:"/",children:Object(g.jsx)(le,{})})]})})},be=t(56),he={bgColor:"#2f3640",textColor:"white",accentColor:"#8e44ad",cardBgColor:"#2f3640"},ue={bgColor:"whitesmoke",textColor:"black",accentColor:"#8e44ad",cardBgColor:"white"},pe=Object(d.b)(de||(de=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*{\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color: ",";\n}\na{\n\ttext-decoration: none;\n\tcolor: inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var xe=function(){var e=Object(s.c)(f);return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(d.a,{theme:e?he:ue,children:[Object(g.jsx)(pe,{}),Object(g.jsx)(je,{}),Object(g.jsx)(be.ReactQueryDevtools,{initialIsOpen:!0})]})})},Oe=new a.QueryClient;o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(s.a,{children:Object(g.jsx)(a.QueryClientProvider,{client:Oe,children:Object(g.jsx)(xe,{})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.c8b73c03.chunk.js.map
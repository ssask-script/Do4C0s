(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858,187,348,323,579,789,990,198,76,195,134,698,403,649,719,718,562,176,825,931],{6939:function(e,t,i){Promise.resolve().then(i.t.bind(i,5250,23)),Promise.resolve().then(i.bind(i,4693)),Promise.resolve().then(i.bind(i,3902)),Promise.resolve().then(i.bind(i,4069)),Promise.resolve().then(i.bind(i,5638))},4693:function(e,t,i){"use strict";i.r(t),i.d(t,{DocsHeader:function(){return s}});var n=i(7437),r=i(4033),l=i(6404);function s(e){let{title:t}=e,i=(0,r.usePathname)(),s=l.G.find(e=>e.links.find(e=>e.href===i));return t||s?(0,n.jsxs)("header",{className:"mb-9 space-y-1",children:[s&&(0,n.jsx)("p",{className:"font-display text-sm font-medium text-sky-500",children:s.title}),t&&(0,n.jsx)("h1",{className:"font-display text-3xl tracking-tight text-slate-900 dark:text-white",children:t})]}):null}},3902:function(e,t,i){"use strict";i.r(t),i.d(t,{Fence:function(){return s}});var n=i(7437),r=i(2265),l=i(7668);function s(e){let{children:t,language:i}=e;return(0,n.jsx)(l.y$,{code:t.trimEnd(),language:i,theme:{plain:{},styles:[]},children:e=>{let{className:t,style:i,tokens:l,getTokenProps:s}=e;return(0,n.jsx)("pre",{className:t,style:i,children:(0,n.jsx)("code",{children:l.map((e,t)=>(0,n.jsxs)(r.Fragment,{children:[e.filter(e=>!e.empty).map((e,t)=>(0,n.jsx)("span",{...s({token:e})},t)),"\n"]},t))})})}})}},4069:function(e,t,i){"use strict";i.r(t),i.d(t,{PrevNextLinks:function(){return h}});var n=i(7437),r=i(1396),l=i.n(r),s=i(4033),a=i(7042),c=i(6404);function d(e){return(0,n.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",...e,children:(0,n.jsx)("path",{d:"m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"})})}function o(e){let{title:t,href:i,dir:r="next",...s}=e;return(0,n.jsxs)("div",{...s,children:[(0,n.jsx)("dt",{className:"font-display text-sm font-medium text-slate-900 dark:text-white",children:"next"===r?"Next":"Previous"}),(0,n.jsx)("dd",{className:"mt-1",children:(0,n.jsxs)(l(),{href:i,className:(0,a.Z)("flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300","previous"===r&&"flex-row-reverse"),children:[t,(0,n.jsx)(d,{className:(0,a.Z)("h-4 w-4 flex-none fill-current","previous"===r&&"-scale-x-100")})]})})]})}function h(){let e=(0,s.usePathname)(),t=c.G.flatMap(e=>e.links),i=t.findIndex(t=>t.href===e),r=i>-1?t[i-1]:null,l=i>-1?t[i+1]:null;return l||r?(0,n.jsxs)("dl",{className:"mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800",children:[r&&(0,n.jsx)(o,{dir:"previous",...r}),l&&(0,n.jsx)(o,{className:"ml-auto text-right",...l})]}):null}},5638:function(e,t,i){"use strict";i.r(t),i.d(t,{TableOfContents:function(){return c}});var n=i(7437),r=i(2265),l=i(1396),s=i.n(l),a=i(7042);function c(e){var t;let{tableOfContents:i}=e,[l,c]=(0,r.useState)(null===(t=i[0])||void 0===t?void 0:t.id),d=(0,r.useCallback)(e=>e.flatMap(e=>[e.id,...e.children.map(e=>e.id)]).map(e=>{let t=document.getElementById(e);if(!t)return null;let i=parseFloat(window.getComputedStyle(t).scrollMarginTop);return{id:e,top:window.scrollY+t.getBoundingClientRect().top-i}}).filter(e=>null!==e),[]);function o(e){return e.id===l||!!e.children&&e.children.findIndex(o)>-1}return(0,r.useEffect)(()=>{if(0===i.length)return;let e=d(i);function t(){let t=window.scrollY,i=e[0].id;for(let n of e)if(t>=n.top-10)i=n.id;else break;c(i)}return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t)}},[d,i]),(0,n.jsx)("div",{className:"hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6",children:(0,n.jsx)("nav",{"aria-labelledby":"on-this-page-title",className:"w-56",children:i.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"on-this-page-title",className:"font-display text-sm font-medium text-slate-900 dark:text-white",children:"On this page"}),(0,n.jsx)("ol",{role:"list",className:"mt-4 space-y-3 text-sm",children:i.map(e=>(0,n.jsxs)("li",{children:[(0,n.jsx)("h3",{children:(0,n.jsx)(s(),{href:`#${e.id}`,className:(0,a.Z)(o(e)?"text-sky-500":"font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"),children:e.title})}),e.children.length>0&&(0,n.jsx)("ol",{role:"list",className:"mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400",children:e.children.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:`#${e.id}`,className:o(e)?"text-sky-500":"hover:text-slate-600 dark:hover:text-slate-300",children:e.title})},e.id))})]},e.id))})]})})})}},6404:function(e,t,i){"use strict";i.d(t,{G:function(){return n}});let n=[{title:"Introduction",links:[{title:"Getting started",href:"/"},{title:"Installation",href:"/docs/installation"}]},{title:"Core concepts",links:[{title:"Understanding caching",href:"/docs/understanding-caching"},{title:"Predicting user behavior",href:"/docs/predicting-user-behavior"},{title:"Basics of time-travel",href:"/docs/basics-of-time-travel"},{title:"Introduction to string theory",href:"/docs/introduction-to-string-theory"},{title:"The butterfly effect",href:"/docs/the-butterfly-effect"}]},{title:"Advanced guides",links:[{title:"Writing plugins",href:"/docs/writing-plugins"},{title:"Neuralink integration",href:"/docs/neuralink-integration"},{title:"Temporal paradoxes",href:"/docs/temporal-paradoxes"},{title:"Testing",href:"/docs/testing"},{title:"Compile-time caching",href:"/docs/compile-time-caching"},{title:"Predictive data generation",href:"/docs/predictive-data-generation"}]},{title:"API reference",links:[{title:"CacheAdvance.predict()",href:"/docs/cacheadvance-predict"},{title:"CacheAdvance.flush()",href:"/docs/cacheadvance-flush"},{title:"CacheAdvance.revert()",href:"/docs/cacheadvance-revert"},{title:"CacheAdvance.regret()",href:"/docs/cacheadvance-regret"}]},{title:"Contributing",links:[{title:"How to contribute",href:"/docs/how-to-contribute"},{title:"Architecture guide",href:"/docs/architecture-guide"},{title:"Design principles",href:"/docs/design-principles"}]}]}},function(e){e.O(0,[250,156,971,938,744],function(){return e(e.s=6939)}),_N_E=e.O()}]);
if(!self.define){let o,l={};const i=(i,t)=>(i=new URL(i+".js",t).href,l[i]||new Promise((l=>{if("document"in self){const o=document.createElement("script");o.src=i,o.onload=l,document.head.appendChild(o)}else o=i,importScripts(i),l()})).then((()=>{let o=l[i];if(!o)throw new Error(`Module ${i} didn’t register its module`);return o})));self.define=(t,n)=>{const s=o||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let e={};const r=o=>i(o,s),f={module:{uri:s},exports:e,require:r};l[s]=Promise.all(t.map((o=>f[o]||r(o)))).then((o=>(n(...o),e)))}}define(["./workbox-f3ddde50"],(function(o){"use strict";o.setCacheNameDetails({prefix:"gnsimulator"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/GN-Tools-Site/css/app.cad968d0.css",revision:null},{url:"/GN-Tools-Site/css/chunk-vendors.c562295b.css",revision:null},{url:"/GN-Tools-Site/fonts/materialdesignicons-webfont.aaf5968f.eot",revision:null},{url:"/GN-Tools-Site/fonts/materialdesignicons-webfont.ad0f7b3f.woff2",revision:null},{url:"/GN-Tools-Site/fonts/materialdesignicons-webfont.f5b84261.ttf",revision:null},{url:"/GN-Tools-Site/fonts/materialdesignicons-webfont.fabeafb8.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-100.539f0a96.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-100.5ba994da.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-100italic.41ba6421.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-100italic.d61e7e8b.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-300.4d8f8086.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-300.6c1bc461.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-300italic.3a529751.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-300italic.45164643.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-400.1e2d4d3a.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-400.7e4a045b.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-400italic.68431199.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-400italic.bb3c6955.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-500.1dfbc3db.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-500.e21fe97f.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-500italic.7543a42b.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-500italic.aaff6867.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-700.02633003.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-700.12893bfc.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-700italic.bc7179e0.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-700italic.e53062e2.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-900.282ba77f.woff2",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-900.4962e810.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-900italic.2394134a.woff",revision:null},{url:"/GN-Tools-Site/fonts/roboto-latin-900italic.9c1f8084.woff2",revision:null},{url:"/GN-Tools-Site/index.html",revision:"ad18036aafc8c402b7781f1a8c4908b9"},{url:"/GN-Tools-Site/js/app.db534eb9.js",revision:null},{url:"/GN-Tools-Site/js/chunk-vendors.70291234.js",revision:null},{url:"/GN-Tools-Site/manifest.json",revision:"a72ed49cf18e6c3eaa8e3b1f32be680e"},{url:"/GN-Tools-Site/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

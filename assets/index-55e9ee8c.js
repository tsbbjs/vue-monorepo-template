import{d,c as o,a as f,r as m,o as g,b as v,t as h,e as c,w as _,p as y,f as w,g as k}from"./vue-82458acb.js";import{_ as C,M as x}from"./vue-markdown-preview-909f85cb.js";import"./rehype-prism-plus-cf0bb656.js";import"./refractor-a44cffb7.js";import"./unified-a6a0231f.js";import"./rehype-5f82f031.js";import"./hast-util-a12946e4.js";import"./micromark-extension-14097367.js";import"./micromark-a0f0c6b2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const j="@uivjs/vue-markdown-preview",S="1.0.5",L="Markdown component for Vue. The minimal amount of CSS to replicate the GitHub Markdown style.",M="kenny wang <wowohoo@qq.com>",D="./cjs/index.js",I="./esm/index.js",B="MIT",P="https://uivjs.github.io/vue-markdown-preview/",N={type:"git",url:"https://github.com/uivjs/vue-markdown-preview"},T=["cjs","esm","markdown.css"],E={vue:">=3.0.0"},O={vue:"^3.3.4"},V=["vue","vue3","vue-component","vue-markdown","css","markdown","markdown-css","markdown-preview"],A={"@uiw/copy-to-clipboard":"1.0.12","comma-separated-tokens":"^2.0.3","property-information":"^6.3.0","rehype-attr":"2.0.7","rehype-autolink-headings":"6.1.0","rehype-prism-plus":"1.6.3","rehype-raw":"6.1.0","rehype-rewrite":"3.0.4","rehype-slug":"5.0.0","rehype-stringify":"9.0.2","remark-gfm":"3.0.1","remark-parse":"10.0.1","remark-rehype":"10.1.0","space-separated-tokens":"^2.0.2","style-to-object":"^1.0.3",unified:"10.1.1"},z={name:j,version:S,description:L,author:M,main:D,module:I,license:B,homepage:P,repository:N,files:T,peerDependencies:E,devDependencies:O,keywords:V,dependencies:A};var G={href:{type:String,defalut:"",required:!0},size:{type:Number,defalut:80},bgColor:{type:String,defalut:"#151513"},color:{type:String,defalut:"#fff"},position:{type:String,defalut:"right"},fixed:{type:Boolean,defalut:!1},zIndex:[Number,String],bottom:Boolean};const $=d({name:"GihubCorners",props:G,setup(n){return()=>{var{href:r,size:s=80,color:i="#fff",bottom:e,zIndex:t=0,fixed:a=!1,position:p="right",bgColor:l="#151513"}=n,u=p==="left"?{left:0,transform:"scale(-1, 1)"}:{right:0};return e&&(u.bottom=0,u.top="initial",u.transform=p==="left"?"scale(-1, -1)":"scale(1, -1)"),o("a",{class:"github-corner",href:r,"aria-label":"View source on GitHub"},[o("svg",{width:s,height:s,viewBox:"0 0 250 250",style:C({fill:l,color:i,position:a?"fixed":"absolute",border:0,top:0,zIndex:Number(t||0)},u),"aria-hidden":"true"},[o("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"},null),o("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},class:"octo-arm"},null),o("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"},null)])])}}});var q={title:{type:String,default:"title"}};const R=d({name:"Base",props:q,setup(n){return()=>o("div",null,[f("Package Base: "),n.title])}}),H=d({name:"Simple",props:{title:{type:String,default:"title"}},setup(n){return()=>o("div",null,[f("Package Simple: "),n.title])}});const b=(n,r)=>{const s=n.__vccOpts||n;for(const[i,e]of r)s[i]=e;return s},Z={data(){return{count:0,message:""}},methods:{increment(){this.count+=1}},components:{TemplateBase:R,TemplateSimple:H}},F={class:"example"};function K(n,r,s,i,e,t){const a=m("template-base"),p=m("template-simple");return g(),v("div",F,[o(a,{title:String(e.count)},null,8,["title"]),o(p,{title:String(e.count)},null,8,["title"]),f(" "+h(e.count)+" ",1),c("button",{onClick:r[0]||(r[0]=(...l)=>t.increment&&t.increment(...l))}," Count is: "+h(e.count),1)])}const J=b(Z,[["render",K],["__scopeId","data-v-ab4c8c6a"]]),Q=`vue-monorepo-template
===

[![Downloads](https://img.shields.io/static/v1?label=Github&message=repo&color=green&style=flat&logo=github)](https://github.com/tsbbjs/vue-monorepo-template)
[![Build & Deploy](https://github.com/tsbbjs/vue-monorepo-template/actions/workflows/ci.yml/badge.svg)](https://github.com/tsbbjs/vue-monorepo-template/actions/workflows/ci.yml)

Simple [\`vue 3\`](https://v3.vuejs.org/) package development project example template.

### Directory Structure

\`\`\`shell
.
├── README.md
├── lerna.json
├── package.json
├── packages             # The directory where the package is placed
│   ├── base                # 📦 package @vue-monorepo-template/base
│   │   ├── cjs             # 🔄 Compiled cjs directory
│   │   ├── esm             # 🔄 Compiled esm directory
│   │   ├── package.json
│   │   ├── src             # Package source directory
│   │   └── tsconfig.json
│   └── simple              # 📦 package @vue-monorepo-template/simple
├── tsconfig.json
└── website              # 🐝 Package example test, website
    ├── README.md
    ├── babel.config.js
    ├── package.json
    ├── public
    ├── src
    └── vue.config.js
\`\`\`

### Development

1. Install

\`\`\`shell
npm install
\`\`\`

2. Dependencies in the installation package and example

\`\`\`shell
npm run bootstrap
\`\`\`

3. Compile the code in the package

\`\`\`shell
npm run build        # Compile all packages 📦 code

npm run watch:simple # Real-time compilation 📦 @vue-monorepo-template/simple
npm run watch:base   # Real-time compilation 📦 @vue-monorepo-template/base
\`\`\`

4. Start the \`website\` example website

\`\`\`shell
npm run start
\`\`\`

### License

Licensed under the MIT License.
`,U="/assets/vue-5532db34.svg";const W=d({data(){return{markdown:Q,description:z.description}},components:{"example-base":J,GithubCorners:$,MarkdownPreview:x}}),X=n=>(y("data-v-9181ca91"),n=n(),w(),n),Y=X(()=>c("header",null,[c("div",null,[c("img",{src:U,alt:"Vue Monorepo Template"})]),c("a",{href:"https://github.com/uivjs/vue-markdown-preview",target:"__blank"},"Vue Monorepo Template"),c("p",null,"Simple Vue 3 package development project example template.")],-1));function ee(n,r,s,i,e,t){const a=m("github-corners"),p=m("example-base"),l=m("markdown-preview");return g(),v("div",null,[o(a,{fixed:"",target:"__blank",href:"https://github.com/uivjs/vue-markdown-preview"}),Y,o(p),o(l,{class:"markdown"},{default:_(()=>[f(h(n.markdown),1)]),_:1})])}const te=b(W,[["render",ee],["__scopeId","data-v-9181ca91"]]);k(te).mount("#app");

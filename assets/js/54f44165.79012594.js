"use strict";(self.webpackChunkthnk_docs=self.webpackChunkthnk_docs||[]).push([[152],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(n),g=r,h=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},681:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,description:"To start off the getting started tutorial, we take a look at how to install THNK here.",keywords:["get started","install","download","adapter","THNK","p2p","multiplayer","GDevelop"]},i="Installing THNK",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installing THNK",description:"To start off the getting started tutorial, we take a look at how to install THNK here.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/arthuro555/THNK/tree/master/docs/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"To start off the getting started tutorial, we take a look at how to install THNK here.",keywords:["get started","install","download","adapter","THNK","p2p","multiplayer","GDevelop"]},sidebar:"tutorialSidebar",previous:{title:"Getting started - Platformer tutorial",permalink:"/docs/getting-started"},next:{title:"Creating a THNK scene",permalink:"/docs/getting-started/creating-a-scene"}},s={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Installation",id:"installation",level:2},{value:"(Optional) Install an adapter",id:"optional-install-an-adapter",level:2}],d={toc:p};function c(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-thnk"},"Installing THNK"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"THNK is currently in early stages. It is still usable and a much better experience than building multiplayer by yourself, but it may have bugs or features that are important for you that are not yet available. Be aware of this when considering THNK!")),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"THNK is a GDevelop framework, so you will need to have GDevelop downloaded. It is recommended to have some base GDevelop knowledge before getting started with THNK. ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.gdevelop.io/gdevelop5/tutorials/basic-game-making-concepts"},"You can find resources to learn GDevelop on the GDevelop wiki"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To get started with THNK, the first step is to download the core THNK extension. Currently, it is not available yet in the extension gallery, and has to be installed manually."),(0,r.kt)("p",null,"To do so, download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/arthuro555/THNK/releases"},"latest release of THNK from GitHub")," (or you can ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/arthuro555/THNK/master/extensions/THNK.json"},"get the latest nightly build"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GIF showing how to download THNK",src:n(5919).Z,width:"1900",height:"931"})),(0,r.kt)("p",null,'To import it, go into the Project Manager, click on Functions/Behaviors, select "Create or search for new extensions", and finally click "Import extension" button at the bottom left. It will open a file selector that will allow you to open the THNK extension file.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GIF showing how to install THNK",src:n(61).Z,width:"983",height:"679"})),(0,r.kt)("h2",{id:"optional-install-an-adapter"},"(Optional) Install an adapter"),(0,r.kt)("p",null,"THNK by itself doesn't let you make a multiplayer game. You can develop your game for single-player fine using the THNK framework features, but to actually get multiple players playing together, you need an adapter extension. An adapter extension tells THNK a way to make your games communicate together. Adapters come in the form of other GDevelop extensions, you can find them and download them on the THNK download page. ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/adapters"},"Learn more about adapters")))}c.isMDXComponent=!0},5919:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dl-thnk-11bfb6daa00b5c29d854b029edd48450.gif"},61:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/install-thnk-221ed5554268a0cbb15b7153c2357e5e.gif"}}]);
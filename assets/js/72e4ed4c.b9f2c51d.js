"use strict";(self.webpackChunkthnk_docs=self.webpackChunkthnk_docs||[]).push([[316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,description:"In this second part of the getting started tutorial, we take a look at how to make a GDevelop scene the THNK way.",keywords:["get started","scene","setup","create","rules","THNK","p2p","multiplayer","GDevelop"]},i="Creating a THNK scene",s={unversionedId:"getting-started/creating-a-scene",id:"getting-started/creating-a-scene",title:"Creating a THNK scene",description:"In this second part of the getting started tutorial, we take a look at how to make a GDevelop scene the THNK way.",source:"@site/docs/getting-started/creating-a-scene.md",sourceDirName:"getting-started",slug:"/getting-started/creating-a-scene",permalink:"/docs/getting-started/creating-a-scene",draft:!1,editUrl:"https://github.com/arthuro555/THNK/tree/master/docs/docs/getting-started/creating-a-scene.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"In this second part of the getting started tutorial, we take a look at how to make a GDevelop scene the THNK way.",keywords:["get started","scene","setup","create","rules","THNK","p2p","multiplayer","GDevelop"]},sidebar:"tutorialSidebar",previous:{title:"Installing THNK",permalink:"/docs/getting-started/installation"},next:{title:"Using THNK for a platformer",permalink:"/docs/getting-started/simple-platformer"}},c={},l=[],p={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-thnk-scene"},"Creating a THNK scene"),(0,a.kt)("p",null,"THNK doesn't have a lot of requirements for you to create a scene it can work with; All you got to do is separate client code from server code."),(0,a.kt)("admonition",{title:"Remember!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Client code")," is the part that players use to interact with the game. Any presentational elements, like the camera, object & layer effects, sprite animations, the music, or interactions with the game, like inputs, menus, HUDs..."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Server code")," is the part that defines your game's logic and state, that a hacker should be unable to tamper with. Things like object positions & movement, states of different objects, collisions, player stats, combat damage calculations...")),(0,a.kt)("p",null,"The most basic, valid THNK scene looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A simple scene with a &quot;Start server code&quot; and &quot;Start client code&quot; conditions in separate events",src:n(7617).Z,width:"842",height:"243"})),(0,a.kt)("admonition",{title:"Remember!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Every THNK scene must respect three rules:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Code needs to be under either a client or server condition. Group and comments are fine, but actual events cannot be"),(0,a.kt)("li",{parentName:"ol"},"There can be only 1 server and 1 client code condition. Use sub-events instead of repeating the condition."),(0,a.kt)("li",{parentName:"ol"},"The client code must always go before the server code.")),(0,a.kt)("p",{parentName:"admonition"},"While it won't break your game immediately to disrespect those rules, they can lead to unexpected behavior and bugs that will be hard for you to diagnose and fix."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"The genie of THNK warns you about respecting the three rules. If you don&#39;t respect them, you&#39;ll regret it, and, well, don&#39;t say he didn&#39;t warn you.",src:n(3300).Z,width:"960",height:"1060"}))),(0,a.kt)("p",null,"Enough lecturing, ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/simple-platformer"},"let's get started creating"),"!"))}d.isMDXComponent=!0},3300:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Genie-warning-2db22ddfe81e7f59cdca2348124e0997.png"},7617:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/base-THNK-events-81cb23ca5a4cf70ebadbb3f45b1b9ed1.png"}}]);
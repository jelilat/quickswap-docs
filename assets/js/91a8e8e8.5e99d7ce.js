(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[8837],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6831:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),o={id:"04-security",title:"Security",tags:"advanced-topics, documentation"},s={unversionedId:"concepts/advanced-topics/04-security",id:"version-V2/concepts/advanced-topics/04-security",isDocsHomePage:!1,title:"Audit & Formal Verification",description:"Between January 8 and April 30, a team of six engineers reviewed and formally verified crucial components of the smart contracts for Quickswap V2.",source:"@site/versioned_docs/version-V2/concepts/03-advanced-topics/04-security.md",sourceDirName:"concepts/03-advanced-topics",slug:"/concepts/advanced-topics/04-security",permalink:"/quickswap-docs/concepts/advanced-topics/04-security",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/concepts/03-advanced-topics/04-security.md",version:"V2",sidebarPosition:4,frontMatter:{id:"04-security",title:"Security",tags:"advanced-topics, documentation"},sidebar:"defaultSidebar",previous:{title:"Understanding Returns",permalink:"/quickswap-docs/concepts/advanced-topics/03-understanding-returns"},next:{title:"Math",permalink:"/quickswap-docs/concepts/advanced-topics/05-math"}},c=[],p={toc:c};function l(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Between January 8 and April 30, a team of six engineers reviewed and formally verified crucial components of the smart contracts for Quickswap V2."),(0,i.kt)("p",null,"Their past work includes smart contract development on and formal verification of multi-collateral DAI."),(0,i.kt)("p",null,"The scope of work includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Formal verification of the core smart contracts"),(0,i.kt)("li",{parentName:"ul"},"Code review of core smart contracts"),(0,i.kt)("li",{parentName:"ul"},"Numerical error analysis"),(0,i.kt)("li",{parentName:"ul"},"Code review of periphery smart contracts (during ongoing development)")),(0,i.kt)("p",null,'The report also has a "Design Comments" section that we highly recommend for gaining a deep technical understanding of some one the choices made in Quickswap V2.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://uniswap.org/audit.html"},"Read the report"))),(0,i.kt)("h1",{id:"bug-bounty"},"Bug Bounty"),(0,i.kt)("p",null,"Quickswap has an open and ongoing bug ",(0,i.kt)("a",{parentName:"p",href:"https://uniswap.org/bug-bounty/"},"bounty program"),"."),(0,i.kt)("h1",{id:"considerations-when-building-on-quickswap"},"Considerations when building on Quickswap"),(0,i.kt)("p",null,"When integrating Quickswap V2 into another on-chain system, particular care must be taken to avoid security vulnerabilities, avenues for manipulations, and the potential loss of funds."),(0,i.kt)("p",null,"As a preliminary note: smart contract integrations can happen at two levels: directly with ",(0,i.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/smart-contracts/pair"},"Pair")," contracts, or through the ",(0,i.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/smart-contracts/router02"},"Router"),". Direct interactions offer maximal flexibility but require the most work to get right. Mediated interactions offer more limited capabilities but stronger safety guarantees."),(0,i.kt)("p",null,'There are two primary categories of risk associated with Quickswap V2. The first involves so-called "static" errors. These can include sending too many tokens to a pair during a swap (or requesting too few tokens back) or allowing transactions to linger in the mempool long enough for the sender\'s expectations about prices to no longer be accurate.'),(0,i.kt)("p",null,"One may address these errors with fairly straightforward logic checks. Executing these logic checks is the primary purpose of routers. Those who interact directly with pairs must perform these checks themselves (with the help of the ",(0,i.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/smart-contracts/library"},"Library"),"."),(0,i.kt)("p",null,'"Dynamic" risk, the second category, involves runtime pricing. Because Ethereum transactions occur in an adversarial environment, naively written smart contracts can, and will, be exploited for profit. For example, suppose a smart contract checks the asset ratio in a Quickswap pool at runtime and trades against it, assuming that the ratio represents the "fair" or "market" price of these assets. In that case, it is highly vulnerable to manipulation. A malicious actor could, e.g., trivially insert transactions before and after the naive transaction (a so-called "sandwich" attack), causing the smart contract to trade at a radically worse price, profit from this at the trader\'s expense, and then return the contracts to their original state, all at a low cost. (One important caveat is that these types of attacks are mitigated by trading in highly liquid pools, or at low values.)'),(0,i.kt)("p",null,"The best way to protect against these attacks is to introduce a price oracle. An oracle is any device that returns desired information, in this case, a pair's spot price. The best \"oracle\" is simply a traders' off-chain observation of the prevailing price, which can be passed into the trade as a safety check. This strategy is best suited to retail trading venues where users initiate transactions on their own behalf. However, it is often the case that a trusted price observation is not available (e.g., in multi-step, programmatic interactions involving Quickswap). Without a price oracle, these interactions will be forced to trade at whatever the (potentially manipulated) rate on Quickswap is. For details on the Quickswap V2 approach to oracles, see ",(0,i.kt)("a",{parentName:"p",href:"/quickswap-docs/concepts/core-concepts/04-oracles"},"Oracles"),"."))}l.isMDXComponent=!0}}]);
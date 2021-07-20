(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[5941],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return h}});var o=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(i),h=r,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||n;return i?o.createElement(f,a(a({ref:t},p),{},{components:i})):o.createElement(f,a({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<n;l++)a[l]=i[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8142:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=i(2122),r=i(9756),n=(i(7294),i(3905)),a={id:"02-pools",title:"Pools",tags:"pools, documentation"},s={unversionedId:"concepts/core-concepts/02-pools",id:"version-V2/concepts/core-concepts/02-pools",isDocsHomePage:!1,title:"Pools",description:"Each Quickswap liquidity pool is a trading venue for a pair of ERC20 tokens. When a pool contract is created, its balances of each token are 0; in order for the pool to begin facilitating trades, someone must seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool. They are incentivized to deposit an equal value of both tokens into the pool. To see why, consider the case where the first liquidity provider deposits tokens at a ratio different from the current market rate. This immediately creates a profitable arbitrage opportunity, which is likely to be taken by an external party.",source:"@site/versioned_docs/version-V2/concepts/02-core-concepts/02-pools.md",sourceDirName:"concepts/02-core-concepts",slug:"/concepts/core-concepts/02-pools",permalink:"/quickswap-docs/concepts/core-concepts/02-pools",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/concepts/02-core-concepts/02-pools.md",version:"V2",sidebarPosition:2,frontMatter:{id:"02-pools",title:"Pools",tags:"pools, documentation"},sidebar:"defaultSidebar",previous:{title:"Swaps",permalink:"/quickswap-docs/concepts/core-concepts/01-swaps"},next:{title:"Flash Swaps",permalink:"/quickswap-docs/concepts/core-concepts/03-flash-swaps"}},c=[],l={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(2932).Z})),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Each Quickswap liquidity pool is a trading venue for a pair of ERC20 tokens. When a pool contract is created, its balances of each token are 0; in order for the pool to begin facilitating trades, someone must seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool. They are incentivized to deposit an equal ",(0,n.kt)("em",{parentName:"p"},"value")," of both tokens into the pool. To see why, consider the case where the first liquidity provider deposits tokens at a ratio different from the current market rate. This immediately creates a profitable arbitrage opportunity, which is likely to be taken by an external party."),(0,n.kt)("p",null,"When other liquidity providers add to an existing pool, they must deposit pair tokens proportional to the current price. If they don\u2019t, the liquidity they added is at risk of being arbitraged as well. If they believe the current price is not correct, they may arbitrage it to the level they desire, and add liquidity at that price."),(0,n.kt)("h1",{id:"pool-tokens"},"Pool tokens"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(3638).Z})),(0,n.kt)("p",null,"Whenever liquidity is deposited into a pool, unique tokens known as ",(0,n.kt)("em",{parentName:"p"},"liquidity tokens")," are minted and sent to the provider's address. These tokens represent a given liquidity provider's contribution to a pool. The proportion of the pool's liquidity provided determines the number of liquidity tokens the provider receives. If the provider is minting a new pool, the number of liquidity tokens they will receive will equal sqrt(x ","*"," y), where x and y represent the amount of each token provided."),(0,n.kt)("p",null,"Whenever a trade occurs, a 0.3% fee is charged to the transaction sender. This fee is distributed ",(0,n.kt)("em",{parentName:"p"},"pro-rata")," to all LPs in the pool upon completion of the trade."),(0,n.kt)("p",null,'To retrieve the underlying liquidity, plus any fees accrued, liquidity providers must "burn" their liquidity tokens, effectively exchanging them for their portion of the liquidity pool, plus the proportional fee allocation.'),(0,n.kt)("p",null,"As liquidity tokens are themselves tradable assets, liquidity providers may sell, transfer, or otherwise use their liquidity tokens in any way they see fit."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Learn more with advanced topics:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/quickswap-docs/concepts/advanced-topics/03-understanding-returns"},"Understanding Returns")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/quickswap-docs/concepts/advanced-topics/01-fees"},"Fees")))),(0,n.kt)("h1",{id:"why-pools"},"Why pools?"),(0,n.kt)("p",null,"Quickswap is unique in that it doesn\u2019t use an order book to derive the price of an asset or to match buyers and sellers of tokens. Instead, Quickswap uses what are called Liquidity Pools."),(0,n.kt)("p",null,"Liquidity is typically represented by discrete orders placed by individuals onto a centrally operated order book. A participant looking to provide liquidity or make markets must actively manage their orders, continuously updating them in response to the activity of others in the marketplace."),(0,n.kt)("p",null,"While order books are foundational to finance and work great for certain use cases, they suffer from a few important limitations that are especially magnified when applied to a decentralized or blockchain-native setting. Order books require intermediary infrastructure to host the orderbook and match orders. This creates points of control and adds additional layers of complexity. They also require active participation and management from market makers who usually use sophisticated infrastructure and algorithms, limiting participation to advanced traders. Order books were invented in a world with relatively few assets being traded, so it is not surprising they aren't ideal for an ecosystem where anyone can create their own token, and those tokens usually have low liquidity. In sum, with the infrastructural trade-offs presented by a platform like Ethereum, order books are not the native architecture for implementing a liquidity protocol on a blockchain."),(0,n.kt)("p",null,"Quickswap focuses on the strengths of Ethereum to reimagine token swaps from first principles."),(0,n.kt)("p",null,"A blockchain-native liquidity protocol should take advantage of the trusted code execution environment, the autonomous and perpetually running virtual machine, and an open, permissionless, and inclusive access model that produces an exponentially growing ecosystem of virtual assets."),(0,n.kt)("p",null,"It is important to reiterate that a Pool is just a smart contract, operated by users calling functions on it. Swapping tokens is calling ",(0,n.kt)("inlineCode",{parentName:"p"},"swap")," on a Pool contract instance, while providing liquidity is calling ",(0,n.kt)("inlineCode",{parentName:"p"},"deposit"),"."),(0,n.kt)("p",null,"Just how end-users can interact with the Quickswap protocol through the Interface (which in turn interacts with the underlying contracts), developers can interact directly with the smart contracts and integrate Quickswap functionality into their own applications without relying on intermediaries or needing permission."),(0,n.kt)("h1",{id:"developer-resources"},"Developer resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To see how to pool tokens in a smart contract read ",(0,n.kt)("a",{parentName:"li",href:"/quickswap-docs/guides/smart-contract-integration/03-providing-liquidity"},"Providing Liquidity"),".")))}p.isMDXComponent=!0},2932:function(e,t,i){"use strict";t.Z=i.p+"assets/images/anatomy-82d82239e5417e36ca9da17d14961434.jpg"},3638:function(e,t,i){"use strict";t.Z=i.p+"assets/images/lp-c0b1b03ef921f1325971fa8ab6e9a4f1.jpg"}}]);
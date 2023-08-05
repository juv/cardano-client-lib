"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},l="Introduction",o={unversionedId:"intro",id:"intro",title:"Introduction",description:"A client library for Cardano in Java. This library simplifies the interaction with Cardano blockchain from a Java application.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/bloxbean/cardano-client/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},p={},s=[{value:"Posts",id:"posts",level:3},{value:"Examples",id:"examples",level:3},{value:"Features",id:"features",level:3},{value:"Address Generation",id:"address-generation",level:4},{value:"Transaction Serialization &amp; Signing",id:"transaction-serialization--signing",level:4},{value:"High Level api",id:"high-level-api",level:4},{value:"Composable Functions",id:"composable-functions",level:4},{value:"CIP Implementations",id:"cip-implementations",level:4},{value:"Metadata Builder",id:"metadata-builder",level:4},{value:"Token Minting",id:"token-minting",level:4},{value:"Backend Integration",id:"backend-integration",level:4}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A client library for Cardano in Java. This library simplifies the interaction with Cardano blockchain from a Java application."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Latest Stable Version"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bloxbean/cardano-client-lib/releases/tag/v0.4.3"},"0.4.3")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Latest Preview Version"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bloxbean/cardano-client-lib/releases/tag/v0.5.0-alpha.4"},"0.5.0-alpha.4"))),(0,r.kt)("h3",{id:"posts"},"Posts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/coinmonks/cardano-client-lib-new-composable-functions-to-build-transaction-in-java-part-i-be3a8b4da835"},"Composable functions to build transactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/p/83fba0fee537"},"Cardano-client-lib\xa0: A Java Library to interact with Cardano\u200a-\u200aPart\xa0I")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/p/fa34f403b90e"},"Cardano-client-lib: Transaction with Metadata in Java\u200a-\u200aPart\xa0II")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/p/1a94a21cfeeb"},"Cardano-client-lib: Minting a new Native Token in Java\u200a-\u200aPart\xa0III"))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bloxbean/cardano-client-examples/tree/main/src/test/java/com/bloxbean/cardano/client/example"},"Cardano-client-lib examples repository")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.bloxbean.cardano/cardano-client-core/latest/index.html"},"JavaDoc")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cardano-client.bloxbean.com/"},"Documentation")),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("h4",{id:"address-generation"},"Address Generation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Address Generation (Base Address, Enterprise Address)"),(0,r.kt)("li",{parentName:"ul"},"Generate Address from Mnemonic phase")),(0,r.kt)("h4",{id:"transaction-serialization--signing"},"Transaction Serialization & Signing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API to build Payment transaction (ADA & Native Tokens)"),(0,r.kt)("li",{parentName:"ul"},"CBOR serialization of transaction"),(0,r.kt)("li",{parentName:"ul"},"Transaction signing")),(0,r.kt)("h4",{id:"high-level-api"},"High Level api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To build and submit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Payment transaction"),(0,r.kt)("li",{parentName:"ul"},"Token Minting and token transfer transaction")))),(0,r.kt)("h4",{id:"composable-functions"},"Composable Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To build and submit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Payment transaction"),(0,r.kt)("li",{parentName:"ul"},"Token Minting and token transfer"),(0,r.kt)("li",{parentName:"ul"},"Plutus smart contract call"),(0,r.kt)("li",{parentName:"ul"},"Token minting with Plutus contract")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bloxbean/cardano-client-examples/tree/main/src/test/java/com/bloxbean/cardano/client/example/function"},"Examples with Composable Functions")),(0,r.kt)("h4",{id:"cip-implementations"},"CIP Implementations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cips.cardano.org/cips/cip20/"},"CIP20 - Transaction Message/Comment metada")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cips.cardano.org/cips/cip25/"},"CIP25 - NFT Metadata Standard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cips.cardano.org/cips/cip8/"},"CIP8  - Message Signing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cips.cardano.org/cips/cip30/"},"CIP30  - dApp signData & verify")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cips.cardano.org/cips/cip27/"},"CIP27  - CNFT Community Royalties Standard"))),(0,r.kt)("h4",{id:"metadata-builder"},"Metadata Builder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Helper to build Metadata"),(0,r.kt)("li",{parentName:"ul"},"Converter to convert JSON (No Schema) to Metadata format")),(0,r.kt)("h4",{id:"token-minting"},"Token Minting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Token Minting transaction builder"),(0,r.kt)("li",{parentName:"ul"},"Native script (ScriptAll, ScriptAny, ScriptAtLeast, ScriptPubKey, RequireTimeAfter, RequireTimeBefore)"),(0,r.kt)("li",{parentName:"ul"},"Policy Id generation")),(0,r.kt)("h4",{id:"backend-integration"},"Backend Integration"),(0,r.kt)("p",null,"The library also provides integration with Cardano node through different backend services.\nOut of box, the library currently supports integration with following providers through the Backend api."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blockfrost.io"},"Blockfrost"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Module :")," cardano-client-backend-blockfrost ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bloxbean/cardano-client-lib/blob/master/backend-modules/blockfrost/README.md"},"README")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status :")," Stable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.koios.rest/"},"Koios"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Module :")," cardano-client-backend-koios ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bloxbean/cardano-client-lib/blob/master/backend-modules/koios/README.md"},"README")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status :")," Beta"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ogmios.dev/"},"Ogmios"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Module :")," cardano-client-backend-koios ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bloxbean/cardano-client-lib/blob/master/backend-modules/ogmios/README.md"},"README")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status :")," Beta"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Supported Apis :")," submitTransaction, evaluateTx, Kupo support (UtxoService)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Following Backend apis are currently available")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TransactionService (Submit transaction, Get transaction, Evaluate ExUnits for Script Txn)"),(0,r.kt)("li",{parentName:"ul"},"AddressService (Get address details)"),(0,r.kt)("li",{parentName:"ul"},"UtxoService (Get utxos for an address)"),(0,r.kt)("li",{parentName:"ul"},"AssetService"),(0,r.kt)("li",{parentName:"ul"},"BlockService"),(0,r.kt)("li",{parentName:"ul"},"NetworkInfoService"),(0,r.kt)("li",{parentName:"ul"},"EpochService"),(0,r.kt)("li",{parentName:"ul"},"MetadataService")))}m.isMDXComponent=!0}}]);
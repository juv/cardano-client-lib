"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Concepts",description:"Key Concepts in Cardano Client Lib",sidebar_label:"Concepts",sidebar_position:1},o="Concepts",l={unversionedId:"gettingstarted/concepts",id:"gettingstarted/concepts",title:"Concepts",description:"Key Concepts in Cardano Client Lib",source:"@site/docs/gettingstarted/concepts.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/concepts",permalink:"/docs/gettingstarted/concepts",draft:!1,editUrl:"https://github.com/bloxbean/cardano-client/tree/main/docs/docs/gettingstarted/concepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Concepts",description:"Key Concepts in Cardano Client Lib",sidebar_label:"Concepts",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Dependencies",permalink:"/docs/gettingstarted/dependencies"}},s={},c=[{value:"Account",id:"account",level:2},{value:"Transaction Building Apis",id:"transaction-building-apis",level:2},{value:"Low Level Serialization Api",id:"low-level-serialization-api",level:3},{value:"QuickTx API (Recommended)",id:"quicktx-api-recommended",level:3},{value:"Composable Functions API",id:"composable-functions-api",level:3},{value:"High-Level Api (Deprecated)",id:"high-level-api-deprecated",level:3},{value:"Ledger data provider apis",id:"ledger-data-provider-apis",level:2},{value:"Supplier Interfaces",id:"supplier-interfaces",level:3},{value:"Backend Api",id:"backend-api",level:3},{value:"Backend Providers",id:"backend-providers",level:4},{value:"Utxo Selection Strategy",id:"utxo-selection-strategy",level:2},{value:"CIP Implementations",id:"cip-implementations",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"concepts"},"Concepts"),(0,i.kt)("h2",{id:"account"},"Account"),(0,i.kt)("p",null,"Account class provides a simple abstraction to create and manage secrets, and perform account-based work such as\nsigning transactions. It encapsulates features like CIP 1852 compatible address derivation, BIP-39 mnemonic generation through\na simple ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," class. An instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," can be created from an existing mnemonic or account private key and derivation path."),(0,i.kt)("h2",{id:"transaction-building-apis"},"Transaction Building Apis"),(0,i.kt)("h3",{id:"low-level-serialization-api"},"Low Level Serialization Api"),(0,i.kt)("p",null,"These are low level serialization api to build transaction for Cardano network. These APIs are flexible and good for\ncomplex scenarios. Basically, you can achieve any complexity with low level api. These apis provide flexibility, but building\ntransactions this way is complex. Unless really required, this option should be avoided to build transactions."),(0,i.kt)("h3",{id:"quicktx-api-recommended"},"QuickTx API (Recommended)"),(0,i.kt)("p",null,"This new declarative-style transaction builder API strikes a balance between simplicity and flexibility. It\u2019s built upon the Composable Functions API\nand offers a more streamlined experience, supporting an extensive range of transactions. Those familiar with the Lucid JS\nlibrary will notice many similarities."),(0,i.kt)("h3",{id:"composable-functions-api"},"Composable Functions API"),(0,i.kt)("p",null,"These apis provide a balance between simple interface and flexibility. Using out-of-box composable functions, you can achieve any\ncomplexity and at the same time, you can write your own composable functions to customize the behavior during transaction building."),(0,i.kt)("h3",{id:"high-level-api-deprecated"},"High-Level Api (Deprecated)"),(0,i.kt)("p",null,"Provides simple interfaces to do transfer and token minting transaction. These apis are beginner friendly, but some complex transactions\nmay not be possible through high-level API."),(0,i.kt)("h2",{id:"ledger-data-provider-apis"},"Ledger data provider apis"),(0,i.kt)("p",null,"Cardano is an UTXO based blockchain. Unlike account-based blockchains like Ethereum, a transaction in Cardano has inputs and outputs,\nwhere inputs are unspent outputs from previous transactions. Assets are stored on the ledger in unspent outputs, rather than accounts."),(0,i.kt)("p",null,"A transaction is built using off-chain code and submitted to Cardano node for processing. But inputs (unspent outputs) used\nin a transaction are fetched from the Cardano blockchain. Similarly, few protocol parameters may be required during transaction building."),(0,i.kt)("h3",{id:"supplier-interfaces"},"Supplier Interfaces"),(0,i.kt)("p",null,"The library provides simple supplier interfaces which can be implemented to provide required on-chain data during transaction\nbuilding. These apis remove direct dependency with on-chain data provider in core library."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. ProtocolParameterSupplier")," :- Implement this functional interface to provide current protocol parameters.\nProtocol parameters are required to build the transaction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface ProtocolParamsSupplier {\n    ProtocolParams getProtocolParams();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. UtxoSupplier"),":- This interface has only one method. Implement this interface to provide utxos which are required during\ntransaction building."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface UtxoSupplier {\n    ...\n    List<Utxo> getPage(String address, Integer nrOfItems, Integer page, OrderEnum order);\n    ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. TransactionProcessor")," :- Implement this interface to submit transactions to the Cardano blockchain. This is an optional\ninterface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface TransactionProcessor {\n    Result<String> submitTransaction(byte[] cborData) throws ApiException;\n}\n")),(0,i.kt)("h3",{id:"backend-api"},"Backend Api"),(0,i.kt)("p",null,"Alternatively, the required on-chain data for transaction building can be retrieved through backend api layer. The library\ndefines standard apis to get commonly used on-chain data from a provider. Using a backend service implementation, you can easily create an\ninstance of ",(0,i.kt)("inlineCode",{parentName:"p"},"UtxoSupplier")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ProtocolParamsSupplier"),"."),(0,i.kt)("p",null,"Following Backend apis are currently available"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TransactionService (Submit transaction, Get transaction, Evaluate ExUnits for Script Txn)"),(0,i.kt)("li",{parentName:"ul"},"AddressService (Get address details)"),(0,i.kt)("li",{parentName:"ul"},"UtxoService (Get utxos for an address)"),(0,i.kt)("li",{parentName:"ul"},"AssetService"),(0,i.kt)("li",{parentName:"ul"},"BlockService"),(0,i.kt)("li",{parentName:"ul"},"NetworkInfoService"),(0,i.kt)("li",{parentName:"ul"},"EpochService"),(0,i.kt)("li",{parentName:"ul"},"MetadataService")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Though backend api provides an easy way to fetch required data from the blockchain, but it's not mandatory for transaction\nbuilding. You can just implement supplier interfaces to provide required on-chain data to build a transaction. ",(0,i.kt)("strong",{parentName:"p"},"There is no\ndirect dependency between library's core functionality and backend apis."))),(0,i.kt)("h4",{id:"backend-providers"},"Backend Providers"),(0,i.kt)("p",null,"Out of box, the library currently supports integration with following providers through the Backend api."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blockfrost"),(0,i.kt)("li",{parentName:"ul"},"Koios"),(0,i.kt)("li",{parentName:"ul"},"Ogmios (Supports submitTransaction, evaluateTx and UtxoService through Kupo)")),(0,i.kt)("h2",{id:"utxo-selection-strategy"},"Utxo Selection Strategy"),(0,i.kt)("p",null,'The library provides different utxo selection strategy implementations. The utxo selection strategy can be\nchanged by providing a custom implementation of "UtxoSelectionStrategy" interface or by selecting an existing one.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DefaultUtxoSelectionStrategyImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LargestFirstUtxoSelectionStrategy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RandomImproveUtxoSelectionStrategy"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultUtxoSelectionStrategy")," is used both in ",(0,i.kt)("strong",{parentName:"p"},"Composable functions")," and ",(0,i.kt)("strong",{parentName:"p"},"High Level api"),". The default strategy\nis too simple and finds required utxos sequentially. But it may not be efficient for some use-cases. You can easily use another\navailable UtxoSelectionStrategy impl or provide your own implementation.")),(0,i.kt)("h2",{id:"cip-implementations"},"CIP Implementations"),(0,i.kt)("p",null,"Cardano Improvement Proposals (CIPs) describe standards, processes; or provide general guidelines or information to the\nCardano Community. It is a formal, technical communication process that exists off-chain. "),(0,i.kt)("p",null,"The library implements some commonly used CIPs. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cips.cardano.org/cips/cip20/"},"CIP20 - Transaction Message/Comment metada")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cips.cardano.org/cips/cip25/"},"CIP25 - NFT Metadata Standard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cips.cardano.org/cips/cip8/"},"CIP8  - Message Signing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cips.cardano.org/cips/cip30/"},"CIP30  - dApp signData & verify"))))}d.isMDXComponent=!0}}]);
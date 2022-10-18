"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[537],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(b,i(i({ref:n},s),{},{components:t})):r.createElement(b,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},i="Dependencies",l={unversionedId:"gettingstarted/dependencies",id:"gettingstarted/dependencies",title:"Dependencies",description:"For release binaries",source:"@site/docs/gettingstarted/dependencies.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/dependencies",permalink:"/docs/gettingstarted/dependencies",draft:!1,editUrl:"https://github.com/bloxbean/cardano-client/tree/main/docs/docs/gettingstarted/dependencies.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/docs/gettingstarted/concepts"},next:{title:"Quick Start",permalink:"/docs/gettingstarted/quickstart"}},c={},d=[{value:"For release binaries",id:"for-release-binaries",level:2},{value:"For snapshot binaries",id:"for-snapshot-binaries",level:2}],s={toc:d};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dependencies"},"Dependencies"),(0,o.kt)("h2",{id:"for-release-binaries"},"For release binaries"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Maven, add the following dependencies to project's pom.xml")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Core module"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.bloxbean.cardano</groupId>\n            <artifactId>cardano-client-lib</artifactId>\n            <version>0.3.0</version>\n        </dependency>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Backend modules")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For backend support, use one of the following supported backend module")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- For Blockfrost backend --\x3e\n        <dependency>\n            <groupId>com.bloxbean.cardano</groupId>\n            <artifactId>cardano-client-backend-blockfrost</artifactId>\n            <version>0.3.0</version>\n        </dependency>\n        \n         \x3c!-- For Koios backend --\x3e\n        <dependency>\n            <groupId>com.bloxbean.cardano</groupId>\n            <artifactId>cardano-client-backend-koios</artifactId>\n            <version>0.3.0</version>\n        </dependency>\n        \n         \x3c!-- For Ogmios backend --\x3e\n        <dependency>\n            <groupId>com.bloxbean.cardano</groupId>\n            <artifactId>cardano-client-backend-ogmios</artifactId>\n            <version>0.3.0</version>\n        </dependency>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Gradle, add the following dependencies to build.gradle")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Core Module"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"implementation 'com.bloxbean.cardano:cardano-client-lib:0.3.0'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Backend modules")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For backend support, use one of the following supported backend module")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"//For Blockfrost\nimplementation 'com.bloxbean.cardano:cardano-client-backend-blockfrost:0.3.0'\n\n//For Koios\nimplementation 'com.bloxbean.cardano:cardano-client-backend-koios:0.3.0'\n\n//For Ogmios\nimplementation 'com.bloxbean.cardano:cardano-client-backend-ogmios:0.3.0'\n\n")),(0,o.kt)("h2",{id:"for-snapshot-binaries"},"For snapshot binaries"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"SNAPSHOT_VERSION :")," 0.3.1-SNAPSHOT (Please verify the latest snapshot version in ",(0,o.kt)("strong",{parentName:"p"},"gradle.properties"),")")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Maven, add the following dependencies and repository to project's pom.xml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    <dependencies>\n        <dependency>\n            <groupId>com.bloxbean.cardano</groupId>\n            <artifactId>cardano-client-lib</artifactId>\n            <version>{SNAPSHOT_VERSION}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.bloxbean.cardano</groupId>\n            <artifactId>cardano-client-backend-blockfrost</artifactId>\n            <version>{SNAPSHOT_VERSION}</version>\n        </dependency>\n    </dependencies>\n    \n    <repositories>\n        <repository>\n            <id>snapshots-repo</id>\n            <url>https://oss.sonatype.org/content/repositories/snapshots</url>\n            <releases>\n                <enabled>false</enabled>\n            </releases>\n            <snapshots>\n                <enabled>true</enabled>\n            </snapshots>\n        </repository>\n    </repositories>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Gradle, add the following dependencies and repository to build.gradle")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"repositories {\n    ...\n    maven {\n        url \"https://oss.sonatype.org/content/repositories/snapshots\"\n    }\n}\n\nimplementation 'com.bloxbean.cardano:cardano-client-lib:{SNAPSHOT_VERSION}'\nimplementation 'com.bloxbean.cardano:cardano-client-backend-blockfrost:{SNAPSHOT_VERSION}'\n")))}p.isMDXComponent=!0}}]);
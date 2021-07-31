import{S as e,i as t,s,e as r,a,b as n,c as o,d as l,f as i,g as c,h,j as f,k as d,l as u,m as p,n as m,u as v,o as g,p as $,q as C,t as x,r as w,v as E,w as L,x as y,y as M,z as S,A,B as b,C as D,D as Z}from"./vendor.778d723a.js";function N({mean:e=0,stdDev:t=1,min:s=e-3*t,max:r=e+3*t}={}){for(;;){const a=2*Math.random()-1,n=a**2+(2*Math.random()-1)**2;if(n<1&&0!==n){const o=e+t*(a*Math.sqrt(-2*Math.log(n)/n));if(o>=s&&o<=r)return o}}}let B=Math.ceil(1e4*Math.random());const T=1e3,R=-5e3,I=950,G=60;function k(e=!1){const t=N({mean:1e3,stdDev:250}),s=t*N({mean:.3,stdDev:.1,min:.1}),r=N({stdDev:Math.min(window.innerWidth,1e3)}),a=N({stdDev:50}),n=e?Math.random()*-G:0;return{id:B++,width:t,height:s,offset:n,style:["--perspective:",T,"px;","--farthest:",R,"px;","--nearest:",I,"px;","--duration:",G,"s;","--offset:",n,"s;","--x:",r,"px;","--y:",a,"px"].join("")}}function H(e,t,s){const r=e.slice();return r[4]=t[s],r}function U(e,t){let s,m,v,g,$,C,x,w,E,L,y,M,S,A;function b(){return t[2](t[4])}return{key:e,first:null,c(){s=r("div"),m=a("svg"),v=a("filter"),g=a("feTurbulence"),C=a("feDisplacementMap"),w=a("ellipse"),y=n(),this.h()},l(e){s=o(e,"DIV",{class:!0,style:!0});var t=l(s);m=o(t,"svg",{xmlns:!0,viewBox:!0,class:!0},1);var r=l(m);v=o(r,"filter",{id:!0},1);var a=l(v);g=o(a,"feTurbulence",{type:!0,baseFrequency:!0,numOctaves:!0,result:!0,seed:!0},1),l(g).forEach(i),C=o(a,"feDisplacementMap",{in2:!0,in:!0,scale:!0,xChannelSelector:!0,yChannelSelector:!0},1),l(C).forEach(i),a.forEach(i),w=o(r,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,style:!0},1),l(w).forEach(i),r.forEach(i),y=c(t),t.forEach(i),this.h()},h(){h(g,"type","turbulence"),h(g,"baseFrequency","0.003"),h(g,"numOctaves","5"),h(g,"result","turbulence"),h(g,"seed",$=t[4].id),h(C,"in2","turbulence"),h(C,"in","SourceGraphic"),h(C,"scale","300"),h(C,"xChannelSelector","R"),h(C,"yChannelSelector","A"),h(v,"id",x="filter"+t[4].id),h(w,"cx",0),h(w,"cy",0),h(w,"rx",E=t[4].width),h(w,"ry",L=t[4].height),h(w,"fill","url(#Gradient)"),f(w,"filter","url(#filter"+t[4].id+")"),h(m,"xmlns","http://www.w3.org/2000/svg"),h(m,"viewBox","-1000 -1000 2000 2000"),h(m,"class","svelte-1046df6"),h(s,"class","svg-holder svelte-1046df6"),h(s,"style",M=t[4].style),this.first=s},m(e,t){d(e,s,t),u(s,m),u(m,v),u(v,g),u(v,C),u(m,w),u(s,y),S||(A=p(s,"animationend",b),S=!0)},p(e,r){t=e,1&r&&$!==($=t[4].id)&&h(g,"seed",$),1&r&&x!==(x="filter"+t[4].id)&&h(v,"id",x),1&r&&E!==(E=t[4].width)&&h(w,"rx",E),1&r&&L!==(L=t[4].height)&&h(w,"ry",L),1&r&&f(w,"filter","url(#filter"+t[4].id+")"),1&r&&M!==(M=t[4].style)&&h(s,"style",M)},d(e){e&&i(s),S=!1,A()}}}function Y(e){let t,s,r,f,p,C,x,w,E=[],L=new Map,y=e[0];const M=e=>e[4].id;for(let a=0;a<y.length;a+=1){let t=H(e,y,a),s=M(t);L.set(s,E[a]=U(s,t))}return{c(){t=a("svg"),s=a("defs"),r=a("radialGradient"),f=a("stop"),p=a("stop"),C=a("stop"),x=n();for(let e=0;e<E.length;e+=1)E[e].c();w=m(),this.h()},l(e){t=o(e,"svg",{xmlns:!0,height:!0,width:!0},1);var a=l(t);s=o(a,"defs",{},1);var n=l(s);r=o(n,"radialGradient",{id:!0,cx:!0,cy:!0,r:!0,fx:!0,fy:!0},1);var h=l(r);f=o(h,"stop",{offset:!0,"stop-color":!0},1),l(f).forEach(i),p=o(h,"stop",{offset:!0,"stop-color":!0},1),l(p).forEach(i),C=o(h,"stop",{offset:!0,"stop-color":!0},1),l(C).forEach(i),h.forEach(i),n.forEach(i),a.forEach(i),x=c(e);for(let t=0;t<E.length;t+=1)E[t].l(e);w=m(),this.h()},h(){h(f,"offset","0%"),h(f,"stop-color","var(--cloud1)"),h(p,"offset","10%"),h(p,"stop-color","var(--cloud2)"),h(C,"offset","50%"),h(C,"stop-color","var(--cloud3)"),h(r,"id","Gradient"),h(r,"cx","0.5"),h(r,"cy","0.5"),h(r,"r","0.5"),h(r,"fx","0.4"),h(r,"fy","0.2"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"height","0"),h(t,"width","0")},m(e,a){d(e,t,a),u(t,s),u(s,r),u(r,f),u(r,p),u(r,C),d(e,x,a);for(let t=0;t<E.length;t+=1)E[t].m(e,a);d(e,w,a)},p(e,[t]){3&t&&(y=e[0],E=v(E,t,M,1,e,y,L,w.parentNode,$,U,w,H))},i:g,o:g,d(e){e&&i(t),e&&i(x);for(let t=0;t<E.length;t+=1)E[t].d(e);e&&i(w)}}}function z(e,t,s){const r=window.innerWidth>1e3?8:4;let a=Array.from(Array(r),(()=>k(!0)));function n(e){s(0,a=[k(),...a.filter((t=>t.id!==e))])}a.sort(((e,t)=>t.offset-e.offset));return[a,n,e=>n(e.id)]}class q extends e{constructor(e){super(),t(this,e,z,Y,s,{})}}function j(e){let t,s,r;return{c(){t=a("svg"),s=a("path"),r=a("path"),this.h()},l(e){t=o(e,"svg",{height:!0,width:!0,viewBox:!0},1);var a=l(t);s=o(a,"path",{d:!0,fill:!0},1),l(s).forEach(i),r=o(a,"path",{d:!0},1),l(r).forEach(i),a.forEach(i),this.h()},h(){h(s,"d","M0 0h24v24H0z"),h(s,"fill","none"),h(r,"d","M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"),h(t,"height","16px"),h(t,"width","16px"),h(t,"viewBox","0 0 24 24")},m(e,a){d(e,t,a),u(t,s),u(t,r)},p:g,i:g,o:g,d(e){e&&i(t)}}}class O extends e{constructor(e){super(),t(this,e,null,j,s,{})}}function V(e){let t,s;return{c(){t=a("svg"),s=a("path"),this.h()},l(e){t=o(e,"svg",{width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0},1);var r=l(t);s=o(r,"path",{d:!0},1),l(s).forEach(i),r.forEach(i),this.h()},h(){h(s,"d","M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"),h(t,"width","16px"),h(t,"height","16px"),h(t,"viewBox","0 0 256 250"),h(t,"preserveAspectRatio","xMidYMid")},m(e,r){d(e,t,r),u(t,s)},p:g,i:g,o:g,d(e){e&&i(t)}}}class F extends e{constructor(e){super(),t(this,e,null,V,s,{})}}function P(e){let t,s;return{c(){t=a("svg"),s=a("path"),this.h()},l(e){t=o(e,"svg",{width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0},1);var r=l(t);s=o(r,"path",{d:!0},1),l(s).forEach(i),r.forEach(i),this.h()},h(){h(s,"d","M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"),h(t,"width","16px"),h(t,"height","16px"),h(t,"viewBox","0 0 256 256"),h(t,"preserveAspectRatio","xMidYMid")},m(e,r){d(e,t,r),u(t,s)},p:g,i:g,o:g,d(e){e&&i(t)}}}class W extends e{constructor(e){super(),t(this,e,null,P,s,{})}}function J(e){let t,s,r,n;return{c(){t=a("svg"),s=a("g"),r=a("polygon"),n=a("path"),this.h()},l(e){t=o(e,"svg",{width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0},1);var a=l(t);s=o(a,"g",{},1);var c=l(s);r=o(c,"polygon",{points:!0},1),l(r).forEach(i),n=o(c,"path",{d:!0},1),l(n).forEach(i),c.forEach(i),a.forEach(i),this.h()},h(){h(r,"points","216.329708 276.187929 216.329708 194.976776 243.28341 194.976776 243.28341 303.14163 0 303.14163 0 194.976776 26.9537015 194.976776 26.9537015 276.187929"),h(n,"d","M56.7077876,187.275718 L189.025959,214.929516 L194.626728,188.325863 L62.3085568,160.672065 L56.7077876,187.275718 L56.7077876,187.275718 Z M74.2101912,124.267065 L196.727016,181.324901 L207.928555,156.821536 L85.4117295,99.4136524 L74.2101912,124.267065 Z M108.164854,64.0587971 L212.129132,150.520671 L229.281487,129.867835 L125.31721,43.4059609 L108.164854,64.0587971 L108.164854,64.0587971 Z M175.374084,0 L153.671104,16.1022113 L234.18216,124.617114 L255.88514,108.514902 L175.374084,0 Z M53.9074031,248.884179 L189.025959,248.884179 L189.025959,221.930478 L53.9074031,221.930478 L53.9074031,248.884179 Z"),h(t,"width","16px"),h(t,"height","16px"),h(t,"viewBox","0 0 256 304"),h(t,"preserveAspectRatio","xMidYMid")},m(e,a){d(e,t,a),u(t,s),u(s,r),u(s,n)},p:g,i:g,o:g,d(e){e&&i(t)}}}class K extends e{constructor(e){super(),t(this,e,null,J,s,{})}}var Q,X;function _(e){let t,s,a,f,p,m,v,$,A,b,D,Z,N,B,T,R,I;return f=new F({}),v=new K({}),b=new W({}),N=new O({}),{c(){t=r("footer"),s=r("p"),a=r("a"),C(f.$$.fragment),p=n(),m=r("a"),C(v.$$.fragment),$=n(),A=r("a"),C(b.$$.fragment),D=n(),Z=r("a"),C(N.$$.fragment),B=n(),T=r("p"),R=x("Company number 13523740"),this.h()},l(e){t=o(e,"FOOTER",{class:!0});var r=l(t);s=o(r,"P",{class:!0});var n=l(s);a=o(n,"A",{href:!0,class:!0});var h=l(a);w(f.$$.fragment,h),h.forEach(i),p=c(n),m=o(n,"A",{href:!0,class:!0});var d=l(m);w(v.$$.fragment,d),d.forEach(i),$=c(n),A=o(n,"A",{href:!0,class:!0});var u=l(A);w(b.$$.fragment,u),u.forEach(i),D=c(n),Z=o(n,"A",{href:!0,class:!0});var g=l(Z);w(N.$$.fragment,g),g.forEach(i),n.forEach(i),B=c(r),T=o(r,"P",{class:!0});var C=l(T);R=E(C,"Company number 13523740"),C.forEach(i),r.forEach(i),this.h()},h(){h(a,"href","https://github.com/BenGladman"),h(a,"class","svelte-66i1hm"),h(m,"href","https://stackoverflow.com/users/story/2907553"),h(m,"class","svelte-66i1hm"),h(A,"href","https://www.linkedin.com/in/ben-gladman/"),h(A,"class","svelte-66i1hm"),h(Z,"href","mailto:ben.gladman@gmail.com"),h(Z,"class","svelte-66i1hm"),h(s,"class","links svelte-66i1hm"),h(T,"class","registration svelte-66i1hm"),h(t,"class","svelte-66i1hm")},m(e,r){d(e,t,r),u(t,s),u(s,a),L(f,a,null),u(s,p),u(s,m),L(v,m,null),u(s,$),u(s,A),L(b,A,null),u(s,D),u(s,Z),L(N,Z,null),u(t,B),u(t,T),u(T,R),I=!0},p:g,i(e){I||(y(f.$$.fragment,e),y(v.$$.fragment,e),y(b.$$.fragment,e),y(N.$$.fragment,e),I=!0)},o(e){M(f.$$.fragment,e),M(v.$$.fragment,e),M(b.$$.fragment,e),M(N.$$.fragment,e),I=!1},d(e){e&&i(t),S(f),S(v),S(b),S(N)}}}class ee extends e{constructor(e){super(),t(this,e,null,_,s,{})}}(X=Q||(Q={})).DAY="Day",X.SUNSET="Sunset",X.NIGHT="Night",X.SUNRISE="Sunrise";const te=A(Q.DAY);function se(e){let t,s,a,f,m,v,$,C;return{c(){t=r("header"),s=r("h1"),a=x("Tyto Labs"),f=n(),m=r("p"),v=x("Software design and development"),this.h()},l(e){t=o(e,"HEADER",{class:!0});var r=l(t);s=o(r,"H1",{class:!0});var n=l(s);a=E(n,"Tyto Labs"),n.forEach(i),f=c(r),m=o(r,"P",{class:!0});var h=l(m);v=E(h,"Software design and development"),h.forEach(i),r.forEach(i),this.h()},h(){h(s,"class","svelte-30uk7x"),h(m,"class","svelte-30uk7x"),h(t,"class","svelte-30uk7x")},m(r,n){d(r,t,n),u(t,s),u(s,a),u(t,f),u(t,m),u(m,v),$||(C=p(s,"click",e[0]),$=!0)},p:g,i:g,o:g,d(e){e&&i(t),$=!1,C()}}}function re(e){return[()=>{te.update((e=>{switch(e){case Q.DAY:return Q.SUNSET;case Q.SUNSET:return Q.NIGHT;case Q.NIGHT:return Q.SUNRISE;default:return Q.DAY}}))}]}class ae extends e{constructor(e){super(),t(this,e,re,se,s,{})}}function ne(e){let t,s;const a=e[4].default,n=b(a,e,e[3],null);return{c(){t=r("div"),n&&n.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=l(t);n&&n.l(s),s.forEach(i),this.h()},h(){h(t,"class","svelte-smqzfz"),D(t,"sunrise",e[0]),D(t,"sunset",e[1]),D(t,"night",e[2])},m(e,r){d(e,t,r),n&&n.m(t,null),s=!0},p(e,[r]){n&&n.p&&(!s||8&r)&&Z(n,a,e,e[3],s?r:-1,null,null),1&r&&D(t,"sunrise",e[0]),2&r&&D(t,"sunset",e[1]),4&r&&D(t,"night",e[2])},i(e){s||(y(n,e),s=!0)},o(e){M(n,e),s=!1},d(e){e&&i(t),n&&n.d(e)}}}function oe(e,t,s){let{$$slots:r={},$$scope:a}=t,n=!1,o=!1,l=!1;return te.subscribe((e=>{s(0,n=e===Q.SUNRISE),s(1,o=e===Q.SUNSET),s(2,l=e===Q.NIGHT)})),e.$$set=e=>{"$$scope"in e&&s(3,a=e.$$scope)},[n,o,l,a,r]}class le extends e{constructor(e){super(),t(this,e,oe,ne,s,{})}}function ie(e){let t,s,a,f,u,p,m,v;return t=new q({}),a=new ae({}),m=new ee({}),{c(){C(t.$$.fragment),s=n(),C(a.$$.fragment),f=n(),u=r("main"),p=n(),C(m.$$.fragment),this.h()},l(e){w(t.$$.fragment,e),s=c(e),w(a.$$.fragment,e),f=c(e),u=o(e,"MAIN",{class:!0}),l(u).forEach(i),p=c(e),w(m.$$.fragment,e),this.h()},h(){h(u,"class","svelte-1pcjnx6")},m(e,r){L(t,e,r),d(e,s,r),L(a,e,r),d(e,f,r),d(e,u,r),d(e,p,r),L(m,e,r),v=!0},i(e){v||(y(t.$$.fragment,e),y(a.$$.fragment,e),y(m.$$.fragment,e),v=!0)},o(e){M(t.$$.fragment,e),M(a.$$.fragment,e),M(m.$$.fragment,e),v=!1},d(e){S(t,e),e&&i(s),S(a,e),e&&i(f),e&&i(u),e&&i(p),S(m,e)}}}function ce(e){let t,s;return t=new le({props:{$$slots:{default:[ie]},$$scope:{ctx:e}}}),{c(){C(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){L(t,e,r),s=!0},p(e,[s]){const r={};1&s&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){s||(y(t.$$.fragment,e),s=!0)},o(e){M(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}new class extends e{constructor(e){super(),t(this,e,null,ce,s,{})}}({target:document.getElementById("app")});

function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a,l=!1;function s(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function f(t,n){if(l){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:s(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const c=i+1;e[c]=l,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,s=0;l<c.length;l++){for(;s<i.length&&c[l].claim_order>=i[s].claim_order;)s++;const n=s<i.length?i[s]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode!==t&&t.appendChild(n)}function u(t,n,e){l&&!e?f(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function _(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function p(){return m(" ")}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n){for(const e in n)g(t,e,n[e])}function y(t){return Array.from(t.childNodes)}function b(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function x(t,n,e,o){return b(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?_(n):h(n)))}function v(t,n){return b(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>m(n)),!0)}function k(t){return v(t," ")}function w(t){a=t}const E=[],N=[],A=[],S=[],M=Promise.resolve();let j=!1;function B(t){A.push(t)}let C=!1;const O=new Set;function T(){if(!C){C=!0;do{for(let t=0;t<E.length;t+=1){const n=E[t];w(n),q(n.$$)}for(w(null),E.length=0;N.length;)N.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];O.has(n)||(O.add(n),n())}A.length=0}while(E.length);for(;S.length;)S.pop()();j=!1,C=!1,O.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}const I=new Set;function z(t,n){t&&t.i&&(I.delete(t),t.i(n))}function D(t,n,e,o){if(t&&t.o){if(I.has(t))return;I.add(t),undefined.c.push((()=>{I.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function H(t,n){t.d(1),n.delete(t.key)}function P(t,n,e,o,r,i,c,a,l,s,f,u){let d=t.length,h=i.length,_=d;const m={};for(;_--;)m[t[_].key]=_;const p=[],g=new Map,$=new Map;for(_=h;_--;){const t=u(r,i,_),a=e(t);let l=c.get(a);l?o&&l.p(t,n):(l=s(a,t),l.c()),g.set(a,p[_]=l),a in m&&$.set(a,Math.abs(_-m[a]))}const y=new Set,b=new Set;function x(t){z(t,1),t.m(a,f),c.set(t.key,t),f=t.first,h--}for(;d&&h;){const n=p[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(f=n.first,d--,h--):g.has(r)?!c.has(o)||y.has(o)?x(n):b.has(r)?d--:$.get(o)>$.get(r)?(b.add(o),x(n)):(y.add(r),d--):(l(e,c),d--)}for(;d--;){const n=t[d];g.has(n.key)||l(n,c)}for(;h;)x(p[h-1]);return p}function W(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function F(t){t&&t.c()}function G(t,n){t&&t.l(n)}function J(t,n,o,c){const{fragment:a,on_mount:l,on_destroy:s,after_update:f}=t.$$;a&&a.m(n,o),c||B((()=>{const n=l.map(e).filter(i);s?s.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(B)}function K(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function L(t,n){-1===t.$$.dirty[0]&&(E.push(t),j||(j=!0,M.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Q(n,e,i,c,s,f,u,h=[-1]){const _=a;w(n);const m=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(_?_.$$.context:e.context||[]),callbacks:o(),dirty:h,skip_bound:!1,root:e.target||_.$$.root};u&&u(m.root);let p=!1;if(m.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&L(n,t)),e})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!c&&c(m.ctx),e.target){if(e.hydrate){l=!0;const t=y(e.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();e.intro&&z(n.$$.fragment),J(n,e.target,e.anchor,e.customElement),l=!1,T()}w(_)}class R{$destroy(){K(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{K as A,R as S,_ as a,y as b,x as c,d,$ as e,u as f,W as g,g as h,Q as i,f as j,n as k,H as l,N as m,t as n,F as o,p,h as q,G as r,c as s,m as t,P as u,k as v,v as w,J as x,z as y,D as z};

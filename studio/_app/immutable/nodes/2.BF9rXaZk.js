import{$ as e,A as t,C as n,D as r,E as i,F as a,H as o,J as s,K as c,N as l,O as u,P as d,Q as f,R as p,S as m,T as h,U as g,W as _,X as v,Y as y,Z as b,_ as x,a as S,at as ee,c as C,ct as te,d as ne,et as w,g as re,h as ie,it as ae,j as T,k as E,lt as D,m as oe,n as se,o as O,p as ce,r as le,rt as ue,u as de,ut as fe,w as pe,y as me}from"../chunks/CscRsKLp.js";import{t as he}from"../chunks/DYl5dUZ5.js";import"../chunks/xihTtKlq.js";import{a as ge,c as _e,i as ve,l as ye,n as be,o as xe,r as Se,s as Ce,t as we,u as Te}from"../chunks/DbAq4BOX.js";import{n as Ee,r as De,t as Oe}from"../chunks/CHtH7Syt.js";function ke(e,r){let i=S(r,[`children`,`$$slots`,`$$events`,`$$legacy`]),a=[[`path`,{d:`M20 6 9 17l-5-5`}]];ye(e,C({name:`check`},()=>i,{get iconNode(){return a},children:(e,i)=>{var a=t();n(y(a),r,`default`,{},null),E(e,a)},$$slots:{default:!0}}))}function Ae(e,r){let i=S(r,[`children`,`$$slots`,`$$events`,`$$legacy`]),a=[[`path`,{d:`m6 9 6 6 6-6`}]];ye(e,C({name:`chevron-down`},()=>i,{get iconNode(){return a},children:(e,i)=>{var a=t();n(y(a),r,`default`,{},null),E(e,a)},$$slots:{default:!0}}))}function je(e,r){let i=S(r,[`children`,`$$slots`,`$$events`,`$$legacy`]),a=[[`path`,{d:`m9 18 6-6-6-6`}]];ye(e,C({name:`chevron-right`},()=>i,{get iconNode(){return a},children:(e,i)=>{var a=t();n(y(a),r,`default`,{},null),E(e,a)},$$slots:{default:!0}}))}var Me=T(`<div class="select-static svelte-orkvfs"><span class="select-value svelte-orkvfs"> </span></div> <input type="hidden"/>`,1),Ne=T(`<div class="search-box svelte-orkvfs"><input type="text" placeholder="Search..." class="search-input svelte-orkvfs"/></div>`),Pe=T(`<div role="option" tabindex="0"><span> </span> <!></div>`),Fe=T(`<div class="no-options svelte-orkvfs">No options found</div>`),Ie=T(`<div class="select-dropdown svelte-orkvfs" role="listbox" id="select-options"><!> <div class="options-list svelte-orkvfs"></div></div>`),Le=T(`<div class="select-trigger svelte-orkvfs" role="combobox" aria-haspopup="listbox" aria-controls="select-options"><span> </span> <!></div> <input type="hidden"/> <!>`,1),Re=T(`<div><!></div>`);function ze(t,n){ee(n,!0);let i=O(n,`value`,15),o=O(n,`multiple`,3,!1),c=O(n,`placeholder`,3,`Select...`),l=O(n,`disabled`,3,!1),d=O(n,`searchable`,3,!1),m=e(!1),b=e(``),S=e(void 0);_(()=>{i()===void 0&&i(o()?[]:null)});let C=w(()=>d()&&p(b)?n.options.filter(e=>e.label.toLowerCase().includes(p(b).toLowerCase())):n.options),te=w(()=>{if(o()){if(!Array.isArray(i())||i().length===0)return c();let e=n.options.filter(e=>i().includes(e.value));return e.length===0?c():e.map(e=>e.label).join(`, `)}else{let e=n.options.find(e=>e.value===i());return e?e.label:c()}});function re(){l()||(f(m,!p(m)),p(m)&&d())}function T(e,t){if(t&&t.stopPropagation(),o()){let t=Array.isArray(i())?i():[];t.includes(e)?i(t.filter(t=>t!==e)):i([...t,e])}else i(e),f(m,!1);n.onchange?.(i())}function se(e){p(m)&&p(S)&&!p(S).contains(e.target)&&f(m,!1)}_(()=>(p(m)?typeof window<`u`&&window.addEventListener(`click`,se):typeof window<`u`&&window.removeEventListener(`click`,se),()=>{typeof window<`u`&&window.removeEventListener(`click`,se)}));let le=w(()=>!o()&&n.options.length<=1),ue=w(()=>n.options[0]?.label??(p(te)===c()?c():p(te)));function fe(e){return o()?Array.isArray(i())&&i().includes(e):i()===e}var me=Re();let he;var ge=s(me),_e=e=>{var t=Me(),r=y(t),a=s(r),o=s(a,!0);D(a),D(r);var c=v(r,2);ce(c),g(e=>{oe(r,`aria-disabled`,l()||void 0),u(o,p(ue)),oe(c,`name`,n.name),ie(c,e),oe(c,`id`,n.id)},[()=>JSON.stringify(n.options[0]?.value??i())]),E(e,t)},ve=e=>{var t=Le(),o=y(t),_=s(o);let S;var ee=s(_,!0);D(_),Te(v(_,2),{get icon(){return Ae},size:16,class:`select-icon`}),D(o);var ae=v(o,2);ce(ae);var se=v(ae,2),O=e=>{var t=Ie(),n=s(t),i=e=>{var t=Ne(),n=s(t);ce(n),D(t),a(`click`,n,e=>e.stopPropagation()),ne(n,()=>p(b),e=>f(b,e)),E(e,t)};r(n,e=>{d()&&e(i)});var o=v(n,2);pe(o,21,()=>p(C),h,(e,t)=>{var n=Pe();let i;var o=s(n),c=s(o,!0);D(o);var l=v(o,2),d=e=>{Te(e,{get icon(){return ke},size:14,class:`check-icon`})},f=w(()=>fe(p(t).value));r(l,e=>{p(f)&&e(d)}),D(n),g((e,r)=>{i=x(n,1,`option-item svelte-orkvfs`,null,i,e),oe(n,`aria-selected`,r),u(c,p(t).label)},[()=>({selected:fe(p(t).value)}),()=>fe(p(t).value)]),a(`click`,n,e=>T(p(t).value,e)),E(e,n)},e=>{E(e,Fe())}),D(o),D(t),E(e,t)};r(se,e=>{p(m)&&e(O)}),g(e=>{oe(o,`aria-expanded`,p(m)),oe(o,`aria-disabled`,l()),oe(o,`tabindex`,l()?-1:0),S=x(_,1,`select-value svelte-orkvfs`,null,S,{placeholder:p(te)===c()}),u(ee,p(te)),oe(ae,`name`,n.name),ie(ae,e),oe(ae,`id`,n.id)},[()=>JSON.stringify(i())]),a(`click`,o,re),a(`keydown`,o,e=>e.key===`Enter`&&re()),E(e,t)};r(ge,e=>{p(le)?e(_e):e(ve,-1)}),D(me),de(me,e=>f(S,e),()=>p(S)),g(()=>he=x(me,1,`select-container svelte-orkvfs`,null,he,{disabled:l()})),E(t,me),ae()}d([`click`,`keydown`]);var Be=T(`<h4 class="alert-title svelte-a3mj6"> </h4>`),Ve=T(`<button class="close-btn svelte-a3mj6" aria-label="Close alert"><!></button>`),He=T(`<div role="alert"><div class="alert-icon svelte-a3mj6"><!></div> <div class="alert-content svelte-a3mj6"><!> <div class="alert-body svelte-a3mj6"><!></div></div> <!></div>`);function Ue(n,i){ee(i,!0);let o=O(i,`variant`,3,`info`),c=O(i,`closable`,3,!1),l=e(!0);function d(){f(l,!1),i.onClose?.()}let h={info:Ce,success:_e,warning:ge,danger:xe},_=w(()=>h[o()]||Ce);var b=t(),S=y(b),C=e=>{var t=He(),n=s(t);Te(s(n),{get icon(){return p(_)},size:24}),D(n);var l=v(n,2),f=s(l),h=e=>{var t=Be(),n=s(t,!0);D(t),g(()=>u(n,i.title)),E(e,t)};r(f,e=>{i.title&&e(h)});var y=v(f,2);m(s(y),()=>i.children??fe),D(y),D(l);var b=v(l,2),S=e=>{var t=Ve();Te(s(t),{get icon(){return ve},size:16}),D(t),a(`click`,t,d),E(e,t)};r(b,e=>{c()&&e(S)}),D(t),g(()=>x(t,1,`alert ${o()??``}`,`svelte-a3mj6`)),E(e,t)};r(S,e=>{p(l)&&e(C)}),E(n,b),ae()}d([`click`]);var We=T(`<div role="group"></div>`),Ge=T(`<div class="tree-node-wrapper"><div role="treeitem"><span><!></span> <!> <span class="label svelte-5vt2b0"> </span></div> <!></div>`),Ke=T(`<div class="tree-root svelte-5vt2b0" role="tree"></div>`);function qe(e,t){ee(t,!0);let n=(e,d=fe,f=fe)=>{let m=w(()=>d().children&&d().children.length>0),_=w(()=>o().has(d().id)),y=w(()=>i()===d().id);var b=Ge(),S=s(b);let ee;var C=s(S),te=s(C);{let e=w(()=>p(_)?Ae:je),t=w(()=>p(y)?`icon-selected`:`icon-default`);Te(te,{get icon(){return p(e)},size:16,get class(){return p(t)}})}D(C);var ne=v(C,2),ie=e=>{Te(e,{get icon(){return d().icon},size:16,class:`node-icon`})};r(ne,e=>{d().icon&&e(ie)});var ae=v(ne,2),T=s(ae,!0);D(ae),D(S);var se=v(S,2),O=e=>{var t=We();pe(t,21,()=>d().children,e=>e.id,(e,t)=>{n(e,()=>p(t),()=>f()+1)}),D(t),E(e,t)};r(se,e=>{p(m)&&p(_)&&e(O)}),D(b),g(()=>{x(S,1,`tree-node-row ${p(y)?`selected`:``}`,`svelte-5vt2b0`),oe(S,`tabindex`,p(y)||i()===void 0&&d().id===t.data[0]?.id?0:-1),oe(S,`aria-selected`,p(y)),oe(S,`aria-level`,f()+1),oe(S,`aria-expanded`,p(m)?p(_):void 0),ee=re(S,``,ee,{"padding-left":`${f()*1.5+.5}rem`}),x(C,1,`expander ${p(m)?`visible`:`invisible`}`,`svelte-5vt2b0`),u(T,d().label)}),a(`click`,S,e=>l(d(),e)),a(`keydown`,S,e=>h(d(),e)),a(`click`,C,e=>p(m)&&c(d(),e)),E(e,b)},i=O(t,`selectedId`,15,void 0),o=O(t,`expandedIds`,31,()=>b(new Set));function c(e,n){n.stopPropagation();let r=o().has(e.id),i=new Set(o());r?i.delete(e.id):i.add(e.id),o(i),t.onToggle?.(e,!r)}function l(e,n){n.stopPropagation(),i(e.id),t.onSelect?.(e)}function d(e){let t=[],n=e=>{if(t.push(e),e.children?.length&&o().has(e.id))for(let t of e.children)n(t)};for(let t of e)n(t);return t}function f(e,t,n){for(let r of e){if(r.id===t)return n;if(r.children?.length){let e=f(r.children,t,r);if(e!==void 0||r.children.some(e=>e.id===t))return r.children.some(e=>e.id===t)?r:e}}}function m(e,n){let r=new Set(o());n?r.add(e.id):r.delete(e.id),o(r),t.onToggle?.(e,n)}function h(e,n){let r=!!e.children?.length,a=o().has(e.id),s=d(t.data),c=s.findIndex(t=>t.id===e.id);if(n.key===`Enter`||n.key===` `){n.preventDefault(),i(e.id),t.onSelect?.(e);return}if(n.key===`ArrowDown`){n.preventDefault();let e=s[c+1];e&&i(e.id);return}if(n.key===`ArrowUp`){n.preventDefault();let e=s[c-1];e&&i(e.id);return}if(n.key===`ArrowRight`){n.preventDefault(),r&&!a?m(e,!0):r&&e.children?.[0]&&i(e.children[0].id);return}if(n.key===`ArrowLeft`)if(n.preventDefault(),r&&a)m(e,!1);else{let n=f(t.data,e.id);n&&i(n.id)}}var _=Ke();pe(_,21,()=>t.data,e=>e.id,(e,t)=>{n(e,()=>p(t),()=>0)}),D(_),E(e,_),ae()}d([`click`,`keydown`]);var Je=T(`<div class="panel-actions svelte-wn9ehm"><!></div>`),Ye=T(`<section><header class="panel-header svelte-wn9ehm"><div><!> <span> </span></div> <!></header> <div class="panel-content svelte-wn9ehm"><!></div></section>`);function Xe(e,t){let n=O(t,`titleTransform`,3,`uppercase`),i=O(t,`class`,3,``);var a=Ye(),o=s(a),c=s(o);let l;var d=s(c),f=e=>{Te(e,{get icon(){return t.icon},size:14})};r(d,e=>{t.icon&&e(f)});var p=v(d,2),h=s(p,!0);D(p),D(c);var _=v(c,2),y=e=>{var n=Je();m(s(n),()=>t.actions),D(n),E(e,n)};r(_,e=>{t.actions&&e(y)}),D(o);var b=v(o,2);m(s(b),()=>t.children),D(b),D(a),g(()=>{x(a,1,`panel ${i()??``}`,`svelte-wn9ehm`),l=x(c,1,`panel-title svelte-wn9ehm`,null,l,{"preserve-case":n()===`none`}),u(h,t.title)}),E(e,a)}function Ze(e,r){let i=S(r,[`children`,`$$slots`,`$$events`,`$$legacy`]),a=[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`}]];be(e,C({name:`play`},()=>i,{get iconNode(){return a},children:(e,i)=>{var a=t();n(y(a),r,`default`,{},null),E(e,a)},$$slots:{default:!0}}))}function Qe(e,r){let i=S(r,[`children`,`$$slots`,`$$events`,`$$legacy`]),a=[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`}],[`path`,{d:`M3 3v5h5`}]];be(e,C({name:`rotate-ccw`},()=>i,{get iconNode(){return a},children:(e,i)=>{var a=t();n(y(a),r,`default`,{},null),E(e,a)},$$slots:{default:!0}}))}var $e=[],et=[];(()=>{let e=`lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o`.split(`,`).map(e=>e?parseInt(e,36):1);for(let t=0,n=0;t<e.length;t++)(t%2?et:$e).push(n+=e[t])})();function tt(e){if(e<768)return!1;for(let t=0,n=$e.length;;){let r=t+n>>1;if(e<$e[r])n=r;else if(e>=et[r])t=r+1;else return!0;if(t==n)return!1}}function nt(e){return e>=127462&&e<=127487}var rt=8205;function it(e,t,n=!0,r=!0){return(n?at:ot)(e,t,r)}function at(e,t,n){if(t==e.length)return t;t&&ct(e.charCodeAt(t))&&lt(e.charCodeAt(t-1))&&t--;let r=st(e,t);for(t+=ut(r);t<e.length;){let i=st(e,t);if(r==rt||i==rt||n&&tt(i))t+=ut(i),r=i;else if(nt(i)){let n=0,r=t-2;for(;r>=0&&nt(st(e,r));)n++,r-=2;if(n%2==0)break;t+=2}else break}return t}function ot(e,t,n){for(;t>1;){let r=at(e,t-2,n);if(r<t)return r;t--}return 0}function st(e,t){let n=e.charCodeAt(t);if(!lt(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return ct(r)?(n-55296<<10)+(r-56320)+65536:n}function ct(e){return e>=56320&&e<57344}function lt(e){return e>=55296&&e<56320}function ut(e){return e<65536?1:2}var k=class e{lineAt(e){if(e<0||e>this.length)throw RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,n){[e,t]=bt(this,e,t);let r=[];return this.decompose(0,e,r,2),n.length&&n.decompose(0,n.length,r,3),this.decompose(t,this.length,r,1),ft.from(r,this.length-(t-e)+n.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=bt(this,e,t);let n=[];return this.decompose(e,t,n,0),ft.from(n,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),n=this.length-this.scanIdentical(e,-1),r=new gt(this),i=new gt(e);for(let e=t,a=t;;){if(r.next(e),i.next(e),e=0,r.lineBreak!=i.lineBreak||r.done!=i.done||r.value!=i.value)return!1;if(a+=r.value.length,r.done||a>=n)return!0}}iter(e=1){return new gt(this,e)}iterRange(e,t=this.length){return new _t(this,e,t)}iterLines(e,t){let n;if(e==null)n=this.iter();else{t??=this.lines+1;let r=this.line(e).from;n=this.iterRange(r,Math.max(r,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new vt(n)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(t){if(t.length==0)throw RangeError(`A document must have at least one line`);return t.length==1&&!t[0]?e.empty:t.length<=32?new dt(t):ft.from(dt.split(t,[]))}},dt=class e extends k{constructor(e,t=pt(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.text[i],o=r+a.length;if((t?n:o)>=e)return new yt(r,o,n,a);r=o+1,n++}}decompose(t,n,r,i){let a=t<=0&&n>=this.length?this:new e(ht(this.text,t,n),Math.min(n,this.length)-Math.max(0,t));if(i&1){let t=r.pop(),n=mt(a.text,t.text.slice(),0,a.length);if(n.length<=32)r.push(new e(n,t.length+a.length));else{let t=n.length>>1;r.push(new e(n.slice(0,t)),new e(n.slice(t)))}}else r.push(a)}replace(t,n,r){if(!(r instanceof e))return super.replace(t,n,r);[t,n]=bt(this,t,n);let i=mt(this.text,mt(r.text,ht(this.text,0,t)),n),a=this.length+r.length-(n-t);return i.length<=32?new e(i,a):ft.from(e.split(i,[]),a)}sliceString(e,t=this.length,n=`
`){[e,t]=bt(this,e,t);let r=``;for(let i=0,a=0;i<=t&&a<this.text.length;a++){let o=this.text[a],s=i+o.length;i>e&&a&&(r+=n),e<s&&t>i&&(r+=o.slice(Math.max(0,e-i),t-i)),i=s+1}return r}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(t,n){let r=[],i=-1;for(let a of t)r.push(a),i+=a.length+1,r.length==32&&(n.push(new e(r,i)),r=[],i=-1);return i>-1&&n.push(new e(r,i)),n}},ft=class e extends k{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let t of e)this.lines+=t.lines}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.children[i],o=r+a.length,s=n+a.lines-1;if((t?s:o)>=e)return a.lineInner(e,t,n,r);r=o+1,n=s+1}}decompose(e,t,n,r){for(let i=0,a=0;a<=t&&i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(e<=s&&t>=a){let i=r&(a<=e|(s>=t?2:0));a>=e&&s<=t&&!i?n.push(o):o.decompose(e-a,t-a,n,i)}a=s+1}}replace(t,n,r){if([t,n]=bt(this,t,n),r.lines<this.lines)for(let i=0,a=0;i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(t>=a&&n<=s){let c=o.replace(t-a,n-a,r),l=this.lines-o.lines+c.lines;if(c.lines<l>>4&&c.lines>l>>6){let a=this.children.slice();return a[i]=c,new e(a,this.length-(n-t)+r.length)}return super.replace(a,s,c)}a=s+1}return super.replace(t,n,r)}sliceString(e,t=this.length,n=`
`){[e,t]=bt(this,e,t);let r=``;for(let i=0,a=0;i<this.children.length&&a<=t;i++){let o=this.children[i],s=a+o.length;a>e&&i&&(r+=n),e<s&&t>a&&(r+=o.sliceString(e-a,t-a,n)),a=s+1}return r}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(t,n){if(!(t instanceof e))return 0;let r=0,[i,a,o,s]=n>0?[0,0,this.children.length,t.children.length]:[this.children.length-1,t.children.length-1,-1,-1];for(;;i+=n,a+=n){if(i==o||a==s)return r;let e=this.children[i],c=t.children[a];if(e!=c)return r+e.scanIdentical(c,n);r+=e.length+1}}static from(t,n=t.reduce((e,t)=>e+t.length+1,-1)){let r=0;for(let e of t)r+=e.lines;if(r<32){let e=[];for(let n of t)n.flatten(e);return new dt(e,n)}let i=Math.max(32,r>>5),a=i<<1,o=i>>1,s=[],c=0,l=-1,u=[];function d(t){let n;if(t.lines>a&&t instanceof e)for(let e of t.children)d(e);else t.lines>o&&(c>o||!c)?(f(),s.push(t)):t instanceof dt&&c&&(n=u[u.length-1])instanceof dt&&t.lines+n.lines<=32?(c+=t.lines,l+=t.length+1,u[u.length-1]=new dt(n.text.concat(t.text),n.length+1+t.length)):(c+t.lines>i&&f(),c+=t.lines,l+=t.length+1,u.push(t))}function f(){c!=0&&(s.push(u.length==1?u[0]:e.from(u,l)),l=-1,c=u.length=0)}for(let e of t)d(e);return f(),s.length==1?s[0]:new e(s,n)}};k.empty=new dt([``],0);function pt(e){let t=-1;for(let n of e)t+=n.length+1;return t}function mt(e,t,n=0,r=1e9){for(let i=0,a=0,o=!0;a<e.length&&i<=r;a++){let s=e[a],c=i+s.length;c>=n&&(c>r&&(s=s.slice(0,r-i)),i<n&&(s=s.slice(n-i)),o?(t[t.length-1]+=s,o=!1):t.push(s)),i=c+1}return t}function ht(e,t,n){return mt(e,[``],t,n)}var gt=class{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value=``,this.nodes=[e],this.offsets=[t>0?1:(e instanceof dt?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let n=this.nodes.length-1,r=this.nodes[n],i=this.offsets[n],a=i>>1,o=r instanceof dt?r.text.length:r.children.length;if(a==(t>0?o:0)){if(n==0)return this.done=!0,this.value=``,this;t>0&&this.offsets[n-1]++,this.nodes.pop(),this.offsets.pop()}else if((i&1)==(t>0?0:1)){if(this.offsets[n]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(r instanceof dt){let i=r.text[a+(t<0?-1:0)];if(this.offsets[n]+=t,i.length>Math.max(0,e))return this.value=e==0?i:t>0?i.slice(e):i.slice(0,i.length-e),this;e-=i.length}else{let i=r.children[a+(t<0?-1:0)];e>i.length?(e-=i.length,this.offsets[n]+=t):(t<0&&this.offsets[n]--,this.nodes.push(i),this.offsets.push(t>0?1:(i instanceof dt?i.text.length:i.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}},_t=class{constructor(e,t,n){this.value=``,this.done=!1,this.cursor=new gt(e,t>n?-1:1),this.pos=t>n?e.length:0,this.from=Math.min(t,n),this.to=Math.max(t,n)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value=``,this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let n=t<0?this.pos-this.from:this.to-this.pos;e>n&&(e=n),n-=e;let{value:r}=this.cursor.next(e);return this.pos+=(r.length+e)*t,this.value=r.length<=n?r:t<0?r.slice(r.length-n):r.slice(0,n),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=``}},vt=class{constructor(e){this.inner=e,this.afterBreak=!0,this.value=``,this.done=!1}next(e=0){let{done:t,lineBreak:n,value:r}=this.inner.next(e);return t&&this.afterBreak?(this.value=``,this.afterBreak=!1):t?(this.done=!0,this.value=``):n?this.afterBreak?this.value=``:(this.afterBreak=!0,this.next()):(this.value=r,this.afterBreak=!1),this}get lineBreak(){return!1}};typeof Symbol<`u`&&(k.prototype[Symbol.iterator]=function(){return this.iter()},gt.prototype[Symbol.iterator]=_t.prototype[Symbol.iterator]=vt.prototype[Symbol.iterator]=function(){return this});var yt=class{constructor(e,t,n,r){this.from=e,this.to=t,this.number=n,this.text=r}get length(){return this.to-this.from}};function bt(e,t,n){return t=Math.max(0,Math.min(e.length,t)),[t,Math.max(t,Math.min(e.length,n))]}function xt(e,t,n=!0,r=!0){return it(e,t,n,r)}function St(e){return e>=56320&&e<57344}function Ct(e){return e>=55296&&e<56320}function wt(e,t){let n=e.charCodeAt(t);if(!Ct(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return St(r)?(n-55296<<10)+(r-56320)+65536:n}function Tt(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10)+55296,(e&1023)+56320))}function Et(e){return e<65536?1:2}var Dt=/\r\n?|\n/,Ot=(function(e){return e[e.Simple=0]=`Simple`,e[e.TrackDel=1]=`TrackDel`,e[e.TrackBefore=2]=`TrackBefore`,e[e.TrackAfter=3]=`TrackAfter`,e})(Ot||={}),kt=class e{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t+1];e+=n<0?this.sections[t]:n}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,n=0,r=0;t<this.sections.length;){let i=this.sections[t++],a=this.sections[t++];a<0?(e(n,r,i),r+=i):r+=a,n+=i}}iterChangedRanges(e,t=!1){Nt(this,e,t)}get invertedDesc(){let t=[];for(let e=0;e<this.sections.length;){let n=this.sections[e++],r=this.sections[e++];r<0?t.push(n,r):t.push(r,n)}return new e(t)}composeDesc(e){return this.empty?e:e.empty?this:Ft(this,e)}mapDesc(e,t=!1){return e.empty?this:Pt(this,e,t)}mapPos(e,t=-1,n=Ot.Simple){let r=0,i=0;for(let a=0;a<this.sections.length;){let o=this.sections[a++],s=this.sections[a++],c=r+o;if(s<0){if(c>e)return i+(e-r);i+=o}else{if(n!=Ot.Simple&&c>=e&&(n==Ot.TrackDel&&r<e&&c>e||n==Ot.TrackBefore&&r<e||n==Ot.TrackAfter&&c>e))return null;if(c>e||c==e&&t<0&&!o)return e==r||t<0?i:i+s;i+=s}r=c}if(e>r)throw RangeError(`Position ${e} is out of range for changeset of length ${r}`);return i}touchesRange(e,t=e){for(let n=0,r=0;n<this.sections.length&&r<=t;){let i=this.sections[n++],a=this.sections[n++],o=r+i;if(a>=0&&r<=t&&o>=e)return r<e&&o>t?`cover`:!0;r=o}return!1}toString(){let e=``;for(let t=0;t<this.sections.length;){let n=this.sections[t++],r=this.sections[t++];e+=(e?` `:``)+n+(r>=0?`:`+r:``)}return e}toJSON(){return this.sections}static fromJSON(t){if(!Array.isArray(t)||t.length%2||t.some(e=>typeof e!=`number`))throw RangeError(`Invalid JSON representation of ChangeDesc`);return new e(t)}static create(t){return new e(t)}},At=class e extends kt{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw RangeError(`Applying change set to a document with the wrong length`);return Nt(this,(t,n,r,i,a)=>e=e.replace(r,r+(n-t),a),!1),e}mapDesc(e,t=!1){return Pt(this,e,t,!0)}invert(t){let n=this.sections.slice(),r=[];for(let e=0,i=0;e<n.length;e+=2){let a=n[e],o=n[e+1];if(o>=0){n[e]=o,n[e+1]=a;let s=e>>1;for(;r.length<s;)r.push(k.empty);r.push(a?t.slice(i,i+a):k.empty)}i+=a}return new e(n,r)}compose(e){return this.empty?e:e.empty?this:Ft(this,e,!0)}map(e,t=!1){return e.empty?this:Pt(this,e,t,!0)}iterChanges(e,t=!1){Nt(this,e,t)}get desc(){return kt.create(this.sections)}filter(t){let n=[],r=[],i=[],a=new It(this);done:for(let e=0,o=0;;){let s=e==t.length?1e9:t[e++];for(;o<s||o==s&&a.len==0;){if(a.done)break done;let e=Math.min(a.len,s-o);jt(i,e,-1);let t=a.ins==-1?-1:a.off==0?a.ins:0;jt(n,e,t),t>0&&Mt(r,n,a.text),a.forward(e),o+=e}let c=t[e++];for(;o<c;){if(a.done)break done;let e=Math.min(a.len,c-o);jt(n,e,-1),jt(i,e,a.ins==-1?-1:a.off==0?a.ins:0),a.forward(e),o+=e}}return{changes:new e(n,r),filtered:kt.create(i)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t],r=this.sections[t+1];r<0?e.push(n):r==0?e.push([n]):e.push([n].concat(this.inserted[t>>1].toJSON()))}return e}static of(t,n,r){let i=[],a=[],o=0,s=null;function c(t=!1){if(!t&&!i.length)return;o<n&&jt(i,n-o,-1);let r=new e(i,a);s=s?s.compose(r.map(s)):r,i=[],a=[],o=0}function l(t){if(Array.isArray(t))for(let e of t)l(e);else if(t instanceof e){if(t.length!=n)throw RangeError(`Mismatched change set length (got ${t.length}, expected ${n})`);c(),s=s?s.compose(t.map(s)):t}else{let{from:e,to:s=e,insert:l}=t;if(e>s||e<0||s>n)throw RangeError(`Invalid change range ${e} to ${s} (in doc of length ${n})`);let u=l?typeof l==`string`?k.of(l.split(r||Dt)):l:k.empty,d=u.length;if(e==s&&d==0)return;e<o&&c(),e>o&&jt(i,e-o,-1),jt(i,s-e,d),Mt(a,i,u),o=s}}return l(t),c(!s),s}static empty(t){return new e(t?[t,-1]:[],[])}static fromJSON(t){if(!Array.isArray(t))throw RangeError(`Invalid JSON representation of ChangeSet`);let n=[],r=[];for(let e=0;e<t.length;e++){let i=t[e];if(typeof i==`number`)n.push(i,-1);else if(!Array.isArray(i)||typeof i[0]!=`number`||i.some((e,t)=>t&&typeof e!=`string`))throw RangeError(`Invalid JSON representation of ChangeSet`);else if(i.length==1)n.push(i[0],0);else{for(;r.length<e;)r.push(k.empty);r[e]=k.of(i.slice(1)),n.push(i[0],r[e].length)}}return new e(n,r)}static createSet(t,n){return new e(t,n)}};function jt(e,t,n,r=!1){if(t==0&&n<=0)return;let i=e.length-2;i>=0&&n<=0&&n==e[i+1]?e[i]+=t:i>=0&&t==0&&e[i]==0?e[i+1]+=n:r?(e[i]+=t,e[i+1]+=n):e.push(t,n)}function Mt(e,t,n){if(n.length==0)return;let r=t.length-2>>1;if(r<e.length)e[e.length-1]=e[e.length-1].append(n);else{for(;e.length<r;)e.push(k.empty);e.push(n)}}function Nt(e,t,n){let r=e.inserted;for(let i=0,a=0,o=0;o<e.sections.length;){let s=e.sections[o++],c=e.sections[o++];if(c<0)i+=s,a+=s;else{let l=i,u=a,d=k.empty;for(;l+=s,u+=c,c&&r&&(d=d.append(r[o-2>>1])),!(n||o==e.sections.length||e.sections[o+1]<0);)s=e.sections[o++],c=e.sections[o++];t(i,l,a,u,d),i=l,a=u}}}function Pt(e,t,n,r=!1){let i=[],a=r?[]:null,o=new It(e),s=new It(t);for(let e=-1;;)if(o.done&&s.len||s.done&&o.len)throw Error(`Mismatched change set lengths`);else if(o.ins==-1&&s.ins==-1){let e=Math.min(o.len,s.len);jt(i,e,-1),o.forward(e),s.forward(e)}else if(s.ins>=0&&(o.ins<0||e==o.i||o.off==0&&(s.len<o.len||s.len==o.len&&!n))){let t=s.len;for(jt(i,s.ins,-1);t;){let n=Math.min(o.len,t);o.ins>=0&&e<o.i&&o.len<=n&&(jt(i,0,o.ins),a&&Mt(a,i,o.text),e=o.i),o.forward(n),t-=n}s.next()}else if(o.ins>=0){let t=0,n=o.len;for(;n;)if(s.ins==-1){let e=Math.min(n,s.len);t+=e,n-=e,s.forward(e)}else if(s.ins==0&&s.len<n)n-=s.len,s.next();else break;jt(i,t,e<o.i?o.ins:0),a&&e<o.i&&Mt(a,i,o.text),e=o.i,o.forward(o.len-n)}else if(o.done&&s.done)return a?At.createSet(i,a):kt.create(i);else throw Error(`Mismatched change set lengths`)}function Ft(e,t,n=!1){let r=[],i=n?[]:null,a=new It(e),o=new It(t);for(let e=!1;;)if(a.done&&o.done)return i?At.createSet(r,i):kt.create(r);else if(a.ins==0)jt(r,a.len,0,e),a.next();else if(o.len==0&&!o.done)jt(r,0,o.ins,e),i&&Mt(i,r,o.text),o.next();else if(a.done||o.done)throw Error(`Mismatched change set lengths`);else{let t=Math.min(a.len2,o.len),n=r.length;if(a.ins==-1){let n=o.ins==-1?-1:o.off?0:o.ins;jt(r,t,n,e),i&&n&&Mt(i,r,o.text)}else o.ins==-1?(jt(r,a.off?0:a.len,t,e),i&&Mt(i,r,a.textBit(t))):(jt(r,a.off?0:a.len,o.off?0:o.ins,e),i&&!o.off&&Mt(i,r,o.text));e=(a.ins>t||o.ins>=0&&o.len>t)&&(e||r.length>n),a.forward2(t),o.forward(t)}}var It=class{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?k.empty:e[t]}textBit(e){let{inserted:t}=this.set,n=this.i-2>>1;return n>=t.length&&!e?k.empty:t[n].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}},Lt=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.flags=n,this.goalColumn=r}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get undirectional(){return(this.flags&64)>0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}map(t,n=-1){let r,i;return this.empty?r=i=t.mapPos(this.from,n):(r=t.mapPos(this.from,1),i=t.mapPos(this.to,-1)),r==this.from&&i==this.to?this:new e(r,i,this.flags,this.goalColumn)}extend(e,t=e,n=0){if(e<=this.anchor&&t>=this.anchor)return A.range(e,t,void 0,void 0,n);let r=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return A.range(this.anchor,r,void 0,void 0,n)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&this.goalColumn==e.goalColumn&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!=`number`||typeof e.head!=`number`)throw RangeError(`Invalid JSON representation for SelectionRange`);return A.range(e.anchor,e.head)}static create(t,n,r,i){return new e(t,n,r,i)}},A=class e{constructor(e,t){this.ranges=e,this.mainIndex=t}map(t,n=-1){return t.empty?this:e.create(this.ranges.map(e=>e.map(t,n)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let n=0;n<this.ranges.length;n++)if(!this.ranges[n].eq(e.ranges[n],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new e([this.main],0)}addRange(t,n=!0){return e.create([t].concat(this.ranges),n?0:this.mainIndex+1)}replaceRange(t,n=this.mainIndex){let r=this.ranges.slice();return r[n]=t,e.create(r,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(t){if(!t||!Array.isArray(t.ranges)||typeof t.main!=`number`||t.main>=t.ranges.length)throw RangeError(`Invalid JSON representation for EditorSelection`);return new e(t.ranges.map(e=>Lt.fromJSON(e)),t.main)}static single(t,n=t){return new e([e.range(t,n)],0)}static create(t,n=0){if(t.length==0)throw RangeError(`A selection needs at least one range`);for(let r=0,i=0;i<t.length;i++){let a=t[i];if(a.empty?a.from<=r:a.from<r)return e.normalized(t.slice(),n);r=a.to}return new e(t,n)}static cursor(e,t=0,n,r){return Lt.create(e,e,(t==0?0:t<0?8:16)|(n==null?7:Math.min(6,n)),r)}static range(e,t,n,r,i){let a=r==null?7:Math.min(6,r);return!i&&e!=t&&(i=t<e?1:-1),i&&(a|=i<0?8:16),t<e?Lt.create(t,e,a|32,n):Lt.create(e,t,a,n)}static undirectionalRange(e,t){return Lt.create(e,t,64,void 0)}static normalized(t,n=0){let r=t[n];t.sort((e,t)=>e.from-t.from),n=t.indexOf(r);for(let r=1;r<t.length;r++){let i=t[r],a=t[r-1];if(i.empty?i.from<=a.to:i.from<a.to){let o=a.from,s=Math.max(i.to,a.to);r<=n&&n--,t.splice(--r,2,i.anchor>i.head?e.range(s,o):e.range(o,s))}}return new e(t,n)}};function Rt(e,t){for(let n of e.ranges)if(n.to>t)throw RangeError(`Selection points outside of document`)}var zt=0,j=class e{constructor(e,t,n,r,i){this.combine=e,this.compareInput=t,this.compare=n,this.isStatic=r,this.id=zt++,this.default=e([]),this.extensions=typeof i==`function`?i(this):i}get reader(){return this}static define(t={}){return new e(t.combine||(e=>e),t.compareInput||((e,t)=>e===t),t.compare||(t.combine?(e,t)=>e===t:Bt),!!t.static,t.enables)}of(e){return new Vt([],this,0,e)}compute(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new Vt(e,this,1,t)}computeN(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new Vt(e,this,2,t)}from(e,t){return t||=e=>e,this.compute([e],n=>t(n.field(e)))}};function Bt(e,t){return e==t||e.length==t.length&&e.every((e,n)=>e===t[n])}var Vt=class{constructor(e,t,n,r){this.dependencies=e,this.facet=t,this.type=n,this.value=r,this.id=zt++}dynamicSlot(e){let t=this.value,n=this.facet.compareInput,r=this.id,i=e[r]>>1,a=this.type==2,o=!1,s=!1,c=[];for(let t of this.dependencies)t==`doc`?o=!0:t==`selection`?s=!0:(e[t.id]??1)&1||c.push(e[t.id]);return{create(e){return e.values[i]=t(e),1},update(e,r){if(o&&r.docChanged||s&&(r.docChanged||r.selection)||Ut(e,c)){let r=t(e);if(a?!Ht(r,e.values[i],n):!n(r,e.values[i]))return e.values[i]=r,1}return 0},reconfigure:(e,o)=>{let s,c=o.config.address[r];if(c!=null){let r=nn(o,c);if(this.dependencies.every(t=>t instanceof j?o.facet(t)===e.facet(t):t instanceof Kt?o.field(t,!1)==e.field(t,!1):!0)||(a?Ht(s=t(e),r,n):n(s=t(e),r)))return e.values[i]=r,0}else s=t(e);return e.values[i]=s,1}}}};function Ht(e,t,n){if(e.length!=t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function Ut(e,t){let n=!1;for(let r of t)tn(e,r)&1&&(n=!0);return n}function Wt(e,t,n){let r=n.map(t=>e[t.id]),i=n.map(e=>e.type),a=r.filter(e=>!(e&1)),o=e[t.id]>>1;function s(e){let n=[];for(let t=0;t<r.length;t++){let a=nn(e,r[t]);if(i[t]==2)for(let e of a)n.push(e);else n.push(a)}return t.combine(n)}return{create(e){for(let t of r)tn(e,t);return e.values[o]=s(e),1},update(e,n){if(!Ut(e,a))return 0;let r=s(e);return t.compare(r,e.values[o])?0:(e.values[o]=r,1)},reconfigure(e,i){let a=Ut(e,r),c=i.config.facets[t.id],l=i.facet(t);if(c&&!a&&Bt(n,c))return e.values[o]=l,0;let u=s(e);return t.compare(u,l)?(e.values[o]=l,0):(e.values[o]=u,1)}}}var Gt=j.define({static:!0}),Kt=class e{constructor(e,t,n,r,i){this.id=e,this.createF=t,this.updateF=n,this.compareF=r,this.spec=i,this.provides=void 0}static define(t){let n=new e(zt++,t.create,t.update,t.compare||((e,t)=>e===t),t);return t.provide&&(n.provides=t.provide(n)),n}create(e){return(e.facet(Gt).find(e=>e.field==this)?.create||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:e=>(e.values[t]=this.create(e),1),update:(e,n)=>{let r=e.values[t],i=this.updateF(r,n);return this.compareF(r,i)?0:(e.values[t]=i,1)},reconfigure:(e,n)=>{let r=e.facet(Gt),i=n.facet(Gt),a;return(a=r.find(e=>e.field==this))&&a!=i.find(e=>e.field==this)?(e.values[t]=a.create(e),1):n.config.address[this.id]==null?(e.values[t]=this.create(e),1):(e.values[t]=n.field(this),0)}}}init(e){return[this,Gt.of({field:this,create:e})]}get extension(){return this}},qt={lowest:4,low:3,default:2,high:1,highest:0};function Jt(e){return t=>new Xt(t,e)}var Yt={highest:Jt(qt.highest),high:Jt(qt.high),default:Jt(qt.default),low:Jt(qt.low),lowest:Jt(qt.lowest)},Xt=class{constructor(e,t){this.inner=e,this.prec=t}},Zt=class e{of(e){return new Qt(this,e)}reconfigure(t){return e.reconfigure.of({compartment:this,extension:t})}get(e){return e.config.compartments.get(this)}},Qt=class{constructor(e,t){this.compartment=e,this.inner=t}},$t=class e{constructor(e,t,n,r,i,a){for(this.base=e,this.compartments=t,this.dynamicSlots=n,this.address=r,this.staticValues=i,this.facets=a,this.statusTemplate=[];this.statusTemplate.length<n.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(t,n,r){let i=[],a=Object.create(null),o=new Map;for(let e of en(t,n,o))e instanceof Kt?i.push(e):(a[e.facet.id]||(a[e.facet.id]=[])).push(e);let s=Object.create(null),c=[],l=[];for(let e of i)s[e.id]=l.length<<1,l.push(t=>e.slot(t));let u=r?.config.facets;for(let e in a){let t=a[e],n=t[0].facet,i=u&&u[e]||[];if(t.every(e=>e.type==0))if(s[n.id]=c.length<<1|1,Bt(i,t))c.push(r.facet(n));else{let e=n.combine(t.map(e=>e.value));c.push(r&&n.compare(e,r.facet(n))?r.facet(n):e)}else{for(let e of t)e.type==0?(s[e.id]=c.length<<1|1,c.push(e.value)):(s[e.id]=l.length<<1,l.push(t=>e.dynamicSlot(t)));s[n.id]=l.length<<1,l.push(e=>Wt(e,n,t))}}let d=l.map(e=>e(s));return new e(t,o,d,s,c,a)}};function en(e,t,n){let r=[[],[],[],[],[]],i=new Map;function a(e,o){let s=i.get(e);if(s!=null){if(s<=o)return;let t=r[s].indexOf(e);t>-1&&r[s].splice(t,1),e instanceof Qt&&n.delete(e.compartment)}if(i.set(e,o),Array.isArray(e))for(let t of e)a(t,o);else if(e instanceof Qt){if(n.has(e.compartment))throw RangeError(`Duplicate use of compartment in extensions`);let r=t.get(e.compartment)||e.inner;n.set(e.compartment,r),a(r,o)}else if(e instanceof Xt)a(e.inner,e.prec);else if(e instanceof Kt)r[o].push(e),e.provides&&a(e.provides,o);else if(e instanceof Vt)r[o].push(e),e.facet.extensions&&a(e.facet.extensions,qt.default);else{let t=e.extension;if(!t)throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);a(t,o)}}return a(e,qt.default),r.reduce((e,t)=>e.concat(t))}function tn(e,t){if(t&1)return 2;let n=t>>1,r=e.status[n];if(r==4)throw Error(`Cyclic dependency between fields and/or facets`);if(r&2)return r;e.status[n]=4;let i=e.computeSlot(e,e.config.dynamicSlots[n]);return e.status[n]=2|i}function nn(e,t){return t&1?e.config.staticValues[t>>1]:e.values[t>>1]}var rn=j.define(),an=j.define({combine:e=>e.some(e=>e),static:!0}),on=j.define({combine:e=>e.length?e[0]:void 0,static:!0}),sn=j.define(),cn=j.define(),ln=j.define(),un=j.define({combine:e=>e.length?e[0]:!1}),dn=class{constructor(e,t){this.type=e,this.value=t}static define(){return new fn}},fn=class{of(e){return new dn(this,e)}},pn=class{constructor(e){this.map=e}of(e){return new M(this,e)}},M=class e{constructor(e,t){this.type=e,this.value=t}map(t){let n=this.type.map(this.value,t);return n===void 0?void 0:n==this.value?this:new e(this.type,n)}is(e){return this.type==e}static define(e={}){return new pn(e.map||(e=>e))}static mapEffects(e,t){if(!e.length)return e;let n=[];for(let r of e){let e=r.map(t);e&&n.push(e)}return n}};M.reconfigure=M.define(),M.appendConfig=M.define();var mn=class e{constructor(t,n,r,i,a,o){this.startState=t,this.changes=n,this.selection=r,this.effects=i,this.annotations=a,this.scrollIntoView=o,this._doc=null,this._state=null,r&&Rt(r,n.newLength),a.some(t=>t.type==e.time)||(this.annotations=a.concat(e.time.of(Date.now())))}static create(t,n,r,i,a,o){return new e(t,n,r,i,a,o)}get newDoc(){return this._doc||=this.changes.apply(this.startState.doc)}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(t){let n=this.annotation(e.userEvent);return!!(n&&(n==t||n.length>t.length&&n.slice(0,t.length)==t&&n[t.length]==`.`))}};mn.time=dn.define(),mn.userEvent=dn.define(),mn.addToHistory=dn.define(),mn.remote=dn.define();function hn(e,t){let n=[];for(let r=0,i=0;;){let a,o;if(r<e.length&&(i==t.length||t[i]>=e[r]))a=e[r++],o=e[r++];else if(i<t.length)a=t[i++],o=t[i++];else return n;!n.length||n[n.length-1]<a?n.push(a,o):n[n.length-1]<o&&(n[n.length-1]=o)}}function gn(e,t,n){let r,i,a;return n?(r=t.changes,i=At.empty(t.changes.length),a=e.changes.compose(t.changes)):(r=t.changes.map(e.changes),i=e.changes.mapDesc(t.changes,!0),a=e.changes.compose(r)),{changes:a,selection:t.selection?t.selection.map(i):e.selection?.map(r),effects:M.mapEffects(e.effects,r).concat(M.mapEffects(t.effects,i)),annotations:e.annotations.length?e.annotations.concat(t.annotations):t.annotations,scrollIntoView:e.scrollIntoView||t.scrollIntoView}}function _n(e,t,n){let r=t.selection,i=Sn(t.annotations);return t.userEvent&&(i=i.concat(mn.userEvent.of(t.userEvent))),{changes:t.changes instanceof At?t.changes:At.of(t.changes||[],n,e.facet(on)),selection:r&&(r instanceof A?r:A.single(r.anchor,r.head)),effects:Sn(t.effects),annotations:i,scrollIntoView:!!t.scrollIntoView}}function vn(e,t,n){let r=_n(e,t.length?t[0]:{},e.doc.length);t.length&&t[0].filter===!1&&(n=!1);for(let i=1;i<t.length;i++){t[i].filter===!1&&(n=!1);let a=!!t[i].sequential;r=gn(r,_n(e,t[i],a?r.changes.newLength:e.doc.length),a)}let i=mn.create(e,r.changes,r.selection,r.effects,r.annotations,r.scrollIntoView);return bn(n?yn(i):i)}function yn(e){let t=e.startState,n=!0;for(let r of t.facet(sn)){let t=r(e);if(t===!1){n=!1;break}Array.isArray(t)&&(n=n===!0?t:hn(n,t))}if(n!==!0){let r,i;if(n===!1)i=e.changes.invertedDesc,r=At.empty(t.doc.length);else{let t=e.changes.filter(n);r=t.changes,i=t.filtered.mapDesc(t.changes).invertedDesc}e=mn.create(t,r,e.selection&&e.selection.map(i),M.mapEffects(e.effects,i),e.annotations,e.scrollIntoView)}let r=t.facet(cn);for(let n=r.length-1;n>=0;n--){let i=r[n](e);e=i instanceof mn?i:Array.isArray(i)&&i.length==1&&i[0]instanceof mn?i[0]:vn(t,Sn(i),!1)}return e}function bn(e){let t=e.startState,n=t.facet(ln),r=e;for(let i=n.length-1;i>=0;i--){let a=n[i](e);a&&Object.keys(a).length&&(r=gn(r,_n(t,a,e.changes.newLength),!0))}return r==e?e:mn.create(t,e.changes,e.selection,r.effects,r.annotations,r.scrollIntoView)}var xn=[];function Sn(e){return e==null?xn:Array.isArray(e)?e:[e]}var N=(function(e){return e[e.Word=0]=`Word`,e[e.Space=1]=`Space`,e[e.Other=2]=`Other`,e})(N||={}),Cn=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,wn;try{wn=RegExp(`[\\p{Alphabetic}\\p{Number}_]`,`u`)}catch{}function Tn(e){if(wn)return wn.test(e);for(let t=0;t<e.length;t++){let n=e[t];if(/\w/.test(n)||n>``&&(n.toUpperCase()!=n.toLowerCase()||Cn.test(n)))return!0}return!1}function En(e){return t=>{if(!/\S/.test(t))return N.Space;if(Tn(t))return N.Word;for(let n=0;n<e.length;n++)if(t.indexOf(e[n])>-1)return N.Word;return N.Other}}var P=class e{constructor(e,t,n,r,i,a){this.config=e,this.doc=t,this.selection=n,this.values=r,this.status=e.statusTemplate.slice(),this.computeSlot=i,a&&(a._state=this);for(let e=0;e<this.config.dynamicSlots.length;e++)tn(this,e<<1);this.computeSlot=null}field(e,t=!0){let n=this.config.address[e.id];if(n==null){if(t)throw RangeError(`Field is not present in this state`);return}return tn(this,n),nn(this,n)}update(...e){return vn(this,e,!0)}applyTransaction(t){let n=this.config,{base:r,compartments:i}=n;for(let e of t.effects)e.is(Zt.reconfigure)?(n&&=(i=new Map,n.compartments.forEach((e,t)=>i.set(t,e)),null),i.set(e.value.compartment,e.value.extension)):e.is(M.reconfigure)?(n=null,r=e.value):e.is(M.appendConfig)&&(n=null,r=Sn(r).concat(e.value));let a;n?a=t.startState.values.slice():(n=$t.resolve(r,i,this),a=new e(n,this.doc,this.selection,n.dynamicSlots.map(()=>null),(e,t)=>t.reconfigure(e,this),null).values);let o=t.startState.facet(an)?t.newSelection:t.newSelection.asSingle();new e(n,t.newDoc,o,a,(e,n)=>n.update(e,t),t)}replaceSelection(e){return typeof e==`string`&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:A.cursor(t.from+e.length)}))}changeByRange(e){let t=this.selection,n=e(t.ranges[0]),r=this.changes(n.changes),i=[n.range],a=Sn(n.effects);for(let n=1;n<t.ranges.length;n++){let o=e(t.ranges[n]),s=this.changes(o.changes),c=s.map(r);for(let e=0;e<n;e++)i[e]=i[e].map(c);let l=r.mapDesc(s,!0);i.push(o.range.map(l)),r=r.compose(c),a=M.mapEffects(a,c).concat(M.mapEffects(Sn(o.effects),l))}return{changes:r,selection:A.create(i,t.mainIndex),effects:a}}changes(t=[]){return t instanceof At?t:At.of(t,this.doc.length,this.facet(e.lineSeparator))}toText(t){return k.of(t.split(this.facet(e.lineSeparator)||Dt))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(tn(this,t),nn(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let n in e){let r=e[n];r instanceof Kt&&this.config.address[r.id]!=null&&(t[n]=r.spec.toJSON(this.field(e[n]),this))}return t}static fromJSON(t,n={},r){if(!t||typeof t.doc!=`string`)throw RangeError(`Invalid JSON representation for EditorState`);let i=[];if(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(t,e)){let n=r[e],a=t[e];i.push(n.init(e=>n.spec.fromJSON(a,e)))}}return e.create({doc:t.doc,selection:A.fromJSON(t.selection),extensions:n.extensions?i.concat([n.extensions]):i})}static create(t={}){let n=$t.resolve(t.extensions||[],new Map),r=t.doc instanceof k?t.doc:k.of((t.doc||``).split(n.staticFacet(e.lineSeparator)||Dt)),i=t.selection?t.selection instanceof A?t.selection:A.single(t.selection.anchor,t.selection.head):A.single(0);return Rt(i,r.length),n.staticFacet(an)||(i=i.asSingle()),new e(n,r,i,n.dynamicSlots.map(()=>null),(e,t)=>t.create(e),null)}get tabSize(){return this.facet(e.tabSize)}get lineBreak(){return this.facet(e.lineSeparator)||`
`}get readOnly(){return this.facet(un)}phrase(t,...n){for(let n of this.facet(e.phrases))if(Object.prototype.hasOwnProperty.call(n,t)){t=n[t];break}return n.length&&(t=t.replace(/\$(\$|\d*)/g,(e,t)=>{if(t==`$`)return`$`;let r=+(t||1);return!r||r>n.length?e:n[r-1]})),t}languageDataAt(e,t,n=-1){let r=[];for(let i of this.facet(rn))for(let a of i(this,t,n))Object.prototype.hasOwnProperty.call(a,e)&&r.push(a[e]);return r}charCategorizer(e){let t=this.languageDataAt(`wordChars`,e);return En(t.length?t[0]:``)}wordAt(e){let{text:t,from:n,length:r}=this.doc.lineAt(e),i=this.charCategorizer(e),a=e-n,o=e-n;for(;a>0;){let e=xt(t,a,!1);if(i(t.slice(e,a))!=N.Word)break;a=e}for(;o<r;){let e=xt(t,o);if(i(t.slice(o,e))!=N.Word)break;o=e}return a==o?null:A.range(a+n,o+n)}};P.allowMultipleSelections=an,P.tabSize=j.define({combine:e=>e.length?e[0]:4}),P.lineSeparator=on,P.readOnly=un,P.phrases=j.define({compare(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length==r.length&&n.every(n=>e[n]==t[n])}}),P.languageData=rn,P.changeFilter=sn,P.transactionFilter=cn,P.transactionExtender=ln,Zt.reconfigure=M.define();function Dn(e,t,n={}){let r={};for(let t of e)for(let e of Object.keys(t)){let i=t[e],a=r[e];if(a===void 0)r[e]=i;else if(!(a===i||i===void 0))if(Object.hasOwnProperty.call(n,e))r[e]=n[e](a,i);else throw Error(`Config merge conflict for field `+e)}for(let e in t)r[e]===void 0&&(r[e]=t[e]);return r}var On=class{eq(e){return this==e}range(e,t=e){return An.create(e,t,this)}};On.prototype.startSide=On.prototype.endSide=0,On.prototype.point=!1,On.prototype.mapMode=Ot.TrackDel;function kn(e,t){return e==t||e.constructor==t.constructor&&e.eq(t)}var An=class e{constructor(e,t,n){this.from=e,this.to=t,this.value=n}static create(t,n,r){return new e(t,n,r)}};function jn(e,t){return e.from-t.from||e.value.startSide-t.value.startSide}var Mn=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.value=n,this.maxPoint=r}get length(){return this.to[this.to.length-1]}findIndex(e,t,n,r=0){let i=n?this.to:this.from;for(let a=r,o=i.length;;){if(a==o)return a;let r=a+o>>1,s=i[r]-e||(n?this.value[r].endSide:this.value[r].startSide)-t;if(r==a)return s>=0?a:o;s>=0?o=r:a=r+1}}between(e,t,n,r){for(let i=this.findIndex(t,-1e9,!0),a=this.findIndex(n,1e9,!1,i);i<a;i++)if(r(this.from[i]+e,this.to[i]+e,this.value[i])===!1)return!1}map(t,n){let r=[],i=[],a=[],o=-1,s=-1;for(let e=0;e<this.value.length;e++){let c=this.value[e],l=this.from[e]+t,u=this.to[e]+t,d,f;if(l==u){let e=n.mapPos(l,c.startSide,c.mapMode);if(e==null||(d=f=e,c.startSide!=c.endSide&&(f=n.mapPos(l,c.endSide),f<d)))continue}else if(d=n.mapPos(l,c.startSide),f=n.mapPos(u,c.endSide),d>f||d==f&&c.startSide>0&&c.endSide<=0)continue;(f-d||c.endSide-c.startSide)<0||(o<0&&(o=d),c.point&&(s=Math.max(s,f-d)),r.push(c),i.push(d-o),a.push(f-o))}return{mapped:r.length?new e(i,a,r,s):null,pos:o}}},F=class e{constructor(e,t,n,r){this.chunkPos=e,this.chunk=t,this.nextLayer=n,this.maxPoint=r}static create(t,n,r,i){return new e(t,n,r,i)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(t){let{add:n=[],sort:r=!1,filterFrom:i=0,filterTo:a=this.length}=t,o=t.filter;if(n.length==0&&!o)return this;if(r&&(n=n.slice().sort(jn)),this.isEmpty)return n.length?e.of(n):this;let s=new In(this,null,-1).goto(0),c=0,l=[],u=new Pn;for(;s.value||c<n.length;)if(c<n.length&&(s.from-n[c].from||s.startSide-n[c].value.startSide)>=0){let e=n[c++];u.addInner(e.from,e.to,e.value)||l.push(e)}else s.rangeIndex==1&&s.chunkIndex<this.chunk.length&&(c==n.length||this.chunkEnd(s.chunkIndex)<n[c].from)&&(!o||i>this.chunkEnd(s.chunkIndex)||a<this.chunkPos[s.chunkIndex])&&u.addChunk(this.chunkPos[s.chunkIndex],this.chunk[s.chunkIndex])?s.nextChunk():((!o||i>s.to||a<s.from||o(s.from,s.to,s.value))&&(u.addInner(s.from,s.to,s.value)||l.push(An.create(s.from,s.to,s.value))),s.next());return u.finishInner(this.nextLayer.isEmpty&&!l.length?e.empty:this.nextLayer.update({add:l,filter:o,filterFrom:i,filterTo:a}))}map(t){if(t.empty||this.isEmpty)return this;let n=[],r=[],i=-1;for(let e=0;e<this.chunk.length;e++){let a=this.chunkPos[e],o=this.chunk[e],s=t.touchesRange(a,a+o.length);if(s===!1)i=Math.max(i,o.maxPoint),n.push(o),r.push(t.mapPos(a));else if(s===!0){let{mapped:e,pos:s}=o.map(a,t);e&&(i=Math.max(i,e.maxPoint),n.push(e),r.push(s))}}let a=this.nextLayer.map(t);return n.length==0?a:new e(r,n,a||e.empty,i)}between(e,t,n){if(!this.isEmpty){for(let r=0;r<this.chunk.length;r++){let i=this.chunkPos[r],a=this.chunk[r];if(t>=i&&e<=i+a.length&&a.between(i,e-i,t-i,n)===!1)return}this.nextLayer.between(e,t,n)}}iter(e=0){return Ln.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return Ln.from(e).goto(t)}static compare(e,t,n,r,i=-1){let a=e.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),o=t.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),s=Fn(a,o,n),c=new zn(a,s,i),l=new zn(o,s,i);n.iterGaps((e,t,n)=>Bn(c,e,l,t,n,r)),n.empty&&n.length==0&&Bn(c,0,l,0,0,r)}static eq(e,t,n=0,r){r??=999999999;let i=e.filter(e=>!e.isEmpty&&t.indexOf(e)<0),a=t.filter(t=>!t.isEmpty&&e.indexOf(t)<0);if(i.length!=a.length)return!1;if(!i.length)return!0;let o=Fn(i,a),s=new zn(i,o,0).goto(n),c=new zn(a,o,0).goto(n);for(;;){if(s.to!=c.to||!Vn(s.active,c.active)||s.point&&(!c.point||!kn(s.point,c.point)))return!1;if(s.to>r)return!0;s.next(),c.next()}}static spans(e,t,n,r,i=-1){let a=new zn(e,null,i).goto(t),o=t,s=a.openStart;for(;;){let e=Math.min(a.to,n);if(a.point){let n=a.activeForPoint(a.to),i=a.pointFrom<t?n.length+1:a.point.startSide<0?n.length:Math.min(n.length,s);r.point(o,e,a.point,n,i,a.pointRank),s=Math.min(a.openEnd(e),n.length)}else e>o&&(r.span(o,e,a.active,s),s=a.openEnd(e));if(a.to>n)return s+(a.point&&a.to>n?1:0);o=a.to,a.next()}}static of(e,t=!1){let n=new Pn;for(let r of e instanceof An?[e]:t?Nn(e):e)n.add(r.from,r.to,r.value);return n.finish()}static join(t){if(!t.length)return e.empty;let n=t[t.length-1];for(let r=t.length-2;r>=0;r--)for(let i=t[r];i!=e.empty;i=i.nextLayer)n=new e(i.chunkPos,i.chunk,n,Math.max(i.maxPoint,n.maxPoint));return n}};F.empty=new F([],[],null,-1);function Nn(e){if(e.length>1)for(let t=e[0],n=1;n<e.length;n++){let r=e[n];if(jn(t,r)>0)return e.slice().sort(jn);t=r}return e}F.empty.nextLayer=F.empty;var Pn=class e{finishChunk(e){this.chunks.push(new Mn(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(t,n,r){this.addInner(t,n,r)||(this.nextLayer||=new e).add(t,n,r)}addInner(e,t,n){let r=e-this.lastTo||n.startSide-this.last.endSide;if(r<=0&&(e-this.lastFrom||n.startSide-this.last.startSide)<0)throw Error("Ranges must be added sorted by `from` position and `startSide`");return r<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=n,this.lastFrom=e,this.lastTo=t,this.value.push(n),n.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let n=t.value.length-1;return this.last=t.value[n],this.lastFrom=t.from[n]+e,this.lastTo=t.to[n]+e,!0}finish(){return this.finishInner(F.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=F.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}};function Fn(e,t,n){let r=new Map;for(let t of e)for(let e=0;e<t.chunk.length;e++)t.chunk[e].maxPoint<=0&&r.set(t.chunk[e],t.chunkPos[e]);let i=new Set;for(let e of t)for(let t=0;t<e.chunk.length;t++){let a=r.get(e.chunk[t]);a!=null&&(n?n.mapPos(a):a)==e.chunkPos[t]&&!n?.touchesRange(a,a+e.chunk[t].length)&&i.add(e.chunk[t])}return i}var In=class{constructor(e,t,n,r=0){this.layer=e,this.skip=t,this.minPoint=n,this.rank=r}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,n){for(;this.chunkIndex<this.layer.chunk.length;){let t=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(t)||this.layer.chunkEnd(this.chunkIndex)<e||t.maxPoint<this.minPoint))break;this.chunkIndex++,n=!1}if(this.chunkIndex<this.layer.chunk.length){let r=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!n||this.rangeIndex<r)&&this.setRangeIndex(r)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],n=e+t.from[this.rangeIndex];if(this.from=n,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}},Ln=class e{constructor(e){this.heap=e}static from(t,n=null,r=-1){let i=[];for(let e=0;e<t.length;e++)for(let a=t[e];!a.isEmpty;a=a.nextLayer)a.maxPoint>=r&&i.push(new In(a,n,r,e));return i.length==1?i[0]:new e(i)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let n of this.heap)n.goto(e,t);for(let e=this.heap.length>>1;e>=0;e--)Rn(this.heap,e);return this.next(),this}forward(e,t){for(let n of this.heap)n.forward(e,t);for(let e=this.heap.length>>1;e>=0;e--)Rn(this.heap,e);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),Rn(this.heap,0)}}};function Rn(e,t){for(let n=e[t];;){let r=(t<<1)+1;if(r>=e.length)break;let i=e[r];if(r+1<e.length&&i.compare(e[r+1])>=0&&(i=e[r+1],r++),n.compare(i)<0)break;e[r]=n,e[t]=i,t=r}}var zn=class{constructor(e,t,n){this.minPoint=n,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Ln.from(e,t,n)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){Hn(this.active,e),Hn(this.activeTo,e),Hn(this.activeRank,e),this.minActive=Wn(this.active,this.activeTo)}addActive(e){let t=0,{value:n,to:r,rank:i}=this.cursor;for(;t<this.activeRank.length&&(i-this.activeRank[t]||r-this.activeTo[t])>0;)t++;Un(this.active,t,n),Un(this.activeTo,t,r),Un(this.activeRank,t,i),e&&Un(e,t,this.cursor.from),this.minActive=Wn(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let n=this.openStart<0?[]:null;for(;;){let r=this.minActive;if(r>-1&&(this.activeTo[r]-this.cursor.from||this.active[r].endSide-this.cursor.startSide)<0){if(this.activeTo[r]>e){this.to=this.activeTo[r],this.endSide=this.active[r].endSide;break}this.removeActive(r),n&&Hn(n,r)}else if(!this.cursor.value){this.to=this.endSide=1e9;break}else if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let e=this.cursor.value;if(!e.point)this.addActive(n),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=e,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=e.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}}if(n){this.openStart=0;for(let t=n.length-1;t>=0&&n[t]<e;t--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let n=this.active.length-1;n>=0&&!(this.activeRank[n]<this.pointRank);n--)(this.activeTo[n]>e||this.activeTo[n]==e&&this.active[n].endSide>=this.point.endSide)&&t.push(this.active[n]);return t.reverse()}openEnd(e){let t=0;for(let n=this.activeTo.length-1;n>=0&&this.activeTo[n]>e;n--)t++;return t}};function Bn(e,t,n,r,i,a){e.goto(t),n.goto(r);let o=r+i,s=r,c=r-t,l=!!a.boundChange;for(let t=!1;;){let r=e.to+c-n.to,i=r||e.endSide-n.endSide,u=i<0?e.to+c:n.to,d=Math.min(u,o);if(e.point||n.point?(e.point&&n.point&&kn(e.point,n.point)&&Vn(e.activeForPoint(e.to),n.activeForPoint(n.to))||a.comparePoint(s,d,e.point,n.point),t=!1):(t&&a.boundChange(s),d>s&&!Vn(e.active,n.active)&&a.compareRange(s,d,e.active,n.active),l&&d<o&&(r||e.openEnd(u)!=n.openEnd(u))&&(t=!0)),u>o)break;s=u,i<=0&&e.next(),i>=0&&n.next()}}function Vn(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n]&&!kn(e[n],t[n]))return!1;return!0}function Hn(e,t){for(let n=t,r=e.length-1;n<r;n++)e[n]=e[n+1];e.pop()}function Un(e,t,n){for(let n=e.length-1;n>=t;n--)e[n+1]=e[n];e[t]=n}function Wn(e,t){let n=-1,r=1e9;for(let i=0;i<t.length;i++)(t[i]-r||e[i].endSide-e[n].endSide)<0&&(n=i,r=t[i]);return n}function Gn(e,t,n=e.length){let r=0;for(let i=0;i<n&&i<e.length;)e.charCodeAt(i)==9?(r+=t-r%t,i++):(r++,i=xt(e,i));return r}function Kn(e,t,n,r){for(let r=0,i=0;;){if(i>=t)return r;if(r==e.length)break;i+=e.charCodeAt(r)==9?n-i%n:1,r=xt(e,r)}return r===!0?-1:e.length}for(var qn=`ͼ`,Jn=typeof Symbol>`u`?`__ͼ`:Symbol.for(qn),Yn=typeof Symbol>`u`?`__styleSet`+Math.floor(Math.random()*1e8):Symbol(`styleSet`),Xn=typeof globalThis<`u`?globalThis:typeof window<`u`?window:{},Zn=class{constructor(e,t){this.rules=[];let{finish:n}=t||{};function r(e){return/^@/.test(e)?[e]:e.split(/,\s*/)}function i(e,t,a,o){let s=[],c=/^@(\w+)\b/.exec(e[0]),l=c&&c[1]==`keyframes`;if(c&&t==null)return a.push(e[0]+`;`);for(let n in t){let o=t[n];if(/&/.test(n))i(n.split(/,\s*/).map(t=>e.map(e=>t.replace(/&/,e))).reduce((e,t)=>e.concat(t)),o,a);else if(o&&typeof o==`object`){if(!c)throw RangeError(`The value of a property (`+n+`) should be a primitive value.`);i(r(n),o,s,l)}else o!=null&&s.push(n.replace(/_.*/,``).replace(/[A-Z]/g,e=>`-`+e.toLowerCase())+`: `+o+`;`)}(s.length||l)&&a.push((n&&!c&&!o?e.map(n):e).join(`, `)+` {`+s.join(` `)+`}`)}for(let t in e)i(r(t),e[t],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=Xn[Jn]||1;return Xn[Jn]=e+1,qn+e.toString(36)}static mount(e,t,n){let r=e[Yn],i=n&&n.nonce;r?i&&r.setNonce(i):r=new $n(e,i),r.mount(Array.isArray(t)?t:[t],e)}},Qn=new Map,$n=class{constructor(e,t){let n=e.ownerDocument||e,r=n.defaultView;if(!e.head&&e.adoptedStyleSheets&&r.CSSStyleSheet){let t=Qn.get(n);if(t)return e[Yn]=t;this.sheet=new r.CSSStyleSheet,Qn.set(n,this)}else this.styleTag=n.createElement(`style`),t&&this.styleTag.setAttribute(`nonce`,t);this.modules=[],e[Yn]=this}mount(e,t){let n=this.sheet,r=0,i=0;for(let t=0;t<e.length;t++){let a=e[t],o=this.modules.indexOf(a);if(o<i&&o>-1&&(this.modules.splice(o,1),i--,o=-1),o==-1){if(this.modules.splice(i++,0,a),n)for(let e=0;e<a.rules.length;e++)n.insertRule(a.rules[e],r++)}else{for(;i<o;)r+=this.modules[i++].rules.length;r+=a.rules.length,i++}}if(n)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{let e=``;for(let t=0;t<this.modules.length;t++)e+=this.modules[t].getRules()+`
`;this.styleTag.textContent=e;let n=t.head||t;this.styleTag.parentNode!=n&&n.insertBefore(this.styleTag,n.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute(`nonce`)!=e&&this.styleTag.setAttribute(`nonce`,e)}},er={8:`Backspace`,9:`Tab`,10:`Enter`,12:`NumLock`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,44:`PrintScreen`,45:`Insert`,46:`Delete`,59:`;`,61:`=`,91:`Meta`,92:`Meta`,106:`*`,107:`+`,108:`,`,109:`-`,110:`.`,111:`/`,144:`NumLock`,145:`ScrollLock`,160:`Shift`,161:`Shift`,162:`Control`,163:`Control`,164:`Alt`,165:`Alt`,173:`-`,186:`;`,187:`=`,188:`,`,189:`-`,190:`.`,191:`/`,192:"`",219:`[`,220:`\\`,221:`]`,222:`'`},tr={48:`)`,49:`!`,50:`@`,51:`#`,52:`$`,53:`%`,54:`^`,55:`&`,56:`*`,57:`(`,59:`:`,61:`+`,173:`_`,186:`:`,187:`+`,188:`<`,189:`_`,190:`>`,191:`?`,192:`~`,219:`{`,220:`|`,221:`}`,222:`"`},nr=typeof navigator<`u`&&/Mac/.test(navigator.platform),rr=typeof navigator<`u`&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),ir=0;ir<10;ir++)er[48+ir]=er[96+ir]=String(ir);for(var ir=1;ir<=24;ir++)er[ir+111]=`F`+ir;for(var ir=65;ir<=90;ir++)er[ir]=String.fromCharCode(ir+32),tr[ir]=String.fromCharCode(ir);for(var ar in er)tr.hasOwnProperty(ar)||(tr[ar]=er[ar]);function or(e){var t=!(nr&&e.metaKey&&e.shiftKey&&!e.ctrlKey&&!e.altKey||rr&&e.shiftKey&&e.key&&e.key.length==1||e.key==`Unidentified`)&&e.key||(e.shiftKey?tr:er)[e.keyCode]||e.key||`Unidentified`;return t==`Esc`&&(t=`Escape`),t==`Del`&&(t=`Delete`),t==`Left`&&(t=`ArrowLeft`),t==`Up`&&(t=`ArrowUp`),t==`Right`&&(t=`ArrowRight`),t==`Down`&&(t=`ArrowDown`),t}function I(){var e=arguments[0];typeof e==`string`&&(e=document.createElement(e));var t=1,n=arguments[1];if(n&&typeof n==`object`&&n.nodeType==null&&!Array.isArray(n)){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r];typeof i==`string`?e.setAttribute(r,i):i!=null&&(e[r]=i)}t++}for(;t<arguments.length;t++)sr(e,arguments[t]);return e}function sr(e,t){if(typeof t==`string`)e.appendChild(document.createTextNode(t));else if(t!=null)if(t.nodeType!=null)e.appendChild(t);else if(Array.isArray(t))for(var n=0;n<t.length;n++)sr(e,t[n]);else throw RangeError(`Unsupported child node: `+t)}var cr=typeof navigator<`u`?navigator:{userAgent:``,vendor:``,platform:``},lr=typeof document<`u`?document:{documentElement:{style:{}}},ur=/Edge\/(\d+)/.exec(cr.userAgent),dr=/MSIE \d/.test(cr.userAgent),fr=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(cr.userAgent),pr=!!(dr||fr||ur),mr=!pr&&/gecko\/(\d+)/i.test(cr.userAgent),hr=!pr&&/Chrome\/(\d+)/.exec(cr.userAgent),gr=`webkitFontSmoothing`in lr.documentElement.style,_r=!pr&&/Apple Computer/.test(cr.vendor),vr=_r&&(/Mobile\/\w+/.test(cr.userAgent)||cr.maxTouchPoints>2),L={mac:vr||/Mac/.test(cr.platform),windows:/Win/.test(cr.platform),linux:/Linux|X11/.test(cr.platform),ie:pr,ie_version:dr?lr.documentMode||6:fr?+fr[1]:ur?+ur[1]:0,gecko:mr,gecko_version:mr?+(/Firefox\/(\d+)/.exec(cr.userAgent)||[0,0])[1]:0,chrome:!!hr,chrome_version:hr?+hr[1]:0,ios:vr,android:/Android\b/.test(cr.userAgent),webkit:gr,webkit_version:gr?+(/\bAppleWebKit\/(\d+)/.exec(cr.userAgent)||[0,0])[1]:0,safari:_r,safari_version:_r?+(/\bVersion\/(\d+(\.\d+)?)/.exec(cr.userAgent)||[0,0])[1]:0,tabSize:lr.documentElement.style.tabSize==null?`-moz-tab-size`:`tab-size`};function yr(e,t){for(let n in e)n==`class`&&t.class?t.class+=` `+e.class:n==`style`&&t.style?t.style+=`;`+e.style:t[n]=e[n];return t}var br=Object.create(null);function xr(e,t,n){if(e==t)return!0;e||=br,t||=br;let r=Object.keys(e),i=Object.keys(t);if(r.length-(n&&r.indexOf(n)>-1?1:0)!=i.length-(n&&i.indexOf(n)>-1?1:0))return!1;for(let a of r)if(a!=n&&(i.indexOf(a)==-1||e[a]!==t[a]))return!1;return!0}function Sr(e,t){for(let n=e.attributes.length-1;n>=0;n--){let r=e.attributes[n].name;t[r]??e.removeAttribute(r)}for(let n in t){let r=t[n];n==`style`?e.style.cssText=r:e.getAttribute(n)!=r&&e.setAttribute(n,r)}}function Cr(e,t,n){let r=!1;if(t)for(let i in t)n&&i in n||(r=!0,i==`style`?e.style.cssText=``:e.removeAttribute(i));if(n)for(let i in n)t&&t[i]==n[i]||(r=!0,i==`style`?e.style.cssText=n[i]:e.setAttribute(i,n[i]));return r}function wr(e){let t=Object.create(null);for(let n=0;n<e.attributes.length;n++){let r=e.attributes[n];t[r.name]=r.value}return t}var Tr=class{eq(e){return!1}updateDOM(e,t,n){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,n){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}},Er=(function(e){return e[e.Text=0]=`Text`,e[e.WidgetBefore=1]=`WidgetBefore`,e[e.WidgetAfter=2]=`WidgetAfter`,e[e.WidgetRange=3]=`WidgetRange`,e})(Er||={}),R=class extends On{constructor(e,t,n,r){super(),this.startSide=e,this.endSide=t,this.widget=n,this.spec=r}get heightRelevant(){return!1}static mark(e){return new Dr(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),n=!!e.block;return t+=n&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new kr(e,t,t,n,e.widget||null,!1)}static replace(e){let t=!!e.block,n,r;if(e.isBlockGap)n=-5e8,r=4e8;else{let{start:i,end:a}=Ar(e,t);n=(i?t?-3e8:-1:5e8)-1,r=(a?t?2e8:1:-6e8)+1}return new kr(e,n,r,t,e.widget||null,!0)}static line(e){return new Or(e)}static set(e,t=!1){return F.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}};R.none=F.empty;var Dr=class e extends R{constructor(e){let{start:t,end:n}=Ar(e);super(t?-1:5e8,n?1:-6e8,null,e),this.tagName=e.tagName||`span`,this.attrs=e.class&&e.attributes?yr(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||br}eq(t){return this==t||t instanceof e&&this.tagName==t.tagName&&xr(this.attrs,t.attrs)}range(e,t=e){if(e>=t)throw RangeError(`Mark decorations may not be empty`);return super.range(e,t)}};Dr.prototype.point=!1;var Or=class e extends R{constructor(e){super(-2e8,-2e8,null,e)}eq(t){return t instanceof e&&this.spec.class==t.spec.class&&xr(this.spec.attributes,t.spec.attributes)}range(e,t=e){if(t!=e)throw RangeError(`Line decoration ranges must be zero-length`);return super.range(e,t)}};Or.prototype.mapMode=Ot.TrackBefore,Or.prototype.point=!0;var kr=class e extends R{constructor(e,t,n,r,i,a){super(t,n,i,e),this.block=r,this.isReplace=a,this.mapMode=r?t<=0?Ot.TrackBefore:Ot.TrackAfter:Ot.TrackDel}get type(){return this.startSide==this.endSide?this.startSide<=0?Er.WidgetBefore:Er.WidgetAfter:Er.WidgetRange}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(t){return t instanceof e&&jr(this.widget,t.widget)&&this.block==t.block&&this.startSide==t.startSide&&this.endSide==t.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw RangeError(`Invalid range for replacement decoration`);if(!this.isReplace&&t!=e)throw RangeError(`Widget decorations can only have zero-length ranges`);return super.range(e,t)}};kr.prototype.point=!0;function Ar(e,t=!1){let{inclusiveStart:n,inclusiveEnd:r}=e;return n??=e.inclusive,r??=e.inclusive,{start:n??t,end:r??t}}function jr(e,t){return e==t||!!(e&&t&&e.compare(t))}function Mr(e,t,n,r=0){let i=n.length-1;i>=0&&n[i]+r>=e?n[i]=Math.max(n[i],t):n.push(e,t)}var Nr=class e extends On{constructor(e,t,n){super(),this.tagName=e,this.attributes=t,this.rank=n}eq(t){return t==this||t instanceof e&&this.tagName==t.tagName&&xr(this.attributes,t.attributes)}static create(t){return new e(t.tagName,t.attributes||br,t.rank==null?50:Math.max(0,Math.min(t.rank,100)))}static set(e,t=!1){return F.of(e,t)}};Nr.prototype.startSide=Nr.prototype.endSide=-1;function Pr(e){let t;return t=e.nodeType==11?e.getSelection?e:e.ownerDocument:e,t.getSelection()}function Fr(e,t){return t?e==t||e.contains(t.nodeType==1?t:t.parentNode):!1}function Ir(e,t){if(!t.anchorNode)return!1;try{return Fr(e,t.anchorNode)}catch{return!1}}function Lr(e){return e.nodeType==3?Qr(e,0,e.nodeValue.length).getClientRects():e.nodeType==1?e.getClientRects():[]}function Rr(e,t,n,r){return n?Vr(e,t,n,r,-1)||Vr(e,t,n,r,1):!1}function zr(e){for(var t=0;;t++)if(e=e.previousSibling,!e)return t}function Br(e){return e.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName)}function Vr(e,t,n,r,i){for(;;){if(e==n&&t==r)return!0;if(t==(i<0?0:Hr(e))){if(e.nodeName==`DIV`)return!1;let n=e.parentNode;if(!n||n.nodeType!=1)return!1;t=zr(e)+(i<0?0:1),e=n}else if(e.nodeType==1){if(e=e.childNodes[t+(i<0?-1:0)],e.nodeType==1&&e.contentEditable==`false`)return!1;t=i<0?Hr(e):0}else return!1}}function Hr(e){return e.nodeType==3?e.nodeValue.length:e.childNodes.length}function Ur(e,t){let n=t?e.left:e.right;return{left:n,right:n,top:e.top,bottom:e.bottom}}function Wr(e){let t=e.visualViewport;return t?{left:0,right:t.width,top:0,bottom:t.height}:{left:0,right:e.innerWidth,top:0,bottom:e.innerHeight}}function Gr(e,t){let n=t.width/e.offsetWidth,r=t.height/e.offsetHeight;return(n>.995&&n<1.005||!isFinite(n)||Math.abs(t.width-e.offsetWidth)<1)&&(n=1),(r>.995&&r<1.005||!isFinite(r)||Math.abs(t.height-e.offsetHeight)<1)&&(r=1),{scaleX:n,scaleY:r}}function Kr(e,t,n,r,i,a,o,s){let c=e.ownerDocument,l=c.defaultView||window;for(let u=e,d=!1;u&&!d;)if(u.nodeType==1){let e,f=u==c.body,p=1,m=1;if(f)e=Wr(l);else{if(/^(fixed|sticky)$/.test(getComputedStyle(u).position)&&(d=!0),u.scrollHeight<=u.clientHeight&&u.scrollWidth<=u.clientWidth){u=u.assignedSlot||u.parentNode;continue}let t=u.getBoundingClientRect();({scaleX:p,scaleY:m}=Gr(u,t)),e={left:t.left,right:t.left+u.clientWidth*p,top:t.top,bottom:t.top+u.clientHeight*m}}let h=0,g=0;if(i==`nearest`)t.top<e.top+o?(g=t.top-(e.top+o),n>0&&t.bottom>e.bottom+g&&(g=t.bottom-e.bottom+o)):t.bottom>e.bottom-o&&(g=t.bottom-e.bottom+o,n<0&&t.top-g<e.top&&(g=t.top-(e.top+o)));else{let r=t.bottom-t.top,a=e.bottom-e.top;g=(i==`center`&&r<=a?t.top+r/2-a/2:i==`start`||i==`center`&&n<0?t.top-o:t.bottom-a+o)-e.top}if(r==`nearest`?t.left<e.left+a?(h=t.left-(e.left+a),n>0&&t.right>e.right+h&&(h=t.right-e.right+a)):t.right>e.right-a&&(h=t.right-e.right+a,n<0&&t.left<e.left+h&&(h=t.left-(e.left+a))):h=(r==`center`?t.left+(t.right-t.left)/2-(e.right-e.left)/2:r==`start`==s?t.left-a:t.right-(e.right-e.left)+a)-e.left,h||g)if(f)l.scrollBy(h,g);else{let e=0,n=0;if(g){let e=u.scrollTop;u.scrollTop+=g/m,n=(u.scrollTop-e)*m}if(h){let t=u.scrollLeft;u.scrollLeft+=h/p,e=(u.scrollLeft-t)*p}t={left:t.left-e,top:t.top-n,right:t.right-e,bottom:t.bottom-n},e&&Math.abs(e-h)<1&&(r=`nearest`),n&&Math.abs(n-g)<1&&(i=`nearest`)}if(f)break;(t.top<e.top||t.bottom>e.bottom||t.left<e.left||t.right>e.right)&&(t={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)}),u=u.assignedSlot||u.parentNode}else if(u.nodeType==11)u=u.host;else break}function qr(e,t=!0){let n=e.ownerDocument,r=null,i=null;for(let a=e.parentNode;a&&!(a==n.body||(!t||r)&&i);)if(a.nodeType==1)!i&&a.scrollHeight>a.clientHeight&&(i=a),t&&!r&&a.scrollWidth>a.clientWidth&&(r=a),a=a.assignedSlot||a.parentNode;else if(a.nodeType==11)a=a.host;else break;return{x:r,y:i}}var Jr=class{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:n}=e;this.set(t,Math.min(e.anchorOffset,t?Hr(t):0),n,Math.min(e.focusOffset,n?Hr(n):0))}set(e,t,n,r){this.anchorNode=e,this.anchorOffset=t,this.focusNode=n,this.focusOffset=r}},Yr=null;L.safari&&L.safari_version>=26&&(Yr=!1);function Xr(e){if(e.setActive)return e.setActive();if(Yr)return e.focus(Yr);let t=[];for(let n=e;n&&(t.push(n,n.scrollTop,n.scrollLeft),n!=n.ownerDocument);n=n.parentNode);if(e.focus(Yr==null?{get preventScroll(){return Yr={preventScroll:!0},!0}}:void 0),!Yr){Yr=!1;for(let e=0;e<t.length;){let n=t[e++],r=t[e++],i=t[e++];n.scrollTop!=r&&(n.scrollTop=r),n.scrollLeft!=i&&(n.scrollLeft=i)}}}var Zr;function Qr(e,t,n=t){let r=Zr||=document.createRange();return r.setEnd(e,n),r.setStart(e,t),r}function $r(e,t,n,r){let i={key:t,code:t,keyCode:n,which:n,cancelable:!0};r&&({altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,metaKey:i.metaKey}=r);let a=new KeyboardEvent(`keydown`,i);a.synthetic=!0,e.dispatchEvent(a);let o=new KeyboardEvent(`keyup`,i);return o.synthetic=!0,e.dispatchEvent(o),a.defaultPrevented||o.defaultPrevented}function ei(e){for(;e;){if(e&&(e.nodeType==9||e.nodeType==11&&e.host))return e;e=e.assignedSlot||e.parentNode}return null}function ti(e,t){let n=t.focusNode,r=t.focusOffset;if(!n||t.anchorNode!=n||t.anchorOffset!=r)return!1;for(r=Math.min(r,Hr(n));;)if(r){if(n.nodeType!=1)return!1;let e=n.childNodes[r-1];e.contentEditable==`false`?r--:(n=e,r=Hr(n))}else if(n==e)return!0;else r=zr(n),n=n.parentNode}function ni(e){return e instanceof Window?e.pageYOffset>Math.max(0,e.document.documentElement.scrollHeight-e.innerHeight-4):e.scrollTop>Math.max(1,e.scrollHeight-e.clientHeight-4)}function ri(e,t){for(let n=e,r=t;;)if(n.nodeType==3&&r>0)return{node:n,offset:r};else if(n.nodeType==1&&r>0){if(n.contentEditable==`false`)return null;n=n.childNodes[r-1],r=Hr(n)}else if(n.parentNode&&!Br(n))r=zr(n),n=n.parentNode;else return null}function ii(e,t){for(let n=e,r=t;;)if(n.nodeType==3&&r<n.nodeValue.length)return{node:n,offset:r};else if(n.nodeType==1&&r<n.childNodes.length){if(n.contentEditable==`false`)return null;n=n.childNodes[r],r=0}else if(n.parentNode&&!Br(n))r=zr(n)+1,n=n.parentNode;else return null}var ai=class e{constructor(e,t,n=!0){this.node=e,this.offset=t,this.precise=n}static before(t,n){return new e(t.parentNode,zr(t),n)}static after(t,n){return new e(t.parentNode,zr(t)+1,n)}},z=(function(e){return e[e.LTR=0]=`LTR`,e[e.RTL=1]=`RTL`,e})(z||={}),oi=z.LTR,si=z.RTL;function ci(e){let t=[];for(let n=0;n<e.length;n++)t.push(1<<e[n]);return t}var li=ci(`88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008`),ui=ci(`4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333`),di=Object.create(null),fi=[];for(let e of[`()`,`[]`,`{}`]){let t=e.charCodeAt(0),n=e.charCodeAt(1);di[t]=n,di[n]=-t}function pi(e){return e<=247?li[e]:1424<=e&&e<=1524?2:1536<=e&&e<=1785?ui[e-1536]:1774<=e&&e<=2220?4:8192<=e&&e<=8204?256:64336<=e&&e<=65023?4:1}var mi=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/,hi=class{get dir(){return this.level%2?si:oi}constructor(e,t,n){this.from=e,this.to=t,this.level=n}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,n,r){let i=-1;for(let a=0;a<e.length;a++){let o=e[a];if(o.from<=t&&o.to>=t){if(o.level==n)return a;(i<0||(r==0?e[i].level>o.level:r<0?o.from<t:o.to>t))&&(i=a)}}if(i<0)throw RangeError(`Index out of range`);return i}};function gi(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.direction!=i.direction||!gi(r.inner,i.inner))return!1}return!0}var B=[];function _i(e,t,n,r,i){for(let a=0;a<=r.length;a++){let o=a?r[a-1].to:t,s=a<r.length?r[a].from:n,c=a?256:i;for(let t=o,n=c,r=c;t<s;t++){let i=pi(e.charCodeAt(t));i==512?i=n:i==8&&r==4&&(i=16),B[t]=i==4?2:i,i&7&&(r=i),n=i}for(let e=o,t=c,r=c;e<s;e++){let i=B[e];if(i==128)e<s-1&&t==B[e+1]&&t&24?i=B[e]=t:B[e]=256;else if(i==64){let i=e+1;for(;i<s&&B[i]==64;)i++;let a=e&&t==8||i<n&&B[i]==8?r==1?1:8:256;for(let t=e;t<i;t++)B[t]=a;e=i-1}else i==8&&r==1&&(B[e]=1);t=i,i&7&&(r=i)}}}function vi(e,t,n,r,i){let a=i==1?2:1;for(let o=0,s=0,c=0;o<=r.length;o++){let l=o?r[o-1].to:t,u=o<r.length?r[o].from:n;for(let t=l,n,r,o;t<u;t++)if(r=di[n=e.charCodeAt(t)])if(r<0){for(let e=s-3;e>=0;e-=3)if(fi[e+1]==-r){let n=fi[e+2],r=n&2?i:n&4?n&1?a:i:0;r&&(B[t]=B[fi[e]]=r),s=e;break}}else if(fi.length==189)break;else fi[s++]=t,fi[s++]=n,fi[s++]=c;else if((o=B[t])==2||o==1){let e=o==i;c=+!e;for(let t=s-3;t>=0;t-=3){let n=fi[t+2];if(n&2)break;if(e)fi[t+2]|=2;else{if(n&4)break;fi[t+2]|=4}}}}}function yi(e,t,n,r){for(let i=0,a=r;i<=n.length;i++){let o=i?n[i-1].to:e,s=i<n.length?n[i].from:t;for(let c=o;c<s;){let o=B[c];if(o==256){let o=c+1;for(;;)if(o==s){if(i==n.length)break;o=n[i++].to,s=i<n.length?n[i].from:t}else if(B[o]==256)o++;else break;let l=a==1,u=l==((o<t?B[o]:r)==1)?l?1:2:r;for(let t=o,r=i,a=r?n[r-1].to:e;t>c;)t==a&&(t=n[--r].from,a=r?n[r-1].to:e),B[--t]=u;c=o}else a=o,c++}}}function bi(e,t,n,r,i,a,o){let s=r%2?2:1;if(r%2==i%2)for(let c=t,l=0;c<n;){let t=!0,u=!1;if(l==a.length||c<a[l].from){let e=B[c];e!=s&&(t=!1,u=e==16)}let d=!t&&s==1?[]:null,f=t?r:r+1,p=c;run:for(;;)if(l<a.length&&p==a[l].from){if(u)break run;let m=a[l];if(!t)for(let e=m.to,t=l+1;;){if(e==n)break run;if(t<a.length&&a[t].from==e)e=a[t++].to;else if(B[e]==s)break run;else break}l++,d?d.push(m):(m.from>c&&o.push(new hi(c,m.from,f)),xi(e,m.direction==oi==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.to),p=m.to}else if(p==n||(t?B[p]!=s:B[p]==s))break;else p++;d?bi(e,c,p,r+1,i,d,o):c<p&&o.push(new hi(c,p,f)),c=p}else for(let c=n,l=a.length;c>t;){let n=!0,u=!1;if(!l||c>a[l-1].to){let e=B[c-1];e!=s&&(n=!1,u=e==16)}let d=!n&&s==1?[]:null,f=n?r:r+1,p=c;run:for(;;)if(l&&p==a[l-1].to){if(u)break run;let m=a[--l];if(!n)for(let e=m.from,n=l;;){if(e==t)break run;if(n&&a[n-1].to==e)e=a[--n].from;else if(B[e-1]==s)break run;else break}d?d.push(m):(m.to<c&&o.push(new hi(m.to,c,f)),xi(e,m.direction==oi==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.from),p=m.from}else if(p==t||(n?B[p-1]!=s:B[p-1]==s))break;else p--;d?bi(e,p,c,r+1,i,d,o):p<c&&o.push(new hi(p,c,f)),c=p}}function xi(e,t,n,r,i,a,o){let s=t%2?2:1;_i(e,i,a,r,s),vi(e,i,a,r,s),yi(i,a,r,s),bi(e,i,a,t,n,r,o)}function Si(e,t,n){if(!e)return[new hi(0,0,+(t==si))];if(t==oi&&!n.length&&!mi.test(e))return Ci(e.length);if(n.length)for(;e.length>B.length;)B[B.length]=256;let r=[],i=t==oi?0:1;return xi(e,i,i,n,0,e.length,r),r}function Ci(e){return[new hi(0,e,0)]}var wi=``;function Ti(e,t,n,r,i){let a=r.head-e.from,o=hi.find(t,a,r.bidiLevel??-1,r.assoc),s=t[o],c=s.side(i,n);if(a==c){let e=o+=i?1:-1;if(e<0||e>=t.length)return null;s=t[o=e],a=s.side(!i,n),c=s.side(i,n)}let l=xt(e.text,a,s.forward(i,n));(l<s.from||l>s.to)&&(l=c),wi=e.text.slice(Math.min(a,l),Math.max(a,l));let u=o==(i?t.length-1:0)?null:t[o+(i?1:-1)];return u&&l==c&&u.level+ +!i<s.level?A.cursor(u.side(!i,n)+e.from,u.forward(i,n)?1:-1,u.level):A.cursor(l+e.from,s.forward(i,n)?-1:1,s.level)}function Ei(e,t,n){for(let r=t;r<n;r++){let t=pi(e.charCodeAt(r));if(t==1)return oi;if(t==2||t==4)return si}return oi}var Di=j.define(),Oi=j.define(),ki=j.define(),Ai=j.define(),ji=j.define(),Mi=j.define(),Ni=j.define(),Pi=j.define(),Fi=j.define(),Ii=j.define({combine:e=>e.some(e=>e)}),Li=j.define({combine:e=>e.some(e=>e)}),Ri=j.define(),zi=class e{constructor(e,t,n,r,i,a=!1){this.range=e,this.y=t,this.x=n,this.yMargin=r,this.xMargin=i,this.isSnapshot=a}map(t){return t.empty?this:new e(this.range.map(t),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(t){return this.range.to<=t.doc.length?this:new e(A.cursor(t.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}},Bi=M.define({map:(e,t)=>e.map(t)}),Vi=M.define();function Hi(e,t,n){let r=e.facet(Ai);r.length?r[0](t):window.onerror&&window.onerror(String(t),n,void 0,void 0,t)||(n?console.error(n+`:`,t):console.error(t))}var Ui=j.define({combine:e=>e.length?e[0]:!0}),Wi=0,Gi=j.define({combine(e){return e.filter((t,n)=>{for(let r=0;r<n;r++)if(e[r].plugin==t.plugin)return!1;return!0})}}),Ki=class e{constructor(e,t,n,r,i){this.id=e,this.create=t,this.domEventHandlers=n,this.domEventObservers=r,this.baseExtensions=i(this),this.extension=this.baseExtensions.concat(Gi.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(Gi.of({plugin:this,arg:e}))}static define(t,n){let{eventHandlers:r,eventObservers:i,provide:a,decorations:o}=n||{};return new e(Wi++,t,r,i,e=>{let t=[];return o&&t.push(Xi.of(t=>{let n=t.plugin(e);return n?o(n):R.none})),a&&t.push(a(e)),t})}static fromClass(t,n){return e.define((e,n)=>new t(e,n),n)}},qi=class{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(!this.value){if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){Hi(e.state,t,`CodeMirror plugin crashed`),this.deactivate()}}else if(this.mustUpdate){let e=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(e)}catch(t){if(Hi(e.state,t,`CodeMirror plugin crashed`),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}return this}destroy(e){if(this.value?.destroy)try{this.value.destroy()}catch(t){Hi(e.state,t,`CodeMirror plugin crashed`)}}deactivate(){this.spec=this.value=null}},Ji=j.define(),Yi=j.define(),Xi=j.define(),Zi=j.define(),Qi=j.define(),$i=j.define(),ea=j.define();function ta(e,t){let n=e.state.facet(ea);if(!n.length)return n;let r=n.map(t=>t instanceof Function?t(e):t),i=[];return F.spans(r,t.from,t.to,{point(){},span(e,n,r,a){let o=e-t.from,s=n-t.from,c=i;for(let e=r.length-1;e>=0;e--,a--){let n=r[e].spec.bidiIsolate,i;if(n??=Ei(t.text,o,s),a>0&&c.length&&(i=c[c.length-1]).to==o&&i.direction==n)i.to=s,c=i.inner;else{let e={from:o,to:s,direction:n,inner:[]};c.push(e),c=e.inner}}}}),i}var na=j.define();function ra(e){let t=0,n=0,r=0,i=0;for(let a of e.state.facet(na)){let o=a(e);o&&(o.left!=null&&(t=Math.max(t,o.left)),o.right!=null&&(n=Math.max(n,o.right)),o.top!=null&&(r=Math.max(r,o.top)),o.bottom!=null&&(i=Math.max(i,o.bottom)))}return{left:t,right:n,top:r,bottom:i}}var ia=j.define(),aa=class e{constructor(e,t,n,r){this.fromA=e,this.toA=t,this.fromB=n,this.toB=r}join(t){return new e(Math.min(this.fromA,t.fromA),Math.max(this.toA,t.toA),Math.min(this.fromB,t.fromB),Math.max(this.toB,t.toB))}addToSet(e){let t=e.length,n=this;for(;t>0;t--){let r=e[t-1];if(!(r.fromA>n.toA)){if(r.toA<n.fromA)break;n=n.join(r),e.splice(t-1,1)}}return e.splice(t,0,n),e}static extendWithRanges(t,n){if(n.length==0)return t;let r=[];for(let i=0,a=0,o=0;;){let s=i<t.length?t[i].fromB:1e9,c=a<n.length?n[a]:1e9,l=Math.min(s,c);if(l==1e9)break;let u=l+o,d=l,f=u;for(;;)if(a<n.length&&n[a]<=d){let e=n[a+1];a+=2,d=Math.max(d,e);for(let e=i;e<t.length&&t[e].fromB<=d;e++)o=t[e].toA-t[e].toB;f=Math.max(f,e+o)}else if(i<t.length&&t[i].fromB<=d){let e=t[i++];d=Math.max(d,e.toB),f=Math.max(f,e.toA),o=e.toA-e.toB}else break;r.push(new e(u,f,l,d))}return r}},oa=class e{constructor(e,t,n){this.view=e,this.state=t,this.transactions=n,this.flags=0,this.startState=e.state,this.changes=At.empty(this.startState.doc.length);for(let e of n)this.changes=this.changes.compose(e.changes);let r=[];this.changes.iterChangedRanges((e,t,n,i)=>r.push(new aa(e,t,n,i))),this.changedRanges=r}static create(t,n,r){return new e(t,n,r)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}},sa=[],V=class{constructor(e,t,n=0){this.dom=e,this.length=t,this.flags=n,this.parent=null,e.cmTile=this}get breakAfter(){return this.flags&1}get children(){return sa}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,this.flags&4){this.flags&=-5;let e=this.domAttrs;e&&Sr(this.dom,e)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:``)+(this.breakAfter?`#`:``)}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,t=this.posAtStart){let n=t;for(let t of this.children){if(t==e)return n;n+=t.length+t.breakAfter}throw RangeError(`Invalid child in posBefore`)}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,t){return null}domPosFor(e,t){let n=zr(this.dom),r=this.length?e>0:t>0;return new ai(this.parent.dom,n+ +!!r,e==0||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&this.parent.flags&2&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof ua)return e;return null}static get(e){return e.cmTile}},ca=class extends V{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(this.flags&2)return;super.sync(e);let t=this.dom,n=null,r,i=e?.node==t?e:null,a=0;for(let o of this.children){if(o.sync(e),a+=o.length+o.breakAfter,r=n?n.nextSibling:t.firstChild,i&&r!=o.dom&&(i.written=!0),o.dom.parentNode==t)for(;r&&r!=o.dom;)r=la(r);else t.insertBefore(o.dom,r);n=o.dom}for(r=n?n.nextSibling:t.firstChild,i&&r&&(i.written=!0);r;)r=la(r);this.length=a}};function la(e){let t=e.nextSibling;return e.parentNode.removeChild(e),t}var ua=class extends ca{constructor(e,t){super(t),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let t=V.get(e);if(t&&this.owns(t))return t;e=e.parentNode}}blockTiles(e){for(let t=[],n=this,r=0,i=0;;)if(r==n.children.length){if(!t.length)return;n=n.parent,n.breakAfter&&i++,r=t.pop()}else{let a=n.children[r++];if(a instanceof da)t.push(r),n=a,r=0;else{let t=i+a.length,n=e(a,i);if(n!==void 0)return n;i=t+a.breakAfter}}}resolveBlock(e,t){let n,r=-1,i,a=-1;if(this.blockTiles((o,s)=>{let c=s+o.length;if(e>=s&&e<=c){if(o.isWidget()&&t>=-1&&t<=1){if(o.flags&32)return!0;o.flags&16&&(n=void 0)}(s<e||e==c&&(t<-1?o.length:o.covers(1)))&&(!n||!o.isWidget()&&n.isWidget())&&(n=o,r=e-s),(c>e||e==s&&(t>1?o.length:o.covers(-1)))&&(!i||!o.isWidget()&&i.isWidget())&&(i=o,a=e-s)}}),!n&&!i)throw Error(`No tile at position `+e);return n&&t<0||!i?{tile:n,offset:r}:{tile:i,offset:a}}},da=class e extends ca{constructor(e,t){super(e),this.wrapper=t}isBlock(){return!0}covers(e){return this.children.length?e<0?this.children[0].covers(-1):this.lastChild.covers(1):!1}get domAttrs(){return this.wrapper.attributes}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},fa=class e extends ca{constructor(e,t){super(e),this.attrs=t}isLine(){return!0}static start(t,n,r){let i=new e(n||document.createElement(`div`),t);return(!n||!r)&&(i.flags|=4),i}get domAttrs(){return this.attrs}resolveInline(e,t,n){let r=null,i=-1,a=null,o=-1;function s(e,c){for(let l=0,u=0;l<e.children.length&&u<=c;l++){let d=e.children[l],f=u+d.length;f>=c&&(d.isComposite()?s(d,c-u):(!a||a.isHidden&&(t>0||n&&ma(a,d)))&&(f>c||d.flags&32)?(a=d,o=c-u):(u<c||d.flags&16&&!d.isHidden)&&(r=d,i=c-u)),u=f}}s(this,e);let c=(t<0?r:a)||r||a;return c?{tile:c,offset:c==r?i:o}:null}coordsIn(e,t){let n=this.resolveInline(e,t,!0);return n?n.tile.coordsIn(Math.max(0,n.offset),t):pa(this)}domIn(e,t){let n=this.resolveInline(e,t);if(n){let{tile:e,offset:r}=n;if(this.dom.contains(e.dom))return e.isText()?new ai(e.dom,Math.min(e.dom.nodeValue.length,r)):e.domPosFor(r,e.flags&16?1:e.flags&32?-1:t);let i=n.tile.parent,a=!1;for(let e of i.children){if(a)return new ai(e.dom,0);e==n.tile&&(a=!0)}}return new ai(this.dom,0)}};function pa(e){let t=e.dom.lastChild;if(!t)return e.dom.getBoundingClientRect();let n=Lr(t);return n[n.length-1]||null}function ma(e,t){let n=e.coordsIn(0,1),r=t.coordsIn(0,1);return n&&r&&r.top<n.bottom}var ha=class e extends ca{constructor(e,t){super(e),this.mark=t}get domAttrs(){return this.mark.attrs}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},ga=class e extends V{constructor(e,t){super(e,t.length),this.text=t}sync(e){this.flags&2||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,t){let n=this.dom.nodeValue.length;e>n&&(e=n);let r=e,i=e,a=0;e==0&&t<0||e==n&&t>=0?L.chrome||L.gecko||(e?(r--,a=1):i<n&&(i++,a=-1)):t<0?r--:i<n&&i++;let o=Qr(this.dom,r,i).getClientRects();if(!o.length)return null;let s=o[(a?a<0:t>=0)?0:o.length-1];return L.safari&&!a&&s.width==0&&(s=Array.prototype.find.call(o,e=>e.width)||s),a?Ur(s,a<0):s||null}static of(t,n){let r=new e(n||document.createTextNode(t),t);return n||(r.flags|=2),r}},_a=class e extends V{constructor(e,t,n,r){super(e,t,r),this.widget=n}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return this.flags&48?!1:(this.flags&(e<0?64:128))>0}coordsIn(e,t){return this.coordsInWidget(e,t,!1)}coordsInWidget(e,t,n){let r=this.widget.coordsAt(this.dom,e,t);if(r)return r;if(n)return Ur(this.dom.getBoundingClientRect(),this.length?e==0:t<=0);{let t=this.dom.getClientRects(),n=null;if(!t.length)return null;let r=this.flags&16?!0:this.flags&32?!1:e>0;for(let i=r?t.length-1:0;n=t[i],!(e>0?i==0:i==t.length-1||n.top<n.bottom);i+=r?-1:1);return Ur(n,!r)}}get overrideDOMText(){if(!this.length)return k.empty;let{root:e}=this;if(!e)return k.empty;let t=this.posAtStart;return e.view.state.doc.slice(t,t+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(t,n,r,i,a){return a||(a=t.toDOM(n),t.editable||(a.contentEditable=`false`)),new e(a,r,t,i)}},va=class extends V{constructor(e){let t=document.createElement(`img`);t.className=`cm-widgetBuffer`,t.setAttribute(`aria-hidden`,`true`),super(t,0,e)}get isHidden(){return!0}get overrideDOMText(){return k.empty}coordsIn(e){return this.dom.getBoundingClientRect()}},ya=class{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,t,n){let{tile:r,index:i,beforeBreak:a,parents:o}=this;for(;e||t>0;)if(!r.isComposite())if(i==r.length)a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++;else if(e){let t=Math.min(e,r.length-i);n&&n.skip(r,i,i+t),e-=t,i+=t}else break;else if(a){if(!e)break;n&&n.break(),e--,a=!1}else if(i==r.children.length){if(!e&&!o.length)break;n&&n.leave(r),a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++}else{let s=r.children[i],c=s.breakAfter;(t>0?s.length<=e:s.length<e)&&(!n||n.skip(s,0,s.length)!==!1||!s.isComposite)?(a=!!c,i++,e-=s.length):(o.push({tile:r,index:i}),r=s,i=0,n&&s.isComposite()&&n.enter(s))}return this.tile=r,this.index=i,this.beforeBreak=a,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}},ba=class{constructor(e,t,n,r){this.from=e,this.to=t,this.wrapper=n,this.rank=r}},xa=class{constructor(e,t,n){this.cache=e,this.root=t,this.blockWrappers=n,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,t,n,r){this.flushBuffer();let i=this.ensureMarks(t,n),a=i.lastChild;if(a&&a.isText()&&!(a.flags&8)&&a.length+e.length<512){this.cache.reused.set(a,2);let t=i.children[i.children.length-1]=new ga(a.dom,a.text+e);t.parent=i}else i.append(r||ga.of(e,this.cache.find(ga)?.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,t){let n=this.curLine;n.dom!=t.line.dom&&(n.setDOM(this.cache.reused.has(t.line)?ja(t.line.dom):t.line.dom),this.cache.reused.set(t.line,2));let r=n;for(let e=t.marks.length-1;e>=0;e--){let n=t.marks[e],i=r.lastChild;if(i instanceof ha&&i.mark.eq(n.mark))i.dom!=n.dom&&i.setDOM(ja(n.dom)),r=i;else{if(this.cache.reused.get(n)){let e=V.get(n.dom);e&&e.setDOM(ja(n.dom))}let e=ha.of(n.mark,n.dom);r.append(e),r=e}this.cache.reused.set(n,2)}let i=V.get(e.text);i&&this.cache.reused.set(i,2);let a=new ga(e.text,e.text.nodeValue);a.flags|=8,this.pos=e.range.toB,r.append(a)}addInlineWidget(e,t,n){let r=this.afterWidget&&e.flags&48&&(this.afterWidget.flags&48)==(e.flags&48);r||this.flushBuffer();let i=this.ensureMarks(t,n);!r&&!(e.flags&16)&&i.append(this.getBuffer(1)),i.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,t,n){this.flushBuffer(),this.ensureMarks(t,n).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){let t=this.afterWidget||this.lastBlock;t.length+=e,this.pos+=e}addLineStart(e,t){e||=Oa;let n=fa.start(e,t||this.cache.find(fa)?.dom,!!t);this.getBlockPos().append(this.lastBlock=this.curLine=n)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,t){let n=this.curLine;for(let r=e.length-1;r>=0;r--){let i=e[r],a;if(t>0&&(a=n.lastChild)&&a instanceof ha&&a.mark.eq(i))n=a,t--;else{let e=ha.of(i,this.cache.find(ha,e=>e.mark.eq(i))?.dom);n.append(e),n=e,t=0}}return n}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;(!e||!Ea(this.curLine,!1)||e.dom.nodeName!=`BR`&&e.isWidget()&&!(L.ios&&Ea(this.curLine,!0)))&&this.curLine.append(this.cache.findWidget(Na,0,32)||new _a(Na.toDOM(),0,Na,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let t=e.rank*102+e.value.rank,n=new ba(e.from,e.to,e.value,t),r=this.wrappers.length;for(;r>0&&(this.wrappers[r-1].rank-n.rank||this.wrappers[r-1].to-n.to)<0;)r--;this.wrappers.splice(r,0,n)}this.wrapperPos=this.pos}getBlockPos(){this.updateBlockWrappers();let e=this.root;for(let t of this.wrappers){let n=e.lastChild;if(t.from<this.pos&&n instanceof da&&n.wrapper.eq(t.wrapper))e=n;else{let n=da.of(t.wrapper,this.cache.find(da,e=>e.wrapper.eq(t.wrapper))?.dom);e.append(n),e=n}}return e}blockPosCovered(){let e=this.lastBlock;return e!=null&&!e.breakAfter&&(!e.isWidget()||(e.flags&160)>0)}getBuffer(e){let t=2|(e<0?16:32),n=this.cache.find(va,void 0,1);return n&&(n.flags=t),n||new va(t)}flushBuffer(){this.afterWidget&&!(this.afterWidget.flags&32)&&(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}},Sa=class{constructor(e){this.skipCount=0,this.text=``,this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text=``,this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:t,lineBreak:n,done:r}=this.cursor.next(this.skipCount);if(this.skipCount=0,r)throw Error(`Ran out of text content when drawing inline views`);this.text=t;let i=this.textOff=Math.min(e,t.length);return n?null:t.slice(0,i)}let t=Math.min(this.text.length,this.textOff+e),n=this.text.slice(this.textOff,t);return this.textOff=t,n}},Ca=[_a,fa,ga,ha,va,da,ua];for(let e=0;e<Ca.length;e++)Ca[e].bucket=e;var wa=class{constructor(e){this.view=e,this.buckets=Ca.map(()=>[]),this.index=Ca.map(()=>0),this.reused=new Map}add(e){let t=e.constructor.bucket,n=this.buckets[t];n.length<6?n.push(e):n[this.index[t]=(this.index[t]+1)%6]=e}find(e,t,n=2){let r=e.bucket,i=this.buckets[r],a=this.index[r];for(let e=i.length-1;e>=0;e--){let o=(e+a)%i.length,s=i[o];if((!t||t(s))&&!this.reused.has(s))return i.splice(o,1),o<a&&this.index[r]--,this.reused.set(s,n),s}return null}findWidget(e,t,n){let r=this.buckets[0];if(r.length)for(let i=0,a=0;;i++){if(i==r.length){if(a)return null;a=1,i=0}let o=r[i];if(!this.reused.has(o)&&(a==0?o.widget.compare(e):o.widget.constructor==e.constructor&&e.updateDOM(o.dom,this.view,o.widget)))return r.splice(i,1),i<this.index[0]&&this.index[0]--,o.widget==e&&o.length==t&&(o.flags&497)==n?(this.reused.set(o,1),o):(this.reused.set(o,2),new _a(o.dom,t,e,o.flags&-498|n))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,t=2){if(!this.reused.has(e))return this.reused.set(e,t),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}},Ta=class{constructor(e,t,n,r,i){this.view=e,this.decorations=r,this.disallowBlockEffectsFor=i,this.openWidget=!1,this.openMarks=0,this.cache=new wa(e),this.text=new Sa(e.state.doc),this.builder=new xa(this.cache,new ua(e,e.contentDOM),F.iter(n)),this.cache.reused.set(t,2),this.old=new ya(t),this.reuseWalker={skip:(e,t,n)=>{if(this.cache.add(e),e.isComposite())return!1},enter:e=>this.cache.add(e),leave:()=>{},break:()=>{}}}run(e,t){let n=t&&this.getCompositionContext(t.text);for(let r=0,i=0,a=0;;){let o=a<e.length?e[a++]:null,s=o?o.fromA:this.old.root.length;if(s>r){let e=s-r;this.preserve(e,!a,!o),r=s,i+=e}if(!o)break;t&&o.fromA<=t.range.fromA&&o.toA>=t.range.toA?(this.forward(o.fromA,t.range.fromA,t.range.fromA<t.range.toA?1:-1),this.emit(i,t.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(t,n),this.text.skip(t.range.toB-t.range.fromB),this.forward(t.range.fromA,o.toA),this.emit(t.range.toB,o.toB)):(this.forward(o.fromA,o.toA),this.emit(i,o.toB)),i=o.toB,r=o.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,t,n){let r=Aa(this.old),i=this.openMarks;this.old.advance(e,n?1:-1,{skip:(e,t,n)=>{if(e.isWidget())if(this.openWidget)this.builder.continueWidget(n-t);else{let a=n>0||t<e.length?_a.of(e.widget,this.view,n-t,e.flags&496,this.cache.maybeReuse(e)):this.cache.reuse(e);a.flags&256?(a.flags&=-2,this.builder.addBlockWidget(a)):(this.builder.ensureLine(null),this.builder.addInlineWidget(a,r,i),i=r.length)}else if(e.isText())this.builder.ensureLine(null),!t&&n==e.length&&!this.cache.reused.has(e)?this.builder.addText(e.text,r,i,this.cache.reuse(e)):(this.cache.add(e),this.builder.addText(e.text.slice(t,n),r,i)),i=r.length;else if(e.isLine())e.flags&=-2,this.cache.reused.set(e,1),this.builder.addLine(e);else if(e instanceof va)this.cache.add(e);else if(e instanceof ha)this.builder.ensureLine(null),this.builder.addMark(e,r,i),this.cache.reused.set(e,1),i=r.length;else return!1;this.openWidget=!1},enter:e=>{e.isLine()?this.builder.addLineStart(e.attrs,this.cache.maybeReuse(e)):(this.cache.add(e),e instanceof ha&&r.unshift(e.mark)),this.openWidget=!1},leave:e=>{e.isLine()?r.length&&=i=0:e instanceof ha&&(r.shift(),i=Math.min(i,r.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,t){let n=null,r=this.builder,i=0,a=F.spans(this.decorations,e,t,{point:(e,t,a,o,s,c)=>{if(a instanceof kr){if(this.disallowBlockEffectsFor[c]){if(a.block)throw RangeError(`Block decorations may not be specified via plugins`);if(t>this.view.state.doc.lineAt(e).to)throw RangeError(`Decorations that replace line breaks may not be specified via plugins`)}if(i=o.length,s>o.length)r.continueWidget(t-e);else{let i=a.widget||(a.block?Ma.block:Ma.inline),c=Da(a),l=this.cache.findWidget(i,t-e,c)||_a.of(i,this.view,t-e,c);a.block?(a.startSide>0&&r.addLineStartIfNotCovered(n),r.addBlockWidget(l)):(r.ensureLine(n),r.addInlineWidget(l,o,s))}n=null}else n=ka(n,a);t>e&&this.text.skip(t-e)},span:(e,t,a,o)=>{for(let i=e;i<t;){let s=this.text.next(Math.min(512,t-i));s==null?(r.addLineStartIfNotCovered(n),r.addBreak(),i++):(r.ensureLine(n),r.addText(s,a,i==e?o:a.length),i+=s.length),n=null}i=a.length}});this.openWidget=a>i,this.openWidget||r.addLineStartIfNotCovered(n),this.openMarks=a}forward(e,t,n=1){t-e<=10?this.old.advance(t-e,n,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(t-e-10,-1),this.old.advance(5,n,this.reuseWalker))}getCompositionContext(e){let t=[],n=null;for(let r=e.parentNode;;r=r.parentNode){let e=V.get(r);if(r==this.view.contentDOM)break;e instanceof ha?t.push(e):e?.isLine()?n=e:e instanceof da||(r.nodeName==`DIV`&&!n&&r!=this.view.contentDOM?n=new fa(r,Oa):n||t.push(ha.of(new Dr({tagName:r.nodeName.toLowerCase(),attributes:wr(r)}),r)))}return{line:n,marks:t}}};function Ea(e,t){let n=e=>{for(let r of e.children)if((t?r.isText():r.length)||n(r))return!0;return!1};return n(e)}function Da(e){let t=e.isReplace?(e.startSide<0?64:0)|(e.endSide>0?128:0):e.startSide>0?32:16;return e.block&&(t|=256),t}var Oa={class:`cm-line`};function ka(e,t){let n=t.spec.attributes,r=t.spec.class;return!n&&!r?e:(e||={class:`cm-line`},n&&yr(n,e),r&&(e.class+=` `+r),e)}function Aa(e){let t=[];for(let n=e.parents.length;n>1;n--){let r=n==e.parents.length?e.tile:e.parents[n].tile;r instanceof ha&&t.push(r.mark)}return t}function ja(e){let t=V.get(e);return t&&t.setDOM(e.cloneNode()),e}var Ma=class extends Tr{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}};Ma.inline=new Ma(`span`),Ma.block=new Ma(`div`);var Na=new class extends Tr{toDOM(){return document.createElement(`br`)}get isHidden(){return!0}get editable(){return!0}},Pa=class{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=R.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new ua(e,e.contentDOM),this.updateInner([new aa(0,0,0,e.state.doc.length)],null)}update(e){let t=e.changedRanges;this.minWidth>0&&t.length&&(t.every(({fromA:e,toA:t})=>t<this.minWidthFrom||e>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let n=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(this.domChanged?.newSel?n=this.domChanged.newSel.head:!Ga(e.changes,this.hasComposition)&&!e.selectionSet&&(n=e.state.selection.main.head));let r=n>-1?Ra(this.view,e.changes,n):null;if(this.domChanged=null,this.hasComposition){let{from:n,to:r}=this.hasComposition;t=new aa(n,r,e.changes.mapPos(n,-1),e.changes.mapPos(r,1)).addToSet(t.slice())}this.hasComposition=r?{from:r.range.fromB,to:r.range.toB}:null,(L.ie||L.chrome)&&!r&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let i=this.decorations,a=this.blockWrappers;this.updateDeco();let o=Va(i,this.decorations,e.changes);o.length&&(t=aa.extendWithRanges(t,o));let s=Ua(a,this.blockWrappers,e.changes);return s.length&&(t=aa.extendWithRanges(t,s)),r&&!t.some(e=>e.fromA<=r.range.fromA&&e.toA>=r.range.toA)&&(t=r.range.addToSet(t.slice())),this.tile.flags&2&&t.length==0?!1:(this.updateInner(t,r),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t){this.view.viewState.mustMeasureContent=!0;let{observer:n}=this.view;n.ignore(()=>{if(t||e.length){let n=this.tile,r=new Ta(this.view,n,this.blockWrappers,this.decorations,this.dynamicDecorationMap);t&&V.get(t.text)&&r.cache.reused.set(V.get(t.text),2),this.tile=r.run(e,t),Fa(n,r.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+`px`,this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+`px`:``;let r=L.chrome||L.ios?{node:n.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(r),r&&(r.written||n.selectionRange.focusNode!=r.node||!this.tile.dom.contains(r.node))&&(this.forceSelection=!0),this.tile.dom.style.height=``});let r=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let e of this.tile.children)e.isWidget()&&e.widget instanceof Ka&&r.push(e.dom);n.updateGaps(r)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let e of t.effects)e.is(Vi)&&(this.editContextFormatting=e.value)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let{dom:n}=this.tile,r=this.view.root.activeElement,i=r==n,a=!i&&!(this.view.state.facet(Ui)||n.tabIndex>-1)&&Ir(n,this.view.observer.selectionRange)&&!(r&&n.contains(r));if(!(i||t||a))return;let o=this.forceSelection;this.forceSelection=!1;let s=this.view.state.selection.main,c,l;if(s.empty?l=c=this.inlineDOMNearPos(s.anchor,s.assoc||1):(l=this.inlineDOMNearPos(s.head,s.head==s.from?1:-1),c=this.inlineDOMNearPos(s.anchor,s.anchor==s.from?1:-1)),L.gecko&&s.empty&&!this.hasComposition&&Ia(c)){let e=document.createTextNode(``);this.view.observer.ignore(()=>c.node.insertBefore(e,c.node.childNodes[c.offset]||null)),c=l=new ai(e,0),o=!0}let u=this.view.observer.selectionRange;(o||!u.focusNode||(!Rr(c.node,c.offset,u.anchorNode,u.anchorOffset)||!Rr(l.node,l.offset,u.focusNode,u.focusOffset))&&!this.suppressWidgetCursorChange(u,s))&&(this.view.observer.ignore(()=>{L.android&&L.chrome&&n.contains(u.focusNode)&&Wa(u.focusNode,n)&&(n.blur(),n.focus({preventScroll:!0}));let e=Pr(this.view.root);if(e)if(s.empty){if(L.gecko){let e=za(c.node,c.offset);if(e&&e!=3){let t=(e==1?ri:ii)(c.node,c.offset);t&&(c=new ai(t.node,t.offset))}}e.collapse(c.node,c.offset),s.bidiLevel!=null&&e.caretBidiLevel!==void 0&&(e.caretBidiLevel=s.bidiLevel)}else if(e.extend){e.collapse(c.node,c.offset);try{e.extend(l.node,l.offset)}catch{}}else{let t=document.createRange();s.anchor>s.head&&([c,l]=[l,c]),t.setEnd(l.node,l.offset),t.setStart(c.node,c.offset),e.removeAllRanges(),e.addRange(t)}a&&this.view.root.activeElement==n&&(n.blur(),r&&r.focus())}),this.view.observer.setSelectionRange(c,l)),this.impreciseAnchor=c.precise?null:new ai(u.anchorNode,u.anchorOffset),this.impreciseHead=l.precise?null:new ai(u.focusNode,u.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&Rr(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,n=Pr(e.root),{anchorNode:r,anchorOffset:i}=e.observer.selectionRange;if(!n||!t.empty||!t.assoc||!n.modify)return;let a=this.lineAt(t.head,t.assoc);if(!a)return;let o=a.posAtStart;if(t.head==o||t.head==o+a.length)return;let s=this.coordsAt(t.head,-1),c=this.coordsAt(t.head,1);if(!s||!c||s.bottom>c.top)return;let l=this.domAtPos(t.head+t.assoc,t.assoc);n.collapse(l.node,l.offset),n.modify(`move`,t.assoc<0?`forward`:`backward`,`lineboundary`),e.observer.readSelectionRange();let u=e.observer.selectionRange;e.docView.posFromDOM(u.anchorNode,u.anchorOffset)!=t.from&&n.collapse(r,i)}posFromDOM(e,t){let n=this.tile.nearest(e);if(!n)return this.tile.dom.compareDocumentPosition(e)&2?0:this.view.state.doc.length;let r=n.posAtStart;if(n.isComposite()){let i;if(e==n.dom)i=n.dom.childNodes[t];else{let r=Hr(e)==0?0:t==0?-1:1;for(;;){let t=e.parentNode;if(t==n.dom)break;r==0&&t.firstChild!=t.lastChild&&(r=e==t.firstChild?-1:1),e=t}i=r<0?e:e.nextSibling}if(i==n.dom.firstChild)return r;for(;i&&!V.get(i);)i=i.nextSibling;if(!i)return r+n.length;for(let e=0,t=r;;e++){let r=n.children[e];if(r.dom==i)return t;t+=r.length+r.breakAfter}}else if(n.isText())return e==n.dom?r+t:r+(t?n.length:0);else return r}domAtPos(e,t){let{tile:n,offset:r}=this.tile.resolveBlock(e,t);return n.isWidget()?n.domPosFor(e,t):n.domIn(r,t)}inlineDOMNearPos(e,t){let n,r=-1,i=!1,a,o=-1,s=!1;return this.tile.blockTiles((t,c)=>{if(t.isWidget()){if(t.flags&32&&c>=e)return!0;t.flags&16&&(i=!0)}else{let l=c+t.length;if(c<=e&&(n=t,r=e-c,i=l<e),l>=e&&!a&&(a=t,o=e-c,s=c>e),c>e&&a)return!0}}),!n&&!a?this.domAtPos(e,t):(i&&a?n=null:s&&n&&(a=null),n&&t<0||!a?n.domIn(r,t):a.domIn(o,t))}coordsAt(e,t){let{tile:n,offset:r}=this.tile.resolveBlock(e,t);return n.isWidget()?n.widget instanceof Ka?null:n.coordsInWidget(r,t,!0):n.coordsIn(r,t)}lineAt(e,t){let{tile:n}=this.tile.resolveBlock(e,t);return n.isLine()?n:null}coordsForChar(e){let{tile:t,offset:n}=this.tile.resolveBlock(e,1);if(!t.isLine())return null;function r(e,t){if(e.isComposite())for(let n of e.children){if(n.length>=t){let e=r(n,t);if(e)return e}if(t-=n.length,t<0)break}else if(e.isText()&&t<e.length){let n=xt(e.text,t);if(n==t)return null;let r=Qr(e.dom,t,n).getClientRects();for(let e=0;e<r.length;e++){let t=r[e];if(e==r.length-1||t.top<t.bottom&&t.left<t.right)return t}}return null}return r(t,n)}measureVisibleLineHeights(e){let t=[],{from:n,to:r}=e,i=this.view.contentDOM.clientWidth,a=i>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,o=-1,s=this.view.textDirection==z.LTR,c=0,l=(e,u,d)=>{for(let f=0;f<e.children.length&&!(u>r);f++){let r=e.children[f],p=u+r.length,m=r.dom.getBoundingClientRect(),{height:h}=m;if(d&&!f&&(c+=m.top-d.top),r instanceof da)p>n&&l(r,u,m);else if(u>=n&&(c>0&&t.push(-c),t.push(h+c),c=0,a)){let e=r.dom.lastChild,t=e?Lr(e):[];if(t.length){let e=t[t.length-1],n=s?e.right-m.left:m.right-e.left;n>o&&(o=n,this.minWidth=i,this.minWidthFrom=u,this.minWidthTo=p)}}d&&f==e.children.length-1&&(c+=d.bottom-m.bottom),u=p+r.breakAfter}};return l(this.tile,0,null),t}textDirectionAt(e){let{tile:t}=this.tile.resolveBlock(e,1);return getComputedStyle(t.dom).direction==`rtl`?z.RTL:z.LTR}measureTextSize(){let e=this.tile.blockTiles(e=>{if(e.isLine()&&e.children.length&&e.length<=20){let t=0,n;for(let r of e.children){if(!r.isText()||/[^ -~]/.test(r.text))return;let e=Lr(r.dom);if(e.length!=1)return;t+=e[0].width,n=e[0].height}if(t)return{lineHeight:e.dom.getBoundingClientRect().height,charWidth:t/e.length,textHeight:n}}});if(e)return e;let t=document.createElement(`div`),n,r,i;return t.className=`cm-line`,t.style.width=`99999px`,t.style.position=`absolute`,t.textContent=`abc def ghi jkl mno pqr stu`,this.view.observer.ignore(()=>{this.tile.dom.appendChild(t);let e=Lr(t.firstChild)[0];n=t.getBoundingClientRect().height,r=e&&e.width?e.width/27:7,i=e&&e.height?e.height:n,t.remove()}),{lineHeight:n,charWidth:r,textHeight:i}}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let n=0,r=0;;r++){let i=r==t.viewports.length?null:t.viewports[r],a=i?i.from-1:this.view.state.doc.length;if(a>n){let r=(t.lineBlockAt(a).bottom-t.lineBlockAt(n).top)/this.view.scaleY;e.push(R.replace({widget:new Ka(r),block:!0,inclusive:!0,isBlockGap:!0}).range(n,a))}if(!i)break;n=i.to+1}return R.set(e)}updateDeco(){let e=1,t=this.view.state.facet(Xi).map(t=>(this.dynamicDecorationMap[e++]=typeof t==`function`)?t(this.view):t),n=!1,r=this.view.state.facet(Qi).map((e,t)=>{let r=typeof e==`function`;return r&&(n=!0),r?e(this.view):e});for(r.length&&(this.dynamicDecorationMap[e++]=n,t.push(F.join(r))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(Zi).map(e=>typeof e==`function`?e(this.view):e)}scrollIntoView(e){if(e.isSnapshot){let t=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=t.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let t of this.view.state.facet(Ri))try{if(t(this.view,e.range,e))return!0}catch(e){Hi(this.view.state,e,`scroll handler`)}let{range:t}=e,n=this.coordsAt(t.head,t.assoc??(t.empty?0:t.head>t.anchor?-1:1)),r;if(!n)return;!t.empty&&(r=this.coordsAt(t.anchor,t.anchor>t.head?-1:1))&&(n={left:Math.min(n.left,r.left),top:Math.min(n.top,r.top),right:Math.max(n.right,r.right),bottom:Math.max(n.bottom,r.bottom)});let i=ra(this.view),a={left:n.left-i.left,top:n.top-i.top,right:n.right+i.right,bottom:n.bottom+i.bottom},{offsetWidth:o,offsetHeight:s}=this.view.scrollDOM;if(Kr(this.view.scrollDOM,a,t.head<t.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,o),-o),Math.max(Math.min(e.yMargin,s),-s),this.view.textDirection==z.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(n.top>window.pageYOffset+window.visualViewport.offsetTop+window.visualViewport.height||n.bottom<window.pageYOffset+window.visualViewport.offsetTop)){let e=this.view.docView.lineAt(t.head,1);e&&e.dom.scrollIntoView({block:`nearest`})}}lineHasWidget(e){let t=e=>e.isWidget()||e.children.some(t);return t(this.tile.resolveBlock(e,1).tile)}destroy(){Fa(this.tile)}};function Fa(e,t){let n=t?.get(e);if(n!=1){n??e.destroy();for(let n of e.children)Fa(n,t)}}function Ia(e){return e.node.nodeType==1&&e.node.firstChild&&(e.offset==0||e.node.childNodes[e.offset-1].contentEditable==`false`)&&(e.offset==e.node.childNodes.length||e.node.childNodes[e.offset].contentEditable==`false`)}function La(e,t){let n=e.observer.selectionRange;if(!n.focusNode)return null;let r=ri(n.focusNode,n.focusOffset),i=ii(n.focusNode,n.focusOffset),a=r||i;if(i&&r&&i.node!=r.node){let t=V.get(i.node);if(!t||t.isText()&&t.text!=i.node.nodeValue)a=i;else if(e.docView.lastCompositionAfterCursor){let e=V.get(r.node);!e||e.isText()&&e.text!=r.node.nodeValue||(a=i)}}if(e.docView.lastCompositionAfterCursor=a!=r,!a)return null;let o=t-a.offset;return{from:o,to:o+a.node.nodeValue.length,node:a.node}}function Ra(e,t,n){let r=La(e,n);if(!r)return null;let{node:i,from:a,to:o}=r,s=i.nodeValue;if(/[\n\r]/.test(s)||e.state.doc.sliceString(r.from,r.to)!=s)return null;let c=t.invertedDesc;return{range:new aa(c.mapPos(a),c.mapPos(o),a,o),text:i}}function za(e,t){return e.nodeType==1?(t&&e.childNodes[t-1].contentEditable==`false`?1:0)|(t<e.childNodes.length&&e.childNodes[t].contentEditable==`false`?2:0):0}var Ba=class{constructor(){this.changes=[]}compareRange(e,t){Mr(e,t,this.changes)}comparePoint(e,t){Mr(e,t,this.changes)}boundChange(e){Mr(e,e,this.changes)}};function Va(e,t,n){let r=new Ba;return F.compare(e,t,n,r),r.changes}var Ha=class{constructor(){this.changes=[]}compareRange(e,t){Mr(e,t,this.changes)}comparePoint(){}boundChange(e){Mr(e,e,this.changes)}};function Ua(e,t,n){let r=new Ha;return F.compare(e,t,n,r),r.changes}function Wa(e,t){for(let n=e;n&&n!=t;n=n.assignedSlot||n.parentNode)if(n.nodeType==1&&n.contentEditable==`false`)return!0;return!1}function Ga(e,t){let n=!1;return t&&e.iterChangedRanges((e,r)=>{e<t.to&&r>t.from&&(n=!0)}),n}var Ka=class extends Tr{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement(`div`);return e.className=`cm-gap`,this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+`px`,!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}};function qa(e,t,n=1){let r=e.charCategorizer(t),i=e.doc.lineAt(t),a=t-i.from;if(i.length==0)return A.cursor(t);a==0?n=1:a==i.length&&(n=-1);let o=a,s=a;n<0?o=xt(i.text,a,!1):s=xt(i.text,a);let c=r(i.text.slice(o,s));for(;o>0;){let e=xt(i.text,o,!1);if(r(i.text.slice(e,o))!=c)break;o=e}for(;s<i.length;){let e=xt(i.text,s);if(r(i.text.slice(s,e))!=c)break;s=e}return A.undirectionalRange(o+i.from,s+i.from)}function Ja(e,t,n,r,i){let a=Math.round((r-t.left)*e.defaultCharacterWidth);if(e.lineWrapping&&n.height>e.defaultLineHeight*1.5){let t=e.viewState.heightOracle.textHeight,r=Math.floor((i-n.top-(e.defaultLineHeight-t)*.5)/t);a+=r*e.viewState.heightOracle.lineLength}let o=e.state.sliceDoc(n.from,n.to);return n.from+Kn(o,a,e.state.tabSize)}function Ya(e,t,n){let r=e.lineBlockAt(t);if(Array.isArray(r.type)){let e;for(let i of r.type){if(i.from>t)break;if(!(i.to<t)){if(i.from<t&&i.to>t)return i;(!e||i.type==Er.Text&&(e.type!=i.type||(n<0?i.from<t:i.to>t)))&&(e=i)}}return e||r}return r}function Xa(e,t,n,r){let i=Ya(e,t.head,t.assoc||-1),a=!r||i.type!=Er.Text||!(e.lineWrapping||i.widgetLineBreaks)?null:e.coordsAtPos(t.assoc<0&&t.head>i.from?t.head-1:t.head);if(a){let t=e.dom.getBoundingClientRect(),r=e.textDirectionAt(i.from),o=e.posAtCoords({x:n==(r==z.LTR)?t.right-1:t.left+1,y:(a.top+a.bottom)/2});if(o!=null)return A.cursor(o,n?-1:1)}return A.cursor(n?i.to:i.from,n?-1:1)}function Za(e,t,n,r){let i=e.state.doc.lineAt(t.head),a=e.bidiSpans(i),o=e.textDirectionAt(i.from);for(let s=t,c=null;;){let t=Ti(i,a,o,s,n),l=wi;if(!t){if(i.number==(n?e.state.doc.lines:1))return s;l=`
`,i=e.state.doc.line(i.number+(n?1:-1)),a=e.bidiSpans(i),t=e.visualLineSide(i,!n)}if(!c){if(!r)return t;c=r(l)}else if(!c(l))return s;s=t}}function Qa(e,t,n){let r=e.state.charCategorizer(t),i=r(n);return e=>{let t=r(e);return i==N.Space&&(i=t),i==t}}function $a(e,t,n,r){let i=t.head,a=n?1:-1;if(i==(n?e.state.doc.length:0))return A.cursor(i,t.assoc);let o=t.goalColumn,s,c=e.contentDOM.getBoundingClientRect(),l=e.coordsAtPos(i,t.assoc||((t.empty?n:t.head==t.from)?1:-1)),u=e.documentTop;if(l)o??=l.left-c.left,s=a<0?l.top:l.bottom;else{let t=e.viewState.lineBlockAt(i);o??=Math.min(c.right-c.left,e.defaultCharacterWidth*(i-t.from)),s=(a<0?t.top:t.bottom)+u}let d=c.left+o,f=e.viewState.heightOracle.textHeight>>1,p=r??f;for(let t=0;;t+=f){let r=s+(p+t)*a,i=io(e,{x:d,y:r},!1,a);if(n?r>c.bottom:r<c.top)return A.cursor(i.pos,i.assoc);let l=e.coordsAtPos(i.pos,i.assoc),u=l?(l.top+l.bottom)/2:0;if(!l||(n?u>s:u<s))return A.cursor(i.pos,i.assoc,void 0,o)}}function eo(e,t,n){for(;;){let r=0;for(let i of e)i.between(t-1,t+1,(e,i,a)=>{if(t>e&&t<i){let a=r||n||(t-e<i-t?-1:1);t=a<0?e:i,r=a}});if(!r)return t}}function to(e,t){let n=null;for(let r=0;r<t.ranges.length;r++){let i=t.ranges[r],a=null;if(i.empty){let t=eo(e,i.from,0);t!=i.from&&(a=A.cursor(t,-1))}else{let t=eo(e,i.from,-1),n=eo(e,i.to,1);(t!=i.from||n!=i.to)&&(a=i.undirectional?A.undirectionalRange(i.from,i.to):A.range(i.from==i.anchor?t:n,i.from==i.head?t:n))}a&&(n||=t.ranges.slice(),n[r]=a)}return n?A.create(n,t.mainIndex):t}function no(e,t,n){let r=eo(e.state.facet($i).map(t=>t(e)),n.from,t.head>n.from?-1:1);return r==n.from?n:A.cursor(r,r<n.from?1:-1)}var ro=class{constructor(e,t){this.pos=e,this.assoc=t}};function io(e,t,n,r){let i=e.contentDOM.getBoundingClientRect(),a=i.top+e.viewState.paddingTop,{x:o,y:s}=t,c=s-a,l;for(;;){if(c<0)return new ro(0,1);if(c>e.viewState.docHeight)return new ro(e.state.doc.length,-1);if(l=e.elementAtHeight(c),r==null)break;if(l.type==Er.Text){if(r<0?l.to<e.viewport.from:l.from>e.viewport.to)break;let t=e.docView.coordsAt(r<0?l.from:l.to,r>0?-1:1);if(t&&(r<0?t.top<=c+a:t.bottom>=c+a))break}let t=e.viewState.heightOracle.textHeight/2;c=r>0?l.bottom+t:l.top-t}if(e.viewport.from>=l.to||e.viewport.to<=l.from){if(n)return null;if(l.type==Er.Text){let t=Ja(e,i,l,o,s);return new ro(t,t==l.from?1:-1)}}if(l.type!=Er.Text)return c<(l.top+l.bottom)/2?new ro(l.from,1):new ro(l.to,-1);let u=e.docView.lineAt(l.from,2);return(!u||u.length!=l.length)&&(u=e.docView.lineAt(l.from,-2)),new ao(e,o,s,e.textDirectionAt(l.from)).scanTile(u,l.from)}var ao=class{constructor(e,t,n,r){this.view=e,this.x=t,this.y=n,this.baseDir=r,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[hi.find(r,e-n.from,-1,t)].level==this.baseDir}dirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[hi.find(r,e-n.from,-1,t)].dir}bidiIn(e,t){let{spans:n,line:r}=this.bidiSpansAt(e);return n.length>1||n.length&&(n[0].level!=this.baseDir||n[0].to+r.from<t)}scan(e,t,n=!1){let r=0,i=e.length-1,a=new Set,o=this.bidiIn(e[0],e[i]),s,c,l=-1,u=1e9,d;search:for(;r<i;){let n=i-r,f=r+i>>1;adjust:if(a.has(f)){let e=r+Math.floor(Math.random()*n);for(let t=0;t<n;t++){if(!a.has(e)){f=e;break adjust}e++,e==i&&(e=r)}break search}a.add(f);let p=t(f);if(p)for(let t=0;t<p.length;t++){let n=p[t],a=0;if(!(n.width==0&&p.length>1)){if(n.bottom<this.y)(!s||s.bottom<n.bottom)&&(s=n),a=1;else if(n.top>this.y)(!c||c.top>n.top)&&(c=n),a=-1;else{let e=n.left>this.x?this.x-n.left:n.right<this.x?this.x-n.right:0,t=Math.abs(e);t<u&&(l=f,u=t,d=n),e&&(a=e<0==(this.baseDir==z.LTR)?-1:1)}a==-1&&(!o||this.baseDirAt(e[f],1))?i=f:a==1&&(!o||this.baseDirAt(e[f+1],-1))&&(r=f+1)}}}if(!d){if(!c&&!s)return{i:e[0],after:!1};let n=s&&(!c||this.y-s.bottom<c.top-this.y)?s:c;return this.y=(n.top+n.bottom)/2,this.scan(e,t,!0)}if(u&&!n){let{top:n,bottom:r}=d;if(s&&s.bottom>(n+n+r)/3)return this.y=s.bottom-1,this.scan(e,t,!0);if(c&&c.top<(n+r+r)/3)return this.y=c.top+1,this.scan(e,t,!0)}let f=(o?this.dirAt(e[l],1):this.baseDir)==z.LTR;return{i:l,after:this.x>(d.left+d.right)/2==f}}scanText(e,t){let n=[];for(let r=0;r<e.length;r=xt(e.text,r))n.push(t+r);n.push(t+e.length);let r=this.scan(n,r=>{let i=n[r]-t,a=n[r+1]-t;return Qr(e.dom,i,a).getClientRects()});return r.after?new ro(n[r.i+1],-1):new ro(n[r.i],1)}scanTile(e,t){if(!e.length)return new ro(t,1);if(e.children.length==1){let n=e.children[0];if(n.isText())return this.scanText(n,t);if(n.isComposite())return this.scanTile(n,t)}let n=[t];for(let r=0,i=t;r<e.children.length;r++)n.push(i+=e.children[r].length);let r=this.scan(n,t=>{let n=e.children[t];return n.flags&48?null:(n.dom.nodeType==1?n.dom:Qr(n.dom,0,n.length)).getClientRects()}),i=e.children[r.i],a=n[r.i];return i.isText()?this.scanText(i,a):i.isComposite()?this.scanTile(i,a):r.after?new ro(n[r.i+1],-1):new ro(a,1)}},oo=`￿`,so=class{constructor(e,t){this.points=e,this.view=t,this.text=``,this.lineSeparator=t.state.facet(P.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=oo}readRange(e,t){if(!e)return this;let n=e.parentNode;for(let r=e;;){this.findPointBefore(n,r);let e=this.text.length;this.readNode(r);let i=V.get(r),a=r.nextSibling;if(a==t){i?.breakAfter&&!a&&n!=this.view.contentDOM&&this.lineBreak();break}let o=V.get(a);(i&&o?i.breakAfter:(i?i.breakAfter:Br(r))||Br(a)&&(r.nodeName!=`BR`||i?.isWidget())&&this.text.length>e)&&!lo(a,t)&&this.lineBreak(),r=a}return this.findPointBefore(n,t),this}readTextNode(e){let t=e.nodeValue;for(let n of this.points)n.node==e&&(n.pos=this.text.length+Math.min(n.offset,t.length));for(let n=0,r=this.lineSeparator?null:/\r\n?|\n/g;;){let i=-1,a=1,o;if(this.lineSeparator?(i=t.indexOf(this.lineSeparator,n),a=this.lineSeparator.length):(o=r.exec(t))&&(i=o.index,a=o[0].length),this.append(t.slice(n,i<0?t.length:i)),i<0)break;if(this.lineBreak(),a>1)for(let t of this.points)t.node==e&&t.pos>this.text.length&&(t.pos-=a-1);n=i+a}}readNode(e){let t=V.get(e),n=t&&t.overrideDOMText;if(n!=null){this.findPointInside(e,n.length);for(let e=n.iter();!e.next().done;)e.lineBreak?this.lineBreak():this.append(e.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName==`BR`?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let n of this.points)n.node==e&&e.childNodes[n.offset]==t&&(n.pos=this.text.length)}findPointInside(e,t){for(let n of this.points)(e.nodeType==3?n.node==e:e.contains(n.node))&&(n.pos=this.text.length+(co(e,n.node,n.offset)?t:0))}};function co(e,t,n){for(;;){if(!t||n<Hr(t))return!1;if(t==e)return!0;n=zr(t)+1,t=t.parentNode}}function lo(e,t){let n;for(;!(e==t||!e);e=e.nextSibling){let t=V.get(e);if(!t?.isWidget())return!1;t&&(n||=[]).push(t)}if(n){for(let e of n)if(e.overrideDOMText?.length)return!1}return!0}var uo=class{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}},fo=class{constructor(e,t,n,r){this.typeOver=r,this.bounds=null,this.text=``,this.domChanged=t>-1;let{impreciseHead:i,impreciseAnchor:a}=e.docView,o=e.state.selection;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=po(e.docView.tile,t,n,0))){let t=i||a?[]:vo(e),n=new so(t,e);n.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=n.text,this.newSel=yo(t,this.bounds.from)}else{let t=e.observer.selectionRange,n=i&&i.node==t.focusNode&&i.offset==t.focusOffset||!Fr(e.contentDOM,t.focusNode)?o.main.head:e.docView.posFromDOM(t.focusNode,t.focusOffset),r=a&&a.node==t.anchorNode&&a.offset==t.anchorOffset||!Fr(e.contentDOM,t.anchorNode)?o.main.anchor:e.docView.posFromDOM(t.anchorNode,t.anchorOffset),s=e.viewport;if((L.ios||L.chrome)&&n!=r&&Math.min(n,r)<=o.main.from&&Math.max(n,r)>=o.main.to&&(s.from>0||s.to<e.state.doc.length)){let t=Math.min(n,r),i=Math.max(n,r),a=s.from-t,o=s.to-i;(a==0||a==1||t==0)&&(o==0||o==-1||i==e.state.doc.length)&&(n=0,r=e.state.doc.length)}if(e.inputState.composing>-1&&o.ranges.length>1)this.newSel=o.replaceRange(A.range(r,n));else if(e.lineWrapping&&r==n&&!(o.main.empty&&o.main.head==n)&&e.inputState.lastTouchTime>Date.now()-100){let t=e.coordsAtPos(n,-1),r=0;t&&(r=e.inputState.lastTouchY<=t.bottom?-1:1),this.newSel=A.create([A.cursor(n,r)])}else this.newSel=A.single(r,n)}}};function po(e,t,n,r){if(e.isComposite()){let i=-1,a=-1,o=-1,s=-1;for(let c=0,l=r,u=r;c<e.children.length;c++){let r=e.children[c],d=l+r.length;if(l<t&&d>n)return po(r,t,n,l);if(d>=t&&i==-1&&(i=c,a=l),l>n&&r.dom.parentNode==e.dom){o=c,s=u;break}u=d,l=d+r.breakAfter}return{from:a,to:s<0?r+e.length:s,startDOM:(i?e.children[i-1].dom.nextSibling:null)||e.dom.firstChild,endDOM:o<e.children.length&&o>=0?e.children[o].dom:null}}else if(e.isText())return{from:r,to:r+e.length,startDOM:e.dom,endDOM:e.dom.nextSibling};else return null}function mo(e,t){let n,{newSel:r}=t,{state:i}=e,a=i.selection.main,o=e.inputState.lastKeyTime>Date.now()-100?e.inputState.lastKeyCode:-1;if(t.bounds){let{from:e,to:r}=t.bounds,s=a.from,c=null;(o===8||L.android&&t.text.length<r-e)&&(s=a.to,c=`end`);let l=i.doc.sliceString(e,r,oo),u,d;!a.empty&&a.from>=e&&a.to<=r&&(t.typeOver||l!=t.text)&&l.slice(0,a.from-e)==t.text.slice(0,a.from-e)&&l.slice(a.to-e)==t.text.slice(u=t.text.length-(l.length-(a.to-e)))?n={from:a.from,to:a.to,insert:k.of(t.text.slice(a.from-e,u).split(oo))}:(d=_o(l,t.text,s-e,c))&&(L.chrome&&o==13&&d.toB==d.from+2&&t.text.slice(d.from,d.toB)==`￿￿`&&d.toB--,n={from:e+d.from,to:e+d.toA,insert:k.of(t.text.slice(d.from,d.toB).split(oo))})}else r&&(!e.hasFocus&&i.facet(Ui)||bo(r,a))&&(r=null);if(!n&&!r)return!1;if((L.mac||L.android)&&n&&n.from==n.to&&n.from==a.head-1&&/^\. ?$/.test(n.insert.toString())&&e.contentDOM.getAttribute(`autocorrect`)==`off`?(r&&n.insert.length==2&&(r=A.single(r.main.anchor-1,r.main.head-1)),n={from:n.from,to:n.to,insert:k.of([n.insert.toString().replace(`.`,` `)])}):i.doc.lineAt(a.from).to<a.to&&e.docView.lineHasWidget(a.to)&&e.inputState.insertingTextAt>Date.now()-50?n={from:a.from,to:a.to,insert:i.toText(e.inputState.insertingText)}:L.chrome&&n&&n.from==n.to&&n.from==a.head&&n.insert.toString()==`
 `&&e.lineWrapping&&(r&&=A.single(r.main.anchor-1,r.main.head-1),n={from:a.from,to:a.to,insert:k.of([` `])}),n)return ho(e,n,r,o);if(r&&!bo(r,a)){let t=!1,n=`select`;return e.inputState.lastSelectionTime>Date.now()-50&&(e.inputState.lastSelectionOrigin==`select`&&(t=!0),n=e.inputState.lastSelectionOrigin,n==`select.pointer`&&(r=to(i.facet($i).map(t=>t(e)),r))),e.dispatch({selection:r,scrollIntoView:t,userEvent:n}),!0}else return!1}function ho(e,t,n,r=-1){if(L.ios&&e.inputState.flushIOSKey(t))return!0;let i=e.state.selection.main;if(L.android&&(t.to==i.to&&(t.from==i.from||t.from==i.from-1&&e.state.sliceDoc(t.from,i.from)==` `)&&t.insert.length==1&&t.insert.lines==2&&$r(e.contentDOM,`Enter`,13)||(t.from==i.from-1&&t.to==i.to&&t.insert.length==0||r==8&&t.insert.length<t.to-t.from&&t.to>i.head)&&$r(e.contentDOM,`Backspace`,8)||t.from==i.from&&t.to==i.to+1&&t.insert.length==0&&$r(e.contentDOM,`Delete`,46)))return!0;let a=t.insert.toString();e.inputState.composing>=0&&e.inputState.composing++;let o,s=()=>o||=go(e,t,n);return e.state.facet(Mi).some(n=>n(e,t.from,t.to,a,s))||e.dispatch(s()),!0}function go(e,t,n){let r,i=e.state,a=i.selection.main,o=-1;if(t.from==t.to&&t.from<a.from||t.from>a.to){let n=t.from<a.from?-1:1,r=n<0?a.from:a.to,s=eo(i.facet($i).map(t=>t(e)),r,n);t.from==s&&(o=s)}if(o>-1)r={changes:t,selection:A.cursor(t.from+t.insert.length,-1)};else if(t.from>=a.from&&t.to<=a.to&&t.to-t.from>=(a.to-a.from)/3&&(!n||n.main.empty&&n.main.from==t.from+t.insert.length)&&e.inputState.composing<0){let n=a.from<t.from?i.sliceDoc(a.from,t.from):``,o=a.to>t.to?i.sliceDoc(t.to,a.to):``;r=i.replaceSelection(e.state.toText(n+t.insert.sliceString(0,void 0,e.state.lineBreak)+o))}else{let o=i.changes(t),s=n&&n.main.to<=o.newLength?n.main:void 0;if(i.selection.ranges.length>1&&(e.inputState.composing>=0||e.inputState.compositionPendingChange)&&t.to<=a.to+10&&t.to>=a.to-10){let c=e.state.sliceDoc(t.from,t.to),l,u=n&&La(e,n.main.head);if(u){let e=t.insert.length-(t.to-t.from);l={from:u.from,to:u.to-e}}else l=e.state.doc.lineAt(a.head);let d=a.to-t.to;r=i.changeByRange(n=>{if(n.from==a.from&&n.to==a.to)return{changes:o,range:s||n.map(o)};let r=n.to-d,u=r-c.length;if(e.state.sliceDoc(u,r)!=c||r>=l.from&&u<=l.to)return{range:n};let f=i.changes({from:u,to:r,insert:t.insert}),p=n.to-a.to;return{changes:f,range:s?A.range(Math.max(0,s.anchor+p),Math.max(0,s.head+p)):n.map(f)}})}else r={changes:o,selection:s&&i.selection.replaceRange(s)}}let s=`input.type`;return(e.composing||e.inputState.compositionPendingChange&&e.inputState.compositionEndedAt>Date.now()-50)&&(e.inputState.compositionPendingChange=!1,s+=`.compose`,e.inputState.compositionFirstChange&&(s+=`.start`,e.inputState.compositionFirstChange=!1)),i.update(r,{userEvent:s,scrollIntoView:!0})}function _o(e,t,n,r){let i=Math.min(e.length,t.length),a=0;for(;a<i&&e.charCodeAt(a)==t.charCodeAt(a);)a++;if(a==i&&e.length==t.length)return null;let o=e.length,s=t.length;for(;o>0&&s>0&&e.charCodeAt(o-1)==t.charCodeAt(s-1);)o--,s--;if(r==`end`){let e=Math.max(0,a-Math.min(o,s));n-=o+e-a}if(o<a&&e.length<t.length){let e=n<=a&&n>=o?a-n:0;a-=e,s=a+(s-o),o=a}else if(s<a){let e=n<=a&&n>=s?a-n:0;a-=e,o=a+(o-s),s=a}return{from:a,toA:o,toB:s}}function vo(e){let t=[];if(e.root.activeElement!=e.contentDOM)return t;let{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}=e.observer.selectionRange;return n&&(t.push(new uo(n,r)),(i!=n||a!=r)&&t.push(new uo(i,a))),t}function yo(e,t){if(e.length==0)return null;let n=e[0].pos,r=e.length==2?e[1].pos:n;return n>-1&&r>-1?A.single(n+t,r+t):null}function bo(e,t){return t.head==e.main.head&&t.anchor==e.main.anchor}var xo=class{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText=``,this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,L.safari&&e.contentDOM.addEventListener(`input`,()=>null),L.gecko&&is(e.contentDOM.ownerDocument)}handleEvent(e){!Fo(this.view,e)||this.ignoreDuringComposition(e)||e.type==`keydown`&&this.keydown(e)||(this.view.updateState==0?this.runHandlers(e.type,e):Promise.resolve().then(()=>this.runHandlers(e.type,e)))}runHandlers(e,t){let n=this.handlers[e];if(n){for(let e of n.observers)e(this.view,t);for(let e of n.handlers){if(t.defaultPrevented)break;if(e(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=wo(e),n=this.handlers,r=this.view.contentDOM;for(let e in t)if(e!=`scroll`){let i=!t[e].handlers.length,a=n[e];a&&i!=!a.handlers.length&&(r.removeEventListener(e,this.handleEvent),a=null),a||r.addEventListener(e,this.handleEvent,{passive:i})}for(let e in n)e!=`scroll`&&!t[e]&&r.removeEventListener(e,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&Do.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),L.android&&L.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;if(L.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&(To.some(t=>t.keyCode==e.keyCode)&&!e.ctrlKey||Eo.indexOf(e.key)>-1&&e.ctrlKey)){let t={ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey,shiftKey:e.shiftKey};return t.shiftKey&&L.ios&&!/^(off|none)$/.test(this.view.contentDOM.autocapitalize)&&So(this.view.win)&&(t.shiftKey=!1),this.pendingIOSKey={key:e.key,keyCode:e.keyCode,mods:t},setTimeout(()=>this.flushIOSKey(),250),!0}return e.keyCode!=229&&this.view.observer.forceFlush(),!1}flushIOSKey(e){let t=this.pendingIOSKey;return!t||t.key==`Enter`&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,$r(this.view.contentDOM,t.key,t.keyCode,t.mods))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:L.safari&&!L.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}};function So(e){return e.visualViewport?e.visualViewport.height*e.visualViewport.scale/e.document.documentElement.clientHeight<.85:!1}function Co(e,t){return(n,r)=>{try{return t.call(e,r,n)}catch(e){Hi(n.state,e)}}}function wo(e){let t=Object.create(null);function n(e){return t[e]||(t[e]={observers:[],handlers:[]})}for(let t of e){let e=t.spec,r=e&&e.plugin.domEventHandlers,i=e&&e.plugin.domEventObservers;if(r)for(let e in r){let i=r[e];i&&n(e).handlers.push(Co(t.value,i))}if(i)for(let e in i){let r=i[e];r&&n(e).observers.push(Co(t.value,r))}}for(let e in Io)n(e).handlers.push(Io[e]);for(let e in Lo)n(e).observers.push(Lo[e]);return t}var To=[{key:`Backspace`,keyCode:8,inputType:`deleteContentBackward`},{key:`Enter`,keyCode:13,inputType:`insertParagraph`},{key:`Enter`,keyCode:13,inputType:`insertLineBreak`},{key:`Delete`,keyCode:46,inputType:`deleteContentForward`}],Eo=`dthko`,Do=[16,17,18,20,91,92,224,225],Oo=6;function ko(e){return Math.max(0,e)*.7+8}function Ao(e,t){return Math.max(Math.abs(e.clientX-t.clientX),Math.abs(e.clientY-t.clientY))}var jo=class{constructor(e,t,n,r){this.view=e,this.startEvent=t,this.style=n,this.mustSelect=r,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=qr(e.contentDOM),this.atoms=e.state.facet($i).map(t=>t(e));let i=e.contentDOM.ownerDocument;i.addEventListener(`mousemove`,this.move=this.move.bind(this)),i.addEventListener(`mouseup`,this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(P.allowMultipleSelections)&&Mo(e,t),this.dragging=Po(e,t)&&qo(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&Ao(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,n=0,r=0,i=0,a=this.view.win.innerWidth,o=this.view.win.innerHeight;this.scrollParents.x&&({left:r,right:a}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:i,bottom:o}=this.scrollParents.y.getBoundingClientRect());let s=ra(this.view);e.clientX-s.left<=r+Oo?t=-ko(r-e.clientX):e.clientX+s.right>=a-Oo&&(t=ko(e.clientX-a)),e.clientY-s.top<=i+Oo?n=-ko(i-e.clientY):e.clientY+s.bottom>=o-Oo&&(n=ko(e.clientY-o)),this.setScrollSpeed(t,n)}up(e){this.dragging??this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener(`mousemove`,this.move),e.removeEventListener(`mouseup`,this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:t}=this,n=to(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!n.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:n,userEvent:`select.pointer`}),this.mustSelect=!1}update(e){e.transactions.some(e=>e.isUserEvent(`input.type`))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}};function Mo(e,t){let n=e.state.facet(Di);return n.length?n[0](t):L.mac?t.metaKey:t.ctrlKey}function No(e,t){let n=e.state.facet(Oi);return n.length?n[0](t):L.mac?!t.altKey:!t.ctrlKey}function Po(e,t){let{main:n}=e.state.selection;if(n.empty)return!1;let r=Pr(e.root);if(!r||r.rangeCount==0)return!0;let i=r.getRangeAt(0).getClientRects();for(let e=0;e<i.length;e++){let n=i[e];if(n.left<=t.clientX&&n.right>=t.clientX&&n.top<=t.clientY&&n.bottom>=t.clientY)return!0}return!1}function Fo(e,t){if(!t.bubbles)return!0;if(t.defaultPrevented)return!1;for(let n=t.target,r;n!=e.contentDOM;n=n.parentNode)if(!n||n.nodeType==11||(r=V.get(n))&&r.isWidget()&&!r.isHidden&&r.widget.ignoreEvent(t))return!1;return!0}var Io=Object.create(null),Lo=Object.create(null),Ro=L.ie&&L.ie_version<15||L.ios&&L.webkit_version<604;function zo(e){let t=e.dom.parentNode;if(!t)return;let n=t.appendChild(document.createElement(`textarea`));n.style.cssText=`position: fixed; left: -10000px; top: 10px`,n.focus(),setTimeout(()=>{e.focus(),n.remove(),Vo(e,n.value)},50)}function Bo(e,t,n){for(let r of e.facet(t))n=r(n,e);return n}function Vo(e,t){t=Bo(e.state,Pi,t);let{state:n}=e,r,i=1,a=n.toText(t),o=a.lines==n.selection.ranges.length;if($o!=null&&n.selection.ranges.every(e=>e.empty)&&$o==a.toString()){let e=-1;r=n.changeByRange(r=>{let s=n.doc.lineAt(r.from);if(s.from==e)return{range:r};e=s.from;let c=n.toText((o?a.line(i++).text:t)+n.lineBreak);return{changes:{from:s.from,insert:c},range:A.cursor(r.from+c.length)}})}else r=o?n.changeByRange(e=>{let t=a.line(i++);return{changes:{from:e.from,to:e.to,insert:t.text},range:A.cursor(e.from+t.length)}}):n.replaceSelection(a);e.dispatch(r,{userEvent:`input.paste`,scrollIntoView:!0})}Lo.scroll=e=>{e.inputState.lastScrollTop=e.scrollDOM.scrollTop,e.inputState.lastScrollLeft=e.scrollDOM.scrollLeft},Lo.wheel=Lo.mousewheel=e=>{e.inputState.lastWheelEvent=Date.now()},Io.keydown=(e,t)=>(e.inputState.setSelectionOrigin(`select`),t.keyCode==27&&e.inputState.tabFocusMode!=0&&(e.inputState.tabFocusMode=Date.now()+2e3),!1),Lo.touchstart=(e,t)=>{let n=e.inputState,r=t.targetTouches[0];n.lastTouchTime=Date.now(),r&&(n.lastTouchX=r.clientX,n.lastTouchY=r.clientY),n.setSelectionOrigin(`select.pointer`)},Lo.touchmove=e=>{e.inputState.setSelectionOrigin(`select.pointer`)},Io.mousedown=(e,t)=>{if(e.observer.flush(),e.inputState.lastTouchTime>Date.now()-2e3)return!1;let n=null;for(let r of e.state.facet(ki))if(n=r(e,t),n)break;if(!n&&t.button==0&&(n=Jo(e,t)),n){let r=!e.hasFocus;e.inputState.startMouseSelection(new jo(e,t,n,r)),r&&e.observer.ignore(()=>{Xr(e.contentDOM);let t=e.root.activeElement;t&&!t.contains(e.contentDOM)&&t.blur()});let i=e.inputState.mouseSelection;if(i)return i.start(t),i.dragging===!1}else e.inputState.setSelectionOrigin(`select.pointer`);return!1};function Ho(e,t,n,r){if(r==1)return A.cursor(t,n);if(r==2)return qa(e.state,t,n);{let r=e.docView.lineAt(t,n),i=e.state.doc.lineAt(r?r.posAtEnd:t),a=r?r.posAtStart:i.from,o=r?r.posAtEnd:i.to;return o<e.state.doc.length&&o==i.to&&o++,A.undirectionalRange(a,o)}}var Uo=L.ie&&L.ie_version<=11,Wo=null,Go=0,Ko=0;function qo(e){if(!Uo)return e.detail;let t=Wo,n=Ko;return Wo=e,Ko=Date.now(),Go=!t||n>Date.now()-400&&Math.abs(t.clientX-e.clientX)<2&&Math.abs(t.clientY-e.clientY)<2?(Go+1)%3:1}function Jo(e,t){let n=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),r=qo(t),i=e.state.selection;return{update(e){e.docChanged&&(n.pos=e.changes.mapPos(n.pos),i=i.map(e.changes))},get(t,a,o){let s=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),c,l=Ho(e,s.pos,s.assoc,r);if(n.pos!=s.pos&&!a){let t=Ho(e,n.pos,n.assoc,r),i=Math.min(t.from,l.from),a=Math.max(t.to,l.to);l=i<l.from?A.range(i,a,l.assoc):A.range(a,i,l.assoc)}return a?i.replaceRange(i.main.extend(l.from,l.to,l.assoc)):o&&r==1&&i.ranges.length>1&&(c=Yo(i,s.pos))?c:o?i.addRange(l):A.create([l])}}}function Yo(e,t){for(let n=0;n<e.ranges.length;n++){let{from:r,to:i}=e.ranges[n];if(r<=t&&i>=t)return A.create(e.ranges.slice(0,n).concat(e.ranges.slice(n+1)),e.mainIndex==n?0:e.mainIndex-+(e.mainIndex>n))}return null}Io.dragstart=(e,t)=>{let{selection:{main:n}}=e.state;if(t.target.draggable){let r=e.docView.tile.nearest(t.target);if(r&&r.isWidget()){let e=r.posAtStart,t=e+r.length;(e>=n.to||t<=n.from)&&(n=A.undirectionalRange(e,t))}}let{inputState:r}=e;return r.mouseSelection&&(r.mouseSelection.dragging=!0),r.draggedContent=n,t.dataTransfer&&(t.dataTransfer.setData(`Text`,Bo(e.state,Fi,e.state.sliceDoc(n.from,n.to))),t.dataTransfer.effectAllowed=`copyMove`),!1},Io.dragend=e=>(e.inputState.draggedContent=null,!1);function Xo(e,t,n,r){if(n=Bo(e.state,Pi,n),!n)return;let i=e.posAtCoords({x:t.clientX,y:t.clientY},!1),{draggedContent:a}=e.inputState,o=r&&a&&No(e,t)?{from:a.from,to:a.to}:null,s={from:i,insert:n},c=e.state.changes(o?[o,s]:s);e.focus(),e.dispatch({changes:c,selection:{anchor:c.mapPos(i,-1),head:c.mapPos(i,1)},userEvent:o?`move.drop`:`input.drop`}),e.inputState.draggedContent=null}Io.drop=(e,t)=>{if(!t.dataTransfer)return!1;if(e.state.readOnly)return!0;let n=t.dataTransfer.files;if(n&&n.length){let r=Array(n.length),i=0,a=()=>{++i==n.length&&Xo(e,t,r.filter(e=>e!=null).join(e.state.lineBreak),!1)};for(let e=0;e<n.length;e++){let t=new FileReader;t.onerror=a,t.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(t.result)||(r[e]=t.result),a()},t.readAsText(n[e])}return!0}else{let n=t.dataTransfer.getData(`Text`);if(n)return Xo(e,t,n,!0),!0}return!1},Io.paste=(e,t)=>{if(e.state.readOnly)return!0;e.observer.flush();let n=Ro?null:t.clipboardData;return n?(Vo(e,n.getData(`text/plain`)||n.getData(`text/uri-list`)),!0):(zo(e),!1)};function Zo(e,t){let n=e.dom.parentNode;if(!n)return;let r=n.appendChild(document.createElement(`textarea`));r.style.cssText=`position: fixed; left: -10000px; top: 10px`,r.value=t,r.focus(),r.selectionEnd=t.length,r.selectionStart=0,setTimeout(()=>{r.remove(),e.focus()},50)}function Qo(e){let t=[],n=[],r=!1;for(let r of e.selection.ranges)r.empty||(t.push(e.sliceDoc(r.from,r.to)),n.push(r));if(!t.length){let i=-1;for(let{from:r}of e.selection.ranges){let a=e.doc.lineAt(r);a.number>i&&(t.push(a.text),n.push({from:a.from,to:Math.min(e.doc.length,a.to+1)})),i=a.number}r=!0}return{text:Bo(e,Fi,t.join(e.lineBreak)),ranges:n,linewise:r}}var $o=null;Io.copy=Io.cut=(e,t)=>{if(!Ir(e.contentDOM,e.observer.selectionRange))return!1;let{text:n,ranges:r,linewise:i}=Qo(e.state);if(!n&&!i)return!1;$o=i?n:null,t.type==`cut`&&!e.state.readOnly&&e.dispatch({changes:r,scrollIntoView:!0,userEvent:`delete.cut`});let a=Ro?null:t.clipboardData;return a?(a.clearData(),a.setData(`text/plain`,n),!0):(Zo(e,n),!1)};var es=dn.define();function ts(e,t){let n=[];for(let r of e.facet(Ni)){let i=r(e,t);i&&n.push(i)}return n.length?e.update({effects:n,annotations:es.of(!0)}):null}function ns(e){setTimeout(()=>{let t=e.hasFocus;if(t!=e.inputState.notifiedFocused){let n=ts(e.state,t);n?e.dispatch(n):e.update([])}},10)}Lo.focus=e=>{e.inputState.lastFocusTime=Date.now(),!e.scrollDOM.scrollTop&&(e.inputState.lastScrollTop||e.inputState.lastScrollLeft)&&(e.scrollDOM.scrollTop=e.inputState.lastScrollTop,e.scrollDOM.scrollLeft=e.inputState.lastScrollLeft),ns(e)},Lo.blur=e=>{e.observer.clearSelectionRange(),ns(e)},Lo.compositionstart=Lo.compositionupdate=e=>{e.observer.editContext||(e.inputState.compositionFirstChange??(e.inputState.compositionFirstChange=!0),e.inputState.composing<0&&(e.inputState.composing=0))},Lo.compositionend=e=>{e.observer.editContext||(e.inputState.composing=-1,e.inputState.compositionEndedAt=Date.now(),e.inputState.compositionPendingKey=!0,e.inputState.compositionPendingChange=e.observer.pendingRecords().length>0,e.inputState.compositionFirstChange=null,L.chrome&&L.android?e.observer.flushSoon():e.inputState.compositionPendingChange?Promise.resolve().then(()=>e.observer.flush()):setTimeout(()=>{e.inputState.composing<0&&e.docView.hasComposition&&e.update([])},50))},Lo.contextmenu=e=>{e.inputState.lastContextMenu=Date.now()},Io.beforeinput=(e,t)=>{if((t.inputType==`insertText`||t.inputType==`insertCompositionText`)&&(e.inputState.insertingText=t.data,e.inputState.insertingTextAt=Date.now()),t.inputType==`insertReplacementText`&&e.observer.editContext){let n=t.dataTransfer?.getData(`text/plain`),r=t.getTargetRanges();if(n&&r.length){let t=r[0];return ho(e,{from:e.posAtDOM(t.startContainer,t.startOffset),to:e.posAtDOM(t.endContainer,t.endOffset),insert:e.state.toText(n)},null),!0}}let n;if(L.chrome&&L.android&&(n=To.find(e=>e.inputType==t.inputType))&&(e.observer.delayAndroidKey(n.key,n.keyCode),n.key==`Backspace`||n.key==`Delete`)){let t=window.visualViewport?.height||0;setTimeout(()=>{(window.visualViewport?.height||0)>t+10&&e.hasFocus&&(e.contentDOM.blur(),e.focus())},100)}return L.ios&&t.inputType==`deleteContentForward`&&e.observer.flushSoon(),L.safari&&t.inputType==`insertText`&&e.inputState.composing>=0&&setTimeout(()=>Lo.compositionend(e,t),20),!1};var rs=new Set;function is(e){rs.has(e)||(rs.add(e),e.addEventListener(`copy`,()=>{}),e.addEventListener(`cut`,()=>{}))}var as=[`pre-wrap`,`normal`,`pre-line`,`break-spaces`],os=!1;function ss(){os=!1}var cs=class{constructor(e){this.lineWrapping=e,this.doc=k.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let n=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(n+=Math.max(0,Math.ceil((t-e-n*this.lineLength*.5)/this.lineLength))),this.lineHeight*n}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return as.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];r<0?n++:this.heightSamples[Math.floor(r*10)]||(t=!0,this.heightSamples[Math.floor(r*10)]=!0)}return t}refresh(e,t,n,r,i,a){let o=as.indexOf(e)>-1,s=Math.abs(t-this.lineHeight)>.3||this.lineWrapping!=o;if(this.lineWrapping=o,this.lineHeight=t,this.charWidth=n,this.textHeight=r,this.lineLength=i,s){this.heightSamples={};for(let e=0;e<a.length;e++){let t=a[e];t<0?e++:this.heightSamples[Math.floor(t*10)]=!0}}return s}},ls=class{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}},us=class e{constructor(e,t,n,r,i){this.from=e,this.length=t,this.top=n,this.height=r,this._content=i}get type(){return typeof this._content==`number`?Er.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof kr?this._content.widget:null}get widgetLineBreaks(){return typeof this._content==`number`?this._content:0}join(t){let n=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(t._content)?t._content:[t]);return new e(this.from,this.length+t.length,this.top,this.height+t.height,n)}},H=(function(e){return e[e.ByPos=0]=`ByPos`,e[e.ByHeight=1]=`ByHeight`,e[e.ByPosNoHeight=2]=`ByPosNoHeight`,e})(H||={}),ds=.001,fs=class e{constructor(e,t,n=2){this.length=e,this.height=t,this.flags=n}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>ds&&(os=!0),this.height=e)}replace(t,n,r){return e.of(r)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,n,r){let i=this,a=n.doc;for(let o=r.length-1;o>=0;o--){let{fromA:s,toA:c,fromB:l,toB:u}=r[o],d=i.lineAt(s,H.ByPosNoHeight,n.setDoc(t),0,0),f=d.to>=c?d:i.lineAt(c,H.ByPosNoHeight,n,0,0);for(u+=f.to-c,c=f.to;o>0&&d.from<=r[o-1].toA;)s=r[o-1].fromA,l=r[o-1].fromB,o--,s<d.from&&(d=i.lineAt(s,H.ByPosNoHeight,n,0,0));l+=d.from-s,s=d.from;let p=xs.build(n.setDoc(a),e,l,u);i=ps(i,i.replace(s,c,p))}return i.updateHeight(n,0)}static empty(){return new gs(0,0,0)}static of(t){if(t.length==1)return t[0];let n=0,r=t.length,i=0,a=0;for(;;)if(n==r)if(i>a*2){let e=t[n-1];e.break?t.splice(--n,1,e.left,null,e.right):t.splice(--n,1,e.left,e.right),r+=1+e.break,i-=e.size}else if(a>i*2){let e=t[r];e.break?t.splice(r,1,e.left,null,e.right):t.splice(r,1,e.left,e.right),r+=2+e.break,a-=e.size}else break;else if(i<a){let e=t[n++];e&&(i+=e.size)}else{let e=t[--r];e&&(a+=e.size)}let o=0;return t[n-1]==null?(o=1,n--):t[n]??(o=1,r++),new vs(e.of(t.slice(0,n)),o,e.of(t.slice(r)))}};function ps(e,t){return e==t?e:(e.constructor!=t.constructor&&(os=!0),t)}fs.prototype.size=1;var ms=R.replace({}),hs=class extends fs{constructor(e,t,n){super(e,t),this.deco=n,this.spaceAbove=0}mainBlock(e,t){return new us(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,t,n,r){return this.spaceAbove&&e<n+this.spaceAbove?new us(r,0,n,this.spaceAbove,ms):this.mainBlock(n,r)}lineAt(e,t,n,r,i){let a=this.mainBlock(r,i);return this.spaceAbove?this.blockAt(0,n,r,i).join(a):a}forEachLine(e,t,n,r,i,a){e<=i+this.length&&t>=i&&a(this.lineAt(0,H.ByPos,n,r,i))}setMeasuredHeight(e){let t=e.heights[e.index++];t<0?(this.spaceAbove=-t,t=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(t)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more&&this.setMeasuredHeight(r),this.outdated=!1,this}toString(){return`block(${this.length})`}},gs=class e extends hs{constructor(e,t,n){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=n}mainBlock(e,t){return new us(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(t,n,r){let i=r[0];return r.length==1&&(i instanceof e||i instanceof _s&&i.flags&4)&&Math.abs(this.length-i.length)<10?(i instanceof _s?i=new e(i.length,this.height,this.spaceAbove):i.height=this.height,this.outdated||(i.outdated=!1),i):fs.of(r)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more?this.setMeasuredHeight(r):(n||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:``}${this.widgetHeight?`:`+this.widgetHeight:``})`}},_s=class e extends fs{constructor(e){super(e,0)}heightMetrics(e,t){let n=e.doc.lineAt(t).number,r=e.doc.lineAt(t+this.length).number,i=r-n+1,a,o=0;if(e.lineWrapping){let t=Math.min(this.height,e.lineHeight*i);a=t/i,this.length>i+1&&(o=(this.height-t)/(this.length-i-1))}else a=this.height/i;return{firstLine:n,lastLine:r,perLine:a,perChar:o}}blockAt(e,t,n,r){let{firstLine:i,lastLine:a,perLine:o,perChar:s}=this.heightMetrics(t,r);if(t.lineWrapping){let i=r+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-n)/this.height))*this.length)),a=t.doc.lineAt(i),c=o+a.length*s,l=Math.max(n,e-c/2);return new us(a.from,a.length,l,c,0)}else{let r=Math.max(0,Math.min(a-i,Math.floor((e-n)/o))),{from:s,length:c}=t.doc.line(i+r);return new us(s,c,n+o*r,o,0)}}lineAt(e,t,n,r,i){if(t==H.ByHeight)return this.blockAt(e,n,r,i);if(t==H.ByPosNoHeight){let{from:t,to:r}=n.doc.lineAt(e);return new us(t,r-t,0,0,0)}let{firstLine:a,perLine:o,perChar:s}=this.heightMetrics(n,i),c=n.doc.lineAt(e),l=o+c.length*s,u=c.number-a,d=r+o*u+s*(c.from-i-u);return new us(c.from,c.length,Math.max(r,Math.min(d,r+this.height-l)),l,0)}forEachLine(e,t,n,r,i,a){e=Math.max(e,i),t=Math.min(t,i+this.length);let{firstLine:o,perLine:s,perChar:c}=this.heightMetrics(n,i);for(let l=e,u=r;l<=t;){let t=n.doc.lineAt(l);if(l==e){let n=t.number-o;u+=s*n+c*(e-i-n)}let r=s+c*t.length;a(new us(t.from,t.length,u,r,0)),u+=r,l=t.to+1}}replace(t,n,r){let i=this.length-n;if(i>0){let t=r[r.length-1];t instanceof e?r[r.length-1]=new e(t.length+i):r.push(null,new e(i-1))}if(t>0){let n=r[0];n instanceof e?r[0]=new e(t+n.length):r.unshift(new e(t-1),null)}return fs.of(r)}decomposeLeft(t,n){n.push(new e(t-1),null)}decomposeRight(t,n){n.push(null,new e(this.length-t-1))}updateHeight(t,n=0,r=!1,i){let a=n+this.length;if(i&&i.from<=n+this.length&&i.more){let r=[],o=Math.max(n,i.from),s=-1;for(i.from>n&&r.push(new e(i.from-n-1).updateHeight(t,n));o<=a&&i.more;){let e=t.doc.lineAt(o).length;r.length&&r.push(null);let n=i.heights[i.index++],a=0;n<0&&(a=-n,n=i.heights[i.index++]),s==-1?s=n:Math.abs(n-s)>=ds&&(s=-2);let c=new gs(e,n,a);c.outdated=!1,r.push(c),o+=e+1}o<=a&&r.push(null,new e(a-o).updateHeight(t,o));let c=fs.of(r);return(s<0||Math.abs(c.height-this.height)>=ds||Math.abs(s-this.heightMetrics(t,n).perLine)>=ds)&&(os=!0),ps(this,c)}else(r||this.outdated)&&(this.setHeight(t.heightForGap(n,n+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}},vs=class extends fs{constructor(e,t,n){super(e.length+t+n.length,e.height+n.height,t|(e.outdated||n.outdated?2:0)),this.left=e,this.right=n,this.size=e.size+n.size}get break(){return this.flags&1}blockAt(e,t,n,r){let i=n+this.left.height;return e<i?this.left.blockAt(e,t,n,r):this.right.blockAt(e,t,i,r+this.left.length+this.break)}lineAt(e,t,n,r,i){let a=r+this.left.height,o=i+this.left.length+this.break,s=t==H.ByHeight?e<a:e<o,c=s?this.left.lineAt(e,t,n,r,i):this.right.lineAt(e,t,n,a,o);if(this.break||(s?c.to<o:c.from>o))return c;let l=t==H.ByPosNoHeight?H.ByPosNoHeight:H.ByPos;return s?c.join(this.right.lineAt(o,l,n,a,o)):this.left.lineAt(o,l,n,r,i).join(c)}forEachLine(e,t,n,r,i,a){let o=r+this.left.height,s=i+this.left.length+this.break;if(this.break)e<s&&this.left.forEachLine(e,t,n,r,i,a),t>=s&&this.right.forEachLine(e,t,n,o,s,a);else{let c=this.lineAt(s,H.ByPos,n,r,i);e<c.from&&this.left.forEachLine(e,c.from-1,n,r,i,a),c.to>=e&&c.from<=t&&a(c),t>c.to&&this.right.forEachLine(c.to+1,t,n,o,s,a)}}replace(e,t,n){let r=this.left.length+this.break;if(t<r)return this.balanced(this.left.replace(e,t,n),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-r,t-r,n));let i=[];e>0&&this.decomposeLeft(e,i);let a=i.length;for(let e of n)i.push(e);if(e>0&&ys(i,a-1),t<this.length){let e=i.length;this.decomposeRight(t,i),ys(i,e)}return fs.of(i)}decomposeLeft(e,t){let n=this.left.length;if(e<=n)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(n++,e>=n&&t.push(null)),e>n&&this.right.decomposeLeft(e-n,t)}decomposeRight(e,t){let n=this.left.length,r=n+this.break;if(e>=r)return this.right.decomposeRight(e-r,t);e<n&&this.left.decomposeRight(e,t),this.break&&e<r&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?fs.of(this.break?[e,null,t]:[e,t]):(this.left=ps(this.left,e),this.right=ps(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,n=!1,r){let{left:i,right:a}=this,o=t+i.length+this.break,s=null;return r&&r.from<=t+i.length&&r.more?s=i=i.updateHeight(e,t,n,r):i.updateHeight(e,t,n),r&&r.from<=o+a.length&&r.more?s=a=a.updateHeight(e,o,n,r):a.updateHeight(e,o,n),s?this.balanced(i,a):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?` `:`-`)+this.right}};function ys(e,t){let n,r;e[t]==null&&(n=e[t-1])instanceof _s&&(r=e[t+1])instanceof _s&&e.splice(t-1,3,new _s(n.length+1+r.length))}var bs=5,xs=class e{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let e=Math.min(t,this.lineEnd),n=this.nodes[this.nodes.length-1];n instanceof gs?n.length+=e-this.pos:(e>this.pos||!this.isCovered)&&this.nodes.push(new gs(e-this.pos,-1,0)),this.writtenTo=e,t>e&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,n){if(e<t||n.heightRelevant){let r=n.widget?n.widget.estimatedHeight:0,i=n.widget?n.widget.lineBreaks:0;r<0&&(r=this.oracle.lineHeight);let a=t-e;n.block?this.addBlock(new hs(a,r,n)):(a||i||r>=bs)&&this.addLineDeco(r,i,a)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new gs(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,t){let n=new _s(t-e);return this.oracle.doc.lineAt(e).to==t&&(n.flags|=4),n}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof gs)return e;let t=new gs(0,-1,0);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos+=e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,n){let r=this.ensureLine();r.length+=n,r.collapsed+=n,r.widgetHeight=Math.max(r.widgetHeight,e),r.breaks+=t,this.writtenTo=this.pos+=n}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof gs)&&!this.isCovered?this.nodes.push(new gs(0,-1,0)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let n=e;for(let e of this.nodes)e instanceof gs&&e.updateHeight(this.oracle,n),n+=e?e.length:1;return this.nodes}static build(t,n,r,i){let a=new e(r,t);return F.spans(n,r,i,a,0),a.finish(r)}};function Ss(e,t,n){let r=new Cs;return F.compare(e,t,n,r,0),r.changes}var Cs=class{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,n,r){(e<t||n&&n.heightRelevant||r&&r.heightRelevant)&&Mr(e,t,this.changes,5)}};function ws(e,t){let n=e.getBoundingClientRect(),r=e.ownerDocument,i=r.defaultView||window,a=Math.max(0,n.left),o=Math.min(i.innerWidth,n.right),s=Math.max(0,n.top),c=Math.min(i.innerHeight,n.bottom);for(let t=e.parentNode;t&&t!=r.body;)if(t.nodeType==1){let n=t,r=window.getComputedStyle(n);if((n.scrollHeight>n.clientHeight||n.scrollWidth>n.clientWidth)&&r.overflow!=`visible`){let r=n.getBoundingClientRect();a=Math.max(a,r.left),o=Math.min(o,r.right),s=Math.max(s,r.top),c=Math.min(t==e.parentNode?i.innerHeight:c,r.bottom)}t=r.position==`absolute`||r.position==`fixed`?n.offsetParent:n.parentNode}else if(t.nodeType==11)t=t.host;else break;return{left:a-n.left,right:Math.max(a,o)-n.left,top:s-(n.top+t),bottom:Math.max(s,c)-(n.top+t)}}function Ts(e){let t=e.getBoundingClientRect(),n=e.ownerDocument.defaultView||window;return t.left<n.innerWidth&&t.right>0&&t.top<n.innerHeight&&t.bottom>0}function Es(e,t){let n=e.getBoundingClientRect();return{left:0,right:n.right-n.left,top:t,bottom:n.bottom-(n.top+t)}}var Ds=class{constructor(e,t,n,r){this.from=e,this.to=t,this.size=n,this.displaySize=r}static same(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.size!=i.size)return!1}return!0}draw(e,t){return R.replace({widget:new Os(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}},Os=class extends Tr{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement(`div`);return this.vertical?e.style.height=this.size+`px`:(e.style.width=this.size+`px`,e.style.height=`2px`,e.style.display=`inline-block`),e}get estimatedHeight(){return this.vertical?this.size:-1}},ks=class{constructor(e,t){this.view=e,this.state=t,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=Fs,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=z.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let n=t.facet(Yi).some(e=>typeof e!=`function`&&e.class==`cm-lineWrapping`);this.heightOracle=new cs(n),this.stateDeco=Is(t),this.heightMap=fs.empty().applyChanges(this.stateDeco,k.empty,this.heightOracle.setDoc(t.doc),[new aa(0,0,0,t.doc.length)]);for(let e=0;e<2&&(this.viewport=this.getViewport(0,null),this.updateForViewport());e++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=R.set(this.lineGaps.map(e=>e.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let n=0;n<=1;n++){let r=n?t.head:t.anchor;if(!e.some(({from:e,to:t})=>r>=e&&r<=t)){let{from:t,to:n}=this.lineBlockAt(r);e.push(new As(t,n))}}return this.viewports=e.sort((e,t)=>e.from-t.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?Fs:new Ls(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(Rs(e,this.scaler))})}update(e,t=null){this.state=e.state;let n=this.stateDeco;this.stateDeco=Is(this.state);let r=e.changedRanges,i=aa.extendWithRanges(r,Ss(n,this.stateDeco,e?e.changes:At.empty(this.state.doc.length))),a=this.heightMap.height,o=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);ss(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),i),(this.heightMap.height!=a||os)&&(e.flags|=2),o?(this.scrollAnchorPos=e.changes.mapPos(o.from,-1),this.scrollAnchorHeight=o.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=a);let s=i.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<s.from||t.range.head>s.to)||!this.viewportIsAppropriate(s))&&(s=this.getViewport(0,t));let c=s.from!=this.viewport.from||s.to!=this.viewport.to;this.viewport=s,e.flags|=this.updateForViewport(),(c||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(Li)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,t=e.contentDOM,n=window.getComputedStyle(t),r=this.heightOracle,i=n.whiteSpace;this.defaultTextDirection=n.direction==`rtl`?z.RTL:z.LTR;let a=this.heightOracle.mustRefreshForWrapping(i)||this.mustMeasureContent===`refresh`,o=t.getBoundingClientRect(),s=a||this.mustMeasureContent||this.contentDOMHeight!=o.height;this.contentDOMHeight=o.height,this.mustMeasureContent=!1;let c=0,l=0;if(o.width&&o.height){let{scaleX:e,scaleY:n}=Gr(t,o);(e>.005&&Math.abs(this.scaleX-e)>.005||n>.005&&Math.abs(this.scaleY-n)>.005)&&(this.scaleX=e,this.scaleY=n,c|=16,a=s=!0)}let u=(parseInt(n.paddingTop)||0)*this.scaleY,d=(parseInt(n.paddingBottom)||0)*this.scaleY;(this.paddingTop!=u||this.paddingBottom!=d)&&(this.paddingTop=u,this.paddingBottom=d,c|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(r.lineWrapping&&(s=!0),this.editorWidth=e.scrollDOM.clientWidth,c|=16);let f=qr(this.view.contentDOM,!1).y;f!=this.scrollParent&&(this.scrollParent=f,this.scrollAnchorHeight=-1,this.scrollOffset=0);let p=this.getScrollOffset();this.scrollOffset!=p&&(this.scrollAnchorHeight=-1,this.scrollOffset=p),this.scrolledToBottom=ni(this.scrollParent||e.win);let m=(this.printing?Es:ws)(t,this.paddingTop),h=m.top-this.pixelViewport.top,g=m.bottom-this.pixelViewport.bottom;this.pixelViewport=m;let _=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(_!=this.inView&&(this.inView=_,_&&(s=!0)),!this.inView&&!this.scrollTarget&&!Ts(e.dom))return 0;let v=o.width;if((this.contentDOMWidth!=v||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=o.width,this.editorHeight=e.scrollDOM.clientHeight,c|=16),s){let t=e.docView.measureVisibleLineHeights(this.viewport);if(r.mustRefreshForHeights(t)&&(a=!0),a||r.lineWrapping&&Math.abs(v-this.contentDOMWidth)>r.charWidth){let{lineHeight:n,charWidth:o,textHeight:s}=e.docView.measureTextSize();a=n>0&&r.refresh(i,n,o,s,Math.max(5,v/o),t),a&&(e.docView.minWidth=0,c|=16)}h>0&&g>0?l=Math.max(h,g):h<0&&g<0&&(l=Math.min(h,g)),ss();for(let n of this.viewports){let i=n.from==this.viewport.from?t:e.docView.measureVisibleLineHeights(n);this.heightMap=(a?fs.empty().applyChanges(this.stateDeco,k.empty,this.heightOracle,[new aa(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(r,0,a,new ls(n.from,i))}os&&(c|=2)}let y=!this.viewportIsAppropriate(this.viewport,l)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return y&&(c&2&&(c|=this.updateScaler()),this.viewport=this.getViewport(l,this.scrollTarget),c|=this.updateForViewport()),(c&2||y)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(a?[]:this.lineGaps,e)),c|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),c}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let n=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),r=this.heightMap,i=this.heightOracle,{visibleTop:a,visibleBottom:o}=this,s=new As(r.lineAt(a-n*1e3,H.ByHeight,i,0,0).from,r.lineAt(o+(1-n)*1e3,H.ByHeight,i,0,0).to);if(t){let{head:e}=t.range;if(e<s.from||e>s.to){let n=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),a=r.lineAt(e,H.ByPos,i,0,0),o;o=t.y==`center`?(a.top+a.bottom)/2-n/2:t.y==`start`||t.y==`nearest`&&e<s.from?a.top:a.bottom-n,s=new As(r.lineAt(o-1e3/2,H.ByHeight,i,0,0).from,r.lineAt(o+n+1e3/2,H.ByHeight,i,0,0).to)}}return s}mapViewport(e,t){let n=t.mapPos(e.from,-1),r=t.mapPos(e.to,1);return new As(this.heightMap.lineAt(n,H.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(r,H.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},n=0){if(!this.inView)return!0;let{top:r}=this.heightMap.lineAt(e,H.ByPos,this.heightOracle,0,0),{bottom:i}=this.heightMap.lineAt(t,H.ByPos,this.heightOracle,0,0),{visibleTop:a,visibleBottom:o}=this;return(e==0||r<=a-Math.max(10,Math.min(-n,250)))&&(t==this.state.doc.length||i>=o+Math.max(10,Math.min(n,250)))&&r>a-2*1e3&&i<o+2*1e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let n=[];for(let r of e)t.touchesRange(r.from,r.to)||n.push(new Ds(t.mapPos(r.from),t.mapPos(r.to),r.size,r.displaySize));return n}ensureLineGaps(e,t){let n=this.heightOracle.lineWrapping,r=n?1e4:2e3,i=r>>1,a=r<<1;if(this.defaultTextDirection!=z.LTR&&!n)return[];let o=[],s=(r,a,c,l)=>{if(a-r<i)return;let u=this.state.selection.main,d=[u.from];u.empty||d.push(u.to);for(let e of d)if(e>r&&e<a){s(r,e-10,c,l),s(e+10,a,c,l);return}let f=Ps(e,e=>e.from>=c.from&&e.to<=c.to&&Math.abs(e.from-r)<i&&Math.abs(e.to-a)<i&&!d.some(t=>e.from<t&&e.to>t));if(!f){if(a<c.to&&t&&n&&t.visibleRanges.some(e=>e.from<=a&&e.to>=a)){let e=t.moveToLineBoundary(A.cursor(a),!1,!0).head;e>r&&(a=e)}let e=this.gapSize(c,r,a,l);f=new Ds(r,a,e,n||e<2e6?e:2e6)}o.push(f)},c=t=>{if(t.length<a||t.type!=Er.Text)return;let i=js(t.from,t.to,this.stateDeco);if(i.total<a)return;let o=this.scrollTarget?this.scrollTarget.range.head:null,c,l;if(n){let e=r/this.heightOracle.lineLength*this.heightOracle.lineHeight,n,a;if(o!=null){let r=Ns(i,o),s=((this.visibleBottom-this.visibleTop)/2+e)/t.height;n=r-s,a=r+s}else n=(this.visibleTop-t.top-e)/t.height,a=(this.visibleBottom-t.top+e)/t.height;c=Ms(i,n),l=Ms(i,a)}else{let n=i.total*this.heightOracle.charWidth,a=r*this.heightOracle.charWidth,s=0;if(n>2e6)for(let n of e)n.from>=t.from&&n.from<t.to&&n.size!=n.displaySize&&n.from*this.heightOracle.charWidth+s<this.pixelViewport.left&&(s=n.size-n.displaySize);let u=this.pixelViewport.left+s,d=this.pixelViewport.right+s,f,p;if(o!=null){let e=Ns(i,o),t=((d-u)/2+a)/n;f=e-t,p=e+t}else f=(u-a)/n,p=(d+a)/n;c=Ms(i,f),l=Ms(i,p)}c>t.from&&s(t.from,c,t,i),l<t.to&&s(l,t.to,t,i)};for(let e of this.viewportLines)Array.isArray(e.type)?e.type.forEach(c):c(e);return o}gapSize(e,t,n,r){let i=Ns(r,n)-Ns(r,t);return this.heightOracle.lineWrapping?e.height*i:r.total*this.heightOracle.charWidth*i}updateLineGaps(e){Ds.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=R.set(e.map(e=>e.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let n=[];F.spans(t,this.viewport.from,this.viewport.to,{span(e,t){n.push({from:e,to:t})},point(){}},20);let r=0;if(n.length!=this.visibleRanges.length)r=12;else for(let t=0;t<n.length&&!(r&8);t++){let i=this.visibleRanges[t],a=n[t];(i.from!=a.from||i.to!=a.to)&&(r|=4,e&&e.mapPos(i.from,-1)==a.from&&e.mapPos(i.to,1)==a.to||(r|=8))}return this.visibleRanges=n,r}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||Rs(this.heightMap.lineAt(e,H.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||Rs(this.heightMap.lineAt(this.scaler.fromDOM(e),H.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return(this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top)*this.scaleY}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return Rs(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}},As=class{constructor(e,t){this.from=e,this.to=t}};function js(e,t,n){let r=[],i=e,a=0;return F.spans(n,e,t,{span(){},point(e,t){e>i&&(r.push({from:i,to:e}),a+=e-i),i=t}},20),i<t&&(r.push({from:i,to:t}),a+=t-i),{total:a,ranges:r}}function Ms({total:e,ranges:t},n){if(n<=0)return t[0].from;if(n>=1)return t[t.length-1].to;let r=Math.floor(e*n);for(let e=0;;e++){let{from:n,to:i}=t[e],a=i-n;if(r<=a)return n+r;r-=a}}function Ns(e,t){let n=0;for(let{from:r,to:i}of e.ranges){if(t<=i){n+=t-r;break}n+=i-r}return n/e.total}function Ps(e,t){for(let n of e)if(t(n))return n}var Fs={toDOM(e){return e},fromDOM(e){return e},scale:1,eq(e){return e==this}};function Is(e){let t=e.facet(Xi).filter(e=>typeof e!=`function`),n=e.facet(Qi).filter(e=>typeof e!=`function`);return n.length&&t.push(F.join(n)),t}var Ls=class e{constructor(e,t,n){let r=0,i=0,a=0;this.viewports=n.map(({from:n,to:i})=>{let a=t.lineAt(n,H.ByPos,e,0,0).top,o=t.lineAt(i,H.ByPos,e,0,0).bottom;return r+=o-a,{from:n,to:i,top:a,bottom:o,domTop:0,domBottom:0}}),this.scale=(7e6-r)/(t.height-r);for(let e of this.viewports)e.domTop=a+(e.top-i)*this.scale,a=e.domBottom=e.domTop+(e.bottom-e.top),i=e.bottom}toDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.top)return r+(e-n)*this.scale;if(e<=i.bottom)return i.domTop+(e-i.top);n=i.bottom,r=i.domBottom}}fromDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.domTop)return n+(e-r)/this.scale;if(e<=i.domBottom)return i.top+(e-i.domTop);n=i.bottom,r=i.domBottom}}eq(t){return t instanceof e?this.scale==t.scale&&this.viewports.length==t.viewports.length&&this.viewports.every((e,n)=>e.from==t.viewports[n].from&&e.to==t.viewports[n].to):!1}};function Rs(e,t){if(t.scale==1)return e;let n=t.toDOM(e.top),r=t.toDOM(e.bottom);return new us(e.from,e.length,n,r-n,Array.isArray(e._content)?e._content.map(e=>Rs(e,t)):e._content)}var zs=j.define({combine:e=>e.join(` `)}),Bs=j.define({combine:e=>e.indexOf(!0)>-1}),Vs=Zn.newName(),Hs=Zn.newName(),Us=Zn.newName(),Ws={"&light":`.`+Hs,"&dark":`.`+Us};function Gs(e,t,n){return new Zn(t,{finish(t){return/&/.test(t)?t.replace(/&\w*/,t=>{if(t==`&`)return e;if(!n||!n[t])throw RangeError(`Unsupported selector: ${t}`);return n[t]}):e+` `+t}})}var Ks=Gs(`.`+Vs,{"&":{position:`relative !important`,boxSizing:`border-box`,"&.cm-focused":{outline:`1px dotted #212121`},display:`flex !important`,flexDirection:`column`},".cm-scroller":{display:`flex !important`,alignItems:`flex-start !important`,fontFamily:`monospace`,lineHeight:1.4,height:`100%`,overflowX:`auto`,position:`relative`,zIndex:0,overflowAnchor:`none`},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:`block`,whiteSpace:`pre`,wordWrap:`normal`,boxSizing:`border-box`,minHeight:`100%`,padding:`4px 0`,outline:`none`,"&[contenteditable=true]":{WebkitUserModify:`read-write-plaintext-only`}},".cm-lineWrapping":{whiteSpace_fallback:`pre-wrap`,whiteSpace:`break-spaces`,wordBreak:`break-word`,overflowWrap:`anywhere`,flexShrink:1},"&light .cm-content":{caretColor:`black`},"&dark .cm-content":{caretColor:`white`},".cm-line":{display:`block`,padding:`0 2px 0 6px`},".cm-layer":{userSelect:`none`,position:`absolute`,left:0,top:0,contain:`size style`,"& > *":{position:`absolute`}},"&light .cm-selectionBackground":{background:`#d9d9d9`},"&dark .cm-selectionBackground":{background:`#222`},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#d7d4f0`},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#233`},".cm-cursorLayer":{pointerEvents:`none`},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:`steps(1) cm-blink 1.2s infinite`},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:`1.2px solid black`,marginLeft:`-0.6px`,pointerEvents:`none`},".cm-cursor":{display:`none`},"&dark .cm-cursor":{borderLeftColor:`#ddd`},".cm-selectionHandle":{backgroundColor:`currentColor`,width:`1.5px`},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:`""`,backgroundColor:`inherit`,borderRadius:`50%`,width:`8px`,height:`8px`,position:`absolute`,left:`-3.25px`},".cm-selectionHandle-start::before":{top:`-8px`},".cm-selectionHandle-end::before":{bottom:`-8px`},".cm-dropCursor":{position:`absolute`},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:`block`},".cm-iso":{unicodeBidi:`isolate`},".cm-announced":{position:`fixed`,top:`-10000px`},"@media print":{".cm-announced":{display:`none`}},"&light .cm-activeLine":{backgroundColor:`#cceeff44`},"&dark .cm-activeLine":{backgroundColor:`#99eeff33`},"&light .cm-specialChar":{color:`red`},"&dark .cm-specialChar":{color:`#f78`},".cm-gutters":{flexShrink:0,display:`flex`,height:`100%`,boxSizing:`border-box`,zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:`#f5f5f5`,color:`#6c6c6c`,border:`0px solid #ddd`,"&.cm-gutters-before":{borderRightWidth:`1px`},"&.cm-gutters-after":{borderLeftWidth:`1px`}},"&dark .cm-gutters":{backgroundColor:`#333338`,color:`#ccc`},".cm-gutter":{display:`flex !important`,flexDirection:`column`,flexShrink:0,boxSizing:`border-box`,minHeight:`100%`,overflow:`hidden`},".cm-gutterElement":{boxSizing:`border-box`},".cm-lineNumbers .cm-gutterElement":{padding:`0 3px 0 5px`,minWidth:`20px`,textAlign:`right`,whiteSpace:`nowrap`},"&light .cm-activeLineGutter":{backgroundColor:`#e2f2ff`},"&dark .cm-activeLineGutter":{backgroundColor:`#222227`},".cm-panels":{boxSizing:`border-box`,position:`sticky`,left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:`#f5f5f5`,color:`black`},"&light .cm-panels-top":{borderBottom:`1px solid #ddd`},"&light .cm-panels-bottom":{borderTop:`1px solid #ddd`},"&dark .cm-panels":{backgroundColor:`#333338`,color:`white`},".cm-dialog":{padding:`2px 19px 4px 6px`,position:`relative`,"& label":{fontSize:`80%`}},".cm-dialog-close":{position:`absolute`,top:`3px`,right:`4px`,backgroundColor:`inherit`,border:`none`,font:`inherit`,fontSize:`14px`,padding:`0`},".cm-tab":{display:`inline-block`,overflow:`hidden`,verticalAlign:`bottom`},".cm-widgetBuffer":{verticalAlign:`text-top`,height:`1em`,width:0,display:`inline`},".cm-placeholder":{color:`#888`,display:`inline-block`,verticalAlign:`top`,userSelect:`none`},".cm-highlightSpace":{backgroundImage:`radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)`,backgroundPosition:`center`},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:`auto 100%`,backgroundPosition:`right 90%`,backgroundRepeat:`no-repeat`},".cm-trailingSpace":{backgroundColor:`#ff332255`},".cm-button":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,padding:`.2em 1em`,borderRadius:`1px`},"&light .cm-button":{backgroundImage:`linear-gradient(#eff1f5, #d9d9df)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#b4b4b4, #d0d3d6)`}},"&dark .cm-button":{backgroundImage:`linear-gradient(#393939, #111)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#111, #333)`}},".cm-textfield":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,border:`1px solid silver`,padding:`.2em .5em`},"&light .cm-textfield":{backgroundColor:`white`},"&dark .cm-textfield":{border:`1px solid #555`,backgroundColor:`inherit`}},Ws),qs={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},Js=L.ie&&L.ie_version<=11,Ys=class{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new Jr,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let e of t)this.queue.push(e);(L.ie&&L.ie_version<=11||L.ios&&e.composing)&&t.some(e=>e.type==`childList`&&e.removedNodes.length||e.type==`characterData`&&e.oldValue.length>e.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&L.android&&e.constructor.EDIT_CONTEXT!==!1&&!(L.chrome&&L.chrome_version<126)&&(this.editContext=new $s(e),e.state.facet(Ui)&&(e.contentDOM.editContext=this.editContext.editContext)),Js&&(this.onCharData=e=>{this.queue.push({target:e.target,type:`characterData`,oldValue:e.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia(`print`)),typeof ResizeObserver==`function`&&(this.resizeScroll=new ResizeObserver(()=>{this.view.docView?.lastUpdate<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver==`function`&&(this.intersection=new IntersectionObserver(e=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),e.length>0&&e[e.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent(`Event`)))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(e=>{e.length>0&&e[e.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent(`Event`))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers(`scroll`,e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type==`change`||!e.type)&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,n)=>t!=e[n]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:n}=this,r=this.selectionRange;if(n.state.facet(Ui)?n.root.activeElement!=this.dom:!Ir(this.dom,r))return;let i=r.anchorNode&&n.docView.tile.nearest(r.anchorNode);if(i&&i.isWidget()&&i.widget.ignoreEvent(e)){t||(this.selectionChanged=!1);return}(L.ie&&L.ie_version<=11||L.android&&L.chrome)&&!n.state.selection.main.empty&&r.focusNode&&Rr(r.focusNode,r.focusOffset,r.anchorNode,r.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=Pr(e.root);if(!t)return!1;let n=L.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&Qs(this.view,t)||t;if(!n||this.selectionRange.eq(n))return!1;let r=Ir(this.dom,n);return r&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&ti(this.dom,n)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(n),r&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let n=this.dom;n;)if(n.nodeType==1)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==n?e++:t||=this.scrollTargets.slice(0,e),t&&t.push(n),n=n.assignedSlot||n.parentNode;else if(n.nodeType==11)n=n.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);for(let e of this.scrollTargets=t)e.addEventListener(`scroll`,this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||=(this.observer.observe(this.dom,qs),Js&&this.dom.addEventListener(`DOMCharacterDataModified`,this.onCharData),!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),Js&&this.dom.removeEventListener(`DOMCharacterDataModified`,this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){if(!this.delayedAndroidKey){let e=()=>{let e=this.delayedAndroidKey;e&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=e.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&e.force&&$r(this.dom,e.key,e.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(e)}(!this.delayedAndroidKey||e==`Enter`)&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!this.delayedAndroidKey?.force})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,n=-1,r=!1;for(let i of e){let e=this.readMutation(i);e&&(e.typeOver&&(r=!0),t==-1?{from:t,to:n}=e:(t=Math.min(e.from,t),n=Math.max(e.to,n)))}return{from:t,to:n,typeOver:r}}readChange(){let{from:e,to:t,typeOver:n}=this.processRecords(),r=this.selectionChanged&&Ir(this.dom,this.selectionRange);if(e<0&&!r)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let i=new fo(this.view,e,t,n);return this.view.docView.domChanged={newSel:i.newSel?i.newSel.main:null},i}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.readChange();if(!t)return this.view.requestMeasure(),!1;let n=this.view.state,r=mo(this.view,t);return this.view.state==n&&(t.domChanged||t.newSel&&!bo(this.view.state.selection,t.newSel.main))&&this.view.update([]),r}readMutation(e){let t=this.view.docView.tile.nearest(e.target);if(!t||t.isWidget())return null;if(t.markDirty(e.type==`attributes`),e.type==`childList`){let n=Xs(t,e.previousSibling||e.target.previousSibling,-1),r=Xs(t,e.nextSibling||e.target.nextSibling,1);return{from:n?t.posAfter(n):t.posAtStart,to:r?t.posBefore(r):t.posAtEnd,typeOver:!1}}else if(e.type==`characterData`)return{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue};else return null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener(`change`,this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener(`beforeprint`,this.onPrint),e.addEventListener(`scroll`,this.onScroll),e.document.addEventListener(`selectionchange`,this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener(`scroll`,this.onScroll),e.removeEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener(`change`,this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener(`beforeprint`,this.onPrint),e.document.removeEventListener(`selectionchange`,this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(Ui)!=e.state.facet(Ui)&&(e.view.contentDOM.editContext=e.state.facet(Ui)?this.editContext.editContext:null))}destroy(){var e,t,n;this.stop(),(e=this.intersection)==null||e.disconnect(),(t=this.gapIntersection)==null||t.disconnect(),(n=this.resizeScroll)==null||n.disconnect();for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}};function Xs(e,t,n){for(;t;){let r=V.get(t);if(r&&r.parent==e)return r;let i=t.parentNode;t=i==e.dom?n>0?t.nextSibling:t.previousSibling:i}return null}function Zs(e,t){let n=t.startContainer,r=t.startOffset,i=t.endContainer,a=t.endOffset,o=e.docView.domAtPos(e.state.selection.main.anchor,1);return Rr(o.node,o.offset,i,a)&&([n,r,i,a]=[i,a,n,r]),{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}}function Qs(e,t){if(t.getComposedRanges){let n=t.getComposedRanges(e.root)[0];if(n)return Zs(e,n)}let n=null;function r(e){e.preventDefault(),e.stopImmediatePropagation(),n=e.getTargetRanges()[0]}return e.contentDOM.addEventListener(`beforeinput`,r,!0),e.dom.ownerDocument.execCommand(`indent`),e.contentDOM.removeEventListener(`beforeinput`,r,!0),n?Zs(e,n):null}var $s=class{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=n=>{let r=e.state.selection.main,{anchor:i,head:a}=r,o=this.toEditorPos(n.updateRangeStart),s=this.toEditorPos(n.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:n.updateRangeStart,editorBase:o,drifted:!1});let c=s-o>n.text.length;o==this.from&&i<this.from?o=i:s==this.to&&i>this.to&&(s=i);let l=_o(e.state.sliceDoc(o,s),n.text,(c?r.from:r.to)-o,c?`end`:null);if(!l){let t=A.single(this.toEditorPos(n.selectionStart),this.toEditorPos(n.selectionEnd));bo(t,r)||e.dispatch({selection:t,userEvent:`select`});return}let u={from:l.from+o,to:l.toA+o,insert:k.of(n.text.slice(l.from,l.toB).split(`
`))};if((L.mac||L.android)&&u.from==a-1&&/^\. ?$/.test(n.text)&&e.contentDOM.getAttribute(`autocorrect`)==`off`&&(u={from:o,to:s,insert:k.of([n.text.replace(`.`,` `)])}),this.pendingContextChange=u,!e.state.readOnly){let t=this.to-this.from+(u.to-u.from+u.insert.length);ho(e,u,A.single(this.toEditorPos(n.selectionStart,t),this.toEditorPos(n.selectionEnd,t)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),u.from<u.to&&!u.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0,n.updateRangeStart-1),Math.min(t.text.length,n.updateRangeStart+1)))&&this.handlers.compositionend(n)},this.handlers.characterboundsupdate=n=>{let r=[],i=null;for(let t=this.toEditorPos(n.rangeStart),a=this.toEditorPos(n.rangeEnd);t<a;t++){let n=e.coordsForChar(t);i=n&&new DOMRect(n.left,n.top,n.right-n.left,n.bottom-n.top)||i||new DOMRect,r.push(i)}t.updateCharacterBounds(n.rangeStart,r)},this.handlers.textformatupdate=t=>{let n=[];for(let e of t.getTextFormats()){let t=e.underlineStyle,r=e.underlineThickness;if(!/none/i.test(t)&&!/none/i.test(r)){let i=this.toEditorPos(e.rangeStart),a=this.toEditorPos(e.rangeEnd);if(i<a){let e=`text-decoration: underline ${/^[a-z]/.test(t)?t+` `:t==`Dashed`?`dashed `:t==`Squiggle`?`wavy `:``}${/thin/i.test(r)?1:2}px`;n.push(R.mark({attributes:{style:e}}).range(i,a))}}}e.dispatch({effects:Vi.of(R.set(n))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:t}=this.composing;this.composing=null,t&&this.reset(e.state)}};for(let e in this.handlers)t.addEventListener(e,this.handlers[e]);this.measureReq={read:e=>{let t=Pr(e.root);t&&t.rangeCount&&this.editContext.updateSelectionBounds(t.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,n=!1,r=this.pendingContextChange;return e.changes.iterChanges((i,a,o,s,c)=>{if(n)return;let l=c.length-(a-i);if(r&&a>=r.to)if(r.from==i&&r.to==a&&r.insert.eq(c)){r=this.pendingContextChange=null,t+=l,this.to+=l;return}else r=null,this.revertPending(e.state);if(i+=t,a+=t,a<=this.from)this.from+=l,this.to+=l;else if(i<this.to){if(i<this.from||a>this.to||this.to-this.from+c.length>3e4){n=!0;return}this.editContext.updateText(this.toContextPos(i),this.toContextPos(a),c.toString()),this.to+=l}t+=l}),r&&!n&&this.revertPending(e.state),!n}update(e){let t=this.pendingContextChange,n=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(n.from,n.to)&&e.transactions.some(e=>!e.isUserEvent(`input.type`)&&e.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,n=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),r=this.toContextPos(t.head);(this.editContext.selectionStart!=n||this.editContext.selectionEnd!=r)&&this.editContext.updateSelection(n,r)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>1e4*3)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let n=this.composing;return n&&n.drifted?n.editorBase+(e-n.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}},U=class e{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement(`div`),this.scrollDOM=document.createElement(`div`),this.scrollDOM.tabIndex=-1,this.scrollDOM.className=`cm-scroller`,this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement(`div`),this.announceDOM.className=`cm-announced`,this.announceDOM.setAttribute(`aria-live`,`polite`),this.dom=document.createElement(`div`),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:t}=e;this.dispatchTransactions=e.dispatchTransactions||t&&(e=>e.forEach(e=>t(e,this)))||(e=>this.update(e)),this.dispatch=this.dispatch.bind(this),this._root=e.root||ei(e.parent)||document,this.viewState=new ks(this,e.state||P.create(e)),e.scrollTo&&e.scrollTo.is(Bi)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(Gi).map(e=>new qi(e));for(let e of this.plugins)e.update(this);this.observer=new Ys(this),this.inputState=new xo(this),this.inputState.ensureHandlers(this.plugins),this.docView=new Pa(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),document.fonts?.ready&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent=`refresh`,this.requestMeasure()})}dispatch(...e){let t=e.length==1&&e[0]instanceof mn?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(t){if(this.updateState!=0)throw Error(`Calls to EditorView.update are not allowed while an update is in progress`);let n=!1,r=!1,i,a=this.state;for(let e of t){if(e.startState!=a)throw RangeError(`Trying to update state with a transaction that doesn't start from the previous state.`);a=e.state}if(this.destroyed){this.viewState.state=a;return}let o=this.hasFocus,s=0,c=null;t.some(e=>e.annotation(es))?(this.inputState.notifiedFocused=o,s=1):o!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=o,c=ts(a,o),c||(s=1));let l=this.observer.delayedAndroidKey,u=null;if(l?(this.observer.clearDelayedAndroidKey(),u=this.observer.readChange(),(u&&!this.state.doc.eq(a.doc)||!this.state.selection.eq(a.selection))&&(u=null)):this.observer.clear(),a.facet(P.phrases)!=this.state.facet(P.phrases))return this.setState(a);i=oa.create(this,a,t),i.flags|=s;let d=this.viewState.scrollTarget;try{this.updateState=2;for(let n of t){if(d&&=d.map(n.changes),n.scrollIntoView){let{main:t}=n.state.selection,{x:r,y:i}=this.state.facet(e.cursorScrollMargin);d=new zi(t.empty?t:A.cursor(t.head,t.head>t.anchor?-1:1),`nearest`,`nearest`,i,r)}for(let e of n.effects)e.is(Bi)&&(d=e.value.clip(this.state))}this.viewState.update(i,d),this.bidiCache=nc.update(this.bidiCache,i.changes),i.empty||(this.updatePlugins(i),this.inputState.update(i)),n=this.docView.update(i),this.state.facet(ia)!=this.styleModules&&this.mountStyles(),r=this.updateAttrs(),this.showAnnouncements(t),this.docView.updateSelection(n,t.some(e=>e.isUserEvent(`select.pointer`)))}finally{this.updateState=0}if(i.startState.facet(zs)!=i.state.facet(zs)&&(this.viewState.mustMeasureContent=!0),(n||r||d||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),n&&this.docViewUpdate(),!i.empty)for(let e of this.state.facet(ji))try{e(i)}catch(e){Hi(this.state,e,`update listener`)}(c||u)&&Promise.resolve().then(()=>{c&&this.state==c.startState&&this.dispatch(c),u&&!mo(this,u)&&l.force&&$r(this.contentDOM,l.key,l.keyCode)})}setState(e){if(this.updateState!=0)throw Error(`Calls to EditorView.setState are not allowed while an update is in progress`);if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let e of this.plugins)e.destroy(this);this.viewState=new ks(this,e),this.plugins=e.facet(Gi).map(e=>new qi(e)),this.pluginMap.clear();for(let e of this.plugins)e.update(this);this.docView.destroy(),this.docView=new Pa(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(Gi),n=e.state.facet(Gi);if(t!=n){let r=[];for(let i of n){let n=t.indexOf(i);if(n<0)r.push(new qi(i));else{let t=this.plugins[n];t.mustUpdate=e,r.push(t)}}for(let t of this.plugins)t.mustUpdate!=e&&t.destroy(this);this.plugins=r,this.pluginMap.clear()}else for(let t of this.plugins)t.mustUpdate=e;for(let e=0;e<this.plugins.length;e++)this.plugins[e].update(this);t!=n&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(e){Hi(this.state,e,`doc view update listener`)}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,n=this.viewState.scrollParent,r=this.viewState.getScrollOffset(),{scrollAnchorPos:i,scrollAnchorHeight:a}=this.viewState;Math.abs(r-this.viewState.scrollOffset)>1&&(a=-1),this.viewState.scrollAnchorHeight=-1;try{for(let e=0;;e++){if(a<0)if(ni(n||this.win))i=-1,a=this.viewState.heightMap.height;else{let e=this.viewState.scrollAnchorAt(r);i=e.from,a=e.top}this.updateState=1;let o=this.viewState.measure();if(!o&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(e>5){console.warn(this.measureRequests.length?`Measure loop restarted more than 5 times`:`Viewport failed to stabilize`);break}let s=[];o&4||([this.measureRequests,s]=[s,this.measureRequests]);let c=s.map(e=>{try{return e.read(this)}catch(e){return Hi(this.state,e),tc}}),l=oa.create(this,this.state,[]),u=!1;l.flags|=o,t?t.flags|=o:t=l,this.updateState=2,l.empty||(this.updatePlugins(l),this.inputState.update(l),this.updateAttrs(),u=this.docView.update(l),u&&this.docViewUpdate());for(let e=0;e<s.length;e++)if(c[e]!=tc)try{let t=s[e];t.write&&t.write(c[e],this)}catch(e){Hi(this.state,e)}if(u&&this.docView.updateSelection(!0),!l.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight)if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,a=-1;continue}else{let e=((i<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(i).top)-a)/this.scaleY;if((e>1||e<-1)&&(n==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){r+=e,n?n.scrollTop+=e:this.win.scrollBy(0,e),a=-1;continue}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let e of this.state.facet(ji))e(t)}get themeClasses(){return Vs+` `+(this.state.facet(Bs)?Us:Hs)+` `+this.state.facet(zs)}updateAttrs(){let e=rc(this,Ji,{class:`cm-editor`+(this.hasFocus?` cm-focused `:` `)+this.themeClasses}),t={spellcheck:`false`,autocorrect:`off`,autocapitalize:`off`,writingsuggestions:`false`,translate:`no`,contenteditable:this.state.facet(Ui)?`true`:`false`,class:`cm-content`,style:`${L.tabSize}: ${this.state.tabSize}`,role:`textbox`,"aria-multiline":`true`};this.state.readOnly&&(t[`aria-readonly`]=`true`),rc(this,Yi,t);let n=this.observer.ignore(()=>{let n=Cr(this.contentDOM,this.contentAttrs,t),r=Cr(this.dom,this.editorAttrs,e);return n||r});return this.editorAttrs=e,this.contentAttrs=t,n}showAnnouncements(t){let n=!0;for(let r of t)for(let t of r.effects)if(t.is(e.announce)){n&&(this.announceDOM.textContent=``),n=!1;let e=this.announceDOM.appendChild(document.createElement(`div`));e.textContent=t.value}}mountStyles(){this.styleModules=this.state.facet(ia);let t=this.state.facet(e.cspNonce);Zn.mount(this.root,this.styleModules.concat(Ks).reverse(),t?{nonce:t}:void 0)}readMeasured(){if(this.updateState==2)throw Error(`Reading the editor layout isn't allowed during an update`);this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(t=>t.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,n){return no(this,e,Za(this,e,t,n))}moveByGroup(e,t){return no(this,e,Za(this,e,t,t=>Qa(this,e.head,t)))}visualLineSide(e,t){let n=this.bidiSpans(e),r=this.textDirectionAt(e.from),i=n[t?n.length-1:0];return A.cursor(i.side(t,r)+e.from,i.forward(!t,r)?1:-1)}moveToLineBoundary(e,t,n=!0){return Xa(this,e,t,n)}moveVertically(e,t,n){return no(this,e,$a(this,e,t,n))}domAtPos(e,t=1){return this.docView.domAtPos(e,t)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){this.readMeasured();let n=io(this,e,t);return n&&n.pos}posAndSideAtCoords(e,t=!0){return this.readMeasured(),io(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let n=this.docView.coordsAt(e,t);if(!n||n.left==n.right)return n;let r=this.state.doc.lineAt(e),i=this.bidiSpans(r),a=i[hi.find(i,e-r.from,-1,t)];return Ur(n,a.dir==z.LTR==t>0)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(Ii)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>ec)return Ci(e.length);let t=this.textDirectionAt(e.from),n;for(let r of this.bidiCache)if(r.from==e.from&&r.dir==t&&(r.fresh||gi(r.isolates,n=ta(this,e))))return r.order;n||=ta(this,e);let r=Si(e.text,t,n);return this.bidiCache.push(new nc(e.from,e.to,t,n,!0,r)),r}get hasFocus(){return(this.dom.ownerDocument.hasFocus()||L.safari&&this.inputState?.lastContextMenu>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Xr(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){return Bi.of(new zi(typeof e==`number`?A.cursor(e):e,t.y??`nearest`,t.x??`nearest`,t.yMargin??5,t.xMargin??5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,n=this.viewState.scrollAnchorAt(e);return Bi.of(new zi(A.cursor(n.from),`start`,`start`,n.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e==`boolean`?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return Ki.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return Ki.define(()=>({}),{eventObservers:e})}static theme(e,t){let n=Zn.newName(),r=[zs.of(n),ia.of(Gs(`.${n}`,e))];return t&&t.dark&&r.push(Bs.of(!0)),r}static baseTheme(e){return Yt.lowest(ia.of(Gs(`.`+Vs,e,Ws)))}static findFromDOM(e){let t=e.querySelector(`.cm-content`);return(t&&V.get(t)||V.get(e))?.root?.view||null}};U.styleModule=ia,U.inputHandler=Mi,U.clipboardInputFilter=Pi,U.clipboardOutputFilter=Fi,U.scrollHandler=Ri,U.focusChangeEffect=Ni,U.perLineTextDirection=Ii,U.exceptionSink=Ai,U.updateListener=ji,U.editable=Ui,U.mouseSelectionStyle=ki,U.dragMovesSelection=Oi,U.clickAddsSelectionRange=Di,U.decorations=Xi,U.blockWrappers=Zi,U.outerDecorations=Qi,U.atomicRanges=$i,U.bidiIsolatedRanges=ea,U.cursorScrollMargin=j.define({combine:e=>{let t=5,n=5;for(let r of e)typeof r==`number`?t=n=r:{x:t,y:n}=r;return{x:t,y:n}}}),U.scrollMargins=na,U.darkTheme=Bs,U.cspNonce=j.define({combine:e=>e.length?e[0]:``}),U.contentAttributes=Yi,U.editorAttributes=Ji,U.lineWrapping=U.contentAttributes.of({class:`cm-lineWrapping`}),U.announce=M.define();var ec=4096,tc={},nc=class e{constructor(e,t,n,r,i,a){this.from=e,this.to=t,this.dir=n,this.isolates=r,this.fresh=i,this.order=a}static update(t,n){if(n.empty&&!t.some(e=>e.fresh))return t;let r=[],i=t.length?t[t.length-1].dir:z.LTR;for(let a=Math.max(0,t.length-10);a<t.length;a++){let o=t[a];o.dir==i&&!n.touchesRange(o.from,o.to)&&r.push(new e(n.mapPos(o.from,1),n.mapPos(o.to,-1),o.dir,o.isolates,!1,o.order))}return r}};function rc(e,t,n){for(let r=e.state.facet(t),i=r.length-1;i>=0;i--){let t=r[i],a=typeof t==`function`?t(e):t;a&&yr(a,n)}return n}var ic=L.mac?`mac`:L.windows?`win`:L.linux?`linux`:`key`;function ac(e,t){let n=e.split(/-(?!$)/),r=n[n.length-1];r==`Space`&&(r=` `);let i,a,o,s;for(let e=0;e<n.length-1;++e){let r=n[e];if(/^(cmd|meta|m)$/i.test(r))s=!0;else if(/^a(lt)?$/i.test(r))i=!0;else if(/^(c|ctrl|control)$/i.test(r))a=!0;else if(/^s(hift)?$/i.test(r))o=!0;else if(/^mod$/i.test(r))t==`mac`?s=!0:a=!0;else throw Error(`Unrecognized modifier name: `+r)}return i&&(r=`Alt-`+r),a&&(r=`Ctrl-`+r),s&&(r=`Meta-`+r),o&&(r=`Shift-`+r),r}function oc(e,t,n){return t.altKey&&(e=`Alt-`+e),t.ctrlKey&&(e=`Ctrl-`+e),t.metaKey&&(e=`Meta-`+e),n!==!1&&t.shiftKey&&(e=`Shift-`+e),e}var sc=Yt.default(U.domEventHandlers({keydown(e,t){return gc(uc(t.state),e,t,`editor`)}})),cc=j.define({enables:sc}),lc=new WeakMap;function uc(e){let t=e.facet(cc),n=lc.get(t);return n||lc.set(t,n=mc(t.reduce((e,t)=>e.concat(t),[]))),n}function dc(e,t,n){return gc(uc(e.state),t,e,n)}var fc=null,pc=4e3;function mc(e,t=ic){let n=Object.create(null),r=Object.create(null),i=(e,t)=>{let n=r[e];if(n==null)r[e]=t;else if(n!=t)throw Error(`Key binding `+e+` is used both as a regular binding and as a multi-stroke prefix`)},a=(e,r,a,o,s)=>{let c=n[e]||(n[e]=Object.create(null)),l=r.split(/ (?!$)/).map(e=>ac(e,t));for(let t=1;t<l.length;t++){let n=l.slice(0,t).join(` `);i(n,!0),c[n]||(c[n]={preventDefault:!0,stopPropagation:!1,run:[t=>{let r=fc={view:t,prefix:n,scope:e};return setTimeout(()=>{fc==r&&(fc=null)},pc),!0}]})}let u=l.join(` `);i(u,!1);let d=c[u]||(c[u]={preventDefault:!1,stopPropagation:!1,run:(c._any?.run)?.slice()||[]});a&&d.run.push(a),o&&(d.preventDefault=!0),s&&(d.stopPropagation=!0)};for(let r of e){let e=r.scope?r.scope.split(` `):[`editor`];if(r.any)for(let t of e){let e=n[t]||(n[t]=Object.create(null));e._any||={preventDefault:!1,stopPropagation:!1,run:[]};let{any:i}=r;for(let t in e)e[t].run.push(e=>i(e,hc))}let i=r[t]||r.key;if(i)for(let t of e)a(t,i,r.run,r.preventDefault,r.stopPropagation),r.shift&&a(t,`Shift-`+i,r.shift,r.preventDefault,r.stopPropagation)}return n}var hc=null;function gc(e,t,n,r){hc=t;let i=or(t),a=Et(wt(i,0))==i.length&&i!=` `,o=``,s=!1,c=!1,l=!1;fc&&fc.view==n&&fc.scope==r&&(o=fc.prefix+` `,Do.indexOf(t.keyCode)<0&&(c=!0,fc=null));let u=new Set,d=e=>{if(e){for(let t of e.run)if(!u.has(t)&&(u.add(t),t(n)))return e.stopPropagation&&(l=!0),!0;e.preventDefault&&(e.stopPropagation&&(l=!0),c=!0)}return!1},f=e[r],p,m;return f&&(d(f[o+oc(i,t,!a)])?s=!0:a&&(t.altKey||t.metaKey||t.ctrlKey)&&!(L.windows&&t.ctrlKey&&t.altKey)&&!(L.mac&&t.altKey&&!(t.ctrlKey||t.metaKey))&&(p=er[t.keyCode])&&p!=i?(d(f[o+oc(p,t,!0)])||t.shiftKey&&(m=tr[t.keyCode])!=i&&m!=p&&d(f[o+oc(m,t,!1)]))&&(s=!0):a&&t.shiftKey&&d(f[o+oc(i,t,!0)])&&(s=!0),!s&&d(f._any)&&(s=!0)),c&&(s=!0),s&&l&&t.stopPropagation(),hc=null,s}var _c=class e{constructor(e,t,n,r,i){this.className=e,this.left=t,this.top=n,this.width=r,this.height=i}draw(){let e=document.createElement(`div`);return e.className=this.className,this.adjust(e),e}update(e,t){return t.className==this.className?(this.adjust(e),!0):!1}adjust(e){e.style.left=this.left+`px`,e.style.top=this.top+`px`,this.width!=null&&(e.style.width=this.width+`px`),e.style.height=this.height+`px`}eq(e){return this.left==e.left&&this.top==e.top&&this.width==e.width&&this.height==e.height&&this.className==e.className}static forRange(t,n,r){if(r.empty){let i=t.coordsAtPos(r.head,r.assoc||1);if(!i)return[];let a=vc(t);return[new e(n,i.left-a.left,i.top-a.top,null,i.bottom-i.top)]}else return bc(t,n,r)}};function vc(e){let t=e.scrollDOM.getBoundingClientRect();return{left:(e.textDirection==z.LTR?t.left:t.right-e.scrollDOM.clientWidth*e.scaleX)-e.scrollDOM.scrollLeft*e.scaleX,top:t.top-e.scrollDOM.scrollTop*e.scaleY}}function yc(e,t,n,r){let i=e.coordsAtPos(t,n*2);if(!i)return r;let a=e.dom.getBoundingClientRect(),o=(i.top+i.bottom)/2,s=e.posAtCoords({x:a.left+1,y:o}),c=e.posAtCoords({x:a.right-1,y:o});return s==null||c==null?r:{from:Math.max(r.from,Math.min(s,c)),to:Math.min(r.to,Math.max(s,c))}}function bc(e,t,n){if(n.to<=e.viewport.from||n.from>=e.viewport.to)return[];let r=Math.max(n.from,e.viewport.from),i=Math.min(n.to,e.viewport.to),a=e.textDirection==z.LTR,o=e.contentDOM,s=o.getBoundingClientRect(),c=vc(e),l=o.querySelector(`.cm-line`),u=l&&window.getComputedStyle(l),d=s.left+(u?parseInt(u.paddingLeft)+Math.min(0,parseInt(u.textIndent)):0),f=s.right-(u?parseInt(u.paddingRight):0),p=Ya(e,r,1),m=Ya(e,i,-1),h=p.type==Er.Text?p:null,g=m.type==Er.Text?m:null;if(h&&(e.lineWrapping||p.widgetLineBreaks)&&(h=yc(e,r,1,h)),g&&(e.lineWrapping||m.widgetLineBreaks)&&(g=yc(e,i,-1,g)),h&&g&&h.from==g.from&&h.to==g.to)return v(y(n.from,n.to,h));{let t=h?y(n.from,null,h):b(p,!1),r=g?y(null,n.to,g):b(m,!0),i=[];return(h||p).to<(g||m).from-(h&&g?1:0)||p.widgetLineBreaks>1&&t.bottom+e.defaultLineHeight/2<r.top?i.push(_(d,t.bottom,f,r.top)):t.bottom<r.top&&e.elementAtHeight((t.bottom+r.top)/2).type==Er.Text&&(t.bottom=r.top=(t.bottom+r.top)/2),v(t).concat(i).concat(v(r))}function _(e,n,r,i){return new _c(t,e-c.left,n-c.top,Math.max(0,r-e),i-n)}function v({top:e,bottom:t,horizontal:n}){let r=[];for(let i=0;i<n.length;i+=2)r.push(_(n[i],e,n[i+1],t));return r}function y(t,n,r){let i=1e9,o=-1e9,s=[];function c(t,n,c,l,u){let p=e.coordsAtPos(t,t==r.to?-2:2),m=e.coordsAtPos(c,c==r.from?2:-2);!p||!m||(i=Math.min(p.top,m.top,i),o=Math.max(p.bottom,m.bottom,o),u==z.LTR?s.push(a&&n?d:p.left,a&&l?f:m.right):s.push(!a&&l?d:m.left,!a&&n?f:p.right))}let l=t??r.from,u=n??r.to;for(let r of e.visibleRanges)if(r.to>l&&r.from<u)for(let i=Math.max(r.from,l),a=Math.min(r.to,u);;){let r=e.state.doc.lineAt(i);for(let o of e.bidiSpans(r)){let e=o.from+r.from,s=o.to+r.from;if(e>=a)break;s>i&&c(Math.max(e,i),t==null&&e<=l,Math.min(s,a),n==null&&s>=u,o.dir)}if(i=r.to+1,i>=a)break}return s.length==0&&c(l,t==null,u,n==null,e.textDirection),{top:i,bottom:o,horizontal:s}}function b(e,t){let n=s.top+(t?e.top:e.bottom);return{top:n,bottom:n,horizontal:[]}}}function xc(e,t){return e.constructor==t.constructor&&e.eq(t)}var Sc=class{constructor(e,t){this.view=e,this.layer=t,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=e.scrollDOM.appendChild(document.createElement(`div`)),this.dom.classList.add(`cm-layer`),t.above&&this.dom.classList.add(`cm-layer-above`),t.class&&this.dom.classList.add(t.class),this.scale(),this.dom.setAttribute(`aria-hidden`,`true`),this.setOrder(e.state),e.requestMeasure(this.measureReq),t.mount&&t.mount(this.dom,e)}update(e){e.startState.facet(Cc)!=e.state.facet(Cc)&&this.setOrder(e.state),(this.layer.update(e,this.dom)||e.geometryChanged)&&(this.scale(),e.view.requestMeasure(this.measureReq))}docViewUpdate(e){this.layer.updateOnDocViewUpdate!==!1&&e.requestMeasure(this.measureReq)}setOrder(e){let t=0,n=e.facet(Cc);for(;t<n.length&&n[t]!=this.layer;)t++;this.dom.style.zIndex=String((this.layer.above?150:-1)-t)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:e,scaleY:t}=this.view;(e!=this.scaleX||t!=this.scaleY)&&(this.scaleX=e,this.scaleY=t,this.dom.style.transform=`scale(${1/e}, ${1/t})`)}draw(e){if(e.length!=this.drawn.length||e.some((e,t)=>!xc(e,this.drawn[t]))){let t=this.dom.firstChild,n=0;for(let r of e)r.update&&t&&r.constructor&&this.drawn[n].constructor&&r.update(t,this.drawn[n])?(t=t.nextSibling,n++):this.dom.insertBefore(r.draw(),t);for(;t;){let e=t.nextSibling;t.remove(),t=e}this.drawn=e,L.webkit&&(this.dom.style.display=this.dom.firstChild?``:`none`)}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}},Cc=j.define();function wc(e){return[Ki.define(t=>new Sc(t,e)),Cc.of(e)]}var Tc=j.define({combine(e){return Dn(e,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(e,t)=>Math.min(e,t),drawRangeCursor:(e,t)=>e||t})}});function Ec(e={}){return[Tc.of(e),Oc,Ac,jc,Li.of(!0)]}function Dc(e){return e.startState.facet(Tc)!=e.state.facet(Tc)}var Oc=wc({above:!0,markers(e){let{state:t}=e,n=t.facet(Tc),r=[];for(let i of t.selection.ranges){let a=i==t.selection.main;if(i.empty||n.drawRangeCursor&&!(a&&L.ios&&n.iosSelectionHandles)){let t=a?`cm-cursor cm-cursor-primary`:`cm-cursor cm-cursor-secondary`,n=i.empty?i:A.cursor(i.head,i.assoc);for(let i of _c.forRange(e,t,n))r.push(i)}}return r},update(e,t){e.transactions.some(e=>e.selection)&&(t.style.animationName=t.style.animationName==`cm-blink`?`cm-blink2`:`cm-blink`);let n=Dc(e);return n&&kc(e.state,t),e.docChanged||e.selectionSet||n},mount(e,t){kc(t.state,e)},class:`cm-cursorLayer`});function kc(e,t){t.style.animationDuration=e.facet(Tc).cursorBlinkRate+`ms`}var Ac=wc({above:!1,markers(e){let t=[],{main:n,ranges:r}=e.state.selection;for(let n of r)if(!n.empty)for(let r of _c.forRange(e,`cm-selectionBackground`,n))t.push(r);if(L.ios&&!n.empty&&e.state.facet(Tc).iosSelectionHandles){for(let r of _c.forRange(e,`cm-selectionHandle cm-selectionHandle-start`,A.cursor(n.from,1)))t.push(r);for(let r of _c.forRange(e,`cm-selectionHandle cm-selectionHandle-end`,A.cursor(n.to,1)))t.push(r)}return t},update(e,t){return e.docChanged||e.selectionSet||e.viewportChanged||Dc(e)},class:`cm-selectionLayer`}),jc=Yt.highest(U.theme({".cm-line":{"& ::selection, &::selection":{backgroundColor:`transparent !important`},caretColor:`transparent !important`},".cm-content":{caretColor:`transparent !important`,"& :focus":{caretColor:`initial !important`,"&::selection, & ::selection":{backgroundColor:`Highlight !important`}}}})),Mc=M.define({map(e,t){return e==null?null:t.mapPos(e)}}),Nc=Kt.define({create(){return null},update(e,t){return e!=null&&(e=t.changes.mapPos(e)),t.effects.reduce((e,t)=>t.is(Mc)?t.value:e,e)}}),Pc=Ki.fromClass(class{constructor(e){this.view=e,this.cursor=null,this.measureReq={read:this.readPos.bind(this),write:this.drawCursor.bind(this)}}update(e){var t;let n=e.state.field(Nc);n==null?this.cursor!=null&&((t=this.cursor)==null||t.remove(),this.cursor=null):(this.cursor||(this.cursor=this.view.scrollDOM.appendChild(document.createElement(`div`)),this.cursor.className=`cm-dropCursor`),(e.startState.field(Nc)!=n||e.docChanged||e.geometryChanged)&&this.view.requestMeasure(this.measureReq))}readPos(){let{view:e}=this,t=e.state.field(Nc),n=t!=null&&e.coordsAtPos(t);if(!n)return null;let r=e.scrollDOM.getBoundingClientRect();return{left:n.left-r.left+e.scrollDOM.scrollLeft*e.scaleX,top:n.top-r.top+e.scrollDOM.scrollTop*e.scaleY,height:n.bottom-n.top}}drawCursor(e){if(this.cursor){let{scaleX:t,scaleY:n}=this.view;e?(this.cursor.style.left=e.left/t+`px`,this.cursor.style.top=e.top/n+`px`,this.cursor.style.height=e.height/n+`px`):this.cursor.style.left=`-100000px`}}destroy(){this.cursor&&this.cursor.remove()}setDropPos(e){this.view.state.field(Nc)!=e&&this.view.dispatch({effects:Mc.of(e)})}},{eventObservers:{dragover(e){this.setDropPos(this.view.posAtCoords({x:e.clientX,y:e.clientY}))},dragleave(e){(e.target==this.view.contentDOM||!this.view.contentDOM.contains(e.relatedTarget))&&this.setDropPos(null)},dragend(){this.setDropPos(null)},drop(){this.setDropPos(null)}}});function Fc(){return[Nc,Pc]}function Ic(e,t,n,r,i){t.lastIndex=0;for(let a=e.iterRange(n,r),o=n,s;!a.next().done;o+=a.value.length)if(!a.lineBreak)for(;s=t.exec(a.value);)i(o+s.index,s)}function Lc(e,t){let n=e.visibleRanges;if(n.length==1&&n[0].from==e.viewport.from&&n[0].to==e.viewport.to)return n;let r=[];for(let{from:i,to:a}of n)i=Math.max(e.state.doc.lineAt(i).from,i-t),a=Math.min(e.state.doc.lineAt(a).to,a+t),r.length&&r[r.length-1].to>=i?r[r.length-1].to=a:r.push({from:i,to:a});return r}var Rc=class{constructor(e){let{regexp:t,decoration:n,decorate:r,boundary:i,maxLength:a=1e3}=e;if(!t.global)throw RangeError(`The regular expression given to MatchDecorator should have its 'g' flag set`);if(this.regexp=t,r)this.addMatch=(e,t,n,i)=>r(i,n,n+e[0].length,e,t);else if(typeof n==`function`)this.addMatch=(e,t,r,i)=>{let a=n(e,t,r);a&&i(r,r+e[0].length,a)};else if(n)this.addMatch=(e,t,r,i)=>i(r,r+e[0].length,n);else throw RangeError(`Either 'decorate' or 'decoration' should be provided to MatchDecorator`);this.boundary=i,this.maxLength=a}createDeco(e){let t=new Pn,n=t.add.bind(t);for(let{from:t,to:r}of Lc(e,this.maxLength))Ic(e.state.doc,this.regexp,t,r,(t,r)=>this.addMatch(r,e,t,n));return t.finish()}updateDeco(e,t){let n=1e9,r=-1;return e.docChanged&&e.changes.iterChanges((t,i,a,o)=>{o>=e.view.viewport.from&&a<=e.view.viewport.to&&(n=Math.min(a,n),r=Math.max(o,r))}),e.viewportMoved||r-n>1e3?this.createDeco(e.view):r>-1?this.updateRange(e.view,t.map(e.changes),n,r):t}updateRange(e,t,n,r){for(let i of e.visibleRanges){let a=Math.max(i.from,n),o=Math.min(i.to,r);if(o>=a){let n=e.state.doc.lineAt(a),r=n.to<o?e.state.doc.lineAt(o):n,s=Math.max(i.from,n.from),c=Math.min(i.to,r.to);if(this.boundary){for(;a>n.from;a--)if(this.boundary.test(n.text[a-1-n.from])){s=a;break}for(;o<r.to;o++)if(this.boundary.test(r.text[o-r.from])){c=o;break}}let l=[],u,d=(e,t,n)=>l.push(n.range(e,t));if(n==r)for(this.regexp.lastIndex=s-n.from;(u=this.regexp.exec(n.text))&&u.index<c-n.from;)this.addMatch(u,e,u.index+n.from,d);else Ic(e.state.doc,this.regexp,s,c,(t,n)=>this.addMatch(n,e,t,d));t=t.update({filterFrom:s,filterTo:c,filter:(e,t)=>e<s||t>c,add:l})}}return t}},zc=/x/.unicode==null?`g`:`gu`,Bc=RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]`,zc),Vc={0:`null`,7:`bell`,8:`backspace`,10:`newline`,11:`vertical tab`,13:`carriage return`,27:`escape`,8203:`zero width space`,8204:`zero width non-joiner`,8205:`zero width joiner`,8206:`left-to-right mark`,8207:`right-to-left mark`,8232:`line separator`,8237:`left-to-right override`,8238:`right-to-left override`,8294:`left-to-right isolate`,8295:`right-to-left isolate`,8297:`pop directional isolate`,8233:`paragraph separator`,65279:`zero width no-break space`,65532:`object replacement`},Hc=null;function Uc(){if(Hc==null&&typeof document<`u`&&document.body){let e=document.body.style;Hc=(e.tabSize??e.MozTabSize)!=null}return Hc||!1}var Wc=j.define({combine(e){let t=Dn(e,{render:null,specialChars:Bc,addSpecialChars:null});return(t.replaceTabs=!Uc())&&(t.specialChars=RegExp(`	|`+t.specialChars.source,zc)),t.addSpecialChars&&(t.specialChars=RegExp(t.specialChars.source+`|`+t.addSpecialChars.source,zc)),t}});function Gc(e={}){return[Wc.of(e),qc()]}var Kc=null;function qc(){return Kc||=Ki.fromClass(class{constructor(e){this.view=e,this.decorations=R.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(e.state.facet(Wc)),this.decorations=this.decorator.createDeco(e)}makeDecorator(e){return new Rc({regexp:e.specialChars,decoration:(t,n,r)=>{let{doc:i}=n.state,a=wt(t[0],0);if(a==9){let e=i.lineAt(r),t=n.state.tabSize,a=Gn(e.text,t,r-e.from);return R.replace({widget:new Zc((t-a%t)*this.view.defaultCharacterWidth/this.view.scaleX)})}return this.decorationCache[a]||(this.decorationCache[a]=R.replace({widget:new Xc(e,a)}))},boundary:e.replaceTabs?void 0:/[^]/})}update(e){let t=e.state.facet(Wc);e.startState.facet(Wc)==t?this.decorations=this.decorator.updateDeco(e,this.decorations):(this.decorator=this.makeDecorator(t),this.decorations=this.decorator.createDeco(e.view))}},{decorations:e=>e.decorations})}var Jc=`•`;function Yc(e){return e>=32?Jc:e==10?`␤`:String.fromCharCode(9216+e)}var Xc=class extends Tr{constructor(e,t){super(),this.options=e,this.code=t}eq(e){return e.code==this.code}toDOM(e){let t=Yc(this.code),n=e.state.phrase(`Control character`)+` `+(Vc[this.code]||`0x`+this.code.toString(16)),r=this.options.render&&this.options.render(this.code,n,t);if(r)return r;let i=document.createElement(`span`);return i.textContent=t,i.title=n,i.setAttribute(`aria-label`,n),i.className=`cm-specialChar`,i}ignoreEvent(){return!1}},Zc=class extends Tr{constructor(e){super(),this.width=e}eq(e){return e.width==this.width}toDOM(){let e=document.createElement(`span`);return e.textContent=`	`,e.className=`cm-tab`,e.style.width=this.width+`px`,e}ignoreEvent(){return!1}};function Qc(){return el}var $c=R.line({class:`cm-activeLine`}),el=Ki.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.docChanged||e.selectionSet)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let t=-1,n=[];for(let r of e.state.selection.ranges){let i=e.lineBlockAt(r.head);i.from>t&&(n.push($c.range(i.from)),t=i.from)}return R.set(n)}},{decorations:e=>e.decorations}),tl=2e3;function nl(e,t,n){let r=Math.min(t.line,n.line),i=Math.max(t.line,n.line),a=[];if(t.off>tl||n.off>tl||t.col<0||n.col<0){let o=Math.min(t.off,n.off),s=Math.max(t.off,n.off);for(let t=r;t<=i;t++){let n=e.doc.line(t);n.length<=s&&a.push(A.range(n.from+o,n.to+s))}}else{let o=Math.min(t.col,n.col),s=Math.max(t.col,n.col);for(let t=r;t<=i;t++){let n=e.doc.line(t),r=Kn(n.text,o,e.tabSize,!0);if(r<0)a.push(A.cursor(n.to));else{let t=Kn(n.text,s,e.tabSize);a.push(A.range(n.from+r,n.from+t))}}}return a}function rl(e,t){let n=e.coordsAtPos(e.viewport.from);return n?Math.round(Math.abs((n.left-t)/e.defaultCharacterWidth)):-1}function il(e,t){let n=e.posAtCoords({x:t.clientX,y:t.clientY},!1),r=e.state.doc.lineAt(n),i=n-r.from,a=i>tl?-1:i==r.length?rl(e,t.clientX):Gn(r.text,e.state.tabSize,n-r.from);return{line:r.number,col:a,off:i}}function al(e,t){let n=il(e,t),r=e.state.selection;return n?{update(e){if(e.docChanged){let t=e.changes.mapPos(e.startState.doc.line(n.line).from),i=e.state.doc.lineAt(t);n={line:i.number,col:n.col,off:Math.min(n.off,i.length)},r=r.map(e.changes)}},get(t,i,a){let o=il(e,t);if(!o)return r;let s=nl(e.state,n,o);return s.length?a?A.create(s.concat(r.ranges)):A.create(s):r}}:null}function ol(e){let t=e?.eventFilter||(e=>e.altKey&&e.button==0);return U.mouseSelectionStyle.of((e,n)=>t(n)?al(e,n):null)}var sl={Alt:[18,e=>!!e.altKey],Control:[17,e=>!!e.ctrlKey],Shift:[16,e=>!!e.shiftKey],Meta:[91,e=>!!e.metaKey]},cl={style:`cursor: crosshair`};function ll(e={}){let[t,n]=sl[e.key||`Alt`],r=Ki.fromClass(class{constructor(e){this.view=e,this.isDown=!1}set(e){this.isDown!=e&&(this.isDown=e,this.view.update([]))}},{eventObservers:{keydown(e){this.set(e.keyCode==t||n(e))},keyup(e){(e.keyCode==t||!n(e))&&this.set(!1)},mousemove(e){this.set(n(e))}}});return[r,U.contentAttributes.of(e=>e.plugin(r)?.isDown?cl:null)]}var ul=`-10000px`,dl=class{constructor(e,t,n,r){this.facet=t,this.createTooltipView=n,this.removeTooltipView=r,this.input=e.state.facet(t),this.tooltips=this.input.filter(e=>e);let i=null;this.tooltipViews=this.tooltips.map(e=>i=n(e,i))}update(e,t){var n;let r=e.state.facet(this.facet),i=r.filter(e=>e);if(r===this.input){for(let t of this.tooltipViews)t.update&&t.update(e);return!1}let a=[],o=t?[]:null;for(let n=0;n<i.length;n++){let r=i[n],s=-1;if(r){for(let e=0;e<this.tooltips.length;e++){let t=this.tooltips[e];t&&t.create==r.create&&(s=e)}if(s<0)a[n]=this.createTooltipView(r,n?a[n-1]:null),o&&(o[n]=!!r.above);else{let r=a[n]=this.tooltipViews[s];o&&(o[n]=t[s]),r.update&&r.update(e)}}}for(let e of this.tooltipViews)a.indexOf(e)<0&&(this.removeTooltipView(e),(n=e.destroy)==null||n.call(e));return t&&(o.forEach((e,n)=>t[n]=e),t.length=o.length),this.input=r,this.tooltips=i,this.tooltipViews=a,!0}};function fl(e){let t=e.dom.ownerDocument.documentElement;return{top:0,left:0,bottom:t.clientHeight,right:t.clientWidth}}var pl=j.define({combine:e=>({position:L.ios?`absolute`:e.find(e=>e.position)?.position||`fixed`,parent:e.find(e=>e.parent)?.parent||null,tooltipSpace:e.find(e=>e.tooltipSpace)?.tooltipSpace||fl})}),ml=new WeakMap,hl=Ki.fromClass(class{constructor(e){this.view=e,this.above=[],this.inView=!0,this.madeAbsolute=!1,this.lastTransaction=0,this.measureTimeout=-1;let t=e.state.facet(pl);this.position=t.position,this.parent=t.parent,this.classes=e.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.resizeObserver=typeof ResizeObserver==`function`?new ResizeObserver(()=>this.measureSoon()):null,this.manager=new dl(e,yl,(e,t)=>this.createTooltip(e,t),e=>{this.resizeObserver&&this.resizeObserver.unobserve(e.dom),e.dom.remove()}),this.above=this.manager.tooltips.map(e=>!!e.above),this.intersectionObserver=typeof IntersectionObserver==`function`?new IntersectionObserver(e=>{Date.now()>this.lastTransaction-50&&e.length>0&&e[e.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),e.win.addEventListener(`resize`,this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement(`div`),this.container.style.position=`relative`,this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect();for(let e of this.manager.tooltipViews)this.intersectionObserver.observe(e.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(e){e.transactions.length&&(this.lastTransaction=Date.now());let t=this.manager.update(e,this.above);t&&this.observeIntersection();let n=t||e.geometryChanged,r=e.state.facet(pl);if(r.position!=this.position&&!this.madeAbsolute){this.position=r.position;for(let e of this.manager.tooltipViews)e.dom.style.position=this.position;n=!0}if(r.parent!=this.parent){this.parent&&this.container.remove(),this.parent=r.parent,this.createContainer();for(let e of this.manager.tooltipViews)this.container.appendChild(e.dom);n=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses);n&&this.maybeMeasure()}createTooltip(e,t){let n=e.create(this.view),r=t?t.dom:null;if(n.dom.classList.add(`cm-tooltip`),e.arrow&&!n.dom.querySelector(`.cm-tooltip > .cm-tooltip-arrow`)){let e=document.createElement(`div`);e.className=`cm-tooltip-arrow`,n.dom.appendChild(e)}return n.dom.style.position=this.position,n.dom.style.top=ul,n.dom.style.left=`0px`,this.container.insertBefore(n.dom,r),n.mount&&n.mount(this.view),this.resizeObserver&&this.resizeObserver.observe(n.dom),n}destroy(){var e,t,n;this.view.win.removeEventListener(`resize`,this.measureSoon);for(let t of this.manager.tooltipViews)t.dom.remove(),(e=t.destroy)==null||e.call(t);this.parent&&this.container.remove(),(t=this.resizeObserver)==null||t.disconnect(),(n=this.intersectionObserver)==null||n.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let e=1,t=1,n=!1;if(this.position==`fixed`&&this.manager.tooltipViews.length){let{dom:e}=this.manager.tooltipViews[0];if(L.safari){let t=e.getBoundingClientRect();n=Math.abs(t.top+1e4)>1||Math.abs(t.left)>1}else n=!!e.offsetParent&&e.offsetParent!=this.container.ownerDocument.body}if(n||this.position==`absolute`)if(this.parent){let n=this.parent.getBoundingClientRect();n.width&&n.height&&(e=n.width/this.parent.offsetWidth,t=n.height/this.parent.offsetHeight)}else({scaleX:e,scaleY:t}=this.view.viewState);let r=this.view.scrollDOM.getBoundingClientRect(),i=ra(this.view);return{visible:{left:r.left+i.left,top:r.top+i.top,right:r.right-i.right,bottom:r.bottom-i.bottom},parent:this.parent?this.container.getBoundingClientRect():this.view.dom.getBoundingClientRect(),pos:this.manager.tooltips.map((e,t)=>{let n=this.manager.tooltipViews[t];return n.getCoords?n.getCoords(e.pos):this.view.coordsAtPos(e.pos)}),size:this.manager.tooltipViews.map(({dom:e})=>e.getBoundingClientRect()),space:this.view.state.facet(pl).tooltipSpace(this.view),scaleX:e,scaleY:t,makeAbsolute:n}}writeMeasure(e){if(e.makeAbsolute){this.madeAbsolute=!0,this.position=`absolute`;for(let e of this.manager.tooltipViews)e.dom.style.position=`absolute`}let{visible:t,space:n,scaleX:r,scaleY:i}=e,a=[];for(let o=0;o<this.manager.tooltips.length;o++){let s=this.manager.tooltips[o],c=this.manager.tooltipViews[o],{dom:l}=c,u=e.pos[o],d=e.size[o];if(!u||s.clip!==!1&&(u.bottom<=Math.max(t.top,n.top)||u.top>=Math.min(t.bottom,n.bottom)||u.right<Math.max(t.left,n.left)-.1||u.left>Math.min(t.right,n.right)+.1)){l.style.top=ul;continue}let f=s.arrow?c.dom.querySelector(`.cm-tooltip-arrow`):null,p=f?7:0,m=d.right-d.left,h=ml.get(c)??d.bottom-d.top,g=c.offset||vl,_=this.view.textDirection==z.LTR,v=d.width>n.right-n.left?_?n.left:n.right-d.width:_?Math.max(n.left,Math.min(u.left-(f?14:0)+g.x,n.right-m)):Math.min(Math.max(n.left,u.left-m+(f?14:0)-g.x),n.right-m),y=this.above[o];!s.strictSide&&(y?u.top-h-p-g.y<n.top:u.bottom+h+p+g.y>n.bottom)&&y==n.bottom-u.bottom>u.top-n.top&&(y=this.above[o]=!y);let b=(y?u.top-n.top:n.bottom-u.bottom)-p;if(b<h&&c.resize!==!1){if(b<this.view.defaultLineHeight){l.style.top=ul;continue}ml.set(c,h),l.style.height=(h=b)/i+`px`}else l.style.height&&(l.style.height=``);let x=y?u.top-h-p-g.y:u.bottom+p+g.y,S=v+m;if(c.overlap!==!0)for(let e of a)e.left<S&&e.right>v&&e.top<x+h&&e.bottom>x&&(x=y?e.top-h-2-p:e.bottom+p+2);if(this.position==`absolute`?(l.style.top=(x-e.parent.top)/i+`px`,gl(l,(v-e.parent.left)/r)):(l.style.top=x/i+`px`,gl(l,v/r)),f){let e=u.left+(_?g.x:-g.x)-(v+14-7);f.style.left=e/r+`px`}c.overlap!==!0&&a.push({left:v,top:x,right:S,bottom:x+h}),l.classList.toggle(`cm-tooltip-above`,y),l.classList.toggle(`cm-tooltip-below`,!y),c.positioned&&c.positioned(e.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let e of this.manager.tooltipViews)e.dom.style.top=ul}},{eventObservers:{scroll(){this.maybeMeasure()}}});function gl(e,t){let n=parseInt(e.style.left,10);(isNaN(n)||Math.abs(t-n)>1)&&(e.style.left=t+`px`)}var _l=U.baseTheme({".cm-tooltip":{zIndex:500,boxSizing:`border-box`},"&light .cm-tooltip":{border:`1px solid #bbb`,backgroundColor:`#f5f5f5`},"&light .cm-tooltip-section:not(:first-child)":{borderTop:`1px solid #bbb`},"&dark .cm-tooltip":{backgroundColor:`#333338`,color:`white`},".cm-tooltip-arrow":{height:`7px`,width:`14px`,position:`absolute`,zIndex:-1,overflow:`hidden`,"&:before, &:after":{content:`''`,position:`absolute`,width:0,height:0,borderLeft:`7px solid transparent`,borderRight:`7px solid transparent`},".cm-tooltip-above &":{bottom:`-7px`,"&:before":{borderTop:`7px solid #bbb`},"&:after":{borderTop:`7px solid #f5f5f5`,bottom:`1px`}},".cm-tooltip-below &":{top:`-7px`,"&:before":{borderBottom:`7px solid #bbb`},"&:after":{borderBottom:`7px solid #f5f5f5`,top:`1px`}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:`#333338`,borderBottomColor:`#333338`},"&:after":{borderTopColor:`transparent`,borderBottomColor:`transparent`}}}),vl={x:0,y:0},yl=j.define({enables:[hl,_l]}),bl=j.define({combine:e=>e.reduce((e,t)=>e.concat(t),[])}),xl=class e{static create(t){return new e(t)}constructor(e){this.view=e,this.mounted=!1,this.dom=document.createElement(`div`),this.dom.classList.add(`cm-tooltip-hover`),this.manager=new dl(e,bl,(e,t)=>this.createHostedView(e,t),e=>e.dom.remove())}createHostedView(e,t){let n=e.create(this.view);return n.dom.classList.add(`cm-tooltip-section`),this.dom.insertBefore(n.dom,t?t.dom.nextSibling:this.dom.firstChild),this.mounted&&n.mount&&n.mount(this.view),n}mount(e){for(let t of this.manager.tooltipViews)t.mount&&t.mount(e);this.mounted=!0}positioned(e){for(let t of this.manager.tooltipViews)t.positioned&&t.positioned(e)}update(e){this.manager.update(e)}destroy(){var e;for(let t of this.manager.tooltipViews)(e=t.destroy)==null||e.call(t)}passProp(e){let t;for(let n of this.manager.tooltipViews){let r=n[e];if(r!==void 0){if(t===void 0)t=r;else if(t!==r)return}}return t}get offset(){return this.passProp(`offset`)}get getCoords(){return this.passProp(`getCoords`)}get overlap(){return this.passProp(`overlap`)}get resize(){return this.passProp(`resize`)}},Sl=yl.compute([bl],e=>{let t=e.facet(bl);return t.length===0?null:{pos:Math.min(...t.map(e=>e.pos)),end:Math.max(...t.map(e=>e.end??e.pos)),create:xl.create,above:t[0].above,arrow:t.some(e=>e.arrow)}}),Cl=j.define(),wl=class{constructor(e,t,n,r,i,a){this.view=e,this.source=t,this.field=n,this.locked=r,this.setHover=i,this.hoverTime=a,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.lastMove={x:0,y:0,target:e.dom,time:0},this.checkHover=this.checkHover.bind(this),e.dom.addEventListener(`mouseleave`,this.mouseleave=this.mouseleave.bind(this)),e.dom.addEventListener(`mousemove`,this.mousemove=this.mousemove.bind(this))}update(e){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout(()=>this.startHover(),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active.length)return;let e=Date.now()-this.lastMove.time;e<this.hoverTime?this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime-e):this.startHover()}startHover(){clearTimeout(this.restartTimeout);let{view:e,lastMove:t}=this,n=e.docView.tile.nearest(t.target);if(!n)return;let r,i=1;if(n.isWidget())r=n.posAtStart;else{if(r=e.posAtCoords(t),r==null)return;let n=e.coordsAtPos(r);if(!n||t.y<n.top||t.y>n.bottom||t.x<n.left-e.defaultCharacterWidth||t.x>n.right+e.defaultCharacterWidth)return;let a=e.bidiSpans(e.state.doc.lineAt(r)).find(e=>e.from<=r&&e.to>=r),o=a&&a.dir==z.RTL?-1:1;i=t.x<n.left?-o:o}this.activateHover(e,r,i)}activateHover(e,t,n,r){let i=this.source(e,t,n),a=t=>{if(t&&!(Array.isArray(t)&&!t.length)){let n=Array.isArray(t)?t:[t];r&&this.locked.set(n,r),e.dispatch({effects:this.setHover.of(n)})}};if(i&&`then`in i){let n=this.pending={pos:t};i.then(e=>{this.pending==n&&(this.pending=null,a(e))},t=>Hi(e.state,t,`hover tooltip`))}else a(i)}get tooltip(){let e=this.view.plugin(hl),t=e?e.manager.tooltips.findIndex(e=>e.create==xl.create):-1;return t>-1?e.manager.tooltipViews[t]:null}mousemove(e){this.lastMove={x:e.clientX,y:e.clientY,target:e.target,time:Date.now()},this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime));let{active:t,tooltip:n}=this;if(t.length&&!this.locked.has(t)&&n&&!El(n.dom,e)||this.pending){let{pos:n}=t[0]||this.pending,r=t[0]?.end??n;(n==r?this.view.posAtCoords(this.lastMove)!=n:!Dl(this.view,n,r,e.clientX,e.clientY))&&(this.view.dispatch({effects:this.setHover.of([])}),this.pending=null)}}mouseleave(e){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1;let{active:t}=this;if(t.length&&!this.locked.has(t)){let{tooltip:t}=this;t&&t.dom.contains(e.relatedTarget)?this.watchTooltipLeave(t.dom):this.view.dispatch({effects:this.setHover.of([])})}}watchTooltipLeave(e){let t=n=>{e.removeEventListener(`mouseleave`,t);let{active:r}=this;r.length&&!this.locked.has(r)&&!this.view.dom.contains(n.relatedTarget)&&this.view.dispatch({effects:this.setHover.of([])})};e.addEventListener(`mouseleave`,t)}destroy(){clearTimeout(this.hoverTimeout),clearTimeout(this.restartTimeout),this.view.dom.removeEventListener(`mouseleave`,this.mouseleave),this.view.dom.removeEventListener(`mousemove`,this.mousemove)}},Tl=4;function El(e,t){let{left:n,right:r,top:i,bottom:a}=e.getBoundingClientRect(),o;if(o=e.querySelector(`.cm-tooltip-arrow`)){let e=o.getBoundingClientRect();i=Math.min(e.top,i),a=Math.max(e.bottom,a)}return t.clientX>=n-Tl&&t.clientX<=r+Tl&&t.clientY>=i-Tl&&t.clientY<=a+Tl}function Dl(e,t,n,r,i,a){let o=e.scrollDOM.getBoundingClientRect(),s=e.documentTop+e.documentPadding.top+e.contentHeight;if(o.left>r||o.right<r||o.top>i||Math.min(o.bottom,s)<i)return!1;let c=e.posAtCoords({x:r,y:i},!1);return c>=t&&c<=n}function Ol(e,t={}){let n=M.define(),r=new WeakMap,i=Kt.define({create(){return[]},update(e,a){let o=r.get(e);if(e.length&&(t.hideOnChange&&(a.docChanged||a.selection)||o&&o(a)?e=[]:t.hideOn&&(e=e.filter(e=>!t.hideOn(a,e)))),a.docChanged&&e.length){let t=[];for(let n of e){let e=a.changes.mapPos(n.pos,-1,Ot.TrackDel);if(e!=null){let r=Object.assign(Object.create(null),n);r.pos=e,r.end!=null&&(r.end=a.changes.mapPos(r.end)),t.push(r)}}e=t}for(let t of a.effects)t.is(n)&&(e=t.value,o=void 0),(t.is(jl)&&!t.value||t.value==i)&&(e=[]);return e.length&&o&&r.set(e,o),e},provide:e=>bl.from(e)}),a=Ki.define(a=>new wl(a,e,i,r,n,t.hoverTime||300));return{active:i,extension:[i,a,Cl.of(a),Sl]}}function kl(e,t,n,r={}){let i=e.state.facet(Cl).map(t=>e.plugin(t)).filter(e=>!!e);if(r.tooltip&&r.tooltip.active){let e=i.find(e=>e.field==r.tooltip.active);e&&(i=[e])}for(let a of i)a.activateHover(e,t,n,r.until??(()=>!1))}function Al(e,t){let n=e.plugin(hl);if(!n)return null;let r=n.manager.tooltips.indexOf(t);return r<0?null:n.manager.tooltipViews[r]}var jl=M.define(),Ml=j.define({combine(e){let t,n;for(let r of e)t||=r.topContainer,n||=r.bottomContainer;return{topContainer:t,bottomContainer:n}}});function Nl(e,t){let n=e.plugin(Pl),r=n?n.specs.indexOf(t):-1;return r>-1?n.panels[r]:null}var Pl=Ki.fromClass(class{constructor(e){this.input=e.state.facet(Ll),this.specs=this.input.filter(e=>e),this.panels=this.specs.map(t=>t(e));let t=e.state.facet(Ml);this.top=new Fl(e,!0,t.topContainer),this.bottom=new Fl(e,!1,t.bottomContainer),this.top.sync(this.panels.filter(e=>e.top)),this.bottom.sync(this.panels.filter(e=>!e.top));for(let e of this.panels)e.dom.classList.add(`cm-panel`),e.mount&&e.mount()}update(e){let t=e.state.facet(Ml);this.top.container!=t.topContainer&&(this.top.sync([]),this.top=new Fl(e.view,!0,t.topContainer)),this.bottom.container!=t.bottomContainer&&(this.bottom.sync([]),this.bottom=new Fl(e.view,!1,t.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let n=e.state.facet(Ll);if(n!=this.input){let t=n.filter(e=>e),r=[],i=[],a=[],o=[];for(let n of t){let t=this.specs.indexOf(n),s;t<0?(s=n(e.view),o.push(s)):(s=this.panels[t],s.update&&s.update(e)),r.push(s),(s.top?i:a).push(s)}this.specs=t,this.panels=r,this.top.sync(i),this.bottom.sync(a);for(let e of o)e.dom.classList.add(`cm-panel`),e.mount&&e.mount()}else for(let t of this.panels)t.update&&t.update(e)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:e=>U.scrollMargins.of(t=>{let n=t.plugin(e);return n&&{top:n.top.scrollMargin(),bottom:n.bottom.scrollMargin()}})}),Fl=class{constructor(e,t,n){this.view=e,this.top=t,this.container=n,this.dom=void 0,this.classes=``,this.panels=[],this.syncClasses()}sync(e){for(let t of this.panels)t.destroy&&e.indexOf(t)<0&&t.destroy();this.panels=e,this.syncDOM()}syncDOM(){if(this.panels.length==0){this.dom&&=(this.dom.remove(),void 0);return}if(!this.dom){this.dom=document.createElement(`div`),this.dom.className=this.top?`cm-panels cm-panels-top`:`cm-panels cm-panels-bottom`,this.dom.style[this.top?`top`:`bottom`]=`0`;let e=this.container||this.view.dom;e.insertBefore(this.dom,this.top?e.firstChild:null)}let e=this.dom.firstChild;for(let t of this.panels)if(t.dom.parentNode==this.dom){for(;e!=t.dom;)e=Il(e);e=e.nextSibling}else this.dom.insertBefore(t.dom,e);for(;e;)e=Il(e)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(!(!this.container||this.classes==this.view.themeClasses)){for(let e of this.classes.split(` `))e&&this.container.classList.remove(e);for(let e of(this.classes=this.view.themeClasses).split(` `))e&&this.container.classList.add(e)}}};function Il(e){let t=e.nextSibling;return e.remove(),t}var Ll=j.define({enables:Pl});function Rl(e,t){let n,r=new Promise(e=>n=e),i=e=>Hl(e,t,n);e.state.field(zl,!1)?e.dispatch({effects:Bl.of(i)}):e.dispatch({effects:M.appendConfig.of(zl.init(()=>[i]))});let a=Vl.of(i);return{close:a,result:r.then(t=>((e.win.queueMicrotask||(t=>e.win.setTimeout(t,10)))(()=>{e.state.field(zl).indexOf(i)>-1&&e.dispatch({effects:a})}),t))}}var zl=Kt.define({create(){return[]},update(e,t){for(let n of t.effects)n.is(Bl)?e=[n.value].concat(e):n.is(Vl)&&(e=e.filter(e=>e!=n.value));return e},provide:e=>Ll.computeN([e],t=>t.field(e))}),Bl=M.define(),Vl=M.define();function Hl(e,t,n){let r=t.content?t.content(e,()=>o(null)):null;if(!r){if(r=I(`form`),t.input){let e=I(`input`,t.input);/^(text|password|number|email|tel|url)$/.test(e.type)&&e.classList.add(`cm-textfield`),e.name||=`input`,r.appendChild(I(`label`,(t.label||``)+`: `,e))}else r.appendChild(document.createTextNode(t.label||``));r.appendChild(document.createTextNode(` `)),r.appendChild(I(`button`,{class:`cm-button`,type:`submit`},t.submitLabel||`OK`))}let i=r.nodeName==`FORM`?[r]:r.querySelectorAll(`form`);for(let e=0;e<i.length;e++){let t=i[e];t.addEventListener(`keydown`,e=>{e.keyCode==27?(e.preventDefault(),o(null)):e.keyCode==13&&(e.preventDefault(),o(t))}),t.addEventListener(`submit`,e=>{e.preventDefault(),o(t)})}let a=I(`div`,r,I(`button`,{onclick:()=>o(null),"aria-label":e.state.phrase(`close`),class:`cm-dialog-close`,type:`button`},[`×`]));t.class&&(a.className=t.class),a.classList.add(`cm-dialog`);function o(t){a.contains(a.ownerDocument.activeElement)&&e.focus(),n(t)}return{dom:a,top:t.top,mount:()=>{if(t.focus){let e;e=typeof t.focus==`string`?r.querySelector(t.focus):r.querySelector(`input`)||r.querySelector(`button`),e&&`select`in e?e.select():e&&`focus`in e&&e.focus()}}}}var Ul=class extends On{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}};Ul.prototype.elementClass=``,Ul.prototype.toDOM=void 0,Ul.prototype.mapMode=Ot.TrackBefore,Ul.prototype.startSide=Ul.prototype.endSide=-1,Ul.prototype.point=!0;var Wl=j.define(),Gl=j.define(),Kl={class:``,renderEmptyElements:!1,elementStyle:``,markers:()=>F.empty,lineMarker:()=>null,widgetMarker:()=>null,lineMarkerChange:null,initialSpacer:null,updateSpacer:null,domEventHandlers:{},side:`before`},ql=j.define();function Jl(e){return[Xl(),ql.of({...Kl,...e})]}var Yl=j.define({combine:e=>e.some(e=>e)});function Xl(e){let t=[Zl];return e&&e.fixed===!1&&t.push(Yl.of(!0)),t}var Zl=Ki.fromClass(class{constructor(e){this.view=e,this.domAfter=null,this.prevViewport=e.viewport,this.dom=document.createElement(`div`),this.dom.className=`cm-gutters cm-gutters-before`,this.dom.setAttribute(`aria-hidden`,`true`),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+`px`,this.gutters=e.state.facet(ql).map(t=>new tu(e,t)),this.fixed=!e.state.facet(Yl);for(let e of this.gutters)e.config.side==`after`?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.fixed&&(this.dom.style.position=`sticky`),this.syncGutters(!1),e.scrollDOM.insertBefore(this.dom,e.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement(`div`),this.domAfter.className=`cm-gutters cm-gutters-after`,this.domAfter.setAttribute(`aria-hidden`,`true`),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+`px`,this.domAfter.style.position=this.fixed?`sticky`:``,this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(e){if(this.updateGutters(e)){let t=this.prevViewport,n=e.view.viewport,r=Math.min(t.to,n.to)-Math.max(t.from,n.from);this.syncGutters(r<(n.to-n.from)*.8)}if(e.geometryChanged){let e=this.view.contentHeight/this.view.scaleY+`px`;this.dom.style.minHeight=e,this.domAfter&&(this.domAfter.style.minHeight=e)}this.view.state.facet(Yl)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?`sticky`:``,this.domAfter&&(this.domAfter.style.position=this.fixed?`sticky`:``)),this.prevViewport=e.view.viewport}syncGutters(e){let t=this.dom.nextSibling;e&&(this.dom.remove(),this.domAfter&&this.domAfter.remove());let n=F.iter(this.view.state.facet(Wl),this.view.viewport.from),r=[],i=this.gutters.map(e=>new eu(e,this.view.viewport,-this.view.documentPadding.top));for(let e of this.view.viewportLineBlocks)if(r.length&&(r=[]),Array.isArray(e.type)){let t=!0;for(let a of e.type)if(a.type==Er.Text&&t){$l(n,r,a.from);for(let e of i)e.line(this.view,a,r);t=!1}else if(a.widget)for(let e of i)e.widget(this.view,a)}else if(e.type==Er.Text){$l(n,r,e.from);for(let t of i)t.line(this.view,e,r)}else if(e.widget)for(let t of i)t.widget(this.view,e);for(let e of i)e.finish();e&&(this.view.scrollDOM.insertBefore(this.dom,t),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(e){let t=e.startState.facet(ql),n=e.state.facet(ql),r=e.docChanged||e.heightChanged||e.viewportChanged||!F.eq(e.startState.facet(Wl),e.state.facet(Wl),e.view.viewport.from,e.view.viewport.to);if(t==n)for(let t of this.gutters)t.update(e)&&(r=!0);else{r=!0;let i=[];for(let r of n){let n=t.indexOf(r);n<0?i.push(new tu(this.view,r)):(this.gutters[n].update(e),i.push(this.gutters[n]))}for(let e of this.gutters)e.dom.remove(),i.indexOf(e)<0&&e.destroy();for(let e of i)e.config.side==`after`?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.gutters=i}return r}destroy(){for(let e of this.gutters)e.destroy();this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:e=>U.scrollMargins.of(t=>{let n=t.plugin(e);if(!n||n.gutters.length==0||!n.fixed)return null;let r=n.dom.offsetWidth*t.scaleX,i=n.domAfter?n.domAfter.offsetWidth*t.scaleX:0;return t.textDirection==z.LTR?{left:r,right:i}:{right:r,left:i}})});function Ql(e){return Array.isArray(e)?e:[e]}function $l(e,t,n){for(;e.value&&e.from<=n;)e.from==n&&t.push(e.value),e.next()}var eu=class{constructor(e,t,n){this.gutter=e,this.height=n,this.i=0,this.cursor=F.iter(e.markers,t.from)}addElement(e,t,n){let{gutter:r}=this,i=(t.top-this.height)/e.scaleY,a=t.height/e.scaleY;if(this.i==r.elements.length){let t=new nu(e,a,i,n);r.elements.push(t),r.dom.appendChild(t.dom)}else r.elements[this.i].update(e,a,i,n);this.height=t.bottom,this.i++}line(e,t,n){let r=[];$l(this.cursor,r,t.from),n.length&&(r=r.concat(n));let i=this.gutter.config.lineMarker(e,t,r);i&&r.unshift(i);let a=this.gutter;r.length==0&&!a.config.renderEmptyElements||this.addElement(e,t,r)}widget(e,t){let n=this.gutter.config.widgetMarker(e,t.widget,t),r=n?[n]:null;for(let n of e.state.facet(Gl)){let i=n(e,t.widget,t);i&&(r||=[]).push(i)}r&&this.addElement(e,t,r)}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let t=e.elements.pop();e.dom.removeChild(t.dom),t.destroy()}}},tu=class{constructor(e,t){this.view=e,this.config=t,this.elements=[],this.spacer=null,this.dom=document.createElement(`div`),this.dom.className=`cm-gutter`+(this.config.class?` `+this.config.class:``);for(let n in t.domEventHandlers)this.dom.addEventListener(n,r=>{let i=r.target,a;if(i!=this.dom&&this.dom.contains(i)){for(;i.parentNode!=this.dom;)i=i.parentNode;let e=i.getBoundingClientRect();a=(e.top+e.bottom)/2}else a=r.clientY;let o=e.lineBlockAtHeight(a-e.documentTop);t.domEventHandlers[n](e,o,r)&&r.preventDefault()});this.markers=Ql(t.markers(e)),t.initialSpacer&&(this.spacer=new nu(e,0,0,[t.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+=`visibility: hidden; pointer-events: none`)}update(e){let t=this.markers;if(this.markers=Ql(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let t=this.config.updateSpacer(this.spacer.markers[0],e);t!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[t])}let n=e.view.viewport;return!F.eq(this.markers,t,n.from,n.to)||(this.config.lineMarkerChange?this.config.lineMarkerChange(e):!1)}destroy(){for(let e of this.elements)e.destroy()}},nu=class{constructor(e,t,n,r){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement(`div`),this.dom.className=`cm-gutterElement`,this.update(e,t,n,r)}update(e,t,n,r){this.height!=t&&(this.height=t,this.dom.style.height=t+`px`),this.above!=n&&(this.dom.style.marginTop=(this.above=n)?n+`px`:``),ru(this.markers,r)||this.setMarkers(e,r)}setMarkers(e,t){let n=`cm-gutterElement`,r=this.dom.firstChild;for(let i=0,a=0;;){let o=a,s=i<t.length?t[i++]:null,c=!1;if(s){let e=s.elementClass;e&&(n+=` `+e);for(let e=a;e<this.markers.length;e++)if(this.markers[e].compare(s)){o=e,c=!0;break}}else o=this.markers.length;for(;a<o;){let e=this.markers[a++];if(e.toDOM){e.destroy(r);let t=r.nextSibling;r.remove(),r=t}}if(!s)break;s.toDOM&&(c?r=r.nextSibling:this.dom.insertBefore(s.toDOM(e),r)),c&&a++}this.dom.className=n,this.markers=t}destroy(){this.setMarkers(null,[])}};function ru(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!e[n].compare(t[n]))return!1;return!0}var iu=j.define(),au=j.define(),ou=j.define({combine(e){return Dn(e,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,t){let n=Object.assign({},e);for(let e in t){let r=n[e],i=t[e];n[e]=r?(e,t,n)=>r(e,t,n)||i(e,t,n):i}return n}})}}),su=class extends Ul{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}};function cu(e,t){return e.state.facet(ou).formatNumber(t,e.state)}var lu=ql.compute([ou],e=>({class:`cm-lineNumbers`,renderEmptyElements:!1,markers(e){return e.state.facet(iu)},lineMarker(e,t,n){return n.some(e=>e.toDOM)?null:new su(cu(e,e.state.doc.lineAt(t.from).number))},widgetMarker:(e,t,n)=>{for(let r of e.state.facet(au)){let i=r(e,t,n);if(i)return i}return null},lineMarkerChange:e=>e.startState.facet(ou)!=e.state.facet(ou),initialSpacer(e){return new su(cu(e,du(e.state.doc.lines)))},updateSpacer(e,t){let n=cu(t.view,du(t.view.state.doc.lines));return n==e.number?e:new su(n)},domEventHandlers:e.facet(ou).domEventHandlers,side:`before`}));function uu(e={}){return[ou.of(e),Xl(),lu]}function du(e){let t=9;for(;t<e;)t=t*10+9;return t}var fu=new class extends Ul{constructor(){super(...arguments),this.elementClass=`cm-activeLineGutter`}},pu=Wl.compute([`selection`],e=>{let t=[],n=-1;for(let r of e.selection.ranges){let i=e.doc.lineAt(r.head).from;i>n&&(n=i,t.push(fu.range(i)))}return F.of(t)});function mu(){return pu}var hu=1024,gu=0,_u=class{constructor(e,t){this.from=e,this.to=t}},W=class{constructor(e={}){this.id=gu++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=G.match(e)),t=>{let n=e(t);return n===void 0?null:[this,n]}}};W.closedBy=new W({deserialize:e=>e.split(` `)}),W.openedBy=new W({deserialize:e=>e.split(` `)}),W.group=new W({deserialize:e=>e.split(` `)}),W.isolate=new W({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),W.contextHash=new W({perNode:!0}),W.lookAhead=new W({perNode:!0}),W.mounted=new W({perNode:!0});var vu=class{constructor(e,t,n,r=!1){this.tree=e,this.overlay=t,this.parser=n,this.bracketed=r}static get(e){return e&&e.props&&e.props[W.mounted.id]}},yu=Object.create(null),G=class e{constructor(e,t,n,r=0){this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){let n=t.props&&t.props.length?Object.create(null):yu,r=!!t.top|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(let e of t.props)if(Array.isArray(e)||(e=e(i)),e){if(e[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[e[0].id]=e[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;let t=this.prop(W.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let n in e)for(let r of n.split(` `))t[r]=e[n];return e=>{for(let n=e.prop(W.group),r=-1;r<(n?n.length:0);r++){let i=t[r<0?e.name:n[r]];if(i)return i}}}};G.none=new G(``,Object.create(null),0,8);var bu=class e{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw RangeError(`Node type ids should correspond to array positions when creating a node set`)}extend(...t){let n=[];for(let e of this.types){let r=null;for(let n of t){let t=n(e);if(t){r||=Object.assign({},e.props);let n=t[1],i=t[0];i.combine&&i.id in r&&(n=i.combine(r[i.id],n)),r[i.id]=n}}n.push(r?new G(e.name,r,e.id,e.flags):e)}return new e(n)}},xu=new WeakMap,Su=new WeakMap,K;(function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`,e[e.EnterBracketed=16]=`EnterBracketed`})(K||={});var q=class e{constructor(e,t,n,r,i){if(this.type=e,this.children=t,this.positions=n,this.length=r,this.props=null,i&&i.length){this.props=Object.create(null);for(let[e,t]of i)this.props[typeof e==`number`?e:e.id]=t}}toString(){let e=vu.get(this);if(e&&!e.overlay)return e.tree.toString();let t=``;for(let e of this.children){let n=e.toString();n&&(t&&(t+=`,`),t+=n)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?`(`+t+`)`:``):t}cursor(e=0){return new Iu(this.topNode,e)}cursorAt(e,t=0,n=0){let r=new Iu(xu.get(this)||this.topNode);return r.moveTo(e,t),xu.set(this,r._tree),r}get topNode(){return new Ou(this,0,0,null)}resolve(e,t=0){let n=Eu(xu.get(this)||this.topNode,e,t,!1);return xu.set(this,n),n}resolveInner(e,t=0){let n=Eu(Su.get(this)||this.topNode,e,t,!0);return Su.set(this,n),n}resolveStack(e,t=0){return Fu(this,e,t)}iterate(e){let{enter:t,leave:n,from:r=0,to:i=this.length}=e,a=e.mode||0,o=(a&K.IncludeAnonymous)>0;for(let e=this.cursor(a|K.IncludeAnonymous);;){let a=!1;if(e.from<=i&&e.to>=r&&(!o&&e.type.isAnonymous||t(e)!==!1)){if(e.firstChild())continue;a=!0}for(;a&&n&&(o||!e.type.isAnonymous)&&n(e),!e.nextSibling();){if(!e.parent())return;a=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(t={}){return this.children.length<=8?this:Vu(G.none,this.children,this.positions,0,this.children.length,0,this.length,(t,n,r)=>new e(this.type,t,n,r,this.propValues),t.makeTree||((t,n,r)=>new e(G.none,t,n,r)))}static build(e){return Ru(e)}};q.empty=new q(G.none,[],[],0);var Cu=class e{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new e(this.buffer,this.index)}},wu=class e{constructor(e,t,n){this.buffer=e,this.length=t,this.set=n}get type(){return G.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(`,`)}childString(e){let t=this.buffer[e],n=this.buffer[e+3],r=this.set.types[t],i=r.name;if(/\W/.test(i)&&!r.isError&&(i=JSON.stringify(i)),e+=4,n==e)return i;let a=[];for(;e<n;)a.push(this.childString(e)),e=this.buffer[e+3];return i+`(`+a.join(`,`)+`)`}findChild(e,t,n,r,i){let{buffer:a}=this,o=-1;for(let s=e;s!=t&&!(Tu(i,r,a[s+1],a[s+2])&&(o=s,n>0));s=a[s+3]);return o}slice(t,n,r){let i=this.buffer,a=new Uint16Array(n-t),o=0;for(let e=t,s=0;e<n;){a[s++]=i[e++],a[s++]=i[e++]-r;let n=a[s++]=i[e++]-r;a[s++]=i[e++]-t,o=Math.max(o,n)}return new e(a,o,this.set)}};function Tu(e,t,n,r){switch(e){case-2:return n<t;case-1:return r>=t&&n<t;case 0:return n<t&&r>t;case 1:return n<=t&&r>t;case 2:return r>t;case 4:return!0}}function Eu(e,t,n,r){for(;e.from==e.to||(n<1?e.from>=t:e.from>t)||(n>-1?e.to<=t:e.to<t);){let t=!r&&e instanceof Ou&&e.index<0?null:e.parent;if(!t)return e;e=t}let i=r?0:K.IgnoreOverlays;if(r)for(let r=e,a=r.parent;a;r=a,a=r.parent)r instanceof Ou&&r.index<0&&a.enter(t,n,i)?.from!=r.from&&(e=a);for(;;){let r=e.enter(t,n,i);if(!r)return e;e=r}}var Du=class{cursor(e=0){return new Iu(this,e)}getChild(e,t=null,n=null){let r=ku(this,e,t,n);return r.length?r[0]:null}getChildren(e,t=null,n=null){return ku(this,e,t,n)}resolve(e,t=0){return Eu(this,e,t,!1)}resolveInner(e,t=0){return Eu(this,e,t,!0)}matchContext(e){return Au(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),n=this;for(;t;){let e=t.lastChild;if(!e||e.to!=t.to)break;e.type.isError&&e.from==e.to?(n=t,t=e.prevSibling):t=e}return n}get node(){return this}get next(){return this.parent}},Ou=class e extends Du{constructor(e,t,n,r){super(),this._tree=e,this.from=t,this.index=n,this._parent=r}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(t,n,r,i,a=0){for(let o=this;;){for(let{children:s,positions:c}=o._tree,l=n>0?s.length:-1;t!=l;t+=n){let l=s[t],u=c[t]+o.from,d;if(!(!(a&K.EnterBracketed&&l instanceof q&&(d=vu.get(l))&&!d.overlay&&d.bracketed&&r>=u&&r<=u+l.length)&&!Tu(i,r,u,u+l.length))){if(l instanceof wu){if(a&K.ExcludeBuffers)continue;let e=l.findChild(0,l.buffer.length,n,r-u,i);if(e>-1)return new Mu(new ju(o,l,t,u),null,e)}else if(a&K.IncludeAnonymous||!l.type.isAnonymous||Lu(l)){let s;if(!(a&K.IgnoreMounts)&&(s=vu.get(l))&&!s.overlay)return new e(s.tree,u,t,o);let c=new e(l,u,t,o);return a&K.IncludeAnonymous||!c.type.isAnonymous?c:c.nextChild(n<0?l.children.length-1:0,n,r,i,a)}}}if(a&K.IncludeAnonymous||!o.type.isAnonymous||(t=o.index>=0?o.index+n:n<0?-1:o._parent._tree.children.length,o=o._parent,!o))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(t,n,r=0){let i;if(!(r&K.IgnoreOverlays)&&(i=vu.get(this._tree))&&i.overlay){let a=t-this.from,o=r&K.EnterBracketed&&i.bracketed;for(let{from:t,to:r}of i.overlay)if((n>0||o?t<=a:t<a)&&(n<0||o?r>=a:r>a))return new e(i.tree,i.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,t,n,r)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}};function ku(e,t,n,r){let i=e.cursor(),a=[];if(!i.firstChild())return a;if(n!=null){for(let e=!1;!e;)if(e=i.type.is(n),!i.nextSibling())return a}for(;;){if(r!=null&&i.type.is(r))return a;if(i.type.is(t)&&a.push(i.node),!i.nextSibling())return r==null?a:[]}}function Au(e,t,n=t.length-1){for(let r=e;n>=0;r=r.parent){if(!r)return!1;if(!r.type.isAnonymous){if(t[n]&&t[n]!=r.name)return!1;n--}}return!0}var ju=class{constructor(e,t,n,r){this.parent=e,this.buffer=t,this.index=n,this.start=r}},Mu=class e extends Du{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,n){super(),this.context=e,this._parent=t,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(t,n,r){let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],t,n-this.context.start,r);return a<0?null:new e(this.context,this,a)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(t,n,r=0){if(r&K.ExcludeBuffers)return null;let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],n>0?1:-1,t-this.context.start,n);return a<0?null:new e(this.context,this,a)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:t}=this.context,n=t.buffer[this.index+3];return n<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new e(this.context,this._parent,n):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,n=this._parent?this._parent.index+4:0;return this.index==n?this.externalSibling(-1):new e(this.context,this._parent,t.findChild(n,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:n}=this.context,r=this.index+4,i=n.buffer[this.index+3];if(i>r){let a=n.buffer[this.index+1];e.push(n.slice(r,i,a)),t.push(0)}return new q(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}};function Nu(e){if(!e.length)return null;let t=0,n=e[0];for(let r=1;r<e.length;r++){let i=e[r];(i.from>n.from||i.to<n.to)&&(n=i,t=r)}let r=n instanceof Ou&&n.index<0?null:n.parent,i=e.slice();return r?i[t]=r:i.splice(t,1),new Pu(i,n)}var Pu=class{constructor(e,t){this.heads=e,this.node=t}get next(){return Nu(this.heads)}};function Fu(e,t,n){let r=e.resolveInner(t,n),i=null;for(let e=r instanceof Ou?r:r.context.parent;e;e=e.parent)if(e.index<0){let a=e.parent;(i||=[r]).push(a.resolve(t,n)),e=a}else{let a=vu.get(e.tree);if(a&&a.overlay&&a.overlay[0].from<=t&&a.overlay[a.overlay.length-1].to>=t){let o=new Ou(a.tree,a.overlay[0].from+e.from,-1,e);(i||=[r]).push(Eu(o,t,n,!1))}}return i?Nu(i):r}var Iu=class{get name(){return this.type.name}constructor(e,t=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=t&~K.EnterBracketed,e instanceof Ou)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:n,buffer:r}=this.buffer;return this.type=t||r.set.types[r.buffer[e]],this.from=n+r.buffer[e+1],this.to=n+r.buffer[e+2],!0}yield(e){return e?e instanceof Ou?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,n,this.mode));let{buffer:r}=this.buffer,i=r.findChild(this.index+4,r.buffer[this.index+3],e,t-this.buffer.start,n);return i<0?!1:(this.stack.push(this.index),this.yieldBuf(i))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,n=this.mode){return this.buffer?n&K.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&K.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&K.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,n=this.stack.length-1;if(e<0){let e=n<0?0:this.stack[n]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4))}else{let e=t.buffer[this.index+3];if(e<(n<0?t.buffer.length:t.buffer[this.stack[n]+3]))return this.yieldBuf(e)}return n<0?this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode)):!1}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,n,{buffer:r}=this;if(r){if(e>0){if(this.index<r.buffer.buffer.length)return!1}else for(let e=0;e<this.index;e++)if(r.buffer.buffer[e+3]<this.index)return!1;({index:t,parent:n}=r)}else({index:t,_parent:n}=this._tree);for(;n;{index:t,_parent:n}=n)if(t>-1)for(let r=t+e,i=e<0?-1:n._tree.children.length;r!=i;r+=e){let e=n._tree.children[r];if(this.mode&K.IncludeAnonymous||e instanceof wu||!e.type.isAnonymous||Lu(e))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,n=0;if(e&&e.context==this.buffer)scan:for(let r=this.index,i=this.stack.length;i>=0;){for(let a=e;a;a=a._parent)if(a.index==r){if(r==this.index)return a;t=a,n=i+1;break scan}r=this.stack[--i]}for(let e=n;e<this.stack.length;e++)t=new Mu(this.buffer,t,this.stack[e]);return this.bufferNode=new Mu(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let n=0;;){let r=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(r=!0)}for(;;){if(r&&t&&t(this),r=this.type.isAnonymous,!n)return;if(this.nextSibling())break;this.parent(),n--,r=!0}}}matchContext(e){if(!this.buffer)return Au(this.node.parent,e);let{buffer:t}=this.buffer,{types:n}=t.set;for(let r=e.length-1,i=this.stack.length-1;r>=0;i--){if(i<0)return Au(this._tree,e,r);let a=n[t.buffer[this.stack[i]]];if(!a.isAnonymous){if(e[r]&&e[r]!=a.name)return!1;r--}}return!0}};function Lu(e){return e.children.some(e=>e instanceof wu||!e.type.isAnonymous||Lu(e))}function Ru(e){let{buffer:t,nodeSet:n,maxBufferLength:r=hu,reused:i=[],minRepeatType:a=n.types.length}=e,o=Array.isArray(t)?new Cu(t,t.length):t,s=n.types,c=0,l=0;function u(e,t,_,v,y,b){let{id:x,start:S,end:ee,size:C}=o,te=l,ne=c;if(C<0)if(o.next(),C==-1){let t=i[x];_.push(t),v.push(S-e);return}else if(C==-3){c=x;return}else if(C==-4){l=x;return}else throw RangeError(`Unrecognized record size: ${C}`);let w=s[x],re,ie,ae=S-e;if(ee-S<=r&&(ie=h(o.pos-t,y))){let t=new Uint16Array(ie.size-ie.skip),r=o.pos-ie.size,i=t.length;for(;o.pos>r;)i=g(ie.start,t,i);re=new wu(t,ee-ie.start,n),ae=ie.start-e}else{let e=o.pos-C;o.next();let t=[],n=[],i=x>=a?x:-1,s=0,c=ee;for(;o.pos>e;)i>=0&&o.id==i&&o.size>=0?(o.end<=c-r&&(p(t,n,S,s,o.end,c,i,te,ne),s=t.length,c=o.end),o.next()):b>2500?d(S,e,t,n):u(S,e,t,n,i,b+1);if(i>=0&&s>0&&s<t.length&&p(t,n,S,s,S,c,i,te,ne),t.reverse(),n.reverse(),i>-1&&s>0){let e=f(w,ne);re=Vu(w,t,n,0,t.length,0,ee-S,e,e)}else re=m(w,t,n,ee-S,te-ee,ne)}_.push(re),v.push(ae)}function d(e,t,i,a){let s=[],c=0,l=-1;for(;o.pos>t;){let{id:e,start:t,end:n,size:i}=o;if(i>4)o.next();else if(l>-1&&t<l)break;else l<0&&(l=n-r),s.push(e,t,n),c++,o.next()}if(c){let t=new Uint16Array(c*4),r=s[s.length-2];for(let e=s.length-3,n=0;e>=0;e-=3)t[n++]=s[e],t[n++]=s[e+1]-r,t[n++]=s[e+2]-r,t[n++]=n;i.push(new wu(t,s[2]-r,n)),a.push(r-e)}}function f(e,t){return(n,r,i)=>{let a=0,o=n.length-1,s,c;if(o>=0&&(s=n[o])instanceof q){if(!o&&s.type==e&&s.length==i)return s;(c=s.prop(W.lookAhead))&&(a=r[o]+s.length+c)}return m(e,n,r,i,a,t)}}function p(e,t,r,i,a,o,s,c,l){let u=[],d=[];for(;e.length>i;)u.push(e.pop()),d.push(t.pop()+r-a);e.push(m(n.types[s],u,d,o-a,c-o,l)),t.push(a-r)}function m(e,t,n,r,i,a,o){if(a){let e=[W.contextHash,a];o=o?[e].concat(o):[e]}if(i>25){let e=[W.lookAhead,i];o=o?[e].concat(o):[e]}return new q(e,t,n,r,o)}function h(e,t){let n=o.fork(),i=0,s=0,c=0,l=n.end-r,u={size:0,start:0,skip:0};scan:for(let r=n.pos-e;n.pos>r;){let e=n.size;if(n.id==t&&e>=0){u.size=i,u.start=s,u.skip=c,c+=4,i+=4,n.next();continue}let o=n.pos-e;if(e<0||o<r||n.start<l)break;let d=n.id>=a?4:0,f=n.start;for(n.next();n.pos>o;){if(n.size<0)if(n.size==-3||n.size==-4)d+=4;else break scan;else n.id>=a&&(d+=4);n.next()}s=f,i+=e,c+=d}return(t<0||i==e)&&(u.size=i,u.start=s,u.skip=c),u.size>4?u:void 0}function g(e,t,n){let{id:r,start:i,end:s,size:u}=o;if(o.next(),u>=0&&r<a){let a=n;if(u>4){let r=o.pos-(u-4);for(;o.pos>r;)n=g(e,t,n)}t[--n]=a,t[--n]=s-e,t[--n]=i-e,t[--n]=r}else u==-3?c=r:u==-4&&(l=r);return n}let _=[],v=[];for(;o.pos>0;)u(e.start||0,e.bufferStart||0,_,v,-1,0);let y=e.length??(_.length?v[0]+_[0].length:0);return new q(s[e.topID],_.reverse(),v.reverse(),y)}var zu=new WeakMap;function Bu(e,t){if(!e.isAnonymous||t instanceof wu||t.type!=e)return 1;let n=zu.get(t);if(n==null){n=1;for(let r of t.children){if(r.type!=e||!(r instanceof q)){n=1;break}n+=Bu(e,r)}zu.set(t,n)}return n}function Vu(e,t,n,r,i,a,o,s,c){let l=0;for(let n=r;n<i;n++)l+=Bu(e,t[n]);let u=Math.ceil(l*1.5/8),d=[],f=[];function p(t,n,r,i,o){for(let s=r;s<i;){let r=s,l=n[s],m=Bu(e,t[s]);for(s++;s<i;s++){let n=Bu(e,t[s]);if(m+n>=u)break;m+=n}if(s==r+1){if(m>u){let e=t[r];p(e.children,e.positions,0,e.children.length,n[r]+o);continue}d.push(t[r])}else{let i=n[s-1]+t[s-1].length-l;d.push(Vu(e,t,n,r,s,l,i,null,c))}f.push(l+o-a)}}return p(t,n,r,i,0),(s||c)(d,f,o)}var Hu=class{constructor(){this.map=new WeakMap}setBuffer(e,t,n){let r=this.map.get(e);r||this.map.set(e,r=new Map),r.set(t,n)}getBuffer(e,t){let n=this.map.get(e);return n&&n.get(t)}set(e,t){e instanceof Mu?this.setBuffer(e.context.buffer,e.index,t):e instanceof Ou&&this.map.set(e.tree,t)}get(e){return e instanceof Mu?this.getBuffer(e.context.buffer,e.index):e instanceof Ou?this.map.get(e.tree):void 0}cursorSet(e,t){e.buffer?this.setBuffer(e.buffer.buffer,e.index,t):this.map.set(e.tree,t)}cursorGet(e){return e.buffer?this.getBuffer(e.buffer.buffer,e.index):this.map.get(e.tree)}},Uu=class e{constructor(e,t,n,r,i=!1,a=!1){this.from=e,this.to=t,this.tree=n,this.offset=r,this.open=!!i|(a?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(t,n=[],r=!1){let i=[new e(0,t.length,t,0,!1,r)];for(let e of n)e.to>t.length&&i.push(e);return i}static applyChanges(t,n,r=128){if(!n.length)return t;let i=[],a=1,o=t.length?t[0]:null;for(let s=0,c=0,l=0;;s++){let u=s<n.length?n[s]:null,d=u?u.fromA:1e9;if(d-c>=r)for(;o&&o.from<d;){let n=o;if(c>=n.from||d<=n.to||l){let t=Math.max(n.from,c)-l,r=Math.min(n.to,d)-l;n=t>=r?null:new e(t,r,n.tree,n.offset+l,s>0,!!u)}if(n&&i.push(n),o.to>d)break;o=a<t.length?t[a++]:null}if(!u)break;c=u.toA,l=u.toA-u.toB}return i}},Wu=class{startParse(e,t,n){return typeof e==`string`&&(e=new Gu(e)),n=n?n.length?n.map(e=>new _u(e.from,e.to)):[new _u(0,0)]:[new _u(0,e.length)],this.createParse(e,t||[],n)}parse(e,t,n){let r=this.startParse(e,t,n);for(;;){let e=r.advance();if(e)return e}}},Gu=class{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}};function Ku(e){return(t,n,r,i)=>new Zu(t,e,n,r,i)}var qu=class{constructor(e,t,n,r,i,a){this.parser=e,this.parse=t,this.overlay=n,this.bracketed=r,this.target=i,this.from=a}};function Ju(e){if(!e.length||e.some(e=>e.from>=e.to))throw RangeError(`Invalid inner parse ranges given: `+JSON.stringify(e))}var Yu=class{constructor(e,t,n,r,i,a,o,s){this.parser=e,this.predicate=t,this.mounts=n,this.index=r,this.start=i,this.bracketed=a,this.target=o,this.prev=s,this.depth=0,this.ranges=[]}},Xu=new W({perNode:!0}),Zu=class{constructor(e,t,n,r,i){this.nest=t,this.input=n,this.fragments=r,this.ranges=i,this.inner=[],this.innerDone=0,this.baseTree=null,this.stoppedAt=null,this.baseParse=e}advance(){if(this.baseParse){let e=this.baseParse.advance();if(!e)return null;if(this.baseParse=null,this.baseTree=e,this.startInner(),this.stoppedAt!=null)for(let e of this.inner)e.parse.stopAt(this.stoppedAt)}if(this.innerDone==this.inner.length){let e=this.baseTree;return this.stoppedAt!=null&&(e=new q(e.type,e.children,e.positions,e.length,e.propValues.concat([[Xu,this.stoppedAt]]))),e}let e=this.inner[this.innerDone],t=e.parse.advance();if(t){this.innerDone++;let n=Object.assign(Object.create(null),e.target.props);n[W.mounted.id]=new vu(t,e.overlay,e.parser,e.bracketed),e.target.props=n}return null}get parsedPos(){if(this.baseParse)return 0;let e=this.input.length;for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].from<e&&(e=Math.min(e,this.inner[t].parse.parsedPos));return e}stopAt(e){if(this.stoppedAt=e,this.baseParse)this.baseParse.stopAt(e);else for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].parse.stopAt(e)}startInner(){let e=new nd(this.fragments),t=null,n=null,r=new Iu(new Ou(this.baseTree,this.ranges[0].from,0,null),K.IncludeAnonymous|K.IgnoreMounts);scan:for(let i,a;;){let o=!0,s;if(this.stoppedAt!=null&&r.from>=this.stoppedAt)o=!1;else if(e.hasNode(r)){if(t){let e=t.mounts.find(e=>e.frag.from<=r.from&&e.frag.to>=r.to&&e.mount.overlay);if(e)for(let n of e.mount.overlay){let i=n.from+e.pos,a=n.to+e.pos;i>=r.from&&a<=r.to&&!t.ranges.some(e=>e.from<a&&e.to>i)&&t.ranges.push({from:i,to:a})}}o=!1}else if(n&&(a=Qu(n.ranges,r.from,r.to)))o=a!=2;else if(!r.type.isAnonymous&&(i=this.nest(r,this.input))&&(r.from<r.to||!i.overlay)){r.tree||(ed(r),t&&t.depth++,n&&n.depth++);let a=e.findMounts(r.from,i.parser);if(typeof i.overlay==`function`)t=new Yu(i.parser,i.overlay,a,this.inner.length,r.from,!!i.bracketed,r.tree,t);else{let e=rd(this.ranges,i.overlay||(r.from<r.to?[new _u(r.from,r.to)]:[]));e.length&&Ju(e),(e.length||!i.overlay)&&this.inner.push(new qu(i.parser,e.length?i.parser.startParse(this.input,ad(a,e),e):i.parser.startParse(``),i.overlay?i.overlay.map(e=>new _u(e.from-r.from,e.to-r.from)):null,!!i.bracketed,r.tree,e.length?e[0].from:r.from)),i.overlay?e.length&&(n={ranges:e,depth:0,prev:n}):o=!1}}else if(t&&(s=t.predicate(r))&&(s===!0&&(s=new _u(r.from,r.to)),s.from<s.to)){let e=t.ranges.length-1;e>=0&&t.ranges[e].to==s.from?t.ranges[e]={from:t.ranges[e].from,to:s.to}:t.ranges.push(s)}if(o&&r.firstChild())t&&t.depth++,n&&n.depth++;else for(;!r.nextSibling();){if(!r.parent())break scan;if(t&&!--t.depth){let e=rd(this.ranges,t.ranges);e.length&&(Ju(e),this.inner.splice(t.index,0,new qu(t.parser,t.parser.startParse(this.input,ad(t.mounts,e),e),t.ranges.map(e=>new _u(e.from-t.start,e.to-t.start)),t.bracketed,t.target,e[0].from))),t=t.prev}n&&!--n.depth&&(n=n.prev)}}}};function Qu(e,t,n){for(let r of e){if(r.from>=n)break;if(r.to>t)return r.from<=t&&r.to>=n?2:1}return 0}function $u(e,t,n,r,i,a){if(t<n){let o=e.buffer[t+1];r.push(e.slice(t,n,o)),i.push(o-a)}}function ed(e){let{node:t}=e,n=[],r=t.context.buffer;do n.push(e.index),e.parent();while(!e.tree);let i=e.tree,a=i.children.indexOf(r),o=i.children[a],s=o.buffer,c=[a];function l(e,r,i,a,u,d){let f=n[d],p=[],m=[];$u(o,e,f,p,m,a);let h=s[f+1],g=s[f+2];c.push(p.length);let _=d?l(f+4,s[f+3],o.set.types[s[f]],h,g-h,d-1):t.toTree();return p.push(_),m.push(h-a),$u(o,s[f+3],r,p,m,a),new q(i,p,m,u)}i.children[a]=l(0,s.length,G.none,0,o.length,n.length-1);for(let t of c){let n=e.tree.children[t],r=e.tree.positions[t];e.yield(new Ou(n,r+e.from,t,e._tree))}}var td=class{constructor(e,t){this.offset=t,this.done=!1,this.cursor=e.cursor(K.IncludeAnonymous|K.IgnoreMounts)}moveTo(e){let{cursor:t}=this,n=e-this.offset;for(;!this.done&&t.from<n;)if(!(t.to>=e&&t.enter(n,1,K.IgnoreOverlays|K.ExcludeBuffers)))if(t.to<=e)t.next(!1)||(this.done=!0);else break}hasNode(e){if(this.moveTo(e.from),!this.done&&this.cursor.from+this.offset==e.from&&this.cursor.tree)for(let t=this.cursor.tree;;){if(t==e.tree)return!0;if(t.children.length&&t.positions[0]==0&&t.children[0]instanceof q)t=t.children[0];else break}return!1}},nd=class{constructor(e){if(this.fragments=e,this.curTo=0,this.fragI=0,e.length){let t=this.curFrag=e[0];this.curTo=t.tree.prop(Xu)??t.to,this.inner=new td(t.tree,-t.offset)}else this.curFrag=this.inner=null}hasNode(e){for(;this.curFrag&&e.from>=this.curTo;)this.nextFrag();return this.curFrag&&this.curFrag.from<=e.from&&this.curTo>=e.to&&this.inner.hasNode(e)}nextFrag(){if(this.fragI++,this.fragI==this.fragments.length)this.curFrag=this.inner=null;else{let e=this.curFrag=this.fragments[this.fragI];this.curTo=e.tree.prop(Xu)??e.to,this.inner=new td(e.tree,-e.offset)}}findMounts(e,t){let n=[];if(this.inner){this.inner.cursor.moveTo(e,1);for(let e=this.inner.cursor.node;e;e=e.parent){let r=e.tree?.prop(W.mounted);if(r&&r.parser==t)for(let t=this.fragI;t<this.fragments.length;t++){let i=this.fragments[t];if(i.from>=e.to)break;i.tree==this.curFrag.tree&&n.push({frag:i,pos:e.from-i.offset,mount:r})}}}return n}};function rd(e,t){let n=null,r=t;for(let i=1,a=0;i<e.length;i++){let o=e[i-1].to,s=e[i].from;for(;a<r.length;a++){let e=r[a];if(e.from>=s)break;e.to<=o||(n||(r=n=t.slice()),e.from<o?(n[a]=new _u(e.from,o),e.to>s&&n.splice(a+1,0,new _u(s,e.to))):e.to>s?n[a--]=new _u(s,e.to):n.splice(a--,1))}}return r}function id(e,t,n,r){let i=0,a=0,o=!1,s=!1,c=-1e9,l=[];for(;;){let u=i==e.length?1e9:o?e[i].to:e[i].from,d=a==t.length?1e9:s?t[a].to:t[a].from;if(o!=s){let e=Math.max(c,n),t=Math.min(u,d,r);e<t&&l.push(new _u(e,t))}if(c=Math.min(u,d),c==1e9)break;u==c&&(o?(o=!1,i++):o=!0),d==c&&(s?(s=!1,a++):s=!0)}return l}function ad(e,t){let n=[];for(let{pos:r,mount:i,frag:a}of e){let e=r+(i.overlay?i.overlay[0].from:0),o=e+i.tree.length,s=Math.max(a.from,e),c=Math.min(a.to,o);if(i.overlay){let o=id(t,i.overlay.map(e=>new _u(e.from+r,e.to+r)),s,c);for(let t=0,r=s;;t++){let s=t==o.length,l=s?c:o[t].from;if(l>r&&n.push(new Uu(r,l,i.tree,-e,a.from>=r||a.openStart,a.to<=l||a.openEnd)),s)break;r=o[t].to}}else n.push(new Uu(s,c,i.tree,-e,a.from>=e||a.openStart,a.to<=o||a.openEnd))}return n}var od=0,sd=class e{constructor(e,t,n,r){this.name=e,this.set=t,this.base=n,this.modified=r,this.id=od++}toString(){let{name:e}=this;for(let t of this.modified)t.name&&(e=`${t.name}(${e})`);return e}static define(t,n){let r=typeof t==`string`?t:`?`;if(t instanceof e&&(n=t),n?.base)throw Error(`Can not derive from a modified tag`);let i=new e(r,[],null,[]);if(i.set.push(i),n)for(let e of n.set)i.set.push(e);return i}static defineModifier(e){let t=new ld(e);return e=>e.modified.indexOf(t)>-1?e:ld.get(e.base||e,e.modified.concat(t).sort((e,t)=>e.id-t.id))}},cd=0,ld=class e{constructor(e){this.name=e,this.instances=[],this.id=cd++}static get(t,n){if(!n.length)return t;let r=n[0].instances.find(e=>e.base==t&&ud(n,e.modified));if(r)return r;let i=[],a=new sd(t.name,i,t,n);for(let e of n)e.instances.push(a);let o=dd(n);for(let n of t.set)if(!n.modified.length)for(let t of o)i.push(e.get(n,t));return a}};function ud(e,t){return e.length==t.length&&e.every((e,n)=>e==t[n])}function dd(e){let t=[[]];for(let n=0;n<e.length;n++)for(let r=0,i=t.length;r<i;r++)t.push(t[r].concat(e[n]));return t.sort((e,t)=>t.length-e.length)}function fd(e){let t=Object.create(null);for(let n in e){let r=e[n];Array.isArray(r)||(r=[r]);for(let e of n.split(` `))if(e){let n=[],i=2,a=e;for(let t=0;;){if(a==`...`&&t>0&&t+3==e.length){i=1;break}let r=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);if(!r)throw RangeError(`Invalid path: `+e);if(n.push(r[0]==`*`?``:r[0][0]==`"`?JSON.parse(r[0]):r[0]),t+=r[0].length,t==e.length)break;let o=e[t++];if(t==e.length&&o==`!`){i=0;break}if(o!=`/`)throw RangeError(`Invalid path: `+e);a=e.slice(t)}let o=n.length-1,s=n[o];if(!s)throw RangeError(`Invalid path: `+e);t[s]=new md(r,i,o>0?n.slice(0,o):null).sort(t[s])}}return pd.add(t)}var pd=new W({combine(e,t){let n,r,i;for(;e||t;){if(!e||t&&e.depth>=t.depth?(i=t,t=t.next):(i=e,e=e.next),n&&n.mode==i.mode&&!i.context&&!n.context)continue;let a=new md(i.tags,i.mode,i.context);n?n.next=a:r=a,n=a}return r}}),md=class{constructor(e,t,n,r){this.tags=e,this.mode=t,this.context=n,this.next=r}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}};md.empty=new md([],2,null);function hd(e,t){let n=Object.create(null);for(let t of e)if(!Array.isArray(t.tag))n[t.tag.id]=t.class;else for(let e of t.tag)n[e.id]=t.class;let{scope:r,all:i=null}=t||{};return{style:e=>{let t=i;for(let r of e)for(let e of r.set){let r=n[e.id];if(r){t=t?t+` `+r:r;break}}return t},scope:r}}function gd(e,t){let n=null;for(let r of e){let e=r.style(t);e&&(n=n?n+` `+e:e)}return n}function _d(e,t,n,r=0,i=e.length){let a=new vd(r,Array.isArray(t)?t:[t],n);a.highlightRange(e.cursor(),r,i,``,a.highlighters),a.flush(i)}var vd=class{constructor(e,t,n){this.at=e,this.highlighters=t,this.span=n,this.class=``}startSpan(e,t){t!=this.class&&(this.flush(e),e>this.at&&(this.at=e),this.class=t)}flush(e){e>this.at&&this.class&&this.span(this.at,e,this.class)}highlightRange(e,t,n,r,i){let{type:a,from:o,to:s}=e;if(o>=n||s<=t)return;a.isTop&&(i=this.highlighters.filter(e=>!e.scope||e.scope(a)));let c=r,l=yd(e)||md.empty,u=gd(i,l.tags);if(u&&(c&&(c+=` `),c+=u,l.mode==1&&(r+=(r?` `:``)+u)),this.startSpan(Math.max(t,o),c),l.opaque)return;let d=e.tree&&e.tree.prop(W.mounted);if(d&&d.overlay){let a=e.node.enter(d.overlay[0].from+o,1),l=this.highlighters.filter(e=>!e.scope||e.scope(d.tree.type)),u=e.firstChild();for(let f=0,p=o;;f++){let m=f<d.overlay.length?d.overlay[f]:null,h=m?m.from+o:s,g=Math.max(t,p),_=Math.min(n,h);if(g<_&&u)for(;e.from<_&&(this.highlightRange(e,g,_,r,i),this.startSpan(Math.min(_,e.to),c),!(e.to>=h||!e.nextSibling())););if(!m||h>n)break;p=m.to+o,p>t&&(this.highlightRange(a.cursor(),Math.max(t,m.from+o),Math.min(n,p),``,l),this.startSpan(Math.min(n,p),c))}u&&e.parent()}else if(e.firstChild()){d&&(r=``);do{if(e.to<=t)continue;if(e.from>=n)break;this.highlightRange(e,t,n,r,i),this.startSpan(Math.min(n,e.to),c)}while(e.nextSibling());e.parent()}}};function yd(e){let t=e.type.prop(pd);for(;t&&t.context&&!e.matchContext(t.context);)t=t.next;return t||null}var J=sd.define,bd=J(),xd=J(),Sd=J(xd),Cd=J(xd),wd=J(),Td=J(wd),Ed=J(wd),Dd=J(),Od=J(Dd),kd=J(),Ad=J(),jd=J(),Md=J(jd),Nd=J(),Y={comment:bd,lineComment:J(bd),blockComment:J(bd),docComment:J(bd),name:xd,variableName:J(xd),typeName:Sd,tagName:J(Sd),propertyName:Cd,attributeName:J(Cd),className:J(xd),labelName:J(xd),namespace:J(xd),macroName:J(xd),literal:wd,string:Td,docString:J(Td),character:J(Td),attributeValue:J(Td),number:Ed,integer:J(Ed),float:J(Ed),bool:J(wd),regexp:J(wd),escape:J(wd),color:J(wd),url:J(wd),keyword:kd,self:J(kd),null:J(kd),atom:J(kd),unit:J(kd),modifier:J(kd),operatorKeyword:J(kd),controlKeyword:J(kd),definitionKeyword:J(kd),moduleKeyword:J(kd),operator:Ad,derefOperator:J(Ad),arithmeticOperator:J(Ad),logicOperator:J(Ad),bitwiseOperator:J(Ad),compareOperator:J(Ad),updateOperator:J(Ad),definitionOperator:J(Ad),typeOperator:J(Ad),controlOperator:J(Ad),punctuation:jd,separator:J(jd),bracket:Md,angleBracket:J(Md),squareBracket:J(Md),paren:J(Md),brace:J(Md),content:Dd,heading:Od,heading1:J(Od),heading2:J(Od),heading3:J(Od),heading4:J(Od),heading5:J(Od),heading6:J(Od),contentSeparator:J(Dd),list:J(Dd),quote:J(Dd),emphasis:J(Dd),strong:J(Dd),link:J(Dd),monospace:J(Dd),strikethrough:J(Dd),inserted:J(),deleted:J(),changed:J(),invalid:J(),meta:Nd,documentMeta:J(Nd),annotation:J(Nd),processingInstruction:J(Nd),definition:sd.defineModifier(`definition`),constant:sd.defineModifier(`constant`),function:sd.defineModifier(`function`),standard:sd.defineModifier(`standard`),local:sd.defineModifier(`local`),special:sd.defineModifier(`special`)};for(let e in Y){let t=Y[e];t instanceof sd&&(t.name=e)}hd([{tag:Y.link,class:`tok-link`},{tag:Y.heading,class:`tok-heading`},{tag:Y.emphasis,class:`tok-emphasis`},{tag:Y.strong,class:`tok-strong`},{tag:Y.keyword,class:`tok-keyword`},{tag:Y.atom,class:`tok-atom`},{tag:Y.bool,class:`tok-bool`},{tag:Y.url,class:`tok-url`},{tag:Y.labelName,class:`tok-labelName`},{tag:Y.inserted,class:`tok-inserted`},{tag:Y.deleted,class:`tok-deleted`},{tag:Y.literal,class:`tok-literal`},{tag:Y.string,class:`tok-string`},{tag:Y.number,class:`tok-number`},{tag:[Y.regexp,Y.escape,Y.special(Y.string)],class:`tok-string2`},{tag:Y.variableName,class:`tok-variableName`},{tag:Y.local(Y.variableName),class:`tok-variableName tok-local`},{tag:Y.definition(Y.variableName),class:`tok-variableName tok-definition`},{tag:Y.special(Y.variableName),class:`tok-variableName2`},{tag:Y.definition(Y.propertyName),class:`tok-propertyName tok-definition`},{tag:Y.typeName,class:`tok-typeName`},{tag:Y.namespace,class:`tok-namespace`},{tag:Y.className,class:`tok-className`},{tag:Y.macroName,class:`tok-macroName`},{tag:Y.propertyName,class:`tok-propertyName`},{tag:Y.operator,class:`tok-operator`},{tag:Y.comment,class:`tok-comment`},{tag:Y.meta,class:`tok-meta`},{tag:Y.invalid,class:`tok-invalid`},{tag:Y.punctuation,class:`tok-punctuation`}]);var Pd=new W;function Fd(e){return j.define({combine:e?t=>t.concat(e):void 0})}var Id=new W,Ld=class{constructor(e,t,n=[],r=``){this.data=e,this.name=r,P.prototype.hasOwnProperty(`tree`)||Object.defineProperty(P.prototype,"tree",{get(){return X(this)}}),this.parser=t,this.extension=[Jd.of(this),P.languageData.of((e,t,n)=>{let r=Rd(e,t,n),i=r.type.prop(Pd);if(!i)return[];let a=e.facet(i),o=r.type.prop(Id);if(o){let i=r.resolve(t-r.from,n);for(let t of o)if(t.test(i,e)){let n=e.facet(t.facet);return t.type==`replace`?n:n.concat(a)}}return a})].concat(n)}isActiveAt(e,t,n=-1){return Rd(e,t,n).type.prop(Pd)==this.data}findRegions(e){let t=e.facet(Jd);if(t?.data==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let n=[],r=(e,t)=>{if(e.prop(Pd)==this.data){n.push({from:t,to:t+e.length});return}let i=e.prop(W.mounted);if(i){if(i.tree.prop(Pd)==this.data){if(i.overlay)for(let e of i.overlay)n.push({from:e.from+t,to:e.to+t});else n.push({from:t,to:t+e.length});return}else if(i.overlay){let e=n.length;if(r(i.tree,i.overlay[0].from+t),n.length>e)return}}for(let n=0;n<e.children.length;n++){let i=e.children[n];i instanceof q&&r(i,e.positions[n]+t)}};return r(X(e),0),n}get allowsNesting(){return!0}};Ld.setState=M.define();function Rd(e,t,n){let r=e.facet(Jd),i=X(e).topNode;if(!r||r.allowsNesting)for(let e=i;e;e=e.enter(t,n,K.ExcludeBuffers|K.EnterBracketed))e.type.isTop&&(i=e);return i}var zd=class e extends Ld{constructor(e,t,n){super(e,t,[],n),this.parser=t}static define(t){let n=Fd(t.languageData);return new e(n,t.parser.configure({props:[Pd.add(e=>e.isTop?n:void 0)]}),t.name)}configure(t,n){return new e(this.data,this.parser.configure(t),n||this.name)}get allowsNesting(){return this.parser.hasWrappers()}};function X(e){let t=e.field(Ld.state,!1);return t?t.tree:q.empty}var Bd=class{constructor(e){this.doc=e,this.cursorPos=0,this.string=``,this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let n=this.cursorPos-this.string.length;return e<n||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-n,t-n)}},Vd=null,Hd=class e{constructor(e,t,n=[],r,i,a,o,s){this.parser=e,this.state=t,this.fragments=n,this.tree=r,this.treeLen=i,this.viewport=a,this.skipped=o,this.scheduleOn=s,this.parse=null,this.tempSkipped=[]}static create(t,n,r){return new e(t,n,[],q.empty,0,r,[],null)}startParse(){return this.parser.startParse(new Bd(this.state.doc),this.fragments)}work(e,t){return t!=null&&t>=this.state.doc.length&&(t=void 0),this.tree!=q.empty&&this.isDone(t??this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{if(typeof e==`number`){let t=Date.now()+e;e=()=>Date.now()>t}for(this.parse||=this.startParse(),t!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let n=this.parse.advance();if(n)if(this.fragments=this.withoutTempSkipped(Uu.addTree(n,this.fragments,this.parse.stoppedAt!=null)),this.treeLen=this.parse.stoppedAt??this.state.doc.length,this.tree=n,this.parse=null,this.treeLen<(t??this.state.doc.length))this.parse=this.startParse();else return!0;if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(Uu.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=Vd;Vd=this;try{return e()}finally{Vd=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=Ud(e,t.from,t.to);return e}changes(t,n){let{fragments:r,tree:i,treeLen:a,viewport:o,skipped:s}=this;if(this.takeTree(),!t.empty){let e=[];if(t.iterChangedRanges((t,n,r,i)=>e.push({fromA:t,toA:n,fromB:r,toB:i})),r=Uu.applyChanges(r,e),i=q.empty,a=0,o={from:t.mapPos(o.from,-1),to:t.mapPos(o.to,1)},this.skipped.length){s=[];for(let e of this.skipped){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);n<r&&s.push({from:n,to:r})}}}return new e(this.parser,n,r,i,a,o,s,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let t=0;t<this.skipped.length;t++){let{from:n,to:r}=this.skipped[t];n<e.to&&r>e.from&&(this.fragments=Ud(this.fragments,n,r),this.skipped.splice(t--,1))}return this.skipped.length>=t?!1:(this.reset(),!0)}reset(){this.parse&&=(this.takeTree(),null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends Wu{createParse(t,n,r){let i=r[0].from,a=r[r.length-1].to;return{parsedPos:i,advance(){let t=Vd;if(t){for(let e of r)t.tempSkipped.push(e);e&&(t.scheduleOn=t.scheduleOn?Promise.all([t.scheduleOn,e]):e)}return this.parsedPos=a,new q(G.none,[],[],a-i)},stoppedAt:null,stopAt(){}}}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&t[0].from==0&&t[0].to>=e}static get(){return Vd}};function Ud(e,t,n){return Uu.applyChanges(e,[{fromA:t,toA:n,fromB:t,toB:n}])}var Wd=class e{constructor(e){this.context=e,this.tree=e.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this;let n=this.context.changes(t.changes,t.state),r=this.context.treeLen==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.treeLen),n.viewport.to);return n.work(20,r)||n.takeTree(),new e(n)}static init(t){let n=Math.min(3e3,t.doc.length),r=Hd.create(t.facet(Jd).parser,t,{from:0,to:n});return r.work(20,n)||r.takeTree(),new e(r)}};Ld.state=Kt.define({create:Wd.init,update(e,t){for(let e of t.effects)if(e.is(Ld.setState))return e.value;return t.startState.facet(Jd)==t.state.facet(Jd)?e.apply(t):Wd.init(t.state)}});var Gd=e=>{let t=setTimeout(()=>e(),500);return()=>clearTimeout(t)};typeof requestIdleCallback<`u`&&(Gd=e=>{let t=-1,n=setTimeout(()=>{t=requestIdleCallback(e,{timeout:400})},100);return()=>t<0?clearTimeout(n):cancelIdleCallback(t)});var Kd=typeof navigator<`u`&&navigator.scheduling?.isInputPending?()=>navigator.scheduling.isInputPending():null,qd=Ki.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(Ld.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(Ld.state);(t.tree!=t.context.tree||!t.context.isDone(e.doc.length))&&(this.working=Gd(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:n,viewport:{to:r}}=this.view,i=n.field(Ld.state);if(i.tree==i.context.tree&&i.context.isDone(r+1e5))return;let a=Date.now()+Math.min(this.chunkBudget,100,e&&!Kd?Math.max(25,e.timeRemaining()-5):1e9),o=i.context.treeLen<r&&n.doc.length>r+1e3,s=i.context.work(()=>Kd&&Kd()||Date.now()>a,r+(o?0:1e5));this.chunkBudget-=Date.now()-t,(s||this.chunkBudget<=0)&&(i.context.takeTree(),this.view.dispatch({effects:Ld.setState.of(new Wd(i.context))})),this.chunkBudget>0&&!(s&&!o)&&this.scheduleWork(),this.checkAsyncSchedule(i.context)}checkAsyncSchedule(e){e.scheduleOn&&=(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(e=>Hi(this.view.state,e)).then(()=>this.workScheduled--),null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),Jd=j.define({combine(e){return e.length?e[0]:null},enables:e=>[Ld.state,qd,U.contentAttributes.compute([e],t=>{let n=t.facet(e);return n&&n.name?{"data-language":n.name}:{}})]}),Yd=class{constructor(e,t=[]){this.language=e,this.support=t,this.extension=[e,t]}},Xd=class e{constructor(e,t,n,r,i,a=void 0){this.name=e,this.alias=t,this.extensions=n,this.filename=r,this.loadFunc=i,this.support=a,this.loading=null}load(){return this.loading||=this.loadFunc().then(e=>this.support=e,e=>{throw this.loading=null,e})}static of(t){let{load:n,support:r}=t;if(!n){if(!r)throw RangeError(`Must pass either 'load' or 'support' to LanguageDescription.of`);n=()=>Promise.resolve(r)}return new e(t.name,(t.alias||[]).concat(t.name).map(e=>e.toLowerCase()),t.extensions||[],t.filename,n,r)}static matchFilename(e,t){for(let n of e)if(n.filename&&n.filename.test(t))return n;let n=/\.([^.]+)$/.exec(t);if(n){for(let t of e)if(t.extensions.indexOf(n[1])>-1)return t}return null}static matchLanguageName(e,t,n=!0){t=t.toLowerCase();for(let n of e)if(n.alias.some(e=>e==t))return n;if(n)for(let n of e)for(let e of n.alias){let r=t.indexOf(e);if(r>-1&&(e.length>2||!/\w/.test(t[r-1])&&!/\w/.test(t[r+e.length])))return n}return null}},Zd=j.define(),Qd=j.define({combine:e=>{if(!e.length)return`  `;let t=e[0];if(!t||/\S/.test(t)||Array.from(t).some(e=>e!=t[0]))throw Error(`Invalid indent unit: `+JSON.stringify(e[0]));return t}});function $d(e){let t=e.facet(Qd);return t.charCodeAt(0)==9?e.tabSize*t.length:t.length}function ef(e,t){let n=``,r=e.tabSize,i=e.facet(Qd)[0];if(i==`	`){for(;t>=r;)n+=`	`,t-=r;i=` `}for(let e=0;e<t;e++)n+=i;return n}function tf(e,t){e instanceof P&&(e=new nf(e));for(let n of e.state.facet(Zd)){let r=n(e,t);if(r!==void 0)return r}let n=X(e.state);return n.length>=t?af(e,n,t):null}var nf=class{constructor(e,t={}){this.state=e,this.options=t,this.unit=$d(e)}lineAt(e,t=1){let n=this.state.doc.lineAt(e),{simulateBreak:r,simulateDoubleBreak:i}=this.options;return r!=null&&r>=n.from&&r<=n.to?i&&r==e?{text:``,from:e}:(t<0?r<e:r<=e)?{text:n.text.slice(r-n.from),from:r}:{text:n.text.slice(0,r-n.from),from:n.from}:n}textAfterPos(e,t=1){if(this.options.simulateDoubleBreak&&e==this.options.simulateBreak)return``;let{text:n,from:r}=this.lineAt(e,t);return n.slice(e-r,Math.min(n.length,e+100-r))}column(e,t=1){let{text:n,from:r}=this.lineAt(e,t),i=this.countColumn(n,e-r),a=this.options.overrideIndentation?this.options.overrideIndentation(r):-1;return a>-1&&(i+=a-this.countColumn(n,n.search(/\S|$/))),i}countColumn(e,t=e.length){return Gn(e,this.state.tabSize,t)}lineIndent(e,t=1){let{text:n,from:r}=this.lineAt(e,t),i=this.options.overrideIndentation;if(i){let e=i(r);if(e>-1)return e}return this.countColumn(n,n.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}},rf=new W;function af(e,t,n){let r=t.resolveStack(n),i=t.resolveInner(n,-1).resolve(n,0).enterUnfinishedNodesBefore(n);if(i!=r.node){let e=[];for(let t=i;t&&!(t.from<r.node.from||t.to>r.node.to||t.from==r.node.from&&t.type==r.node.type);t=t.parent)e.push(t);for(let t=e.length-1;t>=0;t--)r={node:e[t],next:r}}return of(r,e,n)}function of(e,t,n){for(let r=e;r;r=r.next){let e=cf(r.node);if(e)return e(uf.create(t,n,r))}return 0}function sf(e){return e.pos==e.options.simulateBreak&&e.options.simulateDoubleBreak}function cf(e){let t=e.type.prop(rf);if(t)return t;let n=e.firstChild,r;if(n&&(r=n.type.prop(W.closedBy))){let t=e.lastChild,n=t&&r.indexOf(t.name)>-1;return e=>mf(e,!0,1,void 0,n&&!sf(e)?t.from:void 0)}return e.parent==null?lf:null}function lf(){return 0}var uf=class e extends nf{constructor(e,t,n){super(e.state,e.options),this.base=e,this.pos=t,this.context=n}get node(){return this.context.node}static create(t,n,r){return new e(t,n,r)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(e){let t=this.state.doc.lineAt(e.from);for(;;){let n=e.resolve(t.from);for(;n.parent&&n.parent.from==n.from;)n=n.parent;if(df(n,e))break;t=this.state.doc.lineAt(n.from)}return this.lineIndent(t.from)}continue(){return of(this.context.next,this.base,this.pos)}};function df(e,t){for(let n=t;n;n=n.parent)if(e==n)return!0;return!1}function ff(e){let t=e.node,n=t.childAfter(t.from),r=t.lastChild;if(!n)return null;let i=e.options.simulateBreak,a=e.state.doc.lineAt(n.from),o=i==null||i<=a.from?a.to:Math.min(a.to,i);for(let e=n.to;;){let i=t.childAfter(e);if(!i||i==r)return null;if(!i.type.isSkipped){if(i.from>=o)return null;let e=/^ */.exec(a.text.slice(n.to-a.from))[0].length;return{from:n.from,to:n.to+e}}e=i.to}}function pf({closing:e,align:t=!0,units:n=1}){return r=>mf(r,t,n,e)}function mf(e,t,n,r,i){let a=e.textAfter,o=a.match(/^\s*/)[0].length,s=r&&a.slice(o,o+r.length)==r||i==e.pos+o,c=t?ff(e):null;return c?s?e.column(c.from):e.column(c.to):e.baseIndent+(s?0:e.unit*n)}var hf=e=>e.baseIndent;function gf({except:e,units:t=1}={}){return n=>{let r=e&&e.test(n.textAfter);return n.baseIndent+(r?0:t*n.unit)}}var _f=200;function vf(){return P.transactionFilter.of(e=>{if(!e.docChanged||!e.isUserEvent(`input.type`)&&!e.isUserEvent(`input.complete`))return e;let t=e.startState.languageDataAt(`indentOnInput`,e.startState.selection.main.head);if(!t.length)return e;let n=e.newDoc,{head:r}=e.newSelection.main,i=n.lineAt(r);if(r>i.from+_f)return e;let a=n.sliceString(i.from,r);if(!t.some(e=>e.test(a)))return e;let{state:o}=e,s=-1,c=[];for(let{head:e}of o.selection.ranges){let t=o.doc.lineAt(e);if(t.from==s)continue;s=t.from;let n=tf(o,t.from);if(n==null)continue;let r=/^\s*/.exec(t.text)[0],i=ef(o,n);r!=i&&c.push({from:t.from,to:t.from+r.length,insert:i})}return c.length?[e,{changes:c,sequential:!0}]:e})}var yf=j.define(),bf=new W;function xf(e){let t=e.firstChild,n=e.lastChild;return t&&t.to<n.from?{from:t.to,to:n.type.isError?e.to:n.from}:null}function Sf(e,t,n){let r=X(e);if(r.length<n)return null;let i=r.resolveStack(n,1),a=null;for(let o=i;o;o=o.next){let i=o.node;if(i.to<=n||i.from>n)continue;if(a&&i.from<t)break;let s=i.type.prop(bf);if(s&&(i.to<r.length-50||r.length==e.doc.length||!Cf(i))){let r=s(i,e);r&&r.from<=n&&r.from>=t&&r.to>n&&(a=r)}}return a}function Cf(e){let t=e.lastChild;return t&&t.to==e.to&&t.type.isError}function wf(e,t,n){for(let r of e.facet(yf)){let i=r(e,t,n);if(i)return i}return Sf(e,t,n)}function Tf(e,t){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);return n>=r?void 0:{from:n,to:r}}var Ef=M.define({map:Tf}),Df=M.define({map:Tf});function Of(e){let t=[];for(let{head:n}of e.state.selection.ranges)t.some(e=>e.from<=n&&e.to>=n)||t.push(e.lineBlockAt(n));return t}var kf=Kt.define({create(){return R.none},update(e,t){t.isUserEvent(`delete`)&&t.changes.iterChangedRanges((t,n)=>e=Af(e,t,n)),e=e.map(t.changes);let n=[];for(let r of t.effects)r.is(Ef)&&!Mf(e,r.value.from,r.value.to)?n.push(r.value):r.is(Df)&&(e=e.update({filter:(e,t)=>r.value.from!=e||r.value.to!=t,filterFrom:r.value.from,filterTo:r.value.to}));if(n.length){let{preparePlaceholder:r}=t.state.facet(zf),i=n.map(e=>(r?R.replace({widget:new Uf(r(t.state,e))}):Hf).range(e.from,e.to));e=e.update({add:i})}return t.selection&&(e=Af(e,t.selection.main.head)),e},provide:e=>U.decorations.from(e),toJSON(e,t){let n=[];return e.between(0,t.doc.length,(e,t)=>{n.push(e,t)}),n},fromJSON(e){if(!Array.isArray(e)||e.length%2)throw RangeError(`Invalid JSON for fold state`);let t=[];for(let n=0;n<e.length;){let r=e[n++],i=e[n++];if(typeof r!=`number`||typeof i!=`number`)throw RangeError(`Invalid JSON for fold state`);t.push(Hf.range(r,i))}return R.set(t,!0)}});function Af(e,t,n=t){let r=!1;return e.between(t,n,(e,i)=>{e<n&&i>t&&(r=!0)}),r?e.update({filterFrom:t,filterTo:n,filter:(e,r)=>e>=n||r<=t}):e}function jf(e,t,n){var r;let i=null;return(r=e.field(kf,!1))==null||r.between(t,n,(e,t)=>{(!i||i.from>e)&&(i={from:e,to:t})}),i}function Mf(e,t,n){let r=!1;return e.between(t,t,(e,i)=>{e==t&&i==n&&(r=!0)}),r}function Nf(e,t){return e.field(kf,!1)?t:t.concat(M.appendConfig.of(Bf()))}var Pf=e=>{for(let t of Of(e)){let n=wf(e.state,t.from,t.to);if(n)return e.dispatch({effects:Nf(e.state,[Ef.of(n),If(e,n)])}),!0}return!1},Ff=e=>{if(!e.state.field(kf,!1))return!1;let t=[];for(let n of Of(e)){let r=jf(e.state,n.from,n.to);r&&t.push(Df.of(r),If(e,r,!1))}return t.length&&e.dispatch({effects:t}),t.length>0};function If(e,t,n=!0){let r=e.state.doc.lineAt(t.from).number,i=e.state.doc.lineAt(t.to).number;return U.announce.of(`${e.state.phrase(n?`Folded lines`:`Unfolded lines`)} ${r} ${e.state.phrase(`to`)} ${i}.`)}var Lf=[{key:`Ctrl-Shift-[`,mac:`Cmd-Alt-[`,run:Pf},{key:`Ctrl-Shift-]`,mac:`Cmd-Alt-]`,run:Ff},{key:`Ctrl-Alt-[`,run:e=>{let{state:t}=e,n=[];for(let r=0;r<t.doc.length;){let i=e.lineBlockAt(r),a=wf(t,i.from,i.to);a&&n.push(Ef.of(a)),r=(a?e.lineBlockAt(a.to):i).to+1}return n.length&&e.dispatch({effects:Nf(e.state,n)}),!!n.length}},{key:`Ctrl-Alt-]`,run:e=>{let t=e.state.field(kf,!1);if(!t||!t.size)return!1;let n=[];return t.between(0,e.state.doc.length,(e,t)=>{n.push(Df.of({from:e,to:t}))}),e.dispatch({effects:n}),!0}}],Rf={placeholderDOM:null,preparePlaceholder:null,placeholderText:`…`},zf=j.define({combine(e){return Dn(e,Rf)}});function Bf(e){let t=[kf,qf];return e&&t.push(zf.of(e)),t}function Vf(e,t){let{state:n}=e,r=n.facet(zf),i=t=>{let n=e.lineBlockAt(e.posAtDOM(t.target)),r=jf(e.state,n.from,n.to);r&&e.dispatch({effects:Df.of(r)}),t.preventDefault()};if(r.placeholderDOM)return r.placeholderDOM(e,i,t);let a=document.createElement(`span`);return a.textContent=r.placeholderText,a.setAttribute(`aria-label`,n.phrase(`folded code`)),a.title=n.phrase(`unfold`),a.className=`cm-foldPlaceholder`,a.onclick=i,a}var Hf=R.replace({widget:new class extends Tr{toDOM(e){return Vf(e,null)}}}),Uf=class extends Tr{constructor(e){super(),this.value=e}eq(e){return this.value==e.value}toDOM(e){return Vf(e,this.value)}},Wf={openText:`⌄`,closedText:`›`,markerDOM:null,domEventHandlers:{},foldingChanged:()=>!1},Gf=class extends Ul{constructor(e,t){super(),this.config=e,this.open=t}eq(e){return this.config==e.config&&this.open==e.open}toDOM(e){if(this.config.markerDOM)return this.config.markerDOM(this.open);let t=document.createElement(`span`);return t.textContent=this.open?this.config.openText:this.config.closedText,t.title=e.state.phrase(this.open?`Fold line`:`Unfold line`),t}};function Kf(e={}){let t={...Wf,...e},n=new Gf(t,!0),r=new Gf(t,!1),i=Ki.fromClass(class{constructor(e){this.from=e.viewport.from,this.markers=this.buildMarkers(e)}update(e){(e.docChanged||e.viewportChanged||e.startState.facet(Jd)!=e.state.facet(Jd)||e.startState.field(kf,!1)!=e.state.field(kf,!1)||X(e.startState)!=X(e.state)||t.foldingChanged(e))&&(this.markers=this.buildMarkers(e.view))}buildMarkers(e){let t=new Pn;for(let i of e.viewportLineBlocks){let a=jf(e.state,i.from,i.to)?r:wf(e.state,i.from,i.to)?n:null;a&&t.add(i.from,i.from,a)}return t.finish()}}),{domEventHandlers:a}=t;return[i,Jl({class:`cm-foldGutter`,markers(e){return e.plugin(i)?.markers||F.empty},initialSpacer(){return new Gf(t,!1)},domEventHandlers:{...a,click:(e,t,n)=>{if(a.click&&a.click(e,t,n))return!0;let r=jf(e.state,t.from,t.to);if(r)return e.dispatch({effects:Df.of(r)}),!0;let i=wf(e.state,t.from,t.to);return i?(e.dispatch({effects:Ef.of(i)}),!0):!1}}}),Bf()]}var qf=U.baseTheme({".cm-foldPlaceholder":{backgroundColor:`#eee`,border:`1px solid #ddd`,color:`#888`,borderRadius:`.2em`,margin:`0 1px`,padding:`0 1px`,cursor:`pointer`},".cm-foldGutter span":{padding:`0 1px`,cursor:`pointer`}}),Jf=class e{constructor(e,t){this.specs=e;let n;function r(e){let t=Zn.newName();return(n||=Object.create(null))[`.`+t]=e,t}let i=typeof t.all==`string`?t.all:t.all?r(t.all):void 0,a=t.scope;this.scope=a instanceof Ld?e=>e.prop(Pd)==a.data:a?e=>e==a:void 0,this.style=hd(e.map(e=>({tag:e.tag,class:e.class||r(Object.assign({},e,{tag:null}))})),{all:i}).style,this.module=n?new Zn(n):null,this.themeType=t.themeType}static define(t,n){return new e(t,n||{})}},Yf=j.define(),Xf=j.define({combine(e){return e.length?[e[0]]:null}});function Zf(e){let t=e.facet(Yf);return t.length?t:e.facet(Xf)}function Qf(e,t){let n=[ep],r;return e instanceof Jf&&(e.module&&n.push(U.styleModule.of(e.module)),r=e.themeType),t?.fallback?n.push(Xf.of(e)):r?n.push(Yf.computeN([U.darkTheme],t=>t.facet(U.darkTheme)==(r==`dark`)?[e]:[])):n.push(Yf.of(e)),n}var $f=class{constructor(e){this.markCache=Object.create(null),this.tree=X(e.state),this.decorations=this.buildDeco(e,Zf(e.state)),this.decoratedTo=e.viewport.to}update(e){let t=X(e.state),n=Zf(e.state),r=n!=Zf(e.startState),{viewport:i}=e.view,a=e.changes.mapPos(this.decoratedTo,1);t.length<i.to&&!r&&t.type==this.tree.type&&a>=i.to?(this.decorations=this.decorations.map(e.changes),this.decoratedTo=a):(t!=this.tree||e.viewportChanged||r)&&(this.tree=t,this.decorations=this.buildDeco(e.view,n),this.decoratedTo=i.to)}buildDeco(e,t){if(!t||!this.tree.length)return R.none;let n=new Pn;for(let{from:r,to:i}of e.visibleRanges)_d(this.tree,t,(e,t,r)=>{n.add(e,t,this.markCache[r]||(this.markCache[r]=R.mark({class:r})))},r,i);return n.finish()}},ep=Yt.high(Ki.fromClass($f,{decorations:e=>e.decorations})),tp=Jf.define([{tag:Y.meta,color:`#404740`},{tag:Y.link,textDecoration:`underline`},{tag:Y.heading,textDecoration:`underline`,fontWeight:`bold`},{tag:Y.emphasis,fontStyle:`italic`},{tag:Y.strong,fontWeight:`bold`},{tag:Y.strikethrough,textDecoration:`line-through`},{tag:Y.keyword,color:`#708`},{tag:[Y.atom,Y.bool,Y.url,Y.contentSeparator,Y.labelName],color:`#219`},{tag:[Y.literal,Y.inserted],color:`#164`},{tag:[Y.string,Y.deleted],color:`#a11`},{tag:[Y.regexp,Y.escape,Y.special(Y.string)],color:`#e40`},{tag:Y.definition(Y.variableName),color:`#00f`},{tag:Y.local(Y.variableName),color:`#30a`},{tag:[Y.typeName,Y.namespace],color:`#085`},{tag:Y.className,color:`#167`},{tag:[Y.special(Y.variableName),Y.macroName],color:`#256`},{tag:Y.definition(Y.propertyName),color:`#00c`},{tag:Y.comment,color:`#940`},{tag:Y.invalid,color:`#f00`}]),np=U.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:`#328c8252`},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:`#bb555544`}}),rp=1e4,ip=`()[]{}`,ap=j.define({combine(e){return Dn(e,{afterCursor:!0,brackets:ip,maxScanDistance:rp,renderMatch:cp})}}),op=R.mark({class:`cm-matchingBracket`}),sp=R.mark({class:`cm-nonmatchingBracket`});function cp(e){let t=[],n=e.matched?op:sp;return t.push(n.range(e.start.from,e.start.to)),e.end&&t.push(n.range(e.end.from,e.end.to)),t}function lp(e){let t=[],n=e.facet(ap);for(let r of e.selection.ranges){if(!r.empty)continue;let i=hp(e,r.head,-1,n)||r.head>0&&hp(e,r.head-1,1,n)||n.afterCursor&&(hp(e,r.head,1,n)||r.head<e.doc.length&&hp(e,r.head+1,-1,n));i&&(t=t.concat(n.renderMatch(i,e)))}return R.set(t,!0)}var up=[Ki.fromClass(class{constructor(e){this.paused=!1,this.decorations=lp(e.state)}update(e){(e.docChanged||e.selectionSet||this.paused)&&(e.view.composing?(this.decorations=this.decorations.map(e.changes),this.paused=!0):(this.decorations=lp(e.state),this.paused=!1))}},{decorations:e=>e.decorations}),np];function dp(e={}){return[ap.of(e),up]}var fp=new W;function pp(e,t,n){let r=e.prop(t<0?W.openedBy:W.closedBy);if(r)return r;if(e.name.length==1){let r=n.indexOf(e.name);if(r>-1&&r%2==+(t<0))return[n[r+t]]}return null}function mp(e){let t=e.type.prop(fp);return t?t(e.node):e}function hp(e,t,n,r={}){let i=r.maxScanDistance||rp,a=r.brackets||ip,o=X(e),s=o.resolveInner(t,n);for(let r=s;r;r=r.parent){let i=pp(r.type,n,a);if(i&&r.from<r.to){let o=mp(r);if(o&&(n>0?t>=o.from&&t<o.to:t>o.from&&t<=o.to))return gp(e,t,n,r,o,i,a)}}return _p(e,t,n,o,s.type,i,a)}function gp(e,t,n,r,i,a,o){let s=r.parent,c={from:i.from,to:i.to},l=0,u=s?.cursor();if(u&&(n<0?u.childBefore(r.from):u.childAfter(r.to)))do if(n<0?u.to<=r.from:u.from>=r.to){if(l==0&&a.indexOf(u.type.name)>-1&&u.from<u.to){let e=mp(u);return{start:c,end:e?{from:e.from,to:e.to}:void 0,matched:!0}}else if(pp(u.type,n,o))l++;else if(pp(u.type,-n,o)){if(l==0){let e=mp(u);return{start:c,end:e&&e.from<e.to?{from:e.from,to:e.to}:void 0,matched:!1}}l--}}while(n<0?u.prevSibling():u.nextSibling());return{start:c,matched:!1}}function _p(e,t,n,r,i,a,o){if(n<0?!t:t==e.doc.length)return null;let s=n<0?e.sliceDoc(t-1,t):e.sliceDoc(t,t+1),c=o.indexOf(s);if(c<0||c%2==0!=n>0)return null;let l={from:n<0?t-1:t,to:n>0?t+1:t},u=e.doc.iterRange(t,n>0?e.doc.length:0),d=0;for(let e=0;!u.next().done&&e<=a;){let a=u.value;n<0&&(e+=a.length);let s=t+e*n;for(let e=n>0?0:a.length-1,t=n>0?a.length:-1;e!=t;e+=n){let t=o.indexOf(a[e]);if(!(t<0||r.resolveInner(s+e,1).type!=i))if(t%2==0==n>0)d++;else if(d==1)return{start:l,end:{from:s+e,to:s+e+1},matched:t>>1==c>>1};else d--}n>0&&(e+=a.length)}return u.done?{start:l,matched:!1}:null}function vp(e,t,n,r=0,i=0){t??(t=e.search(/[^\s\u00a0]/),t==-1&&(t=e.length));let a=i;for(let i=r;i<t;i++)e.charCodeAt(i)==9?a+=n-a%n:a++;return a}var yp=class{constructor(e,t,n,r){this.string=e,this.tabSize=t,this.indentUnit=n,this.overrideIndent=r,this.pos=0,this.start=0,this.lastColumnPos=0,this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return this.pos==0}peek(){return this.string.charAt(this.pos)||void 0}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(e){let t=this.string.charAt(this.pos),n;if(n=typeof e==`string`?t==e:t&&(e instanceof RegExp?e.test(t):e(t)),n)return++this.pos,t}eatWhile(e){let t=this.pos;for(;this.eat(e););return this.pos>t}eatSpace(){let e=this.pos;for(;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e}skipToEnd(){this.pos=this.string.length}skipTo(e){let t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0}backUp(e){this.pos-=e}column(){return this.lastColumnPos<this.start&&(this.lastColumnValue=vp(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue}indentation(){return this.overrideIndent??vp(this.string,null,this.tabSize)}match(e,t,n){if(typeof e==`string`){let r=e=>n?e.toLowerCase():e;return r(this.string.substr(this.pos,e.length))==r(e)?(t!==!1&&(this.pos+=e.length),!0):null}else{let n=this.string.slice(this.pos).match(e);return n&&n.index>0?null:(n&&t!==!1&&(this.pos+=n[0].length),n)}}current(){return this.string.slice(this.start,this.pos)}};function bp(e){return{name:e.name||``,token:e.token,blankLine:e.blankLine||(()=>{}),startState:e.startState||(()=>!0),copyState:e.copyState||xp,indent:e.indent||(()=>null),languageData:e.languageData||{},tokenTable:e.tokenTable||kp,mergeTokens:e.mergeTokens!==!1}}function xp(e){if(typeof e!=`object`)return e;let t={};for(let n in e){let r=e[n];t[n]=r instanceof Array?r.slice():r}return t}var Sp=new WeakMap,Cp=class e extends Ld{constructor(e){let t=Fd(e.languageData),n=bp(e),r,i=new class extends Wu{createParse(e,t,n){return new Dp(r,e,t,n)}};super(t,i,[],e.name),this.topNode=zp(t,this),r=this,this.streamParser=n,this.stateAfter=new W({perNode:!0}),this.tokenTable=e.tokenTable?new Fp(n.tokenTable):Ip}static define(t){return new e(t)}getIndent(e){let t,{overrideIndentation:n}=e.options;n&&(t=Sp.get(e.state),t!=null&&t<e.pos-1e4&&(t=void 0));let r=wp(this,e.node.tree,e.node.from,e.node.from,t??e.pos),i,a;if(r?(a=r.state,i=r.pos+1):(a=this.streamParser.startState(e.unit),i=e.node.from),e.pos-i>1e4)return null;for(;i<e.pos;){let t=e.state.doc.lineAt(i),r=Math.min(e.pos,t.to);if(t.length){let i=n?n(t.from):-1,o=new yp(t.text,e.state.tabSize,e.unit,i<0?void 0:i);for(;o.pos<r-t.from;)Op(this.streamParser.token,o,a)}else this.streamParser.blankLine(a,e.unit);if(r==e.pos)break;i=t.to+1}let o=e.lineAt(e.pos);return n&&t==null&&Sp.set(e.state,o.from),this.streamParser.indent(a,/^\s*(.*)/.exec(o.text)[1],e)}get allowsNesting(){return!1}};function wp(e,t,n,r,i){let a=n>=r&&n+t.length<=i&&t.prop(e.stateAfter);if(a)return{state:e.streamParser.copyState(a),pos:n+t.length};for(let a=t.children.length-1;a>=0;a--){let o=t.children[a],s=n+t.positions[a],c=o instanceof q&&s<i&&wp(e,o,s,r,i);if(c)return c}return null}function Tp(e,t,n,r,i){if(i&&n<=0&&r>=t.length)return t;!i&&n==0&&t.type==e.topNode&&(i=!0);for(let a=t.children.length-1;a>=0;a--){let o=t.positions[a],s=t.children[a],c;if(o<r&&s instanceof q){if(!(c=Tp(e,s,n-o,r-o,i)))break;return i?new q(t.type,t.children.slice(0,a).concat(c),t.positions.slice(0,a+1),o+c.length):c}}return null}function Ep(e,t,n,r,i){for(let i of t){let t=i.from+(i.openStart?25:0),a=i.to-(i.openEnd?25:0),o=t<=n&&a>n&&wp(e,i.tree,0-i.offset,n,a),s;if(o&&o.pos<=r&&(s=Tp(e,i.tree,n+i.offset,o.pos+i.offset,!1)))return{state:o.state,tree:s}}return{state:e.streamParser.startState(i?$d(i):4),tree:q.empty}}var Dp=class{constructor(e,t,n,r){this.lang=e,this.input=t,this.fragments=n,this.ranges=r,this.stoppedAt=null,this.chunks=[],this.chunkPos=[],this.chunk=[],this.chunkReused=void 0,this.rangeIndex=0,this.to=r[r.length-1].to;let i=Hd.get(),a=r[0].from,{state:o,tree:s}=Ep(e,n,a,this.to,i?.state);this.state=o,this.parsedPos=this.chunkStart=a+s.length;for(let e=0;e<s.children.length;e++)this.chunks.push(s.children[e]),this.chunkPos.push(s.positions[e]);i&&this.parsedPos<i.viewport.from-1e5&&r.some(e=>e.from<=i.viewport.from&&e.to>=i.viewport.from)&&(this.state=this.lang.streamParser.startState($d(i.state)),i.skipUntilInView(this.parsedPos,i.viewport.from),this.parsedPos=i.viewport.from),this.moveRangeIndex()}advance(){let e=Hd.get(),t=this.stoppedAt==null?this.to:Math.min(this.to,this.stoppedAt),n=Math.min(t,this.chunkStart+512);for(e&&(n=Math.min(n,e.viewport.to));this.parsedPos<n;)this.parseLine(e);return this.chunkStart<this.parsedPos&&this.finishChunk(),this.parsedPos>=t?this.finish():e&&this.parsedPos>=e.viewport.to?(e.skipUntilInView(this.parsedPos,t),this.finish()):null}stopAt(e){this.stoppedAt=e}lineAfter(e){let t=this.input.chunk(e);if(this.input.lineChunks)t==`
`&&(t=``);else{let e=t.indexOf(`
`);e>-1&&(t=t.slice(0,e))}return e+t.length<=this.to?t:t.slice(0,this.to-e)}nextLine(){let e=this.parsedPos,t=this.lineAfter(e),n=e+t.length;for(let e=this.rangeIndex;;){let r=this.ranges[e].to;if(r>=n||(t=t.slice(0,r-(n-t.length)),e++,e==this.ranges.length))break;let i=this.ranges[e].from,a=this.lineAfter(i);t+=a,n=i+a.length}return{line:t,end:n}}skipGapsTo(e,t,n){for(;;){let r=this.ranges[this.rangeIndex].to,i=e+t;if(n>0?r>i:r>=i)break;let a=this.ranges[++this.rangeIndex].from;t+=a-r}return t}moveRangeIndex(){for(;this.ranges[this.rangeIndex].to<this.parsedPos;)this.rangeIndex++}emitToken(e,t,n,r){let i=4;if(this.ranges.length>1){r=this.skipGapsTo(t,r,1),t+=r;let e=this.chunk.length;r=this.skipGapsTo(n,r,-1),n+=r,i+=this.chunk.length-e}let a=this.chunk.length-4;return this.lang.streamParser.mergeTokens&&i==4&&a>=0&&this.chunk[a]==e&&this.chunk[a+2]==t?this.chunk[a+2]=n:this.chunk.push(e,t,n,i),r}parseLine(e){let{line:t,end:n}=this.nextLine(),r=0,{streamParser:i}=this.lang,a=new yp(t,e?e.state.tabSize:4,e?$d(e.state):2);if(a.eol())i.blankLine(this.state,a.indentUnit);else for(;!a.eol();){let e=Op(i.token,a,this.state);if(e&&(r=this.emitToken(this.lang.tokenTable.resolve(e),this.parsedPos+a.start,this.parsedPos+a.pos,r)),a.start>1e4)break}this.parsedPos=n,this.moveRangeIndex(),this.parsedPos<this.to&&this.parsedPos++}finishChunk(){let e=q.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:jp,topID:0,maxBufferLength:512,reused:this.chunkReused});e=new q(e.type,e.children,e.positions,e.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]),this.chunks.push(e),this.chunkPos.push(this.chunkStart-this.ranges[0].from),this.chunk=[],this.chunkReused=void 0,this.chunkStart=this.parsedPos}finish(){return new q(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}};function Op(e,t,n){t.start=t.pos;for(let r=0;r<10;r++){let r=e(t,n);if(t.pos>t.start)return r}throw Error(`Stream parser failed to advance stream.`)}var kp=Object.create(null),Ap=[G.none],jp=new bu(Ap),Mp=[],Np=Object.create(null),Pp=Object.create(null);for(let[e,t]of[[`variable`,`variableName`],[`variable-2`,`variableName.special`],[`string-2`,`string.special`],[`def`,`variableName.definition`],[`tag`,`tagName`],[`attribute`,`attributeName`],[`type`,`typeName`],[`builtin`,`variableName.standard`],[`qualifier`,`modifier`],[`error`,`invalid`],[`header`,`heading`],[`property`,`propertyName`]])Pp[e]=Rp(kp,t);var Fp=class{constructor(e){this.extra=e,this.table=Object.assign(Object.create(null),Pp)}resolve(e){return e?this.table[e]||(this.table[e]=Rp(this.extra,e)):0}},Ip=new Fp(kp);function Lp(e,t){Mp.indexOf(e)>-1||(Mp.push(e),console.warn(t))}function Rp(e,t){let n=[];for(let r of t.split(` `)){let t=[];for(let n of r.split(`.`)){let r=e[n]||Y[n];r?typeof r==`function`?t.length?t=t.map(r):Lp(n,`Modifier ${n} used at start of tag`):t.length?Lp(n,`Tag ${n} used as modifier`):t=Array.isArray(r)?r:[r]:Lp(n,`Unknown highlighting tag ${n}`)}for(let e of t)n.push(e)}if(!n.length)return 0;let r=t.replace(/ /g,`_`),i=r+` `+n.map(e=>e.id),a=Np[i];if(a)return a.id;let o=Np[i]=G.define({id:Ap.length,name:r,props:[fd({[r]:n})]});return Ap.push(o),o.id}function zp(e,t){let n=G.define({id:Ap.length,name:`Document`,props:[Pd.add(()=>e),rf.add(()=>e=>t.getIndent(e))],top:!0});return Ap.push(n),n}z.RTL,z.LTR;var Bp=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=Gp(e.state,n.from);return r.line?Hp(e):r.block?Wp(e):!1};function Vp(e,t){return({state:n,dispatch:r})=>{if(n.readOnly)return!1;let i=e(t,n);return i?(r(n.update(i)),!0):!1}}var Hp=Vp(Xp,0),Up=Vp(Yp,0),Wp=Vp((e,t)=>Yp(e,t,Jp(t)),0);function Gp(e,t){let n=e.languageDataAt(`commentTokens`,t,1);return n.length?n[0]:{}}var Kp=50;function qp(e,{open:t,close:n},r,i){let a=e.sliceDoc(r-Kp,r),o=e.sliceDoc(i,i+Kp),s=/\s*$/.exec(a)[0].length,c=/^\s*/.exec(o)[0].length,l=a.length-s;if(a.slice(l-t.length,l)==t&&o.slice(c,c+n.length)==n)return{open:{pos:r-s,margin:s&&1},close:{pos:i+c,margin:c&&1}};let u,d;i-r<=2*Kp?u=d=e.sliceDoc(r,i):(u=e.sliceDoc(r,r+Kp),d=e.sliceDoc(i-Kp,i));let f=/^\s*/.exec(u)[0].length,p=/\s*$/.exec(d)[0].length,m=d.length-p-n.length;return u.slice(f,f+t.length)==t&&d.slice(m,m+n.length)==n?{open:{pos:r+f+t.length,margin:+!!/\s/.test(u.charAt(f+t.length))},close:{pos:i-p-n.length,margin:+!!/\s/.test(d.charAt(m-1))}}:null}function Jp(e){let t=[];for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from),i=n.to<=r.to?r:e.doc.lineAt(n.to);i.from>r.from&&i.from==n.to&&(i=n.to==r.to+1?r:e.doc.lineAt(n.to-1));let a=t.length-1;a>=0&&t[a].to>r.from?t[a].to=i.to:t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:i.to})}return t}function Yp(e,t,n=t.selection.ranges){let r=n.map(e=>Gp(t,e.from).block);if(!r.every(e=>e))return null;let i=n.map((e,n)=>qp(t,r[n],e.from,e.to));if(e!=2&&!i.every(e=>e))return{changes:t.changes(n.map((e,t)=>i[t]?[]:[{from:e.from,insert:r[t].open+` `},{from:e.to,insert:` `+r[t].close}]))};if(e!=1&&i.some(e=>e)){let e=[];for(let t=0,n;t<i.length;t++)if(n=i[t]){let i=r[t],{open:a,close:o}=n;e.push({from:a.pos-i.open.length,to:a.pos+a.margin},{from:o.pos-o.margin,to:o.pos+i.close.length})}return{changes:e}}return null}function Xp(e,t,n=t.selection.ranges){let r=[],i=-1;ranges:for(let{from:e,to:a}of n){let n=r.length,o=1e9,s;for(let n=e;n<=a;){let c=t.doc.lineAt(n);if(s==null&&(s=Gp(t,c.from).line,!s))continue ranges;if(c.from>i&&(e==a||a>c.from)){i=c.from;let e=/^\s*/.exec(c.text)[0].length,t=e==c.length,n=c.text.slice(e,e+s.length)==s?e:-1;e<c.text.length&&e<o&&(o=e),r.push({line:c,comment:n,token:s,indent:e,empty:t,single:!1})}n=c.to+1}if(o<1e9)for(let e=n;e<r.length;e++)r[e].indent<r[e].line.text.length&&(r[e].indent=o);r.length==n+1&&(r[n].single=!0)}if(e!=2&&r.some(e=>e.comment<0&&(!e.empty||e.single))){let e=[];for(let{line:t,token:n,indent:i,empty:a,single:o}of r)(o||!a)&&e.push({from:t.from+i,insert:n+` `});let n=t.changes(e);return{changes:n,selection:t.selection.map(n,1)}}else if(e!=1&&r.some(e=>e.comment>=0)){let e=[];for(let{line:t,comment:n,token:i}of r)if(n>=0){let r=t.from+n,a=r+i.length;t.text[a-t.from]==` `&&a++,e.push({from:r,to:a})}return{changes:e}}return null}var Zp=dn.define(),Qp=dn.define(),$p=j.define(),em=j.define({combine(e){return Dn(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,r)=>e(n,r)||t(n,r)})}}),tm=Kt.define({create(){return bm.empty},update(e,t){let n=t.state.facet(em),r=t.annotation(Zp);if(r){let i=cm.fromTransaction(t,r.selection),a=r.side,o=a==0?e.undone:e.done;return o=i?lm(o,o.length,n.minDepth,i):hm(o,t.startState.selection),new bm(a==0?r.rest:o,a==0?o:r.rest)}let i=t.annotation(Qp);if((i==`full`||i==`before`)&&(e=e.isolate()),t.annotation(mn.addToHistory)===!1)return t.changes.empty?e:e.addMapping(t.changes.desc);let a=cm.fromTransaction(t),o=t.annotation(mn.time),s=t.annotation(mn.userEvent);return a?e=e.addChanges(a,o,s,n,t):t.selection&&(e=e.addSelection(t.startState.selection,o,s,n.newGroupDelay)),(i==`full`||i==`after`)&&(e=e.isolate()),e},toJSON(e){return{done:e.done.map(e=>e.toJSON()),undone:e.undone.map(e=>e.toJSON())}},fromJSON(e){return new bm(e.done.map(cm.fromJSON),e.undone.map(cm.fromJSON))}});function nm(e={}){return[tm,em.of(e),U.domEventHandlers({beforeinput(e,t){let n=e.inputType==`historyUndo`?im:e.inputType==`historyRedo`?am:null;return n?(e.preventDefault(),n(t)):!1}})]}function rm(e,t){return function({state:n,dispatch:r}){if(!t&&n.readOnly)return!1;let i=n.field(tm,!1);if(!i)return!1;let a=i.pop(e,n,t);return a?(r(a),!0):!1}}var im=rm(0,!1),am=rm(1,!1),om=rm(0,!0),sm=rm(1,!0),cm=class e{constructor(e,t,n,r,i){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=r,this.selectionsAfter=i}setSelAfter(t){return new e(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){return{changes:this.changes?.toJSON(),mapped:this.mapped?.toJSON(),startSelection:this.startSelection?.toJSON(),selectionsAfter:this.selectionsAfter.map(e=>e.toJSON())}}static fromJSON(t){return new e(t.changes&&At.fromJSON(t.changes),[],t.mapped&&kt.fromJSON(t.mapped),t.startSelection&&A.fromJSON(t.startSelection),t.selectionsAfter.map(A.fromJSON))}static fromTransaction(t,n){let r=pm;for(let e of t.startState.facet($p)){let n=e(t);n.length&&(r=r.concat(n))}return!r.length&&t.changes.empty?null:new e(t.changes.invert(t.startState.doc),r,void 0,n||t.startState.selection,pm)}static selection(t){return new e(void 0,pm,void 0,void 0,t)}};function lm(e,t,n,r){let i=t+1>n+20?t-n-1:0,a=e.slice(i,t);return a.push(r),a}function um(e,t){let n=[],r=!1;return e.iterChangedRanges((e,t)=>n.push(e,t)),t.iterChangedRanges((e,t,i,a)=>{for(let e=0;e<n.length;){let t=n[e++],o=n[e++];a>=t&&i<=o&&(r=!0)}}),r}function dm(e,t){return e.ranges.length==t.ranges.length&&e.ranges.filter((e,n)=>e.empty!=t.ranges[n].empty).length===0}function fm(e,t){return e.length?t.length?e.concat(t):e:t}var pm=[],mm=200;function hm(e,t){if(e.length){let n=e[e.length-1],r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-mm));return r.length&&r[r.length-1].eq(t)?e:(r.push(t),lm(e,e.length-1,1e9,n.setSelAfter(r)))}else return[cm.selection([t])]}function gm(e){let t=e[e.length-1],n=e.slice();return n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),n}function _m(e,t){if(!e.length)return e;let n=e.length,r=pm;for(;n;){let i=vm(e[n-1],t,r);if(i.changes&&!i.changes.empty||i.effects.length){let t=e.slice(0,n);return t[n-1]=i,t}else t=i.mapped,n--,r=i.selectionsAfter}return r.length?[cm.selection(r)]:pm}function vm(e,t,n){let r=fm(e.selectionsAfter.length?e.selectionsAfter.map(e=>e.map(t)):pm,n);if(!e.changes)return cm.selection(r);let i=e.changes.map(t),a=t.mapDesc(e.changes,!0),o=e.mapped?e.mapped.composeDesc(a):a;return new cm(i,M.mapEffects(e.effects,t),o,e.startSelection.map(a),r)}var ym=/^(input\.type|delete)($|\.)/,bm=class e{constructor(e,t,n=0,r=void 0){this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=r}isolate(){return this.prevTime?new e(this.done,this.undone):this}addChanges(t,n,r,i,a){let o=this.done,s=o[o.length-1];return o=s&&s.changes&&!s.changes.empty&&t.changes&&(!r||ym.test(r))&&(!s.selectionsAfter.length&&n-this.prevTime<i.newGroupDelay&&i.joinToEvent(a,um(s.changes,t.changes))||r==`input.type.compose`)?lm(o,o.length-1,i.minDepth,new cm(t.changes.compose(s.changes),fm(M.mapEffects(t.effects,s.changes),s.effects),s.mapped,s.startSelection,pm)):lm(o,o.length,i.minDepth,t),new e(o,pm,n,r)}addSelection(t,n,r,i){let a=this.done.length?this.done[this.done.length-1].selectionsAfter:pm;return a.length>0&&n-this.prevTime<i&&r==this.prevUserEvent&&r&&/^select($|\.)/.test(r)&&dm(a[a.length-1],t)?this:new e(hm(this.done,t),this.undone,n,r)}addMapping(t){return new e(_m(this.done,t),_m(this.undone,t),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=e==0?this.done:this.undone;if(r.length==0)return null;let i=r[r.length-1],a=i.selectionsAfter[0]||(i.startSelection?i.startSelection.map(i.changes.invertedDesc,1):t.selection);if(n&&i.selectionsAfter.length)return t.update({selection:i.selectionsAfter[i.selectionsAfter.length-1],annotations:Zp.of({side:e,rest:gm(r),selection:a}),userEvent:e==0?`select.undo`:`select.redo`,scrollIntoView:!0});if(i.changes){let n=r.length==1?pm:r.slice(0,r.length-1);return i.mapped&&(n=_m(n,i.mapped)),t.update({changes:i.changes,selection:i.startSelection,effects:i.effects,annotations:Zp.of({side:e,rest:n,selection:a}),filter:!1,userEvent:e==0?`undo`:`redo`,scrollIntoView:!0})}else return null}};bm.empty=new bm(pm,pm);var xm=[{key:`Mod-z`,run:im,preventDefault:!0},{key:`Mod-y`,mac:`Mod-Shift-z`,run:am,preventDefault:!0},{linux:`Ctrl-Shift-z`,run:am,preventDefault:!0},{key:`Mod-u`,run:om,preventDefault:!0},{key:`Alt-u`,mac:`Mod-Shift-u`,run:sm,preventDefault:!0}];function Sm(e,t){return A.create(e.ranges.map(t),e.mainIndex)}function Cm(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:`select`})}function wm({state:e,dispatch:t},n){let r=Sm(e.selection,n);return r.eq(e.selection,!0)?!1:(t(Cm(e,r)),!0)}function Tm(e,t){return A.cursor(t?e.to:e.from)}function Em(e,t){return wm(e,n=>n.empty?e.moveByChar(n,t):Tm(n,t))}function Dm(e){return e.textDirectionAt(e.state.selection.main.head)==z.LTR}var Om=e=>Em(e,!Dm(e)),km=e=>Em(e,Dm(e));function Am(e,t){return wm(e,n=>n.empty?e.moveByGroup(n,t):Tm(n,t))}var jm=e=>Am(e,!Dm(e)),Mm=e=>Am(e,Dm(e));typeof Intl<`u`&&Intl.Segmenter;function Nm(e,t,n){if(t.type.prop(n))return!0;let r=t.to-t.from;return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function Pm(e,t,n){let r=X(e).resolveInner(t.head),i=n?W.closedBy:W.openedBy;for(let a=t.head;;){let t=n?r.childAfter(a):r.childBefore(a);if(!t)break;Nm(e,t,i)?r=t:a=n?t.to:t.from}let a=r.type.prop(i),o,s;return s=a&&(o=n?hp(e,r.from,1):hp(e,r.to,-1))&&o.matched?n?o.end.to:o.end.from:n?r.to:r.from,A.cursor(s,n?-1:1)}var Fm=e=>wm(e,t=>Pm(e.state,t,!Dm(e))),Im=e=>wm(e,t=>Pm(e.state,t,Dm(e)));function Lm(e,t){return wm(e,n=>{if(!n.empty)return Tm(n,t);let r=e.moveVertically(n,t);return r.head==n.head?e.moveToLineBoundary(n,t):r})}var Rm=e=>Lm(e,!1),zm=e=>Lm(e,!0);function Bm(e){let t=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,n=0,r=0,i;if(t){for(let t of e.state.facet(U.scrollMargins)){let i=t(e);i?.top&&(n=Math.max(i?.top,n)),i?.bottom&&(r=Math.max(i?.bottom,r))}i=e.scrollDOM.clientHeight-n-r}else i=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:n,marginBottom:r,selfScroll:t,height:Math.max(e.defaultLineHeight,i-5)}}function Vm(e,t){let n=Bm(e),{state:r}=e,i=Sm(r.selection,r=>r.empty?e.moveVertically(r,t,n.height):Tm(r,t));if(i.eq(r.selection))return!1;let a;if(n.selfScroll){let t=e.coordsAtPos(r.selection.main.head),o=e.scrollDOM.getBoundingClientRect(),s=o.top+n.marginTop,c=o.bottom-n.marginBottom;t&&t.top>s&&t.bottom<c&&(a=U.scrollIntoView(i.main.head,{y:`start`,yMargin:t.top-s}))}return e.dispatch(Cm(r,i),{effects:a}),!0}var Hm=e=>Vm(e,!1),Um=e=>Vm(e,!0);function Wm(e,t,n){let r=e.lineBlockAt(t.head),i=e.moveToLineBoundary(t,n);if(i.head==t.head&&i.head!=(n?r.to:r.from)&&(i=e.moveToLineBoundary(t,n,!1)),!n&&i.head==r.from&&r.length){let n=/^\s*/.exec(e.state.sliceDoc(r.from,Math.min(r.from+100,r.to)))[0].length;n&&t.head!=r.from+n&&(i=A.cursor(r.from+n))}return i}var Gm=e=>wm(e,t=>Wm(e,t,!0)),Km=e=>wm(e,t=>Wm(e,t,!1)),qm=e=>wm(e,t=>Wm(e,t,!Dm(e))),Jm=e=>wm(e,t=>Wm(e,t,Dm(e))),Ym=e=>wm(e,t=>A.cursor(e.lineBlockAt(t.head).from,1)),Xm=e=>wm(e,t=>A.cursor(e.lineBlockAt(t.head).to,-1));function Zm(e,t,n){let r=!1,i=Sm(e.selection,t=>{let i=hp(e,t.head,-1)||hp(e,t.head,1)||t.head>0&&hp(e,t.head-1,1)||t.head<e.doc.length&&hp(e,t.head+1,-1);if(!i||!i.end)return t;r=!0;let a=i.start.from==t.head?i.end.to:i.end.from;return n?A.range(t.anchor,a):A.cursor(a)});return r?(t(Cm(e,i)),!0):!1}var Qm=({state:e,dispatch:t})=>Zm(e,t,!1);function $m(e,t,n){let r=Sm(e.state.selection,e=>{e.undirectional&&e.head>=e.anchor!=t&&(e=A.range(e.head,e.anchor));let r=n(e);return A.range(e.anchor,r.head,r.goalColumn,r.bidiLevel||void 0,r.assoc)});return r.eq(e.state.selection)?!1:(e.dispatch(Cm(e.state,r)),!0)}function eh(e,t){return $m(e,t,n=>e.moveByChar(n,t))}var th=e=>eh(e,!Dm(e)),nh=e=>eh(e,Dm(e));function rh(e,t){return $m(e,t,n=>e.moveByGroup(n,t))}var ih=e=>rh(e,!Dm(e)),ah=e=>rh(e,Dm(e)),oh=e=>{let t=!Dm(e);return $m(e,t,n=>Pm(e.state,n,t))},sh=e=>{let t=Dm(e);return $m(e,t,n=>Pm(e.state,n,t))};function ch(e,t){return $m(e,t,n=>e.moveVertically(n,t))}var lh=e=>ch(e,!1),uh=e=>ch(e,!0);function dh(e,t){return $m(e,t,n=>e.moveVertically(n,t,Bm(e).height))}var fh=e=>dh(e,!1),ph=e=>dh(e,!0),mh=e=>$m(e,!0,t=>Wm(e,t,!0)),hh=e=>$m(e,!1,t=>Wm(e,t,!1)),gh=e=>{let t=!Dm(e);return $m(e,t,n=>Wm(e,n,t))},_h=e=>{let t=Dm(e);return $m(e,t,n=>Wm(e,n,t))},vh=e=>$m(e,!1,t=>A.cursor(e.lineBlockAt(t.head).from)),yh=e=>$m(e,!0,t=>A.cursor(e.lineBlockAt(t.head).to)),bh=({state:e,dispatch:t})=>(t(Cm(e,{anchor:0})),!0),xh=({state:e,dispatch:t})=>(t(Cm(e,{anchor:e.doc.length})),!0),Sh=({state:e,dispatch:t})=>(t(Cm(e,{anchor:e.selection.main.anchor,head:0})),!0),Ch=({state:e,dispatch:t})=>(t(Cm(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),wh=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:`select`})),!0),Th=({state:e,dispatch:t})=>{let n=Wh(e).map(({from:t,to:n})=>A.range(t,Math.min(n+1,e.doc.length)));return t(e.update({selection:A.create(n),userEvent:`select`})),!0},Eh=({state:e,dispatch:t})=>{let n=Sm(e.selection,t=>{let n=X(e),r=n.resolveStack(t.from,1);if(t.empty){let e=n.resolveStack(t.from,-1);e.node.from>=r.node.from&&e.node.to<=r.node.to&&(r=e)}for(let e=r;e;e=e.next){let{node:n}=e;if((n.from<t.from&&n.to>=t.to||n.to>t.to&&n.from<=t.from)&&e.next)return A.range(n.to,n.from)}return t});return n.eq(e.selection)?!1:(t(Cm(e,n)),!0)};function Dh(e,t){let{state:n}=e,r=n.selection,i=n.selection.ranges.slice();for(let r of n.selection.ranges){let a=n.doc.lineAt(r.head);if(t?a.to<e.state.doc.length:a.from>0)for(let n=r;;){let r=e.moveVertically(n,t);if(r.head<a.from||r.head>a.to){i.some(e=>e.head==r.head)||i.push(r);break}else if(r.head==n.head)break;else n=r}}return i.length==r.ranges.length?!1:(e.dispatch(Cm(n,A.create(i,i.length-1))),!0)}var Oh=e=>Dh(e,!1),kh=e=>Dh(e,!0),Ah=({state:e,dispatch:t})=>{let n=e.selection,r=null;return n.ranges.length>1?r=A.create([n.main]):n.main.empty||(r=A.create([A.cursor(n.main.head)])),r?(t(Cm(e,r)),!0):!1};function jh(e,t){if(e.state.readOnly)return!1;let n=`delete.selection`,{state:r}=e,i=r.changeByRange(r=>{let{from:i,to:a}=r;if(i==a){let o=t(r);o<i?(n=`delete.backward`,o=Mh(e,o,!1)):o>i&&(n=`delete.forward`,o=Mh(e,o,!0)),i=Math.min(i,o),a=Math.max(a,o)}else i=Mh(e,i,!1),a=Mh(e,a,!0);return i==a?{range:r}:{changes:{from:i,to:a},range:A.cursor(i,i<r.head?-1:1)}});return i.changes.empty?!1:(e.dispatch(r.update(i,{scrollIntoView:!0,userEvent:n,effects:n==`delete.selection`?U.announce.of(r.phrase(`Selection deleted`)):void 0})),!0)}function Mh(e,t,n){if(e instanceof U)for(let r of e.state.facet(U.atomicRanges).map(t=>t(e)))r.between(t,t,(e,r)=>{e<t&&r>t&&(t=n?r:e)});return t}var Nh=(e,t,n)=>jh(e,r=>{let i=r.from,{state:a}=e,o=a.doc.lineAt(i),s,c;if(n&&!t&&i>o.from&&i<o.from+200&&!/[^ \t]/.test(s=o.text.slice(0,i-o.from))){if(s[s.length-1]==`	`)return i-1;let e=Gn(s,a.tabSize)%$d(a)||$d(a);for(let t=0;t<e&&s[s.length-1-t]==` `;t++)i--;c=i}else c=xt(o.text,i-o.from,t,t)+o.from,c==i&&o.number!=(t?a.doc.lines:1)?c+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(o.text.slice(c-o.from,i-o.from))&&(c=xt(o.text,c-o.from,!1,!1)+o.from);return c}),Ph=e=>Nh(e,!1,!0),Fh=e=>Nh(e,!0,!1),Ih=(e,t)=>jh(e,n=>{let r=n.head,{state:i}=e,a=i.doc.lineAt(r),o=i.charCategorizer(r);for(let e=null;;){if(r==(t?a.to:a.from)){r==n.head&&a.number!=(t?i.doc.lines:1)&&(r+=t?1:-1);break}let s=xt(a.text,r-a.from,t)+a.from,c=a.text.slice(Math.min(r,s)-a.from,Math.max(r,s)-a.from),l=o(c);if(e!=null&&l!=e)break;(c!=` `||r!=n.head)&&(e=l),r=s}return r}),Lh=e=>Ih(e,!1),Rh=e=>Ih(e,!0),zh=e=>jh(e,t=>{let n=e.lineBlockAt(t.head).to;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),Bh=e=>jh(e,t=>{let n=e.moveToLineBoundary(t,!1).head;return t.head>n?n:Math.max(0,t.head-1)}),Vh=e=>jh(e,t=>{let n=e.moveToLineBoundary(t,!0).head;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),Hh=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:k.of([``,``])},range:A.cursor(e.from)}));return t(e.update(n,{scrollIntoView:!0,userEvent:`input`})),!0},Uh=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(t=>{if(!t.empty||t.from==0||t.from==e.doc.length)return{range:t};let n=t.from,r=e.doc.lineAt(n),i=n==r.from?n-1:xt(r.text,n-r.from,!1)+r.from,a=n==r.to?n+1:xt(r.text,n-r.from,!0)+r.from;return{changes:{from:i,to:a,insert:e.doc.slice(n,a).append(e.doc.slice(i,n))},range:A.cursor(a)}});return n.changes.empty?!1:(t(e.update(n,{scrollIntoView:!0,userEvent:`move.character`})),!0)};function Wh(e){let t=[],n=-1;for(let r of e.selection.ranges){let i=e.doc.lineAt(r.from),a=e.doc.lineAt(r.to);if(!r.empty&&r.to==a.from&&(a=e.doc.lineAt(r.to-1)),n>=i.number){let e=t[t.length-1];e.to=a.to,e.ranges.push(r)}else t.push({from:i.from,to:a.to,ranges:[r]});n=a.number+1}return t}function Gh(e,t,n){if(e.readOnly)return!1;let r=[],i=[];for(let t of Wh(e)){if(n?t.to==e.doc.length:t.from==0)continue;let a=e.doc.lineAt(n?t.to+1:t.from-1),o=a.length+1;if(n){r.push({from:t.to,to:a.to},{from:t.from,insert:a.text+e.lineBreak});for(let n of t.ranges)i.push(A.range(Math.min(e.doc.length,n.anchor+o),Math.min(e.doc.length,n.head+o)))}else{r.push({from:a.from,to:t.from},{from:t.to,insert:e.lineBreak+a.text});for(let e of t.ranges)i.push(A.range(e.anchor-o,e.head-o))}}return r.length?(t(e.update({changes:r,scrollIntoView:!0,selection:A.create(i,e.selection.mainIndex),userEvent:`move.line`})),!0):!1}var Kh=({state:e,dispatch:t})=>Gh(e,t,!1),qh=({state:e,dispatch:t})=>Gh(e,t,!0);function Jh(e,t,n){if(e.readOnly)return!1;let r=[];for(let t of Wh(e))n?r.push({from:t.from,insert:e.doc.slice(t.from,t.to)+e.lineBreak}):r.push({from:t.to,insert:e.lineBreak+e.doc.slice(t.from,t.to)});let i=e.changes(r);return t(e.update({changes:i,selection:e.selection.map(i,n?1:-1),scrollIntoView:!0,userEvent:`input.copyline`})),!0}var Yh=({state:e,dispatch:t})=>Jh(e,t,!1),Xh=({state:e,dispatch:t})=>Jh(e,t,!0),Zh=e=>{if(e.state.readOnly)return!1;let{state:t}=e,n=t.changes(Wh(t).map(({from:e,to:n})=>(e>0?e--:n<t.doc.length&&n++,{from:e,to:n}))),r=Sm(t.selection,t=>{let n;if(e.lineWrapping){let r=e.lineBlockAt(t.head),i=e.coordsAtPos(t.head,t.assoc||1);i&&(n=r.bottom+e.documentTop-i.bottom+e.defaultLineHeight/2)}return e.moveVertically(t,!0,n)}).map(n);return e.dispatch({changes:n,selection:r,scrollIntoView:!0,userEvent:`delete.line`}),!0};function Qh(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let n=X(e).resolveInner(t),r=n.childBefore(t),i=n.childAfter(t),a;return r&&i&&r.to<=t&&i.from>=t&&(a=r.type.prop(W.closedBy))&&a.indexOf(i.name)>-1&&e.doc.lineAt(r.to).from==e.doc.lineAt(i.from).from&&!/\S/.test(e.sliceDoc(r.to,i.from))?{from:r.to,to:i.from}:null}var $h=tg(!1),eg=tg(!0);function tg(e){return({state:t,dispatch:n})=>{if(t.readOnly)return!1;let r=t.changeByRange(n=>{let{from:r,to:i}=n,a=t.doc.lineAt(r),o=!e&&r==i&&Qh(t,r);e&&(r=i=(i<=a.to?a:t.doc.lineAt(i)).to);let s=new nf(t,{simulateBreak:r,simulateDoubleBreak:!!o}),c=tf(s,r);for(c??=Gn(/^\s*/.exec(t.doc.lineAt(r).text)[0],t.tabSize);i<a.to&&/\s/.test(a.text[i-a.from]);)i++;o?{from:r,to:i}=o:r>a.from&&r<a.from+100&&!/\S/.test(a.text.slice(0,r))&&(r=a.from);let l=[``,ef(t,c)];return o&&l.push(ef(t,s.lineIndent(a.from,-1))),{changes:{from:r,to:i,insert:k.of(l)},range:A.cursor(r+1+l[1].length)}});return n(t.update(r,{scrollIntoView:!0,userEvent:`input`})),!0}}function ng(e,t){let n=-1;return e.changeByRange(r=>{let i=[];for(let a=r.from;a<=r.to;){let o=e.doc.lineAt(a);o.number>n&&(r.empty||r.to>o.from)&&(t(o,i,r),n=o.number),a=o.to+1}let a=e.changes(i);return{changes:i,range:A.range(a.mapPos(r.anchor,1),a.mapPos(r.head,1))}})}var rg=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Object.create(null),r=new nf(e,{overrideIndentation:e=>n[e]??-1}),i=ng(e,(t,i,a)=>{let o=tf(r,t.from);if(o==null)return;/\S/.test(t.text)||(o=0);let s=/^\s*/.exec(t.text)[0],c=ef(e,o);(s!=c||a.from<t.from+s.length)&&(n[t.from]=o,i.push({from:t.from,to:t.from+s.length,insert:c}))});return i.changes.empty||t(e.update(i,{userEvent:`indent`})),!0},ig=({state:e,dispatch:t})=>e.readOnly?!1:(t(e.update(ng(e,(t,n)=>{n.push({from:t.from,insert:e.facet(Qd)})}),{userEvent:`input.indent`})),!0),ag=({state:e,dispatch:t})=>e.readOnly?!1:(t(e.update(ng(e,(t,n)=>{let r=/^\s*/.exec(t.text)[0];if(!r)return;let i=Gn(r,e.tabSize),a=0,o=ef(e,Math.max(0,i-$d(e)));for(;a<r.length&&a<o.length&&r.charCodeAt(a)==o.charCodeAt(a);)a++;n.push({from:t.from+a,to:t.from+r.length,insert:o.slice(a)})}),{userEvent:`delete.dedent`})),!0),og=e=>(e.setTabFocusMode(),!0),sg=[{key:`Ctrl-b`,run:Om,shift:th,preventDefault:!0},{key:`Ctrl-f`,run:km,shift:nh},{key:`Ctrl-p`,run:Rm,shift:lh},{key:`Ctrl-n`,run:zm,shift:uh},{key:`Ctrl-a`,run:Ym,shift:vh},{key:`Ctrl-e`,run:Xm,shift:yh},{key:`Ctrl-d`,run:Fh},{key:`Ctrl-h`,run:Ph},{key:`Ctrl-k`,run:zh},{key:`Ctrl-Alt-h`,run:Lh},{key:`Ctrl-o`,run:Hh},{key:`Ctrl-t`,run:Uh},{key:`Ctrl-v`,run:Um}],cg=[{key:`ArrowLeft`,run:Om,shift:th,preventDefault:!0},{key:`Mod-ArrowLeft`,mac:`Alt-ArrowLeft`,run:jm,shift:ih,preventDefault:!0},{mac:`Cmd-ArrowLeft`,run:qm,shift:gh,preventDefault:!0},{key:`ArrowRight`,run:km,shift:nh,preventDefault:!0},{key:`Mod-ArrowRight`,mac:`Alt-ArrowRight`,run:Mm,shift:ah,preventDefault:!0},{mac:`Cmd-ArrowRight`,run:Jm,shift:_h,preventDefault:!0},{key:`ArrowUp`,run:Rm,shift:lh,preventDefault:!0},{mac:`Cmd-ArrowUp`,run:bh,shift:Sh},{mac:`Ctrl-ArrowUp`,run:Hm,shift:fh},{key:`ArrowDown`,run:zm,shift:uh,preventDefault:!0},{mac:`Cmd-ArrowDown`,run:xh,shift:Ch},{mac:`Ctrl-ArrowDown`,run:Um,shift:ph},{key:`PageUp`,run:Hm,shift:fh},{key:`PageDown`,run:Um,shift:ph},{key:`Home`,run:Km,shift:hh,preventDefault:!0},{key:`Mod-Home`,run:bh,shift:Sh},{key:`End`,run:Gm,shift:mh,preventDefault:!0},{key:`Mod-End`,run:xh,shift:Ch},{key:`Enter`,run:$h,shift:$h},{key:`Mod-a`,run:wh},{key:`Backspace`,run:Ph,shift:Ph,preventDefault:!0},{key:`Delete`,run:Fh,preventDefault:!0},{key:`Mod-Backspace`,mac:`Alt-Backspace`,run:Lh,preventDefault:!0},{key:`Mod-Delete`,mac:`Alt-Delete`,run:Rh,preventDefault:!0},{mac:`Mod-Backspace`,run:Bh,preventDefault:!0},{mac:`Mod-Delete`,run:Vh,preventDefault:!0}].concat(sg.map(e=>({mac:e.key,run:e.run,shift:e.shift}))),lg=[{key:`Alt-ArrowLeft`,mac:`Ctrl-ArrowLeft`,run:Fm,shift:oh},{key:`Alt-ArrowRight`,mac:`Ctrl-ArrowRight`,run:Im,shift:sh},{key:`Alt-ArrowUp`,run:Kh},{key:`Shift-Alt-ArrowUp`,run:Yh},{key:`Alt-ArrowDown`,run:qh},{key:`Shift-Alt-ArrowDown`,run:Xh},{key:`Mod-Alt-ArrowUp`,run:Oh},{key:`Mod-Alt-ArrowDown`,run:kh},{key:`Escape`,run:Ah},{key:`Mod-Enter`,run:eg},{key:`Alt-l`,mac:`Ctrl-l`,run:Th},{key:`Mod-i`,run:Eh,preventDefault:!0},{key:`Mod-[`,run:ag},{key:`Mod-]`,run:ig},{key:`Mod-Alt-\\`,run:rg},{key:`Shift-Mod-k`,run:Zh},{key:`Shift-Mod-\\`,run:Qm},{key:`Mod-/`,run:Bp},{key:`Alt-A`,run:Up},{key:`Ctrl-m`,mac:`Shift-Alt-m`,run:og}].concat(cg),ug=typeof String.prototype.normalize==`function`?e=>e.normalize(`NFKD`):e=>e,dg=class{constructor(e,t,n=0,r=e.length,i,a){this.test=a,this.value={from:0,to:0,precise:!1},this.done=!1,this.matches=[],this.buffer=``,this.bufferPos=0,this.iter=e.iterRange(n,r),this.bufferStart=n,this.normalize=i?e=>i(ug(e)):ug,this.query=this.normalize(t)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return wt(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let t=Tt(e),n=this.bufferStart+this.bufferPos;this.bufferPos+=Et(e);let r=this.normalize(t);if(r.length)for(let e=0,i=n,a=!0;;e++){let n=r.charCodeAt(e),o=this.match(n,i,a,this.bufferPos+this.bufferStart,e==r.length-1);if(o)return this.value=o,this;if(e==r.length-1)break;a&&e<t.length&&t.charCodeAt(e)==n?i++:a=!1}}}match(e,t,n,r,i){let a=null;for(let t=0;t<this.matches.length;){let n=this.matches[t],o=!1;this.query.charCodeAt(n.index)==e&&(n.index==this.query.length-1?a={from:n.from,to:r,precise:i&&n.precise}:(n.index++,o=!0)),o?t++:this.matches.splice(t,1)}return this.query.charCodeAt(0)==e&&(this.query.length==1?a={from:t,to:r,precise:n&&i}:this.matches.push({from:t,index:1,precise:n})),a&&this.test&&!this.test(a.from,a.to,this.buffer,this.bufferStart)&&(a=null),a}};typeof Symbol<`u`&&(dg.prototype[Symbol.iterator]=function(){return this});var fg={from:-1,to:-1,match:/.*/.exec(``),precise:!0},pg=`gm`+(/x/.unicode==null?``:`u`),mg=class{constructor(e,t,n,r=0,i=e.length){if(this.text=e,this.to=i,this.curLine=``,this.done=!1,this.value=fg,/\\[sWDnr]|\n|\r|\[\^/.test(t))return new _g(e,t,n,r,i);this.re=new RegExp(t,pg+(n?.ignoreCase?`i`:``)),this.test=n?.test,this.iter=e.iter();let a=e.lineAt(r);this.curLineStart=a.from,this.matchPos=yg(e,r),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine=``:(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine=``:this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let t=this.matchPos<=this.to&&this.re.exec(this.curLine);if(t){let n=this.curLineStart+t.index,r=n+t[0].length;if(this.matchPos=yg(this.text,r+ +(n==r)),n==this.curLineStart+this.curLine.length&&this.nextLine(),(n<r||n>this.value.to)&&(!this.test||this.test(n,r,t)))return this.value={from:n,to:r,precise:!0,match:t},this;e=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),e=0;else return this.done=!0,this}}},hg=new WeakMap,gg=class e{constructor(e,t){this.from=e,this.text=t}get to(){return this.from+this.text.length}static get(t,n,r){let i=hg.get(t);if(!i||i.from>=r||i.to<=n){let i=new e(n,t.sliceString(n,r));return hg.set(t,i),i}if(i.from==n&&i.to==r)return i;let{text:a,from:o}=i;return o>n&&(a=t.sliceString(n,o)+a,o=n),i.to<r&&(a+=t.sliceString(i.to,r)),hg.set(t,new e(o,a)),new e(n,a.slice(n-o,r-o))}},_g=class{constructor(e,t,n,r,i){this.text=e,this.to=i,this.done=!1,this.value=fg,this.matchPos=yg(e,r),this.re=new RegExp(t,pg+(n?.ignoreCase?`i`:``)),this.test=n?.test,this.flat=gg.get(e,r,this.chunkEnd(r+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,t=this.re.exec(this.flat.text);if(t&&!t[0]&&t.index==e&&(this.re.lastIndex=e+1,t=this.re.exec(this.flat.text)),t){let e=this.flat.from+t.index,n=e+t[0].length;if((this.flat.to>=this.to||t.index+t[0].length<=this.flat.text.length-10)&&(!this.test||this.test(e,n,t)))return this.value={from:e,to:n,precise:!0,match:t},this.matchPos=yg(this.text,n+ +(e==n)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=gg.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}};typeof Symbol<`u`&&(mg.prototype[Symbol.iterator]=_g.prototype[Symbol.iterator]=function(){return this});function vg(e){try{return new RegExp(e,pg),!0}catch{return!1}}function yg(e,t){if(t>=e.length)return t;let n=e.lineAt(t),r;for(;t<n.to&&(r=n.text.charCodeAt(t-n.from))>=56320&&r<57344;)t++;return t}var bg=e=>{let{state:t}=e,n=String(t.doc.lineAt(e.state.selection.main.head).number),{close:r,result:i}=Rl(e,{label:t.phrase(`Go to line`),input:{type:`text`,name:`line`,value:n},focus:!0,submitLabel:t.phrase(`go`)});return i.then(n=>{let i=n&&/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(n.elements.line.value);if(!i){e.dispatch({effects:r});return}let a=t.doc.lineAt(t.selection.main.head),[,o,s,c,l]=i,u=c?+c.slice(1):0,d=s?+s:a.number;if(s&&l){let e=d/100;o&&(e=e*(o==`-`?-1:1)+a.number/t.doc.lines),d=Math.round(t.doc.lines*e)}else s&&o&&(d=d*(o==`-`?-1:1)+a.number);let f=t.doc.line(Math.max(1,Math.min(t.doc.lines,d))),p=A.cursor(f.from+Math.max(0,Math.min(u,f.length)));e.dispatch({effects:[r,U.scrollIntoView(p.from,{y:`center`})],selection:p})}),!0},xg={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},Sg=j.define({combine(e){return Dn(e,xg,{highlightWordAroundCursor:(e,t)=>e||t,minSelectionLength:Math.min,maxMatches:Math.min})}});function Cg(e){let t=[kg,Og];return e&&t.push(Sg.of(e)),t}var wg=R.mark({class:`cm-selectionMatch`}),Tg=R.mark({class:`cm-selectionMatch cm-selectionMatch-main`});function Eg(e,t,n,r){return(n==0||e(t.sliceDoc(n-1,n))!=N.Word)&&(r==t.doc.length||e(t.sliceDoc(r,r+1))!=N.Word)}function Dg(e,t,n,r){return e(t.sliceDoc(n,n+1))==N.Word&&e(t.sliceDoc(r-1,r))==N.Word}var Og=Ki.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.selectionSet||e.docChanged||e.viewportChanged)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let t=e.state.facet(Sg),{state:n}=e,r=n.selection;if(r.ranges.length>1)return R.none;let i=r.main,a,o=null;if(i.empty){if(!t.highlightWordAroundCursor)return R.none;let e=n.wordAt(i.head);if(!e)return R.none;o=n.charCategorizer(i.head),a=n.sliceDoc(e.from,e.to)}else{let e=i.to-i.from;if(e<t.minSelectionLength||e>200)return R.none;if(t.wholeWords){if(a=n.sliceDoc(i.from,i.to),o=n.charCategorizer(i.head),!(Eg(o,n,i.from,i.to)&&Dg(o,n,i.from,i.to)))return R.none}else if(a=n.sliceDoc(i.from,i.to),!a)return R.none}let s=[];for(let r of e.visibleRanges){let e=new dg(n.doc,a,r.from,r.to);for(;!e.next().done;){let{from:r,to:a}=e.value;if((!o||Eg(o,n,r,a))&&(i.empty&&r<=i.from&&a>=i.to?s.push(Tg.range(r,a)):(r>=i.to||a<=i.from)&&s.push(wg.range(r,a)),s.length>t.maxMatches))return R.none}}return R.set(s)}},{decorations:e=>e.decorations}),kg=U.baseTheme({".cm-selectionMatch":{backgroundColor:`#99ff7780`},".cm-searchMatch .cm-selectionMatch":{backgroundColor:`transparent`}}),Ag=({state:e,dispatch:t})=>{let{selection:n}=e,r=A.create(n.ranges.map(t=>e.wordAt(t.head)||A.cursor(t.head)),n.mainIndex);return r.eq(n)?!1:(t(e.update({selection:r})),!0)};function jg(e,t){let{main:n,ranges:r}=e.selection,i=e.wordAt(n.head),a=i&&i.from==n.from&&i.to==n.to;for(let n=!1,i=new dg(e.doc,t,r[r.length-1].to);;)if(i.next(),i.done){if(n)return null;i=new dg(e.doc,t,0,Math.max(0,r[r.length-1].from-1)),n=!0}else{if(n&&r.some(e=>e.from==i.value.from))continue;if(a){let t=e.wordAt(i.value.from);if(!t||t.from!=i.value.from||t.to!=i.value.to)continue}return i.value}}var Mg=({state:e,dispatch:t})=>{let{ranges:n}=e.selection;if(n.some(e=>e.from===e.to))return Ag({state:e,dispatch:t});let r=e.sliceDoc(n[0].from,n[0].to);if(e.selection.ranges.some(t=>e.sliceDoc(t.from,t.to)!=r))return!1;let i=jg(e,r);return i?(t(e.update({selection:e.selection.addRange(A.range(i.from,i.to),!1),effects:U.scrollIntoView(i.to)})),!0):!1},Ng=j.define({combine(e){return Dn(e,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new p_(e),scrollToMatch:e=>U.scrollIntoView(e)})}}),Pg=class{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||``,this.valid=!!this.search&&(!this.regexp||vg(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord,this.test=e.test}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,(e,t)=>t==`n`?`
`:t==`r`?`\r`:t==`t`?`	`:`\\`)}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord&&this.test==e.test}create(){return this.regexp?new Gg(this):new zg(this)}getCursor(e,t=0,n){let r=e.doc?e:P.create({doc:e});return n??=r.doc.length,this.regexp?Vg(this,r,t,n):Lg(this,r,t,n)}},Fg=class{constructor(e){this.spec=e}};function Ig(e,t,n){return(r,i,a,o)=>n&&!n(r,i,a,o)?!1:e(r>=o&&i<=o+a.length?a.slice(r-o,i-o):t.doc.sliceString(r,i),t,r,i)}function Lg(e,t,n,r){let i;return e.wholeWord&&(i=Rg(t.doc,t.charCategorizer(t.selection.main.head))),e.test&&(i=Ig(e.test,t,i)),new dg(t.doc,e.unquoted,n,r,e.caseSensitive?void 0:e=>e.toLowerCase(),i)}function Rg(e,t){return(n,r,i,a)=>((a>n||a+i.length<r)&&(a=Math.max(0,n-2),i=e.sliceString(a,Math.min(e.length,r+2))),(t(Hg(i,n-a))!=N.Word||t(Ug(i,n-a))!=N.Word)&&(t(Ug(i,r-a))!=N.Word||t(Hg(i,r-a))!=N.Word))}var zg=class extends Fg{constructor(e){super(e)}nextMatch(e,t,n){let r=Lg(this.spec,e,n,e.doc.length).nextOverlapping();if(r.done){let n=Math.min(e.doc.length,t+this.spec.unquoted.length);r=Lg(this.spec,e,0,n).nextOverlapping()}return r.done||r.value.from==t&&r.value.to==n?null:r.value}prevMatchInRange(e,t,n){for(let r=n;;){let n=Math.max(t,r-1e4-this.spec.unquoted.length),i=Lg(this.spec,e,n,r),a=null;for(;!i.nextOverlapping().done;)a=i.value;if(a)return a;if(n==t)return null;r-=1e4}}prevMatch(e,t,n){let r=this.prevMatchInRange(e,0,t);return r||=this.prevMatchInRange(e,Math.max(0,n-this.spec.unquoted.length),e.doc.length),r&&(r.from!=t||r.to!=n)?r:null}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,t){let n=Lg(this.spec,e,0,e.doc.length),r=[];for(;!n.next().done;){if(r.length>=t)return null;r.push(n.value)}return r}highlight(e,t,n,r){let i=Lg(this.spec,e,Math.max(0,t-this.spec.unquoted.length),Math.min(n+this.spec.unquoted.length,e.doc.length));for(;!i.next().done;)r(i.value.from,i.value.to)}};function Bg(e,t,n){return(r,i,a)=>(!n||n(r,i,a))&&e(a[0],t,r,i)}function Vg(e,t,n,r){let i;return e.wholeWord&&(i=Wg(t.charCategorizer(t.selection.main.head))),e.test&&(i=Bg(e.test,t,i)),new mg(t.doc,e.search,{ignoreCase:!e.caseSensitive,test:i},n,r)}function Hg(e,t){return e.slice(xt(e,t,!1),t)}function Ug(e,t){return e.slice(t,xt(e,t))}function Wg(e){return(t,n,r)=>!r[0].length||(e(Hg(r.input,r.index))!=N.Word||e(Ug(r.input,r.index))!=N.Word)&&(e(Ug(r.input,r.index+r[0].length))!=N.Word||e(Hg(r.input,r.index+r[0].length))!=N.Word)}var Gg=class extends Fg{nextMatch(e,t,n){let r=Vg(this.spec,e,n,e.doc.length).next();return r.done&&(r=Vg(this.spec,e,0,t).next()),r.done?null:r.value}prevMatchInRange(e,t,n){for(let r=1;;r++){let i=Math.max(t,n-r*1e4),a=Vg(this.spec,e,i,n),o=null;for(;!a.next().done;)o=a.value;if(o&&(i==t||o.from>i+10))return o;if(i==t)return null}}prevMatch(e,t,n){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g,(t,n)=>{if(n==`&`)return e.match[0];if(n==`$`)return`$`;for(let t=n.length;t>0;t--){let r=+n.slice(0,t);if(r>0&&r<e.match.length)return e.match[r]+n.slice(t)}return t})}matchAll(e,t){let n=Vg(this.spec,e,0,e.doc.length),r=[];for(;!n.next().done;){if(r.length>=t)return null;r.push(n.value)}return r}highlight(e,t,n,r){let i=Vg(this.spec,e,Math.max(0,t-250),Math.min(n+250,e.doc.length));for(;!i.next().done;)r(i.value.from,i.value.to)}},Kg=M.define(),qg=M.define(),Jg=Kt.define({create(e){return new Yg(s_(e).create(),null)},update(e,t){for(let n of t.effects)n.is(Kg)?e=new Yg(n.value.create(),e.panel):n.is(qg)&&(e=new Yg(e.query,n.value?o_:null));return e},provide:e=>Ll.from(e,e=>e.panel)}),Yg=class{constructor(e,t){this.query=e,this.panel=t}},Xg=R.mark({class:`cm-searchMatch`}),Zg=R.mark({class:`cm-searchMatch cm-searchMatch-selected`}),Qg=Ki.fromClass(class{constructor(e){this.view=e,this.decorations=this.highlight(e.state.field(Jg))}update(e){let t=e.state.field(Jg);(t!=e.startState.field(Jg)||e.docChanged||e.selectionSet||e.viewportChanged)&&(this.decorations=this.highlight(t))}highlight({query:e,panel:t}){if(!t||!e.spec.valid)return R.none;let{view:n}=this,r=new Pn;for(let t=0,i=n.visibleRanges,a=i.length;t<a;t++){let{from:o,to:s}=i[t];for(;t<a-1&&s>i[t+1].from-500;)s=i[++t].to;e.highlight(n.state,o,s,(e,t)=>{let i=n.state.selection.ranges.some(n=>n.from==e&&n.to==t);r.add(e,t,i?Zg:Xg)})}return r.finish()}},{decorations:e=>e.decorations});function $g(e){return t=>{let n=t.state.field(Jg,!1);return n&&n.query.spec.valid?e(t,n):u_(t)}}var e_=$g((e,{query:t})=>{let{to:n}=e.state.selection.main,r=t.nextMatch(e.state,n,n);if(!r)return!1;let i=A.single(r.from,r.to),a=e.state.facet(Ng);return e.dispatch({selection:i,effects:[__(e,r),a.scrollToMatch(i.main,e)],userEvent:`select.search`}),l_(e),!0}),t_=$g((e,{query:t})=>{let{state:n}=e,{from:r}=n.selection.main,i=t.prevMatch(n,r,r);if(!i)return!1;let a=A.single(i.from,i.to),o=e.state.facet(Ng);return e.dispatch({selection:a,effects:[__(e,i),o.scrollToMatch(a.main,e)],userEvent:`select.search`}),l_(e),!0}),n_=$g((e,{query:t})=>{let n=t.matchAll(e.state,1e3);return!n||!n.length?!1:(e.dispatch({selection:A.create(n.map(e=>A.range(e.from,e.to))),userEvent:`select.search.matches`}),!0)}),r_=({state:e,dispatch:t})=>{let n=e.selection;if(n.ranges.length>1||n.main.empty)return!1;let{from:r,to:i}=n.main,a=[],o=0;for(let t=new dg(e.doc,e.sliceDoc(r,i));!t.next().done;){if(a.length>1e3)return!1;t.value.from==r&&(o=a.length),a.push(A.range(t.value.from,t.value.to))}return t(e.update({selection:A.create(a,o),userEvent:`select.search.matches`})),!0},i_=$g((e,{query:t})=>{let{state:n}=e,{from:r,to:i}=n.selection.main;if(n.readOnly)return!1;let a=t.nextMatch(n,r,r);if(!a)return!1;let o=a,s=[],c,l,u=[];o.precise?o.from==r&&o.to==i&&(l=n.toText(t.getReplacement(o)),s.push({from:o.from,to:o.to,insert:l}),o=t.nextMatch(n,o.from,o.to),u.push(U.announce.of(n.phrase(`replaced match on line $`,n.doc.lineAt(r).number)+`.`))):o=t.nextMatch(n,o.from,o.to);let d=e.state.changes(s);return o&&(c=A.single(o.from,o.to).map(d),u.push(__(e,o)),u.push(n.facet(Ng).scrollToMatch(c.main,e))),e.dispatch({changes:d,selection:c,effects:u,userEvent:`input.replace`}),!0}),a_=$g((e,{query:t})=>{if(e.state.readOnly)return!1;let n=[];for(let r of t.matchAll(e.state,1e9)){let{from:e,to:i,precise:a}=r;a&&n.push({from:e,to:i,insert:t.getReplacement(r)})}if(!n.length)return!1;let r=e.state.phrase(`replaced $ matches`,n.length)+`.`;return e.dispatch({changes:n,effects:U.announce.of(r),userEvent:`input.replace.all`}),!0});function o_(e){return e.state.facet(Ng).createPanel(e)}function s_(e,t){let n=e.selection.main,r=n.empty||n.to>n.from+100?``:e.sliceDoc(n.from,n.to);if(t&&!r)return t;let i=e.facet(Ng);return new Pg({search:t?.literal??i.literal?r:r.replace(/\n/g,`\\n`),caseSensitive:t?.caseSensitive??i.caseSensitive,literal:t?.literal??i.literal,regexp:t?.regexp??i.regexp,wholeWord:t?.wholeWord??i.wholeWord})}function c_(e){let t=Nl(e,o_);return t&&t.dom.querySelector(`[main-field]`)}function l_(e){let t=c_(e);t&&t==e.root.activeElement&&t.select()}var u_=e=>{let t=e.state.field(Jg,!1);if(t&&t.panel){let n=c_(e);if(n&&n!=e.root.activeElement){let r=s_(e.state,t.query.spec);r.valid&&e.dispatch({effects:Kg.of(r)}),n.focus(),n.select()}}else e.dispatch({effects:[qg.of(!0),t?Kg.of(s_(e.state,t.query.spec)):M.appendConfig.of(y_)]});return!0},d_=e=>{let t=e.state.field(Jg,!1);if(!t||!t.panel)return!1;let n=Nl(e,o_);return n&&n.dom.contains(e.root.activeElement)&&e.focus(),e.dispatch({effects:qg.of(!1)}),!0},f_=[{key:`Mod-f`,run:u_,scope:`editor search-panel`},{key:`F3`,run:e_,shift:t_,scope:`editor search-panel`,preventDefault:!0},{key:`Mod-g`,run:e_,shift:t_,scope:`editor search-panel`,preventDefault:!0},{key:`Escape`,run:d_,scope:`editor search-panel`},{key:`Mod-Shift-l`,run:r_},{key:`Mod-Alt-g`,run:bg},{key:`Mod-d`,run:Mg,preventDefault:!0}],p_=class{constructor(e){this.view=e;let t=this.query=e.state.field(Jg).query.spec;this.commit=this.commit.bind(this),this.searchField=I(`input`,{value:t.search,placeholder:m_(e,`Find`),"aria-label":m_(e,`Find`),class:`cm-textfield`,name:`search`,form:``,"main-field":`true`,onchange:this.commit,onkeyup:this.commit}),this.replaceField=I(`input`,{value:t.replace,placeholder:m_(e,`Replace`),"aria-label":m_(e,`Replace`),class:`cm-textfield`,name:`replace`,form:``,onchange:this.commit,onkeyup:this.commit}),this.caseField=I(`input`,{type:`checkbox`,name:`case`,form:``,checked:t.caseSensitive,onchange:this.commit}),this.reField=I(`input`,{type:`checkbox`,name:`re`,form:``,checked:t.regexp,onchange:this.commit}),this.wordField=I(`input`,{type:`checkbox`,name:`word`,form:``,checked:t.wholeWord,onchange:this.commit});function n(e,t,n){return I(`button`,{class:`cm-button`,name:e,onclick:t,type:`button`},n)}this.dom=I(`div`,{onkeydown:e=>this.keydown(e),class:`cm-search`},[this.searchField,n(`next`,()=>e_(e),[m_(e,`next`)]),n(`prev`,()=>t_(e),[m_(e,`previous`)]),n(`select`,()=>n_(e),[m_(e,`all`)]),I(`label`,null,[this.caseField,m_(e,`match case`)]),I(`label`,null,[this.reField,m_(e,`regexp`)]),I(`label`,null,[this.wordField,m_(e,`by word`)]),...e.state.readOnly?[]:[I(`br`),this.replaceField,n(`replace`,()=>i_(e),[m_(e,`replace`)]),n(`replaceAll`,()=>a_(e),[m_(e,`replace all`)])],I(`button`,{name:`close`,onclick:()=>d_(e),"aria-label":m_(e,`close`),type:`button`},[`×`])])}commit(){let e=new Pg({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:Kg.of(e)}))}keydown(e){dc(this.view,e,`search-panel`)?e.preventDefault():e.keyCode==13&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?t_:e_)(this.view)):e.keyCode==13&&e.target==this.replaceField&&(e.preventDefault(),i_(this.view))}update(e){for(let t of e.transactions)for(let e of t.effects)e.is(Kg)&&!e.value.eq(this.query)&&this.setQuery(e.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(Ng).top}};function m_(e,t){return e.state.phrase(t)}var h_=30,g_=/[\s\.,:;?!]/;function __(e,{from:t,to:n}){let r=e.state.doc.lineAt(t),i=e.state.doc.lineAt(n).to,a=Math.max(r.from,t-h_),o=Math.min(i,n+h_),s=e.state.sliceDoc(a,o);if(a!=r.from){for(let e=0;e<h_;e++)if(!g_.test(s[e+1])&&g_.test(s[e])){s=s.slice(e);break}}if(o!=i){for(let e=s.length-1;e>s.length-h_;e--)if(!g_.test(s[e-1])&&g_.test(s[e])){s=s.slice(0,e);break}}return U.announce.of(`${e.state.phrase(`current match`)}. ${s} ${e.state.phrase(`on line`)} ${r.number}.`)}var v_=U.baseTheme({".cm-panel.cm-search":{padding:`2px 6px 4px`,position:`relative`,"& [name=close]":{position:`absolute`,top:`0`,right:`4px`,backgroundColor:`inherit`,border:`none`,font:`inherit`,padding:0,margin:0},"& input, & button, & label":{margin:`.2em .6em .2em 0`},"& input[type=checkbox]":{marginRight:`.2em`},"& label":{fontSize:`80%`,whiteSpace:`pre`}},"&light .cm-searchMatch":{backgroundColor:`#ffff0054`},"&dark .cm-searchMatch":{backgroundColor:`#00ffff8a`},"&light .cm-searchMatch-selected":{backgroundColor:`#ff6a0054`},"&dark .cm-searchMatch-selected":{backgroundColor:`#ff00ff8a`}}),y_=[Jg,Yt.low(Qg),v_],b_=class{constructor(e,t,n,r){this.state=e,this.pos=t,this.explicit=n,this.view=r,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(e){let t=X(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),r=t.text.slice(n-t.from,this.pos-t.from),i=r.search(D_(e,!1));return i<0?null:{from:n+i,to:this.pos,text:r.slice(i)}}get aborted(){return this.abortListeners==null}addEventListener(e,t,n){e==`abort`&&this.abortListeners&&(this.abortListeners.push(t),n&&n.onDocChange&&(this.abortOnDocChange=!0))}};function x_(e){let t=Object.keys(e).join(``),n=/\w/.test(t);return n&&(t=t.replace(/\w/g,``)),`[${n?`\\w`:``}${t.replace(/[^\w\s]/g,`\\$&`)}]`}function S_(e){let t=Object.create(null),n=Object.create(null);for(let{label:r}of e){t[r[0]]=!0;for(let e=1;e<r.length;e++)n[r[e]]=!0}let r=x_(t)+x_(n)+`*$`;return[RegExp(`^`+r),new RegExp(r)]}function C_(e){let t=e.map(e=>typeof e==`string`?{label:e}:e),[n,r]=t.every(e=>/^\w+$/.test(e.label))?[/\w*$/,/\w+$/]:S_(t);return e=>{let i=e.matchBefore(r);return i||e.explicit?{from:i?i.from:e.pos,options:t,validFor:n}:null}}function w_(e,t){return n=>{for(let t=X(n.state).resolveInner(n.pos,-1);t;t=t.parent){if(e.indexOf(t.name)>-1)return null;if(t.type.isTop)break}return t(n)}}var T_=class{constructor(e,t,n,r){this.completion=e,this.source=t,this.match=n,this.score=r}};function E_(e){return e.selection.main.from}function D_(e,t){let{source:n}=e,r=t&&n[0]!=`^`,i=n[n.length-1]!=`$`;return!r&&!i?e:RegExp(`${r?`^`:``}(?:${n})${i?`$`:``}`,e.flags??(e.ignoreCase?`i`:``))}var O_=dn.define();function k_(e,t,n,r){let{main:i}=e.selection,a=n-i.from,o=r-i.from;return{...e.changeByRange(s=>{if(s!=i&&n!=r&&e.sliceDoc(s.from+a,s.from+o)!=e.sliceDoc(n,r))return{range:s};let c=e.toText(t);return{changes:{from:s.from+a,to:r==i.from?s.to:s.from+o,insert:c},range:A.cursor(s.from+a+c.length)}}),scrollIntoView:!0,userEvent:`input.complete`}}var A_=new WeakMap;function j_(e){if(!Array.isArray(e))return e;let t=A_.get(e);return t||A_.set(e,t=C_(e)),t}var M_=M.define(),N_=M.define(),P_=class{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[];for(let t=0;t<e.length;){let n=wt(e,t),r=Et(n);this.chars.push(n);let i=e.slice(t,t+r),a=i.toUpperCase();this.folded.push(wt(a==i?i.toLowerCase():a,0)),t+=r}this.astral=e.length!=this.chars.length}ret(e,t){return this.score=e,this.matched=t,this}match(e){if(this.pattern.length==0)return this.ret(-100,[]);if(e.length<this.pattern.length)return null;let{chars:t,folded:n,any:r,precise:i,byWord:a}=this;if(t.length==1){let r=wt(e,0),i=Et(r),a=i==e.length?0:-100;if(r!=t[0])if(r==n[0])a+=-200;else return null;return this.ret(a,[0,i])}let o=e.indexOf(this.pattern);if(o==0)return this.ret(e.length==this.pattern.length?0:-100,[0,this.pattern.length]);let s=t.length,c=0;if(o<0){for(let i=0,a=Math.min(e.length,200);i<a&&c<s;){let a=wt(e,i);(a==t[c]||a==n[c])&&(r[c++]=i),i+=Et(a)}if(c<s)return null}let l=0,u=0,d=!1,f=0,p=-1,m=-1,h=/[a-z]/.test(e),g=!0;for(let r=0,c=Math.min(e.length,200),_=0;r<c&&u<s;){let c=wt(e,r);o<0&&(l<s&&c==t[l]&&(i[l++]=r),f<s&&(c==t[f]||c==n[f]?(f==0&&(p=r),m=r+1,f++):f=0));let v,y=c<255?c>=48&&c<=57||c>=97&&c<=122?2:+(c>=65&&c<=90):(v=Tt(c))==v.toLowerCase()?v==v.toUpperCase()?0:2:1;(!r||y==1&&h||_==0&&y!=0)&&(t[u]==c||n[u]==c&&(d=!0)?a[u++]=r:a.length&&(g=!1)),_=y,r+=Et(c)}return u==s&&a[0]==0&&g?this.result(-100+(d?-200:0),a,e):f==s&&p==0?this.ret(-200-e.length+(m==e.length?0:-100),[0,m]):o>-1?this.ret(-700-e.length,[o,o+this.pattern.length]):f==s?this.ret(-900-e.length,[p,m]):u==s?this.result(-100+(d?-200:0)+-700+(g?0:-1100),a,e):t.length==2?null:this.result((r[0]?-700:0)+-200+-1100,r,e)}result(e,t,n){let r=[],i=0;for(let e of t){let t=e+(this.astral?Et(wt(n,e)):1);i&&r[i-1]==e?r[i-1]=t:(r[i++]=e,r[i++]=t)}return this.ret(e-n.length,r)}},F_=class{constructor(e){this.pattern=e,this.matched=[],this.score=0,this.folded=e.toLowerCase()}match(e){if(e.length<this.pattern.length)return null;let t=e.slice(0,this.pattern.length),n=t==this.pattern?0:t.toLowerCase()==this.folded?-200:null;return n==null?null:(this.matched=[0,t.length],this.score=n+(e.length==this.pattern.length?0:-100),this)}},I_=j.define({combine(e){return Dn(e,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>``,optionClass:()=>``,aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:R_,filterStrict:!1,compareCompletions:(e,t)=>(e.sortText||e.label).localeCompare(t.sortText||t.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>n=>L_(e(n),t(n)),optionClass:(e,t)=>n=>L_(e(n),t(n)),addToOptions:(e,t)=>e.concat(t),filterStrict:(e,t)=>e||t})}});function L_(e,t){return e?t?e+` `+t:e:t}function R_(e,t,n,r,i,a){let o=e.textDirection==z.RTL,s=o,c=!1,l=`top`,u,d,f=t.left-i.left,p=i.right-t.right,m=r.right-r.left,h=r.bottom-r.top;if(s&&f<Math.min(m,p)?s=!1:!s&&p<Math.min(m,f)&&(s=!0),m<=(s?f:p))u=Math.max(i.top,Math.min(n.top,i.bottom-h))-t.top,d=Math.min(400,s?f:p);else{c=!0,d=Math.min(400,(o?t.right:i.right-t.left)-30);let e=i.bottom-t.bottom;e>=h||e>t.top?u=n.bottom-t.top:(l=`bottom`,u=t.bottom-n.top)}let g=(t.bottom-t.top)/a.offsetHeight,_=(t.right-t.left)/a.offsetWidth;return{style:`${l}: ${u/g}px; max-width: ${d/_}px`,class:`cm-completionInfo-`+(c?o?`left-narrow`:`right-narrow`:s?`left`:`right`)}}var z_=M.define();function B_(e){let t=e.addToOptions.slice();return e.icons&&t.push({render(e){let t=document.createElement(`div`);return t.classList.add(`cm-completionIcon`),e.type&&t.classList.add(...e.type.split(/\s+/g).map(e=>`cm-completionIcon-`+e)),t.setAttribute(`aria-hidden`,`true`),t},position:20}),t.push({render(e,t,n,r){let i=document.createElement(`span`);i.className=`cm-completionLabel`;let a=e.displayLabel||e.label,o=0;for(let e=0;e<r.length;){let t=r[e++],n=r[e++];t>o&&i.appendChild(document.createTextNode(a.slice(o,t)));let s=i.appendChild(document.createElement(`span`));s.appendChild(document.createTextNode(a.slice(t,n))),s.className=`cm-completionMatchedText`,o=n}return o<a.length&&i.appendChild(document.createTextNode(a.slice(o))),i},position:50},{render(e){if(!e.detail)return null;let t=document.createElement(`span`);return t.className=`cm-completionDetail`,t.textContent=e.detail,t},position:80}),t.sort((e,t)=>e.position-t.position).map(e=>e.render)}function V_(e,t,n){if(e<=n)return{from:0,to:e};if(t<0&&(t=0),t<=e>>1){let e=Math.floor(t/n);return{from:e*n,to:(e+1)*n}}let r=Math.ceil((e-t)/n);return{from:e-r*n,to:e-(r-1)*n}}var H_=class{constructor(e,t,n){this.view=e,this.stateField=t,this.applyCompletion=n,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:e=>this.placeInfo(e),key:this},this.space=null,this.currentClass=``;let r=e.state.field(t),{options:i,selected:a}=r.open,o=e.state.facet(I_);this.optionContent=B_(o),this.optionClass=o.optionClass,this.tooltipClass=o.tooltipClass,this.range=V_(i.length,a,o.maxRenderedOptions),this.dom=document.createElement(`div`),this.dom.className=`cm-tooltip-autocomplete`,this.updateTooltipClass(e.state),this.dom.addEventListener(`mousedown`,n=>{let{options:r}=e.state.field(t).open;for(let t=n.target,i;t&&t!=this.dom;t=t.parentNode)if(t.nodeName==`LI`&&(i=/-(\d+)$/.exec(t.id))&&+i[1]<r.length){this.applyCompletion(e,r[+i[1]]),n.preventDefault();return}if(n.target==this.list){let t=this.list.classList.contains(`cm-completionListIncompleteTop`)&&n.clientY<this.list.firstChild.getBoundingClientRect().top?this.range.from-1:this.list.classList.contains(`cm-completionListIncompleteBottom`)&&n.clientY>this.list.lastChild.getBoundingClientRect().bottom?this.range.to:null;t!=null&&(e.dispatch({effects:z_.of(t)}),n.preventDefault())}}),this.dom.addEventListener(`focusout`,t=>{let n=e.state.field(this.stateField,!1);n&&n.tooltip&&e.state.facet(I_).closeOnBlur&&t.relatedTarget!=e.contentDOM&&e.dispatch({effects:N_.of(null)})}),this.showOptions(i,r.id)}mount(){this.updateSel()}showOptions(e,t){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e,t,this.range)),this.list.addEventListener(`scroll`,()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(e){let t=e.state.field(this.stateField),n=e.startState.field(this.stateField);if(this.updateTooltipClass(e.state),t!=n){let{options:r,selected:i,disabled:a}=t.open;(!n.open||n.open.options!=r)&&(this.range=V_(r.length,i,e.state.facet(I_).maxRenderedOptions),this.showOptions(r,t.id)),this.updateSel(),a!=n.open?.disabled&&this.dom.classList.toggle(`cm-tooltip-autocomplete-disabled`,!!a)}}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let e of this.currentClass.split(` `))e&&this.dom.classList.remove(e);for(let e of t.split(` `))e&&this.dom.classList.add(e);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;(t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=V_(t.options.length,t.selected,this.view.state.facet(I_).maxRenderedOptions),this.showOptions(t.options,e.id));let n=this.updateSelectedOption(t.selected);if(n){this.destroyInfo();let{completion:r}=t.options[t.selected],{info:i}=r;if(!i)return;let a=typeof i==`string`?document.createTextNode(i):i(r);if(!a)return;`then`in a?a.then(t=>{t&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(t,r)}).catch(e=>Hi(this.view.state,e,`completion info`)):(this.addInfoPane(a,r),n.setAttribute(`aria-describedby`,this.info.id))}}addInfoPane(e,t){this.destroyInfo();let n=this.info=document.createElement(`div`);if(n.className=`cm-tooltip cm-completionInfo`,n.id=`cm-completionInfo-`+Math.floor(Math.random()*65535).toString(16),e.nodeType!=null)n.appendChild(e),this.infoDestroy=null;else{let{dom:t,destroy:r}=e;n.appendChild(t),this.infoDestroy=r||null}this.dom.appendChild(n),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(e){let t=null;for(let n=this.list.firstChild,r=this.range.from;n;n=n.nextSibling,r++)n.nodeName!=`LI`||!n.id?r--:r==e?n.hasAttribute(`aria-selected`)||(n.setAttribute(`aria-selected`,`true`),t=n):n.hasAttribute(`aria-selected`)&&(n.removeAttribute(`aria-selected`),n.removeAttribute(`aria-describedby`));return t&&W_(this.list,t),t}measureInfo(){let e=this.dom.querySelector(`[aria-selected]`);if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),n=this.info.getBoundingClientRect(),r=e.getBoundingClientRect(),i=this.space;if(!i){let e=this.dom.ownerDocument.documentElement;i={left:0,top:0,right:e.clientWidth,bottom:e.clientHeight}}return r.top>Math.min(i.bottom,t.bottom)-10||r.bottom<Math.max(i.top,t.top)+10?null:this.view.state.facet(I_).positionInfo(this.view,t,r,n,i,this.dom)}placeInfo(e){this.info&&(e?(e.style&&(this.info.style.cssText=e.style),this.info.className=`cm-tooltip cm-completionInfo `+(e.class||``)):this.info.style.cssText=`top: -1e6px`)}createListBox(e,t,n){let r=document.createElement(`ul`);r.id=t,r.setAttribute(`role`,`listbox`),r.setAttribute(`aria-expanded`,`true`),r.setAttribute(`aria-label`,this.view.state.phrase(`Completions`)),r.addEventListener(`mousedown`,e=>{e.target==r&&e.preventDefault()});let i=null;for(let a=n.from;a<n.to;a++){let{completion:o,match:s}=e[a],{section:c}=o;if(c){let e=typeof c==`string`?c:c.name;if(e!=i&&(a>n.from||n.from==0))if(i=e,typeof c!=`string`&&c.header)r.appendChild(c.header(c));else{let t=r.appendChild(document.createElement(`completion-section`));t.textContent=e}}let l=r.appendChild(document.createElement(`li`));l.id=t+`-`+a,l.setAttribute(`role`,`option`);let u=this.optionClass(o);u&&(l.className=u);for(let e of this.optionContent){let t=e(o,this.view.state,this.view,s);t&&l.appendChild(t)}}return n.from&&r.classList.add(`cm-completionListIncompleteTop`),n.to<e.length&&r.classList.add(`cm-completionListIncompleteBottom`),r}destroyInfo(){this.info&&=(this.infoDestroy&&this.infoDestroy(),this.info.remove(),null)}destroy(){this.destroyInfo()}};function U_(e,t){return n=>new H_(n,e,t)}function W_(e,t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.height/e.offsetHeight;r.top<n.top?e.scrollTop-=(n.top-r.top)/i:r.bottom>n.bottom&&(e.scrollTop+=(r.bottom-n.bottom)/i)}function G_(e){return(e.boost||0)*100+(e.apply?10:0)+(e.info?5:0)+ +!!e.type}function K_(e,t){let n=[],r=null,i=null,a=e=>{n.push(e);let{section:t}=e.completion;if(t){r||=[];let e=typeof t==`string`?t:t.name;r.some(t=>t.name==e)||r.push(typeof t==`string`?{name:e}:t)}},o=t.facet(I_);for(let r of e)if(r.hasResult()){let e=r.result.getMatch;if(r.result.filter===!1)for(let t of r.result.options)a(new T_(t,r.source,e?e(t):[],1e9-n.length));else{let n=t.sliceDoc(r.from,r.to),s,c=o.filterStrict?new F_(n):new P_(n);for(let t of r.result.options)if(s=c.match(t.label)){let n=t.displayLabel?e?e(t,s.matched):[]:s.matched,o=s.score+(t.boost||0);if(a(new T_(t,r.source,n,o)),typeof t.section==`object`&&t.section.rank===`dynamic`){let{name:e}=t.section;i||=Object.create(null),i[e]=Math.max(o,i[e]||-1e9)}}}}if(r){let e=Object.create(null),t=0,a=(e,t)=>(e.rank===`dynamic`&&t.rank===`dynamic`?i[t.name]-i[e.name]:0)||(typeof e.rank==`number`?e.rank:1e9)-(typeof t.rank==`number`?t.rank:1e9)||(e.name<t.name?-1:1);for(let n of r.sort(a))t-=1e5,e[n.name]=t;for(let t of n){let{section:n}=t.completion;n&&(t.score+=e[typeof n==`string`?n:n.name])}}let s=[],c=null,l=o.compareCompletions;for(let e of n.sort((e,t)=>t.score-e.score||l(e.completion,t.completion))){let t=e.completion;!c||c.label!=t.label||c.detail!=t.detail||c.type!=null&&t.type!=null&&c.type!=t.type||c.apply!=t.apply||c.boost!=t.boost?s.push(e):G_(e.completion)>G_(c)&&(s[s.length-1]=e),c=e.completion}return s}var q_=class e{constructor(e,t,n,r,i,a){this.options=e,this.attrs=t,this.tooltip=n,this.timestamp=r,this.selected=i,this.disabled=a}setSelected(t,n){return t==this.selected||t>=this.options.length?this:new e(this.options,Q_(n,t),this.tooltip,this.timestamp,t,this.disabled)}static build(t,n,r,i,a,o){if(i&&!o&&t.some(e=>e.isPending))return i.setDisabled();let s=K_(t,n);if(!s.length)return i&&t.some(e=>e.isPending)?i.setDisabled():null;let c=n.facet(I_).selectOnOpen?0:-1;if(i&&i.selected!=c&&i.selected!=-1){let e=i.options[i.selected].completion;for(let t=0;t<s.length;t++)if(s[t].completion==e){c=t;break}}return new e(s,Q_(r,c),{pos:t.reduce((e,t)=>t.hasResult()?Math.min(e,t.from):e,1e8),create:sv,above:a.aboveCursor},i?i.timestamp:Date.now(),c,!1)}map(t){return new e(this.options,this.attrs,{...this.tooltip,pos:t.mapPos(this.tooltip.pos)},this.timestamp,this.selected,this.disabled)}setDisabled(){return new e(this.options,this.attrs,this.tooltip,this.timestamp,this.selected,!0)}},J_=class e{constructor(e,t,n){this.active=e,this.id=t,this.open=n}static start(){return new e($_,`cm-ac-`+Math.floor(Math.random()*2e6).toString(36),null)}update(t){let{state:n}=t,r=n.facet(I_),i=(r.override||n.languageDataAt(`autocomplete`,E_(n)).map(j_)).map(e=>(this.active.find(t=>t.source==e)||new tv(e,+!!this.active.some(e=>e.state!=0))).update(t,r));i.length==this.active.length&&i.every((e,t)=>e==this.active[t])&&(i=this.active);let a=this.open,o=t.effects.some(e=>e.is(iv));a&&t.docChanged&&(a=a.map(t.changes)),t.selection||i.some(e=>e.hasResult()&&t.changes.touchesRange(e.from,e.to))||!Y_(i,this.active)||o?a=q_.build(i,n,this.id,a,r,o):a&&a.disabled&&!i.some(e=>e.isPending)&&(a=null),!a&&i.every(e=>!e.isPending)&&i.some(e=>e.hasResult())&&(i=i.map(e=>e.hasResult()?new tv(e.source,0):e));for(let e of t.effects)e.is(z_)&&(a&&=a.setSelected(e.value,this.id));return i==this.active&&a==this.open?this:new e(i,this.id,a)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?X_:Z_}};function Y_(e,t){if(e==t)return!0;for(let n=0,r=0;;){for(;n<e.length&&!e[n].hasResult();)n++;for(;r<t.length&&!t[r].hasResult();)r++;let i=n==e.length,a=r==t.length;if(i||a)return i==a;if(e[n++].result!=t[r++].result)return!1}}var X_={"aria-autocomplete":`list`},Z_={};function Q_(e,t){let n={"aria-autocomplete":`list`,"aria-haspopup":`listbox`,"aria-controls":e};return t>-1&&(n[`aria-activedescendant`]=e+`-`+t),n}var $_=[];function ev(e,t){if(e.isUserEvent(`input.complete`)){let n=e.annotation(O_);if(n&&t.activateOnCompletion(n))return 12}let n=e.isUserEvent(`input.type`);return n&&t.activateOnTyping?5:n?1:e.isUserEvent(`delete.backward`)?2:e.selection?8:e.docChanged?16:0}var tv=class e{constructor(e,t,n=!1){this.source=e,this.state=t,this.explicit=n}hasResult(){return!1}get isPending(){return this.state==1}update(t,n){let r=ev(t,n),i=this;(r&8||r&16&&this.touches(t))&&(i=new e(i.source,0)),r&4&&i.state==0&&(i=new e(this.source,1)),i=i.updateFor(t,r);for(let n of t.effects)if(n.is(M_))i=new e(i.source,1,n.value);else if(n.is(N_))i=new e(i.source,0);else if(n.is(iv))for(let e of n.value)e.source==i.source&&(i=e);return i}updateFor(e,t){return this.map(e.changes)}map(e){return this}touches(e){return e.changes.touchesRange(E_(e.state))}},nv=class e extends tv{constructor(e,t,n,r,i,a){super(e,3,t),this.limit=n,this.result=r,this.from=i,this.to=a}hasResult(){return!0}updateFor(t,n){if(!(n&3))return this.map(t.changes);let r=this.result;r.map&&!t.changes.empty&&(r=r.map(r,t.changes));let i=t.changes.mapPos(this.from),a=t.changes.mapPos(this.to,1),o=E_(t.state);if(o>a||!r||n&2&&(E_(t.startState)==this.from||o<this.limit))return new tv(this.source,n&4?1:0);let s=t.changes.mapPos(this.limit);return rv(r.validFor,t.state,i,a)?new e(this.source,this.explicit,s,r,i,a):r.update&&(r=r.update(r,i,a,new b_(t.state,o,!1)))?new e(this.source,this.explicit,s,r,r.from,r.to??E_(t.state)):new tv(this.source,1,this.explicit)}map(t){if(t.empty)return this;let n=this.result.map?this.result.map(this.result,t):this.result;return n?new e(this.source,this.explicit,t.mapPos(this.limit),n,t.mapPos(this.from),t.mapPos(this.to,1)):new tv(this.source,0)}touches(e){return e.changes.touchesRange(this.from,this.to)}};function rv(e,t,n,r){if(!e)return!1;let i=t.sliceDoc(n,r);return typeof e==`function`?e(i,n,r,t):D_(e,!0).test(i)}var iv=M.define({map(e,t){return e.map(e=>e.map(t))}}),av=Kt.define({create(){return J_.start()},update(e,t){return e.update(t)},provide:e=>[yl.from(e,e=>e.tooltip),U.contentAttributes.from(e,e=>e.attrs)]});function ov(e,t){let n=t.completion.apply||t.completion.label,r=e.state.field(av).active.find(e=>e.source==t.source);return r instanceof nv?(typeof n==`string`?e.dispatch({...k_(e.state,n,r.from,r.to),annotations:O_.of(t.completion)}):n(e,t.completion,r.from,r.to),!0):!1}var sv=U_(av,ov);function cv(e,t=`option`){return n=>{let r=n.state.field(av,!1);if(!r||!r.open||r.open.disabled||Date.now()-r.open.timestamp<n.state.facet(I_).interactionDelay)return!1;let i=1,a;t==`page`&&(a=Al(n,r.open.tooltip))&&(i=Math.max(2,Math.floor(a.dom.offsetHeight/a.dom.querySelector(`li`).offsetHeight)-1));let{length:o}=r.open.options,s=r.open.selected>-1?r.open.selected+i*(e?1:-1):e?0:o-1;return s<0?s=t==`page`?0:o-1:s>=o&&(s=t==`page`?o-1:0),n.dispatch({effects:z_.of(s)}),!0}}var lv=e=>{let t=e.state.field(av,!1);return e.state.readOnly||!t||!t.open||t.open.selected<0||t.open.disabled||Date.now()-t.open.timestamp<e.state.facet(I_).interactionDelay?!1:ov(e,t.open.options[t.open.selected])},uv=e=>e.state.field(av,!1)?(e.dispatch({effects:M_.of(!0)}),!0):!1,dv=e=>{let t=e.state.field(av,!1);return!t||!t.active.some(e=>e.state!=0)?!1:(e.dispatch({effects:N_.of(null)}),!0)},fv=class{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}},pv=50,mv=1e3,hv=Ki.fromClass(class{constructor(e){this.view=e,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0;for(let t of e.state.field(av).active)t.isPending&&this.startQuery(t)}update(e){let t=e.state.field(av),n=e.state.facet(I_);if(!e.selectionSet&&!e.docChanged&&e.startState.field(av)==t)return;let r=e.transactions.some(e=>{let t=ev(e,n);return t&8||(e.selection||e.docChanged)&&!(t&3)});for(let t=0;t<this.running.length;t++){let n=this.running[t];if(r||n.context.abortOnDocChange&&e.docChanged||n.updates.length+e.transactions.length>pv&&Date.now()-n.time>mv){for(let e of n.context.abortListeners)try{e()}catch(e){Hi(this.view.state,e)}n.context.abortListeners=null,this.running.splice(t--,1)}else n.updates.push(...e.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),e.transactions.some(e=>e.effects.some(e=>e.is(M_)))&&(this.pendingStart=!0);let i=this.pendingStart?50:n.activateOnTypingDelay;if(this.debounceUpdate=t.active.some(e=>e.isPending&&!this.running.some(t=>t.active.source==e.source))?setTimeout(()=>this.startUpdate(),i):-1,this.composing!=0)for(let t of e.transactions)t.isUserEvent(`input.type`)?this.composing=2:this.composing==2&&t.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1;let{state:e}=this.view,t=e.field(av);for(let e of t.active)e.isPending&&!this.running.some(t=>t.active.source==e.source)&&this.startQuery(e);this.running.length&&t.open&&t.open.disabled&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(I_).updateSyncTime))}startQuery(e){let{state:t}=this.view,n=new b_(t,E_(t),e.explicit,this.view),r=new fv(e,n);this.running.push(r),Promise.resolve(e.source(n)).then(e=>{r.context.aborted||(r.done=e||null,this.scheduleAccept())},e=>{this.view.dispatch({effects:N_.of(null)}),Hi(this.view.state,e)})}scheduleAccept(){this.running.every(e=>e.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(I_).updateSyncTime))}accept(){this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(I_),n=this.view.state.field(av);for(let r=0;r<this.running.length;r++){let i=this.running[r];if(i.done===void 0)continue;if(this.running.splice(r--,1),i.done){let n=E_(i.updates.length?i.updates[0].startState:this.view.state),r=Math.min(n,i.done.from+ +!i.active.explicit),a=new nv(i.active.source,i.active.explicit,r,i.done,i.done.from,i.done.to??n);for(let e of i.updates)a=a.update(e,t);if(a.hasResult()){e.push(a);continue}}let a=n.active.find(e=>e.source==i.active.source);if(a&&a.isPending)if(i.done==null){let n=new tv(i.active.source,0);for(let e of i.updates)n=n.update(e,t);n.isPending||e.push(n)}else this.startQuery(a)}(e.length||n.open&&n.open.disabled)&&this.view.dispatch({effects:iv.of(e)})}},{eventHandlers:{blur(e){let t=this.view.state.field(av,!1);if(t&&t.tooltip&&this.view.state.facet(I_).closeOnBlur){let n=t.open&&Al(this.view,t.open.tooltip);(!n||!n.dom.contains(e.relatedTarget))&&setTimeout(()=>this.view.dispatch({effects:N_.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:M_.of(!1)}),20),this.composing=0}}}),gv=typeof navigator==`object`&&/Win/.test(navigator.platform),_v=Yt.highest(U.domEventHandlers({keydown(e,t){let n=t.state.field(av,!1);if(!n||!n.open||n.open.disabled||n.open.selected<0||e.key.length>1||e.ctrlKey&&!(gv&&e.altKey)||e.metaKey)return!1;let r=n.open.options[n.open.selected],i=n.active.find(e=>e.source==r.source),a=r.completion.commitCharacters||i.result.commitCharacters;return a&&a.indexOf(e.key)>-1&&ov(t,r),!1}})),vv=U.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:`monospace`,whiteSpace:`nowrap`,overflow:`hidden auto`,maxWidth_fallback:`700px`,maxWidth:`min(700px, 95vw)`,minWidth:`250px`,maxHeight:`10em`,height:`100%`,listStyle:`none`,margin:0,padding:0,"& > li, & > completion-section":{padding:`1px 3px`,lineHeight:1.2},"& > li":{overflowX:`hidden`,textOverflow:`ellipsis`,cursor:`pointer`},"& > completion-section":{display:`list-item`,borderBottom:`1px solid silver`,paddingLeft:`0.5em`,opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#17c`,color:`white`},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#777`},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#347`,color:`white`},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#444`},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:`"···"`,opacity:.5,display:`block`,textAlign:`center`,cursor:`pointer`},".cm-tooltip.cm-completionInfo":{position:`absolute`,padding:`3px 9px`,width:`max-content`,maxWidth:`400px`,boxSizing:`border-box`,whiteSpace:`pre-line`},".cm-completionInfo.cm-completionInfo-left":{right:`100%`},".cm-completionInfo.cm-completionInfo-right":{left:`100%`},".cm-completionInfo.cm-completionInfo-left-narrow":{right:`30px`},".cm-completionInfo.cm-completionInfo-right-narrow":{left:`30px`},"&light .cm-snippetField":{backgroundColor:`#00000022`},"&dark .cm-snippetField":{backgroundColor:`#ffffff22`},".cm-snippetFieldPosition":{verticalAlign:`text-top`,width:0,height:`1.15em`,display:`inline-block`,margin:`0 -0.7px -.7em`,borderLeft:`1.4px dotted #888`},".cm-completionMatchedText":{textDecoration:`underline`},".cm-completionDetail":{marginLeft:`0.5em`,fontStyle:`italic`},".cm-completionIcon":{fontSize:`90%`,width:`.8em`,display:`inline-block`,textAlign:`center`,paddingRight:`.6em`,opacity:`0.6`,boxSizing:`content-box`},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:`'ƒ'`}},".cm-completionIcon-class":{"&:after":{content:`'○'`}},".cm-completionIcon-interface":{"&:after":{content:`'◌'`}},".cm-completionIcon-variable":{"&:after":{content:`'𝑥'`}},".cm-completionIcon-constant":{"&:after":{content:`'𝐶'`}},".cm-completionIcon-type":{"&:after":{content:`'𝑡'`}},".cm-completionIcon-enum":{"&:after":{content:`'∪'`}},".cm-completionIcon-property":{"&:after":{content:`'□'`}},".cm-completionIcon-keyword":{"&:after":{content:`'🔑︎'`}},".cm-completionIcon-namespace":{"&:after":{content:`'▢'`}},".cm-completionIcon-text":{"&:after":{content:`'abc'`,fontSize:`50%`,verticalAlign:`middle`}}}),yv=class{constructor(e,t,n,r){this.field=e,this.line=t,this.from=n,this.to=r}},bv=class e{constructor(e,t,n){this.field=e,this.from=t,this.to=n}map(t){let n=t.mapPos(this.from,-1,Ot.TrackDel),r=t.mapPos(this.to,1,Ot.TrackDel);return n==null||r==null?null:new e(this.field,n,r)}},xv=class e{constructor(e,t){this.lines=e,this.fieldPositions=t}instantiate(e,t){let n=[],r=[t],i=e.doc.lineAt(t),a=/^\s*/.exec(i.text)[0];for(let i of this.lines){if(n.length){let n=a,o=/^\t*/.exec(i)[0].length;for(let t=0;t<o;t++)n+=e.facet(Qd);r.push(t+n.length-o),i=n+i.slice(o)}n.push(i),t+=i.length+1}return{text:n,ranges:this.fieldPositions.map(e=>new bv(e.field,r[e.line]+e.from,r[e.line]+e.to))}}static parse(t){let n=[],r=[],i=[],a;for(let e of t.split(/\r\n?|\n/)){for(;a=/[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(e);){let t=a[1]?+a[1]:null,o=a[2]||a[3]||``,s=-1;t===0&&(t=1e9);let c=o.replace(/\\[{}]/g,e=>e[1]);for(let e=0;e<n.length;e++)(t==null?c&&n[e].name==c:n[e].seq==t)&&(s=e);if(s<0){let e=0;for(;e<n.length&&(t==null||n[e].seq!=null&&n[e].seq<t);)e++;n.splice(e,0,{seq:t,name:c}),s=e;for(let e of i)e.field>=s&&e.field++}for(let e of i)if(e.line==r.length&&e.from>a.index){let t=a[2]?3+(a[1]||``).length:2;e.from-=t,e.to-=t}i.push(new yv(s,r.length,a.index,a.index+c.length)),e=e.slice(0,a.index)+o+e.slice(a.index+a[0].length)}e=e.replace(/\\([{}])/g,(e,t,n)=>{for(let e of i)e.line==r.length&&e.from>n&&(e.from--,e.to--);return t}),r.push(e)}return new e(r,i)}},Sv=R.widget({widget:new class extends Tr{toDOM(){let e=document.createElement(`span`);return e.className=`cm-snippetFieldPosition`,e}ignoreEvent(){return!1}}}),Cv=R.mark({class:`cm-snippetField`}),wv=class e{constructor(e,t){this.ranges=e,this.active=t,this.deco=R.set(e.map(e=>(e.from==e.to?Sv:Cv).range(e.from,e.to)),!0)}map(t){let n=[];for(let e of this.ranges){let r=e.map(t);if(!r)return null;n.push(r)}return new e(n,this.active)}selectionInsideField(e){return e.ranges.every(e=>this.ranges.some(t=>t.field==this.active&&t.from<=e.from&&t.to>=e.to))}},Tv=M.define({map(e,t){return e&&e.map(t)}}),Ev=M.define(),Dv=Kt.define({create(){return null},update(e,t){for(let n of t.effects){if(n.is(Tv))return n.value;if(n.is(Ev)&&e)return new wv(e.ranges,n.value)}return e&&t.docChanged&&(e=e.map(t.changes)),e&&t.selection&&!e.selectionInsideField(t.selection)&&(e=null),e},provide:e=>U.decorations.from(e,e=>e?e.deco:R.none)});function Ov(e,t){return A.create(e.filter(e=>e.field==t).map(e=>A.range(e.from,e.to)))}function kv(e){let t=xv.parse(e);return(e,n,r,i)=>{let{text:a,ranges:o}=t.instantiate(e.state,r),{main:s}=e.state.selection,c={changes:{from:r,to:i==s.from?s.to:i,insert:k.of(a)},scrollIntoView:!0,annotations:n?[O_.of(n),mn.userEvent.of(`input.complete`)]:void 0};if(o.length&&(c.selection=Ov(o,0)),o.some(e=>e.field>0)){let t=new wv(o,0),n=c.effects=[Tv.of(t)];e.state.field(Dv,!1)===void 0&&n.push(M.appendConfig.of([Dv,Nv,Fv,vv]))}e.dispatch(e.state.update(c))}}function Av(e){return({state:t,dispatch:n})=>{let r=t.field(Dv,!1);if(!r||e<0&&r.active==0)return!1;let i=r.active+e,a=e>0&&!r.ranges.some(t=>t.field==i+e);return n(t.update({selection:Ov(r.ranges,i),effects:Tv.of(a?null:new wv(r.ranges,i)),scrollIntoView:!0})),!0}}var jv=[{key:`Tab`,run:Av(1),shift:Av(-1)},{key:`Escape`,run:({state:e,dispatch:t})=>e.field(Dv,!1)?(t(e.update({effects:Tv.of(null)})),!0):!1}],Mv=j.define({combine(e){return e.length?e[0]:jv}}),Nv=Yt.highest(cc.compute([Mv],e=>e.facet(Mv)));function Pv(e,t){return{...t,apply:kv(e)}}var Fv=U.domEventHandlers({mousedown(e,t){let n=t.state.field(Dv,!1),r;if(!n||(r=t.posAtCoords({x:e.clientX,y:e.clientY}))==null)return!1;let i=n.ranges.find(e=>e.from<=r&&e.to>=r);return!i||i.field==n.active?!1:(t.dispatch({selection:Ov(n.ranges,i.field),effects:Tv.of(n.ranges.some(e=>e.field>i.field)?new wv(n.ranges,i.field):null),scrollIntoView:!0}),!0)}}),Iv={brackets:[`(`,`[`,`{`,`'`,`"`],before:`)]}:;>`,stringPrefixes:[]},Lv=M.define({map(e,t){return t.mapPos(e,-1,Ot.TrackAfter)??void 0}}),Rv=new class extends On{};Rv.startSide=1,Rv.endSide=-1;var zv=Kt.define({create(){return F.empty},update(e,t){if(e=e.map(t.changes),t.selection){let n=t.state.doc.lineAt(t.selection.main.head);e=e.update({filter:e=>e>=n.from&&e<=n.to})}for(let n of t.effects)n.is(Lv)&&(e=e.update({add:[Rv.range(n.value,n.value+1)]}));return e}});function Bv(){return[Gv,zv]}var Vv=`()[]{}<>«»»«［］｛｝`;function Hv(e){for(let t=0;t<16;t+=2)if(Vv.charCodeAt(t)==e)return Vv.charAt(t+1);return Tt(e<128?e:e+1)}function Uv(e,t){return e.languageDataAt(`closeBrackets`,t)[0]||Iv}var Wv=typeof navigator==`object`&&/Android\b/.test(navigator.userAgent),Gv=U.inputHandler.of((e,t,n,r)=>{if((Wv?e.composing:e.compositionStarted)||e.state.readOnly)return!1;let i=e.state.selection.main;if(r.length>2||r.length==2&&Et(wt(r,0))==1||t!=i.from||n!=i.to)return!1;let a=qv(e.state,r);return a?(e.dispatch(a),!0):!1}),Kv=[{key:`Backspace`,run:({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Uv(e,e.selection.main.head).brackets||Iv.brackets,r=null,i=e.changeByRange(t=>{if(t.empty){let r=Xv(e.doc,t.head);for(let i of n)if(i==r&&Yv(e.doc,t.head)==Hv(wt(i,0)))return{changes:{from:t.head-i.length,to:t.head+i.length},range:A.cursor(t.head-i.length)}}return{range:r=t}});return r||t(e.update(i,{scrollIntoView:!0,userEvent:`delete.backward`})),!r}}];function qv(e,t){let n=Uv(e,e.selection.main.head),r=n.brackets||Iv.brackets;for(let i of r){let a=Hv(wt(i,0));if(t==i)return a==i?$v(e,i,r.indexOf(i+i+i)>-1,n):Zv(e,i,a,n.before||Iv.before);if(t==a&&Jv(e,e.selection.main.from))return Qv(e,i,a)}return null}function Jv(e,t){let n=!1;return e.field(zv).between(0,e.doc.length,e=>{e==t&&(n=!0)}),n}function Yv(e,t){let n=e.sliceString(t,t+2);return n.slice(0,Et(wt(n,0)))}function Xv(e,t){let n=e.sliceString(t-2,t);return Et(wt(n,0))==n.length?n:n.slice(1)}function Zv(e,t,n,r){let i=null,a=e.changeByRange(a=>{if(!a.empty)return{changes:[{insert:t,from:a.from},{insert:n,from:a.to}],effects:Lv.of(a.to+t.length),range:A.range(a.anchor+t.length,a.head+t.length)};let o=Yv(e.doc,a.head);return!o||/\s/.test(o)||r.indexOf(o)>-1?{changes:{insert:t+n,from:a.head},effects:Lv.of(a.head+t.length),range:A.cursor(a.head+t.length)}:{range:i=a}});return i?null:e.update(a,{scrollIntoView:!0,userEvent:`input.type`})}function Qv(e,t,n){let r=null,i=e.changeByRange(t=>t.empty&&Yv(e.doc,t.head)==n?{changes:{from:t.head,to:t.head+n.length,insert:n},range:A.cursor(t.head+n.length)}:r={range:t});return r?null:e.update(i,{scrollIntoView:!0,userEvent:`input.type`})}function $v(e,t,n,r){let i=r.stringPrefixes||Iv.stringPrefixes,a=null,o=e.changeByRange(r=>{if(!r.empty)return{changes:[{insert:t,from:r.from},{insert:t,from:r.to}],effects:Lv.of(r.to+t.length),range:A.range(r.anchor+t.length,r.head+t.length)};let o=r.head,s=Yv(e.doc,o),c;if(s==t){if(ey(e,o))return{changes:{insert:t+t,from:o},effects:Lv.of(o+t.length),range:A.cursor(o+t.length)};if(Jv(e,o)){let r=n&&e.sliceDoc(o,o+t.length*3)==t+t+t?t+t+t:t;return{changes:{from:o,to:o+r.length,insert:r},range:A.cursor(o+r.length)}}}else if(n&&e.sliceDoc(o-2*t.length,o)==t+t&&(c=ny(e,o-2*t.length,i))>-1&&ey(e,c))return{changes:{insert:t+t+t+t,from:o},effects:Lv.of(o+t.length),range:A.cursor(o+t.length)};else if(e.charCategorizer(o)(s)!=N.Word&&ny(e,o,i)>-1&&!ty(e,o,t,i))return{changes:{insert:t+t,from:o},effects:Lv.of(o+t.length),range:A.cursor(o+t.length)};return{range:a=r}});return a?null:e.update(o,{scrollIntoView:!0,userEvent:`input.type`})}function ey(e,t){let n=X(e).resolveInner(t+1);return n.parent&&n.from==t}function ty(e,t,n,r){let i=X(e).resolveInner(t,-1),a=r.reduce((e,t)=>Math.max(e,t.length),0);for(let o=0;o<5;o++){let o=e.sliceDoc(i.from,Math.min(i.to,i.from+n.length+a)),s=o.indexOf(n);if(!s||s>-1&&r.indexOf(o.slice(0,s))>-1){let t=i.firstChild;for(;t&&t.from==i.from&&t.to-t.from>n.length+s;){if(e.sliceDoc(t.to-n.length,t.to)==n)return!1;t=t.firstChild}return!0}let c=i.to==t&&i.parent;if(!c)break;i=c}return!1}function ny(e,t,n){let r=e.charCategorizer(t);if(r(e.sliceDoc(t-1,t))!=N.Word)return t;for(let i of n){let n=t-i.length;if(e.sliceDoc(n,t)==i&&r(e.sliceDoc(n-1,n))!=N.Word)return n}return-1}function ry(e={}){return[_v,av,I_.of(e),hv,ay,vv]}var iy=[{key:`Ctrl-Space`,run:uv},{mac:"Alt-`",run:uv},{mac:`Alt-i`,run:uv},{key:`Escape`,run:dv},{key:`ArrowDown`,run:cv(!0)},{key:`ArrowUp`,run:cv(!1)},{key:`PageDown`,run:cv(!0,`page`)},{key:`PageUp`,run:cv(!1,`page`)},{key:`Enter`,run:lv}],ay=Yt.highest(cc.computeN([I_],e=>e.facet(I_).defaultKeymap?[iy]:[])),oy=class{constructor(e,t,n){this.from=e,this.to=t,this.diagnostic=n}},sy=class e{constructor(e,t,n){this.diagnostics=e,this.panel=t,this.selected=n}static init(t,n,r){let i=r.facet(xy).markerFilter;i&&(t=i(t,r));let a=t.slice().sort((e,t)=>e.from-t.from||e.to-t.to),o=new Pn,s=[],c=0,l=r.doc.iter(),u=0,d=r.doc.length;for(let e=0;;){let t=e==a.length?null:a[e];if(!t&&!s.length)break;let n,r;if(s.length)n=c,r=s.reduce((e,t)=>Math.min(e,t.to),t&&t.from>n?t.from:1e8);else{if(n=t.from,n>d)break;r=t.to,s.push(t),e++}for(;e<a.length;){let t=a[e];if(t.from==n&&(t.to>t.from||t.to==n))s.push(t),e++,r=Math.min(t.to,r);else{r=Math.min(t.from,r);break}}r=Math.min(r,d);let i=!1;if(s.some(e=>e.from==n&&(e.to==r||r==d))&&(i=n==r,!i&&r-n<10)){let e=n-(u+l.value.length);e>0&&(l.next(e),u=n);for(let e=n;;){if(e>=r){i=!0;break}if(!l.lineBreak&&u+l.value.length>e)break;e=u+l.value.length,u+=l.value.length,l.next()}}let f=My(s);if(i)o.add(n,n,R.widget({widget:new Ty(f),diagnostics:s.slice()}));else{let e=s.reduce((e,t)=>t.markClass?e+` `+t.markClass:e,``);o.add(n,r,R.mark({class:`cm-lintRange cm-lintRange-`+f+e,diagnostics:s.slice(),inclusiveEnd:s.some(e=>e.to>r)}))}if(c=r,c==d)break;for(let e=0;e<s.length;e++)s[e].to<=c&&s.splice(e--,1)}let f=o.finish();return new e(f,n,cy(f))}};function cy(e,t=null,n=0){let r=null;return e.between(n,1e9,(e,n,{spec:i})=>{if(!(t&&i.diagnostics.indexOf(t)<0))if(!r)r=new oy(e,n,t||i.diagnostics[0]);else if(i.diagnostics.indexOf(r.diagnostic)<0)return!1;else r=new oy(r.from,n,r.diagnostic)}),r}function ly(e,t){let n=t.pos,r=t.end||n,i=e.state.facet(xy).hideOn(e,n,r);if(i!=null)return i;let a=e.startState.doc.lineAt(t.pos);return!!(e.effects.some(e=>e.is(dy))||e.changes.touchesRange(a.from,Math.max(a.to,r)))}function uy(e,t){return e.field(my,!1)?t:t.concat(M.appendConfig.of(Py))}var dy=M.define(),fy=M.define(),py=M.define(),my=Kt.define({create(){return new sy(R.none,null,null)},update(e,t){if(t.docChanged&&e.diagnostics.size){let n=e.diagnostics.map(t.changes),r=null,i=e.panel;if(e.selected){let i=t.changes.mapPos(e.selected.from,1);r=cy(n,e.selected.diagnostic,i)||cy(n,null,i)}!n.size&&i&&t.state.facet(xy).autoPanel&&(i=null),e=new sy(n,i,r)}for(let n of t.effects)if(n.is(dy)){let r=t.state.facet(xy).autoPanel?n.value.length?Dy.open:null:e.panel;e=sy.init(n.value,r,t.state)}else n.is(fy)?e=new sy(e.diagnostics,n.value?Dy.open:null,e.selected):n.is(py)&&(e=new sy(e.diagnostics,e.panel,n.value));return e},provide:e=>[Ll.from(e,e=>e.panel),U.decorations.from(e,e=>e.diagnostics)]}),hy=R.mark({class:`cm-lintRange cm-lintRange-active`});function gy(e,t,n){let{diagnostics:r}=e.state.field(my),i,a=-1,o=-1;r.between(t-+(n<0),t+ +(n>0),(e,r,{spec:s})=>{if(t>=e&&t<=r&&(e==r||(t>e||n>0)&&(t<r||n<0)))return i=s.diagnostics,a=e,o=r,!1});let s=e.state.facet(xy).tooltipFilter;return i&&s&&(i=s(i,e.state)),i?{pos:a,end:o,above:!0,create(){return{dom:_y(e,i)}}}:null}function _y(e,t){return I(`ul`,{class:`cm-tooltip-lint`},t.map(t=>wy(e,t,!1)))}var vy=e=>{let t=e.state.field(my,!1);(!t||!t.panel)&&e.dispatch({effects:uy(e.state,[fy.of(!0)])});let n=Nl(e,Dy.open);return n&&n.dom.querySelector(`.cm-panel-lint ul`).focus(),!0},yy=e=>{let t=e.state.field(my,!1);return!t||!t.panel?!1:(e.dispatch({effects:fy.of(!1)}),!0)},by=[{key:`Mod-Shift-m`,run:vy,preventDefault:!0},{key:`F8`,run:e=>{let t=e.state.field(my,!1);if(!t)return!1;let n=e.state.selection.main,r=cy(t.diagnostics,null,n.to+1);return!r&&(r=cy(t.diagnostics,null,0),!r||r.from==n.from&&r.to==n.to)?!1:(e.dispatch({selection:{anchor:r.from,head:r.to},scrollIntoView:!0}),kl(e,r.from,1,{tooltip:Ny,until:e=>e.docChanged||e.newSelection.main.head<r.from||e.newSelection.main.head>r.to}),!0)}}],xy=j.define({combine(e){return{sources:e.map(e=>e.source).filter(e=>e!=null),...Dn(e.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:Sy,tooltipFilter:Sy,needsRefresh:(e,t)=>e?t?n=>e(n)||t(n):e:t,hideOn:(e,t)=>e?t?(n,r,i)=>e(n,r,i)||t(n,r,i):e:t,autoPanel:(e,t)=>e||t})}}});function Sy(e,t){return e?t?(n,r)=>t(e(n,r),r):e:t}function Cy(e){let t=[];if(e)actions:for(let{name:n}of e){for(let e=0;e<n.length;e++){let r=n[e];if(/[a-zA-Z]/.test(r)&&!t.some(e=>e.toLowerCase()==r.toLowerCase())){t.push(r);continue actions}}t.push(``)}return t}function wy(e,t,n){let r=n?Cy(t.actions):[];return I(`li`,{class:`cm-diagnostic cm-diagnostic-`+t.severity},I(`span`,{class:`cm-diagnosticText`},t.renderMessage?t.renderMessage(e):t.message),t.actions?.map((n,i)=>{let a=!1,o=r=>{if(r.preventDefault(),a)return;a=!0;let i=cy(e.state.field(my).diagnostics,t);i&&n.apply(e,i.from,i.to)},{name:s}=n,c=r[i]?s.indexOf(r[i]):-1,l=c<0?s:[s.slice(0,c),I(`u`,s.slice(c,c+1)),s.slice(c+1)];return I(`button`,{type:`button`,class:`cm-diagnosticAction`+(n.markClass?` `+n.markClass:``),onclick:o,onmousedown:o,"aria-label":` Action: ${s}${c<0?``:` (access key "${r[i]})"`}.`},l)}),t.source&&I(`div`,{class:`cm-diagnosticSource`},t.source))}var Ty=class extends Tr{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return I(`span`,{class:`cm-lintPoint cm-lintPoint-`+this.sev})}},Ey=class{constructor(e,t){this.diagnostic=t,this.id=`item_`+Math.floor(Math.random()*4294967295).toString(16),this.dom=wy(e,t,!0),this.dom.id=this.id,this.dom.setAttribute(`role`,`option`)}},Dy=class e{constructor(e){this.view=e,this.items=[];let t=t=>{if(!(t.ctrlKey||t.altKey||t.metaKey)){if(t.keyCode==27)yy(this.view),this.view.focus();else if(t.keyCode==38||t.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(t.keyCode==40||t.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(t.keyCode==36)this.moveSelection(0);else if(t.keyCode==35)this.moveSelection(this.items.length-1);else if(t.keyCode==13)this.view.focus();else if(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:n}=this.items[this.selectedIndex],r=Cy(n.actions);for(let i=0;i<r.length;i++)if(r[i].toUpperCase().charCodeAt(0)==t.keyCode){let t=cy(this.view.state.field(my).diagnostics,n);t&&n.actions[i].apply(e,t.from,t.to)}}else return;t.preventDefault()}},n=e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)};this.list=I(`ul`,{tabIndex:0,role:`listbox`,"aria-label":this.view.state.phrase(`Diagnostics`),onkeydown:t,onclick:n}),this.dom=I(`div`,{class:`cm-panel-lint`},this.list,I(`button`,{type:`button`,name:`close`,"aria-label":this.view.state.phrase(`close`),onclick:()=>yy(this.view)},`×`)),this.update()}get selectedIndex(){let e=this.view.state.field(my).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(my),n=0,r=!1,i=null,a=new Set;for(e.between(0,this.view.state.doc.length,(e,o,{spec:s})=>{for(let e of s.diagnostics){if(a.has(e))continue;a.add(e);let o=-1,s;for(let t=n;t<this.items.length;t++)if(this.items[t].diagnostic==e){o=t;break}o<0?(s=new Ey(this.view,e),this.items.splice(n,0,s),r=!0):(s=this.items[o],o>n&&(this.items.splice(n,o-n),r=!0)),t&&s.diagnostic==t.diagnostic?s.dom.hasAttribute(`aria-selected`)||(s.dom.setAttribute(`aria-selected`,`true`),i=s):s.dom.hasAttribute(`aria-selected`)&&s.dom.removeAttribute(`aria-selected`),n++}});n<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)r=!0,this.items.pop();this.items.length==0&&(this.items.push(new Ey(this.view,{from:-1,to:-1,severity:`info`,message:this.view.state.phrase(`No diagnostics`)})),r=!0),i?(this.list.setAttribute(`aria-activedescendant`,i.id),this.view.requestMeasure({key:this,read:()=>({sel:i.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{let n=t.height/this.list.offsetHeight;e.top<t.top?this.list.scrollTop-=(t.top-e.top)/n:e.bottom>t.bottom&&(this.list.scrollTop+=(e.bottom-t.bottom)/n)}})):this.selectedIndex<0&&this.list.removeAttribute(`aria-activedescendant`),r&&this.sync()}sync(){let e=this.list.firstChild;function t(){let t=e;e=t.nextSibling,t.remove()}for(let n of this.items)if(n.dom.parentNode==this.list){for(;e!=n.dom;)t();e=n.dom.nextSibling}else this.list.insertBefore(n.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=cy(this.view.state.field(my).diagnostics,this.items[e].diagnostic);t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:py.of(t)})}static open(t){return new e(t)}};function Oy(e,t=`viewBox="0 0 40 40"`){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function ky(e){return Oy(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,`width="6" height="3"`)}var Ay=U.baseTheme({".cm-diagnostic":{padding:`3px 6px 3px 8px`,marginLeft:`-1px`,display:`block`,whiteSpace:`pre-wrap`},".cm-diagnostic-error":{borderLeft:`5px solid #d11`},".cm-diagnostic-warning":{borderLeft:`5px solid orange`},".cm-diagnostic-info":{borderLeft:`5px solid #999`},".cm-diagnostic-hint":{borderLeft:`5px solid #66d`},".cm-diagnosticAction":{font:`inherit`,border:`none`,padding:`2px 4px`,backgroundColor:`#444`,color:`white`,borderRadius:`3px`,marginLeft:`8px`,cursor:`pointer`},".cm-diagnosticSource":{fontSize:`70%`,opacity:.7},".cm-lintRange":{backgroundPosition:`left bottom`,backgroundRepeat:`repeat-x`,paddingBottom:`0.7px`},".cm-lintRange-error":{backgroundImage:ky(`#f11`)},".cm-lintRange-warning":{backgroundImage:ky(`orange`)},".cm-lintRange-info":{backgroundImage:ky(`#999`)},".cm-lintRange-hint":{backgroundImage:ky(`#66d`)},".cm-lintRange-active":{backgroundColor:`#ffdd9980`},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:`relative`,"&:after":{content:`""`,position:`absolute`,bottom:0,left:`-2px`,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,borderBottom:`4px solid #d11`}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:`orange`}},".cm-lintPoint-info":{"&:after":{borderBottomColor:`#999`}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:`#66d`}},".cm-panel.cm-panel-lint":{position:`relative`,"& ul":{maxHeight:`100px`,overflowY:`auto`,"& [aria-selected]":{backgroundColor:`#ddd`,"& u":{textDecoration:`underline`}},"&:focus [aria-selected]":{background_fallback:`#bdf`,backgroundColor:`Highlight`,color_fallback:`white`,color:`HighlightText`},"& u":{textDecoration:`none`},padding:0,margin:0},"& [name=close]":{position:`absolute`,top:`0`,right:`2px`,background:`inherit`,border:`none`,font:`inherit`,padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:`#86714a80`},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:`#2e343e`}}});function jy(e){return e==`error`?4:e==`warning`?3:e==`info`?2:1}function My(e){let t=`hint`,n=1;for(let r of e){let e=jy(r.severity);e>n&&(n=e,t=r.severity)}return t}var Ny=Ol(gy,{hideOn:ly}),Py=[my,U.decorations.compute([my],e=>{let{selected:t,panel:n}=e.field(my);return!t||!n||t.from==t.to?R.none:R.set([hy.range(t.from,t.to)])}),Ny,Ay],Fy=[uu(),mu(),Gc(),nm(),Kf(),Ec(),Fc(),P.allowMultipleSelections.of(!0),vf(),Qf(tp,{fallback:!0}),dp(),Bv(),ry(),ol(),ll(),Qc(),Cg(),cc.of([...Kv,...lg,...f_,...xm,...Lf,...iy,...by])],Iy=class e{constructor(e,t,n,r,i,a,o,s,c,l=0,u){this.p=e,this.stack=t,this.state=n,this.reducePos=r,this.pos=i,this.score=a,this.buffer=o,this.bufferBase=s,this.curContext=c,this.lookAhead=l,this.parent=u}toString(){return`[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?`!`+this.score:``}`}static start(t,n,r=0){let i=t.parser.context;return new e(t,[],n,r,r,0,[],0,i?new Ly(i,i.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,t){this.stack.push(this.state,t,this.bufferBase+this.buffer.length),this.state=e}reduce(e){let t=e>>19,n=e&65535,{parser:r}=this.p,i=this.reducePos<this.pos-25&&this.setLookAhead(this.pos),a=r.dynamicPrecedence(n);if(a&&(this.score+=a),t==0){n<r.minRepeatTerm&&this.reducePos<this.pos&&(this.reducePos=this.pos),this.pushState(r.getGoto(this.state,n,!0),this.reducePos),n<r.minRepeatTerm&&this.storeNode(n,this.reducePos,this.reducePos,i?8:4,!0),this.reduceContext(n,this.reducePos);return}let o=this.stack.length-(t-1)*3-(e&262144?6:0),s=o?this.stack[o-2]:this.p.ranges[0].from;n<r.minRepeatTerm&&s==this.reducePos&&this.reducePos<this.pos&&(this.reducePos=this.pos);let c=this.reducePos-s;c>=2e3&&!this.p.parser.nodeSet.types[n]?.isAnonymous&&(s==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=c):this.p.lastBigReductionSize<c&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=s,this.p.lastBigReductionSize=c));let l=o?this.stack[o-1]:0,u=this.bufferBase+this.buffer.length-l;if(n<r.minRepeatTerm||e&131072){let e=r.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(n,s,e,u+4,!0)}if(e&262144)this.state=this.stack[o];else{let e=this.stack[o-3];this.state=r.getGoto(e,n,!0)}for(;this.stack.length>o;)this.stack.pop();this.reduceContext(n,s)}storeNode(e,t,n,r=4,i=!1){if(e==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let e=this.buffer.length;if(e>0&&this.buffer[e-4]==0&&this.buffer[e-1]>-1){if(t==n)return;if(this.buffer[e-2]>=t){this.buffer[e-2]=n;return}}}if(!i||this.pos==n)this.buffer.push(e,t,n,r);else{let i=this.buffer.length;if(i>0&&(this.buffer[i-4]!=0||this.buffer[i-1]<0)){let e=!1;for(let t=i;t>0&&this.buffer[t-2]>n;t-=4)if(this.buffer[t-1]>=0){e=!0;break}if(e)for(;i>0&&this.buffer[i-2]>n;)this.buffer[i]=this.buffer[i-4],this.buffer[i+1]=this.buffer[i-3],this.buffer[i+2]=this.buffer[i-2],this.buffer[i+3]=this.buffer[i-1],i-=4,r>4&&(r-=4)}this.buffer[i]=e,this.buffer[i+1]=t,this.buffer[i+2]=n,this.buffer[i+3]=r}}shift(e,t,n,r){if(e&131072)this.pushState(e&65535,this.pos);else if(e&262144)this.pos=r,this.shiftContext(t,n),t<=this.p.parser.maxNode&&this.buffer.push(t,n,r,4);else{let i=e,{parser:a}=this.p;this.pos=r;let o=a.stateFlag(i,1);!o&&(r>n||t<=a.maxNode)&&(this.reducePos=r),this.pushState(i,o?n:Math.min(n,this.reducePos)),this.shiftContext(t,n),t<=a.maxNode&&this.buffer.push(t,n,r,4)}}apply(e,t,n,r){e&65536?this.reduce(e):this.shift(e,t,n,r)}useNode(e,t){let n=this.p.reused.length-1;(n<0||this.p.reused[n]!=e)&&(this.p.reused.push(e),n++);let r=this.pos;this.reducePos=this.pos=r+e.length,this.pushState(t,r),this.buffer.push(n,r,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this,this.p.stream.reset(this.pos-e.length)))}split(){let t=this,n=t.buffer.length;for(n&&t.buffer[n-4]==0&&(n-=4);n>0&&t.buffer[n-2]>t.reducePos;)n-=4;let r=t.buffer.slice(n),i=t.bufferBase+n;for(;t&&i==t.bufferBase;)t=t.parent;return new e(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,r,i,this.curContext,this.lookAhead,t)}recoverByDelete(e,t){let n=e<=this.p.parser.maxNode;n&&this.storeNode(e,this.pos,t,4),this.storeNode(0,this.pos,t,n?8:4),this.pos=this.reducePos=t,this.score-=190}canShift(e){for(let t=new Ry(this);;){let n=this.p.parser.stateSlot(t.state,4)||this.p.parser.hasAction(t.state,e);if(n==0)return!1;if(!(n&65536))return!0;t.reduce(n)}}recoverByInsert(e){if(this.stack.length>=300)return[];let t=this.p.parser.nextStates(this.state);if(t.length>8||this.stack.length>=120){let n=[];for(let r=0,i;r<t.length;r+=2)(i=t[r+1])!=this.state&&this.p.parser.hasAction(i,e)&&n.push(t[r],i);if(this.stack.length<120)for(let e=0;n.length<8&&e<t.length;e+=2){let r=t[e+1];n.some((e,t)=>t&1&&e==r)||n.push(t[e],r)}t=n}let n=[];for(let e=0;e<t.length&&n.length<4;e+=2){let r=t[e+1];if(r==this.state)continue;let i=this.split();i.pushState(r,this.pos),i.storeNode(0,i.pos,i.pos,4,!0),i.shiftContext(t[e],this.pos),i.reducePos=this.pos,i.score-=200,n.push(i)}return n}forceReduce(){let{parser:e}=this.p,t=e.stateSlot(this.state,5);if(!(t&65536))return!1;if(!e.validAction(this.state,t)){let n=t>>19,r=t&65535,i=this.stack.length-n*3;if(i<0||e.getGoto(this.stack[i],r,!1)<0){let e=this.findForcedReduction();if(e==null)return!1;t=e}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}findForcedReduction(){let{parser:e}=this.p,t=[],n=(r,i)=>{if(!t.includes(r))return t.push(r),e.allActions(r,t=>{if(!(t&393216))if(t&65536){let n=(t>>19)-i;if(n>1){let r=t&65535,i=this.stack.length-n*3;if(i>=0&&e.getGoto(this.stack[i],r,!1)>=0)return n<<19|65536|r}}else{let e=n(t,i+1);if(e!=null)return e}})};return n(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:e}=this.p;return e.data[e.stateSlot(this.state,1)]==65535&&!e.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let t=0;t<this.stack.length;t+=3)if(this.stack[t]!=e.stack[t])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this,this.p.stream.reset(t)))}reduceContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this,this.p.stream.reset(t)))}emitContext(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-3)&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-4)&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(e){if(e!=this.curContext.context){let t=new Ly(this.curContext.tracker,e);t.hash!=this.curContext.hash&&this.emitContext(),this.curContext=t}}setLookAhead(e){return e<=this.lookAhead?!1:(this.emitLookAhead(),this.lookAhead=e,!0)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}},Ly=class{constructor(e,t){this.tracker=e,this.context=t,this.hash=e.strict?e.hash(t):0}},Ry=class{constructor(e){this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}reduce(e){let t=e&65535,n=e>>19;n==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(n-1)*3;let r=this.start.p.parser.getGoto(this.stack[this.base-3],t,!0);this.state=r}},zy=class e{constructor(e,t,n){this.stack=e,this.pos=t,this.index=n,this.buffer=e.buffer,this.index==0&&this.maybeNext()}static create(t,n=t.bufferBase+t.buffer.length){return new e(t,n,n-t.bufferBase)}maybeNext(){let e=this.stack.parent;e!=null&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new e(this.stack,this.pos,this.index)}};function By(e,t=Uint16Array){if(typeof e!=`string`)return e;let n=null;for(let r=0,i=0;r<e.length;){let a=0;for(;;){let t=e.charCodeAt(r++),n=!1;if(t==126){a=65535;break}t>=92&&t--,t>=34&&t--;let i=t-32;if(i>=46&&(i-=46,n=!0),a+=i,n)break;a*=46}n?n[i++]=a:n=new t(a)}return n}var Vy=class{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}},Hy=new Vy,Uy=class{constructor(e,t){this.input=e,this.ranges=t,this.chunk=``,this.chunkOff=0,this.chunk2=``,this.chunk2Pos=0,this.next=-1,this.token=Hy,this.rangeIndex=0,this.pos=this.chunkPos=t[0].from,this.range=t[0],this.end=t[t.length-1].to,this.readNext()}resolveOffset(e,t){let n=this.range,r=this.rangeIndex,i=this.pos+e;for(;i<n.from;){if(!r)return null;let e=this.ranges[--r];i-=n.from-e.to,n=e}for(;t<0?i>n.to:i>=n.to;){if(r==this.ranges.length-1)return null;let e=this.ranges[++r];i+=e.from-n.to,n=e}return i}clipPos(e){if(e>=this.range.from&&e<this.range.to)return e;for(let t of this.ranges)if(t.to>e)return Math.max(e,t.from);return this.end}peek(e){let t=this.chunkOff+e,n,r;if(t>=0&&t<this.chunk.length)n=this.pos+e,r=this.chunk.charCodeAt(t);else{let t=this.resolveOffset(e,1);if(t==null)return-1;if(n=t,n>=this.chunk2Pos&&n<this.chunk2Pos+this.chunk2.length)r=this.chunk2.charCodeAt(n-this.chunk2Pos);else{let e=this.rangeIndex,t=this.range;for(;t.to<=n;)t=this.ranges[++e];this.chunk2=this.input.chunk(this.chunk2Pos=n),n+this.chunk2.length>t.to&&(this.chunk2=this.chunk2.slice(0,t.to-n)),r=this.chunk2.charCodeAt(0)}}return n>=this.token.lookAhead&&(this.token.lookAhead=n+1),r}acceptToken(e,t=0){let n=t?this.resolveOffset(t,-1):this.pos;if(n==null||n<this.token.start)throw RangeError(`Token end out of bounds`);this.token.value=e,this.token.end=n}acceptTokenTo(e,t){this.token.value=e,this.token.end=t}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:e,chunkPos:t}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=e,this.chunk2Pos=t,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let e=this.input.chunk(this.pos),t=this.pos+e.length;this.chunk=t>this.range.to?e.slice(0,this.range.to-this.pos):e,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(e=1){for(this.chunkOff+=e;this.pos+e>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();e-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=e,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk=``,this.next=-1}reset(e,t){if(t?(this.token=t,t.start=e,t.lookAhead=e+1,t.value=t.extended=-1):this.token=Hy,this.pos!=e){if(this.pos=e,e==this.end)return this.setDone(),this;for(;e<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;e>=this.range.to;)this.range=this.ranges[++this.rangeIndex];e>=this.chunkPos&&e<this.chunkPos+this.chunk.length?this.chunkOff=e-this.chunkPos:(this.chunk=``,this.chunkOff=0),this.readNext()}return this}read(e,t){if(e>=this.chunkPos&&t<=this.chunkPos+this.chunk.length)return this.chunk.slice(e-this.chunkPos,t-this.chunkPos);if(e>=this.chunk2Pos&&t<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(e-this.chunk2Pos,t-this.chunk2Pos);if(e>=this.range.from&&t<=this.range.to)return this.input.read(e,t);let n=``;for(let r of this.ranges){if(r.from>=t)break;r.to>e&&(n+=this.input.read(Math.max(r.from,e),Math.min(r.to,t)))}return n}},Wy=class{constructor(e,t){this.data=e,this.id=t}token(e,t){let{parser:n}=t.p;qy(this.data,e,t,this.id,n.data,n.tokenPrecTable)}};Wy.prototype.contextual=Wy.prototype.fallback=Wy.prototype.extend=!1;var Gy=class{constructor(e,t,n){this.precTable=t,this.elseToken=n,this.data=typeof e==`string`?By(e):e}token(e,t){let n=e.pos,r=0;for(;;){let n=e.next<0,i=e.resolveOffset(1,1);if(qy(this.data,e,t,0,this.data,this.precTable),e.token.value>-1)break;if(this.elseToken==null)return;if(n||r++,i==null)break;e.reset(i,e.token)}r&&(e.reset(n,e.token),e.acceptToken(this.elseToken,r))}};Gy.prototype.contextual=Wy.prototype.fallback=Wy.prototype.extend=!1;var Ky=class{constructor(e,t={}){this.token=e,this.contextual=!!t.contextual,this.fallback=!!t.fallback,this.extend=!!t.extend}};function qy(e,t,n,r,i,a){let o=0,s=1<<r,{dialect:c}=n.p.parser;scan:for(;(s&e[o])!=0;){let n=e[o+1];for(let r=o+3;r<n;r+=2)if((e[r+1]&s)>0){let n=e[r];if(c.allows(n)&&(t.token.value==-1||t.token.value==n||Yy(n,t.token.value,i,a))){t.acceptToken(n);break}}let r=t.next,l=0,u=e[o+2];if(t.next<0&&u>l&&e[n+u*3-3]==65535){o=e[n+u*3-1];continue scan}for(;l<u;){let i=l+u>>1,a=n+i+(i<<1),s=e[a],c=e[a+1]||65536;if(r<s)u=i;else if(r>=c)l=i+1;else{o=e[a+2],t.advance();continue scan}}break}}function Jy(e,t,n){for(let r=t,i;(i=e[r])!=65535;r++)if(i==n)return r-t;return-1}function Yy(e,t,n,r){let i=Jy(n,r,t);return i<0||Jy(n,r,e)<i}var Xy=typeof process<`u`&&/\bparse\b/.test({}.LOG),Zy=null;function Qy(e,t,n){let r=e.cursor(K.IncludeAnonymous);for(r.moveTo(t);;)if(!(n<0?r.childBefore(t):r.childAfter(t)))for(;;){if((n<0?r.to<t:r.from>t)&&!r.type.isError)return n<0?Math.max(0,Math.min(r.to-1,t-25)):Math.min(e.length,Math.max(r.from+1,t+25));if(n<0?r.prevSibling():r.nextSibling())break;if(!r.parent())return n<0?0:e.length}}var $y=class{constructor(e,t){this.fragments=e,this.nodeSet=t,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?Qy(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?Qy(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let t=this.trees.length-1;if(t<0)return this.nextFragment(),null;let n=this.trees[t],r=this.index[t];if(r==n.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let i=n.children[r],a=this.start[t]+n.positions[r];if(a>e)return this.nextStart=a,null;if(i instanceof q){if(a==e){if(a<this.safeFrom)return null;let e=a+i.length;if(e<=this.safeTo){let t=i.prop(W.lookAhead);if(!t||e+t<this.fragment.to)return i}}this.index[t]++,a+i.length>=Math.max(this.safeFrom,e)&&(this.trees.push(i),this.start.push(a),this.index.push(0))}else this.index[t]++,this.nextStart=a+i.length}}},eb=class{constructor(e,t){this.stream=t,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map(e=>new Vy)}getActions(e){let t=0,n=null,{parser:r}=e.p,{tokenizers:i}=r,a=r.stateSlot(e.state,3),o=e.curContext?e.curContext.hash:0,s=0;for(let r=0;r<i.length;r++){if(!(1<<r&a))continue;let c=i[r],l=this.tokens[r];if(!(n&&!c.fallback)&&((c.contextual||l.start!=e.pos||l.mask!=a||l.context!=o)&&(this.updateCachedToken(l,c,e),l.mask=a,l.context=o),l.lookAhead>l.end+25&&(s=Math.max(l.lookAhead,s)),l.value!=0)){let r=t;if(l.extended>-1&&(t=this.addActions(e,l.extended,l.end,t)),t=this.addActions(e,l.value,l.end,t),!c.extend&&(n=l,t>r))break}}for(;this.actions.length>t;)this.actions.pop();return s&&e.setLookAhead(s),!n&&e.pos==this.stream.end&&(n=new Vy,n.value=e.p.parser.eofTerm,n.start=n.end=e.pos,t=this.addActions(e,n.value,n.end,t)),this.mainToken=n,this.actions}getMainToken(e){if(this.mainToken)return this.mainToken;let t=new Vy,{pos:n,p:r}=e;return t.start=n,t.end=Math.min(n+1,r.stream.end),t.value=n==r.stream.end?r.parser.eofTerm:0,t}updateCachedToken(e,t,n){let r=this.stream.clipPos(n.pos);if(t.token(this.stream.reset(r,e),n),e.value>-1){let{parser:t}=n.p;for(let r=0;r<t.specialized.length;r++)if(t.specialized[r]==e.value){let i=t.specializers[r](this.stream.read(e.start,e.end),n);if(i>=0&&n.p.parser.dialect.allows(i>>1)){i&1?e.extended=i>>1:e.value=i>>1;break}}}else e.value=0,e.end=this.stream.clipPos(r+1)}putAction(e,t,n,r){for(let t=0;t<r;t+=3)if(this.actions[t]==e)return r;return this.actions[r++]=e,this.actions[r++]=t,this.actions[r++]=n,r}addActions(e,t,n,r){let{state:i}=e,{parser:a}=e.p,{data:o}=a;for(let e=0;e<2;e++)for(let s=a.stateSlot(i,e?2:1);;s+=3){if(o[s]==65535)if(o[s+1]==1)s=sb(o,s+2);else{r==0&&o[s+1]==2&&(r=this.putAction(sb(o,s+2),t,n,r));break}o[s]==t&&(r=this.putAction(sb(o,s+1),t,n,r))}return r}},tb=class{constructor(e,t,n,r){this.parser=e,this.input=t,this.ranges=r,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new Uy(t,r),this.tokens=new eb(e,this.stream),this.topTerm=e.top[1];let{from:i}=r[0];this.stacks=[Iy.start(this,e.top[0],i)],this.fragments=n.length&&this.stream.end-i>e.bufferLength*4?new $y(n,e.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let e=this.stacks,t=this.minStackPos,n=this.stacks=[],r,i;if(this.bigReductionCount>300&&e.length==1){let[t]=e;for(;t.forceReduce()&&t.stack.length&&t.stack[t.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let a=0;a<e.length;a++){let o=e[a];for(;;){if(this.tokens.mainToken=null,o.pos>t)n.push(o);else if(this.advanceStack(o,n,e))continue;else{r||(r=[],i=[]),r.push(o);let e=this.tokens.getMainToken(o);i.push(e.value,e.end)}break}}if(!n.length){let e=r&&cb(r);if(e)return Xy&&console.log(`Finish with `+this.stackID(e)),this.stackToTree(e);if(this.parser.strict)throw Xy&&r&&console.log(`Stuck with token `+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):`none`)),SyntaxError(`No parse at `+t);this.recovering||=5}if(this.recovering&&r){let e=this.stoppedAt!=null&&r[0].pos>this.stoppedAt?r[0]:this.runRecovery(r,i,n);if(e)return Xy&&console.log(`Force-finish `+this.stackID(e)),this.stackToTree(e.forceAll())}if(this.recovering){let e=this.recovering==1?1:this.recovering*3;if(n.length>e)for(n.sort((e,t)=>t.score-e.score);n.length>e;)n.pop();n.some(e=>e.reducePos>t)&&this.recovering--}else if(n.length>1){outer:for(let e=0;e<n.length-1;e++){let t=n[e];for(let r=e+1;r<n.length;r++){let i=n[r];if(t.sameState(i)||t.buffer.length>500&&i.buffer.length>500)if((t.score-i.score||t.buffer.length-i.buffer.length)>0)n.splice(r--,1);else{n.splice(e--,1);continue outer}}}n.length>12&&(n.sort((e,t)=>t.score-e.score),n.splice(12,n.length-12))}this.minStackPos=n[0].pos;for(let e=1;e<n.length;e++)n[e].pos<this.minStackPos&&(this.minStackPos=n[e].pos);return null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw RangeError(`Can't move stoppedAt forward`);this.stoppedAt=e}advanceStack(e,t,n){let r=e.pos,{parser:i}=this,a=Xy?this.stackID(e)+` -> `:``;if(this.stoppedAt!=null&&r>this.stoppedAt)return e.forceReduce()?e:null;if(this.fragments){let t=e.curContext&&e.curContext.tracker.strict,n=t?e.curContext.hash:0;for(let o=this.fragments.nodeAt(r);o;){let r=this.parser.nodeSet.types[o.type.id]==o.type?i.getGoto(e.state,o.type.id):-1;if(r>-1&&o.length&&(!t||(o.prop(W.contextHash)||0)==n))return e.useNode(o,r),Xy&&console.log(a+this.stackID(e)+` (via reuse of ${i.getName(o.type.id)})`),!0;if(!(o instanceof q)||o.children.length==0||o.positions[0]>0)break;let s=o.children[0];if(s instanceof q&&o.positions[0]==0)o=s;else break}}let o=i.stateSlot(e.state,4);if(o>0)return e.reduce(o),Xy&&console.log(a+this.stackID(e)+` (via always-reduce ${i.getName(o&65535)})`),!0;if(e.stack.length>=8400)for(;e.stack.length>6e3&&e.forceReduce(););let s=this.tokens.getActions(e);for(let o=0;o<s.length;){let c=s[o++],l=s[o++],u=s[o++],d=o==s.length||!n,f=d?e:e.split(),p=this.tokens.mainToken;if(f.apply(c,l,p?p.start:f.pos,u),Xy&&console.log(a+this.stackID(f)+` (via ${c&65536?`reduce of ${i.getName(c&65535)}`:`shift`} for ${i.getName(l)} @ ${r}${f==e?``:`, split`})`),d)return!0;f.pos>r?t.push(f):n.push(f)}return!1}advanceFully(e,t){let n=e.pos;for(;;){if(!this.advanceStack(e,null,null))return!1;if(e.pos>n)return nb(e,t),!0}}runRecovery(e,t,n){let r=null,i=!1;for(let a=0;a<e.length;a++){let o=e[a],s=t[a<<1],c=t[(a<<1)+1],l=Xy?this.stackID(o)+` -> `:``;if(o.deadEnd&&(i||(i=!0,o.restart(),Xy&&console.log(l+this.stackID(o)+` (restarted)`),this.advanceFully(o,n))))continue;let u=o.split(),d=l;for(let e=0;e<10&&u.forceReduce()&&(Xy&&console.log(d+this.stackID(u)+` (via force-reduce)`),!this.advanceFully(u,n));e++)Xy&&(d=this.stackID(u)+` -> `);for(let e of o.recoverByInsert(s))Xy&&console.log(l+this.stackID(e)+` (via recover-insert)`),this.advanceFully(e,n);this.stream.end>o.pos?(c==o.pos&&(c++,s=0),o.recoverByDelete(s,c),Xy&&console.log(l+this.stackID(o)+` (via recover-delete ${this.parser.getName(s)})`),nb(o,n)):(!r||r.score<u.score)&&(r=u)}return r}stackToTree(e){return e.close(),q.build({buffer:zy.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:e.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(e){let t=(Zy||=new WeakMap).get(e);return t||Zy.set(e,t=String.fromCodePoint(this.nextStackID++)),t+e}};function nb(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(r.pos==e.pos&&r.sameState(e)){t[n].score<e.score&&(t[n]=e);return}}t.push(e)}var rb=class{constructor(e,t,n){this.source=e,this.flags=t,this.disabled=n}allows(e){return!this.disabled||this.disabled[e]==0}},ib=e=>e,ab=class{constructor(e){this.start=e.start,this.shift=e.shift||ib,this.reduce=e.reduce||ib,this.reuse=e.reuse||ib,this.hash=e.hash||(()=>0),this.strict=e.strict!==!1}},ob=class e extends Wu{constructor(e){if(super(),this.wrappers=[],e.version!=14)throw RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);let t=e.nodeNames.split(` `);this.minRepeatTerm=t.length;for(let n=0;n<e.repeatNodeCount;n++)t.push(``);let n=Object.keys(e.topRules).map(t=>e.topRules[t][1]),r=[];for(let e=0;e<t.length;e++)r.push([]);function i(e,t,n){r[e].push([t,t.deserialize(String(n))])}if(e.nodeProps)for(let t of e.nodeProps){let e=t[0];typeof e==`string`&&(e=W[e]);for(let n=1;n<t.length;){let r=t[n++];if(r>=0)i(r,e,t[n++]);else{let a=t[n+-r];for(let o=-r;o>0;o--)i(t[n++],e,a);n++}}}this.nodeSet=new bu(t.map((t,i)=>G.define({name:i>=this.minRepeatTerm?void 0:t,id:i,props:r[i],top:n.indexOf(i)>-1,error:i==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(i)>-1}))),e.propSources&&(this.nodeSet=this.nodeSet.extend(...e.propSources)),this.strict=!1,this.bufferLength=hu;let a=By(e.tokenData);this.context=e.context,this.specializerSpecs=e.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let e=0;e<this.specializerSpecs.length;e++)this.specialized[e]=this.specializerSpecs[e].term;this.specializers=this.specializerSpecs.map(lb),this.states=By(e.states,Uint32Array),this.data=By(e.stateData),this.goto=By(e.goto),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(e=>typeof e==`number`?new Wy(a,e):e),this.topRules=e.topRules,this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(e,t,n){let r=new tb(this,e,t,n);for(let i of this.wrappers)r=i(r,e,t,n);return r}getGoto(e,t,n=!1){let r=this.goto;if(t>=r[0])return-1;for(let i=r[t+1];;){let t=r[i++],a=t&1,o=r[i++];if(a&&n)return o;for(let n=i+(t>>1);i<n;i++)if(r[i]==e)return o;if(a)return-1}}hasAction(e,t){let n=this.data;for(let r=0;r<2;r++)for(let i=this.stateSlot(e,r?2:1),a;;i+=3){if((a=n[i])==65535)if(n[i+1]==1)a=n[i=sb(n,i+2)];else if(n[i+1]==2)return sb(n,i+2);else break;if(a==t||a==0)return sb(n,i+1)}return 0}stateSlot(e,t){return this.states[e*6+t]}stateFlag(e,t){return(this.stateSlot(e,0)&t)>0}validAction(e,t){return!!this.allActions(e,e=>e==t?!0:null)}allActions(e,t){let n=this.stateSlot(e,4),r=n?t(n):void 0;for(let n=this.stateSlot(e,1);r==null;n+=3){if(this.data[n]==65535)if(this.data[n+1]==1)n=sb(this.data,n+2);else break;r=t(sb(this.data,n+1))}return r}nextStates(e){let t=[];for(let n=this.stateSlot(e,1);;n+=3){if(this.data[n]==65535)if(this.data[n+1]==1)n=sb(this.data,n+2);else break;if(!(this.data[n+2]&1)){let e=this.data[n+1];t.some((t,n)=>n&1&&t==e)||t.push(this.data[n],e)}}return t}configure(t){let n=Object.assign(Object.create(e.prototype),this);if(t.props&&(n.nodeSet=this.nodeSet.extend(...t.props)),t.top){let e=this.topRules[t.top];if(!e)throw RangeError(`Invalid top rule name ${t.top}`);n.top=e}return t.tokenizers&&(n.tokenizers=this.tokenizers.map(e=>{let n=t.tokenizers.find(t=>t.from==e);return n?n.to:e})),t.specializers&&(n.specializers=this.specializers.slice(),n.specializerSpecs=this.specializerSpecs.map((e,r)=>{let i=t.specializers.find(t=>t.from==e.external);if(!i)return e;let a=Object.assign(Object.assign({},e),{external:i.to});return n.specializers[r]=lb(a),a})),t.contextTracker&&(n.context=t.contextTracker),t.dialect&&(n.dialect=this.parseDialect(t.dialect)),t.strict!=null&&(n.strict=t.strict),t.wrap&&(n.wrappers=n.wrappers.concat(t.wrap)),t.bufferLength!=null&&(n.bufferLength=t.bufferLength),n}hasWrappers(){return this.wrappers.length>0}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let t=this.dynamicPrecedences;return t==null?0:t[e]||0}parseDialect(e){let t=Object.keys(this.dialects),n=t.map(()=>!1);if(e)for(let r of e.split(` `)){let e=t.indexOf(r);e>=0&&(n[e]=!0)}let r=null;for(let e=0;e<t.length;e++)if(!n[e])for(let n=this.dialects[t[e]],i;(i=this.data[n++])!=65535;)(r||=new Uint8Array(this.maxTerm+1))[i]=1;return new rb(e,n,r)}static deserialize(t){return new e(t)}};function sb(e,t){return e[t]|e[t+1]<<16}function cb(e){let t=null;for(let n of e){let e=n.p.stoppedAt;(n.pos==n.p.stream.end||e!=null&&n.pos>e)&&n.p.parser.stateFlag(n.state,2)&&(!t||t.score<n.score)&&(t=n)}return t}function lb(e){if(e.external){let t=+!!e.extend;return(n,r)=>e.external(n,r)<<1|t}return e.get}var ub=316,db=317,fb=1,pb=2,mb=3,hb=4,gb=318,_b=320,vb=321,yb=5,bb=6,xb=0,Sb=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288],Cb=125,wb=59,Tb=47,Eb=42,Db=43,Ob=45,kb=60,Ab=44,jb=63,Mb=46,Nb=91,Pb=new ab({start:!1,shift(e,t){return t==yb||t==bb||t==_b?e:t==vb},strict:!1}),Fb=new Ky((e,t)=>{let{next:n}=e;(n==Cb||n==-1||t.context)&&e.acceptToken(gb)},{contextual:!0,fallback:!0}),Ib=new Ky((e,t)=>{let{next:n}=e,r;Sb.indexOf(n)>-1||n==Tb&&((r=e.peek(1))==Tb||r==Eb)||n!=Cb&&n!=wb&&n!=-1&&!t.context&&e.acceptToken(ub)},{contextual:!0}),Lb=new Ky((e,t)=>{e.next==Nb&&!t.context&&e.acceptToken(db)},{contextual:!0}),Rb=new Ky((e,t)=>{let{next:n}=e;if(n==Db||n==Ob){if(e.advance(),n==e.next){e.advance();let n=!t.context&&t.canShift(fb);e.acceptToken(n?fb:pb)}}else n==jb&&e.peek(1)==Mb&&(e.advance(),e.advance(),(e.next<48||e.next>57)&&e.acceptToken(mb))},{contextual:!0});function zb(e,t){return e>=65&&e<=90||e>=97&&e<=122||e==95||e>=192||!t&&e>=48&&e<=57}var Bb=new Ky((e,t)=>{if(e.next!=kb||!t.dialectEnabled(xb)||(e.advance(),e.next==Tb))return;let n=0;for(;Sb.indexOf(e.next)>-1;)e.advance(),n++;if(zb(e.next,!0)){for(e.advance(),n++;zb(e.next,!1);)e.advance(),n++;for(;Sb.indexOf(e.next)>-1;)e.advance(),n++;if(e.next==Ab)return;for(let t=0;;t++){if(t==7){if(!zb(e.next,!0))return;break}if(e.next!=`extends`.charCodeAt(t))break;e.advance(),n++}}e.acceptToken(hb,-n)}),Vb=fd({"get set async static":Y.modifier,"for while do if else switch try catch finally return throw break continue default case defer":Y.controlKeyword,"in of await yield void typeof delete instanceof as satisfies":Y.operatorKeyword,"let var const using function class extends":Y.definitionKeyword,"import export from":Y.moduleKeyword,"with debugger new":Y.keyword,TemplateString:Y.special(Y.string),super:Y.atom,BooleanLiteral:Y.bool,this:Y.self,null:Y.null,Star:Y.modifier,VariableName:Y.variableName,"CallExpression/VariableName TaggedTemplateExpression/VariableName":Y.function(Y.variableName),VariableDefinition:Y.definition(Y.variableName),Label:Y.labelName,PropertyName:Y.propertyName,PrivatePropertyName:Y.special(Y.propertyName),"CallExpression/MemberExpression/PropertyName":Y.function(Y.propertyName),"FunctionDeclaration/VariableDefinition":Y.function(Y.definition(Y.variableName)),"ClassDeclaration/VariableDefinition":Y.definition(Y.className),"NewExpression/VariableName":Y.className,PropertyDefinition:Y.definition(Y.propertyName),PrivatePropertyDefinition:Y.definition(Y.special(Y.propertyName)),UpdateOp:Y.updateOperator,"LineComment Hashbang":Y.lineComment,BlockComment:Y.blockComment,Number:Y.number,String:Y.string,Escape:Y.escape,ArithOp:Y.arithmeticOperator,LogicOp:Y.logicOperator,BitOp:Y.bitwiseOperator,CompareOp:Y.compareOperator,RegExp:Y.regexp,Equals:Y.definitionOperator,Arrow:Y.function(Y.punctuation),": Spread":Y.punctuation,"( )":Y.paren,"[ ]":Y.squareBracket,"{ }":Y.brace,"InterpolationStart InterpolationEnd":Y.special(Y.brace),".":Y.derefOperator,", ;":Y.separator,"@":Y.meta,TypeName:Y.typeName,TypeDefinition:Y.definition(Y.typeName),"type enum interface implements namespace module declare":Y.definitionKeyword,"abstract global Privacy readonly override":Y.modifier,"is keyof unique infer asserts":Y.operatorKeyword,JSXAttributeValue:Y.attributeValue,JSXText:Y.content,"JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag":Y.angleBracket,"JSXIdentifier JSXNameSpacedName":Y.tagName,"JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName":Y.attributeName,"JSXBuiltin/JSXIdentifier":Y.standard(Y.tagName)}),Hb={__proto__:null,export:20,as:25,from:33,default:36,async:41,function:42,in:52,out:55,const:56,extends:60,this:64,true:72,false:72,null:84,void:88,typeof:92,super:108,new:142,delete:154,yield:163,await:167,class:172,public:235,private:235,protected:235,readonly:237,instanceof:256,satisfies:259,import:292,keyof:349,unique:353,infer:359,asserts:395,is:397,abstract:417,implements:419,type:421,let:424,var:426,using:429,interface:435,enum:439,namespace:445,module:447,declare:451,global:455,defer:471,for:476,of:485,while:488,with:492,do:496,if:500,else:502,switch:506,case:512,try:518,catch:522,finally:526,return:530,throw:534,break:538,continue:542,debugger:546},Ub={__proto__:null,async:129,get:131,set:133,declare:195,public:197,private:197,protected:197,static:199,abstract:201,override:203,readonly:209,accessor:211,new:401},Wb={__proto__:null,"<":193},Gb=ob.deserialize({version:14,states:"$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",stateData:"()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",goto:"$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",nodeNames:`⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem`,maxTerm:380,context:Pb,nodeProps:[[`isolate`,-8,5,6,14,37,39,51,53,55,``],[`group`,-26,9,17,19,68,207,211,215,216,218,221,224,234,237,243,245,247,249,252,258,264,266,268,270,272,274,275,`Statement`,-34,13,14,32,35,36,42,51,54,55,57,62,70,72,76,80,82,84,85,110,111,120,121,136,139,141,142,143,144,145,147,148,167,169,171,`Expression`,-23,31,33,37,41,43,45,173,175,177,178,180,181,182,184,185,186,188,189,190,201,203,205,206,`Type`,-3,88,103,109,`ClassItem`],[`openedBy`,23,`<`,38,`InterpolationStart`,56,`[`,60,`{`,73,`(`,160,`JSXStartCloseTag`],[`closedBy`,-2,24,168,`>`,40,`InterpolationEnd`,50,`]`,61,`}`,74,`)`,165,`JSXEndTag`]],propSources:[Vb],skippedNodes:[0,5,6,278],repeatNodeCount:37,tokenData:"$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",tokenizers:[Ib,Lb,Rb,Bb,2,3,4,5,6,7,8,9,10,11,12,13,14,Fb,new Gy("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~",141,340),new Gy(`j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~`,25,323)],topRules:{Script:[0,7],SingleExpression:[1,276],SingleClassItem:[2,277]},dialects:{jsx:0,ts:15175},dynamicPrecedences:{80:1,82:1,94:1,169:1,199:1},specialized:[{term:327,get:e=>Hb[e]||-1},{term:343,get:e=>Ub[e]||-1},{term:95,get:e=>Wb[e]||-1}],tokenPrec:15201}),Kb=[Pv("function ${name}(${params}) {\n	${}\n}",{label:`function`,detail:`definition`,type:`keyword`}),Pv("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}",{label:`for`,detail:`loop`,type:`keyword`}),Pv("for (let ${name} of ${collection}) {\n	${}\n}",{label:`for`,detail:`of loop`,type:`keyword`}),Pv(`do {
	\${}
} while (\${})`,{label:`do`,detail:`loop`,type:`keyword`}),Pv(`while (\${}) {
	\${}
}`,{label:`while`,detail:`loop`,type:`keyword`}),Pv(`try {
	\${}
} catch (\${error}) {
	\${}
}`,{label:`try`,detail:`/ catch block`,type:`keyword`}),Pv(`if (\${}) {
	\${}
}`,{label:`if`,detail:`block`,type:`keyword`}),Pv(`if (\${}) {
	\${}
} else {
	\${}
}`,{label:`if`,detail:`/ else block`,type:`keyword`}),Pv(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`,{label:`class`,detail:`definition`,type:`keyword`}),Pv('import {${names}} from "${module}"\n${}',{label:`import`,detail:`named`,type:`keyword`}),Pv('import ${name} from "${module}"\n${}',{label:`import`,detail:`default`,type:`keyword`})],qb=Kb.concat([Pv(`interface \${name} {
	\${}
}`,{label:`interface`,detail:`definition`,type:`keyword`}),Pv("type ${name} = ${type}",{label:`type`,detail:`definition`,type:`keyword`}),Pv(`enum \${name} {
	\${}
}`,{label:`enum`,detail:`definition`,type:`keyword`})]),Jb=new Hu,Yb=new Set([`Script`,`Block`,`FunctionExpression`,`FunctionDeclaration`,`ArrowFunction`,`MethodDeclaration`,`ForStatement`]);function Xb(e){return(t,n)=>{let r=t.node.getChild(`VariableDefinition`);return r&&n(r,e),!0}}var Zb=[`FunctionDeclaration`],Qb={FunctionDeclaration:Xb(`function`),ClassDeclaration:Xb(`class`),ClassExpression:()=>!0,EnumDeclaration:Xb(`constant`),TypeAliasDeclaration:Xb(`type`),NamespaceDeclaration:Xb(`namespace`),VariableDefinition(e,t){e.matchContext(Zb)||t(e,`variable`)},TypeDefinition(e,t){t(e,`type`)},__proto__:null};function $b(e,t){let n=Jb.get(t);if(n)return n;let r=[],i=!0;function a(t,n){let i=e.sliceString(t.from,t.to);r.push({label:i,type:n})}return t.cursor(K.IncludeAnonymous).iterate(t=>{if(i)i=!1;else if(t.name){let e=Qb[t.name];if(e&&e(t,a)||Yb.has(t.name))return!1}else if(t.to-t.from>8192){for(let n of $b(e,t.node))r.push(n);return!1}}),Jb.set(t,r),r}var ex=/^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,tx=[`TemplateString`,`String`,`RegExp`,`LineComment`,`BlockComment`,`VariableDefinition`,`TypeDefinition`,`Label`,`PropertyDefinition`,`PropertyName`,`PrivatePropertyDefinition`,`PrivatePropertyName`,`JSXText`,`JSXAttributeValue`,`JSXOpenTag`,`JSXCloseTag`,`JSXSelfClosingTag`,`.`,`?.`];function nx(e){let t=X(e.state).resolveInner(e.pos,-1);if(tx.indexOf(t.name)>-1)return null;let n=t.name==`VariableName`||t.to-t.from<20&&ex.test(e.state.sliceDoc(t.from,t.to));if(!n&&!e.explicit)return null;let r=[];for(let n=t;n;n=n.parent)Yb.has(n.name)&&(r=r.concat($b(e.state.doc,n)));return{options:r,from:n?t.from:e.pos,validFor:ex}}var rx=zd.define({name:`javascript`,parser:Gb.configure({props:[rf.add({IfStatement:gf({except:/^\s*({|else\b)/}),TryStatement:gf({except:/^\s*({|catch\b|finally\b)/}),LabeledStatement:hf,SwitchBody:e=>{let t=e.textAfter,n=/^\s*\}/.test(t),r=/^\s*(case|default)\b/.test(t);return e.baseIndent+(n?0:r?1:2)*e.unit},Block:pf({closing:`}`}),ArrowFunction:e=>e.baseIndent+e.unit,"TemplateString BlockComment":()=>null,"Statement Property":gf({except:/^\s*{/}),JSXElement(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},JSXEscape(e){let t=/\s*\}/.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"JSXOpenTag JSXSelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),bf.add({"Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType":xf,BlockComment(e){return{from:e.from+2,to:e.to-2}},JSXElement(e){let t=e.firstChild;if(!t||t.name==`JSXSelfClosingTag`)return null;let n=e.lastChild;return{from:t.to,to:n.type.isError?e.to:n.from}},"JSXSelfClosingTag JSXOpenTag"(e){let t=e.firstChild?.nextSibling,n=e.lastChild;return!t||t.type.isError?null:{from:t.to,to:n.type.isError?e.to:n.from}}})]}),languageData:{closeBrackets:{brackets:[`(`,`[`,`{`,`'`,`"`,"`"]},commentTokens:{line:`//`,block:{open:`/*`,close:`*/`}},indentOnInput:/^\s*(?:case |default:|\{|\}|<\/)$/,wordChars:`$`}}),ix={test:e=>/^JSX/.test(e.name),facet:Fd({commentTokens:{block:{open:`{/*`,close:`*/}`}}})},ax=rx.configure({dialect:`ts`},`typescript`),ox=rx.configure({dialect:`jsx`,props:[Id.add(e=>e.isTop?[ix]:void 0)]}),sx=rx.configure({dialect:`jsx ts`,props:[Id.add(e=>e.isTop?[ix]:void 0)]},`typescript`),cx=e=>({label:e,type:`keyword`}),lx=`break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield`.split(` `).map(cx),ux=lx.concat([`declare`,`implements`,`private`,`protected`,`public`].map(cx));function dx(e={}){let t=e.jsx?e.typescript?sx:ox:e.typescript?ax:rx,n=e.typescript?qb.concat(ux):Kb.concat(lx);return new Yd(t,[rx.data.of({autocomplete:w_(tx,C_(n))}),rx.data.of({autocomplete:nx}),e.jsx?hx:[]])}function fx(e){for(;;){if(e.name==`JSXOpenTag`||e.name==`JSXSelfClosingTag`||e.name==`JSXFragmentTag`)return e;if(e.name==`JSXEscape`||!e.parent)return null;e=e.parent}}function px(e,t,n=e.length){for(let r=t?.firstChild;r;r=r.nextSibling)if(r.name==`JSXIdentifier`||r.name==`JSXBuiltin`||r.name==`JSXNamespacedName`||r.name==`JSXMemberExpression`)return e.sliceString(r.from,Math.min(r.to,n));return``}var mx=typeof navigator==`object`&&/Android\b/.test(navigator.userAgent),hx=U.inputHandler.of((e,t,n,r,i)=>{if((mx?e.composing:e.compositionStarted)||e.state.readOnly||t!=n||r!=`>`&&r!=`/`||!rx.isActiveAt(e.state,t,-1))return!1;let a=i(),{state:o}=a,s=o.changeByRange(e=>{let{head:t}=e,n=X(o).resolveInner(t-1,-1),i;if(n.name==`JSXStartTag`&&(n=n.parent),!(o.doc.sliceString(t-1,t)!=r||n.name==`JSXAttributeValue`&&n.to>t)){if(r==`>`&&n.name==`JSXFragmentTag`)return{range:e,changes:{from:t,insert:`</>`}};if(r==`/`&&n.name==`JSXStartCloseTag`){let e=n.parent,r=e.parent;if(r&&e.from==t-2&&((i=px(o.doc,r.firstChild,t))||r.firstChild?.name==`JSXFragmentTag`)){let e=`${i}>`;return{range:A.cursor(t+e.length,-1),changes:{from:t,insert:e}}}}else if(r==`>`){let r=fx(n);if(r&&r.name==`JSXOpenTag`&&!/^\/?>|^<\//.test(o.doc.sliceString(t,t+2))&&(i=px(o.doc,r,t)))return{range:e,changes:{from:t,insert:`</${i}>`}}}}return{range:e}});return s.changes.empty?!1:(e.dispatch([a,o.update(s,{userEvent:`input.complete`,scrollIntoView:!0})]),!0)}),gx=class e{constructor(e,t,n,r,i,a,o,s,c,l=0,u){this.p=e,this.stack=t,this.state=n,this.reducePos=r,this.pos=i,this.score=a,this.buffer=o,this.bufferBase=s,this.curContext=c,this.lookAhead=l,this.parent=u}toString(){return`[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?`!`+this.score:``}`}static start(t,n,r=0){let i=t.parser.context;return new e(t,[],n,r,r,0,[],0,i?new _x(i,i.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,t){this.stack.push(this.state,t,this.bufferBase+this.buffer.length),this.state=e}reduce(e){let t=e>>19,n=e&65535,{parser:r}=this.p,i=this.reducePos<this.pos-25&&this.setLookAhead(this.pos),a=r.dynamicPrecedence(n);if(a&&(this.score+=a),t==0){this.pushState(r.getGoto(this.state,n,!0),this.reducePos),n<r.minRepeatTerm&&this.storeNode(n,this.reducePos,this.reducePos,i?8:4,!0),this.reduceContext(n,this.reducePos);return}let o=this.stack.length-(t-1)*3-(e&262144?6:0),s=o?this.stack[o-2]:this.p.ranges[0].from,c=this.reducePos-s;c>=2e3&&!this.p.parser.nodeSet.types[n]?.isAnonymous&&(s==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=c):this.p.lastBigReductionSize<c&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=s,this.p.lastBigReductionSize=c));let l=o?this.stack[o-1]:0,u=this.bufferBase+this.buffer.length-l;if(n<r.minRepeatTerm||e&131072){let e=r.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(n,s,e,u+4,!0)}if(e&262144)this.state=this.stack[o];else{let e=this.stack[o-3];this.state=r.getGoto(e,n,!0)}for(;this.stack.length>o;)this.stack.pop();this.reduceContext(n,s)}storeNode(e,t,n,r=4,i=!1){if(e==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let e=this,r=this.buffer.length;if(r==0&&e.parent&&(r=e.bufferBase-e.parent.bufferBase,e=e.parent),r>0&&e.buffer[r-4]==0&&e.buffer[r-1]>-1){if(t==n)return;if(e.buffer[r-2]>=t){e.buffer[r-2]=n;return}}}if(!i||this.pos==n)this.buffer.push(e,t,n,r);else{let i=this.buffer.length;if(i>0&&(this.buffer[i-4]!=0||this.buffer[i-1]<0)){let e=!1;for(let t=i;t>0&&this.buffer[t-2]>n;t-=4)if(this.buffer[t-1]>=0){e=!0;break}if(e)for(;i>0&&this.buffer[i-2]>n;)this.buffer[i]=this.buffer[i-4],this.buffer[i+1]=this.buffer[i-3],this.buffer[i+2]=this.buffer[i-2],this.buffer[i+3]=this.buffer[i-1],i-=4,r>4&&(r-=4)}this.buffer[i]=e,this.buffer[i+1]=t,this.buffer[i+2]=n,this.buffer[i+3]=r}}shift(e,t,n,r){if(e&131072)this.pushState(e&65535,this.pos);else if(e&262144)this.pos=r,this.shiftContext(t,n),t<=this.p.parser.maxNode&&this.buffer.push(t,n,r,4);else{let i=e,{parser:a}=this.p;this.pos=r;let o=a.stateFlag(i,1);!o&&(r>n||t<=a.maxNode)&&(this.reducePos=r),this.pushState(i,o?n:Math.min(n,this.reducePos)),this.shiftContext(t,n),t<=a.maxNode&&this.buffer.push(t,n,r,4)}}apply(e,t,n,r){e&65536?this.reduce(e):this.shift(e,t,n,r)}useNode(e,t){let n=this.p.reused.length-1;(n<0||this.p.reused[n]!=e)&&(this.p.reused.push(e),n++);let r=this.pos;this.reducePos=this.pos=r+e.length,this.pushState(t,r),this.buffer.push(n,r,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this,this.p.stream.reset(this.pos-e.length)))}split(){let t=this,n=t.buffer.length;for(;n>0&&t.buffer[n-2]>t.reducePos;)n-=4;let r=t.buffer.slice(n),i=t.bufferBase+n;for(;t&&i==t.bufferBase;)t=t.parent;return new e(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,r,i,this.curContext,this.lookAhead,t)}recoverByDelete(e,t){let n=e<=this.p.parser.maxNode;n&&this.storeNode(e,this.pos,t,4),this.storeNode(0,this.pos,t,n?8:4),this.pos=this.reducePos=t,this.score-=190}canShift(e){for(let t=new vx(this);;){let n=this.p.parser.stateSlot(t.state,4)||this.p.parser.hasAction(t.state,e);if(n==0)return!1;if(!(n&65536))return!0;t.reduce(n)}}recoverByInsert(e){if(this.stack.length>=300)return[];let t=this.p.parser.nextStates(this.state);if(t.length>8||this.stack.length>=120){let n=[];for(let r=0,i;r<t.length;r+=2)(i=t[r+1])!=this.state&&this.p.parser.hasAction(i,e)&&n.push(t[r],i);if(this.stack.length<120)for(let e=0;n.length<8&&e<t.length;e+=2){let r=t[e+1];n.some((e,t)=>t&1&&e==r)||n.push(t[e],r)}t=n}let n=[];for(let e=0;e<t.length&&n.length<4;e+=2){let r=t[e+1];if(r==this.state)continue;let i=this.split();i.pushState(r,this.pos),i.storeNode(0,i.pos,i.pos,4,!0),i.shiftContext(t[e],this.pos),i.reducePos=this.pos,i.score-=200,n.push(i)}return n}forceReduce(){let{parser:e}=this.p,t=e.stateSlot(this.state,5);if(!(t&65536))return!1;if(!e.validAction(this.state,t)){let n=t>>19,r=t&65535,i=this.stack.length-n*3;if(i<0||e.getGoto(this.stack[i],r,!1)<0){let e=this.findForcedReduction();if(e==null)return!1;t=e}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}findForcedReduction(){let{parser:e}=this.p,t=[],n=(r,i)=>{if(!t.includes(r))return t.push(r),e.allActions(r,t=>{if(!(t&393216))if(t&65536){let n=(t>>19)-i;if(n>1){let r=t&65535,i=this.stack.length-n*3;if(i>=0&&e.getGoto(this.stack[i],r,!1)>=0)return n<<19|65536|r}}else{let e=n(t,i+1);if(e!=null)return e}})};return n(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:e}=this.p;return e.data[e.stateSlot(this.state,1)]==65535&&!e.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let t=0;t<this.stack.length;t+=3)if(this.stack[t]!=e.stack[t])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this,this.p.stream.reset(t)))}reduceContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this,this.p.stream.reset(t)))}emitContext(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-3)&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-4)&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(e){if(e!=this.curContext.context){let t=new _x(this.curContext.tracker,e);t.hash!=this.curContext.hash&&this.emitContext(),this.curContext=t}}setLookAhead(e){return e<=this.lookAhead?!1:(this.emitLookAhead(),this.lookAhead=e,!0)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}},_x=class{constructor(e,t){this.tracker=e,this.context=t,this.hash=e.strict?e.hash(t):0}},vx=class{constructor(e){this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}reduce(e){let t=e&65535,n=e>>19;n==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(n-1)*3;let r=this.start.p.parser.getGoto(this.stack[this.base-3],t,!0);this.state=r}},yx=class e{constructor(e,t,n){this.stack=e,this.pos=t,this.index=n,this.buffer=e.buffer,this.index==0&&this.maybeNext()}static create(t,n=t.bufferBase+t.buffer.length){return new e(t,n,n-t.bufferBase)}maybeNext(){let e=this.stack.parent;e!=null&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new e(this.stack,this.pos,this.index)}};function bx(e,t=Uint16Array){if(typeof e!=`string`)return e;let n=null;for(let r=0,i=0;r<e.length;){let a=0;for(;;){let t=e.charCodeAt(r++),n=!1;if(t==126){a=65535;break}t>=92&&t--,t>=34&&t--;let i=t-32;if(i>=46&&(i-=46,n=!0),a+=i,n)break;a*=46}n?n[i++]=a:n=new t(a)}return n}var xx=class{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}},Sx=new xx,Cx=class{constructor(e,t){this.input=e,this.ranges=t,this.chunk=``,this.chunkOff=0,this.chunk2=``,this.chunk2Pos=0,this.next=-1,this.token=Sx,this.rangeIndex=0,this.pos=this.chunkPos=t[0].from,this.range=t[0],this.end=t[t.length-1].to,this.readNext()}resolveOffset(e,t){let n=this.range,r=this.rangeIndex,i=this.pos+e;for(;i<n.from;){if(!r)return null;let e=this.ranges[--r];i-=n.from-e.to,n=e}for(;t<0?i>n.to:i>=n.to;){if(r==this.ranges.length-1)return null;let e=this.ranges[++r];i+=e.from-n.to,n=e}return i}clipPos(e){if(e>=this.range.from&&e<this.range.to)return e;for(let t of this.ranges)if(t.to>e)return Math.max(e,t.from);return this.end}peek(e){let t=this.chunkOff+e,n,r;if(t>=0&&t<this.chunk.length)n=this.pos+e,r=this.chunk.charCodeAt(t);else{let t=this.resolveOffset(e,1);if(t==null)return-1;if(n=t,n>=this.chunk2Pos&&n<this.chunk2Pos+this.chunk2.length)r=this.chunk2.charCodeAt(n-this.chunk2Pos);else{let e=this.rangeIndex,t=this.range;for(;t.to<=n;)t=this.ranges[++e];this.chunk2=this.input.chunk(this.chunk2Pos=n),n+this.chunk2.length>t.to&&(this.chunk2=this.chunk2.slice(0,t.to-n)),r=this.chunk2.charCodeAt(0)}}return n>=this.token.lookAhead&&(this.token.lookAhead=n+1),r}acceptToken(e,t=0){let n=t?this.resolveOffset(t,-1):this.pos;if(n==null||n<this.token.start)throw RangeError(`Token end out of bounds`);this.token.value=e,this.token.end=n}acceptTokenTo(e,t){this.token.value=e,this.token.end=t}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:e,chunkPos:t}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=e,this.chunk2Pos=t,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let e=this.input.chunk(this.pos),t=this.pos+e.length;this.chunk=t>this.range.to?e.slice(0,this.range.to-this.pos):e,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(e=1){for(this.chunkOff+=e;this.pos+e>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();e-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=e,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk=``,this.next=-1}reset(e,t){if(t?(this.token=t,t.start=e,t.lookAhead=e+1,t.value=t.extended=-1):this.token=Sx,this.pos!=e){if(this.pos=e,e==this.end)return this.setDone(),this;for(;e<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;e>=this.range.to;)this.range=this.ranges[++this.rangeIndex];e>=this.chunkPos&&e<this.chunkPos+this.chunk.length?this.chunkOff=e-this.chunkPos:(this.chunk=``,this.chunkOff=0),this.readNext()}return this}read(e,t){if(e>=this.chunkPos&&t<=this.chunkPos+this.chunk.length)return this.chunk.slice(e-this.chunkPos,t-this.chunkPos);if(e>=this.chunk2Pos&&t<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(e-this.chunk2Pos,t-this.chunk2Pos);if(e>=this.range.from&&t<=this.range.to)return this.input.read(e,t);let n=``;for(let r of this.ranges){if(r.from>=t)break;r.to>e&&(n+=this.input.read(Math.max(r.from,e),Math.min(r.to,t)))}return n}},wx=class{constructor(e,t){this.data=e,this.id=t}token(e,t){let{parser:n}=t.p;Dx(this.data,e,t,this.id,n.data,n.tokenPrecTable)}};wx.prototype.contextual=wx.prototype.fallback=wx.prototype.extend=!1;var Tx=class{constructor(e,t,n){this.precTable=t,this.elseToken=n,this.data=typeof e==`string`?bx(e):e}token(e,t){let n=e.pos,r=0;for(;;){let n=e.next<0,i=e.resolveOffset(1,1);if(Dx(this.data,e,t,0,this.data,this.precTable),e.token.value>-1)break;if(this.elseToken==null)return;if(n||r++,i==null)break;e.reset(i,e.token)}r&&(e.reset(n,e.token),e.acceptToken(this.elseToken,r))}};Tx.prototype.contextual=wx.prototype.fallback=wx.prototype.extend=!1;var Ex=class{constructor(e,t={}){this.token=e,this.contextual=!!t.contextual,this.fallback=!!t.fallback,this.extend=!!t.extend}};function Dx(e,t,n,r,i,a){let o=0,s=1<<r,{dialect:c}=n.p.parser;scan:for(;(s&e[o])!=0;){let n=e[o+1];for(let r=o+3;r<n;r+=2)if((e[r+1]&s)>0){let n=e[r];if(c.allows(n)&&(t.token.value==-1||t.token.value==n||kx(n,t.token.value,i,a))){t.acceptToken(n);break}}let r=t.next,l=0,u=e[o+2];if(t.next<0&&u>l&&e[n+u*3-3]==65535){o=e[n+u*3-1];continue scan}for(;l<u;){let i=l+u>>1,a=n+i+(i<<1),s=e[a],c=e[a+1]||65536;if(r<s)u=i;else if(r>=c)l=i+1;else{o=e[a+2],t.advance();continue scan}}break}}function Ox(e,t,n){for(let r=t,i;(i=e[r])!=65535;r++)if(i==n)return r-t;return-1}function kx(e,t,n,r){let i=Ox(n,r,t);return i<0||Ox(n,r,e)<i}var Ax=typeof process<`u`&&/\bparse\b/.test({}.LOG),jx=null;function Mx(e,t,n){let r=e.cursor(K.IncludeAnonymous);for(r.moveTo(t);;)if(!(n<0?r.childBefore(t):r.childAfter(t)))for(;;){if((n<0?r.to<t:r.from>t)&&!r.type.isError)return n<0?Math.max(0,Math.min(r.to-1,t-25)):Math.min(e.length,Math.max(r.from+1,t+25));if(n<0?r.prevSibling():r.nextSibling())break;if(!r.parent())return n<0?0:e.length}}var Nx=class{constructor(e,t){this.fragments=e,this.nodeSet=t,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?Mx(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?Mx(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let t=this.trees.length-1;if(t<0)return this.nextFragment(),null;let n=this.trees[t],r=this.index[t];if(r==n.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let i=n.children[r],a=this.start[t]+n.positions[r];if(a>e)return this.nextStart=a,null;if(i instanceof q){if(a==e){if(a<this.safeFrom)return null;let e=a+i.length;if(e<=this.safeTo){let t=i.prop(W.lookAhead);if(!t||e+t<this.fragment.to)return i}}this.index[t]++,a+i.length>=Math.max(this.safeFrom,e)&&(this.trees.push(i),this.start.push(a),this.index.push(0))}else this.index[t]++,this.nextStart=a+i.length}}},Px=class{constructor(e,t){this.stream=t,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map(e=>new xx)}getActions(e){let t=0,n=null,{parser:r}=e.p,{tokenizers:i}=r,a=r.stateSlot(e.state,3),o=e.curContext?e.curContext.hash:0,s=0;for(let r=0;r<i.length;r++){if(!(1<<r&a))continue;let c=i[r],l=this.tokens[r];if(!(n&&!c.fallback)&&((c.contextual||l.start!=e.pos||l.mask!=a||l.context!=o)&&(this.updateCachedToken(l,c,e),l.mask=a,l.context=o),l.lookAhead>l.end+25&&(s=Math.max(l.lookAhead,s)),l.value!=0)){let r=t;if(l.extended>-1&&(t=this.addActions(e,l.extended,l.end,t)),t=this.addActions(e,l.value,l.end,t),!c.extend&&(n=l,t>r))break}}for(;this.actions.length>t;)this.actions.pop();return s&&e.setLookAhead(s),!n&&e.pos==this.stream.end&&(n=new xx,n.value=e.p.parser.eofTerm,n.start=n.end=e.pos,t=this.addActions(e,n.value,n.end,t)),this.mainToken=n,this.actions}getMainToken(e){if(this.mainToken)return this.mainToken;let t=new xx,{pos:n,p:r}=e;return t.start=n,t.end=Math.min(n+1,r.stream.end),t.value=n==r.stream.end?r.parser.eofTerm:0,t}updateCachedToken(e,t,n){let r=this.stream.clipPos(n.pos);if(t.token(this.stream.reset(r,e),n),e.value>-1){let{parser:t}=n.p;for(let r=0;r<t.specialized.length;r++)if(t.specialized[r]==e.value){let i=t.specializers[r](this.stream.read(e.start,e.end),n);if(i>=0&&n.p.parser.dialect.allows(i>>1)){i&1?e.extended=i>>1:e.value=i>>1;break}}}else e.value=0,e.end=this.stream.clipPos(r+1)}putAction(e,t,n,r){for(let t=0;t<r;t+=3)if(this.actions[t]==e)return r;return this.actions[r++]=e,this.actions[r++]=t,this.actions[r++]=n,r}addActions(e,t,n,r){let{state:i}=e,{parser:a}=e.p,{data:o}=a;for(let e=0;e<2;e++)for(let s=a.stateSlot(i,e?2:1);;s+=3){if(o[s]==65535)if(o[s+1]==1)s=Vx(o,s+2);else{r==0&&o[s+1]==2&&(r=this.putAction(Vx(o,s+2),t,n,r));break}o[s]==t&&(r=this.putAction(Vx(o,s+1),t,n,r))}return r}},Fx=class{constructor(e,t,n,r){this.parser=e,this.input=t,this.ranges=r,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new Cx(t,r),this.tokens=new Px(e,this.stream),this.topTerm=e.top[1];let{from:i}=r[0];this.stacks=[gx.start(this,e.top[0],i)],this.fragments=n.length&&this.stream.end-i>e.bufferLength*4?new Nx(n,e.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let e=this.stacks,t=this.minStackPos,n=this.stacks=[],r,i;if(this.bigReductionCount>300&&e.length==1){let[t]=e;for(;t.forceReduce()&&t.stack.length&&t.stack[t.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let a=0;a<e.length;a++){let o=e[a];for(;;){if(this.tokens.mainToken=null,o.pos>t)n.push(o);else if(this.advanceStack(o,n,e))continue;else{r||(r=[],i=[]),r.push(o);let e=this.tokens.getMainToken(o);i.push(e.value,e.end)}break}}if(!n.length){let e=r&&Hx(r);if(e)return Ax&&console.log(`Finish with `+this.stackID(e)),this.stackToTree(e);if(this.parser.strict)throw Ax&&r&&console.log(`Stuck with token `+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):`none`)),SyntaxError(`No parse at `+t);this.recovering||=5}if(this.recovering&&r){let e=this.stoppedAt!=null&&r[0].pos>this.stoppedAt?r[0]:this.runRecovery(r,i,n);if(e)return Ax&&console.log(`Force-finish `+this.stackID(e)),this.stackToTree(e.forceAll())}if(this.recovering){let e=this.recovering==1?1:this.recovering*3;if(n.length>e)for(n.sort((e,t)=>t.score-e.score);n.length>e;)n.pop();n.some(e=>e.reducePos>t)&&this.recovering--}else if(n.length>1){outer:for(let e=0;e<n.length-1;e++){let t=n[e];for(let r=e+1;r<n.length;r++){let i=n[r];if(t.sameState(i)||t.buffer.length>500&&i.buffer.length>500)if((t.score-i.score||t.buffer.length-i.buffer.length)>0)n.splice(r--,1);else{n.splice(e--,1);continue outer}}}n.length>12&&(n.sort((e,t)=>t.score-e.score),n.splice(12,n.length-12))}this.minStackPos=n[0].pos;for(let e=1;e<n.length;e++)n[e].pos<this.minStackPos&&(this.minStackPos=n[e].pos);return null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw RangeError(`Can't move stoppedAt forward`);this.stoppedAt=e}advanceStack(e,t,n){let r=e.pos,{parser:i}=this,a=Ax?this.stackID(e)+` -> `:``;if(this.stoppedAt!=null&&r>this.stoppedAt)return e.forceReduce()?e:null;if(this.fragments){let t=e.curContext&&e.curContext.tracker.strict,n=t?e.curContext.hash:0;for(let o=this.fragments.nodeAt(r);o;){let r=this.parser.nodeSet.types[o.type.id]==o.type?i.getGoto(e.state,o.type.id):-1;if(r>-1&&o.length&&(!t||(o.prop(W.contextHash)||0)==n))return e.useNode(o,r),Ax&&console.log(a+this.stackID(e)+` (via reuse of ${i.getName(o.type.id)})`),!0;if(!(o instanceof q)||o.children.length==0||o.positions[0]>0)break;let s=o.children[0];if(s instanceof q&&o.positions[0]==0)o=s;else break}}let o=i.stateSlot(e.state,4);if(o>0)return e.reduce(o),Ax&&console.log(a+this.stackID(e)+` (via always-reduce ${i.getName(o&65535)})`),!0;if(e.stack.length>=8400)for(;e.stack.length>6e3&&e.forceReduce(););let s=this.tokens.getActions(e);for(let o=0;o<s.length;){let c=s[o++],l=s[o++],u=s[o++],d=o==s.length||!n,f=d?e:e.split(),p=this.tokens.mainToken;if(f.apply(c,l,p?p.start:f.pos,u),Ax&&console.log(a+this.stackID(f)+` (via ${c&65536?`reduce of ${i.getName(c&65535)}`:`shift`} for ${i.getName(l)} @ ${r}${f==e?``:`, split`})`),d)return!0;f.pos>r?t.push(f):n.push(f)}return!1}advanceFully(e,t){let n=e.pos;for(;;){if(!this.advanceStack(e,null,null))return!1;if(e.pos>n)return Ix(e,t),!0}}runRecovery(e,t,n){let r=null,i=!1;for(let a=0;a<e.length;a++){let o=e[a],s=t[a<<1],c=t[(a<<1)+1],l=Ax?this.stackID(o)+` -> `:``;if(o.deadEnd&&(i||(i=!0,o.restart(),Ax&&console.log(l+this.stackID(o)+` (restarted)`),this.advanceFully(o,n))))continue;let u=o.split(),d=l;for(let e=0;e<10&&u.forceReduce()&&(Ax&&console.log(d+this.stackID(u)+` (via force-reduce)`),!this.advanceFully(u,n));e++)Ax&&(d=this.stackID(u)+` -> `);for(let e of o.recoverByInsert(s))Ax&&console.log(l+this.stackID(e)+` (via recover-insert)`),this.advanceFully(e,n);this.stream.end>o.pos?(c==o.pos&&(c++,s=0),o.recoverByDelete(s,c),Ax&&console.log(l+this.stackID(o)+` (via recover-delete ${this.parser.getName(s)})`),Ix(o,n)):(!r||r.score<u.score)&&(r=u)}return r}stackToTree(e){return e.close(),q.build({buffer:yx.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:e.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(e){let t=(jx||=new WeakMap).get(e);return t||jx.set(e,t=String.fromCodePoint(this.nextStackID++)),t+e}};function Ix(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(r.pos==e.pos&&r.sameState(e)){t[n].score<e.score&&(t[n]=e);return}}t.push(e)}var Lx=class{constructor(e,t,n){this.source=e,this.flags=t,this.disabled=n}allows(e){return!this.disabled||this.disabled[e]==0}},Rx=e=>e,zx=class{constructor(e){this.start=e.start,this.shift=e.shift||Rx,this.reduce=e.reduce||Rx,this.reuse=e.reuse||Rx,this.hash=e.hash||(()=>0),this.strict=e.strict!==!1}},Bx=class e extends Wu{constructor(e){if(super(),this.wrappers=[],e.version!=14)throw RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);let t=e.nodeNames.split(` `);this.minRepeatTerm=t.length;for(let n=0;n<e.repeatNodeCount;n++)t.push(``);let n=Object.keys(e.topRules).map(t=>e.topRules[t][1]),r=[];for(let e=0;e<t.length;e++)r.push([]);function i(e,t,n){r[e].push([t,t.deserialize(String(n))])}if(e.nodeProps)for(let t of e.nodeProps){let e=t[0];typeof e==`string`&&(e=W[e]);for(let n=1;n<t.length;){let r=t[n++];if(r>=0)i(r,e,t[n++]);else{let a=t[n+-r];for(let o=-r;o>0;o--)i(t[n++],e,a);n++}}}this.nodeSet=new bu(t.map((t,i)=>G.define({name:i>=this.minRepeatTerm?void 0:t,id:i,props:r[i],top:n.indexOf(i)>-1,error:i==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(i)>-1}))),e.propSources&&(this.nodeSet=this.nodeSet.extend(...e.propSources)),this.strict=!1,this.bufferLength=hu;let a=bx(e.tokenData);this.context=e.context,this.specializerSpecs=e.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let e=0;e<this.specializerSpecs.length;e++)this.specialized[e]=this.specializerSpecs[e].term;this.specializers=this.specializerSpecs.map(Ux),this.states=bx(e.states,Uint32Array),this.data=bx(e.stateData),this.goto=bx(e.goto),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(e=>typeof e==`number`?new wx(a,e):e),this.topRules=e.topRules,this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(e,t,n){let r=new Fx(this,e,t,n);for(let i of this.wrappers)r=i(r,e,t,n);return r}getGoto(e,t,n=!1){let r=this.goto;if(t>=r[0])return-1;for(let i=r[t+1];;){let t=r[i++],a=t&1,o=r[i++];if(a&&n)return o;for(let n=i+(t>>1);i<n;i++)if(r[i]==e)return o;if(a)return-1}}hasAction(e,t){let n=this.data;for(let r=0;r<2;r++)for(let i=this.stateSlot(e,r?2:1),a;;i+=3){if((a=n[i])==65535)if(n[i+1]==1)a=n[i=Vx(n,i+2)];else if(n[i+1]==2)return Vx(n,i+2);else break;if(a==t||a==0)return Vx(n,i+1)}return 0}stateSlot(e,t){return this.states[e*6+t]}stateFlag(e,t){return(this.stateSlot(e,0)&t)>0}validAction(e,t){return!!this.allActions(e,e=>e==t?!0:null)}allActions(e,t){let n=this.stateSlot(e,4),r=n?t(n):void 0;for(let n=this.stateSlot(e,1);r==null;n+=3){if(this.data[n]==65535)if(this.data[n+1]==1)n=Vx(this.data,n+2);else break;r=t(Vx(this.data,n+1))}return r}nextStates(e){let t=[];for(let n=this.stateSlot(e,1);;n+=3){if(this.data[n]==65535)if(this.data[n+1]==1)n=Vx(this.data,n+2);else break;if(!(this.data[n+2]&1)){let e=this.data[n+1];t.some((t,n)=>n&1&&t==e)||t.push(this.data[n],e)}}return t}configure(t){let n=Object.assign(Object.create(e.prototype),this);if(t.props&&(n.nodeSet=this.nodeSet.extend(...t.props)),t.top){let e=this.topRules[t.top];if(!e)throw RangeError(`Invalid top rule name ${t.top}`);n.top=e}return t.tokenizers&&(n.tokenizers=this.tokenizers.map(e=>{let n=t.tokenizers.find(t=>t.from==e);return n?n.to:e})),t.specializers&&(n.specializers=this.specializers.slice(),n.specializerSpecs=this.specializerSpecs.map((e,r)=>{let i=t.specializers.find(t=>t.from==e.external);if(!i)return e;let a=Object.assign(Object.assign({},e),{external:i.to});return n.specializers[r]=Ux(a),a})),t.contextTracker&&(n.context=t.contextTracker),t.dialect&&(n.dialect=this.parseDialect(t.dialect)),t.strict!=null&&(n.strict=t.strict),t.wrap&&(n.wrappers=n.wrappers.concat(t.wrap)),t.bufferLength!=null&&(n.bufferLength=t.bufferLength),n}hasWrappers(){return this.wrappers.length>0}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let t=this.dynamicPrecedences;return t==null?0:t[e]||0}parseDialect(e){let t=Object.keys(this.dialects),n=t.map(()=>!1);if(e)for(let r of e.split(` `)){let e=t.indexOf(r);e>=0&&(n[e]=!0)}let r=null;for(let e=0;e<t.length;e++)if(!n[e])for(let n=this.dialects[t[e]],i;(i=this.data[n++])!=65535;)(r||=new Uint8Array(this.maxTerm+1))[i]=1;return new Lx(e,n,r)}static deserialize(t){return new e(t)}};function Vx(e,t){return e[t]|e[t+1]<<16}function Hx(e){let t=null;for(let n of e){let e=n.p.stoppedAt;(n.pos==n.p.stream.end||e!=null&&n.pos>e)&&n.p.parser.stateFlag(n.state,2)&&(!t||t.score<n.score)&&(t=n)}return t}function Ux(e){if(e.external){let t=+!!e.extend;return(n,r)=>e.external(n,r)<<1|t}return e.get}var Wx=55,Gx=1,Kx=56,qx=2,Jx=57,Yx=3,Xx=4,Zx=5,Qx=6,$x=7,eS=8,tS=9,nS=10,rS=11,iS=12,aS=13,oS=58,sS=14,cS=15,lS=59,uS=21,dS=23,fS=24,pS=25,mS=27,hS=28,gS=29,_S=32,vS=35,yS=37,bS=38,xS=0,SS=1,CS={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},wS={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},TS={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function ES(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}var DS=null,OS=null,kS=0;function AS(e,t){let n=e.pos+t;if(kS==n&&OS==e)return DS;let r=e.peek(t),i=``;for(;ES(r);)i+=String.fromCharCode(r),r=e.peek(++t);return OS=e,kS=n,DS=i?i.toLowerCase():r==PS||r==FS?void 0:null}var jS=60,MS=62,NS=47,PS=63,FS=33,IS=45;function LS(e,t){this.name=e,this.parent=t}var RS=[Qx,nS,$x,eS,tS],zS=new zx({start:null,shift(e,t,n,r){return RS.indexOf(t)>-1?new LS(AS(r,1)||``,e):e},reduce(e,t){return t==uS&&e?e.parent:e},reuse(e,t,n,r){let i=t.type.id;return i==Qx||i==yS?new LS(AS(r,1)||``,e):e},strict:!1}),BS=new Ex((e,t)=>{if(e.next!=jS){e.next<0&&t.context&&e.acceptToken(oS);return}e.advance();let n=e.next==NS;n&&e.advance();let r=AS(e,0);if(r===void 0)return;if(!r)return e.acceptToken(n?cS:sS);let i=t.context?t.context.name:null;if(n){if(r==i)return e.acceptToken(rS);if(i&&wS[i])return e.acceptToken(oS,-2);if(t.dialectEnabled(xS))return e.acceptToken(iS);for(let e=t.context;e;e=e.parent)if(e.name==r)return;e.acceptToken(aS)}else{if(r==`script`)return e.acceptToken($x);if(r==`style`)return e.acceptToken(eS);if(r==`textarea`)return e.acceptToken(tS);if(CS.hasOwnProperty(r))return e.acceptToken(nS);i&&TS[i]&&TS[i][r]?e.acceptToken(oS,-1):e.acceptToken(Qx)}},{contextual:!0}),VS=new Ex(e=>{for(let t=0,n=0;;n++){if(e.next<0){n&&e.acceptToken(lS);break}if(e.next==IS)t++;else if(e.next==MS&&t>=2){n>=3&&e.acceptToken(lS,-2);break}else t=0;e.advance()}});function HS(e){for(;e;e=e.parent)if(e.name==`svg`||e.name==`math`)return!0;return!1}var US=new Ex((e,t)=>{if(e.next==NS&&e.peek(1)==MS){let n=t.dialectEnabled(SS)||HS(t.context);e.acceptToken(n?Zx:Xx,2)}else e.next==MS&&e.acceptToken(Xx,1)});function WS(e,t,n){let r=2+e.length;return new Ex(i=>{for(let a=0,o=0,s=0;;s++){if(i.next<0){s&&i.acceptToken(t);break}if(a==0&&i.next==jS||a==1&&i.next==NS||a>=2&&a<r&&i.next==e.charCodeAt(a-2))a++,o++;else if(a==r&&i.next==MS){s>o?i.acceptToken(t,-o):i.acceptToken(n,-(o-2));break}else if((i.next==10||i.next==13)&&s){i.acceptToken(t,1);break}else a=o=0;i.advance()}})}var GS=WS(`script`,Wx,Gx),KS=WS(`style`,Kx,qx),qS=WS(`textarea`,Jx,Yx),JS=fd({"Text RawText IncompleteTag IncompleteCloseTag":Y.content,"StartTag StartCloseTag SelfClosingEndTag EndTag":Y.angleBracket,TagName:Y.tagName,"MismatchedCloseTag/TagName":[Y.tagName,Y.invalid],AttributeName:Y.attributeName,"AttributeValue UnquotedAttributeValue":Y.attributeValue,Is:Y.definitionOperator,"EntityReference CharacterReference":Y.character,Comment:Y.blockComment,ProcessingInst:Y.processingInstruction,DoctypeDecl:Y.documentMeta}),YS=Bx.deserialize({version:14,states:",xOVO!rOOO!ZQ#tO'#CrO!`Q#tO'#C{O!eQ#tO'#DOO!jQ#tO'#DRO!oQ#tO'#DTO!tOaO'#CqO#PObO'#CqO#[OdO'#CqO$kO!rO'#CqOOO`'#Cq'#CqO$rO$fO'#DUO$zQ#tO'#DWO%PQ#tO'#DXOOO`'#Dl'#DlOOO`'#DZ'#DZQVO!rOOO%UQ&rO,59^O%aQ&rO,59gO%lQ&rO,59jO%wQ&rO,59mO&SQ&rO,59oOOOa'#D_'#D_O&_OaO'#CyO&jOaO,59]OOOb'#D`'#D`O&rObO'#C|O&}ObO,59]OOOd'#Da'#DaO'VOdO'#DPO'bOdO,59]OOO`'#Db'#DbO'jO!rO,59]O'qQ#tO'#DSOOO`,59],59]OOOp'#Dc'#DcO'vO$fO,59pOOO`,59p,59pO(OQ#|O,59rO(TQ#|O,59sOOO`-E7X-E7XO(YQ&rO'#CtOOQW'#D['#D[O(hQ&rO1G.xOOOa1G.x1G.xOOO`1G/Z1G/ZO(sQ&rO1G/ROOOb1G/R1G/RO)OQ&rO1G/UOOOd1G/U1G/UO)ZQ&rO1G/XOOO`1G/X1G/XO)fQ&rO1G/ZOOOa-E7]-E7]O)qQ#tO'#CzOOO`1G.w1G.wOOOb-E7^-E7^O)vQ#tO'#C}OOOd-E7_-E7_O){Q#tO'#DQOOO`-E7`-E7`O*QQ#|O,59nOOOp-E7a-E7aOOO`1G/[1G/[OOO`1G/^1G/^OOO`1G/_1G/_O*VQ,UO,59`OOQW-E7Y-E7YOOOa7+$d7+$dOOO`7+$u7+$uOOOb7+$m7+$mOOOd7+$p7+$pOOO`7+$s7+$sO*bQ#|O,59fO*gQ#|O,59iO*lQ#|O,59lOOO`1G/Y1G/YO*qO7[O'#CwO+SOMhO'#CwOOQW1G.z1G.zOOO`1G/Q1G/QOOO`1G/T1G/TOOO`1G/W1G/WOOOO'#D]'#D]O+eO7[O,59cOOQW,59c,59cOOOO'#D^'#D^O+vOMhO,59cOOOO-E7Z-E7ZOOQW1G.}1G.}OOOO-E7[-E7[",stateData:`,c~O!_OS~OUSOVPOWQOXROYTO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O|_O!eZO~OgaO~OgbO~OgcO~OgdO~OgeO~O!XfOPmP![mP~O!YiOQpP![pP~O!ZlORsP![sP~OUSOVPOWQOXROYTOZqO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O!eZO~O![rO~P#gO!]sO!fuO~OgvO~OgwO~OS|OT}OiyO~OS!POT}OiyO~OS!ROT}OiyO~OS!TOT}OiyO~OS}OT}OiyO~O!XfOPmX![mX~OP!WO![!XO~O!YiOQpX![pX~OQ!ZO![!XO~O!ZlORsX![sX~OR!]O![!XO~O![!XO~P#gOg!_O~O!]sO!f!aO~OS!bO~OS!cO~Oj!dOShXThXihX~OS!fOT!gOiyO~OS!hOT!gOiyO~OS!iOT!gOiyO~OS!jOT!gOiyO~OS!gOT!gOiyO~Og!kO~Og!lO~Og!mO~OS!nO~Ol!qO!a!oO!c!pO~OS!rO~OS!sO~OS!tO~Ob!uOc!uOd!uO!a!wO!b!uO~Ob!xOc!xOd!xO!c!wO!d!xO~Ob!uOc!uOd!uO!a!{O!b!uO~Ob!xOc!xOd!xO!c!{O!d!xO~OT~cbd!ey|!e~`,goto:"%q!aPPPPPPPPPPPPPPPPPPPPP!b!hP!nPP!zP!}#Q#T#Z#^#a#g#j#m#s#y!bP!b!bP$P$V$m$s$y%P%V%]%cPPPPPPPP%iX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:`⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl`,maxTerm:68,context:zS,nodeProps:[[`closedBy`,-10,1,2,3,7,8,9,10,11,12,13,`EndTag`,6,`EndTag SelfClosingEndTag`,-4,22,31,34,37,`CloseTag`],[`openedBy`,4,`StartTag StartCloseTag`,5,`StartTag`,-4,30,33,36,38,`OpenTag`],[`group`,-10,14,15,18,19,20,21,40,41,42,43,`Entity`,17,`Entity TextContent`,-3,29,32,35,`TextContent Entity`],[`isolate`,-11,22,30,31,33,34,36,37,38,39,42,43,`ltr`,-3,27,28,40,``]],propSources:[JS],skippedNodes:[0],repeatNodeCount:9,tokenData:"!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|caPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bXaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UVaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pTaPOv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!dpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({WaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!b`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!b`!dpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYlWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`aP!b`!dp!_^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebiSlWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXiSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vciSaP!b`!dpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!ahaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WiiSlWd!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zblWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOb!R!R7tP;=`<%l7S!Z8OYlWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{iiSlWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbiSlWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QciSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXiSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TalWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOc!R!RAwP;=`<%lAY!ZBRYlWc!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbiSlWc!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbiSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXiSc!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!cxaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYliSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_kiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_XaP!b`!dp!fQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZiSgQaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!b`!dpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!b`!dp!ePOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!b`!dpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!b`!dpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!b`!dpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!b`!dpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!b`!dpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!b`!dpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!b`!dpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!dpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO|PP!-nP;=`<%l!-Sq!-xS!dp|POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!b`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!b`|POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!b`!dp|POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!b`!dpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!b`!dpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!b`!dpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!b`!dpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!b`!dpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!b`!dpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!dpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOyPP!7TP;=`<%l!6Vq!7]V!dpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!dpyPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!b`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!b`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!b`yPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!b`!dpyPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXjSaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",tokenizers:[GS,KS,qS,US,BS,VS,0,1,2,3,4,5],topRules:{Document:[0,16]},dialects:{noMatch:0,selfClosing:515},tokenPrec:517});function XS(e,t){let n=Object.create(null);for(let r of e.getChildren(fS)){let e=r.getChild(pS),i=r.getChild(mS)||r.getChild(hS);e&&(n[t.read(e.from,e.to)]=i?i.type.id==mS?t.read(i.from+1,i.to-1):t.read(i.from,i.to):``)}return n}function ZS(e,t){let n=e.getChild(dS);return n?t.read(n.from,n.to):` `}function QS(e,t,n){let r;for(let i of n)if(!i.attrs||i.attrs(r||=XS(e.node.parent.firstChild,t)))return{parser:i.parser,bracketed:!0};return null}function $S(e=[],t=[]){let n=[],r=[],i=[],a=[];for(let t of e)(t.tag==`script`?n:t.tag==`style`?r:t.tag==`textarea`?i:a).push(t);let o=t.length?Object.create(null):null;for(let e of t)(o[e.name]||(o[e.name]=[])).push(e);return Ku((e,t)=>{let s=e.type.id;if(s==gS)return QS(e,t,n);if(s==_S)return QS(e,t,r);if(s==vS)return QS(e,t,i);if(s==uS&&a.length){let n=e.node,r=n.firstChild,i=r&&ZS(r,t),o;if(i){for(let e of a)if(e.tag==i&&(!e.attrs||e.attrs(o||=XS(r,t)))){let t=n.lastChild,i=t.type.id==bS?t.from:n.to;if(i>r.to)return{parser:e.parser,overlay:[{from:r.to,to:i}]}}}}if(o&&s==fS){let n=e.node,r;if(r=n.firstChild){let e=o[t.read(r.from,r.to)];if(e)for(let r of e){if(r.tagName&&r.tagName!=ZS(n.parent,t))continue;let e=n.lastChild;if(e.type.id==mS){let t=e.from+1,n=e.lastChild,i=e.to-(n&&n.isError?0:1);if(i>t)return{parser:r.parser,overlay:[{from:t,to:i}],bracketed:!0}}else if(e.type.id==hS)return{parser:r.parser,overlay:[{from:e.from,to:e.to}]}}}}return null})}var eC=145,tC=1,nC=146,rC=147,iC=2,aC=148,oC=3,sC=4,cC=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288],lC=58,uC=40,dC=95,fC=91,pC=45,mC=46,hC=35,gC=37,_C=38,vC=92,yC=10,bC=42;function xC(e){return e>=65&&e<=90||e>=97&&e<=122||e>=161}function SC(e){return e>=48&&e<=57}function CC(e){return SC(e)||e>=97&&e<=102||e>=65&&e<=70}var wC=(e,t,n)=>(r,i)=>{for(let a=!1,o=0,s=0;;s++){let{next:c}=r;if(xC(c)||c==pC||c==dC||a&&SC(c))!a&&(c!=pC||s>0)&&(a=!0),o===s&&c==pC&&o++,r.advance();else if(c==vC&&r.peek(1)!=yC){if(r.advance(),CC(r.next)){do r.advance();while(CC(r.next));r.next==32&&r.advance()}else r.next>-1&&r.advance();a=!0}else{a&&r.acceptToken(o==2&&i.canShift(iC)?t:c==uC?n:e);break}}},TC=new Ky(wC(nC,iC,rC),{contextual:!0}),EC=new Ky(wC(aC,oC,sC),{contextual:!0}),DC=new Ky(e=>{if(cC.includes(e.peek(-1))){let{next:t}=e;(xC(t)||t==dC||t==hC||t==mC||t==bC||t==fC||t==lC&&xC(e.peek(1))||t==pC||t==_C)&&e.acceptToken(eC)}}),OC=new Ky(e=>{if(!cC.includes(e.peek(-1))){let{next:t}=e;if(t==gC&&(e.advance(),e.acceptToken(tC)),xC(t)){do e.advance();while(xC(e.next)||SC(e.next));e.acceptToken(tC)}}}),kC=fd({"AtKeyword import charset namespace keyframes media supports font-feature-values":Y.definitionKeyword,"from to selector scope MatchFlag":Y.keyword,NamespaceName:Y.namespace,KeyframeName:Y.labelName,KeyframeRangeName:Y.operatorKeyword,TagName:Y.tagName,ClassName:Y.className,PseudoClassName:Y.constant(Y.className),IdName:Y.labelName,"FeatureName PropertyName":Y.propertyName,AttributeName:Y.attributeName,NumberLiteral:Y.number,KeywordQuery:Y.keyword,UnaryQueryOp:Y.operatorKeyword,"CallTag ValueName FontName":Y.atom,VariableName:Y.variableName,Callee:Y.operatorKeyword,Unit:Y.unit,"UniversalSelector NestingSelector":Y.definitionOperator,"MatchOp CompareOp":Y.compareOperator,"ChildOp SiblingOp, LogicOp":Y.logicOperator,BinOp:Y.arithmeticOperator,Important:Y.modifier,Comment:Y.blockComment,ColorLiteral:Y.color,"ParenthesizedContent StringLiteral":Y.string,":":Y.punctuation,"PseudoOp #":Y.derefOperator,"; , |":Y.separator,"( )":Y.paren,"[ ]":Y.squareBracket,"{ }":Y.brace}),AC={__proto__:null,lang:44,"nth-child":44,"nth-last-child":44,"nth-of-type":44,"nth-last-of-type":44,dir:44,"host-context":44,if:90,url:152,"url-prefix":152,domain:152,regexp:152},jC={__proto__:null,or:104,and:104,not:112,only:112,layer:206},MC={__proto__:null,selector:118,style:124,layer:202},NC={__proto__:null,"@import":198,"@media":210,"@charset":214,"@namespace":218,"@keyframes":224,"@supports":236,"@scope":240,"@font-feature-values":246},PC={__proto__:null,to:243},FC=ob.deserialize({version:14,states:"MlQYQdOOO#}QdOOP$UO`OOO%OQaO'#CfOOQP'#Ce'#CeO%VQdO'#CgO%[Q`O'#CgO%aQaO'#FnO&XQdO'#CkO&xQaO'#CcO'SQdO'#CnO'_QdO'#EOO'dQdO'#EQO'oQdO'#EXO'oQdO'#E[OOQP'#Fn'#FnO)RQhO'#E}OOQS'#Fm'#FmOOQS'#FQ'#FQQYQdOOO)YQdO'#EbO*iQhO'#EhO)YQdO'#EjO*pQdO'#ElO*{QdO'#EoO)}QhO'#EuO+TQdO'#EwO+`QdO'#EzO+eQaO'#CfO+lQ`O'#E_O+qQ`O'#F{O+|QdO'#F{QOQ`OOP,WO&jO'#CaPOOO)CA])CA]OOQP'#Ci'#CiOOQP,59R,59RO%VQdO,59ROOQP'#Cm'#CmOOQP,59V,59VO&XQdO,59VO,cQdO,59YO'_QdO,5:jO'dQdO,5:lO'oQdO,5:sO'oQdO,5:uO'oQdO,5:vO'oQdO'#FXO,nQ`O,58}O,vQdO'#E^OOQS,58},58}OOQP'#Cq'#CqOOQO'#D|'#D|OOQP,59Y,59YO,}Q`O,59YO-SQ`O,59YOOQP'#EP'#EPOOQP,5:j,5:jO-XQpO'#ERO-dQdO'#ESO-iQ`O'#ESO-nQpO,5:lO.XQaO,5:sO.oQaO,5:vOOQW'#D^'#D^O/nQhO'#DgO0RQhO,5;iO)}QhO'#DeO0`Q`O'#DnO0eQhO'#DxOOQW'#Ft'#FtOOQS,5;i,5;iO0jQ`O'#DhO0oQ`O'#DkOOQS-E9O-E9OOOQ['#Cv'#CvO0tQdO'#CwO1[QdO'#C}O1rQdO'#DQO2YQ!pO'#DSO4fQ!jO,5:|OOQO'#DX'#DXO-SQ`O'#DWO4vQ!nO'#FqO6|Q`O'#DYO7RQ`O'#DyOOQ['#Fq'#FqO7WQhO'#GOO7fQ`O,5;SO7kQ!bO,5;UOOQS'#En'#EnO7sQ`O,5;WO7xQdO,5;WOOQO'#Eq'#EqO8QQ`O,5;ZO8VQhO,5;aO'oQdO'#DjOOQS,5;c,5;cO0jQ`O,5;cO8_QdO,5;cOOQS'#F`'#F`O8gQdO'#E|O7fQ`O,5;fO8oQdO,5:yO9PQdO'#FZO9^Q`O,5<gO9^Q`O,5<gPOOO'#FP'#FPP9iO&jO,58{POOO,58{,58{OOQP1G.m1G.mOOQP1G.q1G.qOOQP1G.t1G.tO,}Q`O1G.tO-SQ`O1G.tOOQP1G0U1G0UO9tQpO1G0WO9|QaO1G0_O:dQaO1G0aO:zQaO1G0bO;bQaO,5;sOOQO-E9V-E9VOOQS1G.i1G.iO;lQ`O,5:xO;qQdO'#D}O;xQdO'#CuOOQO'#EU'#EUOOQO,5:n,5:nO-dQdO,5:nOOQP1G0W1G0WO)YQdO1G0WO<PQ!jO'#D^O<_Q!bO,59yO<gQhO,5:ROOQO'#Fu'#FuO<bQ!bO,59}O<oQhO'#FaO)}QhO,59{O)}QhO'#FaO=gQhO1G1TOOQS1G1T1G1TO=qQhO,5:PO>lQhO'#DoOOQW,5:Y,5:YOOQW,5:d,5:dOOQW,5:S,5:SO>vQhO,5:VO?bQ!fO'#FrOOQS'#Fr'#FrOOQS'#FS'#FSO@rQdO,59cOOQ[,59c,59cOAYQdO,59iOOQ[,59i,59iOApQdO,59lOOQ[,59l,59lOOQ[,59n,59nO)YQdO,59pOBWQhO'#EdOOQW'#Ed'#EdOBuQ`O1G0hO4oQhO1G0hOOQ[,59r,59rO)}QhO'#D[OOQ[,59t,59tOBzQ#tO,5:eOCVQhO'#F]OCdQ`O,5<jOOQS1G0n1G0nOOQS1G0p1G0pOOQS1G0r1G0rOCoQ`O1G0rOCtQdO'#ErOOQS1G0u1G0uOOQS1G0{1G0{ODPQaO,5:UO7fQ`O1G0}OOQS1G0}1G0}O0jQ`O1G0}OOQS-E9^-E9^OOQS1G1Q1G1QODWQ!fO1G0eODnQ`O'#EaOOQO1G0e1G0eOOQO,5;u,5;uODsQdO,5;uOOQO-E9X-E9XOEQQ`O1G2RPOOO-E8}-E8}POOO1G.g1G.gOOQP7+$`7+$`OOQP7+%r7+%rO)YQdO7+%rOOQS1G0d1G0dOE]QaO'#FzOEgQ`O,5:iOElQ!fO'#FROFjQdO'#FpOFtQ`O,59aOOQO1G0Y1G0YOFyQ!bO7+%rO)YQdO1G/eOGUQhO1G/iOOQW1G/m1G/mOOQW1G/g1G/gOGgQhO,5;{OOQW-E9_-E9_OOQS7+&o7+&oOH_QhO'#D^OHmQhO'#FxOHxQ`O'#FxOH}Q`O,5:ZOISQ!bO'#D`O>vQhO'#DmOI_QhO'#DqOIgQhO'#DsOIlQhO'#FwOOQO'#Fw'#FwOItQ!bO'#DwOOQO'#Fy'#FyOOQO'#Fv'#FvOIyQ`O1G/qOOQS-E9Q-E9QOOQ[1G.}1G.}OOQ[1G/T1G/TOOQ[1G/W1G/WOOQ[1G/[1G/[OJOQdO,5;OOOQS7+&S7+&SOJTQ`O7+&SOJYQhO'#D]OJbQ`O,59vO)}QhO,59vOOQ[1G0P1G0POJjQ`O1G0POJoQhO,5;wOOQO-E9Z-E9ZOOQS7+&^7+&^OJ}QbO'#DSOOQO'#Et'#EtOK]Q`O'#EsOOQO'#Es'#EsOKhQ`O'#F^OKpQdO,5;^OOQS,5;^,5;^OOQ[1G/p1G/pOOQS7+&i7+&iO7fQ`O7+&iOK{Q!fO'#FYO)YQdO'#FYOMSQdO7+&POOQO7+&P7+&POOQO,5:{,5:{OOQO1G1a1G1aOMgQ!bO<<I^OMrQdO'#FWOM|Q`O,5<fOOQP1G0T1G0TOOQS-E9P-E9PONUQdO'#FVON`Q`O,5<[OOQ]1G.{1G.{OOQP<<I^<<I^ONhQ`O<<I^ONmQdO7+%POOQO'#D`'#D`ONtQ!bO7+%TON|QhO'#FUO! ZQ`O,5<dO)YQdO,5<dOOQW1G/u1G/uO)YQdO,5:bO! cQ`O,5:XO>vQhO'#DrOOQO,5:],5:]O! hQhO,5:_OGUQhO,5:cOOQW7+%]7+%]OOQO'#Ef'#EfO! pQ`O1G0jOOQS<<In<<InO)YQdO,59wO!!dQhO1G/bOOQ[1G/b1G/bO!!kQ`O1G/bOOQW-E9R-E9ROOQ[7+%k7+%kOOQO,5;_,5;_OCwQdO'#F_OKhQ`O,5;xOOQS,5;x,5;xOOQS-E9[-E9[OOQS1G0x1G0xOOQS<<JT<<JTO!!sQ!fO,5;tOOQS-E9W-E9WOOQO<<Ik<<IkOOQPAN>xAN>xO!#zQ`OAN>xO!$PQaO,5;rOOQO-E9U-E9UO!$ZQdO,5;qOOQO-E9T-E9TOOQW<<Hk<<HkOOQW<<Ho<<HoO!$eQhO<<HoO!$vQhO,5;pO!%RQ`O,5;pOOQO-E9S-E9SO!%WQdO1G2OO!%bQdO1G/|O!%iQhO1G/sO!%qQ`O,5:^O>vQhO'#DuOOQO1G/y1G/yO!%vQ!bO1G/}OJOQdO'#F[O!&OQ`O7+&UOOQW7+&U7+&UO!&WQ!bO1G/cOOQ[7+$|7+$|O!&cQhO7+$|P!&jQ`O'#FTOOQO,5;y,5;yOOQO-E9]-E9]OOQS1G1d1G1dOOQPG24dG24dO!&oQ`OAN>ZO)YQdO1G1[O!&tQ`O7+'jOOQO1G/x1G/xO!&|Q`O,5:aO!$eQhO7+%iOOQO,5;v,5;vOOQO-E9Y-E9YOOQW<<Ip<<IpOOQ[<<Hh<<HhPOQW,5;o,5;oOOQWG23uG23uO!'RQdO7+&vOOQO1G/{1G/{OOQO<<IT<<IT",stateData:"!'f~O$[OS$]QQ~OWVO^_O`WOcYOdYOl`OmZOp[O!|]O#P^O#VdO#]eO#_fO#agO#dhO#jiO#ljO#okO$WRO$cTO~OQmOWVO^_O`WOcYOdYOl`OmZOp[O!|]O#P^O#VdO#]eO#_fO#agO#dhO#jiO#ljO#okO$WlO$cTO~O$U$oP~P!jO$]qO~O`YXcYXdYXmYXpYXsYX!dYX!|YX#PYX$VYX$c[X~OgYX~P$ZO$WsO~O$cuO~O$cuO`$bXc$bXd$bXm$bXp$bXs$bX!d$bX!|$bX#P$bX$V$bXg$bX~O$WvO~O`xOcyOdyOmzOp{O!||O#P!OO$V}O~Os!RO!d!PO~P&^Of!XO$W!TO$X!UO~O$W!YO~OW!^O$W![O$c!]O~OWVO^_O`WOcYOdYOmZOp[O!|]O#P^O$WRO$cTO~OS!fOc!gOd!gOh!cOs!RO!Y!eO!]!jO!`!kO$Y!bO~On!iO~P(dOQ!uOh!nOp!oOs!pOu!xOw!xO}!vO!n!wO$W!mO$X!sO$g!qO~OS!fOc!gOd!gOh!cO!Y!eO!]!jO!`!kO$Y!bO~Os$rP~P)}Ow!}O!n!wO$W!|O~Ow#PO$W#PO~Oh#SOs!RO#m#UO~O$W#WO~Oc#SX~P$ZOc#ZO~On#[O$U$oXr$oX~O$U$oXr$oX~P!jO$^#_O$_#_O$`#aO~Of#fO$W!TO$X!UO~Os!RO!d!PO~Or$oP~P!jOh#pO~Oh#qO~Oo!uX!y!uX$c!wX~O$W#rO~O$c#tO~Oo#uO!y#vO~O`xOcyOdyOmzOp{O~Os!{a!d!{a!|!{a#P!{a$V!{ag!{a~P-vOs#Oa!d#Oa!|#Oa#P#Oa$V#Oag#Oa~P-vOS!fOc!gOd!gOh!cO!Y!eO!]!jO!`!kO~OR#zOu#zOw#zO$Y#wO$g!qO~P/VOn$QO!U#}O!d$OO~P(dOh$SO~O$Y$UO~Oh#SO~Oh$WO~O`$YOc$YOg$]Ol$YOm$YOn$YO~P)YO`$YOc$YOl$YOm$YOn$YOo$_O~P)YO`$YOc$YOl$YOm$YOn$YOr$aO~P)YOP$bOSvXcvXdvXhvXnvXyvX!YvX!]vX!`vX#XvX#ZvX$YvX!WvXQvX`vXgvXlvXmvXpvXsvXuvXwvX}vX!nvX$WvX$XvX$gvXovXrvX!dvX$UvX$qvX!zvX~Oy$cO#X$dO#Z$eOn$rP~P)}Oh#qOS$eXc$eXd$eXn$eXy$eX!Y$eX!]$eX!`$eX#X$eX#Z$eX$Y$eXQ$eX`$eXg$eXl$eXm$eXp$eXs$eXu$eXw$eX}$eX!n$eX$W$eX$X$eX$g$eXo$eXr$eX!d$eX$U$eX$q$eX!z$eX~Oh$iO~Oh$kO~O!U#}O!d$lOs$rXn$rX~Os!RO~On$oOy$cO~On$pO~Ow$qO!n!wO~Os$rO~Os!RO!U#}O~Os!RO#m$xO~O$W#WOs#pX~O$q$|On#Ra$U#Rar#Ra~P)YOn#}X$U#}Xr#}X~P!jOn#[O$U$oar$oa~O$^#_O$_#_O$`%TO~Oo%VO!y%WO~Os!{i!d!{i!|!{i#P!{i$V!{ig!{i~P-vOs!}i!d!}i!|!}i#P!}i$V!}ig!}i~P-vOs#Oi!d#Oi!|#Oi#P#Oi$V#Oig#Oi~P-vOs#{a!d#{a~P&^Or%XO~Og$nP~P'oOg$dP~P)YOc!SXg!QX!U!QX!W!SX~Oc%aO!W%bO~Og%cO!U#}O~O!U#}OS$TXc$TXd$TXh$TXn$TXs$TX!Y$TX!]$TX!`$TX!d$TX$Y$TX~On%gO!d$OO~P(dO!U#}OS!Xac!Xad!Xah!Xan!Xas!Xa!Y!Xa!]!Xa!`!Xa!d!Xa$Y!Xag!Xa~O$Y%hOg$lP~P/VOR#zOS!fOh%mOu#zOw#zO!Y%nO$Y%lO$g!qO~Oy$cOQ$fX`$fXc$fXg$fXh$fXl$fXm$fXn$fXp$fXs$fXu$fXw$fX}$fX!n$fX$W$fX$X$fX$g$fXo$fXr$fX~O`$YOc$YOg%wOl$YOm$YOn$YO~P)YO`$YOc$YOl$YOm$YOn$YOo%xO~P)YO`$YOc$YOl$YOm$YOn$YOr%yO~P)YOh%{OS#WXc#WXd#WXn#WX!Y#WX!]#WX!`#WX$Y#WX~On%|O~Og&ROw&SO!o&SO~Os$PX!d$PXn$PX~P)}O!d$lOs$ran$ra~On&VO~Or&^O$W&XO$g&WO~Og&_O~P&^Oy$cO!d&cO$q$|On#Ri$U#Rir#Ri~P)YO$p&fO~On#}a$U#}ar#}a~P!jOn#[O$U$oir$oi~O!d&iOg$nX~P&^Og&kO~Oy$cOQ#uXg#uXh#uXp#uXs#uXu#uXw#uX}#uX!d#uX!n#uX$W#uX$X#uX$g#uX~O!d&mOg$dX~P)YOg&oO~Oo&pOy$cO!z&qO~OR#zOu#zOw#zO$Y&sO$g!qO~O!U#}OS$Tac$Tad$Tah$Tan$Tas$Ta!Y$Ta!]$Ta!`$Ta!d$Ta$Y$Ta~Oc!SXg!QX!U!QX!d!QX~O!U#}O!d&uOg$lX~Oc&wO~Og&xO~Oc&yOg!jX!W!SX~OS!fOh&{O~O!U&}O~O!U&}Og$kX~O!W'OO~Og'PO~O$W'QO~On'SO~Oc'TO!U#}O~Og'VOn'UO~Og'YO~O!U#}Os$Pa!d$Pan$Pa~OP$bOsvX!dvXgvX~O$g&WOs#gX!d#gX~Os!RO!d'[O~Or'`O$W&XO$g&WO~Oy$cOQ#|Xh#|Xn#|Xp#|Xs#|Xu#|Xw#|X}#|X!d#|X!n#|X$U#|X$W#|X$X#|X$g#|X$q#|Xr#|X~O!d&cO$q$|On#Rq$U#Rqr#Rq~P)YOo'eOy$cO!z'fO~Og#zX!d#zX~P'oO!d&iOg$na~Og#yX!d#yX~P)YO!d&mOg$da~Oo'eO~Og'kO~P)YOg'lO!W'mO~O$Y%hOg#xX!d#xX~P/VO!d&uOg$la~Og'sO~OS!fOh'uO~O`'xOg'zO~OS#wac#wad#wah#wa!Y#wa!]#wa!`#wa$Y#wa~Og'|O~P! xOg'|On'}O~Oy$cOQ#|ah#|an#|ap#|as#|au#|aw#|a}#|a!d#|a!n#|a$U#|a$W#|a$X#|a$g#|a$q#|ar#|a~Oo(SO~Og#za!d#za~P&^Og#ya!d#ya~P)YOR#zOu#zOw#zO$Y&sO$g&WO~O!U#}Og#xa!d#xa~Oc(UO~O!d&uOg$li~P)YOg!ji~P)YOg!ai!U!hi~Og(WO~O!W(YOg!ki~O`'xOg(]O~Oy$cOg!Pin!Pi~Og(^O~P! xOn(_O~Og(`O~O!d&uOg$lq~Og(bO~Og#xq!d#xq~P)YO$[!o$]$g`$gy#P~",goto:"7[$sPPPPP$tP$wP%Q%d%Q%v&YP%QP&`%QPP&fPPP&l&v&vPPPPP&vPP&vP'fP&vP&v(i&vP)X)[)b)b)t)bP)bP)bP)b)bP*a)bP*m*s+cP*m+f*m+i+`+o+o)b+uPP,k,q%Q,w%Q,},}-T-XPP%QP%Q%QP-_.Z.h.o$wP.xP.{P$wP$wP$wP/R$wP/U/X/[/c$wP$wPP$wP/h$wP/k/q0Q0l0z1Q1[1b1h1n1t2O2U2[2b2h2nPPPPPPPPPPP2t2}P3s3v4zP5S5|6c6o6u6o6x6{PP7RRrQ_aOPco!R#[%Pq_OP]^co|}!O!P!R#S#[#p%P&iqSOP]^co|}!O!P!R#S#[#p%P&iqUOP]^co|}!O!P!R#S#[#p%P&iQtTR#buQwWR#cxQ!VYR#dyQ#d!XS$h!t!uR%U#f!Z!xdf!n!o!p#Z#q#v$[$^$`$c${%W%]%a&c&d&m&r&w&y'T'i'q'r(U(a!Y!xdf!n!o!p#Z#q#v$[$^$`$c${%W%]%a&c&d&m&r&w&y'T'i'q'r(U(ab#z!c$W%b%m&{'O'm'u(YU&Z$r&]'[R'Z&Y!Z!tdf!n!o!p#Z#q#v$[$^$`$c${%W%]%a&c&d&m&r&w&y'T'i'q'r(U(aR$j!vQ&P$iR'W&Qq!h`ei!c!d!e!r#}$O$P$S$g$i$l&Q&uQ#x!cQ%j$SW%r$W%m&{'uQ&t%bQ'o&uQ'w'OQ(T'mR(c(YQ#VjQ$V!jQ$v#UR&a$xX%q$W%m&{'up!h`ei!c!d!e!r#}$O$P$S$g$i$l&Q&uW%p$W%m&{'uQ&|%nR'v&}R$T!fR&|%nX%o$W%m&{'uX%s$W%m&{'u!Y!xdf!n!o!p#Z#q#v$[$^$`$c${%W%]%a&c&d&m&r&w&y'T'i'q'r(U(aQ!}gR$q#OQ!WYR#eyQ#d!WR%U#eQ!ZZR#gzQ!_[R#h{T!^[{Q#s!]R%_#tQ!SXQ!i`Q#TjQ#n!QQ$Q!dQ$n!zQ$t#RQ$w#VQ$z#YQ%g$PQ&`$vQ'^&[Q'a&aR(R']SnP!RQ#^oQ%O#[R&g%PZmPo!R#[%PQ$}#ZQ&e${R'd&dR$g!rQ'R%{R(Z'xR#OgR#QhR$s#QS&[$r&]R(P'[V&Y$r&]'[R#YkQ#`qR%S#`QcOSoP!RU!lco%PR%P#[Q%]#q[&l%]&r'i'q'r(aQ&r%aQ'i&mQ'q&wQ'r&yR(a(UQ$[!nQ$^!oQ$`!pV%v$[$^$`Q&Q$iR'X&QQ&v%iS'p&v(VR(V'qQ&n%]R'j&nQ&j%YR'h&jQ!QXR#m!QQ&d${R'c&dQ#]nS%Q#]%RR%R#^Q'y'RR(['yQ$m!yR&U$mQ&]$rR'_&]Q']&[R(Q']Q#XkR$y#XQ$P!dR%f$P_bOPco!R#[%P^XOPco!R#[%PQ!`]Q!a^Q#i|Q#j}Q#k!OQ#l!PQ$u#SQ%Y#pR'g&iR%^#qQ!rdQ!{f[$X!n!o!p$[$^$`Q${#Zh%[#q%]%a&m&r&w&y'i'q'r(U(aQ%`#vQ%z$cS&b${&dQ&h%WQ'b&cR'{'T]$Z!n!o!p$[$^$`Q!d`U!ye!r$gQ#RiQ#y!cS#|!d$PQ$R!eQ%d#}Q%e$OQ%i$SS&O$i&QQ&T$lR'n&uQ#{!cW%r$W%m&{'uQ&t%bQ'w'OQ(T'mR(c(YQ%u$WQ&z%mQ't&{R(X'uX%t$W%m&{'uR%k$SR%Z#pQpPR#o!RQ!zeQ$f!rR%}$g",nodeNames:`⚠ Unit VariableName VariableName QueryCallee Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NamespacedTagSelector NamespaceName TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue AtKeyword # ; ] [ BracketedValue } { BracedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee IfExpression if ArgList IfBranch KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp ComparisonQuery CompareOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector ParenthesizedSelector StyleQuery style ParenthesedQuery CallQuery ArgList , UnaryQuery ParenthesedQuery BinaryQuery ParenthesedQuery ParenthesedQuery StyleFeature StyleRange PseudoQuery CallLiteral CallTag ParenthesizedContent PseudoClassName ArgList IdSelector IdName AttributeSelector AttributeName NamespacedAttribute NamespaceName AttributeName MatchOp MatchFlag ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp Block Declaration PropertyName Important ImportStatement import Layer layer LayerName layer MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports ScopeStatement scope to FontFeatureStatement font-feature-values FontName AtRule Styles`,maxTerm:172,nodeProps:[[`isolate`,-2,5,39,``],[`openedBy`,23,`(`,31,`[`,34,`{`],[`closedBy`,24,`)`,32,`]`,35,`}`]],propSources:[kC],skippedNodes:[0,5,127],repeatNodeCount:17,tokenData:"K`~R!bOX%ZX^&R^p%Zpq&Rqr)ers)vst+jtu2Xuv%Zvw3Rwx3dxy5Ryz5dz{5i{|6S|}:u}!O;W!O!P;u!P!Q<^!Q![=V![!]>Q!]!^>|!^!_?_!_!`@Z!`!a@n!a!b%Z!b!cAo!c!k%Z!k!lC|!l!u%Z!u!vC|!v!}%Z!}#OD_#O#P%Z#P#QDp#Q#R2X#R#]%Z#]#^ER#^#g%Z#g#hC|#h#o%Z#o#pIf#p#qIw#q#rJ`#r#sJq#s#y%Z#y#z&R#z$f%Z$f$g&R$g#BY%Z#BY#BZ&R#BZ$IS%Z$IS$I_&R$I_$I|%Z$I|$JO&R$JO$JT%Z$JT$JU&R$JU$KV%Z$KV$KW&R$KW&FU%Z&FU&FV&R&FV;'S%Z;'S;=`KY<%lO%Z`%^SOy%jz;'S%j;'S;=`%{<%lO%j`%oS!o`Oy%jz;'S%j;'S;=`%{<%lO%j`&OP;=`<%l%j~&Wh$[~OX%jX^'r^p%jpq'rqy%jz#y%j#y#z'r#z$f%j$f$g'r$g#BY%j#BY#BZ'r#BZ$IS%j$IS$I_'r$I_$I|%j$I|$JO'r$JO$JT%j$JT$JU'r$JU$KV%j$KV$KW'r$KW&FU%j&FU&FV'r&FV;'S%j;'S;=`%{<%lO%j~'yh$[~!o`OX%jX^'r^p%jpq'rqy%jz#y%j#y#z'r#z$f%j$f$g'r$g#BY%j#BY#BZ'r#BZ$IS%j$IS$I_'r$I_$I|%j$I|$JO'r$JO$JT%j$JT$JU'r$JU$KV%j$KV$KW'r$KW&FU%j&FU&FV'r&FV;'S%j;'S;=`%{<%lO%jj)jS$qYOy%jz;'S%j;'S;=`%{<%lO%j~)yWOY)vZr)vrs*cs#O)v#O#P*h#P;'S)v;'S;=`+d<%lO)v~*hOw~~*kRO;'S)v;'S;=`*t;=`O)v~*wXOY)vZr)vrs*cs#O)v#O#P*h#P;'S)v;'S;=`+d;=`<%l)v<%lO)v~+gP;=`<%l)vj+oYmYOy%jz!Q%j!Q![,_![!c%j!c!i,_!i#T%j#T#Z,_#Z;'S%j;'S;=`%{<%lO%jj,dY!o`Oy%jz!Q%j!Q![-S![!c%j!c!i-S!i#T%j#T#Z-S#Z;'S%j;'S;=`%{<%lO%jj-XY!o`Oy%jz!Q%j!Q![-w![!c%j!c!i-w!i#T%j#T#Z-w#Z;'S%j;'S;=`%{<%lO%jj.OYuY!o`Oy%jz!Q%j!Q![.n![!c%j!c!i.n!i#T%j#T#Z.n#Z;'S%j;'S;=`%{<%lO%jj.uYuY!o`Oy%jz!Q%j!Q![/e![!c%j!c!i/e!i#T%j#T#Z/e#Z;'S%j;'S;=`%{<%lO%jj/jY!o`Oy%jz!Q%j!Q![0Y![!c%j!c!i0Y!i#T%j#T#Z0Y#Z;'S%j;'S;=`%{<%lO%jj0aYuY!o`Oy%jz!Q%j!Q![1P![!c%j!c!i1P!i#T%j#T#Z1P#Z;'S%j;'S;=`%{<%lO%jj1UY!o`Oy%jz!Q%j!Q![1t![!c%j!c!i1t!i#T%j#T#Z1t#Z;'S%j;'S;=`%{<%lO%jj1{SuY!o`Oy%jz;'S%j;'S;=`%{<%lO%jd2[UOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%jd2uS!yS!o`Oy%jz;'S%j;'S;=`%{<%lO%jb3WS^QOy%jz;'S%j;'S;=`%{<%lO%j~3gWOY3dZw3dwx*cx#O3d#O#P4P#P;'S3d;'S;=`4{<%lO3d~4SRO;'S3d;'S;=`4];=`O3d~4`XOY3dZw3dwx*cx#O3d#O#P4P#P;'S3d;'S;=`4{;=`<%l3d<%lO3d~5OP;=`<%l3dj5WShYOy%jz;'S%j;'S;=`%{<%lO%j~5iOg~n5pUWQyWOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%jj6ZWyW#PQOy%jz!O%j!O!P6s!P!Q%j!Q![9x![;'S%j;'S;=`%{<%lO%jj6xU!o`Oy%jz!Q%j!Q![7[![;'S%j;'S;=`%{<%lO%jj7cY!o`$gYOy%jz!Q%j!Q![7[![!g%j!g!h8R!h#X%j#X#Y8R#Y;'S%j;'S;=`%{<%lO%jj8WY!o`Oy%jz{%j{|8v|}%j}!O8v!O!Q%j!Q![9_![;'S%j;'S;=`%{<%lO%jj8{U!o`Oy%jz!Q%j!Q![9_![;'S%j;'S;=`%{<%lO%jj9fU!o`$gYOy%jz!Q%j!Q![9_![;'S%j;'S;=`%{<%lO%jj:P[!o`$gYOy%jz!O%j!O!P7[!P!Q%j!Q![9x![!g%j!g!h8R!h#X%j#X#Y8R#Y;'S%j;'S;=`%{<%lO%jj:zS!dYOy%jz;'S%j;'S;=`%{<%lO%jj;]WyWOy%jz!O%j!O!P6s!P!Q%j!Q![9x![;'S%j;'S;=`%{<%lO%jj;zU`YOy%jz!Q%j!Q![7[![;'S%j;'S;=`%{<%lO%j~<cTyWOy%jz{<r{;'S%j;'S;=`%{<%lO%j~<yS!o`$]~Oy%jz;'S%j;'S;=`%{<%lO%jj=[[$gYOy%jz!O%j!O!P7[!P!Q%j!Q![9x![!g%j!g!h8R!h#X%j#X#Y8R#Y;'S%j;'S;=`%{<%lO%jj>VUcYOy%jz![%j![!]>i!];'S%j;'S;=`%{<%lO%jj>pSdY!o`Oy%jz;'S%j;'S;=`%{<%lO%jj?RSnYOy%jz;'S%j;'S;=`%{<%lO%jh?dU!WWOy%jz!_%j!_!`?v!`;'S%j;'S;=`%{<%lO%jh?}S!WW!o`Oy%jz;'S%j;'S;=`%{<%lO%jl@bS!WW!ySOy%jz;'S%j;'S;=`%{<%lO%jj@uV!|Q!WWOy%jz!_%j!_!`?v!`!aA[!a;'S%j;'S;=`%{<%lO%jbAcS!|Q!o`Oy%jz;'S%j;'S;=`%{<%lO%jjArYOy%jz}%j}!OBb!O!c%j!c!}CP!}#T%j#T#oCP#o;'S%j;'S;=`%{<%lO%jjBgW!o`Oy%jz!c%j!c!}CP!}#T%j#T#oCP#o;'S%j;'S;=`%{<%lO%jjCW[lY!o`Oy%jz}%j}!OCP!O!Q%j!Q![CP![!c%j!c!}CP!}#T%j#T#oCP#o;'S%j;'S;=`%{<%lO%jhDRS!zWOy%jz;'S%j;'S;=`%{<%lO%jjDdSpYOy%jz;'S%j;'S;=`%{<%lO%jnDuSo^Oy%jz;'S%j;'S;=`%{<%lO%jjEWU!zWOy%jz#a%j#a#bEj#b;'S%j;'S;=`%{<%lO%jbEoU!o`Oy%jz#d%j#d#eFR#e;'S%j;'S;=`%{<%lO%jbFWU!o`Oy%jz#c%j#c#dFj#d;'S%j;'S;=`%{<%lO%jbFoU!o`Oy%jz#f%j#f#gGR#g;'S%j;'S;=`%{<%lO%jbGWU!o`Oy%jz#h%j#h#iGj#i;'S%j;'S;=`%{<%lO%jbGoU!o`Oy%jz#T%j#T#UHR#U;'S%j;'S;=`%{<%lO%jbHWU!o`Oy%jz#b%j#b#cHj#c;'S%j;'S;=`%{<%lO%jbHoU!o`Oy%jz#h%j#h#iIR#i;'S%j;'S;=`%{<%lO%jbIYS$pQ!o`Oy%jz;'S%j;'S;=`%{<%lO%jjIkSsYOy%jz;'S%j;'S;=`%{<%lO%jfI|U$cUOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%jjJeSrYOy%jz;'S%j;'S;=`%{<%lO%jfJvU#PQOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%j`K]P;=`<%l%Z",tokenizers:[DC,OC,TC,EC,1,2,3,4,new Gy("m~RRYZ[z{a~~g~aO$_~~dP!P!Qg~lO$`~~",28,152)],topRules:{StyleSheet:[0,6],Styles:[1,126]},dynamicPrecedences:{94:1},specialized:[{term:147,get:e=>AC[e]||-1},{term:148,get:e=>jC[e]||-1},{term:4,get:e=>MC[e]||-1},{term:28,get:e=>NC[e]||-1},{term:146,get:e=>PC[e]||-1}],tokenPrec:2405}),IC=null;function LC(){if(!IC&&typeof document==`object`&&document.body){let{style:e}=document.body,t=[],n=new Set;for(let r in e)r!=`cssText`&&r!=`cssFloat`&&typeof e[r]==`string`&&(/[A-Z]/.test(r)&&(r=r.replace(/[A-Z]/g,e=>`-`+e.toLowerCase())),n.has(r)||(t.push(r),n.add(r)));IC=t.sort().map(e=>({type:`property`,label:e,apply:e+`: `}))}return IC||[]}var RC=`active.after.any-link.autofill.backdrop.before.checked.cue.default.defined.disabled.empty.enabled.file-selector-button.first.first-child.first-letter.first-line.first-of-type.focus.focus-visible.focus-within.fullscreen.has.host.host-context.hover.in-range.indeterminate.invalid.is.lang.last-child.last-of-type.left.link.marker.modal.not.nth-child.nth-last-child.nth-last-of-type.nth-of-type.only-child.only-of-type.optional.out-of-range.part.placeholder.placeholder-shown.read-only.read-write.required.right.root.scope.selection.slotted.target.target-text.valid.visited.where`.split(`.`).map(e=>({type:`class`,label:e})),zC=`above.absolute.activeborder.additive.activecaption.after-white-space.ahead.alias.all.all-scroll.alphabetic.alternate.always.antialiased.appworkspace.asterisks.attr.auto.auto-flow.avoid.avoid-column.avoid-page.avoid-region.axis-pan.background.backwards.baseline.below.bidi-override.blink.block.block-axis.bold.bolder.border.border-box.both.bottom.break.break-all.break-word.bullets.button.button-bevel.buttonface.buttonhighlight.buttonshadow.buttontext.calc.capitalize.caps-lock-indicator.caption.captiontext.caret.cell.center.checkbox.circle.cjk-decimal.clear.clip.close-quote.col-resize.collapse.color.color-burn.color-dodge.column.column-reverse.compact.condensed.contain.content.contents.content-box.context-menu.continuous.copy.counter.counters.cover.crop.cross.crosshair.currentcolor.cursive.cyclic.darken.dashed.decimal.decimal-leading-zero.default.default-button.dense.destination-atop.destination-in.destination-out.destination-over.difference.disc.discard.disclosure-closed.disclosure-open.document.dot-dash.dot-dot-dash.dotted.double.down.e-resize.ease.ease-in.ease-in-out.ease-out.element.ellipse.ellipsis.embed.end.ethiopic-abegede-gez.ethiopic-halehame-aa-er.ethiopic-halehame-gez.ew-resize.exclusion.expanded.extends.extra-condensed.extra-expanded.fantasy.fast.fill.fill-box.fixed.flat.flex.flex-end.flex-start.footnotes.forwards.from.geometricPrecision.graytext.grid.groove.hand.hard-light.help.hidden.hide.higher.highlight.highlighttext.horizontal.hsl.hsla.hue.icon.ignore.inactiveborder.inactivecaption.inactivecaptiontext.infinite.infobackground.infotext.inherit.initial.inline.inline-axis.inline-block.inline-flex.inline-grid.inline-table.inset.inside.intrinsic.invert.italic.justify.keep-all.landscape.large.larger.left.level.lighter.lighten.line-through.linear.linear-gradient.lines.list-item.listbox.listitem.local.logical.loud.lower.lower-hexadecimal.lower-latin.lower-norwegian.lowercase.ltr.luminosity.manipulation.match.matrix.matrix3d.medium.menu.menutext.message-box.middle.min-intrinsic.mix.monospace.move.multiple.multiple_mask_images.multiply.n-resize.narrower.ne-resize.nesw-resize.no-close-quote.no-drop.no-open-quote.no-repeat.none.normal.not-allowed.nowrap.ns-resize.numbers.numeric.nw-resize.nwse-resize.oblique.opacity.open-quote.optimizeLegibility.optimizeSpeed.outset.outside.outside-shape.overlay.overline.padding.padding-box.painted.page.paused.perspective.pinch-zoom.plus-darker.plus-lighter.pointer.polygon.portrait.pre.pre-line.pre-wrap.preserve-3d.progress.push-button.radial-gradient.radio.read-only.read-write.read-write-plaintext-only.rectangle.region.relative.repeat.repeating-linear-gradient.repeating-radial-gradient.repeat-x.repeat-y.reset.reverse.rgb.rgba.ridge.right.rotate.rotate3d.rotateX.rotateY.rotateZ.round.row.row-resize.row-reverse.rtl.run-in.running.s-resize.sans-serif.saturation.scale.scale3d.scaleX.scaleY.scaleZ.screen.scroll.scrollbar.scroll-position.se-resize.self-start.self-end.semi-condensed.semi-expanded.separate.serif.show.single.skew.skewX.skewY.skip-white-space.slide.slider-horizontal.slider-vertical.sliderthumb-horizontal.sliderthumb-vertical.slow.small.small-caps.small-caption.smaller.soft-light.solid.source-atop.source-in.source-out.source-over.space.space-around.space-between.space-evenly.spell-out.square.start.static.status-bar.stretch.stroke.stroke-box.sub.subpixel-antialiased.svg_masks.super.sw-resize.symbolic.symbols.system-ui.table.table-caption.table-cell.table-column.table-column-group.table-footer-group.table-header-group.table-row.table-row-group.text.text-bottom.text-top.textarea.textfield.thick.thin.threeddarkshadow.threedface.threedhighlight.threedlightshadow.threedshadow.to.top.transform.translate.translate3d.translateX.translateY.translateZ.transparent.ultra-condensed.ultra-expanded.underline.unidirectional-pan.unset.up.upper-latin.uppercase.url.var.vertical.vertical-text.view-box.visible.visibleFill.visiblePainted.visibleStroke.visual.w-resize.wait.wave.wider.window.windowframe.windowtext.words.wrap.wrap-reverse.x-large.x-small.xor.xx-large.xx-small`.split(`.`).map(e=>({type:`keyword`,label:e})).concat(`aliceblue.antiquewhite.aqua.aquamarine.azure.beige.bisque.black.blanchedalmond.blue.blueviolet.brown.burlywood.cadetblue.chartreuse.chocolate.coral.cornflowerblue.cornsilk.crimson.cyan.darkblue.darkcyan.darkgoldenrod.darkgray.darkgreen.darkkhaki.darkmagenta.darkolivegreen.darkorange.darkorchid.darkred.darksalmon.darkseagreen.darkslateblue.darkslategray.darkturquoise.darkviolet.deeppink.deepskyblue.dimgray.dodgerblue.firebrick.floralwhite.forestgreen.fuchsia.gainsboro.ghostwhite.gold.goldenrod.gray.grey.green.greenyellow.honeydew.hotpink.indianred.indigo.ivory.khaki.lavender.lavenderblush.lawngreen.lemonchiffon.lightblue.lightcoral.lightcyan.lightgoldenrodyellow.lightgray.lightgreen.lightpink.lightsalmon.lightseagreen.lightskyblue.lightslategray.lightsteelblue.lightyellow.lime.limegreen.linen.magenta.maroon.mediumaquamarine.mediumblue.mediumorchid.mediumpurple.mediumseagreen.mediumslateblue.mediumspringgreen.mediumturquoise.mediumvioletred.midnightblue.mintcream.mistyrose.moccasin.navajowhite.navy.oldlace.olive.olivedrab.orange.orangered.orchid.palegoldenrod.palegreen.paleturquoise.palevioletred.papayawhip.peachpuff.peru.pink.plum.powderblue.purple.rebeccapurple.red.rosybrown.royalblue.saddlebrown.salmon.sandybrown.seagreen.seashell.sienna.silver.skyblue.slateblue.slategray.snow.springgreen.steelblue.tan.teal.thistle.tomato.turquoise.violet.wheat.white.whitesmoke.yellow.yellowgreen`.split(`.`).map(e=>({type:`constant`,label:e}))),BC=`a.abbr.address.article.aside.b.bdi.bdo.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.dd.del.details.dfn.dialog.div.dl.dt.em.figcaption.figure.footer.form.header.hgroup.h1.h2.h3.h4.h5.h6.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.meter.nav.ol.output.p.pre.ruby.section.select.small.source.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.tr.u.ul`.split(`.`).map(e=>({type:`type`,label:e})),VC=[`@charset`,`@color-profile`,`@container`,`@counter-style`,`@font-face`,`@font-feature-values`,`@font-palette-values`,`@import`,`@keyframes`,`@layer`,`@media`,`@namespace`,`@page`,`@position-try`,`@property`,`@scope`,`@starting-style`,`@supports`,`@view-transition`].map(e=>({type:`keyword`,label:e})),HC=/^(\w[\w-]*|-\w[\w-]*|)$/,UC=/^-(-[\w-]*)?$/;function WC(e,t){if((e.name==`(`||e.type.isError)&&(e=e.parent||e),e.name!=`ArgList`)return!1;let n=e.parent?.firstChild;return n?.name==`Callee`?t.sliceString(n.from,n.to)==`var`:!1}var GC=new Hu,KC=[`Declaration`];function qC(e){for(let t=e;;){if(t.type.isTop)return t;if(!(t=t.parent))return e}}function JC(e,t,n){if(t.to-t.from>4096){let r=GC.get(t);if(r)return r;let i=[],a=new Set,o=t.cursor(K.IncludeAnonymous);if(o.firstChild())do for(let t of JC(e,o.node,n))a.has(t.label)||(a.add(t.label),i.push(t));while(o.nextSibling());return GC.set(t,i),i}else{let r=[],i=new Set;return t.cursor().iterate(t=>{if(n(t)&&t.matchContext(KC)&&t.node.nextSibling?.name==`:`){let n=e.sliceString(t.from,t.to);i.has(n)||(i.add(n),r.push({label:n,type:`variable`}))}}),r}}var YC=(e=>t=>{let{state:n,pos:r}=t,i=X(n).resolveInner(r,-1),a=i.type.isError&&i.from==i.to-1&&n.doc.sliceString(i.from,i.to)==`-`;if(i.name==`PropertyName`||(a||i.name==`TagName`)&&/^(Block|Styles)$/.test(i.resolve(i.to).name))return{from:i.from,options:LC(),validFor:HC};if(i.name==`ValueName`)return{from:i.from,options:zC,validFor:HC};if(i.name==`PseudoClassName`)return{from:i.from,options:RC,validFor:HC};if(e(i)||(t.explicit||a)&&WC(i,n.doc))return{from:e(i)||a?i.from:r,options:JC(n.doc,qC(i),e),validFor:UC};if(i.name==`TagName`){for(let{parent:e}=i;e;e=e.parent)if(e.name==`Block`)return{from:i.from,options:LC(),validFor:HC};return{from:i.from,options:BC,validFor:HC}}if(i.name==`AtKeyword`)return{from:i.from,options:VC,validFor:HC};if(!t.explicit)return null;let o=i.resolve(r),s=o.childBefore(r);return s&&s.name==`:`&&o.name==`PseudoClassSelector`?{from:r,options:RC,validFor:HC}:s&&s.name==`:`&&o.name==`Declaration`||o.name==`ArgList`?{from:r,options:zC,validFor:HC}:o.name==`Block`||o.name==`Styles`?{from:r,options:LC(),validFor:HC}:null})(e=>e.name==`VariableName`),XC=zd.define({name:`css`,parser:FC.configure({props:[rf.add({Declaration:gf()}),bf.add({"Block KeyframeList":xf})]}),languageData:{commentTokens:{block:{open:`/*`,close:`*/`}},indentOnInput:/^\s*\}$/,wordChars:`-`}});function ZC(){return new Yd(XC,XC.data.of({autocomplete:YC}))}var QC=[`_blank`,`_self`,`_top`,`_parent`],$C=[`ascii`,`utf-8`,`utf-16`,`latin1`,`latin1`],ew=[`get`,`post`,`put`,`delete`],tw=[`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`],nw=[`true`,`false`],Z={},rw={a:{attrs:{href:null,ping:null,type:null,media:null,target:QC,hreflang:null}},abbr:Z,address:Z,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:[`default`,`rect`,`circle`,`poly`]}},article:Z,aside:Z,audio:{attrs:{src:null,mediagroup:null,crossorigin:[`anonymous`,`use-credentials`],preload:[`none`,`metadata`,`auto`],autoplay:[`autoplay`],loop:[`loop`],controls:[`controls`]}},b:Z,base:{attrs:{href:null,target:QC}},bdi:Z,bdo:Z,blockquote:{attrs:{cite:null}},body:Z,br:Z,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:[`autofocus`],disabled:[`autofocus`],formenctype:tw,formmethod:ew,formnovalidate:[`novalidate`],formtarget:QC,type:[`submit`,`reset`,`button`]}},canvas:{attrs:{width:null,height:null}},caption:Z,center:Z,cite:Z,code:Z,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:[`command`,`checkbox`,`radio`],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:[`disabled`],checked:[`checked`]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:[`disabled`],multiple:[`multiple`]}},datalist:{attrs:{data:null}},dd:Z,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:[`open`]}},dfn:Z,div:Z,dl:Z,dt:Z,em:Z,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:[`disabled`],form:null,name:null}},figcaption:Z,figure:Z,footer:Z,form:{attrs:{action:null,name:null,"accept-charset":$C,autocomplete:[`on`,`off`],enctype:tw,method:ew,novalidate:[`novalidate`],target:QC}},h1:Z,h2:Z,h3:Z,h4:Z,h5:Z,h6:Z,head:{children:[`title`,`base`,`link`,`style`,`meta`,`script`,`noscript`,`command`]},header:Z,hgroup:Z,hr:Z,html:{attrs:{manifest:null}},i:Z,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:[`allow-top-navigation`,`allow-same-origin`,`allow-forms`,`allow-scripts`],seamless:[`seamless`]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:[`anonymous`,`use-credentials`]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:[`audio/*`,`video/*`,`image/*`],autocomplete:[`on`,`off`],autofocus:[`autofocus`],checked:[`checked`],disabled:[`disabled`],formenctype:tw,formmethod:ew,formnovalidate:[`novalidate`],formtarget:QC,multiple:[`multiple`],readonly:[`readonly`],required:[`required`],type:[`hidden`,`text`,`search`,`tel`,`url`,`email`,`password`,`datetime`,`date`,`month`,`week`,`time`,`datetime-local`,`number`,`range`,`color`,`checkbox`,`radio`,`file`,`submit`,`image`,`reset`,`button`]}},ins:{attrs:{cite:null,datetime:null}},kbd:Z,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:[`autofocus`],disabled:[`disabled`],keytype:[`RSA`]}},label:{attrs:{for:null,form:null}},legend:Z,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:[`all`,`16x16`,`16x16 32x32`,`16x16 32x32 64x64`]}},map:{attrs:{name:null}},mark:Z,menu:{attrs:{label:null,type:[`list`,`context`,`toolbar`]}},meta:{attrs:{content:null,charset:$C,name:[`viewport`,`application-name`,`author`,`description`,`generator`,`keywords`],"http-equiv":[`content-language`,`content-type`,`default-style`,`refresh`]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:Z,noscript:Z,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:[`typemustmatch`]}},ol:{attrs:{reversed:[`reversed`],start:null,type:[`1`,`a`,`A`,`i`,`I`]},children:[`li`,`script`,`template`,`ul`,`ol`]},optgroup:{attrs:{disabled:[`disabled`],label:null}},option:{attrs:{disabled:[`disabled`],label:null,selected:[`selected`],value:null}},output:{attrs:{for:null,form:null,name:null}},p:Z,param:{attrs:{name:null,value:null}},pre:Z,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:Z,rt:Z,ruby:Z,samp:Z,script:{attrs:{type:[`text/javascript`],src:null,async:[`async`],defer:[`defer`],charset:$C}},section:Z,select:{attrs:{form:null,name:null,size:null,autofocus:[`autofocus`],disabled:[`disabled`],multiple:[`multiple`]}},slot:{attrs:{name:null}},small:Z,source:{attrs:{src:null,type:null,media:null}},span:Z,strong:Z,style:{attrs:{type:[`text/css`],media:null,scoped:null}},sub:Z,summary:Z,sup:Z,table:Z,tbody:Z,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:Z,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:[`autofocus`],disabled:[`disabled`],readonly:[`readonly`],required:[`required`],wrap:[`soft`,`hard`]}},tfoot:Z,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:[`row`,`col`,`rowgroup`,`colgroup`]}},thead:Z,time:{attrs:{datetime:null}},title:Z,tr:Z,track:{attrs:{src:null,label:null,default:null,kind:[`subtitles`,`captions`,`descriptions`,`chapters`,`metadata`],srclang:null}},ul:{children:[`li`,`script`,`template`,`ul`,`ol`]},var:Z,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:[`anonymous`,`use-credentials`],preload:[`auto`,`metadata`,`none`],autoplay:[`autoplay`],mediagroup:[`movie`],muted:[`muted`],controls:[`controls`]}},wbr:Z},iw={accesskey:null,class:null,contenteditable:nw,contextmenu:null,dir:[`ltr`,`rtl`,`auto`],draggable:[`true`,`false`,`auto`],dropzone:[`copy`,`move`,`link`,`string:`,`file:`],hidden:[`hidden`],id:null,inert:[`inert`],itemid:null,itemprop:null,itemref:null,itemscope:[`itemscope`],itemtype:null,lang:[`ar`,`bn`,`de`,`en-GB`,`en-US`,`es`,`fr`,`hi`,`id`,`ja`,`pa`,`pt`,`ru`,`tr`,`zh`],spellcheck:nw,autocorrect:nw,autocapitalize:nw,style:null,tabindex:null,title:null,translate:[`yes`,`no`],rel:[`stylesheet`,`alternate`,`author`,`bookmark`,`help`,`license`,`next`,`nofollow`,`noreferrer`,`prefetch`,`prev`,`search`,`tag`],role:`alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer`.split(` `),"aria-activedescendant":null,"aria-atomic":nw,"aria-autocomplete":[`inline`,`list`,`both`,`none`],"aria-busy":nw,"aria-checked":[`true`,`false`,`mixed`,`undefined`],"aria-controls":null,"aria-describedby":null,"aria-disabled":nw,"aria-dropeffect":null,"aria-expanded":[`true`,`false`,`undefined`],"aria-flowto":null,"aria-grabbed":[`true`,`false`,`undefined`],"aria-haspopup":nw,"aria-hidden":nw,"aria-invalid":[`true`,`false`,`grammar`,`spelling`],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":[`off`,`polite`,`assertive`],"aria-multiline":nw,"aria-multiselectable":nw,"aria-owns":null,"aria-posinset":null,"aria-pressed":[`true`,`false`,`mixed`,`undefined`],"aria-readonly":nw,"aria-relevant":null,"aria-required":nw,"aria-selected":[`true`,`false`,`undefined`],"aria-setsize":null,"aria-sort":[`ascending`,`descending`,`none`,`other`],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},aw=`beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload`.split(` `).map(e=>`on`+e);for(let e of aw)iw[e]=null;var ow=class{constructor(e,t){this.tags={...rw,...e},this.globalAttrs={...iw,...t},this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}};ow.default=new ow;function sw(e,t,n=e.length){if(!t)return``;let r=t.firstChild,i=r&&r.getChild(`TagName`);return i?e.sliceString(i.from,Math.min(i.to,n)):``}function cw(e,t=!1){for(;e;e=e.parent)if(e.name==`Element`)if(t)t=!1;else return e;return null}function lw(e,t,n){return n.tags[sw(e,cw(t))]?.children||n.allTags}function uw(e,t){let n=[];for(let r=cw(t);r&&!r.type.isTop;r=cw(r.parent)){let i=sw(e,r);if(i&&r.lastChild.name==`CloseTag`)break;i&&n.indexOf(i)<0&&(t.name==`EndTag`||t.from>=r.firstChild.to)&&n.push(i)}return n}var dw=/^[:\-\.\w\u00b7-\uffff]*$/;function fw(e,t,n,r,i){let a=/\s*>/.test(e.sliceDoc(i,i+5))?``:`>`,o=cw(n,n.name==`StartTag`||n.name==`TagName`);return{from:r,to:i,options:lw(e.doc,o,t).map(e=>({label:e,type:`type`})).concat(uw(e.doc,n).map((e,t)=>({label:`/`+e,apply:`/`+e+a,type:`type`,boost:99-t}))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function pw(e,t,n,r){let i=/\s*>/.test(e.sliceDoc(r,r+5))?``:`>`;return{from:n,to:r,options:uw(e.doc,t).map((e,t)=>({label:e,apply:e+i,type:`type`,boost:99-t})),validFor:dw}}function mw(e,t,n,r){let i=[],a=0;for(let r of lw(e.doc,n,t))i.push({label:`<`+r,type:`type`});for(let t of uw(e.doc,n))i.push({label:`</`+t+`>`,type:`type`,boost:99-a++});return{from:r,to:r,options:i,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}function hw(e,t,n,r,i){let a=cw(n),o=a?t.tags[sw(e.doc,a)]:null,s=o&&o.attrs?Object.keys(o.attrs):[];return{from:r,to:i,options:(o&&o.globalAttrs===!1?s:s.length?s.concat(t.globalAttrNames):t.globalAttrNames).map(e=>({label:e,type:`property`})),validFor:dw}}function gw(e,t,n,r,i){let a=n.parent?.getChild(`AttributeName`),o=[],s;if(a){let c=e.sliceDoc(a.from,a.to),l=t.globalAttrs[c];if(!l){let r=cw(n),i=r?t.tags[sw(e.doc,r)]:null;l=i?.attrs&&i.attrs[c]}if(l){let t=e.sliceDoc(r,i).toLowerCase(),n=`"`,a=`"`;/^['"]/.test(t)?(s=t[0]==`"`?/^[^"]*$/:/^[^']*$/,n=``,a=e.sliceDoc(i,i+1)==t[0]?``:t[0],t=t.slice(1),r++):s=/^[^\s<>='"]*$/;for(let e of l)o.push({label:e,apply:n+e+a,type:`constant`})}}return{from:r,to:i,options:o,validFor:s}}function _w(e,t){let{state:n,pos:r}=t,i=X(n).resolveInner(r,-1),a=i.resolve(r);for(let e=r,t;a==i&&(t=i.childBefore(e));){let n=t.lastChild;if(!n||!n.type.isError||n.from<n.to)break;a=i=t,e=n.from}return i.name==`TagName`?i.parent&&/CloseTag$/.test(i.parent.name)?pw(n,i,i.from,r):fw(n,e,i,i.from,r):i.name==`StartTag`||i.name==`IncompleteTag`?fw(n,e,i,r,r):i.name==`StartCloseTag`||i.name==`IncompleteCloseTag`?pw(n,i,r,r):i.name==`OpenTag`||i.name==`SelfClosingTag`||i.name==`AttributeName`?hw(n,e,i,i.name==`AttributeName`?i.from:r,r):i.name==`Is`||i.name==`AttributeValue`||i.name==`UnquotedAttributeValue`?gw(n,e,i,i.name==`Is`?r:i.from,r):t.explicit&&(a.name==`Element`||a.name==`Text`||a.name==`Document`)?mw(n,e,i,r):null}function vw(e){return _w(ow.default,e)}function yw(e){let{extraTags:t,extraGlobalAttributes:n}=e,r=n||t?new ow(t,n):ow.default;return e=>_w(r,e)}var bw=rx.parser.configure({top:`SingleExpression`}),xw=[{tag:`script`,attrs:e=>e.type==`text/typescript`||e.lang==`ts`,parser:ax.parser},{tag:`script`,attrs:e=>e.type==`text/babel`||e.type==`text/jsx`,parser:ox.parser},{tag:`script`,attrs:e=>e.type==`text/typescript-jsx`,parser:sx.parser},{tag:`script`,attrs(e){return/^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e.type)},parser:bw},{tag:`script`,attrs(e){return!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type)},parser:rx.parser},{tag:`style`,attrs(e){return(!e.lang||e.lang==`css`)&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type))},parser:XC.parser}],Sw=[{name:`style`,parser:XC.parser.configure({top:`Styles`})}].concat(aw.map(e=>({name:e,parser:rx.parser}))),Cw=zd.define({name:`html`,parser:YS.configure({props:[rf.add({Element(e){let t=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.node.from)+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit},Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let t=null,n;for(let n=e.node;;){let e=n.lastChild;if(!e||e.name!=`Element`||e.to!=n.to)break;t=n=e}return t&&!((n=t.lastChild)&&(n.name==`CloseTag`||n.name==`SelfClosingTag`))?e.lineIndent(t.from)+e.unit:null}}),bf.add({Element(e){let t=e.firstChild,n=e.lastChild;return!t||t.name!=`OpenTag`?null:{from:t.to,to:n.name==`CloseTag`?n.from:e.to}}}),fp.add({"OpenTag CloseTag":e=>e.getChild(`TagName`)})]}),languageData:{commentTokens:{block:{open:`<!--`,close:`-->`}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:`-_`}}),ww=Cw.configure({wrap:$S(xw,Sw)});function Tw(e={}){let t=``,n;return e.matchClosingTags===!1&&(t=`noMatch`),e.selfClosingTags===!0&&(t=(t?t+` `:``)+`selfClosing`),(e.nestedLanguages&&e.nestedLanguages.length||e.nestedAttributes&&e.nestedAttributes.length)&&(n=$S((e.nestedLanguages||[]).concat(xw),(e.nestedAttributes||[]).concat(Sw))),new Yd(n?Cw.configure({wrap:n,dialect:t}):t?ww.configure({dialect:t}):ww,[ww.data.of({autocomplete:yw(e)}),e.autoCloseTags===!1?[]:Dw,dx().support,ZC().support])}var Ew=new Set(`area base br col command embed frame hr img input keygen link meta param source track wbr menuitem`.split(` `)),Dw=U.inputHandler.of((e,t,n,r,i)=>{if(e.composing||e.state.readOnly||t!=n||r!=`>`&&r!=`/`||!ww.isActiveAt(e.state,t,-1))return!1;let a=i(),{state:o}=a,s=o.changeByRange(e=>{let t=o.doc.sliceString(e.from-1,e.to)==r,{head:n}=e,i=X(o).resolveInner(n,-1),a;if(t&&r==`>`&&i.name==`EndTag`){let t=i.parent;if(t.parent?.lastChild?.name!=`CloseTag`&&(a=sw(o.doc,t.parent,n))&&!Ew.has(a))return{range:e,changes:{from:n,to:n+ +(o.doc.sliceString(n,n+1)===`>`),insert:`</${a}>`}}}else if(t&&r==`/`&&i.name==`IncompleteCloseTag`){let e=i.parent;if(i.from==n-2&&e.lastChild?.name!=`CloseTag`&&(a=sw(o.doc,e,n))&&!Ew.has(a)){let e=n+ +(o.doc.sliceString(n,n+1)===`>`),t=`${a}>`;return{range:A.cursor(n+t.length,-1),changes:{from:n,to:e,insert:t}}}}return{range:e}});return s.changes.empty?!1:(e.dispatch([a,o.update(s,{userEvent:`input.complete`,scrollIntoView:!0})]),!0)}),Ow=class e{static create(t,n,r,i,a){let o=i+(i<<8)+t+(n<<4)|0;return new e(t,n,r,o,a,[],[])}constructor(e,t,n,r,i,a,o){this.type=e,this.value=t,this.from=n,this.hash=r,this.end=i,this.children=a,this.positions=o,this.hashProp=[[W.contextHash,r]]}addChild(e,t){e.prop(W.contextHash)!=this.hash&&(e=new q(e.type,e.children,e.positions,e.length,this.hashProp)),this.children.push(e),this.positions.push(t)}toTree(e,t=this.end){let n=this.children.length-1;return n>=0&&(t=Math.max(t,this.positions[n]+this.children[n].length+this.from)),new q(e.types[this.type],this.children,this.positions,t-this.from).balance({makeTree:(e,t,n)=>new q(G.none,e,t,n,this.hashProp)})}},Q;(function(e){e[e.Document=1]=`Document`,e[e.CodeBlock=2]=`CodeBlock`,e[e.FencedCode=3]=`FencedCode`,e[e.Blockquote=4]=`Blockquote`,e[e.HorizontalRule=5]=`HorizontalRule`,e[e.BulletList=6]=`BulletList`,e[e.OrderedList=7]=`OrderedList`,e[e.ListItem=8]=`ListItem`,e[e.ATXHeading1=9]=`ATXHeading1`,e[e.ATXHeading2=10]=`ATXHeading2`,e[e.ATXHeading3=11]=`ATXHeading3`,e[e.ATXHeading4=12]=`ATXHeading4`,e[e.ATXHeading5=13]=`ATXHeading5`,e[e.ATXHeading6=14]=`ATXHeading6`,e[e.SetextHeading1=15]=`SetextHeading1`,e[e.SetextHeading2=16]=`SetextHeading2`,e[e.HTMLBlock=17]=`HTMLBlock`,e[e.LinkReference=18]=`LinkReference`,e[e.Paragraph=19]=`Paragraph`,e[e.CommentBlock=20]=`CommentBlock`,e[e.ProcessingInstructionBlock=21]=`ProcessingInstructionBlock`,e[e.Escape=22]=`Escape`,e[e.Entity=23]=`Entity`,e[e.HardBreak=24]=`HardBreak`,e[e.Emphasis=25]=`Emphasis`,e[e.StrongEmphasis=26]=`StrongEmphasis`,e[e.Link=27]=`Link`,e[e.Image=28]=`Image`,e[e.InlineCode=29]=`InlineCode`,e[e.HTMLTag=30]=`HTMLTag`,e[e.Comment=31]=`Comment`,e[e.ProcessingInstruction=32]=`ProcessingInstruction`,e[e.Autolink=33]=`Autolink`,e[e.HeaderMark=34]=`HeaderMark`,e[e.QuoteMark=35]=`QuoteMark`,e[e.ListMark=36]=`ListMark`,e[e.LinkMark=37]=`LinkMark`,e[e.EmphasisMark=38]=`EmphasisMark`,e[e.CodeMark=39]=`CodeMark`,e[e.CodeText=40]=`CodeText`,e[e.CodeInfo=41]=`CodeInfo`,e[e.LinkTitle=42]=`LinkTitle`,e[e.LinkLabel=43]=`LinkLabel`,e[e.URL=44]=`URL`})(Q||={});var kw=class{constructor(e,t){this.start=e,this.content=t,this.marks=[],this.parsers=[]}},Aw=class{constructor(){this.text=``,this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let e=this.skipSpace(this.basePos);this.indent=this.countIndent(e,this.pos,this.indent),this.pos=e,this.next=e==this.text.length?-1:this.text.charCodeAt(e)}skipSpace(e){return Pw(this.text,e)}reset(e){for(this.text=e,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(e){this.basePos=e,this.baseIndent=this.countIndent(e,this.pos,this.indent)}moveBaseColumn(e){this.baseIndent=e,this.basePos=this.findColumn(e)}addMarker(e){this.markers.push(e)}countIndent(e,t=0,n=0){for(let r=t;r<e;r++)n+=this.text.charCodeAt(r)==9?4-n%4:1;return n}findColumn(e){let t=0;for(let n=0;t<this.text.length&&n<e;t++)n+=this.text.charCodeAt(t)==9?4-n%4:1;return t}scrub(){if(!this.baseIndent)return this.text;let e=``;for(let t=0;t<this.basePos;t++)e+=` `;return e+this.text.slice(this.basePos)}};function jw(e,t,n){if(n.pos==n.text.length||e!=t.block&&n.indent>=t.stack[n.depth+1].value+n.baseIndent)return!0;if(n.indent>=n.baseIndent+4)return!1;let r=(e.type==Q.OrderedList?Vw:Bw)(n,t,!1);return r>0&&(e.type!=Q.BulletList||Rw(n,t,!1)<0)&&n.text.charCodeAt(n.pos+r-1)==e.value}var Mw={[Q.Blockquote](e,t,n){return n.next==62?(n.markers.push($(Q.QuoteMark,t.lineStart+n.pos,t.lineStart+n.pos+1)),n.moveBase(n.pos+(Nw(n.text.charCodeAt(n.pos+1))?2:1)),e.end=t.lineStart+n.text.length,!0):!1},[Q.ListItem](e,t,n){return n.indent<n.baseIndent+e.value&&n.next>-1?!1:(n.moveBaseColumn(n.baseIndent+e.value),!0)},[Q.OrderedList]:jw,[Q.BulletList]:jw,[Q.Document](){return!0}};function Nw(e){return e==32||e==9||e==10||e==13}function Pw(e,t=0){for(;t<e.length&&Nw(e.charCodeAt(t));)t++;return t}function Fw(e,t,n){for(;t>n&&Nw(e.charCodeAt(t-1));)t--;return t}function Iw(e){if(e.next!=96&&e.next!=126)return-1;let t=e.pos+1;for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++;if(t<e.pos+3)return-1;if(e.next==96){for(let n=t;n<e.text.length;n++)if(e.text.charCodeAt(n)==96)return-1}return t}function Lw(e){return e.next==62?e.text.charCodeAt(e.pos+1)==32?2:1:-1}function Rw(e,t,n){if(e.next!=42&&e.next!=45&&e.next!=95)return-1;let r=1;for(let t=e.pos+1;t<e.text.length;t++){let n=e.text.charCodeAt(t);if(n==e.next)r++;else if(!Nw(n))return-1}return n&&e.next==45&&Uw(e)>-1&&e.depth==t.stack.length&&t.parser.leafBlockParsers.indexOf(tT.SetextHeading)>-1||r<3?-1:1}function zw(e,t){for(let n=e.stack.length-1;n>=0;n--)if(e.stack[n].type==t)return!0;return!1}function Bw(e,t,n){return(e.next==45||e.next==43||e.next==42)&&(e.pos==e.text.length-1||Nw(e.text.charCodeAt(e.pos+1)))&&(!n||zw(t,Q.BulletList)||e.skipSpace(e.pos+2)<e.text.length)?1:-1}function Vw(e,t,n){let r=e.pos,i=e.next;for(;i>=48&&i<=57;){if(r++,r==e.text.length)return-1;i=e.text.charCodeAt(r)}return r==e.pos||r>e.pos+9||i!=46&&i!=41||r<e.text.length-1&&!Nw(e.text.charCodeAt(r+1))||n&&!zw(t,Q.OrderedList)&&(e.skipSpace(r+1)==e.text.length||r>e.pos+1||e.next!=49)?-1:r+1-e.pos}function Hw(e){if(e.next!=35)return-1;let t=e.pos+1;for(;t<e.text.length&&e.text.charCodeAt(t)==35;)t++;if(t<e.text.length&&e.text.charCodeAt(t)!=32)return-1;let n=t-e.pos;return n>6?-1:n}function Uw(e){if(e.next!=45&&e.next!=61||e.indent>=e.baseIndent+4)return-1;let t=e.pos+1;for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++;let n=t;for(;t<e.text.length&&Nw(e.text.charCodeAt(t));)t++;return t==e.text.length?n:-1}var Ww=/^[ \t]*$/,Gw=/-->/,Kw=/\?>/,qw=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,Gw],[/^\s*<\?/,Kw],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,Ww],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,Ww]];function Jw(e,t,n){if(e.next!=60)return-1;let r=e.text.slice(e.pos);for(let e=0,t=qw.length-+!!n;e<t;e++)if(qw[e][0].test(r))return e;return-1}function Yw(e,t){let n=e.countIndent(t,e.pos,e.indent),r=e.countIndent(e.skipSpace(t),t,n);return r>=n+5?n+1:r}function Xw(e,t,n){let r=e.length-1;r>=0&&e[r].to==t&&e[r].type==Q.CodeText?e[r].to=n:e.push($(Q.CodeText,t,n))}var Zw={LinkReference:void 0,IndentedCode(e,t){let n=t.baseIndent+4;if(t.indent<n)return!1;let r=t.findColumn(n),i=e.lineStart+r,a=e.lineStart+t.text.length,o=[],s=[];for(Xw(o,i,a);e.nextLine()&&t.depth>=e.stack.length;)if(t.pos==t.text.length){Xw(s,e.lineStart-1,e.lineStart);for(let e of t.markers)s.push(e)}else if(t.indent<n)break;else{if(s.length){for(let e of s)e.type==Q.CodeText?Xw(o,e.from,e.to):o.push(e);s=[]}Xw(o,e.lineStart-1,e.lineStart);for(let e of t.markers)o.push(e);a=e.lineStart+t.text.length;let n=e.lineStart+t.findColumn(t.baseIndent+4);n<a&&Xw(o,n,a)}return s.length&&(s=s.filter(e=>e.type!=Q.CodeText),s.length&&(t.markers=s.concat(t.markers))),e.addNode(e.buffer.writeElements(o,-i).finish(Q.CodeBlock,a-i),i),!0},FencedCode(e,t){let n=Iw(t);if(n<0)return!1;let r=e.lineStart+t.pos,i=t.next,a=n-t.pos,o=t.skipSpace(n),s=Fw(t.text,t.text.length,o),c=[$(Q.CodeMark,r,r+a)];o<s&&c.push($(Q.CodeInfo,e.lineStart+o,e.lineStart+s));for(let n=!0,r=!0,o=!1;e.nextLine()&&t.depth>=e.stack.length;n=!1){let s=t.pos;if(t.indent-t.baseIndent<4)for(;s<t.text.length&&t.text.charCodeAt(s)==i;)s++;if(s-t.pos>=a&&t.skipSpace(s)==t.text.length){for(let e of t.markers)c.push(e);r&&o&&Xw(c,e.lineStart-1,e.lineStart),c.push($(Q.CodeMark,e.lineStart+t.pos,e.lineStart+s)),e.nextLine();break}else{o=!0,n||(Xw(c,e.lineStart-1,e.lineStart),r=!1);for(let e of t.markers)c.push(e);let i=e.lineStart+t.basePos,a=e.lineStart+t.text.length;i<a&&(Xw(c,i,a),r=!1)}}return e.addNode(e.buffer.writeElements(c,-r).finish(Q.FencedCode,e.prevLineEnd()-r),r),!0},Blockquote(e,t){let n=Lw(t);return n<0?!1:(e.startContext(Q.Blockquote,t.pos),e.addNode(Q.QuoteMark,e.lineStart+t.pos,e.lineStart+t.pos+1),t.moveBase(t.pos+n),null)},HorizontalRule(e,t){if(Rw(t,e,!1)<0)return!1;let n=e.lineStart+t.pos;return e.nextLine(),e.addNode(Q.HorizontalRule,n),!0},BulletList(e,t){let n=Bw(t,e,!1);if(n<0)return!1;e.block.type!=Q.BulletList&&e.startContext(Q.BulletList,t.basePos,t.next);let r=Yw(t,t.pos+1);return e.startContext(Q.ListItem,t.basePos,r-t.baseIndent),e.addNode(Q.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+n),t.moveBaseColumn(r),null},OrderedList(e,t){let n=Vw(t,e,!1);if(n<0)return!1;e.block.type!=Q.OrderedList&&e.startContext(Q.OrderedList,t.basePos,t.text.charCodeAt(t.pos+n-1));let r=Yw(t,t.pos+n);return e.startContext(Q.ListItem,t.basePos,r-t.baseIndent),e.addNode(Q.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+n),t.moveBaseColumn(r),null},ATXHeading(e,t){let n=Hw(t);if(n<0)return!1;let r=t.pos,i=e.lineStart+r,a=Fw(t.text,t.text.length,r),o=a;for(;o>r&&t.text.charCodeAt(o-1)==t.next;)o--;(o==a||o==r||!Nw(t.text.charCodeAt(o-1)))&&(o=t.text.length);let s=e.buffer.write(Q.HeaderMark,0,n).writeElements(e.parser.parseInline(t.text.slice(r+n+1,o),i+n+1),-i);o<t.text.length&&s.write(Q.HeaderMark,o-r,a-r);let c=s.finish(Q.ATXHeading1-1+n,t.text.length-r);return e.nextLine(),e.addNode(c,i),!0},HTMLBlock(e,t){let n=Jw(t,e,!1);if(n<0)return!1;let r=e.lineStart+t.pos,i=qw[n][1],a=[],o=i!=Ww;for(;!i.test(t.text)&&e.nextLine();){if(t.depth<e.stack.length){o=!1;break}for(let e of t.markers)a.push(e)}o&&e.nextLine();let s=i==Gw?Q.CommentBlock:i==Kw?Q.ProcessingInstructionBlock:Q.HTMLBlock,c=e.prevLineEnd();return e.addNode(e.buffer.writeElements(a,-r).finish(s,c-r),r),!0},SetextHeading:void 0},Qw=class{constructor(e){this.stage=0,this.elts=[],this.pos=0,this.start=e.start,this.advance(e.content)}nextLine(e,t,n){if(this.stage==-1)return!1;let r=n.content+`
`+t.scrub(),i=this.advance(r);return i>-1&&i<r.length?this.complete(e,n,i):!1}finish(e,t){return(this.stage==2||this.stage==3)&&Pw(t.content,this.pos)==t.content.length?this.complete(e,t,t.content.length):!1}complete(e,t,n){return e.addLeafElement(t,$(Q.LinkReference,this.start,this.start+n,this.elts)),!0}nextStage(e){return e?(this.pos=e.to-this.start,this.elts.push(e),this.stage++,!0):(e===!1&&(this.stage=-1),!1)}advance(e){for(;;)if(this.stage==-1)return-1;else if(this.stage==0){if(!this.nextStage(ET(e,this.pos,this.start,!0)))return-1;if(e.charCodeAt(this.pos)!=58)return this.stage=-1;this.elts.push($(Q.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else if(this.stage==1){if(!this.nextStage(wT(e,Pw(e,this.pos),this.start)))return-1}else if(this.stage==2){let t=Pw(e,this.pos),n=0;if(t>this.pos){let r=TT(e,t,this.start);if(r){let t=$w(e,r.to-this.start);t>0&&(this.nextStage(r),n=t)}}return n||=$w(e,this.pos),n>0&&n<e.length?n:-1}else return $w(e,this.pos)}};function $w(e,t){for(;t<e.length;t++){let n=e.charCodeAt(t);if(n==10)break;if(!Nw(n))return-1}return t}var eT=class{nextLine(e,t,n){let r=t.depth<e.stack.length?-1:Uw(t),i=t.next;if(r<0)return!1;let a=$(Q.HeaderMark,e.lineStart+t.pos,e.lineStart+r);return e.nextLine(),e.addLeafElement(n,$(i==61?Q.SetextHeading1:Q.SetextHeading2,n.start,e.prevLineEnd(),[...e.parser.parseInline(n.content,n.start),a])),!0}finish(){return!1}},tT={LinkReference(e,t){return t.content.charCodeAt(0)==91?new Qw(t):null},SetextHeading(){return new eT}},nT=[(e,t)=>Hw(t)>=0,(e,t)=>Iw(t)>=0,(e,t)=>Lw(t)>=0,(e,t)=>Bw(t,e,!0)>=0,(e,t)=>Vw(t,e,!0)>=0,(e,t)=>Rw(t,e,!0)>=0,(e,t)=>Jw(t,e,!0)>=0],rT={text:``,end:0},iT=class{constructor(e,t,n,r){this.parser=e,this.input=t,this.ranges=r,this.line=new Aw,this.atEnd=!1,this.reusePlaceholders=new Map,this.stoppedAt=null,this.rangeI=0,this.to=r[r.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=r[0].from,this.block=Ow.create(Q.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=n.length?new AT(n,t):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(this.stoppedAt!=null&&this.absoluteLineStart>this.stoppedAt)return this.finish();let{line:e}=this;for(;;){for(let t=0;;){let n=e.depth<this.stack.length?this.stack[this.stack.length-1]:null;for(;t<e.markers.length&&(!n||e.markers[t].from<n.end);){let n=e.markers[t++];this.addNode(n.type,n.from,n.to)}if(!n)break;this.finishContext()}if(e.pos<e.text.length)break;if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(e.basePos))return null;start:for(;;){for(let t of this.parser.blockParsers)if(t){let n=t(this,e);if(n!=0){if(n==1)return null;e.forward();continue start}}break}let t=new kw(this.lineStart+e.pos,e.text.slice(e.pos));for(let e of this.parser.leafBlockParsers)if(e){let n=e(this,t);n&&t.parsers.push(n)}lines:for(;this.nextLine()&&e.pos!=e.text.length;){if(e.indent<e.baseIndent+4){for(let n of this.parser.endLeafBlock)if(n(this,e,t))break lines}for(let n of t.parsers)if(n.nextLine(this,e,t))return null;t.content+=`
`+e.scrub();for(let n of e.markers)t.marks.push(n)}return this.finishLeaf(t),null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw RangeError(`Can't move stoppedAt forward`);this.stoppedAt=e}reuseFragment(e){if(!this.fragments.moveTo(this.absoluteLineStart+e,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1;let t=this.fragments.takeNodes(this);return t?(this.absoluteLineStart+=t,this.lineStart=jT(this.absoluteLineStart,this.ranges),this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++,this.readLine()):(this.atEnd=!0,this.readLine()),!0):!1}get depth(){return this.stack.length}parentType(e=this.depth-1){return this.parser.nodeSet.types[this.stack[e].type]}nextLine(){return this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}peekLine(){return this.scanLine(this.absoluteLineEnd+1).text}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++,this.absoluteLineStart=Math.max(this.absoluteLineStart,this.ranges[this.rangeI].from)}scanLine(e){let t=rT;if(t.end=e,e>=this.to)t.text=``;else if(t.text=this.lineChunkAt(e),t.end+=t.text.length,this.ranges.length>1){let e=this.absoluteLineStart,n=this.rangeI;for(;this.ranges[n].to<t.end;){n++;let r=this.ranges[n].from,i=this.lineChunkAt(r);t.end=r+i.length,t.text=t.text.slice(0,this.ranges[n-1].to-e)+i,e=t.end-t.text.length}}return t}readLine(){let{line:e}=this,{text:t,end:n}=this.scanLine(this.absoluteLineStart);for(this.absoluteLineEnd=n,e.reset(t);e.depth<this.stack.length;e.depth++){let t=this.stack[e.depth],n=this.parser.skipContextMarkup[t.type];if(!n)throw Error(`Unhandled block context `+Q[t.type]);let r=this.line.markers.length;if(!n(t,this,e)){this.line.markers.length>r&&(t.end=this.line.markers[this.line.markers.length-1].to),e.forward();break}e.forward()}}lineChunkAt(e){let t=this.input.chunk(e),n;if(this.input.lineChunks)n=t==`
`?``:t;else{let e=t.indexOf(`
`);n=e<0?t:t.slice(0,e)}return e+n.length>this.to?n.slice(0,this.to-e):n}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(e,t,n=0){this.block=Ow.create(e,n,this.lineStart+t,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(e,t,n=0){this.startContext(this.parser.getNodeType(e),t,n)}addNode(e,t,n){typeof e==`number`&&(e=new q(this.parser.nodeSet.types[e],dT,dT,(n??this.prevLineEnd())-t)),this.block.addChild(e,t-this.block.from)}addElement(e){this.block.addChild(e.toTree(this.parser.nodeSet),e.from-this.block.from)}addLeafElement(e,t){this.addNode(this.buffer.writeElements(OT(t.children,e.marks),-t.from).finish(t.type,t.to-t.from),t.from)}finishContext(){let e=this.stack.pop(),t=this.stack[this.stack.length-1];t.addChild(e.toTree(this.parser.nodeSet),e.from-t.from),this.block=t}finish(){for(;this.stack.length>1;)this.finishContext();return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(e){return this.ranges.length>1?aT(this.ranges,0,e.topNode,this.ranges[0].from,this.reusePlaceholders):e}finishLeaf(e){for(let t of e.parsers)if(t.finish(this,e))return;let t=OT(this.parser.parseInline(e.content,e.start),e.marks);this.addNode(this.buffer.writeElements(t,-e.start).finish(Q.Paragraph,e.content.length),e.start)}elt(e,t,n,r){return typeof e==`string`?$(this.parser.getNodeType(e),t,n,r):new mT(e,t)}get buffer(){return new fT(this.parser.nodeSet)}};function aT(e,t,n,r,i){let a=e[t].to,o=[],s=[],c=n.from+r;function l(n,i){for(;i?n>=a:n>a;){let i=e[t+1].from-a;r+=i,n+=i,t++,a=e[t].to}}for(let u=n.firstChild;u;u=u.nextSibling){l(u.from+r,!0);let n=u.from+r,d,f=i.get(u.tree);f?d=f:u.to+r>a?(d=aT(e,t,u,r,i),l(u.to+r,!1)):d=u.toTree(),o.push(d),s.push(n-c)}return l(n.to+r,!1),new q(n.type,o,s,n.to+r-c,n.tree?n.tree.propValues:void 0)}var oT=class e extends Wu{constructor(e,t,n,r,i,a,o,s,c){super(),this.nodeSet=e,this.blockParsers=t,this.leafBlockParsers=n,this.blockNames=r,this.endLeafBlock=i,this.skipContextMarkup=a,this.inlineParsers=o,this.inlineNames=s,this.wrappers=c,this.nodeTypes=Object.create(null);for(let t of e.types)this.nodeTypes[t.name]=t.id}createParse(e,t,n){let r=new iT(this,e,t,n);for(let i of this.wrappers)r=i(r,e,t,n);return r}configure(t){let n=cT(t);if(!n)return this;let{nodeSet:r,skipContextMarkup:i}=this,a=this.blockParsers.slice(),o=this.leafBlockParsers.slice(),s=this.blockNames.slice(),c=this.inlineParsers.slice(),l=this.inlineNames.slice(),u=this.endLeafBlock.slice(),d=this.wrappers;if(sT(n.defineNodes)){i=Object.assign({},i);let e=r.types.slice(),t;for(let r of n.defineNodes){let{name:n,block:a,composite:o,style:s}=typeof r==`string`?{name:r}:r;if(e.some(e=>e.name==n))continue;o&&(i[e.length]=(e,t,n)=>o(t,n,e.value));let c=e.length,l=o?[`Block`,`BlockContext`]:a?c>=Q.ATXHeading1&&c<=Q.SetextHeading2?[`Block`,`LeafBlock`,`Heading`]:[`Block`,`LeafBlock`]:void 0;e.push(G.define({id:c,name:n,props:l&&[[W.group,l]]})),s&&(t||={},Array.isArray(s)||s instanceof sd?t[n]=s:Object.assign(t,s))}r=new bu(e),t&&(r=r.extend(fd(t)))}if(sT(n.props)&&(r=r.extend(...n.props)),sT(n.remove))for(let e of n.remove){let t=this.blockNames.indexOf(e),n=this.inlineNames.indexOf(e);t>-1&&(a[t]=o[t]=void 0),n>-1&&(c[n]=void 0)}if(sT(n.parseBlock))for(let e of n.parseBlock){let t=s.indexOf(e.name);if(t>-1)a[t]=e.parse,o[t]=e.leaf;else{let t=e.before?lT(s,e.before):e.after?lT(s,e.after)+1:s.length-1;a.splice(t,0,e.parse),o.splice(t,0,e.leaf),s.splice(t,0,e.name)}e.endLeaf&&u.push(e.endLeaf)}if(sT(n.parseInline))for(let e of n.parseInline){let t=l.indexOf(e.name);if(t>-1)c[t]=e.parse;else{let t=e.before?lT(l,e.before):e.after?lT(l,e.after)+1:l.length-1;c.splice(t,0,e.parse),l.splice(t,0,e.name)}}return n.wrap&&(d=d.concat(n.wrap)),new e(r,a,o,s,u,i,c,l,d)}getNodeType(e){let t=this.nodeTypes[e];if(t==null)throw RangeError(`Unknown node type '${e}'`);return t}parseInline(e,t){let n=new DT(this,e,t);outer:for(let e=t;e<n.end;){let t=n.char(e);for(let r of this.inlineParsers)if(r){let i=r(n,t,e);if(i>=0){e=i;continue outer}}e++}return n.resolveMarkers(0)}};function sT(e){return e!=null&&e.length>0}function cT(e){if(!Array.isArray(e))return e;if(e.length==0)return null;let t=cT(e[0]);if(e.length==1)return t;let n=cT(e.slice(1));if(!n||!t)return t||n;let r=(e,t)=>(e||dT).concat(t||dT),i=t.wrap,a=n.wrap;return{props:r(t.props,n.props),defineNodes:r(t.defineNodes,n.defineNodes),parseBlock:r(t.parseBlock,n.parseBlock),parseInline:r(t.parseInline,n.parseInline),remove:r(t.remove,n.remove),wrap:i?a?(e,t,n,r)=>i(a(e,t,n,r),t,n,r):i:a}}function lT(e,t){let n=e.indexOf(t);if(n<0)throw RangeError(`Position specified relative to unknown parser ${t}`);return n}var uT=[G.none];for(let e=1,t;t=Q[e];e++)uT[e]=G.define({id:e,name:t,props:e>=Q.Escape?[]:[[W.group,e in Mw?[`Block`,`BlockContext`]:[`Block`,`LeafBlock`]]],top:t==`Document`});var dT=[],fT=class{constructor(e){this.nodeSet=e,this.content=[],this.nodes=[]}write(e,t,n,r=0){return this.content.push(e,t,n,4+r*4),this}writeElements(e,t=0){for(let n of e)n.writeTo(this,t);return this}finish(e,t){return q.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:e,length:t})}},pT=class{constructor(e,t,n,r=dT){this.type=e,this.from=t,this.to=n,this.children=r}writeTo(e,t){let n=e.content.length;e.writeElements(this.children,t),e.content.push(this.type,this.from+t,this.to+t,e.content.length+4-n)}toTree(e){return new fT(e).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}},mT=class{constructor(e,t){this.tree=e,this.from=t}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return dT}writeTo(e,t){e.nodes.push(this.tree),e.content.push(e.nodes.length-1,this.from+t,this.to+t,-1)}toTree(){return this.tree}};function $(e,t,n,r){return new pT(e,t,n,r)}var hT={resolve:`Emphasis`,mark:`EmphasisMark`},gT={resolve:`Emphasis`,mark:`EmphasisMark`},_T={},vT={},yT=class{constructor(e,t,n,r){this.type=e,this.from=t,this.to=n,this.side=r}},bT=`!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`,xT=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;try{xT=RegExp(`[\\p{S}|\\p{P}]`,`u`)}catch{}var ST={Escape(e,t,n){if(t!=92||n==e.end-1)return-1;let r=e.char(n+1);for(let t=0;t<32;t++)if(bT.charCodeAt(t)==r)return e.append($(Q.Escape,n,n+2));return-1},Entity(e,t,n){if(t!=38)return-1;let r=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(n+1,n+31));return r?e.append($(Q.Entity,n,n+1+r[0].length)):-1},InlineCode(e,t,n){if(t!=96||n&&e.char(n-1)==96)return-1;let r=n+1;for(;r<e.end&&e.char(r)==96;)r++;let i=r-n,a=0;for(;r<e.end;r++)if(e.char(r)==96){if(a++,a==i&&e.char(r+1)!=96)return e.append($(Q.InlineCode,n,r+1,[$(Q.CodeMark,n,n+i),$(Q.CodeMark,r+1-i,r+1)]))}else a=0;return-1},HTMLTag(e,t,n){if(t!=60||n==e.end-1)return-1;let r=e.slice(n+1,e.end),i=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(r);if(i)return e.append($(Q.Autolink,n,n+1+i[0].length,[$(Q.LinkMark,n,n+1),$(Q.URL,n+1,n+i[0].length),$(Q.LinkMark,n+i[0].length,n+1+i[0].length)]));let a=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r);if(a)return e.append($(Q.Comment,n,n+1+a[0].length));let o=/^\?[^]*?\?>/.exec(r);if(o)return e.append($(Q.ProcessingInstruction,n,n+1+o[0].length));let s=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(r);return s?e.append($(Q.HTMLTag,n,n+1+s[0].length)):-1},Emphasis(e,t,n){if(t!=95&&t!=42)return-1;let r=n+1;for(;e.char(r)==t;)r++;let i=e.slice(n-1,n),a=e.slice(r,r+1),o=xT.test(i),s=xT.test(a),c=/\s|^$/.test(i),l=/\s|^$/.test(a),u=!l&&(!s||c||o),d=!c&&(!o||l||s),f=u&&(t==42||!d||o),p=d&&(t==42||!u||s);return e.append(new yT(t==95?hT:gT,n,r,!!f|(p?2:0)))},HardBreak(e,t,n){if(t==92&&e.char(n+1)==10)return e.append($(Q.HardBreak,n,n+2));if(t==32){let t=n+1;for(;e.char(t)==32;)t++;if(e.char(t)==10&&t>=n+2)return e.append($(Q.HardBreak,n,t+1))}return-1},Link(e,t,n){return t==91?e.append(new yT(_T,n,n+1,1)):-1},Image(e,t,n){return t==33&&e.char(n+1)==91?e.append(new yT(vT,n,n+2,1)):-1},LinkEnd(e,t,n){if(t!=93)return-1;for(let t=e.parts.length-1;t>=0;t--){let r=e.parts[t];if(r instanceof yT&&(r.type==_T||r.type==vT)){if(!r.side||e.skipSpace(r.to)==n&&!/[(\[]/.test(e.slice(n+1,n+2)))return e.parts[t]=null,-1;let i=e.takeContent(t),a=e.parts[t]=CT(e,i,r.type==_T?Q.Link:Q.Image,r.from,n+1);if(r.type==_T)for(let n=0;n<t;n++){let t=e.parts[n];t instanceof yT&&t.type==_T&&(t.side=0)}return a.to}}return-1}};function CT(e,t,n,r,i){let{text:a}=e,o=e.char(i),s=i;if(t.unshift($(Q.LinkMark,r,r+(n==Q.Image?2:1))),t.push($(Q.LinkMark,i-1,i)),o==40){let n=e.skipSpace(i+1),r=wT(a,n-e.offset,e.offset),o;r&&(n=e.skipSpace(r.to),n!=r.to&&(o=TT(a,n-e.offset,e.offset),o&&(n=e.skipSpace(o.to)))),e.char(n)==41&&(t.push($(Q.LinkMark,i,i+1)),s=n+1,r&&t.push(r),o&&t.push(o),t.push($(Q.LinkMark,n,s)))}else if(o==91){let n=ET(a,i-e.offset,e.offset,!1);n&&(t.push(n),s=n.to)}return $(n,r,s,t)}function wT(e,t,n){if(e.charCodeAt(t)==60){for(let r=t+1;r<e.length;r++){let i=e.charCodeAt(r);if(i==62)return $(Q.URL,t+n,r+1+n);if(i==60||i==10)return!1}return null}else{let r=0,i=t;for(let t=!1;i<e.length;i++){let n=e.charCodeAt(i);if(Nw(n))break;if(t)t=!1;else if(n==40)r++;else if(n==41){if(!r)break;r--}else n==92&&(t=!0)}return i>t?$(Q.URL,t+n,i+n):i==e.length?null:!1}}function TT(e,t,n){let r=e.charCodeAt(t);if(r!=39&&r!=34&&r!=40)return!1;let i=r==40?41:r;for(let r=t+1,a=!1;r<e.length;r++){let o=e.charCodeAt(r);if(a)a=!1;else if(o==i)return $(Q.LinkTitle,t+n,r+1+n);else o==92&&(a=!0)}return null}function ET(e,t,n,r){for(let i=!1,a=t+1,o=Math.min(e.length,a+999);a<o;a++){let o=e.charCodeAt(a);if(i)i=!1;else if(o==93)return r?!1:$(Q.LinkLabel,t+n,a+1+n);else{if(r&&!Nw(o)&&(r=!1),o==91)return!1;o==92&&(i=!0)}}return null}var DT=class{constructor(e,t,n){this.parser=e,this.text=t,this.offset=n,this.parts=[]}char(e){return e>=this.end?-1:this.text.charCodeAt(e-this.offset)}get end(){return this.offset+this.text.length}slice(e,t){return this.text.slice(e-this.offset,t-this.offset)}append(e){return this.parts.push(e),e.to}addDelimiter(e,t,n,r,i){return this.append(new yT(e,t,n,!!r|(i?2:0)))}get hasOpenLink(){for(let e=this.parts.length-1;e>=0;e--){let t=this.parts[e];if(t instanceof yT&&(t.type==_T||t.type==vT))return!0}return!1}addElement(e){return this.append(e)}resolveMarkers(e){for(let t=e;t<this.parts.length;t++){let n=this.parts[t];if(!(n instanceof yT&&n.type.resolve&&n.side&2))continue;let r=n.type==hT||n.type==gT,i=n.to-n.from,a,o=t-1;for(;o>=e;o--){let e=this.parts[o];if(e instanceof yT&&e.side&1&&e.type==n.type&&!(r&&(n.side&1||e.side&2)&&(e.to-e.from+i)%3==0&&((e.to-e.from)%3||i%3))){a=e;break}}if(!a)continue;let s=n.type.resolve,c=[],l=a.from,u=n.to;if(r){let e=Math.min(2,a.to-a.from,i);l=a.to-e,u=n.from+e,s=e==1?`Emphasis`:`StrongEmphasis`}a.type.mark&&c.push(this.elt(a.type.mark,l,a.to));for(let e=o+1;e<t;e++)this.parts[e]instanceof pT&&c.push(this.parts[e]),this.parts[e]=null;n.type.mark&&c.push(this.elt(n.type.mark,n.from,u));let d=this.elt(s,l,u,c);this.parts[o]=r&&a.from!=l?new yT(a.type,a.from,l,a.side):null,(this.parts[t]=r&&n.to!=u?new yT(n.type,u,n.to,n.side):null)?this.parts.splice(t,0,d):this.parts[t]=d}let t=[];for(let n=e;n<this.parts.length;n++){let e=this.parts[n];e instanceof pT&&t.push(e)}return t}findOpeningDelimiter(e){for(let t=this.parts.length-1;t>=0;t--){let n=this.parts[t];if(n instanceof yT&&n.type==e&&n.side&1)return t}return null}takeContent(e){let t=this.resolveMarkers(e);return this.parts.length=e,t}getDelimiterAt(e){let t=this.parts[e];return t instanceof yT?t:null}skipSpace(e){return Pw(this.text,e-this.offset)+this.offset}elt(e,t,n,r){return typeof e==`string`?$(this.parser.getNodeType(e),t,n,r):new mT(e,t)}};DT.linkStart=_T,DT.imageStart=vT;function OT(e,t){if(!t.length)return e;if(!e.length)return t;let n=e.slice(),r=0;for(let e of t){for(;r<n.length&&n[r].to<e.to;)r++;if(r<n.length&&n[r].from<e.from){let t=n[r];t instanceof pT&&(n[r]=new pT(t.type,t.from,t.to,OT(t.children,[e])))}else n.splice(r++,0,e)}return n}var kT=[Q.CodeBlock,Q.ListItem,Q.OrderedList,Q.BulletList],AT=class{constructor(e,t){this.fragments=e,this.input=t,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,e.length&&(this.fragment=e[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(e,t){for(;this.fragment&&this.fragment.to<=e;)this.nextFragment();if(!this.fragment||this.fragment.from>(e?e-1:0))return!1;if(this.fragmentEnd<0){let e=this.fragment.to;for(;e>0&&this.input.read(e-1,e)!=`
`;)e--;this.fragmentEnd=e?e-1:0}let n=this.cursor;n||(n=this.cursor=this.fragment.tree.cursor(),n.firstChild());let r=e+this.fragment.offset;for(;n.to<=r;)if(!n.parent())return!1;for(;;){if(n.from>=r)return this.fragment.from<=t;if(!n.childAfter(r))return!1}}matches(e){let t=this.cursor.tree;return t&&t.prop(W.contextHash)==e}takeNodes(e){let t=this.cursor,n=this.fragment.offset,r=this.fragmentEnd-+!!this.fragment.openEnd,i=e.absoluteLineStart,a=i,o=e.block.children.length,s=a,c=o;for(;;){if(t.to-n>r){if(t.type.isAnonymous&&t.firstChild())continue;break}let i=jT(t.from-n,e.ranges);if(t.to-n<=e.ranges[e.rangeI].to)e.addNode(t.tree,i);else{let n=new q(e.parser.nodeSet.types[Q.Paragraph],[],[],0,e.block.hashProp);e.reusePlaceholders.set(n,t.tree),e.addNode(n,i)}if(t.type.is(`Block`)&&(kT.indexOf(t.type.id)<0?(a=t.to-n,o=e.block.children.length):(a=s,o=c),s=t.to-n,c=e.block.children.length),!t.nextSibling())break}for(;e.block.children.length>o;)e.block.children.pop(),e.block.positions.pop();return a-i}};function jT(e,t){let n=e;for(let r=1;r<t.length;r++){let i=t[r-1].to,a=t[r].from;i<e&&(n-=a-i)}return n}var MT=fd({"Blockquote/...":Y.quote,HorizontalRule:Y.contentSeparator,"ATXHeading1/... SetextHeading1/...":Y.heading1,"ATXHeading2/... SetextHeading2/...":Y.heading2,"ATXHeading3/...":Y.heading3,"ATXHeading4/...":Y.heading4,"ATXHeading5/...":Y.heading5,"ATXHeading6/...":Y.heading6,"Comment CommentBlock":Y.comment,Escape:Y.escape,Entity:Y.character,"Emphasis/...":Y.emphasis,"StrongEmphasis/...":Y.strong,"Link/... Image/...":Y.link,"OrderedList/... BulletList/...":Y.list,"BlockQuote/...":Y.quote,"InlineCode CodeText":Y.monospace,"URL Autolink":Y.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":Y.processingInstruction,"CodeInfo LinkLabel":Y.labelName,LinkTitle:Y.string,Paragraph:Y.content}),NT=new oT(new bu(uT).extend(MT),Object.keys(Zw).map(e=>Zw[e]),Object.keys(Zw).map(e=>tT[e]),Object.keys(Zw),nT,Mw,Object.keys(ST).map(e=>ST[e]),Object.keys(ST),[]);function PT(e,t,n){let r=[];for(let i=e.firstChild,a=t;;i=i.nextSibling){let e=i?i.from:n;if(e>a&&r.push({from:a,to:e}),!i)break;a=i.to}return r}function FT(e){let{codeParser:t,htmlParser:n}=e;return{wrap:Ku((e,r)=>{let i=e.type.id;if(t&&(i==Q.CodeBlock||i==Q.FencedCode)){let n=``;if(i==Q.FencedCode){let t=e.node.getChild(Q.CodeInfo);t&&(n=r.read(t.from,t.to))}let a=t(n);if(a)return{parser:a,overlay:e=>e.type.id==Q.CodeText,bracketed:i==Q.FencedCode}}else if(n&&(i==Q.HTMLBlock||i==Q.HTMLTag||i==Q.CommentBlock))return{parser:n,overlay:PT(e.node,e.from,e.to)};return null})}}var IT={resolve:`Strikethrough`,mark:`StrikethroughMark`},LT={defineNodes:[{name:`Strikethrough`,style:{"Strikethrough/...":Y.strikethrough}},{name:`StrikethroughMark`,style:Y.processingInstruction}],parseInline:[{name:`Strikethrough`,parse(e,t,n){if(t!=126||e.char(n+1)!=126||e.char(n+2)==126)return-1;let r=e.slice(n-1,n),i=e.slice(n+2,n+3),a=/\s|^$/.test(r),o=/\s|^$/.test(i),s=xT.test(r),c=xT.test(i);return e.addDelimiter(IT,n,n+2,!o&&(!c||a||s),!a&&(!s||o||c))},after:`Emphasis`}]};function RT(e,t,n=0,r,i=0){let a=0,o=!0,s=-1,c=-1,l=!1,u=()=>{r.push(e.elt(`TableCell`,i+s,i+c,e.parser.parseInline(t.slice(s,c),i+s)))};for(let d=n;d<t.length;d++){let n=t.charCodeAt(d);n==124&&!l?((!o||s>-1)&&a++,o=!1,r&&(s>-1&&u(),r.push(e.elt(`TableDelimiter`,d+i,d+i+1))),s=c=-1):(l||n!=32&&n!=9)&&(s<0&&(s=d),c=d+1),l=!l&&n==92}return s>-1&&(a++,r&&u()),a}function zT(e,t){for(let n=t;n<e.length;n++){let t=e.charCodeAt(n);if(t==124)return!0;t==92&&n++}return!1}var BT=/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/,VT=class{constructor(){this.rows=null}nextLine(e,t,n){if(this.rows==null){this.rows=!1;let r;if((t.next==45||t.next==58||t.next==124)&&BT.test(r=t.text.slice(t.pos))){let i=[];RT(e,n.content,0,i,n.start)==RT(e,r,0)&&(this.rows=[e.elt(`TableHeader`,n.start,n.start+n.content.length,i),e.elt(`TableDelimiter`,e.lineStart+t.pos,e.lineStart+t.text.length)])}}else if(this.rows){let n=[];RT(e,t.text,t.pos,n,e.lineStart),this.rows.push(e.elt(`TableRow`,e.lineStart+t.pos,e.lineStart+t.text.length,n))}return!1}finish(e,t){return this.rows?(e.addLeafElement(t,e.elt(`Table`,t.start,t.start+t.content.length,this.rows)),!0):!1}},HT={defineNodes:[{name:`Table`,block:!0},{name:`TableHeader`,style:{"TableHeader/...":Y.heading}},`TableRow`,{name:`TableCell`,style:Y.content},{name:`TableDelimiter`,style:Y.processingInstruction}],parseBlock:[{name:`Table`,leaf(e,t){return zT(t.content,0)?new VT:null},endLeaf(e,t,n){if(n.parsers.some(e=>e instanceof VT)||!zT(t.text,t.basePos))return!1;let r=e.peekLine();return BT.test(r)&&RT(e,t.text,t.basePos)==RT(e,r,t.basePos)},before:`SetextHeading`}]},UT=class{nextLine(){return!1}finish(e,t){return e.addLeafElement(t,e.elt(`Task`,t.start,t.start+t.content.length,[e.elt(`TaskMarker`,t.start,t.start+3),...e.parser.parseInline(t.content.slice(3),t.start+3)])),!0}},WT={defineNodes:[{name:`Task`,block:!0,style:Y.list},{name:`TaskMarker`,style:Y.atom}],parseBlock:[{name:`TaskList`,leaf(e,t){return/^\[[ xX]\][ \t]/.test(t.content)&&e.parentType().name==`ListItem`?new UT:null},after:`SetextHeading`}]},GT=/(www\.)|(https?:\/\/)|([\w.+-]{1,100}@)|(mailto:|xmpp:)/gy,KT=/[\w-]+(\.[\w-]+)+(:\d+)?(\/[^\s<]*)?/gy,qT=/[\w-]+\.[\w-]+($|[/:])/,JT=/[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy,YT=/\/[a-zA-Z\d@.]+/gy;function XT(e,t,n,r){let i=0;for(let a=t;a<n;a++)e[a]==r&&i++;return i}function ZT(e,t){KT.lastIndex=t;let n=KT.exec(e);if(!n||qT.exec(n[0])[0].indexOf(`_`)>-1)return-1;let r=t+n[0].length;for(;;){let n=e[r-1],i;if(/[?!.,:*_~]/.test(n)||n==`)`&&XT(e,t,r,`)`)>XT(e,t,r,`(`))r--;else if(n==`;`&&(i=/&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(e.slice(t,r))))r=t+i.index;else break}return r}function QT(e,t){JT.lastIndex=t;let n=JT.exec(e);if(!n)return-1;let r=n[0][n[0].length-1];return r==`_`||r==`-`?-1:t+n[0].length-+(r==`.`)}var $T=[HT,WT,LT,{parseInline:[{name:`Autolink`,parse(e,t,n){let r=n-e.offset;if(r&&/\w/.test(e.text[r-1]))return-1;GT.lastIndex=r;let i=GT.exec(e.text),a=-1;return!i||(i[1]||i[2]?(a=ZT(e.text,r+i[0].length),a>-1&&e.hasOpenLink&&(a=r+/([^\[\]]|\[[^\]]*\])*/.exec(e.text.slice(r,a))[0].length)):i[3]?a=QT(e.text,r):(a=QT(e.text,r+i[0].length),a>-1&&i[0]==`xmpp:`&&(YT.lastIndex=a,i=YT.exec(e.text),i&&(a=i.index+i[0].length))),a<0)?-1:(e.addElement(e.elt(`URL`,n,a+e.offset)),a+e.offset)}}]}];function eE(e,t,n){return(r,i,a)=>{if(i!=e||r.char(a+1)==e)return-1;let o=[r.elt(n,a,a+1)];for(let i=a+1;i<r.end;i++){let s=r.char(i);if(s==e)return r.addElement(r.elt(t,a,i+1,o.concat(r.elt(n,i,i+1))));if(s==92&&o.push(r.elt(`Escape`,i,i+++2)),Nw(s))break}return-1}}var tE={defineNodes:[{name:`Superscript`,style:Y.special(Y.content)},{name:`SuperscriptMark`,style:Y.processingInstruction}],parseInline:[{name:`Superscript`,parse:eE(94,`Superscript`,`SuperscriptMark`)}]},nE={defineNodes:[{name:`Subscript`,style:Y.special(Y.content)},{name:`SubscriptMark`,style:Y.processingInstruction}],parseInline:[{name:`Subscript`,parse:eE(126,`Subscript`,`SubscriptMark`)}]},rE={defineNodes:[{name:`Emoji`,style:Y.character}],parseInline:[{name:`Emoji`,parse(e,t,n){let r;return t!=58||!(r=/^[a-zA-Z_0-9]+:/.exec(e.slice(n+1,e.end)))?-1:e.addElement(e.elt(`Emoji`,n,n+1+r[0].length))}}]},iE=Fd({commentTokens:{block:{open:`<!--`,close:`-->`}}}),aE=new W,oE=NT.configure({props:[bf.add(e=>!e.is(`Block`)||e.is(`Document`)||sE(e)!=null||cE(e)?void 0:(e,t)=>({from:t.doc.lineAt(e.from).to,to:e.to})),aE.add(sE),rf.add({Document:()=>null}),Pd.add({Document:iE})]});function sE(e){let t=/^(?:ATX|Setext)Heading(\d)$/.exec(e.name);return t?+t[1]:void 0}function cE(e){return e.name==`OrderedList`||e.name==`BulletList`}function lE(e,t){let n=e;for(;;){let e=n.nextSibling,r;if(!e||(r=sE(e.type))!=null&&r<=t)break;n=e}return n.to}var uE=yf.of((e,t,n)=>{for(let r=X(e).resolveInner(n,-1);r&&!(r.from<t);r=r.parent){let e=r.type.prop(aE);if(e==null)continue;let t=lE(r,e);if(t>n)return{from:n,to:t}}return null});function dE(e){return new Ld(iE,e,[],`markdown`)}var fE=dE(oE),pE=dE(oE.configure([$T,nE,tE,rE,{props:[bf.add({Table:(e,t)=>({from:t.doc.lineAt(e.from).to,to:e.to})})]}]));function mE(e,t){return n=>{if(n&&e){let t=null;if(n=/\S*/.exec(n)[0],t=typeof e==`function`?e(n):Xd.matchLanguageName(e,n,!0),t instanceof Xd)return t.support?t.support.language.parser:Hd.getSkippingParser(t.load());if(t)return t.parser}return t?t.parser:null}}var hE=class{constructor(e,t,n,r,i,a,o){this.node=e,this.from=t,this.to=n,this.spaceBefore=r,this.spaceAfter=i,this.type=a,this.item=o}blank(e,t=!0){let n=this.spaceBefore+(this.node.name==`Blockquote`?`>`:``);if(e!=null){for(;n.length<e;)n+=` `;return n}else{for(let e=this.to-this.from-n.length-this.spaceAfter.length;e>0;e--)n+=` `;return n+(t?this.spaceAfter:``)}}marker(e,t){let n=this.node.name==`OrderedList`?String(+_E(this.item,e)[2]+t):``;return this.spaceBefore+n+this.type+this.spaceAfter}};function gE(e,t){let n=[],r=[];for(let t=e;t;t=t.parent){if(t.name==`FencedCode`)return r;(t.name==`ListItem`||t.name==`Blockquote`)&&n.push(t)}for(let e=n.length-1;e>=0;e--){let i=n[e],a,o=t.lineAt(i.from),s=i.from-o.from;if(i.name==`Blockquote`&&(a=/^ *>( ?)/.exec(o.text.slice(s))))r.push(new hE(i,s,s+a[0].length,``,a[1],`>`,null));else if(i.name==`ListItem`&&i.parent.name==`OrderedList`&&(a=/^( *)\d+([.)])( *)/.exec(o.text.slice(s)))){let e=a[3],t=a[0].length;e.length>=4&&(e=e.slice(0,e.length-4),t-=4),r.push(new hE(i.parent,s,s+t,a[1],e,a[2],i))}else if(i.name==`ListItem`&&i.parent.name==`BulletList`&&(a=/^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(o.text.slice(s)))){let e=a[4],t=a[0].length;e.length>4&&(e=e.slice(0,e.length-4),t-=4);let n=a[2];a[3]&&(n+=a[3].replace(/[xX]/,` `)),r.push(new hE(i.parent,s,s+t,a[1],e,n,i))}}return r}function _E(e,t){return/^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from,e.from+10))}function vE(e,t,n,r=0){for(let i=-1,a=e;;){if(a.name==`ListItem`){let e=_E(a,t),o=+e[2];if(i>=0){if(o!=i+1)return;n.push({from:a.from+e[1].length,to:a.from+e[0].length,insert:String(i+2+r)})}i=o}let e=a.nextSibling;if(!e)break;a=e}}function yE(e,t){let n=/^[ \t]*/.exec(e)[0].length;if(!n||t.facet(Qd)!=`	`)return e;let r=Gn(e,4,n),i=``;for(let e=r;e>0;)e>=4?(i+=`	`,e-=4):(i+=` `,e--);return i+e.slice(n)}var bE=((e={})=>({state:t,dispatch:n})=>{let r=X(t),{doc:i}=t,a=null,o=t.changeByRange(n=>{if(!n.empty||!pE.isActiveAt(t,n.from,-1)&&!pE.isActiveAt(t,n.from,1))return a={range:n};let o=n.from,s=i.lineAt(o),c=gE(r.resolveInner(o,-1),i);for(;c.length&&c[c.length-1].from>o-s.from;)c.pop();if(!c.length)return a={range:n};let l=c[c.length-1];if(l.to-l.spaceAfter.length>o-s.from)return a={range:n};let u=o>=l.to-l.spaceAfter.length&&!/\S/.test(s.text.slice(l.to));if(l.item&&u){let n=l.node.firstChild,r=l.node.getChild(`ListItem`,`ListItem`);if(n.to>=o||r&&r.to<o||s.from>0&&!/[^\s>]/.test(i.lineAt(s.from-1).text)||e.nonTightLists===!1){let e=c.length>1?c[c.length-2]:null,t,n=``;e&&e.item?(t=s.from+e.from,n=e.marker(i,1)):t=s.from+(e?e.to:0);let r=[{from:t,to:o,insert:n}];return l.node.name==`OrderedList`&&vE(l.item,i,r,-2),e&&e.node.name==`OrderedList`&&vE(e.item,i,r),{range:A.cursor(t+n.length),changes:r}}else{let e=CE(c,t,s);return{range:A.cursor(o+e.length+1),changes:{from:s.from,insert:e+t.lineBreak}}}}if(l.node.name==`Blockquote`&&u&&s.from){let e=i.lineAt(s.from-1),r=/>\s*$/.exec(e.text);if(r&&r.index==l.from){let i=t.changes([{from:e.from+r.index,to:e.to},{from:s.from+l.from,to:s.to}]);return{range:n.map(i),changes:i}}}let d=[];l.node.name==`OrderedList`&&vE(l.item,i,d);let f=l.item&&l.item.from<s.from,p=``;if(!f||/^[\s\d.)\-+*>]*/.exec(s.text)[0].length>=l.to)for(let e=0,t=c.length-1;e<=t;e++)p+=e==t&&!f?c[e].marker(i,1):c[e].blank(e<t?Gn(s.text,4,c[e+1].from)-p.length:null);let m=o;for(;m>s.from&&/\s/.test(s.text.charAt(m-s.from-1));)m--;return p=yE(p,t),SE(l.node,t.doc)&&(p=CE(c,t,s)+t.lineBreak+p),d.push({from:m,to:o,insert:t.lineBreak+p}),{range:A.cursor(m+p.length+1),changes:d}});return a?!1:(n(t.update(o,{scrollIntoView:!0,userEvent:`input`})),!0)})();function xE(e){return e.name==`QuoteMark`||e.name==`ListMark`}function SE(e,t){if(e.name!=`OrderedList`&&e.name!=`BulletList`)return!1;let n=e.firstChild,r=e.getChild(`ListItem`,`ListItem`);if(!r)return!1;let i=t.lineAt(n.to),a=t.lineAt(r.from),o=/^[\s>]*$/.test(i.text);return i.number+ +!o<a.number}function CE(e,t,n){let r=``;for(let t=0,i=e.length-2;t<=i;t++)r+=e[t].blank(t<i?Gn(n.text,4,e[t+1].from)-r.length:null,t<i);return yE(r,t)}function wE(e,t){let n=e.resolveInner(t,-1),r=t;xE(n)&&(r=n.from,n=n.parent);for(let e;e=n.childBefore(r);)if(xE(e))r=e.from;else if(e.name==`OrderedList`||e.name==`BulletList`)n=e.lastChild,r=n.to;else break;return n}var TE=[{key:`Enter`,run:bE},{key:`Backspace`,run:({state:e,dispatch:t})=>{let n=X(e),r=null,i=e.changeByRange(t=>{let i=t.from,{doc:a}=e;if(t.empty&&pE.isActiveAt(e,t.from)){let t=a.lineAt(i),r=gE(wE(n,i),a);if(r.length){let n=r[r.length-1],a=n.to-n.spaceAfter.length+ +!!n.spaceAfter;if(i-t.from>a&&!/\S/.test(t.text.slice(a,i-t.from)))return{range:A.cursor(t.from+a),changes:{from:t.from+a,to:i}};if(i-t.from==a&&(!n.item||t.from<=n.item.from||!/\S/.test(t.text.slice(0,n.to)))){let r=t.from+n.from;if(n.item&&n.node.from<n.item.from&&/\S/.test(t.text.slice(n.from,n.to))){let i=n.blank(Gn(t.text,4,n.to)-Gn(t.text,4,n.from));return r==t.from&&(i=yE(i,e)),{range:A.cursor(r+i.length),changes:{from:r,to:t.from+n.to,insert:i}}}if(r<i)return{range:A.cursor(r),changes:{from:r,to:i}}}}}return r={range:t}});return r?!1:(t(e.update(i,{scrollIntoView:!0,userEvent:`delete`})),!0)}}],EE=Tw({matchClosingTags:!1});function DE(e={}){let{codeLanguages:t,defaultCodeLanguage:n,addKeymap:r=!0,base:{parser:i}=fE,completeHTMLTags:a=!0,pasteURLAsLink:o=!0,htmlTagLanguage:s=EE}=e;if(!(i instanceof oT))throw RangeError("Base parser provided to `markdown` should be a Markdown parser");let c=e.extensions?[e.extensions]:[],l=[s.support,uE],u;o&&l.push(ME),n instanceof Yd?(l.push(n.support),u=n.language):n&&(u=n);let d=t||u?mE(t,u):void 0;c.push(FT({codeParser:d,htmlParser:s.language.parser})),r&&l.push(Yt.high(cc.of(TE)));let f=dE(i.configure(c));return a&&l.push(f.data.of({autocomplete:OE})),new Yd(f,l)}function OE(e){let{state:t,pos:n}=e,r=/<[:\-\.\w\u00b7-\uffff]*$/.exec(t.sliceDoc(n-25,n));if(!r)return null;let i=X(t).resolveInner(n,-1);for(;i&&!i.type.isTop;){if(i.name==`CodeBlock`||i.name==`FencedCode`||i.name==`ProcessingInstructionBlock`||i.name==`CommentBlock`||i.name==`Link`||i.name==`Image`)return null;i=i.parent}return{from:n-r[0].length,to:n,options:AE(),validFor:/^<[:\-\.\w\u00b7-\uffff]*$/}}var kE=null;function AE(){if(kE)return kE;let e=vw(new b_(P.create({extensions:EE}),0,!0));return kE=e?e.options:[]}var jE=/code|horizontalrule|html|link|comment|processing|escape|entity|image|mark|url/i,ME=U.domEventHandlers({paste:(e,t)=>{let{main:n}=t.state.selection;if(n.empty)return!1;let r=e.clipboardData?.getData(`text/plain`);if(!r||!/^(https?:\/\/|mailto:|xmpp:|www\.)/.test(r)||(/^www\./.test(r)&&(r=`https://`+r),!pE.isActiveAt(t.state,n.from,1)))return!1;let i=X(t.state),a=!1;return i.iterate({from:n.from,to:n.to,enter:e=>{(e.from>n.from||jE.test(e.name))&&(a=!0)},leave:e=>{e.to<n.to&&(a=!0)}}),a?!1:(t.dispatch({changes:[{from:n.from,insert:`[`},{from:n.to,insert:`](${r})`}],userEvent:`input.paste`,scrollIntoView:!0}),!0)}}),NE=`#e5c07b`,PE=`#e06c75`,FE=`#56b6c2`,IE=`#ffffff`,LE=`#abb2bf`,RE=`#7d8799`,zE=`#61afef`,BE=`#98c379`,VE=`#d19a66`,HE=`#c678dd`,UE=`#21252b`,WE=`#2c313a`,GE=`#282c34`,KE=`#353a42`,qE=`#3E4451`,JE=`#528bff`,YE=[U.theme({"&":{color:LE,backgroundColor:GE},".cm-content":{caretColor:JE},".cm-cursor, .cm-dropCursor":{borderLeftColor:JE},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:qE},".cm-panels":{backgroundColor:UE,color:LE},".cm-panels.cm-panels-top":{borderBottom:`2px solid black`},".cm-panels.cm-panels-bottom":{borderTop:`2px solid black`},".cm-searchMatch":{backgroundColor:`#72a1ff59`,outline:`1px solid #457dff`},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:`#6199ff2f`},".cm-activeLine":{backgroundColor:`#6699ff0b`},".cm-selectionMatch":{backgroundColor:`#aafe661a`},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:`#bad0f847`},".cm-gutters":{backgroundColor:GE,color:RE,border:`none`},".cm-activeLineGutter":{backgroundColor:WE},".cm-foldPlaceholder":{backgroundColor:`transparent`,border:`none`,color:`#ddd`},".cm-tooltip":{border:`none`,backgroundColor:KE},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:`transparent`,borderBottomColor:`transparent`},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:KE,borderBottomColor:KE},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:WE,color:LE}}},{dark:!0}),Qf(Jf.define([{tag:Y.keyword,color:HE},{tag:[Y.name,Y.deleted,Y.character,Y.propertyName,Y.macroName],color:PE},{tag:[Y.function(Y.variableName),Y.labelName],color:zE},{tag:[Y.color,Y.constant(Y.name),Y.standard(Y.name)],color:VE},{tag:[Y.definition(Y.name),Y.separator],color:LE},{tag:[Y.typeName,Y.className,Y.number,Y.changed,Y.annotation,Y.modifier,Y.self,Y.namespace],color:NE},{tag:[Y.operator,Y.operatorKeyword,Y.url,Y.escape,Y.regexp,Y.link,Y.special(Y.string)],color:FE},{tag:[Y.meta,Y.comment],color:RE},{tag:Y.strong,fontWeight:`bold`},{tag:Y.emphasis,fontStyle:`italic`},{tag:Y.strikethrough,textDecoration:`line-through`},{tag:Y.link,color:RE,textDecoration:`underline`},{tag:Y.heading,fontWeight:`bold`,color:PE},{tag:[Y.atom,Y.bool,Y.special(Y.variableName)],color:VE},{tag:[Y.processingInstruction,Y.string,Y.inserted],color:BE},{tag:Y.invalid,color:IE}]))],XE=Cp.define({startState(){return{afterCommand:!1}},token(e,t){if(e.eatSpace())return null;if(e.match(`//`))return e.skipToEnd(),t.afterCommand=!1,`comment`;if(e.match("`"))return e.eatWhile(/[\w-]/),t.afterCommand=!0,`tagName`;if(t.afterCommand){if(e.peek()===`[`)return t.afterCommand=!1,e.next(),`punctuation`;if(e.match(/^[\w.-]+/))return t.afterCommand=!1,`attributeName`;t.afterCommand=!1}return e.match(`|`)?`atom`:e.match(`"`)?(e.skipTo(`"`),e.eat(`"`),`string`):e.match(/^\d+/)?`number`:e.match(/[{}[\],.]/)?(t.afterCommand=!1,`punctuation`):(e.next(),t.afterCommand=!1,null)}}),ZE=T(`<div></div>`);function QE(e,t){ee(t,!0);let n=O(t,`value`,15),r=O(t,`language`,3,`markdown`),i=O(t,`readonly`,3,!1),a=O(t,`lineWrapping`,3,!1),o=O(t,`theme`,3,`dark`),s=O(t,`class`,3,``),c,l,u=new Zt,d=new Zt,f=new Zt,p=new Zt;function m(e){switch(e){case`typescript`:return dx({typescript:!0});case`html`:case`handlebars`:return Tw();case`vy`:return XE;default:return DE()}}function h(e){return e===`dark`?YE:U.baseTheme({})}le(()=>{l=new U({state:P.create({doc:n(),extensions:[Fy,cc.of(lg),u.of(m(r())),d.of(h(o())),f.of(P.readOnly.of(i())),p.of(a()?U.lineWrapping:[]),U.updateListener.of(e=>{e.docChanged&&n(e.state.doc.toString())})]}),parent:c})}),se(()=>{l&&l.destroy()}),_(()=>{l&&n()!==l.state.doc.toString()&&l.dispatch({changes:{from:0,to:l.state.doc.length,insert:n()}})}),_(()=>{l&&l.dispatch({effects:u.reconfigure(m(r()))})}),_(()=>{l&&l.dispatch({effects:d.reconfigure(h(o()))})}),_(()=>{l&&l.dispatch({effects:f.reconfigure(P.readOnly.of(i()))})}),_(()=>{l&&l.dispatch({effects:p.reconfigure(a()?U.lineWrapping:[])})});var v=ZE();de(v,e=>c=e,()=>c),g(()=>x(v,1,`h-full w-full overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800 ${s()??``}`)),E(e,v),ae()}var $E={id:`vyasa-bg`,title:`Bhagavad Gita`,description:`Bhagavad Gita source from vyasa-samples.`,showcaseFile:`content/mula/1.vy`,available:!0,missingMessage:``,files:{"README.md":'# vyasa-bg — Bhagavad Gita sample\n\nStructured verse publication with **mula** (Devanagari) and **iast** transliteration streams, plus speaker metadata in `annotations/`.\n\n## Layout\n\n| Path | Role |\n|------|------|\n| `content/mula/` | Devanagari verse text (primary stream) |\n| `content/iast/` | IAST transliteration (parallel chapter files) |\n| `content/*/localization.vy` | Per-stream display labels (structure, entities, actions) |\n| `annotations/speakers.vy` | Speaker ranges for all 18 chapters via `annotate { speaker=… }` |\n| `vocabulary/` | Canonical entity / action / facet ID registry (not display text) |\n| `context.vy` | Workspace commands, settings, annotation aliases |\n| `templates/html/` | Stream block templates (`context.vy`); `theme.css` / `reading.css` listed in `[build.default] css` |\n| `templates/html/views/theme.vy` | `theme_layout` body slot — shell + CSS from packer |\n| `templates/html/views/reading.vy` | Craft stacked reading — `item` weaving (`reading.css` for craft rules) |\n| `vysamples/styles/indic-verse.css` | Publisher-shared tokens, `html.theme-*`, grid `.vyasa-block-*` (`publisher_css`) |\n\nSee also [`notes/explicit-workspace-design.md`](../../notes/explicit-workspace-design.md) for vocabulary vs localization principles.\n\n## Streams\n\nFacts live in `content/<folder>/stream.toml`. Packed id is the folder name. `mula` sets `primary = true` (URN spine).\n\n```toml\n# content/mula/stream.toml\nlanguage = "sa"\nscript = "Deva"\nkind = "source"\nprimary = true\n```\n\n**Primary** (`mula`) is the authoritative text for URNs and the baseline for display labels. The iast stream declares `` `localization { extend = "primary" } `` and overrides structure/entity/action labels for its convention.\n\n## Vocabulary vs localization\n\n| Layer | Location | Example |\n|-------|----------|---------|\n| **Registry** | `vocabulary/entities.vy` | `"arjuna" = "arjuna"` (canonical ID) |\n| **Display** | `content/mula/localization.vy` | `"arjuna" = "अर्जुन"` |\n| **Display (iast)** | `content/iast/localization.vy` | `"arjuna" = "arjuna"`, `"verse" = "śloka"` |\n\nStructure keys always match `[urn].hierarchy` (`chapter`, `verse`).\n\n## Authoring verses\n\nUse the verse alias:\n\n```vyasa\n`v 1 [\ndharma-kṣetre kuru-kṣetre\nsamavetā yuyutsavaḥ\n]\n```\n\nEach `` `v N [...] `` block is a **leaf-block** (verse). The compiler assigns **segment 0** to leaf-block body text.\n\n## Speaker attribution (inter-verse text)\n\n**Do not** put speaker attribution inside a verse block. Speaker *metadata* lives in `annotations/speakers.vy`.\n\nTraditional colophon lines (`arjuna uvāca`, `śrī-bhagavān uvāca`, etc.) are **plain text between verses**:\n\n```vyasa\nsañjaya uvāca\n`v 2 [\ndṛṣṭvā tu pāṇḍavānīkaṁ\n...\n]\n```\n\nNarrative speech *within* a verse stays inside the verse.\n\n## Speaker annotations\n\n```vyasa\n`annotate 2:11..2:53 { speaker=krishna }\n```\n\nExplorer and reader resolve the **Speaker** facet type label from `vocabulary/facets.vy` + per-stream `localization.vy` (`facets` block); entity names from `entities` + localization.\n\n## Build\n\n```bash\nbun run build:vyasa-bg\n```\n\nVerify the pack without sqlite3:\n\n```bash\nvyasav inspect vysamples/dist/vyasa-bg/vyasa-bg.vyview\nvyasav inspect --table html_templates vysamples/dist/vyasa-bg/vyasa-bg.vyview\nvyasav inspect --urn 1:1 vysamples/dist/vyasa-bg/vyasa-bg.vyview\nvyasav inspect --check vysamples/dist/vyasa-bg/vyasa-bg.vyview\n```\n\n## Removed legacy patterns\n\n| Old pattern | Replacement |\n|-------------|-------------|\n| Display strings in `vocabulary/` | `content/<stream>/localization.vy` |\n| `content/iast/context.vy` vocabulary block | `content/iast/localization.vy` |\n| `` `person `uvaca `` inline headers | `annotations/speakers.vy` |\n',"annotations/speakers.vy":`\`title [Bhagavad Gita Speaker Annotations]

// Chapter 1
\`annotate 1:1 { speaker=dhritarashtra }

\`annotate 1:2..1:20 { speaker=sanjaya }

\`annotate 1:21..1:23 { speaker=arjuna }

\`annotate 1:24..1:27 { speaker=sanjaya }

\`annotate 1:28..1:45 { speaker=arjuna }

\`annotate 1:46 { speaker=sanjaya }

// Chapter 2
\`annotate 2:1 { speaker=sanjaya }

\`annotate 2:2..2:3 { speaker=krishna }

\`annotate 2:4..2:8 { speaker=arjuna }

\`annotate 2:9..2:10 { speaker=sanjaya }

\`annotate 2:11..2:53 { speaker=krishna }

\`annotate 2:54 { speaker=arjuna }

\`annotate 2:55..2:72 { speaker=krishna }

// Chapter 3
\`annotate 3:1..3:2 { speaker=arjuna }

\`annotate 3:3..3:35 { speaker=krishna }

\`annotate 3:36 { speaker=arjuna }

\`annotate 3:37..3:43 { speaker=krishna }

// Chapter 4
\`annotate 4:1..4:3 { speaker=krishna }

\`annotate 4:4 { speaker=arjuna }

\`annotate 4:5..4:42 { speaker=krishna }

// Chapter 5
\`annotate 5:1 { speaker=arjuna }

\`annotate 5:2..5:29 { speaker=krishna }

// Chapter 6
\`annotate 6:1..6:32 { speaker=krishna }

\`annotate 6:33..6:34 { speaker=arjuna }

\`annotate 6:35..6:36 { speaker=krishna }

\`annotate 6:37..6:39 { speaker=arjuna }

\`annotate 6:40..6:47 { speaker=krishna }

// Chapter 7
\`annotate 7:1..7:30 { speaker=krishna }

// Chapter 8
\`annotate 8:1..8:2 { speaker=arjuna }

\`annotate 8:3..8:28 { speaker=krishna }

// Chapter 9
\`annotate 9:1..9:34 { speaker=krishna }

// Chapter 10
\`annotate 10:1..10:11 { speaker=krishna }

\`annotate 10:12..10:18 { speaker=arjuna }

\`annotate 10:19..10:42 { speaker=krishna }

// Chapter 11
\`annotate 11:1..11:4 { speaker=arjuna }

\`annotate 11:5..11:8 { speaker=krishna }

\`annotate 11:9..11:14 { speaker=sanjaya }

\`annotate 11:15..11:31 { speaker=arjuna }

\`annotate 11:32..11:34 { speaker=krishna }

\`annotate 11:35 { speaker=sanjaya }

\`annotate 11:36..11:46 { speaker=arjuna }

\`annotate 11:47..11:49 { speaker=krishna }

\`annotate 11:50 { speaker=sanjaya }

\`annotate 11:51 { speaker=arjuna }

\`annotate 11:52..11:55 { speaker=krishna }

// Chapter 12
\`annotate 12:1 { speaker=arjuna }

\`annotate 12:2..12:20 { speaker=krishna }

// Chapter 13
\`annotate 13:1 { speaker=arjuna }

\`annotate 13:2..13:35 { speaker=krishna }

// Chapter 14
\`annotate 14:1..14:20 { speaker=krishna }

\`annotate 14:21 { speaker=arjuna }

\`annotate 14:22..14:27 { speaker=krishna }

// Chapter 15
\`annotate 15:1..15:20 { speaker=krishna }

// Chapter 16
\`annotate 16:1..16:24 { speaker=krishna }

// Chapter 17
\`annotate 17:1 { speaker=arjuna }

\`annotate 17:2..17:28 { speaker=krishna }

// Chapter 18
\`annotate 18:1 { speaker=arjuna }

\`annotate 18:2..18:72 { speaker=krishna }

\`annotate 18:73 { speaker=arjuna }

\`annotate 18:74..18:78 { speaker=sanjaya }
`,"content/iast/1.vy":`\`set context { chapter.title = "Arjuna-viṣāda-yogaḥ" }

dhṛtarāṣṭra uvāca
\`v 1 [
dharma-kṣetre kuru-kṣetre
samavetā yuyutsavaḥ
māmakāḥ pāṇḍavāś caiva
kim akurvata sañjaya
]

sañjaya uvāca
\`v 2 [
dṛṣṭvā tu pāṇḍavānīkaṁ
vyūḍhaṁ duryodhanas tadā
ācāryam upasaṅgamya
rājā vacanam abravīt
]

\`v 3 [
paśyaitāṁ pāṇḍu-putrāṇām
ācārya mahatīṁ camūm
vyūḍhāṁ drupada-putreṇa
tava śiṣyeṇa dhīmatā
]

\`v 4 [
atra śūrā maheṣv-āsā
bhīmārjuna-samā yudhi
yuyudhāno virāṭaś ca
drupadaś ca mahā-rathaḥ
]

\`v 5 [
dhṛṣṭaketuś cekitānaḥ
kāśirājaś ca vīryavān
purujit kuntibhojaś ca
śaibyaś ca nara-puṅgavaḥ
]

\`v 6 [
yudhāmanyuś ca vikrānta
uttamaujāś ca vīryavān
saubhadro draupadeyāś ca
sarva eva mahā-rathāḥ
]

\`v 7 [
asmākaṁ tu viśiṣṭā ye
tān nibodha dvijottama
nāyakā mama sainyasya
saṁjñārthaṁ tān bravīmi te
]

\`v 8 [
bhavān bhīṣmaś ca karṇaś ca
kṛpaś ca samitiṁ-jayaḥ
aśvatthāmā vikarṇaś ca
saumadattis tathaiva ca
]

\`v 9 [
anye ca bahavaḥ śūrā
mad-arthe tyakta-jīvitāḥ
nānā-śastra-praharaṇāḥ
sarve yuddha-viśāradāḥ
]

\`v 10 [
aparyāptaṁ tad asmākaṁ
balaṁ bhīṣmābhirakṣitam
paryāptaṁ tv idam eteṣāṁ
balaṁ bhīmābhirakṣitam
]

\`v 11 [
ayaneṣu ca sarveṣu
yathā-bhāgam avasthitāḥ
bhīṣmam evābhirakṣantu
bhavantaḥ sarva eva hi
]

\`v 12 [
tasya sañjanayan harṣaṁ
kuru-vṛddhaḥ pitāmahaḥ
siṁha-nādaṁ vinadyoccaiḥ
śaṅkhaṁ dadhmau pratāpavān
]

\`v 13 [
tataḥ śaṅkhāś ca bheryaś ca
paṇavānaka-gomukhāḥ
sahasaivābhyahanyanta
sa śabdas tumulo ’bhavat
]

\`v 14 [
tataḥ śvetair hayair yukte
mahati syandane sthitau
mādhavaḥ pāṇḍavaś caiva
divyau śaṅkhau pradadhmatuḥ
]

\`v 15 [
pāñcajanyaṁ hṛṣīkeśo
devadattaṁ dhanañ-jayaḥ
pauṇḍraṁ dadhmau mahā-śaṅkhaṁ
bhīma-karmā vṛkodaraḥ
]

\`v 16 [
anantavijayaṁ rājā
kuntī-putro yudhiṣṭhiraḥ
nakulaḥ sahadevaś ca
sughoṣa-maṇipuṣpakau
]

\`v 17 [
kāśyaś ca parameṣv-āsaḥ
śikhaṇḍī ca mahā-rathaḥ
dhṛṣṭadyumno virāṭaś ca
sātyakiś cāparājitaḥ
]

\`v 18 [
drupado draupadeyāś ca
sarvaśaḥ pṛthivī-pate
saubhadraś ca mahā-bāhuḥ
śaṅkhān dadhmuḥ pṛthak pṛthak
]

\`v 19 [
sa ghoṣo dhārtarāṣṭrāṇāṁ
hṛdayāni vyadārayat
nabhaś ca pṛthivīṁ caiva
tumulo ’bhyanunādayan
]

\`v 20 [
atha vyavasthitān dṛṣṭvā
dhārtarāṣṭrān kapi-dhvajaḥ
pravṛtte śastra-sampāte
dhanur udyamya pāṇḍavaḥ
hṛṣīkeśaṁ tadā vākyam
idam āha mahī-pate
]

arjuna uvāca
\`v 21 [
senayor ubhayor madhye
rathaṁ sthāpaya me ’cyuta
yāvad etān nirīkṣe ’haṁ
yoddhu-kāmān avasthitān
]

\`v 22 [
kair mayā saha yoddhavyam
asmin raṇa-samudyame
]

\`v 23 [
yotsyamānān avekṣe ’haṁ
ya ete ’tra samāgatāḥ
dhārtarāṣṭrasya durbuddher
yuddhe priya-cikīrṣavaḥ
]

sañjaya uvāca
\`v 24 [
evam ukto hṛṣīkeśo
guḍākeśena bhārata
senayor ubhayor madhye
sthāpayitvā rathottamam
]

\`v 25 [
bhīṣma-droṇa-pramukhataḥ
sarveṣāṁ ca mahī-kṣitām
uvāca pārtha paśyaitān
samavetān kurūn iti
]

\`v 26 [
tatrāpaśyat sthitān pārthaḥ
pitṝn atha pitāmahān
ācāryān mātulān bhrātṝn
putrān pautrān sakhīṁs tathā
śvaśurān suhṛdaś caiva
senayor ubhayor api
]

\`v 27 [
tān samīkṣya sa kaunteyaḥ
sarvān bandhūn avasthitān
kṛpayā parayāviṣṭo
viṣīdann idam abravīt
]

arjuna uvāca
\`v 28 [
dṛṣṭvemaṁ sva-janaṁ kṛṣṇa
yuyutsuṁ samupasthitam
sīdanti mama gātrāṇi
mukhaṁ ca pariśuṣyati
]

\`v 29 [
vepathuś ca śarīre me
roma-harṣaś ca jāyate
gāṇḍīvaṁ sraṁsate hastāt
tvak caiva paridahyate
]

\`v 30 [
na ca śaknomy avasthātuṁ
bhramatīva ca me manaḥ
nimittāni ca paśyāmi
viparītāni keśava
]

\`v 31 [
na ca śreyo ’nupaśyāmi
hatvā sva-janam āhave
na kāṅkṣe vijayaṁ kṛṣṇa
na ca rājyaṁ sukhāni ca
]

\`v 32 [
kiṁ no rājyena govinda
kiṁ bhogair jīvitena vā
yeṣām arthe kāṅkṣitaṁ no
rājyaṁ bhogāḥ sukhāni ca
]

\`v 33 [
ta ime ’vasthitā yuddhe
prāṇāṁs tyaktvā dhanāni ca
ācāryāḥ pitaraḥ putrās
tathaiva ca pitāmahāḥ
]

\`v 34 [
mātulāḥ śvaśurāḥ pautrāḥ
śyālāḥ sambandhinas tathā
etān na hantum icchāmi
ghnato ’pi madhusūdana
]

\`v 35 [
api trailokya-rājyasya
hetoḥ kiṁ nu mahī-kṛte
nihatya dhārtarāṣṭrān naḥ
kā prītiḥ syāj janārdana
]

\`v 36 [
pāpam evāśrayed asmān
hatvaitān ātatāyinaḥ
tasmān nārhā vayaṁ hantuṁ
dhārtarāṣṭrān sa-bāndhavān
sva-janaṁ hi kathaṁ hatvā
sukhinaḥ syāma mādhava
]

\`v 37 [
yady apy ete na paśyanti
lobhopahata-cetasaḥ
kula-kṣaya-kṛtaṁ doṣaṁ
mitra-drohe ca pātakam
]

\`v 38 [
kathaṁ na jñeyam asmābhiḥ
pāpād asmān nivartitum
kula-kṣaya-kṛtaṁ doṣaṁ
prapaśyadbhir janārdana
]

\`v 39 [
kula-kṣaye praṇaśyanti
kula-dharmāḥ sanātanāḥ
dharme naṣṭe kulaṁ kṛtsnam
adharmo ’bhibhavaty uta
]

\`v 40 [
adharmābhibhavāt kṛṣṇa
praduṣyanti kula-striyaḥ
strīṣu duṣṭāsu vārṣṇeya
jāyate varṇa-saṅkaraḥ
]

\`v 41 [
saṅkaro narakāyaiva
kula-ghnānāṁ kulasya ca
patanti pitaro hy eṣāṁ
lupta-piṇḍodaka-kriyāḥ
]

\`v 42 [
doṣair etaiḥ kula-ghnānāṁ
varṇa-saṅkara-kārakaiḥ
utsādyante jāti-dharmāḥ
kula-dharmāś ca śāśvatāḥ
]

\`v 43 [
utsanna-kula-dharmāṇāṁ
manuṣyāṇāṁ janārdana
narake niyataṁ vāso
bhavatīty anuśuśruma
]

\`v 44 [
aho bata mahat pāpaṁ
kartuṁ vyavasitā vayam
yad rājya-sukha-lobhena
hantuṁ sva-janam udyatāḥ
]

\`v 45 [
yadi mām apratīkāram
aśastraṁ śastra-pāṇayaḥ
dhārtarāṣṭrā raṇe hanyus
tan me kṣema-taraṁ bhavet
]

sañjaya uvāca
\`v 46 [
evam uktvārjunaḥ saṅkhye
rathopastha upāviśat
visṛjya sa-śaraṁ cāpaṁ
śoka-saṁvigna-mānasaḥ
]
`,"content/iast/10.vy":`\`set context { chapter.title = "Vibhūti-yogaḥ" }

śrī-bhagavān uvāca
\`v 1 [
bhūya eva mahā-bāho
śṛṇu me paramaṁ vacaḥ
yat te ’haṁ prīyamāṇāya
vakṣyāmi hita-kāmyayā
]

\`v 2 [
na me viduḥ sura-gaṇāḥ
prabhavaṁ na maharṣayaḥ
aham ādir hi devānāṁ
maharṣīṇāṁ ca sarvaśaḥ
]

\`v 3 [
yo mām ajam anādiṁ ca
vetti loka-maheśvaram
asammūḍhaḥ sa martyeṣu
sarva-pāpaiḥ pramucyate
]

\`v 4 [
buddhir jñānam asammohaḥ
kṣamā satyaṁ damaḥ śamaḥ
sukhaṁ duḥkhaṁ bhavo ’bhāvo
bhayaṁ cābhayam eva ca
]

\`v 5 [
ahiṁsā samatā tuṣṭis
tapo dānaṁ yaśo ’yaśaḥ
bhavanti bhāvā bhūtānāṁ
matta eva pṛthag-vidhāḥ
]

\`v 6 [
maharṣayaḥ sapta pūrve
catvāro manavas tathā
mad-bhāvā mānasā jātā
yeṣāṁ loka imāḥ prajāḥ
]

\`v 7 [
etāṁ vibhūtiṁ yogaṁ ca
mama yo vetti tattvataḥ
so ’vikalpena yogena
yujyate nātra saṁśayaḥ
]

\`v 8 [
ahaṁ sarvasya prabhavo
mattaḥ sarvaṁ pravartate
iti matvā bhajante māṁ
budhā bhāva-samanvitāḥ
]

\`v 9 [
mac-cittā mad-gata-prāṇā
bodhayantaḥ parasparam
kathayantaś ca māṁ nityaṁ
tuṣyanti ca ramanti ca
]

\`v 10 [
teṣāṁ satata-yuktānāṁ
bhajatāṁ prīti-pūrvakam
dadāmi buddhi-yogaṁ taṁ
yena mām upayānti te
]

\`v 11 [
teṣām evānukampārtham
aham ajñāna-jaṁ tamaḥ
nāśayāmy ātma-bhāva-stho
jñāna-dīpena bhāsvatā
]

arjuna uvāca
\`v 12 [
paraṁ brahma paraṁ dhāma
pavitraṁ paramaṁ bhavān
puruṣaṁ śāśvataṁ divyam
ādi-devam ajaṁ vibhum
]

\`v 13 [
āhus tvām ṛṣayaḥ sarve
devarṣir nāradas tathā
asito devalo vyāsaḥ
svayaṁ caiva bravīṣi me
]

\`v 14 [
sarvam etad ṛtaṁ manye
yan māṁ vadasi keśava
na hi te bhagavan vyaktiṁ
vidur devā na dānavāḥ
]

\`v 15 [
svayam evātmanātmānaṁ
vettha tvaṁ puruṣottama
bhūta-bhāvana bhūteśa
deva-deva jagat-pate
]

\`v 16 [
vaktum arhasy aśeṣeṇa
divyā hy ātma-vibhūtayaḥ
yābhir vibhūtibhir lokān
imāṁs tvaṁ vyāpya tiṣṭhasi
]

\`v 17 [
kathaṁ vidyām ahaṁ yogiṁs
tvāṁ sadā paricintayan
keṣu keṣu ca bhāveṣu
cintyo ’si bhagavan mayā
]

\`v 18 [
vistareṇātmano yogaṁ
vibhūtiṁ ca janārdana
bhūyaḥ kathaya tṛptir hi
śṛṇvato nāsti me ’mṛtam
]

śrī-bhagavān uvāca
\`v 19 [
hanta te kathayiṣyāmi
divyā hy ātma-vibhūtayaḥ
prādhānyataḥ kuru-śreṣṭha
nāsty anto vistarasya me
]

\`v 20 [
aham ātmā guḍākeśa
sarva-bhūtāśaya-sthitaḥ
aham ādiś ca madhyaṁ ca
bhūtānām anta eva ca
]

\`v 21 [
ādityānām ahaṁ viṣṇur
jyotiṣāṁ ravir aṁśumān
marīcir marutām asmi
nakṣatrāṇām ahaṁ śaśī
]

\`v 22 [
vedānāṁ sāma-vedo ’smi
devānām asmi vāsavaḥ
indriyāṇāṁ manaś cāsmi
bhūtānām asmi cetanā
]

\`v 23 [
rudrāṇāṁ śaṅkaraś cāsmi
vitteśo yakṣa-rakṣasām
vasūnāṁ pāvakaś cāsmi
meruḥ śikhariṇām aham
]

\`v 24 [
purodhasāṁ ca mukhyaṁ māṁ
viddhi pārtha bṛhaspatim
senānīnām ahaṁ skandaḥ
sarasām asmi sāgaraḥ
]

\`v 25 [
maharṣīṇāṁ bhṛgur ahaṁ
girām asmy ekam akṣaram
yajñānāṁ japa-yajño ’smi
sthāvarāṇāṁ himālayaḥ
]

\`v 26 [
aśvatthaḥ sarva-vṛkṣāṇāṁ
devarṣīṇāṁ ca nāradaḥ
gandharvāṇāṁ citrarathaḥ
siddhānāṁ kapilo muniḥ
]

\`v 27 [
uccaiḥśravasam aśvānāṁ
viddhi mām amṛtodbhavam
airāvataṁ gajendrāṇāṁ
narāṇāṁ ca narādhipam
]

\`v 28 [
āyudhānām ahaṁ vajraṁ
dhenūnām asmi kāma-dhuk
prajanaś cāsmi kandarpaḥ
sarpāṇām asmi vāsukiḥ
]

\`v 29 [
anantaś cāsmi nāgānāṁ
varuṇo yādasām aham
pitṝṇām aryamā cāsmi
yamaḥ saṁyamatām aham
]

\`v 30 [
prahlādaś cāsmi daityānāṁ
kālaḥ kalayatām aham
mṛgāṇāṁ ca mṛgendro ’haṁ
vainateyaś ca pakṣiṇām
]

\`v 31 [
pavanaḥ pavatām asmi
rāmaḥ śastra-bhṛtām aham
jhaṣāṇāṁ makaraś cāsmi
srotasām asmi jāhnavī
]

\`v 32 [
sargāṇām ādir antaś ca
madhyaṁ caivāham arjuna
adhyātma-vidyā vidyānāṁ
vādaḥ pravadatām aham
]

\`v 33 [
akṣarāṇām a-kāro ’smi
dvandvaḥ sāmāsikasya ca
aham evākṣayaḥ kālo
dhātāhaṁ viśvato-mukhaḥ
]

\`v 34 [
mṛtyuḥ sarva-haraś cāham
udbhavaś ca bhaviṣyatām
kīrtiḥ śrīr vāk ca nārīṇāṁ
smṛtir medhā dhṛtiḥ kṣamā
]

\`v 35 [
bṛhat-sāma tathā sāmnāṁ
gāyatrī chandasām aham
māsānāṁ mārga-śīrṣo ’ham
ṛtūnāṁ kusumākaraḥ
]

\`v 36 [
dyūtaṁ chalayatām asmi
tejas tejasvinām aham
jayo ’smi vyavasāyo ’smi
sattvaṁ sattvavatām aham
]

\`v 37 [
vṛṣṇīnāṁ vāsudevo ’smi
pāṇḍavānāṁ dhanañ-jayaḥ
munīnām apy ahaṁ vyāsaḥ
kavīnām uśanā kaviḥ
]

\`v 38 [
daṇḍo damayatām asmi
nītir asmi jigīṣatām
maunaṁ caivāsmi guhyānāṁ
jñānaṁ jñānavatām aham
]

\`v 39 [
yac cāpi sarva-bhūtānāṁ
bījaṁ tad aham arjuna
na tad asti vinā yat syān
mayā bhūtaṁ carācaram
]

\`v 40 [
nānto ’sti mama divyānāṁ
vibhūtīnāṁ paran-tapa
eṣa tūddeśataḥ prokto
vibhūter vistaro mayā
]

\`v 41 [
yad yad vibhūtimat sattvaṁ
śrīmad ūrjitam eva vā
tat tad evāvagaccha tvaṁ
mama tejo-’ṁśa-sambhavam
]

\`v 42 [
atha vā bahunaitena
kiṁ jñātena tavārjuna
viṣṭabhyāham idaṁ kṛtsnam
ekāṁśena sthito jagat
]
`,"content/iast/11.vy":`\`set context { chapter.title = "Viśva-rūpa-darśana-yogaḥ" }

arjuna uvāca
\`v 1 [
mad-anugrahāya paramaṁ
guhyam adhyātma-saṁjñitam
yat tvayoktaṁ vacas tena
moho ’yaṁ vigato mama
]

\`v 2 [
bhavāpyayau hi bhūtānāṁ
śrutau vistaraśo mayā
tvattaḥ kamala-patrākṣa
māhātmyam api cāvyayam
]

\`v 3 [
evam etad yathāttha tvam
ātmānaṁ parameśvara
draṣṭum icchāmi te rūpam
aiśvaraṁ puruṣottama
]

\`v 4 [
manyase yadi tac chakyaṁ
mayā draṣṭum iti prabho
yogeśvara tato me tvaṁ
darśayātmānam avyayam
]

śrī-bhagavān uvāca
\`v 5 [
paśya me pārtha rūpāṇi
śataśo ’tha sahasraśaḥ
nānā-vidhāni divyāni
nānā-varṇākṛtīni ca
]

\`v 6 [
paśyādityān vasūn rudrān
aśvinau marutas tathā
bahūny adṛṣṭa-pūrvāṇi
paśyāścaryāṇi bhārata
]

\`v 7 [
ihaika-sthaṁ jagat kṛtsnaṁ
paśyādya sa-carācaram
mama dehe guḍākeśa
yac cānyad draṣṭum icchasi
]

\`v 8 [
na tu māṁ śakyase draṣṭum
anenaiva sva-cakṣuṣā
divyaṁ dadāmi te cakṣuḥ
paśya me yogam aiśvaram
]

sañjaya uvāca
\`v 9 [
evam uktvā tato rājan
mahā-yogeśvaro hariḥ
darśayām āsa pārthāya
paramaṁ rūpam aiśvaram
]

\`v 10 [
aneka-vaktra-nayanam
anekādbhuta-darśanam
aneka-divyābharaṇaṁ
divyānekodyatāyudham
]

\`v 11 [
divya-mālyāmbara-dharaṁ
divya-gandhānulepanam
sarvāścarya-mayaṁ devam
anantaṁ viśvato-mukham
]

\`v 12 [
divi sūrya-sahasrasya
bhaved yugapad utthitā
yadi bhāḥ sadṛśī sā syād
bhāsas tasya mahātmanaḥ
]

\`v 13 [
tatraika-sthaṁ jagat kṛtsnaṁ
pravibhaktam anekadhā
apaśyad deva-devasya
śarīre pāṇḍavas tadā
]

\`v 14 [
tataḥ sa vismayāviṣṭo
hṛṣṭa-romā dhanañ-jayaḥ
praṇamya śirasā devaṁ
kṛtāñjalir abhāṣata
]

arjuna uvāca
\`v 15 [
paśyāmi devāṁs tava deva dehe
sarvāṁs tathā bhūta-viśeṣa-saṅghān
brahmāṇam īśaṁ kamalāsana-stham
ṛṣīṁś ca sarvān uragāṁś ca divyān
]

\`v 16 [
aneka-bāhūdara-vaktra-netraṁ
paśyāmi tvāṁ sarvato ’nanta-rūpam
nāntaṁ na madhyaṁ na punas tavādiṁ
paśyāmi viśveśvara viśva-rūpa
]

\`v 17 [
kirīṭinaṁ gadinaṁ cakriṇaṁ ca
tejo-rāśiṁ sarvato dīptimantam
paśyāmi tvāṁ durnirīkṣyaṁ samantād
dīptānalārka-dyutim aprameyam
]

\`v 18 [
tvam akṣaraṁ paramaṁ veditavyaṁ
tvam asya viśvasya paraṁ nidhānam
tvam avyayaḥ śāśvata-dharma-goptā
sanātanas tvaṁ puruṣo mato me
]

\`v 19 [
anādi-madhyāntam ananta-vīryam
ananta-bāhuṁ śaśi-sūrya-netram
paśyāmi tvāṁ dīpta-hutāśa-vaktraṁ
sva-tejasā viśvam idaṁ tapantam
]

\`v 20 [
dyāv ā-pṛthivyor idam antaraṁ hi
vyāptaṁ tvayaikena diśaś ca sarvāḥ
dṛṣṭvādbhutaṁ rūpam ugraṁ tavedaṁ
loka-trayaṁ pravyathitaṁ mahātman
]

\`v 21 [
amī hi tvāṁ sura-saṅghā viśanti
kecid bhītāḥ prāñjalayo gṛṇanti
svastīty uktvā maharṣi-siddha-saṅghāḥ
stuvanti tvāṁ stutibhiḥ puṣkalābhiḥ
]

\`v 22 [
rudrādityā vasavo ye ca sādhyā
viśve ’śvinau marutaś coṣmapāś ca
gandharva-yakṣāsura-siddha-saṅghā
vīkṣante tvāṁ vismitāś caiva sarve
]

\`v 23 [
rūpaṁ mahat te bahu-vaktra-netraṁ
mahā-bāho bahu-bāhūru-pādam
bahūdaraṁ bahu-daṁṣṭrā-karālaṁ
dṛṣṭvā lokāḥ pravyathitās tathāham
]

\`v 24 [
nabhaḥ-spṛśaṁ dīptam aneka-varṇaṁ
vyāttānanaṁ dīpta-viśāla-netram
dṛṣṭvā hi tvāṁ pravyathitāntar-ātmā
dhṛtiṁ na vindāmi śamaṁ ca viṣṇo
]

\`v 25 [
daṁṣṭrā-karālāni ca te mukhāni
dṛṣṭvaiva kālānala-sannibhāni
diśo na jāne na labhe ca śarma
prasīda deveśa jagan-nivāsa
]

\`v 26 [
amī ca tvāṁ dhṛtarāṣṭrasya putrāḥ
sarve sahaivāvani-pāla-saṅghaiḥ
bhīṣmo droṇaḥ sūta-putras tathāsau
sahāsmadīyair api yodha-mukhyaiḥ
]

\`v 27 [
vaktrāṇi te tvaramāṇā viśanti
daṁṣṭrā-karālāni bhayānakāni
kecid vilagnā daśanāntareṣu
sandṛśyante cūrṇitair uttamāṅgaiḥ
]

\`v 28 [
yathā nadīnāṁ bahavo ’mbu-vegāḥ
samudram evābhimukhā dravanti
tathā tavāmī nara-loka-vīrā
viśanti vaktrāṇy abhivijvalanti
]

\`v 29 [
yathā pradīptaṁ jvalanaṁ pataṅgā
viśanti nāśāya samṛddha-vegāḥ
tathaiva nāśāya viśanti lokās
tavāpi vaktrāṇi samṛddha-vegāḥ
]

\`v 30 [
lelihyase grasamānaḥ samantāl
lokān samagrān vadanair jvaladbhiḥ
tejobhir āpūrya jagat samagraṁ
bhāsas tavogrāḥ pratapanti viṣṇo
]

\`v 31 [
ākhyāhi me ko bhavān ugra-rūpo
namo ’stu te deva-vara prasīda
vijñātum icchāmi bhavantam ādyaṁ
na hi prajānāmi tava pravṛttim
]

śrī-bhagavān uvāca
\`v 32 [
kālo ’smi loka-kṣaya-kṛt pravṛddho
lokān samāhartum iha pravṛttaḥ
ṛte ’pi tvāṁ na bhaviṣyanti sarve
ye ’vasthitāḥ praty-anīkeṣu yodhāḥ
]

\`v 33 [
tasmāt tvam uttiṣṭha yaśo labhasva
jitvā śatrūn bhuṅkṣva rājyaṁ samṛddham
mayaivaite nihatāḥ pūrvam eva
nimitta-mātraṁ bhava savya-sācin
]

\`v 34 [
droṇaṁ ca bhīṣmaṁ ca jayadrathaṁ ca
karṇaṁ tathānyān api yodha-vīrān
mayā hatāṁs tvaṁ jahi mā vyathiṣṭhā
yudhyasva jetāsi raṇe sapatnān
]

sañjaya uvāca
\`v 35 [
etac chrutvā vacanaṁ keśavasya
kṛtāñjalir vepamānaḥ kirīṭī
namaskṛtvā bhūya evāha kṛṣṇaṁ
sa-gadgadaṁ bhīta-bhītaḥ praṇamya
]

arjuna uvāca
\`v 36 [
sthāne hṛṣīkeśa tava prakīrtyā
jagat prahṛṣyaty anurajyate ca
rakṣāṁsi bhītāni diśo dravanti
sarve namasyanti ca siddha-saṅghāḥ
]

\`v 37 [
kasmāc ca te na nameran mahātman
garīyase brahmaṇo ’py ādi-kartre
ananta deveśa jagan-nivāsa
tvam akṣaraṁ sad-asat tat paraṁ yat
]

\`v 38 [
tvam ādi-devaḥ puruṣaḥ purāṇas
tvam asya viśvasya paraṁ nidhānam
vettāsi vedyaṁ ca paraṁ ca dhāma
tvayā tataṁ viśvam ananta-rūpa
]

\`v 39 [
vāyur yamo ’gnir varuṇaḥ śaśāṅkaḥ
prajāpatis tvaṁ prapitāmahaś ca
namo namas te ’stu sahasra-kṛtvaḥ
punaś ca bhūyo ’pi namo namas te
]

\`v 40 [
namaḥ purastād atha pṛṣṭhatas te
namo ’stu te sarvata eva sarva
ananta-vīryāmita-vikramas tvaṁ
sarvaṁ samāpnoṣi tato ’si sarvaḥ
]

\`v 41 [
sakheti matvā prasabhaṁ yad uktaṁ
he kṛṣṇa he yādava he sakheti
ajānatā mahimānaṁ tavedaṁ
mayā pramādāt praṇayena vāpi
]

\`v 42 [
yac cāvahāsārtham asat-kṛto ’si
vihāra-śayyāsana-bhojaneṣu
eko ’tha vāpy acyuta tat-samakṣaṁ
tat kṣāmaye tvām aham aprameyam
]

\`v 43 [
pitāsi lokasya carācarasya
tvam asya pūjyaś ca gurur garīyān
na tvat-samo ’sty abhyadhikaḥ kuto ’nyo
loka-traye ’py apratima-prabhāva
]

\`v 44 [
tasmāt praṇamya praṇidhāya kāyaṁ
prasādaye tvām aham īśam īḍyam
piteva putrasya sakheva sakhyuḥ
priyaḥ priyāyārhasi deva soḍhum
]

\`v 45 [
adṛṣṭa-pūrvaṁ hṛṣito ’smi dṛṣṭvā
bhayena ca pravyathitaṁ mano me
tad eva me darśaya deva rūpaṁ
prasīda deveśa jagan-nivāsa
]

\`v 46 [
kirīṭinaṁ gadinaṁ cakra-hastam
icchāmi tvāṁ draṣṭum ahaṁ tathaiva
tenaiva rūpeṇa catur-bhujena
sahasra-bāho bhava viśva-mūrte
]

śrī-bhagavān uvāca
\`v 47 [
mayā prasannena tavārjunedaṁ
rūpaṁ paraṁ darśitam ātma-yogāt
tejo-mayaṁ viśvam anantam ādyaṁ
yan me tvad anyena na dṛṣṭa-pūrvam
]

\`v 48 [
na veda-yajñādhyayanair na dānair
na ca kriyābhir na tapobhir ugraiḥ
evaṁ-rūpaḥ śakya ahaṁ nṛ-loke
draṣṭuṁ tvad anyena kuru-pravīra
]

\`v 49 [
mā te vyathā mā ca vimūḍha-bhāvo
dṛṣṭvā rūpaṁ ghoram īdṛṅ mamedam
vyapeta-bhīḥ prīta-manāḥ punas tvaṁ
tad eva me rūpam idaṁ prapaśya
]

sañjaya uvāca
\`v 50 [
ity arjunaṁ vāsudevas tathoktvā
svakaṁ rūpaṁ darśayām āsa bhūyaḥ
āśvāsayām āsa ca bhītam enaṁ
bhūtvā punaḥ saumya-vapur mahātmā
]

arjuna uvāca
\`v 51 [
dṛṣṭvedaṁ mānuṣaṁ rūpaṁ
tava saumyaṁ janārdana
idānīm asmi saṁvṛttaḥ
sa-cetāḥ prakṛtiṁ gataḥ
]

śrī-bhagavān uvāca
\`v 52 [
su-durdarśam idaṁ rūpaṁ
dṛṣṭavān asi yan mama
devā apy asya rūpasya
nityaṁ darśana-kāṅkṣiṇaḥ
]

\`v 53 [
nāhaṁ vedair na tapasā
na dānena na cejyayā
śakya evaṁ-vidho draṣṭuṁ
dṛṣṭavān asi māṁ yathā
]

\`v 54 [
bhaktyā tv ananyayā śakya
aham evaṁ-vidho ’rjuna
jñātuṁ draṣṭuṁ ca tattvena
praveṣṭuṁ ca paran-tapa
]

\`v 55 [
mat-karma-kṛn mat-paramo
mad-bhaktaḥ saṅga-varjitaḥ
nirvairaḥ sarva-bhūteṣu
yaḥ sa mām eti pāṇḍava
]
`,"content/iast/12.vy":`\`set context { chapter.title = "Bhakti-yogaḥ" }

arjuna uvāca
\`v 1 [
evaṁ satata-yuktā ye
bhaktās tvāṁ paryupāsate
ye cāpy akṣaram avyaktaṁ
teṣāṁ ke yoga-vittamāḥ
]

śrī-bhagavān uvāca
\`v 2 [
mayy āveśya mano ye māṁ
nitya-yuktā upāsate
śraddhayā parayopetās
te me yukta-tamā matāḥ
]

\`v 3 [
ye tv akṣaram anirdeśyam
avyaktaṁ paryupāsate
sarvatra-gam acintyaṁ ca
kūṭa-stham acalaṁ dhruvam
]

\`v 4 [
sanniyamyendriya-grāmaṁ
sarvatra sama-buddhayaḥ
te prāpnuvanti mām eva
sarva-bhūta-hite ratāḥ
]

\`v 5 [
kleśo ’dhika-taras teṣām
avyaktāsakta-cetasām
avyaktā hi gatir duḥkhaṁ
dehavadbhir avāpyate
]

\`v 6 [
ye tu sarvāṇi karmāṇi
mayi sannyasya mat-parāḥ
ananyenaiva yogena
māṁ dhyāyanta upāsate
]

\`v 7 [
teṣām ahaṁ samuddhartā
mṛtyu-saṁsāra-sāgarāt
bhavāmi na cirāt pārtha
mayy āveśita-cetasām
]

\`v 8 [
mayy eva mana ādhatsva
mayi buddhiṁ niveśaya
nivasiṣyasi mayy eva
ata ūrdhvaṁ na saṁśayaḥ
]

\`v 9 [
atha cittaṁ samādhātuṁ
na śaknoṣi mayi sthiram
abhyāsa-yogena tato
mām icchāptuṁ dhanañ-jaya
]

\`v 10 [
abhyāse ’py asamartho ’si
mat-karma-paramo bhava
mad-artham api karmāṇi
kurvan siddhim avāpsyasi
]

\`v 11 [
athaitad apy aśakto ’si
kartuṁ mad-yogam āśritaḥ
sarva-karma-phala-tyāgaṁ
tataḥ kuru yatātmavān
]

\`v 12 [
śreyo hi jñānam abhyāsāj
jñānād dhyānaṁ viśiṣyate
dhyānāt karma-phala-tyāgas
tyāgāc chāntir anantaram
]

\`v 13 [
adveṣṭā sarva-bhūtānāṁ
maitraḥ karuṇa eva ca
nirmamo nirahaṅkāraḥ
sama-duḥkha-sukhaḥ kṣamī
]

\`v 14 [
santuṣṭaḥ satataṁ yogī
yatātmā dṛḍha-niścayaḥ
mayy arpita-mano-buddhir
yo mad-bhaktaḥ sa me priyaḥ
]

\`v 15 [
yasmān nodvijate loko
lokān nodvijate ca yaḥ
harṣāmarṣa-bhayodvegair
mukto yaḥ sa ca me priyaḥ
]

\`v 16 [
anapekṣaḥ śucir dakṣa
udāsīno gata-vyathaḥ
sarvārambha-parityāgī
yo mad-bhaktaḥ sa me priyaḥ
]

\`v 17 [
yo na hṛṣyati na dveṣṭi
na śocati na kāṅkṣati
śubhāśubha-parityāgī
bhaktimān yaḥ sa me priyaḥ
]

\`v 18 [
samaḥ śatrau ca mitre ca
tathā mānāpamānayoḥ
śītoṣṇa-sukha-duḥkheṣu
samaḥ saṅga-vivarjitaḥ
]

\`v 19 [
tulya-nindā-stutir maunī
santuṣṭo yena kenacit
aniketaḥ sthira-matir
bhaktimān me priyo naraḥ
]

\`v 20 [
ye tu dharmāmṛtam idaṁ
yathoktaṁ paryupāsate
śraddadhānā mat-paramā
bhaktās te ’tīva me priyāḥ
]
`,"content/iast/13.vy":`\`set context { chapter.title = "Kṣetra-kṣetrajña-vibhāga-yogaḥ" }

arjuna uvāca
\`v 1 [
prakṛtiṁ puruṣaṁ caiva
kṣetraṁ kṣetra-jñam eva ca
etad veditum icchāmi
jñānaṁ jñeyaṁ ca keśava
]

śrī-bhagavān uvāca
\`v 2 [
idaṁ śarīraṁ kaunteya
kṣetram ity abhidhīyate
etad yo vetti taṁ prāhuḥ
kṣetra-jña iti tad-vidaḥ
]

\`v 3 [
kṣetra-jñaṁ cāpi māṁ viddhi
sarva-kṣetreṣu bhārata
kṣetra-kṣetrajñayor jñānaṁ
yat taj jñānaṁ mataṁ mama
]

\`v 4 [
tat kṣetraṁ yac ca yādṛk ca
yad-vikāri yataś ca yat
sa ca yo yat-prabhāvaś ca
tat samāsena me śṛṇu
]

\`v 5 [
ṛṣibhir bahudhā gītaṁ
chandobhir vividhaiḥ pṛthak
brahma-sūtra-padaiś caiva
hetumadbhir viniścitaiḥ
]

\`v 6 [
mahā-bhūtāny ahaṅkāro
buddhir avyaktam eva ca
indriyāṇi daśaikaṁ ca
pañca cendriya-gocarāḥ
]

\`v 7 [
icchā dveṣaḥ sukhaṁ duḥkhaṁ
saṅghātaś cetanā dhṛtiḥ
etat kṣetraṁ samāsena
sa-vikāram udāhṛtam
]

\`v 8 [
amānitvam adambhitvam
ahiṁsā kṣāntir ārjavam
ācāryopāsanaṁ śaucaṁ
sthairyam ātma-vinigrahaḥ
]

\`v 9 [
indriyārtheṣu vairāgyam
anahaṅkāra eva ca
janma-mṛtyu-jarā-vyādhi-
duḥkha-doṣānudarśanam
]

\`v 10 [
asaktir anabhiṣvaṅgaḥ
putra-dāra-gṛhādiṣu
nityaṁ ca sama-cittatvam
iṣṭāniṣṭopapattiṣu
]

\`v 11 [
mayi cānanya-yogena
bhaktir avyabhicāriṇī
vivikta-deśa-sevitvam
aratir jana-saṁsadi
]

\`v 12 [
adhyātma-jñāna-nityatvaṁ
tattva-jñānārtha-darśanam
etaj jñānam iti proktam
ajñānaṁ yad ato ’nyathā
]

\`v 13 [
jñeyaṁ yat tat pravakṣyāmi
yaj jñātvāmṛtam aśnute
anādi mat-paraṁ brahma
na sat tan nāsad ucyate
]

\`v 14 [
sarvataḥ pāṇi-pādaṁ tat
sarvato ’kṣi-śiro-mukham
sarvataḥ śrutimal loke
sarvam āvṛtya tiṣṭhati
]

\`v 15 [
sarvendriya-guṇābhāsaṁ
sarvendriya-vivarjitam
asaktaṁ sarva-bhṛc caiva
nirguṇaṁ guṇa-bhoktṛ ca
]

\`v 16 [
bahir antaś ca bhūtānām
acaraṁ caram eva ca
sūkṣmatvāt tad avijñeyaṁ
dūra-sthaṁ cāntike ca tat
]

\`v 17 [
avibhaktaṁ ca bhūteṣu
vibhaktam iva ca sthitam
bhūta-bhartṛ ca taj jñeyaṁ
grasiṣṇu prabhaviṣṇu ca
]

\`v 18 [
jyotiṣām api taj jyotis
tamasaḥ param ucyate
jñānaṁ jñeyaṁ jñāna-gamyaṁ
hṛdi sarvasya viṣṭhitam
]

\`v 19 [
iti kṣetraṁ tathā jñānaṁ
jñeyaṁ coktaṁ samāsataḥ
mad-bhakta etad vijñāya
mad-bhāvāyopapadyate
]

\`v 20 [
prakṛtiṁ puruṣaṁ caiva
viddhy anādī ubhāv api
vikārāṁś ca guṇāṁś caiva
viddhi prakṛti-sambhavān
]

\`v 21 [
kārya-kāraṇa-kartṛtve
hetuḥ prakṛtir ucyate
puruṣaḥ sukha-duḥkhānāṁ
bhoktṛtve hetur ucyate
]

\`v 22 [
puruṣaḥ prakṛti-stho hi
bhuṅkte prakṛti-jān guṇān
kāraṇaṁ guṇa-saṅgo ’sya
sad-asad-yoni-janmasu
]

\`v 23 [
upadraṣṭānumantā ca
bhartā bhoktā maheśvaraḥ
paramātmeti cāpy ukto
dehe ’smin puruṣaḥ paraḥ
]

\`v 24 [
ya evaṁ vetti puruṣaṁ
prakṛtiṁ ca guṇaiḥ saha
sarvathā vartamāno ’pi
na sa bhūyo ’bhijāyate
]

\`v 25 [
dhyānenātmani paśyanti
kecid ātmānam ātmanā
anye sāṅkhyena yogena
karma-yogena cāpare
]

\`v 26 [
anye tv evam ajānantaḥ
śrutvānyebhya upāsate
te ’pi cātitaranty eva
mṛtyuṁ śruti-parāyaṇāḥ
]

\`v 27 [
yāvat sañjāyate kiñcit
sattvaṁ sthāvara-jaṅgamam
kṣetra-kṣetrajña-saṁyogāt
tad viddhi bharatarṣabha
]

\`v 28 [
samaṁ sarveṣu bhūteṣu
tiṣṭhantaṁ parameśvaram
vinaśyatsv avinaśyantaṁ
yaḥ paśyati sa paśyati
]

\`v 29 [
samaṁ paśyan hi sarvatra
samavasthitam īśvaram
na hinasty ātmanātmānaṁ
tato yāti parāṁ gatim
]

\`v 30 [
prakṛtyaiva ca karmāṇi
kriyamāṇāni sarvaśaḥ
yaḥ paśyati tathātmānam
akartāraṁ sa paśyati
]

\`v 31 [
yadā bhūta-pṛthag-bhāvam
eka-stham anupaśyati
tata eva ca vistāraṁ
brahma sampadyate tadā
]

\`v 32 [
anāditvān nirguṇatvāt
paramātmāyam avyayaḥ
śarīra-stho ’pi kaunteya
na karoti na lipyate
]

\`v 33 [
yathā sarva-gataṁ saukṣmyād
ākāśaṁ nopalipyate
sarvatrāvasthito dehe
tathātmā nopalipyate
]

\`v 34 [
yathā prakāśayaty ekaḥ
kṛtsnaṁ lokam imaṁ raviḥ
kṣetraṁ kṣetrī tathā kṛtsnaṁ
prakāśayati bhārata
]

\`v 35 [
kṣetra-kṣetrajñayor evam
antaraṁ jñāna-cakṣuṣā
bhūta-prakṛti-mokṣaṁ ca
ye vidur yānti te param
]
`,"content/iast/14.vy":`\`set context { chapter.title = "Guṇa-traya-vibhāga-yogaḥ" }

śrī-bhagavān uvāca
\`v 1 [
paraṁ bhūyaḥ pravakṣyāmi
jñānānāṁ jñānam uttamam
yaj jñātvā munayaḥ sarve
parāṁ siddhim ito gatāḥ
]

\`v 2 [
idaṁ jñānam upāśritya
mama sādharmyam āgatāḥ
sarge ’pi nopajāyante
pralaye na vyathanti ca
]

\`v 3 [
mama yonir mahad brahma
tasmin garbhaṁ dadhāmy aham
sambhavaḥ sarva-bhūtānāṁ
tato bhavati bhārata
]

\`v 4 [
sarva-yoniṣu kaunteya
mūrtayaḥ sambhavanti yāḥ
tāsāṁ brahma mahad yonir
ahaṁ bīja-pradaḥ pitā
]

\`v 5 [
sattvaṁ rajas tama iti
guṇāḥ prakṛti-sambhavāḥ
nibadhnanti mahā-bāho
dehe dehinam avyayam
]

\`v 6 [
tatra sattvaṁ nirmalatvāt
prakāśakam anāmayam
sukha-saṅgena badhnāti
jñāna-saṅgena cānagha
]

\`v 7 [
rajo rāgātmakaṁ viddhi
tṛṣṇā-saṅga-samudbhavam
tan nibadhnāti kaunteya
karma-saṅgena dehinam
]

\`v 8 [
tamas tv ajñāna-jaṁ viddhi
mohanaṁ sarva-dehinām
pramādālasya-nidrābhis
tan nibadhnāti bhārata
]

\`v 9 [
sattvaṁ sukhe sañjayati
rajaḥ karmaṇi bhārata
jñānam āvṛtya tu tamaḥ
pramāde sañjayaty uta
]

\`v 10 [
rajas tamaś cābhibhūya
sattvaṁ bhavati bhārata
rajaḥ sattvaṁ tamaś caiva
tamaḥ sattvaṁ rajas tathā
]

\`v 11 [
sarva-dvāreṣu dehe ’smin
prakāśa upajāyate
jñānaṁ yadā tadā vidyād
vivṛddhaṁ sattvam ity uta
]

\`v 12 [
lobhaḥ pravṛttir ārambhaḥ
karmaṇām aśamaḥ spṛhā
rajasy etāni jāyante
vivṛddhe bharatarṣabha
]

\`v 13 [
aprakāśo ’pravṛttiś ca
pramādo moha eva ca
tamasy etāni jāyante
vivṛddhe kuru-nandana
]

\`v 14 [
yadā sattve pravṛddhe tu
pralayaṁ yāti deha-bhṛt
tadottama-vidāṁ lokān
amalān pratipadyate
]

\`v 15 [
rajasi pralayaṁ gatvā
karma-saṅgiṣu jāyate
tathā pralīnas tamasi
mūḍha-yoniṣu jāyate
]

\`v 16 [
karmaṇaḥ sukṛtasyāhuḥ
sāttvikaṁ nirmalaṁ phalam
rajasas tu phalaṁ duḥkham
ajñānaṁ tamasaḥ phalam
]

\`v 17 [
sattvāt sañjāyate jñānaṁ
rajaso lobha eva ca
pramāda-mohau tamaso
bhavato ’jñānam eva ca
]

\`v 18 [
ūrdhvaṁ gacchanti sattva-sthā
madhye tiṣṭhanti rājasāḥ
jaghanya-guṇa-vṛtti-sthā
adho gacchanti tāmasāḥ
]

\`v 19 [
nānyaṁ guṇebhyaḥ kartāraṁ
yadā draṣṭānupaśyati
guṇebhyaś ca paraṁ vetti
mad-bhāvaṁ so ’dhigacchati
]

\`v 20 [
guṇān etān atītya trīn
dehī deha-samudbhavān
janma-mṛtyu-jarā-duḥkhair
vimukto ’mṛtam aśnute
]

arjuna uvāca
\`v 21 [
kair liṅgais trīn guṇān etān
atīto bhavati prabho
kim-ācāraḥ kathaṁ caitāṁs
trīn guṇān ativartate
]

śrī-bhagavān uvāca
\`v 22 [
prakāśaṁ ca pravṛttiṁ ca
moham eva ca pāṇḍava
na dveṣṭi sampravṛttāni
na nivṛttāni kāṅkṣati
]

\`v 23 [
udāsīna-vad āsīno
guṇair yo na vicālyate
guṇā vartanta ity evaṁ
yo ’vatiṣṭhati neṅgate
]

\`v 24 [
sama-duḥkha-sukhaḥ sva-sthaḥ
sama-loṣṭāśma-kāñcanaḥ
tulya-priyāpriyo dhīras
tulya-nindātma-saṁstutiḥ
]

\`v 25 [
mānāpamānayos tulyas
tulyo mitrāri-pakṣayoḥ
sarvārambha-parityāgī
guṇātītaḥ sa ucyate
]

\`v 26 [
māṁ ca yo ’vyabhicāreṇa
bhakti-yogena sevate
sa guṇān samatītyaitān
brahma-bhūyāya kalpate
]

\`v 27 [
brahmaṇo hi pratiṣṭhāham
amṛtasyāvyayasya ca
śāśvatasya ca dharmasya
sukhasyaikāntikasya ca
]
`,"content/iast/15.vy":`\`set context { chapter.title = "Puruṣottama-yogaḥ" }

śrī-bhagavān uvāca
\`v 1 [
ūrdhva-mūlam adhaḥ-śākham
aśvatthaṁ prāhur avyayam
chandāṁsi yasya parṇāni
yas taṁ veda sa veda-vit
]

\`v 2 [
adhaś cordhvaṁ prasṛtās tasya śākhā
guṇa-pravṛddhā viṣaya-pravālāḥ
adhaś ca mūlāny anusantatāni
karmānubandhīni manuṣya-loke
]

\`v 3 [
na rūpam asyeha tathopalabhyate
nānto na cādir na ca sampratiṣṭhā
aśvattham enaṁ su-virūḍha-mūlam
asaṅga-śastreṇa dṛḍhena chittvā
]

\`v 4 [
tataḥ padaṁ tat parimārgitavyaṁ
yasmin gatā na nivartanti bhūyaḥ
tam eva cādyaṁ puruṣaṁ prapadye
yataḥ pravṛttiḥ prasṛtā purāṇī
]

\`v 5 [
nirmāna-mohā jita-saṅga-doṣā
adhyātma-nityā vinivṛtta-kāmāḥ
dvandvair vimuktāḥ sukha-duḥkha-saṁjñair
gacchanty amūḍhāḥ padam avyayaṁ tat
]

\`v 6 [
na tad bhāsayate sūryo
na śaśāṅko na pāvakaḥ
yad gatvā na nivartante
tad dhāma paramaṁ mama
]

\`v 7 [
mamaivāṁśo jīva-loke
jīva-bhūtaḥ sanātanaḥ
manaḥ-ṣaṣṭhānīndriyāṇi
prakṛti-sthāni karṣati
]

\`v 8 [
śarīraṁ yad avāpnoti
yac cāpy utkrāmatīśvaraḥ
gṛhītvaitāni saṁyāti
vāyur gandhān ivāśayāt
]

\`v 9 [
śrotraṁ cakṣuḥ sparśanaṁ ca
rasanaṁ ghrāṇam eva ca
adhiṣṭhāya manaś cāyaṁ
viṣayān upasevate
]

\`v 10 [
utkrāmantaṁ sthitaṁ vāpi
bhuñjānaṁ vā guṇānvitam
vimūḍhā nānupaśyanti
paśyanti jñāna-cakṣuṣaḥ
]

\`v 11 [
yatanto yoginaś cainaṁ
paśyanty ātmany avasthitam
yatanto ’py akṛtātmāno
nainaṁ paśyanty acetasaḥ
]

\`v 12 [
yad āditya-gataṁ tejo
jagad bhāsayate ’khilam
yac candramasi yac cāgnau
tat tejo viddhi māmakam
]

\`v 13 [
gām āviśya ca bhūtāni
dhārayāmy aham ojasā
puṣṇāmi cauṣadhīḥ sarvāḥ
somo bhūtvā rasātmakaḥ
]

\`v 14 [
ahaṁ vaiśvānaro bhūtvā
prāṇināṁ deham āśritaḥ
prāṇāpāna-samāyuktaḥ
pacāmy annaṁ catur-vidham
]

\`v 15 [
sarvasya cāhaṁ hṛdi sanniviṣṭo
mattaḥ smṛtir jñānam apohanaṁ ca
vedaiś ca sarvair aham eva vedyo
vedānta-kṛd veda-vid eva cāham
]

\`v 16 [
dvāv imau puruṣau loke
kṣaraś cākṣara eva ca
kṣaraḥ sarvāṇi bhūtāni
kūṭa-stho ’kṣara ucyate
]

\`v 17 [
uttamaḥ puruṣas tv anyaḥ
paramātmety udāhṛtaḥ
yo loka-trayam āviśya
bibharty avyaya īśvaraḥ
]

\`v 18 [
yasmāt kṣaram atīto ’ham
akṣarād api cottamaḥ
ato ’smi loke vede ca
prathitaḥ puruṣottamaḥ
]

\`v 19 [
yo mām evam asammūḍho
jānāti puruṣottamam
sa sarva-vid bhajati māṁ
sarva-bhāvena bhārata
]

\`v 20 [
iti guhya-tamaṁ śāstram
idam uktaṁ mayānagha
etad buddhvā buddhimān syāt
kṛta-kṛtyaś ca bhārata
]
`,"content/iast/16.vy":`\`set context { chapter.title = "Daivāsura-sampad-vibhāga-yogaḥ" }

śrī-bhagavān uvāca
\`v 1 [
abhayaṁ sattva-saṁśuddhir
jñāna-yoga-vyavasthitiḥ
dānaṁ damaś ca yajñaś ca
svādhyāyas tapa ārjavam
]

\`v 2 [
ahiṁsā satyam akrodhas
tyāgaḥ śāntir apaiśunam
dayā bhūteṣv aloluptvaṁ
mārdavaṁ hrīr acāpalam
]

\`v 3 [
tejaḥ kṣamā dhṛtiḥ śaucam
adroho nāti-mānitā
bhavanti sampadaṁ daivīm
abhijātasya bhārata
]

\`v 4 [
dambho darpo ’bhimānaś ca
krodhaḥ pāruṣyam eva ca
ajñānaṁ cābhijātasya
pārtha sampadam āsurīm
]

\`v 5 [
daivī sampad vimokṣāya
nibandhāyāsurī matā
mā śucaḥ sampadaṁ daivīm
abhijāto ’si pāṇḍava
]

\`v 6 [
dvau bhūta-sargau loke ’smin
daiva āsura eva ca
daivo vistaraśaḥ prokta
āsuraṁ pārtha me śṛṇu
]

\`v 7 [
pravṛttiṁ ca nivṛttiṁ ca
janā na vidur āsurāḥ
na śaucaṁ nāpi cācāro
na satyaṁ teṣu vidyate
]

\`v 8 [
asatyam apratiṣṭhaṁ te
jagad āhur anīśvaram
aparaspara-sambhūtaṁ
kim anyat kāma-haitukam
]

\`v 9 [
etāṁ dṛṣṭim avaṣṭabhya
naṣṭātmāno ’lpa-buddhayaḥ
prabhavanty ugra-karmāṇaḥ
kṣayāya jagato ’hitāḥ
]

\`v 10 [
kāmam āśritya duṣpūraṁ
dambha-māna-madānvitāḥ
mohād gṛhītvāsad-grāhān
pravartante ’śuci-vratāḥ
]

\`v 11 [
cintām aparimeyāṁ ca
pralayāntām upāśritāḥ
kāmopabhoga-paramā
etāvad iti niścitāḥ
]

\`v 12 [
āśā-pāśa-śatair baddhāḥ
kāma-krodha-parāyaṇāḥ
īhante kāma-bhogārtham
anyāyenārtha-sañcayān
]

\`v 13 [
idam adya mayā labdham
imaṁ prāpsye manoratham
idam astīdam api me
bhaviṣyati punar dhanam
]

\`v 14 [
asau mayā hataḥ śatrur
haniṣye cāparān api
īśvaro ’ham ahaṁ bhogī
siddho ’haṁ balavān sukhī
]

\`v 15 [
āḍhyo ’bhijanavān asmi
ko ’nyo ’sti sadṛśo mayā
yakṣye dāsyāmi modiṣya
ity ajñāna-vimohitāḥ
]

\`v 16 [
aneka-citta-vibhrāntā
moha-jāla-samāvṛtāḥ
prasaktāḥ kāma-bhogeṣu
patanti narake ’śucau
]

\`v 17 [
ātma-sambhāvitāḥ stabdhā
dhana-māna-madānvitāḥ
yajante nāma-yajñais te
dambhenāvidhi-pūrvakam
]

\`v 18 [
ahaṅkāraṁ balaṁ darpaṁ
kāmaṁ krodhaṁ ca saṁśritāḥ
mām ātma-para-deheṣu
pradviṣanto ’bhyasūyakāḥ
]

\`v 19 [
tān ahaṁ dviṣataḥ krūrān
saṁsāreṣu narādhamān
kṣipāmy ajasram aśubhān
āsurīṣv eva yoniṣu
]

\`v 20 [
āsurīṁ yonim āpannā
mūḍhā janmani janmani
mām aprāpyaiva kaunteya
tato yānty adhamāṁ gatim
]

\`v 21 [
tri-vidhaṁ narakasyedaṁ
dvāraṁ nāśanam ātmanaḥ
kāmaḥ krodhas tathā lobhas
tasmād etat trayaṁ tyajet
]

\`v 22 [
etair vimuktaḥ kaunteya
tamo-dvārais tribhir naraḥ
ācaraty ātmanaḥ śreyas
tato yāti parāṁ gatim
]

\`v 23 [
yaḥ śāstra-vidhim utsṛjya
vartate kāma-kārataḥ
na sa siddhim avāpnoti
na sukhaṁ na parāṁ gatim
]

\`v 24 [
tasmāc chāstraṁ pramāṇaṁ te
kāryākārya-vyavasthitau
jñātvā śāstra-vidhānoktaṁ
karma kartum ihārhasi
]
`,"content/iast/17.vy":`\`set context { chapter.title = "Śraddhā-traya-vibhāga-yogaḥ" }

arjuna uvāca
\`v 1 [
ye śāstra-vidhim utsṛjya
yajante śraddhayānvitāḥ
teṣāṁ niṣṭhā tu kā kṛṣṇa
sattvam āho rajas tamaḥ
]

śrī-bhagavān uvāca
\`v 2 [
tri-vidhā bhavati śraddhā
dehināṁ sā svabhāva-jā
sāttvikī rājasī caiva
tāmasī ceti tāṁ śṛṇu
]

\`v 3 [
sattvānurūpā sarvasya
śraddhā bhavati bhārata
śraddhā-mayo ’yaṁ puruṣo
yo yac-chraddhaḥ sa eva saḥ
]

\`v 4 [
yajante sāttvikā devān
yakṣa-rakṣāṁsi rājasāḥ
pretān bhūta-gaṇāṁś cānye
yajante tāmasā janāḥ
]

\`v 5 [
aśāstra-vihitaṁ ghoraṁ
tapyante ye tapo janāḥ
dambhāhaṅkāra-saṁyuktāḥ
kāma-rāga-balānvitāḥ
]

\`v 6 [
karṣayantaḥ śarīra-sthaṁ
bhūta-grāmam acetasaḥ
māṁ caivāntaḥ śarīra-sthaṁ
tān viddhy āsura-niścayān
]

\`v 7 [
āhāras tv api sarvasya
tri-vidho bhavati priyaḥ
yajñas tapas tathā dānaṁ
teṣāṁ bhedam imaṁ śṛṇu
]

\`v 8 [
āyuḥ-sattva-balārogya-
sukha-prīti-vivardhanāḥ
rasyāḥ snigdhāḥ sthirā hṛdyā
āhārāḥ sāttvika-priyāḥ
]

\`v 9 [
kaṭv-amla-lavaṇāty-uṣṇa-
tīkṣṇa-rūkṣa-vidāhinaḥ
āhārā rājasasyeṣṭā
duḥkha-śokāmaya-pradāḥ
]

\`v 10 [
yāta-yāmaṁ gata-rasaṁ
pūti paryuṣitaṁ ca yat
ucchiṣṭam api cāmedhyaṁ
bhojanaṁ tāmasa-priyam
]

\`v 11 [
aphalākāṅkṣibhir yajño
vidhi-diṣṭo ya ijyate
yaṣṭavyam eveti manaḥ
samādhāya sa sāttvikaḥ
]

\`v 12 [
abhisandhāya tu phalaṁ
dambhārtham api caiva yat
ijyate bharata-śreṣṭha
taṁ yajñaṁ viddhi rājasam
]

\`v 13 [
vidhi-hīnam asṛṣṭānnaṁ
mantra-hīnam adakṣiṇam
śraddhā-virahitaṁ yajñaṁ
tāmasaṁ paricakṣate
]

\`v 14 [
deva-dvija-guru-prājña-
pūjanaṁ śaucam ārjavam
brahmacaryam ahiṁsā ca
śārīraṁ tapa ucyate
]

\`v 15 [
anudvega-karaṁ vākyaṁ
satyaṁ priya-hitaṁ ca yat
svādhyāyābhyasanaṁ caiva
vāṅ-mayaṁ tapa ucyate
]

\`v 16 [
manaḥ-prasādaḥ saumyatvaṁ
maunam ātma-vinigrahaḥ
bhāva-saṁśuddhir ity etat
tapo mānasam ucyate
]

\`v 17 [
śraddhayā parayā taptaṁ
tapas tat tri-vidhaṁ naraiḥ
aphalākāṅkṣibhir yuktaiḥ
sāttvikaṁ paricakṣate
]

\`v 18 [
satkāra-māna-pūjārthaṁ
tapo dambhena caiva yat
kriyate tad iha proktaṁ
rājasaṁ calam adhruvam
]

\`v 19 [
mūḍha-grāheṇātmano yat
pīḍayā kriyate tapaḥ
parasyotsādanārthaṁ vā
tat tāmasam udāhṛtam
]

\`v 20 [
dātavyam iti yad dānaṁ
dīyate ’nupakāriṇe
deśe kāle ca pātre ca
tad dānaṁ sāttvikaṁ smṛtam
]

\`v 21 [
yat tu pratyupakārārthaṁ
phalam uddiśya vā punaḥ
dīyate ca parikliṣṭaṁ
tad dānaṁ rājasaṁ smṛtam
]

\`v 22 [
adeśa-kāle yad dānam
apātrebhyaś ca dīyate
asat-kṛtam avajñātaṁ
tat tāmasam udāhṛtam
]

\`v 23 [
oṁ tat sad iti nirdeśo
brahmaṇas tri-vidhaḥ smṛtaḥ
brāhmaṇās tena vedāś ca
yajñāś ca vihitāḥ purā
]

\`v 24 [
tasmād oṁ ity udāhṛtya
yajña-dāna-tapaḥ-kriyāḥ
pravartante vidhānoktāḥ
satataṁ brahma-vādinām
]

\`v 25 [
tad ity anabhisandhāya
phalaṁ yajña-tapaḥ-kriyāḥ
dāna-kriyāś ca vividhāḥ
kriyante mokṣa-kāṅkṣibhiḥ
]

\`v 26 [
sad-bhāve sādhu-bhāve ca
sad ity etat prayujyate
praśaste karmaṇi tathā
sac-chabdaḥ pārtha yujyate
]

\`v 27 [
yajñe tapasi dāne ca
sthitiḥ sad iti cocyate
karma caiva tad-arthīyaṁ
sad ity evābhidhīyate
]

\`v 28 [
aśraddhayā hutaṁ dattaṁ
tapas taptaṁ kṛtaṁ ca yat
asad ity ucyate pārtha
na ca tat pretya no iha
]
`,"content/iast/18.vy":`\`set context { chapter.title = "Mokṣa-sannyāsa-yogaḥ" }

arjuna uvāca
\`v 1 [
sannyāsasya mahā-bāho
tattvam icchāmi veditum
tyāgasya ca hṛṣīkeśa
pṛthak keśi-niṣūdana
]

śrī-bhagavān uvāca
\`v 2 [
kāmyānāṁ karmaṇāṁ nyāsaṁ
sannyāsaṁ kavayo viduḥ
sarva-karma-phala-tyāgaṁ
prāhus tyāgaṁ vicakṣaṇāḥ
]

\`v 3 [
tyājyaṁ doṣa-vad ity eke
karma prāhur manīṣiṇaḥ
yajña-dāna-tapaḥ-karma
na tyājyam iti cāpare
]

\`v 4 [
niścayaṁ śṛṇu me tatra
tyāge bharata-sattama
tyāgo hi puruṣa-vyāghra
tri-vidhaḥ samprakīrtitaḥ
]

\`v 5 [
yajña-dāna-tapaḥ-karma
na tyājyaṁ kāryam eva tat
yajño dānaṁ tapaś caiva
pāvanāni manīṣiṇām
]

\`v 6 [
etāny api tu karmāṇi
saṅgaṁ tyaktvā phalāni ca
kartavyānīti me pārtha
niścitaṁ matam uttamam
]

\`v 7 [
niyatasya tu sannyāsaḥ
karmaṇo nopapadyate
mohāt tasya parityāgas
tāmasaḥ parikīrtitaḥ
]

\`v 8 [
duḥkham ity eva yat karma
kāya-kleśa-bhayāt tyajet
sa kṛtvā rājasaṁ tyāgaṁ
naiva tyāga-phalaṁ labhet
]

\`v 9 [
kāryam ity eva yat karma
niyataṁ kriyate ’rjuna
saṅgaṁ tyaktvā phalaṁ caiva
sa tyāgaḥ sāttviko mataḥ
]

\`v 10 [
na dveṣṭy akuśalaṁ karma
kuśale nānuṣajjate
tyāgī sattva-samāviṣṭo
medhāvī chinna-saṁśayaḥ
]

\`v 11 [
na hi deha-bhṛtā śakyaṁ
tyaktuṁ karmāṇy aśeṣataḥ
yas tu karma-phala-tyāgī
sa tyāgīty abhidhīyate
]

\`v 12 [
aniṣṭam iṣṭaṁ miśraṁ ca
tri-vidhaṁ karmaṇaḥ phalam
bhavaty atyāgināṁ pretya
na tu sannyāsināṁ kvacit
]

\`v 13 [
pañcaitāni mahā-bāho
kāraṇāni nibodha me
sāṅkhye kṛtānte proktāni
siddhaye sarva-karmaṇām
]

\`v 14 [
adhiṣṭhānaṁ tathā kartā
karaṇaṁ ca pṛthag-vidham
vividhāś ca pṛthak ceṣṭā
daivaṁ caivātra pañcamam
]

\`v 15 [
śarīra-vāṅ-manobhir yat
karma prārabhate naraḥ
nyāyyaṁ vā viparītaṁ vā
pañcaite tasya hetavaḥ
]

\`v 16 [
tatraivaṁ sati kartāram
ātmānaṁ kevalaṁ tu yaḥ
paśyaty akṛta-buddhitvān
na sa paśyati durmatiḥ
]

\`v 17 [
yasya nāhaṅkṛto bhāvo
buddhir yasya na lipyate
hatvāpi sa imāḻ lokān
na hanti na nibadhyate
]

\`v 18 [
jñānaṁ jñeyaṁ parijñātā
tri-vidhā karma-codanā
karaṇaṁ karma karteti
tri-vidhaḥ karma-saṅgrahaḥ
]

\`v 19 [
jñānaṁ karma ca kartā ca
tridhaiva guṇa-bhedataḥ
procyate guṇa-saṅkhyāne
yathāvac chṛṇu tāny api
]

\`v 20 [
sarva-bhūteṣu yenaikaṁ
bhāvam avyayam īkṣate
avibhaktaṁ vibhakteṣu
taj jñānaṁ viddhi sāttvikam
]

\`v 21 [
pṛthaktvena tu yaj jñānaṁ
nānā-bhāvān pṛthag-vidhān
vetti sarveṣu bhūteṣu
taj jñānaṁ viddhi rājasam
]

\`v 22 [
yat tu kṛtsna-vad ekasmin
kārye saktam ahaitukam
atattvārtha-vad alpaṁ ca
tat tāmasam udāhṛtam
]

\`v 23 [
niyataṁ saṅga-rahitam
arāga-dveṣataḥ kṛtam
aphala-prepsunā karma
yat tat sāttvikam ucyate
]

\`v 24 [
yat tu kāmepsunā karma
sāhaṅkāreṇa vā punaḥ
kriyate bahulāyāsaṁ
tad rājasam udāhṛtam
]

\`v 25 [
anubandhaṁ kṣayaṁ hiṁsām
anapekṣya ca pauruṣam
mohād ārabhyate karma
yat tat tāmasam ucyate
]

\`v 26 [
mukta-saṅgo ’nahaṁ-vādī
dhṛty-utsāha-samanvitaḥ
siddhy-asiddhyor nirvikāraḥ
kartā sāttvika ucyate
]

\`v 27 [
rāgī karma-phala-prepsur
lubdho hiṁsātmako ’śuciḥ
harṣa-śokānvitaḥ kartā
rājasaḥ parikīrtitaḥ
]

\`v 28 [
ayuktaḥ prākṛtaḥ stabdhaḥ
śaṭho naiṣkṛtiko ’lasaḥ
viṣādī dīrgha-sūtrī ca
kartā tāmasa ucyate
]

\`v 29 [
buddher bhedaṁ dhṛteś caiva
guṇatas tri-vidhaṁ śṛṇu
procyamānam aśeṣeṇa
pṛthaktvena dhanañ-jaya
]

\`v 30 [
pravṛttiṁ ca nivṛttiṁ ca
kāryākārye bhayābhaye
bandhaṁ mokṣaṁ ca yā vetti
buddhiḥ sā pārtha sāttvikī
]

\`v 31 [
yayā dharmam adharmaṁ ca
kāryaṁ cākāryam eva ca
ayathāvat prajānāti
buddhiḥ sā pārtha rājasī
]

\`v 32 [
adharmaṁ dharmam iti yā
manyate tamasāvṛtā
sarvārthān viparītāṁś ca
buddhiḥ sā pārtha tāmasī
]

\`v 33 [
dhṛtyā yayā dhārayate
manaḥ-prāṇendriya-kriyāḥ
yogenāvyabhicāriṇyā
dhṛtiḥ sā pārtha sāttvikī
]

\`v 34 [
yayā tu dharma-kāmārthān
dhṛtyā dhārayate ’rjuna
prasaṅgena phalākāṅkṣī
dhṛtiḥ sā pārtha rājasī
]

\`v 35 [
yayā svapnaṁ bhayaṁ śokaṁ
viṣādaṁ madam eva ca
na vimuñcati durmedhā
dhṛtiḥ sā pārtha tāmasī
]

\`v 36 [
sukhaṁ tv idānīṁ tri-vidhaṁ
śṛṇu me bharatarṣabha
abhyāsād ramate yatra
duḥkhāntaṁ ca nigacchati
]

\`v 37 [
yat tad agre viṣam iva
pariṇāme ’mṛtopamam
tat sukhaṁ sāttvikaṁ proktam
ātma-buddhi-prasāda-jam
]

\`v 38 [
viṣayendriya-saṁyogād
yat tad agre ’mṛtopamam
pariṇāme viṣam iva
tat sukhaṁ rājasaṁ smṛtam
]

\`v 39 [
yad agre cānubandhe ca
sukhaṁ mohanam ātmanaḥ
nidrālasya-pramādotthaṁ
tat tāmasam udāhṛtam
]

\`v 40 [
na tad asti pṛthivyāṁ vā
divi deveṣu vā punaḥ
sattvaṁ prakṛti-jair muktaṁ
yad ebhiḥ syāt tribhir guṇaiḥ
]

\`v 41 [
brāhmaṇa-kṣatriya-viśāṁ
śūdrāṇāṁ ca paran-tapa
karmāṇi pravibhaktāni
svabhāva-prabhavair guṇaiḥ
]

\`v 42 [
śamo damas tapaḥ śaucaṁ
kṣāntir ārjavam eva ca
jñānaṁ vijñānam āstikyaṁ
brahma-karma svabhāva-jam
]

\`v 43 [
śauryaṁ tejo dhṛtir dākṣyaṁ
yuddhe cāpy apalāyanam
dānam īśvara-bhāvaś ca
kṣātraṁ karma svabhāva-jam
]

\`v 44 [
kṛṣi-go-rakṣya-vāṇijyaṁ
vaiśya-karma svabhāva-jam
paricaryātmakaṁ karma
śūdrasyāpi svabhāva-jam
]

\`v 45 [
sve sve karmaṇy abhirataḥ
saṁsiddhiṁ labhate naraḥ
sva-karma-nirataḥ siddhiṁ
yathā vindati tac chṛṇu
]

\`v 46 [
yataḥ pravṛttir bhūtānāṁ
yena sarvam idaṁ tatam
sva-karmaṇā tam abhyarcya
siddhiṁ vindati mānavaḥ
]

\`v 47 [
śreyān sva-dharmo viguṇaḥ
para-dharmāt sv-anuṣṭhitāt
svabhāva-niyataṁ karma
kurvan nāpnoti kilbiṣam
]

\`v 48 [
saha-jaṁ karma kaunteya
sa-doṣam api na tyajet
sarvārambhā hi doṣeṇa
dhūmenāgnir ivāvṛtāḥ
]

\`v 49 [
asakta-buddhiḥ sarvatra
jitātmā vigata-spṛhaḥ
naiṣkarmya-siddhiṁ paramāṁ
sannyāsenādhigacchati
]

\`v 50 [
siddhiṁ prāpto yathā brahma
tathāpnoti nibodha me
samāsenaiva kaunteya
niṣṭhā jñānasya yā parā
]

\`v 51 [
buddhyā viśuddhayā yukto
dhṛtyātmānaṁ niyamya ca
śabdādīn viṣayāṁs tyaktvā
rāga-dveṣau vyudasya ca
]

\`v 52 [
vivikta-sevī laghv-āśī
yata-vāk-kāya-mānasaḥ
dhyāna-yoga-paro nityaṁ
vairāgyaṁ samupāśritaḥ
]

\`v 53 [
ahaṅkāraṁ balaṁ darpaṁ
kāmaṁ krodhaṁ parigraham
vimucya nirmamaḥ śānto
brahma-bhūyāya kalpate
]

\`v 54 [
brahma-bhūtaḥ prasannātmā
na śocati na kāṅkṣati
samaḥ sarveṣu bhūteṣu
mad-bhaktiṁ labhate parām
]

\`v 55 [
bhaktyā mām abhijānāti
yāvān yaś cāsmi tattvataḥ
tato māṁ tattvato jñātvā
viśate tad-anantaram
]

\`v 56 [
sarva-karmāṇy api sadā
kurvāṇo mad-vyapāśrayaḥ
mat-prasādād avāpnoti
śāśvataṁ padam avyayam
]

\`v 57 [
cetasā sarva-karmāṇi
mayi sannyasya mat-paraḥ
buddhi-yogam upāśritya
mac-cittaḥ satataṁ bhava
]

\`v 58 [
mac-cittaḥ sarva-durgāṇi
mat-prasādāt tariṣyasi
atha cet tvam ahaṅkārān
na śroṣyasi vinaṅkṣyasi
]

\`v 59 [
yad ahaṅkāram āśritya
na yotsya iti manyase
mithyaiṣa vyavasāyas te
prakṛtis tvāṁ niyokṣyati
]

\`v 60 [
svabhāva-jena kaunteya
nibaddhaḥ svena karmaṇā
kartuṁ necchasi yan mohāt
kariṣyasy avaśo ’pi tat
]

\`v 61 [
īśvaraḥ sarva-bhūtānāṁ
hṛd-deśe ’rjuna tiṣṭhati
bhrāmayan sarva-bhūtāni
yantrārūḍhāni māyayā
]

\`v 62 [
tam eva śaraṇaṁ gaccha
sarva-bhāvena bhārata
tat-prasādāt parāṁ śāntiṁ
sthānaṁ prāpsyasi śāśvatam
]

\`v 63 [
iti te jñānam ākhyātaṁ
guhyād guhya-taraṁ mayā
vimṛśyaitad aśeṣeṇa
yathecchasi tathā kuru
]

\`v 64 [
sarva-guhyatamaṁ bhūyaḥ
śṛṇu me paramaṁ vacaḥ
iṣṭo ’si me dṛḍham iti
tato vakṣyāmi te hitam
]

\`v 65 [
man-manā bhava mad-bhakto
mad-yājī māṁ namaskuru
mām evaiṣyasi satyaṁ te
pratijāne priyo ’si me
]

\`v 66 [
sarva-dharmān parityajya
mām ekaṁ śaraṇaṁ vraja
ahaṁ tvāṁ sarva-pāpebhyo
mokṣayiṣyāmi mā śucaḥ
]

\`v 67 [
idaṁ te nātapaskāya
nābhaktāya kadācana
na cāśuśrūṣave vācyaṁ
na ca māṁ yo ’bhyasūyati
]

\`v 68 [
ya idaṁ paramaṁ guhyaṁ
mad-bhakteṣv abhidhāsyati
bhaktiṁ mayi parāṁ kṛtvā
mām evaiṣyaty asaṁśayaḥ
]

\`v 69 [
na ca tasmān manuṣyeṣu
kaścin me priya-kṛttamaḥ
bhavitā na ca me tasmād
anyaḥ priya-taro bhuvi
]

\`v 70 [
adhyeṣyate ca ya imaṁ
dharmyaṁ saṁvādam āvayoḥ
jñāna-yajñena tenāham
iṣṭaḥ syām iti me matiḥ
]

\`v 71 [
śraddhāvān anasūyaś ca
śṛṇuyād api yo naraḥ
so ’pi muktaḥ śubhāḻ lokān
prāpnuyāt puṇya-karmaṇām
]

\`v 72 [
kaccid etac chrutaṁ pārtha
tvayaikāgreṇa cetasā
kaccid ajñāna-sammohaḥ
praṇaṣṭas te dhanañ-jaya
]

arjuna uvāca
\`v 73 [
naṣṭo mohaḥ smṛtir labdhā
tvat-prasādān mayācyuta
sthito ’smi gata-sandehaḥ
kariṣye vacanaṁ tava
]

sañjaya uvāca
\`v 74 [
ity ahaṁ vāsudevasya
pārthasya ca mahātmanaḥ
saṁvādam imam aśrauṣam
adbhutaṁ roma-harṣaṇam
]

\`v 75 [
vyāsa-prasādāc chrutavān
etad guhyam ahaṁ param
yogaṁ yogeśvarāt kṛṣṇāt
sākṣāt kathayataḥ svayam
]

\`v 76 [
rājan saṁsmṛtya saṁsmṛtya
saṁvādam imam adbhutam
keśavārjunayoḥ puṇyaṁ
hṛṣyāmi ca muhur muhuḥ
]

\`v 77 [
tac ca saṁsmṛtya saṁsmṛtya
rūpam aty-adbhutaṁ hareḥ
vismayo me mahān rājan
hṛṣyāmi ca punaḥ punaḥ
]

\`v 78 [
yatra yogeśvaraḥ kṛṣṇo
yatra pārtho dhanur-dharaḥ
tatra śrīr vijayo bhūtir
dhruvā nītir matir mama
]
`,"content/iast/2.vy":`\`set context { chapter.title = "Sāṅkhya-yogaḥ" }

sañjaya uvāca
\`v 1 [
taṁ tathā kṛpayāviṣṭam
aśru-pūrṇākulekṣaṇam
viṣīdantam idaṁ vākyam
uvāca madhusūdanaḥ
]

śrī-bhagavān uvāca
\`v 2 [
kutas tvā kaśmalam idaṁ
viṣame samupasthitam
anārya-juṣṭam asvargyam
akīrti-karam arjuna
]

\`v 3 [
klaibyaṁ mā sma gamaḥ pārtha
naitat tvayy upapadyate
kṣudraṁ hṛdaya-daurbalyaṁ
tyaktvottiṣṭha paran-tapa
]

arjuna uvāca
\`v 4 [
kathaṁ bhīṣmam ahaṁ saṅkhye
droṇaṁ ca madhusūdana
iṣubhiḥ pratiyotsyāmi
pūjārhāv ari-sūdana
]

\`v 5 [
gurūn ahatvā hi mahānubhāvān
śreyo bhoktuṁ bhaikṣyam apīha loke
hatvārtha-kāmāṁs tu gurūn ihaiva
bhuñjīya bhogān rudhira-pradigdhān
]

\`v 6 [
na caitad vidmaḥ kataran no garīyo
yad vā jayema yadi vā no jayeyuḥ
yān eva hatvā na jijīviṣāmas
te ’vasthitāḥ pramukhe dhārtarāṣṭrāḥ
]

\`v 7 [
kārpaṇya-doṣopahata-svabhāvaḥ
pṛcchāmi tvāṁ dharma-sammūḍha-cetāḥ
yac chreyaḥ syān niścitaṁ brūhi tan me
śiṣyas te ’haṁ śādhi māṁ tvāṁ prapannam
]

\`v 8 [
na hi prapaśyāmi mamāpanudyād
yac chokam ucchoṣaṇam indriyāṇām
avāpya bhūmāv asapatnam ṛddhaṁ
rājyaṁ surāṇām api cādhipatyam
]

sañjaya uvāca
\`v 9 [
evam uktvā hṛṣīkeśaṁ
guḍākeśaḥ paran-tapaḥ
na yotsya iti govindam
uktvā tūṣṇīṁ babhūva ha
]

\`v 10 [
tam uvāca hṛṣīkeśaḥ
prahasann iva bhārata
senayor ubhayor madhye
viṣīdantam idaṁ vacaḥ
]

śrī-bhagavān uvāca
\`v 11 [
aśocyān anvaśocas tvaṁ
prajñā-vādāṁś ca bhāṣase
gatāsūn agatāsūṁś ca
nānuśocanti paṇḍitāḥ
]

\`v 12 [
na tv evāhaṁ jātu nāsaṁ
na tvaṁ neme janādhipāḥ
na caiva na bhaviṣyāmaḥ
sarve vayam ataḥ param
]

\`v 13 [
dehino ’smin yathā dehe
kaumāraṁ yauvanaṁ jarā
tathā dehāntara-prāptir
dhīras tatra na muhyati
]

\`v 14 [
mātrā-sparśās tu kaunteya
śītoṣṇa-sukha-duḥkha-dāḥ
āgamāpāyino ’nityās
tāṁs titikṣasva bhārata
]

\`v 15 [
yaṁ hi na vyathayanty ete
puruṣaṁ puruṣarṣabha
sama-duḥkha-sukhaṁ dhīraṁ
so ’mṛtatvāya kalpate
]

\`v 16 [
nāsato vidyate bhāvo
nābhāvo vidyate sataḥ
ubhayor api dṛṣṭo ’ntas
tv anayos tattva-darśibhiḥ
]

\`v 17 [
avināśi tu tad viddhi
yena sarvam idaṁ tatam
vināśam avyayasyāsya
na kaścit kartum arhati
]

\`v 18 [
antavanta ime dehā
nityasyoktāḥ śarīriṇaḥ
anāśino ’prameyasya
tasmād yudhyasva bhārata
]

\`v 19 [
ya enaṁ vetti hantāraṁ
yaś cainaṁ manyate hatam
ubhau tau na vijānīto
nāyaṁ hanti na hanyate
]

\`v 20 [
na jāyate mriyate vā kadācin
nāyaṁ bhūtvā bhavitā vā na bhūyaḥ
ajo nityaḥ śāśvato ’yaṁ purāṇo
na hanyate hanyamāne śarīre
]

\`v 21 [
vedāvināśinaṁ nityaṁ
ya enam ajam avyayam
kathaṁ sa puruṣaḥ pārtha
kaṁ ghātayati hanti kam
]

\`v 22 [
vāsāṁsi jīrṇāni yathā vihāya
navāni gṛhṇāti naro ’parāṇi
tathā śarīrāṇi vihāya jīrṇāny
anyāni saṁyāti navāni dehī
]

\`v 23 [
nainaṁ chindanti śastrāṇi
nainaṁ dahati pāvakaḥ
na cainaṁ kledayanty āpo
na śoṣayati mārutaḥ
]

\`v 24 [
acchedyo ’yam adāhyo ’yam
akledyo ’śoṣya eva ca
nityaḥ sarva-gataḥ sthāṇur
acalo ’yaṁ sanātanaḥ
]

\`v 25 [
avyakto ’yam acintyo ’yam
avikāryo ’yam ucyate
tasmād evaṁ viditvainaṁ
nānuśocitum arhasi
]

\`v 26 [
atha cainaṁ nitya-jātaṁ
nityaṁ vā manyase mṛtam
tathāpi tvaṁ mahā-bāho
nainaṁ śocitum arhasi
]

\`v 27 [
jātasya hi dhruvo mṛtyur
dhruvaṁ janma mṛtasya ca
tasmād aparihārye ’rthe
na tvaṁ śocitum arhasi
]

\`v 28 [
avyaktādīni bhūtāni
vyakta-madhyāni bhārata
avyakta-nidhanāny eva
tatra kā paridevanā
]

\`v 29 [
āścarya-vat paśyati kaścid enam
āścarya-vad vadati tathaiva cānyaḥ
āścarya-vac cainam anyaḥ śṛṇoti
śrutvāpy enaṁ veda na caiva kaścit
]

\`v 30 [
dehī nityam avadhyo ’yaṁ
dehe sarvasya bhārata
tasmāt sarvāṇi bhūtāni
na tvaṁ śocitum arhasi
]

\`v 31 [
sva-dharmam api cāvekṣya
na vikampitum arhasi
dharmyād dhi yuddhāc chreyo ’nyat
kṣatriyasya na vidyate
]

\`v 32 [
yadṛcchayā copapannaṁ
svarga-dvāram apāvṛtam
sukhinaḥ kṣatriyāḥ pārtha
labhante yuddham īdṛśam
]

\`v 33 [
atha cet tvam imaṁ dharmyaṁ
saṅgrāmaṁ na kariṣyasi
tataḥ sva-dharmaṁ kīrtiṁ ca
hitvā pāpam avāpsyasi
]

\`v 34 [
akīrtiṁ cāpi bhūtāni
kathayiṣyanti te ’vyayām
sambhāvitasya cākīrtir
maraṇād atiricyate
]

\`v 35 [
bhayād raṇād uparataṁ
maṁsyante tvāṁ mahā-rathāḥ
yeṣāṁ ca tvaṁ bahu-mato
bhūtvā yāsyasi lāghavam
]

\`v 36 [
avācya-vādāṁś ca bahūn
vadiṣyanti tavāhitāḥ
nindantas tava sāmarthyaṁ
tato duḥkha-taraṁ nu kim
]

\`v 37 [
hato vā prāpsyasi svargaṁ
jitvā vā bhokṣyase mahīm
tasmād uttiṣṭha kaunteya
yuddhāya kṛta-niścayaḥ
]

\`v 38 [
sukha-duḥkhe same kṛtvā
lābhālābhau jayājayau
tato yuddhāya yujyasva
naivaṁ pāpam avāpsyasi
]

\`v 39 [
eṣā te ’bhihitā sāṅkhye
buddhir yoge tv imāṁ śṛṇu
buddhyā yukto yayā pārtha
karma-bandhaṁ prahāsyasi
]

\`v 40 [
nehābhikrama-nāśo ’sti
pratyavāyo na vidyate
sv-alpam apy asya dharmasya
trāyate mahato bhayāt
]

\`v 41 [
vyavasāyātmikā buddhir
ekeha kuru-nandana
bahu-śākhā hy anantāś ca
buddhayo ’vyavasāyinām
]

\`v 42 [
yām imāṁ puṣpitāṁ vācaṁ
pravadanty avipaścitaḥ
veda-vāda-ratāḥ pārtha
nānyad astīti vādinaḥ
]

\`v 43 [
kāmātmānaḥ svarga-parā
janma-karma-phala-pradām
kriyā-viśeṣa-bahulāṁ
bhogaiśvarya-gatiṁ prati
]

\`v 44 [
bhogaiśvarya-prasaktānāṁ
tayāpahṛta-cetasām
vyavasāyātmikā buddhiḥ
samādhau na vidhīyate
]

\`v 45 [
trai-guṇya-viṣayā vedā
nistrai-guṇyo bhavārjuna
nirdvandvo nitya-sattva-stho
niryoga-kṣema ātmavān
]

\`v 46 [
yāvān artha uda-pāne
sarvataḥ samplutodake
tāvān sarveṣu vedeṣu
brāhmaṇasya vijānataḥ
]

\`v 47 [
karmaṇy evādhikāras te
mā phaleṣu kadācana
mā karma-phala-hetur bhūr
mā te saṅgo ’stv akarmaṇi
]

\`v 48 [
yoga-sthaḥ kuru karmāṇi
saṅgaṁ tyaktvā dhanañ-jaya
siddhy-asiddhyoḥ samo bhūtvā
samatvaṁ yoga ucyate
]

\`v 49 [
dūreṇa hy avaraṁ karma
buddhi-yogād dhanañ-jaya
buddhau śaranam anviccha
kṛpaṇāḥ phala-hetavaḥ
]

\`v 50 [
buddhi-yukto jahātīha
ubhe sukṛta-duṣkṛte
tasmād yogāya yujyasva
yogaḥ karmasu kauśalam
]

\`v 51 [
karma-jaṁ buddhi-yuktā hi
phalaṁ tyaktvā manīṣiṇaḥ
janma-bandha-vinirmuktāḥ
padaṁ gacchanty anāmayam
]

\`v 52 [
yadā te moha-kalilaṁ
buddhir vyatitariṣyati
tadā gantāsi nirvedaṁ
śrotavyasya śrutasya ca
]

\`v 53 [
śruti-vipratipannā te
yadā sthāsyati niścalā
samādhāv acalā buddhis
tadā yogam avāpsyasi
]

arjuna uvāca
\`v 54 [
sthita-prajñasya kā bhāṣā
samādhi-sthasya keśava
sthita-dhīḥ kiṁ prabhāṣeta
kim āsīta vrajeta kim
]

śrī-bhagavān uvāca
\`v 55 [
prajahāti yadā kāmān
sarvān pārtha mano-gatān
ātmany evātmanā tuṣṭaḥ
sthita-prajñas tadocyate
]

\`v 56 [
duḥkheṣv anudvigna-manāḥ
sukheṣu vigata-spṛhaḥ
vīta-rāga-bhaya-krodhaḥ
sthita-dhīr munir ucyate
]

\`v 57 [
yaḥ sarvatrānabhisnehas
tat tat prāpya śubhāśubham
nābhinandati na dveṣṭi
tasya prajñā pratiṣṭhitā
]

\`v 58 [
yadā saṁharate cāyaṁ
kūrmo ’ṅgānīva sarvaśaḥ
indriyāṇīndriyārthebhyas
tasya prajñā pratiṣṭhitā
]

\`v 59 [
viṣayā vinivartante
nirāhārasya dehinaḥ
rasa-varjaṁ raso ’py asya
paraṁ dṛṣṭvā nivartate
]

\`v 60 [
yatato hy api kaunteya
puruṣasya vipaścitaḥ
indriyāṇi pramāthīni
haranti prasabhaṁ manaḥ
]

\`v 61 [
tāni sarvāṇi saṁyamya
yukta āsīta mat-paraḥ
vaśe hi yasyendriyāṇi
tasya prajñā pratiṣṭhitā
]

\`v 62 [
dhyāyato viṣayān puṁsaḥ
saṅgas teṣūpajāyate
saṅgāt sañjāyate kāmaḥ
kāmāt krodho ’bhijāyate
]

\`v 63 [
krodhād bhavati sammohaḥ
sammohāt smṛti-vibhramaḥ
smṛti-bhraṁśād buddhi-nāśo
buddhi-nāśāt praṇaśyati
]

\`v 64 [
rāga-dveṣa-vimuktais tu
viṣayān indriyaiś caran
ātma-vaśyair vidheyātmā
prasādam adhigacchati
]

\`v 65 [
prasāde sarva-duḥkhānāṁ
hānir asyopajāyate
prasanna-cetaso hy āśu
buddhiḥ paryavatiṣṭhate
]

\`v 66 [
nāsti buddhir ayuktasya
na cāyuktasya bhāvanā
na cābhāvayataḥ śāntir
aśāntasya kutaḥ sukham
]

\`v 67 [
indriyāṇāṁ hi caratāṁ
yan mano ’nuvidhīyate
tad asya harati prajñāṁ
vāyur nāvam ivāmbhasi
]

\`v 68 [
tasmād yasya mahā-bāho
nigṛhītāni sarvaśaḥ
indriyāṇīndriyārthebhyas
tasya prajñā pratiṣṭhitā
]

\`v 69 [
yā niśā sarva-bhūtānāṁ
tasyāṁ jāgarti saṁyamī
yasyāṁ jāgrati bhūtāni
sā niśā paśyato muneḥ
]

\`v 70 [
āpūryamāṇam acala-pratiṣṭhaṁ
samudram āpaḥ praviśanti yadvat
tadvat kāmā yaṁ praviśanti sarve
sa śāntim āpnoti na kāma-kāmī
]

\`v 71 [
vihāya kāmān yaḥ sarvān
pumāṁś carati niḥspṛhaḥ
nirmamo nirahaṅkāraḥ
sa śāntim adhigacchati
]

\`v 72 [
eṣā brāhmī sthitiḥ pārtha
naināṁ prāpya vimuhyati
sthitvāsyām anta-kāle ’pi
brahma-nirvāṇam ṛcchati
]
`,"content/iast/3.vy":`\`set context { chapter.title = "Karma-yogaḥ" }

arjuna uvāca
\`v 1 [
jyāyasī cet karmaṇas te
matā buddhir janārdana
tat kiṁ karmaṇi ghore māṁ
niyojayasi keśava
]

\`v 2 [
vyāmiśreṇeva vākyena
buddhiṁ mohayasīva me
tad ekaṁ vada niścitya
yena śreyo ’ham āpnuyām
]

śrī-bhagavān uvāca
\`v 3 [
loke ’smin dvi-vidhā niṣṭhā
purā proktā mayānagha
jñāna-yogena sāṅkhyānāṁ
karma-yogena yoginām
]

\`v 4 [
na karmaṇām anārambhān
naiṣkarmyaṁ puruṣo ’śnute
na ca sannyasanād eva
siddhiṁ samadhigacchati
]

\`v 5 [
na hi kaścit kṣaṇam api
jātu tiṣṭhaty akarma-kṛt
kāryate hy avaśaḥ karma
sarvaḥ prakṛti-jair guṇaiḥ
]

\`v 6 [
karmendriyāṇi saṁyamya
ya āste manasā smaran
indriyārthān vimūḍhātmā
mithyācāraḥ sa ucyate
]

\`v 7 [
yas tv indriyāṇi manasā
niyamyārabhate ’rjuna
karmendriyaiḥ karma-yogam
asaktaḥ sa viśiṣyate
]

\`v 8 [
niyataṁ kuru karma tvaṁ
karma jyāyo hy akarmaṇaḥ
śarīra-yātrāpi ca te
na prasidhyed akarmaṇaḥ
]

\`v 9 [
yajñārthāt karmaṇo ’nyatra
loko ’yaṁ karma-bandhanaḥ
tad-arthaṁ karma kaunteya
mukta-saṅgaḥ samācara
]

\`v 10 [
saha-yajñāḥ prajāḥ sṛṣṭvā
purovāca prajāpatiḥ
anena prasaviṣyadhvam
eṣa vo ’stv iṣṭa-kāma-dhuk
]

\`v 11 [
devān bhāvayatānena
te devā bhāvayantu vaḥ
parasparaṁ bhāvayantaḥ
śreyaḥ param avāpsyatha
]

\`v 12 [
iṣṭān bhogān hi vo devā
dāsyante yajña-bhāvitāḥ
tair dattān apradāyaibhyo
yo bhuṅkte stena eva saḥ
]

\`v 13 [
yajña-śiṣṭāśinaḥ santo
mucyante sarva-kilbiṣaiḥ
bhuñjate te tv aghaṁ pāpā
ye pacanty ātma-kāraṇāt
]

\`v 14 [
annād bhavanti bhūtāni
parjanyād anna-sambhavaḥ
yajñād bhavati parjanyo
yajñaḥ karma-samudbhavaḥ
]

\`v 15 [
karma brahmodbhavaṁ viddhi
brahmākṣara-samudbhavam
tasmāt sarva-gataṁ brahma
nityaṁ yajñe pratiṣṭhitam
]

\`v 16 [
evaṁ pravartitaṁ cakraṁ
nānuvartayatīha yaḥ
aghāyur indriyārāmo
moghaṁ pārtha sa jīvati
]

\`v 17 [
yas tv ātma-ratir eva syād
ātma-tṛptaś ca mānavaḥ
ātmany eva ca santuṣṭas
tasya kāryaṁ na vidyate
]

\`v 18 [
naiva tasya kṛtenārtho
nākṛteneha kaścana
na cāsya sarva-bhūteṣu
kaścid artha-vyapāśrayaḥ
]

\`v 19 [
tasmād asaktaḥ satataṁ
kāryaṁ karma samācara
asakto hy ācaran karma
param āpnoti pūruṣaḥ
]

\`v 20 [
karmaṇaiva hi saṁsiddhim
āsthitā janakādayaḥ
loka-saṅgraham evāpi
sampaśyan kartum arhasi
]

\`v 21 [
yad yad ācarati śreṣṭhas
tat tad evetaro janaḥ
sa yat pramāṇaṁ kurute
lokas tad anuvartate
]

\`v 22 [
na me pārthāsti kartavyaṁ
triṣu lokeṣu kiñcana
nānavāptam avāptavyaṁ
varta eva ca karmaṇi
]

\`v 23 [
yadi hy ahaṁ na varteyaṁ
jātu karmaṇy atandritaḥ
mama vartmānuvartante
manuṣyāḥ pārtha sarvaśaḥ
]

\`v 24 [
utsīdeyur ime lokā
na kuryāṁ karma ced aham
saṅkarasya ca kartā syām
upahanyām imāḥ prajāḥ
]

\`v 25 [
saktāḥ karmaṇy avidvāṁso
yathā kurvanti bhārata
kuryād vidvāṁs tathāsaktaś
cikīrṣur loka-saṅgraham
]

\`v 26 [
na buddhi-bhedaṁ janayed
ajñānāṁ karma-saṅginām
joṣayet sarva-karmāṇi
vidvān yuktaḥ samācaran
]

\`v 27 [
prakṛteḥ kriyamāṇāni
guṇaiḥ karmāṇi sarvaśaḥ
ahaṅkāra-vimūḍhātmā
kartāham iti manyate
]

\`v 28 [
tattva-vit tu mahā-bāho
guṇa-karma-vibhāgayoḥ
guṇā guṇeṣu vartanta
iti matvā na sajjate
]

\`v 29 [
prakṛter guṇa-sammūḍhāḥ
sajjante guṇa-karmasu
tān akṛtsna-vido mandān
kṛtsna-vin na vicālayet
]

\`v 30 [
mayi sarvāṇi karmāṇi
sannyasyādhyātma-cetasā
nirāśīr nirmamo bhūtvā
yudhyasva vigata-jvaraḥ
]

\`v 31 [
ye me matam idaṁ nityam
anutiṣṭhanti mānavāḥ
śraddhāvanto ’nasūyanto
mucyante te ’pi karmabhiḥ
]

\`v 32 [
ye tv etad abhyasūyanto
nānutiṣṭhanti me matam
sarva-jñāna-vimūḍhāṁs tān
viddhi naṣṭān acetasaḥ
]

\`v 33 [
sadṛśaṁ ceṣṭate svasyāḥ
prakṛter jñānavān api
prakṛtiṁ yānti bhūtāni
nigrahaḥ kiṁ kariṣyati
]

\`v 34 [
indriyasyendriyasyārthe
rāga-dveṣau vyavasthitau
tayor na vaśam āgacchet
tau hy asya paripanthinau
]

\`v 35 [
śreyān sva-dharmo viguṇaḥ
para-dharmāt sv-anuṣṭhitāt
sva-dharme nidhanaṁ śreyaḥ
para-dharmo bhayāvahaḥ
]

arjuna uvāca
\`v 36 [
atha kena prayukto ’yaṁ
pāpaṁ carati pūruṣaḥ
anicchann api vārṣṇeya
balād iva niyojitaḥ
]

śrī-bhagavān uvāca
\`v 37 [
kāma eṣa krodha eṣa
rajo-guṇa-samudbhavaḥ
mahāśano mahā-pāpmā
viddhy enam iha vairiṇam
]

\`v 38 [
dhūmenāvriyate vahnir
yathādarśo malena ca
yatholbenāvṛto garbhas
tathā tenedam āvṛtam
]

\`v 39 [
āvṛtaṁ jñānam etena
jñānino nitya-vairiṇā
kāma-rūpeṇa kaunteya
duṣpūreṇānalena ca
]

\`v 40 [
indriyāṇi mano buddhir
asyādhiṣṭhānam ucyate
etair vimohayaty eṣa
jñānam āvṛtya dehinam
]

\`v 41 [
tasmāt tvam indriyāṇy ādau
niyamya bharatarṣabha
pāpmānaṁ prajahi hy enaṁ
jñāna-vijñāna-nāśanam
]

\`v 42 [
indriyāṇi parāṇy āhur
indriyebhyaḥ paraṁ manaḥ
manasas tu parā buddhir
yo buddheḥ paratas tu saḥ
]

\`v 43 [
evaṁ buddheḥ paraṁ buddhvā
saṁstabhyātmānam ātmanā
jahi śatruṁ mahā-bāho
kāma-rūpaṁ durāsadam
]
`,"content/iast/4.vy":`\`set context { chapter.title = "Jñāna-karma-sannyāsa-yogaḥ" }

śrī-bhagavān uvāca
\`v 1 [
imaṁ vivasvate yogaṁ
proktavān aham avyayam
vivasvān manave prāha
manur ikṣvākave ’bravīt
]

\`v 2 [
evaṁ paramparā-prāptam
imaṁ rājarṣayo viduḥ
sa kāleneha mahatā
yogo naṣṭaḥ paran-tapa
]

\`v 3 [
sa evāyaṁ mayā te ’dya
yogaḥ proktaḥ purātanaḥ
bhakto ’si me sakhā ceti
rahasyaṁ hy etad uttamam
]

arjuna uvāca
\`v 4 [
aparaṁ bhavato janma
paraṁ janma vivasvataḥ
katham etad vijānīyāṁ
tvam ādau proktavān iti
]

śrī-bhagavān uvāca
\`v 5 [
bahūni me vyatītāni
janmāni tava cārjuna
tāny ahaṁ veda sarvāṇi
na tvaṁ vettha paran-tapa
]

\`v 6 [
ajo ’pi sann avyayātmā
bhūtānām īśvaro ’pi san
prakṛtiṁ svām adhiṣṭhāya
sambhavāmy ātma-māyayā
]

\`v 7 [
yadā yadā hi dharmasya
glānir bhavati bhārata
abhyutthānam adharmasya
tadātmānaṁ sṛjāmy aham
]

\`v 8 [
paritrāṇāya sādhūnāṁ
vināśāya ca duṣkṛtām
dharma-saṁsthāpanārthāya
sambhavāmi yuge yuge
]

\`v 9 [
janma karma ca me divyam
evaṁ yo vetti tattvataḥ
tyaktvā dehaṁ punar janma
naiti mām eti so ’rjuna
]

\`v 10 [
vīta-rāga-bhaya-krodhā
man-mayā mām upāśritāḥ
bahavo jñāna-tapasā
pūtā mad-bhāvam āgatāḥ
]

\`v 11 [
ye yathā māṁ prapadyante
tāṁs tathaiva bhajāmy aham
mama vartmānuvartante
manuṣyāḥ pārtha sarvaśaḥ
]

\`v 12 [
kāṅkṣantaḥ karmaṇāṁ siddhiṁ
yajanta iha devatāḥ
kṣipraṁ hi mānuṣe loke
siddhir bhavati karma-jā
]

\`v 13 [
cātur-varṇyaṁ mayā sṛṣṭaṁ
guṇa-karma-vibhāgaśaḥ
tasya kartāram api māṁ
viddhy akartāram avyayam
]

\`v 14 [
na māṁ karmāṇi limpanti
na me karma-phale spṛhā
iti māṁ yo ’bhijānāti
karmabhir na sa badhyate
]

\`v 15 [
evaṁ jñātvā kṛtaṁ karma
pūrvair api mumukṣubhiḥ
kuru karmaiva tasmāt tvaṁ
pūrvaiḥ pūrva-taraṁ kṛtam
]

\`v 16 [
kiṁ karma kim akarmeti
kavayo ’py atra mohitāḥ
tat te karma pravakṣyāmi
yaj jñātvā mokṣyase ’śubhāt
]

\`v 17 [
karmaṇo hy api boddhavyaṁ
boddhavyaṁ ca vikarmaṇaḥ
akarmaṇaś ca boddhavyaṁ
gahanā karmaṇo gatiḥ
]

\`v 18 [
karmaṇy akarma yaḥ paśyed
akarmaṇi ca karma yaḥ
sa buddhimān manuṣyeṣu
sa yuktaḥ kṛtsna-karma-kṛt
]

\`v 19 [
yasya sarve samārambhāḥ
kāma-saṅkalpa-varjitāḥ
jñānāgni-dagdha-karmāṇaṁ
tam āhuḥ paṇḍitaṁ budhāḥ
]

\`v 20 [
tyaktvā karma-phalāsaṅgaṁ
nitya-tṛpto nirāśrayaḥ
karmaṇy abhipravṛtto ’pi
naiva kiñcit karoti saḥ
]

\`v 21 [
nirāśīr yata-cittātmā
tyakta-sarva-parigrahaḥ
śārīraṁ kevalaṁ karma
kurvan nāpnoti kilbiṣam
]

\`v 22 [
yadṛcchā-lābha-santuṣṭo
dvandvātīto vimatsaraḥ
samaḥ siddhāv asiddhau ca
kṛtvāpi na nibadhyate
]

\`v 23 [
gata-saṅgasya muktasya
jñānāvasthita-cetasaḥ
yajñāyācarataḥ karma
samagraṁ pravilīyate
]

\`v 24 [
brahmārpaṇaṁ brahma havir
brahmāgnau brahmaṇā hutam
brahmaiva tena gantavyaṁ
brahma-karma-samādhinā
]

\`v 25 [
daivam evāpare yajñaṁ
yoginaḥ paryupāsate
brahmāgnāv apare yajñaṁ
yajñenaivopajuhvati
]

\`v 26 [
śrotrādīnīndriyāṇy anye
saṁyamāgniṣu juhvati
śabdādīn viṣayān anya
indriyāgniṣu juhvati
]

\`v 27 [
sarvāṇīndriya-karmāṇi
prāṇa-karmāṇi cāpare
ātma-saṁyama-yogāgnau
juhvati jñāna-dīpite
]

\`v 28 [
dravya-yajñās tapo-yajñā
yoga-yajñās tathāpare
svādhyāya-jñāna-yajñāś ca
yatayaḥ saṁśita-vratāḥ
]

\`v 29 [
apāne juhvati prāṇaṁ
prāṇe ’pānaṁ tathāpare
prāṇāpāna-gatī ruddhvā
prāṇāyāma-parāyaṇāḥ
apare niyatāhārāḥ
prāṇān prāṇeṣu juhvati
]

\`v 30 [
sarve ’py ete yajña-vido
yajña-kṣapita-kalmaṣāḥ
yajña-śiṣṭāmṛta-bhujo
yānti brahma sanātanam
]

\`v 31 [
nāyaṁ loko ’sty ayajñasya
kuto ’nyaḥ kuru-sattama
]

\`v 32 [
evaṁ bahu-vidhā yajñā
vitatā brahmaṇo mukhe
karma-jān viddhi tān sarvān
evaṁ jñātvā vimokṣyase
]

\`v 33 [
śreyān dravya-mayād yajñāj
jñāna-yajñaḥ paran-tapa
sarvaṁ karmākhilaṁ pārtha
jñāne parisamāpyate
]

\`v 34 [
tad viddhi praṇipātena
paripraśnena sevayā
upadekṣyanti te jñānaṁ
jñāninas tattva-darśinaḥ
]

\`v 35 [
yaj jñātvā na punar moham
evaṁ yāsyasi pāṇḍava
yena bhūtāny aśeṣāṇi
drakṣyasy ātmany atho mayi
]

\`v 36 [
api ced asi pāpebhyaḥ
sarvebhyaḥ pāpa-kṛt-tamaḥ
sarvaṁ jñāna-plavenaiva
vṛjinaṁ santariṣyasi
]

\`v 37 [
yathaidhāṁsi samiddho ’gnir
bhasma-sāt kurute ’rjuna
jñānāgniḥ sarva-karmāṇi
bhasma-sāt kurute tathā
]

\`v 38 [
na hi jñānena sadṛśaṁ
pavitram iha vidyate
tat svayaṁ yoga-saṁsiddhaḥ
kālenātmani vindati
]

\`v 39 [
śraddhāvāḻ labhate jñānaṁ
tat-paraḥ saṁyatendriyaḥ
jñānaṁ labdhvā parāṁ śāntim
acireṇādhigacchati
]

\`v 40 [
ajñaś cāśraddadhānaś ca
saṁśayātmā vinaśyati
nāyaṁ loko ’sti na paro
na sukhaṁ saṁśayātmanaḥ
]

\`v 41 [
yoga-sannyasta-karmāṇaṁ
jñāna-sañchinna-saṁśayam
ātmavantaṁ na karmāṇi
nibadhnanti dhanañ-jaya
]

\`v 42 [
tasmād ajñāna-sambhūtaṁ
hṛt-sthaṁ jñānāsinātmanaḥ
chittvainaṁ saṁśayaṁ yogam
ātiṣṭhottiṣṭha bhārata
]
`,"content/iast/5.vy":`\`set context { chapter.title = "Karma-sannyāsa-yogaḥ" }

arjuna uvāca
\`v 1 [
sannyāsaṁ karmaṇāṁ kṛṣṇa
punar yogaṁ ca śaṁsasi
yac chreya etayor ekaṁ
tan me brūhi su-niścitam
]

śrī-bhagavān uvāca
\`v 2 [
sannyāsaḥ karma-yogaś ca
niḥśreyasa-karāv ubhau
tayos tu karma-sannyāsāt
karma-yogo viśiṣyate
]

\`v 3 [
jñeyaḥ sa nitya-sannyāsī
yo na dveṣṭi na kāṅkṣati
nirdvandvo hi mahā-bāho
sukhaṁ bandhāt pramucyate
]

\`v 4 [
sāṅkhya-yogau pṛthag bālāḥ
pravadanti na paṇḍitāḥ
ekam apy āsthitaḥ samyag
ubhayor vindate phalam
]

\`v 5 [
yat sāṅkhyaiḥ prāpyate sthānaṁ
tad yogair api gamyate
ekaṁ sāṅkhyaṁ ca yogaṁ ca
yaḥ paśyati sa paśyati
]

\`v 6 [
sannyāsas tu mahā-bāho
duḥkham āptum ayogataḥ
yoga-yukto munir brahma
na cireṇādhigacchati
]

\`v 7 [
yoga-yukto viśuddhātmā
vijitātmā jitendriyaḥ
sarva-bhūtātma-bhūtātmā
kurvann api na lipyate
]

\`v 8 [
naiva kiñcit karomīti
yukto manyeta tattva-vit
paśyañ śṛṇvan spṛśañ jighrann
aśnan gacchan svapañ śvasan
]

\`v 9 [
pralapan visṛjan gṛhṇann
unmiṣan nimiṣann api
indriyāṇīndriyārtheṣu
vartanta iti dhārayan
]

\`v 10 [
brahmaṇy ādhāya karmāṇi
saṅgaṁ tyaktvā karoti yaḥ
lipyate na sa pāpena
padma-patram ivāmbhasā
]

\`v 11 [
kāyena manasā buddhyā
kevalair indriyair api
yoginaḥ karma kurvanti
saṅgaṁ tyaktvātma-śuddhaye
]

\`v 12 [
yuktaḥ karma-phalaṁ tyaktvā
śāntim āpnoti naiṣṭhikīm
ayuktaḥ kāma-kāreṇa
phale sakto nibadhyate
]

\`v 13 [
sarva-karmāṇi manasā
sannyasyāste sukhaṁ vaśī
nava-dvāre pure dehī
naiva kurvan na kārayan
]

\`v 14 [
na kartṛtvaṁ na karmāṇi
lokasya sṛjati prabhuḥ
na karma-phala-saṁyogaṁ
svabhāvas tu pravartate
]

\`v 15 [
nādatte kasyacit pāpaṁ
na caiva sukṛtaṁ vibhuḥ
ajñānenāvṛtaṁ jñānaṁ
tena muhyanti jantavaḥ
]

\`v 16 [
jñānena tu tad ajñānaṁ
yeṣāṁ nāśitam ātmanaḥ
teṣām āditya-vaj jñānaṁ
prakāśayati tat param
]

\`v 17 [
tad-buddhayas tad-ātmānas
tan-niṣṭhās tat-parāyaṇāḥ
gacchanty apunar-āvṛttiṁ
jñāna-nirdhūta-kalmaṣāḥ
]

\`v 18 [
vidyā-vinaya-sampanne
brāhmaṇe gavi hastini
śuni caiva śva-pāke ca
paṇḍitāḥ sama-darśinaḥ
]

\`v 19 [
ihaiva tair jitaḥ sargo
yeṣāṁ sāmye sthitaṁ manaḥ
nirdoṣaṁ hi samaṁ brahma
tasmād brahmaṇi te sthitāḥ
]

\`v 20 [
na prahṛṣyet priyaṁ prāpya
nodvijet prāpya cāpriyam
sthira-buddhir asammūḍho
brahma-vid brahmaṇi sthitaḥ
]

\`v 21 [
bāhya-sparśeṣv asaktātmā
vindaty ātmani yat sukham
sa brahma-yoga-yuktātmā
sukham akṣayam aśnute
]

\`v 22 [
ye hi saṁsparśa-jā bhogā
duḥkha-yonaya eva te
ādy-antavantaḥ kaunteya
na teṣu ramate budhaḥ
]

\`v 23 [
śaknotīhaiva yaḥ soḍhuṁ
prāk śarīra-vimokṣaṇāt
kāma-krodhodbhavaṁ vegaṁ
sa yuktaḥ sa sukhī naraḥ
]

\`v 24 [
yo ’ntaḥ-sukho ’ntar-ārāmas
tathāntar-jyotir eva yaḥ
sa yogī brahma-nirvāṇaṁ
brahma-bhūto ’dhigacchati
]

\`v 25 [
labhante brahma-nirvāṇam
ṛṣayaḥ kṣīṇa-kalmaṣāḥ
chinna-dvaidhā yatātmānaḥ
sarva-bhūta-hite ratāḥ
]

\`v 26 [
kāma-krodha-vimuktānāṁ
yatīnāṁ yata-cetasām
abhito brahma-nirvāṇaṁ
vartate viditātmanām
]

\`v 27 [
sparśān kṛtvā bahir bāhyāṁś
cakṣuś caivāntare bhruvoḥ
prāṇāpānau samau kṛtvā
nāsābhyantara-cāriṇau
]

\`v 28 [
yatendriya-mano-buddhir
munir mokṣa-parāyaṇaḥ
vigatecchā-bhaya-krodho
yaḥ sadā mukta eva saḥ
]

\`v 29 [
bhoktāraṁ yajña-tapasāṁ
sarva-loka-maheśvaram
suhṛdaṁ sarva-bhūtānāṁ
jñātvā māṁ śāntim ṛcchati
]
`,"content/iast/6.vy":`\`set context { chapter.title = "Ātma-saṃyama-yogaḥ" }

śrī-bhagavān uvāca
\`v 1 [
anāśritaḥ karma-phalaṁ
kāryaṁ karma karoti yaḥ
sa sannyāsī ca yogī ca
na niragnir na cākriyaḥ
]

\`v 2 [
yaṁ sannyāsam iti prāhur
yogaṁ taṁ viddhi pāṇḍava
na hy asannyasta-saṅkalpo
yogī bhavati kaścana
]

\`v 3 [
ārurukṣor muner yogaṁ
karma kāraṇam ucyate
yogārūḍhasya tasyaiva
śamaḥ kāraṇam ucyate
]

\`v 4 [
yadā hi nendriyārtheṣu
na karmasv anuṣajjate
sarva-saṅkalpa-sannyāsī
yogārūḍhas tadocyate
]

\`v 5 [
uddhared ātmanātmānaṁ
nātmānam avasādayet
ātmaiva hy ātmano bandhur
ātmaiva ripur ātmanaḥ
]

\`v 6 [
bandhur ātmātmanas tasya
yenātmaivātmanā jitaḥ
anātmanas tu śatrutve
vartetātmaiva śatru-vat
]

\`v 7 [
jitātmanaḥ praśāntasya
paramātmā samāhitaḥ
śītoṣṇa-sukha-duḥkheṣu
tathā mānāpamānayoḥ
]

\`v 8 [
jñāna-vijñāna-tṛptātmā
kūṭa-stho vijitendriyaḥ
yukta ity ucyate yogī
sama-loṣṭrāśma-kāñcanaḥ
]

\`v 9 [
suhṛn-mitrāry-udāsīna-
madhyastha-dveṣya-bandhuṣu
sādhuṣv api ca pāpeṣu
sama-buddhir viśiṣyate
]

\`v 10 [
yogī yuñjīta satatam
ātmānaṁ rahasi sthitaḥ
ekākī yata-cittātmā
nirāśīr aparigrahaḥ
]

\`v 11 [
śucau deśe pratiṣṭhāpya
sthiram āsanam ātmanaḥ
nāty-ucchritaṁ nāti-nīcaṁ
cailājina-kuśottaram
]

\`v 12 [
tatraikāgraṁ manaḥ kṛtvā
yata-cittendriya-kriyaḥ
upaviśyāsane yuñjyād
yogam ātma-viśuddhaye
]

\`v 13 [
samaṁ kāya-śiro-grīvaṁ
dhārayann acalaṁ sthiraḥ
samprekṣya nāsikāgraṁ svaṁ
diśaś cānavalokayan
]

\`v 14 [
praśāntātmā vigata-bhīr
brahmacāri-vrate sthitaḥ
manaḥ saṁyamya mac-citto
yukta āsīta mat-paraḥ
]

\`v 15 [
yuñjann evaṁ sadātmānaṁ
yogī niyata-mānasaḥ
śāntiṁ nirvāṇa-paramāṁ
mat-saṁsthām adhigacchati
]

\`v 16 [
nāty-aśnatas tu yogo ’sti
na caikāntam anaśnataḥ
na cāti-svapna-śīlasya
jāgrato naiva cārjuna
]

\`v 17 [
yuktāhāra-vihārasya
yukta-ceṣṭasya karmasu
yukta-svapnāvabodhasya
yogo bhavati duḥkha-hā
]

\`v 18 [
yadā viniyataṁ cittam
ātmany evāvatiṣṭhate
nispṛhaḥ sarva-kāmebhyo
yukta ity ucyate tadā
]

\`v 19 [
yathā dīpo nivāta-stho
neṅgate sopamā smṛtā
yogino yata-cittasya
yuñjato yogam ātmanaḥ
]

\`v 20 [
yatroparamate cittaṁ
niruddhaṁ yoga-sevayā
yatra caivātmanātmānaṁ
paśyann ātmani tuṣyati
]

\`v 21 [
sukham ātyantikaṁ yat tad
buddhi-grāhyam atīndriyam
vetti yatra na caivāyaṁ
sthitaś calati tattvataḥ
]

\`v 22 [
yaṁ labdhvā cāparaṁ lābhaṁ
manyate nādhikaṁ tataḥ
yasmin sthito na duḥkhena
guruṇāpi vicālyate
]

\`v 23 [
taṁ vidyād duḥkha-saṁyoga-
viyogaṁ yoga-saṁjñitam
]

\`v 24 [
sa niścayena yoktavyo
yogo ’nirviṇṇa-cetasā
saṅkalpa-prabhavān kāmāṁs
tyaktvā sarvān aśeṣataḥ

manasaivendriya-grāmaṁ
viniyamya samantataḥ
]

\`v 25 [
śanaiḥ śanair uparamed
buddhyā dhṛti-gṛhītayā
ātma-saṁsthaṁ manaḥ kṛtvā
na kiñcid api cintayet
]

\`v 26 [
yato yato niścalati
manaś cañcalam asthiram
tatas tato niyamyaitad
ātmany eva vaśaṁ nayet
]

\`v 27 [
praśānta-manasaṁ hy enaṁ
yoginaṁ sukham uttamam
upaiti śānta-rajasaṁ
brahma-bhūtam akalmaṣam
]

\`v 28 [
yuñjann evaṁ sadātmānaṁ
yogī vigata-kalmaṣaḥ
sukhena brahma-saṁsparśam
atyantaṁ sukham aśnute
]

\`v 29 [
sarva-bhūta-stham ātmānaṁ
sarva-bhūtāni cātmani
īkṣate yoga-yuktātmā
sarvatra sama-darśanaḥ
]

\`v 30 [
yo māṁ paśyati sarvatra
sarvaṁ ca mayi paśyati
tasyāhaṁ na praṇaśyāmi
sa ca me na praṇaśyati
]

\`v 31 [
sarva-bhūta-sthitaṁ yo māṁ
bhajaty ekatvam āsthitaḥ
sarvathā vartamāno ’pi
sa yogī mayi vartate
]

\`v 32 [
ātmaupamyena sarvatra
samaṁ paśyati yo ’rjuna
sukhaṁ vā yadi vā duḥkhaṁ
sa yogī paramo mataḥ
]

arjuna uvāca
\`v 33 [
yo ’yaṁ yogas tvayā proktaḥ
sāmyena madhusūdana
etasyāhaṁ na paśyāmi
cañcalatvāt sthitiṁ sthirām
]

\`v 34 [
cañcalaṁ hi manaḥ kṛṣṇa
pramāthi balavad dṛḍham
tasyāhaṁ nigrahaṁ manye
vāyor iva su-duṣkaram
]

śrī-bhagavān uvāca
\`v 35 [
asaṁśayaṁ mahā-bāho
mano durnigrahaṁ calam
abhyāsena tu kaunteya
vairāgyeṇa ca gṛhyate
]

\`v 36 [
asaṁyatātmanā yogo
duṣprāpa iti me matiḥ
vaśyātmanā tu yatatā
śakyo ’vāptum upāyataḥ
]

arjuna uvāca
\`v 37 [
ayatiḥ śraddhayopeto
yogāc calita-mānasaḥ
aprāpya yoga-saṁsiddhiṁ
kāṁ gatiṁ kṛṣṇa gacchati
]

\`v 38 [
kaccin nobhaya-vibhraṣṭaś
chinnābhram iva naśyati
apratiṣṭho mahā-bāho
vimūḍho brahmaṇaḥ pathi
]

\`v 39 [
etan me saṁśayaṁ kṛṣṇa
chettum arhasy aśeṣataḥ
tvad-anyaḥ saṁśayasyāsya
chettā na hy upapadyate
]

śrī-bhagavān uvāca
\`v 40 [
pārtha naiveha nāmutra
vināśas tasya vidyate
na hi kalyāṇa-kṛt kaścid
durgatiṁ tāta gacchati
]

\`v 41 [
prāpya puṇya-kṛtāṁ lokān
uṣitvā śāśvatīḥ samāḥ
śucīnāṁ śrīmatāṁ gehe
yoga-bhraṣṭo ’bhijāyate
]

\`v 42 [
atha vā yoginām eva
kule bhavati dhīmatām
etad dhi durlabha-taraṁ
loke janma yad īdṛśam
]

\`v 43 [
tatra taṁ buddhi-saṁyogaṁ
labhate paurva-dehikam
yatate ca tato bhūyaḥ
saṁsiddhau kuru-nandana
]

\`v 44 [
pūrvābhyāsena tenaiva
hriyate hy avaśo ’pi saḥ
jijñāsur api yogasya
śabda-brahmātivartate
]

\`v 45 [
prayatnād yatamānas tu
yogī saṁśuddha-kilbiṣaḥ
aneka-janma-saṁsiddhas
tato yāti parāṁ gatim
]

\`v 46 [
tapasvibhyo ’dhiko yogī
jñānibhyo ’pi mato ’dhikaḥ
karmibhyaś cādhiko yogī
tasmād yogī bhavārjuna
]

\`v 47 [
yoginām api sarveṣāṁ
mad-gatenāntar-ātmanā
śraddhāvān bhajate yo māṁ
sa me yukta-tamo mataḥ
]
`,"content/iast/7.vy":`\`set context { chapter.title = "Jñāna-vijñāna-yogaḥ" }

śrī-bhagavān uvāca
\`v 1 [
mayy āsakta-manāḥ pārtha
yogaṁ yuñjan mad-āśrayaḥ
asaṁśayaṁ samagraṁ māṁ
yathā jñāsyasi tac chṛṇu
]

\`v 2 [
jñānaṁ te ’haṁ sa-vijñānam
idaṁ vakṣyāmy aśeṣataḥ
yaj jñātvā neha bhūyo ’nyaj
jñātavyam avaśiṣyate
]

\`v 3 [
manuṣyāṇāṁ sahasreṣu
kaścid yatati siddhaye
yatatām api siddhānāṁ
kaścin māṁ vetti tattvataḥ
]

\`v 4 [
bhūmir āpo ’nalo vāyuḥ
khaṁ mano buddhir eva ca
ahaṅkāra itīyaṁ me
bhinnā prakṛtir aṣṭadhā
]

\`v 5 [
apareyam itas tv anyāṁ
prakṛtiṁ viddhi me parām
jīva-bhūtāṁ mahā-bāho
yayedaṁ dhāryate jagat
]

\`v 6 [
etad-yonīni bhūtāni
sarvāṇīty upadhāraya
ahaṁ kṛtsnasya jagataḥ
prabhavaḥ pralayas tathā
]

\`v 7 [
mattaḥ parataraṁ nānyat
kiñcid asti dhanañ-jaya
mayi sarvam idaṁ protaṁ
sūtre maṇi-gaṇā iva
]

\`v 8 [
raso ’ham apsu kaunteya
prabhāsmi śaśi-sūryayoḥ
praṇavaḥ sarva-vedeṣu
śabdaḥ khe pauruṣaṁ nṛṣu
]

\`v 9 [
puṇyo gandhaḥ pṛthivyāṁ ca
tejaś cāsmi vibhāvasau
jīvanaṁ sarva-bhūteṣu
tapaś cāsmi tapasviṣu
]

\`v 10 [
bījaṁ māṁ sarva-bhūtānāṁ
viddhi pārtha sanātanam
buddhir buddhimatām asmi
tejas tejasvinām aham
]

\`v 11 [
balaṁ balavatāṁ cāhaṁ
kāma-rāga-vivarjitam
dharmāviruddho bhūteṣu
kāmo ’smi bharatarṣabha
]

\`v 12 [
ye caiva sāttvikā bhāvā
rājasās tāmasāś ca ye
matta eveti tān viddhi
na tv ahaṁ teṣu te mayi
]

\`v 13 [
tribhir guṇa-mayair bhāvair
ebhiḥ sarvam idaṁ jagat
mohitaṁ nābhijānāti
mām ebhyaḥ param avyayam
]

\`v 14 [
daivī hy eṣā guṇa-mayī
mama māyā duratyayā
mām eva ye prapadyante
māyām etāṁ taranti te
]

\`v 15 [
na māṁ duṣkṛtino mūḍhāḥ
prapadyante narādhamāḥ
māyayāpahṛta-jñānā
āsuraṁ bhāvam āśritāḥ
]

\`v 16 [
catur-vidhā bhajante māṁ
janāḥ su-kṛtino ’rjuna
ārto jijñāsur arthārthī
jñānī ca bharatarṣabha
]

\`v 17 [
teṣāṁ jñānī nitya-yukta
eka-bhaktir viśiṣyate
priyo hi jñānino ’tyartham
ahaṁ sa ca mama priyaḥ
]

\`v 18 [
udārāḥ sarva evaite
jñānī tv ātmaiva me matam
āsthitaḥ sa hi yuktātmā
mām evānuttamāṁ gatim
]

\`v 19 [
bahūnāṁ janmanām ante
jñānavān māṁ prapadyate
vāsudevaḥ sarvam iti
sa mahātmā su-durlabhaḥ
]

\`v 20 [
kāmais tais tair hṛta-jñānāḥ
prapadyante ’nya-devatāḥ
taṁ taṁ niyamam āsthāya
prakṛtyā niyatāḥ svayā
]

\`v 21 [
yo yo yāṁ yāṁ tanuṁ bhaktaḥ
śraddhayārcitum icchati
tasya tasyācalāṁ śraddhāṁ
tām eva vidadhāmy aham
]

\`v 22 [
sa tayā śraddhayā yuktas
tasyārādhanam īhate
labhate ca tataḥ kāmān
mayaiva vihitān hi tān
]

\`v 23 [
antavat tu phalaṁ teṣāṁ
tad bhavaty alpa-medhasām
devān deva-yajo yānti
mad-bhaktā yānti mām api
]

\`v 24 [
avyaktaṁ vyaktim āpannaṁ
manyante mām abuddhayaḥ
paraṁ bhāvam ajānanto
mamāvyayam anuttamam
]

\`v 25 [
nāhaṁ prakāśaḥ sarvasya
yoga-māyā-samāvṛtaḥ
mūḍho ’yaṁ nābhijānāti
loko mām ajam avyayam
]

\`v 26 [
vedāhaṁ samatītāni
vartamānāni cārjuna
bhaviṣyāṇi ca bhūtāni
māṁ tu veda na kaścana
]

\`v 27 [
icchā-dveṣa-samutthena
dvandva-mohena bhārata
sarva-bhūtāni sammohaṁ
sarge yānti paran-tapa
]

\`v 28 [
yeṣāṁ tv anta-gataṁ pāpaṁ
janānāṁ puṇya-karmaṇām
te dvandva-moha-nirmuktā
bhajante māṁ dṛḍha-vratāḥ
]

\`v 29 [
jarā-maraṇa-mokṣāya
mām āśritya yatanti ye
te brahma tad viduḥ kṛtsnam
adhyātmaṁ karma cākhilam
]

\`v 30 [
sādhibhūtādhidaivaṁ māṁ
sādhiyajñaṁ ca ye viduḥ
prayāṇa-kāle ’pi ca māṁ
te vidur yukta-cetasaḥ
]
`,"content/iast/8.vy":`\`set context { chapter.title = "Akṣara-brahma-yogaḥ" }

arjuna uvāca
\`v 1 [
kiṁ tad brahma kim adhyātmaṁ
kiṁ karma puruṣottama
adhibhūtaṁ ca kiṁ proktam
adhidaivaṁ kim ucyate
]

\`v 2 [
adhiyajñaḥ kathaṁ ko ’tra
dehe ’smin madhusūdana
prayāṇa-kāle ca kathaṁ
jñeyo ’si niyatātmabhiḥ
]

śrī-bhagavān uvāca
\`v 3 [
akṣaraṁ brahma paramaṁ
svabhāvo ’dhyātmam ucyate
bhūta-bhāvodbhava-karo
visargaḥ karma-saṁjñitaḥ
]

\`v 4 [
adhibhūtaṁ kṣaro bhāvaḥ
puruṣaś cādhidaivatam
adhiyajño ’ham evātra
dehe deha-bhṛtāṁ vara
]

\`v 5 [
anta-kāle ca mām eva
smaran muktvā kalevaram
yaḥ prayāti sa mad-bhāvaṁ
yāti nāsty atra saṁśayaḥ
]

\`v 6 [
yaṁ yaṁ vāpi smaran bhāvaṁ
tyajaty ante kalevaram
taṁ tam evaiti kaunteya
sadā tad-bhāva-bhāvitaḥ
]

\`v 7 [
tasmāt sarveṣu kāleṣu
mām anusmara yudhya ca
mayy arpita-mano-buddhir
mām evaiṣyasy asaṁśayaḥ
]

\`v 8 [
abhyāsa-yoga-yuktena
cetasā nānya-gāminā
paramaṁ puruṣaṁ divyaṁ
yāti pārthānucintayan
]

\`v 9 [
kaviṁ purāṇam anuśāsitāram
aṇor aṇīyāṁsam anusmared yaḥ
sarvasya dhātāram acintya-rūpam
āditya-varṇaṁ tamasaḥ parastāt
]

\`v 10 [
prayāṇa-kāle manasācalena
bhaktyā yukto yoga-balena caiva
bhruvor madhye prāṇam āveśya samyak
sa taṁ paraṁ puruṣam upaiti divyam
]

\`v 11 [
yad akṣaraṁ veda-vido vadanti
viśanti yad yatayo vīta-rāgāḥ
yad icchanto brahma-caryaṁ caranti
tat te padaṁ saṅgraheṇa pravakṣye
]

\`v 12 [
sarva-dvārāṇi saṁyamya
mano hṛdi nirudhya ca
mūrdhny ādhāyātmanaḥ prāṇam
āsthito yoga-dhāraṇām
]

\`v 13 [
oṁ ity ekākṣaraṁ brahma
vyāharan mām anusmaran
yaḥ prayāti tyajan dehaṁ
sa yāti paramāṁ gatim
]

\`v 14 [
ananya-cetāḥ satataṁ
yo māṁ smarati nityaśaḥ
tasyāhaṁ su-labhaḥ pārtha
nitya-yuktasya yoginaḥ
]

\`v 15 [
mām upetya punar janma
duḥkhālayam aśāśvatam
nāpnuvanti mahātmānaḥ
saṁsiddhiṁ paramāṁ gatāḥ
]

\`v 16 [
ā-brahma-bhuvanāl lokāḥ
punar āvartino ’rjuna
mām upetya tu kaunteya
punar janma na vidyate
]

\`v 17 [
sahasra-yuga-paryantam
ahar yad brahmaṇo viduḥ
rātriṁ yuga-sahasrāntāṁ
te ’ho-rātra-vido janāḥ
]

\`v 18 [
avyaktād vyaktayaḥ sarvāḥ
prabhavanty ahar-āgame
rātry-āgame pralīyante
tatraivāvyakta-saṁjñake
]

\`v 19 [
bhūta-grāmaḥ sa evāyaṁ
bhūtvā bhūtvā pralīyate
rātry-āgame ’vaśaḥ pārtha
prabhavaty ahar-āgame
]

\`v 20 [
paras tasmāt tu bhāvo ’nyo
’vyakto ’vyaktāt sanātanaḥ
yaḥ sa sarveṣu bhūteṣu
naśyatsu na vinaśyati
]

\`v 21 [
avyakto ’kṣara ity uktas
tam āhuḥ paramāṁ gatim
yaṁ prāpya na nivartante
tad dhāma paramaṁ mama
]

\`v 22 [
puruṣaḥ sa paraḥ pārtha
bhaktyā labhyas tv ananyayā
yasyāntaḥ-sthāni bhūtāni
yena sarvam idaṁ tatam
]

\`v 23 [
yatra kāle tv anāvṛttim
āvṛttiṁ caiva yoginaḥ
prayātā yānti taṁ kālaṁ
vakṣyāmi bharatarṣabha
]

\`v 24 [
agnir jyotir ahaḥ śuklaḥ
ṣaṇ-māsā uttarāyaṇam
tatra prayātā gacchanti
brahma brahma-vido janāḥ
]

\`v 25 [
dhūmo rātris tathā kṛṣṇaḥ
ṣaṇ-māsā dakṣiṇāyanam
tatra cāndramasaṁ jyotir
yogī prāpya nivartate
]

\`v 26 [
śukla-kṛṣṇe gatī hy ete
jagataḥ śāśvate mate
ekayā yāty anāvṛttim
anyayāvartate punaḥ
]

\`v 27 [
naite sṛtī pārtha jānan
yogī muhyati kaścana
tasmāt sarveṣu kāleṣu
yoga-yukto bhavārjuna
]

\`v 28 [
vedeṣu yajñeṣu tapaḥsu caiva
dāneṣu yat puṇya-phalaṁ pradiṣṭam
atyeti tat sarvam idaṁ viditvā
yogī paraṁ sthānam upaiti cādyam
]
`,"content/iast/9.vy":`\`set context { chapter.title = "Rāja-vidyā-rāja-guhya-yogaḥ" }

śrī-bhagavān uvāca
\`v 1 [
idaṁ tu te guhya-tamaṁ
pravakṣyāmy anasūyave
jñānaṁ vijñāna-sahitaṁ
yaj jñātvā mokṣyase ’śubhāt
]

\`v 2 [
rāja-vidyā rāja-guhyaṁ
pavitram idam uttamam
pratyakṣāvagamaṁ dharmyaṁ
su-sukhaṁ kartum avyayam
]

\`v 3 [
aśraddadhānāḥ puruṣā
dharmasyāsya paran-tapa
aprāpya māṁ nivartante
mṛtyu-saṁsāra-vartmani
]

\`v 4 [
mayā tatam idaṁ sarvaṁ
jagad avyakta-mūrtinā
mat-sthāni sarva-bhūtāni
na cāhaṁ teṣv avasthitaḥ
]

\`v 5 [
na ca mat-sthāni bhūtāni
paśya me yogam aiśvaram
bhūta-bhṛn na ca bhūta-stho
mamātmā bhūta-bhāvanaḥ
]

\`v 6 [
yathākāśa-sthito nityaṁ
vāyuḥ sarvatra-go mahān
tathā sarvāṇi bhūtāni
mat-sthānīty upadhāraya
]

\`v 7 [
sarva-bhūtāni kaunteya
prakṛtiṁ yānti māmikām
kalpa-kṣaye punas tāni
kalpādau visṛjāmy aham
]

\`v 8 [
prakṛtiṁ svām avaṣṭabhya
visṛjāmi punaḥ punaḥ
bhūta-grāmam imaṁ kṛtsnam
avaśaṁ prakṛter vaśāt
]

\`v 9 [
na ca māṁ tāni karmāṇi
nibadhnanti dhanañ-jaya
udāsīna-vad āsīnam
asaktaṁ teṣu karmasu
]

\`v 10 [
mayādhyakṣeṇa prakṛtiḥ
sūyate sa-carācaram
hetunānena kaunteya
jagad viparivartate
]

\`v 11 [
avajānanti māṁ mūḍhā
mānuṣīṁ tanum āśritam
paraṁ bhāvam ajānanto
mama bhūta-maheśvaram
]

\`v 12 [
moghāśā mogha-karmāṇo
mogha-jñānā vicetasaḥ
rākṣasīm āsurīṁ caiva
prakṛtiṁ mohinīṁ śritāḥ
]

\`v 13 [
mahātmānas tu māṁ pārtha
daivīṁ prakṛtim āśritāḥ
bhajanty ananya-manaso
jñātvā bhūtādim avyayam
]

\`v 14 [
satataṁ kīrtayanto māṁ
yatantaś ca dṛḍha-vratāḥ
namasyantaś ca māṁ bhaktyā
nitya-yuktā upāsate
]

\`v 15 [
jñāna-yajñena cāpy anye
yajanto mām upāsate
ekatvena pṛthaktvena
bahudhā viśvato-mukham
]

\`v 16 [
ahaṁ kratur ahaṁ yajñaḥ
svadhāham aham auṣadham
mantro ’ham aham evājyam
aham agnir ahaṁ hutam
]

\`v 17 [
pitāham asya jagato
mātā dhātā pitāmahaḥ
vedyaṁ pavitram oṁ-kāra
ṛk sāma yajur eva ca
]

\`v 18 [
gatir bhartā prabhuḥ sākṣī
nivāsaḥ śaraṇaṁ suhṛt
prabhavaḥ pralayaḥ sthānaṁ
nidhānaṁ bījam avyayam
]

\`v 19 [
tapāmy aham ahaṁ varṣaṁ
nigṛhṇāmy utsṛjāmi ca
amṛtaṁ caiva mṛtyuś ca
sad asac cāham arjuna
]

\`v 20 [
trai-vidyā māṁ soma-pāḥ pūta-pāpā
yajñair iṣṭvā svar-gatiṁ prārthayante
te puṇyam āsādya surendra-lokam
aśnanti divyān divi deva-bhogān
]

\`v 21 [
te taṁ bhuktvā svarga-lokaṁ viśālaṁ
kṣīṇe puṇye martya-lokaṁ viśanti
evaṁ trayī-dharmam anuprapannā
gatāgataṁ kāma-kāmā labhante
]

\`v 22 [
ananyāś cintayanto māṁ
ye janāḥ paryupāsate
teṣāṁ nityābhiyuktānāṁ
yoga-kṣemaṁ vahāmy aham
]

\`v 23 [
ye ’py anya-devatā-bhaktā
yajante śraddhayānvitāḥ
te ’pi mām eva kaunteya
yajanty avidhi-pūrvakam
]

\`v 24 [
ahaṁ hi sarva-yajñānāṁ
bhoktā ca prabhur eva ca
na tu mām abhijānanti
tattvenātaś cyavanti te
]

\`v 25 [
yānti deva-vratā devān
pitṝn yānti pitṛ-vratāḥ
bhūtāni yānti bhūtejyā
yānti mad-yājino ’pi mām
]

\`v 26 [
patraṁ puṣpaṁ phalaṁ toyaṁ
yo me bhaktyā prayacchati
tad ahaṁ bhakty-upahṛtam
aśnāmi prayatātmanaḥ
]

\`v 27 [
yat karoṣi yad aśnāsi
yaj juhoṣi dadāsi yat
yat tapasyasi kaunteya
tat kuruṣva mad-arpaṇam
]

\`v 28 [
śubhāśubha-phalair evaṁ
mokṣyase karma-bandhanaiḥ
sannyāsa-yoga-yuktātmā
vimukto mām upaiṣyasi
]

\`v 29 [
samo ’haṁ sarva-bhūteṣu
na me dveṣyo ’sti na priyaḥ
ye bhajanti tu māṁ bhaktyā
mayi te teṣu cāpy aham
]

\`v 30 [
api cet su-durācāro
bhajate mām ananya-bhāk
sādhur eva sa mantavyaḥ
samyag vyavasito hi saḥ
]

\`v 31 [
kṣipraṁ bhavati dharmātmā
śaśvac-chāntiṁ nigacchati
kaunteya pratijānīhi
na me bhaktaḥ praṇaśyati
]

\`v 32 [
māṁ hi pārtha vyapāśritya
ye ’pi syuḥ pāpa-yonayaḥ
striyo vaiśyās tathā śūdrās
te ’pi yānti parāṁ gatim
]

\`v 33 [
kiṁ punar brāhmaṇāḥ puṇyā
bhaktā rājarṣayas tathā
anityam asukhaṁ lokam
imaṁ prāpya bhajasva mām
]

\`v 34 [
man-manā bhava mad-bhakto
mad-yājī māṁ namaskuru
mām evaiṣyasi yuktvaivam
ātmānaṁ mat-parāyaṇaḥ
]
`,"content/iast/localization.vy":`// IAST-stream display labels. Overrides only — baseline comes from primary via extend.
\`localization { extend = "primary" }

\`structure [
    "chapter" = "adhyāya",
    "verse" = "śloka"
]

\`entities {
    "arjuna" = "arjuna",
    "krishna" = "kṛṣṇa",
    "dhritarashtra" = "dhṛtarāṣṭra",
    "sanjaya" = "sañjaya"
}

\`actions {
    "uvaca" = "uvāca",
    "speaker" = "vaktā",
    "note" = "ṭippaṇī"
}

\`facets {
    "speaker" = "Speaker"
}
`,"content/iast/stream.toml":`language = "sa"
script = "IAST"
kind = "source"
`,"content/mula/1.vy":`\`set context { chapter.title = "अर्जुनविषादयोगः" }

धृतराष्ट्र उवाच
\`v 1 [
धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सव: ।
मामका: पाण्डवाश्चैव किमकुर्वत सञ्जय ॥ १ ॥
]

सञ्जय उवाच
\`v 2 [
दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा ।
आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ॥ २ ॥
]

\`v 3 [
पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् ।
व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ॥ ३ ॥
]

\`v 4 [
अत्र श‍ूरा महेष्वासा भीमार्जुनसमा युधि ।
युयुधानो विराटश्च द्रुपदश्च महारथः ॥ ४ ॥
]

\`v 5 [
धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् ।
पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ॥ ५ ॥
]

\`v 6 [
युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् ।
सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ॥ ६ ॥
]

\`v 7 [
अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम ।
नायका मम सैन्यस्य संज्ञार्थ तान्ब्रवीमि ते ॥ ७ ॥
]

\`v 8 [
भवान्भीष्मश्च कर्णश्च कृपश्च समितिंजयः ।
अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ॥ ८ ॥
]

\`v 9 [
अन्ये च बहवः श‍ूरा मदर्थे त्यक्तजीविताः ।
नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ॥ ९ ॥
]

\`v 10 [
अपर्याप्त‍ं तदस्माकं बलं भीष्माभिरक्षितम् ।
पर्याप्त‍ं त्विदमेतेषां बलं भीमाभिरक्षितम् ॥ १० ॥
]

\`v 11 [
अयनेषु च सर्वेषु यथाभागवमस्थिताः ।
भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ॥ ११ ॥
]

\`v 12 [
तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः ।
सिंहनादं विनद्योच्च‍ैः शङ्खं दध्मौ प्रतापवान् ॥ १२ ॥
]

\`v 13 [
ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः ।
सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् ॥ १३ ॥
]

\`v 14 [
ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ ।
माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः ॥ १४ ॥
]

\`v 15 [
पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः ।
पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः ॥ १५ ॥
]

\`v 16 [
अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः ।
नकुलः सहदेवश्च सुघोषमणिपुष्पकौ ॥ १६ ॥
]

\`v 17 [
काश्यश्च परमेष्वास: शिखण्डी च महारथ: ।
धृष्टद्युम्न‍ो विराटश्च सात्यकिश्‍चापराजित: ॥ १७ ॥
]

\`v 18 [
द्रुपदो द्रौपदेयाश्च सर्वश: पृथिवीपते ।
सौभद्रश्च महाबाहु: शङ्खान्दध्मु: पृथक्पृथक् ॥ १८ ॥
]

\`v 19 [
स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत् ।
नभश्च पृथिवीं चैव तुमुलोऽभ्यनुनादयन् ॥ १९ ॥
]

\`v 20 [
अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः ।
प्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः ।
हृषीकेशं तदा वाक्यमिदमाह महीपते ॥ २० ॥
]

अर्जुन उवाच
\`v 21 [
सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत ।
यावदेतान्निरीक्षेऽहं योद्‍धुकामानवस्थितान् ॥ २१ ॥
]

\`v 22 [
कैर्मया सह योद्धव्यमस्मिन्‍रणसमुद्यमे ॥ २२ ॥
]

\`v 23 [
योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः ।
धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः ॥ २३ ॥
]

सञ्जय उवाच
\`v 24 [
एवमुक्तो हृषीकेशो गुडाकेशेन भारत ।
सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् ॥ २४ ॥
]

\`v 25 [
भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्  ।
उवाच पार्थ पश्यैतान्समवेतान्कुरुनिति ॥ २५ ॥
]

\`v 26 [
तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान्।
आचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा।
श्वश‍ुरान्सुहृदश्चैव सेनयोरुभयोरपि ॥ २६ ॥
]

\`v 27 [
तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्  ।
कृपया परयाविष्टो विषीदन्निदमब्रवीत् ॥ २७ ॥
]

अर्जुन उवाच
\`v 28 [
दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्  ।
सीदन्ति मम गात्राणि मुखं च परिश‍ुष्यति ॥ २८ ॥
]

\`v 29 [
वेपथुश्च शरीरे मे रोमहर्षश्च जायते ।
गाण्डीवं स्रंसते हस्तात्त्वक्च‍ैव परिदह्यते ॥ २९ ॥
]

\`v 30 [
न च शक्न‍ोम्यवस्थातुं भ्रमतीव च मे मनः ।
निमित्तानि च पश्यामि विपरीतानि केशव ॥ ३० ॥
]

\`v 31 [
न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे ।
न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च ॥ ३१ ॥
]

\`v 32 [
किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा ।
येषामर्थे काङ्‍‍क्षितं नो राज्यं भोगाः सुखानि च ॥ ३२ ॥
]

\`v 33 [
त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च ।
आचार्याः पितरः पुत्रास्तथैव च पितामहाः ॥ ३३ ॥
]

\`v 34 [
मातुलाः श्वश‍ुराः पौत्राः श्यालाः सम्बन्धिनस्तथा ।
एतान्न हन्तुमिच्छामि घ्न‍तोऽपि मधुसूदन ॥ ३४ ॥
]

\`v 35 [
अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते ।
निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्ज‍नार्दन ॥ ३५ ॥
]

\`v 36 [
पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः ।
तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्सबान्धवान् ।
स्वजनं हि कथं हत्वा सुखिनः स्याम माधव ॥ ३६ ॥
]

\`v 37 [
यद्यप्येते न पश्यन्ति लोभोपहतचेतसः ।
कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् ॥ ३७ ॥
]

\`v 38 [
कथं न ज्ञेयमस्माभिः पापादस्मन्निवर्तितुम् ।
कुलक्षयकृतं दोषं प्रपश्यद्भ‍िर्जनार्दन ॥ ३८ ॥
]

\`v 39 [
कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः ।
धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ॥ ३९ ॥
]

\`v 40 [
अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः ।
स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः ॥ ४० ॥
]

\`v 41 [
सङ्करो नरकायैव कुलघ्न‍ानां कुलस्य च ।
पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः ॥ ४१ ॥
]

\`v 42 [
दोषैरेतैः कुलघ्न‍ानां वर्णसङ्करकारकैः ।
उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः ॥ ४२ ॥
]

\`v 43 [
उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन ।
नरके नियतं वासो भवतीत्यनुश‍ुश्रुम ॥ ४३ ॥
]

\`v 44 [
अहो बत महत्पापं कर्तुं व्यवसिता वयम् ।
यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः ॥ ४४ ॥
]

\`v 45 [
यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः ।
धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् ॥ ४५ ॥
]

सञ्जय उवाच
\`v 46 [
एवमुक्त्वार्जुनः संख्ये रथोपस्थ उपाविशत् ।
विसृज्य सशरं चापं शोकसंविग्न‍मानसः ॥ ४६ ॥
]
`,"content/mula/10.vy":`\`set context { chapter.title = "विभूतियोगः" }

श्रीभगवानुवाच
\`v 1 [
भूय एव महाबाहो श‍ृणु मे परमं वच: ।
यत्तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया ॥ १ ॥
]

\`v 2 [
न मे विदु: सुरगणा: प्रभवं न महर्षय: ।
अहमादिर्हि देवानां महर्षीणां च सर्वश: ॥ २ ॥
]

\`v 3 [
यो मामजमनादिं च वेत्ति लोकमहेश्वरम् ।
असम्मूढ: स मर्त्येषु सर्वपापै: प्रमुच्यते ॥ ३ ॥
]

\`v 4 [
बुद्धिर्ज्ञानमसम्मोह: क्षमा सत्यं दम: शम: ।
सुखं दु:खं भवोऽभावो भयं चाभयमेव च ॥ ४ ॥
]

\`v 5 [
अहिंसा समता तुष्टिस्तपो दानं यशोऽयश: ।
भवन्ति भावा भूतानां मत्त एव पृथग्विधा: ॥ ५ ॥
]

\`v 6 [
महर्षय: सप्‍त पूर्वे चत्वारो मनवस्तथा ।
मद्भ‍ावा मानसा जाता येषां लोक इमा: प्रजा: ॥ ६ ॥
]

\`v 7 [
एतां विभूतिं योगं च मम यो वेत्ति तत्त्वत: ।
सोऽविकल्पेन योगेन युज्यते नात्र संशय: ॥ ७ ॥
]

\`v 8 [
अहं सर्वस्य प्रभवो मत्त: सर्वं प्रवर्तते ।
इति मत्वा भजन्ते मां बुधा भावसमन्विता: ॥ ८ ॥
]

\`v 9 [
मच्च‍ित्ता मद्ग‍तप्राणा बोधयन्त: परस्परम् ।
कथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च ॥ ९ ॥
]

\`v 10 [
तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् ।
ददामि बुद्धियोगं तं येन मामुपयान्ति ते ॥ १० ॥
]

\`v 11 [
तेषामेवानुकम्पार्थमहमज्ञानजं तम: ।
नाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता ॥ ११ ॥
]

अर्जुन उवाच
\`v 12 [
परं ब्रह्म परं धाम पवित्रं परमं भवान् ।
पुरुषं शाश्वतं दिव्यमादिदेवमजं विभुम् ॥ १२ ॥
]

\`v 13 [
आहुस्त्वामृषय: सर्वे देवर्षिर्नारदस्तथा ।
असितो देवलो व्यास: स्वयं चैव ब्रवीषि मे ॥ १३ ॥
]

\`v 14 [
सर्वमेतदृतं मन्ये यन्मां वदसि केशव ।
न हि ते भगवन्व्यक्तिं विदुर्देवा न दानवा: ॥ १४ ॥
]

\`v 15 [
स्वयमेवात्मनात्मानं वेत्थ त्वं पुरुषोत्तम ।
भूतभावन भूतेश देवदेव जगत्पते ॥ १५ ॥
]

\`v 16 [
वक्तुमर्हस्यशेषेण दिव्या ह्यात्मविभूतय: ।
याभिर्विभूतिभिर्लोकानिमांस्त्वं व्याप्य तिष्ठसि ॥ १६ ॥
]

\`v 17 [
कथं विद्यामहं योगिंस्त्वां सदा परिचिन्तयन् ।
केषु केषु च भावेषु चिन्त्योऽसि भगवन्मया ॥ १७ ॥
]

\`v 18 [
विस्तरेणात्मनो योगं विभूतिं च जनार्दन ।
भूय: कथय तृप्‍तिर्हि श‍ृण्वतो नास्ति मेऽमृतम् ॥ १८ ॥
]

श्रीभगवानुवाच
\`v 19 [
हन्त ते कथयिष्यामि दिव्या ह्यात्मविभूतय: ।
प्राधान्यत: कुरुश्रेष्ठ नास्त्यन्तो विस्तरस्य मे ॥ १९ ॥
]

\`v 20 [
अहमात्मा गुडाकेश सर्वभूताशयस्थित: ।
अहमादिश्च मध्यं च भूतानामन्त एव च ॥ २० ॥
]

\`v 21 [
आदित्यानामहं विष्णुर्ज्योतिषां रविरंश‍ुमान् ।
मरीचिर्मरुतामस्मि नक्षत्राणामहं शशी ॥ २१ ॥
]

\`v 22 [
वेदानां सामवेदोऽस्मि देवानामस्मि वासव: ।
इन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ॥ २२ ॥
]

\`v 23 [
रुद्राणां शङ्करश्चास्मि वित्तेशो यक्षरक्षसाम् ।
वसूनां पावकश्चास्मि मेरु: शिखरिणामहम् ॥ २३ ॥
]

\`v 24 [
पुरोधसां च मुख्यं मां विद्धि पार्थ बृहस्पतिम् ।
सेनानीनामहं स्कन्द: सरसामस्मि सागर: ॥ २४ ॥
]

\`v 25 [
महर्षीणां भृगुरहं गिरामस्म्येकमक्षरम् ।
यज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालय: ॥ २५ ॥
]

\`v 26 [
अश्वत्थ: सर्ववृक्षाणां देवर्षीणां च नारद: ।
गन्धर्वाणां चित्ररथ: सिद्धानां कपिलो मुनि: ॥ २६ ॥
]

\`v 27 [
उच्‍चैःश्रवसमश्वानां विद्धि माममृतोद्भ‍वम् ।
ऐरावतं गजेन्द्राणां नराणां च नराधिपम् ॥ २७ ॥
]

\`v 28 [
आयुधानामहं वज्रं धेनूनामस्मि कामधुक् ।
प्रजनश्चास्मि कन्दर्प: सर्पाणामस्मि वासुकि: ॥ २८ ॥
]

\`v 29 [
अनन्तश्चास्मि नागानां वरुणो यादसामहम् ।
पितॄणामर्यमा चास्मि यम: संयमतामहम् ॥ २९ ॥
]

\`v 30 [
प्रह्लादश्चास्मि दैत्यानां काल: कलयतामहम् ।
मृगाणां च मृगेन्द्रोऽहं वैनतेयश्च पक्षिणाम् ॥ ३० ॥
]

\`v 31 [
पवन: पवतामस्मि राम: शस्त्रभृतामहम् ।
झषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी ॥ ३१ ॥
]

\`v 32 [
सर्गाणामादिरन्तश्च मध्यं चैवाहमर्जुन ।
अध्यात्मविद्या विद्यानां वाद: प्रवदतामहम् ॥ ३२ ॥
]

\`v 33 [
अक्षराणामकारोऽस्मि द्वन्द्व: सामासिकस्य च ।
अहमेवाक्षय: कालो धाताहं विश्वतोमुख: ॥ ३३ ॥
]

\`v 34 [
मृत्यु: सर्वहरश्चाहमुद्भ‍वश्च भविष्यताम् ।
कीर्ति: श्रीर्वाक्‍च नारीणां स्मृतिर्मेधा धृति: क्षमा ॥ ३४ ॥
]

\`v 35 [
बृहत्साम तथा साम्न‍ां गायत्री छन्दसामहम् ।
मासानां मार्गशीर्षोऽहमृतूनां कुसुमाकर: ॥ ३५ ॥
]

\`v 36 [
द्यूतं छलयतामस्मि तेजस्तेजस्विनामहम् ।
जयोऽस्मि व्यवसायोऽस्मि सत्त्वं सत्त्ववतामहम् ॥ ३६ ॥
]

\`v 37 [
वृष्णीनां वासुदेवोऽस्मि पाण्डवानां धनञ्जय: ।
मुनीनामप्यहं व्यास: कवीनामुशना कवि: ॥ ३७ ॥
]

\`v 38 [
दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम् ।
मौनं चैवास्मि गुह्यानां ज्ञानं ज्ञानवतामहम् ॥ ३८ ॥
]

\`v 39 [
यच्च‍ापि सर्वभूतानां बीजं तदहमर्जुन ।
न तदस्ति विना यत्स्यान्मया भूतं चराचरम् ॥ ३९ ॥
]

\`v 40 [
नान्तोऽस्ति मम दिव्यानां विभूतीनां परन्तप ।
एष तूद्देशत: प्रोक्तो विभूतेर्विस्तरो मया ॥ ४० ॥
]

\`v 41 [
यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा ।
तत्तदेवावगच्छ त्वं मम तेजोऽशसम्भवम् ॥ ४१ ॥
]

\`v 42 [
अथवा बहुनैतेन किं ज्ञातेन तवार्जुन ।
विष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत् ॥ ४२ ॥
]
`,"content/mula/11.vy":`\`set context { chapter.title = "विश्वरूपदर्शनयोगः" }

अर्जुन उवाच
\`v 1 [
मदनुग्रहाय परमं गुह्यमध्यात्मसंज्ञितम् ।
यत्त्वयोक्तं वचस्तेन मोहोऽयं विगतो मम ॥ १ ॥
]

\`v 2 [
भवाप्ययौ हि भूतानां श्रुतौ विस्तरशो मया ।
त्वत्त: कमलपत्राक्ष माहात्म्यमपि चाव्ययम् ॥ २ ॥
]

\`v 3 [
एवमेतद्यथात्थ त्वमात्मानं परमेश्वर ।
द्रष्टुमिच्छामि ते रूपमैश्वरं पुरुषोत्तम ॥ ३ ॥
]

\`v 4 [
मन्यसे यदि तच्छक्यं मया द्रष्टुमिति प्रभो ।
योगेश्वर ततो मे त्वं दर्शयात्मानमव्ययम् ॥ ४ ॥
]

श्रीभगवानुवाच
\`v 5 [
पश्य मे पार्थ रूपाणि शतशोऽथ सहस्रश: ।
नानाविधानि दिव्यानि नानावर्णाकृतीनि च ॥ ५ ॥
]

\`v 6 [
पश्यादित्यान्वसून्‍रुद्रानश्विनौ मरुतस्तथा ।
बहून्यदृष्टपूर्वाणि पश्याश्चर्याणि भारत ॥ ६ ॥
]

\`v 7 [
इहैकस्थं जगत्कृत्स्नं पश्याद्य सचराचरम् ।
मम देहे गुडाकेश यच्च‍ान्यद्‍द्रष्टुमिच्छसि ॥ ७ ॥
]

\`v 8 [
न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा ।
दिव्यं ददामि ते चक्षु: पश्य मे योगमैश्वरम् ॥ ८ ॥
]

सञ्जय उवाच
\`v 9 [
एवमुक्त्वा ततो राजन्महायोगेश्वरो हरि: ।
दर्शयामास पार्थाय परमं रूपमैश्वरम् ॥ ९ ॥
]

\`v 10 [
अनेकवक्‍त्रनयनमनेकाद्भ‍ुतदर्शनम् ।
अनेकदिव्याभरणं दिव्यानेकोद्यतायुधम् ॥ १० ॥
]

\`v 11 [
दिव्यमाल्याम्बरधरं दिव्यगन्धानुलेपनम् ।
सर्वाश्चर्यमयं देवमनन्तं विश्वतोमुखम् ॥ ११ ॥
]

\`v 12 [
दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता ।
यदि भा: सदृशी सा स्याद्भ‍ासस्तस्य महात्मन: ॥ १२ ॥
]

\`v 13 [
तत्रैकस्थं जगत्कृत्स्नं प्रविभक्तमनेकधा ।
अपश्यद्देवदेवस्य शरीरे पाण्डवस्तदा ॥ १३ ॥
]

\`v 14 [
तत: स विस्मयाविष्टो हृष्टरोमा धनञ्जय: ।
प्रणम्य शिरसा देवं कृताञ्जलिरभाषत ॥ १४ ॥
]

अर्जुन उवाच
\`v 15 [
पश्यामि देवांस्तव देव देहे
सर्वांस्तथा भूतविशेषसङ्घान् ।
ब्रह्माणमीशं कमलासनस्थ-
मृषींश्च सर्वानुरगांश्च दिव्यान् ॥ १५ ॥
]

\`v 16 [
अनेकबाहूदरवक्‍त्रनेत्रं
पश्यामि त्वां सर्वतोऽनन्तरूपम् ।
नान्तं न मध्यं न पुनस्तवादिं
पश्यामि विश्वेश्वर विश्वरूप ॥ १६ ॥
]

\`v 17 [
किरीटिनं गदिनं चक्रिणं च
तेजोराशिं सर्वतो दीप्‍तिमन्तम् ।
पश्यामि त्वां दुर्निरीक्ष्यं समन्ता-
द्दीप्‍तानलार्कद्युतिमप्रमेयम् ॥ १७ ॥
]

\`v 18 [
त्वमक्षरं परमं वेदितव्यं
त्वमस्य विश्वस्य परं निधानम् ।
त्वमव्यय: शाश्वतधर्मगोप्‍ता
सनातनस्त्वं पुरुषो मतो मे ॥ १८ ॥
]

\`v 19 [
अनादिमध्यान्तमनन्तवीर्य-
मनन्तबाहुं शशिसूर्यनेत्रम् ।
पश्यामि त्वां दीप्‍तहुताशवक्‍त्रं
स्वतेजसा विश्वमिदं तपन्तम् ॥ १९ ॥
]

\`v 20 [
द्यावापृथिव्योरिदमन्तरं हि
व्याप्‍तं त्वयैकेन दिशश्च सर्वा: ।
दृष्ट्वाद्‍भुतं रूपमुग्रं तवेदं
लोकत्रयं प्रव्यथितं महात्मन् ॥ २० ॥
]

\`v 21 [
अमी हि त्वां सुरसङ्घा विशन्ति
केचिद्भ‍ीता: प्राञ्जलयो गृणन्ति ।
स्वस्तीत्युक्त्वा महर्षिसिद्धसङ्घा:
स्तुवन्ति त्वां स्तुतिभि: पुष्कलाभि: ॥ २१ ॥
]

\`v 22 [
रुद्रादित्या वसवो ये च साध्या
विश्वेऽश्विनौ मरुतश्चोष्मपाश्च ।
गन्धर्वयक्षासुरसिद्धसङ्घा
वीक्षन्ते त्वां विस्मिताश्चैव सर्वे ॥ २२ ॥
]

\`v 23 [
रूपं महत्ते बहुवक्‍त्रनेत्रं
महाबाहो बहुबाहूरुपादम् ।
बहूदरं बहुदंष्ट्राकरालं
दृष्ट्वा लोका: प्रव्यथितास्तथाहम् ॥ २३ ॥
]

\`v 24 [
नभ:स्पृशं दीप्‍तमनेकवर्णं
व्यात्ताननं दीप्‍तविशालनेत्रम् ।
दृष्ट्वा हि त्वां प्रव्यथितान्तरात्मा
धृतिं न विन्दामि शमं च विष्णो ॥ २४ ॥
]

\`v 25 [
दंष्ट्राकरालानि च ते मुखानि
दृष्ट्वैव कालानलसन्निभानि ।
दिशो न जाने न लभे च शर्म
प्रसीद देवेश जगन्निवास ॥ २५ ॥
]

\`v 26 [
अमी च त्वां धृतराष्ट्रस्य पुत्रा:
सर्वे सहैवावनिपालसङ्घै: ।
भीष्मो द्रोण: सूतपुत्रस्तथासौ
सहास्मदीयैरपि योधमुख्यै: ॥ २६ ॥
]

\`v 27 [
वक्‍त्राणि ते त्वरमाणा विशन्ति
दंष्ट्राकरालानि भयानकानि ।
केचिद्विलग्न‍ा दशनान्तरेषु
सन्दृश्यन्ते चूर्णितैरुत्तमाङ्गै: ॥ २७ ॥
]

\`v 28 [
यथा नदीनां बहवोऽम्बुवेगा:
समुद्रमेवाभिमुखा द्रवन्ति ।
तथा तवामी नरलोकवीरा
विशन्ति वक्‍त्राण्यभिविज्‍वलन्ति ॥ २८ ॥
]

\`v 29 [
यथा प्रदीप्‍तं ज्‍वलनं पतङ्गा
विशन्ति नाशाय समृद्धवेगा: ।
तथैव नाशाय विशन्ति लोका-
स्तवापि वक्‍त्राणि समृद्धवेगा: ॥ २९ ॥
]

\`v 30 [
लेलिह्यसे ग्रसमान: समन्ता-
ल्ल‍ोकान्समग्रान्वदनैज्‍‍र्वलद्भ‍िः ।
तेजोभिरापूर्य जगत्समग्रं
भासस्तवोग्रा: प्रतपन्ति विष्णो ॥ ३० ॥
]

\`v 31 [
आख्याहि मे को भवानुग्ररूपो
नमोऽस्तु ते देववर प्रसीद ।
विज्ञातुमिच्छामि भवन्तमाद्यं
न हि प्रजानामि तव प्रवृत्तिम् ॥ ३१ ॥
]

श्रीभगवानुवाच
\`v 32 [
कालोऽस्मि लोकक्षयकृत्प्रवृद्धो
लोकान्समाहर्तुमिह प्रवृत्त: ।
‍ऋतेऽपि त्वां न भविष्यन्ति सर्वे
येऽवस्थिता: प्रत्यनीकेषु योधा: ॥ ३२ ॥
]

\`v 33 [
तस्मात्त्वमुत्तिष्ठ यशो लभस्व
जित्वा शत्रून्भुंक्ष्व राज्यं समृद्धम् ।
मयैवैते निहता: पूर्वमेव
निमित्तमात्रं भव सव्यसाचिन् ॥ ३३ ॥
]

\`v 34 [
द्रोणं च भीष्मं च जयद्रथं च
कर्णं तथान्यानपि योधवीरान् ।
मया हतांस्त्वं जहि मा व्यथिष्ठा
युध्यस्व जेतासि रणे सपत्‍नान् ॥ ३४ ॥
]

सञ्जय उवाच
\`v 35 [
एतच्छ्रुत्वा वचनं केशवस्य
कृताञ्जलिर्वेपमान: किरीटी ।
नमस्कृत्वा भूय एवाह कृष्णं
सगद्ग‍दं भीतभीत: प्रणम्य ॥ ३५ ॥
]

अर्जुन उवाच
\`v 36 [
स्थाने हृषीकेश तव प्रकीर्त्या
जगत्प्रहृष्यत्यनुरज्यते च ।
रक्षांसि भीतानि दिशो द्रवन्ति
सर्वे नमस्यन्ति च सिद्धसङ्घा: ॥ ३६ ॥
]

\`v 37 [
कस्माच्च‍ ते न नमेरन्महात्मन्
गरीयसे ब्रह्मणोऽप्यादिकर्त्रे ।
अनन्त देवेश जगन्निवास
त्वमक्षरं सदसत्तत्परं यत् ॥ ३७ ॥
]

\`v 38 [
त्वमादिदेव: पुरुष: पुराण-
स्त्वमस्य विश्वस्य परं निधानम् ।
वेत्तासि वेद्यं च परं च धाम
त्वया ततं विश्वमनन्तरूप ॥ ३८ ॥
]

\`v 39 [
वायुर्यमोऽग्न‍िर्वरुण: शशाङ्क:
प्रजापतिस्त्वं प्रपितामहश्च ।
नमो नमस्तेऽस्तु सहस्रकृत्व:
पुनश्च भूयोऽपि नमो नमस्ते ॥ ३९ ॥
]

\`v 40 [
नम: पुरस्तादथ पृष्ठतस्ते
नमोऽस्तु ते सर्वत एव सर्व ।
अनन्तवीर्यामितविक्रमस्त्वं
सर्वं समाप्‍नोषि ततोऽसि सर्व: ॥ ४० ॥
]

\`v 41 [
सखेति मत्वा प्रसभं यदुक्तं
हे कृष्ण हे यादव हे सखेति ।
अजानता महिमानं तवेदं
मया प्रमादात्प्रणयेन वापि ॥ ४१ ॥
]

\`v 42 [
यच्च‍ावहासार्थमसत्कृतोऽसि
विहारशय्यासनभोजनेषु  ।
एकोऽथवाप्यच्युत तत्समक्षं
तत्क्षामये त्वामहमप्रमेयम् ॥ ४२ ॥
]

\`v 43 [
पितासि लोकस्य चराचरस्य
त्वमस्य पूज्यश्च गुरुर्गरीयान् ।
न त्वत्समोऽस्त्यभ्यधिक: कुतोऽन्यो
लोकत्रयेऽप्यप्रतिमप्रभाव ॥ ४३ ॥
]

\`v 44 [
तस्मात्प्रणम्य प्रणिधाय कायं
प्रसादये त्वामहमीशमीड्यम् ।
पितेव पुत्रस्य सखेव सख्यु:
प्रिय: प्रियायार्हसि देव सोढुम् ॥ ४४ ॥
]

\`v 45 [
अदृष्टपूर्वं हृषितोऽस्मि दृष्ट्वा
भयेन च प्रव्यथितं मनो मे ।
तदेव मे दर्शय देव रूपं
प्रसीद देवेश जगन्निवास ॥ ४५ ॥
]

\`v 46 [
किरीटिनं गदिनं चक्रहस्त-
मिच्छामि त्वां द्रष्टुमहं तथैव ।
तेनैव रूपेण चतुर्भुजेन
सहस्रबाहो भव विश्वमूर्ते ॥ ४६ ॥
]

श्रीभगवानुवाच
\`v 47 [
मया प्रसन्नेन तवार्जुनेदं
रूपं परं दर्शितमात्मयोगात् ।
तेजोमयं विश्वमनन्तमाद्यं
यन्मे त्वदन्येन न दृष्टपूर्वम् ॥ ४७ ॥
]

\`v 48 [
न वेदयज्ञाध्ययनैर्न दानै-
र्न च क्रियाभिर्न तपोभिरुग्रै: ।
एवंरूप: शक्य अहं नृलोके
द्रष्टुं त्वदन्येन कुरुप्रवीर ॥ ४८ ॥
]

\`v 49 [
मा ते व्यथा मा च विमूढभावो
दृष्ट्वा रूपं घोरमीदृङ्‍ममेदम् ।
व्यपेतभी: प्रीतमना: पुनस्त्वं
तदेव मे रूपमिदं प्रपश्य ॥ ४९ ॥
]

सञ्जय उवाच
\`v 50 [
इत्यर्जुनं वासुदेवस्तथोक्त्वा
स्वकं रूपं दर्शयामास भूय: ।
आश्वासयामास च भीतमेनं
भूत्वा पुन: सौम्यवपुर्महात्मा ॥ ५० ॥
]

अर्जुन उवाच
\`v 51 [
दृष्ट्वेदं मानुषं रूपं तव सौम्यं जनार्दन ।
इदानीमस्मि संवृत्त: सचेता: प्रकृतिं गत: ॥ ५१ ॥
]

श्रीभगवानुवाच
\`v 52 [
सुदुर्दर्शमिदं रूपं दृष्टवानसि यन्मम ।
देवा अप्यस्य रूपस्य नित्यं दर्शनकाङ्‍‍क्षिण: ॥ ५२ ॥
]

\`v 53 [
नाहं वेदैर्न तपसा न दानेन न चेज्यया ।
शक्य एवंविधो द्रष्टुं दृष्टवानसि मां यथा ॥ ५३ ॥
]

\`v 54 [
भक्त्य‍ा त्वनन्यया शक्य अहमेवंविधोऽर्जुन ।
ज्ञातुं द्रष्टुं च तत्त्वेन प्रवेष्टुं च परन्तप ॥ ५४ ॥
]

\`v 55 [
मत्कर्मकृन्मत्परमो मद्भ‍क्त: सङ्गवर्जित: ।
निर्वैर: सर्वभूतेषु य: स मामेति पाण्डव ॥ ५५ ॥
]
`,"content/mula/12.vy":`\`set context { chapter.title = "भक्तियोगः" }

अर्जुन उवाच
\`v 1 [
एवं सततयुक्ता ये भक्तास्त्वां पर्युपासते ।
ये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमा: ॥ १ ॥
]

श्रीभगवानुवाच
\`v 2 [
मय्यावेश्य मनो ये मां नित्ययुक्ता उपासते ।
श्रद्धया परयोपेतास्ते मे युक्ततमा मता: ॥ २ ॥
]

\`v 3 [
ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते ।
सर्वत्रगमचिन्त्यं च कूटस्थमचलं ध्रुवम् ॥ ३ ॥
]

\`v 4 [
सन्नियम्येन्द्रियग्रामं सर्वत्र समबुद्धय: ।
ते प्राप्‍नुवन्ति मामेव सर्वभूतहिते रता: ॥ ४ ॥
]

\`v 5 [
क्ल‍ेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम् ।
अव्यक्ता हि गतिर्दु:खं देहवद्भ‍िरवाप्यते ॥ ५ ॥
]

\`v 6 [
ये तु सर्वाणि कर्माणि मयि सन्न्यस्य मत्परा: ।
अनन्येनैव योगेन मां ध्यायन्त उपासते ॥ ६ ॥
]

\`v 7 [
तेषामहं समुद्धर्ता मृत्युसंसारसागरात् ।
भवामि न चिरात्पार्थ मय्यावेशितचेतसाम् ॥ ७ ॥
]

\`v 8 [
मय्येव मन आधत्स्व मयि बुद्धिं निवेशय ।
निवसिष्यसि मय्येव अत ऊर्ध्वं न संशय: ॥ ८ ॥
]

\`v 9 [
अथ चित्तं समाधातुं न शक्न‍ोषि मयि स्थिरम् ।
अभ्यासयोगेन ततो मामिच्छाप्‍तुं धनञ्जय ॥ ९ ॥
]

\`v 10 [
अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव ।
मदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि ॥ १० ॥
]

\`v 11 [
अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रित: ।
सर्वकर्मफलत्यागं तत: कुरु यतात्मवान् ॥ ११ ॥
]

\`v 12 [
श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते ।
ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम् ॥ १२ ॥
]

\`v 13 [
अद्वेष्टा सर्वभूतानां मैत्र: करुण एव च ।
निर्ममो निरहङ्कार: समदु:खसुख: क्षमी ॥ १३ ॥
]

\`v 14 [
सन्तुष्ट: सततं योगी यतात्मा दृढनिश्चय: ।
मय्यर्पितमनोबुद्धिर्यो मद्भ‍क्त: स मे प्रिय: ॥ १४ ॥
]

\`v 15 [
यस्मान्नोद्विजते लोको लोकान्नोद्विजते च य: ।
हर्षामर्षभयोद्वेगैर्मुक्तो य: स च मे प्रिय: ॥ १५ ॥
]

\`v 16 [
अनपेक्ष: श‍ुचिर्दक्ष उदासीनो गतव्यथ: ।
सर्वारम्भपरित्यागी यो मद्भ‍क्त: स मे प्रिय: ॥ १६ ॥
]

\`v 17 [
यो न हृष्यति न द्वेष्टि न शोचति न काङ्‍क्षति ।
श‍ुभाश‍ुभपरित्यागी भक्तिमान्य: स मे प्रिय: ॥ १७ ॥
]

\`v 18 [
सम: शत्रौ च मित्रे च तथा मानापमानयो: ।
शीतोष्णसुखदु:खेषु सम: सङ्गविवर्जित: ॥ १८ ॥
]

\`v 19 [
तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित् ।
अनिकेत: स्थिरमतिर्भक्तिमान्मे प्रियो नर: ॥ १९ ॥
]

\`v 20 [
ये तु धर्मामृतमिदं यथोक्तं पर्युपासते ।
श्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रिया: ॥ २० ॥
]
`,"content/mula/13.vy":`\`set context { chapter.title = "क्षेत्रक्षेत्रज्ञविभागयोगः" }

अर्जुन उवाच
\`v 1 [
प्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च ।
एतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव ॥ १ ॥
]

श्रीभगवानुवाच
\`v 2 [
इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते ।
एतद्यो वेत्ति तं प्राहु: क्षेत्रज्ञ इति तद्विद: ॥ २ ॥
]

\`v 3 [
क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत ।
क्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम ॥ ३ ॥
]

\`v 4 [
तत्क्षेत्रं यच्च‍ यादृक्‍च यद्विकारि यतश्च यत् ।
स च यो यत्प्रभावश्च तत्समासेन मे श‍ृणु ॥ ४ ॥
]

\`v 5 [
ऋषिभिर्बहुधा गीतं छन्दोभिर्विविधै: पृथक् ।
ब्रह्मसूत्रपदैश्चैव हेतुमद्भ‍िर्विनिश्चितै: ॥ ५ ॥
]

\`v 6 [
महाभूतान्यहङ्कारो बुद्धिरव्यक्तमेव च ।
इन्द्रियाणि दशैकं च पञ्च चेन्द्रियगोचरा: ॥ ६ ॥
]

\`v 7 [
इच्छा द्वेष: सुखं दु:खं सङ्घातश्चेतना धृति: ।
एतत्क्षेत्रं समासेन सविकारमुदाहृतम् ॥ ७ ॥
]

\`v 8 [
अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम् ।
आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रह: ॥ ८ ॥
]

\`v 9 [
इन्द्रियार्थेषु वैराग्यमनहङ्कार एव च ।
जन्ममृत्युजराव्याधिदु:खदोषानुदर्शनम् ॥ ९ ॥
]

\`v 10 [
असक्तिरनभिष्वङ्ग: पुत्रदारगृहादिषु ।
नित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु ॥ १० ॥
]

\`v 11 [
मयि चानन्ययोगेन भक्तिरव्यभिचारिणी ।
विविक्तदेशसेवित्वमरतिर्जनसंसदि ॥ ११ ॥
]

\`v 12 [
अध्यात्मज्ञाननित्यत्वं तत्त्वज्ञानार्थदर्शनम् ।
एतज्ज्ञानमिति प्रोक्तमज्ञानं यदतोऽन्यथा ॥ १२ ॥
]

\`v 13 [
ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्न‍ुते ।
अनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते ॥ १३ ॥
]

\`v 14 [
सर्वत: पाणिपादं तत्सर्वतोऽक्षिशिरोमुखम् ।
सर्वत:श्रुतिमल्ल‍ोके सर्वमावृत्य तिष्ठति ॥ १४ ॥
]

\`v 15 [
सर्वेन्द्रियगुणाभासं सर्वेन्द्रियविवर्जितम् ।
असक्तं सर्वभृच्च‍ैव निर्गुणं गुणभोक्तृ च ॥ १५ ॥
]

\`v 16 [
बहिरन्तश्च भूतानामचरं चरमेव च ।
सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत् ॥ १६ ॥
]

\`v 17 [
अविभक्तं च भूतेषु विभक्तमिव च स्थितम् ।
भूतभर्तृ च तज्ज्ञेयं ग्रसिष्णु प्रभविष्णु च ॥ १७ ॥
]

\`v 18 [
ज्योतिषामपि तज्ज्योतिस्तमस: परमुच्यते ।
ज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम् ॥ १८ ॥
]

\`v 19 [
इति क्षेत्रं तथा ज्ञानं ज्ञेयं चोक्तं समासत: ।
मद्भ‍क्त एतद्विज्ञाय मद्भ‍ावायोपपद्यते ॥ १९ ॥
]

\`v 20 [
प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि ।
विकारांश्च गुणांश्चैव विद्धि प्रकृतिसम्भवान् ॥ २० ॥
]

\`v 21 [
कार्यकारणकर्तृत्वे हेतु: प्रकृतिरुच्यते ।
पुरुष: सुखदु:खानां भोक्तृत्वे हेतुरुच्यते ॥ २१ ॥
]

\`v 22 [
पुरुष: प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान् ।
कारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु ॥ २२ ॥
]

\`v 23 [
उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वर: ।
परमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुष: पर: ॥ २३ ॥
]

\`v 24 [
य एवं वेत्ति पुरुषं प्रकृतिं च गुणै: सह ।
सर्वथा वर्तमानोऽपि न स भूयोऽभिजायते ॥ २४ ॥
]

\`v 25 [
ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना ।
अन्ये सांख्येन योगेन कर्मयोगेन चापरे ॥ २५ ॥
]

\`v 26 [
अन्ये त्वेवमजानन्त: श्रुत्वान्येभ्य उपासते ।
तेऽपि चातितरन्त्येव मृत्युं श्रुतिपरायणा: ॥ २६ ॥
]

\`v 27 [
यावत्सञ्जायते किञ्चित्सत्त्वं स्थावरजङ्गमम् ।
क्षेत्रक्षेत्रज्ञसंयोगात्तद्विद्धि भरतर्षभ ॥ २७ ॥
]

\`v 28 [
समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम् ।
विनश्यत्स्वविनश्यन्तं य: पश्यति स पश्यति ॥ २८ ॥
]

\`v 29 [
समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम् ।
न हिनस्त्यात्मनात्मानं ततो याति परां गतिम् ॥ २९ ॥
]

\`v 30 [
प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वश: ।
य: पश्यति तथात्मानमकर्तारं स पश्यति ॥ ३० ॥
]

\`v 31 [
यदा भूतपृथग्भावमेकस्थमनुपश्यति ।
तत एव च विस्तारं ब्रह्म सम्पद्यते तदा ॥ ३१ ॥
]

\`v 32 [
अनादित्वान्निर्गुणत्वात्परमात्मायमव्यय: ।
शरीरस्थोऽपि कौन्तेय न करोति न लिप्यते ॥ ३२ ॥
]

\`v 33 [
यथा सर्वगतं सौक्ष्म्यादाकाशं नोपलिप्यते ।
सर्वत्रावस्थितो देहे तथात्मा नोपलिप्यते ॥ ३३ ॥
]

\`v 34 [
यथा प्रकाशयत्येक: कृत्स्‍नं लोकमिमं रवि: ।
क्षेत्रं क्षेत्री तथा कृत्स्‍नं प्रकाशयति भारत ॥ ३४ ॥
]

\`v 35 [
क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा ।
भूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम् ॥ ३५ ॥
]
`,"content/mula/14.vy":`\`set context { chapter.title = "गुणत्रयविभागयोगः" }

श्रीभगवानुवाच
\`v 1 [
परं भूय: प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम् । ‍‍ ॥
यज्ज्ञात्वा मुनय: सर्वे परां सिद्धिमितो गता: ॥ १ ॥
]

\`v 2 [
इदं ज्ञानमुपाश्रित्य मम साधर्म्यमागता: ।
सर्गेऽपि नोपजायन्ते प्रलये न व्यथन्ति च ॥ २ ॥
]

\`v 3 [
मम योनिर्महद्‍ब्रह्म तस्मिन्गर्भं दधाम्यहम् ।
सम्भव: सर्वभूतानां ततो भवति भारत ॥ ३ ॥
]

\`v 4 [
सर्वयोनिषु कौन्तेय मूर्तय: सम्भवन्ति या: ।
तासां ब्रह्म महद्योनिरहं बीजप्रद: पिता ॥ ४ ॥
]

\`v 5 [
सत्त्वं रजस्तम इति गुणा: प्रकृतिसम्भवा: ।
निबध्‍नन्ति महाबाहो देहे देहिनमव्ययम् ॥ ५ ॥
]

\`v 6 [
तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम् ।
सुखसङ्गेन बध्‍नाति ज्ञानसङ्गेन चानघ ॥ ६ ॥
]

\`v 7 [
रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भ‍वम् ।
तन्निबध्‍नाति कौन्तेय कर्मसङ्गेन देहिनम् ॥ ७ ॥
]

\`v 8 [
तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम् ।
प्रमादालस्यनिद्राभिस्तन्निबध्‍नाति भारत ॥ ८ ॥
]

\`v 9 [
सत्त्वं सुखे सञ्जयति रज: कर्मणि भारत ।
ज्ञानमावृत्य तु तम: प्रमादे सञ्जयत्युत ॥ ९ ॥
]

\`v 10 [
रजस्तमश्चाभिभूय सत्त्वं भवति भारत ।
रज: सत्त्वं तमश्चैव तम: सत्त्वं रजस्तथा ॥ १० ॥
]

\`v 11 [
सर्वद्वारेषु देहेऽस्मिन्प्रकाश उपजायते ।
ज्ञानं यदा तदा विद्याद्विवृद्धं सत्त्वमित्युत ॥ ११ ॥
]

\`v 12 [
लोभ: प्रवृत्तिरारम्भ: कर्मणामशम: स्पृहा ।
रजस्येतानि जायन्ते विवृद्धे भरतर्षभ ॥ १२ ॥
]

\`v 13 [
अप्रकाशोऽप्रवृत्तिश्च प्रमादो मोह एव च ।
तमस्येतानि जायन्ते विवृद्धे कुरुनन्दन ॥ १३ ॥
]

\`v 14 [
यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत् ।
तदोत्तमविदां लोकानमलान्प्रतिपद्यते ॥ १४ ॥
]

\`v 15 [
रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते ।
तथा प्रलीनस्तमसि मूढयोनिषु जायते ॥ १५ ॥
]

\`v 16 [
कर्मण: सुकृतस्याहु: सात्त्विकं निर्मलं फलम् ।
रजसस्तु फलं दु:खमज्ञानं तमस: फलम् ॥ १६ ॥
]

\`v 17 [
सत्त्वात्सञ्जायते ज्ञानं रजसो लोभ एव च ।
प्रमादमोहौ तमसो भवतोऽज्ञानमेव च ॥ १७ ॥
]

\`v 18 [
ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसा: ।
जघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसा: ॥ १८ ॥
]

\`v 19 [
नान्यं गुणेभ्य: कर्तारं यदा द्रष्टानुपश्यति ।
गुणेभ्यश्च परं वेत्ति मद्भ‍ावं सोऽधिगच्छति ॥ १९ ॥
]

\`v 20 [
गुणानेतानतीत्य त्रीन्देही देहसमुद्भ‍वान् ।
जन्ममृत्युजरादु:खैर्विमुक्तोऽमृतमश्न‍ुते ॥ २० ॥
]

अर्जुन उवाच
\`v 21 [
कैर्लिङ्गैस्त्रीन्गुणानेतानतीतो भवति प्रभो ।
किमाचार: कथं चैतांस्त्रीन्गुणानतिवर्तते ॥ २१ ॥
]

श्रीभगवानुवाच
\`v 22 [
प्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव ।
न द्वेष्टि सम्प्रवृत्तानि न निवृत्तानि काङ्‍क्षति ॥ २२ ॥
]

\`v 23 [
उदासीनवदासीनो गुणैर्यो न विचाल्यते ।
गुणा वर्तन्त इत्येवं योऽवतिष्ठति नेङ्गते ॥ २३ ॥
]

\`v 24 [
समदु:खसुख: स्वस्थ: समलोष्टाश्मकाञ्चन: ।
तुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुति: ॥ २४ ॥
]

\`v 25 [
मानापमानयोस्तुल्यस्तुल्यो मित्रारिपक्षयो: ।
सर्वारम्भपरित्यागी गुणातीत: स उच्यते ॥ २५ ॥
]

\`v 26 [
मां च योऽव्यभिचारेण भक्तियोगेन सेवते ।
स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते ॥ २६ ॥
]

\`v 27 [
ब्रह्मणो हि प्रतिष्ठाहममृतस्याव्ययस्य च ।
शाश्वतस्य च धर्मस्य सुखस्यैकान्तिकस्य च ॥ २७ ॥
]
`,"content/mula/15.vy":`\`set context { chapter.title = "पुरुषोत्तमयोगः" }

श्रीभगवानुवाच
\`v 1 [
ऊर्ध्वमूलमध:शाखमश्वत्थं प्राहुरव्ययम् ।
छन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित् ॥ १ ॥
]

\`v 2 [
अधश्चोर्ध्वं प्रसृतास्तस्य शाखा
गुणप्रवृद्धा विषयप्रवाला: ।
अधश्च मूलान्यनुसन्ततानि
कर्मानुबन्धीनि मनुष्यलोके ॥ २ ॥
]

\`v 3 [
न रूपमस्येह तथोपलभ्यते
नान्तो न चादिर्न च सम्प्रतिष्ठा ।
अश्वत्थमेनं सुविरूढमूल-
मसङ्गशस्त्रेण दृढेन छित्त्वा ॥ ३ ॥
]

\`v 4 [
तत: पदं तत्परिमार्गितव्यं
यस्मिन्गता न निवर्तन्ति भूय: ।
तमेव चाद्यं पुरुषं प्रपद्ये
यत: प्रवृत्ति: प्रसृता पुराणी ॥ ४ ॥
]

\`v 5 [
निर्मानमोहा जितसङ्गदोषा
अध्यात्मनित्या विनिवृत्तकामा: ।
द्वन्द्वैर्विमुक्ता: सुखदु:खसंज्ञै-
र्गच्छन्त्यमूढा: पदमव्ययं तत् ॥ ५ ॥
]

\`v 6 [
न तद्भ‍ासयते सूर्यो न शशाङ्को न पावक: ।
यद्ग‍त्वा न निवर्तन्ते तद्धाम परमं मम ॥ ६ ॥
]

\`v 7 [
ममैवांशो जीवलोके जीवभूत: सनातन: ।
मन:षष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ॥ ७ ॥
]

\`v 8 [
शरीरं यदवाप्‍नोति यच्च‍ाप्युत्क्रामतीश्वर: ।
गृहीत्वैतानि संयाति वायुर्गन्धानिवाशयात् ॥ ८ ॥
]

\`v 9 [
श्रोत्रं चक्षु: स्पर्शनं च रसनं घ्राणमेव च ।
अधिष्ठाय मनश्चायं विषयानुपसेवते ॥ ९ ॥
]

\`v 10 [
उत्क्रामन्तं स्थितं वाऽपि भुञ्जानं वा गुणान्वितम् ।
विमूढा नानुपश्यन्ति पश्यन्ति ज्ञानचक्षुष: ॥ १० ॥
]

\`v 11 [
यतन्तो योगिनश्चैनं पश्यन्त्यात्मन्यवस्थितम् ।
यतन्तोऽप्यकृतात्मानो नैनं पश्यन्त्यचेतस: ॥ ११ ॥
]

\`v 12 [
यदादित्यगतं तेजो जगद्भ‍ासयतेऽखिलम् ।
यच्च‍न्द्रमसि यच्च‍ाग्न‍ौ तत्तेजो विद्धि मामकम् ॥ १२ ॥
]

\`v 13 [
गामाविश्य च भूतानि धारयाम्यहमोजसा ।
पुष्णामि चौषधी: सर्वा: सोमो भूत्वा रसात्मक: ॥ १३ ॥
]

\`v 14 [
अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रित: ।
प्राणापानसमायुक्त: पचाम्यन्नं चतुर्विधम् ॥ १४ ॥
]

\`v 15 [
सर्वस्य चाहं हृदि सन्निविष्टो
मत्त: स्मृतिर्ज्ञानमपोहनं च ।
वेदैश्च सर्वैरहमेव वेद्यो
वेदान्तकृद्वेदविदेव चाहम् ॥ १५ ॥
]

\`v 16 [
द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च ।
क्षर: सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते ॥ १६ ॥
]

\`v 17 [
उत्तम: पुरुषस्त्वन्य: परमात्मेत्युदाहृत: ।
यो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वर: ॥ १७ ॥
]

\`v 18 [
यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तम: ।
अतोऽस्मि लोके वेदे च प्रथित: पुरुषोत्तम: ॥ १८ ॥
]

\`v 19 [
यो मामेवमसम्मूढो जानाति पुरुषोत्तमम् ।
स सर्वविद्भ‍जति मां सर्वभावेन भारत ॥ १९ ॥
]

\`v 20 [
इति गुह्यतमं शास्त्रमिदमुक्तं मयानघ ।
एतद्‍बुद्ध्वा बुद्धिमान्स्यात्कृतकृत्यश्च भारत ॥ २० ॥
]
`,"content/mula/16.vy":`\`set context { chapter.title = "दैवासुरसम्पद्विभागयोगः" }

श्रीभगवानुवाच
\`v 1 [
अभयं सत्त्वसंश‍ुद्धिर्ज्ञानयोगव्यवस्थिति: ।
दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ॥ १ ॥
]

\`v 2 [
अहिंसा सत्यमक्रोधस्त्याग: शान्तिरपैश‍ुनम् ।
दया भूतेष्वलोलुप्‍त्वं मार्दवं ह्रीरचापलम् ॥ २ ॥
]

\`v 3 [
तेज: क्षमा धृति: शौचमद्रोहो नातिमानिता ।
भवन्ति सम्पदं दैवीमभिजातस्य भारत ॥ ३ ॥
]

\`v 4 [
दम्भो दर्पोऽभिमानश्च क्रोध: पारुष्यमेव च ।
अज्ञानं चाभिजातस्य पार्थ सम्पदमासुरीम् ॥ ४ ॥
]

\`v 5 [
दैवी सम्पद्विमोक्षाय निबन्धायासुरी मता ।
मा श‍ुच: सम्पदं दैवीमभिजातोऽसि पाण्डव ॥ ५ ॥
]

\`v 6 [
द्वौ भूतसर्गौ लोकेऽस्मिन्दैव आसुर एव च ।
दैवो विस्तरश: प्रोक्त आसुरं पार्थ मे श‍ृणु ॥ ६ ॥
]

\`v 7 [
प्रवृत्तिं च निवृत्तिं च जना न विदुरासुरा: ।
न शौचं नापि चाचारो न सत्यं तेषु विद्यते ॥ ७ ॥
]

\`v 8 [
असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम् ।
अपरस्परसम्भूतं किमन्यत्कामहैतुकम् ॥ ८ ॥
]

\`v 9 [
एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धय: ।
प्रभवन्त्युग्रकर्माण: क्षयाय जगतोऽहिता: ॥ ९ ॥
]

\`v 10 [
काममाश्रित्य दुष्पूरं दम्भमानमदान्विता: ।
मोहाद्‍गृहीत्वासद्‍ग्राहान्प्रवर्तन्तेऽश‍ुचिव्रता: ॥ १० ॥
]

\`v 11 [
चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिता: ।
कामोपभोगपरमा एतावदिति निश्चिता: ॥ ११ ॥
]

\`v 12 [
आशापाशशतैर्बद्धा: कामक्रोधपरायणा: ।
ईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान् ॥ १२ ॥
]

\`v 13 [
इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम् ।
इदमस्तीदमपि मे भविष्यति पुनर्धनम् ॥ १३ ॥
]

\`v 14 [
असौ मया हत: शत्रुर्हनिष्ये चापरानपि  ।
ईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी ॥ १४ ॥
]

\`v 15 [
आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सदृशो मया ।
यक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिता: ॥ १५ ॥
]

\`v 16 [
अनेकचित्तविभ्रान्ता मोहजालसमावृता: ।
प्रसक्ता: कामभोगेषु पतन्ति नरकेऽश‍ुचौ ॥ १६ ॥
]

\`v 17 [
आत्मसम्भाविता: स्तब्धा धनमानमदान्विता: ।
यजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम् ॥ १७ ॥
]

\`v 18 [
अहङ्कारं बलं दर्पं कामं क्रोधं च संश्रिता: ।
मामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयका: ॥ १८ ॥
]

\`v 19 [
तानहं द्विषत: क्रूरान्संसारेषु नराधमान् ।
क्षिपाम्यजस्रमश‍ुभानासुरीष्वेव योनिषु ॥ १९ ॥
]

\`v 20 [
आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि ।
मामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम् ॥ २० ॥
]

\`v 21 [
त्रिविधं नरकस्येदं द्वारं नाशनमात्मन: ।
काम: क्रोधस्तथा लोभस्तस्मादेतत्‍त्रयं त्यजेत् ॥ २१ ॥
]

\`v 22 [
एतैर्विमुक्त: कौन्तेय तमोद्वारैस्त्रिभिर्नर: ।
आचरत्यात्मन: श्रेयस्ततो याति परां गतिम् ॥ २२ ॥
]

\`v 23 [
य: शास्त्रविधिमुत्सृज्य वर्तते कामकारत: ।
न स सिद्धिमवाप्‍नोति न सुखं न परां गतिम् ॥ २३ ॥
]

\`v 24 [
तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ ।
ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि ॥ २४ ॥
]
`,"content/mula/17.vy":`\`set context { chapter.title = "श्रद्धात्रयविभागयोगः" }

अर्जुन उवाच
\`v 1 [
ये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयान्विता: ।
तेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तम: ॥ १ ॥
]

श्रीभगवानुवाच
\`v 2 [
त्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा ।
सात्त्विकी राजसी चैव तामसी चेति तां श‍ृणु ॥ २ ॥
]

\`v 3 [
सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत ।
श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्ध: स एव स: ॥ ३ ॥
]

\`v 4 [
यजन्ते सात्त्विका देवान्यक्षरक्षांसि राजसा: ।
प्रेतान्भूतगणांश्चान्ये यजन्ते तामसा जना: ॥ ४ ॥
]

\`v 5 [
अशास्त्रविहितं घोरं तप्यन्ते ये तपो जना: ।
दम्भाहङ्कारसंयुक्ता: कामरागबलान्विता: ॥ ५ ॥
]

\`v 6 [
कर्षयन्त: शरीरस्थं भूतग्राममचेतस: ।
मां चैवान्त: शरीरस्थं तान्विद्ध्यासुरनिश्चयान् ॥ ६ ॥
]

\`v 7 [
आहारस्त्वपि सर्वस्य त्रिविधो भवति प्रिय: ।
यज्ञस्तपस्तथा दानं तेषां भेदमिमं श‍ृणु ॥ ७ ॥
]

\`v 8 [
आयु:सत्त्वबलारोग्यसुखप्रीतिविवर्धना: ।
रस्या: स्‍निग्धा: स्थिरा हृद्या आहारा: सात्त्विकप्रिया: ॥ ८ ॥
]

\`v 9 [
कट्‌वम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिन: ।
आहारा राजसस्येष्टा दु:खशोकामयप्रदा: ॥ ९ ॥
]

\`v 10 [
यातयामं गतरसं पूति पर्युषितं च यत् ।
उच्छिष्टमपि चामेध्यं भोजनं तामसप्रियम् ॥ १० ॥
]

\`v 11 [
अफलाकाङ्‌‍क्षिभिर्यज्ञो विधिदिष्टो य इज्यते ।
यष्टव्यमेवेति मन: समाधाय स सात्त्विक: ॥ ११ ॥
]

\`v 12 [
अभिसन्धाय तु फलं दम्भार्थमपि चैव यत् ।
इज्यते भरतश्रेष्ठ तं यज्ञं विद्धि राजसम् ॥ १२ ॥
]

\`v 13 [
विधिहीनमसृष्टान्नं मन्‍त्रहीनमदक्षिणम् ।
श्रद्धाविरहितं यज्ञं तामसं परिचक्षते ॥ १३ ॥
]

\`v 14 [
देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम् ।
ब्रह्मचर्यमहिंसा च शारीरं तप उच्यते ॥ १४ ॥
]

\`v 15 [
अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत् ।
स्वाध्यायाभ्यसनं चैव वाङ्‍मयं तप उच्यते ॥ १५ ॥
]

\`v 16 [
मन:प्रसाद: सौम्यत्वं मौनमात्मविनिग्रह: ।
भावसंश‍ुद्धिरित्येतत्तपो मानसमुच्यते ॥ १६ ॥
]

\`v 17 [
श्रद्धया परया तप्‍तं तपस्तत्‍त्रिविधं नरै: ।
अफलाकाङ्‌‍क्षिभिर्युक्तै: सात्त्विकं परिचक्षते ॥ १७ ॥
]

\`v 18 [
सत्कारमानपूजार्थं तपो दम्भेन चैव यत् ।
क्रियते तदिह प्रोक्तं राजसं चलमध्रुवम् ॥ १८ ॥
]

\`v 19 [
मूढग्राहेणात्मनो यत्पीडया क्रियते तप: ।
परस्योत्सादनार्थं वा तत्तामसमुदाहृतम् ॥ १९ ॥
]

\`v 20 [
दातव्यमिति यद्दानं दीयतेऽनुपकारिणे ।
देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम् ॥ २० ॥
]

\`v 21 [
यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुन: ।
दीयते च परिक्ल‍ि‍ष्टं तद्दानं राजसं स्मृतम् ॥ २१ ॥
]

\`v 22 [
अदेशकाले यद्दानमपात्रेभ्यश्च दीयते ।
असत्कृतमवज्ञातं तत्तामसमुदाहृतम् ॥ २२ ॥
]

\`v 23 [
ॐ तत्सदिति निर्देशो ब्रह्मणस्त्रिविध: स्मृत: ।
ब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिता: पुरा ॥ २३ ॥
]

\`v 24 [
तस्माद् ॐ इत्युदाहृत्य यज्ञदानतप:क्रिया: ।
प्रवर्तन्ते विधानोक्ता: सततं ब्रह्मवादिनाम् ॥ २४ ॥
]

\`v 25 [
तदित्यनभिसन्धाय फलं यज्ञतप:क्रिया: ।
दानक्रियाश्च विविधा: क्रियन्ते मोक्षकाङ्‌‍क्षिभि: ॥ २५ ॥
]

\`v 26 [
सद्भ‍ावे साधुभावे च सदित्येतत्प्रयुज्यते ।
प्रशस्ते कर्मणि तथा सच्छब्द: पार्थ युज्यते ॥ २६ ॥
]

\`v 27 [
यज्ञे तपसि दाने च स्थिति: सदिति चोच्यते ।
कर्म चैव तदर्थीयं सदित्येवाभिधीयते ॥ २७ ॥
]

\`v 28 [
अश्रद्धया हुतं दत्तं तपस्तप्‍तं कृतं च यत् ।
असदित्युच्यते पार्थ न च तत्प्रेत्य नो इह ॥ २८ ॥
]
`,"content/mula/18.vy":`\`set context { chapter.title = "मोक्षसन्न्यासयोगः" }

\`v 1 [
सन्न्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम् ।
त्यागस्य च हृषीकेश पृथक्केशिनिषूदन ॥ १ ॥
]

श्रीभगवानुवाच ।
\`v 2 [
काम्यानां कर्मणां न्यासं सन्न्यासं कवयो विदु: ।
सर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणा: ॥ २ ॥
]

\`v 3 [
त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिण: ।
यज्ञदानतप:कर्म न त्याज्यमिति चापरे ॥ ३ ॥
]

\`v 4 [
निश्चयं श‍ृणु मे तत्र त्यागे भरतसत्तम ।
त्यागो हि पुरुषव्याघ्र त्रिविध: सम्प्रकीर्तित: ॥ ४ ॥
]

\`v 5 [
यज्ञदानतप:कर्म न त्याज्यं कार्यमेव तत् ।
यज्ञो दानं तपश्चैव पावनानि मनीषिणाम् ॥ ५ ॥
]

\`v 6 [
एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च ।
कर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम् ॥ ६ ॥
]

\`v 7 [
नियतस्य तु सन्न्यास: कर्मणो नोपपद्यते ।
मोहात्तस्य परित्यागस्तामस: परिकीर्तित: ॥ ७ ॥
]

\`v 8 [
दु:खमित्येव यत्कर्म कायक्ल‍ेशभयात्त्यजेत् ।
स कृत्वा राजसं त्यागं नैव त्यागफलं लभेत् ॥ ८ ॥
]

\`v 9 [
कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन ।
सङ्गं त्यक्त्वा फलं चैव स त्याग: सात्त्विको मत: ॥ ९ ॥
]

\`v 10 [
न द्वेष्ट्यकुशलं कर्म कुशले नानुषज्ज‍ते ।
त्यागी सत्त्वसमाविष्टो मेधावी छिन्नसंशय: ॥ १० ॥
]

\`v 11 [
न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषत: ।
यस्तु कर्मफलत्यागी स त्यागीत्यभिधीयते ॥ ११ ॥
]

\`v 12 [
अनिष्टमिष्टं मिश्रं च त्रिविधं कर्मण: फलम् ।
भवत्यत्यागिनां प्रेत्य न तु सन्न्यासिनां क्‍वचित् ॥ १२ ॥
]

\`v 13 [
पञ्चैतानि महाबाहो कारणानि निबोध मे ।
सांख्ये कृतान्ते प्रोक्तानि सिद्धये सर्वकर्मणाम् ॥ १३ ॥
]

\`v 14 [
अधिष्ठानं तथा कर्ता करणं च पृथग्विधम् ।
विविधाश्च पृथक्‍चेष्टा दैवं चैवात्र पञ्चमम् ॥ १४ ॥
]

\`v 15 [
शरीरवाङ्‍मनोभिर्यत्कर्म प्रारभते नर: ।
न्याय्यं वा विपरीतं वा पञ्चैते तस्य हेतव: ॥ १५ ॥
]

\`v 16 [
तत्रैवं सति कर्तारमात्मानं केवलं तु य: ।
पश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मति: ॥ १६ ॥
]

\`v 17 [
यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते ।
हत्वापि स इमाँल्ल‍ोकान्न हन्ति न निबध्यते ॥ १७ ॥
]

\`v 18 [
ज्ञानं ज्ञेयं परिज्ञाता त्रिविधा कर्मचोदना ।
करणं कर्म कर्तेति त्रिविध: कर्मसङ्‍ग्रह: ॥ १८ ॥
]

\`v 19 [
ज्ञानं कर्म च कर्ता च त्रिधैव गुणभेदत: ।
प्रोच्यते गुणसंख्याने यथावच्छृणु तान्यपि ॥ १९ ॥
]

\`v 20 [
सर्वभूतेषु येनैकं भावमव्ययमीक्षते ।
अविभक्तं विभक्तेषु तज्ज्ञानं विद्धि सात्त्विकम् ॥ २० ॥
]

\`v 21 [
पृथक्त्वेन तु यज्ज्ञानं नानाभावान्पृथग्विधान् ।
वेत्ति सर्वेषु भूतेषु तज्ज्ञानं विद्धि राजसम् ॥ २१ ॥
]

\`v 22 [
यत्तु कृत्स्नवदेकस्मिन्कार्ये सक्तमहैतुकम् ।
अतत्त्वार्थवदल्पं च तत्तामसमुदाहृतम् ॥ २२ ॥
]

\`v 23 [
नियतं सङ्गरहितमरागद्वेषत: कृतम् ।
अफलप्रेप्सुना कर्म यत्तत्सात्त्विकमुच्यते ॥ २३ ॥
]

\`v 24 [
यत्तु कामेप्सुना कर्म साहङ्कारेण वा पुन: ।
क्रियते बहुलायासं तद्राजसमुदाहृतम् ॥ २४ ॥
]

\`v 25 [
अनुबन्धं क्षयं हिंसामनपेक्ष्य च पौरुषम् ।
मोहादारभ्यते कर्म यत्तत्तामसमुच्यते ॥ २५ ॥
]

\`v 26 [
मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वित: ।
सिद्ध्यसिद्ध्योर्निर्विकार: कर्ता सात्त्विक उच्यते ॥ २६ ॥
]

\`v 27 [
रागी कर्मफलप्रेप्सुर्लुब्धो हिंसात्मकोऽश‍ुचि: ।
हर्षशोकान्वित: कर्ता राजस: परिकीर्तित: ॥ २७ ॥
]

\`v 28 [
अयुक्त: प्राकृत: स्तब्ध: शठो नैष्कृतिकोऽलस: ।
विषादी दीर्घसूत्री च कर्ता तामस उच्यते ॥ २८ ॥
]

\`v 29 [
बुद्धेर्भेदं धृतेश्चैव गुणतस्त्रिविधं श‍ृणु ।
प्रोच्यमानमशेषेण पृथक्त्वेन धनञ्जय ॥ २९ ॥
]

\`v 30 [
प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये ।
बन्धं मोक्षं च या वेत्ति बुद्धि: सा पार्थ सात्त्विकी ॥ ३० ॥
]

\`v 31 [
यया धर्ममधर्मं च कार्यं चाकार्यमेव च ।
अयथावत्प्रजानाति बुद्धि: सा पार्थ राजसी ॥ ३१ ॥
]

\`v 32 [
अधर्मं धर्ममिति या मन्यते तमसावृता ।
सर्वार्थान्विपरीतांश्च बुद्धि: सा पार्थ तामसी ॥ ३२ ॥
]

\`v 33 [
धृत्या यया धारयते मन:प्राणेन्द्रियक्रिया: ।
योगेनाव्यभिचारिण्या धृति: सा पार्थ सात्त्विकी ॥ ३३ ॥
]

\`v 34 [
यया तु धर्मकामार्थान्धृत्या धारयतेऽर्जुन ।
प्रसङ्गेन फलाकाङ्क्षी धृति: सा पार्थ राजसी ॥ ३४ ॥
]

\`v 35 [
यया स्वप्‍नं भयं शोकं विषादं मदमेव च ।
न विमुञ्चति दुर्मेधा धृति: सा पार्थ तामसी ॥ ३५ ॥
]

\`v 36 [
सुखं त्विदानीं त्रिविधं श‍ृणु मे भरतर्षभ ।
अभ्यासाद्रमते यत्र दु:खान्तं च निगच्छति ॥ ३६ ॥
]

\`v 37 [
यत्तदग्रे विषमिव परिणामेऽमृतोपमम् ।
तत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम् ॥ ३७ ॥
]

\`v 38 [
विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम् ।
परिणामे विषमिव तत्सुखं राजसं स्मृतम् ॥ ३८ ॥
]

\`v 39 [
यदग्रे चानुबन्धे च सुखं मोहनमात्मन: ।
निद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम् ॥ ३९ ॥
]

\`v 40 [
न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुन: ।
सत्त्वं प्रकृतिजैर्मुक्तं यदेभि: स्यात्‍त्रिभिर्गुणै: ॥ ४० ॥
]

\`v 41 [
ब्राह्मणक्षत्रियविशां श‍ूद्राणां च परन्तप ।
कर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणै: ॥ ४१ ॥
]

\`v 42 [
शमो दमस्तप: शौचं क्षान्तिरार्जवमेव च ।
ज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम् ॥ ४२ ॥
]

\`v 43 [
शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम् ।
दानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम् ॥ ४३ ॥
]

\`v 44 [
कृषिगोरक्ष्यवाणिज्यं वैश्यकर्म स्वभावजम् ।
परिचर्यात्मकं कर्म श‍ूद्रस्यापि स्वभावजम् ॥ ४४ ॥
]

\`v 45 [
स्वे स्वे कर्मण्यभिरत: संसिद्धिं लभते नर
स्वकर्मनिरत: सिद्धिं यथा विन्दति तच्‍छृणु ॥ ४५ ॥
]

\`v 46 [
यत: प्रवृत्तिर्भूतानां येन सर्वमिदं ततम् ।
स्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानव: ॥ ४६ ॥
]

\`v 47 [
श्रेयान्स्वधर्मो विगुण: परधर्मात्स्वनुष्ठितात् ।
स्वभावनियतं कर्म कुर्वन्नाप्‍नोति किल्बिषम् ॥ ४७ ॥
]

\`v 48 [
सहजं कर्म कौन्तेय सदोषमपि न त्यजेत् ।
सर्वारम्भा हि दोषेण धूमेनाग्न‍िरिवावृता: ॥ ४८ ॥
]

\`v 49 [
असक्तबुद्धि: सर्वत्र जितात्मा विगतस्पृह: ।
नैष्कर्म्यसिद्धिं परमां सन्न्यासेनाधिगच्छति ॥ ४९ ॥
]

\`v 50 [
सिद्धिं प्राप्‍तो यथा ब्रह्म तथाप्‍नोति निबोध मे ।
समासेनैव कौन्तेय निष्ठा ज्ञानस्य या परा ॥ ५० ॥
]

\`v 51 [
बुद्ध्या विश‍ुद्धया युक्तो धृत्यात्मानं नियम्य च ।
शब्दादीन्विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च ॥ ५१ ॥
]

\`v 52 [
विविक्तसेवी लघ्वाशी यतवाक्कायमानस: ।
ध्यानयोगपरो नित्यं वैराग्यं समुपाश्रित: ॥ ५२ ॥
]

\`v 53 [
अहङ्कारं बलं दर्पं कामं क्रोधं परिग्रहम् ।
विमुच्य निर्मम: शान्तो ब्रह्मभूयाय कल्पते ॥ ५३ ॥
]

\`v 54 [
ब्रह्मभूत: प्रसन्नात्मा न शोचति न काङ्क्षति ।
सम: सर्वेषु भूतेषु मद्भ‍‍क्तिं लभते पराम् ॥ ५४ ॥
]

\`v 55 [
भक्त्य‍ा मामभिजानाति यावान्यश्चास्मि तत्त्वत: ।
ततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम् ॥ ५५ ॥
]

\`v 56 [
सर्वकर्माण्यपि सदा कुर्वाणो मद्‍व्यपाश्रय: ।
मत्प्रसादादवाप्‍नोति शाश्वतं पदमव्ययम् ॥ ५६ ॥
]

\`v 57 [
चेतसा सर्वकर्माणि मयि सन्न्यस्य मत्पर: ।
बुद्धियोगमुपाश्रित्य मच्च‍ित्त: सततं भव ॥ ५७ ॥
]

\`v 58 [
मच्च‍ित्त: सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि ।
अथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्‍क्ष्यसि ॥ ५८ ॥
]

\`v 59 [
यदहङ्कारमाश्रित्य न योत्स्य इति मन्यसे ।
मिथ्यैष व्यवसायस्ते प्रकृतिस्त्वां नियोक्ष्यति ॥ ५९ ॥
]

\`v 60 [
स्वभावजेन कौन्तेय निबद्ध: स्वेन कर्मणा ।
कर्तुं नेच्छसि यन्मोहात्करिष्यस्यवशोऽपि तत् ॥ ६० ॥
]

\`v 61 [
ईश्वर: सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति ।
भ्रामयन्सर्वभूतानि यन्‍त्रारूढानि मायया ॥ ६१ ॥
]

\`v 62 [
तमेव शरणं गच्छ सर्वभावेन भारत ।
तत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम् ॥ ६२ ॥
]

\`v 63 [
इति ते ज्ञानमाख्यातं गुह्याद्‍‍गुह्यतरं मया ।
विमृश्यैतदशेषेण यथेच्छसि तथा कुरु ॥ ६३ ॥
]

\`v 64 [
सर्वगुह्यतमं भूय: श‍ृणु मे परमं वच: ।
इष्टोऽसि मे दृढमिति ततो वक्ष्यामि ते हितम् ॥ ६४ ॥
]

\`v 65 [
मन्मना भव मद्भ‍क्तो मद्याजी मां नमस्कुरु ।
मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ॥ ६५ ॥
]

\`v 66 [
सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।
अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा श‍ुच: ॥ ६६ ॥
]

\`v 67 [
इदं ते नातपस्काय नाभक्ताय कदाचन ।
न चाश‍ुश्रूषवे वाच्यं न च मां योऽभ्यसूयति ॥ ६७ ॥
]

\`v 68 [
य इदं परमं गुह्यं मद्भ‍क्तेष्वभिधास्यति ।
भक्तिं मयि परां कृत्वा मामेवैष्यत्यसंशय: ॥ ६८ ॥
]

\`v 69 [
न च तस्मान्मनुष्येषु कश्चिन्मे प्रियकृत्तम: ।
भविता न च मे तस्मादन्य: प्रियतरो भुवि ॥ ६९ ॥
]

\`v 70 [
अध्येष्यते च य इमं धर्म्यं संवादमावयो: ।
ज्ञानयज्ञेन तेनाहमिष्ट: स्यामिति मे मति: ॥ ७० ॥
]

\`v 71 [
श्रद्धावाननसूयश्च श‍ृणुयादपि यो नर: ।
सोऽपि मुक्त: शुभाँल्ल‍ोकान्प्राप्‍नुयात्पुण्यकर्मणाम् ॥ ७१ ॥
]

\`v 72 [
कच्च‍िदेतच्छ्रुतं पार्थ त्वयैकाग्रेण चेतसा ।
कच्च‍िदज्ञानसम्मोह: प्रणष्टस्ते धनञ्जय ॥ ७२ ॥
]

\`v 73 [
नष्टो मोह: स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत ।
स्थितोऽस्मि गतसन्देह: करिष्ये वचनं तव ॥ ७३ ॥
]

\`v 74 [
इत्यहं वासुदेवस्य पार्थस्य च महात्मन: ।
संवादमिममश्रौषमद्भुतं रोमहर्षणम् ॥ ७४ ॥
]

\`v 75 [
व्यासप्रसादाच्छ्रुतवानेतद्‍गुह्यमहं परम् ।
योगं योगेश्वरात्कृष्णात्साक्षात्कथयत: स्वयम् ॥ ७५ ॥
]

\`v 76 [
राजन्संस्मृत्य संस्मृत्य संवादमिममद्भुतम् ।
केशवार्जुनयो: पुण्यं हृष्यामि च मुहुर्मुहु: ॥ ७६ ॥
]

\`v 77 [
तच्च‍ संस्मृत्य संस्मृत्य रूपमत्यद्भुतं हरे: ।
विस्मयो मे महान्‍राजन्हृष्यामि च पुन: पुन: ॥ ७७ ॥
]

\`v 78 [
यत्र योगेश्वर: कृष्णो यत्र पार्थो धनुर्धर: ।
तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥ ७८ ॥
]
`,"content/mula/2.vy":`\`set context { chapter.title = "साङ्ख्ययोगः" }

सञ्जय उवाच
\`v 1 [
तं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम् ।
विषीदन्तमिदं वाक्यमुवाच मधुसूदनः ॥ १ ॥
]

श्री भगवानुवाच
\`v 2 [
कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम् ।
अनार्यजुष्टमस्वर्ग्यकीर्तिकरमर्जुन ॥ २ ॥
]

\`v 3 [
क्ल‍ैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते ।
क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ॥ ३ ॥
]

अर्जुन उवाच
\`v 4 [
कथं भीष्ममहं संख्ये द्रोणं च मधुसूदन ।
इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन ॥ ४ ॥
]

\`v 5 [
गुरूनहत्वा हि महानुभावान्
श्रेयो भोक्तुं भैक्ष्यमपीह लोके ।
हत्वार्थकामांस्तु गुरूनिहैव
भुज्ज‍ीय भोगान्‍रुधिरप्रदिग्धान् ॥ ५ ॥
]

\`v 6 [
न चैतद्विद्मः कतरन्नो गरीयो
यद्वा जयेम यदि वा नो जयेयुः ।
यानेव हत्वा न जिजीविषाम-
स्तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः ॥ ६ ॥
]

\`v 7 [
कार्पण्यदोषोपहतस्वभावः
पृच्छामि त्वां धर्मसम्मूढचेताः ।
यच्छ्रेयः स्यान्निश्‍चितं ब्रूहि तन्मे
शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ॥ ७ ॥
]

\`v 8 [
न हि प्रपश्यामि ममापनुद्याद् -
यच्छोकमुच्छोषणमिन्द्रियाणाम् ।
अवाप्य भूभावसपत्‍नमृद्धं
राज्यं सुराणामपि चाधिपत्यम् ॥ ८ ॥
]

सञ्जय उवाच
\`v 9 [
एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तपः ।
न योत्स्य इति गोविन्दामुक्त्वा तूष्णीं बभूव ह ॥ ९ ॥
]

\`v 10 [
तमुवाच हृषीकेशः प्रहसन्निव भारत ।
सेनयोरूभयोर्मध्ये विषीदन्तमिदं वचः ॥ १० ॥
]

श्री भगवानुवाच
\`v 11 [
अशोच्यनन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे ।
गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥ ११ ॥
]

\`v 12 [
न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः ।
न चैव नभविष्यामः सर्वे वयमतः परम् ॥ १२ ॥
]

\`v 13 [
देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा ।
तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ॥ १३ ॥
]

\`v 14 [
मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः ।
आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥ १४ ॥
]

\`v 15 [
यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ ।
समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते ॥ १५ ॥
]

\`v 16 [
नासतो विद्यते भावो नाभावो विद्यते सतः ।
उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ॥ १६ ॥
]

\`v 17 [
अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् ।
विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति ॥ १७ ॥
]

\`v 18 [
अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः ।
अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत ॥ १८ ॥
]

\`v 19 [
य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् ।
उभौ तौ न विजानीतो नायं हन्ति न हन्यते ॥ १९ ॥
]

\`v 20 [
न जायते म्रियते वा कदाचि-
न्नायं भूत्वा भविता वा न भूयः ।
अजो नित्यः शाश्वतोऽयं पुराणो
न हन्यते हन्यमाने शरीरे ॥ २० ॥
]

\`v 21 [
वेदाविनाशिनं नित्यं य एनमजमव्ययम् ।
कथं स पुरुषः पार्थ कं घातयति हन्ति कम् ॥ २१ ॥
]

\`v 22 [
वासांसि जीर्णानि यथा विहाय
नवानि गृह्णाति नरोऽपराणि ।
तथा शरीराणि विहाय जीर्णा-
न्यन्यानि संयाति नवानि देही ॥ २२ ॥
]

\`v 23 [
नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः ।
न चैनं क्ल‍ेदयन्त्यापो न शोषयति मारुतः ॥ २३ ॥
]

\`v 24 [
अच्छेद्योऽयमदाह्योऽयमक्ल‍ेद्योऽशोष्य एव च ।
नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः ॥ २४ ॥
]

\`v 25 [
अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते ।
तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि ॥ २५ ॥
]

\`v 26 [
अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम् ।
तथापि त्वं महाबाहो नैनं शोचितुमर्हसि ॥ २६ ॥
]

\`v 27 [
जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च ।
तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि ॥ २७ ॥
]

\`v 28 [
अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत ।
अव्यक्तनिधनान्येव तत्र का परिदेवना ॥ २८ ॥
]

\`v 29 [
आश्चर्यवत्पश्यति कश्चिदेन -
माश्चर्यवद्वदति तथैव चान्यः ।
आश्चर्यवच्च‍ैनमन्यः श‍ृणोति
श्रुत्वाप्येनं वेद न चैव कश्चित् ॥ २९ ॥
]

\`v 30 [
देही नित्यमवध्योऽयं देहे सर्वस्य भारत ।
तस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि ॥ ३० ॥
]

\`v 31 [
स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि ।
धर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते ॥ ३१ ॥
]

\`v 32 [
यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम् ।
सुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम् ॥ ३२ ॥
]

\`v 33 [
अथ चेत्त्वमिमं धर्म्यं सङ्ग्रामं न करिष्यसि ।
ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि ॥ ३३ ॥
]

\`v 34 [
अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम् ।
सम्भावितस्य चाकीर्तिर्मरणादतिरिच्यते ॥ ३४ ॥
]

\`v 35 [
भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः ।
येषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम् ॥ ३५ ॥
]

\`v 36 [
अवाच्यवादांश्च बहून्वदिष्यन्ति तवाहिताः ।
निन्दन्तस्तव सामर्थ्य ततो दुःखतरं नु किम् ॥ ३६ ॥
]

\`v 37 [
हतो वा प्राप्स्यसि स्वर्ग जित्वा वा भोक्ष्यसे महीम् ।
तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः ॥ ३७ ॥
]

\`v 38 [
सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ ।
ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि ॥ ३८ ॥
]

\`v 39 [
एषा तेऽभिहिता सांख्ये बुद्धिर्योगे त्विमां श‍ृणु ।
बुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि ॥ ३९ ॥
]

\`v 40 [
नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते ।
स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात् ॥ ४० ॥
]

\`v 41 [
व्यवसायात्मिका बुद्धिरेकेह कुरूनन्दन ।
बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम् ॥ ४१ ॥
]

\`v 42 [
यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः ।
वेदवादरताः पार्थ नान्यदस्तीति वादिनः ॥ ४२ ॥
]

\`v 43 [
कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम् ।
क्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति ॥ ४३ ॥
]

\`v 44 [
भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम् ।
व्यवसायात्मिका बुद्धिः समाधौ न विधीयते ॥ ४४ ॥
]

\`v 45 [
त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन ।
निर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान् ॥ ४५ ॥
]

\`v 46 [
यावानर्थ उदपाने सर्वतः सम्प्लुतोदके ।
तावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः ॥ ४६ ॥
]

\`v 47 [
कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ ४७ ॥
]

\`v 48 [
योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।
सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥ ४८ ॥
]

\`v 49 [
दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय ।
बुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः ॥ ४९ ॥
]

\`v 50 [
बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते ।
तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ॥ ५० ॥
]

\`v 51 [
कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः ।
जन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम् ॥ ५१ ॥
]

\`v 52 [
यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति ।
तदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च ॥ ५२ ॥
]

\`v 53 [
श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला ।
समाधावचला बुद्धिस्तदा योगमवाप्स्यसि ॥ ५३ ॥
]

अर्जुन उवाच
\`v 54 [
स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव ।
स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् ॥ ५४ ॥
]

श्रीभगवानुवाच
\`v 55 [
प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान् ।
आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते ॥ ५५ ॥
]

\`v 56 [
दुःखेष्वनुद्विग्न‍मनाः सुखेषु विगतस्पृहः ।
वीतरागभयक्रोधः स्थिधीर्मुनिरुच्यते ॥ ५६ ॥
]

\`v 57 [
यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य श‍ुभाश‍ुभम् ।
नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता ॥ ५७ ॥
]

\`v 58 [
यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः ।
इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ॥ ५८ ॥
]

\`v 59 [
विषया विनिवर्तन्ते निराहारस्य देहिनः ।
रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते ॥ ५९ ॥
]

\`v 60 [
यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः ।
इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः ॥ ६० ॥
]

\`v 61 [
तानि सर्वाणि संयम्य युक्त आसीत मत्परः ।
वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ॥ ६१ ॥
]

\`v 62 [
ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते ।
सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ॥ ६२ ॥
]

\`v 63 [
क्रोधाद्भ‍वति सम्मोहः सम्मोहात्स्मृतिविभ्रमः ।
स्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ॥ ६३ ॥
]

\`v 64 [
रागद्वेषविमुक्तैस्तु विषयनिन्द्रियैश्चरन् ।
आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति ॥ ६४ ॥
]

\`v 65 [
प्रसादे सर्वदुःखानां हानिरस्योपजायते ।
प्रसन्नचेतसो ह्याश‍ु बुद्धिः पर्यवतिष्ठते ॥ ६५ ॥
]

\`v 66 [
नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना ।
न चाभावयतः शान्तिरशान्तस्य कुतः सुखम् ॥ ६६ ॥
]

\`v 67 [
इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते ।
तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि ॥ ६७ ॥
]

\`v 68 [
तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः ।
इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ॥ ६८ ॥
]

\`v 69 [
या निशा सर्वभूतानां तस्यां जागर्ति संयमी ।
यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः ॥ ६९ ॥
]

\`v 70 [
आपूर्यमाणमचलप्रतिष्ठं
समुद्रमापः प्रविशन्ति यद्वत् ।
तद्वत्कामा यं प्रविशन्ति सर्वे
स शान्तिमाप्‍नोति न कामकामी ॥ ७० ॥
]

\`v 71 [
विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः ।
निर्ममो निरहङ्कार स शान्तिमधिगच्छति ॥ ७१ ॥
]

\`v 72 [
एषा ब्राह्मी स्थितिःपार्थ नैनां प्राप्य विमुह्यति ।
स्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति ॥ ७२ ॥
]
`,"content/mula/3.vy":`\`set context { chapter.title = "कर्मयोगः" }

अर्जुन उवाच
\`v 1 [
ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन ।
तत्किं कर्मणि घोरे मां नियोजयसि केशव ॥ १ ॥
]

\`v 2 [
व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे ।
तदेकं वद निश्चित्य येन श्रेयोऽहमाप्‍नुयाम् ॥ २ ॥
]

श्रीभगवानुवाच
\`v 3 [
लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ ।
ज्ञानयोगेन सांख्यानां कर्मयोगेन योगिनाम् ॥ ३ ॥
]

\`v 4 [
न कर्मणामनारम्भान्नैष्कर्म्य पुरुषोऽश्न‍ुते ।
न च सन्न्यसनादेव सिद्धिं समधिगच्छति ॥ ४ ॥
]

\`v 5 [
न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् ।
कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः ॥ ५ ॥
]

\`v 6 [
कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् ।
इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते ॥ ६ ॥
]

\`v 7 [
यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन ।
कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ॥ ७ ॥
]

\`v 8 [
नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः ।
शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः ॥ ८ ॥
]

\`v 9 [
यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः ।
तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर ॥ ९ ॥
]

\`v 10 [
सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः ।
अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् ॥ १० ॥
]

\`v 11 [
देवान्भावयतातेन ते देवा भावयन्तु वः ।
परस्परं भावयन्तः श्रेयः परमवाप्स्यथ ॥ ११ ॥
]

\`v 12 [
इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः ।
तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः ॥ १२ ॥
]

\`v 13 [
यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषै ।
भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् ॥ १३ ॥
]

\`v 14 [
अन्नाद्भ‍वन्ति भूतानि पर्जन्यादन्नसम्भवः ।
यज्ञा‍द्भ‍‍वति पर्जन्यो यज्ञः कर्मसमुद्भ‍वः ॥ १४ ॥
]

\`v 15 [
कर्म ब्रह्मोद्भ‍वं विद्धि ब्रह्माक्षरसमुद्भ‍वम् ।
तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम् ॥ १५ ॥
]

\`v 16 [
एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः ।
अघायुरिन्द्रियारामो मोघं पार्थ स जीवति ॥ १६ ॥
]

\`v 17 [
यस्त्वात्मरतिरेव स्यादात्मतृप्त‍श्च मानवः ।
आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते ॥ १७ ॥
]

\`v 18 [
नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन ।
न चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः ॥ १८ ॥
]

\`v 19 [
तस्मादसक्तः सततं कार्यं कर्म समाचर ।
असक्तो ह्याचरन्कर्म परमाप्‍नोति पूरूषः ॥ १९ ॥
]

\`v 20 [
कर्मणैव हि संसिद्धिमास्थिता जनकादयः ।
लोकसङ्ग्रहमेवापि सम्पश्यन्कर्तुमर्हसि ॥ २० ॥
]

\`v 21 [
यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः ।
स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥ २१ ॥
]

\`v 22 [
न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन ।
नानवाप्त‍मवाप्त‍व्यं वर्त एव च कर्मणि ॥ २२ ॥
]

\`v 23 [
यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः ।
मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ॥ २३ ॥
]

\`v 24 [
उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम् ।
सङ्करस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः ॥ २४ ॥
]

\`v 25 [
सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत ।
कुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसङ्‍‍ग्रहम् ॥ २५ ॥
]

\`v 26 [
न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम् ।
जोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन् ॥ २६ ॥
]

\`v 27 [
प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः ।
अहङ्कारविमूढात्मा कर्ताहमिति मन्यते ॥ २७ ॥
]

\`v 28 [
तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः ।
गुणा गुणेषु वर्तन्त इति मत्वा न सज्ज‍ते ॥ २८ ॥
]

\`v 29 [
प्रकृतेर्गुणसम्मूढाः सज्ज‍न्ते गुणकर्मसु ।
तानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत् ॥ २९ ॥
]

\`v 30 [
मयि सर्वाणि कर्माणि सन्न्यस्याध्यात्मचेतसा ।
निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः ॥ ३० ॥
]

\`v 31 [
ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः ।
श्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः ॥ ३१ ॥
]

\`v 32 [
ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम् ।
सर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः ॥ ३२ ॥
]

\`v 33 [
सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि ।
प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति ॥ ३३ ॥
]

\`v 34 [
इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ ।
तयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ ॥ ३४ ॥
]

\`v 35 [
श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।
स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥ ३५ ॥
]

अर्जुन उवाच
\`v 36 [
अथ केन प्रयुक्तोऽयं पापं चरति पूरुषः ।
अनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः ॥ ३६ ॥
]

श्री भगवानुवाच
\`v 37 [
काम एष क्रोध एष रजोगुणसमुद्भ‍वः ।
महाशनो महापाप्मा विद्ध्येनमिह वैरिणम् ॥ ३७ ॥
]

\`v 38 [
धूमेनाव्रियते वह्निर्यथादर्शो मलेन च ।
यथोल्बेनावृतो गर्भस्तथा तेनेदमावृत्तम् ॥ ३८ ॥
]

\`v 39 [
आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा ।
कामरूपेण कौन्तेय दुष्पूरेणानलेन च ॥ ३९ ॥
]

\`v 40 [
इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते ।
एतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम् ॥ ४० ॥
]

\`v 41 [
तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ ।
पाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम् ॥ ४१ ॥
]

\`v 42 [
इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः ।
मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः ॥ ४२ ॥
]

\`v 43 [
एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना ।
जहि शत्रुं महाबाहो कामरूपं दुरासदम् ॥ ४३ ॥
]
`,"content/mula/4.vy":`\`set context { chapter.title = "ज्ञानकर्मसन्न्यासयोगः" }

श्रीभगवानुवाच
\`v 1 [
इमं विवस्वते योगं प्रोक्तवानहमव्ययम् ।
विवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत् ॥ १ ॥
]

\`v 2 [
एवं परम्पराप्राप्तमिमं राजर्षयो विदुः ।
स कालेनेह महता योगे नष्टः परन्तप ॥ २ ॥
]

\`v 3 [
स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः ।
भक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम् ॥ ३ ॥
]

अर्जुन उवाच
\`v 4 [
अपरं भवतो जन्म परं जन्म विवस्वतः ।
कथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति ॥ ४ ॥
]

श्रीभगवानुवाच
\`v 5 [
बहूनि मे व्यतीतानि जन्मानि तव चार्जुन ।
तान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप ॥ ५ ॥
]

\`v 6 [
अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन् ।
प्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया ॥ ६ ॥
]

\`v 7 [
यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।
अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ ७ ॥
]

\`v 8 [
परित्राणाय साधुनां विनाशाय च दुष्कृताम् ।
धर्मसंस्थानार्थाय सम्भवामि युगे युगे ॥ ८ ॥
]

\`v 9 [
जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः ।
त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन ॥ ९ ॥
]

\`v 10 [
वीतरागभयक्रोधा मन्मया मामुपाश्रिताः ।
बहवो ज्ञानतपसा पूता मद्भ‍ावमागताः ॥ १० ॥
]

\`v 11 [
ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम् ।
मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ॥ ११ ॥
]

\`v 12 [
काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवता ।
क्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा ॥ १२ ॥
]

\`v 13 [
चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः ।
तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ॥ १३ ॥
]

\`v 14 [
न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा ।
इति मां योऽभिजानाति कर्मभिर्न स बध्यते ॥ १४ ॥
]

\`v 15 [
एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः ।
कुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम् ॥ १५ ॥
]

\`v 16 [
किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः ।
तत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽश‍ुभात् ॥ १६ ॥
]

\`v 17 [
कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः ।
अकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः ॥ १७ ॥
]

\`v 18 [
कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः ।
स बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ॥ १८ ॥
]

\`v 19 [
यस्य सर्वे समारम्भाः कामसंकल्पवर्जिताः ।
ज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः ॥ १९ ॥
]

\`v 20 [
त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः ।
कर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः ॥ २० ॥
]

\`v 21 [
निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः ।
शारीरं केवलं कर्म कुर्वन्नाप्‍नोति किल्बिषम् ॥ २१ ॥
]

\`v 22 [
यदृच्छालाभसंतुष्टो द्वन्द्वातीतो विमत्सरः ।
समः सिद्धावसिद्धौ च कृत्वापि न निबध्यते ॥ २२ ॥
]

\`v 23 [
गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः ।
यज्ञायाचरतः कर्म समग्रं प्रविलीयते ॥ २३ ॥
]

\`v 24 [
ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्न‍ौ ब्रह्मणा हुतम् ।
ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥ २४ ॥
]

\`v 25 [
दैवमेवापरे यज्ञं योगिनः पर्युपासते ।
ब्रह्माग्न‍ावपरे यज्ञं यज्ञेनैवोपजुह्वति ॥ २५ ॥
]

\`v 26 [
श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्न‍िषु जुह्वति ।
शब्दादीन्विषयानन्य इन्द्रियाग्न‍िषु जुह्वति ॥ २६ ॥
]

\`v 27 [
सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे ।
आत्मसंयमयोगाग्न‍ौ जुह्वति ज्ञानदीपिते ॥ २७ ॥
]

\`v 28 [
द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे ।
स्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः ॥ २८ ॥
]

\`v 29 [
अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे ।
प्राणापानगती रुद्ध्वा प्राणायामपरायणाः ।
अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति ॥ २९ ॥
]

\`v 30 [
सर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः ।
यज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम् ॥ ३० ॥
]

\`v 31 [
नायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम ॥ ३१ ॥
]

\`v 32 [
एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे ।
कर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे ॥ ३२ ॥
]

\`v 33 [
श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप ।
सर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते ॥ ३३ ॥
]

\`v 34 [
तद्विद्धि प्रणिपातेन परिप्रश्न‍ेन सेवया ।
उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः ॥ ३४ ॥
]

\`v 35 [
यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव ।
येन भूतान्यशेषाणि द्रक्ष्यस्यात्मन्यथो मयि ॥ ३५ ॥
]

\`v 36 [
अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः ।
सर्वं ज्ञानप्ल‍वेनैव वृजिनं सन्तरिष्यसि ॥ ३६ ॥
]

\`v 37 [
यथैधांसि समिद्धोऽग्न‍िर्भस्मसात्कुरुतेऽर्जुन ।
ज्ञानाग्न‍िः सर्वकर्माणि भस्मसात्कुरुते तथा ॥ ३७ ॥
]

\`v 38 [
न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ।
तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ॥ ३८ ॥
]

\`v 39 [
श्रद्धावाँल्ल‍भते ज्ञानं तत्परः संयतेन्द्रियः ।
ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति ॥ ३९ ॥
]

\`v 40 [
अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति ।
नायं लोकोऽस्ति न परो न सुखं संशयात्मनः ॥ ४० ॥
]

\`v 41 [
योगसन्न्यस्तकर्माणं ज्ञानसञ्छिन्नसंशयम् ।
आत्मवन्तं न कर्माणि निबध्न‍‍न्ति धनञ्जय ॥ ४१ ॥
]

\`v 42 [
तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः ।
छित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत ॥ ४२ ॥
]
`,"content/mula/5.vy":`\`set context { chapter.title = "कर्मसन्न्यासयोगः" }

अर्जुन उवाच
\`v 1 [
सन्न्यासं कर्मणां कृष्ण पुनर्योगं च शंससि ।
यच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम् ॥ १ ॥
]

श्रीभगवानुवाच
\`v 2 [
सन्न्यास: कर्मयोगश्च नि:श्रेयसकरावुभौ ।
तयोस्तु कर्मसन्न्यासात्कर्मयोगो विशिष्यते ॥ २ ॥
]

\`v 3 [
ज्ञेय: स नित्यसन्न्यासी यो न द्वेष्टि न काङ्‍क्षति ।
निर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते ॥ ३ ॥
]

\`v 4 [
सां‍ख्ययोगौ पृथग्बाला: प्रवदन्ति न पण्डिता: ।
एकमप्यास्थित: सम्यगुभयोर्विन्दते फलम् ॥ ४ ॥
]

\`v 5 [
यत्सां‍ख्यै: प्राप्यते स्थानं तद्योगैरपि गम्यते ।
एकं सां‍ख्यं च योगं च य: पश्यति स पश्यति ॥ ५ ॥
]

\`v 6 [
सन्न्यासस्तु महाबाहो दु:खमाप्‍तुमयोगत: ।
योगयुक्तो मुनिर्ब्रह्म न चिरेणाधिगच्छति ॥ ६ ॥
]

\`v 7 [
योगयुक्तो विश‍ुद्धात्मा विजितात्मा जितेन्द्रिय: ।
सर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते ॥ ७ ॥
]

\`v 8 [
नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित् ।
पश्यञ्श‍ृण्वन्स्पृशञ्जिघ्रन्नश्न‍न्गच्छन्स्वपन्श्वसन् ॥ ८ ॥
]

\`v 9 [
प्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि ।
इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन् ॥ ९ ॥
]

\`v 10 [
ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति य: ।
लिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥ १० ॥
]

\`v 11 [
कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि ।
योगिन: कर्म कुर्वन्ति सङ्गं त्यक्त्वात्म‍श‍ुद्धये ॥ ११ ॥
]

\`v 12 [
युक्त: कर्मफलं त्यक्त्वा शान्तिमाप्‍नोति नैष्ठिकीम् ।
अयुक्त: कामकारेण फले सक्तो निबध्यते ॥ १२ ॥
]

\`v 13 [
सर्वकर्माणि मनसा सन्न्यस्यास्ते सुखं वशी ।
नवद्वारे पुरे देही नैव कुर्वन्न कारयन् ॥ १३ ॥
]

\`v 14 [
न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभु: ।
न कर्मफलसंयोगं स्वभावस्तु प्रवर्तते ॥ १४ ॥
]

\`v 15 [
नादत्ते कस्यचित्पापं न चैव सुकृतं विभु: ।
अज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तव: ॥ १५ ॥
]

\`v 16 [
ज्ञानेन तु तदज्ञानं येषां नाशितमात्मन: ।
तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम् ॥ १६ ॥
]

\`v 17 [
तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणा: ।
गच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषा: ॥ १७ ॥
]

\`v 18 [
विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि ।
श‍ुनि चैव श्वपाके च पण्डिता: समदर्शिन: ॥ १८ ॥
]

\`v 19 [
इहैव तैर्जित: सर्गो येषां साम्ये स्थितं मन: ।
निर्दोषं हि समं ब्रह्म तस्माद्‍ब्रह्मणि ते स्थिता: ॥ १९ ॥
]

\`v 20 [
न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम् ।
स्थिरबुद्धिरसम्मूढो ब्रह्मविद्‍ब्रह्मणि स्थित: ॥ २० ॥
]

\`v 21 [
बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम् ।
स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्न‍ुते ॥ २१ ॥
]

\`v 22 [
ये हि संस्पर्शजा भोगा दु:खयोनय एव ते ।
आद्यन्तवन्त: कौन्तेय न तेषु रमते बुध: ॥ २२ ॥
]

\`v 23 [
शक्न‍ोतीहैव य: सोढुं प्राक्शरीरविमोक्षणात् ।
कामक्रोधोद्भ‍वं वेगं स युक्त: स सुखी नर: ॥ २३ ॥
]

\`v 24 [
योऽन्त:सुखोऽन्तरारामस्तथान्तर्ज्योतिरेव य: ।
स योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति ॥ २४ ॥
]

\`v 25 [
लभन्ते ब्रह्मनिर्वाणमृषय: क्षीणकल्मषा: ।
छिन्नद्वैधा यतात्मान: सर्वभूतहिते रता: ॥ २५ ॥
]

\`v 26 [
कामक्रोधविमुक्तानां यतीनां यतचेतसाम् ।
अभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम् ॥ २६ ॥
]

\`v 27 [
स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवो: ।
प्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ ॥ २७ ॥
]

\`v 28 [
यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायण: ।
विगतेच्छाभयक्रोधो य: सदा मुक्त एव स: ॥ २८ ॥
]

\`v 29 [
भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम् ।
सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति ॥ २९ ॥
]
`,"content/mula/6.vy":`\`set context { chapter.title = "आत्मसंयमयोगः" }

श्रीभगवानुवाच
\`v 1 [
अनाश्रित: कर्मफलं कार्यं कर्म करोति य: ।
स सन्न्यासी च योगी च न निरग्न‍िर्न चाक्रिय: ॥ १ ॥
]

\`v 2 [
यं सन्न्यासमिति प्राहुर्योगं तं विद्धि पाण्डव ।
न ह्यसन्न्यस्तसङ्कल्पो योगी भवति कश्चन ॥ २ ॥
]

\`v 3 [
आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते ।
योगारूढस्यतस्यैव शम: कारणमुच्यते ॥ ३ ॥
]

\`v 4 [
यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्ज‍ते ।
सर्वसङ्कल्पसन्न्यासी योगारूढस्तदोच्यते ॥ ४ ॥
]

\`v 5 [
उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।
आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मन: ॥ ५ ॥
]

\`v 6 [
बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जित: ।
अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत् ॥ ६ ॥
]

\`v 7 [
जितात्मन: प्रशान्तस्य परमात्मा समाहित: ।
शीतोष्णसुखदु:खेषु तथा मानापमानयो: ॥ ७ ॥
]

\`v 8 [
ज्ञानविज्ञानतृप्‍तात्मा कूटस्थो विजितेन्द्रिय: ।
युक्त इत्युच्यते योगी समलोष्ट्राश्मकाञ्चन: ॥ ८ ॥
]

\`v 9 [
सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु ।
साधुष्वपि च पापेषु समबुद्धिर्विशिष्यते ॥ ९ ॥
]

\`v 10 [
योगी युञ्जीत सततमात्मानं रहसि स्थित: ।
एकाकी यतचित्तात्मा निराशीरपरिग्रह: ॥ १० ॥
]

\`v 11 [
श‍ुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मन: ।
नात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम् ॥ ११ ॥
]

\`v 12 [
तत्रैकाग्रं मन: कृत्वा यतचित्तेन्द्रियक्रिय ।
उपविश्यासने युञ्‍ज्याद्योगमात्मविश‍ुद्धये ॥ १२ ॥
]

\`v 13 [
समं कायशिरोग्रीवं धारयन्नचलं स्थिर: ।
सम्प्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन् ॥ १३ ॥
]

\`v 14 [
प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थित: ।
मन: संयम्य मच्च‍ित्तो युक्त आसीत मत्पर: ॥ १४ ॥
]

\`v 15 [
युञ्जन्नेवं सदात्मानं योगी नियतमानस: ।
शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति ॥ १५ ॥
]

\`v 16 [
नात्यश्न‍तस्तु योगोऽस्ति न चैकान्तमनश्न‍त: ।
न चातिस्वप्‍नशीलस्य जाग्रतो नैव चार्जुन ॥ १६ ॥
]

\`v 17 [
युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु ।
युक्तस्वप्‍नावबोधस्य योगो भवति दु:खहा ॥ १७ ॥
]

\`v 18 [
यदा विनियतं चित्तमात्मन्येवावतिष्ठते ।
निस्पृह: सर्वकामेभ्यो युक्त इत्युच्यते तदा ॥ १८ ॥
]

\`v 19 [
यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता ।
योगिनो यतचित्तस्य युञ्जतो योगमात्मन: ॥ १९ ॥
]

\`v 20 [
यत्रोपरमते चित्तं निरुद्धं योगसेवया ।
यत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति ॥ २० ॥
]

\`v 21 [
सुखमात्यन्तिकं यत्तद्‍बुद्धिग्राह्यमतीन्द्रियम् ।
वेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वत: ॥ २१ ॥
]

\`v 22 [
यं लब्ध्वा चापरं लाभं मन्यते नाधिकं तत: ।
यस्मिन्स्थितो न दु:खेन गुरुणापि विचाल्यते ॥ २२ ॥
]

\`v 23 [
तं विद्याद्दु:खसंयोगवियोगं योगसंज्ञितम् ॥ २३ ॥
]

\`v 24 [
स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा ।
सङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषत: ।
मनसैवेन्द्रियग्रामं विनियम्य समन्तत: ॥ २४ ॥
]

\`v 25 [
शनै: शनैरुपरमेद्‍बुद्ध्या धृतिगृहीतया ।
आत्मसंस्थं मन: कृत्वा न किञ्चिदपि चिन्तयेत् ॥ २५ ॥
]

\`v 26 [
यतो यतो निश्चलति मनश्चञ्चलमस्थिरम् ।
ततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ॥ २६ ॥
]

\`v 27 [
प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम् ।
उपैति शान्तरजसं ब्रह्मभूतमकल्मषम् ॥ २७ ॥
]

\`v 28 [
युञ्जन्नेवं सदात्मानं योगी विगतकल्मष: ।
सुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्न‍ुते ॥ २८ ॥
]

\`v 29 [
सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि ।
ईक्षते योगयुक्तात्मा सर्वत्र समदर्शन: ॥ २९ ॥
]

\`v 30 [
यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति ।
तस्याहं न प्रणश्यामि स च मे न प्रणश्यति ॥ ३० ॥
]

\`v 31 [
सर्वभूतस्थितं यो मां भजत्येकत्वमास्थित: ।
सर्वथा वर्तमानोऽपि स योगी मयि वर्तते ॥ ३१ ॥
]

\`v 32 [
आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन ।
सुखं वा यदि वा दु:खं स योगी परमो मत: ॥ ३२ ॥
]

अर्जुन उवाच
\`v 33 [
योऽयं योगस्त्वया प्रोक्त: साम्येन मधुसूदन ।
एतस्याहं न पश्यामि चञ्चलत्वात्स्थितिं स्थिराम् ॥ ३३ ॥
]

\`v 34 [
चञ्चलं हि मन: कृष्ण प्रमाथि बलवद्दृढम् ।
तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम् ॥ ३४ ॥
]

श्रीभगवानुवाच
\`v 35 [
असंशयं महाबाहो मनो दुर्निग्रहं चलम् ।
अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥ ३५ ॥
]

\`v 36 [
असंयतात्मना योगो दुष्प्राप इति मे मति: ।
वश्यात्मना तु यतता शक्योऽवाप्‍तुमुपायत: ॥ ३६ ॥
]

अर्जुन उवाच
\`v 37 [
अयति: श्रद्धयोपेतो योगाच्च‍‍लितमानस: ।
अप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति ॥ ३७ ॥
]

\`v 38 [
कच्च‍िन्नोभयविभ्रष्टश्छिन्नाभ्रमिव नश्यति ।
अप्रतिष्ठो महाबाहो विमूढो ब्रह्मण: पथि ॥ ३८ ॥
]

\`v 39 [
एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषत: ।
त्वदन्य: संशयस्यास्य छेत्ता न ह्युपपद्यते ॥ ३९ ॥
]

श्रीभगवानुवाच
\`v 40 [
पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते ।
न हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति ॥ ४० ॥
]

\`v 41 [
प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वती: समा: ।
श‍ुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते ॥ ४१ ॥
]

\`v 42 [
अथवा योगिनामेव कुले भवति धीमताम् ।
एतद्धि दुर्लभतरं लोके जन्म यदीदृशम् ॥ ४२ ॥
]

\`v 43 [
तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम् ।
यतते च ततो भूय: संसिद्धौ कुरुनन्दन ॥ ४३ ॥
]

\`v 44 [
पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि स: ।
जिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते ॥ ४४ ॥
]

\`v 45 [
प्रयत्‍नाद्यतमानस्तु योगी संश‍ुद्धकिल्बिष: ।
अनेकजन्मसंसिद्धस्ततो याति परां गतिम् ॥ ४५ ॥
]

\`v 46 [
तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिक: ।
कर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन ॥ ४६ ॥
]

\`v 47 [
योगिनामपि सर्वेषां मद्ग‍तेनान्तरात्मना ।
श्रद्धावान्भजते यो मां स मे युक्ततमो मत: ॥ ४७ ॥
]
`,"content/mula/7.vy":`\`set context { chapter.title = "ज्ञानविज्ञानयोगः" }

श्रीभगवानुवाच
\`v 1 [
मय्यासक्तमना: पार्थ योगं युञ्जन्मदाश्रय: ।
असंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु ॥ १ ॥
]

\`v 2 [
ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषत: ।
यज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते ॥ २ ॥
]

\`v 3 [
मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये ।
यततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वत: ॥ ३ ॥
]

\`v 4 [
भूमिरापोऽनलो वायु: खं मनो बुद्धिरेव च ।
अहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा ॥ ४ ॥
]

\`v 5 [
अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम् ।
जीवभूतां महाबाहो ययेदं धार्यते जगत् ॥ ५ ॥
]

\`v 6 [
एतद्योनीनि भूतानि सर्वाणीत्युपधारय ।
अहं कृत्स्नस्य जगत: प्रभव: प्रलयस्तथा ॥ ६ ॥
]

\`v 7 [
मत्त: परतरं नान्यत्किञ्चिदस्ति धनञ्जय ।
मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ॥ ७ ॥
]

\`v 8 [
रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययो: ।
प्रणव: सर्ववेदेषु शब्द: खे पौरुषं नृषु ॥ ८ ॥
]

\`v 9 [
पुण्यो गन्ध: पृथिव्यां च तेजश्चास्मि विभावसौ ।
जीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु ॥ ९ ॥
]

\`v 10 [
बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम् ।
बुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम् ॥ १० ॥
]

\`v 11 [
बलं बलवतां चाहं कामरागविवर्जितम् ।
धर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ ॥ ११ ॥
]

\`v 12 [
ये चैव सात्त्विका भावा राजसास्तामसाश्च ये ।
मत्त एवेति तान्विद्धि न त्वहं तेषु ते मयि ॥ १२ ॥
]

\`v 13 [
त्रिभिर्गुणमयैर्भावैरेभि: सर्वमिदं जगत् ।
मोहितं नाभिजानाति मामेभ्य: परमव्ययम् ॥ १३ ॥
]

\`v 14 [
दैवी ह्येषा गुणमयी मम माया दुरत्यया ।
मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ॥ १४ ॥
]

\`v 15 [
न मां दुष्कृतिनो मूढा: प्रपद्यन्ते नराधमा: ।
माययापहृतज्ञाना आसुरं भावमाश्रिता: ॥ १५ ॥
]

\`v 16 [
चतुर्विधा भजन्ते मां जना: सुकृतिनोऽर्जुन ।
आर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ ॥ १६ ॥
]

\`v 17 [
तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते ।
प्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रिय: ॥ १७ ॥
]

\`v 18 [
उदारा: सर्व एवैते ज्ञानी त्वात्मैव मे मतम् ।
आस्थित: स हि युक्तात्मा मामेवानुत्तमां गतिम् ॥ १८ ॥
]

\`v 19 [
बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते ।
वासुदेव: सर्वमिति स महात्मा सुदुर्लभ: ॥ १९ ॥
]

\`v 20 [
कामैस्तैस्तैर्हृतज्ञाना: प्रपद्यन्तेऽन्यदेवता: ।
तं तं नियममास्थाय प्रकृत्या नियता: स्वया ॥ २० ॥
]

\`v 21 [
यो यो यां यां तनुं भक्त: श्रद्धयार्चितुमिच्छति ।
तस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम् ॥ २१ ॥
]

\`v 22 [
स तया श्रद्धया युक्तस्तस्याराधनमीहते ।
लभते च तत: कामान्मयैव विहितान्हि तान् ॥ २२ ॥
]

\`v 23 [
अन्तवत्तु फलं तेषां तद्भ‍वत्यल्पमेधसाम् ।
देवान्देवयजो यान्ति मद्भ‍क्ता यान्ति मामपि ॥ २३ ॥
]

\`v 24 [
अव्यक्तं व्यक्तिमापन्नं मन्यन्ते मामबुद्धय: ।
परं भावमजानन्तो ममाव्ययमनुत्तमम् ॥ २४ ॥
]

\`v 25 [
नाहं प्रकाश: सर्वस्य योगमायासमावृत: ।
मूढोऽयं नाभिजानाति लोको मामजमव्ययम् ॥ २५ ॥
]

\`v 26 [
वेदाहं समतीतानि वर्तमानानि चार्जुन ।
भविष्याणि च भूतानि मां तु वेद न कश्चन ॥ २६ ॥
]

\`v 27 [
इच्छाद्वेषसमुत्थेन द्वन्द्वमोहेन भारत ।
सर्वभूतानि सम्मोहं सर्गे यान्ति परन्तप ॥ २७ ॥
]

\`v 28 [
येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम् ।
ते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रता: ॥ २८ ॥
]

\`v 29 [
जरामरणमोक्षाय मामाश्रित्य यतन्ति ये ।
ते ब्रह्म तद्विदु: कृत्स्नमध्यात्मं कर्म चाखिलम् ॥ २९ ॥
]

\`v 30 [
साधिभूताधिदैवं मां साधियज्ञं च ये विदु: ।
प्रयाणकालेऽपि च मां ते विदुर्युक्तचेतस: ॥ ३० ॥
]
`,"content/mula/8.vy":`\`set context { chapter.title = "अक्षरब्रह्मयोगः" }

अर्जुन उवाच
\`v 1 [
किं तद्‌ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम ।
अधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते ॥ १ ॥
]

\`v 2 [
अधियज्ञ: कथं कोऽत्र देहेऽस्मिन्मधुसूदन ।
प्रयाणकाले च कथं ज्ञेयोऽसि नियतात्मभि: ॥ २ ॥
]

श्रीभगवानुवाच
\`v 3 [
अक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते ।
भूतभावोद्भ‍वकरो विसर्ग: कर्मसंज्ञित: ॥ ३ ॥
]

\`v 4 [
अधिभूतं क्षरो भाव: पुरुषश्चाधिदैवतम् ।
अधियज्ञोऽहमेवात्र देहे देहभृतां वर ॥ ४ ॥
]

\`v 5 [
अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम् ।
य: प्रयाति स मद्भ‍ावं याति नास्त्यत्र संशय: ॥ ५ ॥
]

\`v 6 [
यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम् ।
तं तमेवैति कौन्तेय सदा तद्भ‍ावभावित: ॥ ६ ॥
]

\`v 7 [
तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च ।
मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशय: ॥ ७ ॥
]

\`v 8 [
अभ्यासयोगयुक्तेन चेतसा नान्यगामिना ।
परमं पुरुषं दिव्यं याति पार्थानुचिन्तयन् ॥ ८ ॥
]

\`v 9 [
कविं पुराणमनुशासितार-
मणोरणीयांसमनुस्मरेद्य: ।
सर्वस्य धातारमचिन्त्यरूप-
मादित्यवर्णं तमस: परस्तात् ॥ ९ ॥
]

\`v 10 [
प्रयाणकाले मनसाचलेन
भक्त्य‍ा युक्तो योगबलेन चैव ।
भ्रुवोर्मध्ये प्राणमावेश्य सम्य-
क्स तं परं पुरुषमुपैति दिव्यम् ॥ १० ॥
]

\`v 11 [
यदक्षरं वेदविदो वदन्ति
विशन्ति यद्यतयो वीतरागा: ।
यदिच्छन्तो ब्रह्मचर्यं चरन्ति
तत्ते पदं सङ्ग्रहेण प्रवक्ष्ये ॥ ११ ॥
]

\`v 12 [
सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च ।
मूध्‍न्‍‍र्याधायात्मन: प्राणमास्थितो योगधारणाम् ॥ १२ ॥
]

\`v 13 [
ॐ इत्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन् ।
य: प्रयाति त्यजन्देहं स याति परमां गतिम् ॥ १३ ॥
]

\`v 14 [
अनन्यचेता: सततं यो मां स्मरति नित्यश: ।
तस्याहं सुलभ: पार्थ नित्ययुक्तस्य योगिन: ॥ १४ ॥
]

\`v 15 [
मामुपेत्य पुनर्जन्म दु:खालयमशाश्वतम् ।
नाप्‍नुवन्ति महात्मान: संसिद्धिं परमां गता: ॥ १५ ॥
]

\`v 16 [
आब्रह्मभुवनाल्ल‍ोका: पुनरावर्तिनोऽर्जुन ।
मामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते ॥ १६ ॥
]

\`v 17 [
सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदु: ।
रात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जना: ॥ १७ ॥
]

\`v 18 [
अव्यक्ताद्‍ व्यक्तय: सर्वा: प्रभवन्त्यहरागमे ।
रात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसंज्ञके ॥ १८ ॥
]

\`v 19 [
भूतग्राम: स एवायं भूत्वा भूत्वा प्रलीयते ।
रात्र्यागमेऽवश: पार्थ प्रभवत्यहरागमे ॥ १९ ॥
]

\`v 20 [
परस्तस्मात्तु भावोऽन्योऽव्यक्तोऽव्यक्तात्सनातन: ।
य: स सर्वेषु भूतेषु नश्यत्सु न विनश्यति ॥ २० ॥
]

\`v 21 [
अव्यक्तोऽक्षर इत्युक्तस्तमाहु: परमां गतिम् ।
यं प्राप्य न निवर्तन्ते तद्धाम परमं मम ॥ २१ ॥
]

\`v 22 [
पुरुष: स पर: पार्थ भक्त्य‍ा लभ्यस्त्वनन्यया ।
यस्यान्त:स्थानि भूतानि येन सर्वमिदं ततम् ॥ २२ ॥
]

\`v 23 [
यत्र काले त्वनावृत्तिमावृत्तिं चैव योगिन: ।
प्रयाता यान्ति तं कालं वक्ष्यामि भरतर्षभ ॥ २३ ॥
]

\`v 24 [
अग्न‍िर्ज्योतिरह: शुक्ल‍ः षण्मासा उत्तरायणम् ।
तत्र प्रयाता गच्छन्ति ब्रह्म ब्रह्मविदो जना: ॥ २४ ॥
]

\`v 25 [
धूमो रात्रिस्तथा कृष्ण: षण्मासा दक्षिणायनम् ।
तत्र चान्द्रमसं ज्योतिर्योगी प्राप्य निवर्तते ॥ २५ ॥
]

\`v 26 [
श‍ुक्ल‍कृष्णे गती ह्येते जगत: शाश्वते मते ।
एकया यात्यनावृत्तिमन्ययावर्तते पुन: ॥ २६ ॥
]

\`v 27 [
नैते सृती पार्थ जानन्योगी मुह्यति कश्चन ।
तस्मात्सर्वेषु कालेषु योगयुक्तो भवार्जुन ॥ २७ ॥
]

\`v 28 [
वेदेषु यज्ञेषु तप:सु चैव
दानेषु यत्पुण्यफलं प्रदिष्टम् ।
अत्येति तत्सर्वमिदं विदित्वा
योगी परं स्थानमुपैति चाद्यम् ॥ २८ ॥
]
`,"content/mula/9.vy":`\`set context { chapter.title = "राजविद्याराजगुह्ययोगः" }

श्रीभगवानुवाच
\`v 1 [
इदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे ।
ज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽश‍ुभात् ॥ १ ॥
]

\`v 2 [
राजविद्या राजगुह्यं पवित्रमिदमुत्तमम् ।
प्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम् ॥ २ ॥
]

\`v 3 [
अश्रद्दधाना: पुरुषा धर्मस्यास्य परन्तप ।
अप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि ॥ ३ ॥
]

\`v 4 [
मया ततमिदं सर्वं जगदव्यक्तमूर्तिना ।
मत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थित: ॥ ४ ॥
]

\`v 5 [
न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम् ।
भूतभृन्न च भूतस्थो ममात्मा भूतभावन: ॥ ५ ॥
]

\`v 6 [
यथाकाशस्थितो नित्यं वायु: सर्वत्रगो महान् ।
तथा सर्वाणि भूतानि मत्स्थानीत्युपधारय ॥ ६ ॥
]

\`v 7 [
सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम् ।
कल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम् ॥ ७ ॥
]

\`v 8 [
प्रकृतिं स्वामवष्टभ्य विसृजामि पुन: पुन: ।
भूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात् ॥ ८ ॥
]

\`v 9 [
न च मां तानि कर्माणि निबध्‍नन्ति धनञ्जय ।
उदासीनवदासीनमसक्तं तेषु कर्मसु ॥ ९ ॥
]

\`v 10 [
मयाध्यक्षेण प्रकृति: सूयते सचराचरम् ।
हेतुनानेन कौन्तेय जगद्विपरिवर्तते ॥ १० ॥
]

\`v 11 [
अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम् ।
परं भावमजानन्तो मम भूतमहेश्वरम् ॥ ११ ॥
]

\`v 12 [
मोघाशा मोघकर्माणो मोघज्ञाना विचेतस: ।
राक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिता: ॥ १२ ॥
]

\`v 13 [
महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिता: ।
भजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम् ॥ १३ ॥
]

\`v 14 [
सततं कीर्तयन्तो मां यतन्तश्च दृढव्रता: ।
नमस्यन्तश्च मां भक्त्य‍ा नित्ययुक्ता उपासते ॥ १४ ॥
]

\`v 15 [
ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते ।
एकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम् ॥ १५ ॥
]

\`v 16 [
अहं क्रतुरहं यज्ञ: स्वधाहमहमौषधम् ।
मन्‍त्रोऽहमहमेवाज्यमहमग्न‍िरहं हुतम् ॥ १६ ॥
]

\`v 17 [
पिताहमस्य जगतो माता धाता पितामह: ।
वेद्यं पवित्रम् ॐकार ऋक् साम यजुरेव च ॥ १७ ॥
]

\`v 18 [
गतिर्भर्ता प्रभु: साक्षी निवास: शरणं सुहृत् ।
प्रभव: प्रलय: स्थानं निधानं बीजमव्ययम् ॥ १८ ॥
]

\`v 19 [
तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च ।
अमृतं चैव मृत्युश्च सदसच्च‍ाहमर्जुन ॥ १९ ॥
]

\`v 20 [
त्रैविद्या मां सोमपा: पूतपापा
यज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते ।
ते पुण्यमासाद्य सुरेन्द्रलोक-
मश्न‍‍न्ति दिव्यान्दिवि देवभोगान् ॥ २० ॥
]

\`v 21 [
ते तं भुक्त्वा स्वर्गलोकं विशालं
क्षीणे पुण्ये मर्त्यलोकं विशन्ति ।
एवं त्रयीधर्ममनुप्रपन्ना
गतागतं कामकामा लभन्ते ॥ २१ ॥
]

\`v 22 [
अनन्याश्चिन्तयन्तो मां ये जना: पर्युपासते ।
तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥ २२ ॥
]

\`v 23 [
येऽप्यन्यदेवताभक्ता यजन्ते श्रद्धयान्विता: ।
तेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम् ॥ २३ ॥
]

\`v 24 [
अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च ।
न तु मामभिजानन्ति तत्त्वेनातश्‍च्‍यवन्ति ते ॥ २४ ॥
]

\`v 25 [
यान्ति देवव्रता देवान्पितॄन्यान्ति पितृव्रता: ।
भूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम् ॥ २५ ॥
]

\`v 26 [
पत्रं पुष्पं फलं तोयं यो मे भक्त्य‍ा प्रयच्छति ।
तदहं भक्त्य‍ुपहृतमश्न‍ामि प्रयतात्मन: ॥ २६ ॥
]

\`v 27 [
यत्करोषि यदश्न‍ासि यज्ज‍ुहोषि ददासि यत् ।
यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ॥ २७ ॥
]

\`v 28 [
श‍ुभाश‍ुभफलैरेवं मोक्ष्यसे कर्मबन्धनै: ।
सन्न्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि ॥ २८ ॥
]

\`v 29 [
समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रिय: ।
ये भजन्ति तु मां भक्त्य‍ा मयि ते तेषु चाप्यहम् ॥ २९ ॥
]

\`v 30 [
अपि चेत्सुदुराचारो भजते मामनन्यभाक् ।
साधुरेव स मन्तव्य: सम्यग्व्यवसितो हि स: ॥ ३० ॥
]

\`v 31 [
क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति ।
कौन्तेय प्रतिजानीहि न मे भक्त: प्रणश्यति ॥ ३१ ॥
]

\`v 32 [
मां हि पार्थ व्यपाश्रित्य येऽपि स्यु: पापयोनय: ।
स्त्रियो वैश्यास्तथा श‍ूद्रास्तेऽपि यान्ति परां गतिम् ॥ ३२ ॥
]

\`v 33 [
किं पुनर्ब्राह्मणा: पुण्या भक्ता राजर्षयस्तथा ।
अनित्यमसुखं लोकमिमं प्राप्य भजस्व माम् ॥ ३३ ॥
]

\`v 34 [
मन्मना भव मद्भ‍क्तो मद्याजी मां नमस्कुरु ।
मामेवैष्यसि युक्त्वैवमात्मानं मत्परायण: ॥ ३४ ॥
]
`,"content/mula/localization.vy":`// Primary-stream display labels (Devanagari convention).
// Keys mirror [urn].hierarchy and vocabulary/ canonical IDs.

\`structure [
    "chapter" = "अध्याय",
    "verse" = "श्लोक"
]

\`entities {
    "arjuna" = "अर्जुन",
    "krishna" = "श्रीभगवान्",
    "dhritarashtra" = "धृतराष्ट्र",
    "sanjaya" = "सञ्जय"
}

\`actions {
    "uvaca" = "उवाच",
    "speaker" = "वक्ता",
    "note" = "टिप्पणी"
}

\`facets {
    "speaker" = "वक्ता"
}
`,"content/mula/stream.toml":`language = "sa"
script = "Deva"
kind = "source"
primary = true
`,"context.vy":`\`title [Bhagavad Gita]

\`set settings {
    default_whitespace = "single"
    break_after = "।॥"
}

// Stream & metadata commands
\`command-def { name="devanagari" category="content" }
\`command-def { name="iast" category="content" }

\`command-def { name="annotate" category="metadata" flexible_args="true" }

\`alias-def { name="v" target="verse" }

// Speaker annotation markers (used in annotations/speakers.vy, not inline in content)
\`command-def { name="uvaca" category="action", flexible_args="true" }

\`alias-def { name="dhritarashtra.uvaca", target="uvaca", params="speaker=dhritarashtra, action=uvaca" }
\`alias-def { name="sanjaya.uvaca", target="uvaca", params="speaker=sanjaya, action=uvaca" }
\`alias-def { name="arjuna.uvaca", target="uvaca", params="speaker=arjuna, action=uvaca" }
\`alias-def { name="krishna.uvaca", target="uvaca", params="speaker=krishna, action=uvaca" }
`,"templates/html/context.vy":`// Semantic HTML Templates — structure only; typography lives in .css (publisher_css / css).

\`mula [
\`div { class="mula" } [$.body]
]

\`iast [
\`div { class="iast" } [$.body]
]

\`devanagari [
\`div { class="devanagari" } [$.body]
]

\`v [
\`div { class="verse" } [$.body]
]

\`ref [ \`a { href="$.argument" } [$.body] ]
\`e1 [ \`strong [$.body] ]
\`e2 [ \`em [$.body] ]
`,"templates/html/default.html":`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vyasa Gita</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Noto Serif', serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            line-height: 1.6;
            color: #333;
            background-color: #fdfdfd;
        }

        /* Generic Vyasa Semantic Classes */
        .devanagari {
            font-size: 1.25rem;
            text-align: center;
            color: #b22222; /* Indian red */
            margin: 1.5rem 0;
            line-height: 1.8;
        }

        .iast {
            font-size: 1.1rem;
            text-align: center;
            font-style: italic;
            margin: 1.5rem 0;
        }

        .verse {
            font-size: 1.1rem;
            text-align: center;
            margin: 1.5rem 0;
            line-height: 1.8;
            white-space: pre-wrap;
        }
    </style>
</head>

<body>
    <div class="content">
        {{ body }}
    </div>
</body>

</html>
`,"templates/html/reading.css":`/* Craft reading view (stacked). Tokens come from publisher styles/indic-verse.css. */

.verse-content {
	text-align: center;
	max-width: 36rem;
	margin: 0 auto;
	padding: 0.5rem 0 1.25rem;
}
.verse-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.85rem;
}
.verse-block .mula {
	font-family: var(--vyasa-font-deva);
	font-size: var(--vyasa-stream-body-size);
	font-weight: var(--vyasa-stream-body-weight);
	line-height: var(--vyasa-stream-body-line);
	color: var(--vyasa-stream-body-color);
	white-space: pre-line;
	margin: 0;
	max-width: 100%;
}
.verse-block .iast {
	font-family: var(--vyasa-font-body);
	font-style: italic;
	font-size: var(--vyasa-stream-commentary-size);
	line-height: var(--vyasa-stream-commentary-line);
	color: var(--vyasa-stream-commentary-color);
	white-space: pre-line;
	display: block;
	margin: 0;
	max-width: 100%;
}
.verse-block .iast .verse {
	display: inline;
}
.verse-block .iast::after {
	content: " ॥ " attr(data-verse) " ॥";
	white-space: nowrap;
}
`,"templates/html/theme.css":`/* Workspace overrides for publisher styles/indic-verse.css — keep empty unless this work diverges. */
`,"templates/html/views/reading.vy":`// Publisher-crafted reading view — stacked edition (not grid columns).
// Craft CSS: templates/html/reading.css (listed in [build.default] css).

\`layout [
{{ body }}
]

\`item [
\`div { class="verse-content" } [
    \`div { class="verse-block" } [
        \`div { class="mula" } [\`stream { ref="mula" }]
        \`div { class="iast" data-verse="{{ verse }}" } [\`stream { ref="iast" }]
    ]
]
]
`,"templates/html/views/theme.vy":`// Packed as theme_layout. Document shell + CSS come from vyasac (css / publisher_css).

\`layout [
{{ body }}
]
`,"vocabulary/actions.vy":`// Canonical action IDs used in annotations and UI chrome.
// Display strings live in content/<stream>/localization.vy — not here.

\`actions {
    "uvaca" = "uvaca",
    "speaker" = "speaker",
    "note" = "note"
}
`,"vocabulary/entities.vy":`// Canonical entity IDs for this publication (RFC-019 registry).
// Display strings live in content/<stream>/localization.vy — not here.

\`entities {
    "arjuna" = "arjuna",
    "krishna" = "krishna",
    "dhritarashtra" = "dhritarashtra",
    "sanjaya" = "sanjaya"
}
`,"vocabulary/facets.vy":`// Canonical explorer facet type IDs for this publication.
// Display strings live in content/<stream>/localization.vy — not here.

\`facets {
    "speaker" = "speaker"
}
`,"vyasac.toml":`[workspace]
name = "vyasa-bg"
id = "vyasa-bg"
title = "Bhagavad Gita"
description = "Bhagavad Gita with Devanagari and IAST streams, speaker annotations, and multi-stream reading templates."

[catalog]
type = "work"
language = "sa"
license = "Public Domain"

[publish]
publisher_dir = "vysamples"

[urn]
path_schema = ["chapter"]
hierarchy = ["chapter", "verse"]

[build.default]
target = "view"
streams = ["mula", "iast"]
publisher_css = ["styles/indic-verse.css"]
css = ["templates/html/theme.css", "templates/html/reading.css"]
`,"vysamples/publisher.toml":`[publisher]
identifier = "vysamples"
title = "Project Vyasa Samples"
description = "Official sample publications for Project Vyasa — workspaces for the compiler, viewer, and catalog identity model."
homepage = "https://github.com/project-vyasa/vyasa-samples"
url = "https://github.com/project-vyasa/vyasa-samples"
catalog_url = "https://project-vyasa.github.io/vyasa-samples/catalog.json"
content_themes = ["light", "dark", "parchment"]

[org]
id = "project-vyasa"
title = "Project Vyasa"
homepage = "https://github.com/project-vyasa"


`,"vysamples/styles/indic-verse.css":`@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap");

:root {
	--vyasa-font-deva: "Noto Sans Devanagari", sans-serif;
	--vyasa-font-body: "Noto Serif", serif;
	--vyasa-stream-body-size: 1.25rem;
	--vyasa-stream-body-line: 1.5;
	--vyasa-stream-body-weight: 500;
	--vyasa-stream-body-color: #334155;
	--vyasa-stream-commentary-size: 1.05rem;
	--vyasa-stream-commentary-line: 1.5;
	--vyasa-stream-commentary-color: #64748b;
	--vyasa-content-max-width: 48rem;
	--vyasa-paper: #fcfcfc;
	--vyasa-ink: #333333;
}

html.theme-light,
html {
	--vyasa-paper: #fcfcfc;
	--vyasa-ink: #333333;
	--vyasa-stream-body-color: #334155;
	--vyasa-stream-commentary-color: #64748b;
}

html.theme-dark {
	--vyasa-paper: #1a1a1a;
	--vyasa-ink: #e8e8e8;
	--vyasa-stream-body-color: #e2e8f0;
	--vyasa-stream-commentary-color: #94a3b8;
}

html.theme-parchment {
	--vyasa-paper: #f3e6c8;
	--vyasa-ink: #3c2a18;
	--vyasa-stream-body-color: #3c2a18;
	--vyasa-stream-commentary-color: #6b5344;
}

body {
	font-family: var(--vyasa-font-body);
	margin: 0;
	padding: 2rem;
	line-height: 1.6;
	color: var(--vyasa-ink);
	background-color: var(--vyasa-paper);
}

.content {
	max-width: var(--vyasa-content-max-width);
	margin: 0 auto;
}

/* Grid: weave_layout injects packed html_blocks into .vyasa-block-{streamId} columns. */
.vyasa-block-mula {
	font-family: var(--vyasa-font-deva);
	font-size: var(--vyasa-stream-body-size);
	font-weight: var(--vyasa-stream-body-weight);
	line-height: var(--vyasa-stream-body-line);
	color: var(--vyasa-stream-body-color);
}
.vyasa-block-mula .verse {
	white-space: pre-line;
	overflow-wrap: break-word;
}

.vyasa-block-iast {
	font-family: var(--vyasa-font-body);
	font-style: italic;
	font-size: var(--vyasa-stream-commentary-size);
	line-height: var(--vyasa-stream-commentary-line);
	color: var(--vyasa-stream-commentary-color);
}
.vyasa-block-iast .verse {
	white-space: pre-line;
	overflow-wrap: break-word;
}
`}},eD=`Compiler WASM is not built yet. In vyasa run: (cd vyasac && wasm-pack build --target web --out-dir pkg --release), then restart this dev server.`,tD=null;async function nD(){return tD||=(async()=>{let e=await he(()=>import(`../chunks/CnT7ybzr.js`),[],import.meta.url);if(e.COMPILER_WASM_STUB)throw Error(eD);await e.default();try{e.init_hooks?.()}catch{}return e})().catch(e=>{throw e instanceof Error&&e.message,e}),tD}async function rD(){try{return await nD(),`ready`}catch{return`missing`}}function iD(e){return Object.keys(e).filter(e=>(e.startsWith(`build/`)||e.startsWith(`output/`))&&e.endsWith(`.html`)&&!e.endsWith(`/localization.html`)).sort()}function aD(e,t){let n=/^content\/[^/]+\/(.+)\.vy$/.exec(e),r=/\/html\/[^/]+\/(.+)\.html$/.exec(e),i=n?.[1]??r?.[1];return i?t.filter(e=>e.endsWith(`/${i}.html`)):[]}function oD(e,t){let n=/^content\/([^/]+)\/(.+)\.vy$/.exec(e);if(!n)return null;let r=`build/html/${n[1]}/${n[2]}.html`;if(t.includes(r))return r;let i=`output/html/${n[1]}/${n[2]}.html`;return t.includes(i)?i:null}function sD(e,t){let n=iD(e),r=(t&&n.includes(t)?t:null)??n.find(e=>e.endsWith(`/mula/1.html`))??n[0]??null;return r?{path:r,html:e[r]??null}:{path:null,html:null}}async function cD(e){try{let t=(await nD()).compile_workspace({...e},null),n=JSON.parse(t),r=n.files??{},i=sD(r);return{ok:!0,files:r,stats:n.stats??{duration_ms:0,file_count:0},previewHtml:i.html,previewPath:i.path}}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}var lD=T(`<div class="banner svelte-908ysk"><!></div>`);function uD(e,n){var i=t(),a=y(i),o=e=>{var t=lD();Ue(s(t),{variant:`warning`,title:`Engine not loaded`,children:(e,t)=>{te();var n=l();g(()=>u(n,eD)),E(e,n)},$$slots:{default:!0}}),D(t),E(e,t)};r(a,e=>{n.status===`missing`&&e(o)}),E(e,i)}var dD={addressing:`sequence`,pathSchema:[],hierarchy:[]};function fD(e,t){let n=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return RegExp(`(?:^|\\n)\\[${n}\\][^\\n]*\\n([\\s\\S]*?)(?=\\n\\[|$)`).exec(e)?.[1]??``}function pD(e,t){return RegExp(`^${t}\\s*=\\s*"([^"]*)"`,`m`).exec(e)?.[1]??null}function mD(e,t){let n=RegExp(`^${t}\\s*=\\s*\\[([^\\]]*)]`,`m`).exec(e);return n?[...n[1].matchAll(/"([^"]*)"/g)].map(e=>e[1]):[]}function hD(e){if(!e?.trim())return dD;let t=fD(e,`build.default`),n=fD(e,`urn`);return{addressing:pD(t,`layout`)===`document`?`document`:`sequence`,pathSchema:mD(n,`path_schema`),hierarchy:mD(n,`hierarchy`)}}function gD(e){let t=/\/html\/[^/]+\/(.+)\.html$/.exec(e),n=/^content\/[^/]+\/(.+)\.vy$/.exec(e),r=t?.[1]??n?.[1];return r?r.split(`/`):[]}function _D(e,t){let n=t.addressing===`document`?`document`:`container`,r=gD(e).map((e,n)=>({level:t.pathSchema[n],value:e})).filter(e=>!!e.level);if(!r.length)return n;let i=t.hierarchy.at(-1),a=n===`container`&&i?r.filter(e=>e.level!==i):r;return a.length?`${n} · ${a.map(e=>`${e.level} ${e.value}`).join(` · `)}`:n}function vD(e){return Object.keys(e).filter(e=>e.length>0&&!e.startsWith(`vysamples/`)).sort()}function yD(e){let t=[];for(let n of e){let e=n.split(`/`).filter(Boolean),r=t,i=``;for(let t=0;t<e.length;t++){let a=e[t],o=t===e.length-1;i=i?`${i}/${a}`:a;let s=o?n:`dir:${i}`,c=r.find(e=>e.id===s);c||(c=o?{id:s,label:a}:{id:s,label:a,children:[]},r.push(c)),o||(r=c.children??[])}}return bD(t)}function bD(e){for(let t of e)t.children&&=bD(t.children);return e.sort(xD)}function xD(e,t){let n=+!e.children,r=+!t.children;return n===r?e.label.localeCompare(t.label):n-r}var SD=T(`<div class="source-sidebar svelte-1j31luh"><!></div>`),CD=T(`<div class="banner svelte-1j31luh"><!></div>`),wD=T(`<span class="stats svelte-1j31luh"> </span>`),TD=T(`<p class="empty svelte-1j31luh">No source file selected.</p>`),ED=T(`<p class="preview-unit svelte-1j31luh"> </p>`),DD=T(`<iframe title="Compile preview" sandbox="allow-scripts allow-same-origin" class="svelte-1j31luh"></iframe>`),OD=T(`<p class="empty svelte-1j31luh"> </p>`),kD=T(`<div class="play svelte-1j31luh"><!> <!> <header class="intro svelte-1j31luh"><p class="svelte-1j31luh">Vyasa is a <strong>language</strong> <a data-sveltekit-reload="" class="svelte-1j31luh">Viewer</a> reads packed publications; <a class="svelte-1j31luh">vyasa-docs</a> explains the grammar; <a class="svelte-1j31luh">vyasa-samples</a> is the workspace this showcase is copied from.</p> <p class="hint svelte-1j31luh">Edits live only in this tab. Reset restores the sample. Nothing is saved.</p></header> <div class="toolbar svelte-1j31luh"><!> <!> <!></div> <!> <div class="split svelte-1j31luh"><section class="pane editor svelte-1j31luh" aria-label="Source"><!></section> <section class="pane preview svelte-1j31luh" aria-label="Preview"><div class="preview-bar svelte-1j31luh"><div class="preview-select svelte-1j31luh"><!></div> <!></div> <!></section></div></div>`);function AD(n,a){ee(a,!0);let o=e=>{var t=SD();Xe(s(t),{title:`Source`,class:`source-panel`,children:(e,t)=>{qe(e,{get data(){return p(_e)},onSelect:ke,get selectedId(){return p(ie)},set selectedId(e){f(ie,e,!0)},get expandedIds(){return p(T)},set expandedIds(e){f(T,e,!0)}})},$$slots:{default:!0}}),D(t),E(e,t)},c=ue(`theme`),d=ue(`studio-shell`),m=$E.files;function h(e){return{...e}}function x(e){return e.endsWith(`.html`)?`html`:e.endsWith(`.vy`)?`vy`:`markdown`}let S=$E.showcaseFile in m?$E.showcaseFile:Object.keys(m)[0]??``,C=e(`loading`),ne=e(b(h(m))),re=e(b(S)),ie=e(b(S)),T=e(b(new Set([`dir:content`,`dir:content/mula`,`dir:content/iast`,`dir:templates`,`dir:templates/html`,`dir:annotations`]))),se=e(0),O=e(!1),ce=e(``),de=e(b({})),fe=e(``),pe=e(``),me=e(``),he=w(()=>c?.current===`light`?`light`:`dark`),ge=w(()=>x(p(re))),_e=w(()=>yD(vD(p(ne)))),ve=w(()=>hD(p(ne)[`vyasac.toml`])),ye=w(()=>p(pe)?_D(p(pe),p(ve)):``),be=w(()=>{let e=iD(p(de)),t=aD(p(re),e).length>0?aD(p(re),e):aD(p(pe),e);return(t.length?t:e.filter(e=>e.endsWith(`/1.html`))).map(e=>({label:xe(e),value:e}))});function xe(e){let t=/\/html\/([^/]+)\/([^/]+)\.html$/.exec(e);return t?`${t[1]===`mula`?`Devanagari`:t[1]===`iast`?`IAST`:t[1]} ${t[2]}`:e}function Ce(e){let t=p(de)[e];t!=null&&(f(pe,e,!0),f(fe,t,!0))}function Te(e){let t=oD(e,iD(p(de)));t&&Ce(t)}function ke(e){if(e.children?.length){f(ie,p(re),!0);return}f(re,e.id,!0),f(ie,e.id,!0),Te(e.id)}_(()=>(d?.setSidebarLeft(o),d?.setLeftWidth(280),()=>d?.setSidebarLeft(void 0))),le(()=>{Ae()});async function Ae(){f(C,await rD(),!0),p(C)===`ready`&&$E.available&&await Me()}function je(){f(ne,h(m),!0),f(se,p(se)+1),f(ce,``),f(de,{},!0),f(fe,``),f(pe,``),f(me,``)}async function Me(){if(!(p(C)!==`ready`||p(O))){f(O,!0),f(ce,``),f(me,`Compiling…`);try{let e=await cD(p(ne));if(!e.ok){f(ce,e.error,!0),f(de,{},!0),f(fe,``),f(pe,``),f(me,``);return}f(de,e.files,!0);let t=sD(e.files,oD(p(re),iD(e.files)));f(fe,t.html??``,!0),f(pe,t.path??``,!0),f(me,`Compiled ${e.stats.file_count} files in ${Math.round(e.stats.duration_ms)}ms`)}finally{f(O,!1)}}}var Ne=kD(),Pe=s(Ne);uD(Pe,{get status(){return p(C)}});var Fe=v(Pe,2),Ie=e=>{var t=CD();Ue(s(t),{variant:`warning`,title:`Sample not loaded`,children:(e,t)=>{te();var n=l();g(()=>u(n,$E.missingMessage)),E(e,n)},$$slots:{default:!0}}),D(t),E(e,t)};r(Fe,e=>{$E.available||e(Ie)});var Le=v(Fe,2),Re=s(Le),Be=v(s(Re),2),Ve=v(Be),He=v(Ve,2),We=v(He,2);te(),D(Re),te(2),D(Le);var Ge=v(Le,2),Ke=s(Ge);{let e=w(()=>we(Qe)),t=w(()=>!$E.available);Se(Ke,{variant:`ghost`,size:`sm`,get icon(){return p(e)},onclick:je,get disabled(){return p(t)},children:(e,t)=>{te(),E(e,l(`Reset`))},$$slots:{default:!0}})}var Je=v(Ke,2);{let e=w(()=>we(Ze)),t=w(()=>!$E.available||p(C)!==`ready`||p(O));Se(Je,{variant:`primary`,size:`sm`,get icon(){return p(e)},onclick:Me,get disabled(){return p(t)},children:(e,t)=>{te();var n=l();g(()=>u(n,p(O)?`Running…`:`Run`)),E(e,n)},$$slots:{default:!0}})}var Ye=v(Je,2),$e=e=>{var t=wD(),n=s(t,!0);D(t),g(()=>u(n,p(me))),E(e,t)};r(Ye,e=>{p(me)&&e($e)}),D(Ge);var et=v(Ge,2),tt=e=>{var t=CD();Ue(s(t),{variant:`danger`,title:`Compile failed`,children:(e,t)=>{te();var n=l();g(()=>u(n,p(ce))),E(e,n)},$$slots:{default:!0}}),D(t),E(e,t)};r(et,e=>{p(ce)&&e(tt)});var nt=v(et,2),rt=s(nt),it=s(rt),at=e=>{var n=t();i(y(n),()=>`${p(re)}:${p(se)}`,e=>{QE(e,{get language(){return p(ge)},get theme(){return p(he)},lineWrapping:!0,class:`editor-host`,get value(){return p(ne)[p(re)]},set value(e){p(ne)[p(re)]=e}})}),E(e,n)},ot=e=>{E(e,TD())};r(it,e=>{p(re)&&p(ne)[p(re)]!==void 0?e(at):e(ot,-1)}),D(rt);var st=v(rt,2),ct=s(st),lt=s(ct),ut=s(lt);{let e=w(()=>!p(be).length);ze(ut,{get options(){return p(be)},onchange:Ce,placeholder:`Preview`,get disabled(){return p(e)},get value(){return p(pe)},set value(e){f(pe,e,!0)}})}D(lt);var k=v(lt,2),dt=e=>{var t=ED(),n=s(t,!0);D(t),g(()=>u(n,p(ye))),E(e,t)};r(k,e=>{p(ye)&&e(dt)}),D(ct);var ft=v(ct,2),pt=e=>{var n=t();i(y(n),()=>p(pe),e=>{var t=DD();g(()=>oe(t,`srcdoc`,p(fe))),E(e,t)}),E(e,n)},mt=e=>{var t=OD(),n=s(t,!0);D(t),g(()=>u(n,p(O)?`Compiling…`:`Click Run to compile this workspace to HTML.`)),E(e,t)};r(ft,e=>{p(fe)?e(pt):e(mt,-1)}),D(st),D(nt),D(Ne),g(e=>{u(Be,` for packing meaning with text. This screen compiles the
			${$E.title??``} source in the browser. The `),oe(Ve,`href`,e),oe(He,`href`,Ee),oe(We,`href`,Oe)},[()=>De()]),E(n,Ne),ae()}function jD(e){me(`1uha8ag`,e=>{o(()=>{c.title=`Vyasa Studio — Project Vyasa`})}),AD(e,{})}export{jD as component};
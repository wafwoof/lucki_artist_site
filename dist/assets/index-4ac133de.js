(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();var M,a,re,E,G,ie,R,N={},oe=[],me=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function w(e,t){for(var n in t)e[n]=t[n];return e}function le(e){var t=e.parentNode;t&&t.removeChild(e)}function ye(e,t,n){var i,l,r,s={};for(r in t)r=="key"?i=t[r]:r=="ref"?l=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?M.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return I(e,s,i,l,null)}function I(e,t,n,i,l){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++re};return l==null&&a.vnode!=null&&a.vnode(r),r}function S(e){return e.children}function U(e,t){this.props=e,this.context=t}function x(e,t){if(t==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?x(e):null}function ce(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ce(e)}}function K(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!W.__r++||G!==a.debounceRendering)&&((G=a.debounceRendering)||ie)(W)}function W(){var e,t,n,i,l,r,s,d;for(E.sort(R);e=E.shift();)e.__d&&(t=E.length,i=void 0,l=void 0,s=(r=(n=e).__v).__e,(d=n.__P)&&(i=[],(l=w({},r)).__v=r.__v+1,O(d,r,l,n.__n,d.ownerSVGElement!==void 0,r.__h!=null?[s]:null,i,s??x(r),r.__h),he(i,r),r.__e!=s&&ce(r)),E.length>t&&E.sort(R));W.__r=0}function se(e,t,n,i,l,r,s,d,f,p){var _,v,u,c,h,L,m,y=i&&i.__k||oe,b=y.length;for(n.__k=[],_=0;_<t.length;_++)if((c=n.__k[_]=(c=t[_])==null||typeof c=="boolean"||typeof c=="function"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?I(null,c,null,null,c):Array.isArray(c)?I(S,{children:c},null,null,null):c.__b>0?I(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(u=y[_])===null||u&&c.key==u.key&&c.type===u.type)y[_]=void 0;else for(v=0;v<b;v++){if((u=y[v])&&c.key==u.key&&c.type===u.type){y[v]=void 0;break}u=null}O(e,c,u=u||N,l,r,s,d,f,p),h=c.__e,(v=c.ref)&&u.ref!=v&&(m||(m=[]),u.ref&&m.push(u.ref,null,c),m.push(v,c.__c||h,c)),h!=null?(L==null&&(L=h),typeof c.type=="function"&&c.__k===u.__k?c.__d=f=ae(c,f,e):f=de(e,c,u,y,h,f),typeof n.type=="function"&&(n.__d=f)):f&&u.__e==f&&f.parentNode!=e&&(f=x(u))}for(n.__e=L,_=b;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=ue(i).nextSibling),pe(y[_],y[_]));if(m)for(_=0;_<m.length;_++)fe(m[_],m[++_],m[++_])}function ae(e,t,n){for(var i,l=e.__k,r=0;l&&r<l.length;r++)(i=l[r])&&(i.__=e,t=typeof i.type=="function"?ae(i,t,n):de(n,i,i,l,i.__e,t));return t}function de(e,t,n,i,l,r){var s,d,f;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||l!=r||l.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(l),s=null;else{for(d=r,f=0;(d=d.nextSibling)&&f<i.length;f+=1)if(d==l)break e;e.insertBefore(l,r),s=r}return s!==void 0?s:l.nextSibling}function ue(e){var t,n,i;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(i=ue(n)))return i}return null}function ge(e,t,n,i,l){var r;for(r in n)r==="children"||r==="key"||r in t||D(e,r,null,n[r],i);for(r in t)l&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||D(e,r,t[r],n[r],i)}function V(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||me.test(t)?n:n+"px"}function D(e,t,n,i,l){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||V(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||V(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i||e.addEventListener(t,r?J:Z,r):e.removeEventListener(t,r?J:Z,r);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Z(e){return this.l[e.type+!1](a.event?a.event(e):e)}function J(e){return this.l[e.type+!0](a.event?a.event(e):e)}function O(e,t,n,i,l,r,s,d,f){var p,_,v,u,c,h,L,m,y,b,C,A,z,P,T,g=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,d=t.__e=n.__e,t.__h=null,r=[d]),(p=a.__b)&&p(t);try{e:if(typeof g=="function"){if(m=t.props,y=(p=g.contextType)&&i[p.__c],b=p?y?y.props.value:p.__:i,n.__c?L=(_=t.__c=n.__c).__=_.__E:("prototype"in g&&g.prototype.render?t.__c=_=new g(m,b):(t.__c=_=new U(m,b),_.constructor=g,_.render=ke),y&&y.sub(_),_.props=m,_.state||(_.state={}),_.context=b,_.__n=i,v=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),g.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=w({},_.__s)),w(_.__s,g.getDerivedStateFromProps(m,_.__s))),u=_.props,c=_.state,_.__v=t,v)g.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(g.getDerivedStateFromProps==null&&m!==u&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(m,b),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(m,_.__s,b)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(_.props=m,_.state=_.__s,_.__d=!1),_.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(F){F&&(F.__=t)}),C=0;C<_._sb.length;C++)_.__h.push(_._sb[C]);_._sb=[],_.__h.length&&s.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(m,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(u,c,h)})}if(_.context=b,_.props=m,_.__P=e,A=a.__r,z=0,"prototype"in g&&g.prototype.render){for(_.state=_.__s,_.__d=!1,A&&A(t),p=_.render(_.props,_.state,_.context),P=0;P<_._sb.length;P++)_.__h.push(_._sb[P]);_._sb=[]}else do _.__d=!1,A&&A(t),p=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++z<25);_.state=_.__s,_.getChildContext!=null&&(i=w(w({},i),_.getChildContext())),v||_.getSnapshotBeforeUpdate==null||(h=_.getSnapshotBeforeUpdate(u,c)),T=p!=null&&p.type===S&&p.key==null?p.props.children:p,se(e,Array.isArray(T)?T:[T],t,n,i,l,r,s,d,f),_.base=t.__e,t.__h=null,_.__h.length&&s.push(_),L&&(_.__E=_.__=null),_.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=be(n.__e,t,n,i,l,r,s,f);(p=a.diffed)&&p(t)}catch(F){t.__v=null,(f||r!=null)&&(t.__e=d,t.__h=!!f,r[r.indexOf(d)]=null),a.__e(F,t,n)}}function he(e,t){a.__c&&a.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){a.__e(i,n.__v)}})}function be(e,t,n,i,l,r,s,d){var f,p,_,v=n.props,u=t.props,c=t.type,h=0;if(c==="svg"&&(l=!0),r!=null){for(;h<r.length;h++)if((f=r[h])&&"setAttribute"in f==!!c&&(c?f.localName===c:f.nodeType===3)){e=f,r[h]=null;break}}if(e==null){if(c===null)return document.createTextNode(u);e=l?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,u.is&&u),r=null,d=!1}if(c===null)v===u||d&&e.data===u||(e.data=u);else{if(r=r&&M.call(e.childNodes),p=(v=n.props||N).dangerouslySetInnerHTML,_=u.dangerouslySetInnerHTML,!d){if(r!=null)for(v={},h=0;h<e.attributes.length;h++)v[e.attributes[h].name]=e.attributes[h].value;(_||p)&&(_&&(p&&_.__html==p.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(ge(e,u,v,l,d),_)t.__k=[];else if(h=t.props.children,se(e,Array.isArray(h)?h:[h],t,n,i,l&&c!=="foreignObject",r,s,r?r[0]:n.__k&&x(n,0),d),r!=null)for(h=r.length;h--;)r[h]!=null&&le(r[h]);d||("value"in u&&(h=u.value)!==void 0&&(h!==e.value||c==="progress"&&!h||c==="option"&&h!==v.value)&&D(e,"value",h,v.value,!1),"checked"in u&&(h=u.checked)!==void 0&&h!==e.checked&&D(e,"checked",h,v.checked,!1))}return e}function fe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){a.__e(i,n)}}function pe(e,t,n){var i,l;if(a.unmount&&a.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||fe(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){a.__e(r,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(l=0;l<i.length;l++)i[l]&&pe(i[l],t,n||typeof e.type!="function");n||e.__e==null||le(e.__e),e.__=e.__e=e.__d=void 0}function ke(e,t,n){return this.constructor(e,n)}function we(e,t,n){var i,l,r;a.__&&a.__(e,t),l=(i=typeof n=="function")?null:n&&n.__k||t.__k,r=[],O(t,e=(!i&&n||t).__k=ye(S,null,[e]),l||N,N,t.ownerSVGElement!==void 0,!i&&n?[n]:l?null:t.firstChild?M.call(t.childNodes):null,r,!i&&n?n:l?l.__e:t.firstChild,i),he(r,e)}M=oe.slice,a={__e:function(e,t,n,i){for(var l,r,s;t=t.__;)if((l=t.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(e)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,i||{}),s=l.__d),s)return l.__E=l}catch(d){e=d}throw e}},re=0,U.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},n),this.props)),e&&w(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),K(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),K(this))},U.prototype.render=S,E=[],ie=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,R=function(e,t){return e.__v.__b-t.__v.__b},W.__r=0;var k,B,Y,ve=[],q=[],Q=a.__b,X=a.__r,ee=a.diffed,te=a.__c,ne=a.unmount;function Se(){for(var e;e=ve.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($),e.__H.__h.forEach(j),e.__H.__h=[]}catch(t){e.__H.__h=[],a.__e(t,e.__v)}}a.__b=function(e){k=null,Q&&Q(e)},a.__r=function(e){X&&X(e);var t=(k=e.__c).__H;t&&(B===k?(t.__h=[],k.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=q,n.__N=n.i=void 0})):(t.__h.forEach($),t.__h.forEach(j),t.__h=[])),B=k},a.diffed=function(e){ee&&ee(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ve.push(t)!==1&&Y===a.requestAnimationFrame||((Y=a.requestAnimationFrame)||Ee)(Se)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==q&&(n.__=n.__V),n.i=void 0,n.__V=q})),B=k=null},a.__c=function(e,t){t.some(function(n){try{n.__h.forEach($),n.__h=n.__h.filter(function(i){return!i.__||j(i)})}catch(i){t.some(function(l){l.__h&&(l.__h=[])}),t=[],a.__e(i,n.__v)}}),te&&te(e,t)},a.unmount=function(e){ne&&ne(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{$(i)}catch(l){t=l}}),n.__H=void 0,t&&a.__e(t,n.__v))};var _e=typeof requestAnimationFrame=="function";function Ee(e){var t,n=function(){clearTimeout(i),_e&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);_e&&(t=requestAnimationFrame(n))}function $(e){var t=k,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),k=t}function j(e){var t=k;e.__c=e.__(),k=t}const Le="/assets/super_urus_lucki_1-413a8997.gif";var Ae=0;function o(e,t,n,i,l,r){var s,d,f={};for(d in t)d=="ref"?s=t[d]:f[d]=t[d];var p={type:e,props:f,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ae,__source:l,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(d in s)f[d]===void 0&&(f[d]=s[d]);return a.vnode&&a.vnode(p),p}const xe=()=>o(S,{children:o("div",{class:"overlay-container",children:[o("div",{class:"overlay-content",children:[o("h1",{children:"Super Urus"}),o("a",{href:"https://www.youtube.com/watch?v=fIrSkilUvHw",children:o("h2",{children:"Watch Now"})})]}),o("div",{class:"gif-container",children:o("img",{src:Le,alt:"GIF"})})]})});const Ce="/assets/navbar-logo-2ea00617.png",Pe=()=>o("div",{class:"navbar",children:[o("a",{href:"#",children:o("img",{src:Ce,alt:"Lucki"})}),o("div",{class:"navbar-shop-link",children:o("a",{href:"https://shop.sincerelylucki.com/",children:o("h2",{children:"Shop"})})})]});const Te="/assets/flawless_like_me_cover-4a347173.jpg",Fe="/assets/wake_up_lucki_cover-c50b19f7.webp",He="/assets/almost_there_cover-e0c2dc94.jpg",Ie="/assets/days_b4_iii_cover-7a64d5f4.webp",H=e=>()=>{console.log(e),setTimeout(()=>{window.location.href="https://en.wikipedia.org/wiki/Lucki#Discography"},200)},Ue=()=>o(S,{children:o("div",{class:"releases-container",children:[o("h1",{children:"Releases"}),o("div",{class:"release",onClick:H("flawless_like_me"),children:[o("div",{class:"release-image",children:o("img",{src:Te,alt:"Flawless Like Me"})}),o("div",{class:"release-info",children:[o("h2",{children:"FLAWLESS LIKE ME"}),o("h3",{children:"2022 • Album"})]})]}),o("div",{class:"release",onClick:H("wake_up_lucki"),children:[o("div",{class:"release-image",children:o("img",{src:Fe,alt:"Wake Up Lucki"})}),o("div",{class:"release-info",children:[o("h2",{children:"WAKE UP LUCKI"}),o("h3",{children:"2021 • Album"})]})]}),o("div",{class:"release",onClick:H("almost_there"),children:[o("div",{class:"release-image",children:o("img",{src:He,alt:"Almost There"})}),o("div",{class:"release-info",children:[o("h2",{children:"Almost There"}),o("h3",{children:"2020 • Album"})]})]}),o("div",{class:"release",onClick:H("days_b4_iii"),children:[o("div",{class:"release-image",children:o("img",{src:Ie,alt:"Days B4 III"})}),o("div",{class:"release-info",children:[o("h2",{children:"Days B4 III"}),o("h3",{children:"2019 • Album"})]})]})]})});const $e="/assets/icon-instagram-6a14b1f0.svg",Ne="/assets/icon-youtube-b50706c6.svg",We="/assets/icon-github-bc776b24.svg",De="/assets/icon-bandcamp-13749469.svg",Me=()=>o("div",{class:"footer",children:o("div",{class:"footer-icon-container",children:[o("a",{href:"https://www.instagram.com/deadboylife/?hl=en",children:o("img",{src:$e,alt:"Instagram"})}),o("a",{href:"https://www.youtube.com/channel/UCnWiTG19_2QzYuxW5M94d0A",children:o("img",{src:Ne,alt:"YouTube"})}),o("a",{href:"https://github.com/wafwoof",children:o("img",{src:We,alt:"GitHub"})}),o("a",{href:"https://lucki.bandcamp.com/album/flawless-like-me-explicit",children:o("img",{src:De,alt:"Bandcamp"})})]})});const Be=()=>o(S,{children:o("div",{class:"events-container",children:[o("h1",{children:"Shows"}),o("div",{class:"event",children:[o("div",{class:"event-header",children:[o("h3",{children:"JUN 23 FRI"}),o("a",{href:"https://www.bandsintown.com/artist-rsvp/5041184?event_id=1028132701&utm_campaign=event&utm_medium=api&app_id=squarespace-trout-amethyst-jddz&utm_source=public_api&came_from=267&spn=0&signature=ZZ4688095fd10209b94cf4c2969591b24c4daaa7b2ae37e6926cfa39c8c10416d2",children:o("h3",{children:"Tickets!"})})]}),o("div",{class:"event-info",children:[o("h2",{children:"SeatGeek Stadium @ 12:00am "}),o("h2",{children:"Bridgeview, IL, United States"})]})]}),o("div",{class:"event",children:[o("div",{class:"event-header",children:[o("h3",{children:"JUL 08 SAT"}),o("a",{href:"https://www.bandsintown.com/t/1027559365?app_id=squarespace-trout-amethyst-jddz&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket&mkt_source=www.sincerelylucki.com",children:o("h3",{children:"Tickets!"})})]}),o("div",{class:"event-info",children:[o("h2",{children:"Wireless Festival - Finsbury Park @ 11:00am "}),o("h2",{children:"London, United Kingdom "})]})]}),o("div",{class:"event",children:[o("div",{class:"event-header",children:[o("h3",{children:"JUL 07 FRI"}),o("a",{href:"https://www.bandsintown.com/artist-rsvp/5041184?event_id=1028132701&utm_campaign=event&utm_medium=api&app_id=squarespace-trout-amethyst-jddz&utm_source=public_api&came_from=267&spn=0&signature=ZZ4688095fd10209b94cf4c2969591b24c4daaa7b2ae37e6926cfa39c8c10416d2",children:o("h3",{children:"Tickets!"})})]}),o("div",{class:"event-info",children:[o("h2",{children:"Wireless Festival - Finsbury Park 2023 @ 11:00am"}),o("h2",{children:"London, United Kingdom "})]})]})]})});function qe(){return o(S,{children:[o(Pe,{}),o(xe,{}),o("div",{class:"iframe-container",style:"text-align: center;",children:o("iframe",{style:"border: 0; min-width: 50%; height: 350px",src:"https://bandcamp.com/EmbeddedPlayer/album=1110522239/size=large/bgcol=333333/linkcol=ffffff/tracklist=true/artwork=small/transparent=true/",seamless:!0,children:o("a",{href:"https://lucki.bandcamp.com/album/flawless-like-me-explicit",children:"FLAWLESS LIKE ME [Explicit] by Lucki"})})}),o(Be,{}),o(Ue,{}),o(Me,{})]})}we(qe(),document.getElementById("app"));
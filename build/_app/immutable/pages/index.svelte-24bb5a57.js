import{S as X,i as Y,s as Z,e as c,t as j,k as v,c as x,a as N,h as q,d as r,m as b,b as D,f as L,g as w,J as g,j as Q,n as F,w as tt,x as S,y as k,z as H,r as I,p as R,C as V}from"../chunks/index-c3650d4a.js";function et(n){let e,m,p,o,h,u,d,f,T,$,l,_;return{c(){e=c("div"),m=c("h6"),p=j(n[0]),o=v(),h=c("div"),u=c("div"),d=v(),f=c("h6"),T=j("Money earned so far: "),$=c("span"),l=j(n[1]),_=j(" kr."),this.h()},l(a){e=x(a,"DIV",{class:!0});var s=N(e);m=x(s,"H6",{class:!0});var y=N(m);p=q(y,n[0]),y.forEach(r),o=b(s),h=x(s,"DIV",{class:!0});var z=N(h);u=x(z,"DIV",{class:!0,style:!0}),N(u).forEach(r),z.forEach(r),d=b(s),f=x(s,"H6",{class:!0});var E=N(f);T=q(E,"Money earned so far: "),$=x(E,"SPAN",{class:!0});var M=N($);l=q(M,n[1]),M.forEach(r),_=q(E," kr."),E.forEach(r),s.forEach(r),this.h()},h(){D(m,"class","text-white"),D(u,"class","bar bg-green-500 h-full svelte-p8mp6v"),L(u,"--bar-width",n[2]+"%"),D(h,"class","bg-white h-4"),D($,"class","font-bold"),D(f,"class","text-white"),D(e,"class","bg-gray-800 m-2 px-6 pt-0")},m(a,s){w(a,e,s),g(e,m),g(m,p),g(e,o),g(e,h),g(h,u),g(e,d),g(e,f),g(f,T),g(f,$),g($,l),g(f,_)},p(a,[s]){s&1&&Q(p,a[0]),s&4&&L(u,"--bar-width",a[2]+"%"),s&2&&Q(l,a[1])},i:F,o:F,d(a){a&&r(e)}}}const st=0,it=100;function rt(n,e,m){return Math.min(Math.max(n,e),m)}function mt(n,e,m){let p,o,h,u,{title:d=Mandag}=e,{hourRate:f=118*.92}=e,{startTime:T="2022-06-21T20:00:00"}=e;T=new Date(T);let $=T.getTime(),{endTime:l="2022-06-21T20:30:00"}=e;l=new Date(l);let _=l.getTime(),a=Date.now();return tt(()=>{const s=setInterval(()=>{m(7,a=Date.now())},1e3);return()=>{clearInterval(s)}}),_=_-$,console.log(`Start time: ${$}`),console.log(`End time: ${_}`),console.log(`Current time: ${a}`),console.log(`Bar width: ${o}`),n.$$set=s=>{"title"in s&&m(0,d=s.title),"hourRate"in s&&m(5,f=s.hourRate),"startTime"in s&&m(3,T=s.startTime),"endTime"in s&&m(4,l=s.endTime)},n.$$.update=()=>{n.$$.dirty&128&&m(9,p=a-$),n.$$.dirty&576&&m(2,o=Math.min(Math.max(p/_*100,st),it)),n.$$.dirty&576&&m(8,h=rt(p,0,_)/1e3/60/60),n.$$.dirty&288&&m(1,u=Math.floor(h*f))},[d,u,o,T,l,f,_,a,h,p]}class W extends X{constructor(e){super(),Y(this,e,mt,et,Z,{title:0,hourRate:5,startTime:3,endTime:4})}}function at(n){let e,m,p,o,h,u,d,f,T,$,l,_,a,s,y,z,E,M,A,U,B,C,J,O,P;return d=new W({props:{title:"Mandag Nat",startTime:"2022-06-20T21:45:00",endTime:"2022-06-21T07:00:00"}}),T=new W({props:{title:"Tirsdag Nat",startTime:"2022-06-21T21:45:00",endTime:"2022-06-22T07:00:00"}}),l=new W({props:{title:"Onsdag Nat",startTime:"2022-06-22T21:45:00",endTime:"2022-06-23T07:00:00"}}),a=new W({props:{title:"Torsdag Nat",startTime:"2022-06-23T21:45:00",endTime:"2022-06-24T07:00:00"}}),M=new W({props:{title:"Mandag Nat",startTime:"2022-06-27T21:45:00",endTime:"2022-06-28T07:00:00"}}),U=new W({props:{title:"Tirsdag Nat",startTime:"2022-06-28T21:45:00",endTime:"2022-06-29T07:00:00"}}),C=new W({props:{title:"Onsdag Nat",startTime:"2022-06-29T21:45:00",endTime:"2022-06-30T07:00:00"}}),O=new W({props:{title:"Torsdag Nat",startTime:"2022-06-30T21:45:00",endTime:"2022-07-01T07:00:00"}}),{c(){e=c("h1"),m=j("Work Time Vis"),p=v(),o=c("h2"),h=j("Uge 1"),u=v(),S(d.$$.fragment),f=v(),S(T.$$.fragment),$=v(),S(l.$$.fragment),_=v(),S(a.$$.fragment),s=v(),y=c("h2"),z=j("Uge 2"),E=v(),S(M.$$.fragment),A=v(),S(U.$$.fragment),B=v(),S(C.$$.fragment),J=v(),S(O.$$.fragment),this.h()},l(t){e=x(t,"H1",{class:!0});var i=N(e);m=q(i,"Work Time Vis"),i.forEach(r),p=b(t),o=x(t,"H2",{class:!0});var G=N(o);h=q(G,"Uge 1"),G.forEach(r),u=b(t),k(d.$$.fragment,t),f=b(t),k(T.$$.fragment,t),$=b(t),k(l.$$.fragment,t),_=b(t),k(a.$$.fragment,t),s=b(t),y=x(t,"H2",{class:!0});var K=N(y);z=q(K,"Uge 2"),K.forEach(r),E=b(t),k(M.$$.fragment,t),A=b(t),k(U.$$.fragment,t),B=b(t),k(C.$$.fragment,t),J=b(t),k(O.$$.fragment,t),this.h()},h(){D(e,"class","text-xl font-bold"),D(o,"class","font-semibold"),D(y,"class","font-semibold")},m(t,i){w(t,e,i),g(e,m),w(t,p,i),w(t,o,i),g(o,h),w(t,u,i),H(d,t,i),w(t,f,i),H(T,t,i),w(t,$,i),H(l,t,i),w(t,_,i),H(a,t,i),w(t,s,i),w(t,y,i),g(y,z),w(t,E,i),H(M,t,i),w(t,A,i),H(U,t,i),w(t,B,i),H(C,t,i),w(t,J,i),H(O,t,i),P=!0},p:F,i(t){P||(I(d.$$.fragment,t),I(T.$$.fragment,t),I(l.$$.fragment,t),I(a.$$.fragment,t),I(M.$$.fragment,t),I(U.$$.fragment,t),I(C.$$.fragment,t),I(O.$$.fragment,t),P=!0)},o(t){R(d.$$.fragment,t),R(T.$$.fragment,t),R(l.$$.fragment,t),R(a.$$.fragment,t),R(M.$$.fragment,t),R(U.$$.fragment,t),R(C.$$.fragment,t),R(O.$$.fragment,t),P=!1},d(t){t&&r(e),t&&r(p),t&&r(o),t&&r(u),V(d,t),t&&r(f),V(T,t),t&&r($),V(l,t),t&&r(_),V(a,t),t&&r(s),t&&r(y),t&&r(E),V(M,t),t&&r(A),V(U,t),t&&r(B),V(C,t),t&&r(J),V(O,t)}}}class nt extends X{constructor(e){super(),Y(this,e,null,at,Z,{})}}export{nt as default};

import{S as Vt,i as Ft,s as Ut,e as I,k as D,t as m,c as N,a as q,d as T,m as $,h as f,b as P,f as Kt,g as Lt,J as a,j as dt,n as Rt,w as Qt,K as B,L as J,x as Z,y as G,z as Q,M as X,r as Y,p as x,C as tt}from"../chunks/index-c6be6a8a.js";function Xt(t){let i,r,u,h,v,s,S,c,V,_,E,y,g,b,k,e,M,H,w,C,L,o,at,st,K,rt,lt,O,j=Math.floor(t[0])+"",it,R;return{c(){i=I("div"),r=I("div"),u=I("div"),h=I("div"),v=D(),s=I("div"),S=I("p"),c=m(t[1]),V=D(),_=I("p"),E=m("Money earned so far: "),y=I("span"),g=m(t[2]),b=m(" kr."),k=D(),e=I("p"),M=m(t[5]),H=m(":"),w=m(t[4]),C=m(":"),L=m(t[3]),o=m(" / "),at=m(t[6]),st=m(":"),K=m(t[7]),rt=m(":"),lt=m(t[8]),O=m(" ("),it=m(j),R=m("%)"),this.h()},l(W){i=N(W,"DIV",{class:!0});var p=q(i);r=N(p,"DIV",{class:!0});var F=q(r);u=N(F,"DIV",{class:!0});var mt=q(u);h=N(mt,"DIV",{class:!0,style:!0}),q(h).forEach(T),mt.forEach(T),F.forEach(T),v=$(p),s=N(p,"DIV",{class:!0});var A=q(s);S=N(A,"P",{class:!0});var U=q(S);c=f(U,t[1]),U.forEach(T),V=$(A),_=N(A,"P",{class:!0});var nt=q(_);E=f(nt,"Money earned so far: "),y=N(nt,"SPAN",{class:!0});var ft=q(y);g=f(ft,t[2]),ft.forEach(T),b=f(nt," kr."),nt.forEach(T),k=$(A),e=N(A,"P",{class:!0});var d=q(e);M=f(d,t[5]),H=f(d,":"),w=f(d,t[4]),C=f(d,":"),L=f(d,t[3]),o=f(d," / "),at=f(d,t[6]),st=f(d,":"),K=f(d,t[7]),rt=f(d,":"),lt=f(d,t[8]),O=f(d," ("),it=f(d,j),R=f(d,"%)"),d.forEach(T),A.forEach(T),p.forEach(T),this.h()},h(){P(h,"class","bar bg-green-500 h-full svelte-p8mp6v"),Kt(h,"--bar-width",t[0]+"%"),P(u,"class","bg-white h-4"),P(r,"class","absolute h-full w-full px-4 py-6"),P(S,"class","absolute left-4 top-0"),P(y,"class","text-blue-200"),P(_,"class","absolute left-4 bottom-1 text-sm"),P(e,"class","absolute right-4 top-1 text-sm"),P(s,"class","absolute h-full w-full text-white font-bold"),P(i,"class","bg-gray-800 my-4 h-16 flex flex-col relative")},m(W,p){Lt(W,i,p),a(i,r),a(r,u),a(u,h),a(i,v),a(i,s),a(s,S),a(S,c),a(s,V),a(s,_),a(_,E),a(_,y),a(y,g),a(_,b),a(s,k),a(s,e),a(e,M),a(e,H),a(e,w),a(e,C),a(e,L),a(e,o),a(e,at),a(e,st),a(e,K),a(e,rt),a(e,lt),a(e,O),a(e,it),a(e,R)},p(W,[p]){p&1&&Kt(h,"--bar-width",W[0]+"%"),p&2&&dt(c,W[1]),p&4&&dt(g,W[2]),p&32&&dt(M,W[5]),p&16&&dt(w,W[4]),p&8&&dt(L,W[3]),p&1&&j!==(j=Math.floor(W[0])+"")&&dt(it,j)},i:Rt,o:Rt,d(W){W&&T(i)}}}const Yt=0,xt=100,vt=1e3,te=.5;function ee(t,i,r){return Math.min(Math.max(t,i),r)}function ie(t){return t=t-16.6,t=t*.92,t=t*100,t=Math.floor(t),t=t/100,Intl.NumberFormat("da-DK").format(t)}function ht(t,i){return t=Math.floor(t),t.toString().padStart(2,"0")}function ne(t,i,r){let u,h,v,s,S,c,{title:V=Mandag}=i,{hourRate:_=73+5+40}=i,{startTime:E="2022-06-21T20:00:00"}=i;E=new Date(E);let y=E.getTime(),{endTime:g="2022-06-21T20:30:00"}=i;g=new Date(g);let b=g.getTime(),k=Date.now();Qt(()=>{const o=setInterval(()=>{r(13,k=Date.now())},1e3);return()=>{clearInterval(o)}}),b=b-y;let{barWidth:e=0}=i;const M=vt*60,H=M*60;let w=ht(b/H),C=ht(b%H/M),L=ht(b%M/vt);return t.$$set=o=>{"title"in o&&r(1,V=o.title),"hourRate"in o&&r(11,_=o.hourRate),"startTime"in o&&r(9,E=o.startTime),"endTime"in o&&r(10,g=o.endTime),"barWidth"in o&&r(0,e=o.barWidth)},t.$$.update=()=>{t.$$.dirty&8192&&r(15,u=k-y),t.$$.dirty&36864&&r(0,e=Math.min(Math.max(u/b*100,Yt),xt)),t.$$.dirty&36864&&r(14,h=ee(u,0,b)),t.$$.dirty&16384&&r(5,v=ht(h/H)),t.$$.dirty&16384&&r(4,s=ht(h%H/M)),t.$$.dirty&16384&&r(3,S=ht(h%M/vt)),t.$$.dirty&18432&&r(2,c=ie((h/H-te)*_)),t.$$.dirty&1&&e.toLocaleString("da-DK",{style:"currency",currency:"DKK",minimumFractionDigits:2})},[e,V,c,S,s,v,w,C,L,E,g,_,b,k,h,u]}class et extends Vt{constructor(i){super(),Ft(this,i,ne,Xt,Ut,{title:1,hourRate:11,startTime:9,endTime:10,barWidth:0})}}function ae(t){let i,r,u,h,v,s,S,c,V,_,E,y,g,b,k,e,M,H,w,C,L,o,at,st,K,rt,lt,O,j,it,R,W,p,F,mt,A,U,nt,ft,d,ct,Wt,z,Tt,ut;function Ot(n){t[4](n)}let Mt={title:"Mandag Nat",startTime:"2022-06-20T21:45:00",endTime:"2022-06-21T07:00:00"};t[0][0]!==void 0&&(Mt.barWidth=t[0][0]),e=new et({props:Mt}),B.push(()=>J(e,"barWidth",Ot));function At(n){t[5](n)}let wt={title:"Tirsdag Nat",startTime:"2022-06-21T21:45:00",endTime:"2022-06-22T07:00:00"};t[0][1]!==void 0&&(wt.barWidth=t[0][1]),w=new et({props:wt}),B.push(()=>J(w,"barWidth",At));function Ct(n){t[6](n)}let Dt={title:"Onsdag Nat",startTime:"2022-06-22T21:45:00",endTime:"2022-06-23T07:00:00"};t[0][2]!==void 0&&(Dt.barWidth=t[0][2]),o=new et({props:Dt}),B.push(()=>J(o,"barWidth",Ct));function jt(n){t[7](n)}let $t={title:"Torsdag Nat",startTime:"2022-06-23T18:45:00",endTime:"2022-06-24T04:00:00"};t[0][3]!==void 0&&($t.barWidth=t[0][3]),K=new et({props:$t}),B.push(()=>J(K,"barWidth",jt));function zt(n){t[8](n)}let St={title:"S\xF8ndag Nat",startTime:"2022-06-26T21:45:00",endTime:"2022-06-27T07:00:00",hourRate:73*1.75+5+40};t[0][4]!==void 0&&(St.barWidth=t[0][4]),R=new et({props:St}),B.push(()=>J(R,"barWidth",zt));function Bt(n){t[9](n)}let Et={title:"Mandag Nat",startTime:"2022-06-27T21:45:00",endTime:"2022-06-28T07:00:00"};t[0][5]!==void 0&&(Et.barWidth=t[0][5]),F=new et({props:Et}),B.push(()=>J(F,"barWidth",Bt));function Jt(n){t[10](n)}let yt={title:"Tirsdag Nat",startTime:"2022-06-28T21:45:00",endTime:"2022-06-29T07:00:00"};t[0][6]!==void 0&&(yt.barWidth=t[0][6]),U=new et({props:yt}),B.push(()=>J(U,"barWidth",Jt));function Zt(n){t[11](n)}let It={title:"Onsdag Nat",startTime:"2022-06-29T21:45:00",endTime:"2022-06-30T07:00:00"};t[0][7]!==void 0&&(It.barWidth=t[0][7]),d=new et({props:It}),B.push(()=>J(d,"barWidth",Zt));function Gt(n){t[12](n)}let Nt={title:"Torsdag Nat",startTime:"2022-06-30T18:45:00",endTime:"2022-07-01T04:00:00"};return t[0][8]!==void 0&&(Nt.barWidth=t[0][8]),z=new et({props:Nt}),B.push(()=>J(z,"barWidth",Gt)),{c(){i=I("div"),r=I("h1"),u=m("Sommerferie 2022"),h=D(),v=I("h2"),s=m("Stats:"),S=D(),c=I("p"),V=m("Percentage: "),_=m(t[1]),E=m("%"),y=D(),g=I("h2"),b=m("Uge 1"),k=D(),Z(e.$$.fragment),H=D(),Z(w.$$.fragment),L=D(),Z(o.$$.fragment),st=D(),Z(K.$$.fragment),lt=D(),O=I("h2"),j=m("Uge 2"),it=D(),Z(R.$$.fragment),p=D(),Z(F.$$.fragment),A=D(),Z(U.$$.fragment),ft=D(),Z(d.$$.fragment),Wt=D(),Z(z.$$.fragment),this.h()},l(n){i=N(n,"DIV",{class:!0});var l=q(i);r=N(l,"H1",{class:!0});var _t=q(r);u=f(_t,"Sommerferie 2022"),_t.forEach(T),h=$(l),v=N(l,"H2",{class:!0});var gt=q(v);s=f(gt,"Stats:"),gt.forEach(T),S=$(l),c=N(l,"P",{});var ot=q(c);V=f(ot,"Percentage: "),_=f(ot,t[1]),E=f(ot,"%"),ot.forEach(T),y=$(l),g=N(l,"H2",{class:!0});var bt=q(g);b=f(bt,"Uge 1"),bt.forEach(T),k=$(l),G(e.$$.fragment,l),H=$(l),G(w.$$.fragment,l),L=$(l),G(o.$$.fragment,l),st=$(l),G(K.$$.fragment,l),lt=$(l),O=N(l,"H2",{class:!0});var pt=q(O);j=f(pt,"Uge 2"),pt.forEach(T),it=$(l),G(R.$$.fragment,l),p=$(l),G(F.$$.fragment,l),A=$(l),G(U.$$.fragment,l),ft=$(l),G(d.$$.fragment,l),Wt=$(l),G(z.$$.fragment,l),l.forEach(T),this.h()},h(){P(r,"class","text-xl font-bold"),P(v,"class","text-xl"),P(g,"class","font-semibold"),P(O,"class","font-semibold"),P(i,"class","p-6")},m(n,l){Lt(n,i,l),a(i,r),a(r,u),a(i,h),a(i,v),a(v,s),a(i,S),a(i,c),a(c,V),a(c,_),a(c,E),a(i,y),a(i,g),a(g,b),a(i,k),Q(e,i,null),a(i,H),Q(w,i,null),a(i,L),Q(o,i,null),a(i,st),Q(K,i,null),a(i,lt),a(i,O),a(O,j),a(i,it),Q(R,i,null),a(i,p),Q(F,i,null),a(i,A),Q(U,i,null),a(i,ft),Q(d,i,null),a(i,Wt),Q(z,i,null),ut=!0},p(n,[l]){(!ut||l&2)&&dt(_,n[1]);const _t={};!M&&l&1&&(M=!0,_t.barWidth=n[0][0],X(()=>M=!1)),e.$set(_t);const gt={};!C&&l&1&&(C=!0,gt.barWidth=n[0][1],X(()=>C=!1)),w.$set(gt);const ot={};!at&&l&1&&(at=!0,ot.barWidth=n[0][2],X(()=>at=!1)),o.$set(ot);const bt={};!rt&&l&1&&(rt=!0,bt.barWidth=n[0][3],X(()=>rt=!1)),K.$set(bt);const pt={};!W&&l&1&&(W=!0,pt.barWidth=n[0][4],X(()=>W=!1)),R.$set(pt);const qt={};!mt&&l&1&&(mt=!0,qt.barWidth=n[0][5],X(()=>mt=!1)),F.$set(qt);const Pt={};!nt&&l&1&&(nt=!0,Pt.barWidth=n[0][6],X(()=>nt=!1)),U.$set(Pt);const kt={};!ct&&l&1&&(ct=!0,kt.barWidth=n[0][7],X(()=>ct=!1)),d.$set(kt);const Ht={};!Tt&&l&1&&(Tt=!0,Ht.barWidth=n[0][8],X(()=>Tt=!1)),z.$set(Ht)},i(n){ut||(Y(e.$$.fragment,n),Y(w.$$.fragment,n),Y(o.$$.fragment,n),Y(K.$$.fragment,n),Y(R.$$.fragment,n),Y(F.$$.fragment,n),Y(U.$$.fragment,n),Y(d.$$.fragment,n),Y(z.$$.fragment,n),ut=!0)},o(n){x(e.$$.fragment,n),x(w.$$.fragment,n),x(o.$$.fragment,n),x(K.$$.fragment,n),x(R.$$.fragment,n),x(F.$$.fragment,n),x(U.$$.fragment,n),x(d.$$.fragment,n),x(z.$$.fragment,n),ut=!1},d(n){n&&T(i),tt(e),tt(w),tt(o),tt(K),tt(R),tt(F),tt(U),tt(d),tt(z)}}}function se(t,i,r){let u,h,v,s=[0];function S(e){t.$$.not_equal(s[0],e)&&(s[0]=e,r(0,s))}function c(e){t.$$.not_equal(s[1],e)&&(s[1]=e,r(0,s))}function V(e){t.$$.not_equal(s[2],e)&&(s[2]=e,r(0,s))}function _(e){t.$$.not_equal(s[3],e)&&(s[3]=e,r(0,s))}function E(e){t.$$.not_equal(s[4],e)&&(s[4]=e,r(0,s))}function y(e){t.$$.not_equal(s[5],e)&&(s[5]=e,r(0,s))}function g(e){t.$$.not_equal(s[6],e)&&(s[6]=e,r(0,s))}function b(e){t.$$.not_equal(s[7],e)&&(s[7]=e,r(0,s))}function k(e){t.$$.not_equal(s[8],e)&&(s[8]=e,r(0,s))}return t.$$.update=()=>{t.$$.dirty&1&&r(3,u=s.reduce((e,M)=>e+M)),t.$$.dirty&9&&r(2,h=u/s.length),t.$$.dirty&4&&r(1,v=h.toLocaleString("da-DK",{minimumFractionDigits:2,maximumFractionDigits:2}))},[s,v,h,u,S,c,V,_,E,y,g,b,k]}class le extends Vt{constructor(i){super(),Ft(this,i,se,ae,Ut,{})}}export{le as default};
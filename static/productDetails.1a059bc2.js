import{_ as q}from"./index.cfee3724.js";import{_ as z,g as H}from"./useGetCurrentRoute.54989cfe.js";import{_ as V}from"./nuxt-link.56a358b1.js";import{r as g,i as $,f as I,v as k,l as A,o as r,c as _,a as e,b as v,w as y,d as P,t as w,g as p,p as N,e as j,x as J,m as D,F as b,h as x,q as E,n as L,y as T,j as F}from"./entry.9499b59b.js";import{_ as C}from"./_plugin-vue_export-helper.c27b6911.js";import{r as U}from"./swiper-bundle.min.dd0f8103.js";import{i as M}from"./item.bf748b78.js";const R=o=>(N("data-v-6a77aa1b"),o=o(),j(),o),O={class:"container"},G={class:"listBox"},K={class:"home"},Q=R(()=>e("span",null,">",-1)),W=R(()=>e("span",null,">",-1)),X={__name:"index",props:{productId:{type:String,default:""}},emits:{breadcrumbsHeight:{type:Number,default:0}},setup(o,{emit:n}){const c=g(""),h=g(),i=n,d=()=>{const t=h.value.clientHeight;i("breadcrumbsHeight",t)},a=$(),l=async t=>{try{const s=await fetch("https://janyu427.github.io/test/vueJson/productDetails.json");if(!s.ok)throw new Error("Network response was not ok");const m=(await s.json()).productDetails;for(let u=0;u<m.length;u++)t==m[u].productId&&(c.value=m[u].title)}catch(s){console.error("Error fetching or parsing data:",s)}};return I(()=>{k(()=>{const t=a.query.productId;t&&l(t)})}),A(()=>{d()}),(t,s)=>{const f=V;return r(),_("div",{class:"breadcrumbs",ref_key:"breadcrumbs",ref:h},[e("div",O,[e("ul",G,[e("li",K,[v(f,{title:"首頁",href:"/"},{default:y(()=>[P("首頁")]),_:1}),Q]),e("li",null,[v(f,{title:"作品展示",href:"/"},{default:y(()=>[P("作品展示")]),_:1}),W]),e("li",null,w(p(c)),1)])])],512)}}},Y=C(X,[["__scopeId","data-v-6a77aa1b"]]);const B=o=>(N("data-v-37246347"),o=o(),j(),o),Z={class:"photo_slide"},tt={class:"text_box"},et={class:"container"},st={class:"section_title"},ot={class:"text"},nt={class:"swiper photo_box container"},ct=["data-src"],at={class:"swiper-image"},rt=["src"],it=B(()=>e("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1)),_t={class:"swiper_btn_box"},dt=B(()=>e("div",{class:"swiper-button-prev"},null,-1)),lt={class:"swiper-counter"},ut={class:"count"},pt={class:"total"},ht=B(()=>e("div",{class:"swiper-button-next"},null,-1)),mt={__name:"carouselSection",setup(o){const n=g(""),c=g(""),h=g([]),i=g(1),d=$(),a=()=>{U();const t=document.querySelector("swiper-container");Object.assign(t,{slidesPerView:1.2,lazy:!0,loop:!1,centeredSlides:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},spaceBetween:30,on:{slideChange:()=>{i.value=t.swiper.realIndex+1}}}),t.initialize()},l=async t=>{try{const s=await fetch("https://janyu427.github.io/test/vueJson/productDetails.json");if(!s.ok)throw new Error("Network response was not ok");const m=(await s.json()).productDetails;for(let u=0;u<m.length;u++)m[u].productId===t&&(n.value=m[u].title,c.value=m[u].intro,h.value=m[u].carouselImgs)}catch(s){console.error("Error fetching or parsing data:",s)}};return I(()=>{a(),k(()=>{const t=d.query.productId;t&&l(t)})}),J(()=>{a()}),(t,s)=>{const f=D("swiper-slide"),m=D("swiper-container"),u=D("lightgallery");return r(),_("div",Z,[e("div",tt,[e("div",et,[e("h2",st,w(p(n)),1),e("p",ot,w(p(c)),1)])]),v(u,null,{default:y(()=>[e("div",nt,[v(m,{init:"false"},{default:y(()=>[(r(!0),_(b,null,x(p(h),S=>(r(),E(f,{class:"swiper-slide","data-src":S},{default:y(()=>[e("a",{"data-src":S},[e("div",at,[e("img",{class:"image",src:S,loading:"lazy"},null,8,rt),it])],8,ct)]),_:2},1032,["data-src"]))),256))]),_:1}),e("div",_t,[dt,e("div",lt,[e("span",ut,w(p(i)),1),e("span",pt,w(p(h).length),1)]),ht])])]),_:1})])}}},vt=C(mt,[["__scopeId","data-v-37246347"]]);const ft={class:"product-tabs"},gt={class:"container"},wt={class:"nav nav-tabs"},bt=["onClick"],yt={class:"tab-content"},xt={class:"products-description-image-wrap"},$t=["src"],It={class:"products-description-content-wrap"},kt={class:"products-description-content"},Ct={__name:"tabContent",setup(o){let n=g([]),c=g(0);const h=$(),i=async d=>{const a=await fetch("https://janyu427.github.io/test/vueJson/productDetails.json");if(!a.ok)throw new Error("Network response was not ok");const t=(await a.json()).productDetails;for(let s=0;s<t.length;s++)t[s].productId===d&&(n.value=t[s].detailContent)};return I(()=>{k(()=>{const d=h.query.productId;d&&i(d)})}),(d,a)=>(r(),_("div",ft,[e("div",gt,[e("ul",wt,[(r(!0),_(b,null,x(p(n),(l,t)=>(r(),_("li",{class:L(["list",{active:p(c)===t}]),key:t,onClick:s=>T(c)?c.value=t:c=t},w(l.title),11,bt))),128))]),e("div",yt,[(r(!0),_(b,null,x(p(n),(l,t)=>(r(),_(b,{key:t},[p(c)===t?(r(!0),_(b,{key:0},x(l.list,(s,f)=>(r(),_("div",{class:"products-description-list",key:f},[e("div",xt,[e("img",{class:"image",src:s.imgSrc},null,8,$t)]),e("div",It,[e("div",kt,w(s.text),1)])]))),128)):F("",!0)],64))),128))])])]))}},St=C(Ct,[["__scopeId","data-v-95f79666"]]);const Dt=o=>(N("data-v-754d7363"),o=o(),j(),o),Nt={class:"other_product"},jt={class:"container"},Bt=Dt(()=>e("h2",{class:"section_title center"},"其他作品",-1)),Pt={class:"product_list_box"},Et={__name:"otherProduct",setup(o){let n=g([]);const c=$(),h=async i=>{const l=(await(await fetch("https://janyu427.github.io/test/vueJson/product.json")).json()).product;n.value=[];for(let t=0;t<l.length;t++)n.value=n.value.concat(l[t].items.filter(s=>s.itemNumber!==i)),n.value.sort((s,f)=>s.itemNumber-f.itemNumber)};return I(()=>{k(()=>{const i=c.query.productId;i&&(h(i),window.scrollTo(0,0))})}),(i,d)=>(r(),_("div",Nt,[e("div",jt,[Bt,e("div",Pt,[(r(!0),_(b,null,x(p(n),a=>(r(),E(M,{itemBgSrc:a.bgSrc,itemName:a.name,productId:a.itemNumber,key:a.name},null,8,["itemBgSrc","itemName","productId"]))),128))])])]))}},Rt=C(Et,[["__scopeId","data-v-754d7363"]]),qt={class:"product_details"},zt={__name:"index",setup(o){return(n,c)=>(r(),_("div",qt,[v(vt),v(St),v(Rt)]))}},Ht=zt,Mt={__name:"productDetails",setup(o){const n=$();return(c,h)=>{const i=q,d=z,a=Y,l=Ht;return r(),_(b,null,[v(i),v(d,{currentRoutePage:("getCurrentRoute"in c?c.getCurrentRoute:p(H))(p(n))},null,8,["currentRoutePage"]),v(a),v(l)],64)}}};export{Mt as default};

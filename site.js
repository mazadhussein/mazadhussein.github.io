const MARKUP=String.raw`<header class="top"><div class="g">
  <a class="brand" href="#top"><img src="img/emblem.jpg" alt="شعار مزاد حسين"><span>مزاد <b>حسين</b></span></a>
  <nav class="nav" id="nav" aria-label="الأقسام"></nav>
  <button type="button" class="cart-btn" id="cartBtn">السلة<b id="cartN">0</b></button>
  <a class="pill-wa" href="https://wa.me/9647757685741" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z"/></svg>احجز واتساب</a>
</div></header>

<section class="hero" id="top"><div class="g">
  <div>
    <div class="eyebrow">عقيق يماني · نقش يدوي · صياغة بحرينية</div>
    <h1>خاتمٌ يُحكى<em>لا يُلبس فقط</em></h1>
    <p class="lede">كل قطعة عندنا حجر خام من اليمن، منقوش بأنامل خطّاطين معروفين، ومصاغ بالفضة على إيد صاغة البحرين. اختار فئتك وسعرك، والحجز بكلمة على الواتساب.</p>
    <div class="cta">
      <a class="pill-wa" href="#shop">تصفّح الخواتم</a>
      <a class="ghost" href="https://wa.me/9647757685741" target="_blank" rel="noopener">اسأل عن قطعة</a>
    </div>
    <div class="stats" id="stats"></div>
  </div>
  <figure class="showcase" style="margin:0">
    <div class="frame"><img id="heroImg" src="photo/232507535.jpg" alt="خاتم عقيق يماني منقوش"></div>
    <figcaption class="tag"><small id="heroTier">وسط</small><p id="heroName">لونين بحجر واحد</p></figcaption>
  </figure>
</div></section>

<div class="marq" aria-hidden="true"><div class="track" id="marq"></div></div>

<section class="filters" id="shop"><div class="g">
  <h2>قائمة الأسعار</h2>
  <p class="sub">الأسعار بالألف دينار عراقي. اسحب المؤشر وحدد من وإلى.</p>
  <div class="fbox">
    <div style="display:grid;gap:12px">
      <div><label class="h">الأحجام</label><div class="chips" id="grades" role="group" aria-label="الأحجام"></div></div>
      <div><label class="h">الأسعار</label><div class="chips" id="tiers" role="group" aria-label="فئات الأسعار"></div></div>
    </div>
    <div><label class="h" for="lo">السعر</label>
      <div class="dual"><div class="rail"></div><div class="fill" id="fill"></div>
        <input id="lo" type="range" min="100" max="650" step="5" value="100" aria-label="السعر من">
        <input id="hi" type="range" min="100" max="650" step="5" value="650" aria-label="السعر إلى"></div>
      <div class="prange"><span>من <b id="loV">100</b></span><span>إلى <b id="hiV">650</b> ألف</span></div>
    </div>
    <div><label class="h" for="q">بحث</label><input id="q" type="search" placeholder="كرزي، الكوثر، رقم الخاتم…"></div>
  </div>
  <p class="count" id="count"></p>
</div></section>

<main id="list"></main>

<dialog id="cart"><button class="x" type="button" id="cartX" aria-label="إغلاق">×</button><div class="cart-box" id="cartBox"></div></dialog>

<dialog id="dlg"><button class="x" type="button" id="x" aria-label="إغلاق">×</button><div id="sheet"></div></dialog>

<footer class="foot"><div class="g">
  <div><img class="logo-foot" src="img/logo.jpg" alt="شعار مزاد حسين الصائغ"><div class="big">مزاد حسين للخواتم البحريني</div><p>عقيق يماني خام، خطوط مبدعين، وصياغة فضة بحرينية. نرسل لكل محافظات العراق.</p></div>
  <div><h5>للحجز والسعر</h5><div class="num">0775 768 5741</div><p>واتساب أو خاص بالصفحة</p></div>
  <div><h5>ملاحظة</h5><p>الأسعار والتوفر قابلة للتغيير. تأكد من القطعة على الواتساب قبل التحويل.</p></div>
</div></footer>

<div class="adm-bar" id="admBar" hidden><b>وضع الآدمن</b><button type="button" class="adm-btn" id="admLedger" hidden>المبيعات</button><button type="button" class="adm-btn" id="admSold">المبيوع</button><button type="button" class="adm-btn main" id="admNew">＋ خاتم جديد</button></div>
<dialog id="adm"><button class="x" type="button" id="admX" aria-label="إغلاق">×</button><form id="admF" novalidate>
  <h3 id="admT">خاتم جديد</h3>
  <label>اسم الخاتم<input name="title" maxlength="80"></label>
  <label>التفنيد<textarea name="q" rows="3"></textarea></label>
  <label>النقش أو الإمضاء<input name="nq"></label>
  <label>الصياغة<input name="sg"></label>
  <div class="two"><label>القياس<input name="size" type="number" inputmode="decimal" step="0.5" min="1"></label><label>السعر بالألف<input name="price" type="number" inputmode="numeric" min="0"></label></div>
  <label>أو السعر بالدولار<input name="usd" type="number" inputmode="numeric" min="0"></label>
  <div class="two"><label>الحجم<select name="grade"><option value="">بعد ما محدد</option><option value="nawa">نواعم</option><option value="wasat">وسط</option><option value="khashin">خشن</option></select></label><label>سوبر VIP<select name="sup"><option value="">لا، حسب السعر</option><option value="1">إي، سوبر VIP</option></select></label></div>
  <p class="hint">فئة السعر تنحسب وحدها: 300 ألف وفوق VIP، والأقل وسط. إذا السعر فارغ يطلع «السعر عند الطلب».</p>
  <label>صورة الخاتم<input name="photo" type="file" accept="image/jpeg,image/png,image/webp"></label>
  <label>فيديو الخاتم، MP4 وأقل من 20 ميغا<input name="video" type="file" accept="video/mp4,video/webm"></label>
  <p class="cur" id="admCur"></p>
  <p class="msg" id="admMsg" role="status"></p>
  <div class="acts"><button type="submit" class="adm-btn main" id="admSave">حفظ ونشر</button><button type="button" class="adm-btn danger" id="admDel">حذف نهائي</button></div>
</form></dialog>
<dialog id="sale"><button class="x" type="button" id="saleX" aria-label="إغلاق">×</button><form id="saleF" novalidate>
  <h3 id="saleT"></h3>
  <label>اسم الزبون<input name="name" maxlength="80" autocomplete="off"></label>
  <label>رقم واتساب الزبون<input name="phone" type="tel" inputmode="tel" maxlength="30" autocomplete="off" dir="ltr" placeholder="07XX XXX XXXX"></label>
  <label>السعر<input name="price" maxlength="40" autocomplete="off"></label>
  <p class="hint">هذي البيانات تنحفظ بقائمة خاصة بيك. بعد الحفظ تطلع لك رسالة الضمان حتى ترسلها للزبون.</p>
  <p class="msg" id="saleMsg" role="status"></p>
  <div class="acts"><button type="submit" class="adm-btn main" id="saleSave">تم الشراء</button></div>
</form></dialog>
<dialog id="ledger"><button class="x" type="button" id="ledgerX" aria-label="إغلاق">×</button><div class="cart-box" id="ledgerBox"></div></dialog>
<dialog id="guar"><button class="x" type="button" id="guarX" aria-label="إغلاق">×</button><div class="cart-box" id="guarBox"></div></dialog>
<dialog id="login"><button class="x" type="button" id="loginX" aria-label="إغلاق">×</button><form id="loginF" novalidate>
  <h3>دخول الآدمن</h3>
  <label id="loginOwner">اسم الحساب على GitHub<input name="owner" autocomplete="off" dir="ltr" autocapitalize="off"></label>
  <label>مفتاح الدخول<input name="token" type="password" autocomplete="off" dir="ltr"></label>
  <p class="hint">المفتاح ينحفظ بهذا الموبايل بس. لا تعطيه لأحد.</p>
  <p class="msg" id="loginMsg" role="status"></p>
  <div class="acts"><button type="submit" class="adm-btn main" id="loginGo">دخول</button></div>
</form></dialog>`;
document.getElementById("app").innerHTML=MARKUP;
const TIERS=[
  {id:"super",name:"سوبر VIP",big:"سوبر",note:"قطع مختارة",metal:"var(--silver)"},
  {id:"vip",name:"VIP",big:"VIP",note:"من 300 ألف وفوق",metal:"var(--gold)"},
  {id:"wasat",name:"وسط",big:"وسط",note:"أقل من 300 ألف",metal:"var(--carnelian)"}
];
// The size list. Each ring gets its size from the admin form, not from its measured number.
const GRADES=[{id:"nawa",name:"نواعم"},{id:"wasat",name:"وسط"},{id:"khashin",name:"خشن"}];
const gradeName=r=>(GRADES.find(g=>g.id===r.grade)||{}).name;
const ST={karazi:"radial-gradient(circle at 35% 30%,#e0604f,#6e130c 72%)",karaz:"radial-gradient(circle at 35% 30%,#c23a2c,#3d0603 75%)",
  aqiq:"radial-gradient(circle at 35% 30%,#e07a52,#7d2410 75%)",yellow:"radial-gradient(circle at 35% 30%,#fbe28a,#b98a12 75%)",
  dur:"radial-gradient(circle at 35% 30%,#fff,#bfc4c8 75%)"};
// price = thousand IQD, null = on request. img = clear photo and video name. photoOnly = the channel has a photo but no video.
// The tier comes from the price, see tierOf below.
const R=JSON.parse(document.getElementById("catalog").textContent);
// سوبر VIP is chosen by hand. Otherwise 300 and up is VIP and the rest is وسط. A piece priced in dollars is VIP; a piece with no price yet waits in وسط.
const tierOf=r=>r.super?"super":r.label||r.price>=300?"vip":"wasat";
R.forEach(r=>{r.t=tierOf(r)});
const byId=id=>R.find(r=>r.id===id);
const live=()=>R.filter(r=>!r.sold);
// A sold ring stays on show for 24 hours, marked sold, then leaves the customers' list. Its link and barcode keep working.
const SOLD_SHOW_MS=24*60*60*1000;
const onShow=r=>!r.sold||(r.soldAt&&Date.now()-r.soldAt<SOLD_SHOW_MS);
const photoUrl=r=>r.photo||(r.img?`photo/${r.img}.jpg`:"");
const videoUrl=r=>r.video||(r.img&&!r.photoOnly?`video/${r.img}.mp4`:"");
const rank=r=>r.label?9999:(r.price||0);
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const T=id=>TIERS.find(t=>t.id===id);
// WhatsApp links can only carry text, so the message holds the ring's full details, its number and a link that opens its photo and video.
const IS_PAGES=location.hostname.endsWith(".github.io");
const BASE=IS_PAGES?location.origin+"/":new URL(".",location.href).href;
const ringNo=r=>r.id+1;
const ringLink=r=>BASE+"r/"+ringNo(r)+".html";
const priceText=ringPriceText;
function ringText(r,short){
  const rows=[["رقم الخاتم",ringNo(r)],["الاسم",r.title],["السعر",priceText(r)],["القياس",r.size]];
  if(!short)rows.splice(2,0,["التفنيد",r.q],["النقش",r.nq],["الصياغة",r.sg],["الفئة",T(r.t).name],["الحجم",gradeName(r)]);
  rows.push(["الصورة والفيديو والباركود",ringLink(r)]);
  return rows.filter(x=>x[1]).map(([k,v])=>k+": "+v).join("\n");
}
const WA_TEXT="https://wa.me/9647757685741?text=";
const wa=r=>WA_TEXT+encodeURIComponent("السلام عليكم، أريد أحجز هذا الخاتم:\n"+ringText(r));
const photo=(r,alt)=>photoUrl(r)?`<img src="${esc(photoUrl(r))}" alt="${esc(alt||r.title)}" loading="lazy">`:`<div class="seal"><i style="--st:${ST[r.s]}"></i></div>`;
const gallery=r=>videoUrl(r)?`<div class="gal" id="gal"><div class="track" id="track" dir="rtl">
    <div class="slide">${photo(r)}</div>
    <div class="slide"><video id="vid" controls playsinline preload="none" poster="${esc(photoUrl(r))}" aria-label="فيديو ${esc(r.title)}"><source src="${esc(videoUrl(r))}"></video></div>
  </div><span class="tip" id="tip">اسحب لليمين للفيديو →</span>
  <div class="tabs"><button type="button" id="tabP" aria-pressed="true">الصورة</button><button type="button" id="tabV" aria-pressed="false">▶ الفيديو</button></div></div>`:`<div class="ph">${photo(r)}</div>`;
function wireGallery(){
  const tr=$("track");if(!tr)return;
  const g=$("gal"),v=$("vid"),slides=tr.children;let onVideo=false;
  const show=i=>tr.scrollTo({left:slides[i].offsetLeft-tr.offsetLeft,behavior:"smooth"});
  const set=now=>{if(now===onVideo)return;onVideo=now;g.classList.toggle("on-video",now);
    $("tabP").setAttribute("aria-pressed",!now);$("tabV").setAttribute("aria-pressed",now);
    if(now){const tip=$("tip");if(tip)tip.remove();v.play().catch(()=>{v.muted=true;v.play().catch(()=>{})})}else v.pause()};
  // Whichever slide fills most of the frame is the current one, whichever way the browser counts right-to-left scrolling.
  tr.addEventListener("scroll",()=>set(Math.abs(tr.scrollLeft)>tr.clientWidth/2),{passive:true});
  $("tabP").onclick=()=>show(0);$("tabV").onclick=()=>show(1);
}
const priceHTML=r=>r.price!=null?`<span class="price">${r.price}<small>ألف</small></span>`:`<span class="ask">${r.label?esc(r.label):"السعر عند الطلب"}</span>`;

// stats + marquee
const priced=live().filter(r=>r.price!=null).map(r=>r.price);
$("stats").innerHTML=[[live().length,"قطعة متوفرة"],[TIERS.length,"فئات"],[Math.min(...priced),"يبدأ من (ألف)"]].map(([b,s])=>`<div><b>${b}</b><span>${s}</span></div>`).join("");
const names=["جواد يوسفي","مهدي شجاعي","سيد محمد أفضل","شهباز البحرين","ياسر البحرين","عارف البحرين","الأستاذ فيصل","حسين قاسمي","عليم 110"];
$("marq").innerHTML=[...names,...names].map(n=>`<span>${n}</span>`).join("");

// hero rotation through photographed rings
const heroes=live().filter(r=>videoUrl(r)&&photoUrl(r));let hi=0;
if(heroes[0]){$("heroImg").src=photoUrl(heroes[0]);$("heroName").textContent=heroes[0].title;$("heroTier").textContent=T(heroes[0].t).name}
if(heroes.length&&!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(()=>{
  hi=(hi+1)%heroes.length;const r=heroes[hi],im=$("heroImg");
  im.style.opacity=0;setTimeout(()=>{im.src=photoUrl(r);$("heroName").textContent=r.title;$("heroTier").textContent=T(r.t).name;im.style.opacity=1},500);
},4500);

// filters
let tier="all",grade="all";try{tier=localStorage.getItem("mh-tier")||"all"}catch(e){}
if(!T(tier))tier="all";
function chips(){const row=(list,now,key)=>[{id:"all",name:"الكل"},...list].map(t=>`<button type="button" class="chip" data-${key}="${t.id}" aria-pressed="${t.id===now}">${t.name}</button>`).join("");
  $("grades").innerHTML=row(GRADES,grade,"g");
  // Cheapest first in the list, while the sections on the page start from the most expensive.
  $("tiers").innerHTML=row([...TIERS].reverse(),tier,"t")}
function nav(){$("nav").innerHTML=TIERS.filter(t=>live().some(r=>r.t===t.id)).map(t=>`<a href="#t-${t.id}">${t.name}</a>`).join("")+`<a href="#shop">قائمة الأسعار</a>`}
$("tiers").onclick=e=>{const b=e.target.closest(".chip");if(!b)return;tier=b.dataset.t;try{localStorage.setItem("mh-tier",tier)}catch(e){}chips();render()};
$("grades").onclick=e=>{const b=e.target.closest(".chip");if(!b)return;grade=b.dataset.g;chips();render()};
function slider(){let lo=+$("lo").value,hi=+$("hi").value;if(lo>hi){[lo,hi]=[hi,lo]}
  $("loV").textContent=lo;$("hiV").textContent=hi;const span=650-100;
  $("fill").style.right=((lo-100)/span*100)+"%";$("fill").style.left=(100-(hi-100)/span*100)+"%";return[lo,hi]}

// cart: each ring is a single piece, so it is either in or out
let cart=[];try{cart=JSON.parse(localStorage.getItem("mh-cart"))||[]}catch(e){}
cart=cart.filter(id=>{const r=byId(id);return r&&!r.sold});
const inCart=id=>cart.includes(id);
const addLabel=id=>inCart(id)?"بالسلة ✓":"أضف للسلة";
const addBtn=r=>`<button type="button" class="add" data-add="${r.id}" aria-pressed="${inCart(r.id)}">${addLabel(r.id)}</button>`;
function toggle(id){cart=inCart(id)?cart.filter(x=>x!==id):[...cart,id];try{localStorage.setItem("mh-cart",JSON.stringify(cart))}catch(e){}syncCart()}
function syncCart(){
  $("cartN").textContent=cart.length;
  document.querySelectorAll("[data-add]").forEach(b=>{const id=+b.dataset.add;b.setAttribute("aria-pressed",inCart(id));b.textContent=addLabel(id)});
  const items=cart.map(byId).filter(Boolean);
  if(!items.length){$("cartBox").innerHTML=`<h3>السلة</h3><p style="color:var(--dim);margin:0">السلة فارغة. اختار الخواتم اللي تعجبك واضغط «أضف للسلة».</p>`;return}
  const sum=items.reduce((a,r)=>a+(r.price||0),0),unpriced=items.filter(r=>r.price==null).length;
  const order=short=>`السلام عليكم، أريد أحجز هذي الخواتم:\n\n${items.map(r=>ringText(r,short)).join("\n\n")}\n\nالمجموع: ${sum} ألف${unpriced?" + قطع سعرها عند الطلب":""}`;
  // Very long links can fail to open WhatsApp, so a big order drops to the short form of each ring.
  const msg=encodeURIComponent(order(false)).length>6000?order(true):order(false);
  $("cartBox").innerHTML=`<h3>السلة (${items.length})</h3>`+items.map(r=>`<div class="line"><div class="th">${photo(r)}</div><div>${esc(r.title)}</div>${priceHTML(r)}<button type="button" class="rm" data-rm="${r.id}" aria-label="حذف">×</button></div>`).join("")+
  `<div class="total"><span>المجموع</span><span>${sum} ألف د.ع</span></div>${unpriced?`<p style="margin:0;color:var(--dim);font-size:13px">المجموع بدون ${unpriced} قطعة سعرها عند الطلب.</p>`:""}
  <a class="pill-wa" style="justify-content:center" href="https://wa.me/9647757685741?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">أرسل الطلب على الواتساب</a>`;
}
$("cartBtn").onclick=()=>{syncCart();$("cart").showModal()};
$("cartX").onclick=()=>$("cart").close();
$("cartBox").addEventListener("click",e=>{const b=e.target.closest("[data-rm]");if(b)toggle(+b.dataset.rm)});
document.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b){e.stopPropagation();toggle(+b.dataset.add)}},true);

const latinDigits=s=>s.replace(/[٠-٩]/g,d=>"٠١٢٣٤٥٦٧٨٩".indexOf(d));
function card(r){const t=T(r.t);return `<article class="card${r.sold?" is-sold":""}" tabindex="0" data-id="${r.id}" style="--metal:${t.metal}">
  <span class="badge">${t.name}</span><div class="ph">${photo(r)}${r.sold?`<span class="sold-rib">تم البيع</span>`:""}${videoUrl(r)?`<span class="play">▶ فيديو</span>`:""}</div>
  <div class="in"><h4>${esc(r.title)}</h4><p class="by">${esc(["رقم "+ringNo(r),r.nq,r.sg].filter(Boolean).join(" · "))}</p>
  <div class="row">${priceHTML(r)}${r.sold?"":addBtn(r)}</div>${adminRow(r)}</div></article>`}

function render(){
  const [lo,hi]=slider(),q=$("q").value.trim(),full=lo===100&&hi===650;
  const ok=r=>(tier==="all"||r.t===tier)&&(full||(r.price!=null&&r.price>=lo&&r.price<=hi))&&(grade==="all"||r.grade===grade)&&(!q||String(ringNo(r))===latinDigits(q)||(r.title+(r.q||"")+(r.nq||"")+(r.sg||"")).includes(q));
  let n=0;
  const html=TIERS.map(t=>{const it=R.filter(r=>onShow(r)&&r.t===t.id&&ok(r)).sort((a,b)=>rank(b)-rank(a));n+=it.length;if(!it.length)return"";
    return `<section class="tier" id="t-${t.id}" style="--metal:${t.metal}"><div class="g">
      <div class="thead"><span class="big">${t.big}</span><h3>${t.name}</h3><p>${t.note} · ${it.length} قطعة</p></div>
      <div class="rail-x">${it.map(card).join("")}</div></div></section>`}).join("");
  const soldOnly=Admin.on&&Admin.showSold;document.body.classList.toggle("sold-only",soldOnly);
  $("list").innerHTML=soldOnly?soldSection():html||`<div class="g"><div class="empty">ماكو خاتم بهذي المواصفات. وسّع مدى السعر، أو راسلنا على الواتساب ونلكالك اللي تريده.</div></div>`;
  $("count").textContent=n+" قطعة مطابقة";
}
["lo","hi","q"].forEach(id=>$(id).addEventListener("input",render));

// detail sheet
$("list").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.classList.contains("card"))e.target.click()});
$("list").addEventListener("click",e=>{const c=e.target.closest(".card");if(c)openRing(byId(+c.dataset.id))});
// A link or barcode ending in #ring=13 opens that ring directly. A sold ring still opens, marked sold, so its barcode keeps working as a guarantee.
function openFromLink(){const m=location.hash.match(/ring=(\d+)/);if(!m||$("dlg").open)return;const r=byId(+m[1]-1);if(r)openRing(r)}
addEventListener("hashchange",openFromLink);
// The barcode library loads only when a ring is opened. The image can be saved from the phone like any photo.
let qrLib;
const loadQr=()=>qrLib||(qrLib=new Promise((ok,no)=>{const s=document.createElement("script");s.src="qrcode.js";s.onload=()=>ok(window.qrcode);s.onerror=no;document.head.append(s)}));
// With lines given, the picture becomes the guarantee card the customer keeps: a heading above the barcode and the details below it.
function qrCanvas(r,lines){const q=window.qrcode(0,"M");q.addData(ringLink(r));q.make();
  const n=q.getModuleCount(),cell=lines?10:8,quiet=lines?3:2,size=(n+quiet*2)*cell,top=lines?58:0,c=document.createElement("canvas"),g=c.getContext("2d");
  c.width=size;c.height=top+size+(lines?lines.length*36+12:0);g.fillStyle="#fff";g.fillRect(0,0,c.width,c.height);g.fillStyle="#000";
  for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(q.isDark(y,x))g.fillRect((x+quiet)*cell,top+(y+quiet)*cell,cell,cell);
  if(lines){g.direction="rtl";g.textAlign="center";
    const line=(text,px,y,weight)=>{let s=px;do{g.font=`${weight} ${s}px "IBM Plex Sans Arabic",Tahoma,sans-serif`;s-=2}while(g.measureText(text).width>size-24&&s>12);g.fillText(text,size/2,y)};
    line("باركود الضمان",32,42,700);lines.forEach((t,i)=>line(t,i?20:24,top+size+22+i*36,i?400:600))}
  return c}
async function drawQr(r){
  try{await loadQr();const im=$("qrImg");if(!im||im.dataset.ring!==String(ringNo(r)))return;
    im.src=qrCanvas(r).toDataURL("image/png");
  }catch(e){const w=$("qrWrap");if(w)w.hidden=true}
}
let openId=null;
const saleBar=r=>Admin.ledger&&!r.sold?`<div class="adm-sale"><b>هل تم الشراء؟</b><button type="button" class="adm-btn main" data-sale="${r.id}" data-kind="sold">تم الشراء</button><button type="button" class="adm-btn" data-sale="${r.id}" data-kind="reserved">حجز</button></div>`:"";
function openRing(r){const t=T(r.t);openId=r.id;
  $("sheet").innerHTML=`${saleBar(r)}<div class="sheet" style="--metal:${t.metal}">${gallery(r)}<div class="tx">
   <span class="badge" style="position:static;align-self:flex-start;font:700 12px var(--kufi);padding:4px 10px;border-radius:999px;border:1px solid ${t.metal};color:${t.metal}">${t.name}</span>
   <h3>${esc(r.title)}</h3><p class="q">${esc(r.q||"")}</p>
   <div class="specs"><dl>${[["رقم الخاتم",ringNo(r)],["النقش",r.nq],["الصياغة",r.sg],["الحجم",gradeName(r)],["القياس",r.size],["الحجر","عقيق يماني خام"]].filter(x=>x[1]).map(([k,v])=>`<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
   <figure class="qr" id="qrWrap"><img id="qrImg" data-ring="${ringNo(r)}" alt="باركود الخاتم رقم ${ringNo(r)}" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="><figcaption>باركود الخاتم</figcaption></figure></div>
   ${r.sold?`<p class="sold-tag">تم البيع</p>`:`<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">${priceHTML(r)}
   <span style="display:flex;gap:8px;flex-wrap:wrap">${addBtn(r)}<a class="pill-wa" href="${wa(r)}" target="_blank" rel="noopener">احجز هذا الخاتم</a></span></div>`}
   <p style="margin:0;color:var(--dim);font-size:13px">أو راسلنا على <span class="num" style="font-size:15px">0775 768 5741</span></p></div></div>`;
  if(!$("dlg").open)$("dlg").showModal();wireGallery();drawQr(r)}
$("x").onclick=()=>$("dlg").close();
$("dlg").addEventListener("close",()=>{if($("dlg").open)return;openId=null;const v=$("vid");if(v)v.pause();$("sheet").innerHTML=""});
$("dlg").addEventListener("click",e=>{if(e.target===$("dlg"))$("dlg").close()});

// admin mode. Only someone holding a GitHub key for this site's repositories can save; everyone else never sees these controls.
function adminRow(r){if(!Admin.on)return"";const second=!r.sold&&Admin.ledger?`<button type="button" class="adm-btn" data-sale="${r.id}" data-kind="sold">تم الشراء</button>`:`<button type="button" class="adm-btn" data-sold="${r.id}">${r.sold?"رجّعه للموقع":"مبيوع"}</button>`;return `<div class="adm-row"><button type="button" class="adm-btn" data-edit="${r.id}">تعديل</button>${second}</div>`}
function soldSection(){if(!Admin.on||!Admin.showSold)return"";const it=R.filter(r=>r.sold);
  return `<section class="tier" id="t-sold" style="--metal:var(--dim)"><div class="g"><div class="thead"><span class="big">مبيع</span><h3>المبيوع</h3><p>يبين للزبون 24 ساعة بعد البيع وبعدها يختفي · ${it.length} قطعة</p></div><div class="rail-x">${it.map(card).join("")||"<p>ماكو خواتم مبيوعة.</p>"}</div></div></section>`}

// GitHub access. The key stays on this device only and is sent only to GitHub.
const KEY_TOKEN="mh-gh-token",KEY_OWNER="mh-gh-owner";
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}},del:k=>{try{localStorage.removeItem(k)}catch(e){}}};
const GH={owner:IS_PAGES?location.hostname.split(".")[0]:"",token:""};
const pubRepo=()=>GH.owner+"/"+GH.owner+".github.io";
const privRepo=()=>GH.owner+"/mazad-private";
async function api(path,opts={}){
  const res=await fetch("https://api.github.com"+path,{...opts,cache:"no-store",headers:{Authorization:"Bearer "+GH.token,Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28",...(opts.body?{"Content-Type":"application/json"}:{})}});
  if(!res.ok){const e=new Error("github "+res.status);e.status=res.status;throw e}
  return res.status===204?null:res.json()}
const b64=s=>{const b=new TextEncoder().encode(s);let t="";for(let i=0;i<b.length;i+=8192)t+=String.fromCharCode(...b.subarray(i,i+8192));return btoa(t)};
const unb64=s=>new TextDecoder().decode(Uint8Array.from(atob(s.replace(/\n/g,"")),c=>c.charCodeAt(0)));
const adminErr=e=>({401:"مفتاح الدخول غلط أو انتهى. سجل دخول مرة ثانية.",403:"مفتاح الدخول ما عنده صلاحية كافية، أو حفظت هواي بوقت قصير. انتظر دقيقة وجرب.",404:"مفتاح الدخول ما يوصل لمخازن الموقع.",409:"صار حفظ ثاني بنفس الوقت. جرب مرة ثانية."}[e&&e.status]||"ما انحفظ. تأكد من النت وجرب مرة ثانية.");
function toast(text,keep){let t=$("admToast");if(!t){t=document.createElement("div");t.id="admToast";t.className="adm-toast";t.setAttribute("role","status")}(document.querySelector("dialog[open]")||document.body).append(t);t.textContent=text;clearTimeout(t._h);if(!keep)t._h=setTimeout(()=>t.remove(),5000)}

// One commit holds the catalogue page, every ring's page and any new files together, so they can't get out of step.
async function commitOnce(message,entries){const repo=pubRepo(),head=(await api(`/repos/${repo}/git/ref/heads/main`)).object.sha,base=(await api(`/repos/${repo}/git/commits/${head}`)).tree.sha;
  const tree=await api(`/repos/${repo}/git/trees`,{method:"POST",body:JSON.stringify({base_tree:base,tree:entries.map(e=>({path:e.path,mode:"100644",type:"blob",...(e.sha?{sha:e.sha}:{content:e.content})}))})});
  const c=await api(`/repos/${repo}/git/commits`,{method:"POST",body:JSON.stringify({message,tree:tree.sha,parents:[head]})});
  await api(`/repos/${repo}/git/refs/heads/main`,{method:"PATCH",body:JSON.stringify({sha:c.sha})})}
async function commit(message,entries){try{await commitOnce(message,entries)}catch(e){if(e.status!==422&&e.status!==409)throw e;await commitOnce(message,entries)}}
const blobB64=b=>new Promise((ok,no)=>{const f=new FileReader();f.onload=()=>ok(String(f.result).split(",")[1]);f.onerror=no;f.readAsDataURL(b)});
async function uploadFile(blob,path){const r=await api(`/repos/${pubRepo()}/git/blobs`,{method:"POST",body:JSON.stringify({content:await blobB64(blob),encoding:"base64"})});return {path,sha:r.sha}}
const catalogRows=()=>R.map(({t,...r})=>r);
function siteEntries(){const base=`https://${GH.owner}.github.io/`;
  return [{path:"index.html",content:pageHtml(catalogRows())},...R.map(r=>({path:"r/"+ringNo(r)+".html",content:ringPage(r,base)}))]}
const restore=snapshot=>{const now=JSON.parse(snapshot);R.length=0;now.forEach(r=>{r.t=tierOf(r);R.push(r)})};
function refreshAdmin(){$("admSold").textContent=Admin.showSold?"كل الخواتم":"المبيوع ("+R.filter(r=>r.sold).length+")";nav();render()}
async function saveCatalog(snapshot,say,extra=[]){
  try{await commit("تحديث الخواتم",[...siteEntries(),...extra]);refreshAdmin();return true}
  catch(e){restore(snapshot);refreshAdmin();say(adminErr(e));return false}
}
const SAVED="انحفظ. الزبائن يشوفون التغيير خلال دقيقة أو دقيقتين.";

// Photos are made lighter on the phone before upload, which also keeps WhatsApp's preview of the ring working.
function lighter(file){return new Promise(ok=>{const img=new Image(),url=URL.createObjectURL(file);
  img.onload=()=>{const s=Math.min(1,1000/Math.max(img.naturalWidth,img.naturalHeight)),c=document.createElement("canvas");c.width=Math.round(img.naturalWidth*s);c.height=Math.round(img.naturalHeight*s);c.getContext("2d").drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);c.toBlob(b=>ok(b||file),"image/jpeg",.82)};
  img.onerror=()=>{URL.revokeObjectURL(url);ok(file)};img.src=url})}
// With no photo chosen, a frame near the end of the video is used, where the ring is usually worn and fully visible.
function frameOf(file){return new Promise((ok,no)=>{const v=document.createElement("video"),url=URL.createObjectURL(file);v.muted=true;v.playsInline=true;v.preload="auto";
  v.onloadedmetadata=()=>{v.currentTime=v.duration*.8};
  v.onseeked=()=>{const s=Math.min(1,1000/Math.max(v.videoWidth,v.videoHeight)),c=document.createElement("canvas");c.width=Math.round(v.videoWidth*s);c.height=Math.round(v.videoHeight*s);c.getContext("2d").drawImage(v,0,0,c.width,c.height);URL.revokeObjectURL(url);c.toBlob(b=>b?ok(b):no(),"image/jpeg",.82)};
  v.onerror=()=>{URL.revokeObjectURL(url);no()};v.src=url})}
function openForm(r){const f=$("admF"),el=f.elements;f.reset();Admin.editing=r?r.id:null;
  $("admT").textContent=r?"تعديل: "+r.title:"خاتم جديد";
  el.title.value=r?r.title:"";el.q.value=r&&r.q||"";el.nq.value=r&&r.nq||"";el.sg.value=r&&r.sg||"";el.size.value=r&&r.size||"";el.price.value=r&&r.price!=null?r.price:"";el.usd.value=r&&r.label?parseInt(r.label):"";el.grade.value=r&&r.grade||"";el.sup.value=r&&r.super?"1":"";
  $("admCur").textContent=r?(photoUrl(r)?"عنده صورة":"بلا صورة")+" · "+(videoUrl(r)?"عنده فيديو":"بلا فيديو")+". اختار ملف بس إذا تريد تبدله.":"";
  $("admMsg").textContent="";$("admDel").hidden=!r;$("admDel").textContent="حذف نهائي";$("admDel").dataset.sure="";$("admDel").disabled=false;$("admSave").disabled=false;
  $("adm").showModal()}
async function submitForm(e){e.preventDefault();const el=$("admF").elements,say=t=>{$("admMsg").textContent=t},btn=$("admSave");
  const title=el.title.value.trim();if(!title){say("اكتب اسم الخاتم.");return}
  const photoFile=el.photo.files[0],videoFile=el.video.files[0],old=Admin.editing!=null?byId(Admin.editing):null;
  const limit=20*1024*1024;if((videoFile&&videoFile.size>limit)||(photoFile&&photoFile.size>limit)){say("الملف أكبر من 20 ميغا. قص الفيديو أو قلل جودته.");return}
  if(videoFile&&videoFile.type!=="video/mp4"){say("الفيديو لازم يكون MP4.");return}
  if(!photoFile&&!videoFile&&!(old&&photoUrl(old))){say("اختار صورة أو فيديو للخاتم.");return}
  btn.disabled=true;const snapshot=JSON.stringify(catalogRows()),stamp=Date.now(),extra=[],up={};
  try{
    if(videoFile){say("دا أرفع الفيديو، لا تسد الصفحة…");const f=await uploadFile(videoFile,`video/u${stamp}.mp4`);extra.push(f);up.video=f.path}
    let pic=null;
    if(photoFile){say("دا أرفع الصورة…");pic=await lighter(photoFile)}
    else if(videoFile&&!(old&&photoUrl(old))){say("دا آخذ صورة من الفيديو…");try{pic=await frameOf(videoFile)}catch(x){throw {msg:"ما كدرت آخذ صورة من الفيديو، اختار صورة بنفسك."}}}
    if(pic){const f=await uploadFile(pic,`photo/u${stamp}.jpg`);extra.push(f);up.photo=f.path}
    const r=old||{id:R.reduce((m,x)=>Math.max(m,x.id),-1)+1};
    Object.assign(r,up,{title});
    const set=(k,v)=>{if(v===""||v==null)delete r[k];else r[k]=v};
    set("q",el.q.value.trim());set("nq",el.nq.value.trim());set("sg",el.sg.value.trim());set("size",el.size.value?+el.size.value:"");set("grade",el.grade.value);set("super",el.sup.value?true:"");
    r.price=el.price.value===""?null:+el.price.value;set("label",el.usd.value?el.usd.value+" دولار":"");
    if(r.video)delete r.photoOnly;
    r.t=tierOf(r);if(!old)R.push(r);
    say("دا أحفظ…");
    if(await saveCatalog(snapshot,say,extra)){$("adm").close();toast(SAVED)}else btn.disabled=false;
  }catch(x){btn.disabled=false;say(x&&x.msg||adminErr(x))}
}
const Admin={on:false,showSold:false,editing:null,ledger:false,sales:[],sale:null,guar:null};

// The private list of sales and reservations lives in a separate private repository. The public site holds no buyer details.
let salesSha=null;
async function loadSales(){try{const f=await api(`/repos/${privRepo()}/contents/sales.json`);salesSha=f.sha;Admin.sales=JSON.parse(unb64(f.content))}catch(e){if(e.status!==404)throw e;salesSha=null;Admin.sales=[]}syncSales()}
async function writeSales(change,message){const put=async()=>{const next=change(Admin.sales);
    const res=await api(`/repos/${privRepo()}/contents/sales.json`,{method:"PUT",body:JSON.stringify({message,content:b64(JSON.stringify(next,null,1)),...(salesSha?{sha:salesSha}:{})})});
    salesSha=res.content.sha;Admin.sales=next;syncSales()};
  try{await put()}catch(e){if(e.status!==409)throw e;await loadSales();await put()}}
function openSale(r,kind,doc){if(!r)return;const el=$("saleF").elements,old=doc&&Admin.sales.find(s=>s.id===doc);
  Admin.sale={r,kind,doc:doc||null};$("saleF").reset();
  $("saleT").textContent=(kind==="sold"?"تم الشراء: ":"حجز: ")+"رقم "+ringNo(r)+" · "+r.title;
  el.name.value=old&&old.name||"";el.phone.value=old&&old.phone||"";el.price.value=old&&old.price||priceText(r);
  $("saleSave").textContent=kind==="sold"?"تم الشراء":"سجّل الحجز";$("saleSave").disabled=false;$("saleMsg").textContent="";
  $("sale").showModal()}
// A local Iraqi number (07...) becomes the international form a WhatsApp link needs.
const waNumber=p=>{let d=latinDigits(String(p||"")).replace(/\D/g,"").replace(/^00/,"");if(d.startsWith("0"))d="964"+d.slice(1);return d.length>=10?d:""};
const dateText=at=>new Date(at).toLocaleDateString("en-GB");
const guarLines=s=>["خاتم رقم "+s.no+" · "+s.title,s.name&&"الزبون: "+s.name,(s.kind==="sold"?"تاريخ الشراء: ":"تاريخ الحجز: ")+dateText(s.at),"مزاد حسين للخواتم"].filter(Boolean);
const guarText=s=>[`السلام عليكم${s.name?" "+s.name:""}،`,"هذا باركود الضمان لخاتمك من مزاد حسين للخواتم:","رقم الخاتم: "+s.no,"الاسم: "+s.title,s.price&&"السعر: "+s.price,(s.kind==="sold"?"تاريخ الشراء: ":"تاريخ الحجز: ")+dateText(s.at),"رابط الضمان: "+BASE+"r/"+s.no+".html","احتفظ بهذي الرسالة."].filter(Boolean).join("\n");
// A free WhatsApp link fills in the text and the owner presses send. The picture goes through the phone's share list, once the customer's chat is open.
async function openGuar(s){const box=$("guarBox"),r=byId(s.ringId)||{id:s.no-1,title:s.title};Admin.guar=null;
  try{await loadQr();const c=qrCanvas(r,guarLines(s));Admin.guar={s,canvas:c};
    const num=waNumber(s.phone);
    box.innerHTML=`<h3>باركود الضمان</h3><img class="guar-card" src="${c.toDataURL("image/png")}" alt="باركود الضمان للخاتم رقم ${esc(s.no)}">
    ${num?`<a class="pill-wa" href="https://wa.me/${num}?text=${encodeURIComponent(guarText(s))}" target="_blank" rel="noopener">1. افتح محادثة الزبون وأرسل الرسالة</a>`:`<p style="margin:0;color:var(--carnelian)">رقم الزبون ما مكتوب صح. عدّله من قائمة المبيعات.</p>`}
    <button type="button" class="pill-wa" id="guarShare">2. أرسل صورة الباركود</button>
    <p class="led-note" id="guarNote">بالخطوة الثانية اختار الواتساب وبعدها محادثة الزبون.</p>`;
    $("guarShare").onclick=shareGuar;
  }catch(x){box.innerHTML=`<h3>باركود الضمان</h3><p style="margin:0">ما كدرت أجهز الباركود. تأكد من النت وجرب من قائمة المبيعات.</p>`}
  if(!$("guar").open)$("guar").showModal()}
async function shareGuar(){const G=Admin.guar,note=$("guarNote");if(!G)return;const hold="موبايلك ما سمح بالإرسال المباشر. اضغط مطول على الصورة فوق واحفظها، وبعدها أرسلها بمحادثة الزبون.";
  const bin=atob(G.canvas.toDataURL("image/png").split(",")[1]),a=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);
  const files=[new File([a],"guarantee-ring-"+G.s.no+".png",{type:"image/png"})];
  if(!navigator.canShare||!navigator.canShare({files})){note.textContent=hold;return}
  try{await navigator.share({files})}catch(x){if(!x||x.name!=="AbortError")note.textContent=hold}}
async function submitSale(e){e.preventDefault();const S=Admin.sale,el=$("saleF").elements,btn=$("saleSave"),say=t=>{$("saleMsg").textContent=t};
  const name=el.name.value.trim(),phone=el.phone.value.trim();if(!waNumber(phone)){say("اكتب رقم واتساب الزبون كامل.");return}
  btn.disabled=true;say("دا أحفظ…");
  const old=S.doc&&Admin.sales.find(s=>s.id===S.doc),id=S.doc||"s"+Date.now();
  const body={id,ringId:S.r.id,no:ringNo(S.r),title:S.r.title,kind:S.kind,name,phone,price:el.price.value.trim(),at:old&&old.kind===S.kind?old.at:Date.now()};
  try{await writeSales(list=>[...list.filter(s=>s.id!==id),body],(S.kind==="sold"?"بيع":"حجز")+" خاتم "+body.no);S.doc=id}
  catch(x){say(adminErr(x));btn.disabled=false;return}
  if(S.kind==="sold"&&!S.r.sold){const snapshot=JSON.stringify(catalogRows());S.r.sold=true;S.r.soldAt=Date.now();say("انحفظ البيع، دا أعلّم الخاتم «تم البيع»…");
    if(!await saveCatalog(snapshot,say)){btn.disabled=false;return}}
  $("sale").close();if($("dlg").open)openRing(S.r);openGuar(body)}
const kindName=k=>k==="sold"?"تم البيع":"حجز";
function renderLedger(){if(!$("ledger").open)return;const it=[...Admin.sales].sort((a,b)=>b.at-a.at);
  $("ledgerBox").innerHTML=`<h3>المبيعات والحجوزات (${it.length})</h3><p class="led-note">هذي القائمة تشوفها إنت بس.</p>`+(it.length?it.map(s=>{const r=byId(s.ringId),can=s.kind!=="sold"&&r&&!r.sold;
    return `<div class="led"><div class="led-top"><b>رقم ${esc(s.no)} · ${esc(s.title)}</b><span class="led-kind" data-k="${s.kind==="sold"?"sold":"res"}">${kindName(s.kind)}</span></div>
    <dl><dt>الزبون</dt><dd>${esc(s.name||"غير مكتوب")}</dd><dt>الرقم</dt><dd dir="ltr" style="text-align:right">${esc(s.phone||"غير مكتوب")}</dd><dt>السعر</dt><dd>${esc(s.price||"غير مكتوب")}</dd><dt>التاريخ</dt><dd dir="ltr" style="text-align:right">${new Date(s.at).toLocaleString("en-GB",{dateStyle:"short",timeStyle:"short"})}</dd></dl>
    <div class="adm-row"><button type="button" class="adm-btn main" data-guar="${esc(s.id)}">أرسل الضمان</button>${can?`<button type="button" class="adm-btn" data-sale="${s.ringId}" data-kind="sold" data-doc="${esc(s.id)}">تم الشراء</button>`:""}${r?`<button type="button" class="adm-btn" data-sale="${s.ringId}" data-kind="${esc(s.kind)}" data-doc="${esc(s.id)}">تعديل</button>`:""}<button type="button" class="adm-btn danger" data-del="${esc(s.id)}">حذف</button></div></div>`}).join(""):`<p style="margin:0;color:var(--dim)">بعد ما مسجل بيع أو حجز.</p>`)+`<button type="button" class="adm-btn" id="admOut">خروج من الآدمن بهذا الموبايل</button>`;
  $("admOut").onclick=()=>{store.del(KEY_TOKEN);store.del(KEY_OWNER);location.href=location.pathname}}
function syncSales(){$("admLedger").textContent="المبيعات ("+Admin.sales.length+")";renderLedger()}
document.addEventListener("click",async e=>{
  const sa=e.target.closest("[data-sale]");if(sa){e.stopPropagation();openSale(byId(+sa.dataset.sale),sa.dataset.kind,sa.dataset.doc);return}
  const ed=e.target.closest("[data-edit]"),so=e.target.closest("[data-sold]");if(!ed&&!so)return;e.stopPropagation();
  if(ed){openForm(byId(+ed.dataset.edit));return}
  const r=byId(+so.dataset.sold),snapshot=JSON.stringify(catalogRows());
  so.disabled=true;if(r.sold){delete r.sold;delete r.soldAt}else{r.sold=true;r.soldAt=Date.now()}toast("دا أحفظ…",true);
  if(await saveCatalog(snapshot,t=>toast(t,true)))toast(SAVED);else so.disabled=false;
},true);

// The page visitors load can be a minute behind, so the admin always starts from the newest saved catalogue.
async function loadLive(){const f=await api(`/repos/${pubRepo()}/contents/index.html`),m=unb64(f.content).match(/<script type="application\/json" id="catalog">([\s\S]*?)<\/script>/);
  if(!m)throw {status:0};const rows=JSON.parse(m[1]);R.length=0;rows.forEach(r=>{r.t=tierOf(r);R.push(r)})}
async function enterAdmin(){
  const repo=await api(`/repos/${pubRepo()}`);if(!repo.permissions||!repo.permissions.push)throw {status:403};
  await loadLive();
  Admin.on=true;document.body.classList.add("is-admin");$("admBar").hidden=false;
  $("admNew").onclick=()=>openForm(null);
  $("admSold").onclick=()=>{Admin.showSold=!Admin.showSold;refreshAdmin();scrollTo(0,0)};
  $("admX").onclick=()=>$("adm").close();
  $("admF").addEventListener("submit",submitForm);
  $("admDel").onclick=async()=>{const b=$("admDel");if(!b.dataset.sure){b.dataset.sure="1";b.textContent="متأكد؟ اضغط مرة ثانية";return}
    const snapshot=JSON.stringify(catalogRows()),i=R.findIndex(r=>r.id===Admin.editing);if(i<0)return;b.disabled=true;R.splice(i,1);
    if(await saveCatalog(snapshot,t=>{$("admMsg").textContent=t})){$("adm").close();toast(SAVED)}else b.disabled=false};
  $("ledgerX").onclick=()=>$("ledger").close();$("saleX").onclick=()=>$("sale").close();$("guarX").onclick=()=>$("guar").close();
  $("saleF").addEventListener("submit",submitSale);
  $("ledgerBox").addEventListener("click",async e=>{const g=e.target.closest("[data-guar]");if(g){const s=Admin.sales.find(x=>x.id===g.dataset.guar);if(s)openGuar(s);return}
    const b=e.target.closest("[data-del]");if(!b)return;
    if(!b.dataset.sure){b.dataset.sure="1";b.textContent="متأكد؟ اضغط مرة ثانية";return}
    b.disabled=true;try{await writeSales(list=>list.filter(s=>s.id!==b.dataset.del),"حذف سطر")}catch(x){b.disabled=false;toast(adminErr(x))}});
  try{await loadSales();Admin.ledger=true;$("admLedger").hidden=false;$("admLedger").onclick=()=>{$("ledger").showModal();renderLedger()}}
  catch(e){toast("ما كدرت أقرا قائمة المبيعات: "+adminErr(e))}
  refreshAdmin();
  // A ring opened from a link before admin mode was known gets its sale buttons now.
  if($("dlg").open&&openId!=null)openRing(byId(openId));
}
function showLogin(msg){const el=$("loginF").elements;$("loginOwner").hidden=IS_PAGES;$("loginMsg").textContent=msg||"";el.owner.value=GH.owner||store.get(KEY_OWNER)||"";$("login").showModal()}
async function submitLogin(e){e.preventDefault();const el=$("loginF").elements,say=t=>{$("loginMsg").textContent=t},btn=$("loginGo");
  const token=el.token.value.trim(),owner=IS_PAGES?GH.owner:el.owner.value.trim();
  if(!token||!owner){say("اكتب مفتاح الدخول.");return}
  GH.token=token;GH.owner=owner;btn.disabled=true;say("دا أتأكد…");
  try{await enterAdmin();store.set(KEY_TOKEN,token);store.set(KEY_OWNER,owner);el.token.value="";$("login").close();toast("دخلت على وضع الآدمن.")}
  catch(x){GH.token="";btn.disabled=false;say(adminErr(x))}}
async function startAdmin(){
  $("loginF").addEventListener("submit",submitLogin);$("loginX").onclick=()=>$("login").close();
  const token=store.get(KEY_TOKEN);
  if(!token){if(/[?&#]admin\b/.test(location.search+location.hash))showLogin();return}
  GH.token=token;GH.owner=GH.owner||store.get(KEY_OWNER)||"";
  try{await enterAdmin()}catch(e){if(e.status===401||e.status===403||e.status===404){store.del(KEY_TOKEN);showLogin(adminErr(e))}}
}

chips();nav();render();syncCart();openFromLink();startAdmin().then(openFromLink);

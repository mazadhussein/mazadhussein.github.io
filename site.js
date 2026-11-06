const MARKUP=String.raw`<header class="top"><div class="g">
  <a class="brand" href="#top"><img src="img/emblem.jpg" alt="شعار خواتم العقيق"><span>خواتم <b>العقيق</b></span></a>
  <nav class="nav" id="nav" aria-label="الأقسام"></nav>
  <button type="button" class="menu-btn" id="admMenu" aria-label="لوحة المبيعات" hidden>☰</button>
  <button type="button" class="cart-btn" id="cartBtn">السلة<b id="cartN">0</b></button>
  <a class="pill-wa" href="https://wa.me/9647757685741" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z"/></svg>احجز واتساب</a>
</div></header>

<section class="hero" id="top"><div class="g">
  <div>
    <div class="eyebrow">عقيق يماني · نقش يدوي · صياغة بحرينية</div>
    <h1>عقيقٌ يليق بك<em>ونقشٌ يدوم</em></h1>
    <p class="lede">اختار خاتمك، احجزه بالواتساب، ويوصلك ويا باركود ضمان.</p>
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
  <div><img class="logo-foot" src="img/logo.jpg" alt="شعار خواتم العقيق"><div class="big">خواتم العقيق</div><p>عقيق يماني خام، خطوط مبدعين، وصياغة فضة بحرينية. نرسل لكل محافظات العراق.</p></div>
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
  <p class="hint">300 ألف وفوق تطلع عليه علامة VIP وحدها. إذا السعر فارغ يطلع «السعر عند الطلب».</p>
  <label>صورة الخاتم<input name="photo" type="file" accept="image/jpeg,image/png,image/webp"></label>
  <label>فيديو الخاتم، MP4 وأقل من 20 ميغا<input name="video" type="file" accept="video/mp4,video/webm"></label>
  <p class="cur" id="admCur"></p>
  <p class="msg" id="admMsg" role="status"></p>
  <div class="acts"><button type="submit" class="adm-btn main" id="admSave">حفظ ونشر</button><button type="button" class="adm-btn danger" id="admDel">حذف نهائي</button></div>
</form></dialog>
<dialog id="sale"><button class="x" type="button" id="saleX" aria-label="إغلاق">×</button><form id="saleF" novalidate>
  <h3 id="saleT"></h3>
  <label>اسم الزبون<input name="name" maxlength="80" autocomplete="off"></label>
  <div class="ctry-wrap"><span class="ctry-label">رقم واتساب الزبون</span>
    <div class="ctry-row" dir="ltr"><button type="button" class="ctry-btn" id="ctryBtn" aria-expanded="false"></button><input name="phone" type="tel" inputmode="tel" maxlength="30" autocomplete="off" dir="ltr" placeholder="رقم الزبون" aria-label="رقم واتساب الزبون"></div>
    <div class="ctry-box" id="ctryBox" hidden><input id="ctrySearch" type="search" placeholder="ابحث عن دولة أو رمز…" aria-label="بحث عن دولة" autocomplete="off"><div class="ctry-list" id="ctryList"></div></div></div>
  <label>عنوان الزبون<input name="address" maxlength="160" autocomplete="off" placeholder="المحافظة، المنطقة"></label>
  <label id="salePriceOne">السعر<input name="price" maxlength="40" autocomplete="off"></label>
  <div class="sale-prices" id="salePrices" hidden></div>
  <p class="hint">هذي البيانات تنحفظ بقائمة خاصة بيك. بعد الحفظ تطلع لك رسالة الضمان حتى ترسلها للزبون.</p>
  <p class="msg" id="saleMsg" role="status"></p>
  <div class="acts"><button type="submit" class="adm-btn main" id="saleSave">تم الشراء</button></div>
</form></dialog>
<dialog id="ledger"><button class="x" type="button" id="ledgerX" aria-label="إغلاق">×</button><div class="cart-box" id="ledgerBox"></div></dialog>
<dialog id="guar"><button class="x" type="button" id="guarX" aria-label="إغلاق">×</button><div class="cart-box" id="guarBox"></div></dialog>
<dialog id="order"><button class="x" type="button" id="orderX" aria-label="إغلاق">×</button><div class="cart-box" id="orderBox"></div></dialog>
<dialog id="salesPanel"><button class="x" type="button" id="statsX" aria-label="إغلاق">×</button>
  <div class="st st-head"><h3>لوحة المبيعات</h3>
    <form class="st-rate" id="rateF" novalidate><label for="rateIn">سعر الصرف: كل 100 دولار تساوي</label>
      <div class="st-rate-row"><input id="rateIn" type="number" inputmode="numeric" min="50" max="500" step="0.5" dir="ltr"><span>ألف دينار</span><button type="submit" class="adm-btn main" id="rateSave">حفظ</button></div>
      <p class="led-note" id="rateMsg" role="status"></p></form></div>
  <div id="statsBox"></div></dialog>
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
  {id:"wasat",name:"الخواتم",big:"الخواتم",note:"أقل من 300 ألف",metal:"var(--carnelian)"}
];
// The size list. Each ring gets its size from the admin form, not from its measured number.
const GRADES=[{id:"nawa",name:"نواعم",one:"ناعم"},{id:"wasat",name:"وسط",one:"وسط"},{id:"khashin",name:"خشن",one:"خشن"}];
const gradeName=r=>(GRADES.find(g=>g.id===r.grade)||{}).one;
// Only VIP-level rings carry a price label. The word وسط now means size alone.
const tierLabel=r=>r.t==="wasat"?"":T(r.t).name;
// New goods: a ring carries «جديد» and sits in its own section for a week from newAt, then goes back to the normal lists by itself.
const NEW_SHOW_MS=7*24*60*60*1000;
const isNew=r=>!r.sold&&r.newAt&&Date.now()-r.newAt<NEW_SHOW_MS;
const ringLabels=r=>[isNew(r)&&"جديد",tierLabel(r),gradeName(r)].filter(Boolean);
const ST={karazi:"radial-gradient(circle at 35% 30%,#e0604f,#6e130c 72%)",karaz:"radial-gradient(circle at 35% 30%,#c23a2c,#3d0603 75%)",
  aqiq:"radial-gradient(circle at 35% 30%,#e07a52,#7d2410 75%)",yellow:"radial-gradient(circle at 35% 30%,#fbe28a,#b98a12 75%)",
  dur:"radial-gradient(circle at 35% 30%,#fff,#bfc4c8 75%)"};
// price = thousand IQD, null = on request. img = clear photo and video name. photoOnly = the channel has a photo but no video.
// The tier comes from the price, see tierOf below.
const R=JSON.parse(document.getElementById("catalog").textContent);
// Exchange rate: thousands of dinars per 100 dollars. The owner changes it from the ☰ menu.
const SETTINGS={rate:152};try{Object.assign(SETTINGS,JSON.parse(document.getElementById("settings").textContent))}catch(e){}
const toUsd=k=>Math.round(k*100/SETTINGS.rate);
const toIqd=d=>Math.round(d*SETTINGS.rate/100);
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
const SITE_HOST="khawatim-alaqeeq.pages.dev",SITE_OWNER="mazadhussein";
// Links and barcodes sent out before the move still arrive at the same ring.
if(location.hostname.endsWith(".github.io"))location.replace("https://"+SITE_HOST+location.pathname+location.search+location.hash);
const IS_PAGES=location.hostname.endsWith(".pages.dev");
const BASE=IS_PAGES?"https://"+SITE_HOST+"/":new URL(".",location.href).href;
const ringNo=r=>r.id+1;
const ringLink=r=>BASE+"r/"+ringNo(r);
const priceText=ringPriceText;
// Prices are set in one currency and shown in both. Sale records keep priceText alone, so totals aren't confused by the second figure.
const priceBoth=r=>r.price!=null?`${r.price} ألف (${toUsd(r.price)} دولار)`:r.label?`${r.label} (${toIqd(parseFloat(r.label))} ألف)`:priceText(r);
// Delivery is charged once per order, in thousands of dinars for the totals.
const SHIP_K=5;
const SHIP_SHORT="التوصيل داخل العراق 5,000 دينار للطلب";
const SHIP_FULL="داخل العراق 5,000 دينار على الطلب كله، وخارج العراق حسب الدولة";
const shipTotal=sum=>`مع التوصيل داخل العراق: ${sum+SHIP_K} ألف (${toUsd(sum+SHIP_K)} دولار)`;
function ringText(r,short,noShip){
  const rows=[["رقم الخاتم",ringNo(r)],["الاسم",r.title],["السعر",priceBoth(r)],["القياس",r.size]];
  if(!short)rows.splice(2,0,["التفنيد",r.q],["النقش",r.nq],["الصياغة",r.sg],["الفئة",tierLabel(r)],["الحجم",gradeName(r)]);
  if(!noShip)rows.push(["التوصيل",SHIP_FULL]);
  rows.push(["الصورة والفيديو والباركود",ringLink(r)]);
  return rows.filter(x=>x[1]).map(([k,v])=>k+": "+v).join("\n");
}
const WA_TEXT="https://wa.me/9647757685741?text=";
const wa=r=>WA_TEXT+encodeURIComponent("السلام عليكم، أريد أحجز هذا الخاتم:\n"+ringText(r));
const photo=(r,alt)=>photoUrl(r)?`<img src="${esc(photoUrl(r))}" alt="${esc(alt||r.title)}" loading="lazy">`:`<div class="seal"><i style="--st:${ST[r.s]}"></i></div>`;
// A sold ring shows its photo only, so its video is never downloaded. The file stays, so «رجّعه للموقع» brings the video back.
const gallery=r=>!r.sold&&videoUrl(r)?`<div class="gal" id="gal"><div class="track" id="track" dir="rtl">
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
const priceHTML=r=>r.price!=null?`<span class="price">${r.price}<small>ألف</small><em class="usd" dir="ltr">$${toUsd(r.price)}</em></span>`:r.label?`<span class="ask">${esc(r.label)}<em class="usd">${toIqd(parseFloat(r.label))} ألف</em></span>`:`<span class="ask">السعر عند الطلب</span>`;

// stats + marquee
const priced=live().filter(r=>r.price!=null).map(r=>r.price);
$("stats").innerHTML=[[live().length,"قطعة متوفرة"],[TIERS.length,"فئات"],[Math.min(...priced),"يبدأ من (ألف)"]].map(([b,s])=>`<div><b>${b}</b><span>${s}</span></div>`).join("");
const names=["جواد يوسفي","مهدي شجاعي","سيد محمد أفضل","شهباز البحرين","ياسر البحرين","عارف البحرين","الأستاذ فيصل","حسين قاسمي","عليم 110"];
$("marq").innerHTML=[...names,...names].map(n=>`<span>${n}</span>`).join("");

// hero rotation through photographed rings
const heroes=live().filter(r=>videoUrl(r)&&photoUrl(r));let hi=0;
if(heroes[0]){$("heroImg").src=photoUrl(heroes[0]);$("heroName").textContent=heroes[0].title;$("heroTier").textContent=ringLabels(heroes[0]).join(" · ")}
if(heroes.length&&!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(()=>{
  hi=(hi+1)%heroes.length;const r=heroes[hi],im=$("heroImg");
  im.style.opacity=0;setTimeout(()=>{im.src=photoUrl(r);$("heroName").textContent=r.title;$("heroTier").textContent=ringLabels(r).join(" · ");im.style.opacity=1},500);
},4500);

// filters
let tier="all",grade="all";try{tier=localStorage.getItem("mh-tier")||"all"}catch(e){}
if(!T(tier)||tier==="wasat")tier="all";
function chips(){const row=(list,now,key)=>[{id:"all",name:"الكل"},...list].map(t=>`<button type="button" class="chip" data-${key}="${t.id}" aria-pressed="${t.id===now}">${t.name}</button>`).join("");
  $("grades").innerHTML=row(GRADES,grade,"g");
  // Cheapest first in the list, while the sections on the page start from the most expensive.
  $("tiers").innerHTML=row(TIERS.filter(t=>t.id!=="wasat").reverse(),tier,"t")}
function nav(){$("nav").innerHTML=(R.some(isNew)?`<a href="#t-new">بضاعة جديدة</a>`:"")+TIERS.filter(t=>live().some(r=>r.t===t.id)).map(t=>`<a href="#t-${t.id}">${t.name}</a>`).join("")+`<a href="#shop">قائمة الأسعار</a>`}
// Long lists open in steps, so a phone never draws hundreds of rings at once.
const PAGE_STEP=24;let more={};
$("tiers").onclick=e=>{const b=e.target.closest(".chip");if(!b)return;tier=b.dataset.t;more={};try{localStorage.setItem("mh-tier",tier)}catch(e){}chips();render()};
$("grades").onclick=e=>{const b=e.target.closest(".chip");if(!b)return;grade=b.dataset.g;more={};chips();render()};
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
  const order=short=>`السلام عليكم، أريد أحجز هذي الخواتم:\n\n${items.map(r=>ringText(r,short,true)).join("\n\n")}\n\nالمجموع: ${sum} ألف (${toUsd(sum)} دولار)${unpriced?" + قطع سعرها عند الطلب":""}\nالتوصيل: ${SHIP_FULL}\n${shipTotal(sum)}\n\nرابط الطلب كامل: ${BASE}#order=${items.map(ringNo).join(",")}`;
  // Very long links can fail to open WhatsApp, so a big order drops to the short form of each ring.
  const msg=encodeURIComponent(order(false)).length>6000?order(true):order(false);
  $("cartBox").innerHTML=`<h3>السلة (${items.length})</h3>`+items.map(r=>`<div class="line"><div class="th">${photo(r)}</div><div>${esc(r.title)}</div>${priceHTML(r)}<button type="button" class="rm" data-rm="${r.id}" aria-label="حذف">×</button></div>`).join("")+
  `<div class="total"><span>المجموع</span><span>${sum} ألف د.ع · $${toUsd(sum)}</span></div><p class="ship-note"><b>${shipTotal(sum)}</b><br>التوصيل: ${SHIP_FULL}.</p>${unpriced?`<p style="margin:0;color:var(--dim);font-size:13px">المجموع بدون ${unpriced} قطعة سعرها عند الطلب.</p>`:""}
  <a class="pill-wa" style="justify-content:center" href="https://wa.me/9647757685741?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">أرسل الطلب على الواتساب</a>`;
}
$("cartBtn").onclick=()=>{syncCart();$("cart").showModal()};
$("cartX").onclick=()=>$("cart").close();
$("cartBox").addEventListener("click",e=>{const b=e.target.closest("[data-rm]");if(b)toggle(+b.dataset.rm)});
document.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b){e.stopPropagation();toggle(+b.dataset.add)}},true);

const latinDigits=s=>s.replace(/[٠-٩]/g,d=>"٠١٢٣٤٥٦٧٨٩".indexOf(d));
function card(r){const t=T(r.t);return `<article class="card${r.sold?" is-sold":""}" tabindex="0" data-id="${r.id}" style="--metal:${t.metal}">
  <div class="badges">${isNew(r)?`<span class="badge new">جديد</span>`:""}${tierLabel(r)?`<span class="badge">${tierLabel(r)}</span>`:""}${gradeName(r)?`<span class="badge size">${gradeName(r)}</span>`:""}</div><div class="ph">${photo(r)}${r.sold?`<span class="sold-rib">تم البيع</span>`:""}${!r.sold&&videoUrl(r)?`<span class="play">▶ فيديو</span>`:""}</div>
  <div class="in"><h4>${esc(r.title)}</h4><p class="by">${esc(["رقم "+ringNo(r),r.nq,r.sg].filter(Boolean).join(" · "))}</p>
  <div class="row">${priceHTML(r)}${r.sold?"":addBtn(r)}</div>${r.sold?"":`<p class="ship">${SHIP_SHORT}</p>`}${adminRow(r)}</div></article>`}

function render(){
  const [lo,hi]=slider(),q=$("q").value.trim(),full=lo===100&&hi===650;
  const ok=r=>(tier==="all"||r.t===tier)&&(full||(r.price!=null&&r.price>=lo&&r.price<=hi))&&(grade==="all"||r.grade===grade)&&(!q||String(ringNo(r))===latinDigits(q)||(r.title+(r.q||"")+(r.nq||"")+(r.sg||"")).includes(q));
  let n=0;
  const section=(t,it)=>{n+=it.length;if(!it.length)return"";
    return `<section class="tier" id="t-${t.id}" style="--metal:${t.metal}"><div class="g">
      <div class="thead"><span class="big">${t.big}</span><h3>${t.name}</h3><p>${t.note} · ${it.length} قطعة</p></div>
      <div class="rail-x">${it.slice(0,more[t.id]||PAGE_STEP).map(card).join("")}</div>${it.length>(more[t.id]||PAGE_STEP)?`<button type="button" class="more-btn" data-more="${t.id}">عرض المزيد (باقي ${it.length-(more[t.id]||PAGE_STEP)})</button>`:""}</div></section>`};
  const fresh=R.filter(r=>isNew(r)&&ok(r)).sort((a,b)=>(b.newAt-a.newAt)||(rank(b)-rank(a)));
  const html=section({id:"new",name:"بضاعة جديدة",big:"جديد",note:"نزلت هذا الأسبوع",metal:"var(--gold)"},fresh)+TIERS.map(t=>section(t,R.filter(r=>onShow(r)&&!isNew(r)&&r.t===t.id&&ok(r)).sort((a,b)=>rank(b)-rank(a)))).join("");
  const soldOnly=Admin.on&&Admin.showSold;document.body.classList.toggle("sold-only",soldOnly);
  $("list").innerHTML=soldOnly?soldSection():html||`<div class="g"><div class="empty">ماكو خاتم بهذي المواصفات. وسّع مدى السعر، أو راسلنا على الواتساب ونلكالك اللي تريده.</div></div>`;
  $("count").textContent=n+" قطعة مطابقة";
}
["lo","hi","q"].forEach(id=>$(id).addEventListener("input",()=>{more={};render()}));

// detail sheet
$("list").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.classList.contains("card"))e.target.click()});
$("list").addEventListener("click",e=>{const m=e.target.closest("[data-more]");if(m){const id=m.dataset.more;more[id]=(more[id]||PAGE_STEP)+PAGE_STEP;render();return}const c=e.target.closest(".card");if(c)openRing(byId(+c.dataset.id))});
// A link or barcode ending in #ring=13 opens that ring directly. A sold ring still opens, marked sold, so its barcode keeps working as a guarantee.
function openFromLink(){const o=location.hash.match(/order=([\d,]+)/);if(o){if(!$("order").open)openOrder(o[1]);return}const m=location.hash.match(/ring=(\d+)/);if(!m||$("dlg").open)return;const r=byId(+m[1]-1);if(r)openRing(r)}
// A link ending in #order=2,5,9 shows a whole cart. The owner can finish all of it from here in one go.
let orderLink="";
function openOrder(nos){orderLink=nos;const rings=[...new Set(nos.split(",").map(n=>byId(+n-1)))].filter(Boolean),open=rings.filter(r=>!r.sold),sum=open.reduce((a,r)=>a+(r.price||0),0);
  $("orderBox").innerHTML=`<h3>الطلب (${rings.length})</h3>`+(rings.length?rings.map(r=>`<div class="line" data-open="${r.id}"><div class="th">${photo(r)}</div><div>${esc(r.title)}<small class="line-no">رقم ${ringNo(r)}${r.sold?" · تم البيع":""}</small></div>${priceHTML(r)}<span></span></div>`).join(""):`<p style="margin:0;color:var(--dim)">ما لكيت خواتم بهذا الطلب.</p>`)+
  (open.length?`<div class="total"><span>المجموع</span><span>${sum} ألف د.ع · $${toUsd(sum)}</span></div><p class="ship-note"><b>${shipTotal(sum)}</b><br>التوصيل: ${SHIP_FULL}.</p>`:"")+
  (Admin.ledger&&open.length?`<div class="adm-sale-all"><button type="button" class="adm-btn main" data-order="sold">تم شراء الكل (${open.length})</button><button type="button" class="adm-btn" data-order="reserved">حجز الكل</button></div>`:"");
  if(!$("order").open)$("order").showModal()}
$("orderX").onclick=()=>$("order").close();
$("orderBox").addEventListener("click",e=>{const a=e.target.closest("[data-order]");if(a){openSaleOrder(orderLink,a.dataset.order);return}const l=e.target.closest("[data-open]");if(l)openRing(byId(+l.dataset.open))});
addEventListener("hashchange",openFromLink);
// The barcode library loads only when a ring is opened. The image can be saved from the phone like any photo.
let qrLib;
const loadQr=()=>qrLib||(qrLib=new Promise((ok,no)=>{const s=document.createElement("script");s.src="qrcode.js";s.onload=()=>ok(window.qrcode);s.onerror=no;document.head.append(s)}));
// With lines given, the picture becomes the guarantee card the customer keeps: a heading above the barcode and the details below it.
function qrCanvas(r,lines,pic){const q=window.qrcode(0,"M");q.addData(ringLink(r));q.make();
  const n=q.getModuleCount(),cell=lines?10:8,quiet=lines?3:2,size=(n+quiet*2)*cell,picH=lines&&pic?Math.round(size*.72):0,top=lines?58+picH:0,c=document.createElement("canvas"),g=c.getContext("2d");
  c.width=size;c.height=top+size+(lines?lines.length*36+12:0);g.fillStyle="#fff";g.fillRect(0,0,c.width,c.height);
  // The ring's photo sits above the barcode, cropped to fill the width.
  if(picH){const s=Math.max(size/pic.naturalWidth,picH/pic.naturalHeight),w=size/s,h=picH/s;g.drawImage(pic,(pic.naturalWidth-w)/2,(pic.naturalHeight-h)/2,w,h,0,58,size,picH)}
  g.fillStyle="#000";
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
   ${ringLabels(r).length?`<div class="sheet-badges">${isNew(r)?`<span class="new">جديد</span>`:""}${tierLabel(r)?`<span style="border-color:${t.metal};color:${t.metal}">${tierLabel(r)}</span>`:""}${gradeName(r)?`<span>${gradeName(r)}</span>`:""}</div>`:""}
   <h3>${esc(r.title)}</h3><p class="q">${esc(r.q||"")}</p>
   <div class="specs"><dl>${[["رقم الخاتم",ringNo(r)],["النقش",r.nq],["الصياغة",r.sg],["الحجم",gradeName(r)],["القياس",r.size],["الحجر","عقيق يماني خام"],["التوصيل",r.sold?"":SHIP_FULL]].filter(x=>x[1]).map(([k,v])=>`<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
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
const GH={owner:IS_PAGES?SITE_OWNER:"",token:""};
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
// A save writes the main page and the pages of the rings that changed, so it stays quick with hundreds of rings.
function siteEntries(snapshot){const base=`https://${SITE_HOST}/`,rows=catalogRows(),before=new Map((snapshot?JSON.parse(snapshot):[]).map(r=>[r.id,JSON.stringify(r)]));
  return [{path:"index.html",content:pageHtml(rows,SETTINGS)},...rows.filter(r=>before.get(r.id)!==JSON.stringify(r)).map(r=>({path:"r/"+(r.id+1)+".html",content:ringPage(r,base)}))]}
const restore=snapshot=>{const now=JSON.parse(snapshot);R.length=0;now.forEach(r=>{r.t=tierOf(r);R.push(r)})};
function refreshAdmin(){$("admSold").textContent=Admin.showSold?"كل الخواتم":"المبيوع ("+R.filter(r=>r.sold).length+")";nav();render()}
async function saveCatalog(snapshot,say,extra=[]){
  try{await commit("تحديث الخواتم",[...siteEntries(snapshot),...extra]);refreshAdmin();return true}
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
    r.t=tierOf(r);if(!old){r.newAt=Date.now();R.push(r)}
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
// Country codes for the customer's WhatsApp number. Names come from the phone's own language data, so the list stays small.
const DIALS="AC247 AD376 AE971 AF93 AG1 AI1 AL355 AM374 AO244 AR54 AS1 AT43 AU61 AW297 AX358 AZ994 BA387 BB1 BD880 BE32 BF226 BG359 BH973 BI257 BJ229 BL590 BM1 BN673 BO591 BQ599 BR55 BS1 BT975 BW267 BY375 BZ501 CA1 CC61 CD243 CF236 CG242 CH41 CI225 CK682 CL56 CM237 CN86 CO57 CR506 CU53 CV238 CW599 CX61 CY357 CZ420 DE49 DJ253 DK45 DM1 DO1 DZ213 EC593 EE372 EG20 EH212 ER291 ES34 ET251 FI358 FJ679 FK500 FM691 FO298 FR33 GA241 GB44 GD1 GE995 GF594 GG44 GH233 GI350 GL299 GM220 GN224 GP590 GQ240 GR30 GT502 GU1 GW245 GY592 HK852 HN504 HR385 HT509 HU36 ID62 IE353 IL972 IM44 IN91 IO246 IQ964 IR98 IS354 IT39 JE44 JM1 JO962 JP81 KE254 KG996 KH855 KI686 KM269 KN1 KP850 KR82 KW965 KY1 KZ7 LA856 LB961 LC1 LI423 LK94 LR231 LS266 LT370 LU352 LV371 LY218 MA212 MC377 MD373 ME382 MF590 MG261 MH692 MK389 ML223 MM95 MN976 MO853 MP1 MQ596 MR222 MS1 MT356 MU230 MV960 MW265 MX52 MY60 MZ258 NA264 NC687 NE227 NF672 NG234 NI505 NL31 NO47 NP977 NR674 NU683 NZ64 OM968 PA507 PE51 PF689 PG675 PH63 PK92 PL48 PM508 PR1 PS970 PT351 PW680 PY595 QA974 RE262 RO40 RS381 RU7 RW250 SA966 SB677 SC248 SD249 SE46 SG65 SH290 SI386 SJ47 SK421 SL232 SM378 SN221 SO252 SR597 SS211 ST239 SV503 SX1 SY963 SZ268 TA290 TC1 TD235 TG228 TH66 TJ992 TK690 TL670 TM993 TN216 TO676 TR90 TT1 TV688 TW886 TZ255 UA380 UG256 US1 UY598 UZ998 VA39 VC1 VE58 VG1 VI1 VN84 VU678 WF681 WS685 XK383 YE967 YT262 ZA27 ZM260 ZW263";
const GULF=["SA","AE","KW","QA","BH","OM"],ARAB=["JO","LB","SY","PS","EG","YE","SD","LY","TN","DZ","MA","MR","SO","DJ","KM"];
let countries=null,saleCountry=null;
function countryList(){if(countries)return countries;let ar=null,en=null;try{ar=new Intl.DisplayNames(["ar"],{type:"region"});en=new Intl.DisplayNames(["en"],{type:"region"})}catch(x){}
  const all=DIALS.split(" ").map(x=>{const iso=x.slice(0,2),dial=x.slice(2);let a=iso,e=iso;try{a=ar?ar.of(iso):iso;e=en?en.of(iso):iso}catch(y){}return {iso,dial,ar:a,en:e}}),by=new Map(all.map(c=>[c.iso,c])),pick=l=>l.map(i=>by.get(i)).filter(Boolean);
  return countries={all,by,iraq:by.get("IQ"),gulf:pick(GULF),arab:pick(ARAB),rest:all.filter(c=>c.iso!=="IQ"&&!GULF.includes(c.iso)&&!ARAB.includes(c.iso)).sort((a,b)=>a.ar.localeCompare(b.ar,"ar"))}}
const flagOf=iso=>iso.replace(/./g,c=>String.fromCodePoint(127397+c.charCodeAt(0)));
const searchForm=s=>s.replace(/[ً-ْ]/g,"").replace(/[أإآ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").toLowerCase();
function countryHits(text){const q=searchForm(latinDigits(text.trim()).replace(/^(\+|00)/,""));return q?countryList().all.filter(c=>searchForm(c.ar).includes(q)||c.en.toLowerCase().includes(q)||c.iso.toLowerCase()===q||c.dial.startsWith(q)):null}
function renderCountries(){const l=countryList(),row=c=>`<button type="button" class="ctry-item" data-iso="${c.iso}"><span>${flagOf(c.iso)} ${esc(c.ar)}</span><b dir="ltr">+${c.dial}</b></button>`,head=t=>`<p class="ctry-head">${t}</p>`,hits=countryHits($("ctrySearch").value);
  $("ctryList").innerHTML=hits?(hits.map(row).join("")||head("ماكو دولة بهذا الاسم.")):row(l.iraq)+head("دول الخليج")+l.gulf.map(row).join("")+head("الدول العربية")+l.arab.map(row).join("")+head("كل الدول")+l.rest.map(row).join("")}
function showCountries(on){$("ctryBox").hidden=!on;$("ctryBtn").setAttribute("aria-expanded",String(on));if(on){$("ctrySearch").value="";renderCountries();$("ctryList").scrollTop=0;$("ctrySearch").focus()}}
function setCountry(c){saleCountry=c;$("ctryBtn").textContent=flagOf(c.iso)+" +"+c.dial;$("ctryBtn").setAttribute("aria-label","رمز الدولة: "+c.ar+" +"+c.dial);showCountries(false)}
function wireCountries(){$("ctryBtn").onclick=()=>showCountries($("ctryBox").hidden);$("ctrySearch").addEventListener("input",renderCountries);
  $("ctrySearch").addEventListener("keydown",e=>{if(e.key!=="Enter")return;e.preventDefault();const h=countryHits($("ctrySearch").value);if(h&&h[0]){setCountry(h[0]);$("saleF").elements.phone.focus()}});
  $("ctryList").addEventListener("click",e=>{const b=e.target.closest("[data-iso]");if(!b)return;setCountry(countryList().by.get(b.dataset.iso));$("saleF").elements.phone.focus()})}
function openSale(r,kind,doc){if(!r)return;const el=$("saleF").elements,old=doc&&Admin.sales.find(s=>s.id===doc);
  Admin.sale={r,kind,doc:doc||null};$("saleF").reset();setCountry(old&&old.iso&&countryList().by.get(old.iso)||countryList().iraq);el.address.value=old&&old.address||"";
  $("saleT").textContent=(kind==="sold"?"تم الشراء: ":"حجز: ")+"رقم "+ringNo(r)+" · "+r.title;
  $("salePriceOne").hidden=false;$("salePrices").hidden=true;$("salePrices").innerHTML="";
  el.name.value=old&&old.name||"";el.phone.value=old&&old.phone||"";el.price.value=old&&old.price||priceText(r);
  $("saleSave").textContent=kind==="sold"?"تم الشراء":"سجّل الحجز";$("saleSave").disabled=false;$("saleMsg").textContent="";
  $("sale").showModal()}
// One form for a whole cart: the customer's details once, and a price for each ring.
function openSaleOrder(nos,kind){const rings=[...new Set(nos.split(",").map(n=>byId(+n-1)))].filter(r=>r&&!r.sold);if(!rings.length)return;
  const el=$("saleF").elements;$("saleF").reset();Admin.sale={order:rings,kind,orderId:"o"+Date.now()};setCountry(countryList().iraq);el.address.value="";
  $("saleT").textContent=(kind==="sold"?"تم شراء الكل: ":"حجز الكل: ")+rings.length+" خواتم";
  $("salePriceOne").hidden=true;$("salePrices").hidden=false;
  $("salePrices").innerHTML=rings.map(r=>`<label>رقم ${ringNo(r)} · ${esc(r.title)}<input data-ring="${r.id}" maxlength="40" autocomplete="off" value="${esc(priceText(r))}"></label>`).join("");
  $("saleSave").textContent=kind==="sold"?"تم شراء الكل":"سجّل الحجز";$("saleSave").disabled=false;$("saleMsg").textContent="";
  $("sale").showModal()}
async function submitOrderSale(S,say){const el=$("saleF").elements,btn=$("saleSave"),name=el.name.value.trim(),phone=el.phone.value.trim(),address=el.address.value.trim();
  if(!waNumber(phone,saleCountry.dial)){say("اكتب رقم واتساب الزبون كامل.");return}
  btn.disabled=true;say("دا أحفظ…");const at=Date.now(),num=waNumber(phone,saleCountry.dial);
  const bodies=S.order.map(r=>({id:S.orderId+"-"+r.id,orderId:S.orderId,ringId:r.id,no:ringNo(r),title:r.title,photo:photoUrl(r),kind:S.kind,name,phone,dial:saleCountry.dial,iso:saleCountry.iso,address,price:$("salePrices").querySelector(`[data-ring="${r.id}"]`).value.trim(),at}));
  const ids=new Set(bodies.map(b=>b.id)),rings=new Set(bodies.map(b=>b.ringId));
  // A reservation by the same customer becomes this sale, so the ring isn't listed twice.
  try{await writeSales(list=>[...list.filter(s=>!ids.has(s.id)&&!(s.kind!=="sold"&&rings.has(s.ringId)&&waNumber(s.phone,s.dial)===num)),...bodies],(S.kind==="sold"?"بيع":"حجز")+" طلب من "+bodies.length+" خواتم")}
  catch(x){say(adminErr(x));btn.disabled=false;return}
  if(S.kind==="sold"){const snapshot=JSON.stringify(catalogRows());S.order.forEach(r=>{r.sold=true;r.soldAt=at});say("انحفظ البيع، دا أعلّم الخواتم «تم البيع»…");
    if(!await saveCatalog(snapshot,say)){btn.disabled=false;return}}
  $("sale").close();if($("order").open)openOrder(orderLink);openGuar(bodies)}
// A local Iraqi number (07...) becomes the international form a WhatsApp link needs.
// A number typed with + or 00 is used as it is. Otherwise the chosen country's code goes in front, replacing a local leading 0.
const waNumber=(p,dial)=>{const raw=latinDigits(String(p||"")).trim();let d=raw.replace(/\D/g,"");if(!d)return "";if(/^(\+|00)/.test(raw))d=d.replace(/^00/,"");else{const c=dial||"964";if(!(d.startsWith(c)&&d.length>=c.length+7))d=c+d.replace(/^0/,"")}return d.length>=8?d:""};
const dateText=at=>new Date(at).toLocaleDateString("en-GB");
const guarLines=s=>["خاتم رقم "+s.no+" · "+s.title,s.name&&"الزبون: "+s.name,(s.kind==="sold"?"تاريخ الشراء: ":"تاريخ الحجز: ")+dateText(s.at),"خواتم العقيق"].filter(Boolean);
const guarText=s=>[`السلام عليكم${s.name?" "+s.name:""}،`,"هذا باركود الضمان لخاتمك من خواتم العقيق:","رقم الخاتم: "+s.no,"الاسم: "+s.title,s.price&&"السعر: "+s.price,(s.kind==="sold"?"تاريخ الشراء: ":"تاريخ الحجز: ")+dateText(s.at),"رابط الضمان: "+BASE+"r/"+s.no,"احتفظ بهذي الرسالة."].filter(Boolean).join("\n");
// The guarantee keeps the ring's photo only, never its video. The photo path is saved with the sale, so it survives the ring being edited or removed.
const salePhoto=s=>{const r=byId(s.ringId);return s.photo||(r?photoUrl(r):"")};
const loadImg=u=>new Promise(ok=>{if(!u)return ok(null);const i=new Image();i.onload=()=>ok(i);i.onerror=()=>ok(null);i.src=u});
// A free WhatsApp link fills in the text and the owner presses send. The picture goes through the phone's share list, once the customer's chat is open.
const guarOrderText=list=>{const s=list[0];return [`السلام عليكم${s.name?" "+s.name:""}،`,"هذي باركودات الضمان لخواتمك من خواتم العقيق:","",...list.flatMap(x=>["رقم الخاتم: "+x.no,"الاسم: "+x.title,x.price&&"السعر: "+x.price,"رابط الضمان: "+BASE+"r/"+x.no,""].filter(l=>l!==null&&l!==undefined&&l!==false)),(s.kind==="sold"?"تاريخ الشراء: ":"تاريخ الحجز: ")+dateText(s.at),"احتفظ بهذي الرسالة."].filter(l=>l||l==="").join("\n")};
async function openGuar(input){const list=Array.isArray(input)?input:[input],s=list[0],box=$("guarBox"),many=list.length>1;Admin.guar=null;
  try{await loadQr();const cards=[];for(const x of list)cards.push(qrCanvas(byId(x.ringId)||{id:x.no-1,title:x.title},guarLines(x),await loadImg(salePhoto(x))));Admin.guar={list,cards};
    const num=waNumber(s.phone,s.dial);
    box.innerHTML=`<h3>باركود الضمان${many?` (${list.length})`:""}</h3>${cards.map((c,i)=>`<img class="guar-card" src="${c.toDataURL("image/png")}" alt="باركود الضمان للخاتم رقم ${esc(list[i].no)}">`).join("")}
    ${num?`<a class="pill-wa" href="https://wa.me/${num}?text=${encodeURIComponent(many?guarOrderText(list):guarText(s))}" target="_blank" rel="noopener">1. افتح محادثة الزبون وأرسل الرسالة</a>`:`<p style="margin:0;color:var(--carnelian)">رقم الزبون ما مكتوب صح. عدّله من قائمة المبيعات.</p>`}
    <button type="button" class="pill-wa" id="guarShare">2. أرسل ${many?"صور الباركود":"صورة الباركود"}</button>
    <p class="led-note" id="guarNote">بالخطوة الثانية اختار الواتساب وبعدها محادثة الزبون.</p>`;
    $("guarShare").onclick=shareGuar;
  }catch(x){box.innerHTML=`<h3>باركود الضمان</h3><p style="margin:0">ما كدرت أجهز الباركود. تأكد من النت وجرب من قائمة المبيعات.</p>`}
  if(!$("guar").open)$("guar").showModal()}
async function shareGuar(){const G=Admin.guar,note=$("guarNote");if(!G)return;const hold="موبايلك ما سمح بالإرسال المباشر. اضغط مطول على الصورة فوق واحفظها، وبعدها أرسلها بمحادثة الزبون.";
  const files=G.cards.map((c,k)=>{const bin=atob(c.toDataURL("image/png").split(",")[1]),a=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);return new File([a],"guarantee-ring-"+G.list[k].no+".png",{type:"image/png"})});
  if(!navigator.canShare||!navigator.canShare({files})){note.textContent=hold;return}
  try{await navigator.share({files})}catch(x){if(!x||x.name!=="AbortError")note.textContent=hold}}
async function submitSale(e){e.preventDefault();const S=Admin.sale,el=$("saleF").elements,btn=$("saleSave"),say=t=>{$("saleMsg").textContent=t};
  if(S.order){await submitOrderSale(S,say);return}
  const name=el.name.value.trim(),phone=el.phone.value.trim(),address=el.address.value.trim();if(!waNumber(phone,saleCountry.dial)){say("اكتب رقم واتساب الزبون كامل.");return}
  btn.disabled=true;say("دا أحفظ…");
  const old=S.doc&&Admin.sales.find(s=>s.id===S.doc),id=S.doc||"s"+Date.now();
  const body={id,ringId:S.r.id,no:ringNo(S.r),title:S.r.title,photo:photoUrl(S.r),kind:S.kind,name,phone,dial:saleCountry.dial,iso:saleCountry.iso,address,price:el.price.value.trim(),at:old&&old.kind===S.kind?old.at:Date.now()};
  try{await writeSales(list=>[...list.filter(s=>s.id!==id),body],(S.kind==="sold"?"بيع":"حجز")+" خاتم "+body.no);S.doc=id}
  catch(x){say(adminErr(x));btn.disabled=false;return}
  if(S.kind==="sold"&&!S.r.sold){const snapshot=JSON.stringify(catalogRows());S.r.sold=true;S.r.soldAt=Date.now();say("انحفظ البيع، دا أعلّم الخاتم «تم البيع»…");
    if(!await saveCatalog(snapshot,say)){btn.disabled=false;return}}
  $("sale").close();if($("dlg").open)openRing(S.r);openGuar(body)}
const kindName=k=>k==="sold"?"تم البيع":"حجز";
function renderLedger(){if(!$("ledger").open)return;const it=[...Admin.sales].sort((a,b)=>b.at-a.at);
  $("ledgerBox").innerHTML=`<h3>المبيعات والحجوزات (${it.length})</h3><p class="led-note">هذي القائمة تشوفها إنت بس.</p>`+(it.length?it.map(s=>{const r=byId(s.ringId),can=s.kind!=="sold"&&r&&!r.sold;
    return `<div class="led">${salePhoto(s)?`<img class="led-photo" src="${esc(salePhoto(s))}" alt="${esc(s.title)}" loading="lazy">`:""}<div class="led-top"><b>رقم ${esc(s.no)} · ${esc(s.title)}</b><span class="led-kind" data-k="${s.kind==="sold"?"sold":"res"}">${kindName(s.kind)}</span></div>
    <dl><dt>الزبون</dt><dd>${esc(s.name||"غير مكتوب")}</dd><dt>الرقم</dt><dd dir="ltr" style="text-align:right">${s.dial?"+"+esc(s.dial)+" ":""}${esc(s.phone||"غير مكتوب")}</dd>${s.address?`<dt>العنوان</dt><dd>${esc(s.address)}</dd>`:""}<dt>السعر</dt><dd>${esc(s.price||"غير مكتوب")}</dd><dt>التاريخ</dt><dd dir="ltr" style="text-align:right">${new Date(s.at).toLocaleString("en-GB",{dateStyle:"short",timeStyle:"short"})}</dd></dl>
    <div class="adm-row"><button type="button" class="adm-btn main" data-guar="${esc(s.id)}">أرسل الضمان</button>${can?`<button type="button" class="adm-btn" data-sale="${s.ringId}" data-kind="sold" data-doc="${esc(s.id)}">تم الشراء</button>`:""}${r?`<button type="button" class="adm-btn" data-sale="${s.ringId}" data-kind="${esc(s.kind)}" data-doc="${esc(s.id)}">تعديل</button>`:""}<button type="button" class="adm-btn danger" data-del="${esc(s.id)}">حذف</button></div></div>`}).join(""):`<p style="margin:0;color:var(--dim)">بعد ما مسجل بيع أو حجز.</p>`)+`<button type="button" class="adm-btn" id="admOut">خروج من الآدمن بهذا الموبايل</button>`;
  $("admOut").onclick=()=>{store.del(KEY_TOKEN);store.del(KEY_OWNER);location.href=location.pathname}}
// Sales numbers for the owner. Prices were typed as text, so they are read back here: thousands of dinars, or dollars kept apart.
function saleMoney(s){const t=latinDigits(String(s.price||"")),m=t.replace(/[,،٬\s]/g,"").match(/\d+(\.\d+)?/);if(!m)return {iqd:0,usd:0};let n=+m[0];if(/دولار|\$/.test(t))return {iqd:0,usd:n};if(n>=1000)n/=1000;return {iqd:n,usd:0}}
const addMoney=list=>list.reduce((a,s)=>{const m=saleMoney(s);a.iqd+=m.iqd;a.usd+=m.usd;return a},{iqd:0,usd:0});
const moneyText=m=>[m.iqd?m.iqd.toLocaleString("en-US")+" ألف":"",m.usd?m.usd.toLocaleString("en-US")+" دولار":""].filter(Boolean).join(" + ")||"0";
// The Iraqi working week starts on Saturday.
const weekStart=()=>{const x=new Date();x.setHours(0,0,0,0);x.setDate(x.getDate()-((x.getDay()+1)%7));return +x};
const monthStart=()=>{const x=new Date();x.setHours(0,0,0,0);x.setDate(1);return +x};
function topBuyers(sold){const map=new Map();sold.forEach(s=>{const key=waNumber(s.phone,s.dial)||s.phone||"";if(!key)return;const b=map.get(key)||{key,num:waNumber(s.phone,s.dial),phone:s.phone,name:"",list:[]};if(s.name)b.name=s.name;b.list.push(s);map.set(key,b)});
  return [...map.values()].sort((a,b)=>b.list.length-a.list.length||addMoney(b.list).iqd-addMoney(a.list).iqd).slice(0,5)}
function renderStats(){if(!$("salesPanel").open)return;
  const sold=Admin.sales.filter(s=>s.kind==="sold"),week=sold.filter(s=>s.at>=weekStart()),month=sold.filter(s=>s.at>=monthStart());
  const reserved=Admin.sales.filter(s=>s.kind!=="sold"&&byId(s.ringId)&&!byId(s.ringId).sold);
  const stat=(label,list)=>`<div class="st-card"><span>${label}</span><b>${list.length}</b><small>${moneyText(addMoney(list))}</small></div>`;
  const all=addMoney(sold),withIqd=sold.filter(s=>saleMoney(s).iqd);
  const buyers=topBuyers(sold),avail=live(),availValue=avail.reduce((a,r)=>a+(r.price||0),0);
  const tiers=TIERS.map(t=>({t,n:sold.filter(s=>{const r=byId(s.ringId);return r&&r.t===t.id}).length})).filter(x=>x.n);
  const logged=new Set(sold.map(s=>s.ringId)),unlogged=R.filter(r=>r.sold&&!logged.has(r.id)).length;
  $("statsBox").innerHTML=`<div class="st"><p class="led-note">تشوفها إنت بس. الأسبوع يبدأ من السبت.</p>
  <div class="st-grid">${stat("هذا الأسبوع",week)}${stat("هذا الشهر",month)}${stat("كل المبيعات",sold)}<div class="st-card"><span>حجوزات مفتوحة</span><b>${reserved.length}</b><small>بانتظار الشراء</small></div></div>
  <h4>أرقام سريعة</h4><dl class="st-list"><dt>مجموع المبيعات</dt><dd>${moneyText(all)}</dd>${withIqd.length?`<dt>متوسط سعر البيع</dt><dd>${Math.round(addMoney(withIqd).iqd/withIqd.length).toLocaleString("en-US")} ألف</dd>`:""}<dt>خواتم معروضة</dt><dd>${avail.length}</dd><dt>قيمة المعروض</dt><dd>${availValue.toLocaleString("en-US")} ألف</dd></dl>
  <h4>أكثر الزبائن شراءً</h4>${buyers.length?`<ol class="st-buyers">${buyers.map(b=>`<li><div><b>${esc(b.name||"بدون اسم")}</b><span dir="ltr">${esc(b.phone||"")}</span></div><div class="st-r"><b>${b.list.length} ${b.list.length===1?"خاتم":"خواتم"}</b><small>${moneyText(addMoney(b.list))}</small>${b.num?`<a href="https://wa.me/${b.num}" target="_blank" rel="noopener">واتساب</a>`:""}</div></li>`).join("")}</ol>`:`<p class="led-note">بعد ما مسجل مبيعات.</p>`}
  ${tiers.length?`<h4>المبيعات حسب الفئة</h4><dl class="st-list">${tiers.map(x=>`<dt>${x.t.name}</dt><dd>${x.n}</dd>`).join("")}</dl>`:""}
  ${sold.length?`<h4>آخر المبيعات</h4><ul class="st-last">${[...sold].sort((a,b)=>b.at-a.at).slice(0,5).map(s=>`<li><span>رقم ${esc(s.no)} · ${esc(s.title)}</span><small>${esc(s.price||"")} · ${dateText(s.at)}</small></li>`).join("")}</ul>`:""}
  ${unlogged?`<p class="led-note">${unlogged} ${unlogged===1?"خاتم مؤشر":"خواتم مؤشرة"} مبيوع بدون تسجيل بيع، وما داخلة بهذي الأرقام.</p>`:""}
  <button type="button" class="adm-btn" id="statsList">كل المبيعات والحجوزات</button></div>`;
  $("statsList").onclick=()=>{$("salesPanel").close();$("ledger").showModal();renderLedger()}}
function syncSales(){$("admLedger").textContent="المبيعات ("+Admin.sales.length+")";renderLedger();renderStats()}
document.addEventListener("click",async e=>{
  const sa=e.target.closest("[data-sale]");if(sa){e.stopPropagation();openSale(byId(+sa.dataset.sale),sa.dataset.kind,sa.dataset.doc);return}
  const ed=e.target.closest("[data-edit]"),so=e.target.closest("[data-sold]");if(!ed&&!so)return;e.stopPropagation();
  if(ed){openForm(byId(+ed.dataset.edit));return}
  const r=byId(+so.dataset.sold),snapshot=JSON.stringify(catalogRows());
  so.disabled=true;if(r.sold){delete r.sold;delete r.soldAt}else{r.sold=true;r.soldAt=Date.now()}toast("دا أحفظ…",true);
  if(await saveCatalog(snapshot,t=>toast(t,true)))toast(SAVED);else so.disabled=false;
},true);

// The page visitors load can be a minute behind, so the admin always starts from the newest saved catalogue.
async function loadLive(){const f=await api(`/repos/${pubRepo()}/contents/index.html`),page=unb64(f.content),m=page.match(/<script type="application\/json" id="catalog">([\s\S]*?)<\/script>/),s=page.match(/<script type="application\/json" id="settings">([\s\S]*?)<\/script>/);
  if(!m)throw {status:0};if(s)Object.assign(SETTINGS,JSON.parse(s[1]));const rows=JSON.parse(m[1]);R.length=0;rows.forEach(r=>{r.t=tierOf(r);R.push(r)})}
async function submitRate(e){e.preventDefault();const say=t=>{$("rateMsg").textContent=t},n=parseFloat(latinDigits($("rateIn").value)),old=SETTINGS.rate;
  if(!(n>=50&&n<=500)){say("اكتب رقم بين 50 و500.");return}
  if(n===old){say("هذا نفس السعر الحالي.");return}
  $("rateSave").disabled=true;say("دا أحفظ…");SETTINGS.rate=n;
  const ok=await saveCatalog(JSON.stringify(catalogRows()),say);
  if(ok){syncCart();say("انحفظ. الأسعار بالدولار تتحدث عند الزبائن خلال دقيقة أو دقيقتين.")}else{SETTINGS.rate=old;$("rateIn").value=old;refreshAdmin()}
  $("rateSave").disabled=false}
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
  $("ledgerBox").addEventListener("click",async e=>{const g=e.target.closest("[data-guar]");if(g){const s=Admin.sales.find(x=>x.id===g.dataset.guar);if(s)openGuar(s.orderId?Admin.sales.filter(x=>x.orderId===s.orderId):s);return}
    const b=e.target.closest("[data-del]");if(!b)return;
    if(!b.dataset.sure){b.dataset.sure="1";b.textContent="متأكد؟ اضغط مرة ثانية";return}
    b.disabled=true;try{await writeSales(list=>list.filter(s=>s.id!==b.dataset.del),"حذف سطر")}catch(x){b.disabled=false;toast(adminErr(x))}});
  try{await loadSales();Admin.ledger=true;$("admLedger").hidden=false;$("admLedger").onclick=()=>{$("ledger").showModal();renderLedger()};
    $("admMenu").hidden=false;$("statsX").onclick=()=>$("salesPanel").close();
    $("salesPanel").addEventListener("click",e=>{if(e.target===$("salesPanel"))$("salesPanel").close()});
    wireCountries();$("rateF").addEventListener("submit",submitRate);
    $("admMenu").onclick=()=>{$("rateIn").value=SETTINGS.rate;$("rateMsg").textContent="";$("salesPanel").showModal();renderStats();loadSales().catch(()=>{})}}
  catch(e){toast("ما كدرت أقرا قائمة المبيعات: "+adminErr(e))}
  refreshAdmin();
  // A ring opened from a link before admin mode was known gets its sale buttons now.
  if($("dlg").open&&openId!=null)openRing(byId(openId));
  if($("order").open)openOrder(orderLink);
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

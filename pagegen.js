// Builds the site's generated pages: the main page around the catalogue, and one small page per ring.
// WhatsApp reads a ring page's preview tags, and a visitor is sent straight on to that ring on the main site.
const htmlEsc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ringPriceText=r=>r.price!=null?r.price+" ألف":r.label||"السعر عند الطلب";
const SITE_ROOT="https://khawatim-alaqeeq.pages.dev/";
const SITE_TITLE="خواتم العقيق | خواتم عقيق يماني بنقش يدوي";
const SITE_DESC="خواتم العقيق: خواتم عقيق يماني خام بنقش يدوي وصياغة فضة بحرينية. صور وفيديو لكل خاتم، والحجز بالواتساب، والتوصيل لكل محافظات العراق.";
// The code Google Search Console gives to prove the site is ours. Empty until the owner connects it.
const GOOGLE_VERIFY="engS4P5Bt8waLBr8lJyhaBCUDFu37gJYzZSDEPEt0xw";
function pageHtml(rows,settings){
  const data=rows.map(r=>JSON.stringify(r).replace(/</g,"\\u003c")).join(",\n");
  const store={"@context":"https://schema.org","@type":"JewelryStore",name:"خواتم العقيق",url:SITE_ROOT,image:SITE_ROOT+"img/logo.jpg",description:SITE_DESC,telephone:"+9647757685741",areaServed:"IQ"};
  // Readers and search engines get the rings as plain text straight away. The full site replaces this once it loads.
  const list=rows.filter(r=>!r.sold).map(r=>`<li><a href="khatam/${r.id+1}">${htmlEsc(r.title)}</a>${r.q?" · "+htmlEsc(r.q):""}</li>`).join("");
  return `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${SITE_TITLE}</title>
<meta name="description" content="${SITE_DESC}">
<link rel="canonical" href="${SITE_ROOT}">${GOOGLE_VERIFY?`
<meta name="google-site-verification" content="${htmlEsc(GOOGLE_VERIFY)}">`:""}
<meta property="og:title" content="${SITE_TITLE}"><meta property="og:description" content="${SITE_DESC}"><meta property="og:image" content="${SITE_ROOT}img/logo.jpg"><meta property="og:url" content="${SITE_ROOT}"><meta property="og:type" content="website"><meta property="og:site_name" content="خواتم العقيق">
<script type="application/ld+json">${JSON.stringify(store).replace(/</g,"\\u003c")}</`+`script>
<link rel="icon" href="img/emblem.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Reem+Kufi:wght@500;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap">
<link rel="stylesheet" href="site.css"></head><body>
<div id="app"><main style="padding:24px 16px"><h1>خواتم العقيق</h1><p>${SITE_DESC}</p><ul>${list}</ul></main></div>
<script type="application/json" id="settings">${JSON.stringify(settings||{rate:152})}</`+`script>
<script type="application/json" id="catalog">[
${data}
]</`+`script>
<script src="pagegen.js"></`+`script>
<script src="site.js"></`+`script>
</body></html>
`}
function ringPage(r,base){
  const no=r.id+1,title=`${r.title} · خاتم رقم ${no}`,desc=[r.sold?"مبيوع":ringPriceText(r),r.q].filter(Boolean).join(" · ");
  const pic=r.photo||(r.img?`photo/${r.img}.jpg`:"img/logo.jpg"),to=`../#ring=${no}`;
  return `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${htmlEsc(title)}</title>
<meta name="description" content="${htmlEsc(desc)}">
<link rel="canonical" href="${htmlEsc(base)}">
<meta property="og:title" content="${htmlEsc(title)}"><meta property="og:description" content="${htmlEsc(desc)}">
<meta property="og:image" content="${htmlEsc(base+pic)}"><meta property="og:url" content="${htmlEsc(base+"r/"+no)}"><meta property="og:type" content="website"><meta property="og:site_name" content="خواتم العقيق">
<meta name="twitter:card" content="summary_large_image">
<script>location.replace(${JSON.stringify(to)})</`+`script>
</head><body style="background:#140908;color:#f4e9e1;font-family:Tahoma,sans-serif;text-align:center;padding:40px 16px">
<p><a style="color:#f2c21a" href="${htmlEsc(to)}">افتح الخاتم رقم ${no}</a></p>
</body></html>
`}
// A page Google can read for each ring, at khatam/N. It stays put instead of forwarding, because a page that
// forwards is treated as the page it forwards to. Barcodes and WhatsApp links keep using r/N, so they still open the full site.
const GRADE_ONE={nawa:"ناعم",wasat:"وسط",khashin:"خشن"};
function khatamPage(r,base){
  const no=r.id+1,url=base+"khatam/"+no,pic=base+(r.photo||(r.img?`photo/${r.img}.jpg`:"img/logo.jpg"));
  const vid=!r.sold&&(r.video||(r.img&&!r.photoOnly?`video/${r.img}.mp4`:""));
  const sale=!r.sold&&r.price!=null&&r.was>r.price&&(!r.saleEnd||Date.now()<r.saleEnd);
  const priceLine=r.sold?"تم البيع":r.price!=null?r.price+" ألف دينار":r.label||"السعر عند الطلب";
  const title=`${r.title} · خاتم عقيق يماني رقم ${no} | خواتم العقيق`;
  const desc=[`خاتم عقيق يماني خام رقم ${no}`,r.q&&("النقش: "+r.q),r.nq&&("نقش "+r.nq),r.sg&&("صياغة "+r.sg),r.sold?"مبيوع":priceLine,"التوصيل لكل محافظات العراق"].filter(Boolean).join(" · ");
  const specs=[["رقم الخاتم",no],["النقش",r.nq],["الصياغة",r.sg],["الحجم",GRADE_ONE[r.grade]],["القياس",r.size],["الحجر","عقيق يماني خام"],["التوصيل",r.sold?"":"داخل العراق 5,000 دينار على الطلب كله، وخارج العراق حسب الدولة"]].filter(x=>x[1]);
  const waText=["السلام عليكم، أريد أحجز هذا الخاتم:",`رقم الخاتم: ${no}`,`الاسم: ${r.title}`,`السعر: ${priceLine}`,`الصورة والفيديو والباركود: ${base}r/${no}`].join("\n");
  const offer=r.price!=null?{price:r.price*1000,priceCurrency:"IQD"}:r.label&&parseFloat(r.label)?{price:parseFloat(r.label),priceCurrency:"USD"}:null;
  const product={"@context":"https://schema.org","@type":"Product",name:r.title,image:pic,description:desc,sku:String(no),brand:{"@type":"Brand",name:"خواتم العقيق"},material:"عقيق يماني",
    ...(offer?{offers:{"@type":"Offer",url,...offer,...(sale&&r.saleEnd?{priceValidUntil:new Date(r.saleEnd).toISOString().slice(0,10)}:{}),availability:"https://schema.org/"+(r.sold?"SoldOut":"InStock"),itemCondition:"https://schema.org/NewCondition"}}:{})};
  return `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${htmlEsc(title)}</title>
<meta name="description" content="${htmlEsc(desc)}">
<link rel="canonical" href="${htmlEsc(url)}">${r.sold?`
<meta name="robots" content="noindex">`:""}
<meta property="og:title" content="${htmlEsc(title)}"><meta property="og:description" content="${htmlEsc(desc)}"><meta property="og:image" content="${htmlEsc(pic)}"><meta property="og:url" content="${htmlEsc(url)}"><meta property="og:type" content="product"><meta property="og:site_name" content="خواتم العقيق">
<script type="application/ld+json">${JSON.stringify(product).replace(/</g,"\\u003c")}</`+`script>
<link rel="icon" href="../img/emblem.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600&display=swap">
<style>
:root{color-scheme:dark}
*{box-sizing:border-box}
body{margin:0;background:#140908;color:#f4e9e1;font:16px/1.7 "IBM Plex Sans Arabic",Tahoma,sans-serif}
main{max-width:640px;margin:auto;padding:16px 16px 40px}
.top{display:flex;align-items:center;gap:10px;color:#f2c21a;text-decoration:none;font-weight:600;margin-bottom:14px}
.top img{width:40px;height:40px;border-radius:50%}
h1{font-size:24px;line-height:1.4;margin:0 0 12px}
.media{display:grid;gap:10px}
.media img,.media video{width:100%;height:auto;border-radius:14px;background:#1f0f0d;display:block}
.q{font-size:18px;margin:14px 0}
dl{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;margin:0 0 16px}
dt{color:#b59c90}dd{margin:0}
.price{font-size:22px;font-weight:600;color:#f2c21a;margin:0 0 16px}
.price s{color:#b59c90;font-size:16px;font-weight:400;margin-inline-start:8px}
.price .off{color:#fff;background:#c8102e;border-radius:6px;padding:0 8px;font-size:14px;margin-inline-start:8px}
.sold{color:#ff8a8a}
.btn{display:flex;justify-content:center;align-items:center;min-height:48px;border-radius:12px;font-weight:600;text-decoration:none;margin-bottom:10px}
.wa{background:#25d366;color:#04210f}.go{background:#f2c21a;color:#1a1000}.all{border:1px solid #4a2a24;color:#f4e9e1}
</style></head><body><main>
<a class="top" href="../"><img src="../img/emblem.jpg" alt="">خواتم العقيق</a>
<h1>${htmlEsc(r.title)}</h1>
<div class="media"><img src="${htmlEsc(pic)}" alt="${htmlEsc("خاتم عقيق يماني: "+r.title)}" width="960" height="1200">${vid?`
<video src="../${htmlEsc(vid)}" controls playsinline preload="none" poster="${htmlEsc(pic)}"></video>`:""}</div>
${r.q?`<p class="q">${htmlEsc(r.q)}</p>`:""}
<dl>${specs.map(([k,v])=>`<dt>${k}</dt><dd>${htmlEsc(v)}</dd>`).join("")}</dl>
${r.sold?`<p class="price sold">تم البيع</p>`:`<p class="price" id="price"${sale&&r.saleEnd?` data-ends="${r.saleEnd}" data-was="${r.was}"`:""}>${htmlEsc(priceLine)}${sale?`<s>${r.was} ألف</s><span class="off">تخفيض</span>`:""}</p>
<a class="btn wa" href="https://wa.me/9647757685741?text=${encodeURIComponent(waText)}" target="_blank" rel="noopener">حجز عبر واتساب</a>`}
<a class="btn go" href="../#ring=${no}">افتح الخاتم بالموقع</a>
<a class="btn all" href="../">شوف كل الخواتم</a>
</main>${sale&&r.saleEnd?`
<script>(function(){var p=document.getElementById("price");if(p&&Date.now()>=+p.dataset.ends)p.textContent=p.dataset.was+" ألف دينار"})()</`+`script>`:""}
</body></html>
`}
// The list Google reads to find every ring for sale.
function sitemapXml(rows,base){
  const urls=[base,...rows.filter(r=>!r.sold).map(r=>base+"khatam/"+(r.id+1))];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u=>`  <url><loc>${htmlEsc(u)}</loc></url>`).join("\n")}
</urlset>
`}
if(typeof module!=="undefined")module.exports={pageHtml,ringPage,khatamPage,sitemapXml};

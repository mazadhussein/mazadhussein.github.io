// Builds the site's generated pages: the main page around the catalogue, and one small page per ring.
// WhatsApp reads a ring page's preview tags, and a visitor is sent straight on to that ring on the main site.
const htmlEsc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ringPriceText=r=>r.price!=null?r.price+" ألف":r.label||"السعر عند الطلب";
function pageHtml(rows){
  const data=rows.map(r=>JSON.stringify(r).replace(/</g,"\\u003c")).join(",\n");
  return `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>خواتم العقيق</title>
<meta name="description" content="عقيق يماني خام، نقش يدوي، وصياغة فضة بحرينية. نرسل لكل محافظات العراق.">
<meta property="og:title" content="خواتم العقيق"><meta property="og:description" content="عقيق يماني خام، نقش يدوي، وصياغة فضة بحرينية."><meta property="og:image" content="img/logo.jpg"><meta property="og:type" content="website">
<link rel="icon" href="img/emblem.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Reem+Kufi:wght@500;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap">
<link rel="stylesheet" href="site.css"></head><body>
<div id="app"></div>
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
<meta property="og:title" content="${htmlEsc(title)}"><meta property="og:description" content="${htmlEsc(desc)}">
<meta property="og:image" content="${htmlEsc(base+pic)}"><meta property="og:url" content="${htmlEsc(base+"r/"+no)}"><meta property="og:type" content="website"><meta property="og:site_name" content="خواتم العقيق">
<meta name="twitter:card" content="summary_large_image">
<script>location.replace(${JSON.stringify(to)})</`+`script>
</head><body style="background:#140908;color:#f4e9e1;font-family:Tahoma,sans-serif;text-align:center;padding:40px 16px">
<p><a style="color:#f2c21a" href="${htmlEsc(to)}">افتح الخاتم رقم ${no}</a></p>
</body></html>
`}
if(typeof module!=="undefined")module.exports={pageHtml,ringPage};

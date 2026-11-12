(function(){
const S=window.SITE,R=document.body.dataset.root||"",here=location.pathname.split("/").pop()||"index.html";
const $=(q,c)=>(c||document).querySelector(q),$$=(q,c)=>[...(c||document).querySelectorAll(q)];
const wa=(m)=>`https://wa.me/${S.whatsapp}?text=${encodeURIComponent(m||"Hello Sephann, I would like to enquire.")}`;
const mob=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),enc=encodeURIComponent;
// phones open the default email app; computers open Gmail in a new tab
const mail=(s,b)=>mob?`mailto:${S.email}?subject=${enc(s||"Enquiry from website")}&body=${enc(b||"")}`:`https://mail.google.com/mail/?view=cm&fs=1&to=${S.email}&su=${enc(s||"Enquiry from website")}&body=${enc(b||"")}`;
const openMail=(s,b)=>{if(mob)openMail(s,b);else window.open(mail(s,b),"_blank")};
const ICON={
 facebook:'<svg viewBox="0 0 24 24"><path stroke="none" d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
 instagram:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff"/></svg>',
 tiktok:'<svg viewBox="0 0 24 24"><path stroke="none" d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-1.8-2.5V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z"/></svg>',
 whatsapp:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.4-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.200 1 2.1 1.3 2.400 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.900.9c.3.1.5.2.5.3.1.1.1.6-.1 1.200z"/></svg>'};
const link=s=>`<a ${s.parent?'style="padding-left:28px;font-size:.85rem"':''} href="${R}services/${s.slug}.html">${s.parent?"– ":""}${s.name}</a>`;
const ordered=g=>S.services.filter(s=>s.group===g&&!s.parent).flatMap(s=>[s,...S.services.filter(c=>c.parent===s.slug)]);
const groups=[...new Set(S.services.map(s=>s.group))];
const GN={"Ready-made":"Ready-made (imported)","Made by us":"Custom tailoring","Home & branding":"Home & branding"};
const socials=()=>["tiktok","instagram","facebook"].map(k=>`<a href="${S.social[k]||"#"}" ${S.social[k]?'target="_blank" rel="noopener"':'title="Link coming soon"'} aria-label="${k}">${ICON[k]}</a>`).join("");
// header + footer
const act=(f)=>here===f?"active":"";
$("#site-header").innerHTML=`<div class="wrap bar"><a class="brand" href="${R}index.html"><img src="${R}images/logo/logo-main.png" alt="Sephann Enterprises" onerror="this.replaceWith('Sephann')"></a>
<button class="burger" aria-label="Menu"><span></span><span></span><span></span></button><nav><ul>
<li><a class="${act("index.html")}" href="${R}index.html">Home</a></li><li><a class="${act("about.html")}" href="${R}about.html">About</a></li>
<li class="has-dd"><a class="${location.pathname.includes("/services/")||here==="services.html"?"active":""}" href="${R}services.html">Services ▾</a><div class="dd">${groups.map(g=>`<h4>${GN[g]}</h4>`+ordered(g).map(link).join("")).join("")}</div></li>
<li><a class="${act("gallery.html")}" href="${R}gallery.html">Gallery</a></li><li><a class="${act("clients.html")}" href="${R}clients.html">Clients</a></li><li><a class="${act("reviews.html")}" href="${R}reviews.html">Reviews</a></li>
<li><a class="${act("blog.html")}" href="${R}blog.html">Blog</a></li><li><a class="${act("contact.html")}" href="${R}contact.html">Contact</a></li>
<li><a class="nav-cta" data-wa href="#">WhatsApp</a></li></ul></nav></div>`;
$("#site-footer").innerHTML=`<footer><div class="wrap fgrid"><div><a class="brand" href="${R}index.html"><img src="${R}images/logo/logo-main.png" alt="Sephann Enterprises" onerror="this.replaceWith('Sephann')"></a><p>${S.tagline}. A fashion design house based in ${S.location}.</p><div class="socials">${socials()}</div></div>
<div><h4>Explore</h4><ul><li><a href="${R}about.html">About</a></li><li><a href="${R}services.html">Services</a></li><li><a href="${R}gallery.html">Gallery</a></li><li><a href="${R}clients.html">Clients</a></li><li><a href="${R}blog.html">Blog</a></li><li><a href="${R}reviews.html">Reviews</a></li><li><a href="${R}faq.html">FAQ</a></li><li><a href="${R}contact.html">Contact</a></li></ul></div>
<div><h4>Contact us</h4><ul><li>Email: <a data-mail-text href="#"></a></li><li>Phone &amp; WhatsApp: <a href="tel:${S.phone}">${S.phone}</a></li><li>${S.address}</li><li>Plus code: ${S.plusCode}</li></ul></div></div>
<div class="wrap copy">© ${new Date().getFullYear()} ${S.name}. All rights reserved. · <a href="${R}privacy.html">Privacy &amp; cookies</a></div></footer><a class="fab" data-wa href="#" aria-label="WhatsApp">${ICON.whatsapp}</a>`;
$(".burger").onclick=()=>$("nav").classList.toggle("open");
$$("[data-wa]").forEach(a=>{a.href=wa(a.dataset.msg);a.target="_blank";a.rel="noopener"});
$$("[data-mail]").forEach(a=>{a.href=mail(a.dataset.msg);if(!mob){a.target="_blank";a.rel="noopener"}});
$$("[data-copy]").forEach(b=>b.onclick=()=>{const done=()=>{b.textContent="Copied!";setTimeout(()=>b.textContent="Copy",1800)};
 if(navigator.clipboard)navigator.clipboard.writeText(S.email).then(done,()=>{});else{const t=document.createElement("textarea");t.value=S.email;document.body.appendChild(t);t.select();try{document.execCommand("copy")}catch(e){}t.remove();done()}});
$$("[data-loc-line]").forEach(e=>e.textContent="Visit us: "+S.address);
$$("[data-mail-text]").forEach(a=>{a.href=mail();a.textContent=S.email;if(!mob){a.target="_blank";a.rel="noopener"}});
$$("[data-tel-text]").forEach(a=>{a.href="tel:"+S.phone;a.textContent=S.phone});
$$("[data-loc]").forEach(e=>e.textContent=S.location);
$$("[data-addr]").forEach(e=>e.innerHTML=S.address+"<br>Plus code: <b>"+S.plusCode+"</b>");
// renderers
const svcCard=s=>`<a class="card reveal" href="${R}services/${s.slug}.html"><img src="${R}images/services/${s.slug}/${s.slug}-card-main.jpg" alt="${s.name}" loading="lazy"><div class="body"><h3>${s.name}</h3><p>${s.tagline}</p></div></a>`;
const post=p=>`<article class="card post reveal"><img src="${R}${p.cover}" alt="${p.title}" loading="lazy"><div class="body"><time>${p.date}</time><h3>${p.title}</h3><p>${p.excerpt}</p><details><summary>Read more</summary>${p.body.map(t=>`<p>${t}</p>`).join("")}</details></div></article>`;
$$("[data-render]").forEach(el=>{const t=el.dataset.render,lim=+el.dataset.limit||999,slug=el.dataset.slug;let h="";
 if(t==="service-cards")h=S.services.filter(s=>!s.parent).map(svcCard).join("");
 if(t==="service-groups")h=groups.map(g=>`<h3 class="group-title">${GN[g]}</h3><div class="grid cols-4">${S.services.filter(s=>s.group===g&&!s.parent).map(svcCard).join("")}</div>`).join("");
 if(t==="clients")h=S.clients.slice(0,lim).map(c=>`<div class="logo reveal"><img src="${R}${c.logo}" alt="${c.name}" loading="lazy"></div>`).join("");
 if(t==="posts")h=S.posts.slice(0,lim).map(post).join("");
 if(t==="products")h=S.products[slug].map(p=>`<div class="card reveal"><img src="${R}${p.img}" alt="${p.name}" style="aspect-ratio:3/4" loading="lazy"><div class="body"><h3>${p.name}</h3><span class="origin">${p.origin?"Imported from "+p.origin:"Imported"}</span><p style="margin-top:10px"><a class="btn btn-wa" style="padding:8px 18px" target="_blank" href="${wa("Hello Sephann, I would like to enquire about: "+p.name)}">Enquire on WhatsApp</a></p></div></div>`).join("");
 if(t==="svc-gallery")h=S.galleries[slug].slice(0,lim).map(src=>`<img class="reveal" src="${R}${src}" alt="Sephann work" loading="lazy">`).join("");
 if(t==="related")h=S.services.filter(s=>s.slug!==slug&&!s.parent).slice(0,3).map(svcCard).join("");
 if(t==="children")h=S.services.filter(s=>s.parent===slug).map(svcCard).join("");
 if(t==="stats")h=S.stats.map(s=>`<div class="stat reveal"><b data-count="${s.n}" data-suffix="${s.suffix||""}">0${s.suffix||""}</b><span>${s.label}</span></div>`).join("");
 if(t==="reviews")h=S.reviews.length?S.reviews.slice(0,lim).map(r=>`<div class="card pad review reveal"><div class="stars">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div><p>${r.text}</p><p class="who">${r.name}${r.service?" · "+r.service:""}</p></div>`).join(""):`<div class="card pad center" style="grid-column:1/-1"><h3>Be the first to leave a review</h3><p>Worked with us? We would love to hear about your experience.</p><p style="margin-top:14px"><a class="btn" href="${R}reviews.html">Leave a review</a></p></div>`;
 if(t==="map"){let u=S.mapEmbedUrl||"";const mm=u.match(/src="([^"]+)"/);if(mm)u=mm[1];const dir="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent((S.plusCode?S.plusCode+" ":"")+"Nairobi, Kenya");
  h=u?`<div class="map"><iframe src="${u}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" title="Map to Sephann Enterprises"></iframe></div><p class="center" style="margin-top:16px"><a class="btn" target="_blank" rel="noopener" href="${dir}">Get directions</a></p>`
  :`<div class="card pad center map-ph"><svg viewBox="0 0 24 24" width="52" height="52" fill="#9B3B74"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg><h3>${S.location}</h3><p>${S.address}<br>Plus code: <b>${S.plusCode}</b></p><p style="margin-top:14px"><a class="btn" target="_blank" rel="noopener" href="${dir}">Open in Google Maps</a></p></div>`}
 if(t==="socials")h=socials();
 if(t==="gallery-filters"){h=["All",...new Set(S.gallery.map(g=>g.tag))].map((x,i)=>`<button class="${i?"":"on"}" data-tag="${x}">${x}</button>`).join("")}
 if(t==="gallery")h=S.gallery.map(g=>`<img class="reveal" data-tag="${g.tag}" src="${R}${g.src}" alt="${g.alt}" loading="lazy">`).join("");
 el.innerHTML=h});
$$(".filters button").forEach(b=>b.onclick=()=>{$$(".filters button").forEach(x=>x.classList.toggle("on",x===b));$$(".gallery img").forEach(i=>i.style.display=(b.dataset.tag==="All"||i.dataset.tag===b.dataset.tag)?"":"none")});
$$("select[name=service]").forEach(sel=>S.services.forEach(s=>sel.add(new Option(s.name))));
$$("form[data-form]").forEach(f=>{let via="mail";$$("button",f).forEach(b=>b.onclick=()=>via=b.dataset.via);
 f.onsubmit=e=>{e.preventDefault();const d=new FormData(f),m=`Name: ${d.get("name")}\nContact: ${d.get("contact")}\nService: ${d.get("service")}\n\n${d.get("msg")}`;
 if(via==="wa")window.open(wa(m),"_blank");else openMail("Website enquiry: "+d.get("service"),m)}});
// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(e=>io.observe(e));

// review form
$$("form[data-review]").forEach(f=>{let via="mail";$$("button",f).forEach(b=>b.onclick=()=>via=b.dataset.via);
 f.onsubmit=e=>{e.preventDefault();const d=new FormData(f),m=`New review\nName: ${d.get("name")}\nService: ${d.get("service")}\nRating: ${d.get("rating")}/5\n\n${d.get("msg")}\n\nI agree that Sephann Enterprises may show my name and review on its website.`;
 if(via==="wa")window.open(wa(m),"_blank");else openMail("New review from "+d.get("name"),m)}});
// count-up numbers
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const b=e.target,n=+b.dataset.count,suf=b.dataset.suffix||"";
 if(matchMedia("(prefers-reduced-motion: reduce)").matches){b.textContent=n.toLocaleString()+suf;return}
 const t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1400);b.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString()+suf;if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.4});
$$(".stat b").forEach(b=>cio.observe(b));
// photo viewer (lightbox)
if(!window.__lb){window.__lb=1;
 const lb=document.createElement("div");lb.className="lightbox";lb.hidden=true;
 lb.innerHTML='<button class="lb-x" aria-label="Close">×</button><button class="lb-p" aria-label="Previous">‹</button><img alt=""><button class="lb-n" aria-label="Next">›</button>';document.body.appendChild(lb);
 let list=[],i=0;const im=lb.querySelector("img");
 const show=n=>{i=(n+list.length)%list.length;im.src=list[i].src;im.alt=list[i].alt};
 const close=()=>{lb.hidden=true;document.body.style.overflow=""};
 document.addEventListener("click",e=>{const t=e.target;
  if(t.matches&&t.matches(".gallery img,.mini img,.logos img,[data-render=products] img")){const box=t.closest("[data-render]");list=[...box.querySelectorAll("img")].filter(x=>x.offsetParent);i=list.indexOf(t);show(i);lb.hidden=false;document.body.style.overflow="hidden";return}
  if(t===lb||t.classList.contains("lb-x"))close();if(t.classList.contains("lb-p"))show(i-1);if(t.classList.contains("lb-n"))show(i+1)});
 document.addEventListener("keydown",e=>{if(lb.hidden)return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(i-1);if(e.key==="ArrowRight")show(i+1)})}
// cookies
let ck=null;try{ck=localStorage.getItem("sephann-cookies")}catch(x){}
const loadGA=()=>{if(!S.analyticsId||window.__ga)return;window.__ga=1;const s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+S.analyticsId;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",S.analyticsId)};
if(ck==="accepted")loadGA();
if(!ck&&!document.querySelector(".cookie")){const c=document.createElement("div");c.className="cookie";c.setAttribute("role","dialog");c.setAttribute("aria-label","Cookies");
 c.innerHTML=`<p>We use cookies to remember your choice and, if you accept, to understand how visitors use our site so we can improve it. <a href="${R}privacy.html">Privacy &amp; cookies</a></p><div><button class="btn" data-c="accepted">Accept</button> <button class="btn btn-outline" data-c="declined">Decline</button></div>`;
 c.onclick=e=>{const v=e.target.dataset&&e.target.dataset.c;if(!v)return;try{localStorage.setItem("sephann-cookies",v)}catch(x){}c.remove();if(v==="accepted")loadGA()};document.body.appendChild(c)}
})();

SEPHANN ENTERPRISES WEBSITE: how to edit
1. Open index.html in a browser (double-click) to preview.
2. data/site.js: email, phone, WhatsApp, social links (paste your TikTok, Instagram, Facebook links), gallery photos, clients and blog posts.
3. css/variables.css: brand colours and fonts.
4. Photos: replace a file in images/ with your own using the SAME name. To add more photos, drop them in the folder and add one line in data/site.js (gallery or galleries).
5. images/logo/logo-main.png was cut from your screenshot: replace it with your original logo file (same name).

MORE THINGS YOU CAN EDIT IN data/site.js
- "stats": the numbers on the home and About pages (years, specialists, projects, happy clients).
- "reviews": paste approved reviews here, for example {"name":"Jane","rating":5,"service":"School Uniforms","text":"Great work"}.
  Visitors send reviews by email or WhatsApp; you choose which to publish.
- "analyticsId": add a Google Analytics ID (G-XXXXXXX) to start visitor statistics. It only loads after a visitor accepts cookies.
- Click any photo under "Our work", Gallery or Clients to view it in full. No setup needed.
- privacy.html is a template. Please have it reviewed before launch.

EMAIL AND MAP
- Email now: sephannenterprises@gmail.com (change it in data/site.js). On computers, email buttons open Gmail in a new tab; on phones they open the phone's email app. There is also a Copy button on the Contact page.
- Map: open Google Maps, search for your shop, choose Share > Embed a map, copy the link (or the whole iframe code) and paste it into "mapEmbedUrl" in data/site.js. Until then, a button opens Kahawa Sukari in Google Maps.

# Sephann Enterprises Website

A fast, mobile-friendly information website for **Sephann Enterprises**, a fashion design house in Kahawa Sukari, Nairobi, Kenya. *The best look anytime anywhere.*

Built with plain **HTML, CSS and JavaScript**. There is no backend, no database and no build step, so it is cheap to host and easy to maintain.

## What is on the website

22 pages:

| Area | Pages |
|---|---|
| Main | Home, About, Services, Gallery, Clients, Reviews, Blog, Contact, FAQ, Privacy & Cookies |
| Ready-made (imported) | Men's Wear, Women's Wear |
| Custom tailoring | School Uniforms, Corporate & Staff Uniforms, Special Event Attire, Men's Tailoring, Women's Tailoring, Children's Wear (with Girls' Outfits and Boys' Outfits) |
| Home & branding | Curtains & Sheers, Embroidery |

Features:
- Services menu with groups, and a slide-out menu on phones
- Photo galleries where every photo opens full size
- Clients page with logos
- Reviews page: visitors send reviews by email or WhatsApp, and you publish the ones you approve
- Enquiry forms on every service page, sent by email or WhatsApp
- Animated numbers: years of experience, specialists, projects, happy clients
- Cookie banner (Accept or Decline) and a Privacy & Cookies page
- Map section for the shop location
- Floating WhatsApp button, TikTok, Instagram and Facebook icons

## Folder structure

```
sephann-enterprise/
├── index.html, about.html, services.html, gallery.html, clients.html,
│   reviews.html, blog.html, contact.html, faq.html, privacy.html
├── services/              one page per service (12 pages)
├── css/
│   ├── variables.css      brand colours and fonts
│   ├── main.css           header, footer, buttons
│   └── pages.css          page layouts
├── js/
│   └── main.js            menu, forms, gallery viewer, cookies
├── data/
│   └── site.js            contact details, social links, gallery, clients, reviews, blog
└── images/                all photos, in folders named after each page
```

## Quick start

Open `index.html` in a browser. Nothing to install.

## How to edit (no coding needed)

**Contact details, social links, map**: open `data/site.js`.
- `email`, `phone`, `whatsapp`, `location`, `address`, `plusCode`
- `social`: paste your TikTok, Instagram and Facebook links
- `mapEmbedUrl`: in Google Maps choose Share > Embed a map, then paste the link or the whole code

**Photos**: replace a file in `images/` with your own using the **same file name**. Names follow this pattern, so you always know where a photo belongs:

`page-section-description-number`, for example `school-uniforms-hero-main.jpg`, `embroidery-gallery-04.jpg`, `clients-logo-abc-school.png`

To add more photos, drop the file into the folder and add one line in `data/site.js` (`gallery` for the main gallery, `galleries` for a service page).

**Clients**: add or remove an entry in `clients` in `data/site.js`, and add or delete the logo in `images/clients/`.

**Reviews**: paste approved reviews into `reviews`, for example `{"name":"Jane","rating":5,"service":"School Uniforms","text":"Great work"}`.

**Numbers on the home and About pages**: edit `stats`.

**Blog posts**: add an entry to `posts`.

**Brand colours and fonts**: edit `css/variables.css`. Every page updates.

**Visitor statistics (optional)**: put a Google Analytics ID in `analyticsId`. It only loads for visitors who accept cookies.

## Email and enquiries

Enquiry and review forms send through the visitor's email or WhatsApp, so no server is needed. On computers the email buttons open Gmail in a new tab, and on phones they open the phone's email app. Each form also has a Copy button for the email address as a backup.

## Put it online

Any free static host works:
- **GitHub Pages**: push this folder to a repository, then Settings > Pages > deploy from the main branch.
- **Netlify**: drag the folder onto app.netlify.com/drop.

Then connect a domain such as sephann.com and add the site to Google Search Console.

## Before launch checklist

- Replace placeholder pictures (coloured boxes) with real photos
- Replace `images/logo/logo-main.png` with the original logo file
- Add the real social media links and the map link
- Check the service descriptions and FAQ answers
- Confirm the figure for specialists on the home page
- Have `privacy.html` reviewed
- Send a test enquiry and a test review to check they arrive

## Notes

- The Playfair Display and Poppins fonts load from Google Fonts, so they need an internet connection. Georgia and Arial are used as backups.
- Show client names, logos and customer photos only with permission.

## Credits

Built by Netnote Systems for Sephann Enterprises.
Contact: sephannenterprises@gmail.com | +254 110 618 535

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

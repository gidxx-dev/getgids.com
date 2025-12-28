# Gideons Piano — Static Portfolio (HTML / CSS / JS)

This is a complete static website you can run locally in the browser. Drop your photo and resume into the `assets/` folder and open `index.html` in any browser.

Files included:
- `index.html` — main site (Home, About, Experience, Skills, Education, Certifications, Contact)
- `styles.css` — responsive styles (desktop-first, mobile-friendly)
- `script.js` — interactions: mobile menu, smooth scroll, contact form handling, toast messages
- `assets/` — add your files here:
  - `assets/gideon_photo.jpg` — your profile photo (replace)
  - `assets/Gideon_Piano_Resume.pdf` — your resume (replace)

Quick start
1. Create an `assets` folder next to `index.html`.
2. Add your photo `assets/gideon_photo.jpg` and resume `assets/Gideon_Piano_Resume.pdf`.
3. Open `index.html` in a browser (double-click or serve via a local static server).

Enable real contact form submissions
- By default the site will use a mailto fallback. To submit to a server:
  1. Sign up at Formspree (https://formspree.io) or create any HTTPS endpoint that accepts POST JSON.
  2. Set the endpoint URL in `script.js` at the top: 
     `const FORM_ENDPOINT = "https://formspree.io/f/your-id";`
  3. Save and reload the page. The contact form will POST JSON to the endpoint.

Notes & recommendations
- Place assets in the `assets/` folder so links work without bundling.
- If you host on Netlify and want Netlify Forms, I can provide the required hidden inputs and instructions.
- If you want spam protection, I can add a honeypot field or integrate reCAPTCHA (requires server-side verification for best results).
- I used simple, accessible markup and minimal JS so the site is fast and easy to host (GitHub Pages, Netlify, Vercel, or any static host).

If you'd like, I can:
- Wire the contact form to Formspree and test it for you (I will need the Formspree ID or permission to create the form).
- Prepare a one-click deployment for Netlify or Vercel.
- Add small copy edits for the About or Experience sections tailored to job applications.

# 👑 Appa's 50th Birthday Celebration Website

A single-page, mobile-friendly birthday website built with pure **HTML, CSS, and JavaScript** (no frameworks, no build step). Built with love by **Sivesh** for **Sridhar (Appa)** on his 50th Birthday (3rd October).

---

## 🌐 Live Website Links

- **GitHub Repository**: **[https://github.com/sivesh230707/appa-50th-birthday](https://github.com/sivesh230707/appa-50th-birthday)**
- **GitHub Pages (Free Hosting)**: **[https://sivesh230707.github.io/appa-50th-birthday/](https://sivesh230707.github.io/appa-50th-birthday/)**
- **Cloudflare Live Tunnel**: **[https://certification-marcus-receptors-founded.trycloudflare.com](https://certification-marcus-receptors-founded.trycloudflare.com)**

*(All links are publicly accessible from any smartphone, tablet, or desktop worldwide with no login or setup required).*

---

## 💻 Local Viewing Options
Double-click `index.html` in this folder to open it directly in Google Chrome, Microsoft Edge, or Safari.

### Option 2: Run Local Server (To open on phones over Wi-Fi)
1. Open PowerShell or Terminal in this folder:
   ```bash
   python -m http.server 8080
   ```
2. On your PC, open: `http://localhost:8080`
3. On your phone (connected to the same Wi-Fi), open: `http://10.124.14.14:8080`

---

## 🌐 3 Steps to Host Free & Share on WhatsApp

You can put this live in **less than 2 minutes** so all relatives, friends, and family can open it from anywhere in the world!

### Option A: Drag & Drop on Netlify (Easiest - 60 seconds)
1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)** (no credit card needed).
2. Simply **drag and drop this entire folder** (`appa-50th-birthday`) into the browser window.
3. Done! Netlify immediately provides a free live link like `https://appa-50th-birthday.netlify.app`.

### Option B: Free GitHub Pages
1. Create a new GitHub repository named `appa-50th-birthday`.
2. Push or upload these files (`index.html`, `style.css`, `script.js`, `images/`, `audio/`).
3. In GitHub repo **Settings** > **Pages**, choose the `main` branch and click **Save**.
4. Your site will be live at `https://<your-username>.github.io/appa-50th-birthday/`.

---

## 📲 Ready-to-Send WhatsApp Message Template

Copy and paste this message into your family WhatsApp groups:

```text
🎉🎂 INIYA 50-VADHU PIRANDHA NAAL VAZHTHUKKAL APPA! 🎂🎉
இனிய 50வது பிறந்த நாள் வாழ்த்துக்கள் அப்பா! ❤️

Today our superhero Sridhar turns 50!
We built a special interactive celebration website for Appa with golden memories, his life story, and a surprise gift 🎁

👉 Tap here to open and celebrate with Appa:
https://certification-marcus-receptors-founded.trycloudflare.com

💡 Highlights:
• 📸 Golden memories and photos
• 📜 The story of Appa's inspiring journey
• 💖 50 Reasons We Love You
• 💌 A personal letter from Sivesh

With lots of love,
Sivesh & Family ❤️
```

---

## ✏️ How to Edit Details (Super Simple!)

All customizable text is located in **`script.js`** at the very top inside `const CONFIG = { ... }`:
- **Names & Dates**: Change `fatherName`, `nickname`, or `birthdayDate`.
- **Milestones**: Edit the `timeline` array to add or modify years and events.
- **Captions**: Edit the `gallery` array for each photo.
- **50 Reasons**: Edit or replace any of the 50 reasons inside the `reasons` array.
- **Letter**: Edit the text inside `letter.body`.
- **Music**: Place your favorite Tamil song (e.g. Ilaiyaraaja or AR Rahman classic) in `audio/music.mp3` to replace the placeholder tune.

---

## 🎨 Design Features
- **Festive South Indian Royal Theme**: Deep Maroon (`#5C0715`), Radiant Gold (`#D4AF37`), and Warm Ivory Cream.
- **Traditional Elements**: Decorative Kolam motifs and Gopuram temple borders.
- **Animations**: Soft floating balloons on hero, zero-dependency confetti bursts, and interactive fireworks for the surprise.
- **Music**: Background celebration music with soft pentatonic chime synthesizer fallback if audio is muted.
- **Wishes Wall**: Interactive sticky notes saved in `localStorage` so notes remain saved across page refreshes.
- **100% Responsive**: Tailored for mobile phones, tablets, and laptops.

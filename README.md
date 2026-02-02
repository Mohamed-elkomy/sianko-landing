Sianko Landing Page
📌 Project Overview

Sianko is a mobile application for booking home and commercial maintenance services in Egypt.
This repository contains the official static landing page for the Sianko app, designed to present services, features, and provide download links for Android and iOS.

The landing page supports Arabic (RTL) layout and focuses on performance, accessibility, and clean modular architecture.

🛠 Technologies Used

HTML5 – Semantic & accessible markup

CSS3 – Modular architecture with variables and components

JavaScript (Vanilla) – Interactions and UI behavior

Bootstrap 4 – Responsive grid system

WOW.js – Scroll-based animations

Animate.css – Animation utilities

Font Awesome – Icon set

Custom Arabic Font – Sky Font (.ttf / .woff2)

RTL Support – Fully optimized for Arabic layout

📁 Project Structure
sianko-landing/
│
├── index.html # Home / Landing page
├── contact.html # Contact page
├── privacypolicy.html # Privacy policy page
├── term.html # Terms & conditions
├── README.md # Documentation
│
└── assets/
├── css/
│ ├── all.css # Global compiled styles
│ ├── main.css # Main entry stylesheet
│ ├── critical.css # Critical above-the-fold CSS
│ ├── bootstrap.min.css
│ ├── animate.css
│ ├── font-awesome.min.css
│ ├── Responsive.css # Mobile & tablet overrides
│ │
│ ├── core/ # Core system styles
│ │ ├── reset.css
│ │ ├── variables.css
│ │ ├── typography.css
│ │ └── layout.css
│ │
│ ├── components/ # Reusable UI components
│ │ ├── navbar.css
│ │ ├── header.css
│ │ ├── about.css
│ │ ├── features.css
│ │ ├── cards.css
│ │ ├── showcase.css
│ │ ├── download.css
│ │ ├── footer.css
│ │ └── loader.css
│ │
│ └── pages/ # Page-specific styles
│ ├── home.css
│ ├── contact.css
│ └── privacy.css
│
├── js/
│ ├── main.js # Core JS logic
│ ├── wow.min.js
│ └── components/
│ └── app-showcase.js # Screenshots / showcase logic
│
├── fonts/
│ ├── sky.ttf
│ └── sky.woff2
│
├── images/
│ ├── brmja.png
│ └── header/
│ ├── banar1.jpeg
│ ├── banar2.jpeg
│ ├── googleplay.png
│ ├── applestore.png
│ ├── home-screen.png
│ ├── services-grid.png
│ ├── orders-list.png
│ ├── profile-screen.png
│ └── Splash.png
│
└── webfonts/ # Font Awesome fonts

✨ Key Features

✅ Fully Responsive (Mobile / Tablet / Desktop)

✅ RTL & Arabic-first Design

✅ Component-based CSS Architecture

✅ Optimized Performance

Critical CSS

Lazy-loaded images

Minified assets

✅ Accessible HTML

Semantic tags

ARIA labels

✅ SEO Ready

Meta tags

Clean markup

✅ Smooth Animations

Scroll-based effects

Progressive enhancement

📄 Pages Included

Home (index.html)

Contact Us (contact.html)

Privacy Policy (privacypolicy.html)

Terms & Conditions (term.html)

▶️ How to Run Locally

Clone or download the repository

Open the project folder

Open index.html in any modern browser

⚠️ No build tools, Node.js, or server required
This is a pure static website

🚀 Performance & Best Practices

Critical CSS for fast first paint

Modular CSS (Core / Components / Pages)

RTL-safe layout

Font preloading with font-display: swap

JavaScript loaded after content

No framework lock-in

🔮 Possible Future Enhancements

PWA support (offline + installable)

Multi-language support (EN / AR)

Analytics & conversion tracking

Live chat integration

Testimonials & ratings section

# Sianko Landing Page

## Project Description

Sianko is a comprehensive mobile application for booking home and commercial maintenance services in Egypt. This landing page serves as the official web presence for the app, providing users with information about available services, features, and download links for both Android and iOS platforms. The app connects customers with certified technicians for services including plumbing, carpentry, electrical work, air conditioning, painting, and appliance repair.

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom styling with CSS variables, responsive design
- **JavaScript**: Interactive functionality and animations
- **Bootstrap 4**: Responsive grid system and components
- **jQuery 3.2.1**: DOM manipulation and event handling
- **Wow.js**: Scroll-triggered animations
- **Animate.css**: CSS animation library
- **Font Awesome**: Icon library
- **Custom Font**: Sky font for Arabic typography

## Folder Structure

```
sianko-landing/
├── index.html                 # Main landing page
├── privacypolicy.html         # Privacy policy page
├── returnPolicy.html          # Return and refund policy page
├── term.html                  # Terms and conditions page
├── assets/
│   ├── css/
│   │   ├── all.css           # Consolidated styles
│   │   ├── animate.css       # Animation library
│   │   ├── bootstrap.min.css # Bootstrap framework
│   │   ├── critical.css      # Critical above-the-fold styles
│   │   ├── font-awesome.min.css # Icon library
│   │   ├── screenshots.css   # Screenshot gallery styles
│   │   ├── showcase.css      # Product showcase styles
│   │   └── style.css         # Main custom styles
│   ├── images/
│   │   └── header/           # App screenshots and assets
│   ├── js/
│   │   ├── bootstrap.bundle.min.js # Bootstrap JavaScript
│   │   ├── jquery-3.2.1.min.js     # jQuery library
│   │   ├── main.js           # Custom JavaScript functionality
│   │   └── wow.min.js        # Animation library
│   └── webfonts/             # Font Awesome web fonts
└── README.md                 # Project documentation
```

## Features

- **Responsive Design**: Fully responsive layout that works on all devices using Bootstrap grid system
- **RTL Support**: Right-to-left layout optimized for Arabic language and RTL reading direction
- **Performance Optimized**: Critical CSS inlining, resource preloading, lazy image loading, and deferred JavaScript execution
- **Accessibility**: Skip links, proper ARIA labels, semantic HTML, and keyboard navigation support
- **SEO Ready**: Meta tags, structured data (JSON-LD), and semantic markup for search engine optimization
- **Interactive Elements**: Smooth scrolling, scroll-to-top button, and animated content reveals
- **Cross-Platform**: Download links for both Google Play Store and Apple App Store

## Pages Included

- **Home (index.html)**: Main landing page with hero section, feature showcase, app screenshots, and download links
- **Privacy Policy (privacypolicy.html)**: Detailed privacy policy in Arabic
- **Return Policy (returnPolicy.html)**: Return and refund policy terms
- **Terms and Conditions (term.html)**: Legal terms and conditions for app usage

## How to Run the Project Locally

1. Clone or download the project repository to your local machine
2. Navigate to the project directory
3. Open `index.html` in your preferred web browser
4. The landing page will load with all assets and functionality

No build process or server setup is required - this is a static HTML/CSS/JS website.

## Performance & Best Practices

- **Critical CSS**: Above-the-fold styles are inlined in the HTML head for faster initial render
- **Resource Optimization**: CSS and JavaScript files are preloaded and loaded asynchronously where possible
- **Image Optimization**: Images use lazy loading with `loading="lazy"` and appropriate `decoding="async"`
- **Font Loading**: Custom font is preloaded with `font-display: swap` to prevent layout shift
- **Minified Assets**: All CSS and JS files are minified for production use
- **Semantic HTML**: Proper use of semantic elements for better accessibility and SEO
- **Schema Markup**: JSON-LD structured data for organization information
- **Progressive Enhancement**: Core functionality works without JavaScript

## Future Improvements

- Implement Progressive Web App (PWA) features for offline capability
- Add multi-language support beyond Arabic
- Integrate live chat functionality
- Add user testimonials and reviews section
- Implement A/B testing for conversion optimization
- Add analytics tracking and conversion funnels

## License

This project is proprietary software. All rights reserved.

---

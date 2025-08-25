# Musings & Media

**Musings & Media** is a personal, interactive, and multimedia-driven web project showcasing art, writings, music, and other creative interests. The project is designed to present curated content dynamically while maintaining a visually engaging, responsive, and accessible layout.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Responsive Design](#responsive-design)
- [JavaScript Functionality](#javascript-functionality)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is a personal hub for **Musings & Media**, including:

- **Art Gallery / Musings** – A dynamic showcase of visual art.
- **Media Section** – Integration of multimedia content, such as music.
- **Monologue Feed** – Fetches latest content dynamically from a database (Supabase).
- **Bookshelf** – Display of favorite books with interactive hover effects.
- **Interactive Elements** – Tooltip, bookmark animation, music toggle, and dynamic content loading.

The design emphasizes **flexible layout**, **clean typography**, and **intuitive navigation**, supporting desktop, tablet, and mobile screen sizes.

---

## Features

- **Sticky vertical navbar** that switches to horizontal layout on tablet screens.
- **Responsive layout** for content and media, with flexible flexbox containers.
- **Dynamic monologue section** pulling the latest content from Supabase.
- **Interactive music player toggle** using Elfsight widgets.
- **Tooltip and animated bookmark** for additional UX enhancements.
- **Bookshelf with hover effects** for an engaging reading section.
- **Modern typography** using Google Fonts (`Cormorant` and `Uncial Antiqua`).

---

## Technologies Used

- **HTML5** – Semantic markup for structure.
- **CSS3** – Styling with flexbox, responsive design, animations, and media queries.
- **JavaScript (ES6)** – Interactive music player and dynamic content loading.
- **Supabase** – Backend database for fetching monologues.
- **Elfsight Widgets** – Embedded music player.
- **Google Fonts** – `Cormorant` and `Uncial Antiqua` for typographic aesthetics.

---

## File Structure

```
Musings-and-Media/
│
├── index.html # Main homepage
├── main.css # Core styles (body, text styles, etc.)
├── hub.css # Additional styles (images, layout, specific styling, etc.)
├── Images/ # Images used throughout the page
│ ├── bookSpines/ # Book images
│ └── other assets
├── Art Gallery/ # Gallery page
│ ├── gallery.html # Main gallery page
│ ├── gallery.css # Additional styles (images, layout, specific styling, etc.)
│ ├── main.css # Core styles (body, text styles, etc.)
│ ├── background-option.jpg # Main background image
│ ├── Images/ # Images used throughout the page
│ | └── other assets
├── Media Page/ # External resources page
│ ├── media.html # Main media page
│ ├── media.css # Additional styles (images, layout, specific styling, etc.)
│ ├── main.css # Core styles (body, text styles, etc.)
│ ├── background-option.jpg # Main background image
│ ├── Images/ # Images used throughout the page
│ | ├── neocities buttons/ # Images to link to other neocities
│ | └── other assets
└── README.md # Project documentation
```

## Getting Started

2. **Open `index.html`** in your preferred browser.  
3. **Ensure you have internet access** to load Google Fonts and Elfsight scripts.

---

## Responsive Design

- **Desktop:** Vertical navbar on the left, content on the right.  
- **Tablet (≤1200px):** Navbar switches to horizontal layout at the top.  
- **Mobile (≤768px):** Header, content, and images scale down; highlights stack vertically; books display smaller.  
- **Images & Media:** All media (art, books, monologues) use `object-fit` to maintain aspect ratio and responsiveness.

---

## JavaScript Functionality

- **Music Toggle:**  
  - Click the cover image to dynamically load the Elfsight music widget.  
  - Toggle visibility on subsequent clicks.  

- **Supabase Monologue Loader:**  
  - Fetches the latest monologue from the database.  
  - Dynamically populates image, title, description, and external link.  

- **Tooltip & Bookmark Animation:**  
  - Hover effects for additional information.  
  - Pulsing animation for the logbook icon.  

---

## License

This project is licensed under the **MIT License** – see the LICENSE file for details.

---

### Notes

- Keep `main.css` and `hub.css` linked as they control **all layout and styling**.  
- Avoid inline styles; all styling should reside in CSS for maintainability.  
- JavaScript is modular, but for Supabase integration, ensure you have proper credentials.

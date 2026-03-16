# UI Transformation Guide

This document covers the frontend structure, theming system, and how to customize the UI.

## Overview

The frontend uses a custom CSS/JS system built on top of Bootstrap 5. All cyberpunk-style visuals are handled through `cyberpunk.css` and `cyberpunk-effects.js`.

## File Structure

```
src/main/resources/static/
├── cyberpunk.css           # All custom styles and theme variables
├── cyberpunk-effects.js    # Animations and interactive effects
├── index.html              # Landing / home page
├── login.html              # Login page
├── dashboard.html          # Main dashboard
├── workouts.html           # Workout management
├── progress.html           # Progress charts
├── nutrition.html          # Nutrition page
├── profile.html            # User profile
├── settings.html           # App settings
├── about.html              # About page
└── contact.html            # Contact page
```

## Theming

### CSS Variables

All colors are defined as CSS variables in `cyberpunk.css`. To change the theme, update these variables:

```css
:root {
  --primary-color: #00f5ff;
  --secondary-color: #ff00ff;
  --accent-color: #ffff00;
  --bg-color: #0a0a0f;
  --card-bg: #12121a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
}
```

### Available Themes

| Theme | Primary | Secondary |
|---|---|---|
| Default | Cyan `#00f5ff` | Magenta `#ff00ff` |
| Neon Blue | Blue `#0066ff` | Cyan `#00ccff` |
| Matrix Green | Green `#00ff41` | Dark Green `#008f11` |

Themes are switched dynamically via JavaScript and saved to `localStorage`.

## Adding a New Page

1. Create your HTML file in `src/main/resources/static/`
2. Include the required CSS and JS at the top:
   ```html
   <link rel="stylesheet" href="cyberpunk.css">
   <script src="cyberpunk-effects.js" defer></script>
   ```
3. Add a route in the appropriate controller if the page needs backend data

## Key Components

### Sidebar Navigation
Defined in each HTML file. Active state is set via JavaScript based on the current page.

### Cards
Use the `.cyber-card` class for the standard card style used across the app.

```html
<div class="cyber-card">
  <h3>Card Title</h3>
  <p>Card content here</p>
</div>
```

### Buttons
```html
<button class="btn cyber-btn">Primary Action</button>
<button class="btn cyber-btn-outline">Secondary Action</button>
```

### Charts
Charts are rendered using Chart.js. Data is fetched from the REST API and passed into the chart config.

```javascript
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: { ... },
  options: { ... }
});
```

## Animations

All animations are defined in `cyberpunk-effects.js`. Key effects:

| Effect | Trigger | Function |
|---|---|---|
| Particle explosion | Button click | `createParticles(x, y)` |
| Glitch text | Hover | `glitchEffect(element)` |
| Matrix rain | Page load | `initMatrixRain()` |
| Bootup sequence | First load | `runBootSequence()` |

To disable any effect, comment out its initializer in `cyberpunk-effects.js`.

## Performance Notes

- Animations use `transform` and `opacity` only to stay on the GPU compositor thread
- `requestAnimationFrame` is used for all JS-driven animations
- Event listeners are cleaned up on page unload to prevent memory leaks
- Matrix rain canvas is paused when the tab is not visible

## Customization Tips

- To adjust animation speed, change the `duration` values in `cyberpunk.css` keyframes
- To disable the bootup sequence, remove the `runBootSequence()` call in `index.html`
- To add a new theme, define a new set of CSS variables and add a toggle button in `settings.html`

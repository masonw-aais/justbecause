# Stylesheets

This folder contains all CSS files for the Just Because React application, organized for maintainability and clarity.

## Structure

```
stylesheets/
├── App.css              # Global styles and base layout
├── Header.css           # Header component styles
├── Footer.css           # Footer component styles
├── Home.css             # Home page styles
├── About.css            # About page styles
├── Contact.css          # Contact page styles
├── FeaturedFlowers.css  # Featured Flowers page styles
└── CustomScrollbar.css  # Cross-browser custom scrollbar styles
```

## Design System

### Color Palette

- **Primary**: #b22222 (Dark Red)
- **Secondary**: #ffe6e6 (Light Pink)
- **Background**: #fffaf0 (Warm White)
- **Text**: #333 (Dark Gray)

### Typography

- **Font Family**: Arial, sans-serif
- **Headings**: 2em - 2.5em
- **Body**: 1em - 1.1em

### Layout

- **Responsive Design**: Mobile-first approach
- **CSS Grid**: For complex layouts
- **Flexbox**: For component alignment
- **Media Queries**: For responsive breakpoints

## Special Features

### CustomScrollbar.css

A comprehensive scrollbar styling system that:

- **Cross-browser compatibility**: Works on Chrome, Safari, Firefox, Edge, Opera, and IE11
- **Accessibility**: Respects user preferences for reduced motion and high contrast
- **Responsive**: Adapts to mobile devices with smaller scrollbars
- **Future-proof**: Includes dark mode support
- **Brand consistency**: Uses the app's color scheme

## Best Practices

1. **Component-Specific Styles**: Each component/page has its own CSS file
2. **Global Styles**: App.css contains shared styles and resets
3. **Responsive Design**: All styles are mobile-friendly
4. **Accessibility**: High contrast ratios and readable fonts
5. **Performance**: Optimized selectors and minimal nesting
6. **Cross-browser Support**: All styles work across modern browsers

## Usage

Import stylesheets in your components:

```typescript
import "../stylesheets/ComponentName.css";
```

## Maintenance

- Keep styles modular and component-specific
- Use consistent naming conventions
- Test on multiple screen sizes and browsers
- Maintain accessibility standards
- Update browser support as needed

# CustomScrollbar Component

A comprehensive custom scrollbar component that provides consistent styling across all modern browsers while maintaining accessibility standards.

## Features

### 🌈 **Design Consistency**

- Matches the Just Because color scheme (#b22222 primary color)
- Smooth gradient effects and hover animations
- Consistent appearance across all browsers

### 🌐 **Cross-Browser Support**

- **Webkit browsers**: Chrome, Safari, Edge, Opera
- **Firefox**: Native scrollbar styling
- **Internet Explorer 11**: Legacy support
- **Microsoft Edge (Legacy)**: MS-specific scrollbar properties

### 📱 **Responsive Design**

- Smaller scrollbars on mobile devices (8px vs 12px)
- Touch-friendly sizing for mobile interactions
- Optimized for different screen sizes

### ♿ **Accessibility Features**

- Respects `prefers-reduced-motion` user preference
- Supports high contrast mode
- Maintains keyboard navigation compatibility
- Smooth scrolling behavior (when motion is allowed)

### 🌙 **Future-Proofing**

- Dark mode support with `prefers-color-scheme: dark`
- High contrast mode support
- Graceful degradation for unsupported browsers

## Usage

```typescript
import CustomScrollbar from "./components/CustomScrollbar";

// Wrap your app or specific sections
<CustomScrollbar>
  <YourContent />
</CustomScrollbar>;
```

## Props

| Prop        | Type              | Default  | Description                           |
| ----------- | ----------------- | -------- | ------------------------------------- |
| `children`  | `React.ReactNode` | Required | Content to wrap with custom scrollbar |
| `className` | `string`          | `''`     | Additional CSS classes                |

## Browser Support

| Browser | Version | Support Level      |
| ------- | ------- | ------------------ |
| Chrome  | 1+      | ✅ Full support    |
| Safari  | 3+      | ✅ Full support    |
| Firefox | 64+     | ✅ Native support  |
| Edge    | 79+     | ✅ Full support    |
| Opera   | 15+     | ✅ Full support    |
| IE11    | 11      | ⚠️ Limited support |

## CSS Customization

The scrollbar styles are defined in `src/stylesheets/CustomScrollbar.css` and can be customized by modifying:

- **Colors**: Update the hex values to match your theme
- **Sizes**: Adjust width/height for different scrollbar thickness
- **Animations**: Modify transition effects and hover states
- **Border radius**: Change the rounded corners

## Accessibility Notes

- The component automatically respects user accessibility preferences
- No JavaScript is required for basic functionality
- Screen readers and keyboard navigation remain unaffected
- High contrast mode is supported for users with visual impairments

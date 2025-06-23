# Just Because - React Florist Website

A beautiful, modern React application for a local florist business, built with TypeScript and modern web technologies.

## 🎨 Features

- **React 19** with TypeScript for type safety
- **React Router** for seamless navigation
- **Responsive Design** that works on all devices
- **Modern CSS** with hover effects and animations
- **Form Handling** with controlled components
- **Component-Based Architecture** for maintainability
- **Accessibility** built-in with semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/masonw-aais/justbecause.git
cd justbecause/justbecause-react
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── *.css           # Component styles
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page with order form
│   ├── Contact.tsx     # Contact page
│   ├── FeaturedFlowers.tsx # Flower gallery
│   └── *.css           # Page styles
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── App.tsx             # Main app component
├── App.css             # Global styles
└── index.tsx           # App entry point
```

## 🛠️ Technologies Used

- **React 19**: Latest React with concurrent features
- **TypeScript**: Type-safe JavaScript
- **React Router**: Client-side routing
- **CSS3**: Modern styling with flexbox and grid
- **HTML5**: Semantic markup

## 🎯 Key Features Explained

### TypeScript Integration

The app uses TypeScript interfaces for type safety:

```typescript
interface Flower {
  id: number;
  name: string;
  description: string;
  image: string;
  alt: string;
}
```

### Component Architecture

Each page is a separate component with its own styles:

```typescript
const Home: React.FC = () => {
  return <div className="home">{/* Page content */}</div>;
};
```

### Form Handling

Forms use controlled components with TypeScript:

```typescript
const [formData, setFormData] = useState<ContactForm>({
  name: "",
  email: "",
  message: "",
});
```

## 📱 Responsive Design

The website is fully responsive with:

- Mobile-first approach
- CSS Grid and Flexbox
- Media queries for different screen sizes
- Touch-friendly navigation

## 🎨 Design System

### Color Palette

- **Primary**: #b22222 (Dark Red)
- **Secondary**: #ffe6e6 (Light Pink)
- **Background**: #fffaf0 (Warm White)
- **Text**: #333 (Dark Gray)

### Typography

- **Font Family**: Arial, sans-serif
- **Headings**: 2em - 2.5em
- **Body**: 1em - 1.1em

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational and personal use.

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router Documentation](https://reactrouter.com/)

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

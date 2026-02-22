# SearchQya - Product Search Application

A modern, responsive product search and discovery application built with React and Vite. SearchQya provides users with an intuitive interface to browse and search through a curated product catalog with real-time filtering capabilities.

## 🌟 Features

- **Real-time Product Search** - Instantly filter products as you type
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Product Categorization** - Browse products by category (Electronics, Fashion, Home & Kitchen, etc.)
- **Comprehensive Product Information** - View price, ratings, stock levels, and descriptions
- **Fast Performance** - Built with Vite for lightning-fast development and production builds
- **Modern UI** - Clean, professional interface using Tailwind CSS
- **Code Quality** - Integrated ESLint for maintaining code standards

## 🛠️ Tech Stack

- **Frontend Framework** - React 19.2.0
- **Build Tool** - Vite 7.2.4
- **Styling** - Tailwind CSS 4.1.17 with Vite integration
- **Code Linting** - ESLint 9.39.1
- **Type Support** - TypeScript definitions included
- **Package Manager** - npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)

You can verify your installations with:

```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd searchQya
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default port)

## 💻 Usage

### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

The build artifacts will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality and style compliance:

```bash
npm run lint
```

## 📁 Project Structure

```
searchQya/
├── src/
│   ├── components/
│   │   ├── App.jsx          # Main application component
│   │   ├── App.css          # Application styles
│   │   └── Product.js       # Product data and catalog
│   ├── assets/              # Static assets (images, etc.)
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles
│   └── Product.js           # Product array data
├── public/                  # Static files
├── dist/                    # Production build output
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
└── README.md                # This file
```

## 🔍 Core Components

### App Component (`App.jsx`)

Main application component that manages search state and renders the product list and search interface.

### Product Component (`Product.js`)

Contains the product catalog data with the following structure:

```javascript
{
  id: number,
  name: string,
  category: string,
  price: number,
  stock: number,
  rating: number,
  description: string,
  image: string
}
```

### Search Component

Real-time search input that filters products by name (case-insensitive).

### ProductList Component

Displays products in a responsive grid layout with filtering capability.

## 🎨 Design Features

- **Responsive Grid Layout** - Adapts from 1 column on mobile to 4 columns on extra-large screens
- **Category Badges** - Color-coded category labels (Fuchsia background)
- **Product Cards** - Clean card design with shadow effects and rounded corners
- **Image Optimization** - Fixed height image containers with proper aspect ratio handling

## 🔧 Configuration

### Vite Configuration

- React plugin support
- Fast refresh enabled
- Optimized build output

### Tailwind CSS Configuration

- Vite integration for zero-configuration setup
- Responsive breakpoints included
- Custom color schemes available

### ESLint Rules

- React hooks validation
- React refresh optimization
- JavaScript best practices

## 📦 Dependencies

### Production

- `react` - UI library
- `react-dom` - DOM rendering
- `tailwindcss` - Utility-first CSS framework
- `@tailwindcss/vite` - Vite integration for Tailwind

### Development

- `vite` - Build tool
- `eslint` - Code quality tool
- `@vitejs/plugin-react` - React plugin for Vite
- Various TypeScript definitions and linting plugins

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

### Deploy to Hosting Services

The `dist/` folder can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static file hosting service

### Environment Configuration

For production deployment, ensure:

- API endpoints are properly configured
- Environment variables are set correctly
- Build optimization flags are enabled

## 📝 Best Practices

- Keep component files focused and single-purpose
- Use meaningful variable and function names
- Follow the linting rules defined in `eslint.config.js`
- Write responsive CSS using Tailwind's responsive prefixes
- Test thoroughly before production deployment

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow ESLint configuration
- Use Tailwind CSS for styling
- Maintain component-based architecture

## 🐛 Issues and Support

If you encounter any issues:

1. Check existing issues on GitHub
2. Provide detailed steps to reproduce the issue
3. Include your environment information (Node version, OS, etc.)
4. Submit a bug report with a clear title and description

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ✨ Acknowledgments

- React team for the excellent UI library
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- The open-source community for valuable tools and resources

## 📞 Contact

For questions or suggestions:

- **Email** - [your-email@example.com]
- **GitHub Issues** - [Project Issues Page]

## 🔄 Version History

### v0.0.0

- Initial project setup
- Product catalog implementation
- Search functionality
- Responsive design

---

**Last Updated:** February 2026  
**Status:** Active Development

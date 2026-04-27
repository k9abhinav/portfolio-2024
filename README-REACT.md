# Portfolio 2024 - React Version

A modern React conversion of your portfolio website with all original features preserved.

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/k9abhinav/portfolio-2024.git
cd portfolio-2024

# Checkout the React branch
git checkout react-conversion

# Install dependencies
npm install
```

### 2. Add Assets

Copy all image files and font files to the `public` folder:

```bash
# The public folder should contain:
# - *.jpg files (demon.jpg, footer.png, etc.)
# - *.png files (skill.png, car.png, person.png, etc.)
# - *.OTF files (fonts)

# You can do this by copying from the root:
cp *.jpg public/
cp *.png public/
cp *.OTF public/
```

### 3. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation bar
│   ├── Hero.jsx          # Hero section
│   ├── Skills.jsx        # Skills grid
│   ├── About.jsx         # About section
│   ├── Projects.jsx      # Projects showcase
│   ├── Contact.jsx       # Contact/Footer
│   └── Cursor.jsx        # Custom cursor
├── App.jsx               # Main app component
├── main.jsx              # React entry point
└── index.css             # Global styles
```

## 🎨 Features

✅ **All Original Animations**
- GSAP animations with ScrollTrigger
- Custom cursor movement
- Smooth scrolling transitions
- Horizontal project scrolling

✅ **Responsive Design**
- Mobile-first approach
- Tailwind CSS utilities
- Responsive grid layouts

✅ **Performance**
- Vite fast build tool
- Optimized assets
- Code splitting

✅ **Styling**
- Tailwind CSS framework
- Custom fonts (Gilroy, Sohne)
- Dark/Light color schemes

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📦 Dependencies

- **react** - UI library
- **gsap** - Animation library
- **tailwindcss** - Utility-first CSS framework
- **vite** - Next generation build tool
- **locomotive-scroll** - Smooth scrolling (available for future use)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Other Options
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📝 Customization

### Changing Colors
Edit colors in components using Tailwind classes or modify `tailwind.config.js`

### Updating Projects
Edit the `projects` array in `src/components/Projects.jsx`

### Updating Skills
Edit the `skills` array in `src/components/Skills.jsx`

### Modifying Content
All text content is directly in the component files for easy editing

## 🐛 Troubleshooting

**Assets not loading?**
- Make sure all image files are in the `public` folder
- Use `/filename.ext` paths in components

**Fonts not working?**
- Verify font files are in `public` folder
- Check paths in `src/index.css`

**Animations not smooth?**
- This is a GSAP limitation on older browsers
- Ensure JavaScript is enabled

## 🔐 Environment Variables

Create a `.env` file if needed:

```env
VITE_APP_TITLE=A K. Portfolio
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abhinava Krishna**
- Portfolio: https://portfolio-2024-ak.vercel.app
- GitHub: https://github.com/k9abhinav
- LinkedIn: https://linkedin.com/in/abhinavakrishna
- Email: abhinava03kks@gmail.com

## 🙏 Credits

Converted from vanilla HTML/CSS/JS to React with modern tooling and best practices.

---

**Last Updated:** April 27, 2026

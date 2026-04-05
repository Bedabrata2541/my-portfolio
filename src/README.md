# Bedabrata Paul - Portfolio Website

A modern, dark-themed portfolio website showcasing the work and expertise of Bedabrata Paul, an Engineering Student specializing in CSE (AI & ML), UI/UX Designer, Web Developer, and Founder of BEYOND POWERED digital services & consultancy.

## ✨ Features

- **Futuristic Design**: Dark theme with neon gradients (blue/purple/cyan)
- **Smooth Animations**: Powered by Motion (formerly Framer Motion) with custom timing and easing
- **Glassmorphism Effects**: Modern UI with frosted glass aesthetics
- **Responsive Layout**: Fully responsive across all devices
- **Interactive Sections**:
  - Hero with animated BP logo
  - About section with personal introduction
  - Philosophy section with core values
  - Skills showcase with categories
  - Services offered
  - Featured Projects (30+ projects across 4 categories: Freelance, Teamwork, Research Works, Startup)
  - Contact form with EmailJS integration

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (motion/react)
- **Form Handling**: React Hook Form 7.55.0
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language**: 100% TypeScript + CSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download Here](https://nodejs.org/)
- **npm** (v9 or higher) or **yarn** (v1.22 or higher) or **pnpm**

## 🚀 Getting Started

### 1. Clone or Download the Repository

If you have Git installed:
```bash
git clone <repository-url>
cd bedabrata-paul-portfolio
```

Or simply download and extract the ZIP file.

### 2. Organize Files (if needed)

If your files are not already in the `src` directory, run the setup script:

**On macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

**On Windows:**
Manually move the following to their respective locations:
- Move `App.tsx` → `src/App.tsx`
- Move `components/` folder → `src/components/`
- Move `styles/` folder → `src/styles/`

### 3. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

### 4. Configure EmailJS (Optional)

The contact form uses EmailJS for email functionality. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Copy the Service ID, Template ID, and Public Key
5. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

6. Update the `.env` file with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> **Note**: The website will work without EmailJS configuration, but the contact form won't send emails. You'll need to update the Contact component to use these environment variables.

### 5. Start Development Server

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

Using pnpm:
```bash
pnpm dev
```

The application will open automatically at `http://localhost:3000`

## 📦 Build for Production

To create a production build:

Using npm:
```bash
npm run build
```

Using yarn:
```bash
yarn build
```

Using pnpm:
```bash
pnpm build
```

The build output will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

Using npm:
```bash
npm run preview
```

Using yarn:
```bash
yarn preview
```

Using pnpm:
```bash
pnpm preview
```

## 📁 Project Structure

```
bedabrata-paul-portfolio/
├── src/
│   ├── components/
│   │   ├── About.tsx              # About section
│   │   ├── Contact.tsx            # Contact form with EmailJS
│   │   ├── Hero.tsx               # Hero section with animated BP logo
│   │   ├── Navigation.tsx         # Navigation bar
│   │   ├── Philosophy.tsx         # Philosophy section
│   │   ├── Projects.tsx           # Featured projects showcase
│   │   ├── Services.tsx           # Services offered
│   │   ├── Skills.tsx             # Skills showcase
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx  # Image component with fallback
│   │   └── ui/                    # UI component library (shadcn-style)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       └── ... (more UI components)
│   ├── styles/
│   │   └── globals.css            # Global styles and Tailwind config
│   ├── App.tsx                    # Main application component
│   └── main.tsx                   # Application entry point
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
├── .env.example                    # Environment variables example
├── .eslintrc.cjs                   # ESLint configuration
├── setup.sh                        # File organization script
└── README.md                       # This file
```

## 🎨 Customization

### Colors and Theme

The color scheme is defined in `/src/styles/globals.css`. You can modify the CSS custom properties to change the theme:

```css
@theme {
  /* Customize your colors here */
}
```

### Content

To update the portfolio content:

- **Personal Info**: Edit `/src/components/Hero.tsx` and `/src/components/About.tsx`
- **Skills**: Update the skills array in `/src/components/Skills.tsx`
- **Services**: Modify service cards in `/src/components/Services.tsx`
- **Projects**: Update project data in `/src/components/Projects.tsx`
- **Philosophy**: Edit values in `/src/components/Philosophy.tsx`

### Animations

Animation settings are configured throughout the components using Motion. Look for `motion` imports and adjust timing, easing, and delays as needed.

## 🔧 Development Tips

### Hot Module Replacement (HMR)

Vite provides fast HMR out of the box. Changes will be reflected instantly in the browser.

### Linting

To check for linting errors:

```bash
npm run lint
```

### Type Checking

TypeScript will check types during build. To check types without building:

```bash
npx tsc --noEmit
```

## 🌐 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build
4. Add environment variables in Vercel dashboard (if using EmailJS)
5. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard
6. Deploy!

### GitHub Pages

Add to `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
});
```

Then build and deploy the `dist` folder.

## 🚨 Troubleshooting

### Issue: Module not found errors

**Solution**: Make sure all files are in the `src` directory. Run the setup script if needed.

### Issue: Styles not applying

**Solution**: Ensure `src/styles/globals.css` is imported in `src/main.tsx`.

### Issue: Components not found

**Solution**: Check that all imports use the correct relative paths from the `src` directory.

### Issue: Build fails

**Solution**: 
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try building again with `npm run build`

## 📞 Contact

- **Email**: bedabratapaul.1@gmail.com
- **LinkedIn**: [Bedabrata Paul](https://www.linkedin.com/in/bedabrata-paul/)
- **X (Twitter)**: [@BedabrataPaul_](https://x.com/BedabrataPaul_)
- **Instagram**: [@bedabratapaul_](https://instagram.com/bedabratapaul_)

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Animations powered by [Motion](https://motion.dev/)
- Build tool: [Vite](https://vitejs.dev/)

## 📝 Notes

- This is a **frontend-only** application
- No backend or database required
- EmailJS is optional for contact form functionality
- All animations are optimized for performance
- Fully responsive across all device sizes

---

Built with ❤️ by Bedabrata Paul
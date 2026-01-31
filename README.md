# Sai Kiran Annam - Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- ✨ Smooth animations using Framer Motion
- 🎨 Modern dark theme with gradient accents
- 🖱️ Multiple cursor effects with trailing animations
- ⚡ Fast loading with optimized animations
- 📱 Fully responsive design
- 🎯 Particle background animations
- 🔮 3D particle text animation (sphere → explode → text formation)
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd saikiran-sde-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)** and sign in with your GitHub account

3. **Click "Add New Project"** and import your repository

4. **Vercel will automatically:**
   - Detect Next.js framework
   - Configure build settings
   - Set up environment variables (if any)

5. **Click "Deploy"** - Your portfolio will be live in minutes!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Build Configuration

The project is pre-configured for Vercel:
- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Optimized build settings
- ✅ Automatic image optimization
- ✅ Production-ready configuration

### Environment Variables

No environment variables are required for this project. If you need to add any in the future:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables for Production, Preview, and Development

### Custom Domain

After deployment:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

Your portfolio will be live in minutes!

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact section
│   ├── Education.tsx     # Education section
│   ├── Experience.tsx    # Experience section
│   ├── Hero.tsx          # Hero section
│   ├── LoadingScreen.tsx # Loading animation
│   ├── MultipleCursor.tsx # Cursor effects
│   ├── Navigation.tsx    # Navigation bar
│   ├── ParticleCanvas.tsx # Particle background
│   ├── Projects.tsx      # Projects section
│   └── Skills.tsx        # Skills section
└── public/               # Static assets
```

## Customization

### Update Personal Information

Edit the following files to update your information:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section
- `components/Experience.tsx` - Work experience
- `components/Education.tsx` - Education details
- `components/Projects.tsx` - Project showcase
- `components/Skills.tsx` - Tech stack
- `components/Contact.tsx` - Contact information

### Color Scheme

Update colors in `tailwind.config.ts` and `app/globals.css`:
- Primary: `#9b69ff` (Purple)
- Secondary: `#5f8cff` (Blue)
- Accent: `#ff6b9d` (Pink)

### Particle Text Animation

The portfolio includes an advanced 3D particle text animation component (`ParticleText.tsx`) that:
- Starts as a rotating 3D sphere
- Explodes into particles
- Reforms into your name/text

To enable it, uncomment the `<ParticleText />` component in `components/Hero.tsx`. You can customize the text and animation parameters in the component.

## License

This project is open source and available under the MIT License.

## Contact

Sai Kiran Annam
- Email: saikiranannam99@gmail.com
- LinkedIn: [linkedin.com/in/saikiranannam](https://linkedin.com/in/saikiranannam)
- GitHub: [github.com/saikiranAnnam](https://github.com/saikiranAnnam)

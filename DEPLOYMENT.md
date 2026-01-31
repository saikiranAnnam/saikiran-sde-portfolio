# Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] Next.js configuration optimized
- [x] TypeScript configuration correct
- [x] All dependencies in package.json
- [x] Build scripts configured
- [x] No hardcoded local paths
- [x] All components use 'use client' where needed
- [x] No SSR issues (window/document properly handled)

## 🚀 Quick Deploy Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Deploy on Vercel

**Option A: Via Dashboard (Easiest)**
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Vercel auto-detects Next.js - no configuration needed!
6. Click "Deploy"

**Option B: Via CLI**
```bash
npm i -g vercel
vercel
```

## 📋 Build Configuration

Vercel will automatically use:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install`
- **Node Version:** 18.x (auto-detected)

## 🔧 Manual Configuration (if needed)

If Vercel doesn't auto-detect, use these settings:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## 🌐 Environment Variables

**No environment variables required** for this project.

If you need to add any later:
1. Project Settings → Environment Variables
2. Add variables for Production, Preview, Development

## 📦 Dependencies

All required dependencies are in `package.json`:
- next: ^14.2.0
- react: ^18.3.0
- react-dom: ^18.3.0
- framer-motion: ^11.0.0
- react-icons: ^5.0.0
- tailwindcss: ^3.4.0
- typescript: ^5.3.0

## ✅ Post-Deployment

1. **Test your live site** - Check all pages load correctly
2. **Check animations** - Verify Framer Motion works
3. **Test responsiveness** - Check mobile/tablet views
4. **Verify performance** - Check Lighthouse scores

## 🔗 Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Fonts Not Loading
- Google Fonts are fetched at build time
- Vercel has network access during build
- If issues persist, check font imports in layout.tsx

### Images Not Loading
- Check image paths in public folder
- Verify image domains in next.config.js if using external images

## 📊 Performance Tips

- ✅ Images are automatically optimized by Next.js
- ✅ Code is minified and compressed
- ✅ Static assets are cached
- ✅ Automatic HTTPS enabled

## 🎉 Success!

Once deployed, your portfolio will be live at:
`https://your-project-name.vercel.app`

You can also add a custom domain for a professional URL!

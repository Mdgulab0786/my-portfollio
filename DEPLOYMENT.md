# Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended - Easiest)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your repository
   - Add environment variable: `DATABASE_URL`
   - Deploy!

### 2. Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/public` folder
   - Or connect your GitHub repository

### 3. Railway

1. **Connect GitHub**:
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Add `DATABASE_URL` environment variable
   - Deploy automatically

### 4. Render

1. **Deploy**:
   - Go to [render.com](https://render.com)
   - Connect your GitHub repository
   - Use the `render.yaml` configuration
   - Add environment variables

## 🛠️ Manual GitHub Setup

If you need to set up GitHub manually:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## 🔧 Environment Variables

For any deployment platform, you'll need these environment variables:

```bash
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

### Getting a Database URL

**Option 1: Use Neon (Free)**
1. Go to [neon.tech](https://neon.tech)
2. Create a free account
3. Create a new project
4. Copy the connection string

**Option 2: Use Supabase (Free)**
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string

**Option 3: Use PlanetScale (Free)**
1. Go to [planetscale.com](https://planetscale.com)
2. Create a database
3. Get the connection string

## 📝 Platform-Specific Instructions

### Vercel Setup
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

### Netlify Setup
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `netlify deploy --prod --dir=dist/public`

### Railway Setup
1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Deploy: `railway up`

## 🔄 Automated Deployment

The repository includes GitHub Actions workflow that automatically:
- Runs TypeScript checks
- Builds the project
- Deploys to Vercel (when configured)

To enable automated deployment:
1. Add these secrets to your GitHub repository:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
   - `DATABASE_URL`

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Database Connection Issues
- Ensure `DATABASE_URL` is correctly set
- Check database is accessible from deployment platform
- Verify database credentials

### Port Issues
- Most platforms automatically assign ports
- The app binds to `0.0.0.0:5000` by default
- Environment variable `PORT` will override if needed

## 📊 Post-Deployment

After successful deployment:
1. Test the contact form
2. Verify dark/light mode toggle
3. Check mobile responsiveness
4. Test all navigation links
5. Confirm database connectivity

## 🔗 Custom Domain

To add a custom domain:
1. **Vercel**: Project Settings → Domains
2. **Netlify**: Site Settings → Domain Management
3. **Railway**: Project Settings → Domains
4. **Render**: Dashboard → Custom Domains

## 📈 Analytics (Optional)

Add analytics to track visitors:
1. **Google Analytics**: Add tracking code to `index.html`
2. **Vercel Analytics**: Enable in project settings
3. **Netlify Analytics**: Enable in site settings

## 🔒 Security Headers

The deployment includes basic security configurations. For production:
- Enable HTTPS (automatic on most platforms)
- Set up proper CORS headers
- Configure CSP headers if needed

## 📱 Performance

The website is optimized for performance:
- Static assets are cached
- Images are optimized
- CSS and JS are minified
- Gzip compression enabled
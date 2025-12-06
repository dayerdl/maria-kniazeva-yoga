# Quick Start Guide 🚀

## What's Been Created

✅ Professional website with:
- Responsive design (works on all devices)
- Modern animations and smooth scrolling
- Sections: Home, About, Services, Experience, Contact
- All your information from the CV
- Professional color scheme and typography

✅ Files created:
- `index.html` - Main website structure
- `styles.css` - Beautiful styling
- `script.js` - Interactive features
- `vercel.json` - Vercel deployment config
- `package.json` - Project metadata
- `deploy.sh` - Automated deployment script
- `DEPLOYMENT.md` - Detailed deployment guide

## View Your Website Locally

Open `index.html` in your web browser:

```bash
cd /Users/dayerdl/maria-kniazeva-yoga
open index.html
```

Or double-click the `index.html` file.

## Deploy to GitHub & Vercel - 3 Simple Steps

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `maria-kniazeva-yoga`
3. Keep it **Public**
4. **DO NOT** check any boxes (no README, no .gitignore)
5. Click "Create repository"

### Step 2: Push to GitHub

Replace `YOUR_GITHUB_USERNAME` with your actual username:

```bash
cd /Users/dayerdl/maria-kniazeva-yoga
./deploy.sh YOUR_GITHUB_USERNAME
```

OR manually:

```bash
cd /Users/dayerdl/maria-kniazeva-yoga
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/maria-kniazeva-yoga.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

**Option A: Via Website (Easiest)** ⭐

1. Go to https://vercel.com
2. Click "Sign Up" and use your GitHub account
3. After logging in, click "Add New..." → "Project"
4. Find and import `maria-kniazeva-yoga`
5. Click "Deploy" (no configuration needed!)
6. Done! 🎉 Vercel gives you a live URL

**Option B: Via CLI**

```bash
# Fix npm permissions (if needed)
sudo chown -R $(whoami) ~/.npm

# Install Vercel
npm install -g vercel

# Deploy
cd /Users/dayerdl/maria-kniazeva-yoga
vercel --prod
```

## Your Live URLs

After deployment:

- **Vercel**: `https://maria-kniazeva-yoga.vercel.app` (or similar)
- **GitHub**: `https://github.com/YOUR_USERNAME/maria-kniazeva-yoga`
- **GitHub Pages** (optional): `https://YOUR_USERNAME.github.io/maria-kniazeva-yoga`

## Making Updates

1. Edit your files
2. Commit and push:
```bash
cd /Users/dayerdl/maria-kniazeva-yoga
git add .
git commit -m "Update website"
git push
```
3. Vercel automatically redeploys! ✨

## Need Help?

- 📖 Full guide: See `DEPLOYMENT.md`
- 🐛 Issues: Check the troubleshooting section in `DEPLOYMENT.md`
- 📧 Vercel support: https://vercel.com/support

## Customization Tips

### Change Colors
Edit `styles.css` and modify the `:root` section:
```css
:root {
    --primary-color: #8B4513;  /* Main brown color */
    --secondary-color: #D4A574; /* Light brown */
    /* ... more colors */
}
```

### Update Content
Edit `index.html` to change text, add sections, etc.

### Add Images
1. Add images to the project folder
2. Reference them in `index.html`
3. Commit and push

Enjoy your new website! 🧘‍♀️✨


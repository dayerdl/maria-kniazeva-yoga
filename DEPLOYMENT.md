# Deployment Guide

This guide will help you deploy the Maria Kniazeva Yoga website to GitHub and Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (you can sign up with your GitHub account at https://vercel.com)

## Option 1: Deploy to GitHub (Recommended)

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name your repository: `maria-kniazeva-yoga` (or any name you prefer)
3. Keep it public
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 2: Push to GitHub

After creating the repository, GitHub will show you instructions. Use these commands:

```bash
cd /Users/dayerdl/maria-kniazeva-yoga
git remote add origin https://github.com/YOUR_USERNAME/maria-kniazeva-yoga.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

## Option 2: Deploy to Vercel

### Method A: Deploy via Vercel Website (Easiest)

1. Go to https://vercel.com
2. Sign up or log in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository (after you've pushed it)
5. Vercel will automatically detect it's a static site
6. Click "Deploy"
7. Done! Vercel will provide you with a live URL

### Method B: Deploy via Vercel CLI

1. First, fix npm permissions (if needed):
```bash
sudo chown -R $(whoami) ~/.npm
```

2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Navigate to your project:
```bash
cd /Users/dayerdl/maria-kniazeva-yoga
```

4. Deploy:
```bash
vercel
```

5. Follow the prompts:
   - Login with your Vercel account
   - Link to existing project or create new one
   - Accept the default settings
   - Deploy!

6. For production deployment:
```bash
vercel --prod
```

## Quick Deploy Script

I've created a `deploy.sh` script for you. To use it:

```bash
cd /Users/dayerdl/maria-kniazeva-yoga
chmod +x deploy.sh
./deploy.sh YOUR_GITHUB_USERNAME
```

## Accessing Your Live Site

### GitHub Pages (if you enable it)
- Go to your repository settings
- Navigate to "Pages" section
- Select "main" branch as source
- Your site will be at: `https://YOUR_USERNAME.github.io/maria-kniazeva-yoga/`

### Vercel
- Your site will be at: `https://your-project-name.vercel.app`
- You can also add a custom domain in Vercel settings

## Updating the Website

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

- Vercel will automatically redeploy when you push to GitHub
- GitHub Pages will also update automatically

## Troubleshooting

### If you get permission errors:
```bash
sudo chown -R $(whoami) ~/.npm
```

### If git push fails:
Make sure you've created the repository on GitHub and added the remote correctly.

### If Vercel deployment fails:
- Make sure all files are committed
- Check that index.html is in the root directory
- Verify your Vercel account is connected

## Support

For issues or questions, please check:
- Vercel Documentation: https://vercel.com/docs
- GitHub Documentation: https://docs.github.com


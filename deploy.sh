#!/bin/bash

# Deployment script for Maria Kniazeva Yoga website
# Usage: ./deploy.sh YOUR_GITHUB_USERNAME

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Maria Kniazeva Yoga - Deployment Tool   ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════╝${NC}"
echo ""

# Check if GitHub username is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please provide your GitHub username${NC}"
    echo "Usage: ./deploy.sh YOUR_GITHUB_USERNAME"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="maria-kniazeva-yoga"

echo -e "${BLUE}➤ GitHub Username:${NC} $GITHUB_USERNAME"
echo -e "${BLUE}➤ Repository Name:${NC} $REPO_NAME"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo -e "${RED}Error: Git repository not initialized${NC}"
    exit 1
fi

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo -e "${BLUE}➤ Committing changes...${NC}"
    git add .
    git commit -m "Update: Deploy to GitHub"
fi

# Check if remote exists
if git remote | grep -q "origin"; then
    echo -e "${BLUE}➤ Remote 'origin' already exists${NC}"
else
    echo -e "${BLUE}➤ Adding GitHub remote...${NC}"
    git remote add origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
fi

# Push to GitHub
echo -e "${BLUE}➤ Pushing to GitHub...${NC}"
git branch -M main

if git push -u origin main; then
    echo ""
    echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
    echo -e "${GREEN}➤ Repository URL:${NC} https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
    echo ""
    
    # GitHub Pages instructions
    echo -e "${BLUE}To enable GitHub Pages:${NC}"
    echo "1. Go to https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/settings/pages"
    echo "2. Under 'Source', select 'main' branch"
    echo "3. Click 'Save'"
    echo "4. Your site will be live at: https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/"
    echo ""
    
    # Vercel deployment
    echo -e "${BLUE}To deploy to Vercel:${NC}"
    echo "1. Go to https://vercel.com/new"
    echo "2. Import your GitHub repository"
    echo "3. Click 'Deploy'"
    echo ""
    echo "Or use Vercel CLI:"
    echo "  npm install -g vercel"
    echo "  vercel --prod"
    echo ""
    echo -e "${GREEN}✓ Deployment complete!${NC}"
else
    echo ""
    echo -e "${RED}✗ Failed to push to GitHub${NC}"
    echo ""
    echo "This might be because:"
    echo "1. The repository doesn't exist on GitHub yet"
    echo "   → Create it at: https://github.com/new"
    echo ""
    echo "2. You don't have permission"
    echo "   → Make sure you're logged in: git config --global user.name"
    echo ""
    echo "3. The remote URL is incorrect"
    echo "   → Check with: git remote -v"
    echo ""
    exit 1
fi


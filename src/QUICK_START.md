# 🚀 Quick Start Guide

Get your portfolio running locally in 3 simple steps!

## Step 1: Install Node.js

If you don't have Node.js installed:
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Install it (use default settings)
4. Verify installation by opening terminal/command prompt and running:
   ```bash
   node --version
   npm --version
   ```

## Step 2: Install Dependencies

Open terminal/command prompt in your project folder and run:

```bash
npm install
```

This will download all required packages. It might take a few minutes.

## Step 3: Start the Development Server

Once installation is complete, run:

```bash
npm run dev
```

Your portfolio will automatically open in your browser at `http://localhost:3000`

That's it! 🎉

---

## Making Changes

- Edit files in the `src/` folder
- Changes will automatically reflect in the browser
- Press `Ctrl+C` in terminal to stop the server

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## Need Help?

Check out the detailed [README.md](./README.md) for:
- Troubleshooting tips
- Customization guides  
- Deployment instructions
- And more!

## Common Issues

**Issue**: `npm: command not found`  
**Solution**: Install Node.js (see Step 1)

**Issue**: Module errors after installation  
**Solution**: Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

**Issue**: Port 3000 already in use  
**Solution**: The dev server will automatically use the next available port (like 3001)

---

Happy Coding! 💻✨

# Deploy ACM NMIET Website to Netlify

## Quick Deployment Steps

### Step 1: Commit Your Changes

```bash
# Add all files
git add .

# Commit
git commit -m "Prepare for Netlify deployment with dynamic Firebase integration"

# Push to GitHub
git push origin main
```

---

### Step 2: Deploy to Netlify

#### Option A: Deploy via Netlify Dashboard (Easiest)

1. **Go to Netlify**: https://app.netlify.com/
2. **Sign up/Login** (can use GitHub account)
3. **Click "Add new site" → "Import an existing project"**
4. **Connect to Git provider** (GitHub)
5. **Select your repository**: `stitch_acm_site`
6. **Configure build settings**:
   - Base directory: `stitch_acm_site` (if repository has multiple folders)
   - Build command: Leave empty (static site)
   - Publish directory: `.` or leave empty
7. **Click "Deploy site"**

**Done!** Your site will be live in 1-2 minutes at: `https://random-name-123.netlify.app`

---

#### Option B: Deploy via Drag & Drop (No Git)

1. Go to: https://app.netlify.com/drop
2. **Drag the entire folder** `stitch_acm_site` onto the page
3. **Drop it** → Netlify uploads and deploys
4. **Done!** Get a URL like: `https://random-name-123.netlify.app`

**Note**: This method doesn't auto-update. You need to manually re-upload for changes.

---

### Step 3: Update Firebase Settings (IMPORTANT!)

Your Firebase API key is currently restricted (optional). To work on Netlify:

1. **Go to Firebase Console**: https://console.firebase.google.com/project/acmwebsite-d5101/settings/general/
2. **Scroll to "Your apps"** section
3. **Click your web app** (globe icon)
4. **Click gear icon** → "App settings"
5. **Scroll to "API Key"**
6. **Add authorized domain**:
   - Click "Add domain"
   - Enter your Netlify URL: `your-site-name.netlify.app`
   - Save

**Or** just leave it unrestricted (security rules protect your data anyway).

---

### Step 4: Test Your Deployed Site

1. **Open your Netlify URL**
2. **Test pages**:
   - ✅ Home page loads
   - ✅ Upcoming Events page loads activities from Firebase
   - ✅ Past Events page loads
   - ✅ Team page shows real members
   - ✅ Navigation dropdown works

3. **Check browser console (F12)** for any errors

---

## What Gets Deployed

### Public Pages (✅ Will Work on Netlify)
- Home page
- What is ACM
- ACM NMIET page
- Focus Areas
- Our Team (connected to Firebase)
- Upcoming Events (connected to Firebase)
- Past Events (connected to Firebase)
- Contact page
- Join ACM page

### Admin Panel (⚠️ Also Deployed, But Needs Protection)
The admin panel pages will also be deployed, but:
- They're protected by Firebase Authentication
- Only users in Firebase Auth can log in
- Firestore rules prevent unauthorized writes

**Recommendation**: Keep admin panel separate or add password protection to admin URLs.

---

## Custom Domain (Optional)

**Want a custom domain like `acmnmiet.org`?**

1. **Buy domain** (from Namecheap, GoDaddy, etc.)
2. **In Netlify Dashboard**:
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter: `acmnmiet.org`
3. **Update DNS records** (Netlify provides instructions)
4. **Wait 24 hours** for DNS propagation
5. **Done!** Auto-HTTPS enabled

---

## Protecting Admin Panel (Recommended)

### Option 1: Password Protect Admin Folder

Add to `netlify.toml`:

```toml
[[redirects]]
  from = "/admin_*/*"
  to = "/.netlify/functions/auth"
  status = 401
  force = true
```

### Option 2: Deploy Admin Panel Separately

Keep admin panel on localhost only:
- Don't push admin_* folders to GitHub
- Add to .gitignore:
  ```
  admin_*/
  ```

### Option 3: Use Netlify Identity (Advanced)

Set up Netlify Identity + role-based access for admin pages.

---

## Environment Variables (If Needed)

If you want to hide Firebase config (optional):

1. **In Netlify Dashboard**:
   - Go to "Site settings" → "Environment variables"
   - Add variables:
     - `FIREBASE_API_KEY`
     - `FIREBASE_AUTH_DOMAIN`
     - etc.

2. **Update `firebase_config.js`**:
   ```javascript
   const firebaseConfig = {
     apiKey: process.env.FIREBASE_API_KEY,
     // ... etc
   };
   ```

**Note**: For static sites, this doesn't really hide the keys (they're visible in browser). Security rules are what actually protect your data.

---

## Troubleshooting

### "Page not found" errors

**Problem**: Direct navigation to `/upcoming_activities_page/code.html` works, but friendly URLs don't.

**Solution**: The `netlify.toml` file handles redirects. Make sure it's in the project root.

---

### Firebase doesn't load

**Check**:
1. Open browser console (F12)
2. Look for CORS errors
3. Check Firebase API key restrictions
4. Verify Firestore rules are deployed

**Fix**: Add Netlify domain to Firebase authorized domains (see Step 3 above)

---

### Admin panel accessible to everyone

**This is expected** - the pages are public, but:
- Firebase Auth protects login
- Firestore rules protect data
- Only authorized users can actually modify data

**To fully hide admin pages**: Use Netlify Identity or deploy admin separately.

---

## Continuous Deployment

Once connected to GitHub:
1. **Make changes** to your code locally
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update team page design"
   git push origin main
   ```
3. **Netlify auto-deploys** in ~1 minute
4. **Changes go live** automatically!

---

## Cost

**Netlify Free Tier Includes**:
- ✅ 100 GB bandwidth/month (more than enough)
- ✅ Unlimited sites
- ✅ HTTPS (automatic)
- ✅ Continuous deployment
- ✅ Form handling (100 submissions/month)

**Your site will likely stay free** unless you get massive traffic.

---

## What Happens After Deployment

### Live Site URL
You'll get a URL like:
```
https://acm-nmiet-site.netlify.app
```

### You Can:
- ✅ Share this URL with anyone
- ✅ Test on mobile devices
- ✅ Show to team members
- ✅ Submit for feedback
- ✅ Use as staging site

### Admin Can:
- ✅ Still log in at: `https://your-site.netlify.app/admin_panel_login_screen/code.html`
- ✅ Add team members
- ✅ Create activities
- ✅ Everything works the same (uses Firebase)

---

## Rename Your Site

After deployment:
1. **In Netlify Dashboard**
2. **Go to "Site settings"**
3. **Click "Change site name"**
4. **Enter**: `acm-nmiet` (or any available name)
5. **New URL**: `https://acm-nmiet.netlify.app`

---

## Summary

1. ✅ Created `netlify.toml` with redirects
2. ✅ Created `.gitignore` for clean deployment
3. ⏳ Commit and push to GitHub
4. ⏳ Deploy to Netlify (drag & drop or connect GitHub)
5. ⏳ Add Netlify domain to Firebase
6. ✅ Site is live!

---

**Ready to deploy?** Follow Step 1 above to commit and push, then deploy to Netlify! 🚀

**Estimated time**: 10 minutes from commit to live site!

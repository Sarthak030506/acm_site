# Quick Deploy - Firestore Security Rules

## 5-Minute Deployment

### Step 1: Open Firebase Console
🔗 https://console.firebase.google.com/project/acmwebsite-d5101/firestore/rules

### Step 2: Copy Rules
📄 Open file: `firestore.rules` (in this folder)
📋 Copy ALL content (Ctrl+A, Ctrl+C)

### Step 3: Paste & Publish
1. Paste into Firebase Console rules editor
2. Click **"Publish"** button
3. Wait for confirmation

### Step 4: Test
✅ Open your public website → Team page should load
❌ Open browser console → Try to delete data (should fail with permission error)
✅ Login to admin panel → Try to add team member (should work)

---

## What These Rules Do

| Who | Can Do | Where |
|-----|---------|-------|
| **Anyone** | Read | Team Members, Activities |
| **Admins Only** | Create, Edit, Delete | Team Members, Activities |
| **Anyone Else** | Nothing | All other collections |

---

## Emergency Rollback

If something breaks:

1. Go to Firebase Console → Rules
2. Click "Version history"
3. Click "Restore" on previous version

---

## Need Help?

📖 Full guide: `FIRESTORE_SECURITY_SETUP.md`

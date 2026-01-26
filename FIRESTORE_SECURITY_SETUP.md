# Firestore Security Rules - Deployment Guide

## Overview
This guide explains how to deploy production-ready Firestore security rules for the ACM NMIET website.

---

## Security Model

### Public Access (Anyone)
- **READ**: Team members, Activities, Blog posts
- **CREATE**: Contact submissions, Join requests

### Authenticated Users Only (Admin Panel)
- **CREATE/UPDATE/DELETE**: Team members, Activities, Blog posts
- **READ/UPDATE/DELETE**: Contact submissions, Join requests

### Default
- All other collections: **DENIED**

---

## Deployment Methods

### Method 1: Firebase Console (Recommended for First-Time Setup)

1. **Open Firebase Console**
   - Go to: https://console.firebase.google.com/
   - Select project: `acmwebsite-d5101`

2. **Navigate to Firestore Rules**
   - Click **Firestore Database** in left sidebar
   - Click **Rules** tab at the top

3. **Deploy the Rules**
   - Open the file: `firestore.rules` (in your project root)
   - Copy the ENTIRE contents
   - Paste into the Firebase Console rules editor
   - Click **Publish** button

4. **Verify Deployment**
   - You should see: "Last updated: [current timestamp]"
   - Status should show: "Active"

---

### Method 2: Firebase CLI (For Advanced Users)

**Prerequisites**:
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login
```

**Initialize Firebase** (One-time setup):
```bash
# Run from project root directory
firebase init firestore

# When prompted:
# - Select: Use an existing project
# - Choose: acmwebsite-d5101
# - Firestore Rules file: firestore.rules (press Enter)
# - Firestore Indexes file: firestore.indexes.json (press Enter)
```

**Deploy Rules**:
```bash
# Deploy only Firestore rules
firebase deploy --only firestore:rules

# Or deploy everything
firebase deploy
```

---

## Testing Your Security Rules

### Test 1: Public Read Access (Should Work)

**Open Browser Console** on your public website and run:
```javascript
// This should work - anyone can read team members
import { db } from './assets/js/firebase_config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const teamMembers = await getDocs(collection(db, "team_members"));
console.log("Team members:", teamMembers.docs.length);
// Should return the count without errors
```

### Test 2: Unauthorized Write (Should Fail)

**Without logging in**, try to write:
```javascript
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// This should FAIL with permission error
await addDoc(collection(db, "team_members"), {
  name: "Hacker",
  role: "Unauthorized"
});
// Expected: FirebaseError: Missing or insufficient permissions
```

### Test 3: Authorized Write (Should Work)

**After logging in** to admin panel:
```javascript
// This should WORK - authenticated user can write
await addDoc(collection(db, "team_members"), {
  name: "New Member",
  role: "Developer",
  position: "Executive",
  createdAt: new Date()
});
// Should succeed
```

---

## Security Features Included

### 1. Authentication Required for Writes
- ✅ Only logged-in admins can create/update/delete data
- ✅ Public users can only read data

### 2. Data Validation
- ✅ Required fields are enforced (name, role, position, etc.)
- ✅ Field types are validated (strings, timestamps)
- ✅ String length limits (max 500 characters)
- ✅ Email format validation for contact forms
- ✅ Activity types restricted to predefined values

### 3. Timestamp Protection
- ✅ `createdAt` timestamp cannot be modified after creation
- ✅ Prevents backdating or timestamp manipulation

### 4. Future-Ready Collections
- ✅ Blog posts support (when you add blog feature)
- ✅ Contact form submissions
- ✅ Join request submissions

### 5. Default Deny
- ✅ Any collection not explicitly allowed is blocked
- ✅ Protects against accidental data exposure

---

## Common Errors and Solutions

### Error: "Missing or insufficient permissions"

**Cause**: User is not authenticated or rules haven't been deployed

**Solution**:
1. Check if user is logged in: `firebase.auth().currentUser`
2. Verify rules are deployed in Firebase Console
3. Check browser console for auth errors

---

### Error: "Document does not contain required field: [fieldName]"

**Cause**: Required field is missing in the data being written

**Solution**: Ensure all required fields are included:

**Team Members**:
```javascript
{
  name: "string (required)",
  role: "string (required)",
  position: "string (required)",
  createdAt: timestamp (required),
  photoURL: "string (optional)",
  bio: "string (optional)",
  email: "string (optional)"
}
```

**Activities**:
```javascript
{
  title: "string (required)",
  description: "string (required)",
  activityType: "workshop|event|competition|seminar|hackathon (required)",
  createdAt: timestamp (required),
  date: "string (optional)",
  location: "string (optional)",
  imageURL: "string (optional)",
  registrationLink: "string (optional)",
  status: "upcoming|ongoing|completed (optional)"
}
```

---

### Error: "Value does not match required type"

**Cause**: Field type mismatch (e.g., sending string instead of timestamp)

**Solution**: Use correct Firestore types:
```javascript
import { Timestamp } from "firebase/firestore";

// Correct
createdAt: Timestamp.now()
// or
createdAt: new Date()

// Incorrect
createdAt: "2025-01-07" // String won't work
```

---

## Updating Your Admin Panel Code

Your current code already follows best practices, but ensure all write operations include required fields:

### Example: Creating Team Member
```javascript
await addDoc(collection(db, "team_members"), {
  name: formData.name,           // Required
  role: formData.role,            // Required
  position: formData.position,    // Required
  createdAt: new Date(),          // Required
  photoURL: formData.photoURL || null,
  bio: formData.bio || null,
  email: formData.email || null,
  linkedin: formData.linkedin || null,
  github: formData.github || null
});
```

---

## Additional Security Recommendations

### 1. Restrict API Key (Medium Priority)

Go to: https://console.firebase.google.com/project/acmwebsite-d5101/settings/general/

**Steps**:
1. Scroll to "Your apps" section
2. Click on your web app
3. Click "App settings" (gear icon)
4. Under "API Key", click "Restrict key"
5. Add your domain (e.g., `acmnmiet.edu.in`)

**For localhost testing**, add:
- `localhost`
- `127.0.0.1`

---

### 2. Enable Email Verification (Optional)

If you want extra security, uncomment this in `firestore.rules`:

```javascript
// Change this line in helper functions:
function isAuthenticated() {
  return request.auth != null && request.auth.token.email_verified == true;
}
```

Then ensure admins verify their email after signup.

---

### 3. Implement Admin Role Check (Advanced)

For multi-level access control:

**Step 1**: Add custom claims in Firebase Auth:
```javascript
// Backend/Cloud Function
admin.auth().setCustomUserClaims(uid, { admin: true });
```

**Step 2**: Update rules to check role:
```javascript
function isAdmin() {
  return request.auth != null && request.auth.token.admin == true;
}

allow write: if isAdmin();
```

---

## Monitoring and Auditing

### Check Rule Usage
1. Go to Firebase Console → Firestore → Usage tab
2. Monitor denied requests
3. If you see spikes in denied requests, someone might be probing your database

### Enable Audit Logs (Firebase Blaze Plan)
- Track all database access
- Monitor suspicious activity
- Set up alerts for unusual patterns

---

## Next Steps After Deployment

1. ✅ Deploy rules using Method 1 or Method 2
2. ✅ Test all three test scenarios above
3. ✅ Try creating/editing/deleting from admin panel
4. ✅ Verify public pages can still read data
5. ✅ Monitor Firebase Console for any errors

---

## Support

If you encounter issues:
1. Check Firebase Console → Firestore → Rules tab for syntax errors
2. Look at browser console for detailed error messages
3. Verify authentication status: `console.log(firebase.auth().currentUser)`

---

## File Locations

- **Rules File**: `firestore.rules` (project root)
- **Config File**: `assets/js/firebase_config.js`
- **Auth Guard**: `assets/js/auth_guard.js`

---

**Security Status**: 🔒 Production-Ready
**Last Updated**: January 2025

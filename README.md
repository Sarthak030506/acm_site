# ACM NMIET Student Chapter Website

Official website for the ACM (Association for Computing Machinery) student chapter at NMIET. A full-stack web application featuring a public-facing site and a protected admin panel for content management.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (ES6 Modules) |
| Styling | Tailwind CSS v3 (CDN), Material Symbols |
| Database | Firebase Firestore |
| Auth | Firebase Authentication |
| Hosting | Firebase Hosting / Netlify |
| Analytics | Firebase Analytics |

---

## Project Structure

```
stitch_acm_site/
│
├── assets/
│   └── js/
│       ├── firebase_config.js       # Firebase initialization & exports
│       ├── navbar_loader.js         # Dynamic navbar injection
│       ├── footer_loader.js         # Dynamic footer injection
│       └── auth_guard.js            # Redirects unauthenticated users
│
├── components/
│   ├── navbar.html                  # Shared navigation component
│   └── footer.html                  # Shared footer component
│
├── PUBLIC PAGES
│   ├── home_page/
│   ├── acm_nmiet_page/
│   ├── what_is_acm_page/
│   ├── focus_areas_page/
│   ├── our_team_page/
│   ├── upcoming_activities_page/
│   ├── past_events_page/
│   ├── event_detail_page/
│   ├── join_acm_page/
│   └── contact_page/
│
├── ADMIN PAGES (auth required)
│   ├── admin_panel_login_screen/
│   ├── admin_panel_dashboard/
│   ├── admin_team_members_list_view_page/
│   ├── admin_team_member_editor_page/
│   ├── admin_team_sections_page/
│   ├── admin_activities_list_view_page/
│   ├── admin_activity_editor_page/
│   ├── admin_blog_list_view_page/
│   ├── admin_blog_post_editor_page/
│   └── admin_contact_page_content_editor/
│
├── index.html                       # Root redirect → home_page
├── firebase.json                    # Firebase project config
├── firestore.rules                  # Firestore security rules
├── netlify.toml                     # Netlify hosting config
└── START_SERVER.bat                 # Local dev server launcher
```

---

## Features

### Public Website
- **Home** — Hero section, feature highlights, preview of upcoming activities
- **About ACM NMIET** — Vision, mission, and chapter roadmap
- **Our Team** — Dynamically loaded team members from Firestore
- **Activities** — Upcoming and past events with filtering by type (workshop, seminar, hackathon, etc.)
- **Event Detail** — Full event view with image gallery and registration link
- **Join ACM** — Membership application form (submitted to Firestore)
- **Contact** — Contact form (submitted to Firestore)

### Admin Panel
Accessible only to authenticated Firebase users.

- **Dashboard** — Quick links to all management sections
- **Team Management** — Create, edit, delete team members and sections
- **Activity Management** — Create and manage events with images, dates, status, and type
- **Blog Management** — Draft and publish blog posts
- **Contact Content Editor** — Update contact page details

### Technical Highlights
- Component-based architecture (navbar/footer loaded dynamically)
- Dark mode support
- Mobile-responsive layout
- Real-time Firestore data syncing
- Auth guard protecting all admin routes

---

## Firestore Data Model

| Collection | Public Read | Public Write | Auth Write |
|---|---|---|---|
| `activities` | Yes | No | Yes |
| `team_members` | Yes | No | Yes |
| `team_sections` | Yes | No | Yes |
| `blog_posts` | Yes | No | Yes |
| `contact_submissions` | No | Yes | Yes |
| `join_requests` | No | Yes | Yes |

### Activity Types
`workshop` · `event` · `competition` · `seminar` · `hackathon`

### Activity Status
`upcoming` · `ongoing` · `completed`

---

## Local Development

### Option 1 — Python (recommended)
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`

### Option 2 — Node.js
```bash
npx http-server -p 8000
```

### Option 3 — Windows Batch Script
Double-click `START_SERVER.bat` — it auto-detects Python or Node.js.

### Option 4 — VS Code
Install the **Live Server** extension and click **Go Live**.

> **Note:** The site must be served over HTTP (not opened as a file) for Firebase modules to load correctly.

---

## Deployment

### Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Deploy
firebase deploy --only hosting
```

### Firestore Security Rules
```bash
firebase deploy --only firestore:rules
```

### Netlify
Push to the `main` branch — Netlify auto-deploys from the root directory.

Redirect rules are configured in `netlify.toml`:

| URL | Redirects To |
|-----|-------------|
| `/` | `/home_page/code.html` |
| `/home` | `/home_page/code.html` |
| `/team` | `/our_team_page/code.html` |

---

## Firebase Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Firestore Database** and **Authentication** (Email/Password)
3. Copy your Firebase config into `assets/js/firebase_config.js`
4. Deploy Firestore rules: `firebase deploy --only firestore:rules`
5. Create an admin user via Firebase Authentication Console

---

## Admin Access

1. Navigate to `/admin_panel_login_screen/code.html`
2. Sign in with your Firebase Authentication credentials
3. You will be redirected to the admin dashboard

All admin pages are protected by `auth_guard.js` — unauthenticated users are automatically redirected to the login screen.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: describe your change"`
4. Push and open a Pull Request

---

## License

This project is maintained by the ACM NMIET Student Chapter.

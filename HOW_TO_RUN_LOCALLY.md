# How to Run ACM Website Locally

## The Problem

Opening HTML files directly (`file:///`) doesn't work with ES6 modules due to CORS restrictions. You MUST use a local web server.

---

## Solution: Start Local Server

### Method 1: Use START_SERVER.bat (Easiest)

1. **Double-click** `START_SERVER.bat` in this folder
2. A terminal window opens showing:
   ```
   Starting server on http://localhost:8000
   ```
3. Open your browser and go to:
   - **Admin Panel**: http://localhost:8000/admin-login/
   - **Public Site**: http://localhost:8000/home/
   - **Team Page**: http://localhost:8000/team/
   - **Activities**: http://localhost:8000/events/

4. **To Stop**: Press `Ctrl+C` in the terminal window

---

### Method 2: Manual Python Server

```bash
# Open terminal in this folder
cd C:\Users\hp\Desktop\stitch_acm_site\stitch_acm_site

# Start server
python -m http.server 8000

# Open browser to:
# http://localhost:8000/admin-login/
```

---

### Method 3: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click any HTML file
3. Select "Open with Live Server"
4. Opens automatically in browser

---

### Method 4: Node.js http-server

```bash
# Install globally (one-time)
npm install -g http-server

# Run from project folder
cd C:\Users\hp\Desktop\stitch_acm_site\stitch_acm_site
http-server -p 8000

# Open: http://localhost:8000
```

---

## Testing Both Admin + Public Site Together

### Terminal 1 - Admin Panel:
```bash
cd C:\Users\hp\Desktop\stitch_acm_site\stitch_acm_site
python -m http.server 8000
```
Open: http://localhost:8000/admin-login/

### Terminal 2 - Public Site (Optional - Different Port):
```bash
cd C:\Users\hp\Desktop\stitch_acm_site\stitch_acm_site
python -m http.server 8001
```
Open: http://localhost:8001/home/

**OR** just use one server on port 8000 for both (recommended)

---

## Troubleshooting

### "python is not recognized"

**Solution**: Install Python
1. Download: https://www.python.org/downloads/
2. **IMPORTANT**: Check "Add Python to PATH" during installation
3. Restart terminal

### "Address already in use"

**Solution**: Port 8000 is busy
```bash
# Use different port
python -m http.server 8080

# Then open: http://localhost:8080
```

### Login still not working

**Check browser console** (F12):
1. Press F12 to open Developer Tools
2. Click "Console" tab
3. Look for red error messages
4. Share the error here

---

## Quick Test

1. Run: `START_SERVER.bat`
2. Open: http://localhost:8000/admin-login/
3. Open browser console (F12)
4. Try to login
5. Check console for errors (should see Firebase auth messages)

---

## Why This Matters

| Opening Method | Modules Work? | Firebase Works? |
|----------------|---------------|-----------------|
| Double-click HTML (file:///) | ❌ No | ❌ No |
| Local server (http://localhost) | ✅ Yes | ✅ Yes |

**Always use a local server for development!**

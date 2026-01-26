@echo off
echo ================================================
echo   ACM NMIET Website - Local Development Server
echo ================================================
echo.
echo Starting server on http://localhost:8000
echo.
echo Admin Panel: http://localhost:8000/admin_panel_login_screen/code.html
echo Public Site: http://localhost:8000/home_page/code.html
echo.
echo Press Ctrl+C to stop the server
echo ================================================
echo.

python -m http.server 8000

@echo off
echo ========================================================
echo   Launching Teja Ayyappa Portfolio (Ultra-Dark Bento)
echo ========================================================
echo.
echo Starting local web server on port 8000...
start "" http://localhost:8000
python -m http.server 8000
pause

REM Create a run.bat file to chain both: this is a comment to myself

@echo off
powershell -ExecutionPolicy Bypass -File "C:\AD_Exports\export_users.ps1"
node "C:\AD_Exports\cleanAD.js"
pause

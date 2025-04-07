

# export_users.ps1  Here’s the PowerShell script to export AD users:


Import-Module ActiveDirectory

$users = Get-ADUser -Filter * -Property DisplayName, EmailAddress, Department, Title, Enabled | # i may tweak this shit tbh
Select-Object DisplayName, EmailAddress, Department, Title, Enabled

$users | ConvertTo-Json -Depth 3 | Out-File "$PSScriptRoot\output\users.json"
Write-Output "✅ Exported AD users to output/users.json"

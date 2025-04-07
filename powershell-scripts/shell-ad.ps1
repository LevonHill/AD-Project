# This is a single-line comment
Write-Output "Hello, World!"  # You can also add a comment at the end of a line

<#
This is a multi-line comment.
It can span multiple lines.
Useful for explaining a block of code.
#>
Write-Output "Hello again!"



<#Here’s a basic PowerShell script to get AD users and export to a JSON file:#>

# Run in elevated PowerShell: script#1
Import-Module ActiveDirectory

Get-ADUser -Filter * -Property DisplayName, EmailAddress, Department, Title, Enabled | #could modify this if i wanted to ill think about it....
Select-Object DisplayName, EmailAddress, Department, Title, Enabled | #could modify this if i wanted to ill think about it....
ConvertTo-Json -Depth 3 |
Out-File "C:\AD_Exports\users.json"

<#🔥 Customize this:

Add SamAccountName, UserPrincipalName, or LastLogonDate depending on your use case.#>
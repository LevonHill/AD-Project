const fs = require("fs");

// Load and parse the raw JSON
const rawData = fs.readFileSync("C:/AD_Exports/users.json");
let users = JSON.parse(rawData);

// Filter out disabled accounts
let activeUsers = users.filter(user => user.Enabled === true);

// Clean the names (e.g., remove extra whitespace)
activeUsers = activeUsers.map(user => ({
  name: user.DisplayName?.trim(),
  email: user.EmailAddress?.toLowerCase(),
  department: user.Department?.trim(),
  title: user.Title?.trim(),
}));

// Save cleaned data
fs.writeFileSync("C:/AD_Exports/cleaned_users.json", JSON.stringify(activeUsers, null, 2));

console.log(`🧹 Cleaned ${activeUsers.length} users.`);

// 💡 Bonus (Optional Enhancements)
//Add checks for null/undefined
//Validate emails with regex
//Group users by department
//Export to CSV using json2csv module

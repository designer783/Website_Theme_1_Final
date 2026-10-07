const fs = require('fs');
const c = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

const regex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/;
const match = c.match(regex);
if (match) {
  console.log(match[1]);
} else {
  console.log("No match");
}

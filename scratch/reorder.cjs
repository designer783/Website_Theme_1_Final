const fs = require('fs');

const path = 'f:/EP_FahdQ/ET_Websites/Digital_Build_Sheet_Final_Files/Final_ integrated_Version/Digital-Build-Sheet-Oct6_Final/Digital-Build-Sheet-Oct6_Final/src/pages/HomePage.tsx';

let content = fs.readFileSync(path, 'utf8');

// Match each item
// We know they are separated by comments like {/* 1. Standard Factory Features */}
// Let's use regex to extract them
const regex1 = /(\{\/\*\ 1\.\ Standard Factory Features \*\/\}.*?)(?=\{\/\*\ 2\.\ Optional)/s;
const regex2 = /(\{\/\*\ 2\.\ Optional Factory Equipment \*\/\}.*?)(?=\{\/\*\ 3\.\ MSRP)/s;
const regex3 = /(\{\/\*\ 3\.\ MSRP \& Invoice Price \*\/\}.*?)(?=\{\/\*\ 4\.\ Fuel Economy)/s;
const regex4 = /(\{\/\*\ 4\.\ Fuel Economy and Emissions \*\/\}.*?)(?=\{\/\*\ 5\.\ Safety)/s;
const regex5 = /(\{\/\*\ 5\.\ Safety \& Ratings \*\/\}.*?)(?=\{\/\*\ 6\.\ Warranty)/s;
const regex6 = /(\{\/\*\ 6\.\ Warranty Information \*\/\}.*?)(?=<\/div>\s*<\/div>\s*<\/section>)/s;

const match1 = content.match(regex1)[1];
const match2 = content.match(regex2)[1];
const match3 = content.match(regex3)[1];
const match4 = content.match(regex4)[1];
const match5 = content.match(regex5)[1];
const match6 = content.match(regex6)[1];

// Replace the entire block
const allContentRegex = /(\{\/\*\ 1\.\ Standard Factory Features \*\/\}.*?)(?=<\/div>\s*<\/div>\s*<\/section>)/s;

const newBlock = match1 + match2 + match3 + match6 + match4 + match5;

content = content.replace(allContentRegex, newBlock);

fs.writeFileSync(path, content, 'utf8');
console.log('Reordered icons successfully.');

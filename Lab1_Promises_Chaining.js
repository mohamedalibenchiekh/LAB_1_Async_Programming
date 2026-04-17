// Lab1_Promises_Chaining.js
const fs = require('fs').promises;
// Read event1.json, then event2.json, then event3.json
// ONE AFTER ANOTHER
fs.readFile('event1.json', 'utf8')
 .then(data1 => {
 console.log('✅ Read event1:', data1);
 return fs.readFile('event2.json', 'utf8'); // Chain to next operation
 })
 .then(data2 => {
 console.log('✅ Read event2:', data2);
 return fs.readFile('event3.json', 'utf8'); // Chain again
 })
 .then(data3 => {
 console.log('✅ Read event3:', data3);
 console.log('✅ All files read in sequence!');
 })
 .catch(error => {
    console.log('❌ Error:', error.message);
 });
console.log('Starting to read files...');
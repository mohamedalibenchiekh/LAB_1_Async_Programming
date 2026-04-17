// Lab1_AsyncAwait.js
// THIS IS THE WAY TO WRITE ASYNC CODE IN 2026!
const fs = require('fs').promises;
// NOTE: Function must be marked as "async"
async function readEventFile(filename) {
 try {
 // AWAIT means "wait for this operation to finish"
 const data = await fs.readFile(filename, 'utf8');
 console.log('✅ File read successfully!');

 // Parse the data
 const event = JSON.parse(data);
 return event;

 } catch (error) {
 // If ANYTHING goes wrong, catch it here
 console.log('❌ Error:', error.message);
 throw error;
 }
}
// CALLING AN ASYNC FUNCTION:
// You still need "await" when you call it!
async function main() {
 try {
 console.log('Starting to read event...\n');

 const event = await readEventFile('sample.txt');

 console.log('Event data:', event);
 console.log('\n✅ Complete!');

 } catch (error) {
 console.log('❌ Something went wrong:', error.message);
 }
}
// RUN THE MAIN FUNCTION:
main();
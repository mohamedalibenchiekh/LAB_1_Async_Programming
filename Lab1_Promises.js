// Lab1_Promises.js
// Promises are the modern way to handle async operations
const fs = require('fs').promises; // Note: .promises version!
console.log('=== READING FILE WITH PROMISES ===\n');
// Create a Promise that reads a file
function readEventFile(filename) {
    return fs.readFile(filename, 'utf8')
    // .then() runs AFTER file is read
    .then(data => {
        try {
            return JSON.parse(data); // Try to parse as JSON
        } catch (err) {
            throw err; // If parsing fails, throw error
        }
    })
    // .catch() runs if ANYTHING goes wrong
    .catch(error => {
        console.log('❌ Error reading file:', error.message);
        throw error; // Re-throw so calling code knows there was error
    });
}
// USING THE PROMISE:
readEventFile('sample.txt')
 .then(data => {
    console.log('✅ Successfully read file!');
    console.log('Data:', data);
 })
 .catch(error => {
    console.log('❌ Final error handler:', error.message);
 })
 .finally(() => {
    console.log('✅ Operation completed (either success or failure)');
 });
console.log('File reading started (promise created)...');
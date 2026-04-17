// Lab1_Callbacks.js - IMPROVED with error handling
const fs = require('fs');
function readEventFile(filename, callback) {
 // This function takes a CALLBACK parameter
 fs.readFile(filename, 'utf8', (error, data) => {
 if (error) {
 // Something went wrong
 callback(error, null); // Pass error to callback
 } else {
 try {
 // Try to parse JSON
 const eventData = JSON.parse(data);
 callback(null, eventData); // Pass data to callback
 } catch (parseError) {
 // JSON parsing failed
 callback(parseError, null);
 }
 }
 });
}
// USING THE CALLBACK:
readEventFile('sample.txt', (error, data) => {
 if (error) {
 console.log('❌ Error:', error.message);
 } else {
 console.log('✅ Data:', data);
 }
});
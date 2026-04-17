// Lab1_EventLogger.js
// Complete Event Logger System using async/await!
const fs = require('fs').promises;
const path = require('path');
// STEP 1: Create sample events
async function createSampleEvents() {
 const events = [
 {
 id: 1,
 title: 'Tech Conference 2024',
 date: '2024-03-15',
 capacity: 500,
 registrations: 250
 },
 {
 id: 2,
 title: 'Web Dev Workshop',
 date: '2024-04-20',
 capacity: 50,
 registrations: 48
 },
 {
 id: 3,
 title: 'JavaScript Masterclass',
 date: '2024-05-10',
 capacity: 100,
 registrations: 95
 }
 ];

 for (const event of events) {
 const filename = `event_${event.id}.json`;
 await fs.writeFile(filename, JSON.stringify(event, null, 2));
 }

 console.log('✅ Created 3 sample event files\n');
}
// STEP 2: Read all events (PARALLEL!)
async function readAllEvents() {
 try {
 console.log('📖 Reading all event files...');

 const files = await fs.readdir('.')
  const eventFiles = files.filter(f => f.startsWith('event_') &&
f.endsWith('.json'));

 // Read all events IN PARALLEL
 const eventPromises = eventFiles.map(file =>
 fs.readFile(file, 'utf8').then(data => JSON.parse(data))
 );

 const events = await Promise.all(eventPromises);
 console.log(`✅ Read ${events.length} events\n`);

 return events;
 } catch (error) {
 console.log('❌ Error reading events:', error.message);
 throw error;
 }
}
// STEP 3: Process and analyze events
async function analyzeEvents(events) {
 console.log('📊 ANALYZING EVENTS:\n');

 // Sort by date
 events.sort((a, b) => new Date(a.date) - new Date(b.date));

 for (const event of events) {
 const occupancy = (event.registrations / event.capacity * 100).toFixed(1);
 console.log(`📍 ${event.title}`);
 console.log(` Date: ${event.date}`);
 console.log(` Occupancy: ${event.registrations}/${event.capacity}
(${occupancy}%)`);
 console.log();
 }
}
// STEP 4: Save analysis to log file
async function saveAnalysisLog(events) {
 try {
 console.log('💾 Saving analysis to log...');

 let log = `EVENT ANALYSIS LOG\nCreated: ${new Date().toISOString()}\n\n`;

 for (const event of events) {
 const occupancy = (event.registrations / event.capacity * 100).toFixed(1);
 log += `${event.title} - ${occupancy}% full\n`;
 }

 await fs.writeFile('analysis.log', log);
 console.log('✅ Log saved to analysis.log\n');
 } catch (error) {
 console.log('❌ Error saving log:', error.message);
 }
}
// STEP 5: Run everything!
async function main() {
 try {
 console.log('🚀 EVENT LOGGER SYSTEM\n');
 console.log('='.repeat(40) + '\n');

 // Create test events
 await createSampleEvents();

 // Read all events
 const events = await readAllEvents();

 // Analyze events
 await analyzeEvents(events);

 // Save results
 await saveAnalysisLog(events);

 console.log('✅ ALL TASKS COMPLETED!');

 } catch (error) {
 console.log('❌ FATAL ERROR:', error.message);
 }
}
// START THE PROGRAM:
main();
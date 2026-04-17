// Lab1_EventLoop.js
// This code shows you the ORDER that JavaScript executes things
console.log('🟢 STEP 1: I run first (synchronous code)');
// setTimeout is ASYNCHRONOUS (takes time)
setTimeout(() => {
    console.log('This takes 1 second!');
}, 1000);
// Add more Promises
Promise.resolve()
 .then(() => console.log('Promise 1'))
 .then(() => console.log('Promise 2'))
 .then(() => console.log('Promise 3'));
// Promise is ASYNCHRONOUS (but different type)
Promise.resolve()
 .then(() => {
    console.log('🔵 STEP 2: I run before setTimeout (micro task)');
 });
console.log('🟢 STEP 4: I run second (synchronous code)');
// EXPECTED OUTPUT:
// 🟢 STEP 1: I run first (synchronous code)
// 🟢 STEP 4: I run second (synchronous code)
// 🔵 STEP 2: I run before setTimeout (micro task)
// 🟡 STEP 3: I run after 0ms delay (macro task)
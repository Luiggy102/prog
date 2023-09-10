console.log("Hello => number 1");

// set inmeditate
// corre la mismo tiempo de la sig. iteración del event loop
setImmediate(() => {
  console.log("Running before the timeout => number 3");
});

// settimeout
// corre la mismo tiempo de la sig. iteración del event loop
setTimeout(() => {
  console.log("The timeout running last => number 4");
}, 0);

process.nextTick(() => {
  console.log("Running at next tick => number 2");
});

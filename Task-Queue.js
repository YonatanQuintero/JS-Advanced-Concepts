//Callback Queue - Task Queue
setTimeout( () => { console.log('1','is the loneliest number')}, 0 )

setTimeout( () => { console.log('2', 'can be as bad as one') }, 10)

//2 Job Queue - Microtaxk queue
Promise.resolve('hi').then((data) => console.log('2', data))

//3
console.log('3', 'is a crowd')

//Ouput
// 3 is a crowd
// 2 hi
// 1 is the loneliest number
// 2 can be as bad as one

//Promises has priority over setTimeout

//Javascript runtime
// - Callstack
// - Memory heap
// - Web API
// - Job Queue
// - Callback Queue
// - Event Loop
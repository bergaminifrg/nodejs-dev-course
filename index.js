const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// const user = os.userInfo();
// '' or "" for normal text, `` for text with variables inside
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}!`, function (err){
//     if (err) {
//         console.log('Unable to write to file'); //Unable to call an asynchronous function without callback
//     }
// });

console.log(notes.add(20,-5));


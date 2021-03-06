// Node Modules //
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// User created modules //
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs',argv);

switch(command) {
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'remove':
        notes.removeNote(argv.title);
        break;
    case 'read':
        notes.getNote(argv.title);
        break;
    default:
        console.log('Command not recognized');
        break;
}

// var = function() {}
// var = () => {}
var add = (number_x, number_y) => {
    return (number_x + number_y);
}
var addNote = (title, body) => {
    console.log('Title:',title, ' Body:', body);
}
var getAll = () => {
    console.log('Getting all notes');
}
var getNote = (title) => {
    console.log('Getting',title);
}
var removeNote = (title) => {
    console.log('Removing',title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
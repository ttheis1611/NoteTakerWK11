const util = require('util');
const fs = require('fs');
//uuid is a package to create unique ids
const uuid = require("uuidv1");

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

// class function

class Store {
    // read function
    read() {
        return readAsync('db/db.json', 'utf8');
    }
    // write function
    write(note) {
        return writeAsync('db/db.json', JSON.stringify(note));
    }
    // get function
    getNotes() {
        return this.read().then((notes) => {
            let parseNotes;
            // if parsedNotes does not return an array, create an empty array
            try {
                parseNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parseNotes = [];
            }
            return parseNotes;
        });
    }
    // add note function
    addNote(note) {
        const { title, text } = note;

        if (!title || !text) {
            throw new Error("Note 'title' and 'text' cannot be blank");
        }

        // New note to get id from uuid
        const newNote = { title, text, id: uuid/v1() };

        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    }
    // remove note function
    removeNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    }
};

module.exports = new Store();




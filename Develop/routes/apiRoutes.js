
var notesDB = require("../db/notesDB")

const util = require("util");

const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notesDB);
    });

    app.post("/api/notes", function(req, res) {

        let newNote = req.body;

        let lastId = notesDB[notesDB.length - 1]["id"];

        let newId = lastId + 1;

        newNote["id"] = newId;
        

        console.log("Req.body:", req.body);
        
        notesDB.push(newNote);


        writeFileAsync("./db/notesDB.json", JSON.stringify(notesDB)).then(function() {

            console.log("notesDB.json has been updated!");

        });

        res.json(newNote);
    });

        app.delete("/api/notes/:id", function(req, res) {
    
            console.log("Req.params:", req.params);
            let chosenId = parseInt(req.params.id);
            console.log(chosenId);
    
    
            for (let i = 0; i < notesDB.length; i++) {
                if (chosenId === notesDB[i].id) {
                    notesDB.splice(i,1);
                    
                    let noteJSON = JSON.stringify(notesDB, null, 2);
    
                    writeFileAsync("./db/notesDB.json", noteJSON).then(function() {
                    console.log ("Chosen note has been deleted!");
                });                 
                }
            }
            res.json(notesDB);
        });
            
    };
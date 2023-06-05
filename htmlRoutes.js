const router = require('express').Router();
const path = require('path');


  // get request so that the /notes endpoint is sent the file notes.html
  router.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "/Users/santana/Desktop/NOTETAKERR/public/notes.html"))
  );

//wildcard to send to homepage if the user goes anywhere else
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/Users/santana/Desktop/NOTETAKERR/public/notes.html"));
  });

  
module.exports = router;
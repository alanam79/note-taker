const router = require("express").Router()
const path = require("path")

  //route to serve index.html/front page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

 //route to notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});


module.exports = router;
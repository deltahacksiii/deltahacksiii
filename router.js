const express = require('express');
const router = express.Router();
const profile = require('./views/profile');


// Ex: GET - http://localhost:3000/
router.get('/', (req, res) => {
	res.send('Hello world!');
});

router.get('/profile', (req, res) => {
    const a = req.query.atest;
    const b = req.query.btest;
	res.send(profile(a + " " + b));

});


module.exports = router;

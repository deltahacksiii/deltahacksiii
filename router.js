const express = require('express');
const router = express.Router();

// Ex: GET - http://localhost:3000/
router.get('/', (req, res) => {
	res.send('Hello world!');
});


module.exports = router;

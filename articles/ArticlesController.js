const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send("Rota para artigos");
})

module.exports = router;
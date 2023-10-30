const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.send("Welcome")
})
// router.post('/',)
// router.put('/',)
// router.delete('/',)

module.exports = router;
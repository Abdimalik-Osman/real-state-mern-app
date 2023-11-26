const express = require('express');
const { updateUser } =  require( '../controllers/user.controller.js');
const { verifyToken } =  require( '../utils/verifyUser.js');

const router = express.Router();

router.get('/',(req,res) => {
    res.send("Welcome")
})
router.post('/update/:id', verifyToken, updateUser)
// router.post('/',)
// router.put('/',)
// router.delete('/',)

module.exports = router;
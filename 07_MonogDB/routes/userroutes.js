const express = require('express')
const {
    handleGetAllUsers,
    handleGetUserById,
    handlePostUser    
} = require('../controllers/user.js')

const router = express.Router();


router.route('/').get(handleGetAllUsers).post(handlePostUser)

router.route('/:id').get(handleGetUserById)
module.exports = router;

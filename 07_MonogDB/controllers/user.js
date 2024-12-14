const User = require('../models/user.js')

async function handleGetAllUsers(req, res){
    res.json(users);
}
async function handleGetUserById(req, res){
    const id = Number(req.params.id);
    const user = users.find((users) => users.id == id);
    return res.json(user);
}
async function handlePostUser(req, res){
    const body = req.body;
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });


    console.log("Result: ", result)
    return res.json({ msg: "Sucess" })
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handlePostUser
}
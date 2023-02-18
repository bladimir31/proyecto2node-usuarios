
const userControllers = require ('./users.controllers')

//Get all user
const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
         .then((data) => {
             res.status(200).json(data)
         })
         .catch((error) => {
             res.status(400).json(error)
         })
}

//Get user by Id
const getUserById = (req, res) => {
         const id = Number(req.params.id)

    userControllers.findUserById(id)
         .then(data => {
            if(data){
            res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

//Create new user
const postNewUser = (req, res) => {
    const userObj = req.body

    userControllers.createNewUser(userObj)
       .then(data => {
            res.status(201).json(data)
    })
        .catch(error => {
            res.status(400).json(error)
    })

}



module.exports = {
    getAllUsers,
    getUserById,
    postNewUser

}
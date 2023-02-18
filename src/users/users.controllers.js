const usersDB = [
    {
      "id" :1,
      "firstName": "Bladimir",
      "lastName": "Sanchez",
      "email": "blasin@gmail.com",
      "password": "root",
      "age": 25
    }
]
let baseId = 2

const findAllUsers =async () => {
    return await usersDB
}

const findUserById = async (id) => {
    const filteredUser = await usersDB.find( user => user.id === id)
    return filteredUser
}

const createNewUser = async (userObj) => {
    const newUser = {
        id: baseId++,
        firstName: userObj.firstName ,
        lastName: userObj.lastName ,
        email:userObj.email ,
        password: userObj.password ,
        age: userObj.age
    }

    await usersDB.push(newUser)

    return newUser
}

/**const uptadeUser = async (id,userObj) => {
    const data = await usersDB.uptade(userObj,{
        where: {
            id : id
        }
    })
    return data[0]
}

const deleteUser = async (id) => {
    const data = await usersDB.destroy({
        where: {
            id : id
        }
    })
    return data
}**/

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}
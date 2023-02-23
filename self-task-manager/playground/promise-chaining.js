require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('63f229ef0374003e73a00c45', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
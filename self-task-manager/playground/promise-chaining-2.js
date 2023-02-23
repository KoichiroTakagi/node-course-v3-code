require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('63f646b78909a0807f019d28').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
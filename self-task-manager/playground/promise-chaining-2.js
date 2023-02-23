require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('63f646b78909a0807f019d28').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('63f62eee04e3200bee519617').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
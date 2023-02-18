// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("63ee2935972d3e069f668b8a") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 33 }).toArray((error, users) => {
    //     console.log(users)
    // })

     db.collection('tasks').findOne({ _id: ObjectID("63ee244e8281a7f0c63cfeab") }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(task)
     })

     db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(tasks)
     })
})
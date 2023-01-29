const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8ca89b27a69f141d697bec252ba23f15&query=37.8267,122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})
const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8ca89b27a69f141d697bec252ba23f15&query=37.8267,122.4233$units=f'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current)
    console.log('%s. It is currently %d  degrees out. It feels like %d degrees out.', response.body.current.weather_descriptions[0], response.body.current.temperature, response.body.current.feelslike)
})
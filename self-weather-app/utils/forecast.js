const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8ca89b27a69f141d697bec252ba23f15&query=' + latitude +',' + longitude + '$units=f'
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another location.', undefined)
        } else {
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                current_degree: response.body.current.temperature,
                feels_like_degree: response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast
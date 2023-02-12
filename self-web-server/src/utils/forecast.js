const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8ca89b27a69f141d697bec252ba23f15&query=' + latitude +',' + longitude + '&units=m'
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another location.', undefined)
        } else {
            // callback(undefined, {
            //     description: body.current.weather_descriptions[0],
            //     current_degree: body.current.temperature,
            //     feels_like_degree: body.current.feelslike
            // })
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is feelslike ' + body.current.feelslike + '.')
        }
    })
}

module.exports = forecast
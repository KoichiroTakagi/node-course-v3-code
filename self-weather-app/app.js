const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=8ca89b27a69f141d697bec252ba23f15&query=37.8267,122.4233$units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log('%s. It is currently %d  degrees out. It feels like %d degrees out.', response.body.current.weather_descriptions[0], response.body.current.temperature, response.body.current.feelslike)
//     }
// })

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/japan.json?access_token=pk.eyJ1IjoidGFuYWtlbjEiLCJhIjoiY2xkaDFzZWFvMTJ2NTNxcHRtanVia3JyZCJ9.Guz5QzXUbVvX7i4_8RhB8w&limit=1'

// request({ url: url2, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to geocode service')
//     } else if (response.body.features.length === 0) {
//         console.log('No match the results. Try another search.')
//     } else {
//         console.log('latitude: %d, longitude: %d', response.body.features[0].center[1], response.body.features[0].center[0])

//         const url = 'http://api.weatherstack.com/current?access_key=8ca89b27a69f141d697bec252ba23f15&query=37.8267,122.4233$units=f'

//         request({ url: url, json: true }, (error, response) => {
//             if (error) {
//                 console.log('Unable to connect to weather service!')
//             } else if (response.body.error) {
//                 console.log('Unable to find location')
//             } else {
//                 console.log('%s. It is currently %d  degrees out. It feels like %d degrees out.', response.body.current.weather_descriptions[0], response.body.current.temperature, response.body.current.feelslike)
//             }
//         })   
//     }
// })

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
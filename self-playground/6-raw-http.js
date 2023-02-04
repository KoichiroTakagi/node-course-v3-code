const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=8ca89b27a69f141d697bec252ba23f15&query=40,-75&units=m'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
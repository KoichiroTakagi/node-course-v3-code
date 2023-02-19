const doWorkCallback = (callabck) => {
    setTimeout(() => {
        callabck('This is my error!', undefined)
        callabck(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})
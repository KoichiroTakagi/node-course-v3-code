const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Number must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    console.log('0')
    const sum = await add(1, 99)
    console.log('2')
    const sum2 = await add(sum, -50)
    console.log('4')
    const sum3 = await add(sum2, -3)
    console.log('6')
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})
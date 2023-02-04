const yargs = require('yargs')
const weather = require('./searchtemp')

// Customize yargs version
yargs.version('1.1.0')

//  Create add command
yargs.command({
    command: '*',
    describe: 'Get temperature to input location name',
    builder: {
        _: {
            describe: 'location name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        weather.searchTemperature(argv._)
    }
})

yargs.parse()

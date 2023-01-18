const fs = require('fs')

const content = JSON.parse(fs.readFileSync('1-json.json', 'utf-8'))
content.name = "Takagi"
content.age = 33
fs.writeFileSync('1-json.json', JSON.stringify(content, null, '    '))
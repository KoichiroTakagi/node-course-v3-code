const fs = require("fs")

// fs.writeFileSync("notes.txt", "My name is Koichi.")

fs.appendFileSync("notes.txt", "I wrote second line.\n")


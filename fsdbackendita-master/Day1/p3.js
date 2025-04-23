const fs = require('fs');

const data = "I am new Data ";

fs.writeFileSync("./data.txt",data);
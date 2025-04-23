const fs = require('fs');

const write=() => {
    const data="I am new Data"
    fs.writeFile("./mydir/data.txt",data,(err) => {
        if(err) console.log(err);
        else console.log("File updated successfully");

    })
}

write();
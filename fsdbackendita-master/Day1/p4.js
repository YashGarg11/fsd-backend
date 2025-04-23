const fs = require('fs');

const read=()=>{
    fs.readFile('./data.txt','utf8',(err,data)=>{
        if(err)
            console.error(err);
        else
            console.log(data)
    
    })
}
console.log("I am before reading")
read();
console.log("I am after reading")
const fs = require('fs');
fs.writeFile('example.txt','Hello,World!', function(e){
    if(e) console.log("aaya mera error")
    console.log("File written successfully");    
})

//write file
const fs = require('fs');
fs.writeFile('example.txt','Hello,World!', function(e){
    if(e) console.log("aaya mera error")
    console.log("File written successfully");    
})

//append file
const fs = require('fs');
fs.appendFile('example.txt','Hello,World!', function(e){
    if(e) console.log("aaya mera error")
    console.log("File written successfully");    
})

//unlink file
const fs = require('fs');
fs.unlink('example.txt', function(e){
    if(e) console.log("aaya mera error")
    console.log("File deleted successfully");    
})

const fs = require('fs');

//Rename file
fs.rename("prachi.txt", "prachi_new.txt", function (err) {
    if (err) {
        console.log("File rename failed");
    } else {
        console.log("File renamed successfully");
    }
});


const fs = require('fs');
//Copy file
fs.copyFile("prachi_new.txt", "prachi_copy.txt", function (err) {
    if (err) {
        console.log("File copy failed");
    } else {
        console.log("File copied successfully");
    }
});
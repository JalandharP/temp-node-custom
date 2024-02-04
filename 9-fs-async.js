const {readFile, writeFile} = require('fs');


readFile("./content/first.txt", 'utf-8', (error, result)=> {
    if(error) {
        console.log("error::", err);
        return
    }
    const first = result;
    let second = ""
   
    readFile("./content/second.txt", 'utf-8', (error, res)=> {
        if(error) {
            console.log("error::", err);
            return
        }
        second = res;

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=> {
            if(err) {
                console.log("Write file error::", err);
                return;
            }
            console.log("file succesfully write in result-async.txt file", result);
        })
    });
    console.log("content in the readfile::", second);


        
})
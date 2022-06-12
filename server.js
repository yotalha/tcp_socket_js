const net = require("net");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const prompt = require('prompt-sync')({sigint: true});


let server = net.createServer(async connection => {
    console.log("new connection");

    connection.on("data", async data => {
        console.log(data.toString())

        await readline.question("msg to Client?\n ",test => {
            // console.log("message from server ", test)
    
            connection.write("Server: " + test)
        })
    

    })

    
    connection.on("end", () => {
        console.log("disconnected")
        readline.close()
    })

    // let msg = prompt("> ")

    
    // for(;;){
        
    // }
})

server.listen(50000, () => {
    console.log("waiting for a connection");
})


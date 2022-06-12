const net = require("net");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const prompt = require('prompt-sync')({sigint: true});



const options = {
    port: 50000
}

let client = net.connect(options, () => {
    console.log("connected!")

    // let msg = prompt("> ")

    // client.write("Client: " + msg)

})

let msg = readline.question("msg to Server?\n ", test => {
    // console.log("msg from client ", test)

    client.write("Client: "+test)

})

client.on("data", async data => {
    console.log(data.toString())
    readline.question("msg to Server?\n ", async test => {
        // console.log("msg from client ", test)
    
        await client.write("Client: "+test)
    
    })
})


client.on("end", () => {
    console.log("disconnected")
    readline.close()
})







// for(;;){
    

// }



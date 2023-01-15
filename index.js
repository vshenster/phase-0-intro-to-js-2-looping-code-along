function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message)
    }
    return messages;
}

console.log(writeCards(["Charlie", "Samip", "Ali", 'Wes'], "christmas"))


function countDown() {
    //console.log('In function')
    let startingNumber = 10;
    while (startingNumber >= 0) {
        console.log(startingNumber--)
        
    }

    //countDown();
}


/*function countDown() {
    let x = 10;
    while (x >= 0) {
        console.log(x--);
    }
}*/

countDown()
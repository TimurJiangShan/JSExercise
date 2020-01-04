
function* createConversation(string) {
    if(string === 'english'){
        yield setInterval(() => {
            console.log(`hello there`);
        }, 3000);
    }else {
        yield setInterval(() => {
            console.log(`gibberish`);
        }, 3000)
    }
}

console.log(createConversation('english').next());
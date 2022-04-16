function rps(yourchoice) {
    console.log(yourchoice);
    var humanchoice, botchoice;
    // humanchoice=yourchoice.id;
    botchoice=numbertochoice(random());
    alert(botchoice);
    // results=decidewinner(humanchoice,botchoice);
    // message=finalmessage(results)
    // rpsfrontend(yourchoice.id, botchoice, message);


}
function random(){
    return Math.floor(Math.random()*3);
}
function numbertochoice(number){
    return ['rock','paper','scissor'][number]
}
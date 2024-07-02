// code your solution here
function saturdayFun(funActivity = "roller-skate") {
    return `This Saturday, I want to ${funActivity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

console.log(saturdayFun());


function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork("work from home.");

console.log(mondayWork());

function starHighlighter(input){
    return `You are *${input}*!`;
}

function logicalOrHighlighter(input){
    return `You are ||${input}||!`;
}

function wrapAdjective(adjective) {
    if(adjective === "*"){
        return starHighlighter;
    }

    if(adjective === '||'){
        return logicalOrHighlighter;
    }
}

let result = wrapAdjective('*')
let emphatic = result("a hard worker")
console.log(emphatic)






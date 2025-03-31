function main(){
let questions= 5;
let right = askQuestions(questions);
if (right == questions) alert("perfect!")
else alert("You got" + right + "out of" + questions);
}

function askQuestions(questions){
    let question = 1;
    while (question <= questions){
        right += askQuestions(question);
        question ++;
    }
return right;
}

function askQuestion(question);
let a = Math.floor(Math.random()*6)+3;
let b = Math.floor(Math.random()*6)+3;
let product = a*b;


function main(){
let questions= 5;
let right = askQuestions(questions);
if (right == questions) alert("perfect!")
else alert("You got" + right + "out of" + questions);
}

function askQuestions(questions){
    let right = 0;
    let question = 1;
    while (question <= questions){
       right += askQuestion(question);
        question ++;
    }
return right;
}

function askQuestion(question){
let a = Math.floor(Math.random()*6)+3;
let b = Math.floor(Math.random()*6)+3;
let product = a*b;
let equation = "Question" + question + ": " + a + "*" + b + "=?";
let answer = prompt(equation);
if (answer == product){
     alert("correct!");
    return true;
}
else {
    alert("Incorrect!");
    return false;
    }
}
// Task 1 JS

document.getElementById("first-button").addEventListener("click", function(){input(1)});
document.getElementById("operation-button").addEventListener("click", function(){input(2)});
document.getElementById("second-button").addEventListener("click", function(){input(3)});
function input(y){
    let x = window.prompt("Write down the value you want to add");
    switch(y){
        case 1:
            document.getElementById("first-number").innerHTML = x;
            break;
        case 2:
            document.getElementById("operation-value").innerHTML = x;
            break;
        default:
            document.getElementById("second-number").innerHTML = x;
    }
}
document.getElementById("calc").addEventListener("click", calculate);
function calculate(){
    let x = Number(document.getElementById("first-number").innerHTML);
    let y = Number(document.getElementById("second-number").innerHTML);
    let op = document.getElementById("operation-value").innerHTML;
    let result;
    switch(op){
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        default:
            console.log("Wrong input somehwere");
    }
    console.log("Result is " + result);
    window.alert("Result is " + result);
}

// Task 2
document.getElementById("marks-button").addEventListener("click", task2);
function task2(){
    mark = parseInt(window.prompt("Please enter the marks"));
    let text;
    if (mark>=90) text="A+";
    else if (mark>=80) text="A";
    else if (mark>=70) text="B";
    else if (mark>=60) text="C";
    else if (mark>=50) text="D";
    else { text = "FAIL";}
    window.alert(text);
    document.write(text);
}
// Task 3
document.getElementById("pi").addEventListener("click", task3);
const const_pi = 3.14;
function task3(){
    let radius = window.prompt("What's the value of the radius?");
    window.alert(2*const_pi*radius);
}
// Task 4
document.getElementById("first-button-compare").addEventListener("click",function(){incomp(1)});
document.getElementById("second-button-compare").addEventListener("click",function(){incomp(2)});
function incomp(y){
    let x = window.prompt("Write down the value you want to add");
    switch(y){
        case 1:
            document.getElementById("first-number-compare").innerHTML = x;
            break;
        default:
            document.getElementById("second-number-compare").innerHTML = x;
    }
}
document.getElementById("compare").addEventListener("click",compare);
function test(){
    window.alert("hi");
}
function compare(){
    let x = Number(document.getElementById("first-number-compare").innerHTML);
    let y = Number(document.getElementById("second-number-compare").innerHTML);
    let text;
    if(x>y){
        text = "Hello world!";
    }
    else{
        text = "Goodbye";
    }
    console.log(text);
    window.alert(text);
    document.getElementById("result-compare").innerHTML = text;
}
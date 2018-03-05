var memory;

function init () {
    
    //numbers:
    document.getElementById('0').addEventListener("click", number0);
    document.getElementById('1').addEventListener("click", number1);
    document.getElementById('2').addEventListener("click", number2);
    document.getElementById('3').addEventListener("click", number3);
    document.getElementById('4').addEventListener("click", number4);
    document.getElementById('5').addEventListener("click", number5);
    document.getElementById('6').addEventListener("click", number6);
    document.getElementById('7').addEventListener("click", number7);
    document.getElementById('8').addEventListener("click", number8);
    document.getElementById('9').addEventListener("click", number9);
   
    //decimal:
    document.getElementById('.').addEventListener("click", showDot);
    
    //operators
    document.getElementById('+').addEventListener("click", showPlus);
    document.getElementById('-').addEventListener("click", showMinus);
    document.getElementById('*').addEventListener("click", showTimes);
    document.getElementById('/').addEventListener("click", showDiv);
   
    //equals:
    //document.getElementById('=').addEventListener("click", calcIt);
    
    //clears: 
    //document.getElementById('C').addEventListener("click", clearLast);
    //document.getElementById('AC').addEventListener("click", clearItAll);

}

//number functions
function number0 () {
    document.getElementById('display').value += 0;
    memory += 0;
    return 0;
}

function number1() {
    document.getElementById('display').value += 1;
    memory += 1;
    return 1;
}

function number2() {
    document.getElementById('display').value += 2;
    memory += 2;
    return 2;
}

function number3() {
    document.getElementById('display').value += 3;
    memory += 3;
    return 3;
}

function number4() {
    document.getElementById('display').value += 4;
    memory += 4;
    return 4;
}

function number5() {
    document.getElementById('display').value += 5;
    memory += 5;
    return 5;
}

function number6() {
    document.getElementById('display').value += 6;
    memory += 6;
    return 6;
}

function number7() {
    document.getElementById('display').value += 7;
    memory += 7;
    return 7;
}

function number8() {
    document.getElementById('display').value += 8;
    memory += 8;
    return 8;
}

function number9() {
    document.getElementById('display').value += 9;
    memory += 9;
    return 9;
}

//decimal function
function showDot() {
    document.getElementById('display').value += '.'; 
    memory += '.';
    return '.';
}

//operator functions
function showPlus() {
    document.getElementById('display').value += '+'; 
    memory += '+';
    return '+';
}

function showMinus() {
    document.getElementById('display').value += '-'; 
    memory += '-';
    return '-';
}

function showTimes() {
    document.getElementById('display').value += '*'; 
    memory += '*';
    return '*';
}

function showDiv() {
    document.getElementById('display').value += '/'; 
    memory += '/';
    return '/';
}

//equals button
var goEquals = document.getElementById('=')
//console.log(goEquals);
goEquals.addEventListener("click", letsDoThis);

//calculate:
function letsDoThis(){
    var getEquation = document.getElementById('display').value
        //console.log(getEquation);
    var separators =['+', '-', '*', '/'] 
 for (var i = 0; i < separators.length; i++) {
        var rg = new RegExp("\\" + separators[i], "g");
        getEquation = getEquation.replace(rg, " " + separators[i] + " ");
        //console.log(getEquation);
    var getEqArr = getEquation.split(" ")
        //console.log(getEqArr);
    var theRes = eval(getEqArr.join(" "));
        console.log(theRes);

//show the result:
    var printRes = document.getElementById('answer').value = theRes;
 }
}
    
       

//clear button like a backspace
var goBack = document.getElementById('C')
goBack.addEventListener("click", clearLast); 
function clearLast () { 
    var string1 = document.getElementById('display').value
    //console.log(string1);
    var string2 = string1.slice(0,-1);
    //console.log(string2);
    document.getElementById('display').value = string2;
    }

//all clear function - make AC button clear the field. Called clearItAll
var cleanUp = document.getElementById('AC')
cleanUp.addEventListener("click", clearItAll);
function clearItAll () {
    document.getElementById('display').value = '';
    document.getElementById('answer').value = '';
}


window.addEventListener("load", init);
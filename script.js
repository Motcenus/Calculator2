let output = document.getElementById("output");
let buttons = document.querySelectorAll("button");
let clr = document.getElementById("c");
let backspace = document.getElementById("backspace");
let equal = document.getElementById("equal");
let squareroot = document.getElementById("squareroot");

buttons.forEach(btn =>{
    btn.onclick = function() {
        output.value += btn.innerText;
    }
})

clr.onclick = function() {
    output.value = "";
}

backspace.onclick = function() {
    output.value = output.value.slice(0,-1);
}

squareroot.onclick = function() {
    try{
        output.value = eval(output.value);
    }
    catch(error){
        output.value = "Math Error";
    }
    output.value = sqt(output.value);
}

equal.onclick = function() {
    try{
        output.value = eval(output.value);
    }
    catch(error){
        output.value = "Math Error";
    }
}

function sqt(a){
    return Math.sqrt(a);
}

function errHandler() {

}
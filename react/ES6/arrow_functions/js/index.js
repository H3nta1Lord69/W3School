hello = () => 
{
    return "Hello World!";
}

document.getElementById("fDemo").innerHTML = hello();

sHello = () => "Hello World!";

document.getElementById("sDemo").innerHTML = sHello();

tHello = (val) => "Hello " + val;

document.getElementById("tDemo").innerHTML = tHello("World");

fHello = val => "Hello " + val;

document.getElementById("fDemo").innerHTML = fHello("World");


class Header 
{
    constructor() 
    {
    this.color = "Red";
    }

    //Regular function:
    changeColor = function() 
    {
        document.getElementById("aDemo").innerHTML += this;
    }
}

let myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);  

class bHeader 
{
    constructor() 
    {
        this.color = "Red";
    }

    //Arrow function:
    changeColor = () => 
    {
        document.getElementById("bdemo").innerHTML += this;
    }
}

let mysheader = new bHeader();


//The window object calls the function:
window.addEventListener("load", mysheader.changeColor);

//A button object calls the function:
document.getElementById("abtn").addEventListener("click", mysheader.changeColor);
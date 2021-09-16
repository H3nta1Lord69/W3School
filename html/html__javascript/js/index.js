document.getElementById("anotherDemo").innerHTML = "Hello JavaScript!";

function myFunction() 
{ 
    document.getElementById("content").innerHTML = "Hello JavaScript!";
}

function myFunction() {
    document.getElementById("styles").style.fontSize = "25px"; 
    document.getElementById("styles").style.color = "red";
    document.getElementById("styles").style.backgroundColor = "yellow";        
}

function light(sw) 
{
    var pic;
    if (sw == 0) {
        pic = "../assets/pic_bulboff.gif"
    } else {
        pic = "../assets/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
}

document.getElementById("andAnotherDemo").innerHTML = "Hello JavaScript!";
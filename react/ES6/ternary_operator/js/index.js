function renderApp() 
{
document.getElementById("demo").innerHTML = "Welcome!";
}

function renderLogin() 
{
document.getElementById("demo").innerHTML = "Please log in";
}

let authenticated = true;

if (authenticated) 
{
renderApp();
} else 
{
renderLogin();
}

function arenderApp() 
{
document.getElementById("ademo").innerHTML = "Welcome!";
}

function arenderLogin() 
{
document.getElementById("ademo").innerHTML = "Please log in";
}

let authenticated = true;

authenticated ? arenderApp() : arenderLogin();
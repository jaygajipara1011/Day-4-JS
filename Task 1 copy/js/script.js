//Alert Button
var alert1 = document.getElementById("alert");
let btnalert = document.createElement("button");
var p = document.createElement("p");
btnalert.style = "border: none;";
btnalert.style = "background-color: green;";
p.style.color = "black";
p.textContent = "This is an alert dialog box";
alert1.appendChild(p);
let textalert = document.createTextNode("Alert");
btnalert.appendChild(textalert);
alert1.appendChild(btnalert);
alert1.addEventListener("click", alertBox);

//Confirm Button

var div = document.getElementById("confirm");
let btnconfirm = document.createElement("button");
var p = document.createElement("p");
btnconfirm.style = "background-color: yellow;";
p.style.color = "black";
btnconfirm;
p.textContent = "Are you want to cancel ?";
div.appendChild(p);
let text = document.createTextNode("Confirm");
btnconfirm.appendChild(text);
div.appendChild(btnconfirm);
div.addEventListener("click", confirmfun);

//Prompt Button

var prompt1 = document.getElementById("prompt");
let btnprompt = document.createElement("button");
var p = document.createElement("p");
btnprompt.style = "border: none;";
btnprompt.style = "background-color: red;";
p.style.color = "black";
p.textContent = "Are you want to cancel ?";
prompt1.appendChild(p);
let textprompt = document.createTextNode("Prompt");
btnprompt.appendChild(textprompt);
prompt1.appendChild(btnprompt);
prompt1.addEventListener('click', promptfun);



function confirmfun() {
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  document.getElementById("confirm").innerHTML = text;
}

function alertBox() {
  alert("Don't Click Here");
  var text="Don't Click here";
  document.getElementById("alert").innerHTML = text;
}
function promptfun() {  
    // prompt ("This is a prompt box", "Hello world");  
    let person = prompt("Please enter your name", "Harry Potter");
    document.getElementById("prompt").innerHTML =
        "Hello " + person + "! How are you today?";
       
    }  

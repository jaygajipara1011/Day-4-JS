//localStorage.setItem("userDetails",JSON.stringify(userData));

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {

    event.preventDefault();
  let name = event.target.name.value;
  let password = event.target.password.value;

  var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.push({
    name: name,
    password: password,
  });
  localStorage.setItem("userDetails", JSON.stringify(userData));
 
});

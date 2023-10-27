let login = document.querySelector("#login");
let pass = document.querySelector("#password");
let submit = document.querySelector("#submit");
let voity = document.querySelector("#voity");


submit.addEventListener('click', (e) => {
    e.preventDefault();
    const loginUser = String(login.value);
    const passUser = String(pass.value);
  
    if (localStorage.getItem(loginUser)) {
        alert("вы уже зарегестрированы!");
    }
    if (!localStorage.getItem(loginUser)) {
        localStorage.setItem(loginUser, passUser);
        window.location.href = "Page1.html";        
    }
})

voity.addEventListener('click', (e) => {
    e.preventDefault();
 
    const loginUser = String(login.value);
    const passUser = String(pass.value);

    if (!localStorage.getItem(loginUser))
    {
        alert("вы не зарегестрированы!");

    }
    if (localStorage.getItem(loginUser))
    {
        window.location.href = "Page2.html";
    }
  
})

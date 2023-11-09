let login = document.querySelector("#login");
let pass = document.querySelector("#password");
let submit = document.querySelector("#submit");
let voity = document.querySelector("#voity");
let switcher = false;
window.globalVariable = 'false';
let i = 0;

function prov() {
    const loginUser = String(login.value);
    const passUser = String(pass.value);

    if (localStorage.getItem(loginUser)) {
        localStorage.setItem('switcher', 'true');
        console.log("tru");
    }
    else {
        console.log("fls");
    }
    prov();
}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    const loginUser = String(login.value);
    const passUser = String(pass.value);
  
    if (localStorage.getItem(loginUser)) {
        alert("вы уже зарегестрированы!");
    }
    if (!localStorage.getItem(loginUser)) {
       
        localStorage.setItem(loginUser, passUser);
        localStorage.setItem('switcher', 'true');
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
        localStorage.setItem('switcher', 'true');
        window.location.href = "Page2.html";
    }
  
})

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      //  console.log("scr");
    } else {
    }
});
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*let i = 1;
function addBlockPost() {
    i++;
    console.log(String(i));
    var ul = document.querySelector(".conten")
    var li = document.createElement("li");
    for (let i = 0; i < 4; i++) {
       
        var divelm = document.createElement("div");
        var h1elm = document.createElement("h1");
        var h2elm = document.createElement("h2");
        var pelm = document.createElement("p");
       
        divelm.appendChild(h1elm);
        divelm.appendChild(h2elm);
        divelm.appendChild(pelm);
     
        divelm.className = 'post';
       
        li.appendChild(divelm);
        
        li.className = 'cont';
        ul.appendChild(li);
    }
    var divelm = document.createElement("div");
    var h1elm = document.createElement("h1");
    var h2elm = document.createElement("h2");
    var pelm = document.createElement("p");
   
    //pelm2.className = 'cont1';
   
    if (i == 2) {
        divelm.className = 'post cont2';
        
    }
    if (i == 3) {
        divelm.className = 'post cont3';
        
    }
    if (i == 4) {
       
        divelm.className = 'post cont4';
    }
    li.className = 'cont';
    divelm.appendChild(h1elm);
    divelm.appendChild(h2elm);
    divelm.appendChild(pelm);
   

  
    li.appendChild(divelm);
    ul.appendChild(li);
    
}

const images = document.querySelectorAll('.cont1');
const target = document.querySelector('.cont1');
const target2 = document.querySelector('.cont2');
const target3 = document.querySelector('.cont3');

function observ(i) {
    let str = "target" + String(i);
    console.log(str);
    observer.observe();
   
}

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
           
            console.log("GOOT IT");
            addBlockPost();
            observer.unobserve(target)
            observ(i);        
        }
    })
}
const options = {
    root: document.querySelector('.content'),
    rootMargin: '0px',
    threshold: 0.2,
}
const observer = new IntersectionObserver(callback, options);



observer.observe(target);

images.forEach((image) => observer.observe(image));
*/
const options = {
    root: document.querySelector('.content'),
    rootMargin: '0px',
    threshold: 0.9,
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // «агрузить новые данные
            fetchData();
            observer.unobserve(target);
        }
    });
}, options);

const target = document.querySelector('.cont1');

observer.observe(target);

let page = 1;
let Page = 0;

function fetchData() {
    Page++;
    if (Page > 5) { return; }
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
            .then(data => {
                // ќбработать полученные данные и добавить их на страницу
                switch (Page) {
                    case 1:
                        for (let i = 0; i < 20; i++) {

                            if (i == 19) { appendDataToPageL(data[i]); break; }
                            appendDataToPage(data[i]);
                        }
                        break;
                    case 2:
                        for (let i = 20; i < 40; i++) {

                            if (i == 39) { appendDataToPageL(data[i]); break; }
                            appendDataToPage(data[i]);
                        }
                        break;
                    case 3:
                        for (let i = 40; i < 60; i++) {

                            if (i == 59) { appendDataToPageL(data[i]); break; }
                            appendDataToPage(data[i]);
                        }
                        break;
                    case 4:
                        for (let i = 60; i <80 ; i++) {

                            if (i == 79) { appendDataToPageL(data[i]); break; }
                            appendDataToPage(data[i]);
                        }
                        break;
                    case 5:
                        for (let i = 80; i <100; i++) {

                            if (i == 99) { appendDataToPageL(data[i]); break; }
                            appendDataToPage(data[i]);
                        }
                        break;
                }
            });
}
function appendDataToPage(data) {
    if (page > 6) { return; }
    console.log("wOw");
    const container = document.querySelector('.cont');
    //var li = document.createElement("li");
    var divelm = document.createElement("div");
    var h1elm = document.createElement("h1");
    var h2elm = document.createElement("h2");
    var pelm = document.createElement("p");

    divelm.appendChild(h1elm);
    divelm.appendChild(h2elm);
    divelm.appendChild(pelm);

    divelm.className = 'post';
    h1elm.textContent = 'UserID: ' + data.id; 
    h2elm.textContent = data.title;
    pelm.textContent = data.body;
    
    divelm.className = 'post ';

    // li.appendChild(divelm);

    //li.className = 'cont cont2';
    container.appendChild(divelm);
  
}
function appendDataToPageL(data) {
    page++;
    if (page > 6) { return; }
    console.log("wow");
    const container = document.querySelector('.cont');
    //var li = document.createElement("li");
    var divelm = document.createElement("div");
    var h1elm = document.createElement("h1");
    var h2elm = document.createElement("h2");
    var pelm = document.createElement("p");
    h1elm.textContent = 'UserID: ' + data.id; 
    divelm.appendChild(h1elm);
    divelm.appendChild(h2elm);
    divelm.appendChild(pelm);

    divelm.className = 'post';
    h2elm.textContent = data.title;
    pelm.textContent = data.body;
    pelm.textContent = data.title;
    
    divelm.className = 'post cont2';

   // li.appendChild(divelm);

    //li.className = 'cont cont2';
    container.appendChild(divelm);
    if (page == 2) {
        divelm.className = 'post cont2';
        const target2 = document.querySelector('.cont2');
        observer.observe(target2);
     
    }
    if (page == 3) {
        divelm.className = 'post cont3';
        const target3 = document.querySelector('.cont3');
        observer.observe(target3);
    }
    if (page == 4) {
        divelm.className = 'post cont4';
        const target4 = document.querySelector('.cont4');
        observer.observe(target4);
    }
    if (page == 5) {
        divelm.className = 'post cont5';
        const target5 = document.querySelector('.cont5');
        observer.observe(target5);
    }
    if (page == 6) {
        divelm.className = 'post cont6';
        const target6 = document.querySelector('.cont6');
       observer.observe(target6);
    }
}

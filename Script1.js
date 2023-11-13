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
const options = {
    root: document.querySelector('.content'),
    rootMargin: '0px',
    threshold: 0.9,
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Загрузить новые данные
            fetchData();
            observer.unobserve(target);
        }
    });
}, options);

const target = document.querySelector('.cont1');

observer.observe(target);

let page = 1;
let Page = 0;
let u = 0;
let classNm = '';
let targetNm = '';
function fetchData() {
    Page++;
     while (((u+1) / 20) != Page) { u++; }
    if (Page > 5) { return; }
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log("u="+u);
            
            console.log("id="+data[u].id);

                if (((data[u].id)/20) == Page){            
                    for (let i = (u+1)-20; i < u+1; i++) {
                        if (i == u) { appendDataToPageL(data[i]); break; }
                        appendDataToPage(data[i]);
                    }
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
    h1elm.className = 'shrift';
    h2elm.className = 'shrift1';
    pelm.className = 'shrift2';
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
    console.log('page=' + page);
    console.log('Page=' + Page);
    classNm = 'post cont' + page;
    targetNm = '.cont' + page;

    console.log(classNm);
    console.log(targetNm);


    const container = document.querySelector('.cont');

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
    
    divelm.className = classNm;
    h1elm.className = 'shrift';
    h2elm.className = 'shrift1';
    pelm.className = 'shrift2';
    container.appendChild(divelm);
    const target = document.querySelector(targetNm);
    observer.observe(target);

}

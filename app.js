var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

let counter = 0;
console.log('Hello world');
document.getElementById('all').addEventListener('click', function(){ alert('нажатие'); });
const cnt = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
plus.addEventListener('click', pclick);
minus.addEventListener('click', mclick);
function pclick() {
    counter++;
    cnt.innerHTML = counter;
    console.log("+");
}
function mclick() {
    counter--;
    cnt.innerHTML = counter;
    console.log("-");
}
function cnts() {
    document.write(cnt);
}






let counter = 0;
console.log('Hello world');
document.getElementById('hw_1').addEventListener('dblclick', () => { alert('нажатие'); });
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

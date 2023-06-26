
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    alert("Hello World OwO");
});

//method 4
function alertFunction() {
    alert("YAAAAAY You done it :D");
}
// alt methods:

//btn.onclick = alertFunction;

//or

//btn.addEventListener('click', alertFunction);
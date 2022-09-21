import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css'


function szinvalt() {
    document.getElementById('cimsor').style.color = document.getElementById('szinrgb').value;
}
function init() {
    document.getElementById('szinvalto').addEventListener('click',szinvalt)
}

document.addEventListener('DOMContentLoaded',init);
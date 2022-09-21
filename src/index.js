import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css'

let bogyoSzam = 0;
let parlatSzam = 0;
let szaritBogyoSzam = 0;
let szaritLemeny = 0;

function bogyoclick() {
    bogyoSzam += 1;
    document.getElementById('bogyo').title = bogyoSzam.toString();
}
function szinvalt() {
    document.getElementById('cimsor').style.color = document.getElementById('szinrgb').value;
}
function init() {
    document.getElementById('szinvalto').addEventListener('click',szinvalt)
    document.getElementById('bogyo').addEventListener('click',bogyoclick);
}

document.addEventListener('DOMContentLoaded',init);
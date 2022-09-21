import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css'

let bogyoSzam = 0;
let parlatSzam = 0;
let szaritBogyoSzam = 0;
let szaritLemeny = 0;

function bogyoclick() {
    bogyoSzam += 1;
    alert(bogyoSzam);
     
}

function parlatclick() {
    parlatSzam += 1;
}

function szboclick() {
    szaritBogyoSzam += 1;
}

function szleclick() {
    szaritLemeny += 1;
}

function szinvalt() {
    document.getElementById('cimsor').style.color = document.getElementById('szinrgb').value;
}
function init() {
    document.getElementById('szinvalto').addEventListener('click',szinvalt)
    document.getElementById('bogyo').addEventListener('click',bogyoclick);
    document.getElementById('parlat').addEventListener('click',parlatclick);
    document.getElementById('szbo').addEventListener('click',szboclick);
    document.getElementById('szle').addEventListener('click',szlelick);
}

document.addEventListener('DOMContentLoaded',init);
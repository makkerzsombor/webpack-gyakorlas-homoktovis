import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css'

let bogyoSzam = 0;
let parlatSzam = 0;
let szaritBogyoSzam = 0;
let szaritLemeny = 0;
let bokorSzam = 0;

function bogyoclick() {
    bogyoSzam += 1;
    document.getElementById('bogyo').innerHTML='<a id="bogyo" href="#bogyo" title="'+bogyoSzam+'" ><img class="kep" src="./images/homoktovis_bogyos.jpg" alt=""></a>';
}

function parlatclick() {
    parlatSzam += 1;
    document.getElementById('parlat').innerHTML='<a id="parlat" href="#parlat" title="'+parlatSzam+'"><img  class="kep" src="./images/homoktovis_parlat.png" alt=""></a>';
}

function szboclick() {
    szaritBogyoSzam += 1;
    document.getElementById('szbo').innerHTML='<a id="szbo" href="#szbo" title="'+szaritBogyoSzam+'"><img  class="kep" src="./images/homoktovis_szaritottbogyo.jpg" alt=""></a>';
}

function szleclick() {
    szaritLemeny += 1;
    document.getElementById('szle').innerHTML ='<a id="szle" href="#szle" title="'+szaritLemeny+'"><img class="kep" src="./images/homoktovis_szaritottorlemeny.jpg" alt=""></a>';

}

function bokorclick() {
    bokorSzam += 1;
    document.getElementById('bokor').innerHTML ='<a id="bokor" href="#bokor" title="'+bokorSzam+'"><img class="kepn" src="./images/bokor.jpg" alt="bokor"></a> ';
}

function szinvalt() {
    document.getElementById('cimsor').style.color = document.getElementById('szinrgb').value;
}
function init() {
    document.getElementById('szinvalto').addEventListener('click',szinvalt)
    document.getElementById('bogyo').addEventListener('click',bogyoclick);
    document.getElementById('parlat').addEventListener('click',parlatclick);
    document.getElementById('szbo').addEventListener('click',szboclick);
    document.getElementById('szle').addEventListener('click',szleclick);
    document.getElementById('bokor').addEventListener('click',bokorclick);
}

document.addEventListener('DOMContentLoaded',init);
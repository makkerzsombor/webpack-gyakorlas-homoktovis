import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css'


function getalert() {
    window.alert('itt jó');
}
function init() {
    document.getElementById('szinvalto').addEventListener('click',getalert)

}
document.addEventListener('DOMContentloaded',init);
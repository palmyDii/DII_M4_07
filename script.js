function alert1() {
    alert('let me see ...');
}
function alert2() {
    alert('not ok ...');
}
let ok = document.getElementById('ok');
ok.addEventListener('click', alert1);

let cancel = document.getElementById('cancel');
cancel.addEventListener('click', alert2);

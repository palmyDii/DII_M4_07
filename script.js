let ok = document.getElementById('ok');
let cancel = document.getElementById('cancel');
let showDate = document.getElementById('showDate')

ok.addEventListener('click', () => alert('let me see ...'));

cancel.addEventListener('click', () => alert('not ok ...'));

showDate.addEventListener('click', () => {
    document.getElementById('emptySpace').innerHTML = "<b>" +Date() +"</b>";
});
showDate.addEventListener('dblclick', () => {
    document.getElementById('emptySpace').innerHTML = '';
});



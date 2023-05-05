const horas = document.getElementById('Horas');
const minuto = document.getElementById('Minutos');
const segundo = document.getElementById('Segundos');

const relogio = setInterval( function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr<10) hr = '0' + hr;
    if(min<10) min = '0' + hr;
    if(sec<10) sec = '0' + hr;

    horas.textContent = hr
    minuto.textContent = min
    segundo.textContent = sec
})
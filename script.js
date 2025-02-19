//Les variable a utiliser
let spn, btnStart, btnStop,t,microSecond,second,minute,heur

//fonction pour initialise les variable quand la page se charge
window.onload =()=>{
    spn = document.getElementsByTagName('span');
    btnStart = document.getElementById('btnStart');
    btnStop = document.getElementById('btnStop');
    t;
    microSecond = 0; second=0;minute = 0; heur =0;
}
//mettre en place le compteur
let update_chrono =()=>{
    microSecond+=1;
    if(microSecond == 10){
        microSecond=1
        second+=1
    }
    if(second == 60){
        second = 0;
        minute +=1;
    }
    if(minute == 60){
        minute = 0;
        h+=1
    }
    //insertion des valeurs dans les span
    spn[0].innerHTML = heur + ' h';
    spn[1].innerHTML = minute + ' m';
    spn[2].innerHTML = second + ' s';
    spn[3].innerHTML = microSecond + ' ms';
}
//mettre en place la fonction du bouttonstart
let  start =()=>{
    t = setInterval(update_chrono,100);
    btnStart.disabled = true;
}
//fonction pour stopper le chronomettre
let stop = () =>{
    clearInterval(t);
    btnStart.disabled = false;

}
//initialiser la valeur du compteur
let reset = ()=>{
    clearInterval(t);
    btnStart.disabled =false;
    microSecond = 0; second=0;minute = 0; heur =0;
     //insertion des valeurs dans les span
     spn[0].innerHTML = heur + ' h';
     spn[1].innerHTML = minute + ' m';
     spn[2].innerHTML = second + ' s';
     spn[3].innerHTML = microSecond + ' ms';
}

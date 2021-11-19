const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
 // variable vacía para guardar la referencia del SetInterval y usarla en STOP
 let clockTempo; 

 d.addEventListener("click", (e) => {
     if (e.target.matches(btnPlay)) {
 // Hemos colocado la variable creada sobre el setInterval
         clockTempo = setInterval(() => {
             let clockHour = new Date().toLocaleTimeString('it-IT'); // => Generamos el método para el reloj
             d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
         }, 1000);

        e.target.disabled = true;
     }

      if(e.target.matches(btnStop)) {
          clearInterval(clockTempo);
          d.querySelector(clock).innerHTML = null;
          d.querySelector(btnPlay).disabled = false;
      }
 });
}

export function alarm(sound, btnActive, btnDesactive) {
 let clockAlarm;
 const $alarm = d.createElement("audio");
 $alarm.src = sound;

 d.addEventListener("click", (e) => {
    if (e.target.matches(btnActive)) {
        clockAlarm = setTimeout(() => {
            $alarm.play()
        }, 2000);

    e.target.disabled = true;
  }

    if (e.target.matches(btnDesactive)) {
        clearTimeout(clockAlarm);
        $alarm.pause();
        $alarm.currentTime = 0;

        d.querySelector(btnActive).disabled = false;
    }
 });
}
// Function to display the time

function showTime() {
  // funcion para obtener el dia, y la hora
  var date = new Date();

  // getHOurs() function obtenemos la hora
  var h = date.getHours(); // 0 - 23

  // getMinutes() function obtenemos los minutos
  var m = date.getMinutes(); // 0 - 59

  // getSecond() function obtenemos los segundos
  var s = date.getSeconds(); // 0 - 59

  // mostramos si es am o pm

  var session = "AM";
  // Condicion para chequear  

  if (h == 0) {
    h = 12;
  }  

  if (h > 12) {
    h = h - 12;

    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;  

  // elementos mostrados en pantalla

  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  // la funcion es llamada cada segundo

  // setInterval() metodo y set time-intervalo

  // 1000 milisegundos es un segundo

  setTimeout(showTime, 1000);
}

showTime();

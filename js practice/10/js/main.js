let timerId;


function update() {
    let clock = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
  }

  function clockStart() {
    // set a new interval only if the clock is stopped
    // otherwise we would rewrite the timerID reference to the running interval and wouldn't be able to stop the clock ever again
    if (!timerId) {
      timerId = setInterval(update, 1000);
    }
    update(); // <--  start right now, don't wait 1 second till the first setInterval works
  }

  function clockStop() {
    clearInterval(timerId);
    timerId = null; // <-- clear timerID to indicate that the clock has been stopped, so that it is possible to start it again in clockStart()
  }

function sorting(){
  let sortedRows = Array.from(table.tBodies[0].rows) // 1
  .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

table.tBodies[0].append(...sortedRows);
}

let form = document.forms.calculator;

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
  let initial = +form.money.value;
  if (!initial) return;

  let interest = form.interest.value * 0.01;

  if (!interest) return;

  let years = form.months.value / 12;
  if (!years) return;

  let result = Math.round(initial * (1 + interest) ** years);

  let height = result / form.money.value * 100 + 'px';
  document.getElementById('height-after').style.height = height;
  document.getElementById('money-before').innerHTML = form.money.value;
  document.getElementById('money-after').innerHTML = result;
}

calculate();
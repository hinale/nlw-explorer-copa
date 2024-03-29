function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="logo com a bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="logo com a bandeira da ${player2}">
    </li>
  `
}

let delay = -0.2;
function createCard(date, day, games){
  delay = delay + 0.3;

  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}/span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

function removeColor() {
  document.body.classList.remove("yellow")
  document.body.classList.remove("blue")
  document.body.classList.remove("green")
}

function changeColorYellow() {
  removeColor()
  document.body.classList.add("yellow")
}

function changeColorBlue() {
  removeColor()
  document.body.classList.add("blue")
}

function changeColorGreen() {
  removeColor()
  document.body.classList.add("green")
}

document.querySelector('#cards').innerHTML = 
  createCard('24/11', 'quinta', createGame('switzerland', '07:00','cameroon') + createGame('uruguay', '10:00', 'south-korea') + createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia')) +
  createCard('28/11', 'segunda', createGame('cameroon', '07:00','serbia') + createGame('south-korea', '10:00','ghana') + createGame('brazil', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguay')) +
  createCard('02/12', 'sexta', createGame('south-korea', '12:00','portugal') + createGame('ghana', '12:00','uruguay') + createGame('serbia', '16:00', 'switzerland') + createGame('cameroon', '16:00', 'brazil')) 
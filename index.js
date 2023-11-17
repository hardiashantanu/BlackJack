let first = random_no();
let second = random_no();
let sum = first + second;
let message = "";
let msg = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let card = document.getElementById("crd");

let isalive = 0;

//  changed isalive to int from bool because initially is alive is false and this create logical error

let carr = [first, second];

function startbtn() {
  rendergame();
}
function rendergame() {
  card.textContent = "Cards: ";
  for (let i = 0; i < carr.length; i++) {
    card.textContent += carr[i] + " ";
  }
  sumEl.textContent = "sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
    msg.textContent = message;
    isalive = 2;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    msg.textContent = message;

    isalive = 4;
  } else {
    message = "You're out of the game! 💀";
    msg.textContent = message;

    isalive = 4;
  }
}

function random_no() {
  let r = Math.floor(Math.random() * 12 + 1);

  if (r === 1) return 11;
  else if (r === 11 || r === 12 || r === 13) return 10;
  else return r;
}
let p = document.getElementById("player")
function newf() {
  if (isalive === 2) 
  {
    let ncard = random_no();
    sum += ncard;
    carr.push(ncard);
    rendergame();
  }
  if(isalive === 4)
  {
    p.textContent = ""
  }

}

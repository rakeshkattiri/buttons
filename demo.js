let count = 0;

function increment() {
  if (count < 20) {
    count++;
  }

  document.getElementById("counter").innerHTML = count;
}

function decrement() {
  if (count > 0) {
    count--;
  }

  document.getElementById("counter").innerHTML = count;
}

function reset() {
  count = 0;

  document.getElementById("counter").innerHTML = count;
}

document.getElementById("incrementBtn").addEventListener("click", increment);
document.getElementById("decrementBtn").addEventListener("click", decrement);
document.getElementById("resetBtn").addEventListener("click", reset);
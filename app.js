let count = 1;

function render() {
  let container = document.getElementById("pokemon");
  container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let prev = document.getElementById("left");
let next = document.getElementById("right");

prev.onclick = function () {
  if (count > 1) {
    count--;
    render();
  }
};

next.onclick = function () {
  count++;
  if (count < 650) {
    render();
  }
};

render();
// if you don't have this, it won't show.

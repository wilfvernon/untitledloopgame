const BASE_URL = "http://localhost:3000/api/v1";
const LOOPS_URL = BASE_URL + `/loops`;
const LOOP_URL = id => LOOPS_URL + "/" + id;
const loops = document.querySelector("#loops");

fetch(LOOPS_URL)
  .then(res => res.json())
  .then(e => e.forEach(createLoop))
  .catch(alert);

function createLoop(loop) {
  const li = document.createElement("li");
  li.innerText = loop.name;
  loops.appendChild(li);
}

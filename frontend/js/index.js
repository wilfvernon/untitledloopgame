const BASE_URL = "http://localhost:3000/api/v1";
const LOOPS_URL = BASE_URL + `/loops`;
const LOOP_URL = id => LOOPS_URL + "/" + id;
let currentLoop = null;

fetch(LOOPS_URL)
  .then(res => res.json())
  .then(e => {
    const loops = document.querySelector("#loops");
    e.forEach(createLoop);
  })
  .catch(console.log);

function createLoop(loop) {
  const newLoop = new Loop(loop);
  if (!currentLoop) {
    currentLoop = newLoop;
    updateForm();
  }
  const li = document.createElement("li");
  li.innerText = newLoop.name;
  li.dataset.loopId = newLoop.id;
  loops.appendChild(li);
}

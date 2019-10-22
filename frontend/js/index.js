const BASE_URL = "localhost:3000/api/v1";
const LOOPS_URL = BASE_URL + `/loops`;
const LOOP_URL = id => LOOPS_URL + "/" + id;
const loops = document.querySelector("#loops");

fetch(LOOPS_URL)
  .then(res => res.json())
  .then(e => e.forEach(renderLoop))
  .catch(alert);

function renderLoop(loop) {
  const li = document.createElement("li");
  li.innerText = currentLoop.name;
  loops.appendChild(li);
}

const currentLoop = {
  name: "untitled loop game",
  notes: [],
  beatsPerBar: 64,
  bars: 4,
  BPM: 65
};

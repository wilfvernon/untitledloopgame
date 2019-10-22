const BASE_URL = "http://localhost:3000/api/v1";
const LOOPS_URL = BASE_URL + `/loops`;
const LOOP_URL = id => LOOPS_URL + "/" + id;
const loops = document.querySelector("#loops");

const content = {
  method: "GET",
  headers: {
    Accept: "application/json"
  },
  body: JSON.stringify(mainBody)
};
fetch(LOOPS_URL, content)
  .then(res => res.json())
  .then(e => e.forEach(renderLoop));

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

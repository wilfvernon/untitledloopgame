const BASE_URL = "http://localhost:3000/api/v1";
const NOTES_URL = BASE_URL + "/notes";
const NOTE_URL = id => NOTES_URL + "/" + id;
const LOOPS_URL = BASE_URL + `/loops`;
const LOOP_URL = id => LOOPS_URL + "/" + id;
let currentLoop = null;

fetch(LOOPS_URL)
  .then(res => res.json())
  .then(e => {
    e.forEach(createLoop);
  })
  .catch(console.log);

const controls = document.querySelector("#controls");
const undoBtn = controls.querySelector("#undo-btn");
const updateFormElement = document.querySelector("#update-form");
const updateFormInputs = updateFormElement.querySelectorAll("input");
const volumeKnob = document.querySelector("#volume");
const volumeSlider = document.querySelector("#volume-slider");
 volumeSlider.value = volume

function startRecording() {
  isRecording = true;
  undoBtn.disabled = true;
  currentRecording = new Recording();
  postRecording(currentRecording);
}

function endRecording() {
  undoBtn.disabled = false;
  isRecording = false;
}

function undoLastRecording() {
  deleteRecording();
}

let metronome = false;
const metro = document.querySelector("#metro");

metro.addEventListener("click", toggleMetronome);

function toggleMetronome() {
  metronome = !metronome;
  if (metronome) {
    metro.innerText = "Metronome On";
  } else {
    metro.innerText = "Metronome Off";
  }
}

function updateForm() {
  updateFormElement.BPM.value = currentLoop.BPM;
  updateFormElement.name.value = currentLoop.name;
  updateFormElement.bars.value = currentLoop.bars;
}
controls.addEventListener("click", e => {
  if (e.target.id === "record-btn") {
    if (isRecording) {
      e.target.style = "";
      e.target.innerText = "Record";
      endRecording();
    } else {
      e.target.style = "background: red";
      e.target.innerText = "RECORDING";
      startRecording();
    }
  } else if (e.target.id === "undo-btn") undoLastRecording();
});

updateFormElement.addEventListener("submit", e => {
  e.preventDefault();

  const contentBody = {
    name: updateFormElement.name.value,
    BPM: updateFormElement.BPM.value,
    bars: updateFormElement.bars.value
  };
  const content = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(contentBody)
  };
  fetch(LOOP_URL(currentLoop.id), content)
    .then(e => e.json())
    .then(e => {
      currentLoop.BPM = e.BPM;
      currentLoop.bars = e.bars;
      currentLoop.updateNotesLength();
      beatIndex = 0;
      startLooper();
    });
});

controls.addEventListener("mousewheel", e => {
  volume += parseInt(e.deltaY);

  if (volume > 512) {
    volume = 512;
  }
  if (volume < 0) {
    volume = 0;
  }
  volumeKnob.innerText = parseInt((volume * 100) / 512);
  volumeSlider.value = volume;
});

volumeSlider.oninput = function (){
  volume = this.value
  volumeKnob.innerText = parseInt((volume * 100) / 512);
}


const controls = document.querySelector("#controls");
const undoBtn = controls.querySelector("#undo-btn")
const updateFormElement = document.querySelector("#update-form");
const updateFormInputs = updateFormElement.querySelectorAll("input");

function startRecording(){
  isRecording = true
  undoBtn.disabled = true
  currentRecording = new Recording();
  postRecording(currentRecording)
}

function endRecording(){
  undoBtn.disabled = false
  isRecording = false
}

function undoLastRecording(){
  deleteRecording()
  .then(() => {
    fetch(LOOPS_URL)
    .then(res => res.json())
    .then(e => {
      e.forEach(createLoop);
    })
    .catch(console.log)
  })
}

function updateForm() {
  updateFormElement.BPM.value = currentLoop.BPM;
  updateFormElement.name.value = currentLoop.name;
  updateFormElement.bars.value = currentLoop.bars;
  currentLoop.updateNotesLength();
}

controls.addEventListener("click", event => {
  if(event.target.id === "record-btn"){
    if(isRecording){
      endRecording();
    }else{
      startRecording();
    }
  }else if(event.target.id === "undo-btn") undoLastRecording()
})

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
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contentBody)
  };
  fetch(LOOP_URL(currentLoop.id), content);
});

const controls = document.querySelector("#controls");
const updateFormElement = document.querySelector("#update-form");
const updateFormInputs = updateFormElement.querySelectorAll("input");
let currentRecording = 1;

function startRecording(){
  isRecording = true
  currentRecording = new Recording();
}

function endRecording(){
  isRecording = false
}

function undoLastRecording(){
  current
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

const updateFormElement = document.querySelector("#update-form");

function updateForm() {
  updateFormElement.BPM.value = currentLoop.BPM;
  updateFormElement.name.value = currentLoop.name;
  updateFormElement.bars.value = currentLoop.bars;
  currentLoop.updateNotesLength();
}

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

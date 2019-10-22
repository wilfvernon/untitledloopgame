const form = document.querySelector("#update-form");

function updateForm() {
  form.BPM.value = currentLoop.BPM;
  form.name.value = currentLoop.name;
  form.bars.value = currentLoop.bars;
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const contentBody = {
    name: form.name.value,
    BPM: form.BPM.value,
    bars: form.bars.value
  };
  const content = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(contentBody)
  };
  fetch(LOOP_URL(currentLoop.id), content);
});

const form = document.querySelector("#update-form");

function updateForm() {
  form.BPM.value = currentLoop.BPM;
  form.name.value = currentLoop.name;
  form.bars.value = currentLoop.bars;
}

form.addEventListener("submit", e => {
  e.preventDefault();
});

const form = document.querySelector("#controls");

function updateForm() {
  form.BPM.value = loop.BPM;
  form.name.value = loop.name;
  form.bars.value = loop.bars;
}

updateForm();

form.addEventListener("submit", e => {
  e.preventDefault();
});

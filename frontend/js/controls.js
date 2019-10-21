const form = document.querySelector("#controls");
form.BPM.value = loop.BPM;
form.name.value = loop.name;
form.bars.value = loop.bars;

form.addEventListener("submit", e => {
  e.preventDefault();
});

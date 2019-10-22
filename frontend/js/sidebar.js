const createForm = document.querySelector("#create-form");

createForm.addEventListener("submit", e => {
  e.preventDefault();
  const mainBody = {
    name: createForm.name.value
  };
  const content = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(mainBody)
  };
  fetch(LOOPS_URL, content)
    .then(res => res.json())
    .then(e => {
      createLoop(e);
      currentLoop = Loop.all[Loop.all.length - 1];
      updateForm();
    })
    .catch(alert);
});

loops.addEventListener("click", e => {
  if (e.target.tagName === "P") {
    const li = e.target.closest("li");
    const id = li.dataset.loopId;
    const loop = Loop.find(id);
    currentLoop = loop;
    updateForm();
  }
  if (e.target.tagName === "BTN") {
    const li = e.target.closest("li");
    const id = li.dataset.loopId;
    const loop = Loop.find(id);
    li.remove();
    loop.delete();
    if (Loop.all) currentLoop = Loop.all[0];
    updateForm();
  }
});

const instruments = document.querySelector("#instruments");

function switchInstrument(event) {
<<<<<<< HEAD
    if (event.target.dataset.channel) {
        previousInstrument = instruments.querySelector(".instrument_selected")
        if (previousInstrument){
            previousInstrument.className = "not-selected"
            previousInstrument.blur()
        }
        document.getElementById(event.target.id).focus()
        event.target.className = "instrument_selected"
        cID = parseInt(event.target.dataset.channel);
}
=======
  if (event.target.dataset.channel) {
    if (instruments.querySelector(".instrument_selected")) {
      instruments.querySelector(".instrument_selected").className = "";
    }
    event.target.className = "instrument_selected";
    cID = parseInt(event.target.dataset.channel);
  }
>>>>>>> 68978f7aa1ec6fd6779a0126a74db0ebe90fcafb
}
instruments.addEventListener("click", switchInstrument);

const instruments = document.querySelector("ul#instruments");

function switchInstrument(event) {
    if (event.target.dataset.channel) {
        if (instruments.querySelector(".instrument_selected")){
            instruments.querySelector(".instrument_selected").className = "not-selected"
        }
        event.target.className = "instrument_selected"
        cID = parseInt(event.target.dataset.channel);
}
}
instruments.addEventListener("click", switchInstrument);

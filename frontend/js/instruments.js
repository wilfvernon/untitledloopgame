const instruments = document.querySelector("ul#instruments");

function switchInstrument(event) {
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
}
instruments.addEventListener("click", switchInstrument);

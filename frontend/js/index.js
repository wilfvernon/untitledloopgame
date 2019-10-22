//going to be responsible for fetching data for the rest of the program
const currentLoop = {
  name: "untitled loop game",
  notes: [],
  beatsPerBar: 64,
  bars: 4,
  BPM: 65
};

const mainBody = {
    //information to send to the server
};
const content = {
    method: "METHOD",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(mainBody)
};
fetch(URL, content)
    .then(res => res.json())
    .then(e => );
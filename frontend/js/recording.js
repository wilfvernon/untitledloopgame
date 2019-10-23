class Recording {
  constructor() {
    this.id = Recording.incrementId();
  }
  static getLastRecordingId() {
    fetch(RECORDINGS_URL)
      .then(res => res.json())
      .then(
        recordings => (this.latestId = recordings[recordings.length - 1].id)
      );
  }
  static incrementId() {
    this.latestId++;
    return this.latestId;
  }
}

function postRecording(recording) {
  const fetchObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ id: recording.id })
  };

  fetch(RECORDINGS_URL, fetchObj);
}

function deleteRecording() {
  fetch(RECORDING_URL(currentLoop.id), {
    method: "DELETE"
  });
}

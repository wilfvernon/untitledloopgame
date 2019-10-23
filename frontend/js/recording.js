class Recording {
    constructor(){
        this.id = Recording.incrementId()
        this.notes = []
    }
    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
      }
}


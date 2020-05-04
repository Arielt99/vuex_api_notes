export const putNotes = (state, notes) => {
    state.notes.push(notes)
  }
  export const putCurrentNote = (state, note) => {
    state.currentNote = note
  }
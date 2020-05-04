
export const getNotes = (context) => {
    fetch('https://laravel-notes-api-at.herokuapp.com/api/notes')
            .then(response => response.json())
            .then(res => {
              context.commit('putNotes', res)
              console.log('yes')
            })
  }
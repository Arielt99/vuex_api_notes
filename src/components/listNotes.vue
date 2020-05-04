<template>
    <div id="listNotes">
      <ion-list>
        <ion-list-header class="ion-text-center">
          add a note
        </ion-list-header>

        <ion-item v-on:click="getParticularNote(note.id)" v-bind:key="note.id" v-for="note in listNotes">
          <ion-label>
            <h2>{{note.title}}</h2>
            <p>{{note.content}}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </div>
</template>

<script>
  export default {
    name: 'listNotes',
    data() {
      return {
        listNotes: ''
      }
    },
    methods:{
      getParticularNote: function (id) {
            let note = this.listNotes.filter(note => {
              return note.id === id
            } )
        this.$store.commit('putCurrentNote', note[0])
      }
    },
    mounted: function () {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'putNotes') {
          this.listNotes = mutation.payload.notes
        }
      })
    }
  }
</script>

<style>
  #listNotes {
      width: 25vw;
      min-height: 100vh;
      height: 100%;
      border-right: 1px solid lightgray;
  }
  ion-item{
    cursor: pointer;
  }
  ion-list-header{
    display:block;
    text-align: center;
    padding-left: 0;
    font-size: 20px;
    cursor: pointer;
  }
  .list-md{
    padding: 0;
  }
</style>
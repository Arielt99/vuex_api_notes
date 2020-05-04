<template>
    <div id="app">
      <ion-app>
        <ion-row>
          <listNotes/>
          <currentNote/>
        </ion-row>
      </ion-app>
    </div>
</template>

<script>

  import currentNote from './components/currentNote.vue'
  import listNotes from './components/listNotes.vue'

  export default {
    name: 'app',
    components: {
      currentNote,
      listNotes
    },
    created:function () {
      this.$store.dispatch('getNotes')
    }
  }
</script>
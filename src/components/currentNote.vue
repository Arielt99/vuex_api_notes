<template>
    <div id="currentNote">
        <div class="ion-text-center">
            <ion-label>Date: {{currentNote.updated_at}} | Words: {{currentNote.nbrWords}}</ion-label>
        </div>
        <ion-input :value="currentNote.title"></ion-input>
        <ion-textarea auto-grow="true" v-on:keyup="countWords()" id="content" :value="currentNote.content"></ion-textarea>
    </div>
</template>

<script>
  export default {
    name: 'currentNote',
    data() {
      return {
          str:"",
        currentNote: {
          content: '',
          title:'',
          updated_at:'',
          nbrWords: 0,
          id: '',
        }
      }
    },
    methods:{
        countWords() {
        this.currentNote.nbrWords = content.value.match(/([^\u0000-\u007F]|\w)+/g).length
        }
    },
    mounted: function(){
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'putCurrentNote') {
          this.currentNote.title = mutation.payload.title
          this.currentNote.updated_at = mutation.payload.updated_at
          this.currentNote.content = mutation.payload.content
          this.currentNote.id = mutation.payload.id
          this.currentNote.nbrWords = mutation.payload.content.match(/([^\u0000-\u007F]|\w)+/g).length
        }
      })
    },
  }
</script>

<style>
    #currentNote {
        width: 75vw;
        padding-left: 20px;
    }
    ion-input{
        font-size: 30px !important;
    }
    ion-textarea{
        width: 100%;
        height: 100%;
        border: none;
    }
    ion-textarea:focus{
        outline: none;
        font-size: 25px;
    }
    .ion-text-center{
        width: 100%;
        margin: 30px 0px;
    }
</style>
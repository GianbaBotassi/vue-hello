// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue

let state = false;

  createApp({
    data() {
      return {
        welcome: 'Hello Vue',
        message: 'If you are ready to fight, click the blue bottom!',
        button :'Click me',
        img: 'img/vue_js_vs._react_js.png',
        state : false
      }
    },
    methods: {
        changeImg : function(){
            if(this.state === false){
              this.state = true;
            }else{
                this.state = false;
            }
        }
      }
  }).mount('#app')
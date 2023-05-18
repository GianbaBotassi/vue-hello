// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue

  createApp({
    data() {
      return {
        welcome: 'Hello Vue',
        message: 'If you are ready to fight, click the blue bottom!',
        button :'Click me',
        img: 'img/vue_js_vs._react_js.png',
        classeImg: 'none',
        classeP: ''
      }
    },
    methods: {
        changeImg : function(){
            if(this.classeImg === 'none' && this.classeP === ''){
                this.classeImg = '';
                this.classeP = 'none'
            }else{
                this.classeImg = 'none';
                this.classeP = ''
            }
        }
      }
  }).mount('#app')
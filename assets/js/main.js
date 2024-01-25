const { createApp } = Vue
      
createApp({
  data() {
    return {
      message: 'Harry potter non doveva salvare il mondo?',

      immagini: [
        {
            img: './assets/img/IMG_3003.jpg'
        },
        {
            img: './assets/img/jacob-jensen-otKYK0h-5tE-unsplash.jpg'
        }
      ]
    }
  }
}).mount('#app')
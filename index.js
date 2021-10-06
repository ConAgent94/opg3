Vue.createApp({
    data() {
        return {
           words: [],
            word: null,
            message: null,
        }
    },
    methods: {

        show(word) {
            this.words[0] = word
            this.words[1] = word.toUpperCase()
            this.words[2] = word.toLowerCase()
            
        },

       
    }
}).mount("#app")
//  Name: Ed Marie May Macapagal
//  Section: WD-201

const books = Vue.createApp({
    data(){
        return{
            showBooks: false,
            btitle: 'The Ledger',
            bauthor: 'Joseph Esquivel',
            year: 2008,
            publisher: 'Bookware Publishing Corporation'
        }
    },

    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
});

books.mount('#books')
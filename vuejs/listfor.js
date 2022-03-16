//  Name: Ed Marie May Macapagal
//  Section: WD-201

const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Clean the House' },
                { text: 'Prepare Breakfast' },
                { text: 'Attend WSERVER class' },
                { text: 'Do schoolworks' }
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')
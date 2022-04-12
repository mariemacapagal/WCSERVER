<template>
    <div class="contact">
        <h1>{{title}}</h1>
        
        <div class="content">
            <h2>{{label1}}</h2>
            <h4>{{desc1}}</h4>

            <h2>{{label2}}</h2>
            <h4>{{desc2}}</h4>

            <h2>{{label3}}</h2>
            <h4>{{desc3}}</h4>

            <h2>{{label4}}</h2>
            <h4>{{desc4}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact',
    data () {
        return {
            title: 'Contact Me!',

            label1: 'Get in Touch',
            label2: 'Name',
            label3: 'Address',
            label4: 'Email',

            desc1: 'Feel free to send me a message.',
            desc2: 'Ed Marie May Macapagal',
            desc3: 'Pampanga, Philippines',
            desc4: 'emariemacapagal@gmail.com'
        }
    }
}
</script>

<style scoped>
.contact {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.699);
}

.content {
    margin-top: 10%;
}

h2 {
    color: skyblue;
}
</style>

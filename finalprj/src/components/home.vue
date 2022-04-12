<template>
    <div class="home">
        <img :src="logo">
        <h1>{{name}}</h1>
        <h5>{{level}}</h5>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            logo: require('../assets/logo.png'),
            name: 'Ed Marie May Macapagal',
            level: '2nd Year IT-Web Development Student'
        }
    }
}
</script>

<style scoped>
img {
    width: 15%;
    padding-top: 8%;
}
</style>

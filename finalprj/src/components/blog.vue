<template>
    <div class="blog">
        <h1>{{title}}</h1>

        <div class="content">
            <h3>&#10026; {{label1}} &#10026;</h3>
            <h3>&#10026; {{label2}} &#10026;</h3>
            <h3>&#10026; {{label3}} &#10026;</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blog',
    data () {
        return {
            title: 'Achievements',

            label1: "Graduated as a Salutatorian in Elementary",
            label2: "Graduated with Honors in High School",
            label3: "Consistent Dean's Lister"
        }
    }
}
</script>

<style scoped>
.blog {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.699);
}

.content {
    margin-top: 10%;
}
</style>

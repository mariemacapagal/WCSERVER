<template>
    <div class="about">
        <h1>{{title}}</h1>
        <h3>{{desc}}</h3>
    </div>
</template>

<script>
export default {
    name: 'about',
    data () {
        return {
            title: "Hi, I am Marie. Nice to meet you!",
            desc: "I am an Information Technology student, currently living in the Philippines. The program I am taking has specialization in Web Development. I love arts and design, and I hope to be a UI/UX Designer in the near future. I also want to establish my own creative studio which specializes in branding, web and print design, so I can work with ambitious business owners around the world to bring their brands to life and tell their stories visually."
        }
    }
}
</script>

<style scoped>
.about {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.699);
}

h3 {
    padding: 3% 10% 0% 10%;
}
</style>

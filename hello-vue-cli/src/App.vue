<!--
    Name: Ed Marie May Macapagal
    Section: WD-201
    File name: App.vue
-->

<template>
    <div id="app">
        <div class="container">
            <img src="./assets/icon.png">
            <h1>{{ msg }}</h1>
            <h3>{{ msg1 }}</h3>

            <profile-component></profile-component>
            <education-component></education-component>
            <skills-component></skills-component>
        </div>
    </div>
</template>

<script>
import ProfileComponent from './components/ProfileComponent.vue'
import EducationComponent from './components/EducationComponent.vue'
import SkillsComponent from './components/SkillsComponent.vue'

export default {
    name: 'app',
    components: {
        ProfileComponent,
        EducationComponent,
        SkillsComponent
        },
    data () {
        return {
            msg: 'Ed Marie May Macapagal',
            msg1: 'Web Development Student',
        }
    }
}
</script>

<style>
body {
    background-color: rgb(247, 223, 227);
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 185px;
    height: 100%;
}

img {
    width: 200px;
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 20px;
}

.progress-bar {
    font-size: 10pt;
    color: black;
}

#profile-component {
    margin-top: 185px;
}

</style>
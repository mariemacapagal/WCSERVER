<!--
    Name: Ed Marie May Macapagal
    Section: WD-201
    File name: EducationComponent.vue
-->

<template>
    <div id="education-component">
        <div class="alert alert-light" role="alert">
            <h2>{{ msg }}</h2>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                    <h4 id="educ-label">Level</h4>
                    <ul id="educ-list">
                        <li>Elementary</li>
                        <li>Junior High School</li>
                        <li>Senior High School</li>
                        <li>College</li>
                    </ul>
                </div>

                <div class="col">
                    <h4 id="educ-label">School</h4>
                    <ul id="educ-list">
                        <li>Porac Elementary School</li>
                        <li>Pulung Santol National High School</li>
                        <li>Holy Angel University</li>
                        <li>Holy Angel University</li>
                    </ul>
                </div>

                <div class="col">
                    <h4 id="educ-label">Year</h4>
                    <ul id="educ-list">
                        <li>2008 - 2014</li>
                        <li>2014 - 2018</li>
                        <li>2018 - 2020</li>
                        <li>2020 - Present</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'education-component',
    data () {
        return {
            msg: 'Education'
        }
    }
}
</script>

<style>

#educ-label {
    color: #d68376;
}

#educ-list {
    font-size: 15pt;
}

</style>
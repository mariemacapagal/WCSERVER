<!--
    Name: Ed Marie May Macapagal
    Section: WD-201
    File name: SkillsComponent.vue
-->

<template>
    <div id="skills-component">
        <div class="alert alert-light" role="alert">
            <h2>{{ msg }}</h2>
        </div>

        <div class="container">
            <div class="row">

                <div class="col">
                    <h4 id="skills-label">Seminars</h4>
                    <ul id="skills-list">
                        <li>&#10041; Huawei ICT Competition 2021</li>
                        <li>&#10041; International Girls in ICT Day (Women Rock-IT Webinar)</li>
                    </ul>

                    <h4 id="skills-label">Technologies</h4>
                    <ul id="skills-list">
                        <li>&#10041; Computer Literacy</li>
                        <li>&#10041; Database Management</li>
                        <li>&#10041; Website Development</li>
                        <li>&#10041; Graphic Design</li>
                    </ul>
                </div>

            <div class="col">
                <h4 id="skills-label">Programming Languages</h4>
                <h4 id="pl-label">HTML</h4>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>

                <h4 id="pl-label">CSS</h4>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>

                <h4 id="pl-label">Python</h4>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>

                <h4 id="pl-label">Java</h4>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>

                <h4 id="pl-label">JavaScript</h4>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>

                <h4 id="pl-label">PHP</h4>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>

                <h4 id="pl-label">MySQL</h4>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'skills-component',
    data () {
        return {
            msg: 'Skills'
        }
    }
}
</script>

<style>

.progress {
    height: 25px;
    background-color: rgb(66, 64, 64);
    margin-bottom: 30px;
}

.progress-bar {
    background-color: #d68376;
}

#pl-label {
    text-align: left;
}

#skills-label {
    color: #d68376;
    text-align: left;
}

#skills-list {
    font-size: 15pt;
    text-align: justify;
}

</style>
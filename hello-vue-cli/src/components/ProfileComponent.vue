<!--
    Name: Ed Marie May Macapagal
    Section: WD-201
    File name: ProfileComponent.vue
-->

<template>
    <div id="profile-component">
        <div class="alert alert-light" role="alert">
            <h2>{{ msg }}</h2>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                    <ul>
                        <li><h4>To work in a dynamic professional environment with a growing organization and utilize my creativity and innovative thinking for benefit of the organization and myself.</h4></li>
                        <li id="profile-label">Objective</li>
                    </ul>

                    <ul>
                        <li><h4>Ed Marie May Dizon Macapagal</h4></li>
                        <li id="profile-label">Name</li>
                    </ul>

                    <ul>
                        <li><h4>Information Technology with Specialization in Web Development</h4></li>
                        <li id="profile-label">Course and Specialization</li>
                    </ul>

                    <ul>
                        <li><h4>edmacapagal@student.hau.edu.ph</h4></li>
                        <li id="profile-label">Email</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'profile-component',
    data () {
        return {
            msg: 'Profile'
        }
    }
}
</script>

<style>

#profile-label {
    color: #d68376;
}

</style>
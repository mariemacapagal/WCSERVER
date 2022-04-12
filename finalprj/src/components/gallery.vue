<template>
    <div class="gallery">
        <h1>{{title}}</h1>
        <h5>{{desc1}} &#10022; {{desc2}} &#10022; {{desc3}}</h5>

        <div class="content">
            <h4>{{label1}}</h4>
            <img :src="img1" id="img1"><br/>
            <h4>{{label2}}</h4>
            <img :src="img2" id="img1"><br/>
            <h4>{{label3}}</h4>
            <img :src="img3" id="img2">
            <img :src="img4" id="img2">
        </div>
    </div>
</template>

<script>
export default {
    name: 'gallery',
    data () {
        return {
            title: 'My Works',

            desc1: 'Art',
            desc2: 'Web Design',
            desc3: 'Branding',

            label1: 'Webpage Resume',
            label2: 'Ice Cream Branding',
            label3: 'Instagram Filters/Frames for Leni & Kiko',

            img1: require('../assets/img1.png'),
            img2: require('../assets/img2.png'),
            img3: require('../assets/img3.png'),
            img4: require('../assets/img4.png')
        }
    }
}
</script>

<style scoped>
.gallery {
    background-color: rgba(0, 0, 0, 0.699);
}

h4 {
    padding-top: 3%;
}

#img1 {
    width: 60%;
}

#img2 {
    width: 30%;
}
</style>

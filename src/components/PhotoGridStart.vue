<template>
    <div >
        <div v-masonry transition-duration="0.3s" item-selector=".item">
            <b-img v-masonry-tile class="item grid-item img-5" :src="require('../assets/images/products/mlynek_alto_porcellana_3.jpg')"></b-img>
            <b-img v-masonry-tile class="item grid-item img-5" :src="require('../assets/images/products/mlynek_babuni_1.jpg')"></b-img>
            <b-img v-masonry-tile class="item grid-item img-5" :src="require('../assets/images/products/mlynek_muro_2.jpg')"></b-img>
            <b-img v-masonry-tile class="item grid-item img-5" :src="require('../assets/images/products/mlynek_retro_2.jpg')"></b-img>
            <b-img v-masonry-tile class="item grid-item img-5" :src="require('../assets/images/products/mlynek_tempo_porcellana_9.jpg')"></b-img>
            <b-img v-masonry-tile class="item grid-item img-5" :src="require('../assets/images/products/mlynek_beczulka_1.jpg')"></b-img>
        </div>  
    </div>
</template>

<script>
export default {
    props: ["myJson"],
    mounted() {
        this.items = this.myJson.content.products[0].images.all
        this.$redrawVueMasonry()

    },
    data () {
        return {
            items: []
        }
    }
}
</script>

<style scoped>
@media only screen and (max-width: 614px) {
    .img-5 {
        width: 50%!important
    }
}
@media only screen and (min-width: 615px) {
    .img-5 {
        width: 33.333%!important
    }
}
@media only screen and (min-width: 901px) {
    .img-5 {
        width: 16.666%!important
    }
}


* { box-sizing: border-box; }

body { font-family: sans-serif; }

/* ---- grid ---- */

.grid {
  background: #EEE;
  max-width: 1200px;
}

/* clearfix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}
.grid-item {
  float: left;
}
.grid-item--gigante {
  width: 320px;
  height: 360px;
  z-index: 2; /* above other items */
}

img {
    object-fit: cover;
    transition: opacity .4s ease-in-out;
    opacity: 1;
}
img:hover {
    opacity: 0.2;
}
.desc {
    color: #333 !important;
    text-shadow: none;
    font-weight: 300;
    text-transform: uppercase;
    text-align:center;
    vertical-align: middle;
}

.desc-height-1 {
    padding-top: 37.5vh;
}
.desc-height-2 {
    padding-top: 18.75vh;
}
.desc-long {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 22px;
    letter-spacing: 2px;
}
.desc-short {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
}
.activeImg {
    height: 75vh;
    width: 50%; 
}
.img-4 {
    height: 37.5vh;
    width: 50%; 
}
.img-2 {
    height: 37.5vh;
    width: 25%; 
}
.img-3 {
    height: 75vh;
    width: 25%; 
}
.img-5 {
    height: 30vh;
    width: 16.6%;
}



</style>

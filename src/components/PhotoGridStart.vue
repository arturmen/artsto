<template>
    <div >
        <div v-masonry transition-duration="0.3s" item-selector=".item">
            <div v-masonry-tile class="item grid-item img-5 img-container" style="position:absolute">
                    <b-link href="/#/product/komplet/brązowy" ><b-img class="img-5-h" :src="require('../assets/images/products/mlynek_alto_porcellana_3.jpg')"></b-img></b-link>
                    <div class="centered"><div class="desc desc-long" >Komplet Pieprz Sól</div>
                    <div class="desc desc-short" >Brązowy</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-5 img-container" style="position:absolute">
                <b-link href="/#/product/babuni/naturalny" ><b-img class="img-5-h" :src="require('../assets/images/products/mlynek_babuni_1.jpg')"></b-img></b-link>
                    <div class="centered"><div class="desc desc-long" >Młynek Babuni</div>
                    <div class="desc desc-short" >Naturalny</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-5 img-container" style="position:absolute">
                <b-link href="/#/product/scienny/orange"  ><b-img class="img-5-h" :src="require('../assets/images/products/mlynek_muro_2.jpg')"></b-img></b-link>
                    <div class="centered"><div class="desc desc-long" >Młynek Ścienny</div>
                    <div class="desc desc-short" >Brązowy</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-5 img-container" style="position:absolute">
                <b-link href="/#/product/retro/brązowy" ><b-img class="img-5-h" :src="require('../assets/images/products/mlynek_retro_2.jpg')"></b-img></b-link>
                    <div class="centered"><div class="desc desc-long" >Młynek Retro</div>
                    <div class="desc desc-short" >Brązowy</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-5 img-container" style="position:absolute">
                <b-link href="/#/product/klepsydra/zielony" ><b-img class="img-5-h" :src="require('../assets/images/products/mlynek_tempo_porcellana_9.jpg')"></b-img></b-link>
                    <div class="centered"><div class="desc desc-long" >Młynek Klepsydra</div>
                    <div class="desc desc-short" >Zielony</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-5 img-container" style="position:absolute">
                <b-link href="/#/product/beczulka/naturalny" ><b-img class="img-5-h" :src="require('../assets/images/products/mlynek_beczulka_1.jpg')"></b-img></b-link>
                    <div class="centered"><div class="desc desc-long" >Młynek Beczułka</div>
                    <div class="desc desc-short" >Naturalny</div></div>
            </div>
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
    z-index: 2;
    position:relative;
}
img:hover {
    opacity: 0.4;
    
} 

.img-container {
    position: absolute!important;
    text-align: center;
}

.centered {
    position: absolute!important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* z-index: 2; */
}

.desc {
    color: #333 !important;
    text-shadow: none;
    font-weight: 300;
    text-transform: uppercase;
    text-align:center;
    vertical-align: middle;
}
.desc-long {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
}
.desc-short {
    font-family: 'Roboto', sans-serif;
    font-size: 8px;
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

.img-5-h {
     width: 100%; 
     height: 30vh;
}





</style>

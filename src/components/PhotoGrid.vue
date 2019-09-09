<template>
    <div >
        <div v-masonry transition-duration="0.3s" item-selector=".item">
            <div v-masonry-tile class="item grid-item img-3 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + items[0].name_url + '/' + items[0].images.all[0].wood" ><b-img class="img-3-h" :src="require('../' + items[0].images.all[0].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ items[0].name_short }}</div>
                <div class="desc desc-short" >{{ items[0].images.all[0].wood}}</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-2 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + items[8].name_url + '/' + items[8].images.all[3].wood" ><b-img class="img-2-h" :src="require('../' + items[8].images.all[3].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ items[8].name_short }}</div>
                <div class="desc desc-short" >{{ items[8].images.all[3].wood}}</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-4 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + items[2].name_url + '/' + items[2].images.all[0].wood" ><b-img class="img-4-h" :src="require('../' + items[2].images.all[0].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ items[2].name_short }}</div>
                <div class="desc desc-short" >{{ items[2].images.all[0].wood}}</div></div>
            </div>
                        <div v-masonry-tile class="item grid-item img-2 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + items[10].name_url + '/' + items[10].images.all[0].wood" ><b-img class="img-2-h" :src="require('../' + items[10].images.all[0].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ items[10].name_short }}</div>
                <div class="desc desc-short" >{{ items[10].images.all[0].wood}}</div></div>
            </div>
                        <div v-masonry-tile class="item grid-item img-3 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + items[4].name_url + '/' + items[4].images.all[0].wood" ><b-img class="img-3-h" :src="require('../' + items[4].images.all[0].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ items[4].name_short }}</div>
                <div class="desc desc-short" >{{ items[4].images.all[0].wood}}</div></div>
            </div>
                        <div v-masonry-tile class="item grid-item img-2 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + items[11].name_url + '/' + items[11].images.all[1].wood" ><b-img class="img-2-h" :src="require('../' + items[11].images.all[1].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ items[11].name_short }}</div>
                <div class="desc desc-short" >{{ items[11].images.all[1].wood}}</div></div>
            </div>

                        <div v-masonry-tile class="item grid-item img-2 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + items[12].name_url + '/' + items[12].images.all[1].wood" ><b-img class="img-2-h" :src="require('../' + items[12].images.all[2].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ items[12].name_short }}</div>
                <div class="desc desc-short" >{{ items[12].images.all[1].wood}}</div></div>
            </div>
                        <div v-masonry-tile class="item grid-item img-2 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + items[7].name_url + '/' + items[7].images.all[0].wood" ><b-img class="img-2-h" :src="require('../' + items[7].images.all[0].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ items[7].name_short }}</div>
                <div class="desc desc-short" >{{ items[7].images.all[0].wood}}</div></div>
            </div>
                                    <div v-masonry-tile class="item grid-item img-2 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + items[8].name_url + '/' + items[8].images.all[0].wood" ><b-img class="img-2-h" :src="require('../' + items[8].images.all[0].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ items[8].name_short }}</div>
                <div class="desc desc-short" >{{items[8].images.all[0].wood}}</div></div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    props: ["myJson"],
    mounted() {
        this.items = this.myJson.content.products
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
    .img-2 {
        height: 12.5vh!important;
    }
    .img-3 {
        height: 25vh!important;
    }
    .img-4 {
        height: 12.5vh!important;
    }
    .img-2-h {
        height: 12.5vh!important;
    }
    .img-3-h {
        height: 25vh!important;
    }
    .img-4-h {
        height: 12.5vh!important;
    }
    .desc-long {
        font-size: 6px!important;
    }
    .desc-short {
        font-size: 4px!important;
    }
}
@media only screen and (min-width: 615px) {
    .img-2 {
        height: 25vh!important;
    }
    .img-3 {
        height: 50vh!important;
    }
    .img-4 {
        height: 25vh!important;
    }
    .img-2-h {
        height: 25vh!important;
    }
    .img-3-h {
        height: 50vh!important;
    }
    .img-4-h {
        height: 25vh!important;
    }
    .desc-long {
        font-size: 12px!important;
    }
    .desc-short {
        font-size: 8px!important;
    }
}
@media only screen and (min-width: 901px) {
    .img-2 {
        height: 37.5vh!important;
    }
    .img-3 {
        height: 75vh!important;
    }
    .img-4 {
        height: 37.5vh!important;
    }
    .img-2-h {
        height: 37.5vh!important;
    }
    .img-3-h {
        height: 75vh!important;
    }
    .img-4-h {
        height: 37.5vh!important;
    }
    .desc-long {
        font-size: 18px!important;
    }
    .desc-short {
        font-size: 12px!important;
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
    font-size: 18px;
    letter-spacing: 2px;
}
.desc-short {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
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

.img-2-h {
     width: 100%; 
     height: 37.5vh;
}

.img-3-h {
     width: 100%; 
     height: 75vh;
}

.img-4-h {
     width: 100%; 
     height: 37.5vh;
}



</style>

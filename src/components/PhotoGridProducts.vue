<template>
    <div >
        <div v-if="items.length > 5" v-masonry transition-duration="0.3s" item-selector=".item">
            <div v-masonry-tile class="item grid-item img-3 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + json.name_url + '/' + items[0].wood" ><b-img class="img-3-h" :src="require('../' + items[0].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" > {{ this.json.name_short }} </div>
                <div class="desc desc-short" >{{ items[0].wood}}</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-4 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + json.name_url + '/' + items[1].wood" ><b-img class="img-4-h" :src="require('../' + items[1].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ this.json.name_short }}</div>
                <div class="desc desc-short" >{{ items[1].wood}}</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-2 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + json.name_url + '/' + items[2].wood" ><b-img class="img-2-h" :src="require('../' + items[2].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ this.json.name_short }}</div>
                <div class="desc desc-short" >{{ items[2].wood}}</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-2 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + json.name_url + '/' + items[3].wood" ><b-img class="img-2-h" :src="require('../' + items[3].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ this.json.name_short }}</div>
                <div class="desc desc-short" >{{ items[3].wood}}</div></div>
            </div>
            <div v-masonry-tile class="item grid-item img-4 img-container" style="position:absolute">
                <b-link :href="'/#/product/' + json.name_url + '/' + items[4].wood" ><b-img class="img-4-h" :src="require('../' + items[4].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ this.json.name_short }}</div>
                <div class="desc desc-short" >{{ items[4].wood}}</div></div>
            </div>
        </div>
        <div v-else v-masonry transition-duration="0.3s" item-selector=".item">
            <div v-masonry-tile class="item grid-item img-solo img-container" style="position:absolute">
                <b-link :href="'/#/product/' + json.name_url + '/' + items[0].wood" ><b-img class="img-solo-h" :src="require('../' + items[0].source)"></b-img></b-link>
                <div class="centered"><div class="desc desc-long" >{{ this.json.name_short }}</div>
                <div class="desc desc-short" >{{ items[0].wood}}</div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["json"],
    mounted() {
        this.items = this.json.images.all
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
    .img-solo {
        height: 25vh!important;
    }
    .img-solo-h {
        height: 25vh!important;
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
        height: 17vh!important;
    }
    .img-3 {
        height: 34vh!important;
    }
    .img-4 {
        height: 17vh!important;
    }
    .img-2-h {
        height: 17vh!important;
    }
    .img-3-h {
        height: 34vh!important;
    }
    .img-4-h {
        height: 17vh!important;
    }
    .img-solo {
        height: 34vh!important;
    }
    .img-solo-h {
        height: 34vh!important;
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
    .img-solo {
        height: 50vh!important;
    }
    .img-solo-h {
        height: 50vh!important;
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
    height: 25vh;
    width: 50%; 
}
.img-2 {
    height: 25vh;
    width: 25%; 
}
.img-3 {
    height: 50vh;
    width: 25%; 
}

.img-2-h {
     width: 100%; 
     height: 25vh;
}

.img-3-h {
     width: 100%; 
     height: 50vh;
}

.img-4-h {
     width: 100%; 
     height: 25vh;
}

.img-solo {
    height: 50vh;
    max-width: 50%; 
}

.img-solo-h {
    height: 50vh;
}

</style>

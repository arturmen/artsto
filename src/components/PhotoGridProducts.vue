<template>
    <div >
        <div v-masonry transition-duration="0.3s" item-selector=".item">
            <b-img v-masonry-tile class="item grid-item img-3" :src="require('../' + items[0].source)"></b-img>
            <b-img v-masonry-tile class="item grid-item img-2" :src="require('../' + items[1].source)"></b-img>
            <b-img v-masonry-tile class="item grid-item img-4" :src="require('../' + items[2].source)"></b-img>
            <b-img v-masonry-tile class="item grid-item img-2" :src="require('../' + items[3].source)"></b-img>
            <b-img v-masonry-tile class="item grid-item img-3" :src="require('../' + items[4].source)"></b-img>
            <b-img v-masonry-tile class="item grid-item img-2" :src="require('../' + items[5].source)"></b-img>
            <b-img v-masonry-tile class="item grid-item img-2" :src="require('../' + items[6].source)"></b-img>
            <b-img v-masonry-tile class="item grid-item img-2" :src="require('../' + items[7].source)"></b-img>
            <b-img v-masonry-tile class="item grid-item img-2" :src="require('../' + items[8].source)"></b-img>
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
    .img-2 {
        height: 12.5vh!important;
    }
    .img-3 {
        height: 25vh!important;
    }
    .img-4 {
        height: 12.5vh!important;
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



</style>

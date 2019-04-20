<template>
<div>
    <vue-headful
        title="Artsto"
    />
    <div>
        <!-- <h2 style="max-width: 700px; font-size: 96px; font-weight: 700 !important;">
            Artsto
        </h2> -->
    </div>
    <div class="container-images">
        <!-- <b-img v-for="item in images" :key="item.id" fluid rounded v-bind:src="require(item.url)" /> -->
        <b-link href="/#/product/komplet"><b-img :src="require('../assets/images/products/mlynek_alto_porcellana_3.jpg')"></b-img></b-link>
        <b-link href="/#/product/babuni"><b-img :src="require('../assets/images/products/mlynek_babuni_1.jpg')"></b-img></b-link>
        <b-link href="/#/product/scienny"><b-img :src="require('../assets/images/products/mlynek_muro_2.jpg')"></b-img></b-link>
        <b-link href="/#/product/retro"><b-img :src="require('../assets/images/products/mlynek_retro_2.jpg')"></b-img></b-link>
        <b-link href="/#/product/klepsydra"><b-img :src="require('../assets/images/products/mlynek_tempo_porcellana_9.jpg')"></b-img></b-link>
    </div>
    <div>
        <h2 style="max-width: 700px; font-size: 40px;">    
            Produkujemy młynki do kawy, pieprzu oraz kasetki drewniane
        </h2>
        <p>
            Od 20 lat zajmujemy się produkcją artykułów stolarskich. Współpracujemy z wieloma firmami, między innymi firmami produkującymi ceramikę z Bolesławca
        </p>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                // // {id: 1,url:"require('../assets/logo-artsto-dark.png')"},
                // {id: 2,url:"../assets/logo-artsto-dark.png"},
                // {id: 3,url:"../assets/logo-artsto-dark.png"},
                // //{id: 4,url:"../assets/logo-artsto-dark.png"},
                // {id: 5,url:"../assets/logo-artsto-dark.png"}
            ]
        }
    }
}
</script>

<style scoped>
    .container-images {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;
        justify-items: center;
        padding: 5rem;
        padding-bottom:10rem;
        padding-top:5rem;
        width: 100%;
    }
    img {
        object-fit: cover;
        height: 14rem;
        width: 14rem;
    } 
    p {
        max-width: 800px;
        position: relative !important;
        float: none !important;
        margin-left: auto !important;
        margin-right: auto !important;
        /* margin-bottom: 50px !important; */
        font-size: 1.25rem;
        font-weight: 300;
        box-sizing: border-box;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        text-align: center !important;
        color: #555;
    }
</style>
<style>
    h2 {
        position: relative !important;
        float: none !important;
        margin-left: auto !important;
        margin-right: auto !important;
        margin-bottom: 50px !important;
        text-align: center !important;
        font-family: 'Roboto', sans-serif !important;
        color: #444;
        font-weight: 600;
        line-height: 1.5;
        margin: 0 0 30px 0;
    }
    
</style>

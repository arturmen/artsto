<template>
<div>
    <vue-headful
        title="Artsto"
    />
    <div class="main main-images">
        <b-img :src="require('../assets/images/products/mlynek_alto_porcellana_3.jpg')"></b-img>
        <b-img :src="require('../assets/images/products/mlynek_tempo_porcellana_10.jpg')"></b-img>
        <div>
        <h2 >
            <div style="max-width: 700px; font-size: 200px; font-weight: 700 !important;">Artsto</div>
            <!-- <div style="max-width: 700px; font-size: 40px;">Młynki, Kasetki</div> -->
        </h2>
        </div>
    </div>
    <!-- <div style="background-color: white; height: 200px; margin-top: -10px; position: relative; z-index: 15;">

    </div> -->
    <photo-grid-start style="margin-top: 5rem; margin-bottom: 7rem;" :myJson=myJson id="section-photos" />
    <div  id="section-about">
        <h2 style="max-width: 700px; font-size: 24px;">    
            Nasza firma zajmuje się produkcją młynków ręcznych do kawy, pieprzu i przypraw, kasetek na herbatę oraz różnego rodzaju kasetek i pudełek na upominki.	Nasze produkty trafiają do klientów na terenie całej Polski już od 1995 roku. 
        </h2>
        <p>
            Wszystkie oferowane przez nas produkty są robione ręcznie, dzięki czemu jakość naszych wyrobów jest wysoka, a czas eksploatacji bardzo długi.
        </p>
    </div>
    <photo-grid style="margin-top: 8rem;" :myJson=myJson id="section-photos" />
    <contact id="section-contact" style="margin-top: 8rem;" />
</div>
</template>

<script>
import Contact from './Contact.vue'
import PhotoGrid from './PhotoGrid.vue'
import PhotoGridStart from './PhotoGridStart'

export default {
    props: ["myJson"],
    components: {
        Contact,
        PhotoGrid,
        PhotoGridStart
    },
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
    .main {
        position: relative;
    }
    .main-images {
        margin-top: -2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;
        width: 100%;
        height: calc(100vh - 4.75rem);
        overflow: hidden;
        /* z-index: 11;  */
    }
    .main-images img {
        object-fit: cover;
        height: calc(100vh - 4.75rem + 10px);
        width: calc(100% + 20px);
        filter: brightness(60%);
        transition: all .35s ease-in;
        -webkit-transform: translate3d(-10px,-5px, 0);
        transform: translate3d(-10px,-5px,0);
    }
    .main-images img:hover {
        filter: brightness(80%);
        -webkit-transform: translate3d(0,0, 0);
        transform: translate3d(0,0,0);
    }
    .main h2 { 
        position: absolute !important;
        top: calc(50% - 100px);
        /* z-index: 14; */
        left: calc(50% - 300px);
        font-family: 'Roboto', sans-serif !important;
        color: white;
        pointer-events: none;
        font-weight: 600;
        line-height: 1;
        transition: all 0.35s ease-in
    }
    .main:hover h2 {
        opacity: 0.2;
    }
</style>
<style>
    h2 {
        position: relative !important;
        float: none !important;
        margin-left: auto !important;
        margin-right: auto !important;
        text-align: center !important;
        font-family: 'Roboto', sans-serif !important;
        color: #444;
        font-weight: 600;
        line-height: 1.5;
        margin: 0 0 30px 0;
    }
    
</style>

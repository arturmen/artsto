<template>
    <div id="products-container">
        <div>
            <h4 id="title">
                <b-link href="/#/product/komplet">
                    {{items.name}}
                </b-link>
            </h4>
            <masonry
                :cols="{default: 5, 1000: 4, 700: 3, 500: 2, 400: 1}"
                :gutter="{default: '30px', 700: '15px'}"
                >
                <div v-for="(item, index) in items.images.all" :key="index">
                    <div class="px-1 py-1"><b-img :src="require('../' + item.source)"></b-img></div>
                </div>
            </masonry>
            <p style="margin-top: 20px;">
               {{items.description_long}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["items"]
}
</script>

<style scoped>
    #products-container {
        margin-left: 6rem;
        margin-right: 6rem;
    }
    #title {
        font-size: 32px;
        display: block;
        background: transparent;
        padding: 0 0 10px;
        border-bottom: 2px solid #d8b058;
        position: relative !important;
        float: none !important;
        margin-left: auto !important;
        margin-right: auto !important;
        margin-bottom: 50px !important;
        font-family: 'Roboto', sans-serif !important;
        color: #444;
        font-weight: 600;
        line-height: 1.5;
        margin: 0 0 30px 0;
    }
    a {
        color: #444;
    }
    a:hover{
        color: #888888;
        text-decoration: none;
    }
    img {
        width: 220px;
        height: 220px;
        object-fit: cover;
    }

</style>

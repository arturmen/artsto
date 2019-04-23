<template>
<div>
    <div v-bind:key=k> 
        <product-short
            v-for="i in items"
            v-bind:key=i.name
            :items="i"
        />
    </div>
</div>
</template>

<script>
import ProductShort from './ProductShort.vue'

export default {
    components: {
        ProductShort
    },
    props: ["myJson"],
    data () {
        return {
            items: [],
            k: 0
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            for(var j in this.$props.myJson.content.products){
                    this.items[j] = this.$props.myJson.content.products[j]
                    while(this.items[j].images.all.length > 5){
                        this.items[j].images.all.pop()
                    }
                console.log(this.items[j].images.all)
            }
            this.k=this.k+1
        }
    }
}
</script>

<style scoped>
    h2 {
        font-size: 45px;
        float:left!important;
    }
</style>

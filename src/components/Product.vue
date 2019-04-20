<template>
    <div>
        <vue-headful
                title="Produkt"
        />
        <div id="product-container" class="row">
            <div class="col-6 pt-5" style="margin-left: 6rem;">
                <b-img id="main-img"  
                rounded 
                class="shadow" 
                :src="require('../' + image)"></b-img>
                <br/>
                <div id="small-images-container">
                <b-img 
                id="small-image"
                v-for="img in images" 
                v-bind:key="img.source" 
                class="mt-3 mx-1" 
                rounded
                v-on:click.prevent="image = img.source" 
                :src="require('../' + img.source)"/>
                </div>
            </div>
            <div class="col-5 py-5 px-5">
                <h4 id="title">
                    {{name}}
                </h4>
                <p class="my-3">
                    {{ description }}
                </p>
                <h4>
                    Kolory drewna:
                </h4>
                <p class="d-inline mt-3" v-for="wood in woods" v-bind:key="wood.name">
                    <b-img class="mb-3 mx-1" 
                    rounded 
                    :src="require('../' + wood.thumbnail)" 
                    v-on:click="onWoodClick(wood.name)"></b-img>                
                </p>
                <h4>
                    Kolory części metalowych:
                </h4>
                <p class="d-inline mt-3" v-for="metal in metals" v-bind:key="metal.name">
                    <b-img class="mb-3 mx-1" 
                    rounded 
                    :src="require('../' + metal.thumbnail)" 
                    v-on:click="onMetalClick(metal.name)"></b-img>                
                </p>
                <h4  v-if="ceramics.length > 0">
                    Wzory ceramik:
                </h4>
                <p class="d-inline mt-3" 
                v-for="ceramic in ceramics" 
                v-bind:key="ceramic.name">
                    <b-img class="mb-3 mx-1" rounded :src="require('../' + ceramic.thumbnail)"></b-img>                
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["myJson"],
    data () {
        return{
            id: null,
            name: "",
            description: "",
            image: '',
            images: null,
            woods: null,
            metals: null,
            ceramics: null
        }
    },
    methods: {
        init(){
            for(var i in this.$props.myJson.content.products){
                if(this.$props.myJson.content.products[i].name_url === this.$route.params.name) {
                    this.id = i
                }
            }
            this.setMaterials(this.id)
            this.setAttributes(this.id)
        },
        setMaterials(id){
            var tmpMaterial = Array()
            for(var w in this.$props.myJson.content.materials.wood){
                if(this.$props.myJson.content.products[id].materials.wood.includes(this.$props.myJson.content.materials.wood[w].name)){
                    tmpMaterial.push(this.$props.myJson.content.materials.wood[w])
                }
            }
            this.woods = tmpMaterial
            tmpMaterial = []
            for(w in this.$props.myJson.content.materials.metal){
                if(this.$props.myJson.content.products[id].materials.metal.includes(this.$props.myJson.content.materials.metal[w].name)){
                    tmpMaterial.push(this.$props.myJson.content.materials.metal[w])
                }
            }
            this.metals = tmpMaterial
            tmpMaterial = []
            for(w in this.$props.myJson.content.materials.ceramics){
                if(this.$props.myJson.content.products[id].materials.ceramics.includes(this.$props.myJson.content.materials.ceramics[w].name)){
                    tmpMaterial.push(this.$props.myJson.content.materials.ceramics[w])
                }
            }
            this.ceramics = tmpMaterial
        },
        setAttributes(id){
            this.name = this.$props.myJson.content.products[id].name
            this.description = this.$props.myJson.content.products[id].description_long
            this.image = this.$props.myJson.content.products[id].images.all[0].source
            this.images = this.$props.myJson.content.products[id].images.all
        },
        onWoodClick(attribute){
            var images = this.$props.myJson.content.products[this.id].images.all
            for(var i in images){
                if(images[i].wood === attribute){
                    this.image = images[i].source  
                }
            }
        },
        onMetalClick(attribute){
            var images = this.$props.myJson.content.products[this.id].images.all
            for(var i in images){
                if(images[i].metal === attribute){
                    this.image = images[i].source  
                }
            }
        }
    },
    mounted () {
        this.init()
    }
}
</script>

<style scoped>
  #main-img {
      max-width: 500px;
      max-height: none;
  }
  img {
      max-width: 75px;
      max-height: 75px;
      /* border: 2px solid #d8b058; */
  }  
  img:hover {
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  }
  #small-image {
      width: 75px;
      height: 75px;
      object-fit: cover;
  }
  #small-images-container {
      text-align: center;
      max-width: 500px;
  }
  h4 {
    font-size: 16px;
    font-weight: 600 !important;
    font-family: 'Source Sans Pro', sans-serif;
    color: #444;
    box-sizing: border-box;
  }
  #title {
    font-size: 32px;
    display: block;
    background: transparent;
    padding: 0 0 10px;
    border-bottom: 2px solid #d8b058;
  }
</style>

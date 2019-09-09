<template>
  <div>
    <vue-headful :title=title />
    <div id="product-container " class="row">
      <div class="col-1 pt-5  version-big" style="margin-left: 6rem;">
        <div id="small-images-container">
          <b-link><b-img
            id="small-image"
            v-for="img in images"
            v-bind:key="img.source"
            v-on:pointerover="image = img"
            v-on:pointerout="image = imageClicked"
            class="mt-2 mx-1"
            v-on:click.prevent="image = img; imageClicked = img"
            :src="require('../' + img.source)"
          /></b-link>
        </div>
      </div>
      <div class="col-5 pt-5 version-big">
        <b-link v-b-modal.modal-img-big>
            <b-img id="main-img" :title=name class="shadow-lg" :src="require('../' + image.source)"></b-img>
        </b-link>
        <b-modal id="modal-img-big" :hide-header="true" :hide-footer="true">
            <b-img id="modal-img" :title=name rounded class="shadow" :src="require('../' + image.source)"></b-img>
        </b-modal>
        <br>
      </div>
      <div class="col-5 py-5 px-5 version-big">
        <h4 id="title">{{name}}</h4>
        <h4 style="font-size: 20px; border: none;"> Kolor drewna: {{ changeCaseFirstLetter(image.wood) }}</h4>
        <h4 style="font-size: 20px; border: none;"> Kolor metalu: {{ changeCaseFirstLetter(image.metal) }}</h4>
        <p class="my-3">{{ description }}</p>
        <h4>Kolory drewna:</h4>
        <p class="d-inline mt-3" v-for="wood in woods" v-bind:key="wood.name">
          <b-link><b-img
            class="mb-3 mx-1 img-material"
            :src="require('../' + wood.thumbnail)"
            v-on:click="onWoodClick(wood.name, true)"
            v-on:pointerover="onWoodClick(wood.name, false)"
            v-on:pointerout="image = imageClicked"
          ></b-img></b-link>
        </p>
        <h4>Kolory części metalowych:</h4>
        <p class="d-inline mt-3" v-for="metal in metals" v-bind:key="metal.name">
          <b-link><b-img
            class="mb-3 mx-1 img-material"
            :src="require('../' + metal.thumbnail)"
            v-on:click="onMetalClick(metal.name, true)"
            v-on:pointerover="onWoodClick(wood.name, false)"
            v-on:pointerout="image = imageClicked"
          ></b-img></b-link>
        </p>
        <h4 v-if="ceramics.length > 0">Wzory ceramik:</h4>
        <p class="d-inline mt-3" v-for="ceramic in ceramics" v-bind:key="ceramic.name">
          <b-link><b-img class="mb-3 mx-1" rounded :src="require('../' + ceramic.thumbnail)"></b-img></b-link>
        </p>
      </div>
    </div>
    <div id="product-container " class="row">
      <div class="col-12 version-small">
        <div class="mx-3"><h4 id="title" >{{name}}</h4></div>
        <div id="small-images-container" class="pt-5">
          <b-link><b-img
            class="mx-1 my-1"
            id="small-image"
            v-for="img in images"
            v-bind:key="img.source"
            v-on:pointerover="image = img"
            v-on:pointerout="image = imageClicked"
            v-on:click.prevent="image = img; imageClicked = img"
            :src="require('../' + img.source)"
          /></b-link>
        </div>
      </div>
      <div class="col-12 pt-5 version-small">
        <div  style="width: 100vw; max-height: 50vh; overflow-y: scroll;">
        <b-link style="" v-b-modal.modal-img-big>
            <b-img id="main-img" style="width: 100vw;" :title=name class="shadow-lg" :src="require('../' + image.source)"></b-img>
        </b-link>
        </div>
        <b-modal id="modal-img-big" :hide-header="true" :hide-footer="true">
            <b-img id="modal-img" :title=name rounded class="shadow" :src="require('../' + image.source)"></b-img>
        </b-modal>
        <br>
      </div>
      <div class="col-12 py-5 px-5 version-small">
        <p class="my-3">{{ description }}</p>
        <h4>Kolory drewna:</h4>
        <p class="d-inline mt-3" v-for="wood in woods" v-bind:key="wood.name">
          <b-link><b-img
            class="mb-3 mx-1 img-material"
            :title=wood.name
            :src="require('../' + wood.thumbnail)"
            v-on:click="onWoodClick(wood.name, true)"
            v-on:pointerover="onWoodClick(wood.name, false)"
            v-on:pointerout="image = imageClicked"
          ></b-img></b-link>
        </p>
        <h4>Kolory części metalowych:</h4>
        <p class="d-inline mt-3" v-for="metal in metals" v-bind:key="metal.name">
          <b-link><b-img
            class="mb-3 mx-1 img-material"
            :src="require('../' + metal.thumbnail)"
            v-on:click="onMetalClick(metal.name, true)"
            v-on:pointerover="onWoodClick(wood.name, false)"
            v-on:pointerout="image = imageClicked"
          ></b-img></b-link>
        </p>
        <h4 v-if="ceramics.length > 0">Wzory ceramik:</h4>
        <p class="d-inline mt-3" v-for="ceramic in ceramics" v-bind:key="ceramic.name">
          <b-link><b-img class="mb-3 mx-1" rounded :src="require('../' + ceramic.thumbnail)"></b-img></b-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["myJson"],
  data() {
    return {
      id: null,
      name: "",
      description: "",
      image: "",
      imageClicked: "",
      images: null,
      woods: null,
      metals: null,
      ceramics: null,
      title: "Artsto",
    };
  },
  methods: {
    init() {
      for (var i in this.$props.myJson.content.products) {
        if (
          this.$props.myJson.content.products[i].name_url ===
          this.$route.params.name
        ) {
          this.id = i;
        }
      }
      this.setMaterials(this.id);
      this.setAttributes(this.id);
    },
    setMaterials(id) {
      var tmpMaterial = Array();
      for (var w in this.$props.myJson.content.materials.wood) {
        if (
          this.$props.myJson.content.products[id].materials.wood.includes(
            this.$props.myJson.content.materials.wood[w].name
          )
        ) {
          tmpMaterial.push(this.$props.myJson.content.materials.wood[w]);
        }
      }
      this.woods = tmpMaterial;
      tmpMaterial = [];
      for (w in this.$props.myJson.content.materials.metal) {
        if (
          this.$props.myJson.content.products[id].materials.metal.includes(
            this.$props.myJson.content.materials.metal[w].name
          )
        ) {
          tmpMaterial.push(this.$props.myJson.content.materials.metal[w]);
        }
      }
      this.metals = tmpMaterial;
      tmpMaterial = [];
      for (w in this.$props.myJson.content.materials.ceramics) {
        if (
          this.$props.myJson.content.products[id].materials.ceramics.includes(
            this.$props.myJson.content.materials.ceramics[w].name
          )
        ) {
          tmpMaterial.push(this.$props.myJson.content.materials.ceramics[w]);
        }
      }
      this.ceramics = tmpMaterial;
    },
    setAttributes(id) {
      this.name = this.$props.myJson.content.products[id].name;
      this.title = "Artsto | "+ this.$props.myJson.content.products[id].name
      this.description = this.$props.myJson.content.products[id].description_long;
      this.setImage()
      this.images = this.$props.myJson.content.products[id].images.all;
    },
    setImage() {
      if(this.$route.params.colour) 
        for(var img in this.$props.myJson.content.products[this.id].images.all){
          if(this.$props.myJson.content.products[this.id].images.all[img].wood === this.$route.params.colour){
            
            this.image = this.$props.myJson.content.products[this.id].images.all[img]
          }
        }
      if(this.image === "") this.image = this.$props.myJson.content.products[this.id].images.all[0]
      this.imageClicked = this.image
    },
    onWoodClick(attribute,click) {
      var images = this.$props.myJson.content.products[this.id].images.all;
      for (var i in images) {
        if (images[i].wood === attribute) {
          this.image = images[i];
          if(click) this.imageClicked = images[i];
        }
      }
    },
    onMetalClick(attribute,click) {
      var images = this.$props.myJson.content.products[this.id].images.all;
      for (var i in images) {
        if (images[i].metal === attribute) {
          this.image = images[i];
          if(click) this.imageClicked = images[i];
        }
      }
    },
    changeCaseFirstLetter(params) {
      if(typeof params === 'string') {
        return params.charAt(0).toUpperCase() + params.slice(1);
      }
      return null;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
@media only screen and (max-width: 800px) {
  .version-small {
    display: block!important;
  }
  .version-big {
    display: none!important;
  }
}
@media only screen and (min-width: 801px) {
  .version-small {
    display: none!important;
  }
  .version-big {
    display: block!important;
  }
}
#modal-img-big .modal-body {
    padding: 0rem!important;
}
.modal-content {
    width: fit-content!important;
    height: fit-content!important;
    position: absolute; 
    left: 50%; 
    margin-left: -400px; 
    margin-top: 60px;
}
</style>

<style scoped>
#main-img {
  max-width: 500px;
  max-height: none;
}
#modal-img {
    max-height: none;
    max-width: 800px;
}
img {
  max-width: 75px;
  max-height: 75px;
}
img:hover {
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.3);
}
.img-material {
  /* border-bottom: 2px transparent solid;
  transition: border 0.2s; */
}
.img-material:hover {
  /* border-bottom: 2px black solid; */
}
#small-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
}
#small-image:hover {
}
#small-images-container {
  text-align: center;
  max-width: 500px;
}
h4 {
  font-size: 16px;
  font-weight: 600 !important;
  font-family: "Source Sans Pro", sans-serif;
  color: #444;
  box-sizing: border-box;
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
        font-family: 'Roboto', sans-serif !important;
        color: #444;
        font-weight: 600;
        line-height: 1.5;
}
</style>

<template>
    <div id="header-container" class="shadow-sm header" style="position: -webkit-sticky; position: sticky; top: 0; z-index: 10;">
        <header>
            <div class="pt-1 pl-4">
                <a
                id="logo"
                href="/#/"><img src="../assets/images/logo/logo-artsto-dark.png"/></a>
                <a class="pt-4 pr-5 float-right menu-big" href="/gallery.html">GALERIA</a>
                <div class="link-dropdown">
                    <b-dropdown id="dropdown-1" right text="PRODUKTY" style="columns: 2" class="pr-5 float-right menu-big" >
                        <b-dropdown-item href="/#/products" class="big-sign-dropdown">Wszystkie produkty</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item v-for="product in myJson.content.products" :key="product.short_name" :href="'/#/product/' + product.name_url +'/' + product.images.all[0].wood">{{product.name_short}}</b-dropdown-item>
                    </b-dropdown>
                </div>
                <a class="pt-4 pr-5 float-right menu-big" href="/#/">STRONA GŁÓWNA</a>
                <div class="menu-small" style="margin: 0 auto; position: relative; left: 25%; max-width: fit-content">
                <b-dropdown size="lg" right variant="link" toggle-class=" text-center text-decoration-none" no-caret>
                    <template slot="button-content"> <font-awesome-icon class="pt-3 menu-small dropdown b-dropdown" style=" margin: 0 auto; font-size: 24px; -webkit-box-sizing: content-box!important; box-sizing: content-box!important" icon="bars" /></template>
                    <b-dropdown-item href="/#/">STRONA GŁÓWNA</b-dropdown-item>
                    <b-dropdown-item href="/gallery.html">GALERIA</b-dropdown-item>
                    <b-dropdown-item href="/#/products">PRODUKTY</b-dropdown-item>
                </b-dropdown>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props: ["myJson"]
}
</script>
<style>
.header .btn-link {
    color: black!important;
}

.link-dropdown .btn-group > .btn {
    color: #444444;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
    font-weight: 400;
    letter-spacing: 3px;
    background-color: inherit;
    border: none;
    margin-top:1.15rem;
}

.link-dropdown .dropdown-menu.show {
    columns: 3!important;
    width: 75vw;
    }
.link-dropdown a {
    color: #444444;
    font-size: 16px!important;
    font-weight: 700!important;
    letter-spacing: 1px!important;
    padding: 10px;
    font-family: 'Raleway', sans-serif!important;
    transition: margin .4s ease, padding .4s ease;
}
.link-dropdown a:hover {
    color: #999999!important;
    margin-left: 10px;
    background-color: transparent;
}
.link-dropdown .big-sign-dropdown {
    font-size: 18px!important; 
    color: #111111!important; 
    font-weight: 700!important;
    margin-bottom: 15px;
    margin-top: 15px;
}
.menu-small .dropdown-menu.show {
    width: 100vw;
    position: absolute;
    top: 0px;
    left: -5px!important;
}
.menu-small a {
    padding: 15px;
    color: #444444;
    font-size: 14px!important;
    font-weight: 400!important;
    letter-spacing: 1px!important;
    font-family: 'Raleway', sans-serif!important;
}
</style>


<style scoped>
    #logo {
        font-size: large;
        float: left;
        text-decoration: none;
    }
    header {
        background-color: #f5f5f5;
        height: 4.75rem;
    }
    a{
        color: #444444;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 12px;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
        font-weight: 400;
        letter-spacing: 3px;
    }
    a:hover{
        color: #888888;
        text-decoration: none;
    }
    #header-container {
        border-bottom: solid 1px;
        border-bottom-color: rgba(228, 228, 228, 1);;
    }
    @media only screen and (max-width: 614px) {
        .menu-big {
            display: none;
        }
        .menu-small {
            display: block;
        }
    }
    @media only screen and (min-width: 615px) {
        .menu-small {
            display: none;
        }
    }


</style>

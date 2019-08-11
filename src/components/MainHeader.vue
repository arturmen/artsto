<template>
    <div id="header-container" class="shadow-sm header" style="position: -webkit-sticky; position: sticky; top: 0; z-index: 10;">
        <header>
            <div class="pt-1 pl-4">
                <a
                id="logo"
                href="/#/"><img src="../assets/images/logo/logo-artsto-dark.png"/></a>
                <a class="pt-4 pr-5 float-right menu-big" href="artstos.vot.pl/gallery.html">GALERIA</a>
                <a class="pt-4 pr-5 float-right menu-big" href="/#/products">PRODUKTY</a>
                <a class="pt-4 pr-5 float-right menu-big" href="/#/">STRONA GŁÓWNA</a>
                <div class="menu-small" style="margin: 0 auto; position: relative; left: 25%; max-width: fit-content">
                <b-dropdown size="lg" right variant="link" toggle-class=" text-center text-decoration-none" no-caret>
                    <template slot="button-content"> <font-awesome-icon class="pt-3 menu-small dropdown b-dropdown" style=" margin: 0 auto; font-size: 24px; -webkit-box-sizing: content-box!important; box-sizing: content-box!important" icon="bars" /></template>
                    <b-dropdown-item href="/#/">STRONA GŁÓWNA</b-dropdown-item>
                    <b-dropdown-item href="artstos.vot.pl/gallery.html">GALERIA</b-dropdown-item>
                    <b-dropdown-item href="/#/products">PRODUKTY</b-dropdown-item>
                </b-dropdown>
                </div>
            </div>
        </header>
    </div>
</template>
<style>
.header .btn-link {
    color: black!important;
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

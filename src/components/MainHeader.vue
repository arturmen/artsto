<template>
    <div id="header-container" class="shadow">
        <header>  
            <div class="pt-1 pl-4">
                <a
                id="logo"
                href="/#/"><img src="../assets/images/logo/logo-artsto-dark.png"/></a>
                <a class="pt-4 pr-5 float-right" href="/#/gallery">GALERIA</a>
                <a class="pt-4 pr-5 float-right" href="/#/products">PRODUKTY</a>
                <a class="pt-4 pr-5 float-right" href="/#/">STRONA GŁÓWNA</a>
            </div>
        </header>
    </div>
</template>

<style scoped>
    #logo {
        font-size: large;
        float: left;
        text-decoration: none;
    }
    header {
        background-color: #d8b058;
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
</style>

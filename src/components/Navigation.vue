<script setup lang="ts">

</script>

<template>
    <nav class="navigation-container">

        <div class="navmenu">
            <div class="logo-container">
                <RouterLink to="/home">
                    <img src="/assets/empregae-text-logo.png" alt="empregae logo">
                </RouterLink>      
                
            </div>


            <div class="options">
            
                <div class="searchIcon">
                    <img src="/assets/icon-search.png" alt="search icon">
                </div>
                <div class="menu">
                    <img src="/assets/icon-menu.png" alt="menu icon">
                </div>
            </div>
        </div>
    </nav>
</template>

<style >
    .navigation-container{
        height: 100px;
        padding: 48px 32px 12px;
        background-color: transparent;

    }

    .navmenu{
        display: flex;
        align-items: center;
        justify-content: space-between ;
    }

    .logo-container{
        width: 200px;
    }

    .logo-container img{
        width: 100%;
    }

    .logo-container:hover{
        cursor: pointer;
    }
    .options{
        display: flex;
        justify-content: space-around;
        width: 15%;
        gap: 24px;
    }

    .options div{
        padding: 4px;

    }
    .options img{
        width: 32px;
    }
    .options div:hover{
        cursor: pointer;
       
        
    }

    span{
        font-weight: bold;
    }


/* Phone */
@media screen and (max-width: 768px) {
    .logo-container {
        width: 100px;
        justify-content: center;
        align-content: center;
    }

    .logo-container img {
        width: 100%;
    }

    .options img {
        width: 24px;
        height: 24px;
    }

    .navigation-container {
        padding: 12px 16px;
        height: auto;
    }

    .navmenu {
        
    }

    .options {
        width: 20vw;
        justify-content: space-around;
        
    }
}

</style>
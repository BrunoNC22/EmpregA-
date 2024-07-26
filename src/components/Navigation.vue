<script setup lang="ts">

</script>

<template>
    <nav class="navigation-container">

        <div class="navmenu">
            <div class="logo-container">
                <a href="">
                    <img src="../assets/empregae-text-logo.png" alt="empregae logo">
                </a>
                
            </div>


            <div class="options">
            
                <div class="searchIcon">
                    <img src="../assets/icon-search.png" alt="search icon">
                </div>
                <div class="menu">
                    <img src="../assets/icon-menu.png" alt="menu icon">
                </div>
            </div>
        </div>
        

        <div>
            Bem-vindo(a), <span>Matheus</span>
        </div>
    </nav>
</template>

<style >
    .navigation-container{
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
        justify-content: space-between;
        align-content: baseline;
        height: 100px;

        padding: 48px 24px 12px;

    }

    .navmenu{
        display: flex;
        justify-content: space-between ;
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

    .options div:hover{
        cursor: pointer;
        
    }

    span{
        font-weight: bold;
    }

    /* Tablet */
@media screen and (min-width: 768px) and (max-width: 1023px) {
    .navigation-container {
        padding: 24px 32px;
    }

    .navmenu {
        width: 90%;
    }

    .options {
        gap: 36px;
    }
}

/* Phone */
@media screen and (max-width: 767px) {
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
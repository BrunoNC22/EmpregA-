<script setup lang="ts">

</script>

<template>
    <nav class="navmenu">

        <div>
            <div>
                Logo
            </div>


            <div class="options">
            
                <div class="searchIcon">
                    <img src="../assets/icon-search.png" alt="Search Icon">
                </div>
                <div class="menu">
                    <img src="../assets/icon-menu.png" alt="Menu Icon">
                </div>
            </div>
        </div>
        

        <div>
            Bem-vindo(a), <strong>Matheus</strong>
        </div>
    </nav>
</template>

<style >
    .navmenu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100px;

        padding: 24px 24px;

    }

    .options{
        display: flex;
        justify-content: space-around;
        width: 15%;
        gap: 24px;
    }
</style>
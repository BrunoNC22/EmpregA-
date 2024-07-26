<script setup lang="ts">

</script>

<template>
    <nav class="navmenu">
        <div>
            Logo
        </div>


        <div class="options">
            <div class="searchIcon">O
                <i> </i>
            </div>
            <div class="menu">M</div>
        </div>
    </nav>
</template>

<style >
    .navmenu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        padding: 24px 24px;

    }

    .options{
        display: flex;
        justify-content: space-around;
        width: 15%;
        gap: 24px;
    }
</style>
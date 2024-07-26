<script setup lang="ts">

    import Navigation from './components/Navigation.vue';


</script>

<template>
    <main>
        <Navigation class="navbar"/>
        
        <section>
            <p>Bem vindo, <strong>Matheus</strong></p>
        </section>
         

    </main>
    
</template>

<style scoped>
    main{
        background-color: #F5F7FB;
        height: 100vh;
        

    }

    section{
        padding: 24px;
        background-color: aquamarine;
    }
    

    .navbar{
        width: 100vw;
        background-color: aqua;
        
    }
</style>

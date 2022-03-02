<template>
    <Nuxt id="app"/>
</template>

<script>        
    export default {
        
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        transition: ease-in-out .5s, transform .5s;
    }
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #79bbff;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-track{
        background-color: #53a8ff;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background-color: #53a8ff;
    }
    ::-webkit-scrollbar-track:hover{
        background-color: #337ecc;
    }
    #app{
        background-color: #337ecc;
    }
</style>
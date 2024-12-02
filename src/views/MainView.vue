<template>
    <Header></Header>
    <router-view></router-view>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style>
body, html {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

</style>
<template>
    <div class="telefonos">
        <p>J. Jesús ✆ 670 83 21 96</p>
        <p>Cirilo ✆ 670 83 21 17</p>
        <p>Teresa ✆ 692 98 46 25</p>
        <p>Antonio ✆ 645 81 63 91</p>
        <p>Pescadería ✆ 924 31 51 02</p>
        <p>✉ phsanchezlazaro@gmail.com</p>
    </div>

</template>

<script setup>
</script>

<style scoped>
p {
    font-family: 'PathwayGothicOne-Regular';
    font-size: 4vw;
    color: white;
    margin-left: 2vw;
}

.telefonos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* Dos columnas de igual ancho */
    justify-content: center;
    align-content: center;
    height: 100vh;
    text-align: left;
}
</style>
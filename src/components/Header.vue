<template>
    <div class="header">
        <div class="links">
            <p><router-link to="/inicio">Inicio</router-link></p>
            <p><router-link to="/about">Sobre nosotros</router-link></p>
            <p><router-link to="/contact">Contacto</router-link></p>
        </div>
    </div>
    <div class="footer">
        <a href="https://www.google.com/maps/place/Pescader%C3%ADa+Hermanos+S%C3%A1nchez+L%C3%A1zaro/@38.9203652,-6.3444646,16z/data=!3m1!4b1!4m6!3m5!1s0xd1426eabc63d211:0xb548de29d24841d7!8m2!3d38.9203652!4d-6.3444646!16s%2Fg%2F11hd9q8w0z?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" 
       target="_blank" 
       rel="noopener noreferrer">
        <p>C/ Marquesa de Pinares, 3, 06800 Mérida, Badajoz</p>
    </a>
    </div>
</template>

<script setup>

</script>

<style scoped>

body, html {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
}
.header {
    position: fixed;
    display: flex;
    justify-content: right;
    align-items: center;
    height: 7vh;
    top: 0;
    right: 0;
    left: 0;
    background-color: #0B3C69;
    color: rgb(255, 255, 255);
    z-index: 1000;
}

.links{
    display: flex; 
    justify-content: space-around; 
    align-items: left; 
}

.footer {
    position: fixed;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 7vh;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #0B3C69;
    color: rgb(255, 255, 255);
    z-index: 1000; 
}

p{
    font-size: 2vw;
    font-family: 'PathwayGothicOne-Regular';
    padding-left: 2vw; 
}

a {
    text-decoration: none; /* Elimina el subrayado */
    color: inherit; /* Mantiene el color del texto original */
}

a:visited {
    color: inherit; /* Asegura que el color no cambie después de visitar el enlace */
}

a:focus {
    text-decoration: none; /* Mantiene sin subrayado incluso al pasar el cursor o enfocar */
}

.header a:hover{
    color: #dddddd;
}

.header p{
    font-size: 1.7vw;
    font-family: 'PathwayGothicOne-Regular';
    padding-right: 4vw;
}

</style>
<template>
    <img src="@\assets\titulo.png" alt="Titulo">
    <router-link to="/contact"><button>Reserva tu pedido</button></router-link>
</template>

<script setup>

</script>

<style scoped>
img{
    width: 35%;
    position: fixed;
    top: 10%;              
    left: 50%;           
    transform: translateX(-50%);
}
a { 
    text-decoration: none; 
    color: inherit;        
    font-size: inherit;    
    font-family: inherit; 
}

button{
    width: 20vw;             
    height: 10vh;                       
    position: fixed;            
    bottom: 10vh;              
    right: 3vw; 
    background-color: white;
    color:#0B3C69;
    font-size: 1.5vw;
    font-family: 'Roboto-Black';
    border-radius: 40px;
    border: none;
}

button:hover {
    background-color: #f0f0f0;      
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
}

</style>
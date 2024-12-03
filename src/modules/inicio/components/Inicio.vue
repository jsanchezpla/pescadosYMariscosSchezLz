<template>
    <img class="titulo" src="@\assets\titulo.png" alt="Titulo">
    <div class="container-carrusel">
        <div class="carruseles" id="slider">
            <section class="slider-section">
                <img src="@\assets\img\1.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\2.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\3.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\4.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\5.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\6.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\7.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\8.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\9.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\10.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\11.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\12.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\13.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\14.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\15.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\16.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\17.jpg">
            </section>
            <section class="slider-section">
                <img src="@\assets\img\18.jpg">
            </section>
        </div>
        <div class="btn-left"><box-icon color="white" name='chevron-left' ></box-icon></div>
        <div class="btn-right"><box-icon color="white" name='chevron-right' ></box-icon></div>
    </div>
    <router-link to="/contact"><button>Reserva tu pedido</button></router-link>
</template>

<script setup>
import 'boxicons'
import { onMounted } from 'vue';

onMounted(() => {
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const slider = document.querySelector("#slider");
  const sliderSection = document.querySelectorAll(".slider-section");

  setInterval(() => {
    moveToRight();
  }, 5000);
    
  let operacion = 0;
  let counter=0;
  let widthImg = 100/sliderSection.length;

  const moveToRight = () => {
    if (counter>=sliderSection.length-1) {
        operacion=0;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition="none"
        counter=0;
    }else{
        counter++;
        operacion= operacion + widthImg
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition="all ease 0.6s"
    }
  };

  const moveToLeft = () => {
    counter--;
    if (counter<0) {
        counter=sliderSection.length-1;
        operacion= widthImg*(sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition="none"
    }else{
        operacion= operacion - widthImg
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition="all ease 0.6s"
    }
    
  };

  

  if (btnLeft) btnLeft.addEventListener("click", moveToLeft);
  if (btnRight) btnRight.addEventListener("click", moveToRight);
});




</script>

<style scoped>
.titulo{
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

.container-carrusel{
    z-index: 1;
    position: fixed;
    width: 37.5vw;   
    height: 55vh; 
    top:30%;
    left:50%;
    transform: translateX(-50%);
    background-color:#e0e0e0;
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.66); 
    border-radius: 15px;
    overflow: hidden ;
}

.carruseles{
    width: 1800%;   
    height: 100%; 
    display: flex;
}

.slider-section{
    width: calc(100% / 18);  
    height: 100%;  
}

.slider-section img{
    width: 100%; 
    height: 100%;
    object-fit: cover;  
    border-radius: 15px;
}

.btn-left, .btn-right{
    display: flex;
    position: absolute;
    top: 50%;
    font-size: 1.5rem;
    background-color: transparent;
    border-radius: 50%;
    padding: 0.3125rem;
    font-weight: 600;
    cursor: pointer;
    color: #ffffff81;
    transform: translate(0, -50%);
    transition: .5s ease;
    user-select: none;
}

box-icon {
  color: white;
}

.btn-left:hover, .btn-right:hover{
    background-color: #333333d4;
    color:#fff;
}

.btn-right{
    right: 0.625rem;
}

.btn-left{
    left: 0.625rem;
}
</style>
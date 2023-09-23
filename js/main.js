
/*===========swiper wrapper === */
var swiper  =  new Swiper(".mySwiper",{
    spaceBetween: 30,
    centerSlides : true, 
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation:{
        nextE1:".swiper-button-next",
        nextE1:".swiper-button-prev",

    },
});

/* ====== navbar toggle ========*/
let  navbar = document.querySelector('.navbar');

document.querySelector('#menubar').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#menubar').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

const buttonElement = document.querySelectorAll('.tablinks');
const tabContent = document.querySelectorAll('.tabContent');

tabContent[0].style.display = "block";

buttonElement.forEach(function(i){
    i.addEventListener('click', function(event){
        for (let x = 0; x < buttonElement.length; x++){
            if(event.target.id == buttonElement[x].id){

                buttonElement[x].className  = buttonElement[x].className.replace("  active","");
                buttonElement[x].style.display = "block";
                event.currentTarget.className += " active";
            }
            else{
               
                tabContent[x].style.display = "none";
                buttonElement[x].className = buttonElement[x].className.replace(" active","");
            }
        }
    });
});
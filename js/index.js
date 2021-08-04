var i=0;
function timeout() {
    setTimeout(function () {
        i=i+1; 
        changeImg()
       

        console.log('xd')
        timeout();
    },2000);
}
timeout()
const projects=[{img:'1.jpg',nombre:"pelao camaron",tipo:"Punto de venta",acc:"Diseñamos un punto de venta para el restaurante pelea camaron de esta forma se pudo agilizar el proceso de pedidos",
tag1:"website",tag2:"Web"},
{img:'2.png',nombre:"Huppler",tipo:"E-Commerce",acc:"Diseñamos xdxddo agilizar el proceso de pedidos",
tag1:"E-Commerce",tag2:"Web"},
{img:'3.jpg',nombre:"SIGENO",tipo:"Sistem de gestión de personal",acc:"Diseñamos un punto de venta para el restaurante pelea camaron de esta forma se pudo agilizar el proceso de pedidos",
tag1:"website",tag2:"Web"}]

document.getElementById('button-last').addEventListener("click",function(){
    i=i-1;
     
    if(document.slide.style.animation){
        document.slide.style.animation=""
    }else{
        document.slide.style.animation=`slidein  ease forwards 1s `
    } 
    changeImg()
   
})

document.getElementById('button-next').addEventListener("click",function(){
    i=i+1;
 

    


    
    changeImg()
    

})
function auto(){
    setTimeout(function() {
        
        auto()
    }, 2000);
}


function changeImg(){
    document.slide.style.animation=`slidein  infinite  forwards 2s `

    if(i<0){
        i=projects.length -1;
    }
    if(i>=projects.length){
        i=0
    }
console.log(i)
  console.log(projects[i])
  document.slide.src= "./Assets/" + projects[i].img;
    document.getElementById("cabecera").innerHTML = projects[i].nombre;
    document.getElementById("tipo").innerHTML = projects[i].tipo;
    document.getElementById("accion").innerHTML = projects[i].acc;
    document.getElementById("tag1").innerHTML = projects[i].tag1;
    document.getElementById("tag2").innerHTML = projects[i].tag2;
  
}

const navslide=()=>{
    const burguer=document.querySelector('.burguer');
    const nav=document.querySelector('.nav-links')
    const navLinks=document.querySelectorAll('.nav-links li')



    burguer.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index)=>{
          console.log(1)
             if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 + 0.3}s `
            } 
             
        })
        burguer.classList.toggle('toggle');
    })

}
navslide()
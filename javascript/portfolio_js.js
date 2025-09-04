let body=document.body;
let boton=document.getElementById("boton_byn");
let seccion=document.getElementsByClassName("seccion_color");


let modo_byn=false;


function cambioColor(){
    if(modo_byn==false){
        body.classList.remove("bg_color");
        body.classList.add("bg_byn");
        
       
        seccion.classList.remove("seccion_color");
        seccion.classList.add("seccion_byn");

        

       
        modo_byn=true;
    }
    else{
        body.classList.remove("bg_byn");
        body.classList.add("bg_color")
        
       
        
        seccion.classList.remove("seccion_byn");
        seccion.classList.add("seccion_color");

        modo_byn=false;
    }
}

boton.addEventListener("click", cambioColor);

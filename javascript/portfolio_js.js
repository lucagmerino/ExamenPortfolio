let body=document.body;
let boton=document.getElementById("boton_byn");
let seccion=document.getElementsByClassName("seccion_color");


let modo_byn=false;


function cambioColor(){
    if(modo_byn==false){
        body.classList.remove("bg_color");
        body.classList.add("bg_byn");
        
      /*  for (let i = 0; i < seccion.length; i++) {
            seccion[i].classList.remove("seccion_color");
            seccion[i].classList.add("seccion_byn");
        }

 */
        

       
        modo_byn=true;
    }
    else{
        body.classList.remove("bg_byn");
        body.classList.add("bg_color")
        
       
        
        

        modo_byn=false;
    }
}

boton.addEventListener("click", cambioColor);

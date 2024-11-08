import { agregarPelicula } from "./Promesas.js";

window.addEventListener("load",()=>{
    console.log("hola ya cargue");
    document.getElementById("btnAgregar").addEventListener("click",()=>{
        console.log("Le diste al boton");
        //Recupero los elementos del formulario
        let eNombre = document.getElementById("nombre");
        let eDirector = document.getElementById("director");
        let eAnio = document.getElementById("anio");
        let eValoracion = document.getElementById("valoracion");
        let eGenero = document.getElementById("genero");
        let eMayorEdad = document.getElementById("mayorEdad");
        //Recupero el contenido de los elementos del formulario
        let vNombre = eNombre.value;
        let vDirector = eDirector.value;
        let vAnio = eAnio.value;
        let vValoracion = eValoracion.value;
        let vGenero = eGenero.value;
        //Radios y checkbox no se recupera valor, se recupera si esta chequeado
        let vMayorEdad = eMayorEdad.checked; 
        console.log(vNombre);
        console.log(vDirector);
        console.log(vAnio);
        console.log(vValoracion);
        console.log(vGenero);
        console.log(vMayorEdad);
        let pelicula = {
            'nombre':vNombre,
            'director':vDirector,
            'anio':vAnio,
            'valoracion':vValoracion,
            'genero':vGenero,
            'mayorEdad':vMayorEdad
        };
        agregarPelicula(pelicula);
        console.log(pelicula);
    })
})
/*
    arrow function 
    () => { }
*/

import { actualizarpeliculas, obtenerPelicula } from "./Promesas.js";

window.addEventListener("load",()=>{
    alert("llegue")
    // RECUPERAR PARAMETROS
    let valores =window.location.search;
    console.log(valores)
    // CREAMOS LA INSTANCIA
    const urlParams =new URLSearchParams(valores);
    //ACCEDER A LOS VALORES
    var id =urlParams.get("id");
    console.log(id);
    //ir a la base de datos a recuperar el objeto asociado ala id
    obtenerPelicula(id).then((p)=>{
        console.log(p)
         // cargar los datos en el formulario
        // recuperar elementos 
        let nombre = document.getElementById("nombre");
        let director = document.getElementById("director");
        let anio = document.getElementById("anio");
        let valoracion = document.getElementById("valoracion");
        let genero = document.getElementById("genero");
        let mayorEdad = document.getElementById("mayorEdad");

        // cargar valor actual 
        nombre.value = p.nombre;
        director.value = p.director;
        anio.value = p.anio;
        valoracion.value = p.valoracion;
        genero.value = p.genero;
        if (p.mayorEdad){
            mayorEdad.checked = true;
        }
    })
    //botn actualizar 
    let btnactualizar = document.getElementById("btnactualizar");
    btnactualizar.addEventListener("click",()=>{
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
            actualizarPelicula(id,pelicula).then(()=>{
            alert("Se actualiza con exito");
            }).catch((e)=>{
                console.log(e)
            }).finally(()=>{
            //Detener el tiempo unos 5 segundo y luego redireccionar  
                //window.location.href = "/peliculas.html";
            })
    })

   

})
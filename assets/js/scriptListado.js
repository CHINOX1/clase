import { eliminarPelicula, obtenerPeliculas } from "./Promesas.js"

window.addEventListener("load",()=>{
    var peliculas = obtenerPeliculas()
    console.log(peliculas)
    var eTBody = document.getElementById("cuerpoTabla");
    //eTBody.innerHTML = "<tr><td>hola</td></tr>"
    peliculas.then((listado)=>{

        let filas = ""
        listado.forEach((p)=>{
            filas += "<tr>"
            filas += "<td>"+p.nombre+"</td>"
            filas += "<td>"+p.director+"</td>"
            filas += "<td>"+p.anio+"</td>"
            filas += "<td>"+p.valoracion+"</td>"
            filas += "<td>"+p.genero+"</td>"
            filas += "<td>"+p.mayorEdad+"</td>"
            filas += "<td><button id='mod"+ p.id +"'>Modificar</button></td>"
            filas += "<td><button id='eli"+ p.id +"'>Eliminar</button></td>"
            filas += "</tr>"
        })
        console.log(filas)
        eTBody.innerHTML = filas;
        //
        listado.forEach((p)=>{
            let botonEliminar = document.getElementById("eli"+p.id);
            botonEliminar.addEventListener("click",()=>{
                if(confirm("Desea realmente eliminar la pelicula "+p.nombre+" ?")){
                    console.log("Eliminaste")
                    eliminarPelicula(p.id).then(()=>{
                        console.log("Se logro eliminar")
                        location.reload()
                    }).catch((e)=>{
                        console.log("No se pudo eliminar: "+e)
                    })
                }else{
                    console.log("No eliminaste")
                }
            })
            let botonactualizar =document.getElementById("mod"+p.id);
            botonactualizar.addEventListener("click",()=> {
                alert("vamos a redirecionar el id "+p.id);
                window.location.href ="/Actualizar.html?id="+p.id;
         })
        })
        //
        
    })
})
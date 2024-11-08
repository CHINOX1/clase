import { db } from "./Firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc,getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 
export let agregarPelicula = async(pelicula)=>{
    //Algo que agregar
    const docRef = await addDoc(collection(db, "pelicula"),pelicula);
}

export let obtenerPeliculas = async()=>{
    const querySnapshot = await getDocs(collection(db, "pelicula"));
    var peliculas = []
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let pelicula = {
    'id':doc.id,
    'nombre':doc.data().nombre,
    'director':doc.data().director,
    'anio':doc.data().anio,
    'valoracion':doc.data().valoracion,
    'genero':doc.data().genero,
    'mayorEdad':doc.data().mayorEdad
  }
  peliculas.push(pelicula)
  console.log(doc.id, " => ", doc.data());
});
    return peliculas; 
}

export let eliminarPelicula = async(idPelicula)=>{
  await deleteDoc(doc(db, "pelicula", idPelicula));
}
export let obtenerPelicula =async(idPelicula)=>{
  const docRef =doc(db,"pelicula",idPelicula);
  const docSnap = await getDoc(docRef);
  let pelicula = {
    'id':docSnap.id,
    'nombre':docSnap.data().nombre,
    'director':docSnap.data().director,
    'anio':docSnap.data().anio,
    'valoracion':docSnap.data().valoracion,
    'genero':docSnap.data().genero,
    'mayorEdad':docSnap.data().mayorEdad
  }
  return pelicula;
}
export let actualizarpeliculas =async (id,p)=>{
  const docRef = await doc (db,"peliculas",id);
  updateDoc(docRef,p);
}
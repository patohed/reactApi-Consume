import React from "react";
import { useState,useEffect,useRef } from "react";
import { BiSearch,BiCaretLeft, BiCaretRight } from "react-icons/bi";
import axios from "axios";
import "./App.css";
import "./componentes/Carta/Card";
import "./componentes/Card/Navbar/Navbar"

function App() {

  const [personajes,setPersonajes] = useState([]);
  const [personajesOriginales, setPersonajesOriginales] = useState([]);
  const [buscar,setBuscar] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("all");
  
 
   
useEffect(()=>{

const obtenerPersonajes=async()=>{
    const response=await axios.get('https://rickandmortyapi.com/api/character')
    
    setPersonajes(response.data.results)
    setPersonajesOriginales(response.data.results);
    };

    obtenerPersonajes();
},[]);


const buscarPersonaje = (e) => {
  const palabraClave = e.target.value;
  setBuscar(palabraClave);
  if (palabraClave === '') {
    // Si la palabra clave está vacía, mostramos todos los personajes originales
    setPersonajes(personajesOriginales);
  } else {
    // Si hay una palabra clave, filtramos los personajes originales
    const resultado = personajesOriginales.filter((personaje) =>
      personaje.name.toLowerCase().includes(palabraClave.toLowerCase())
    );
    setPersonajes(resultado);
  }
};

const filtrarPersonajesPorStatus = (e) => {
  const statusSeleccionado = e.target.value;
  setFiltroStatus(statusSeleccionado);
  if (statusSeleccionado === 'all') {
    // Mostrar todos los personajes originales
    setPersonajes(personajesOriginales);
  } else {
    // Filtrar personajes por estado seleccionado
    const resultado = personajesOriginales.filter((personaje) =>
      personaje.status.toLowerCase() === statusSeleccionado.toLowerCase()
    );
    setPersonajes(resultado);
  }
};


return (
<div>
  <h1 className="title">RICK AND MORTY </h1>
  <div className="containerBus">
  
  <input type="search" className="select" placeholder="Buscar personaje..." maxLength={15} onChange={buscarPersonaje}></input>
  <div className="containerBus">
  <select name="select" className="select" onChange={filtrarPersonajesPorStatus} value={filtroStatus}>
  <option value="all">Genre-all</option>
  <option value="Alive">Alive</option>
  <option value="Uknown" de>Uknown</option>
  <option value="Dead">Dead</option> 
  </select>
  <select name="select" className="select">
  <option value="">Location</option>
  <option value="">Earth</option>
  <option value="">Uknown</option>
  <option value="">Space</option> 
  </select>
  </div>
  </div>
<section className="container-card">
    {personajes.map(personaje=>(<div className="card" key={`personaje${personajes.id}`}>

    <h2 className="claseNombres">{personaje.name}</h2>
    <h6 className="status"><span className="span">Estado:</span>{personaje.status}</h6>
    <h6 className="ubi">{}</h6>
    <img className="img" src={personaje.image}/>
    </div>))}
    
</section>
  
</div>
)
}




export default App;

// acciones de eventos secundarios,asincronicos, en momento que se ejecuta algo y despues otra cosa en cierta cantidad de tiempo. 
// cuando se hace la llamada a una api o cuando se cargan datos de un json 
// recibe una funcion como parametro asyncronica y una dependecia
// la "," siginifica qeu se va a ejcutar cuando se renderice (cuando algo se activa ) se ejecuta 1 vez

import React from 'react';
import "./Card.css";


// const [personajes,setPersonajes] = useState([])


  

function Card () {

    <section className="container-card">
    {personajes.map(personaje=>(<div className="card" key={`personaje${personajes.id}`}>

    <h2 className="claseNombres">{personaje.name}</h2>
    <h6 className="status"><span className="span">Estado:</span>{personaje.status}</h6>
    <h6 className="ubi">{}</h6>
    <img className="img" src={personaje.image}/>
    </div>))}
    
</section>

}

export default Card;

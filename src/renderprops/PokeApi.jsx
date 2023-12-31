/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";

import usefetch from "../components/hooks/usefetch";

const PokeApi = () => {
    const [id, setId] = useState(1)
    
    const { data: pokemon } = usefetch("https://pokeapi.co/api/v2/pokemon/${id}",[id] )
    
    const handleSiguiente = () => setId(id + 1)
    const handleAnterior = () => id > 1 && setId(id - 1)
    
    return (
        <div className="container my-5">
            <h2>PoqueApi</h2>
            <hr />
            {
                pokemon &&
                <div>
                    <h4> {pokemon.name}</h4>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            }
            <button onClick={handleAnterior} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-1">Siguiente</button>
        </div>
    );
}
            
export default PokeApi
    
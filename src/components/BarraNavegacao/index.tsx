import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class BarraNavegacao extends Component{

    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/">Pokemons</Link>
                    </li>
                    <li>
                        <Link to="/favoritos">Pokemons Favoritos</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default BarraNavegacao;
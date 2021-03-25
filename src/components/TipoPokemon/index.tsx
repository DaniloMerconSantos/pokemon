import React from 'react';
import { Badge } from 'reactstrap';
import './TipoPokemon.css'

interface ITypeProps {
    tipos : string[]
}

const TipoPokemon: React.FC<ITypeProps> = ({tipos}) => {

    return (
        <>
            {
                tipos.map( nome => <Badge className={`type type--${nome} m-1`} pill>{nome}</Badge>)
            }
        </>
    )
}

export default TipoPokemon;
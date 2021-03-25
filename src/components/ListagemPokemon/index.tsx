import React from 'react'
import IPokemon from '../../models/pokemon'
import Pokemon from '../Pokemon';
import { Col, Row } from 'reactstrap';

interface IListagemPokemonProps {
    pokemons: IPokemon[]
}
const ListagemPokemon: React.FC<IListagemPokemonProps> = ({pokemons}) => {

    return (
        <Row>
            {
                pokemons.map( dados => {
                    return (
                        <Col sm="3" key={dados.id}>
                            <Pokemon name={dados.name} image={dados.sprites.front_default} id={dados.id} type={dados.types.map( ele => ele.type)}/>
                        </Col>
                    )
                })
            }
        </Row>
    )
    
}

export default ListagemPokemon;
import React, { useEffect, useState } from 'react'
import Page from '../../components/Page';
import ListaPokemon from '../../components/ListagemPokemon';
import { listarPokemon, obterPokemon } from '../../servico/pokemon';
import IPokemon from '../../models/pokemon';

const Home = ()=> {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemonsLista, setpokemonsLista] = useState<IPokemon[]>([]);

    useEffect(() => {
        listarPokemon().then(res => {
            return Promise.all(res.data.results.map( poke => {
                return obterPokemon(poke.name)
            })) 

        }).then(data => {
            setIsLoading(false)
            setpokemonsLista(data.map( dados => dados.data))
        }
        ).catch(() => {
            console.log('error na requisição')
        })
    }, []);

    return(
        <Page isLoading={isLoading}>
            <ListaPokemon pokemons={pokemonsLista}/>
        </Page>
    )
}

export default Home;
import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import TipoPokemon from '../TipoPokemon';
import IResource from '../../models/resource';

interface IPokemonProps {
    name: string,
    image: string,
    type: IResource[],
    id: number
}

const Pokemon: React.FC<IPokemonProps> = ({name, image, type, id}) => {   
    return (
      <Card className='m-3'>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{id}</CardText>
        </CardBody>
         <img src={image} alt={name} />
        <CardBody>
            <TipoPokemon tipos={type.map( ele => ele.name)}/>
        </CardBody>
      </Card>
    )
}

export default Pokemon;

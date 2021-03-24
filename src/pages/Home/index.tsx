import React, { useState } from 'react'
import { Container } from 'reactstrap';
import Page from '../../components/Page';

const Home = ()=> {

    const [isLoading, setIsLoading] = useState(false);

    return(
        <Page isLoading={isLoading}/>
    )
}

export default Home;
import React from 'react'
import { Container } from 'reactstrap';
import WithLoader from '../WithLoader';

const Page: React.FC = ({children})=>{
    
    return (
        <Container>
            {children}
        </Container>
    )
}

export default WithLoader(Page);
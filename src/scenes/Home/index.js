import React from 'react'
import MainMenu from '../../components/MainMenu';

import { Container, Segment } from 'semantic-ui-react'

const Home = () => (
    <Container>
        <MainMenu/>
        <br />
        <Segment>
            Pojašnjenje za stranicu, zašto je napravljena i kako se koristi
            <br />
            <br />
            <br />
            <br />
            Još teksta
            <br />
            <br />
            <br />
            Nešto još malo
        </Segment>
    </Container>
);

export default Home

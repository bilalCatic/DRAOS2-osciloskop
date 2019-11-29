import React from 'react'
import MainMenu from '../../components/MainMenu';
import CustomContainer from "../../components/CustomContainer";

import { Segment } from 'semantic-ui-react'

const Home = () => (
    <CustomContainer>
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
    </CustomContainer>
);

export default Home

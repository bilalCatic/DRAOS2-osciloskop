import React from 'react'
import MainMenu from '../../components/MainMenu';
import CustomContainer from "../../components/CustomContainer";

import { Segment } from 'semantic-ui-react'

const Oscilloscope = () => (
    <CustomContainer>
        <MainMenu/>
        <br />
        <Segment>
            OSCILOSKOP
            <br />
            <br />
            <br />
            <br />
            Još OSCILOSKOP
            <br />
            <br />
            <br />
            Nešto još malo oko OSCILOSKOPA
        </Segment>
    </CustomContainer>
);

export default Oscilloscope;

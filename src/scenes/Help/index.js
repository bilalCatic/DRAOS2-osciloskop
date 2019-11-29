import React from 'react'
import { Segment } from 'semantic-ui-react'

import MainMenu from '../../components/MainMenu';
import CustomContainer from "../../components/CustomContainer";

const Help = () => (
    <CustomContainer>
        <MainMenu/>
        <br />
        <Segment>
            HELP
            <br />
            <br />
            <br />
            <br />
            Još HELP
            <br />
            <br />
            <br />
            Nešto još malo oko HELPA
        </Segment>
    </CustomContainer>
);

export default Help

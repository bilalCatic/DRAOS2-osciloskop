import React from 'react'
import { Segment } from 'semantic-ui-react'

import MainMenu from '../../components/MainMenu';
import CustomContainer from "../../components/CustomContainer";
import Oscilloscope from "../../components/Oscilloscope";

const OscilloscopeScene = () => (
    <CustomContainer>
        <MainMenu/>
        <br />
        <Segment>
            <Oscilloscope/>
        </Segment>
    </CustomContainer>
);

export default OscilloscopeScene;

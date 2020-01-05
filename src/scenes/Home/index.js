import React from 'react'
import MainMenu from '../../components/MainMenu';
import CustomContainer from "../../components/CustomContainer";

import { Segment } from 'semantic-ui-react'

const Home = () => (
    <CustomContainer>
        <MainMenu/>
        <br />
        <Segment>
            <h1>Oscilloscope Simulator</h1>
            <br />
            This oscilloscope simulator is a learning tool for students / hobbysts. Aim is to demonstrate basic oscilloscope
                functions and to allow users to play with those functionalities without fear of breaking or damaging an equipment.
            <br />
            <br />
            Functionalities included in this version are :
            <ul>
                <li>Two channel input</li>
                <li>Vertical scale</li>
                <li>Vertical shift</li>
                <li>Horizontal scale</li>
                <li>Horizontal shift</li>
                <li>Stop signal acquisition for easier inspection</li>
                <li>Show / hide each channel  signal separately</li>
            </ul>
            <br />
            Normally, buttons for horizontal and vertical operations would be on the right of the screen, as shown on the image
            in the help section, but in this simulator, buttons are moved down intentionally, to allow more space for screen
            and more space for horizontal and vertical options.
            <br /><br />
            Horizontal and vertical sections are collapsible to give more clear view of the options.
            <br />
        </Segment>
    </CustomContainer>
);

export default Home

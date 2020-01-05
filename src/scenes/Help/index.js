import React from 'react'
import { Segment, Tab } from 'semantic-ui-react'

import MainMenu from '../../components/MainMenu';
import CustomContainer from "../../components/CustomContainer";

import ApplicationHelpItem from './components/application';
import OscilloscopeHelpItem from './components/oscilloscope';
import HorizontalControlsHelpItem from "./components/horizontalControls";
import VerticalControlsHelpItem from "./components/verticalControls";

const panes = [
    { menuItem: 'Application', render: ApplicationHelpItem },
    { menuItem: 'Oscilloscope', render: OscilloscopeHelpItem },
    //{ menuItem: 'Screen', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Vertical options', render: VerticalControlsHelpItem },
    { menuItem: 'Horizontal options', render: HorizontalControlsHelpItem },
];

const Help = () => (
    <CustomContainer>
        <MainMenu/>
        <br />
        <Segment>
            <Tab
                menu={{ fluid: true, vertical: true }}
                menuPosition='left'
                panes={panes}
            />
        </Segment>
    </CustomContainer>
);

export default Help

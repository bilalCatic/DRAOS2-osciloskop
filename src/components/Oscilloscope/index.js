import React from 'react';
import { Grid } from 'semantic-ui-react';

import Screen from "./components/Screen";

const Oscilloscope = () => {
    return (
        <Grid.Row>
            <Grid.Column>
                <Screen />
            </Grid.Column>
        </Grid.Row>
    );
};

export default Oscilloscope;

import React, { PureComponent } from 'react';
import { Grid } from 'semantic-ui-react';

import Screen from "./components/Screen";

const W = 2*Math.PI;
const DELTA_T = 0.01; // 10ms

const REFRESH_INTERVAL = 100;
const WINDOW_SIZE = 100;

class Oscilloscope extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            channel1Data: new Array(WINDOW_SIZE).fill(0),
            channel2Data: new Array(WINDOW_SIZE).fill(0),
            channel1: {
                inputDataGenerator: this.functionNextValue(Math.sin, DELTA_T, W),
            },
            channel2: {
                inputDataGenerator: this.functionNextValue(Math.cos, DELTA_T, W),
            },
            intervalHandler: null,
        }
    }

    componentDidMount() {
        const intervalHandler = window.setInterval(this.shiftChannelValues.bind(this), REFRESH_INTERVAL);
        this.setState({intervalHandler});
    }

    componentWillUnmount() {
        const { intervalHandler } = this.state;
        window.clearInterval(intervalHandler);
    }

    render() {
        const { channel1Data, channel2Data } = this.state;

        return (
            <Grid.Row>
                <Screen
                    channel1Data={channel1Data}
                    channel2Data={channel2Data}
                />
            </Grid.Row>
        );
    }

    //****************************//

    * functionNextValue (mathFunction, timeDelta = DELTA_T, argument = 1, startTime = 0) {
        if (!(mathFunction && mathFunction.constructor && mathFunction.call && mathFunction.apply)) {
            return;
        }

        let time = startTime;
        while (true){
            yield mathFunction(argument*time);
            time += timeDelta;
        }
    }

    shiftChannelValues() {
        const { channel1Data, channel2Data, channel1, channel2 } = this.state;
        const inputDataGenerator1 = channel1.inputDataGenerator;
        const inputDataGenerator2 = channel2.inputDataGenerator;

        const nextData1 = inputDataGenerator1.next().value;
        const nextData2 = inputDataGenerator2.next().value;

        let newChannel1Data = [];
        let newChannel2Data = [];
        if (nextData1 !== undefined){
            newChannel1Data = [...channel1Data.slice(1), nextData1];
        }
        if (nextData2 !== undefined){
            newChannel2Data = [...channel2Data.slice(1), nextData2];
        }

        this.setState({channel1Data: newChannel1Data, channel2Data: newChannel2Data});
    }
}

export default Oscilloscope;

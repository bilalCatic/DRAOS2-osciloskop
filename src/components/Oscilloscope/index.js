import React, { PureComponent } from 'react';
import {Grid} from 'semantic-ui-react';

import Screen from "./components/Screen";
import VerticalControls from "./components/VerticalControls";
import HorizontalControls from "./components/HorizontalControls";

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
            channel1Active: true,
            channel2Active: true,
            timeActive: true,
            channel1: {
                inputDataGenerator: this.functionNextValue(Math.sin, DELTA_T, W),
            },
            channel2: {
                inputDataGenerator: this.functionNextValue(Math.cos, DELTA_T, W),
            },
            intervalHandler: null,
            timeScale: 1,
            timeDelay: 0,
            channel1Scale: 1,
            channel1VerticalOffset: 0,
            channel2Scale: 1,
            channel2VerticalOffset: 0
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
        const { channel1Data, channel2Data, channel1Active, channel2Active } = this.state;

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Screen
                            channel1Data={channel1Active ? channel1Data : null}
                            channel2Data={channel2Active ? channel2Data : null}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <VerticalControls
                            onChannel1ActiveChange={this.channel1ActiveChanged}
                            onChannel2ActiveChange={this.channel2ActiveChanged}
                            onChannel1ScaleChange={this.channel1ScaleChanged}
                            onChannel2ScaleChange={this.channel2ScaleChanged}
                            onChannel1VerticalOffsetChange={this.channel1VerticalOffsetChanged}
                            onChannel2VerticalOffsetChange={this.channel2VerticalOffsetChanged}
                        />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <HorizontalControls
                            onTimeActiveChange={this.timeActiveChanged}
                            onTimeScaleChange={this.timeScaleChanged}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
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

            const { timeScale } = this.state;
            const newTimeDelta = timeDelta*timeScale;
            time += newTimeDelta;
        }
    }

    shiftChannelValues() {
        const {
            channel1Data,
            channel2Data,
            channel1,
            channel2,
            timeActive,
            channel1VerticalOffset,
            channel2VerticalOffset,
            channel1Scale,
            channel2Scale
        } = this.state;

        if (!timeActive){
            return;
        }
        const inputDataGenerator1 = channel1.inputDataGenerator;
        const inputDataGenerator2 = channel2.inputDataGenerator;

        const nextData1 = inputDataGenerator1.next().value*channel1Scale + channel1VerticalOffset;
        const nextData2 = inputDataGenerator2.next().value*channel2Scale + channel2VerticalOffset;

        let newChannel1Data = [];
        let newChannel2Data = [];
        if (nextData1 !== undefined && !isNaN(nextData1)){
            newChannel1Data = [...channel1Data.slice(1), nextData1];
        }
        if (nextData2 !== undefined && !isNaN(nextData2)){
            newChannel2Data = [...channel2Data.slice(1), nextData2];
        }

        this.setState({channel1Data: newChannel1Data, channel2Data: newChannel2Data});
    }

    //****** CHILDREN COMPONENT CALLBACKS ******* ///

    channel1ActiveChanged = (active) => {
        this.setState({channel1Active: active});
    };

    channel2ActiveChanged = (active) => {
        this.setState({channel2Active: active});
    };

    timeActiveChanged = (timeActive) => {
        this.setState({timeActive});
    };

    timeScaleChanged = (timeScale) => {
      this.setState({timeScale});
    };

    channel1VerticalOffsetChanged = (channel1VerticalOffset) => {
        const { channel1VerticalOffset: oldChannel1VerticalOffset, channel1Data } = this.state;
        const newChannel1Data = channel1Data.map(pointValue => pointValue - oldChannel1VerticalOffset + channel1VerticalOffset);
        this.setState({channel1VerticalOffset, channel1Data: newChannel1Data});
    };

    channel2VerticalOffsetChanged = (channel2VerticalOffset) => {
        const { channel2VerticalOffset: oldChannel2VerticalOffset, channel2Data } = this.state;
        const newChannel2Data = channel2Data.map(pointValue => pointValue - oldChannel2VerticalOffset + channel2VerticalOffset);
        this.setState({channel2VerticalOffset, channel2Data: newChannel2Data});
    };

    channel1ScaleChanged = (channel1Scale) => {
        const { channel1Scale: oldChannel1Scale, channel1Data } = this.state;
        const newChannel1Data = channel1Data.map(pointValue => (pointValue/oldChannel1Scale)*channel1Scale);
        this.setState({channel1Scale, channel1Data: newChannel1Data});
    };

    channel2ScaleChanged = (channel2Scale) => {
        const { channel2Scale: oldChannel2Scale, channel2Data } = this.state;
        const newChannel2Data = channel2Data.map(pointValue => (pointValue/oldChannel2Scale)*channel2Scale);
        this.setState({channel2Scale, channel2Data: newChannel2Data});
    };
}

export default Oscilloscope;

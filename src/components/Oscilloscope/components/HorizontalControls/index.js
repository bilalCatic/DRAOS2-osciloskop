import React, { PureComponent } from 'react';
import {Accordion, Grid, Icon, Button} from "semantic-ui-react";
import {Knob} from "react-rotary-knob";
import {s16} from "react-rotary-knob-skin-pack";

const timeKnobOptions = {
    min: 0.1,
    max: 5,
};

const timeOffsetKnobOptions = {
    min: -50,
    max: 50,
};

class HorizontalControls extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            active: true,
            timeActive: true,
            timeOffset: 0,
        }
    }

    render(){
        const { active, timeActive, timeScale, timeOffset } = this.state;

        const knobStyle = {
            width: "150px",
            height: "150px"
        };

        const knobStyleSmall = {
            width: "100px",
            height: "100px"
        };

        return (
            <Accordion fluid styled>
                <Accordion.Title
                    active={active}
                    onClick={this.toggleActiveStatus}
                >
                    <Icon name='dropdown' />
                    Horizontal
                </Accordion.Title>
                <Accordion.Content active={active}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Button color={timeActive ? 'green' : 'red'} onClick={this.toggleTimeActiveStatus}>Run / Stop</Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                Time
                                <Knob
                                    style={knobStyle}
                                    skin={s16}
                                    onChange={this.changeTimeScale}
                                    min={timeKnobOptions.min}
                                    max={timeKnobOptions.max}
                                    value={timeScale}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                Position
                                <Knob
                                    style={knobStyleSmall}
                                    skin={s16}
                                    min={timeOffsetKnobOptions.min}
                                    max={timeOffsetKnobOptions.max}
                                    value={timeOffset}
                                    onChange={this.changeTimeOffset}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Accordion.Content>
            </Accordion>
        );
    }

    //*****************************//

    toggleActiveStatus = () => {
        this.setState({active: !this.state.active});
    };

    toggleTimeActiveStatus = () => {
        const { timeActive } = this.state;
        const newTimeActive = !timeActive;

        this.setState({timeActive: newTimeActive});
        this.props.onTimeActiveChange(newTimeActive);
    };

    changeTimeScale = (timeScale) => {
        this.setState({timeScale});
        this.props.onTimeScaleChange(timeScale);
    };

    changeTimeOffset = (timeOffset) => {
        this.setState({timeOffset});
        this.props.onTimeOffsetChange(timeOffset);
    }
}

export default HorizontalControls;

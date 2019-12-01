import React, { PureComponent } from 'react';
import {Accordion, Grid, Icon, Button} from "semantic-ui-react";
import {Knob} from "react-rotary-knob";
import {s17} from "react-rotary-knob-skin-pack";


class HorizontalControls extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            active: true,
            timeActive: true,
        }
    }

    render(){
        const { active, timeActive } = this.state;

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
                                <Knob style={knobStyle} skin={s17}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                Position
                                <Knob style={knobStyleSmall} skin={s17}/>
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
    }
}

export default HorizontalControls;

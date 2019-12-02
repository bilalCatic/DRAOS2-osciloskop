import React, { PureComponent } from 'react';
import {Accordion, Icon, Grid, Button} from "semantic-ui-react";
import { Knob } from "react-rotary-knob";
import { s17 } from "react-rotary-knob-skin-pack";

const verticalOffsetKnobOptions = {
    min: -5,
    max: 5,
};

class VerticalControls extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            active: true,
            channel1Active: true,
            channel2Active: true,
            channel1VerticalOffset: 0,
            channel2VerticalOffset: 0,
        }
    }

    render(){
        const {
            active,
            channel1Active,
            channel2Active,
            channel1VerticalOffset,
            channel2VerticalOffset
        } = this.state;

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
                    Vertical
                </Accordion.Title>
                <Accordion.Content active={active}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                V/div
                                <Knob style={knobStyle} skin={s17}/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                V/div
                                <Knob style={knobStyle} skin={s17}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Button color={channel1Active ? 'blue' : null} onClick={this.toggleChannel1ActiveStatus}>
                                    CH1
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Button color={channel2Active ? 'green' : null} onClick={this.toggleChannel2ActiveStatus}>
                                    CH2
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                Position
                                <Knob
                                    style={knobStyleSmall}
                                    skin={s17}
                                    min={verticalOffsetKnobOptions.min}
                                    max={verticalOffsetKnobOptions.max}
                                    value={channel1VerticalOffset}
                                    onChange={this.changeChannel1VerticalOffset}
                                />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                Position
                                <Knob
                                    style={knobStyleSmall}
                                    skin={s17}
                                    min={verticalOffsetKnobOptions.min}
                                    max={verticalOffsetKnobOptions.max}
                                    value={channel2VerticalOffset}
                                    onChange={this.changeChannel2VerticalOffset}
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

    toggleChannel1ActiveStatus = () => {
        const { channel1Active } = this.state;
        const newChannel1ActiveState = !channel1Active;
        this.setState({channel1Active: newChannel1ActiveState});
        this.props.onChannel1ActiveChange(newChannel1ActiveState);
    };

    toggleChannel2ActiveStatus = () => {
        const { channel2Active } = this.state;
        const newChannel2ActiveState = !channel2Active;
        this.setState({channel2Active: newChannel2ActiveState});
        this.props.onChannel2ActiveChange(newChannel2ActiveState);
    };

    changeChannel1VerticalOffset = (channel1VerticalOffset) => {
        this.setState({channel1VerticalOffset});
        this.props.onChannel1VerticalOffsetChange(channel1VerticalOffset);
    };

    changeChannel2VerticalOffset = (channel2VerticalOffset) => {
        this.setState({channel2VerticalOffset});
        this.props.onChannel2VerticalOffsetChange(channel2VerticalOffset);
    };
}

export default VerticalControls;

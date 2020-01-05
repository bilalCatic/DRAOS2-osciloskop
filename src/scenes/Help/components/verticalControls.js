import React from 'react';
import { Tab, Header, Image } from 'semantic-ui-react';

const VerticalControlsHelpItem = () => (
  <Tab.Pane>
      <Header>Vertical controls</Header>
      <br />
      <Image src='/help/vertical_controls.png' />
      <br />
      Vertical controls tab pane is collection of buttons and knobs related to the specific signal (channel) and signal
      vertical properties - vertical scale and vertical position (vertical axis).
      <br />
      <ol>
          <li>Channel 1 signal vertical scale - volts per division (1 square = 1 division)</li>
          <li>Channel 2 signal vertical scale - volts per division (1 square = 1 division)</li>
          <li>Turn on / off channel 1 signal input (visibility on the screen). Gray color indicates that channel 1 is turned off</li>
          <li>Turn on / off channel 2 signal input (visibility on the screen). Gray color indicates that channel 2 is turned off</li>
          <li>Channel 1 signal vertical position - this can be positive (move signal up) or negative (move signal down)</li>
          <li>Channel 2 signal vertical position - this can be positive (move signal up) or negative (move signal down)</li>
      </ol>
      <br />
      <strong>NOTE: </strong>When turning knob, it is required to move mouse outside of the guarded zone (dashed circle)
      while still holding the mouse (or keeping touch on the screen). This procedure ensures higher accuracy and prevents
      unwanted changes.
  </Tab.Pane>
);

export default VerticalControlsHelpItem;

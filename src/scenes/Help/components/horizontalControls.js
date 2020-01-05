import React from 'react';
import {Tab, Header, Image} from 'semantic-ui-react';

const HorizontalControlsHelpItem = () => (
  <Tab.Pane>
      <Header>Horizontal controls</Header>
      <br />
      <Image src='/help/horizontal_controls.png' />
      <br />
      Horizontal controls tab pane is collection of knobs and button related to the time line (horizontal axis). Options
      in this tab pane affect both channels.
      <br />
      <ol>
          <li>Start / stop time - allows pausing screen for better inspection and measurement. Color indicates whether
          signals time is paused (red) or not (green)</li>
          <li>Time scale - seconds per division (1 division = 1 square)</li>
          <li>Horizontal position - moving signals right or left.</li>
      </ol>
      <br />
      <strong>NOTE: </strong>When turning knob, it is required to move mouse outside of the guarded zone (dashed circle)
      while still holding the mouse (or keeping touch on the screen). This procedure ensures higher accuracy and prevents
      unwanted changes.
  </Tab.Pane>
);

export default HorizontalControlsHelpItem;

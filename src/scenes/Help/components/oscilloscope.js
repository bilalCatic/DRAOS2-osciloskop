import React from 'react';
import { Tab, Header, Image } from 'semantic-ui-react';

const OscilloscopeHelpItem = () => (
  <Tab.Pane>
      <Header>Oscilloscope</Header>
      <br />
      <Image src='/help/screen.png' size='massive'/>
      <br />
      As shown on the image, oscilloscope contains three main components (parts) : <br />
      <ul>
          <li>Screen</li>
          <li>Vertical controls</li>
          <li>Horizontal controls</li>
      </ul>
      Vertical and horizontal components are moved down (below the screen) to give more space for the screen itself,
      hopefully increasing visibility and reducing complexity.<br />
      Normally, real oscilloscope would look more complex (shown below), but intention here is to reduce this complexity
      and help users to concentrate on the main functions.
      <Image src='/help/oscilloscope_real.jpg' />
      Image taken from <a href='https://www.ebay.com/p/501422998'>eBay</a>
  </Tab.Pane>
);

export default OscilloscopeHelpItem;

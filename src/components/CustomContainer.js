import React, { PureComponent } from 'react';
import { Container } from 'semantic-ui-react';

import { CONTAINER_SIZE } from '../config/constants';

class CustomContainer extends PureComponent {
    render(){
        return <Container style={ {width: `${CONTAINER_SIZE}%`} } {...this.props} />
    }
}

export default CustomContainer;

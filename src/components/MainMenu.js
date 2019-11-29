import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import { MENU_ITEMS } from '../config/constants';

const MainMenu = () =>
    (<Menu size={'huge'}>
        {
            MENU_ITEMS.map(mainMenuItem => {
                if (!mainMenuItem.showInMenu){
                    return null;
                } else {
                    return (
                        <Menu.Item key={mainMenuItem.key}
                                   as={NavLink}
                                   to={mainMenuItem.url}
                                   exact
                        >
                            {mainMenuItem.name}
                        </Menu.Item>)
                }})
        }
    </Menu>);

export default MainMenu;

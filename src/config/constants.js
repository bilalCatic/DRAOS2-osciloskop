import Home from '../scenes/Home';
import Help from '../scenes/Help';
import Oscilloscope from "../scenes/Oscilloscope";

const MENU_ITEMS = [
    {
        key: 'home',
        active: true,
        name: 'Home',
        showInMenu: true,
        url: '/',
        component: Home
    },
    {
        key: 'oscilloscope',
        name: 'Oscilloscope',
        showInMenu: true,
        url: '/oscilloscope',
        component: Oscilloscope
    },
    {
        key: 'help',
        name: 'Help',
        showInMenu: true,
        url: '/help',
        component: Help
    },
];

export {
    MENU_ITEMS
}

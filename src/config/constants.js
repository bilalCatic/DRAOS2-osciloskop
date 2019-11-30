import Home from '../scenes/Home';
import Help from '../scenes/Help';
import OscilloscopeScene from "../scenes/OscilloscopeScene";

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
        component: OscilloscopeScene
    },
    {
        key: 'help',
        name: 'Help',
        showInMenu: true,
        url: '/help',
        component: Help
    },
];
const CONTAINER_SIZE = 90; // Container size / width in percentage

export {
    MENU_ITEMS,
    CONTAINER_SIZE
}

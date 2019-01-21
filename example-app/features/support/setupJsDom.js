import {JSDOM} from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

export default function () {
    global.jsdom = new JSDOM('<!doctype html><html><body><div id="root"></div></div></body></html>',
        {url: 'https://testhost.org/sd-client/'});
    global.window = global.jsdom.window;
    global.window.scrollTo = () => {};
    global.document = window.document;
    global.navigator = window.navigator || {onLine: true};
    global.HTMLElement = window.HTMLElement;

    global.document = global.window.document;
    global.navigator = {userAgent: ''};
    return global.document.getElementById('root');
}

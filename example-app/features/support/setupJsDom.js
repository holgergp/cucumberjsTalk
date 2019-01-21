import {JSDOM} from 'jsdom';

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

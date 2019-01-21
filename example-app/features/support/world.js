import {setWorldConstructor} from 'cucumber';
import { createMockStore } from 'redux-test-utils';

function BaristaWorld() {
    this.store = createMockStore();
    this.wrapper = undefined;
    this.lastRedirect = undefined;
}

process.on('unhandledRejection', r => console.error(r));
setWorldConstructor(BaristaWorld);

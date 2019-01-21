import {mount} from 'enzyme';
import {Given as Angenommen} from 'cucumber';
import React from 'react';
import App from '../../src/App';

export async function oeffneAnwendung(world) {
    world.wrapper = mount(<App store={world.store.store}/>,
        {attachTo: world.root});
}

Angenommen('die Anwendung ist geöffnet', async function () {
    await oeffneAnwendung(this);
});
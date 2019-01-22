import {updateData} from '../../src/reducer';
import {Given as Angenommen, Then as Dann, When as Wenn} from 'cucumber';
import expect from 'expect';
import {getInputValue, setInputValue} from '../support/puppetMaster';

Angenommen('es gibt folgende Bohnenarten in Barista Pro', async function (dataTable) {
    this.store.dispatch(updateData({id: 1, art: 'Kenia', ekp: 44.35, vkp: 34.56, marge: 20.01}));
});

Wenn('der Bohnenverkäufer einen Rabatt von {string} Prozent gewährt', async function (rabatt) {
    setInputValue('#rabatt', rabatt);
});

Dann('ist der Rabatt von {string} Prozent auf der Oberfläche sichtbar', async function (rabatt) {
    expect(getInputValue('#rabatt').value).toEqual(rabatt);
});

Dann('ist der neue Verkaufspreis {string} Euro', async function (vkp) {
    const vkpNode = document.querySelector('#vkp');
    console.log(vkpNode);
    expect(vkpNode.value).toEqual(vkp);
});

// noinspection JSUnusedGlobalSymbols
export function logDocument() {
    console.error(global.jsdom.serialize());
}

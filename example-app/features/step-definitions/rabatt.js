import {updateData} from '../../src/reducer';
import {Given as Angenommen, Then as Dann, When as Wenn} from 'cucumber';
import expect from 'expect';
import {getInputValue, setInputValue} from '../support/puppetMaster';
import {expectInputToEqual} from '../support/expectations';

Angenommen('es gibt folgende Bohnenarten in der Anwendung', async function (dataTable) {
    for (const row of dataTable.hashes()) {
        const id = row['Id'];
        const art = row['Bohne'];
        const ekp = row['Einkaufspreis in Euro'];
        const vkp = row['Verkaufspreis in Euro'];
        const marge = row['Marge in Prozent'];
        this.store.dispatch(updateData({id, art, ekp, vkp, marge}));
    }
});

Wenn('der Bohnenverkäufer einen Rabatt von {string} Prozent gewährt', function (rabatt) {
    setInputValue('#rabatt', rabatt);
});

Dann('ist der Rabatt von {string} Prozent in der Anwendung sichtbar', function (rabatt) {
    expectInputToEqual('#rabatt', rabatt);
});

Dann('ist der Verkaufspreis mit Rabatt {string} Euro', function (vkpRabatt) {
    const vkpRabattNode = document.querySelector('#vkpRabatt');
    expect(vkpRabattNode.value).toEqual(vkpRabatt);
});

// noinspection JSUnusedGlobalSymbols
export function logDocument() {
    console.error(global.jsdom.serialize());
}

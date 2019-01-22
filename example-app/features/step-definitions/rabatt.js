import {updateData} from '../../src/reducer';
import {Given as Angenommen, Then as Dann, When as Wenn} from 'cucumber';

Angenommen('es gibt folgende Bohnenarten in Barista Pro', async function (dataTable) {
    this.store.dispatch(updateData({id: 1, art: 'Kenia', ekp: 44.35, vkp: 34.56, marge: 20.01}));
});

Wenn('der Bohnenverkäufer einen Rabatt von {int}% gewährt', async function (int) {

});

Dann('ist der Rabatt von {int}% auf der Oberfläche sichtbar', async function (int) {

});

Dann('ist der neue Verkaufspreis {int},{int} Euro', async function (int, int2) {
    const vkpNode = document.querySelector('#vkp');
});

// noinspection JSUnusedGlobalSymbols
export function logDocument() {
    console.error(global.jsdom.serialize());
}

import {updateData} from '../../src/reducer';
import {Given as Angenommen, Then as Dann, When as Wenn} from 'cucumber';

Angenommen('es gibt folgende Bohnenarten in Barista Pro', async function (dataTable) {
    this.store.dispatch(updateData({id: 1, art: 'Kenia', ekp: 44.35}));
});

Wenn('der Bohnenverkäufer einen Rabatt von {int}% gewährt', async function (int) {

});

Dann('ist der Rabatt von {int}% auf der Oberfläche sichtbar', async function (int) {

});

Dann('ist der neue Verkaufspreis {int},{int} Euro', async function (int, int2) {
    const vkpNode = document.querySelector('#vkp');
    console.log(vkpNode);
    logDocument();
});

// noinspection JSUnusedGlobalSymbols
export function logDocument() {
    console.error(global.jsdom.serialize());
}

import { getInputValue, setInputValue } from "../support/puppetMaster";
import { expectInputToEqual } from "../support/expectations";
import { defineFeature, loadFeature } from "jest-cucumber";
import {
  dannIstDerVerkaufspreis,
  dannSindFolgendeBohnenartenInDerAnwendungSichtbar,
  wennDerBohnenverkaeuferDenEinkaufspreisAufSetzt
} from "./global";

const feature = loadFeature("features/rabatt.feature");

defineFeature(feature, test => {
  test("Ein neuer Rabatt soll gewährt werden", ({ given, when, then }) => {
    given("es gibt folgende Bohnenarten in der Anwendung", async function(
      dataTable
    ) {
      for (const row of dataTable) {
        const id = row["Id"];
        const art = row["Bohne"];
        const ekp = row["Einkaufspreis in Euro"];
        const vkp = row["Verkaufspreis in Euro"];
        const marge = row["Marge in Prozent"];
        //this.store.dispatch(updateData({id, art, ekp, vkp, marge}));
      }
    });

    when(
      /der Bohnenverkäufer einen Rabatt von '(.+)' Prozent gewährt/,
      function(rabatt) {
        console.error("Rabatt", rabatt);
        setInputValue("#rabatt", rabatt);
      }
    );

    then(
      /ist der Rabatt von '(.+)' Prozent in der Anwendung sichtbar/,
      function(rabatt) {
        expectInputToEqual("#rabatt", rabatt);
      }
    );

    then(/ist der Verkaufspreis mit Rabatt '(.+)' Euro/, function(vkpRabatt) {
      const vkpRabattNode = document.querySelector("#vkpRabatt");
      //expect(vkpRabattNode.value).toEqual(vkpRabatt);
    });

    dannIstDerVerkaufspreis(then);
  });
});
// noinspection JSUnusedGlobalSymbols
export function logDocument() {
  //console.error(global.jsdom.serialize());
}

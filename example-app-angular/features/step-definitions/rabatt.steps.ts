import { getInputValue, setInputValue } from "../support/puppetMaster";
import { expectInputToEqual } from "../support/expectations";
import { defineFeature, loadFeature } from "jest-cucumber";
import {
  angenommenEsGibtFolgendeBohnenartenInDerAwendung,
  dannIstDerVerkaufspreis
} from "./global";
import { startApp } from "../support/world";

const feature = loadFeature("features/rabatt.feature");

defineFeature(feature, test => {
  beforeEach(async () => {
    await startApp();
  });

  test("Ein neuer Rabatt soll gewährt werden", ({ given, when, then }) => {
    angenommenEsGibtFolgendeBohnenartenInDerAwendung(given);

    when(
      /der Bohnenverkäufer einen Rabatt von '(.+)' Prozent gewährt/,
      function(rabatt) {
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
      expectInputToEqual("#vkpRabatt", vkpRabatt);
    });

    dannIstDerVerkaufspreis(then);
  });
});

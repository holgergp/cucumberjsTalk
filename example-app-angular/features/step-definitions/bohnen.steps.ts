import { expectInputToEqual } from "../support/expectations";
import { setInputValue } from "../support/puppetMaster";

import { defineFeature, loadFeature } from "jest-cucumber";
import {
  dannSindFolgendeBohnenartenInDerAnwendungSichtbar,
  wennDerBohnenverkaeuferDenEinkaufspreisAufSetzt
} from "./global";
const feature = loadFeature("features/bohnen.feature");

defineFeature(feature, test => {
  test("Bohnenarten sind in der Anwendung sichtbar", ({
    given,
    when,
    then
  }) => {
    dannSindFolgendeBohnenartenInDerAnwendungSichtbar(then);
  });

  test("Änderung des Einkaufspreis ist in der Anwendung sichtbar", ({
    given,
    when,
    then
  }) => {
    wennDerBohnenverkaeuferDenEinkaufspreisAufSetzt(when);
    dannSindFolgendeBohnenartenInDerAnwendungSichtbar(then);
  });
  test("Jede Änderung des Einkaufspreis ist in der Anwendung sichtbar", ({
    when,
    then
  }) => {
    wennDerBohnenverkaeuferDenEinkaufspreisAufSetzt(when);
    dannSindFolgendeBohnenartenInDerAnwendungSichtbar(then);
  });
});

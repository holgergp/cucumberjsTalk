import { defineFeature, loadFeature } from "jest-cucumber";
import {
  angenommenEsGibtFolgendeBohnenartenInDerAwendung,
  dannSindFolgendeBohnenartenInDerAnwendungSichtbar,
  wennDerBohnenverkaeuferDenEinkaufspreisAufSetzt
} from "./global";
import { ComponentFixture } from "@angular/core/testing";
import { BeansComponent } from "../../src/app/beans/beans.component";
import { startApp } from "../support/world";
import { AppComponent } from "../../src/app/app.component";
const feature = loadFeature("features/bohnen.feature");

defineFeature(feature, test => {
  let component: BeansComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await startApp();
  });

  test("Bohnenarten sind in der Anwendung sichtbar", ({
    given,
    when,
    then
  }) => {
    angenommenEsGibtFolgendeBohnenartenInDerAwendung(given);
    dannSindFolgendeBohnenartenInDerAnwendungSichtbar(then);
  });

  test("Änderung des Einkaufspreis ist in der Anwendung sichtbar", ({
    given,
    when,
    then
  }) => {
    angenommenEsGibtFolgendeBohnenartenInDerAwendung(given);
    wennDerBohnenverkaeuferDenEinkaufspreisAufSetzt(when);
    dannSindFolgendeBohnenartenInDerAnwendungSichtbar(then);
  });
  test("Jede Änderung des Einkaufspreis ist in der Anwendung sichtbar", ({
    given,
    when,
    then
  }) => {
    angenommenEsGibtFolgendeBohnenartenInDerAwendung(given);
    wennDerBohnenverkaeuferDenEinkaufspreisAufSetzt(when);
    dannSindFolgendeBohnenartenInDerAnwendungSichtbar(then);
  });
});

import "core-js/es7/reflect";
import "core-js/es6/reflect";
import { expectInputToEqual } from "../support/expectations";
import { setInputValue } from "../support/puppetMaster";
import { fixture, service } from "../support/world";
import { Bohne, ChangeBohne } from "../../src/app/types";

export const angenommenEsGibtFolgendeBohnenartenInDerAwendung = given => {
  given("es gibt folgende Bohnenarten in der Anwendung", async function(
    dataTable
  ) {
    for (const row of dataTable) {
      const id = row["Id"];
      const art = row["Bohne"];
      const ekp = row["Einkaufspreis in Euro"];
      const vkp = row["Verkaufspreis in Euro"];
      const marge = row["Marge in Prozent"];

      const changeBohne: ChangeBohne = {
        id,
        art,
        ekp,
        vkp,
        marge
      };
      service.calculateLineFromChangeBohne(changeBohne);
      fixture.detectChanges();
    }
  });
};

export const dannIstDerVerkaufspreis = then => {
  then(/ist der Verkaufspreis '(.+)' Euro/, function(vkp) {
    const vkpNode = fixture.nativeElement.querySelector("#vkp");
    expect(vkpNode.value).toEqual(vkp);
  });
};

export const dannSindFolgendeBohnenartenInDerAnwendungSichtbar = then => {
  then("sind folgende Bohnenarten in der Anwendung sichtbar", function(
    dataTable
  ) {
    dataTable.forEach(d => {
      const art = d["Bohne"];
      const ekp = d["Einkaufspreis in Euro"];
      const vkp = d["Verkaufspreis in Euro"];
      const marge = d["Marge in Prozent"];
      expectInputToEqual("#art", art);
      expectInputToEqual("#ekp", ekp);
      expectInputToEqual("#vkp", vkp);
      expectInputToEqual("#marge", marge);
    });
  });
};

export const wennDerBohnenverkaeuferDenEinkaufspreisAufSetzt = when => {
  when(/der Bohnenverkäufer den Einkaufspreis auf '(.+)' Euro setzt/, function(
    ekp
  ) {
    setInputValue("#ekp", ekp);
  });
};

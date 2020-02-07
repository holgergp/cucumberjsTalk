import "core-js/es7/reflect";
import "core-js/es6/reflect";
import { expectInputToEqual } from "../support/expectations";
import { setInputValue } from "../support/puppetMaster";

export const dannIstDerVerkaufspreis = then => {
  then(/ist der Verkaufspreis '(.+)' Euro/, function(vkp) {
    const vkpNode = document.querySelector("#vkp");
    // expect(vkpNode.value).toEqual(vkp);
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
  when(
    /der Bohnenverkäufer den Einkaufspreis auf '(.+)' Euro setzt/,
    function(ekp) {
      setInputValue("#ekp", ekp);
    }
  );
};

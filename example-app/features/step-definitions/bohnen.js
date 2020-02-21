import { Given as Angenommen, Then as Dann, When as Wenn } from "cucumber";
import { expectInputToEqual } from "../support/expectations";
import { setInputValue } from "../support/puppetMaster";
import expect from "expect";

Angenommen("sind folgende Bohnenarten in der Anwendung sichtbar", function(
  dataTable
) {
  dataTable.hashes().forEach(d => {
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

Wenn("der Bohnenverkäufer den Einkaufspreis auf {string} Euro setzt", function(
  ekp
) {
  setInputValue("#ekp", ekp);
});

Dann("ist der Verkaufspreis {string} Euro", function(vkp) {
  const vkpNode = document.querySelector("#vkp");
  expect(vkpNode.value).toEqual(vkp);
});

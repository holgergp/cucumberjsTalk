import { getInputValue } from "./puppetMaster";
import expect from "expect";

export function expectInputToEqual(selectorOrElement, expectation) {
  expect(getInputValue(selectorOrElement)).toEqual(expectation);
}

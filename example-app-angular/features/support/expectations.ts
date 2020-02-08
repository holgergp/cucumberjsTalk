import {getInputValue} from './puppetMaster';

export function expectInputToEqual(selector, expectation) {
  expect(getInputValue(selector)).toEqual(expectation);
}

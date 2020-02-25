import ReactTestUtils from "react-dom/test-utils";

export function setInputValue(selector, value) {
  const input = select(selector);

  ReactTestUtils.Simulate.focus(input);
  input.value = value;
  ReactTestUtils.Simulate.change(input, { target: { value } });
  ReactTestUtils.Simulate.blur(input);
}

export function getInputValue(selector) {
  const input = select(selector);
  return input.value;
}

export function select(selector) {
  const node = document.querySelector(selector);
  if (!node) {
    throw new Error(`Element for selector ${selector} not found`);
  }
  return node;
}

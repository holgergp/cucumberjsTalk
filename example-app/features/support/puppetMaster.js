import ReactTestUtils from "react-dom/test-utils";

export function setInputValue(selectorOrElement, value) {
  const input =
    typeof selectorOrElement === "string"
      ? select(selectorOrElement)
      : selectorOrElement;

  ReactTestUtils.Simulate.focus(input);
  input.value = value;
  ReactTestUtils.Simulate.change(input, { target: { value } });
  ReactTestUtils.Simulate.blur(input);
}

export function getInputValue(selectorOrElement) {
  const input =
    typeof selectorOrElement === "string"
      ? select(selectorOrElement)
      : selectorOrElement;
  return input.value;
}

export function select(selector) {
  const node = document.querySelector(selector);
  if (!node) {
    throw new Error(`Element for selector ${selector} not found`);
  }
  return node;
}

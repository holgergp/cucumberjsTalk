import userEvent from "@testing-library/user-event";

export async function setInputValue(selector, value) {
  await userEvent.type(select(selector), value);
}

export function getInputValue(selector) {
  const input = select(selector);
  return input.value;
}

export function select(selector) {
  const node = document.querySelector(selector);
  console.error("node", node);
  if (!node) {
    throw new Error(`Element for selector ${selector} not found`);
  }
  return node;
}

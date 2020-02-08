import { fixture } from "./world";
import { By } from "@angular/platform-browser";

export function setInputValue(selector, value) {
  const input = selectDebugElement(selector);
  input.nativeElement.focus();
  input.value = value;
  input.triggerEventHandler("change", { target: { value } });
  fixture.detectChanges();
}

export function getInputValue(selector) {
  const input = selectNode(selector);
  return input.value;
}

export function selectDebugElement(selector) {
  const node = fixture.debugElement.query(By.css(selector));
  if (!node) {
    throw new Error(`Element for selector ${selector} not found`);
  }
  return node;
}

export function selectNode(selector) {
  const node = fixture.nativeElement.querySelector(selector);
  if (!node) {
    throw new Error(`Element for selector ${selector} not found`);
  }
  return node;
}

import { JSDOM } from "jsdom";
import globalJsDom from "jsdom-global";
import "jsdom-global/register";

export default function() {
  globalJsDom(
    '<!doctype html><html><body><div id="root"></div></div></body></html>',
    { url: "https://testhost.org/sd-client/" }
  );
  /* global.jsdom = new JSDOM(
    '<!doctype html><html><body><div id="root"></div></div></body></html>',
    { url: "https://testhost.org/sd-client/" }
  );
  global.window = global.jsdom.window;
  global.window.scrollTo = () => {};
  global.document = window.document;
  global.navigator = window.navigator || { onLine: true };
  global.HTMLElement = window.HTMLElement;

  global.document = global.window.document;
  global.navigator = { userAgent: "" };*/
  global.document.serialize();
  return global.document.getElementById("root");
}

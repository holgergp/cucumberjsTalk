import { mount } from "enzyme";
import App from "../../src/App";
import React from "react";

export async function oeffneAnwendung(world) {
  world.wrapper = mount(<App store={world.store} />, { attachTo: world.root });
}

// noinspection JSUnusedGlobalSymbols
export function logDocument() {
  console.error(global.jsdom.serialize());
}

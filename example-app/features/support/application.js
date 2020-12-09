import App from "../../src/App";
import React from "react";
import { render } from "@testing-library/react";
import { logDocument } from "../step-definitions/rabatt";

export async function oeffneAnwendung(world) {
  console.log("world.root", world.root);
  world.queries = render(<App store={world.store} />, {
    baseElement: world.root
  });
  logDocument();
}

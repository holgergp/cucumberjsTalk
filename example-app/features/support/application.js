import App from "../../src/App";
import React from "react";
import { render } from "@testing-library/react";
import { logDocument } from "../step-definitions/rabatt";

export async function oeffneAnwendung(world) {
  world.queries = render(<App store={world.store} />, {
    container: world.root
  });
  logDocument();
}

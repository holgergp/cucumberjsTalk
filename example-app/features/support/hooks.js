/* eslint-disable babel/no-invalid-this */
import { After, Before } from "cucumber";
import setUpJsDom from "./setupJsDom";
import { cleanup } from "@testing-library/react";

Before("not @integrationTest", function() {
  this.root = setUpJsDom();
});

After("not @integrationTest", function() {
  _unmountUI(this);
});

function _unmountUI(world) {
  if (world.queries) {
    cleanup();
    world.queries = undefined;
  }
  if (world.root) {
    world.root = undefined;
  }
}

import { setWorldConstructor } from "cucumber";
import { createStore } from "redux";

import reducers from "../../src/reducer";

function BaristaWorld() {
  this.store = createStore(reducers);
  this.wrapper = undefined;
}

process.on("unhandledRejection", r => console.error(r));
setWorldConstructor(BaristaWorld);

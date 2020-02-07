import { setWorldConstructor } from "cucumber";

import { getTestBed, TestBed } from "@angular/core/testing";
import { AppComponent } from "../../src/app/app.component";
import { BohnenService } from "../../src/app/bohnen.service";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import '../../src/polyfills'

function BaristaWorld() {
  console.error('World start');
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  // this.store = createStore(reducers);
  console.error("TestBed");


  TestBed.configureTestingModule({
    // provide the component-under-test and dependent service
    declarations: [AppComponent]
  }).compileComponents().then();
  this.testBed = getTestBed();
  this.wrapper = undefined;
  console.error("World end");
}

process.on("unhandledRejection", r => console.error(r));
setWorldConstructor(BaristaWorld);

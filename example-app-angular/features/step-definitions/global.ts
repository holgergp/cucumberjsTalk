import { Given as Angenommen } from "cucumber";
import {AppComponent} from '../../src/app/app.component';
import 'core-js/es7/reflect';
import 'core-js/es6/reflect';

export async function oeffneAnwendung(world) {
  console.error('World',world);
  world.application = world.testBed.createComponent(AppComponent).componentInstance;
}

Angenommen("die Anwendung ist geöffnet", async function() {
  await oeffneAnwendung(this);
});

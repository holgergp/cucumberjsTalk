import { BeansComponent } from "../../src/app/beans/beans.component";
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "../../src/app/app.component";
import { BohnenService } from "../../src/app/bohnen.service";

export let fixture;
export let component;
export let service;

export const startApp = async () => {
  TestBed.configureTestingModule({
    declarations: [AppComponent, BeansComponent]
  }).compileComponents();
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  service = TestBed.get(BohnenService);

  fixture.detectChanges();
};

import { Injectable } from "@angular/core";
import { BOHNEN } from "./bohnen";
import { BehaviorSubject, Observable } from "rxjs";
import { Bohne, ChangeBohne } from "./types";

@Injectable({
  providedIn: "root"
})
export class BohnenService {
  private bohnenDB: BehaviorSubject<Bohne[]>;

  constructor() {
    this.bohnenDB = new BehaviorSubject(BOHNEN);
  }

  getBohnen(): Observable<Bohne[]> {
    return this.bohnenDB;
  }

  calculateLineFromChangeBohne(change: ChangeBohne) {
    const bohneFromDB = this.bohnenDB.value.find(b => b.id === change.id);
    const bohneWithChange = { ...bohneFromDB, ...change };

    const rabatt = parseFloat(bohneWithChange.rabatt) || 0.0;
    const vkp = parseFloat(bohneWithChange.vkp);
    const vkpRabatt = parseFloat((vkp - vkp * (rabatt / 100)).toFixed(2));
    const ekp = parseFloat(bohneWithChange.ekp);
    const marge = parseFloat(((vkpRabatt / ekp - 1) * 100).toFixed(2));
    const calculatedBohnen: Bohne[] = this.bohnenDB.value.map(b => {
      if (b.id === bohneWithChange.id) {
        return {
          ...b,
          rabatt: rabatt.toFixed(2),
          vkp: vkp.toFixed(2),
          vkpRabatt: vkpRabatt.toFixed(2),
          ekp: ekp.toFixed(2),
          marge: marge.toFixed(2)
        };
      } else return b;
    });
    this.bohnenDB.next(calculatedBohnen);
  }
}

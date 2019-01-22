#language: de
Funktionalität: Bohnenarten in der Anwendung anzeigen
  Als Bohnenverkäufer möchte in der Anwendung meine Bohnenarten sehen und bearbeiten können

  Grundlage:
    Angenommen die Anwendung ist geöffnet
    Und es gibt folgende Bohnenarten in der Anwendung
      | Id | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro |
      | 1  | Äthiopien | 10                    | 20               | 30                    |

  Szenario: Bohnenarten sind in der Anwendung sichtbar
    Dann sind folgende Bohnenarten in der Anwendung sichtbar
      | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro |
      | Äthiopien | 10                    | 20               | 30                    |

  Szenario: Änderung des Einkaufspreis ist in der Anwendung sichtbar
    Wenn der Bohnenverkäufer den Einkaufspreis auf "15.00" Euro setzt
    Dann sind folgende Bohnenarten in der Anwendung sichtbar
      | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro |
      | Äthiopien | 15.00                 | 20               | 30                    |

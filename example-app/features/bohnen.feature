#language: de
Funktionalität: Bohnenarten in der Anwendung anzeigen
  Als Bohnenverkäufer möchte in der Anwendung meine Bohnenarten sehen und bearbeiten können

  Grundlage:
    Angenommen die Anwendung ist geöffnet
    Und es gibt folgende Bohnenarten in der Anwendung
      | Id | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro |
      | 1  | Äthiopien | 10.00                 | 30.00            | 13.00                 |

  Szenario: Bohnenarten sind in der Anwendung sichtbar
    Dann sind folgende Bohnenarten in der Anwendung sichtbar
      | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro |
      | Äthiopien | 10.00                 | 30.00            | 13.00                 |

  Szenario: Änderung des Einkaufspreis ist in der Anwendung sichtbar
    Wenn der Bohnenverkäufer den Einkaufspreis auf "5.00" Euro setzt
    Dann sind folgende Bohnenarten in der Anwendung sichtbar
      | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro |
      | Äthiopien | 5.00                  | 160.00           | 13.00                 |

  Szenariogrundriss: Jede Änderung des Einkaufspreis ist in der Anwendung sichtbar
    Wenn der Bohnenverkäufer den Einkaufspreis auf "<Einkaufspreis>" Euro setzt
    Dann sind folgende Bohnenarten in der Anwendung sichtbar
      | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro |
      | Äthiopien | <Einkaufspreis>       | <Marge>          | 13.00                 |
    Beispiele:
      | Einkaufspreis | Marge    |
      | 0.10          | 12900.00 |
      | 1.10          | 1081.82  |
      | 2.51          | 417.93   |
      | 5.00          | 160.00   |

#language: de
Funktionalität: Rabatt für eine Bohnenart berechnen
  Als Bohnenverkäufer möchte ich einen Rabatt gewähren können

  Grundlage:
    Angenommen die Anwendung ist geöffnet

  Szenario: Ein neuer Rabatt soll gewährt werden
    Angenommen es gibt folgende Bohnenarten in der Anwendung
      | Id | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro | Rabatt |
      | 1  | Äthiopien | 10.00                 | 30               | 13.00                 | 0.00   |
    Wenn der Bohnenverkäufer einen Rabatt von "10" Prozent gewährt
    Dann ist der Rabatt von "10" Prozent in der Anwendung sichtbar
    Und ist der Verkaufspreis mit Rabatt '11.70' Euro
    Und ist der Verkaufspreis '13.00' Euro
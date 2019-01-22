#language: de
Funktionalität: Rabatt für eine Bohnenart berechnen
  Als Bohnenverkäufer möchte ich einen Rabatt gewähren können

  Grundlage:
    Angenommen die Anwendung ist geöffnet

  Szenario: Ein neuer Rabatt soll gewährt werden
    Angenommen es gibt folgende Bohnenarten in der Anwendung
      | Id | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro |
      | 1  | Äthiopien | 10                    | 30               | 13                    |
    Wenn der Bohnenverkäufer einen Rabatt von "10" Prozent gewährt
    Dann ist der Rabatt von "10" Prozent in der Anwendung sichtbar
    Und ist der neue Verkaufspreis '11.70' Euro
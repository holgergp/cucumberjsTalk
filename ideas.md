## Kontext
 - SPA
 - Offline
 - Begrenzter Server Zugriff
 - => Teststrategie

## Was will ich sagen:
- SPA Testing Strategy
- Natürliche Sprache
- Ausführbare Dokumentation
- Beschreibung eines Verhaltens/Ticktets/Task
  - Überprüfbar
- Kollaboration
  - Diskussion um Fachlichkeit starten
- Warum reicht dafür nicht Jest
- Wo sind die Unterscheide zu say Java Cucumbers
  - Was finde ich besser als an anderen Lösungen
  - Keine/Weniger Regexp
- Wann sollte ich das machen, wann nicht?
- Unterschied zu Unit Tests

- Bestandteile
  - Gherkin
  - world.js
  - hooks.js
  - Features
  - Step Definition
- Start
  - Missing Step Definition
  - 
- JSDom/Pupeteer
- Wiederverwendung
- Enzyme/html query

- Arrange brief
- Act über UI
- Assert as you like
  - State


## Aufbau
- Welches Problem möchte ich lösen?
  - Große SPA testen
  - 
- Wie kann mir Cucumber da helfen?
- Wie starte ich mit Cucumber
- Wie mache ich mit Cucumber weiter?
- 
## Resources
- https://www.youtube.com/watch?v=Wapb_LIS45E
- https://www.youtube.com/watch?v=L3rHsE-nA78
- https://docs.cucumber.io/
- https://github.com/cucumber/cucumber-js

## Abstract

Testen, Frontend, SPA, Offline, BDD, Cucumber.js


Ich möchte in meinem Vortrag mit Cucumber.js ein Werkzeug und eine Herangehensweise vorstellen, mit der sich 

Mal ganz ehrlich: Testen im Frontend hat noch nie viel Spaß gemacht. In meinem Talk möchte ich mit Jest eine Testbibliothek vorstellen, die genau das ändern kann. Jest ist ohne viel Konfiguration direkt einsetzbar und bringt alles mit was man von einer Testbibliothek erwartet (und noch mehr). An vielen praktischen Beispielen möchte ich meine Lieblingsfeatures wie z.B. Snapshot Tests, Mocking oder das tolle CLI erläutern und zeigen, dass Testen im Frontend durchaus Spaß machen kann! Eine Ausrede weniger um auf das Testen im Frontend zu verzichten!

## Scratchpad

Unit Testing ist cool, aber reicht leider nicht. => Testpyramide
Cucumber ist ein Weg um eine Anwendung im Ganzen zu testen.
(Falls es die Fachlichkeit erfordert, mockt man das Backend komplett weg.)

Cucumber(JS) bietet mir einen BDD Ansatz.
Ich beschreibe meine Anforderung/mein Ticket/mein Feature in natürlicher Sprache.
Und kann dies dann ausführen lassen.
Ok ich muss zuerst Gluecode schreiben.

Ist das nicht viel mehr Arbeit?
Jein! Initial sicherlich. Für mich war es auch einfach ungewohnt. Und ich hatte viel FUD mitgenommen.
Mit der Zeit nimmt man aber immer mehr Fahrt auf und die Cucumber Tests bilden einen natürlichen ersten Schritt bei der Entwicklung eines Features
Oft ohne eine Zeile Glue Code zu schreiben.

Was habe ich davon?
Macht das immer Sinn?

Flughöhe

Beispiel: Tabelle: Mit Filtern
Wie sieht denn so ein Feature aus?
Was sind die Bestandteile? Gherkin
Wie fange ich denn am besten an?

Das können dann nicht nur Entwickler lesen.
Das können vielleicht FBler auch schreiben, zumindest lesen.
Dies kann versioniert werden.


## Advance Topics/ Ausblick
- Performance
- CI
- Wiederverwendung


## Alternative Themen
 - Software Engineering in the frontend - Tools. Techniken 
   - Testing
   - Typsystem
   - SOLID
   - Team (keine Trennung)
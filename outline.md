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
    - Offline First als Beispiel
  - Kommiunikation im Team über Fachlichkeit starten und überprüfbar machen
- Wie kann mir Cucumber da helfen?
  - Formalisieren einer Anforderung
  - Living Documentation
- Wie starte ich mit Cucumber
- Wie mache ich mit Cucumber weiter?
  - Practices
- 
## Resources
- https://www.youtube.com/watch?v=Wapb_LIS45E
- https://www.youtube.com/watch?v=L3rHsE-nA78
- https://docs.cucumber.io/
- https://github.com/cucumber/cucumber-js

## Abstract

In den Tag starten mit Kaffee und einem Cucumber.js Test


"Natürlich" testen mit Cucumber.js
Cucumber.js - Oder: Starte den Tag mit einem Test
Cucumber.js - Starte den Tag mit BDD
Cucumber.js - Ich fang' schon mal mit den Tests an
Cucumber.js - ATDD und BDD für das Frontend
Cucumber.js - Nieder mit der Sprachbariere
Cucumber.js - Die BDD-Art den Tag zu starten

Starte den Tag mit 

Cucumber.js - Ich fang' schon mal mit den Tests an
Cucumber.js - Starte den Tag mit BDD
Cucumber.js und die BDD-Art in den Tag zu starten
Cucumber.js - Mit BDD in den Tag starten

Cucumber.js - Starte den Tag mit BDD

Akzeptanztests in natürlicher Sprache für das Frontend? Und dann noch jedes Feature mit so einem Test beginnen? Lohnt sich das?
Wenn man mich fragt: Ganz klar ja! Denn die Frontends, die wir heutzutage bauen, werden immer komplexer und da können wir jede Hilfe gebrauchen.
Cucumber.js ist eine BDD-Testbibiothek, die es ermöglicht, solche Akzeptanztests in natürlicher Sprache zu schreiben und automatisiert in einem Client Build Workflow auszuführen.
Ich möchte in meinem Vortrag zeigen, dass das Schreiben dieser Tests mit Cucumber.js gar nicht aufwändig sein muss und wie das Team davon profitiert, wenn dank dieser Tests Fachlichkeit und Technik näher zusammenrücken.

## Vorkenntnisse:
Grundlegende JavaScript-Kenntnisse. 

## Lernziele:
Die Zuhörer sollen ein Gefühl für das Schreiben von natürlichsprachigen Tests mit Cucumber.js bekommen und besser beurteilen können, ob diese Form der Tests einen Benefit für sie bringt.

## Kurzbio
Holger ist seit über 15 Jahren passionierter Softwareentwickler. Fasziniert vom Web, egal ob JS-Frontend oder Java-Backend. Podcastet bei @autoweirdfm.

## Alter Abstract

Mal ganz ehrlich: Testen im Frontend hat noch nie viel Spaß gemacht. In meinem Talk möchte ich mit Jest eine Testbibliothek vorstellen, die genau das ändern kann. Jest ist ohne viel Konfiguration direkt einsetzbar und bringt alles mit was man von einer Testbibliothek erwartet (und noch mehr). An vielen praktischen Beispielen möchte ich meine Lieblingsfeatures wie z.B. Snapshot Tests, Mocking oder das tolle CLI erläutern und zeigen, dass Testen im Frontend durchaus Spaß machen kann! Eine Ausrede weniger um auf das Testen im Frontend zu verzichten!

## Scratchpad


Komplexere Anwendungen => Komplexere Anforderungen auf dem Client => An

BDD => Cucumber.js => Kollaboration/Struktur => Ausführbare Tests
Testen, Frontend, SPA, Offline, BDD, Cucumber.js


Cucumber.js ist eine Testbibliothek, die es mir ermöglicht Akzeptanztests in natürlicher Sprache zu formulieren.
Heutzutage werden die Frontends, die wir bauen, immer komplexer. Um dieser Komplexität Herr zu werden helfen meinem Team und mir solche automatisierten, lesbaren und wartbaren Tests ungemein.
Ich möchte in meinem Talk ein Vorgehen zeigen, 

Die Frontends die wir heutzutage werden immer größer und komplexer.  Kommt dann noch offline-first mit in die Gleichung so ist ein Frontend schlussendlich viel komplexer als das dazugehörige Backend. 
Spätestens dann kommt der Bedarf im Team "anders" mit den zugrundenliegenden Anforderungen umzugehen und BDD ist ein Stichwort das dann häufig fällt.
Ich möchte mit cucumber.js ein Werkzeug vorstellen, dass das Team dabei unterstützt die umzusetzenden Anforderungen besser zu verstehen und dieses Verständnis über automatisierte Tests überprüfbar macht.
Ich möchte in meinem Talk einen Ansatz vorstellen, der aus meiner Sicht gut funktioniert,wo

Ein Ansatz der meiner Ansicht nach gut funktioniert ist
Spätestens dann kommt 
In einem solchen Szenario kommt man spätestens mit alleinigen Unit Tests an die Grenzen.
Ich möchte in diesem Talk mit cucumber.js ein Werkzeug vorstellen, mit der dieser steigenden Komplexität Rechung getragen wird.
Ich werde eine Vorgehen vorstellen, welches das Entwicklungsteam dabei unterstützt Anforderungen als Tests zu formulieren und die Anforderungen überprüfbar macht, fachliche Kommunikation fördert und das Team unterstützt.

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
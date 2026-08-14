## JS-Entwicklung und Core 4.4 +


Der Jeedom-Core hat in Version 4.4 eine umfassende Umstrukturierung des Frontends erfahren. Während er ursprünglich auf jQuery und Bootstrap v3 basierte, ist der Core nun in Vanilla JS geschrieben und kommt ohne Framework aus. Die jQuery-Plugins wurden durch interne Bibliotheken oder andere, ebenfalls in JS geschriebene Bibliotheken ersetzt.

Die Plugins werden in zukünftigen Versionen zwangsläufig davon betroffen sein, da diese Bibliotheken und sogar jQuery künftig nicht mehr vom Core geladen werden.

> Achtung: Plugins, die diesen Empfehlungen entsprechen, funktionieren nicht auf einem Core vor Version 4.4!
>
> Es muss also Folgendes angewendet werden `"require" : "4.4",` in der Datei „info.json“ des Plugins.

Es ist hier nicht das Ziel, alle JavaScript-Methoden zu erklären, dazu gibt es genügend offizielle Dokumentationen:

- [MSDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript](https://devdocs.io/javascript/)


Wir werden uns hier also die wichtigsten Funktionen des Core ansehen, die in den Plugins genutzt werden können.

- [Dov dev Jeedom Core 4.4](/dev/core4.4)

- [Tastenkombinationen für HTML-Elemente](shortcuts)
- [Dialogfelder](dialogs)
- [Hilfsprogramme](helpers)
- [Ereignisbehandlung (*Listeners*) in JavaScript](events)
- [Verwaltung von Ajax-Aufrufen](ajax)
- [Werte setzen / abrufen](jeevalue)
- [Automatische Vervollständigung](jeeComplete)




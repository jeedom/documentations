# Zum Core und zu den Plugins beitragen

Jeedom ist eine Open-Source-Software, deren Quellcode unter [GitHub](https://github.com/jeedom/core/tree/develop){:target="_blank"} und das für Beiträge von Drittentwicklern offen ist.

>**WICHTIG**
>
>Es ist entscheidend, den vorgeschlagenen Code zu verstehen, ohne sich vollständig auf die von einer künstlichen Intelligenz erstellten Ergebnisse zu verlassen. Diese kann jedoch weiterhin nützlich sein, um Optimierungen vorzunehmen oder zusätzliche Überprüfungen durchzuführen.

## Voraussetzungen

Um zur Entwicklung des Jeedom-Kerns oder eines Plugins beizutragen, sollten Sie einige Voraussetzungen kennen und berücksichtigen:
- Zunächst einmal ist es unerlässlich, sich mit den folgenden Punkten vertraut zu machen und sie anzuwenden [Das Beta-Testverfahren von Jeedom](/contribute/beta),
- Außerdem muss man über[ein Benutzerkonto auf GitHub](https://github.com/){:target="_blank"},
- Know-how [ein *Pull Request* auf GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request){:target="_blank"},
- Die von den Änderungen betroffene Sprache verstehen *(`PHP`, `JavaScript`, `HTML`, `CSS`, `Python`, `Node.js`, usw.)*,
- Die vorgeschlagenen Änderungen testen, um sicherzustellen, dass sie keine weiteren Fehler oder unbeabsichtigten Auswirkungen verursachen,
- Je nach dem zu weiterentwickelnden Code können schließlich Kenntnisse des Debian-Linux-Systems erforderlich sein.

## Drittanbieter

Ganz gleich, ob Sie ein erfahrener Entwickler sind oder nicht – jeder kann auf seiner Ebene einen Beitrag zur Entwicklung und Weiterentwicklung der Jeedom-Lösung leisten. Über die Dokumentation und das Jeedom-Forum stehen Ihnen verschiedene Hilfestellungen zur Verfügung.

>**INFORMATION**
>
>Wenn Sie sich nicht wohl dabei fühlen, direkt in die Dateien des Kerns oder eines Plugins einzugreifen, aber dennoch Ihren Beitrag leisten möchten, können Sie jederzeit einen Beitrag leisten, indem Sie im Forum im Bereich [„Nutzung des Jeedom-Kerns“](https://community.jeedom.com/c/utilisation-du-core-de-jeedom/57){:target="_blank"} oder [die für Plugins bestimmte](https://community.jeedom.com/c/plugins/46){:target="_blank"} mit dem Tag des entsprechenden Plugins.

### Entwicklerdokumentation

Wir empfehlen Ihnen, sich regelmäßig mit den Unterlagen zum Thema [Entwicklung des Kerns](/dev/core) oder im [Entwicklung eines Plugins](/dev/) um die festgelegten Regeln anzuwenden und sicherzustellen, dass die Jeedom-Standards eingehalten werden.

### Entwicklerforum

Zusätzlich zur Dokumentation haben Sie auch Zugriff auf [auf der Entwicklermesse des Forums](https://community.jeedom.com/c/developpeur-developpeurs/5){:target="_blank"} das voller Informationen steckt.

>**INFORMATION**
>
>Dieser Chat ist standardmäßig schreibgeschützt. Um Beiträge zu verfassen, müssen Sie sich zuvor [als Jeedom-Entwickler registriert](https://market.jeedom.com/index.php?v=d&p=becomeDeveloper){:target="_blank"}.

## Zum Jeedom-Kern beitragen

Beiträge zum Jeedom-Core müssen eingereicht werden unter [der Zweig `develop`](https://github.com/jeedom/core/tree/develop){:target="_blank"} in den allermeisten Fällen, es sei denn, es gibt bereits einen speziellen Zweig für diese Funktion. Im Zweifelsfall empfehlen wir Ihnen, ein Issue zu eröffnen, damit die Betreuer Sie zum richtigen Zweig weiterleiten oder bei Bedarf sogar einen neuen erstellen können.

>**WICHTIG**
>
>Wenn Sie mehrere Änderungen einreichen möchten, müssen Sie so viele *Pull-Requests* erstellen, wie es Korrekturen oder betroffene Funktionen gibt.

## Zu Plugins beitragen

Was die Plugins betrifft, müssen Änderungswünsche im Zweig eingereicht werden `beta`.

>**INFORMATION**
>
>Einige Plugin-Repositorien sind nicht öffentlich zugänglich. In diesem Fall können Sie ebenfalls einen Beitrag leisten, indem Sie ein Thema erstellen unter [das Forum](https://community.jeedom.com/c/plugins/46){:target="_blank"} mit dem Tag des entsprechenden Plugins.

## Übersetzungsmanagement

Die Übersetzungen werden automatisch in den Dateien generiert `i18n/*.json`. Es ist sinnlos, diese Dateien zu ändern, da sie regelmäßig von einem Bot neu geschrieben werden.

Damit das Übersetzungssystem funktioniert, muss je nach verwendeter Sprache eine bestimmte Syntax eingehalten werden:
- In `PHP`, außerhalb des Dossiers `desktop/php` :
```php
$myString = __('Ma phrase qui sera traduite', __FILE__);
```

- In `PHP`, im Dossier `desktop/php` :
```php
{% raw %}$myString = '{{Ma phrase qui sera traduite}}'{% endraw %};
```

- In `JavaScript`:
```js
{% raw %}var myString = '{{Ma phrase qui sera traduite}}'{% endraw %}
```

**Info.json-Dateidokumentation**

Integriert seit Version 3.0 von Jeedom, der Datei **Info.json** ist für das ordnungsgemäße Funktionieren von Plugins und deren ordnungsgemäße Bereitstellung auf dem Jeedom-Markt obligatorisch.

Die Info-Datei.json wird im Ordner / plugin_info / Ihres Plugins gespeichert.

Liste der Variablen in der Datei info.json

Mit * gekennzeichnete Felder sind Pflichtfelder.

Felder                   | Werte                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
Identifikation *                     | Eindeutige Kennung des Plugins auf dem Jeedom Market. Muss mit einem Brief beginnen. Ohne Akzente.                             |
Name *                   | Name des Plugins.                                                                                                            |
Beschreibung *            | Beschreibung des Plugins, wie es auf dem Jeedom Market angezeigt wird Mindestens 80 Zeichen. (`<br/>`für den Zeilenumbruch.)                                  |                                                                                     |
Nutzung                    | Zusätzliche Informationen zur Dokumentation zur Verwendung des Plugins.                                                    |
Lizenz *                | Art der Lizenz.                                                                                                          |
Autor *                 | Name des Plugin-Autors, der nach der Installation des Plugins in den Plugin-Informationen angezeigt wird.         |
erfordern *                | Jeedom Mindestversion.                                                                                                |
Kategorie *               | Ranking-Kategorie des Plugins auf dem Jeedom Market. **Es ist wichtig, die Nomenklatur in der folgenden Tabelle zu beachten** |
Anzeige                  | Wenn das Plugin ein dediziertes Panel auf dem Desktop verwendet, ist dies der Name der Hauptdatei dieses Panels.                    |
Handy                   | Wenn das Plugin ein spezielles Panel in der Jeedom-Webanwendung verwendet, ist dies der Name der Hauptdatei für dieses Panel.   |
Änderungsprotokoll *              | HTML-Link zu Changelog.                                                                                              |
Dokumentation *          | HTML-Link zur Plugin-Dokumentation.                                                                                |
Link -> Video               | HTML-Link zu einer Videopräsentation.                                                                                 |
Link -> Forum               | HTML-Link zum Forum zum offiziellen Thema des Plugins.                                                                  |
Sprachen                | Liste der für das Plugin verfügbaren Sprachen:Französisch, Englisch, Deutsch, Italienisch, Spanisch, Russisch, Indonesisch            |
Kompatibilität            | Plugin-Kompatibilität: Miniplus, Smart, Docker, RPI, DIY, Mobileapp.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Maximal zulässige Zeit für die Installation von Abhängigkeiten, ausgedrückt in Minuten.                                            |
Problem                    | URL zum Bugtracker, falls extern (wenn nicht ausgefüllt, erhalten Sie eine E-Mail)

**Beispiel** :

[Plugin-Vorlagendatei / plugin_info / info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

**KATEGORIE-NOMENKLATUR**

Jeedom Markt         | Info.json               |
--------------------- | ----------------------- |
Kommunikation         | Kommunikation           |
Komfort               | Wellness                |
Energie               | Energie                  |
Wetter                 | Wetter                 |
Überwachung            | Überwachung              |
Multimedia            | Multimedia              |
Natur                | Natur                  |
Verbundene Objekte      | Gerätekommunikation     |
Organisation          | Organisation            |
Hausautomations-Gateway  | Hausautomationsprotokoll|
Programmierung         | Programmierung             |
Hausautomationsprotokoll   | Automatisierungsprotokoll     |
Gesundheit                 | Gesundheit                  |
Sicherheit              | Sicherheit                |
Automatismus           | Automatisierung          |

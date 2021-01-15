**Info.json-Dateidokumentation**

Integriert seit Version 3.0 von Jeedom, der Datei ``info.json`` ist für das ordnungsgemäße Funktionieren von Plugins und deren ordnungsgemäße Bereitstellung auf dem Jeedom-Markt obligatorisch.

Die Info-Datei.json wird im Ordner gespeichert ``/plugin_info/`` Ihres Plugins.

Liste der Dateivariablen ``info.json``

Mit * gekennzeichnete Felder sind Pflichtfelder.

Felder                   | Werte                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
Identifikation *                     | Eindeutige Kennung des Plugins auf dem Jeedom Market. Muss mit einem Brief beginnen. Ohne Akzente.                             |
Name *                   | Name des Plugins.                                                                                                            |
Beschreibung *            | Beschreibung des Plugins, wie es auf dem Jeedom Market mit mindestens 80 Zeichen angezeigt wird. (``<br/>`` für die neue Zeile.). Bitte beachten Sie, dass dies eine Tabelle für die verschiedenen möglichen Sprachen von jeedom ist (siehe Beispiel des Template-Plugins))                                  |                                                                                     |
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
Sprachen                | Liste der für das Plugin verfügbaren Sprachen: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``sp_SP`` , ``ru_RU``, ``pt_PT``            |
Kompatibilität            | Plugin-Kompatibilität: Miniplus, Smart, Docker, RPI, DIY, Mobileapp, v4.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Maximal zulässige Zeit für die Installation von Abhängigkeiten, ausgedrückt in Minuten.                                            |
specialAttributes | Ermöglicht Plugins, zusätzliche Parameter für Objekte oder Benutzer anzufordern (siehe Beispiel der Plugin-Vorlage))                                            |
Problem                    | URL zum Bugtracker, falls extern (wenn nicht ausgefüllt, erhalten Sie eine E-Mail)

**Beispiel** :

[Plugin-Vorlagendatei / plugin_info / info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

**KATEGORIE-NOMENKLATUR**

Jeedom Markt         | Info.json               |
--------------------- | ----------------------- |
Kommunikation         | ``communication``           |
Komfort               | ``wellness``                |
Energie               | ``energy``                  |
Wetter                 | ``weather``                 |
Überwachung            | ``monitoring``              |
Multimedia            | ``multimedia``              |
Natur                | ``nature``                  |
Verbundene Objekte      | ``devicecommunication``     |
Organisation          | ``organization``            |
Hausautomations-Gateway  | ``home automation protocol``|
Programmierung         | ``programming``             |
Hausautomationsprotokoll   | ``automation protocol``     |
Gesundheit                 | ``health``                  |
Sicherheit              | ``security``                |
Automatismus           | ``automatisation``          |

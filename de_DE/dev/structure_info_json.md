**Info.json-Dateidokumentation**

Integriert seit Version 3.0 von Jeedom, der Datei ``info.json`` ist für das ordnungsgemäße Funktionieren von Plugins und deren ordnungsgemäße Bereitstellung auf dem Jeedom-Markt obligatorisch.

Die Info-Datei.json wird im Ordner gespeichert ``/plugin_info/`` Ihres Plugins.

Liste der Dateivariablen ``info.json``

Mit * gekennzeichnete Felder sind Pflichtfelder.

Felder                   | Werte                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Eindeutige Kennung des Plugins auf dem Jeedom Market. Muss mit einem Brief beginnen. Ohne Akzente.                             |
``name`` *                   | Name des Plugins.                                                                                                            |
``description`` *            | Beschreibung des Plugins, wie es auf dem Jeedom Market erscheinen wird. Mindestens 80 Zeichen. (``<br/>`` für die neue Zeile.). Achtung es ist eine Tabelle für die verschiedenen Sprachen möglicher jeedom (siehe Beispiel des Template Plugins)                                  |                                                                                     |
``utilization``                    | Zusätzliche Informationen zur Dokumentation zur Verwendung des Plugins.                                                    |
``licence`` *                | Art der Lizenz.                                                                                                          |
``author`` *                 | Name des Plugin-Autors, der nach der Installation des Plugins in den Plugin-Informationen angezeigt wird.         |
``require`` *                | Erforderliche Mindestversion von Jeedom (Core).                                                                                                |
``category`` *               | Ranking-Kategorie des Plugins auf dem Jeedom Market. **Es ist wichtig, die Nomenklatur in der folgenden Tabelle zu beachten** |
``display``                  | Wenn das Plugin ein dediziertes Panel auf dem Desktop verwendet,. Dies ist der Name der Hauptdatei für dieses Panel.                    |
``mobile``                   | Wenn das Plugin ein dediziertes Panel auf der Jeedom-WebApp verwendet. Dies ist der Name der Hauptdatei für dieses Panel.   |
``changelog`` *              | HTML-Link zu Changelog.                                                                                              |
``documentation`` *          | HTML-Link zur Plugin-Dokumentation.
``changelog_beta`` *              | Lien Html vers le Changelog Beta.|
``documentation_beta`` *          | Lien Html vers la documentation beta du plugin.
``link`` -> ``video``               | HTML-Link zu einer Videopräsentation.                                                                                 |
``link`` -> ``forum``               | HTML-Link zum Forum zum offiziellen Thema des Plugins.                                                                  |
``languages``                | Liste der für das Plugin verfügbaren Sprachen: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``sp_SP``, ``pt_PT``            |
``compatibility``            | Plugin-Kompatibilität: Miniplus, Smart, Docker, RPI, DIY, Mobileapp, v4.                                                   |
``hasDependency``            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Maximal zulässige Zeit für die Installation von Abhängigkeiten, ausgedrückt in Minuten.                                            |
``specialAttributes`` | Ermöglicht Plugins, zusätzliche Parameter für Objekte oder Benutzer anzufordern (siehe Beispiel der Plugin-Vorlage))                                            |
``issue``                    | URL zum Bugtracker, falls extern (wenn nicht ausgefüllt, erhalten Sie eine E-Mail)

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

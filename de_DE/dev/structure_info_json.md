**Dokumentation info.json-Datei**

Integriert seit Version 3.0 von Jeedom, die Datei ``info.json`` ist für das ordnungsgemäße Funktionieren der Plugins und ihre ordnungsgemäße Bereitstellung auf dem Jeedom-Markt zwingend erforderlich.

Die Infodatei.json wird im Ordner gespeichert ``/plugin_info/`` Ihres Plugins.

Liste der Dateivariablen ``info.json``

Mit * gekennzeichnete Felder sind Pflichtfelder.

Felder                   | Werte                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Eindeutige Kennung des Plugins auf dem Jeedom Market. Muss mit einem Buchstaben beginnen. Ohne Akzente.                             |
``name`` *                   | Plug-In-Name.                                                                                                            |
``description`` *            | Beschreibung des Plugins, wie es auf dem Jeedom-Markt erscheinen wird. Mindestens 80 Zeichen. (``<br/>`` für Zeilenumbruch.). Achtung es ist eine Tabelle für die verschiedenen Sprachen von jeedom möglich (siehe Beispiel des Template Plugins)                                  |                                                                                     |
``utilization``                    | Zusätzliche Informationen zur Dokumentation zur Verwendung des Plugins.                                                    |
``licence`` *                | Lizenz-Typ.                                                                                                          |
``author`` *                 | Name des Plugin-Autors, wie er nach der Installation des Plugins in den Plugin-Informationen angezeigt wird.         |
``require`` *                | Mindestversion von Jeedom.                                                                                                |
``category`` *               | Ranking-Kategorie des Plugins auf dem Jeedom Market. **Halten Sie sich strikt an die Nomenklatur in der folgenden Tabelle** |
``display``                  | wenn das Plugin ein dediziertes Panel auf dem Desktop verwendet, ist dies der Name der Hauptdatei dieses Panels.                    |
``mobile``                   | Wenn das Plugin ein dediziertes Panel auf der Jeedom-WebApp verwendet, ist dies der Name der Hauptdatei dieses Panels.   |
``changelog`` *              | HTML-Link zum Änderungsprotokoll.                                                                                              |
``documentation`` *          | HTML-Link zur Plugin-Dokumentation.
``changelog_beta`` *              | HTML-Link zum Beta-Änderungsprotokoll.|
``documentation_beta`` *          | HTML-Link zur Beta-Dokumentation des Plugins.
``link`` -> ``video``               | HTML-Link zu einem Präsentationsvideo.                                                                                 |
``link`` -> ``forum``               | HTML-Link zum Forum zum offiziellen Thema des Plugins.                                                                  |
``languages``                | Liste der für das Plugin verfügbaren Sprachen: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``sp_SP`` , ``ru_RU``, ``pt_PT``            |
``compatibility``            | Plugin-Kompatibilität: miniplus, smart, docker, rpi, diy, mobileapp, v4.                                                   |
``hasDependency``            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Maximal zulässige Zeit für die Installation von Abhängigkeiten, ausgedrückt in Minuten.                                            |
``specialAttributes`` | Ermöglicht Plugins, zusätzliche Parameter für Objekte oder Benutzer anzufordern (sehen Sie sich das Beispiel des Vorlagen-Plugins genau an)                                            |
``issue``                    | URL zum Bugtracker, falls extern (wenn nicht ausgefüllt, erhalten Sie eine E-Mail)

**Beispiel** :

[Plugin-template/plugin_info/info.json-Datei](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

**NOMENKLATURKATEGORIEN**

Jeedom auf dem Markt         | Information.json               |
--------------------- | ----------------------- |
Kommunikation         | ``communication``           |
Kompfort               | ``wellness``                |
Energie               | ``energy``                  |
Wetterbericht                 | ``weather``                 |
Überwachung            | ``monitoring``              |
Multimedia            | ``multimedia``              |
Natur                | ``nature``                  |
Verbundene Objekte      | ``devicecommunication``     |
Organisation          | ``organization``            |
Hausautomatisierungs-Gateway  | ``home automation protocol``|
Programmierung         | ``programming``             |
Heimautomatisierungsprotokoll   | ``automation protocol``     |
Die Gesundheit                 | ``health``                  |
Sicherheit              | ``security``                |
Automatisierung           | ``automatisation``          |

# Info.json-Dateidokumentation

Integriert seit Version 3.0 von Jeedom, der Datei ``info.json`` ist für das ordnungsgemäße Funktionieren von Plugins und deren ordnungsgemäße Bereitstellung auf dem Jeedom-Markt obligatorisch.

Die Info-Datei.json wird im Ordner gespeichert ``/plugin_info/`` Ihres Plugins.

## Liste der Dateivariablen ``info.json``

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
``requireOsVersion``                 | Mindestens erforderliche Debian-Version zur Aktivierung des Plugins.(Kern 4.4.Mindestens 4)                                                                                               |
``category`` *               | Ranking-Kategorie des Plugins auf dem Jeedom Market. **Es ist unbedingt zu respektieren [Nomenklatur der Tabelle unten](https://doc.jeedom.com/de_DE/dev/structure_info_json/#NOMENCLATURE%20CATEGORIES)** |
``display``                  | Wenn das Plugin ein dediziertes Panel auf dem Desktop verwendet,. Dies ist der Name der Hauptdatei für dieses Panel.                    |
``mobile``                   | Wenn das Plugin ein dediziertes Panel auf der Jeedom-WebApp verwendet. Dies ist der Name der Hauptdatei für dieses Panel.   |
``changelog`` *              | HTML-Link zu Changelog.                                                                                              |
``documentation`` *          | HTML-Link zur Plugin-Dokumentation.
``changelog_beta`` *              | Lien Html vers le Changelog Beta.|
``documentation_beta`` *          | Lien Html vers la documentation beta du plugin.
``link`` -> ``video``               | HTML-Link zu einer Videopräsentation.                                                                                 |
``link`` -> ``forum``               | HTML-Link zum Forum zum offiziellen Thema des Plugins.                                                                  |
``language``                | Liste der für das Plugin verfügbaren Sprachen: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``es_ES``, ``pt_PT``            |
``compatibility``            | Plugin-Kompatibilität: Miniplus, Smart, Docker, RPI, DIY, Mobileapp, v4.                                                   |
``hasDependency``            | «true» si [Das Plugin muss Abhängigkeiten installieren](https://doc.jeedom.com/de_DE/dev/daemon_plugin#Les%20d%C3%A9pendance), sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si [Das Plugin muss Daemons ausführen](https://doc.jeedom.com/de_DE/dev/daemon_plugin#Les%20d%C3%A9mons%20%26%20d%C3%A9pendances), sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Maximal zulässige Zeit für die Installation von Abhängigkeiten, ausgedrückt in Minuten.                                            |
``specialAttributes`` | Permet aux plugin de demander des [parametre suplémentaire](https://doc.jeedom.com/de_DE/dev/structure_info_json#SpecialAttributes) sur [des objets](https://doc.jeedom.com/de_DE/dev/structure_info_json#Attribute%20Object) oder [Benutzer](https://doc.jeedom.com/de_DE/dev/structure_info_json#Attributs%20User) (Schauen Sie sich das Beispiel des Template-Plugins genau an) (Siehe Erläuterungen unten)                                            |
``issue``                    | URL zum Bugtracker, falls extern (wenn nicht ausgefüllt, erhalten Sie eine E-Mail)

## Exemple

[Plugin-Vorlagendatei / plugin_info / info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

## KATEGORIE-NOMENKLATUR

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

## SpecialAttributes

Diese Attribute ermöglichen es, Benutzer nach zusätzlichen Parametern für jedes Objekt („Objekt“ im Sinne von Jeedom) zu fragen : Menü „Extras/Objekte“; Typischerweise stellt dies die Räume in unserer Hausautomation dar) oder für jeden Benutzer.

### Utilisation

In Ihrem Code können Sie den Wert dieser Parameter mithilfe des „User“-Objekts für ein Benutzerattribut oder des „jeeObject“-Objekts für ein Objektattribut abrufen:

„
Benutzer : $user->getOptions(‹ plugin::Plugin_ID::Schlüssel ›)
Objekt : $jeeObject->getConfiguration(‹ plugin::Plugin_ID::Schlüssel ›)
„
* ID_plugin ist die ID Ihres Plugins
* clef ist der Schlüssel in Ihrer JSON-Konfiguration (im Beispiel: foo, foo 2 ...)

### Objektattribute

Die Syntax lautet wie folgt, um 2 spezifische Parameter pro Objekt vorzuschlagen :
„
	"specialAttributes" : {
		"object" : {
			"toto" : {"name" : {"fr_FR" : "Plop, ich bin ein besonderes Attribut"},"type" : "input"},
			"toto2" : {"name" : {"fr_FR" : "Plop, ich habe ein spezielles Attribut Nummer"},"Typ" : "number"}
		}
	}
„

Der Benutzer kann diese beiden Parameter für jedes Objekt im Objektkonfigurationsmenü (Menü Extras / Objekte) definieren).
Hier ein freier Text und ein digitaler.
![Attribut Objet](images/SpecialAttributeObject.png)

### Benutzerattribute

„
	"specialAttributes" : {
		"user" : {
			"toto" : {"name" : {"fr_FR" : "Plop, ich bin ein besonderer Attributbenutzer"},"Typ" : "Wählen Sie „Werte“ aus" : [{"Wert" : "1", "Name" : "Wert 1"},{"Wert" : "plopp“, „Name" : "Plop-Wert"}]}
		}
	}
„

Hier ermöglicht dieses Attribut jedem Benutzer, einen eigenen Parameter zu definieren (im Menü Einstellungen / Präferenzen))
![Attribut Utilisateur](images/SpecialAttributeUser.png)

### EqLogic-Attribute

„
	"specialAttributes": {
        "eqLogic": {
            "mqttTranmit": {
                "type": "checkbox",
                "name": {
                    "fr_FR": "Übertragen Sie die Ausrüstung in MQTT"
                }
            }
        }
    }
„

Hier können Sie mit diesem Attribut einen Parameter für jedes Jeedom-Gerät definieren (in der erweiterten Konfiguration des Geräts)). Sie finden es in der Gerätekonfiguration unter „Plugin“::mqtt2::mqttTranmit` (`plugin::Plugin_ID::key`)

# Dokumentation info.json-Datei

Integriert seit Version 3.0 von Jeedom, die Datei ``info.json`` ist für das ordnungsgemäße Funktionieren der Plugins und deren ordnungsgemäßen Einsatz auf dem Jeedom-Markt zwingend erforderlich.

Die Infodatei.json wird im Ordner gespeichert ``/plugin_info/`` Ihres Plugins.

## Liste der Dateivariablen ``info.json``

Mit * gekennzeichnete Felder sind Pflichtfelder.

Felder                   | Werte                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Eindeutige Kennung des Plugins auf dem Jeedom Market. Muss mit einem Buchstaben beginnen. Ohne Akzente. Kann _ nicht enthalten                             |
``name`` *                   | Plugin-Name.                                                                                                            |
``description`` *            | Beschreibung des Plugins, wie es auf dem Jeedom Market erscheinen wird. Mindestens 80 Zeichen. (``<br/>`` für Zeilenumbruch.). Bitte beachten Sie, dass dies eine Tabelle für die verschiedenen möglichen Jeedom-Sprachen ist (schauen Sie sich das Beispiel des Template-Plugins genau an)                                  |                                                                                     |
``utilization``                    | Zusätzliche Informationen zur Dokumentation zur Verwendung des Plugins.                                                    |
``licence`` *                | Lizenztyp.                                                                                                          |
``author`` *                 | Name des Plugin-Autors, wie er nach der Installation des Plugins in den Plugin-Informationen angezeigt wird.         |
``require`` *                | Mindestens erforderliche Version von Jeedom (Core).                                                                                                |
``os``                 | Minimal und maximal erforderliche Version von Debian. Beispiel: In Form eines JSON-Objekts : {"min" : 10,"max" : 12.99} (Kern 4.4.Mindestens 15). Wenn eine der beiden nicht ausgefüllt ist, wird sie nicht mit der Betriebssystemversion des Benutzers verglichen. Sie können eine genauere Version wie 10 angeben.5 zum Beispiel. Um die Versionseinschränkung aufzuheben, müssen Sie die Version mit einem leeren Wert erneut auf dem Markt veröffentlichen "". Beachten Sie, dass es für das Maximum ratsam ist, zu setzen .99, um alle Nebenversionen einzuschließen.                                               |
``category`` *               | Plugin-Ranking-Kategorie auf dem Jeedom-Markt. **Es ist unbedingt zu respektieren [Nomenklatur der Tabelle unten](https://doc.jeedom.com/de_DE/dev/structure_info_json/#NOMENCLATURE%20CATEGORIES)** |
``display``                  | Wenn das Plugin ein spezielles Panel auf dem Desktop verwendet,. Dies ist der Name der Hauptdatei dieses Panels.                    |
``mobile``                   | Wenn das Plugin ein spezielles Panel in der Jeedom-WebApp verwendet. Dies ist der Name der Hauptdatei dieses Panels.   |
``changelog`` *              | HTML-Link zum Changelog.                                                                                              |
``documentation`` *          | HTML-Link zur Plugin-Dokumentation.
``changelog_beta`` *              | HTML-Link zur Changelog Beta.|
``documentation_beta`` *          | HTML-Link zur Beta-Dokumentation des Plugins.
``link`` -> ``video``               | HTML-Link zu einem Präsentationsvideo.                                                                                 |
``link`` -> ``forum``               | HTML-Link zum Forum zum offiziellen Plugin-Thema.                                                                  |
``language``                | Liste der für das Plugin verfügbaren Sprachen: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``es_ES``, ``pt_PT``            |
``compatibility``            | Plugin-Kompatibilität: Miniplus, Smart, Docker, RPI, DIY, MobileApp, v4.                                                   |
``hasDependency``            | «true» si [Das Plugin muss Abhängigkeiten installieren](https://doc.jeedom.com/de_DE/dev/daemon_plugin#Les%20d%C3%A9pendance), sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si [Das Plugin muss Daemons ausführen](https://doc.jeedom.com/de_DE/dev/daemon_plugin#Les%20d%C3%A9mons%20%26%20d%C3%A9pendances), sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Maximal zulässige Zeit für die Installation von Abhängigkeiten, ausgedrückt in Minuten.                                            |
``specialAttributes`` | Permet aux plugin de demander des [parametre suplémentaire](https://doc.jeedom.com/de_DE/dev/structure_info_json#SpecialAttributes) sur [des objets](https://doc.jeedom.com/de_DE/dev/structure_info_json#Attribute%20Object) oder [Benutzer](https://doc.jeedom.com/de_DE/dev/structure_info_json#Attributs%20User) (Schauen Sie sich das Beispiel des Template-Plugins genau an) (Siehe Erläuterungen unten)                                            |
``issue``                    | URL zum Bugtracker, falls extern (falls nicht ausgefüllt, erhalten Sie eine E-Mail))

## Exemple

[Datei „plugin-template/plugin_info/info.json“](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

## NOMENKLATURKATEGORIEN

Markt Jeedom         | Information.json               |
--------------------- | ----------------------- |
Kommunikation         | ``communication``           |
Komfort               | ``wellness``                |
Energie               | ``energy``                  |
Wetterbericht                 | ``weather``                 |
Überwachung            | ``monitoring``              |
Multimedia            | ``multimedia``              |
Natur                | ``nature``                  |
Verbundene Objekte      | ``devicecommunication``     |
Organisation          | ``organization``            |
Gateway für die Hausautomation  | ``home automation protocol``|
Programmierung         | ``programming``             |
Hausautomationsprotokoll   | ``automation protocol``     |
Gesundheit                 | ``health``                  |
Sicherheit              | ``security``                |
Automatisierung           | ``automatisation``          |

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

Der Benutzer kann diese beiden Parameter somit für jedes Objekt im Objektkonfigurationsmenü (Menü Extras / Objekte) definieren).
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

Hier können Sie mit diesem Attribut einen Parameter für jedes Jeedom-Gerät definieren (in der erweiterten Konfiguration des Geräts)). Sie finden es in der Gerätekonfiguration unter „Plugin“::mqtt2::mqttTranmit` (`plugin::id_plugin::key`)

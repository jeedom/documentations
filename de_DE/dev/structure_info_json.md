# Dokumentationsdatei info.json

Integriert seit Version 3.0 von Jeedom, die Datei ``info.json`` ist für das ordnungsgemäße Funktionieren von Plugins und deren ordnungsgemäße Bereitstellung auf dem Jeedom-Markt obligatorisch.

Die Infodatei.json wird im Ordner gespeichert ``/plugin_info/`` Ihres Plugins.

## Liste der Variablen in der Datei ``info.json``

Mit * gekennzeichnete Felder sind Pflichtfelder.

Felder                   | Werte                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Eindeutige Kennung des Plugins auf dem Jeedom Market. Muss mit einem Buchstaben beginnen. Ohne Akzente. Darf nicht _ enthalten                             |
``name`` *                   | Plugin-Name.                                                                                                            |
``description`` *            | Beschreibung des Plugins, wie es auf dem Jeedom Market erscheinen wird. Mindestens 80 Zeichen. (``<br/>`` für Zeilenumbruch.). Bitte beachten Sie, dass dies eine Tabelle für die verschiedenen möglichen Jeedom-Sprachen ist (sehen Sie sich das Beispiel des Vorlagen-Plugins genau an))                                  |                                                                                     |
``utilization``                    | Ergänzende Informationen zur Dokumentation zur Nutzung des Plugins.                                                    |
``licence`` *                | Lizenztyp.                                                                                                          |
``author`` *                 | Name des Plugin-Autors, wie er nach der Installation des Plugins in den Plugin-Informationen angezeigt wird.         |
``require`` *                | Mindestens erforderliche Version von Jeedom (Core).                                                                                                |
``os``                 | Minimal und maximal erforderliche Debian-Version. In Form eines JSON-Objekts, Beispiel : {"min" : 10,"max" : 12.99} (Core 4.4.15 mindestens). Wenn eines davon nicht ausgefüllt ist, wird es nicht mit der Betriebssystemversion des Benutzers verglichen. Sie können eine genauere Version wie 10 angeben.5 zum Beispiel. Um die Versionseinschränkung aufzuheben, müssen Sie mit einem leeren Wert erneut auf dem Markt veröffentlichen "". Beachten Sie, dass es für das Maximum ratsam ist, .99, um alle Nebenversionen einzuschließen.                                               |
``category`` *               | Plugin-Klassifizierungskategorie auf dem Jeedom-Markt. **Es ist zwingend erforderlich, die [Nomenklatur der folgenden Tabelle](https://doc.jeedom.com/de_DE/dev/structure_info_json/#NOMENCLATURE%20CATEGORIES)** |
``display``                  | Wenn das Plugin ein dediziertes Panel auf dem Desktop verwendet,. Dies ist der Name der Hauptdatei für dieses Panel.                    |
``mobile``                   | Wenn das Plugin ein dediziertes Panel in der Jeedom-WebApp verwendet. Dies ist der Name der Hauptdatei für dieses Panel.   |
``changelog`` *              | HTML-Link zum Changelog.                                                                                              |
``documentation`` *          | HTML-Link zur Plugin-Dokumentation.
``changelog_beta`` *              | HTML-Link zum Beta-Changelog.|
``documentation_beta`` *          | HTML-Link zur Beta-Dokumentation des Plugins.
``link`` -> ``video``               | HTML-Link zu einem Präsentationsvideo.                                                                                 |
``link`` -> ``forum``               | HTML-Link zum Forum zum offiziellen Plugin-Thema.                                                                  |
``language``                | Liste der für das Plugin verfügbaren Sprachen: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``es_ES``, ``pt_PT``            |
``compatibility``            | Plugin-Kompatibilität: Miniplus, Smart, Docker, RPI, DIY, MobileApp, v4.                                                   |
``hasDependency``            | «true» si [Das Plugin muss Abhängigkeiten installieren](https://doc.jeedom.com/de_DE/dev/daemon_plugin#Les%20d%C3%A9pendance), sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si [Das Plugin muss Daemons ausführen](https://doc.jeedom.com/de_DE/dev/daemon_plugin#Les%20d%C3%A9mons%20%26%20d%C3%A9pendances), sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Maximal zulässige Zeit für die Installation von Abhängigkeiten, ausgedrückt in Minuten.                                            |
``specialAttributes`` | Permet aux plugin de demander des [parametre suplémentaire](https://doc.jeedom.com/de_DE/dev/structure_info_json#SpecialAttributes) sur [des objets](https://doc.jeedom.com/de_DE/dev/structure_info_json#Attribute%20Objekt) oder [Benutzer](https://doc.jeedom.com/de_DE/dev/structure_info_json#Attributs%20User) (Schauen Sie sich das Beispiel des Vorlagen-Plugins genau an) (Siehe Erklärungen unten)                                            |
``issue``                    | )

## Exemple

[Datei plugin-template/plugin_info/info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

## NOMENKLATURKATEGORIEN

         | .               |
--------------------- | ----------------------- |
         | ``communication``           |
               | ``wellness``                |
               | ``energy``                  |
                 | ``weather``                 |
            | ``monitoring``              |
            | ``multimedia``              |
                | ``nature``                  |
      | ``devicecommunication``     |
          | ``organization``            |
  | ``home automation protocol``|
         | ``programming``             |
   | ``automation protocol``     |
                 | ``health``                  |
              | ``security``                |
           | ``automatisation``          |

## SpecialAttributes

Diese Attribute ermöglichen es, Benutzer für jedes Objekt (`Objekt` im Jeedom-Sinne) nach zusätzlichen Parametern zu fragen : Menü „Extras/Objekte“; typischerweise stellt dies die Räume in unserer Heimautomatisierung dar) oder für jeden Benutzer.

### Utilisation

In Ihrem Code können Sie den Wert dieser Parameter abrufen, indem Sie das Objekt `User` für ein Benutzerattribut oder das Objekt `jeeObject` für ein Objektattribut verwenden:

```
Benutzer : $user->getOptions(‹ plugin::ID_Plugin::Schlüssel ›)
Objekt : $jeeObject->getConfiguration(‹ plugin::ID_Plugin::Schlüssel ›)
```
* ID_plugin ist die ID Ihres Plugins
* Schlüssel ist der Schlüssel in Ihrer JSON-Konfiguration (im Beispiel: Toto, Toto 2 ...)

### Objektattribute

Die Syntax lautet wie folgt, um 2 spezifische Parameter pro Objekt bereitzustellen :
```
	"specialAttributes" : {
		"object" : {
			"toto" : {"name" : {"fr_FR" : "Plop, ich bin ein besonderes Attribut"},"Typ" : "input"},
			"toto2" : {"name" : {"fr_FR" : "Plop Ich bin eine spezielle Attributnummer"},"Typ" : "number"}
		}
	}
```

Der Benutzer kann dann diese beiden Parameter für jedes Objekt im Objektkonfigurationsmenü (Menü Extras / Objekte) definieren).
Hier ist ein freier Text und ein digitaler.
![Attribut Objet](images/SpecialAttributeObject.png)

### Benutzerattribute

```
	"specialAttributes" : {
		"user" : {
			"toto" : {"name" : {"fr_FR" : "Plop Ich bin ein spezielles Attribut Benutzer"},"Typ" : "auswählen","Werte" : [{"Wert" : "1", "Name" : "Wert 1"},{"Wert" : "plop", "Name" : "Plop-Wert"}]}
		}
	}
```

Hier ermöglicht dieses Attribut jedem Benutzer, einen für ihn spezifischen Parameter zu definieren (im Menü Einstellungen / Präferenzen)
![Attribut Utilisateur](images/SpecialAttributeUser.png)

### EqLogic-Attribute

```
	"specialAttributes": {
        "eqLogic": {
            "mqttTranmit": {
                "type": "checkbox",
                "name": {
                    "fr_FR": "Sendegeräte in MQTT"
                }
            }
        }
    }
```

Mit diesem Attribut können Sie für jedes Jeedom-Gerät einen Parameter definieren (in der erweiterten Konfiguration des Geräts). Sie finden es in der Gerätekonfiguration unter `Plugin::mqtt2::mqttTrans` (`Plugin::ID-Plugin::key`)

# Dokumentation zur Datei „info.json“

Seit Version 3.0 von Jeedom integriert, die Datei ``info.json`` ist für den ordnungsgemäßen Betrieb der Plugins und deren korrekte Bereitstellung im Jeedom Market zwingend erforderlich.

Die Datei „info.json“ wird im Ordner gespeichert ``/plugin_info/`` Ihres Plugins.

## Liste der Variablen in der Datei ``info.json``

Die mit einem * gekennzeichneten Felder sind Pflichtfelder.

Felder | Werte |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` * | Eindeutige Kennung des Plugins im Jeedom Market. Muss mit einem Buchstaben beginnen. Keine Akzente. Darf kein „_“ enthalten |
``name`` * | Name des Plugins. |
``description`` * | Beschreibung des Plugins, wie sie im Jeedom Market angezeigt wird. Mindestens 80 Zeichen. (``<br/>`` (für den Zeilenumbruch). Achtung: Dies ist eine Tabelle für die verschiedenen möglichen Jeedom-Sprachen (sehen Sie sich das Beispiel des Plugin-Templates genau an) | |
``utilization``                    | Ergänzende Informationen zur Dokumentation zur Verwendung des Plugins. |
``licence`` * | Lizenzart. |
``author`` * | Name des Plugin-Autors, wie er nach der Installation des Plugins in den Plugin-Informationen angezeigt wird. |
``require`` * | Erforderliche Mindestversion von Jeedom (Core). |
``os``                 | Mindest- und Höchstversion von Debian. In Form eines JSON-Objekts, Beispiel: {"min": 10, "max": 12.99} (mindestens Core 4.4.15). Wenn eines der beiden Felder nicht ausgefüllt ist, wird kein Vergleich mit der Betriebssystemversion des Benutzers durchgeführt. Sie können eine genauere Version angeben, zum Beispiel 10.5. Um die Versionsbeschränkung aufzuheben, müssen Sie die App im Market mit einem leeren Wert „“ erneut veröffentlichen. Beachten Sie, dass es für den Maximalwert empfehlenswert ist, .99 anzugeben, um alle Nebenversionen einzubeziehen. |
``category`` * | Einstufungskategorie des Plugins im Jeedom Market. **Bitte unbedingt die [Legende zur folgenden Tabelle](#NOMENCLATURE%20CATEGORIES)** |
``display``                  | Wenn das Plugin ein eigenes Panel auf dem Desktop verwendet, handelt es sich hierbei um den Namen der Hauptdatei dieses Panels. |
``mobile``                   | Falls das Plugin ein eigenes Panel in der Jeedom-WebApp verwendet, handelt es sich hierbei um den Namen der Hauptdatei dieses Panels.   |
``changelog`` * | HTML-Link zum Changelog. |
``documentation`` * | HTML-Link zur Dokumentation des Plugins.
``changelog_beta`` * | HTML-Link zum Beta-Changelog.|
``documentation_beta`` * | HTML-Link zur Beta-Dokumentation des Plugins.
``link`` -> ``video``               | HTML-Link zu einem Präsentationsvideo. |
``link`` -> ``forum``               | HTML-Link zum offiziellen Forum zum Thema des Plugins. |
``language``                | Liste der für das Plugin verfügbaren Sprachen: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``es_ES``, ``pt_PT``            |
``compatibility``            | Plugin-Kompatibilität: miniplus, smart, docker, rpi, diy, mobileapp, v4. |
``hasDependency``            | „true“, wenn [Das Plugin muss Abhängigkeiten installieren](daemon_plugin#Les%20d%C3%A9pendance), andernfalls „false“ oder nicht vorhanden. |
``hasOwnDeamon``             | „true“, wenn [Das Plugin muss Daemons ausführen](daemon_plugin#Les%20d%C3%A9mons%20%26%20d%C3%A9pendances), andernfalls „false“ oder nicht vorhanden. |
``maxDependancyInstallTime`` | Maximale Zeit für die Installation der Nebengebäude, angegeben in Minuten. |
``specialAttributes`` | Ermöglicht es Plugins, [zusätzliche Einstellung](#SpecialAttributes) auf [von Objekten](#Attributs%20Objet) oder [der Nutzer](#Attributs%20User) (Schauen Sie sich das Beispiel für die Plugin-Vorlage genau an) (Siehe Erläuterungen unten) |
``issue``                    | URL zum Bugtracker, falls extern (falls nicht ausgefüllt, erhalten Sie eine E-Mail)

## Beispiel

[Datei „plugin-template/plugin_info/info.json“](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

## KATEGORIENÜBERSICHT

Jeedom-Marktplatz | info.json |
--------------------- | ----------------------- |
Kommunikation | ``communication``           |
Komfort | ``wellness``                |
Energie | ``energy``                  |
Wetter | ``weather``                 |
Überwachung | ``monitoring``              |
Multimedia | ``multimedia``              |
Natur | ``nature``                  |
Vernetzte Objekte | ``devicecommunication``     |
Organisation | ``organization``            |
Hausautomations-Gateway  | ``home automation protocol``|
Programmierung | ``programming``             |
Hausautomationsprotokoll   | ``automation protocol``     |
Gesundheit | ``health``                  |
Sicherheit | ``security``                |
Automatisierung | ``automatisation``          |

## Sonderattribute

Mit diesen Attributen können von den Benutzern zusätzliche Parameter für jedes Objekt abgefragt werden (`objet` im Sinne von Jeedom: Menü „Extras“ / „Objekte“; typischerweise handelt es sich dabei um die Räume in unserem Hausautomationssystem) oder für jeden Benutzer.

### Verwendung

In Ihrem Code können Sie den Wert dieser Parameter mithilfe des Objekts abrufen `User` für ein User-Attribut oder das Objekt `jeeObject` für ein Objektattribut:

```
user : $user->getOptions(‹ plugin::ID_plugin::clef ›)
object : $jeeObject->getConfiguration(‹ plugin::ID_plugin::clef ›)
```
* ID_plugin ist die ID Ihres Plugins
* „clef“ ist der Schlüssel in Ihrer JSON-Konfiguration (im Beispiel: toto, toto 2 …)

### Objektattribute

Die Syntax lautet wie folgt, um zwei spezifische Parameter pro Objekt anzugeben:
```
	"specialAttributes" : {
		"object" : {
			"toto" : {"name" : {"fr_FR" : "Plop je suis un attribut spécial"},"type" : "input"},
			"toto2" : {"name" : {"fr_FR" : "Plop je suis un attribut spécial number"},"type" : "number"}
		}
	}
```

Der Benutzer kann diese beiden Parameter somit für jedes Objekt im Konfigurationsmenü der Objekte festlegen (Menü „Extras“ / „Objekte“).
Hier ein freier Text und eine digitale Version.
![Objektattribut](../images/SpecialAttributeObject.png)

### Benutzerattribute

```
	"specialAttributes" : {
		"user" : {
			"toto" : {"name" : {"fr_FR" : "Plop je suis un attribut spécial users"},"type" : "select","values" : [{"value" : "1", "name" : "valeur 1"},{"value" : "plop", "name" : "valeur plop"}]}
		}
	}
```

Mit diesem Attribut kann jeder Benutzer hier eine eigene Einstellung festlegen (im Menü „Einstellungen“ / „Präferenzen“).
![Benutzerattribut](../images/SpecialAttributeUser.png)

### EqLogic-Attribute

```
	"specialAttributes": {
        "eqLogic": {
            "mqttTranmit": {
                "type": "checkbox",
                "name": {
                    "fr_FR": "Transmettre l'équipement en MQTT"
                }
            }
        }
    }
```

Mit diesem Attribut können Sie hier für jedes Jeedom-Gerät einen Parameter festlegen (in der erweiterten Konfiguration des Geräts). Sie finden es in der Gerätekonfiguration unter `plugin::mqtt2::mqttTranmit` (`plugin::id_plugin::key`)

# Dokumentation der Datei info.json

Integriert seit Version 3.0 von Jeedom, die Datei ``info.json`` ist für das ordnungsgemäße Funktionieren der Plugins und deren erfolgreiche Bereitstellung auf dem Jeedom Market zwingend erforderlich.

Die Infodatei.Die JSON-Datei wird im Ordner gespeichert ``/plugin_info/`` Ihres Plugins.

## Liste der Variablen in der Datei ``info.json``

Mit einem * gekennzeichnete Felder sind Pflichtfelder.

Felder                   | Werte                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Eindeutige Kennung des Plugins auf dem Jeedom Market. Muss mit einem Buchstaben beginnen. Ohne Akzente. Darf kein _ enthalten                             |
``name`` *                   | Plugin-Name.                                                                                                            |
``description`` *            | Beschreibung des Plugins, wie es auf dem Jeedom Market erscheinen wird. Mindestens 80 Zeichen<br/>` für den Zeilenumbruch.). Beachten Sie, dass es sich hierbei um eine Tabelle für die verschiedenen möglichen Jeedom-Sprachen handelt (sehen Sie sich das Plugin-Vorlagenbeispiel genau an))                                  |                                                                                     |
``utilization``                    | Weitere Informationen finden Sie in der Plugin-Nutzungsdokumentation.                                                    |
``licence`` *                | Lizenztyp.                                                                                                          |
``author`` *                 | Der Name des Plugin-Autors, wie er nach der Installation des Plugins in den Plugin-Informationen angezeigt wird.         |
``require`` *                | Mindestens erforderliche Version von Jeedom (Core)).                                                                                                |
``os``                 | Minimale und maximale erforderliche Debian-Versionen. In Form eines JSON-Objekts, zum Beispiel : {"min" : 10,"max" : 12.99} (Core 4.4.Mindestens 15). Wenn eines der beiden Felder nicht ausgefüllt ist, wird es nicht mit der Betriebssystemversion des Benutzers verglichen. Sie können eine genauere Version angeben, z. B. 10.5 zum Beispiel. Um die Versionsbeschränkung aufzuheben, müssen Sie die Datei mit einem leeren Wert erneut im Marketplace veröffentlichen "". Beachten Sie, dass es für den Maximalwert ratsam ist, Folgendes einzustellen: .99, einschließlich aller Nebenversionen.                                               |
``category`` *               | Jeedom-Plugin-Ranking-Kategorie auf dem Marktplatz. **Halten Sie sich strikt an die [Nomenklatur der folgenden Tabelle](https://doc.jeedom.com/de_DE/dev/structure_info_json/#NOMENCLATURE%20CATEGORIES)** |
``display``                  | Wenn das Plugin ein eigenes Bedienfeld auf dem Desktop verwendet,. Dies ist der Name der Hauptdatei für dieses Panel.                    |
``mobile``                   | Wenn das Plugin ein eigenes Bedienfeld in der Jeedom-Webanwendung verwendet. Dies ist der Name der Hauptdatei für dieses Panel.   |
``changelog`` *              | HTML-Link zum Änderungsprotokoll.                                                                                              |
``documentation`` *          | HTML-Link zur Plugin-Dokumentation.
``changelog_beta`` *              | HTML-Link zum Beta-Änderungsprotokoll.|
``documentation_beta`` *          | HTML-Link zur Beta-Dokumentation des Plugins.
``link`` -> ``video``               | HTML-Link zu einem Präsentationsvideo.                                                                                 |
``link`` -> ``forum``               | HTML-Link zum Forum im offiziellen Thema des Plugins.                                                                  |
``language``                | Liste der für das Plugin verfügbaren Sprachen: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``es_ES``, ``pt_PT``            |
``compatibility``            | Plugin-Kompatibilität: Miniplus, Smart, Docker, RPI, DIY, MobileApp, v4.                                                   |
``hasDependency``            | «true» si [Das Plugin muss Abhängigkeiten installieren](https://doc.jeedom.com/de_DE/dev/daemon_plugin#Les%20d%C3%A9pendance), sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si [Das Plugin muss Daemons ausführen](https://doc.jeedom.com/de_DE/dev/daemon_plugin#Les%20d%C3%A9mons%20%26%20d%C3%A9pendances), sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Maximal zulässige Zeit für die Installation von Nebengebäuden, angegeben in Minuten.                                            |
``specialAttributes`` | Permet aux plugin de demander des [parametre suplémentaire](https://doc.jeedom.com/de_DE/dev/structure_info_json#SpecialAttributes) sur [des objets](https://doc.jeedom.com/de_DE/dev/structure_info_json#Attributes%20Object) oder [Nutzer](https://doc.jeedom.com/de_DE/dev/structure_info_json#Attributs%20User) ((Schauen Sie sich das Beispiel des Template-Plugins genau an) (Siehe Erläuterungen unten))                                            |
``issue``                    | )

## Exemple

[Plugin-template/plugin_info/info.json Datei](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

## Nomenklaturkategorien

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

Mithilfe dieser Attribute können Sie von Benutzern zusätzliche Parameter für jedes Objekt anfordern (im Sinne von „Objekt“ in Jeedom) : Menü „Werkzeuge / Objekte“ (dies repräsentiert typischerweise die Räume in unserem Hausautomatisierungssystem) oder für jeden Benutzer.

### Utilisation

In Ihrem Code können Sie die Werte dieser Parameter mithilfe des `User`-Objekts für ein Benutzerattribut oder des `jeeObject`-Objekts für ein Objektattribut abrufen:

```
Benutzer : $user->getOptions(‹ plugin::ID-Plugin::Schlüssel ›)
Objekt : $jeeObject->getConfiguration(‹ plugin::ID-Plugin::Schlüssel ›)
```
* ID_plugin ist die ID Ihres Plugins
* Der Schlüssel ist der Schlüssel in Ihrer JSON-Konfiguration (im Beispiel): Toto, Toto 2 ...)

### Objektattribute

Die Syntax zum Vorschlagen von 2 spezifischen Parametern pro Objekt lautet wie folgt :
```
	"specialAttributes" : {
		"object" : {
			"toto" : {"name" : {"fr_FR" : "Plop, ich bin ein besonderes Attribut"},"Typ" : "input"},
			"toto2" : {"name" : {"fr_FR" : "Plop, ich bin eine spezielle Attributnummer"},"Typ" : "number"}
		}
	}
```

Anschließend kann der Benutzer diese beiden Parameter für jedes Objekt im Menü „Objektkonfiguration“ (Menü „Werkzeuge“ / „Objekte“) definieren).
Hier ist ein kostenloser Text, und zwar ein digitaler.
![Attribut Objet](images/SpecialAttributeObject.png)

### Benutzerattribute

```
	"specialAttributes" : {
		"user" : {
			"toto" : {"name" : {"fr_FR" : "Plop, ich bin ein Benutzer mit einem speziellen Attribut"},"Typ" : "select","values" : [{"Wert" : "1", "Name" : "Wert 1"},{"Wert" : ""plop", "Name" : "Plop-Wert"}]}
		}
	}
```

Dieses Attribut ermöglicht es jedem Benutzer, einen für ihn spezifischen Parameter zu definieren (im Menü Einstellungen / Präferenzen))
![Attribut Utilisateur](images/SpecialAttributeUser.png)

### EqLogic-Attribute

```
	"specialAttributes": {
        "eqLogic": {
            "mqttTranmit": {
                "type": "checkbox",
                "name": {
                    "fr_FR": ""
                }
            }
        }
    }
```

). ::mqtt2::::::key`)

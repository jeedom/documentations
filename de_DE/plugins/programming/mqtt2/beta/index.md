# MQTT-Plugin

## Description

Das Plugin ermöglicht es Ihnen, Jeedom mit einem bestehenden MQTT-Brocker zu verbinden oder einen zu installieren (in Docker mit dem Docker-Plugin). Dieses Plugin kann : 
- dienen als Basis für ein weiteres Plugin für alles, was über MQTT läuft
- im "Standalone"-Modus servieren" : Sie können Befehle (Info / Aktion) erstellen, um Nachrichten auf MQTT zu senden / zu empfangen
- verwendet werden, um Jeedom von einer anderen MQTT-Ausrüstung (wie zum Beispiel Nodered) zu steuern) : das Plugin kann Jeedom-Befehle steuern sowie alle Jeedom-Ereignisse auf MQTT übertragen

## Installation

Es gibt 2 Installationsmodi : 
- Lokalbetrieb : Jeedom installiert Mosquitto über das Docker-Plugin (also in einem Container), es kümmert sich um die Konfiguration (insbesondere die Authentifizierung)). Bitte beachten Sie, dass die Installation mehrere zehn Minuten dauern kann
- Remote-Modus : Sie müssen Jeedom nur die Adresse des Brokers MQTT (z. B : mqtt://192.168.1.10:1883)

Sie können Benutzer / Passwort für die Verbindung angeben :
- Im lokalen Modus können Sie einen Benutzernamen eingeben:Passwort pro Zeile, jedes Identifikator-Paar hat gültigen Zugriff auf den Brocker. Wenn keine Kennung vorhanden ist, fügt jeedom standardmäßig automatisch eine Kennung hinzu
- Im Standalone-Modus geben Sie einfach in die erste Zeile das Benutzername / Passwort-Paar für jeedom ein, getrennt durch : (zB wenn der Benutzername `jeedom` und das Passwort` mqtt` ist, müssen Sie `jeedom . eingeben:mqtt``)

>**WICHTIG**
>
>Im lokalen Modus ist es nicht möglich, keine Authentifizierung zu haben

- "Jeedom-Wurzelthema" : Root-Thema, um eine Bestellung an Jeedom zu senden oder an das es Ereignisse sendet
- "Alle Auftragsereignisse übertragen" : gibt an, ob Jeedom alle Befehlsereignisse auf dem MQTT-Bus senden soll 

## Equipement

Es ist möglich, MQTT-Equipment direkt aus dem Plugin zu erstellen, Vorsicht in diesem Fall keine Automatisierung oder Vorlage, sofern Sie alles von Hand machen müssen.

Es ist notwendig, das Stammthema (z. B. `Test`) für die Ausrüstung anzugeben, dann reicht es in den Befehlen aus, um : 
- Befehle vom Typ Info : Geben Sie das komplette Thema an, zB wenn Sie `toto / 1` eingeben, werden alle Nachrichten zum Thema `test / toto / 1` automatisch auf den betreffenden Befehl geschrieben
- Befehle vom Aktionstyp : um das Thema und die Nachricht anzuzeigen, zB wenn Sie `foo / 2` mit als Nachricht `plop` eingeben, wird jeder Klick auf den Befehl die Nachricht `plop` zum Thema senden` test / foo / 2`

>**HINWEIS**
>
>In Befehlen vom Aktionstyp können Sie Tags verwenden #slider#, #title#, #message# Woher #select# die je nach Art des Befehls automatisch durch ihren Wert während der Ausführung des Befehls ersetzt werden

## Jeedom über MQTT verwenden

Es ist möglich, Jeedom über MQTT zu steuern, hier sind die Themen (die Beispiele gehen davon aus, dass das Stammthema gleich `jeedom` ist, also müssen Sie sich anpassen, wenn Sie es geändert haben) : 
- `jeedom / cmd / set /#cmd_id#`` : ermöglicht die Ausführung des Befehls `#cmd_id#`, können Sie die Parameter in der Nachricht als json-Felder übergeben, je nach Untertyp des Befehls, zum Beispiel : 
    - Defekt : keine Parameter
    - Mauszeiger : `{Schieberegler : 50} `
    - Botschaft : `{Titel : "Hallo "Nachricht : "Hallo, wie geht es dir ?" }``
    - Farbe : `{Farbe : "#96c927 "}`
    - Auflistung : `{wählen : 1} `
    - Befehl vom Typ Info : Sie können den Wert entweder direkt übergeben oder in json `{value : "Kuckuck", Datum/Uhrzeit : "2021-12-12 10:30:00 "}`, `Datum/Uhrzeit` ist optional
- `jeedom / cmd / get /#cmd_id#`` : den Wert des Befehls anfordern `#cmd_id#`zu jeedom, dies wird zurückkehren` jeedom / cmd / value /#cmd_id#`mit dem Befehlswert in der Nachricht
- `jeedom / cmd / event /#cmd_id#`` : Ereignis auf Befehl#cmd_id#`mit einer json-Nachricht, die verschiedene Informationen enthält, einschließlich des Werts des Befehls
# Philips Hue Plugin

# Description

Mit diesem Plugin können Sie Ihr Philips Hue-Ökosystem in Jeedom integrieren. Das Plugin bietet die Möglichkeit, bis zu 2 Philips Hue-Bridges gleichzeitig anzusteuern.

# Configuration

## Plugin Konfiguration

Wie jedes Jeedom-Plugin auch das Plugin **Philips Hue** muss nach der Installation aktiviert werden.

Sobald das Plugin aktiviert ist, müssen Sie die IP-Adresse eingeben, unter der Ihre Philips Hue Bridge erreichbar ist. Normalerweise sollte das Plugin Sie während der ersten Synchronisation auffordern, den Bridge-Button zu drücken.

>**TRICK**
>
>Sie können bis zu 2 Philips Hue-Brücken eingeben, die gleichzeitig mit Jeedom kommunizieren können.

Das Plugin **Philips Hue** verwendet einen eigenen Daemon, um in ständigem Kontakt mit den Philips Hue-Brücken zu bleiben. Sie können den Status auf der Plugin-Konfigurationsseite überprüfen.

>**INFORMATION**
>    
>Es ist normalerweise nicht erforderlich, den Daemon manuell zu starten, er wird automatisch vom Plugin verwaltet.

## Compatibilité

Sie finden [Hier](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=philipsHue) die Liste der Module, die mit dem Plugin kompatibel sind

## Gerätekonfiguration

Zugriff auf die verschiedenen Geräte **Philips Hue**, Gehe zum Menü **Plugins → Kommunikation → Philips Hue**.

>**INFORMATION**
>    
>Die Taste **+ Hinzufügen** Mit dieser Option können Sie neue Philips Hue-Geräte hinzufügen.

Wenn Sie auf ein Gerät klicken, das bereits in der Liste erstellt wurde, gelangen Sie zu dessen Konfigurationsseite :

- **Ausrüstungsname** : Name Ihrer Hue-Ausrüstung.
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
- **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören).
- **Aktivieren** : ermöglicht es, das Gerät aktiv zu machen.
- **Sichtbar** : macht das Gerät auf dem Armaturenbrett sichtbar.

- **Modell** : Geben Sie das Modell Ihrer Philips Hue-Ausrüstung ein.
- **Brücke** : Zeigt die Brücke an, an die das Gerät angeschlossen ist.
- **Immer an** : fordert Jeedom auf, die Lampe niemals als nicht erreichbar zu markieren.

>**WISSEN**
>
>Es wird immer ein Gerät mit dem Namen "Alle Lampen" geben, das der in allen Fällen vorhandenen Gruppe 0 entspricht.

Durch Klicken auf die zweite Registerkarte finden wir die Liste der Bestellungen :

- **Name** : Der im Dashboard angezeigte Name.
- **Symbol** : Mit dieser Option können Sie dem Befehl ein Symbol zuweisen.
- **Optionen** : Mit dieser Option können Sie bestimmte Befehle anzeigen oder ausblenden und / oder deren Werte protokollieren.
- **Die Einstellungen** : Ermöglicht das Definieren optionaler Parameter für die info / numerischen Befehle.
- **Erweiterte Konfiguration** *(Zahnrad)* : Zeigt das erweiterte Konfigurationsfenster des Befehls an.
- **Test** : Wird zum Testen des Befehls verwendet.
- **Taste -** : Mit dieser Option können Sie den Befehl löschen.


# Gruppe 0 (Alle Lampen)

Gruppe 0 kann nicht gelöscht oder geändert werden. Er kontrolliert notwendigerweise alle Lichter und es ist auch er, der die Szenen trägt.

In der Tat können Sie mit dem Philips Hue "Szenen" erstellen. Diese müssen unbedingt über die mobile Anwendung erfolgen (mit Jeedom nicht möglich)). Nach dem Hinzufügen einer Szene müssen Sie Jeedom unbedingt mit der Brücke synchronisieren *(einfach durch Speichern der Plugin-Konfiguration)*.

# Transition

Ein kleiner eigenartiger Befehl, der für die Verwendung in einem Szenario entwickelt wurde. Hiermit kann die Dauer des Übergangs zwischen dem aktuellen Status und dem nächsten Befehl in Sekunden festgelegt werden.

Zum Beispiel möchten Sie am Morgen den Sonnenaufgang in 3 Minuten simulieren. In Ihrem Szenario müssen Sie nur den Übergangsbefehl mit aufrufen ``180`` Rufen Sie im Parameter den Befehl color auf die gewünschte Farbe auf.

# Animation

Die Animationen sind Übergangssequenzen, derzeit gibt es :

- **Sonnenaufgang** : ermöglicht es Ihnen, einen Sonnenaufgang zu simulieren. Es kann als Parameter verwendet werden :
    - **Dauer** : Dauer einstellen, Standard 720s. Für 5 Minuten muss angegeben werden ``duration=300``.
- **Sonnenuntergang** : einen Sonnenuntergang simulieren. Es kann als Parameter verwendet werden :
    - **Dauer** : Dauer einstellen, Standard 720s. Für 5 Minuten muss angegeben werden ``duration=300``.
- **adaptive_beleuchtung** : Mit dieser Option können Sie die Farbtemperatur und -helligkeit mit der Sonne synchronisieren (sie ändern sich auch tagsüber). Achten Sie darauf, Ihren Breiten- / Längengrad in jeedom einzugeben

# Fernbedienungstaste

Hier ist die Liste der Codes für die Schaltflächen :

- 1002 für die Ein-Taste
- 2002 für den Erhöhungsknopf
- 3002 für die Minimierungstaste
- 4002 für die Aus-Taste

Das gleiche gilt für XXX0 für die gedrückte Taste, XXX1 für die gehaltene Taste und XXX2 für die freigegebene Taste.

Hier sind zum Beispiel die Sequenzen für die Schaltfläche Ein :

- Kurz drücken : Wenn gedrückt, gehen wir zu 1000 und wenn wir loslassen, gehen wir zu 1002
- Lange drücken : Während der Presse geben wir 1000 weiter, während der Presse geben wir 1001 weiter, wenn wir loslassen, geben wir 1002 weiter

# FAQ

> **Ich habe den Eindruck, dass es bei bestimmten Farben einen Unterschied zwischen dem, was ich verlange, und der Farbe der Glühbirne gibt.**
>
> Es sieht so aus, als ob das Farbraster der Glühbirnen einen Versatz hat. Wir suchen nach einer Korrektur.

> **Was ist die Bildwiederholfrequenz? ?**
>
> Das System ruft alle 2 Sekunden Informationen ab.

> **Meine Ausrüstung (Lampe, Schalter usw.) wird vom Plugin nicht erkannt ?**
>
> Du musst :
> - Beschreiben Sie die Ausrüstung, die wir hinzufügen sollen, mit Fotos und ihren Möglichkeiten und senden Sie uns das Debug-Protokoll der Synchronisation mit der Bridge, während Sie uns mit einer Supportanfrage kontaktieren

>**Ich habe die Historisierung eines Auftrags hinzugefügt, aber es funktioniert nicht**
>
>Bei Leistungsproblemen müssen Sie den Philips Hue-Dämon neu starten, damit diese Änderung berücksichtigt wird.

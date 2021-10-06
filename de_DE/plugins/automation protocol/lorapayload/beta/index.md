# LoraPayload-Plugin

Dieses Plugin ist ein Plugin, das es ermöglicht, LoraWan-Nutzlastbefehle zu verknüpfen und ein Gerät mit Befehlen zu erstellen, während die Werte analysiert werden.

# Configuration

## Plugin-Konfiguration

Sie können den Status der Abhängigkeiten hier überprüfen und neu starten. Bei Problemen mit dem Plugin immer die Abhängigkeiten neu starten, auch wenn im Zweifel OK.


# Das Plugin

Gehen Sie zum Menü Plugins / Protokoll, um das Plugin zu finden.

Auf dieser Seite sehen Sie die bereits enthaltenen Module.

Im oberen Teil dieser Seite haben Sie mehrere Schaltflächen

-   Schaltfläche hinzufügen : Ermöglicht das Hinzufügen von Ausrüstung
-   Konfigurationstaste : Diese Schaltfläche öffnet das Plugin-Konfigurationsfenster

# Equipement

Wenn Sie auf eines Ihrer Module klicken, gelangen Sie auf dessen Konfigurationsseite :

-   Geben Sie dem Modul einen Namen
-   Aktivieren / sichtbar machen oder nicht
-   Wählen Sie sein übergeordnetes Objekt
-   Weisen Sie ihm eine Kategorie zu

Auf der rechten Seite finden Sie :

-   Das Geräteprofil (vom Benutzer beim Anlegen manuell auszuwählen))
-   Sehen Sie sich das Bild an

Sie haben auch zwei zusätzliche Registerkarten:

-   Eine Registerkarte Nutzlast (beschrieben im nächsten Absatz)
-   Eine Registerkarte „Aufträge“ (hier finden Sie die Bedienelemente für Ihre Ausrüstung – diese Registerkarte ist Standard bei Jeedom)

# Ausrüstung hinzufügen

Klicken Sie einfach auf die Schaltfläche Hinzufügen und wählen Sie einen Namen.

Anschließend können Sie das übergeordnete Objekt konfigurieren, das Gerät aktivieren, eine oder mehrere Kategorien auswählen und das Gerät sichtbar machen oder nicht.

Auf der rechten Seite ist es wichtig, die Art der Ausrüstung zu wählen. So können Sie den Frame analysieren.

Die Registerkarte Payload ist sehr wichtig :

-   Sie müssen den info-Befehl auswählen, der die Nutzdaten empfängt (ob MQTT oder andere .))
-   Sie müssen wählen, ob das Nutzlastformat Hexadezimal oder Base64 ist


Sobald Sie fertig sind, können Sie speichern. Danach werden die Befehle für Ihr Gerät aktualisiert, wenn Sie das nächste Mal einen Frame erhalten


# FAQ

-   Einige Befehle werden nicht gleichzeitig mit anderen aktualisiert : Ja, einige Lorawan-Module senden nicht unbedingt alle Informationen gleichzeitig und mit der gleichen Häufigkeit




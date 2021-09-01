# Öffnen Sie das Enocean-Plugin

Dieses Plugin ist ein Plugin, das Enocean-Kompatibilität ermöglicht

# Configuration

## Plugin Konfiguration

> **Spitze**
>
> Um das Plugin verwenden zu können, müssen Sie es wie jedes Jeedom-Plugin herunterladen, installieren und aktivieren.

> **Wichtig**
>
> Das Wichtigste dabei ist, dass Sie Ihren USB-Controller auswählen (Sie können Auto auswählen, damit er für den Enocean USB300-Schlüssel funktioniert). Für jedes andere Modell ist es besser, es aus der Liste auszuwählen :

-   USB300 : EnOcean\_GmbH EnOean\_USB\_300\_DB
-   USB310 : FTDI FT232R\_USB\_UART
-   Jeedom Smart : ttyS1

Die andere auf dieser Seite verfügbare Option ist : **Ausgeschlossene Geräte automatisch löschen**. Dadurch werden Jeedom-Geräte entfernt, wenn sie ausgeschlossen sind.

Sie können auch den Status von Abhängigkeiten überprüfen und neu starten. Bei Problemen mit dem Plugin werden die Abhängigkeiten immer neu gestartet, auch wenn im Zweifelsfall OK.

## Compatibilité

Sie finden [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=openenocean) die Liste der Module, die mit dem Plugin kompatibel sind

# Das Plugin

Gehen Sie zum Menü Plugins / Protokoll, um das Plugin zu finden.

Auf dieser Seite sehen Sie die bereits enthaltenen Module.

Im oberen Teil dieser Seite befinden sich mehrere Schaltflächen (sichtbar, je nachdem, ob Sie sich im Expertenmodus befinden oder nicht)

-   Schaltfläche Hinzufügen : Ermöglicht das Hinzufügen bestimmter Module, die keine Vorstellungen von Pairing haben oder die das Senden von Befehlen von Jeedom erfordern
-   Einschlussschaltfläche : Mit dieser Schaltfläche können Sie Jeedom in Inclusion versetzen (in mehreren Modi ist derzeit nur der erste verfügbar)
-   Ausschlussschaltfläche : Mit dieser Schaltfläche können Sie Jeedom ausschließen
-   Konfigurationsschaltfläche : Diese Schaltfläche öffnet das Plugin-Konfigurationsfenster
-   Gesundheitstaste : Mit dieser Schaltfläche erhalten Sie einen Überblick über den Zustand aller Ihrer Module

# Equipement

Wenn Sie auf eines Ihrer Module klicken, gelangen Sie auf die Konfigurationsseite dieses Moduls :

-   Geben Sie dem Modul einen Namen
-   Aktivieren / sichtbar machen oder nicht
-   Wählen Sie Ihr übergeordnetes Objekt
-   Ordnen Sie eine Kategorie zu
-   Definieren Sie eine Kommunikationsüberwachungsverzögerung für bestimmte Module
-   Schreibe einen Kommentar

Auf der rechten Seite finden Sie :

-   Das Profil des Geräts (im Allgemeinen automatisch erkannt, wenn das Modul dies zulässt)
-   Wählen Sie ein Modell, wenn für dieses Profil mehrere Modelle verfügbar sind
-   Siehe das Bild

# Ausrüstung mit Konfiguration

Für einige Module ist es möglich, eine Schaltfläche zum Konfigurieren zu haben. Wenn Sie darauf klicken, gelangen Sie zu einer Seite, auf der Sie sie konfigurieren können

> **Wichtig**
>
> Hier müssen Sie nur alle Optionen auswählen und auf Übernehmen klicken. (Achtung : Dort werden alle Parameter gesendet, also validieren Sie das Ganze)

# Kompatibilitätsliste

Sie werden finden [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) eine Kompatibilitätsliste der Module mit ihrem Einschlussverfahren, wenn sie spezifisch sind.

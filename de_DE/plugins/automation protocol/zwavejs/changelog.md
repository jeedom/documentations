# Änderungsprotokoll Z-Wave JS

>**WICHTIG**
>
>Wenn es keine Informationen über die Aktualisierung gibt, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt.

# XX/11/2022

**Verbesserungen**

- Hinzufügen eines Bildmaterials für a *Parameter oder Wakeup* steht aus
- Hinzufügung einer Seite, auf der alle angezeigt werden können *die Einstellungen* steht aus
- Hinzufügen einer Webapp-Seite, auf der alle angezeigt werden können *die Einstellungen* steht aus
- Hinzufügen einer Schaltfläche zum Löschen auf der Seite *Ausstehend*. Ermöglicht das Löschen einer gehaltenen Leitung. Dies löscht nicht den Auftrag, der an den Controller gesendet wurde, sondern nur die in Jeedom anstehenden Informationen (nützlich für Kalibrierungsparameter zum Beispiel, die niemals den gesendeten Wert annehmen, oder andere Parameter, bei denen er unbrauchbar wäre)

# 21.11.2022

**Behebt**

- Wechsel am *grafische Netzwerke* : Nur die ersten direkten Routen werden rot, wenn Sie mit der Maus über einen Knoten fahren, um den Fehler bei bestimmten Installationen und bestimmten Browsern zu vermeiden *Maximale Stapelgröße überschritten* im Zusammenhang mit Rekursionen

**Verbesserungen**

- Zu berücksichtigen *refreshNodeCC* als Eigenschaft eines manuell erstellten Befehls zum Aktualisieren eines CC
- Ergänzung von a *horizontales Scrollen* auf dem Netzwerk modal/Tab *Routing-Tabelle* (Danke @Salvialf)
- Verschiebung von *Bestellschalter* auf der rechten Seite der Ausrüstungsseite

**Konfigurationsänderungen**

- Ändern der Konfiguration *Fibaro FGR223* um die Macht der Multilevel-Klasse zu nutzen
- Ändern der Konfiguration *Fibaro FGR222* um die Macht der Multilevel-Klasse zu nutzen
- Ändern der Konfiguration *Fibaro FGRM222* um die Macht der Multilevel-Klasse zu nutzen
- Ändern der Konfiguration *Devolo Mt02648* um Eigenschaften zu verwenden und empfohlene Einstellungen hinzuzufügen
- Ändern der Konfiguration *Devolo Mt02647* um Eigenschaften zu verwenden und empfohlene Einstellungen hinzuzufügen
- Ändern der Konfiguration *Popp Strike Lock* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec ZWA011* um die Eigenschaften zu verwenden und sein Bild hinzuzufügen

*Wenn Sie von einer seiner Konfigurationen betroffen sind, laden Sie nach dem Update die Befehle des Geräts neu, indem Sie "alle Befehle neu erstellen".*

# 18.11.2022

**Verbesserungen**

- Zugriff auf die Benutzeroberfläche von ZwaveJS hinzugefügt *(im Menü Z-Wave-Netzwerk, Registerkarte Aktionen)*. Verwenden Sie es nicht, um Einstellungen zu ändern!
- Hinzufügen eines Ports für den speziellen Fall einiger Raspberry Pi *(Weitere werden nach Bedarf hinzugefügt)*
- Befehlszähler für jede Ausrüstung hinzugefügt *(Ignorieren der 4 technischen Befehle)*
- Dynamische Hilfe bei Nullbefehlen hinzugefügt.

# 15.11.2022

- Wechseln Sie zur stabilen Version

# 04.05.2022

- Beta 1. Phase

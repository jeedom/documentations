# Änderungsprotokoll Jeedom V4.5

# 4.5

- Möglichkeit, die Größe von Tabellenspalten zu ändern (im Moment nur die Liste der Variablen, dies wird bei Bedarf auf andere Tabellen ausgeweitet)) [LINK](https://github.com/jeedom/core/issues/2499)
- Es wurde eine Warnung hinzugefügt, wenn der Jeedom-Speicherplatz zu gering ist (die Überprüfung erfolgt einmal täglich)) [LINK](https://github.com/jeedom/core/issues/2438)
- Dem Bestellkonfigurationsfenster im Wertberechnungsfeld wurde eine Schaltfläche zum Abrufen einer Bestellung hinzugefügt [LINK](https://github.com/jeedom/core/issues/2776)
- Möglichkeit, bestimmte Menüs für Benutzer mit eingeschränkten Rechten auszublenden [LINK](https://github.com/jeedom/core/issues/2651)
- Die Diagramme werden automatisch aktualisiert, wenn neue Werte eintreffen [LINK](https://github.com/jeedom/core/issues/2749)
- Jeedom fügt beim Erstellen von Widgets automatisch die Höhe des Bildes hinzu, um Überlappungsprobleme auf Mobilgeräten zu vermeiden [LINK](https://github.com/jeedom/core/issues/2539)
- Neugestaltung des Cloud-Backup-Teils [LINK](https://github.com/jeedom/core/issues/2765)
- **ENTW** Einrichten eines Warteschlangensystems zur Ausführung von Aktionen [LINK](https://github.com/jeedom/core/issues/2489)
- Szenario-Tags sind jetzt spezifisch für die Szenarioinstanz (wenn Sie zwei sehr nahe beieinander liegende Szenariostarts haben, überschreiben die Tags des letzten Szenarios nicht mehr das erste)) [LINK](https://github.com/jeedom/core/issues/2763)
- Wechseln Sie zum Auslöserteil der Szenarien : [LINK](https://github.com/jeedom/core/issues/2414)
  - ``triggerId()`` ist jetzt veraltet und wird in zukünftigen Kernaktualisierungen entfernt. Wenn ja ``triggerId() == 587`` es muss durch ersetzt werden ``#trigger_id# == 587``
  - ``triggerValue()`` ist jetzt veraltet und wird in zukünftigen Kernaktualisierungen entfernt. Wenn ja ``triggerValue() == 10`` es muss durch ersetzt werden ``#trigger_value# == 10``
  - ``#trigger#`` : Vielleicht :
    - ``api`` wenn der Start durch die API ausgelöst wurde,
    - ``TYPEcmd`` Wenn der Start durch einen Befehl ausgelöst wurde, wird TYPE durch die Plugin-ID ersetzt (z. B. virtualCmd),
    - ``schedule`` wenn es durch Programmierung gestartet wurde,
    - ``user`` wenn es manuell gestartet wurde,
    - ``start`` für einen Start beim Jeedom-Startup.
  - ``#trigger_id#`` : Wenn es sich um einen Befehl handelt, der das Szenario ausgelöst hat, nimmt dieses Tag den Wert der ID des Befehls an, der es ausgelöst hat
  - ``#trigger_name#`` : Wenn es sich um einen Befehl handelt, der das Szenario ausgelöst hat, nimmt dieses Tag den Wert des Namens des Befehls an (in der Form [Objekt][Ausrüstung][Befehl])
  - ``#trigger_value#`` : Wenn es sich um einen Befehl handelt, der das Szenario ausgelöst hat, übernimmt dieses Tag den Wert des Befehls, der das Szenario ausgelöst hat
  - ``#trigger_message#`` : Nachricht, die den Ursprung des Szenariostarts angibt
- Verbesserte Plugin-Verwaltung auf Github (keine Abhängigkeiten mehr von einer Drittanbieter-Bibliothek)) [LINK](https://github.com/jeedom/core/issues/2567)
- Entfernen des alten Cache-Systems. [LINK](https://github.com/jeedom/core/pull/2799)
- Möglichkeit, die Blöcke IN und A zu löschen, während auf ein anderes Szenario gewartet wird [LINK](https://github.com/jeedom/core/pull/2379)
- Ein Fehler in Safari bei Filtern mit Akzenten wurde behoben [LINK](https://github.com/jeedom/core/pull/2754)
- Ein Fehler bei der Informationsgenerierung wurde behoben *generischer Typ* in den Szenarien [LINK](https://github.com/jeedom/core/pull/2806)
- Bestätigung hinzugefügt, wenn der Support-Zugriff über die Benutzerverwaltungsseite geöffnet wird [LINK](https://github.com/jeedom/core/pull/2809)
- Das Cron-System wurde verbessert, um einige Startfehler zu vermeiden [LINK](https://github.com/jeedom/core/commit/533d6d4d508ffe5815f7ba6355ec45497df73313)
- Hinzufügung von Bedingungsszenarien zum Bedingungsassistenten *größer oder gleich* Und *kleiner oder gleich* [LINK](https://github.com/jeedom/core/issues/2810)
- Möglichkeit, Aufträge von der Dead-Order-Analyse auszuschließen [LINK](https://github.com/jeedom/core/issues/2812)
- Ein Fehler bei der Nummerierung der Zeilenanzahl in Tabellen wurde behoben [LINK](https://github.com/jeedom/core/commit/0e9e44492e29f7d0842b2c9b3df39d0d98957c83)
- Openstreetmap hinzugefügt.org in externen Domänen standardmäßig erlaubt [LINK](https://github.com/jeedom/core/commit/2d62c64f0bd1958372844f6859ef691f88852422)
- Automatische Aktualisierung der Apache-Sicherheitsdatei beim Aktualisieren des Kerns [LINK](https://github.com/jeedom/core/issues/2815)
- Eine Warnung zu Ansichten wurde behoben [LINK](https://github.com/jeedom/core/pull/2816)
- Ein Fehler beim Standard-Widget-Auswahlwert wurde behoben [LINK](https://github.com/jeedom/core/pull/2813)
- Es wurde ein Fehler behoben, bei dem der Wert auf 0 (anstelle von Min/Max) geändert wurde, wenn ein Befehl seine Mindest- oder Höchstgrenze überschritt) [LINK](https://github.com/jeedom/core/issues/2819)
- Ein Fehler bei der Anzeige des Einstellungsmenüs in bestimmten Sprachen wurde behoben [LINK](https://github.com/jeedom/core/issues/2821)
- Möglichkeit in den programmierten Auslösern der Szenarien, Berechnungen/Befehle/Tags/Formeln zu verwenden, die als Ergebnis die Startzeit in der Form Gi (Stunden ohne Anfangsnull und Minuten) ergeben, Beispiel für 9:15 Uhr => 915 oder für 11:40 Uhr => 2340) [LINK](https://github.com/jeedom/core/pull/2808)
- Möglichkeit, in den Plugins ein personalisiertes Bild für das Gerät einzufügen (sofern das Plugin dies unterstützt), dies erfolgt in der erweiterten Konfiguration des Geräts [LINK](https://github.com/jeedom/core/pull/2802) [LINK](https://github.com/jeedom/core/pull/2852)
- Hinzufügen des Namens des Benutzers, der das Szenario gestartet hat, zum Tag ``#trigger_value#`` [LINK](https://github.com/jeedom/core/pull/2382)
- Es wurde ein Fehler behoben, der auftreten konnte, wenn das Dashboard verlassen wurde, bevor der Ladevorgang abgeschlossen war [LINK](https://github.com/jeedom/core/pull/2827)
- Ein Fehler auf der Ersetzungsseite beim Filtern nach Objekten wurde behoben [LINK](https://github.com/jeedom/core/issues/2833)
- Verbessertes Öffnen des Core-Changelogs unter iOS (nicht mehr in einem Popup)) [LINK](https://github.com/jeedom/core/issues/2835)
- Verbessertes Fenster zur erweiterten Widget-Erstellung [LINK](https://github.com/jeedom/core/pull/2836)
- Das erweiterte Befehlskonfigurationsfenster wurde verbessert [LINK](https://github.com/jeedom/core/pull/2837)
- Ein Fehler bei der Widget-Erstellung wurde behoben [LINK](https://github.com/jeedom/core/pull/2838)
- Es wurde ein Fehler auf der Szenarioseite und im Fenster zum Hinzufügen von Aktionen behoben, der nicht mehr funktionieren konnte [LINK](https://github.com/jeedom/core/issues/2839)
- Es wurde ein Fehler behoben, der die Reihenfolge der Befehle beim Bearbeiten des Dashboards ändern konnte [LINK](https://github.com/jeedom/core/issues/2841)
- Ein Javascript-Fehler in Protokollen wurde behoben [LINK](https://github.com/jeedom/core/issues/2840)
- Sicherheit für die JSON-Codierung in Ajax hinzugefügt, um Fehler aufgrund ungültiger Zeichen zu vermeiden [LINK](https://github.com/jeedom/core/commit/0784cbf9e409cfc50dd9c3d085c329c7eaba7042)
- Wenn ein Gerätebefehl vom generischen Typ „Batterie“ ist und die Einheit „%“ hat, ordnet der Kern automatisch den Batteriestand des Geräts dem Wert des Befehls zu [LINK](https://github.com/jeedom/core/issues/2842)
- Verbesserung von Texten und Korrektur von Fehlern [LINK](https://github.com/jeedom/core/pull/2834)
- Bei der Installation von NPM-Abhängigkeiten wird der Cache vorher bereinigt [LINK](https://github.com/jeedom/core/commit/1a151208e0a66b88ea61dca8d112d20bb045c8d9)
- Es wurde ein Fehler bei 3D-Plänen behoben, der die Konfiguration vollständig blockieren konnte [LINK](https://github.com/jeedom/core/pull/2849)
- Ein Fehler im Protokollanzeigefenster wurde behoben [LINK](https://github.com/jeedom/core/pull/2850)
- Möglichkeit, den Apache-Listening-Port im Docker-Modus auszuwählen [LINK](https://github.com/jeedom/core/pull/2847)
- Beim Speichern in der Ereignistabelle wurde eine Warnung behoben [LINK](https://github.com/jeedom/core/issues/2851)
- Hinzufügen eines Anzeigenamens für Objekte [LINK](https://github.com/jeedom/core/issues/2484)
- Eine Schaltfläche hinzugefügt, um Historien und Ereignisse in Zukunft aus der Zeitleiste zu löschen [LINK](https://github.com/jeedom/core/issues/2415)
- Ein Problem mit Befehlen zur Typauswahl in Designs wurde behoben [LINK](https://github.com/jeedom/core/issues/2853)
- Möglichkeit der Anzeige, dass das Gerät keine Batterie hat (im Falle einer schlechten Wiederherstellung)) [LINK](https://github.com/jeedom/core/issues/2855)
- Neugestaltung des Schreibens in Protokollen, Entfernung der Monolog-Bibliothek (beachten Sie, dass die Option zum Senden von Protokollen im Syslog derzeit nicht mehr verfügbar ist. Bei hoher Nachfrage werden wir versuchen, sie wieder einzuführen) [LINK](https://github.com/jeedom/core/pull/2805)
- Bessere Verwaltung der Plugin-Sublog-Protokollebenen [LINK](https://github.com/jeedom/core/issues/2860)
- Durch das Löschen des Vendor-Ordners (mit Composer auf normale Weise) können Sie die Größe des Kerns reduzieren [LINK](https://github.com/jeedom/core/commit/3aa99c503b6b1903e6a07b346ceb4d03ca3c0c42)
- Widgetspezifische Einstellungen können jetzt übersetzt werden [LINK](https://github.com/jeedom/core/pull/2862)
- Ein Fehler auf dem Mac bei Designs beim Rechtsklick wurde behoben [LINK](https://github.com/jeedom/core/issues/2863)
- Ajout de widget badge pour les commandes de type texte [LINK](https://github.com/jeedom/core/issues/2864)
- Verbesserung des Systems zum Starten programmierter Szenarien [LINK](https://github.com/jeedom/core/issues/2875)
- Verbesserte Ausnahmefehlermeldungen, wenn die Protokollebene Debug ist [LINK](https://github.com/jeedom/core/issues/2886)
- Auf der Ersatzseite besteht die Möglichkeit, die Deaktivierung des Geräts zu beantragen [LINK](https://github.com/jeedom/core/issues/2893)
- Bei einem Update berücksichtigt das Forward-Backup nun Plugin-Ausschlüsse [LINK](https://github.com/jeedom/core/commit/22aa19b85028b0de6f7d3028ae0424d4f238f7df)
- Wenn sich ein Plugin in der Beta-Phase befindet, aber kein Beta-Änderungsprotokoll hat, kehrt das Update-Center zum stabilen Änderungsprotokoll zurück [LINK](https://github.com/jeedom/core/commit/2af7b0a4d8680f68810cf9d07c657c51fe9e40bd)
- Es wurde eine Warnung hinzugefügt, wenn die Debian-Version 10 oder niedriger ist [LINK](https://github.com/jeedom/core/issues/2912)
- Fehler bei der DB-Aktualisierung in der Cache-Tabelle behoben [LINK](https://github.com/jeedom/core/commit/a21f3498195f0003c5ead7cd5e8589f1c77c1c06)
- Wenn die Geräteseite über ein img_device-Element (img-Typ-Tag) verfügt, kann der Kern selbst die URL konfigurieren, um das richtige Gerätebild anzuzeigen (unter Verwendung des Bildes der Präsentationsseite aller Plugin-Geräte)) [LINK](https://github.com/jeedom/core/commit/07708ba4cbed982af968919dac3e406707867417)
- Ein Fehler mit der Funktion time_diff wurde behoben [LINK](https://github.com/jeedom/core/issues/2915)
- Fehlerbehebung bei der Composer-Abhängigkeitsverwaltung [LINK](https://github.com/jeedom/core/issues/2920)
- Im Falle eines leeren Befehls erzwingt Jeedom die Rückgabe entsprechend dem Untertyp des Befehls (also 0 für numerisch und binär)) [LINK](https://github.com/jeedom/core/commit/442d47246373e4f52b1dde7d1c7fdc9f67ea143e)
- Unterstützung für benutzerdefinierte Typereignisse #pluginClass::*# Oder #pluginClass::customId# [LINK](https://github.com/jeedom/core/pull/2964)
- Zusätzlich zu der Schaltfläche oben rechts wurde der Zeile „Kern“ eine Schaltfläche „Aktualisieren“ hinzugefügt [LINK](https://github.com/jeedom/core/pull/2974)
- Korrigieren Sie den Bildschirm „Paket“ auf Python2-Paketebene [LINK](https://github.com/jeedom/core/pull/2973)
- Ein Fehler beim Aktualisieren der Ausrüstung auf der Batterieseite wurde behoben [LINK](https://github.com/jeedom/core/pull/3008)
- La vérification de la connexion réseau est désormais effectuée de manière aléatoire toutes les 10 minutes afin d'éviter que toutes les box Jeedom ne tentent de se reconnecter simultanément en cas de microcoupure.
- Correction du système de file d'attente sur la partie DB [LINK](https://github.com/jeedom/core/pull/3051).

>**WICHTIG**
>
> Aufgrund der Überarbeitung der Protokolle und der Reinternalisierung der Bibliotheken kann es beim Update zu einem Standardfehler kommen ``PHP Fatal error`` (nichts Ernstes) Starten Sie einfach das Update neu.

>**WICHTIG**
>
> Wiederherstellen eines Backups 4.4 kann in einigen Fällen zu Fehlern in der Weboberfläche führen. Rien de grave cela peut facilement se corriger il suffit de faire : `cd /tmp;wgUnd https://github.com/jeedom/core/archive/refs/tags/4.4.19.zip;unzip 4.4.19.zip;cd core-4.4.19;cp -rf * /var/www/html/;rm -rf /tmp/master.zip;rm -rf /tmp/core-4.4.19;`. Sie können diesen Befehl über die Jeedom-Rettungsschnittstelle ausführen (fügen Sie „&rescue=1“ in der URL hinzu) oder direkt über ssh.

# Shutter Management Plugin

Das Plugin **Verwaltung von Rollläden** ermöglicht es Ihnen, die automatische Positionierung Ihrer Rollläden entsprechend der Höhe und dem Azimut der Sonne und / oder anderen Bedingungen Ihrer Wahl zu verwalten. Alle Berechnungen werden direkt vom Plugin durchgeführt, ohne dass eine Internetverbindung erforderlich ist.

Gut verstanden, kann dieses Plugin alle Szenarien zum Öffnen, Schließen oder Positionieren Ihrer Rollläden ersetzen. Ein Anwendungsbeispiel finden Sie unter [dieser Blogartikel von Loïc](https://www.jeedom.com/blog/?p=4310){:Ziel = "\_ leer"}.

>**Wichtig**
>
>Das Plugin **Verwaltung von Rollläden** funktioniert nur mit Geräten, die **ein Aktions-/Cursor-Befehl** erlauben **Positionieren Sie den Rollladen auf einen bestimmten Öffnungs- / Schließprozentsatz**. Wenn Ihr Rollladen nur beim Öffnen / Schließen funktioniert, ist das Plugin nicht verwendbar.

# Configuration

Das Plugin **Verwaltung von Rollläden** muss nach der Installation nur aktiviert werden und erfordert keine weitere Konfiguration.

## Konfiguration der Rollläden

Um auf die verschiedenen Geräte von . zuzugreifen **Verwaltung von Rollläden**, du musst ins menü gehen **Plugins → Automatisierung → Rollladenverwaltung**.

>**INFORMATION**
>    
>Die Taste **+ Hinzufügen** ermöglicht es Ihnen, einen neuen Verschluss hinzuzufügen, um ihn zu automatisieren.

Die gesamte Automatisierungskonfiguration für jede Komponente wird von der ersten Registerkarte des Geräts aus durchgeführt :

- **Komponentenname** : Name der Ausrüstung.
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
- **Kategorie** : Ermöglicht die Auswahl der Gerätekategorie.
- **Optionen** :
    - **Aktivieren** : Wird verwendet, um die Ausrüstung zu aktivieren.
    - **Sichtbar** : Ausrüstung sichtbar machen.

Im Folgenden können wir die automatische Management-Engine selbst konfigurieren :

- **Bedingung für die Verifizierung** : Voraussetzung für die Aktivierung der automatischen Verwaltung. Wenn diese Bedingung nicht zutrifft, ändert das Plugin die Position des Fensters nicht *(standardmäßig leer = immer aktiv)*.
- **Häufigkeit der Überprüfung** : Häufigkeit der Prüfung von Ausnahmen und Positionierungsbedingungen.
- **Gewinnen Sie die Kontrolle zurück** : Autorisieren Sie das automatische Managementsystem, die Position des Rollladens zu ändern, wenn er manuell bedient wurde.
>*Beispiel : das System schließt den Rollladen, dann öffnen Sie ihn einige Minuten später manuell, dann wird die automatische Verwaltung nur durchgeführt, wenn **Gewinnen Sie die Kontrolle zurück** ist um "**Ja**" oder dass die Erholungszeit abgelaufen ist oder dass die Bestellung **Geschäftsführung übernehmen** wird ausgelöst.*

- **Fortsetzen bei Moduswechsel** : Aktivieren Sie das Kontrollkästchen, um die automatische Verwaltung bei einer Änderung des Modus fortzusetzen.
- **Sofortiges Handeln mit Priorität** : Aktivieren Sie das Kontrollkästchen, damit sofortige Aktionsausnahmen unabhängig von anderen Bedingungen ausgeführt werden, auch wenn sie ausgesetzt sind.

>**Wichtig**
>
>Die hier erwähnten "Modi" beziehen sich auf die auf der Registerkarte definierten Modi **Befehle** von jedem Plugin-Equipment **Rollladenmanagement** und beziehen sich in keiner Weise auf Plugin-Modi **Modus**.

Anschließend müssen die Koordinaten des Gebäudes angegeben werden, um den Sonnenstand berechnen zu können :

- **Allgemeine Konfiguration verwenden** : Aktivieren Sie das Kontrollkästchen, um die in der allgemeinen Konfiguration von Jeedom . eingegebenen Kontaktdaten zu verwenden.

ou

- **Breite** : Der Breitengrad des Gebäudes oder Fensterladens.
- **Länge** : Der Längengrad des Gebäudes oder Fensterladens.
- **Höhe** : Die Höhe des Gebäudes oder Fensterladens.

Schließlich müssen nur noch die Informationen zur Steuerung des Verschlusses eingegeben werden :

- **Abschluss- / Eröffnungsprozentsätze** : Geben Sie den Mindestprozentsatz der Schließung an *(normalerweise 0)* und maximale Öffnung *(normalerweise 99 oder 100)*.
- **Dauer einer Reise** : Maximale Zeit in Sekunden, um eine vollständige Öffnungs- oder Schließbewegung auszuführen.
- **Statusbefehl** : Geben Sie die Info / den numerischen Befehl ein, der die aktuelle Position des Rollladens angibt.
- **Positioniersteuerung** : Geben Sie den Aktions-/Cursorbefehl ein, der verwendet wird, um den Rollladen zu positionieren.
- **Befehl aktualisieren** : Füllen Sie den Aktionsbefehl aus, um die Position des Rollladens zu aktualisieren *(facultatif)*.
- **Standardaktion** : Aktion, die standardmäßig ausgeführt wird, wenn keine Ausnahme oder Position gültig ist.

![Konfiguration](../images/sunshutter_eqLogicConfig.png)

# Exceptions

Auf dieser Registerkarte können Sie spezifische Regeln definieren, die von den Bedingungen in Bezug auf den Sonnenstand in der folgenden Registerkarte abweichen. Die Regeln werden nacheinander überprüft, die automatische Management-Engine stoppt bei der ersten gültigen Regel und bringt den Rollladen in die angegebene Position.

- **Zustand** : Die Bedingung, die erfüllt sein muss, damit die Regel gültig ist *(facultatif)*.
- **Modus** : Bei Eingabe ist die Bedingung nur gültig, wenn sich der Rollladen derzeit im angegebenen Modus befindet. Es ist möglich, mehrere Modi anzugeben, indem Sie sie durch Kommas trennen *(facultatif)*.
- **Sofortige Ausnahme** : Aktivieren Sie das Kontrollkästchen, damit die Regel sofort ausgeführt wird, sobald die Bedingung gültig ist. Bitte beachten Sie, dass dies nur funktioniert, wenn sich der Status der Befehle ändert. Wenn Sie zum Beispiel „#hour# == 1022` Die sofortige Ausnahme wird nicht funktionieren. Das Gleiche gilt für Variablen.
- **Anhalten** : Aktivieren Sie das Kontrollkästchen, um die automatische Verwaltung auszusetzen, solange die Regel gültig ist.
- **Position** : Die gewünschte Position in Prozent, wenn die Regel gültig ist *(leer = keine Aktion)*.
- **Etikett** : Label, das mit der Validierung der Ausnahmeregel verknüpft ist *(facultatif)*.

![Ausnahmen](../images/sunshutter_exceptions.png)

# Positionnement

Auf dieser Registerkarte können Sie die Positionierung des Rollladens automatisch entsprechend dem Sonnenstand verwalten.

- **Zustand** : Zu der Position komplementäre Bedingung, die erfüllt sein muss, damit die Positionierung des Rollladens validiert wird *(facultatif)*.
- **Azimut** : Geben Sie die Azimutgrenzen der Sonne in Grad ein, zwischen denen die Bedingung gültig ist.
- **Höhe** : Geben Sie die Sonnenhöhengrenzen in Grad ein, zwischen denen die Bedingung gültig ist.
- **Position** : Die gewünschte Position in Prozent, wenn die Positionierungsbedingungen (und ggf. zusätzliche) gültig sind.
- **Etikett** : Label verbunden mit der Validierung der Positionierungsbedingung *(facultatif)*.

![Conditions](../images/sunshutter_conditions.png)

>**TIPP**
>
>Der Standort [suncalc.org](https://www.suncalc.org){:target = "\_ blank"} ermöglicht, nach Eingabe Ihrer Adresse, die Position der Sonne und die Azimut- und Elevationswinkel entsprechend den Tagesstunden zu visualisieren *(zieh einfach die kleine sonne hoch)*.

# Programmation

Diese Registerkarte erscheint nur, wenn das Plugin **Agenda** ist auf Ihrem Jeedom installiert. Es listet die Programmierung des Plugins auf **Agenda** auf die automatische Verwaltung dieser Komponente einwirken, um beispielsweise eine Unterbrechung und eine manuelle Wiederaufnahme während der Mittagsschlafzeiten eines Kindes zu planen.

# Commandes

Diese letzte Registerkarte ermöglicht den Zugriff auf die Liste der Befehle und ermöglicht das Definieren / Löschen von Modi für die automatische Verwaltung des Rollladens :

- **Sonnenazimut** : Aktueller Azimutwinkel der Sonne.
- **Sonnenaufgang** : Aktueller Elevationswinkel der Sonne.
- **Aktualisieren** : Aktualisierung von Bestellungen erzwingen **Sonnenazimut** und **Sonnenaufgang**.
>Es ist natürlich möglich, die Werte der Befehle zu verwenden **Azimut Sonne** und **Sonnenaufgang** anderswo in Jeedom.

- **Managementstatus** : Aktueller Stand der automatischen Verwaltung in Binär *(0 = gesperrt / 1 = aktiv)*.
- **Aktion erzwingen** : Erzwingen Sie die Berechnung der Rollladenposition gemäß dem Sonnenstand und den Ausnahmen und wenden Sie die Positionierung unabhängig vom Status der automatischen Steuerung an *(suspendiert oder nicht)*.
- **Letzte Position** : Letzte vom Plugin vom Verschluss angeforderte Position.
- **Etikett** : Label, das einer Ausnahme oder einer gültigen Positionierungsbedingung entspricht.
- **Anhalten** : Unterbricht die automatische Rollladenverwaltung.
- **Aussetzen (Label)** : Aktueller Stand der automatischen Rollladenmanagement Aussetzung *(Keine / Manuell / Auto)*.
- **Zusammenfassung** : Neustart der automatischen Verwaltung erzwingen.
>Dies ist der Befehl, der ausgeführt werden muss, um zur automatischen Steuerung zurückzukehren, wenn Sie die Position Ihres Rollladens manuell geändert und konfiguriert haben **Gewinnen Sie die Kontrolle zurück** beim "**Nein**".

- **Modus** : Aktueller Verschlussmodus.

Der blaue Knopf **Einen Modus hinzufügen** ermöglicht es Ihnen, einen neuen Aktionsbefehl hinzuzufügen, dessen Name dem neuen aktuellen Modus ab dem Moment entspricht, in dem er ausgeführt wird.

>**TIPP**
>
>Sie können beispielsweise einen Modus definieren **Tag** und ein Modus **Nacht** und passen Sie das Öffnen und Schließen Ihres Verschlusses gemäß diesen 2 Modi an.

# Santé

Das Plugin **Verwaltung von Rollläden** hat ein fenster **Die Gesundheit**, auf der Seite „Allgemeine Ausrüstung“, auf der Sie die Konfigurationen der einzelnen automatischen Verwaltungen auf einen Blick sehen können.

# Panel

Das Plugin verfügt auch über ein Management-Panel, das sowohl in der Desktop- als auch in der mobilen Version verfügbar ist. Um es zu aktivieren, gehen Sie einfach zu **Plugins → Plugin-Verwaltung**, klicke auf das Plugin **Rollladenmanagement** und aktivieren Sie die Kontrollkästchen, um die Panels unten rechts anzuzeigen.

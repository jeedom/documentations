# Zipato miniKeypad RFID

**Das Modul**

![module](images/zipato.minikeypad/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/zipato.minikeypad/vuedefaut1.jpg)

## Zusammenfassung

Steuern Sie Ihr Sicherheitssystem mit dieser Mini-Zipato-Wandtastatur !

Mit dieser Z-Wave-kompatiblen RFID-Tastatur können Sie Ihr Alarmsystem einfach aktivieren oder deaktivieren. Mit den Tasten "Home" und "Away" können Sie das Sicherheitssystem aktivieren / deaktivieren und / oder Hausautomationsszenarien schnell ausführen. Zusätzlich zur Verwendung des Ziffernblocks können Sie auch ein RFID-Emblem vor der Tastatur anbringen, um das System zu aktivieren / deaktivieren. Die Tastatur überträgt die Kennung des erkannten Ausweises an Ihren Hausautomationscontroller. Auf diese Weise können Sie ganz einfach Szenarien erstellen, die der Person entsprechen, die sein Abzeichen verwendet hat.

## Funktionen

-   Code- und RFID-Tastatur
-   Unterstützt die Z-Wave-Technologie
-   Aktivieren / deaktivieren Sie Ihr Sicherheitssystem
-   Zugangskontrolle durch Lesen von RFID-Ausweisen
-   Zugangskontrolle über die Codetastatur
-   Manipulationsschutz
-   LED-Anzeige zur Bestätigung jeder Aktion
-   Integrierter Summer zum Beispiel zur akustischen Anzeige der Alarmschaltung / -entschaltung

## Technische Daten

-   Typ : Z-Wave-Slave
-   Versorgung : 2x AA 1,5V Batterien
-   Frequenz : 868.42 MHz
-   Funkreichweite : 30m auf freiem Feld
-   RFID-Protokoll : ISO15693, ISO18000-3, Tag-it ™, RFID
-   Summer : 60 dBa in 10 cm Entfernung
-   Lagertemperatur : -5 ° C bis + 65 ° C
-   Luftfeuchtigkeit zur Lagerung : 10% bis 70%
-   Betriebstemperatur : 10 ° C bis 40 ° C
-   Betriebsfeuchtigkeit : 30% bis 80%
-   Abmessungen : 62 x 62 x 20 mm
-   Zertifizierungen : Sicherheit : UL EMC : FCC, CE RoHS

## Moduldaten

-   Machen Sie : Zipato
-   Name : Zipato Mini Keypad RFID
-   Hersteller ID : 151
-   Produkttyp : 24881
-   Produkt-ID : 17665

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie einfach zwei Sekunden lang auf die Metalllasche (die rote LED auf der Vorderseite muss zweimal blinken) und lassen Sie die Lasche los, damit der Einschluss erfolgt.

![inclusion](images/zipato.minikeypad//inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![information](images/zipato.minikeypad/information.jpg)

### Befehle

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![commandes](images/zipato.minikeypad/commandes.jpg)

Hier ist die Liste der Befehle :

-   Aktion : Es ist der Befehl, der nach Hause / weg geht (5 für weg 6 für zu Hause)
-   Sabotage : Dies ist der Sabotagebefehl (er wird im Falle eines Reißens ausgelöst)
-   Code : Zeigt den Ausweis- oder Tastaturcode an, wenn sich der eingegebene Code nicht in einem der Speicher befindet
-   Batterie : Es ist der Batteriebefehl

### Konfiguration du module

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![bouton configuration](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![config1](images/zipato.minikeypad/config1.jpg)

Parameterdetails :

-   1: Ermöglicht das Zurücksetzen der Standardkonfiguration (nicht empfohlen))
-   2: Widerrufsfrist (nicht zu ändern)
-   3: Rückkehr per Piepton : Ermöglicht das Aktivieren oder Nicht-Aktivieren einer Reihe von 8 Signaltönen nach Erkennung eines Ausweises / Codes
-   4: Anzahl der Pieptöne pro Sekunde (nicht ändern hat keine Auswirkung)
-   5: Betriebsart : normaler oder immer wacher Modus (nicht empfohlen, da sehr, sehr batterieintensiv)

### Gruppen

Dieses Modul hat zwei Zuordnungsgruppen.

![groupe](images/zipato.minikeypad/groupe.jpg)

> **Wichtig**
>
> Für einen optimalen Betrieb Ihres Moduls. Jeedom muss mindestens der Gruppe 1 zugeordnet sein.

### Abzeichen / Codes

Auf der Ausrüstungsseite befindet sich eine Registerkarte Assistent.

![bouton assistant](images/plugin/bouton_assistant.jpg)

Auf diese Weise können Sie Codes hinzufügen. Dort sehen Sie eine Tabelle.

![config2](images/zipato.minikeypad/config2.jpg)

-   In dieser Tabelle können Sie die auf Ihrer Tastatur belegten Speicher anzeigen
-   Um einen neuen Code zu registrieren, klicken Sie auf die grüne Schaltfläche im gewünschten Speicher und befolgen Sie die Schritte
-   Um einen Code zu löschen, klicken Sie einfach auf die rote Schaltfläche.
-   Es ist unmöglich, denselben Code / dasselbe Abzeichen in zwei verschiedenen Speichern zu speichern
-   Es ist (aus Sicherheitsgründen) unmöglich, den Wert eines registrierten Codes zu lesen

> **Wichtig**
>
> Denken Sie daran, das Modul nach dem Hinzufügen eines Codes oder Ausweises zu aktivieren.

## Anwendungsbeispiele

![exemple](images/zipato.minikeypad/exemple.jpg)

Der Auslöser ist der Ereignisbefehl. Tatsächlich wird er nur aktualisiert, wenn ein gültiger Code / Ausweis vorgelegt wurde. Wenn der Wert 6 (home) ist, deaktivieren wir den Alarm (zum Beispiel) oder schalten die Steckdosenleiste ein, schalten das Licht je nach Helligkeit ein, senden eine Benachrichtigung, um zu signalisieren, dass jemand zurückgekehrt ist, und starten eine Synhtese Stimme, um zum Beispiel einen Wetterbericht zu machen. Andernfalls (unbedingt 5) aktivieren wir den Alarm, schneiden die Steckdosenleiste ab und senden eine Benachrichtigung, um zu signalisieren, dass das Haus leer ist.

## Gut zu wissen

### Besonderheiten

Die Tastatur liest Codes / Ausweise auf zwei Arten :

-   Wenn Sie die ersten 1 bis 2 Sekunden auf Home / Away drücken und einen Code eingeben, wird dieser Code gelesen
-   Wenn innerhalb der ersten 1 bis 2 Sekunden nichts unternommen wird, wechselt es in den RFID-Ausweislesemodus (rotes Licht leuchtet)). Zu dieser Zeit kann er ein Abzeichen lesen, nicht vorher.

## Aufwachen

Um dieses Modul zu aktivieren, gibt es zwei Möglichkeiten :

-   Drücken Sie die Sabotagetaste und lassen Sie sie nach 1 bis 2 Sekunden los
-   Drücken Sie Home, eine Zufallszahl und die Eingabetaste

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufwachens, nach einer Änderung der Assoziationsgruppen

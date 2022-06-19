# Zipato miniKeypad RFID

**Das Modul**

![module](images/zipato.minikeypad/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/zipato.minikeypad/vuedefaut1.jpg)

## Zusammenfassung

Steuern Sie Ihr Sicherheitssystem mit dieser Mini-Wandtastatur von Zipato !

Mit dieser Z-Wave-kompatiblen RFID-Tastatur können Sie Ihr Alarmsystem einfach aktivieren oder deaktivieren. Mit den Tasten „Zuhause“ und „Abwesend“ können Sie das Sicherheitssystem aktivieren/deaktivieren und/oder Hausautomatisierungsszenarien schnell ausführen. Zusätzlich zur Verwendung des numerischen Tastenfelds können Sie auch ein RFID-Tag vor das Tastenfeld ziehen, um das System zu aktivieren/deaktivieren. Die Tastatur übermittelt die Kennung des erkannten Ausweises an Ihren Home-Automation-Controller. Sie können ganz einfach Szenarien basierend auf der Person erstellen, die ihren Ausweis verwendet hat.

## Fonctions

-   Tastatur und RFID
-   Unterstützung der Z-Wave-Technologie
-   Aktivieren/deaktivieren Sie Ihr Sicherheitssystem
-   Zutrittskontrolle durch Auslesen von RFID-Badges
-   Zugangskontrolle über Codetastatur
-   Manipulationsschutz
-   LED-Anzeige zur Bestätigung jeder Aktion
-   Eingebauter Summer zur akustischen Anzeige von z. B. Scharf-/Unscharfschaltung des Alarms

## Technische Eigenschaften

-   Nett : Z-Wave-Sklave
-   Einspeisung : 2x AA 1,5V Batterien
-   Frequenz : 868.42MHz
-   Kabellose Reichweite : 30m auf freiem Feld
-   RFID-Protokoll : ISO15693, ISO18000-3, Tag-it™, RFID
-   Summer : 60dBa bei 10cm Abstand
-   Lagertemperatur : -5 °C bis +65 °C
-   Feuchtigkeit für die Lagerung : 10 % bis 70 %
-   Betriebstemperatur : 10 °C bis 40 °C
-   Betriebsfeuchtigkeit : 30 % bis 80 %
-   Maße : 62 x 62 x 20 mm
-   Zertifikate : Sicherheit : UL-EMV : FCC, CE-RoHS

## Moduldaten

-   Markieren : Zipato
-   Nachname : Zipato Mini-RFID-Tastatur
-   Hersteller-ID : 151
-   Geben Sie Produkt ein : 24881
-   Produkt ID : 17665

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie einfach zwei Sekunden lang auf die Metalllasche (die rote LED auf der Vorderseite sollte zweimal blinken) und lassen Sie die Lasche los, damit die Inklusion stattfinden kann.

![inclusion](images/zipato.minikeypad//inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![information](images/zipato.minikeypad/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![commandes](images/zipato.minikeypad/commandes.jpg)

Hier ist die Liste der Befehle :

-   Aktie : Dies ist der Befehl, der Heim/Auswärts erhöht (5 für Auswärts, 6 für Heim)
-   Sabotage : das ist der Sabotagebefehl (wird bei Reißen ausgelöst)
-   Codiert : zeigt den Badge- oder Tastaturcode an, wenn sich der eingegebene Code nicht in einem der Speicher befindet
-   Batterie : Dies ist der Batteriebefehl

### Modulkonfiguration

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![bouton configuration](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![config1](images/zipato.minikeypad/config1.jpg)

Parameterdetails :

-   1: ermöglicht Ihnen, die Standardkonfiguration wiederherzustellen (nicht empfohlen)
-   2: Kündigungsfrist (nicht änderbar)
-   3: Rückkehr durch Piepton : ermöglicht es Ihnen, eine Reihe von 8 Pieptönen nach Erkennung eines Ausweises/Codes zu aktivieren oder zu deaktivieren
-   4: Anzahl der Pieptöne pro Sekunde (es unverändert zu lassen hat keine Auswirkung)
-   5: Betriebsart : Normal- oder Immer-Wach-Modus (nicht empfohlen, da sehr viel Batterie verbraucht)

### Groupes

Dieses Modul hat zwei Assoziationsgruppen.

![groupe](images/zipato.minikeypad/groupe.jpg)

> **Wichtig**
>
> Für den optimalen Betrieb Ihres Moduls. Jeedom muss mindestens der Gruppe 1 zugeordnet werden.

### Abzeichen / Codes

Auf der Ausrüstungsseite gibt es einen Assistenten-Tab.

![bouton assistant](images/plugin/bouton_assistant.jpg)

Auf diese Weise können Sie Codes hinzufügen. Dort sehen Sie eine Tabelle.

![config2](images/zipato.minikeypad/config2.jpg)

-   In dieser Tabelle können Sie die auf Ihrer Tastatur belegten Speicher anzeigen
-   Um einen neuen Code zu registrieren, klicken Sie auf die grüne Schaltfläche des gewünschten Speichers und folgen Sie den Schritten
-   Um einen Code zu löschen, klicken Sie einfach auf die rote Schaltfläche.
-   Es ist nicht möglich, denselben Code/Badge auf zwei verschiedenen Speichern zu speichern
-   Es ist (aus Sicherheitsgründen) unmöglich, den Wert eines registrierten Codes zu lesen

> **Wichtig**
>
> Denken Sie daran, das Modul zu aktivieren, nachdem Sie einen Code oder ein Abzeichen hinzugefügt haben.

## Anwendungsbeispiele

![exemple](images/zipato.minikeypad/exemple.jpg)

Der Auslöser ist der Ereignisbefehl, tatsächlich wird er nur aktualisiert, wenn ein gültiger Code/Badge präsentiert wurde. Bei einem Wert von 6 (Zuhause) wird z. B. der Alarm deaktiviert oder die Steckdosenleiste eingeschaltet, das Licht helligkeitsabhängig eingeschaltet, eine Benachrichtigung gesendet, dass jemand zurückgekehrt ist, eine Zusammenfassung gestartet Stimme, um zum Beispiel einen Wetterbericht zu machen. Andernfalls (notwendigerweise 5) aktivieren wir den Alarm, wir schneiden die Steckdosenleiste ab, wir senden eine Benachrichtigung, um anzuzeigen, dass das Haus leer ist.

## Gut zu wissen

### Besonderheiten

Die Tastatur liest Codes/Badges auf zwei Arten :

-   Wenn Sie die ersten 1-2 Sekunden auf Home/Away drücken, wenn Sie mit der Eingabe eines Codes beginnen, wird dieser Code gelesen
-   Wenn in den ersten 1-2 Sekunden nichts unternommen wird, wechselt es in den Lesemodus für RFID-Ausweise (rotes Licht an). In diesem Moment kann er ein Abzeichen lesen, vorher nicht.

## Wakeup

Um dieses Modul aufzuwecken, gibt es zwei Vorgehensweisen :

-   Drücken Sie die Sabotagetaste und lassen Sie sie nach 1 bis 2 Sekunden los
-   Drücken Sie Home, eine Zufallszahl und Enter

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufwachens, nach einer Änderung der Assoziationsgruppen

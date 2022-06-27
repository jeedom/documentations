# 

**Das Modul**

![module](images/zipato.minikeypad/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/zipato.minikeypad/vuedefaut1.jpg)

## Zusammenfassung

 !

. . . . .

## Fonctions

-   
-   
-   
-   
-   
-   
-   
-   

## Technische Eigenschaften

-   Nett : 
-   Einspeisung : 
-   Frequenz : 868.42MHz
-    : 
-    : 
-    : 
-    : -
-    : 
-   Betriebstemperatur : 
-    : 
-   Maße : 
-   Zertifikate :  :  : 

## Moduldaten

-   Markieren : Zipato
-   Nachname : 
-   Hersteller-ID : 151
-   Geben Sie Produkt ein : 24881
-   Produkt ID : 17665

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> .

![inclusion](images/zipato.minikeypad//inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![information](images/zipato.minikeypad/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![commandes](images/zipato.minikeypad/commandes.jpg)

Hier ist die Liste der Befehle :

-    : )
-   Sabotage : das ist der Sabotagebefehl (wird bei Reißen ausgelöst)
-    : 
-   Batterie : Dies ist der Batteriebefehl

### Modul-Setup

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

.

![bouton configuration](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![config1](images/zipato.minikeypad/config1.jpg)

Parameterdetails :

-   1: )
-   2: )
-   3:  : 
-   4: )
-   5:  : )

### Groupes

Dieses Modul hat zwei Assoziationsgruppen.

![groupe](images/zipato.minikeypad/groupe.jpg)

> **Wichtig**
>
> Für den optimalen Betrieb Ihres Moduls. .

### 

.

![bouton assistant](images/plugin/bouton_assistant.jpg)

. .

![config2](images/zipato.minikeypad/config2.jpg)

-   
-   
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

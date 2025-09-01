# Bacnet

## Description

. .

## Plugin-Konfiguration

 :

![config](../images/BacnetConfig.png)

Dann müssen Sie die Installation der Abhängigkeiten starten (auch wenn sie OK erscheinen) :

![dependances](../images/BacnetDep.png)

Schließlich müssen wir den Dämon starten :

![demon](../images/BacnetDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetSocket.png)

Auf derselben Registerkarte müssen Sie den Cron-Wert zum Aktualisieren Ihrer Ausrüstung auswählen.

## 

### 

>**WICHTIG**
>
>.

Rendez-vous dans le menu « Plugins → Protocole domotique → Bacnet » :



. 
. 
.

) : 

Nach dem Scan wird eine Tabelle mit allen Ein-/Ausgängen Ihrer Geräte angezeigt.

.

.

-
Cliquez ensuite sur votre équipement créé, puis cochez « Activer » et « Visible » pour le voir apparaître sur votre dashboard.

. 
.

### 

)

" :


.)
)




.

### 

). .

" :




)


.

## Die Bestellungen

Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Bacnet.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmdVisible](../images/BacnetVisible.png)

Alle erstellten Geräte haben standardmäßig 2 Befehle commands : une commande info « Connexion Bacnet » et une commande action « Refresh », qui serviront à voir l'état de la connexion Bacnet sur votre dashboard, et à rafraîchir les valeurs de vos commandes.

![cmdBase](../images/BacnetCmdBase.png)

## )

.

" :

.  :


.)




).

>****
>
>.

>**WICHTIG**
>
>Zum Schreiben: Aus Sicherheitsgründen bietet das Bacnet-Protokoll standardmäßig ein Schreibsystem mit Prioritätsstufen für die Ein-/Ausgänge seiner Geräte.
Es gibt 16 Prioritätsstufen (die niedrigste hat Vorrang vor allen anderen)). Ihr Gerät kann so programmiert werden, dass die in diesem Plugin entwickelte Schreibfunktion standardmäßig keinen Vorrang vor der logischen Programmierung des Geräts / Systems hat.
Für Ausgabetyp I / O ist das Plugin mit Schreibpriorität 8 konfiguriert (Manual Operator).
Mehr Infos zum Thema :

https://store.chipkin.com/articles/bacnet-why-doesnt-the-present-value-change

.
Sie sollten wissen, dass die PresentValues der Ein-/Ausgänge Typ: Analogausgang, Binärausgang und Multistate-Ausgang sind immer steuerbar.
. Es liegt im alleinigen Ermessen des Herstellers. .

Beim Erstellen der ausgewählten Schreibaufträge wird auch ein zugehöriger Aktionsauftrag erstellt, der standardmäßig nicht auf dem Dashboard sichtbar ist.
Durch Anklicken wird die Schreibprioritätstabelle eines Ein-/Ausgangs auf den Standard zurückgesetzt.
Es hat einen Namen mit << resetPrioritesEcriture >>
".

## Liste der Befehlsaktionen (für MultiStateValue)

) : Wenn Sie nun einen MultiState auswählen, ist der Befehl standardmäßig vom Typ Slider, Sie können ihn jedoch in der Liste der Gerätebefehle auflisten; Es erscheint ein neues Feld „Werteliste“
 : zum Beispiel 1-4-5-8
Beim Speichern der Ausrüstung werden diese Werte in die Liste der Bestellung im Dashboard übernommen
.

## Schreibpriorität

A Vorsichtig behandeln

Für jede erstellte Bestellung ist ein Feld „Schreibpriorität“ verfügbar

Gemäß der Dokumentation :

In BACnet stellen Objekte, auf die wir schreiben können, häufig das sogenannte PriorityArray bereit. Dieses Array enthält 16 Ebenen, auf die wir schreiben können (1 ist die höchste Priorität)).

Typische Verwendung von Priorität ist :

1 Manuell – Lebenssicherheit 2 Automatisch – Lebenssicherheit 3 Verfügbar 4 Verfügbar 5 Kontrolle kritischer Geräte 6 Mindest-Ein/Aus 7 Verfügbar 8 Manueller Bediener (Override) 9 Verfügbar 10 Verfügbar (typische Steuerung durch einen Vorgesetzten) 11 Verfügbar 12 Verfügbar 13 Verfügbar 14 Verfügbar 15 Verfügbar (Zeitplan) 16 Verfügbar



Wenn bei einem Schreibbefehl kein Wert eingegeben wird, wird der Wert standardmäßig auf 8 gesetzt.

## 

 :
- 
- 
- 
- Schedule
- Calendar
- Device

 :
- )


.

## 

 :



)


.

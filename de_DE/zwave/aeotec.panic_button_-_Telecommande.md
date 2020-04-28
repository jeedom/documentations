 Panikknopf 
===================

\.

-   **Das Modul**

\.

![module](images/aeotec.panicbutton/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/aeotec.panicbutton/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Diese Schlüsselbundfernbedienung mit einem modernen und angenehmen Design hat eine
Taste zur Steuerung aller Arten von Z-Wave-Geräten wie z
Lampen, Jalousien usw..

Mit seinen sehr kleinen Abmessungen können Sie es leicht setzen
in deiner Tasche. Einfach zu bedienen und elegant, ist es mit einem ausgestattet
klingeln, um es an Schlüsseln zu befestigen, wodurch es verfügbar wird
beim Verlassen des Hauses oder bei der Rückkehr nach Hause.

Mit der Taste können Sie dank der zwei Geräte oder Szenen steuern
Management von kurzen und langen Pressen. Diese Fernbedienung kann auch sein
gut als primärer als sekundärer Controller verwendet.

Diese Fernbedienung kann auch als Taste verwendet werden
Notfall oder Panik. Im Notfall oder wenn sein Inhaber
befindet sich in einer anderen Notsituation, er muss nur drücken
Die Taste und ein Z-Wave-Signal werden ausgegeben. In diesem Fall dieses Gerät
kann auch als Medaillon um den Hals verwendet werden.

\.

Funktionen 
---------

\.

-   Schlüsselanhänger Fernbedienung

-   Primärer oder sekundärer Controller

-   Ultra kompakt und ultra Design

-   1 konfigurierbare Taste

-   Verwaltet bis zu 2 Geräte / Szenen

-   Kann als Notfall- / Panikknopf verwendet werden

-   Verwenden Sie um den Hals als Notfallmedaillon

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Sender

-   Versorgung : 1 Lithium 3V CR2450 Batterie

-   Akkulaufzeit : 2 bis 3 Monate für 10 bis 20 Anwendungen
    pro Tag

-   Frequenz: 868.42 MHz

-   Übertragungsentfernung : 30m drinnen

-   Abmessungen : 55 x 30 x 11 mm (L x B x H)

\.

Moduldaten 
-----------------

\.

-   Machen Sie : 

-   Name : Panikknopf

-   Hersteller ID : 134

-   Produkttyp : 1

-   Produkt-ID : 38

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://jeedom.fr/doc/Dokumentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Wichtig**
>
> Drücken Sie die Taste, um dieses Modul in den Einschlussmodus zu versetzen
> LERNEN Sie gemäß seiner Papierdokumentation.

\.

![inclusion](images/aeotec.panicbutton/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/aeotec.panicbutton/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\.

![Befehle](images/aeotec.panicbutton/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Tasten : Es ist der Befehl, der den Knopf nach oben drückt

1 : Kurze Taste drücken

2 : Langer Druckknopf

\.

### Konfiguration des Moduls 

\.

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer gleich danach auf
> Einbeziehung.

\.

Dann, wenn Sie das Modul entsprechend konfigurieren möchten
Ihrer Installation müssen Sie durch die Schaltfläche gehen
"Konfiguration "des OpenZwave-Plugins von Jeedom.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/aeotec.panicbutton/config1.jpg)

\.

Parameterdetails :

\.

-   250: Betriebsart der Fernbedienung (absolut
    Szene für Fernbedienung)

-   255 : Ermöglicht das Zurücksetzen des Schlüsselanhänger ab Werk

\.

### Gruppen 

\.

Dieses Modul hat eine einzelne Zuordnungsgruppe. Er ist
wesentlich.

\.

![Groupe](images/aeotec.panicbutton/groupe.jpg)

\.

Gut zu wissen 
------------

\.

### Besonderheiten 

Gehen Sie wie folgt vor, um dieses Modul als Fernbedienung zu verwenden :

-   1 : Fernbedienung einschließen

-   2 : Wecken Sie die Fernbedienung auf

-   3 : Ändern Sie den Parameter 250 auf true (auch wenn
    scheint schon wahr zu sein)

-   4 : Wecken Sie die Fernbedienung auf und stellen Sie sicher, dass die Änderung vorgenommen wurde
    berücksichtigt

-   5 : Ändern Sie den Betriebsmodus der Fernbedienung, während Sie bleiben
    Drücken Sie die beiden Tasten auf der Rückseite 3 Sekunden lang.

Aufwachen 
------

\.

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Halten Sie die LEARN-Taste 3 Sekunden lang gedrückt

\.

Faq. 
------

\.

Dieses Modul wird aktiviert, indem die LEARN-Taste 3 Sekunden lang gedrückt wird.

\.

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird nicht sein
Berücksichtigen Sie dies, wenn Sie die Fernbedienung aktivieren.

\.

Wichtiger Hinweis 
---------------

\.

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung
> der Konfiguration, nach einer Änderung des Aufweckens, nach a
> Änderung der Assoziationsgruppen

\.

**@sarakha63**

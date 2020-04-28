 
=============

\.

-   **Das Modul**

\.

![module](images/aeotec.keyfob/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/aeotec.keyfob/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Die Aeon Labs Schlüsselbundfernbedienung mit modernem und angenehmem Design
verfügt über 4 Tasten zur Steuerung aller Gerätetypen
Z-Wave wie Lampen, Jalousien usw.

Mit seinen sehr kleinen Abmessungen können Sie es leicht setzen
in deiner Tasche. Einfach zu bedienen und elegant, ist es mit einem ausgestattet
klingeln, um es an Schlüsseln zu befestigen, wodurch es verfügbar wird
beim Verlassen des Hauses oder bei der Rückkehr nach Hause.

Mit jeder Taste können Sie dank der Funktion zwei Geräte oder Szenen steuern
Management von kurzen und langen Pressen. Diese Fernbedienung kann auch sein
gut als primärer als sekundärer Controller verwendet.

\.

Funktionen 
---------

\.

-   Schlüsselanhänger Fernbedienung

-   Primärer oder sekundärer Controller

-   Ultra kompakt und ultra Design

-   4 konfigurierbare Tasten

-   Verwaltet bis zu 8 Geräte / Szenen

-   Gleitschutzklappe

-   Benutzerfreundlichkeit und Installation

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Sender

-   Versorgung : 1 Lithium 3V CR2450 Batterie

-   Akkulaufzeit : 1 Jahr

-   Frequenz: 868.

-   Übertragungsentfernung : 100m auf freiem Feld

-   Betriebstemperatur : -10 ° C bis 50 ° C.

-   Abmessungen : 55 x 30 x 13 mm (L x B x H)

\.

Moduldaten 
-----------------

\.

-   Machen Sie : 

-   Name : Schlüsselanhänger

-   Hersteller ID : 134

-   Produkttyp : 1

-   Produkt-ID : 22

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

![inclusion](images/aeotec.keyfob/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/aeotec.keyfob/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die den Modulen zugeordneten Befehle ausgeführt
verfügbar.

\.

![Befehle](images/aeotec.keyfob/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Tasten : Es ist der Befehl, der den Knopf nach oben drückt

1 : Taste 1 kurz drücken

2 : Taste 1 lange drücken

3 : Taste 2 kurz drücken

4 : Taste 2 lange drücken

5 : Taste 3 kurz drücken

6 : Taste 3 lange drücken

7 : Taste 4 kurz drücken

8 : Taste 4 lange drücken

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

![Config1](images/aeotec.keyfob/config1.jpg)

\.

Parameterdetails :

\.

-   250: Betriebsart der Fernbedienung (absolut
    Szene für Fernbedienung)

Alle anderen Parameter sind nur bei direkter Zuordnung sinnvoll
zwischen Fernbedienung und Modulen.

\.

### Gruppen 

\.

Dieses Modul hat eine einzelne Zuordnungsgruppe. Er ist
wesentlich.

\.

![Groupe](images/aeotec.keyfob/groupe.jpg)

\.

Gut zu wissen 
------------

\.

### Besonderheiten 

Gehen Sie wie folgt vor, um dieses Modul als Fernbedienung zu verwenden :

-   1 : Fernbedienung einschließen

-   2 : Wecken Sie die Fernbedienung auf

-   3 : Ändern Sie den Parameter 250 auf true (auch wenn
    erscheint schon wahr)

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

Dieses Modul wird aktiviert, indem Sie die LEARN-Taste 3 Sekunden lang gedrückt halten.

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

 
==================

\.

-   **Das Modul**

\.

![module](images/aeotec.keyfob-gen5/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/aeotec.keyfob-gen5/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.



.

Mit seinen sehr kleinen Abmessungen können Sie es leicht setzen
in deiner Tasche. Einfach zu bedienen und elegant, ist es mit einem ausgestattet
klingeln, um es an Schlüsseln zu befestigen, wodurch es verfügbar wird
beim Verlassen des Hauses oder bei der Rückkehr nach Hause.

Mit jeder Taste können Sie dank der Funktion zwei Geräte oder Szenen steuern
Management von kurzen und langen Pressen. Diese Fernbedienung kann auch sein
gut als primärer oder sekundärer Controller verwendet.

Und weil der Keyfob Gen5 Key Fob Teil des ist
Die Gen5-Reihe von Aeotec übertrifft alles, was vorher existierte.
Es verwendet den neuesten Chip der Z-Wave 500-Serie und sorgt so für eine Steigerung
50% Funkreichweite und 250% schnellere Kommunikationsgeschwindigkeit
schnell im Vergleich zu früheren Z-Wave-Produkten.

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

-   Ein Teil des Gen5-Sortiments von Aeon Labs

-   Sicherheit der Funkkommunikation über AES-128-Verschlüsselung

-   Integriert den Chip der Z-Wave 500-Serie

-   250% schnellere Kommunikation im Vergleich zu Z-Wave-Geräten
    Standard

-   Optimierung der Antenne, Reichweite 100 Meter

-   Benutzerfreundlichkeit und Installation

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Sender

-   Versorgung : 1 Lithium 3V CR2450 Batterie

-   Akkulaufzeit : 1 Jahr

-   Frequenz: 868.42 MHz

-   Übertragungsentfernung : 100m auf freiem Feld

-   Betriebstemperatur : -10 ° C bis 50 ° C.

-   Abmessungen : 55 x 30 x 13 mm (L x B x H)

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Aeotec

-   Name : ZW088 Schlüsselanhänger Gen5

-   Hersteller ID : 134

-   Produkttyp : 1

-   Produkt-ID : 88

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Wichtig**
>
> Drücken Sie die Taste, um dieses Modul in den Einschlussmodus zu versetzen
> LERNEN Sie gemäß seiner Papierdokumentation.

\.

![inclusion](images/aeotec.keyfob-gen5/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/aeotec.keyfob-gen5/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\.

![Befehle](images/aeotec.keyfob-gen5/commandes.jpg)

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

![Config1](images/aeotec.keyfob-gen5/config1.jpg)

\.

Parameterdetails :

\.

-   250: Betriebsart der Fernbedienung (absolut
    Szene für Fernbedienung)

-   255 : Ermöglicht das Zurücksetzen des Schlüsselanhänger ab Werk

\.

### Gruppen 

\.

Dieses Modul hat zwei Zuordnungsgruppen, die erste ist die einzige
wesentlich.

\.

![Groupe](images/aeotec.keyfob-gen5/groupe.jpg)

\.

Gut zu wissen 
------------

\.

### Besonderheiten 

Gehen Sie wie folgt vor, um dieses Modul als Fernbedienung zu verwenden :

-   1 : Fernbedienung einschließen

-   2 : Wecken Sie die Fernbedienung auf

-   3 : Ändern Sie Parameter 250 in Szene

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

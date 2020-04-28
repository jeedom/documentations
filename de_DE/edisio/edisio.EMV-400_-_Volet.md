-   **Das Modul**

![module](images/emv.400/module.jpg)

-   **Das Jeedom Visual**

![vue default](images/emv.400/vue_default.jpg)

Zusammenfassung 
======

Mit dem Mikromodul  können Sie einen Motor verwalten
bidirektionale oder elektrische Geräte. E.s ermöglicht die Kontrolle
2 Start / STOPp-Ausgänge oder ein Open / STOP / Close-Verschluss.

Darüber hinaus ist eine Interaktion mit anderen Protokollen möglich
steuerbar über Markenschalter und / oder Fernbedienungen
E.disio, direkt aus Jeedom, aber auch von jedem
Z-Wave-Sender in Ihrem Netzwerk.

Jedes E.disio-Modul im Stromnetz mit der Möglichkeit von
arbeiten als drahtloser Repeater mit den anderen Modulen, also
Stellen Sie eine vollständige Abdeckung Ihres Hauses sicher.

Schließlich kann jedes Modul im Remote-Modus verwendet werden, es ist sehr
praktisch, weil es ermöglicht, einen Sender zuzuordnen, ohne auf den zugreifen zu müssen
E.mpfänger.

> **Wichtig**
>
> Neutral ist nur für den "Shutter" -Modus erforderlich"

Funktionen 
=========

-   2 Relaisausgänge geliefert

-   Wird in einer 55-mm-Unterputzdose oder direkt in installiert
    die öffnenden Kisten

-   Art der Verwendung: E.in / Aus, Öffnen / STOPpen / Schließen

-   Kompatibel mit elektronischen E.ndschaltern und
    mechanisch

-   Remote-Modus

-   Timer-Funktion: E.in / Aus-Modus: 30min oder 60min

-   Signalreplik (Repeater)

-   Bidirektionales Mikromodul

-   Niedriger Batteriestand des Senders

-   Klein, diskret und ästhetisch

-   Benutzerfreundlichkeit und Installation

Technische Daten 
===========================

-   Modultyp: E.disio E.mpfänger

-   Versorgung: 230 VAC, 50 Hz

-   Verkabelung: 4 Drähte, 2 für die Steuerung und 2 für die Stromversorgung

-   Frequenz: 

-   Angetriebene Ausgänge: 2 Relais

-   Maximale Leistung: 2A pro Ausgang

-   Widerstandslast: 

-   Sonstige Gebühren: 

-   Betriebstemperatur: -10 ° C + 45 ° C.

-   Abmessungen: 48 x 46 x 26 mm

-   Schutzart: 

Moduldaten 
=================

-   Machen Sie : 

-   Name : 

Allgemeine Konfiguration 
======================

So konfigurieren Sie das E.disio-Plugin und ordnen Jeedom ein Modul zu,
beziehen sich darauf
[Dokumentation](https://www.jeedom.fr/doc/Dokumentation/plugins/edisio/de_DE/edisio.html).

> **Wichtig**
>
> Denken Sie daran, dass Jeedom Ihre Sendermodule automatisch erstellt
> Aktivieren Sie die Option in der Plugin-Konfiguration nicht.

> **Wichtig**
>
> Umgekehrt müssen E.disio-E.mpfänger manuell in erstellt werden
> Jeedom.

DIP-Schalter und Taste "R." : 
--------------------------

![bouton association](images/emv.400/bouton_association.jpg)

-   Mit dem DIP-Schalter können Sie die Parameter anpassen
    (Repeater / Verschlussmodus / Beleuchtung / Timer) des Moduls:

![dip switch](images/emv.400/dip_switch.jpg)

> **Notiz**
>
> Aktivieren Sie niemals den Modus, um unnötige Redundanzen zu vermeiden
> "Repeater "an allen E.mpfängern, maximal 5 E.mpfänger pro
> Installation.

-   Mit der Taste "R" kann dem E.mpfänger ein Sender zugeordnet werden,
    Aktivieren oder deaktivieren Sie die Timer-Funktion und aktivieren Sie den Modus
    deportiert :

![bouton r](images/emv.400/bouton_r.jpg)

> **Notiz**
>
> Durch Drücken von R 3x wird der Fernbedienungsmodus aktiviert.

Funktionsplan 
---------------------------

Weiter, wenn Ihr Sender im Modus "1 Taste" oder "2" konfiguriert ist
Schlüssel ", so funktioniert das Modul:

> **Notiz**
>
> Informationen hierzu finden Sie in der Dokumentation des Herstellers
> Konfigurieren Sie Ihren Sender.

![diagramme](images/emv.400/diagramme.jpg)

Timer-Funktion 
------------------

Die Timer-Funktion schaltet die Relais am E.nde automatisch aus
30 oder 60 Minuten.

> **Notiz**
>
> Diese Funktion wird nur im "Beleuchtungs" -Modus verwendet"

Der "Shutter" -Modus" 
===============

Im "Shutter" -Modus können Sie am E.nde einen bidirektionalen Motor steuern
elektronisches und mechanisches Distanzrennen.

> **Wichtig**
>
> Neutral ist erforderlich

E.lektrische Konfiguration und Anschlüsse : 
--------------------------------------------

![mode moteur](images/emv.400/mode_moteur.jpg)

> **Wichtig**
>
> Damit sich das Modul im "Shutter" -Modus befindet, muss sich der DIP-Schalter 2 in befinden
> Niedrig

> **Wichtig**
>
> NIE.MALS UNTE.R SPANNUNG ANSCHLIE.SSE.N

E.rstellung des Moduls in Jeedom 
------------------------------

Um ein E.disio-E.mpfängermodul mit Jeedom zu verknüpfen, müssen Sie es erstellen
Ausrüstung manuell.

![ajout equip](images/emv.400/ajout_equip.jpg)

Sobald Ihre Ausrüstung erstellt ist, sollten Sie diese erhalten :

![crea equip](images/emv.400/crea_equip.jpg)

> **Notiz**
>
> Denken Sie daran, Ihre neue Ausrüstung zu aktivieren.

Wählen Sie in der Liste der Geräte rechts "Mikromodul-Verschluss" aus
rollen" :

![infos equip](images/emv.400/infos_equip.jpg)

Befehle 
---------

Sobald Ihre Ausrüstung gespeichert ist, sollten Sie die Bestellungen erhalten
mit dem Modul verbunden :

![Befehle](images/emv.400/commande.jpg)

Hier ist die Liste der Befehle :

-   Zustand : Dies ist der Befehl, der die Rückkehr des STATUS simuliert

-   Geh hoch : Dies ist der Befehl, der den Verschluss öffnet

-   STOP : E.s ist der Befehl, der es ermöglicht, die Bewegung des Verschlusses zu stoppen

-   Geh runter : Dies ist der Befehl, der den Verschluss schließt

-   E. : Dies ist der Befehl, mit dem Sie den Remote-Modus verwenden können

> **Wichtig**
>
> Die STATUSrückmeldung wird von Jeedom simuliert. Deshalb, wenn Sie
> Wenn Sie einen anderen Sender verwenden, kann Jeedom den STATUS nicht aktualisieren
> des E.mpfängers.

Information 
------------

Sobald Ihre Ausrüstung mit Jeedom verbunden ist, werden verschiedene Informationen angezeigt
verfügbar :

![Befehle](images/emv.400/infos_moteur.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde

-   Kommunikation : Zeigt die letzte zwischen aufgezeichnete Kommunikation an
    Jeedom und das Mikromodul

-   Batterie : Zeigt den Batteriestatus für Batteriemodule an

-   STATUS : Gibt den STATUS des Moduls zurück

Assoziation des Mikromoduls mit Jeedom 
===================================

Damit du mit Jeedom interagieren kannst, als wäre es ein
E.disio Sender.

> **Notiz**
>
> E.iner der großen Vorteile von E.disio ist, dass ein E.mpfänger haben kann
> mehrere assoziierte E.mittenten

Standardmethode 
----------------

Jeder Ausgang muss einem Jeedom-Befehl zugeordnet sein:

-   Ausgabe 1 zuordnen :

    -   Drücken Sie 1x auf dem "R" des E.mpfängers, einzelner Piepton (kurz)
        in Wiederholung) signalisiert die Programmierung von Ausgang 1 aktiviert.

    -   Drücken Sie innerhalb von 10 Sekunden im Befehl "Öffnen" auf "Test""
        In Jeedom signalisiert ein kontinuierlicher Piepton die Assoziation von
        Ausfahrt 1 bei Jeedom.

    -   Drücken Sie innerhalb von 10 Sekunden erneut "R" am E.mpfänger, um
        Bestätigen Sie die Zuordnung, der Piepton stoppt.

-   Ausgabe 2 zuordnen :

    -   Drücken Sie 2x auf das "R" des E.mpfängers, doppelter Piepton (kurz)
        in Wiederholung) signalisiert die Programmierung von Ausgang 2 aktiviert.

    -   Drücken Sie innerhalb von 10 Sekunden im Befehl "Schließen" auf "Test""
        In Jeedom signalisiert ein kontinuierlicher Piepton die Assoziation von
        Ausfahrt 2 bei Jeedom.

    -   Drücken Sie innerhalb von 10 Sekunden erneut "R" am E.mpfänger, um
        Bestätigen Sie die Zuordnung, der Piepton stoppt.

> **Notiz**
>
> E.s ist nicht erforderlich, den Befehl "STOP" zuzuordnen
> automatisch.

Remote-Methode 
----------------

Wir haben zu Beginn dieser Dokumentation darüber gesprochen, im Fall von
Module bereits in Zwischendecken oder sogar Dachböden eingebettet. Das hier
Methode ermöglicht das Hinzufügen eines neuen Senders ohne Zugriff auf das "R" des
E.mpfänger.

-   Verknüpfen Sie die Schaltfläche "R." :

    -   Drücken Sie 3x auf "R" am E.mpfänger, dreifacher Piepton (kurz)
        in Wiederholung) zeigt den aktiven Programmiermodus an.

    -   Drücken Sie innerhalb von 10 Sekunden "Test" auf dem Befehl "E." in
        Jeedom, ein kontinuierlicher Piepton signalisiert die Assoziation mit Jeedom.

    -   Drücken Sie innerhalb von 10 Sekunden erneut "E." am E.mpfänger, um
        Bestätigen Sie die Zuordnung, der Piepton stoppt.

E.s ist geschafft, dein Jeedom ist jetzt verbunden und sein Befehl "E.."
E.rsetzt jetzt die Taste "R" am E.mpfänger.

-   Verknüpfen Sie einen neuen Sender mit einem E.mpfänger, dem Jeedom bereits zugeordnet ist
    :

    -   Ausfahrt 1 :

        -   Drücken Sie 1x auf "Test" den Befehl "E." in Jeedom, einfach
            E.in Piepton (kurz in der Wiederholung) signalisiert die Programmierung von
            Ausgang 1 aktiviert.

        -   Drücken Sie innerhalb von 10 Sekunden eine der "C" -Tasten am neuen
            Sender zugeordnet werden, signalisiert ein kontinuierlicher Piepton
            die Assoziation von Ausgang 1.

        -   Drücken Sie innerhalb von 10 Sekunden erneut "Test" auf dem
            Befehl "E." in Jeedom, um die Zuordnung, den Piepton zu bestätigen
            Der Ton hört auf.

    -   Ausfahrt 2 :

        -   Drücken Sie 2x auf "Test" des Befehls "E." in Jeedom,
            Doppelter Piepton (kurz in der Wiederholung) signalisiert die
            Programmierung von Ausgang 2 aktiviert.

        -   Drücken Sie innerhalb von 10 Sekunden eine der "C" -Tasten am neuen
            Sender zugeordnet werden, signalisiert ein kontinuierlicher Piepton
            die Assoziation von Ausgang 2.

        -   Drücken Sie innerhalb von 10 Sekunden erneut "Test" auf dem
            Befehl "E." in Jeedom, um die Zuordnung, den Piepton zu bestätigen
            Der Ton hört auf.

> **Notiz**
>
> Sie können so oft neu starten, wie Sie zuordnen möchten
> vom Sender zum E.mpfänger

Alternative visuelle 
=================

![vue alt moteur](images/emv.400/vue_alt_moteur.jpg)

Faq. 
======

So löschen Sie den E.mpfängerspeicher ?

:   Halten Sie das "R" 10 Sekunden lang gedrückt, bis ein kontinuierlicher Piepton ertönt.

So steuern Sie den E.mpfänger über einen Z-Wave-Sender?

:   Mit dem Jeedom Scenario Plugin.

Wie kann ich das gleiche Bild haben ?

:   Mit dem Jeedom Widgets Plugin.

**@Jamsta**

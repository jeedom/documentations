Plugin zur Anbindung an Broadlink-Geräte

Plugin Konfiguration 
=======================

Nach der Installation des Plugins müssen Sie es aktivieren und sicherstellen, dass
gute Installation von Nebengebäuden.

> **Wichtig**
>
> Es wird nicht empfohlen, den Port zu ändern

Einbeziehung der Ausrüstung 
=========================

Aller dans le menu Plugins &gt; Protocole Domotique &gt; Broadlink. Une
Klicken Sie auf der Seite auf INKLUSIONSMODUS. Logischerweise das Ganze
Broadlink-Produkte in Ihrem Netzwerk werden erkannt.

Gerätekonfiguration 
=============================

Wählen Sie eines Ihrer Geräte aus. Wenn dies Typprodukte sind
Infrarot wird oben eine Schaltfläche zum Erlernen eines Befehls angezeigt. Da bist du
Klicken Sie einfach darauf, Sie haben dann 5 Sekunden Zeit zu lernen
ein Infrarot- oder 433-Befehl an Ihren Broadlink. Anschließend das Plugin
bestätigt den Erfolg des Vorgangs und erstellt die zugehörige Bestellung
Sie müssen nur benennen. Es gibt auch einen erweiterten Modus 
möglicherweise leicht unterschiedliche Rf-Frequenzen zu erfassen.
Dieser Modus arbeitet in zwei Stufen, einer Frequenzerfassungsstufe 
(oder Sie müssen die Taste gedrückt halten oder mehrmals drücken).
Und ein zweiter Schritt ähnlich dem klassischen Modus.

> **Spitze**
>
> Um nicht zu lernen, was aus der Umwelt kommen könnte
> (Fernbedienung von einem Nachbarn oder einem anderen), der Broadlink in
> Das freiwillige Lernen geht in eine sehr empfängliche Ebene
> schwach, also muss man SEHR nah am Broadlink sein, um a zu lernen
> Bestellen Sie besonders, wenn es sich um eine 433-MHz-Bestellung handelt.

Synchronize 
============

Auf der Registerkarte Gerätesteuerung finden Sie die Schaltfläche
Synchronisieren. Wenn Sie mehr als einen Broadlink haben, können Sie
Übertragen Sie gelernte Befehle von einem Broadlink auf einen anderen.

> **Spitze**
>
> Es funktioniert von einem RM-Pro zu einem Mini oder umgekehrt.

Sie können die zu übertragenden Bestellungen sowie die Broadlinks auswählen
auf die Sie sie übertragen möchten. (Der Name der Bestellung lautet
offensichtlich konvergiert (TV EIN, Lüfter aus usw.).)

> **Spitze**
>
> Wenn Sie Ihr Gerät manuell hinzugefügt haben, weil es nicht automatisch erkannt wurde. Der zu informierende MAC ist 
> umgekehrte MAC-Adresse im Zweierpaket in Kleinbuchstaben ohne : Beispiel AA:BB:CC:DD:EE
> wird eeddccbbaa

> **Spitze**
>
> Für einige RM Pro einschließlich Versionen 4. Das Gerät darf nicht mit der Cloud verbunden sein.
> Andernfalls ist es lokal nicht mehr steuerbar. Dazu müssen Sie das Gerät über die Anwendung hinzufügen.
> Aber fahren Sie nicht fort, wenn es Ihrem WLAN hinzugefügt wurde (fügen Sie es nicht einem Raum oder etwas anderem hinzu). Es muss aufhören
> in diesem Moment.

Changelog detailliert :
<https://github.com/jeedom/plugin-broadlink/commits/stable>

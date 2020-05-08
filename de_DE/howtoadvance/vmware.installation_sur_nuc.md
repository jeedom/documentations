Hier ist ein Tutorial zum Installieren von VMware auf einem Intel NUC (Gen6). Wir
Sehen Sie, wie Sie Jeedom hinzufügen

Das Material 
===========

Intel NUC 
---------

Der Intel NUC ist ein kleiner PC, nicht der leistungsstärkste, aber sehr sparsam
Energie und kleine Dimensionen. Das macht es zu einem perfekten kleinen Kellner
Virtualisierung basierend auf VMware.

Derzeit gibt es 2 NUCs der 6. Generation (die anderen arbeiten
auch für VMware, erfordern aber zusätzliche Treiber auf dem
VMware-Kernel):

-   Intel Core i3-6100U (Dual-Core 2.3 GHz - - 4 Threads - Cache 3 MB -
    TDP 15W)

-   Intel Core i5-6260U (Dual-Core 1.8 GHz - Turbo 2.9 GHz - 4 Threads -
    Cache 4 MB)

Der i5 ist deutlich leistungsfähiger, da er etwas mehr Cache-Speicher hat
und vor allem ein Turbomodus, der es ihm ermöglicht, viel höher zu klettern
Frequenz.

Hinzu kommen 2 Arten von Fällen :

-   Ein dünnes Gehäuse, das nur eine M2-Disc enthalten kann

-   Ein dickeres Gehäuse, das eine Scheibe vom Typ M2 und a enthalten kann
    Scheibe 2.5 Zoll

Das sind 4 Referenzen :

-   i3 M2 : [Intel NUC
    NUC6I3SYK](http://www.ldlc.com/fiche/PB00203086.html) \~ 320€

-   i3 M2 + 2.5 Zoll : [Intel NUC
    NUC6I3SYH](http://www.ldlc.com/fiche/PB00203148.html) \~ 320€

-   i5 M2 : [Intel NUC
    NUC6I5SYK](http://www.ldlc.com/fiche/PB00203084.html) \~ 460€

-   i5 M2 + 2.5 Zoll : [Intel NUC
    NUC6I5SYH](http://www.ldlc.com/fiche/PB00202760.html) \~ 430€

SSD 
---

Sie müssen eine SSD und einen Speicher hinzufügen. SSD Level ich dir
empfehlen 240 GB oder mehr, es sei denn, Sie nehmen das Modell mit einem
Standort 2.5 Zoll (wodurch Sie mehr Festplatte setzen können)
oder um ein Synology NAS zu haben, um die iSCSI-LUN zu erstellen. Vergiss nicht
Fügen Sie hinzu, dass eine Basis-VM (kein Speicher) zwischen 20 und 40 GB groß ist
Diese 40 GB für VMware selbst füllen sich schnell.

> **Important**
>
> VMware unterstützt das Hinzufügen von USB-Datenträgern nicht, daher ist dies schwierig
> um den verfügbaren Platz zu erweitern

-   [LDLC SSD M.2 2280 F6 PLUS 120
    GB](http://www.ldlc.com/fiche/PB00203635.html) \~ 55€

-   [Samsung SSD 850 EVO 120 GB
    M.2](http://www.ldlc.com/fiche/PB00185923.html) \~ 100€

-   [LDLC SSD M.2 2280 F6 PLUS 240
    GB](http://www.ldlc.com/fiche/PB00203636.html) \~ 105€

-   [Samsung SSD 850 EVO 250 GB
    M.2](http://www.ldlc.com/fiche/PB00185924.html) \~ 120€

-   [LDLC SSD M.2 2280 F6 PLUS 480
    GB](http://www.ldlc.com/fiche/PB00207301.html) \~ 190€

Speicher 
-------

Achtung für den Speicher ist DDR4 in So-DIMM 260 unbedingt erforderlich
Pins, Sie benötigen mindestens 4 GB für VMware, aber aus Erfahrung sage ich Ihnen
Empfehlen Sie mindestens 8 GB (persönlich habe ich sogar bis zu 16 GB montiert,
NUC unterstützt maximal 32 GB). Dort wird kein Speicher empfohlen, der
billiger geht sehr gut (Vorsicht, ich nehme immer 2er-Packs
Balken, dies verbessert die Leistung) :

-   [Entscheidender SO-DIMM DDR4 8 GB (2 x 4 GB) 2133 MHz CL15 SR
    X8](http://www.ldlc.com/fiche/PB00204134.html) \~ 35€

-   [Entscheidender SO-DIMM DDR4 16 GB (2 x 8 GB) 2133 MHz CL15 DR
    X8](http://www.ldlc.com/fiche/PB00204135.html) \~ 65€

-   [Entscheidender SO-DIMM DDR4 32 GB (2 x 16 GB) 2133 MHz CL15 DR
    X8](http://www.ldlc.com/fiche/PB00204136.html) \~ 120€

Installationsvorbereitung 
=============================

Bevor wir die Installation selbst starten, müssen wir zuerst
Stellen Sie VMware wieder her und stecken Sie es auf einen USB-Stick.

VMware-Download 
------------------------

> **Important**
>
> Wenn Sie VMware 6 setzen.5 gibt es ein Problem mit der neuen Verwaltung
> USB- und Zwave-Schlüssel, damit dies funktioniert, müssen Sie dies anwenden
> [KB](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147650). Achtung, diese Manipulation ist in VMware 6.7 nicht mehr durchzuführen

Ich denke, es ist das Schwierigste, dein Leben zu vereinfachen
:

-   mach weiter
    [hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6)
    und registrieren

-   Warten Sie, bis die E-Mail die Registrierung bestätigt hat

-   retourner
    [hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6)
    und melden Sie sich an (möglicherweise werden Sie aufgefordert, das zu akzeptieren
    Bedingungen müssen Sie validieren)

-   dann geh
    [dort](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2)
    und fügen Sie Ihrem Konto "ESXi ISO-Image (einschließlich VMware Tools) hinzu"

-   endlich zurück
    [hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6)
    und dort müssen Sie in "Downlaod Packages" ein "ESXi-Paket" haben
    ISO-Image (einschließlich VMware Tools) ", das Sie herunterladen müssen

![installation.vmware.nuc](images/installation.vmware.nuc.PNG)

Direkt darüber haben Sie auch Ihren Lizenzschlüssel
Nutzen Sie den Vorteil, um es wiederherzustellen.

Rufus herunterladen 
-----------------------

Dort ist es viel einfacher, nur zu klicken
[die](http://rufus.akeo.ie/downloads/rufus-2.9.exe). Dann brauchst du
Starten Sie die EXE-Datei

Erstellung des bootfähigen USB-Sticks 
--------------------------------

Auch hier ist es einfach, rufus so zu konfigurieren :

![installation.vmware.nuc2](images/installation.vmware.nuc2.PNG)

Alles was Sie tun müssen, ist auf Start zu klicken und zu warten.

Auspacken und Zusammenbauen des NUC 
==============================

Dies sind die 3 Komponenten für meinen NUC :

-   Intel NUC NUC6I5SYH

-   Samsung SSD 850 EVO 250 Go M.2

-   CORSAIR VENGEANCE SO-DIMM DDR4 16 GB (2 x 8 GB) 2400 MHz CL16

![installation.vmware.nuc3](images/installation.vmware.nuc3.jpg)

Die NUC-Box :

![installation.vmware.nuc4](images/installation.vmware.nuc4.jpg)

Öffne es :

![installation.vmware.nuc5](images/installation.vmware.nuc5.jpg)

Komponenten aus der Verpackung genommen :

![installation.vmware.nuc6](images/installation.vmware.nuc6.jpg)

Öffnen Sie den NUC, dort ist es sehr einfach, stellen Sie ihn auf den Kopf, schrauben Sie ihn ab
Die 4 Schrauben unter den Füßen (sie kommen nicht vollständig heraus, es ist normal, dass es
Lösen Sie sie einfach) und ziehen Sie dann leicht an den Schrauben, um sie zu öffnen
der NUC:

![installation.vmware.nuc7](images/installation.vmware.nuc7.jpg)

Die installierte SSD (links), die Endschraube zum Blockieren ist a
schwer zurückzustellen, zum Glück machen wir das nur einmal

![installation.vmware.nuc8](images/installation.vmware.nuc8.jpg)

Speicherinstallation (rechts) :

![installation.vmware.nuc10](images/installation.vmware.nuc10.jpg)

Und da sind Sie, Sie können es wieder schließen (es sei denn, Sie haben natürlich eine genommen
SSD 2.5 Zoll, die in diesem Fall in die Abdeckung eingesetzt werden müssen).

VMware-Installation 
======================

Dort ist es sehr einfach, einfach den USB-Stick an einen der Ports zu stecken
NUC USB, stecken Sie einen Bildschirm in den HDMI-Anschluss, eine Tastatur und
Essen. Wenn Sie den NUC einschalten, wird die Installation gestartet
allein :

![installation.vmware.nuc11](images/installation.vmware.nuc11.jpg)

> **Note**
>
> Ich habe vergessen, die Lizenzvalidierung zu erfassen
> stimme einfach zu, den Anweisungen zu folgen

Wählen Sie hier die der SSD entsprechende Festplatte aus (Sie können
entweder mit Namen oder Größe identifizieren)

![installation.vmware.nuc13](images/installation.vmware.nuc13.jpg)

Wählen Sie "Französisch" :

![installation.vmware.nuc14](images/installation.vmware.nuc14.jpg)

Geben Sie ein Passwort ein, am Anfang rate ich Ihnen, eine einfache Sache zu schreiben
wie "oooo" (wir werden es später ändern) :

![installation.vmware.nuc15](images/installation.vmware.nuc15.jpg)

Bestätigen Sie mit F11 :

![installation.vmware.nuc16](images/installation.vmware.nuc16.jpg)

Die Installation dauert 10 bis 20 Minuten, dann müssen Sie sie entfernen


![installation.vmware.nuc17](images/installation.vmware.nuc17.jpg)

 :

![installation.vmware.nuc18](images/installation.vmware.nuc18.jpg)

 ,
 !!!


[Tutorial](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.creer_une_vm.html)

[hier](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.trucs_et_astuces.html)

VMware)

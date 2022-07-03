# VMware auf nuc installiert

Hier ist ein Tutorial zur Installation von VMware auf einem Intel NUC (gen6). Wir werden später sehen, wie man Jeedom hinzufügt

# Ausrüstung 

## Intel-NUCs

Der Intel NUC ist ein kleiner PC, nicht der leistungsstärkste, aber sehr energieeffizient und klein. Dies macht es zu einem perfekten kleinen Virtualisierungsserver auf Basis von VMware.

Derzeit gibt es 2 NUCs der 6. Generation (die anderen funktionieren auch für VMware, erfordern jedoch zusätzliche Treiber auf dem VMware-Kernel):

-   Intel Core i3-6100U (Dual-Core 2.3 GHz - - 4 Threads - 3 MB Cache - TDP 15W)
-   Intel Core i5-6260U (Dual-Core 1.8 GHz - Turbo 2.9 GHz - 4 Threads - 4 MB Cache)

Der i5 ist viel leistungsstärker, weil er etwas mehr Cache-Speicher und vor allem einen Turbo-Modus hat, der es ihm ermöglicht, eine viel höhere Frequenz zu erreichen.

Dazu kommen 2 Arten von Boxen :

-   Eine dünne Hülle, die nur eine M2-Disc aufnehmen kann
-   Eine dickere Hülle, die eine M2-Disc und eine 2-Disc aufnehmen kann.5 Zoll

Das macht 4 Referenzen :

-   i3 M2 : [Intel NUC NUC6I3SYK](http://www.ldlc.com/fiche/PB00203086.html) \~ 320€
-   i3 M2+2.5 Zoll : [Intel NUC NUC6I3SYH](http://www.ldlc.com/fiche/PB00203148.html) \~ 320€
-   i5 M2 : [Intel NUC NUC6I5SYK](http://www.ldlc.com/fiche/PB00203084.html) \~ 460€
-   i5 M2+2.5 Zoll : [Intel NUC NUC6I5SYH](http://www.ldlc.com/fiche/PB00202760.html) \~ 430€

## SSD

Dazu müssen Sie noch eine SSD und Arbeitsspeicher hinzufügen. SSD-Level Ich empfehle 240 GB oder mehr, es sei denn, Sie nehmen das Modell mit Slot 2.5 Zoll (womit Sie eine zusätzliche Festplatte einbauen können) oder ein Synology-NAS zum Erstellen von iSCSI-LUNs. Vergessen Sie nicht, dass eine Basis-VM (kein Speicher) zwischen 20 und 40 GB groß ist, fügen Sie 40 GB für die VMware selbst hinzu, sie füllt sich schnell.

> **Wichtig**
>
> VMware unterstützt das Hinzufügen von USB-Datenträgern nicht, daher ist es schwierig, den verfügbaren Speicherplatz zu erweitern

-   [LDLC-SSD M.2 2280 F6 PLUS 120 GB](http://www.ldlc.com/fiche/PB00203635.html) \~ 55€
-   [Samsung SSD 850 EVO 120 GB M.2](http://www.ldlc.com/fiche/PB00185923.html) \~ 100€
-   [LDLC-SSD M.2 2280 F6 PLUS 240 GB](http://www.ldlc.com/fiche/PB00203636.html) \~ 105€
-   [Samsung SSD 850 EVO 250 GB M.2](http://www.ldlc.com/fiche/PB00185924.html) \~ 120€
-   [LDLC-SSD M.2 2280 F6 PLUS 480 GB](http://www.ldlc.com/fiche/PB00207301.html) \~ 190€

## Erinnerung

Beim Arbeitsspeicher aufpassen, man braucht unbedingt DDR4 in So-DIMM 260 Pins, für VMware braucht man mindestens 4GB, aus Erfahrung rate ich aber zu mindestens 8GB (persönlich bin ich sogar auf 16GB hochgegangen, der NUC unterstützt maximal 32GB). Da keine Speicherempfehlung, der billigste reicht (Vorsicht, ich nehme immer Packungen mit 2 Riegeln, das verbessert die Performance) :

-   [Crucial SO-DIMM DDR4 8 GB (2 x 4 GB) 2133 MHz CL15 SR X8](http://www.ldlc.com/fiche/PB00204134.html) \~ 35€
-   [Crucial SO-DIMM DDR4 16 GB (2 x 8 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204135.html) \~ 65€
-   [Crucial SO-DIMM DDR4 32 GB (2 x 16 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204136.html) \~ 120€

# Vorbereitung für die Installation

Bevor Sie mit der eigentlichen Installation beginnen, müssen Sie zunächst VMware wiederherstellen und auf einen USB-Stick übertragen.

## VMware-Download

> **Wichtig**
>
> Wenn Sie VMware 6.5 gibt es ein Problem mit der neuen Verwaltung von USB- und Zwave-Schlüsseln, damit dies funktioniert, müssen Sie dies anwenden [KB](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147650). Achtung diese Manipulation ist in vmware 6.7 nicht mehr vorzunehmen

Es ist in der Tat der schwierigste Teil, denke ich, um Ihr Leben zu vereinfachen, müssen Sie :

-   mach weiter [hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) und registrieren
-   Warten Sie auf die E-Mail, um die Registrierung zu bestätigen
-   kippen [hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) und verbinden (es kann Sie auffordern, die Bedingungen zu akzeptieren, Sie müssen bestätigen)
-   dann geh [das](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2) und fügen Sie Ihrem Konto „ESXi ISO-Image (enthält VMware Tools)"
-   endlich zurück [hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) und dort müssen Sie in "Pakete herunterladen" ein "ESXi-ISO-Image (einschließlich VMware Tools)"-Paket haben, das Sie herunterladen müssen

![installation.vmware.nuc](images/installation.vmware.nuc.PNG)

Direkt darüber haben Sie auch Ihren Lizenzschlüssel, Sie können die Gelegenheit nutzen, ihn wiederherzustellen.

## Rufus herunterladen

Dort ist es viel einfacher, Sie müssen nur klicken [das](http://rufus.akeo.ie/downloads/rufus-2.9.exe). Anschließend müssen Sie die .exe starten

## Erstellen des bootfähigen USB-Sticks

Auch hier ist es einfach, Rufus zu konfigurieren :

![installation.vmware.nuc2](images/installation.vmware.nuc2.PNG)

Jetzt müssen Sie nur noch auf Start klicken und warten.

# Auspacken und Zusammenbau des NUC

Hier sind die 3 Komponenten für meinen NUC :

-   Intel NUC NUC6I5SYH
-   Samsung SSD 850 EVO 250 GB M.2
-   CORSAIR VENGEANCE SO-DIMM DDR4 16 GB (2 x 8 GB) 2400 MHz CL16

![installation.vmware.nuc3](images/installation.vmware.nuc3.jpg)

Die NUC-Box :

![installation.vmware.nuc4](images/installation.vmware.nuc4.jpg)

Eröffnung davon :

![installation.vmware.nuc5](images/installation.vmware.nuc5.jpg)

Komponenten aus der Kiste :

![installation.vmware.nuc6](images/installation.vmware.nuc6.jpg)

Das Öffnen des NUC ist sehr einfach, stellen Sie es auf den Kopf, lösen Sie die 4 Schrauben unter den Füßen (sie kommen nicht vollständig heraus, das ist normal, Sie müssen sie nur lösen), und ziehen Sie dann leicht an den Schrauben, um das NUC zu öffnen:

![installation.vmware.nuc7](images/installation.vmware.nuc7.jpg)

Die eingebaute SSD (links), die Schraube am Ende zum Blockieren ist etwas mühsam wieder einzusetzen, zum Glück machen wir das nur einmal

![installation.vmware.nuc8](images/installation.vmware.nuc8.jpg)

Arbeitsspeicher einbauen (rechts) :

![installation.vmware.nuc10](images/installation.vmware.nuc10.jpg)

Los geht's, Sie können schließen (es sei denn, Sie haben natürlich eine SSD 2 genommen.5 Zoll, die in diesem Fall in den Deckel eingeführt werden müssen).

# VMware installieren

Es ist ganz einfach, stecken Sie einfach den USB-Stick in einen der USB-Anschlüsse des NUC, schließen Sie einen Bildschirm an den HDMI-Anschluss, eine Tastatur und das Netzteil an. Sie schalten den NUC ein, die Installation startet von alleine :

![installation.vmware.nuc11](images/installation.vmware.nuc11.jpg)

> **Notiz**
>
> Ich habe vergessen, die Aufnahmen der Lizenzvalidierung zu machen, Sie müssen nur zustimmen, indem Sie den Anweisungen folgen

Wählen Sie hier die Festplatte aus, die der SSD entspricht (Sie können sie entweder anhand des Namens oder anhand der Größe finden)

![installation.vmware.nuc13](images/installation.vmware.nuc13.jpg)

Wählen Sie „Französisch" :

![installation.vmware.nuc14](images/installation.vmware.nuc14.jpg)

Setzen Sie ein Passwort, am Anfang rate ich Ihnen, etwas Einfaches wie "oooo" zu setzen (wir werden es später ändern) :

![installation.vmware.nuc15](images/installation.vmware.nuc15.jpg)

Bestätigen Sie mit F11 :

![installation.vmware.nuc16](images/installation.vmware.nuc16.jpg)

Die Installation dauert 10 bis 20 Minuten, dann müssen Sie den USB-Stick entfernen und warten, bis das System neu gestartet wird

![installation.vmware.nuc17](images/installation.vmware.nuc17.jpg)

Sobald der Neustart abgeschlossen ist, sollten Sie haben :

![installation.vmware.nuc18](images/installation.vmware.nuc18.jpg)

Hier ist VMware installiert (zusätzlich ist es nett, dass es Ihnen seine IP gibt), nur zum Spielen !!!

Für die Fortsetzung hier ist a [Lernprogramm](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.creer_une_vm.html) zum Erstellen Ihrer ersten VM. Und Sie werden finden [hier](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.trucs_et_astuces.html) ein Tipps-und-Tricks-Tutorial (zum Beispiel, um Ihre VMware-Lizenz)

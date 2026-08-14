# VMware auf NUC installiert

Hier ist eine Anleitung zur Installation von VMware auf einem Intel NUC (Gen 6). Anschließend werden wir sehen, wie man Jeedom darauf installiert.

# Die Hardware

## Intel NUC

Der Intel NUC ist ein kleiner PC, zwar nicht der leistungsstärkste, aber sehr energieeffizient und kompakt. Damit eignet er sich perfekt als kleiner Virtualisierungsserver auf VMware-Basis.

Derzeit gibt es zwei NUCs der 6. Generation (die anderen funktionieren ebenfalls mit VMware, erfordern jedoch die Installation zusätzlicher Treiber im VMware-Kernel):

-   Intel Core i3-6100U (Dual-Core 2,3 GHz – 4 Threads – 3 MB Cache – TDP 15 W)
-   Intel Core i5-6260U (Dual-Core 1,8 GHz – Turbo 2,9 GHz – 4 Threads – 4 MB Cache)

Der i5 ist deutlich leistungsstärker, da er über etwas mehr Cache-Speicher verfügt und vor allem einen Turbo-Modus hat, der es ihm ermöglicht, die Taktfrequenz deutlich höher zu steigern.

Hinzu kommen zwei Arten von Steuergeräten:

-   Ein schlankes Gehäuse, das nur eine M.2-Festplatte aufnehmen kann
-   Ein dickeres Gehäuse, das Platz für eine M.2-Festplatte und eine 2,5-Zoll-Festplatte bietet

Das sind also insgesamt 4 Artikel:

-   i3 M2: [Intel NUC NUC6I3SYK](http://www.ldlc.com/fiche/PB00203086.html) \~ 320€
-   i3 M2 + 2,5 Zoll: [Intel NUC NUC6I3SYH](http://www.ldlc.com/fiche/PB00203148.html) \~ 320€
-   i5 M2: [Intel NUC NUC6I5SYK](http://www.ldlc.com/fiche/PB00203084.html) \~ 460€
-   i5 M2 + 2,5 Zoll: [Intel NUC NUC6I5SYH](http://www.ldlc.com/fiche/PB00202760.html) \~ 430€

## SSD

Dazu kommen noch eine SSD und Arbeitsspeicher. Bei der SSD empfehle ich 240 GB oder mehr, es sei denn, Sie entscheiden sich für das Modell mit einem 2,5-Zoll-Steckplatz (der es Ihnen ermöglicht, eine zusätzliche Festplatte einzubauen) oder verfügen über ein NAS vom Typ Synology, um iSCSI-LUNs einzurichten. Vergessen Sie nicht, dass eine einfache VM (ohne Speicher) zwischen 20 und 40 GB benötigt; rechnet man dazu noch 40 GB für die VMware-Software selbst hinzu, ist der Speicherplatz schnell voll.

> **Wichtig**
>
> VMware unterstützt das Hinzufügen von USB-Festplatten nicht, daher ist es schwierig, den verfügbaren Speicherplatz zu erweitern

-   [LDLC SSD M.2 2280 F6 PLUS 120 GB](http://www.ldlc.com/fiche/PB00203635.html) \~ 55€
-   [Samsung SSD 850 EVO 120 GB M.2](http://www.ldlc.com/fiche/PB00185923.html) \~ 100€
-   [LDLC SSD M.2 2280 F6 PLUS 240 GB](http://www.ldlc.com/fiche/PB00203636.html) \~ 105€
-   [Samsung SSD 850 EVO 250 GB M.2](http://www.ldlc.com/fiche/PB00185924.html) \~ 120€
-   [LDLC SSD M.2 2280 F6 PLUS 480 GB](http://www.ldlc.com/fiche/PB00207301.html) \~ 190€

## Speicher

Achtung: Für den Arbeitsspeicher ist unbedingt DDR4 in Form von 260-Pin-So-DIMMs erforderlich. Für VMware sind mindestens 4 GB erforderlich, aber aus Erfahrung empfehle ich mindestens 8 GB (ich persönlich habe sogar bis zu 16 GB eingebaut; der NUC unterstützt maximal 32 GB). Hier gibt es keine spezielle Speicherempfehlung, der günstigste reicht völlig aus (Achtung: Ich kaufe immer 2er-Packs, das verbessert die Leistung):

-   [Crucial SO-DIMM DDR4 8 GB (2 x 4 GB) 2133 MHz CL15 SR X8](http://www.ldlc.com/fiche/PB00204134.html) \~ 35€
-   [Crucial SO-DIMM DDR4 16 GB (2 x 8 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204135.html) \~ 65€
-   [Crucial SO-DIMM DDR4 32 GB (2 x 16 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204136.html) \~ 120€

# Vorbereitung der Installation

Bevor die eigentliche Installation beginnen kann, muss zunächst VMware heruntergeladen und auf einen USB-Stick kopiert werden.

## VMware herunterladen

> **Wichtig**
>
> Wenn Sie VMware 6.5 installieren, gibt es ein Problem mit der neuen USB-Verwaltung und den Z-Wave-Sticks. Damit dies funktioniert, müssen Sie Folgendes anwenden: [KB](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147650). Achtung: Dieser Vorgang ist in VMware 6.7 nicht mehr erforderlich.

Das ist eigentlich das Schwierigste, glaube ich. Um euch das Leben zu erleichtern, müsst ihr:

-   weiter zu [hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) und sich registrieren
-   Warten Sie auf die E-Mail, um die Anmeldung endgültig zu bestätigen
-   Zurück [hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) und melden Sie sich an (möglicherweise werden Sie aufgefordert, die Nutzungsbedingungen zu akzeptieren; bestätigen Sie diese bitte)
-   dann weiter [dort](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2) und fügen Sie Ihrem Konto „ESXi-ISO-Image (enthält VMware Tools)“ hinzu
-   endlich zurückkehren [hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) Und dort sollten Sie unter „Download Packages“ ein Paket namens „ESXi ISO image (Includes VMware Tools)“ finden, das Sie herunterladen müssen

![installation.vmware.nuc](../images/installation.vmware.nuc.PNG)

Direkt darüber finden Sie auch Ihren Lizenzschlüssel – nutzen Sie die Gelegenheit, ihn sich zu sichern.

## Rufus herunterladen

Das ist viel einfacher – Sie müssen nur darauf klicken [die](http://rufus.akeo.ie/downloads/rufus-2.9.exe). Anschließend müssen Sie die .exe-Datei starten

## Erstellung eines bootfähigen USB-Sticks

Auch das ist ganz einfach – so richten Sie Rufus ein:

![installation.vmware.nuc2](../images/installation.vmware.nuc2.PNG)

Jetzt müssen Sie nur noch auf „Start“ klicken und abwarten.

# Auspacken und Zusammenbau des NUC

Das sind die drei Komponenten für meinen NUC:

-   Intel NUC NUC6I5SYH
-   Samsung SSD 850 EVO 250 GB M.2
-   CORSAIR VENGEANCE SO-DIMM DDR4 16 GB (2 × 8 GB) 2400 MHz CL16

![installation.vmware.nuc3](../images/installation.vmware.nuc3.jpg)

Die Verpackung des NUC:

![installation.vmware.nuc4](../images/installation.vmware.nuc4.jpg)

Öffnen Sie diese:

![installation.vmware.nuc5](../images/installation.vmware.nuc5.jpg)

Die Komponenten aus der Verpackung:

![installation.vmware.nuc6](../images/installation.vmware.nuc6.jpg)

Öffnen des NUC: Das ist ganz einfach. Drehen Sie ihn um, lösen Sie die vier Schrauben unter den Füßen (sie lassen sich nicht vollständig herausdrehen – das ist normal, Sie müssen sie nur lösen) und ziehen Sie dann leicht an den Schrauben, um den NUC zu öffnen:

![installation.vmware.nuc7](../images/installation.vmware.nuc7.jpg)

Die SSD ist eingebaut (links), die Schraube am Ende, mit der sie befestigt wird, lässt sich etwas mühsam wieder eindrehen – zum Glück muss man das nur einmal machen.

![installation.vmware.nuc8](../images/installation.vmware.nuc8.jpg)

Einbau des Arbeitsspeichers (rechts):

![installation.vmware.nuc10](../images/installation.vmware.nuc10.jpg)

So, jetzt können Sie das Gehäuse wieder schließen (es sei denn, Sie haben sich für eine 2,5-Zoll-SSD entschieden – in diesem Fall müssen Sie diese in die Abdeckung einsetzen).

# Installation von VMware

Das ist ganz einfach: Stecken Sie den USB-Stick in einen der USB-Anschlüsse des NUC, schließen Sie einen Bildschirm an den HDMI-Anschluss an, sowie eine Tastatur und das Netzteil. Schalten Sie den NUC ein, die Installation startet dann automatisch:

![installation.vmware.nuc11](../images/installation.vmware.nuc11.jpg)

> **Hinweis**
>
> Ich habe vergessen, Screenshots von der Lizenzvalidierung zu machen; man muss einfach nur den Anweisungen folgen und zustimmen.

Wählen Sie hier unbedingt das Laufwerk aus, das der SSD entspricht (Sie können es entweder anhand des Namens oder der Größe identifizieren).

![installation.vmware.nuc13](../images/installation.vmware.nuc13.jpg)

Wählen Sie „Französisch“ aus:

![installation.vmware.nuc14](../images/installation.vmware.nuc14.jpg)

Legen Sie ein Passwort fest. Zu Beginn empfehle ich Ihnen, etwas Einfaches wie „oooo“ zu wählen (wir werden es später ändern):

![installation.vmware.nuc15](../images/installation.vmware.nuc15.jpg)

Bestätigen Sie mit F11:

![installation.vmware.nuc16](../images/installation.vmware.nuc16.jpg)

Die Installation dauert 10 bis 20 Minuten. Anschließend müssen Sie den USB-Stick entfernen und warten, bis das System neu gestartet ist.

![installation.vmware.nuc17](../images/installation.vmware.nuc17.jpg)

Nach Abschluss des Neustarts sollten Sie Folgendes vorfinden:

![installation.vmware.nuc18](../images/installation.vmware.nuc18.jpg)

So, VMware ist nun installiert (und das Tolle daran ist, dass es Ihnen seine IP-Adresse anzeigt) – jetzt heißt es nur noch, damit herumzuspielen!!!

Im Folgenden finden Sie einen [Anleitung](vmware.creer_une_vm) für die Erstellung Ihrer ersten virtuellen Maschine. Und Sie finden [hier](vmware.trucs_et_astuces) Ein Tutorial mit Tipps und Tricks (zum Beispiel zum Einrichten Ihrer VMware-Lizenz)

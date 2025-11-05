# VMware ist auf dem NUC installiert

Hier finden Sie eine Anleitung zur Installation von VMware auf einem Intel NUC (6. Generation)). Wir werden später sehen, wie man Jeedom hinzufügt

# Die Ausrüstung 

## Intel NUC

Der Intel NUC ist ein kleiner PC, nicht der leistungsstärkste, aber sehr energieeffizient und kompakt. Dadurch eignet es sich perfekt als kleiner VMware-basierter Virtualisierungsserver.

Derzeit gibt es zwei NUCs der 6. Generation (die anderen funktionieren auch mit VMware, erfordern aber die Installation zusätzlicher Treiber auf dem VMware-Kernel)):

-   Intel Core i3-6100U (Dual-Core 2.3 GHz – 4 Threads – 3 MB Cache – TDP 15 W)
-   Intel Core i5-6260U (Dual-Core 1.8 GHz - Turbo 2.9 GHz – 4 Threads – 4 MB Cache)

Der i5 ist deutlich leistungsstärker, weil er über etwas mehr Cache-Speicher verfügt und vor allem über einen Turbo-Modus, der es ihm ermöglicht, viel höhere Frequenzen zu erreichen.

Darüber hinaus gibt es zwei Arten von Fällen :

-   Ein schlankes Gehäuse, das nur eine M.2-SSD aufnehmen kann
-   Ein dickeres Gehäuse, das eine M.2-SSD und eine 2-Zoll-SSD aufnehmen kann.5 Zoll

Das sind 4 Referenzen :

-   i3 M2 : [Intel NUC NUC6I3SYK](http://www.ldlc.com/fiche/PB00203086.html) ~ 320 €
-   i3 M2 + 2.5 Zoll : [Intel NUC NUC6I3SYH](http://www.ldlc.com/fiche/PB00203148.html) ~ 320 €
-   i5 M2 : [Intel NUC NUC6I5SYK](http://www.ldlc.com/fiche/PB00203084.html) ~ 460 €
-   i5 M2 + 2.5 Zoll : [Intel NUC NUC6I5SYH](http://www.ldlc.com/fiche/PB00202760.html) ~ 430 €

## SSD

Darüber hinaus benötigen Sie eine SSD und etwas Arbeitsspeicher. Für SSD-Speicher empfehle ich 240 GB oder mehr, es sei denn, Sie entscheiden sich für das Modell mit einem zweiten Steckplatz.5-Zoll-Festplatte (die den Einbau einer zusätzlichen Festplatte ermöglicht) oder ein NAS vom Typ Synology für iSCSI-LUNs. Vergessen Sie nicht, dass eine einfache VM (ohne Speicher) zwischen 20 und 40 GB groß ist; dazu kommen noch die 40 GB für VMware selbst, und schon ist der Speicherplatz aufgebraucht.

> **Wichtig**
>
> VMware unterstützt das Hinzufügen von USB-Laufwerken nicht, daher ist die Erweiterung des verfügbaren Speicherplatzes schwierig

-   [LDLC SSD M.2 2280 F6 PLUS 120 GB](http://www.ldlc.com/fiche/PB00203635.html) ~ 55€
-   [Samsung SSD 850 EVO 120 GB M.2](http://www.ldlc.com/fiche/PB00185923.html) ca. 100 €
-   [LDLC SSD M.2 2280 F6 PLUS 240 GB](http://www.ldlc.com/fiche/PB00203636.html) ~ 105€
-   [Samsung SSD 850 EVO 250 GB M.2](http://www.ldlc.com/fiche/PB00185924.html) ca. 120 €
-   [LDLC SSD M.2 2280 F6 PLUS 480 GB](http://www.ldlc.com/fiche/PB00207301.html) ~ 190€

## Erinnerung

Beachten Sie, dass Sie für den Arbeitsspeicher unbedingt DDR4-Speicher in 260-Pin-SO-DIMM-Steckplätzen benötigen. VMware setzt mindestens 4 GB voraus, ich empfehle jedoch aus Erfahrung mindestens 8 GB (ich habe sogar schon 16 GB verwendet; der NUC unterstützt maximal 32 GB)). Hier wird kein bestimmter Arbeitsspeicher empfohlen; der billigste funktioniert einwandfrei (ich kaufe allerdings immer 2er-Packs, da dies die Leistung verbessert)) :

-   [Crucial SO-DIMM DDR4 8 GB (2 x 4 GB) 2133 MHz CL15 SR X8](http://www.ldlc.com/fiche/PB00204134.html) ~ 35€
-   [Crucial SO-DIMM DDR4 16 GB (2x8 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204135.html) ~ 65€
-   [Crucial SO-DIMM DDR4 32 GB (2 x 16 GB) 2133 MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204136.html) ca. 120 €

# Installationsvorbereitung

Bevor Sie mit der eigentlichen Installation beginnen, müssen Sie zuerst VMware herunterladen und auf einem USB-Laufwerk speichern.

## VMware-Download

> **Wichtig**
>
> Wenn Sie VMware 6 installieren.5. Es gibt ein Problem mit dem neuen USB-Management und den Z-Wave-Sticks; damit es funktioniert, müssen Sie Folgendes anwenden: [KB](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147650). Beachten Sie, dass dieses Verfahren in VMware 6.7 nicht mehr erforderlich ist

Das ist tatsächlich der schwierigste Teil, glaube ich; um es Ihnen zu erleichtern, müssen Sie :

-   gehe zu [Hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) und registrieren
-   Warten Sie auf die E-Mail zur Bestätigung Ihrer Registrierung
-   zurückkehren [Hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) und melden Sie sich an (möglicherweise werden Sie aufgefordert, die Allgemeinen Geschäftsbedingungen zu akzeptieren; dies müssen Sie bestätigen))
-   dann geh [Dort](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2) und fügen Sie Ihrem Konto „ESXi ISO-Image (einschließlich VMware Tools)“ hinzu)"
-   endlich zurückkehren [Hier](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) Dort, unter „Download-Pakete“, sollte sich ein „ESXi ISO-Image (inkl. VMware Tools)“-Paket befinden, das Sie herunterladen müssen

![installation.vmware.nuc](images/installation.vmware.nuc.PNG)

Direkt darüber finden Sie auch Ihren Lizenzschlüssel; Sie können diese Gelegenheit nutzen, um ihn abzurufen.

## Rufus herunterladen

Hier ist es viel einfacher, Sie müssen nur klicken [Dort](http://rufus.akeo.ie/downloads/rufus-2.9.exe). Als Nächstes müssen Sie die .exe-Datei starten

## Erstellen des bootfähigen USB-Laufwerks

Auch hier ist es ganz einfach, so konfigurieren Sie Rufus :

![installation.vmware.nuc2](images/installation.vmware.nuc2.PNG)

Sie müssen lediglich auf Start klicken und warten.

# Auspacken und Zusammenbau des NUC

Hier sind die 3 Komponenten für meinen NUC :

-   Intel NUC NUC6I5SYH
-   Samsung SSD 850 EVO 250 GB M.2
-   CORSAIR VENGEANCE SO-DIMM DDR4 16 GB (2 x 8 GB) 2400 MHz CL16

![installation.vmware.nuc3](images/installation.vmware.nuc3.jpg)

Die NUC-Box :

![installation.vmware.nuc4](images/installation.vmware.nuc4.jpg)

Eröffnung dieses :

![installation.vmware.nuc5](images/installation.vmware.nuc5.jpg)

Die Komponenten aus ihrer Verpackung :

![installation.vmware.nuc6](images/installation.vmware.nuc6.jpg)

Das Öffnen des NUC ist sehr einfach: Drehen Sie ihn um, lösen Sie die vier Schrauben unter den Füßen (sie lassen sich nicht vollständig herausnehmen, das ist normal, Sie müssen sie nur lockern), und ziehen Sie dann vorsichtig an den Schrauben, um den NUC zu öffnen:

![installation.vmware.nuc7](images/installation.vmware.nuc7.jpg)

Nachdem die SSD (links) eingebaut ist, ist es etwas mühsam, die Schraube am Ende, mit der sie befestigt ist, wieder einzusetzen; zum Glück muss man das nur einmal machen

![installation.vmware.nuc8](images/installation.vmware.nuc8.jpg)

Speicherinstallation (rechts)) :

![installation.vmware.nuc10](images/installation.vmware.nuc10.jpg)

Und damit ist das Thema erledigt, Sie können das Fenster schließen (es sei denn, Sie haben sich natürlich für eine SSD der Version 2.0 entschieden).5 Zoll, die in diesem Fall in den Deckel eingeführt werden müssen).

# VMware-Installation

Es ist ganz einfach: Stecken Sie einfach den USB-Stick in einen der USB-Anschlüsse des NUC, verbinden Sie einen Bildschirm mit dem HDMI-Anschluss, eine Tastatur und das Netzteil. Sie schalten den NUC ein, die Installation startet automatisch :

![installation.vmware.nuc11](images/installation.vmware.nuc11.jpg)

> **Notiz**
>
> Ich habe vergessen, Screenshots der Lizenzvalidierung zu machen; Sie müssen lediglich den Anweisungen folgen und zustimmen

Wählen Sie hier sorgfältig die Festplatte aus, die der SSD entspricht (Sie können sie entweder anhand des Namens oder der Größe identifizieren))

![installation.vmware.nuc13](images/installation.vmware.nuc13.jpg)

Wählen Sie „Französisch“ aus" :

![installation.vmware.nuc14](images/installation.vmware.nuc14.jpg)

Legen Sie ein Passwort fest; zunächst empfehle ich etwas Einfaches wie "oooo" (wir werden es später ändern)) :

![installation.vmware.nuc15](images/installation.vmware.nuc15.jpg)

Durch Drücken von F11 bestätigen :

![installation.vmware.nuc16](images/installation.vmware.nuc16.jpg)

Die Installation dauert 10 bis 20 Minuten. Anschließend müssen Sie den USB-Stick entfernen und warten, bis das System neu gestartet ist

![installation.vmware.nuc17](images/installation.vmware.nuc17.jpg)

Sobald der Neustart abgeschlossen ist, sollten Sie Folgendes haben: :

![installation.vmware.nuc18](images/installation.vmware.nuc18.jpg)

VMware ist installiert (und gibt Ihnen sogar freundlicherweise seine IP-Adresse an), jetzt müssen Sie nur noch damit herumspielen !!!

Im Folgenden finden Sie eine [Tutorial](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.creer_une_vm.html) für die Erstellung Ihrer ersten VM. Und Sie werden feststellen [Hier](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.trucs_et_astuces.html) ein Tutorial mit Tipps und Tricks (zum Beispiel zur Installation Ihrer VMware-Lizenz))

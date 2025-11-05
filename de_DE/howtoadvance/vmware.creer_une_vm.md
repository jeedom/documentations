# Erstellen Sie eine virtuelle Maschine mit VMware

Hier zeigen wir Ihnen, wie Sie eine VM unter VMware erstellen.

Eines ist vorab über VMware zu wissen: Es gibt zwei Möglichkeiten, es zu verwalten :

-   die Weboberfläche (standardmäßig in Version 6 vorhanden).(0 Update 2 oder über eine VIB-Datei für andere Versionen) Der Zugriff erfolgt über IP\_ESXI/ui
-   VMwares älterer Thick Client (vSphere Client))

Ich werde hier vor allem die Weboberfläche verwenden, da ich denke, dass sie die Zukunft von VMware ist, das den Thick Client zunehmend aufgibt (tatsächlich alle neuen Funktionen seit Version 5).1 sind mit dem Thick Client nicht nutzbar).

Beachten Sie außerdem, dass die Weboberfläche bei VMware noch in der Entwicklung ist; es kann daher zu Fehlern oder Verzögerungen kommen, die sich jedoch durch ein schnelles Neuladen der Seite beheben lassen.

# Melden Sie sich an der Weboberfläche an

Öffnen Sie IP\_ESXI/ui mit Ihrem Internetbrowser. Sie sollten Folgendes haben: :

![vmware.createvm3](images/vmware.createvm3.PNG)

> **Notiz**
>
> Falls Sie noch nichts haben, empfehle ich Ihnen die Installation der Weboberfläche; alle Informationen [Hier](https://doc.jeedom.com/de_DE/howtoadvance/vmware.trucs_et_astuces)

Geben Sie Ihre ESXi-Anmeldedaten ein :

![vmware.createvm4](images/vmware.createvm4.PNG)

Wie Sie sehen, ist die Benutzeroberfläche sehr ansprechend und bietet viele Möglichkeiten. Ich werde nicht ins Detail gehen, aber schon von diesem Bildschirm aus lässt sich vieles erledigen :

-   ESXi stoppen/neu starten
-   Ressourcennutzung anzeigen (CPU, Arbeitsspeicher und Festplatte))
-   um Informationen über Ihr System zu erhalten (Betriebszeit, VMware-Version, BIOS-Version, Datenspeicheranzeige))
-   Schaltfläche zum Erstellen einer VM (wir werden sie gleich danach verwenden))
-   Eine Aktionsschaltfläche, die unter anderem das Umschalten in den Wartungsmodus ermöglicht (nützlich, wenn Sie einen ESXi-Cluster haben, sonst werden Sie ihn nie verwenden), sowie das Aktivieren/Deaktivieren des SSH-Dienstes (wird im Tutorial zur Backup-Konfiguration verwendet))

# Senden der Installations-ISO

Nach dem Herunterladen Ihrer Installations-ISO ([Hier](https://cdimage.debian.org/cdimage/archive/11.8.0/amd64/iso-cd/debian-11.8.0-amd64-netinst.iso) zum Beispiel für Debian 11.(8 in netinstall), Sie müssen es auf Ihrem Datenspeicher ablegen.

Klicken Sie dazu auf Datenspeicher :

![vmware.createvm18](images/vmware.createvm18.PNG)

Wählen Sie Ihren Datenspeicher aus (er heißt üblicherweise Datenspeicher1)) :

![vmware.createvm19](images/vmware.createvm19.PNG)

Klicken Sie auf „Datenbankbrowser“" :

![vmware.createvm20](images/vmware.createvm20.PNG)

Klicken Sie auf „Herunterladen“ (die erste Option)) :

![vmware.createvm21](images/vmware.createvm21.PNG)

Wählen Sie die zuvor heruntergeladene ISO-Datei aus und bestätigen Sie :

![vmware.createvm22](images/vmware.createvm22.PNG)

Anschließend können Sie den Fortschritt der Sendung verfolgen :

![vmware.createvm23](images/vmware.createvm23.PNG)

Nach Abschluss des Vorgangs können Sie sehen, dass Ihre ISO-Datei erfolgreich im Datenspeicher angekommen ist :

![vmware.createvm24](images/vmware.createvm24.PNG)

# Erstellen Ihrer ersten VM

Klicken Sie auf die Schaltfläche „VM erstellen/registrieren“" :

![vmware.createvm5](images/vmware.createvm5.PNG)

Weiter :

![vmware.createvm6](images/vmware.createvm6.PNG)

Als Nächstes geben Sie Ihrem Rechner einen Namen und legen das Betriebssystem fest (hier installieren wir Debian)) :

![vmware.createvm7](images/vmware.createvm7.PNG)

Geben Sie den Zieldatenspeicher an :

![vmware.createvm8](images/vmware.createvm8.PNG)

Hier können Sie die Einstellungen Ihres Rechners konfigurieren (Festplatte, CPU, Arbeitsspeicher usw.)) :

![vmware.createvm9](images/vmware.createvm9.PNG)

> **Notiz**
>
> Alle diese Einstellungen lassen sich nachträglich problemlos ändern. Es ist jedoch wichtig zu wissen, dass die Größe einer Festplatte nicht wirklich verkleinert werden kann; man kann sie vergrößern (dazu muss man aber wissen, wie man dies anschließend im Betriebssystem verwaltet), aber nicht verkleinern.

Wählen Sie im CD/DVD-Laufwerk „ISO-Dateidatenbank“ aus" :

![vmware.createvm10](images/vmware.createvm10.PNG)

Wählen Sie anschließend den Speicherort Ihrer ISO-Datei aus (siehe vorheriges Kapitel) und bestätigen Sie dies :

![vmware.createvm11](images/vmware.createvm11.PNG)

Klicken Sie dann auf Weiter :

![vmware.createvm12](images/vmware.createvm12.PNG)

Anschließend wird Ihnen eine Zusammenfassung Ihrer Konfiguration angezeigt; klicken Sie auf „Fertigstellen“" :

![vmware.createvm13](images/vmware.createvm13.PNG)

Eine Meldung oben bestätigt die Funktion; klicken Sie anschließend auf „Virtuelle Maschinen“" :

![vmware.createvm14](images/vmware.createvm14.PNG)

Ihre virtuelle Maschine sollte nun angezeigt werden (falls nicht, klicken Sie auf „Aktualisieren“). Klicken Sie darauf :

![vmware.createvm15](images/vmware.createvm15.PNG)

Sie sollten nun eine Seite wie diese sehen; klicken Sie auf die Wiedergabetaste :

![vmware.createvm16](images/vmware.createvm16.PNG)

Ihr Computer wird hochfahren und Sie können Ihr Betriebssystem installieren :

![vmware.createvm17](images/vmware.createvm17.PNG)

> **Wichtig**
>
> Sobald Ihre Maschine installiert ist, MÜSSEN Sie unbedingt die VMware Tools installieren (dadurch erhält VMware Informationen über Ihre VM und kann sie ordnungsgemäß herunterfahren)). Unter Debian führen Sie einfach "sudo apt-get -y install open-vm-tools" aus".

Für den Rest der Installation lade ich Sie ein, dies zu lesen [Tutorial](https://doc.jeedom.com/de_DE/howtoadvance/debian.installation)

# Binden Sie die USB-Geräte in die VM ein

> **Notiz**
>
> Falls Ihnen die unten aufgeführten Optionen nicht zur Verfügung stehen, müssen Sie den ESXi Embedded Host Client aktualisieren. Alle Informationen [Hier](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.trucs_et_astuces.html)

Es kommt zwar selten vor, aber ich brauchte es für Jeedom. Ich habe Z-Wave-, RFXcom-, Edisio-, EnOcean- und GSM-Dongles an meinen ESXi-Host angeschlossen und musste sie mit meiner Jeedom-VM verbinden, um sie nutzen zu können.

> **Notiz**
>
> Für Z-Wave, RFXcom, Edisio und EnOcean gibt es keine Probleme; für GSM-Dongles müssen Sie Folgendes beachten [Tutorial](https://doc.jeedom.com/de_DE/howtoadvance/gsm.huawei_mode_modem) Zuerst muss der Schlüssel ausschließlich im Modemmodus betrieben werden; andernfalls wird er vom ESXi-Server nicht korrekt erkannt.

Gehen Sie zu Ihrer VM und wählen Sie dann „Einstellungen bearbeiten“" :

![vmware.createvm25](images/vmware.createvm25.PNG)

Klicken Sie auf „Weiteres Gerät hinzufügen“ und dann auf USB-Controller :

![vmware.createvm26](images/vmware.createvm26.PNG)

> **Notiz**
>
> Der folgende Schritt muss für jedes USB-Gerät, das Sie anschließen möchten, wiederholt werden

Speichern Sie die Einstellungen, gehen Sie dann erneut auf „Einstellungen ändern“, dann auf „Weiteres Gerät hinzufügen“ und anschließend auf „USB-Gerät“" :

![vmware.createvm27](images/vmware.createvm27.PNG)

Wählen Sie Ihr USB-Gerät aus der Dropdown-Liste aus :

![vmware.createvm28](images/vmware.createvm28.PNG)

Und schon ist Ihr Gerät mit Ihrer VM verbunden. Es verbindet sich nach jedem Neustart automatisch wieder mit der VM, und auch wenn Sie es physisch trennen und wieder anschließen, wird die Verbindung zur VM wiederhergestellt. Mit anderen Worten: Die Nutzung ist jetzt völlig nahtlos.

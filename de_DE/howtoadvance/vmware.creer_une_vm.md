# Erstellen Sie eine VM unter VMware

Wir werden hier sehen, wie man eine VM unter VMware erstellt.

Zunächst gibt es eine wichtige Sache, die Sie über VMware wissen sollten: Es gibt zwei Möglichkeiten, es zu verwalten :

-   das Webinterface (standardmäßig vorhanden in 6.0 Update 2 oder über ein Vib für andere Versionen), wird über IP\_ESXI/ui darauf zugegriffen
-   Der schwere und historische Client von VMware (vSphere client)

Hier werde ich hauptsächlich das Webinterface nutzen, weil ich denke, dass es die Zukunft von VMware ist, die sich immer mehr vom Heavy Client verabschiedet (außerdem all die neuen Features seit dem 5.1 kann nicht mit dem Thick Client verwendet werden).

Beachten Sie auch, dass das Webinterface bei VMware noch eingerichtet wird, in der Tat werden Sie mit nur einer kleinen Aktualisierung der Seite sicherlich auf einige Fehler oder Verlangsamungen stoßen, und sie startet wieder ohne Sorgen.

# Melden Sie sich an der Weboberfläche an

Gehen Sie mit Ihrem Internetbrowser zu IP\_ESXI/ui, das müssen Sie haben :

![vmware.createvm3](images/vmware.createvm3.PNG)

> **Notiz**
>
> Wenn Sie nichts haben, rate ich Ihnen, das Webinterface zu installieren, alle Informationen [hier](https://doc.jeedom.com/de_DE/howtoadvance/vmware.trucs_et_astuces)

Geben Sie Ihre ESXI-Anmeldeinformationen ein :

![vmware.createvm4](images/vmware.createvm4.PNG)

Wie Sie sehen können, ist die Benutzeroberfläche recht nett und ermöglicht Ihnen, viele Dinge zu tun. Ich werde nicht ins Detail gehen, aber Sie können dies bereits von diesem Bildschirm aus tun :

-   ESXi herunterfahren/neu starten
-   siehe Ressourcennutzung (CPU, Arbeitsspeicher und Festplatte)
-   Informationen über Ihr System haben (Uptime, VMware-Version, Bios-Version, Anzeige von Datastores)
-   Schaltfläche zum Erstellen einer VM (wir werden sie gleich danach verwenden)
-   eine Aktionsschaltfläche, mit der Sie in den Wartungsmodus wechseln können (nützlich, wenn Sie einen ESXi-Cluster haben, sonst werden Sie ihn nie verwenden), den SSH-Dienst aktivieren/deaktivieren (wird im Backup-Konfigurations-Tutorial verwendet)

# Senden der Installations-ISO

Nach dem Herunterladen Ihrer Installations-ISO ([hier](http://cdimage.debian.org/debian-cd/10.4.0/amd64/iso-cd/debian-10.4.0-amd64-netinst.iso) zum Beispiel für Debian 8.5 in netinstall), müssen Sie es auf Ihren Datenspeicher legen.

Klicken Sie dazu auf Datenspeicher :

![vmware.createvm18](images/vmware.createvm18.PNG)

Wählen Sie Ihren Datenspeicher aus (normalerweise heißt er datastore1) :

![vmware.createvm19](images/vmware.createvm19.PNG)

Klicken Sie auf „Datenspeicher-Browser" :

![vmware.createvm20](images/vmware.createvm20.PNG)

Klicken Sie auf „Herunterladen“ (die erste) :

![vmware.createvm21](images/vmware.createvm21.PNG)

Wählen Sie die zuvor heruntergeladene ISO aus und bestätigen Sie :

![vmware.createvm22](images/vmware.createvm22.PNG)

Sie können dann den Fortschritt der Sendung verfolgen :

![vmware.createvm23](images/vmware.createvm23.PNG)

Sobald Sie fertig sind, können Sie sehen, dass Ihre ISO im Datenspeicher angekommen ist :

![vmware.createvm24](images/vmware.createvm24.PNG)

# Erstellen Sie Ihre erste VM

Klicken Sie auf die Schaltfläche „VM erstellen/registrieren“" :

![vmware.createvm5](images/vmware.createvm5.PNG)

Weiter klicken :

![vmware.createvm6](images/vmware.createvm6.PNG)

Geben Sie dann Ihrer Maschine einen Namen und geben Sie ihr Betriebssystem an (hier installieren wir eine Debian) :

![vmware.createvm7](images/vmware.createvm7.PNG)

Geben Sie den Zieldatenspeicher an :

![vmware.createvm8](images/vmware.createvm8.PNG)

Hier können Sie die Parameter Ihrer Maschine konfigurieren (Festplatte, CPU, Arbeitsspeicher…​) :

![vmware.createvm9](images/vmware.createvm9.PNG)

> **Notiz**
>
> Alle diese Parameter können ohne Bedenken nachträglich geändert werden, beachten Sie jedoch, dass es nicht wirklich möglich ist, die Größe einer Festplatte zu verringern, sie kann erhöht werden (aber Sie müssen wissen, wie dies auf der Ebene der 'OS dann) aber nicht reduzieren.

Wählen Sie auf dem CD/DVD-Laufwerk „Datenbank-ISO-Datei" :

![vmware.createvm10](images/vmware.createvm10.PNG)

Wählen Sie dann den Ort aus, an dem Ihr ISO gespeichert ist (siehe vorheriges Kapitel) und bestätigen Sie :

![vmware.createvm11](images/vmware.createvm11.PNG)

Dann mach weiter :

![vmware.createvm12](images/vmware.createvm12.PNG)

Sie haben dann eine Zusammenfassung Ihrer Konfiguration, klicken Sie auf „Fertig stellen" :

![vmware.createvm13](images/vmware.createvm13.PNG)

Eine Meldung oben sagt Ihnen, dass es gut ist, und klicken Sie dann auf "Virtuelle Maschinen"" :

![vmware.createvm14](images/vmware.createvm14.PNG)

Sie sollten Ihre virtuelle Maschine sehen (wenn nicht, klicken Sie auf „Aktualisieren“), klicken Sie darauf :

![vmware.createvm15](images/vmware.createvm15.PNG)

Sie müssen eine Seite dieses Typs haben, klicken Sie auf die Wiedergabeschaltfläche :

![vmware.createvm16](images/vmware.createvm16.PNG)

Ihr Computer wird gestartet und Sie können Ihr Betriebssystem installieren :

![vmware.createvm17](images/vmware.createvm17.PNG)

> **Wichtig**
>
> Sobald Ihr Computer installiert ist, ist es UNBEDINGT erforderlich, die VMware-Tools zu installieren (dies ermöglicht VMware, Informationen über Ihre VM zu erhalten und sie ordnungsgemäß herunterzufahren). Führen Sie unter Debian einfach "sudo apt-get -y install open-vm-tools".

Für den Rest der Installation lade ich Sie ein, dies zu lesen [Lernprogramm](https://doc.jeedom.com/de_DE/howtoadvance/debian.installation)

# Mounten Sie USB-Geräte in der VM

> **Notiz**
>
> Wenn Sie die folgenden Optionen nicht haben, müssen Sie den ESXi Embedded Host Client aktualisieren, alle Informationen [hier](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.trucs_et_astuces.html)

Es ist eine ziemlich seltene Notwendigkeit, aber ich musste es für Jeedom verwenden, tatsächlich habe ich die Zwave-, RFXcom-, edisio-, enOcean- und GSM-Schlüssel an meinem ESXi angeschlossen und ich musste sie mit meiner VM Jeedom verbinden, um es verwenden zu können.

> **Notiz**
>
> Für Zwave, RFXcom, edisio und enOcean gibt es kein Problem, für GSM-Schlüssel müssen Sie dies befolgen [Lernprogramm](https://doc.jeedom.com/de_DE/howtoadvance/gsm.huawei_mode_modem) Vorher den Schlüssel nur im Modemmodus erzwingen sonst wird er auf dem ESXi nicht richtig gesehen.

Gehen Sie zu Ihrer VM und führen Sie „Einstellungen ändern“ aus" :

![vmware.createvm25](images/vmware.createvm25.PNG)

Klicken Sie auf "Anderes Gerät hinzufügen" und dann auf USB-Controller :

![vmware.createvm26](images/vmware.createvm26.PNG)

> **Notiz**
>
> Der folgende Schritt muss für jedes USB-Gerät, das Sie anschließen möchten, wiederholt werden

Speichern, "Einstellungen ändern" wiederholen, dann "Weiteres Gerät hinzufügen" und "USB-Gerät" :

![vmware.createvm27](images/vmware.createvm27.PNG)

Wählen Sie Ihr USB-Gerät aus der Dropdown-Liste aus :

![vmware.createvm28](images/vmware.createvm28.PNG)

Und jetzt ist Ihr Gerät an Ihre VM angeschlossen. Bei jedem Neustart wird es automatisch wieder mit der VM verbunden, und wenn Sie es physisch trennen/verbinden, wird es wieder mit Ihrer VM verbunden. Mit anderen Worten, die Nutzung ist jetzt völlig transparent.

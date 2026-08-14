# Eine virtuelle Maschine unter VMware erstellen

Hier erfahren wir, wie man eine VM unter VMware erstellt.

Zunächst einmal gibt es eine wichtige Kleinigkeit, die man über VMware wissen sollte: Es gibt zwei Möglichkeiten, es zu verwalten:

-   Die Weboberfläche (standardmäßig in Version 6.0 Update 2 vorhanden oder über ein VIB für andere Versionen) ist über IP\_ESXI/ui erreichbar.
-   der traditionelle, ressourcenintensive Client von VMware (vSphere-Client)

Hier werde ich hauptsächlich die Weboberfläche nutzen, da ich glaube, dass dies die Zukunft von VMware ist, das den Fat-Client zunehmend vernachlässigt (übrigens sind alle Neuerungen seit Version 5.1 nicht mehr mit dem Fat-Client nutzbar).

Beachten Sie außerdem, dass sich die Weboberfläche bei VMware noch im Aufbau befindet. Es kann daher durchaus zu einigen Fehlern oder Verzögerungen kommen, aber ein kurzes Aktualisieren der Seite reicht aus, damit alles wieder reibungslos läuft.

# Anmeldung bei der Weboberfläche

Rufen Sie mit Ihrem Webbrowser die Adresse IP\_ESXI/ui auf. Dort sollten Sie Folgendes sehen:

![vmware.createvm3](../images/vmware.createvm3.PNG)

> **Hinweis**
>
> Falls Sie noch nichts haben, empfehle ich Ihnen, die Weboberfläche zu installieren. Alle Informationen [hier](vmware.trucs_et_astuces)

Geben Sie Ihre Anmeldedaten für ESXI ein:

![vmware.createvm4](../images/vmware.createvm4.PNG)

Wie Sie sehen können, ist die Benutzeroberfläche recht ansprechend und bietet zahlreiche Möglichkeiten. Ich werde hier nicht ins Detail gehen, aber bereits auf diesem Bildschirm können Sie:

-   ESXi herunterfahren/neu starten
-   Ressourcenauslastung anzeigen (CPU, Arbeitsspeicher und Festplatte)
-   Informationen zu Ihrem System abrufen (Betriebszeit, VMware-Version, BIOS-Version, Anzeige der Datastores)
-   Schaltfläche zum Erstellen einer VM (die werden wir gleich danach verwenden)
-   Eine Aktionsschaltfläche, mit der Sie unter anderem in den Wartungsmodus wechseln können (praktisch, wenn Sie einen ESXi-Cluster haben; andernfalls werden Sie sie nie benutzen) sowie den SSH-Dienst aktivieren/deaktivieren können (wird im Tutorial zur Konfiguration von Backups verwendet)

# Versand der Installations-ISO-Datei

Nachdem Sie Ihre Installations-ISO heruntergeladen haben ([hier](https://cdimage.debian.org/cdimage/archive/11.8.0/amd64/iso-cd/debian-11.8.0-amd64-netinst.iso) (z. B. für Debian 11.8 bei einer Netzwerkinstallation) müssen Sie diese Datei in Ihrem Datastore ablegen.

Klicken Sie dazu auf „Datastore“:

![vmware.createvm18](../images/vmware.createvm18.PNG)

Wählen Sie Ihren Datenspeicher aus (in der Regel heißt er „datastore1“):

![vmware.createvm19](../images/vmware.createvm19.PNG)

Klicken Sie auf „Datenbank-Browser“:

![vmware.createvm20](../images/vmware.createvm20.PNG)

Klicken Sie auf „Herunterladen“ (der erste Link):

![vmware.createvm21](../images/vmware.createvm21.PNG)

Wählen Sie die zuvor heruntergeladene ISO-Datei aus und bestätigen Sie:

![vmware.createvm22](../images/vmware.createvm22.PNG)

Anschließend können Sie den Versandstatus verfolgen:

![vmware.createvm23](../images/vmware.createvm23.PNG)

Sobald der Vorgang abgeschlossen ist, können Sie sehen, dass Ihre ISO-Datei erfolgreich im Datenspeicher angekommen ist:

![vmware.createvm24](../images/vmware.createvm24.PNG)

# Erstellen Ihrer ersten VM

Klicken Sie auf die Schaltfläche „VM erstellen/speichern“:

![vmware.createvm5](../images/vmware.createvm5.PNG)

Klicken Sie auf „Weiter“:

![vmware.createvm6](../images/vmware.createvm6.PNG)

Geben Sie anschließend Ihrem Rechner einen Namen und geben Sie das Betriebssystem an (hier installieren wir Debian):

![vmware.createvm7](../images/vmware.createvm7.PNG)

Geben Sie den Ziel-Datenspeicher an:

![vmware.createvm8](../images/vmware.createvm8.PNG)

Hier können Sie die Einstellungen Ihres Computers (Festplatte, CPU, Arbeitsspeicher…) konfigurieren:

![vmware.createvm9](../images/vmware.createvm9.PNG)

> **Hinweis**
>
> All diese Einstellungen lassen sich nachträglich problemlos ändern. Beachten Sie jedoch, dass es nicht wirklich möglich ist, die Größe einer Festplatte zu verringern; man kann sie zwar vergrößern (muss dies anschließend aber auf Betriebssystemebene entsprechend verwalten), nicht jedoch verkleinern.

Wählen Sie im CD-/DVD-Laufwerk die Option „ISO-Datei aus der Datenbank“ aus:

![vmware.createvm10](../images/vmware.createvm10.PNG)

Wählen Sie anschließend den Speicherort Ihrer ISO-Datei aus (siehe vorheriges Kapitel) und bestätigen Sie:

![vmware.createvm11](../images/vmware.createvm11.PNG)

Gehen Sie anschließend wie folgt vor:

![vmware.createvm12](../images/vmware.createvm12.PNG)

Anschließend erhalten Sie eine Zusammenfassung Ihrer Konfiguration. Klicken Sie auf „Fertigstellen“:

![vmware.createvm13](../images/vmware.createvm13.PNG)

Eine Meldung oben zeigt Ihnen an, dass alles in Ordnung ist. Klicken Sie anschließend auf „Virtuelle Maschinen“:

![vmware.createvm14](../images/vmware.createvm14.PNG)

Sie sollten Ihre virtuelle Maschine sehen (falls nicht, klicken Sie auf „Aktualisieren“) und dann darauf klicken:

![vmware.createvm15](../images/vmware.createvm15.PNG)

Sie sollten eine Seite dieser Art haben. Klicken Sie auf die Wiedergabetaste:

![vmware.createvm16](../images/vmware.createvm16.PNG)

Ihr Rechner wird nun hochfahren, und Sie können mit der Installation Ihres Betriebssystems beginnen:

![vmware.createvm17](../images/vmware.createvm17.PNG)

> **Wichtig**
>
> Sobald Ihre Maschine installiert ist, müssen Sie UNBEDINGT die VMware-Tools installieren (dadurch erhält VMware Informationen über Ihre VM und kann diese ordnungsgemäß herunterfahren). Unter Debian reicht es aus, den Befehl „sudo apt-get -y install open-vm-tools“ auszuführen.

Für die weiteren Schritte der Installation empfehle ich Ihnen, diesen Artikel zu lesen [Anleitung](debian.installation)

# USB-Geräte in der VM einbinden

> **Hinweis**
>
> Wenn die unten aufgeführten Optionen nicht verfügbar sind, müssen Sie den ESXi Embedded Host Client aktualisieren. Alle Informationen [hier](vmware.trucs_et_astuces)

Das kommt zwar eher selten vor, aber ich musste diese Funktion für Jeedom nutzen, da ich auf meinem ESXi-Server Z-Wave-, RFXcom-, Edisio-, enOcean- und GSM-Module angeschlossen habe und diese mit meiner Jeedom-VM verbinden musste, um sie nutzen zu können.

> **Hinweis**
>
> Bei Z-Wave, RFXcom, edisio und enOcean gibt es keine Probleme, bei GSM-Sticks müssen Sie folgende Schritte befolgen: [Anleitung](gsm.huawei_mode_modem) Zuvor muss der Schlüssel in den reinen Modem-Modus versetzt werden, da er sonst vom ESXi nicht korrekt erkannt wird.

Rufen Sie Ihre VM auf und wählen Sie „Einstellungen bearbeiten“:

![vmware.createvm25](../images/vmware.createvm25.PNG)

Klicken Sie auf „Ein weiteres Gerät hinzufügen“ und wählen Sie dann „USB-Controller“ aus:

![vmware.createvm26](../images/vmware.createvm26.PNG)

> **Hinweis**
>
> Der folgende Schritt muss für jedes USB-Gerät wiederholt werden, das Sie anschließen möchten

Speichern Sie die Einstellungen, wählen Sie erneut „Einstellungen bearbeiten“, dann „Ein weiteres Gerät hinzufügen“ und „USB-Gerät“:

![vmware.createvm27](../images/vmware.createvm27.PNG)

Wählen Sie Ihr USB-Gerät aus der Dropdown-Liste aus:

![vmware.createvm28](../images/vmware.createvm28.PNG)

Und schon ist Ihr Gerät an Ihre VM angeschlossen. Bei jedem Neustart wird es automatisch wieder an die VM angeschlossen, und wenn Sie es physisch trennen oder anschließen, wird es ebenfalls wieder an Ihre VM angeschlossen. Mit anderen Worten: Die Nutzung ist nun völlig transparent.

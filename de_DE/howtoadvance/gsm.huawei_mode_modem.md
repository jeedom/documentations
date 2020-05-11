In 90% der Fälle ist es nicht erforderlich, die GSM-Tasten in den Modus zu zwingen
Nur GSM (anstelle von GSM + CD-ROM + Kartenleser), der einzige Fall
Dies ist obligatorisch, wenn Sie den Schlüssel in a verwenden möchten
Jeedom auf einer VM (VMware ESXi). In der Tat, wenn Sie es nicht weitergeben
Im GSM-Modus wird nur der Schlüssel nicht in der Liste von angezeigt
USB-Geräte, die Sie an die VM übergeben können.

> **Important**
>
> Dieses Tutorial wurde unter Windows 10 durchgeführt

Treiberinstallation 
========================

Sobald der Schlüssel mit einem Windows 10-PC verbunden ist, müssen Sie einen haben
neues CD-ROM-Laufwerk. Sie müssen darauf doppelklicken und das installieren
vorgeschlagene Software (es gibt nichts zu ändern, einfach alles zu tun
long).

![gsmonly](images/gsmonly.PNG)

COM-Port-Wiederherstellung 
========================

Dann müssen Sie die Kommunikationsportnummer abrufen. Weiter
Starten Sie das Menü "Start" und suchen Sie nach "Geräte-Manager"
Dieser entfaltet dann den Teil "Ports (COM und LPT)", den Sie haben sollten
Bei einem Artikel mit "HUAWEI" muss man sich nur die Nummer des merken
COM-Anschluss :

![gsmonly2](images/gsmonly2.PNG)

Kitt herunterladen 
=======================

Dann Kitt herunterladen
[hier](https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) et
Starten Sie die heruntergeladene Datei

Kittkonfiguration und nur in den GSM-Modus wechseln 
=======================================================

Nach dem Start konfigurieren Sie Putty wie folgt (indem Sie Ihre Nummer eingeben
COM-Anschluss an Sie, siehe Schritt oben) :

![gsmonly3](images/gsmonly3.PNG)

Ein schwarzes Fenster wird angezeigt (gelegentlich kann ein
Meldung "boot ...", das ist normal, es bedeutet, dass es dir gut geht
mit dem GSM-Schlüssel verbunden). In diesem Fenster müssen Sie eingeben und dann drücken
auf die "Enter" -Taste" :

    AT ^ u2diag = 0

> **Important**
>
> Seien Sie vorsichtig, wenn Sie den Text eingeben, bei dem Sie nichts sehen
> Der Bildschirm ist normal, der Text wird weiterhin berücksichtigt.

Normalerweise müssen Sie im Gegenzug ein OK haben.

Damit ist es fertig. Ihr Schlüssel befindet sich nur im GSM-Modus und Sie
kann es jetzt über VMware verwenden.

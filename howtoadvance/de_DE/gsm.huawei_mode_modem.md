# GSM Huawei Modemkartenmodus

In 90% der Fälle ist es nicht erforderlich, die GSM-Schlüssel nur im GSM-Modus zu erzwingen (anstelle von GSM + CD-ROM + Kartenleser). Der einzige Fall, in dem dies obligatorisch ist, ist, wenn Sie den Schlüssel verwenden möchten in einem Jeedom auf einer VM (VMware ESXi). Wenn Sie es nicht im GSM-Modus übergeben, wird nur der Schlüssel nicht in der Liste der USB-Geräte angezeigt, die Sie an die VM übergeben können.

> **Wichtig**
>
> Dieses Tutorial wurde unter Windows 10 durchgeführt

# Treiberinstallation

Sobald der Schlüssel an einen Windows 10-PC angeschlossen ist, benötigen Sie ein neues CD-ROM-Laufwerk. Sie müssen darauf doppelklicken und die vorgeschlagene Software installieren (es gibt nichts zu ändern, machen Sie einfach die ganze Zeit).

![gsmonly](images/gsmonly.PNG)

# COM-Port-Wiederherstellung

Dann müssen Sie die Kommunikationsportnummer abrufen. Gehen Sie zum "Start" -Menü und suchen Sie nach "Geräte-Manager", starten Sie es und klappen Sie dann den Abschnitt "Ports (COM und LPT)" auf. Sie sollten ein Element mit "HUAWEI" haben. Sie müssen sich dann nur die Nummer des COM-Anschluss :

![gsmonly2](images/gsmonly2.PNG)

# Kitt herunterladen

Dann Kitt herunterladen [hier](https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) und starten Sie die heruntergeladene Datei

# Kittkonfiguration und nur in den GSM-Modus wechseln

Konfigurieren Sie Putty nach dem Start wie folgt (indem Sie Ihre COM-Port-Nummer an sich selbst senden, siehe Schritt oben) :

![gsmonly3](images/gsmonly3.PNG)

Ein schwarzes Fenster wird angezeigt (von Zeit zu Zeit wird möglicherweise die Meldung "boot ..." angezeigt. Dies ist normal. Dies bedeutet, dass Sie gut mit dem GSM-Schlüssel verbunden sind). In diesem Fenster müssen Sie eingeben und dann die Eingabetaste drücken" :

``AT^u2diag=0``

> **Wichtig**
>
> Seien Sie vorsichtig, wenn Sie den Text eingeben, wird auf dem Bildschirm nichts angezeigt. Es ist normal, dass der Text weiterhin berücksichtigt wird.

Normalerweise müssen Sie im Gegenzug ein OK haben.

Damit ist es fertig. Ihr Schlüssel befindet sich nur im GSM-Modus und Sie können ihn jetzt über VMware verwenden.

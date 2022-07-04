# GSM Huawei Modemkartenmodus

In 90 % der Fälle ist es nicht erforderlich, GSM-Schlüssel nur im GSM-Modus zu erzwingen (anstelle von GSM + CDROM + Kartenleser). Der einzige Fall, in dem dies obligatorisch ist, ist, wenn Sie den Schlüssel in einem Jeedom auf einer VM verwenden möchten ( VMware ESXi). Wenn Sie es nicht nur im GSM-Modus übergeben, wird der Schlüssel nicht in der Liste der USB-Geräte angezeigt, die Sie an die VM übergeben können.

> **Wichtig**
>
> Dieses Tutorial wurde auf einem Windows 10 erstellt

# Treiberinstallation

Sobald der Schlüssel mit einem Windows 10-PC verbunden ist, benötigen Sie ein neues CD-ROM-Laufwerk. Sie müssen darauf doppelklicken und die vorgeschlagene Software installieren (es gibt nichts zu ändern, folgen Sie einfach bis zum Ende).

![gsmonly](images/gsmonly.PNG)

# COM-Port-Wiederherstellung

Dann müssen Sie die Nummer des Kommunikationsports erhalten. Gehen Sie zum Menü „Start“ und suchen Sie nach „Geräte-Manager“, starten Sie es und klappen Sie dann den Abschnitt „Anschlüsse (COM und LPT)“ auf, Sie sollten ein Element haben, das „HUAWEI“ enthält, dann müssen Sie sich nur noch die Nummer merken COM-Port :

![gsmonly2](images/gsmonly2.PNG)

# Putty-Download

Dann Putty herunterladen [hier](https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) und führen Sie die heruntergeladene Datei aus

# Putty konfigurieren und in den Nur-GSM-Modus wechseln

Nach dem Start konfigurieren Sie putty wie folgt (geben Sie Ihre eigene COM-Portnummer ein, siehe Schritt oben) :

![gsmonly3](images/gsmonly3.PNG)

Es erscheint ein schwarzes Fenster (von Zeit zu Zeit kann eine "boot…​"-Meldung erscheinen, dies ist normal, dies bedeutet, dass Sie korrekt mit dem GSM-Schlüssel verbunden sind). Geben Sie in diesem Fenster ein und drücken Sie die „Enter“-Taste" :

``AT^u2diag=0``

> **Wichtig**
>
> Seien Sie vorsichtig, wenn Sie den Text eingeben, Sie werden nichts auf dem Bildschirm sehen, es ist normal, der Text wird immer noch berücksichtigt.

Normalerweise müssen Sie im Gegenzug ein OK haben.

Hier ist es fertig. Ihr Schlüssel befindet sich nur im GSM-Modus und Sie können ihn jetzt über VMware verwenden.

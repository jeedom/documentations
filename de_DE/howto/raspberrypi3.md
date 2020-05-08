Ziel 
========

Hier finden Sie die Dokumentation zur Installation von Jeedom auf einem
Himbeere PI 3 **ohne microSD-Karte.**

PI3 bietet in der Tat die Möglichkeit, direkt auf einem zu booten
USB-Gerät und befreien Sie sich daher manchmal von der microSD-Karte
Probleme erzeugen (Korruption).

**Der Installationsvorgang ist streng identisch mit dem auf a
microSD-Karte, aber stellen Sie sicher, dass Sie eine Firmware haben
jour.**

Öffnen Sie dazu eine SSH-Verbindung. (wenn du nicht weißt wie,
Beobachten Sie die Installation auf microSD :
[Hier](https://doc.jeedom.com/de_DE/installation/index.html)
)

    vcgencmd otp_dump | grep 17:

Du musst zurück :

    17:3020000a

In diesem Fall ist Ihr PI3 ordnungsgemäß zum Booten konfiguriert
USB. Wenn es nichts findet, startet es normal auf einer Karte
microSD.

Wenn die Rückgabe anders ist, müssen Sie nur aktualisieren
jour.

    sudo apt-get update; sudo apt-get install rpi-update

puis

    sudo rpi-update

Starten Sie dann PI3 neu

    sudo neu starten

> **Important**
>
> Wählen Sie eine mSATA-SSD, um Stromprobleme zu vermeiden
> geringer Verbrauch.

> **Tip**
>
> Sie können Jeedom jetzt installieren, indem Sie genau dasselbe befolgen
> Verfahren mit einer SD-Karte.
> [Hier](https://doc.jeedom.com/de_DE/installation/index.html)

Mögliche Anpassungen 
=====================

**Berücksichtigen Sie dann die folgenden Anmerkungen :**

> **Important**
>
> Die folgenden Änderungen sind das Ergebnis von Problemen, auf die gestoßen ist
> die Benutzer. Sie müssen sie an Ihren Fall anpassen. Die Unterstützung
> Jeedom greift nicht bei Problemen im Zusammenhang mit Ihrer Konfiguration ein.

-   **Wenn Sie auf Swap-Probleme stoßen, sollten Sie diese ändern.**

    -   **Erhöhen Sie die Größe** :

        -   Ändern Sie die Größe des Swaps, indem Sie diese Datei öffnen :

<!-- -->

    sudo nano / etc / dphys-swapfile

-   Finden Sie die richtige Einstellung :

<!-- -->

    CONF_SWAPSIZE = 100

-   Ändern Sie dann beispielsweise den Wert von CONF\_SWAPSIZE in 1024
    neu starten :

<!-- -->

    sudo neu starten

-   **Ändern Sie den Swap-Call-Wert.**

Standardmäßig ruft das System den Swap auf, wenn weniger als 40% von vorhanden sind
Ram.

-   Öffnen Sie die Datei, um diese Einstellung zu ändern :

<!-- -->

    sudo nano /etc/sysctl.conf

-   Fügen Sie diese Zeile hinzu, um Pi3 zu bitten, nur den Swap zu verwenden
    wenn 10% des verfügbaren Speichers vorhanden sind (100 MB)
    Ram verfügbar) :

<!-- -->

    vm.swappiness = 10

-   Dann neu starten :

<!-- -->

    sudo neu starten

-   **Deaktivieren Sie das integrierte Bluetooth, da es nicht mit der Karte kompatibel ist
    GPIO zwave.me**

    -   Öffnen Sie die betreffende Datei :

<!-- -->

    sudo nano /boot/config.txt

-   Zeile hinzufügen :

<!-- -->

    dtoverlay = pi3-disable-bt

-   Machen Sie einen sauberen Stopp

<!-- -->

    Sudo Halt

-   Trennen Sie die Verbindung wieder (kein Sudo-Neustart!).



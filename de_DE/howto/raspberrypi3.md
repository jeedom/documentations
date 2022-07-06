# Himbeere PI 3

Hier finden Sie die Dokumentation zur Installation von Jeedom auf einem Himbeer-PI 3 **ohne microSD-Karte.**

Der PI3 bietet in der Tat die Möglichkeit, direkt auf ein USB-Gerät zu booten und sich so von der microSD-Karte zu befreien, die manchmal Probleme verursacht (Beschädigung)).

**Der Installationsvorgang ist streng identisch mit dem auf einer microSD-Karte, Sie müssen jedoch sicherstellen, dass Sie über die aktuelle Firmware verfügen.**

Öffnen Sie dazu eine SSH-Verbindung. (Wenn Sie nicht wissen wie, sehen Sie sich die Installation auf microSD an : [Hier](https://doc.jeedom.com/de_DE/installation/index.html)

``vcgencmd otp_dump | grep 17:``

Du musst zurück :

``17:3020000a``

In diesem Fall ist Ihr PI3 ordnungsgemäß für den Start von USB konfiguriert. Wenn nichts gefunden wird, wird es normal auf einer microSD-Karte gestartet.

Wenn die Rückgabe anders ist, müssen Sie nur aktualisieren.

``sudo apt-get update; sudo apt-get install rpi-update``

puis

``sudo rpi-update``

Starten Sie dann PI3 neu

``sudo reboot``

> **Wichtig**
>
> Wählen Sie eine mSATA-SSD mit geringem Verbrauch, um Stromprobleme zu vermeiden.

> **Spitze**
>
> Sie können Jeedom jetzt installieren, indem Sie genau so vorgehen wie mit einer SD-Karte. [Hier](https://doc.jeedom.com/de_DE/installation/index.html)

## Mögliche Anpassungen

**Die folgenden Bemerkungen müssen dann berücksichtigt werden :**

> **Wichtig**
>
> Die folgenden Änderungen sind das Ergebnis von Problemen, auf die Benutzer stoßen. Sie müssen sie an Ihren Fall anpassen. Der Jeedom-Support greift nicht bei Problemen im Zusammenhang mit Ihrer Konfiguration ein.

-   **Wenn Sie auf Swap-Probleme stoßen, sollten Sie diese ändern.**
    -   **Erhöhen Sie die Größe** :
        -   Ändern Sie die Größe des Swaps, indem Sie diese Datei öffnen :
            ``sudo nano /etc/dphys-swapfile``
-   Finden Sie die richtige Einstellung :
    ``CONF_SWAPSIZE=100``
-   Ändern Sie den Wert von ``CONF_SWAPSIZE`` bis 1024, dann neu starten :
    ``sudo reboot``
-   **Ändern Sie den Swap-Call-Wert.** Standardmäßig ruft das System den Swap auf, wenn weniger als 40% des Ram vorhanden sind.
-   Öffnen Sie die Datei, um diese Einstellung zu ändern :
    ``sudo nano /etc/sysctl.conf``
-   Fügen Sie diese Zeile hinzu, um Pi3 zu bitten, den Swap nur zu verwenden, wenn 10% des verfügbaren Speichers (100 MB verfügbarer RAM) vorhanden sind) :
    ``vm.swappiness = 10``
-   Dann neu starten :
    ``sudo reboot``
-   **Deaktivieren Sie das integrierte Bluetooth, da es nicht mit der GPIO-Karte zwave.me kompatibel ist**
    -   Öffnen Sie die betreffende Datei :
    ``sudo nano /boot/config.txt``
-   Zeile hinzufügen :
    ``dtoverlay=pi3-disable-bt``
-   Machen Sie einen sauberen Stopp
    ``sudo halt``
-   Trennen Sie die Verbindung wieder (kein Sudo-Neustart !).

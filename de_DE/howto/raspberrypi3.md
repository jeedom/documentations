# Himbeer-Pi 3

Hier finden Sie die Dokumentation zur Installation von Jeedom auf einem Raspberry PI 3 **ohne microSD-Karte.**

Der PI3 bietet tatsächlich die Möglichkeit, direkt von einem USB-Gerät zu booten und Sie so von der microSD-Karte zu befreien, die manchmal Probleme verursacht (Korruption).

**Der Installationsvorgang ist streng identisch mit dem auf einer microSD-Karte, aber Sie müssen sicherstellen, dass Sie über die aktuelle Firmware verfügen.**

Öffnen Sie dazu eine SSH-Verbindung. (Wenn Sie nicht wissen, wie es geht, sehen Sie sich die Installation auf microSD an : [Hier](https://doc.jeedom.com/de_DE/installation/index.html)

``vcgencmd otp_dump | grep 17:``

Du musst zurück :

``17:3020000a``

Wenn ja, ist Ihr PI3 richtig konfiguriert, um von USB zu booten. Wenn es nichts findet, bootet es normal auf einer microSD-Karte.

Wenn die Rückgabe anders ist, müssen Sie nur aktualisieren.

``sudo apt-get update; sudo apt-get install rpi-update``

puis

``sudo rpi-update``

Starten Sie dann den PI3 neu

``sudo reboot``

> **Wichtig**
>
> Um Stromprobleme zu vermeiden, entscheiden Sie sich für eine stromsparende mSATA-SSD.

> **Tipp**
>
> Sie können Jeedom jetzt genauso installieren wie bei einer SD-Karte. [Hier](https://doc.jeedom.com/de_DE/installation/index.html)

## Mögliche Anpassungen

**Dabei sind die folgenden Bemerkungen zu berücksichtigen :**

> **Wichtig**
>
> Die folgenden Änderungen sind das Ergebnis von Problemen, auf die Benutzer gestoßen sind. Sie müssen sie an Ihren Fall anpassen. Der Jeedom-Support greift nicht bei Problemen im Zusammenhang mit Ihrer Konfiguration ein.

-   **Wenn Sie auf Auslagerungsprobleme stoßen, müssen Sie sie ändern.**
    -   **Erhöhen Sie seine Größe** :
        -   Ändern Sie die Auslagerungsgröße, indem Sie diese Datei öffnen :
            ``sudo nano /etc/dphys-swapfile``
-   Finden Sie den richtigen Parameter :
    ``CONF_SWAPSIZE=100``
-   Ändern Sie den Wert von ``CONF_SWAPSIZE`` B. auf 1024, dann Neustart :
    ``sudo reboot``
-   **Ändern Sie den Swap-Call-Wert.** Standardmäßig ruft das System den Austausch auf, wenn weniger als 40 % des RAM verbleiben.
-   Öffnen Sie die Datei, um diese Einstellung zu ändern :
    ``sudo nano /etc/sysctl.conf``
-   Fügen Sie diese Zeile hinzu, um den Pi3 aufzufordern, den Swap nur dann zu verwenden, wenn er noch 10 % des verfügbaren Speichers übrig hat (d. h. 100 MB verfügbarer RAM) :
    ``vm.swappiness = 10``
-   Dann neu starten :
    ``sudo reboot``
-   **Deaktivieren Sie das integrierte Bluetooth, da es nicht mit der zwave.me GPIO-Karte kompatibel ist**
    -   Öffnen Sie die betroffene Datei :
    ``sudo nano /boot/config.txt``
-   Zeile hinzufügen :
    ``dtoverlay=pi3-disable-bt``
-   Machen Sie einen sauberen Stopp
    ``sudo halt``
-   Trennen Sie das erneute Einstecken (kein sudo reboot !).

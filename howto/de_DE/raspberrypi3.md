# Raspberry Pi 3

Hier finden Sie die Anleitung zur Installation von Jeedom auf einem Raspberry Pi 3 **ohne microSD-Karte.**

Der PI3 bietet nämlich die Möglichkeit, direkt von einem USB-Gerät zu booten und somit auf die microSD-Karte zu verzichten, die manchmal Probleme (Datenkorruption) verursachen kann.

**Die Installation erfolgt genau wie bei einer microSD-Karte, allerdings muss sichergestellt werden, dass die Firmware auf dem neuesten Stand ist.**

Stellen Sie dazu eine SSH-Verbindung her. (Wenn Sie nicht wissen, wie das geht, sehen Sie sich die Anleitung zur Installation auf einer microSD-Karte an: [Hier](/installation)

``vcgencmd otp_dump | grep 17:``

Als Ergebnis sollten Sie Folgendes erhalten:

``17:3020000a``

Wenn dies der Fall ist, ist Ihr PI3 korrekt für den Start vom USB-Stick konfiguriert. Falls er nichts findet, startet er wie gewohnt von einer microSD-Karte.

Sollte die Rückmeldung abweichen, müssen Sie lediglich ein Update durchführen.

``sudo apt-get update; sudo apt-get install rpi-update``

dann

``sudo rpi-update``

Anschließend Neustart des PI3

``sudo reboot``

> **Wichtig**
>
> Um Leistungsprobleme zu vermeiden, sollten Sie sich für eine energiesparende mSATA-SSD entscheiden.

> **Tipp**
>
> Sie können Jeedom nun auf genau dieselbe Weise installieren wie mit einer SD-Karte. [Hier](/installation)

## Mögliche Anpassungen

**Beachten Sie bitte außerdem folgende Hinweise:**

> **Wichtig**
>
> Die folgenden Änderungen sind das Ergebnis von Problemen, auf die Nutzer gestoßen sind. Sie müssen diese an Ihre Situation anpassen. Der Jeedom-Support leistet keine Unterstützung bei Problemen, die mit Ihrer Konfiguration zusammenhängen.

-   **Wenn Sie Probleme mit dem Swap-Bereich haben, müssen Sie diesen anpassen.**
    -   **Größe steigern**:
        -   Ändern Sie die Größe des Swap-Speichers, indem Sie diese Datei öffnen:
``sudo nano /etc/dphys-swapfile``
-   Finden Sie die richtige Einstellung:
``CONF_SWAPSIZE=100``
-   Ändern Sie den Wert von ``CONF_SWAPSIZE`` auf beispielsweise 1024 und starten Sie das System anschließend neu:
``sudo reboot``
-   **Ändern Sie den Schwellenwert für den Aufruf des Swaps.** Standardmäßig ruft das System den Swap auf, wenn weniger als 40 % des Arbeitsspeichers verfügbar sind.
-   Öffnen Sie die Datei, um diese Einstellung zu ändern:
``sudo nano /etc/sysctl.conf``
-   Fügen Sie diese Zeile hinzu, um den Pi3 anzuweisen, den Swap-Speicher erst dann zu nutzen, wenn nur noch 10 % des Arbeitsspeichers verfügbar sind (d. h. 100 MB verfügbarer RAM):
``vm.swappiness = 10``
-   Starten Sie anschließend neu:
``sudo reboot``
-   **Das integrierte Bluetooth deaktivieren, da es mit der GPIO-Karte von zwave.me nicht kompatibel ist**
    -   Öffnen Sie die entsprechende Datei:
``sudo nano /boot/config.txt``
-   Füge folgende Zeile hinzu:
``dtoverlay=pi3-disable-bt``
-   Sauber anhalten
``sudo halt``
-   Stecker ziehen und wieder einstecken (kein „sudo reboot“!).

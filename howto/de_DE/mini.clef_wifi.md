# Hinzufügen eines WLAN-Schlüssels auf dem Jeedom Mini

Hier finden Sie für alle Fälle eine Schritt-für-Schritt-Anleitung zur Installation eines WLAN-Adapters vom Typ „Edimax ew-7811n“ auf einem Jeedom Mini unter Verwendung der WLAN-Authentifizierung „WPA 2 + AES“.

Bitte beachten Sie, dass dieses Verfahren in der vorliegenden Form ausschließlich in der zuvor beschriebenen Umgebung funktioniert (gleiches Modell, gleiche Jeedom-Box, gleiche WLAN-Authentifizierung). Selbstverständlich kann es auch bei anderen Komponenten funktionieren (oder auch nicht), jedoch ohne jegliche Garantie.

> **Wichtig**
>
> Achtung: Dieser Vorgang darf auf keinen Fall auf dem mini+ durchgeführt werden, da sonst der Zugriff darauf verloren geht und alles neu installiert werden muss.

> **Wichtig**
>
> Die Anwendung dieser Anleitung erfolgt auf eigene Gefahr. Bei Problemen kann das Jeedom-Team in keinem Fall haftbar gemacht werden.

## Überprüfen, ob der WLAN-Schlüssel korrekt erkannt wird

Geben Sie dazu einfach über SSH den folgenden Befehl ein:

``sudo lsusb | grep Edimax``

Wenn der Schlüssel erfolgreich erkannt wurde, sollte die folgende Meldung angezeigt werden:

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

Die Bus- und Geräte-IDs können bei Ihnen unterschiedlich sein, je nachdem, an welchem USB-Anschluss Sie Ihren Stick angeschlossen haben.

## Überprüfung des Treiberladens

Der Edimax-WLAN-Stick hat den Vorteil, dass der Treiber bereits in Ihrem Mini integriert ist. Sie müssen dies lediglich überprüfen, indem Sie den folgenden Befehl über SSH eingeben:

``sudo lsmod | grep 8192cu``

Wenn der Befehl einen Wert zurückgibt, ist alles in Ordnung. Bei mir erhalte ich beispielsweise folgende Rückmeldung:

``8192cu                550797  0``

## Datei bearbeiten ``/etc/network/interfaces``

Zunächst müssen Sie die Datei „/etc/network/interfaces“ mit dem folgenden Befehl bearbeiten:

``sudo nano /etc/network/interfaces``

Hier ist der Inhalt der Betriebsdatei bei mir zu Hause:

````
auto lo
iface lo inet loopback
iface eth0 inet dhcp
#wlan
#=============
auto wlan0
allow-hotplug wlan0
iface wlan0 inet dhcp
pre-up wpa_supplicant -Dwext -i wlan0 -c /etc/wpa_supplicant.conf -B
iface default inet dhcp
````

## Datei bearbeiten ``/etc/wpa\_supplicant.conf``

Jetzt müssen Sie nur noch Ihre WLAN-Einstellungen (Name Ihrer SSID und WPA-Schlüssel) eingeben. Dazu bearbeiten Sie die Datei /etc/wpa_supplicant.conf mit dem folgenden Befehl:

``sudo nano /etc/wpa_supplicant.conf``

Hier ist meine bei mir zu Hause verwendete Konfigurationsdatei:

````
ctrl_interface=/var/run/wpa_supplicant
update_config=1
eapol_version=1
ap_scan=2
network={
        ssid="NOM_DE_TON_RESEAU_SSID"
        scan_ssid=1
        mode=0
        proto=WPA2
        pairwise=CCMP
        group=CCMP
        key_mgmt=WPA-PSK
        # choose one of the following
        psk="TA_CLE_WIFI"
 }
````

Bitte ersetzen Sie die unten angegebenen Parameter durch Ihre eigenen:

- NOM_DE_TON_RESEAU_SSID durch den Namen Ihres eigenen Netzwerks ersetzen, dabei die Anführungszeichen („ “) unbedingt beibehalten
- Ersetzen Sie „TA_CLE_WIFI“ durch den Namen Ihres eigenen Netzwerks und behalten Sie dabei unbedingt die Anführungszeichen („ “) bei.

Ich möchte Sie außerdem darauf hinweisen, dass Ihr WLAN-Schlüssel unverschlüsselt in der Datei erscheint. Wenn Sie mehr Sicherheit wünschen, können Sie Ihren Schlüssel vorab mit dem Befehl „sudo wpa_passphrase“ verschlüsseln und anschließend Ihren verschlüsselten Schlüssel eingeben (in diesem Fall ohne Anführungszeichen).

## WLAN aktivieren

Sobald die Dateien eingerichtet sind, müssen Sie nur noch die WLAN-Verbindung herstellen, indem Sie den folgenden Befehl eingeben:

``sudo ifup wlan0``

Normalerweise sollte Ihr WLAN auf Ihrem Mini funktionieren.

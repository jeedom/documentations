# WLAN-Schlüssel auf Jeedom Mini hinzufügen

Hier ist für den Fall, dass ein End-to-End-Verfahren zum Installieren eines WLAN-Schlüssels vom Typ „Edimax ew-7811n“ auf einem Jeedom Mini unter Berücksichtigung einer WLAN-Authentifizierung vom Typ „WPA 2 + AES“ aufgeführt ist".

Bitte beachten Sie, dass dieses Verfahren als solches nur im strengen Rahmen der oben angegebenen Umgebung funktioniert (gleiches Modell, gleiche Jeedom-Box, gleiche WiFi-Authentifizierung) . Natürlich kann es auch für andere Komponenten funktionieren (oder auch nicht), aber ohne Gewähr.

> **Wichtig**
>
> Bitte beachten Sie, dass dieses Verfahren nicht auf mini+ durchgeführt werden darf, da sonst der Zugriff darauf verloren geht und alles neu installiert werden muss.

> **Wichtig**
>
> Dieses Dokument ist auf eigenes Risiko anzuwenden, falls Bedenken bestehen, kann das Jeedom-Team in keiner Weise dafür verantwortlich gemacht werden.

## Überprüfung, ob der WLAN-Schlüssel gut erkannt wird

Geben Sie einfach in SSH den folgenden Befehl ein :

``sudo lsusb | grep Edimax``

Wenn der Schlüssel korrekt erkannt wird, muss anschließend die folgende Meldung angezeigt werden :

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

Die Bus- und Gerätekennungen können für Sie unterschiedlich sein, je nachdem, an welchen USB-Anschluss Sie Ihren Schlüssel angeschlossen haben.

## Überprüfung des Treiberladens

Der Edimax WiFi Key hat den Vorteil, dass bereits ein Treiber in Ihrem Mini integriert ist und Sie ihn nur noch überprüfen müssen, indem Sie den folgenden Befehl in SSH eingeben :

``sudo lsmod | grep 8192cu``

Wenn der Befehl einen Wert zurückgibt, ist alles in Ordnung. Zum Beispiel zu Hause bekomme ich diese zurück :

``8192cu                550797  0``

## Dateibearbeitung ``/etc/network/interfaces``

Sie müssen zuerst die Datei "/etc/network/interfaces" mit dem folgenden Befehl bearbeiten :

``sudo nano /etc/network/interfaces``

Hier ist der Inhalt der Betriebsakte bei mir :

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

## Dateibearbeitung ``/etc/wpa\_supplicant.conf``

Jetzt müssen Sie nur noch Ihre WLAN-Einstellungen (Name Ihrer SSID und WPA-Schlüssel) eingeben). Dazu bearbeiten Sie die Datei /etc/wpa\_supplicant.conf mit dem Befehl :

``sudo nano /etc/wpa_supplicant.conf``

Hier ist meine Betriebsakte zu Hause :

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

Achten Sie darauf, die unten angegebenen Parameter durch Ihre eigenen zu ersetzen :

- NOM_DE_TON_RESEAU_SSID durch den Namen Ihres eigenen Netzwerks, wobei Sie die Anführungszeichen beibehalten (" ")
- TA_CLE_WIFI durch den Namen Ihres eigenen Netzwerks, wobei Sie die Anführungszeichen beibehalten (" ")

Ich mache Sie auch darauf aufmerksam, dass Ihr WiFi-Schlüssel in Klartext in der Datei erscheint. Wenn Sie mehr Sicherheit wünschen, können Sie Ihren Schlüssel zuerst mit dem Befehl "sudo wpa_passphrase" verschlüsseln und dann Ihren verschlüsselten Schlüssel einfügen (in diesem Fall ohne Anführungszeichen)).

## WLAN aktivieren

Sobald die Dateien ausgefüllt sind, müssen Sie nur noch die WLAN-Verbindung starten, indem Sie den folgenden Befehl eingeben :

``sudo ifup wlan0``

Normalerweise sollte Ihr WLAN auf Ihrem Mini betriebsbereit sein.

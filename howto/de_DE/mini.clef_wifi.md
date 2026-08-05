# Fügen Sie WiFi-Schlüssel auf Jeedom Mini

Hier ein End-to-End-Verfahren zum Installieren eines WLAN-Schlüssels vom Typ "Edimax ew-7811n" auf einem Jeedom Mini und unter Berücksichtigung einer WLAN-Authentifizierung vom Typ "WPA 2 + AES"".

Bitte beachten Sie, dass dieses Verfahren nur im oben angegebenen strengen Kontext der Umgebung funktioniert (gleiches Modell, gleiche Jeedom-Box, gleiche WiFi-Authentifizierung)) . Natürlich kann es auch für andere Komponenten funktionieren (oder nicht), jedoch ohne Garantie.

> **Wichtig**
>
> Achtung, dieses Verfahren ist insbesondere bei mini + nicht zu beachten, da der Zugriff darauf verloren geht und alles neu installiert werden muss.

> **Wichtig**
>
> Dieses Dokument ist bei Problemen auf eigenes Risiko anzuwenden. Das Jeedom-Team kann in keiner Weise dafür verantwortlich gemacht werden.

## Überprüfung, ob der WLAN-Schlüssel gut erkannt wird

Geben Sie einfach den folgenden Befehl in SSH ein :

``sudo lsusb | grep Edimax``

Wenn der Schlüssel richtig erkannt wird, sollte die folgende Meldung angezeigt werden :

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

Die Kennungen des Busses und des Geräts können je nach USB-Anschluss, an den Sie Ihren Schlüssel angeschlossen haben, für Sie unterschiedlich sein.

## Überprüfung der Treiberbeladung

Der Edimax WiFi-Schlüssel hat den Vorteil, dass bereits ein Treiber in Ihren Mini integriert ist, und Sie müssen ihn nur überprüfen, indem Sie den folgenden Befehl in SSH eingeben :

``sudo lsmod | grep 8192cu``

Wenn der Befehl einen Wert zurückgibt, bedeutet dies, dass alles in Ordnung ist. Zum Beispiel zu Hause bekomme ich das zurück :

``8192cu                550797  0``

## Bearbeiten der Datei ``/etc/network/interfaces``

Sie müssen zuerst die Datei "/ etc / network / interfaces" mit dem folgenden Befehl bearbeiten :

``sudo nano /etc/network/interfaces``

Hier ist der Inhalt der Betriebsdatei bei mir :

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

## Bearbeiten der Datei ``/etc/wpa\_supplicant.conf``

Jetzt müssen Sie nur noch Ihre WLAN-Einstellungen eingeben (Name Ihrer SSID und Ihres WPA-Schlüssels)). Dies erfolgt durch Bearbeiten der Datei / etc / wpa\_supplicant.conf mit Befehl :

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

Achten Sie darauf, die unten angegebenen Parameter durch Ihre zu ersetzen :

- NOM_DE_TON_RESEAU_SSID mit dem Namen Ihres eigenen Netzwerks, wobei die Anführungszeichen gut bleiben (" ")
- TA_CLE_WIFI mit dem Namen Ihres eigenen Netzwerks, wobei die Anführungszeichen gut bleiben (" ")

Ich mache Sie auch darauf aufmerksam, dass Ihr WLAN-Schlüssel in der Datei deutlich angezeigt wird. Wenn Sie mehr Sicherheit wünschen, können Sie Ihren Schlüssel vorher über den Befehl "sudo wpa_passphrase" verschlüsseln und dann Ihren verschlüsselten Schlüssel einfügen (in diesem Fall ohne Anführungszeichen)).

## WiFi-Aktivierung

Sobald die Dateien fertig sind, muss nur noch die WiFi-Verbindung durch Eingabe des folgenden Befehls gestartet werden :

``sudo ifup wlan0``

Normalerweise sollte Ihr WLAN auf Ihrem Mini betriebsbereit sein.

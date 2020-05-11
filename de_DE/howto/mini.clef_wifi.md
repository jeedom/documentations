Ziel 
========

Hier für den Fall eine End-to-End-Prozedur zum Installieren eines Schlüssels
WiFi-Typ "Edimax ew-7811n" auf einem Jeedom Mini und unter Berücksichtigung
WPA 2 + AES-WLAN-Authentifizierung".

Bitte beachten Sie, dass dieses Verfahren nur so funktioniert, wie es in der
strenger Rahmen der zuvor angegebenen Umgebung (gleiches Modell, gleiches
Jeedom Box, gleiche WiFi-Authentifizierung) . Natürlich kann das
Arbeiten Sie auch für andere Komponenten (oder nicht), jedoch ohne
garantie.

> **Wichtig**
>
> Achtung, dieses Verfahren ist besonders bei mini + under nicht zu machen
> Probleme, den Zugriff darauf zu verlieren und alles neu installieren zu müssen.

> **Wichtig**
>
> Dieses Dokument ist bei Bedenken auf eigenes Risiko anzuwenden
> Das Jeedom-Team kann in keiner Weise zur Verantwortung gezogen werden.

Überprüfung, ob der WLAN-Schlüssel gut erkannt wird 
==============================================

Geben Sie einfach den folgenden Befehl in SSH ein :

    sudo lsusb | grep Edimax

Wenn der Schlüssel richtig erkannt wird, sollte die folgende Meldung angezeigt werden
:

    Bus 001 Gerät 004: ID 7392:7811 Edimax Technology Co., Ltd. EW-7811A 802.11n Drahtloser Adapter [Realtek RTL8188CUS]

Die Kennungen des Busses und des Geräts können bei unterschiedlich sein
Sie, abhängig vom USB-Anschluss, an den Sie Ihren Schlüssel angeschlossen haben.

Überprüfung der Treiberbeladung 
====================================

Der Edimax WiFi-Schlüssel hat den Vorteil, dass bereits ein Treiber integriert ist
Ihr Mini und überprüfen Sie es einfach durch Eingabe des Befehls
als nächstes in SSH :

    sudo lsmod | grep 8192cu

Wenn der Befehl einen Wert zurückgibt, ist alles in Ordnung. Zum Beispiel
zu Hause bekomme ich es zurück :

    8192cu 550797 0

Bearbeiten der Datei "/ etc / network / interfaces""
==============================================

Sie müssen zuerst die Datei "/ etc / network / interfaces" mit dem bearbeiten
nächste Bestellung :

    sudo nano / etc / network / interfaces

Hier ist der Inhalt der Betriebsdatei bei mir :

    auto lo
    iface lo inet loopback
    iface eth0 inet dhcp
    #wlan
    #=============
    auto wlan0
    allow-hotplug wlan0
    iface wlan0 inet dhcp
    Pre-Up wpa_supplicant -Dwext -i wlan0 -c / etc / wpa_supplicant.conf -B
    iface default inet dhcp

Bearbeiten der Datei "/etc/wpa\_supplicant.conf" 
==============================================

Jetzt müssen Sie nur noch Ihre WLAN-Einstellungen eingeben (Name von
Ihre SSID und Ihren WPA-Schlüssel). Dies erfolgt durch Bearbeiten der Datei
/etc/wpa\_supplicant.conf mit dem Befehl :

    sudo nano /etc/wpa_supplicant.conf

Hier ist meine Betriebsakte zu Hause :

    ctrl_interface = / var / run / wpa_supplicant
    update_config = 1
    eapol_version = 1
    ap_scan = 2
    network={
            ssid = "NOM_DE_TON_RESEAU_SSID"
            scan_ssid = 1
            mode=0
            proto = WPA2
            paarweise = CCMP
            Gruppe = CCMP
            key_mgmt = WPA-PSK
            # Wählen Sie eine der folgenden Optionen
            psk = "TA_CLE_WIFI"
     }
     ----

     Achten Sie darauf, die unten angegebenen Parameter durch Ihre zu ersetzen :

    * NOM_DE_TON_RESEAU_SSID mit dem Namen Ihres eigenen Netzwerks, wobei die Anführungszeichen ("") beibehalten werden
    * TA_CLE_WIFI mit dem Namen Ihres eigenen Netzwerks, wobei die Anführungszeichen ("") beibehalten werden

    Ich mache Sie auch darauf aufmerksam, dass Ihr WLAN-Schlüssel in der Datei deutlich angezeigt wird. Wenn Sie mehr Sicherheit wünschen, können Sie Ihren Schlüssel vorher über den Befehl "sudo wpa_passphrase" verschlüsseln und dann Ihren verschlüsselten Schlüssel einfügen (in diesem Fall ohne Anführungszeichen).

    == WiFi-Aktivierung

    Sobald die Dateien fertig sind, muss nur noch die WiFi-Verbindung durch Eingabe des folgenden Befehls gestartet werden :

sudo ifup wlan0

    Normalerweise sollte Ihr WLAN auf Ihrem Mini betriebsbereit sein.

# Synology benutze VPN

Von einem Webbrowser auf einem Computer, der mit demselben Netzwerk wie die Synology verbunden ist

Gehen Sie zur DSM-Schnittstelle und melden Sie sich mit einem Administratorkonto an. Gehen Sie dann zum Hauptmenü und wählen Sie Package Center

Führen Sie oben links im Fenster eine Suche mit dem Wort VPN durch. Der VPN-Server sollte angezeigt werden, und klicken Sie dann auf Installieren.

![synology.utilisation vpn1](images/synology.utilisation_vpn1.png)

Gehen Sie zurück zum Hauptmenü und wählen Sie VPN Server

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

Wenn sich das Fenster öffnet, gehen Sie zu L2TP / IPSEC

Wählen Sie die Option L2TP / IPsec-VPN-Server aktivieren

Geben Sie unter Dynamische IP-Adresse eine Nummer ein, die dem Subnetz für die Zuweisung der IP-Adressen Ihrer VPN-Geräte im internen Netzwerk Ihres Hauses entspricht. NB : Wählen Sie nicht das gleiche wie das Standard-Subnetz Ihrer Box, außer dass das Maschinen-Subnetz 192.168.1 ist.0 also setzen wir im Beispiel 2

Geben Sie dann die maximale Anzahl von Verbindungen ein, die Sie auf dem VPN-Server zulassen möchten, und dann die maximale Anzahl gleichzeitiger Verbindungen für einen Benutzer

Geben Sie abschließend einen Freigabeschlüssel ein : Es ist ein Passwort, das in der VPN-Konfiguration auf dem Handy oder Tablet eingegeben werden muss.

Dann bewerben Sie sich

![synology.utilisation vpn3](images/synology.utilisation_vpn3.png)

Eine Meldung zeigt dann die Ports an, die auf Ihrer Internet Box zu Ihrem NAS umgeleitet werden müssen.

![synology.utilisation vpn4](images/synology.utilisation_vpn4.png)

# Ermöglichen Sie Benutzern die Verwendung des VPN-Dienstes auf dem NAS

Gehen Sie zurück zum Hauptmenü und wählen Sie VPN Server

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

Wählen Sie im linken Teil Berechtigung

Deaktivieren Sie alle Kontrollkästchen unter PPTP Öffnen Sie VPN und L2TP

Aktivieren Sie nur das Kontrollkästchen vor dem Benutzer, den Sie zur Verwendung des VPN autorisieren möchten .

> **Spitze**
>
> Es ist ratsam, einen Benutzer nur für das VPN und ohne andere Rechte / Berechtigungen als das VPN zu erstellen.

![synology.utilisation vpn5](images/synology.utilisation_vpn5.png)

# Leiten Sie die Ports Ihres BO umX 

Geben Sie im Browser 192.168.1.1 ein. Klicken Sie auf Freebox-Einstellungen

![synology.utilisation vpn6](images/synology.utilisation_vpn6.png)

Wählen Sie den erweiterten Modus

![synology.utilisation vpn7](images/synology.utilisation_vpn7.png)

Wählen Sie Port Management

![synology.utilisation vpn8](images/synology.utilisation_vpn8.png)

Fügen Sie eine Weiterleitung hinzu

![synology.utilisation vpn9](images/synology.utilisation_vpn9.png)

Geben Sie die Parameter wie folgt ein.

> **Spitze**
>
> Die Ziel-ID ist das einzige, was von Ihrer Installation abhängt. Sie müssen die IP Ihres Synology NAS eingeben

Speichern

![synology.utilisation vpn10](images/synology.utilisation_vpn10.png)

Wir stellen dann fest, dass die Konfiguration berücksichtigt wird

![synology.utilisation vpn11](images/synology.utilisation_vpn11.png)

Wiederholen Sie den Vorgang mit den UDP-Ports 500 und 4500

# Konfigurieren Sie das VPN auf Ihrem Handy

Gehen Sie zur Anwendung und wählen Sie Einstellungen

![synology.utilisation vpn12](images/synology.utilisation_vpn12.png)

Klicken Sie auf… Mehr

![synology.utilisation vpn13](images/synology.utilisation_vpn13.png)

Klicken Sie auf VPN

![synology.utilisation vpn14](images/synology.utilisation_vpn14.png)

Klicken Sie oben rechts auf das +

![synology.utilisation vpn15](images/synology.utilisation_vpn15.png)

Geben Sie dem VPN-Zugriff einen Namen, legen Sie ihn als L2TP / IPSec PSK-Typ fest, geben Sie die öffentliche Adresse Ihrer Internetbox (oder einen DNS-Namen, falls vorhanden) ein und geben Sie den im Abschnitt Konfigurieren eines VPN-Servers eingegebenen gemeinsamen Schlüssel ein :

![synology.utilisation vpn16](images/synology.utilisation_vpn16.png)

Um das VPN zu starten, klicken Sie einfach auf die neue Zeile mit dem Namen Ihres VPN-Tunnels

![synology.utilisation vpn17](images/synology.utilisation_vpn17.png)

Geben Sie dann den Login und das Passwort des Benutzers ein, der im Abschnitt Konfigurieren eines VPN-Servers konfiguriert wurde

![synology.utilisation vpn18](images/synology.utilisation_vpn18.png)

Und das ist alles, was Sie auf Ihrem Telefon tun. Es ist, als wären Sie von zu Hause aus über WLAN !

Installieren Sie den VPN-Server 
====================

Von einem Webbrowser auf einem Computer, der mit demselben Netzwerk verbunden ist wie
Synologie

Gehen Sie zur DSM-Schnittstelle und melden Sie sich dann mit einem Administratorkonto an
Gehen Sie zum Hauptmenü und wählen Sie Package Center

Führen Sie oben links im Fenster eine Suche mit dem Wort VPN durch.
Der VPN-Server sollte angezeigt werden, und klicken Sie dann auf Installieren.

![synology.utilisation vpn1](images/synology.utilisation_vpn1.png)

Gehen Sie zurück zum Hauptmenü und wählen Sie VPN Server

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

Wenn sich das Fenster öffnet, gehen Sie zu L2TP / IPSEC

Wählen Sie die Option L2TP / IPsec-VPN-Server aktivieren

Geben Sie unter Dynamische IP-Adresse eine Nummer ein, die dem Sub entspricht
Netzwerk zum Zuweisen der IPs Ihrer Geräte in VPN im internen Netzwerk
von deinem Platz. NB: Wählen Sie nicht das Gleiche wie das
Standard-Subnetz Ihrer Box ex kostenlos das Subnetz von
Maschinen ist 192.168.1.0 also setzen wir im Beispiel 2

Geben Sie dann die maximale Anzahl von Verbindungen ein, die Sie zulassen möchten
auf dem VPN-Server dann die maximale Anzahl gleichzeitiger Verbindungen
für einen Benutzer

Geben Sie abschließend einen Freigabeschlüssel ein : Es ist ein Passwort, das er
muss die VPN-Konfiguration auf dem Handy oder Tablet eingeben.

Dann bewerben Sie sich

![synology.utilisation vpn3](images/synology.utilisation_vpn3.png)

Eine Nachricht zeigt dann die Ports an, die auf Ihrem umgeleitet werden müssen
Internetbox zu Ihrem NAS.

![synology.utilisation vpn4](images/synology.utilisation_vpn4.png)

Ermöglichen Sie Benutzern die Verwendung des VPN-Dienstes auf dem NAS 
===============================================================

Gehen Sie zurück zum Hauptmenü und wählen Sie VPN Server

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

Wählen Sie im linken Teil Berechtigung

Deaktivieren Sie alle Kontrollkästchen unter PPTP Öffnen Sie VPN und L2TP

Aktivieren Sie nur das Kontrollkästchen vor dem gewünschten Benutzer
erlauben, VPN zu verwenden .

> **Tip**
>
> Es wird empfohlen, einen Benutzer nur für das VPN zu erstellen
> und ohne andere Rechte / Berechtigungen als mit dem VPN zu tun.

![synology.utilisation vpn5](images/synology.utilisation_vpn5.png)

Leiten Sie die Ports Ihres BO umX 
===============================

Geben Sie im Browser 192.168.1.1 ein. Klicken Sie auf Einstellungen
Freebox

![synology.utilisation vpn6](images/synology.utilisation_vpn6.png)

Wählen Sie den erweiterten Modus

![synology.utilisation vpn7](images/synology.utilisation_vpn7.png)

Wählen Sie Port Management

![synology.utilisation vpn8](images/synology.utilisation_vpn8.png)

Fügen Sie eine Weiterleitung hinzu

![synology.utilisation vpn9](images/synology.utilisation_vpn9.png)

Geben Sie die Parameter wie folgt ein.

> **Tip**
>
> Die Ziel-ID ist das einzige, was von Ihrer Installation abhängt,
> Sie müssen die IP Ihres Synology NAS eingeben

Speichern

![synology.utilisation vpn10](images/synology.utilisation_vpn10.png)

Wir stellen dann fest, dass die Konfiguration berücksichtigt wird

![synology.utilisation vpn11](images/synology.utilisation_vpn11.png)

Wiederholen Sie den Vorgang mit den UDP-Ports 500 und 4500

Konfigurieren Sie das VPN auf Ihrem Handy 
==================================

Gehen Sie zur Anwendung und wählen Sie Einstellungen

![synology.utilisation vpn12](images/synology.utilisation_vpn12.png)

Klicken Sie auf… Mehr

![synology.utilisation vpn13](images/synology.utilisation_vpn13.png)

Klicken Sie auf VPN

![synology.utilisation vpn14](images/synology.utilisation_vpn14.png)

Klicken Sie oben rechts auf das +

![synology.utilisation vpn15](images/synology.utilisation_vpn15.png)

Geben Sie dem VPN-Zugriff einen Namen, geben Sie ihn als Typ L2TP / IPSec PSK ein und geben Sie ihn ein
die öffentliche Adresse Ihrer Internetbox (oder einen DNS-Namen, falls Sie einen haben
a) und geben Sie den freigegebenen Schlüssel ein, der im Abschnitt Konfigurieren eines eingegeben wurde
VPN-Server :

![synology.utilisation vpn16](images/synology.utilisation_vpn16.png)

Um das VPN zu starten, klicken Sie einfach auf das neue
Zeile, die mit dem Namen Ihres VPN-Tunnels angezeigt wurde

![synology.utilisation vpn17](images/synology.utilisation_vpn17.png)

Geben Sie dann den Login und das Passwort des Benutzers ein, der es war
konfiguriert im Abschnitt Konfigurieren eines VPN-Servers

![synology.utilisation vpn18](images/synology.utilisation_vpn18.png)

Und das ist alles, was Sie auf Ihrem Telefon tun, es ist wie Sie
waren in WiFi von zu Hause aus !

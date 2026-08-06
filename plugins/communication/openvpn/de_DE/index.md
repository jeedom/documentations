# Openvpn Plugin

Dieses Plugin ermöglicht die Verbindung von Jeedom mit einem openvpn-Server. Es wird auch für den Jeedom-DNS-Dienst verwendet und ist daher obligatorisch, mit dem Sie über das Internet auf Ihr Jeedom zugreifen können.

# Plugin Konfiguration

Aktivieren und installieren Sie nach dem Herunterladen des Plugins einfach die openvpn-Abhängigkeiten (klicken Sie auf die Schaltfläche **Installiere Update**)

# Gerätekonfiguration

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des openvpn-Geräts** : Name Ihres Openvpn-Geräts,
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
-   **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören),
-   **Aktivieren** : macht Ihre Ausrüstung aktiv,
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,

> **Notiz**
>
> Die anderen Optionen werden hier nicht näher erläutert. Weitere Informationen finden Sie in der [openvpn Dokumentation](https://openvpn.net/index.php/open-source/documentation.html)

> **Notiz**
>
> In Bezug auf Shell-Befehle, die nach dem Start ausgeführt werden, gibt es das Tag `#interface#`Erlauben, den Namen der aktuellen Schnittstelle zu erhalten.

Nachfolgend finden Sie die Liste der Bestellungen :

-   **Name** : Der im Dashboard angezeigte Name,
-   **Anzeige** : ermöglicht die Anzeige der Daten im Dashboard,
-   **Test** : Wird zum Testen des Befehls verwendet

> **Notiz**
>
> Jeedom überprüft alle 5 Minuten, ob das VPN gestartet oder gestoppt wurde, und handelt entsprechend, wenn dies nicht der Fall ist.

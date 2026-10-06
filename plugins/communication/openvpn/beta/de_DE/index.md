# Openvpn Plugin

Dieses Plugin ermöglicht die Verbindung von Jeedom mit einem OpenVPN-Server. Es wird auch für den Jeedom-DNS-Dienst verwendet und ist daher zwingend erforderlich, damit Sie über das Internet auf Ihr Jeedom zugreifen können.

# Plugin Konfiguration

Nach dem Herunterladen des Plugins müssen Sie lediglich die OpenVPN-Abhängigkeiten aktivieren und installieren (klicken Sie auf die Schaltfläche **Installieren/Aktualisieren**).

# Gerätekonfiguration

Hier finden Sie alle Einstellungen für Ihre Geräte:

-   **Name des OpenVPN-Geräts**: Name Ihres OpenVPN-Geräts,
-   **Übergeordnetes Objekt**: Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
-   **Kategorie**: Die Kategorien des Geräts (es kann mehreren Kategorien angehören),
-   **Aktivieren**: Damit können Sie Ihre Geräte aktivieren,
-   **Sichtbar**: Macht Ihre Geräte auf dem Dashboard sichtbar,

> **Hinweis**
>
> Auf die übrigen Optionen wird hier nicht näher eingegangen. Weitere Informationen finden Sie in der [openvpn Dokumentation](https://openvpn.net/index.php/open-source/documentation.html)

> **Hinweis**
>
> Für Shell-Befehle, die nach dem Start ausgeführt werden, gibt es das Tag `#interface#` mit der der Name der aktuell aktiven Schnittstelle abgerufen werden kann.

Nachfolgend finden Sie eine Liste der Befehle:

-   **Name**: Der Name, der auf dem Dashboard angezeigt wird,
-   **Anzeigen**: Ermöglicht die Anzeige der Daten auf dem Dashboard,
-   **Testen**: Ermöglicht das Testen des Befehls

> **Hinweis**
>
> Jeedom überprüft alle 5 Minuten, ob das VPN gestartet oder beendet ist, und ergreift entsprechende Maßnahmen, falls dies nicht der Fall ist.

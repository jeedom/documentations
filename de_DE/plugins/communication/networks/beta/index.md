# Plugin-Netzwerke

Mit diesem Plugin können Sie Netzwerkgeräte anpingen oder aktivieren.

# Plugin Konfiguration

Nach dem Herunterladen des Plugins müssen Sie es nur noch aktivieren. Auf dieser Ebene gibt es keine Konfiguration.

![networks](../images/networks.PNG)

# Gerätekonfiguration

Auf die Konfiguration der Netzwerkgeräte kann über das Plugin-Menü zugegriffen werden :

![networks2](../images/networks2.PNG)

So sieht die Networks-Plugin-Seite aus (hier mit bereits 1 Gerät)) :

![networks3](../images/networks3.PNG)

Sobald Sie auf eine davon klicken, erhalten Sie :

![networks4](../images/networks4.PNG)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des Netzwerkgeräts** : Name Ihres Netzwerkgeräts,
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
-   **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören),
-   **Aktivieren** : macht Ihre Ausrüstung aktiv,
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,
-   **IP-Adresse** : IP-Adresse zum Ping,
-   **MAC-Adresse (wol)** : MAC-Adresse für Wake-on-LAN,
-   **Broadcast IP (wol)** : Netzwerk-Broadcast-IP-Adresse zum Senden von Wake-on-LAN,
-   **Ping-Methode** : Wahl der Ping-Methode : IP (normal), ARP (bevorzugt für Smartphones und Geräte, die einschlafen), PORT (um zu testen, ob ein Port offen ist)
-   **TTL** : Time-to-live, les valeurs peuvent etre :
    - 0 : même hote
    - 1 : gleiche Subnetze
    - 32 : gleiche Seite
    - 64 : gleiche Region
    - 128 : gleicher Kontinent
    - 256 : keine Begrenzung
    Wenn Sie den Fehler "Lebenszeit überschritten" haben, erhöhen Sie diesen Wert. Wenn leer, ist der Parameter 255. Beachten Sie, dass bei einigen Konfigurationen (z. B. Docker) der 255 nicht autorisiert ist, sodass dieser Wert verringert werden muss.
-   **Hafen** : Port zu Ping, wenn Sie sich an einem Port im Ping-Modus befinden (Beispiel) : 8080 für 192.168.0.12:8080),
-   **Automatische Aktualisierung (cron)** : cron definiert die Ping-Frequenz,

Nachfolgend finden Sie die Liste der Bestellungen :

-   **Name** : Der im Dashboard angezeigte Name,
-   **Anzeige** : ermöglicht die Anzeige der Daten im Dashboard,
-   **Test** : Wird zum Testen des Befehls verwendet.

> **Notiz**
>
> Jeedom va vérifier toutes les minutes (par defaut) le ping sur l'IP.

> **Wichtig**
>
> Wenn Sie den MAC und die Broadcast-Adresse nicht eingeben, haben Sie keinen Wake-on-Lan-Befehl.

> **Notiz**
>
> Die MAC-Adresse muss die Form haben : 5E:FF:56:A2:AF:15

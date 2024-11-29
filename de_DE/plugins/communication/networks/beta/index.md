# Plugin-Netzwerke

Mit diesem Plugin können Sie Netzwerkgeräte anpingen oder aktivieren.

# Plugin Konfiguration

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es nur noch aktivieren und die Abhängigkeiten installieren. Auf dieser Ebene gibt es keine Konfiguration.

# Gerätekonfiguration

Auf die Konfiguration der Netzwerkgeräte kann über das Plugin-Menü zugegriffen werden :

![networks2](../images/networks2.PNG)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

- **Gerätename** : Name Ihres Netzwerkgeräts,
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
- **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören),
- **Aktivieren** : macht Ihre Ausrüstung aktiv,
- **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,
- **IP-Adresse** : IP-Adresse zum Ping,
- **MAC-Adresse (wol)** : MAC-Adresse für Wake-on-LAN,
- **Broadcast IP (wol)** : Netzwerk-Broadcast-IP-Adresse zum Senden von Wake-on-LAN,
- **Ping-Methode** : Wahl der Ping-Methode : *IP* (normal), *ARP* (bevorzugt für Smartphones und Peripheriegeräte, die einschlafen), *Hafen* (um zu testen, ob ein Port geöffnet ist)
- **Maximale Versuche im Fehlerfall**: Maximale Anzahl zwischen 1 und 10 Versuchen im Fehlerfall. Bei Erfolg stoppt das Plugin sofort.
- **TTL** : Nur wenn Methode *IP*. Time-to-live, les valeurs peuvent etre :
  - 0 : même hote
  - 1 : gleiche Subnetze
  - 32 : gleiche Seite
  - 64 : gleiche Region
  - 128 : gleicher Kontinent
  - 256 : keine Begrenzung
    Wenn Sie den Fehler "Lebenszeit überschritten" haben, erhöhen Sie diesen Wert. Wenn leer, ist der Parameter 255. Beachten Sie, dass bei einigen Konfigurationen (z. B. Docker) der 255 nicht autorisiert ist, sodass dieser Wert verringert werden muss.
- **Hafen** : Port zu Ping, wenn Sie sich an einem Port im Ping-Modus befinden (Beispiel) : 8080 für 192.168.0.12:8080),
- **Automatische Aktualisierung (cron)** : cron definiert die Ping-Frequenz,

> **Notiz**
>
> Jeedom va vérifier toutes les minutes (par defaut) le ping sur l'IP.

> **Wichtig**
>
> Wenn Sie den MAC und die Broadcast-Adresse nicht eingeben, haben Sie keinen Wake-on-Lan-Befehl.

> **Notiz**
>
> Die MAC-Adresse muss die Form haben : 5E:FF:56:A2:AF:15

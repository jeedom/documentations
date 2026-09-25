# Wireguard-Plugin

Mit diesem Plugin können Sie Jeedom mit einem Wireguard-Server verbinden.

Es kann auch vom Jeedom DNS-Dienst verwendet werden, um die **Openvpn Plugin** um über das Internet auf Ihr Jeedom zuzugreifen.

# Configuration

## Plugin Konfiguration

Nachdem das Plugin heruntergeladen und aktiviert wurde, müssen Sie auf der allgemeinen Konfigurationsseite sicherstellen, dass die Abhängigkeiten korrekt installiert sind.

## Client-Konfiguration

Wireguard-Clients können über das Menü aufgerufen werden **Plugins → Kommunikation → Wireguard**.

Klicken Sie auf ein Gerät, um auf seine Konfigurationsseite zuzugreifen :

- **Wireguard-Kundenname** : Name Ihres Wireguard-Geräts.
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
- **Kategorie** : Ausstattungskategorien *(kann mehreren Kategorien angehören)*.
- **Aktivieren Sie** : ermöglicht es, das Gerät aktiv zu machen.
- **Sichtbar** : ermöglicht es, die Ausrüstung auf dem Armaturenbrett sichtbar zu machen.

Wenn Sie nur die verwenden **Wireguard-Plugin** Um eine Verbindung zum Jeedom-DNS herzustellen, gehen Sie einfach zur allgemeinen Jeedom-Konfiguration (**Einstellungen → System → Konfiguration**), Tab **Netzwerke**. Auswählen **Drahtschutz** im Dropdown-Menü des Spiels **DNS-Marktverwaltung** dann **Starten / neu starten** VPN-Verbindung.

>**INFORMATION**
>
>In Bezug auf den Zugriff auf Jeedom DNS haben Sie auf Ihrem Niveau nichts mehr zu tun. Das Plugin kümmert sich automatisch um das Anlegen der Geräte, die Generierung der Konfiguration des VPN-Tunnels und den anschließenden Start des Dienstes.

Wenn Sie den Zugriff auf einen persönlichen Wireguard-Server konfigurieren möchten, finden Sie hier die Liste der im Plugin verfügbaren Client-Einstellungen :

- **[Schnittstelle]** :
    - **Die Anschrift** (`Address`) : Wireguard-Client-Schnittstellenadresse.
    - **Privat Schlüssel** (`PrivateKey`) : Privater Schlüssel des Wireguard-Clients.
    - **Post-Up** (`PostUp`) : Befehle, die beim Starten der Wireguard-Client-Oberfläche ausgeführt werden sollen *(facultatif)*.
    - **Post-Down** (`PostDown`) : Befehle, die ausgeführt werden sollen, wenn die Wireguard-Client-Schnittstelle gestoppt wird *(facultatif)*.

>**TRICK**
>
>Sie können das Tag verwenden ``#interface#`` in den Feldern **Post-Up** und **Post-Down** um den Namen der vom Wireguard-Client verwendeten Schnittstelle abzurufen.

- **[Peer]** :
    - **Öffentlicher Schlüssel** (`PublicKey`) : Öffentlicher Schlüssel des Wireguard-Servers.
    - **Endpunkt** (`Endpoint`) : öffentliche IP-Adresse des Servers : Abhörport *(ip:port)*.
    - **Autorisierte IPs** (`AllowedIPs`) : Liste der autorisierten IP-Adressen.
    - **Geteilter Schlüssel** (`PresharedKey`) : Geteilter Schlüssel *(facultatif)*.
    - **Die Verbindung halten** (`PersistentKeepalive`) : Link-Check-Verzögerung in Sekunden *(facultatif)*.

>**WICHTIG**
>
>Nur Support in Bezug auf den Jeedom DNS-Zugriff wird vom Team bereitgestellt.

# Commandes

Durch Klicken auf die Registerkarte **Aufträge**, finden Sie die Liste der Wireguard-Kundenbestellungen :

- **Aktiv** : Wireguard-Client-Schnittstellenstatus.
- **Ip** : IP-Adresse der Wireguard-Client-Schnittstelle.
- **Gestartet** : Verbindungsstatus des Wireguard-Servers.
- **Zum Starten** : startet die Wireguard-Client-Oberfläche.
- **Halt** : ermöglicht das Stoppen der Wireguard-Client-Schnittstelle.

>**INFORMATION**
>
>Jeedom überprüft alle 5 Minuten, ob das VPN gestartet oder gestoppt wurde, und handelt entsprechend, wenn dies nicht der Fall ist.

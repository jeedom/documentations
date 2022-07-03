# Befehlszeileninstallation

# Automatische Installation

Für eine automatische Installation folgen Sie bitte der Ihrem Systemtyp entsprechenden Dokumentation : 

- Auf einen [VM](https://doc.jeedom.com/de_DE/installation/vm)
- Auf der [Bearemetal (Intel Nuc-like)](https://doc.jeedom.com/de_DE/installation/baremetal)

# Manuelle Installation

Hier finden Sie die Dokumentation zur Installation von Jeedom unter Debian

> **Wichtig**
>
> Debian 10 (Buster) ist die offiziell unterstützte Distribution für Version 3.3.X oder mehr von Jeedom (aber Stretch bleibt perfekt funktionsfähig). Wenn Sie nicht über Mindestkenntnisse in Linux-Umgebungen verfügen, empfehlen wir Ihnen, mit einem Smart zu beginnen.

> **Wichtig**
>
> Das Installationsskript kann gefährlich sein, da es davon ausgeht, dass Ihr System sauber ist. Wenn nicht, lesen Sie bitte das Skript und installieren Sie es manuell.

>**TIPPS**
>
>Um die IP der VM zu kennen (sobald sie verbunden ist, werden die Kennungen auf dem Verbindungsbildschirm angezeigt) ``ip -s -c -h a``

SSH in Ihr System und tun :

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

Dann gehen Sie einfach zu ``IP_JEEDOM`` von Ihrem Webbrowser.

> **Notiz**
>
> Standardanmeldeinformationen sind admin/admin

> **Notiz**
>
> Die folgenden Argumente können verwendet werden : -w = Webserver-Ordner -z = Z-Wave-Abhängigkeiten installieren -m = gewünschtes MySQL-Root-Passwort

````
./install.sh -w /var/www/html -z -m Jeedom
````

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index).

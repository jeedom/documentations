# Befehlszeileninstallation

# Automatische Installation

Für die automatische Installation folgen Sie bitte der Dokumentation Ihres Systemtyps : 

- Auf einem [VM](https://doc.jeedom.com/de_DE/installation/vm)
- Auf [Bare-Metal (Typ Intel Nuc))](https://doc.jeedom.com/de_DE/installation/baremetal)

# Manuelle Installation

Hier finden Sie die Dokumentation zur Installation von Jeedom auf Debian

> **Wichtig**
>
> Debian 10 (Buster) ist die offiziell unterstützte Distribution für Version 3.3.X von Jeedom (aber Stretch bleibt vollkommen funktionsfähig).  Debian 11 ist die offizielle Distribution für Version 4.xx. Wenn Sie keine Mindestkenntnisse in Linux-Umgebungen haben, empfehlen wir Ihnen, sich für eine Jeedom-Box wie Luna, Atlas oder Smart zu entscheiden.

> **Wichtig**
>
> Das Installationsskript kann gefährlich sein, da davon ausgegangen wird, dass Ihr System leer ist. Wenn nicht, lesen Sie bitte das Skript und installieren Sie es von Hand.

>**Tipps**
>
>Um die IP der VM herauszufinden (sobald sie mit ihr verbunden ist, werden die Kennungen auf dem Verbindungsbildschirm angezeigt) ``ip -s -c -h a``

Stellen Sie in SSH eine Verbindung zu Ihrem System her und tun Sie dies :

````
wget https://www.jeedom.com/install
chmod +x install
./install
````

Dann geh einfach zu ``IP_JEEDOM`` von Ihrem Internetbrowser.

> **Notiz**
>
> Die Standardanmeldeinformationen sind admin / admin

> **Notiz**
>
> Die folgenden Argumente können verwendet werden : -w = Webserver-Ordner -z = Installationsabhängigkeiten z-Wave -m = gewünschtes MySQL-Root-Passwort

````
./install -w /var/www/html -z -m Jeedom
````

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index).

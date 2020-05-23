# Befehlszeileninstallation

Hier finden Sie die Dokumentation zur Installation von Jeedom auf den meisten Linux-Systemen (getestet und genehmigt in der Debian-Distribution)

> **Wichtig**
>
> Debian 10 (Buster) ist die offiziell unterstützte Distribution für Version 3.3.X oder mehr von Jeedom (aber Stretch bleibt perfekt funktionsfähig). Wenn Sie nicht über Mindestkenntnisse in Linux-Umgebungen verfügen, empfehlen wir Ihnen, mit einem Smart zu beginnen.

> **Wichtig**
>
> Das Installationsskript kann gefährlich sein, da davon ausgegangen wird, dass Ihr System leer ist. Wenn nicht, lesen Sie bitte das Skript und installieren Sie es von Hand.

Stellen Sie in SSH eine Verbindung zu Ihrem System her und tun Sie dies :

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

Dann geh einfach zu ``IP_JEEDOM`` von Ihrem Internetbrowser.

> **Notiz**
>
> Die Standardanmeldeinformationen sind admin / admin

> **Notiz**
>
> Die folgenden Argumente können verwendet werden : -w = Webserver-Ordner -z = Installationsabhängigkeiten z-Wave -m = gewünschtes MySQL-Root-Passwort

````
./install.sh -w /var/www/html -z -m Jeedom
````

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index).

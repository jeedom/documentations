> **WICHTIG**
>
> Dieses Tutorial stammt nicht von Jeedom SAS, sondern von einem Nutzer der Community. Wir können daher nicht garantieren, dass es funktioniert oder noch aktuell ist.



# Installation von Let’s Encrypt

Hier sind die Befehle, die Sie ausführen müssen, um Let’s Encrypt vor der Generierung zu installieren:

````
apt-get install -y git
cd /opt
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
./letsencrypt-auto --help
````

Um ein Zertifikat zu beantragen, müssen Sie über einen Domainnamen verfügen, für den es ausgestellt wird.

# Apache-Konfiguration

Damit der Let’s Encrypt-Vorgang erfolgreich abgeschlossen werden kann, müssen zuvor die folgenden drei Schritte durchgeführt werden:

Achtung: Port 80 muss am Router (Internetanbieter) freigeschaltet werden!

-   Aktivieren Sie das Apache-SSL-Modul der Jeedom-Box.
-   Den HTTPS-VirtualHost von Apache auf der Jeedom-Box aktivieren.
-   Richten Sie eine Portweiterleitung für HTTPS-Anfragen auf Ihrer Internet-Box ein, um diese an Ihre Jeedom-Box weiterzuleiten.

## Aktivierung des VirtualHosts und des SSL-Moduls

> **Hinweis**
>
> Stellen Sie eine SSH-Verbindung zur Jeedom-Box her.

````
a2enmod ssl
a2ensite default-ssl.conf
service apache2 restart
````

> **Hinweis**
>
> LetsEncrypt stellt kein Zertifikat aus, solange Ihre HTTPS-Website von außen nicht erreichbar ist.

``/opt/letsencrypt/letsencrypt-auto --apache --email email@domaine.com -d domaine.com``

Sie müssen die Einstellungen ändern <email@domaine.com> und domaine.com mit Ihren Werten. Normalerweise werden die Einstellungen für das HTTPS-Protokoll vom Skript in Apache hinzugefügt.

> **Hinweis**
>
> Wenn Sie die unten beschriebene Methode zur automatischen Verlängerung verwenden, können Sie den virtualHost deaktivieren ``default-ssl.conf`` mit der Steuerung ``a2dissite default-ssl.conf`` Denken Sie daran, den unten stehenden Standardcode in den vom Verlängerungsskript erstellten VirtualHost zu übertragen ``/etc/apache2/sites-available/000-default-le-ssl.conf``

````
<FilesMatch "\.(cgi|shtml|phtml|php)$">
   SSLOptions +StdEnvVars
</FilesMatch>
<Directory /usr/lib/cgi-bin>
   SSLOptions +StdEnvVars
</Directory>
</VirtualHost>
````

# Nginx-Konfiguration

Dieser Befehl darf nur verwendet werden, wenn Sie über einen Nginx-Webserver verfügen.

``./letsencrypt-auto certonly --email email@domaine.com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/``

Sie müssen die Parameter „email“ und „domain“ durch Ihre eigenen Werte ersetzen sowie den Pfad zum Stammverzeichnis des Servers angeben. Sie müssen die beiden Zeilen zur HTTPS-Konfiguration in die Nginx-Konfiguration einfügen:

``vi /etc/nginx/sites-enabled/default``

Fügen Sie die folgenden Zeilen zwischen den Zeilen ein ``server {`` und ``root /usr/share/nginx/www ;`` :

````
listen 80;
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/ jeedom.chezmoi.fr.crt;
ssl_certificate_key /etc/nginx/ssl/ jeedom.chezmoi.fr.key;
ssl_session_timeout 5m;
````

Und schließlich starten Sie den Nginx-Server neu.

``service nginx restart``

# Verlängerung

Die Verlängerung erfolgt mit dem folgenden Befehl:

``/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d mondomaine.fr``

Sie erhalten automatisch eine E-Mail, sobald das Zertifikat abläuft, um Sie daran zu erinnern, diese Bestellung aufzugeben.

## Automatisches Verfahren

Es ist doch besser, wenn es automatisch läuft. Dazu müssen Sie folgende Schritte befolgen:

-   Installieren Sie **bc**, das im Skript „le-renew“ verwendet wird: ``apt-get install -y bc``
-   Erstellen Sie eine Datei, in die Sie das Skript schreiben können (der Speicherort ist beliebig): ``nano /bin/certletsencryptrenew.sh``
-   Fügen Sie die folgenden Zeilen in die zuvor erstellte Datei ein. Das Kopieren und Einfügen funktioniert über PuTTY. Dieses Skript überprüft das Ablaufdatum des Zertifikats und erneuert es automatisch, wenn das Ablaufdatum weniger als 30 Tage entfernt ist. Sie müssen den Parameter „domaine.com“ durch Ihren eigenen Wert ersetzen:
````
    curl -L -o /usr/local/sbin/le-renew https://raw.githubusercontent.com/frixo3190/le-renew/main/le-renew
    chmod +x /usr/local/sbin/le-renew
    le-renew domaine.com
````
-   Speichern Sie die Datei und schließen Sie den Texteditor, zum Beispiel bei „nano“:
````
    ctrl+o -> Entrée     (permet de sauvegarder)
    ctrl+x -> Entrée     (permet de quitter)
````
-   Bearbeiten Sie die crontab. Dazu müssen Sie als Root angemeldet sein. ``crontab -e``
-   Fügen Sie die folgende Zeile hinzu: ``0 5 * * 1 /bin/certletsencryptrenew.sh``
> **Wichtig**
>
> Achten Sie darauf, den Pfad zum Skript korrekt anzupassen.

> **Tipp**
>
> Grundlagen der Planung ``0 5 * * 1``, schauen Sie hier nach und passen Sie die Einstellungen bei Bedarf an:
-   Speichern Sie die Datei und schließen Sie den Texteditor, nachdem Sie die Datei gespeichert haben:
````
    ctrl+o -> Entrée
    ctrl+x -> Entrée
````

> **Wichtig**
>
> Dieses Tutorial wurde nicht von Jeedom SAS, sondern von einem Benutzer der Community erstellt, daher können wir nicht garantieren, dass es funktioniert oder noch aktuell ist.



# Installation von Letsencrypt

Hier sind die Befehle, die gestartet werden müssen, um letsencrypt vor der Generierung zu installieren :

````
apt-gund install -y git
cd /opt
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
./letsencrypt-auto --help
````

Um ein Zertifikat anzufordern, müssen Sie einen Domainnamen haben, für den es generiert wird.

# Apache-Konfiguration

Damit der Let'sEncrypt-Prozess ordnungsgemäß beendet werden kann, müssen Sie die folgenden drei Schritte ausführen :

Achtung Es ist notwendig, Port 80 am Router (ISP) zu öffnen) !

-   Aktivieren Sie das Apache-SSL-Modul der Jeedom-Box.
-   Aktivieren Sie das Apache VirtualHost HTTPS über die Jeedom-Box .
-   Konfigurieren Sie eine PortForwarding von HTTPS-Anforderungen auf Ihrer Internet Box, um sie an Ihre Jeedom Box umzuleiten.

## Aktivierung des virtualHost- und SSL-Moduls

> **Notiz**
>
> Schließen Sie SSH an der Jeedom-Box an.

````
a2enmod ssl
a2ensite default-ssl.conf
service apache2 restart
````

> **Notiz**
>
> LetsEncrypt stellt kein Zertifikat aus, solange Ihre HTTPS-Site von außen nicht erreichbar ist.

``/opt/letsencrypt/letsencrypt-auto --apache --email email@domaine.com -d domaine.com``

Sie müssen die Einstellungen ersetzen <email@domaine.com> und Domain.com nach Ihren Werten. Normalerweise werden die Parameter zum Hinzufügen des HTTPS-Protokolls vom Skript in Apache hinzugefügt.

> **Notiz**
>
> Wenn Sie die unten stehende automatische Erneuerungsmethode verwenden, können Sie virtualHost deaktivieren ``default-ssl.conf`` mit der Bestellung ``a2dissite default-ssl.conf`` Denken Sie daran, den folgenden Standardcode in dem vom Erneuerungsskript erstellten virtualHost zu tragen ``/etc/apache2/sites-available/000-default-le-ssl.conf``

````
<FilesMatch "\.(cgi|shtml|phtml|php)$">
   SSLOptions +StdEnvVars
</FilesMatch>
<Directory /usr/lib/cgi-bin>
   SSLOptions +StdEnvVars
</Directory>
</VirtualHost>
````

# Konfiguration von Nginx

Dieser Befehl darf nur verwendet werden, wenn Sie über einen Nginx-Webserver verfügen.

``./letsencrypt-auto certonly --email email@domaine.com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/``

Sie müssen die E-Mail- und Domänenparameter durch Ihre Werte sowie den Pfad zum Serverstamm ersetzen. Sie müssen die beiden HTTPS-Konfigurationszeilen in der Nginx-Konfiguration hinzufügen :

``vi /etc/nginx/sites-enabled/default``

Fügen Sie die folgenden Zeilen zwischen den Zeilen hinzu ``server {`` und ``root /usr/share/nginx/www ;`` :

````
listen 80;
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/ jeedom.chezmoi.fr.crt;
ssl_certificate_key /etc/nginx/ssl/ jeedom.chezmoi.fr.key;
ssl_session_timeout 5m;
````

Und schließlich starten Sie den Nginx-Server neu.

``service nginx restart``

# Renouvellement

Die Verlängerung erfolgt mit der Bestellung :

``/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d mondomaine.fr``

Sie erhalten automatisch eine E-Mail, wenn das Zertifikat abläuft, die Sie daran erinnert, diese Bestellung zu starten.

## Automatische Methode

Es ist immer noch besser, wenn es automatisch ist. Gehen Sie dazu wie folgt vor :

-   Installieren **bc**, wird im Skript le-erneuern verwendet : ``apt-gund install -y bc``
-   Erstellen Sie eine Datei, um das Skript zu schreiben (der Speicherort ist frei) : ``nano /bin/certletsencryptrenew.sh``
-   Geben Sie die folgenden Zeilen in die zuvor erstellte Datei ein. Kopieren / Einfügen funktioniert über Kitt. Dieses Skript überprüft den Ablauf des Zertifikats und erneuert es automatisch, wenn das Ablaufdatum weniger als 30 Tage beträgt. Sie müssen den Domänenparameter ersetzen.com nach Ihrem Wert :
````
    curl -L -o /usr/local/sbin/le-renew https://raw.githubusercontent.com/frixo3190/le-renew/main/le-renew
    chmod +x /usr/local/sbin/le-renew
    le-renew domaine.com
````
-   Speichern Sie die Datei und beenden Sie den Texteditor, z. B. mit nano :
````
    ctrl+o -> Entrée     (permund de sauvegarder)
    ctrl+x -> Entrée     (permund de quitter)
````
-   Bearbeiten Sie die Crontab. Sie müssen als root angemeldet sein ``crontab -e``
-   Wir fügen die folgende Zeile hinzu : ``0 5 * * 1 /bin/certletsencryptrenew.sh``
> **Wichtig**
>
> Passen Sie den Pfad unbedingt an das Skript an.

> **Spitze**
>
> Planung verstehen ``0 5 * * 1``, Überprüfen Sie hier und passen Sie es nach Bedarf an :
-   Speichern Sie die Datei und beenden Sie den Texteditor durch Speichern :
````
    ctrl+o -> Entrée
    ctrl+x -> Entrée
````

# Letsencrypt installieren

Hier sind die Befehle, die ausgeführt werden müssen, um letsencrypt vor der Generierung zu installieren :

````
apt-gund install -y git
cd /opt
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
./letsencrypt-auto --help
````

Um ein Zertifikat zu beantragen, müssen Sie einen Domänennamen haben, für den es generiert wird.

# Apache-Setup

Damit der letsEncrypt-Prozess erfolgreich abgeschlossen werden kann, müssen zuvor die drei folgenden Schritte ausgeführt werden :

Achtung es ist notwendig Port 80 auf dem Router (ISP) !

-   Aktivieren Sie das Apache SSL-Modul der Jeedom-Box.
-   Aktivieren Sie den Apache VirtualHost HTTPS der Jeedom-Box .
-   Konfigurieren Sie eine Portweiterleitung von HTTPS-Anfragen auf Ihrer Internet-Box, um sie an Ihre Jeedom-Box umzuleiten.

## Aktivieren des virtualHost- und SSL-Moduls

> **Notiz**
>
> Verbinden Sie sich in SSH auf der Jeedom-Box.

````
a2enmod ssl
a2ensite default-ssl.conf
service apache2 restart
````

> **Notiz**
>
> Es wird kein Zertifikat von LetsEncrypt ausgestellt, bis Ihre Site in HTTPS von außen erreichbar ist.

``/opt/letsencrypt/letsencrypt-auto --apache --email email@domaine.com -d domaine.com``

Sie müssen die Einstellungen überschreiben <email@domaine.de> und Domäne.com durch Ihre Werte. Normalerweise werden die Parameter zum Hinzufügen des HTTPS-Protokolls vom Skript in Apache hinzugefügt.

> **Notiz**
>
> Wenn Sie die unten beschriebene automatische Verlängerungsmethode verwenden, können Sie den virtualHost deaktivieren ``default-ssl.conf`` mit dem Befehl ``a2dissite default-ssl.conf`` Denken Sie daran, den Standardcode unten im virtualHost zu melden, der vom Erneuerungsskript erstellt wurde ``/etc/apache2/sites-available/000-default-le-ssl.conf``

````
<FilesMatch "\.(cgi|shtml|phtml|php)$">
   SSLOptions +StdEnvVars
</FilesMatch>
<Directory /usr/lib/cgi-bin>
   SSLOptions +StdEnvVars
</Directory>
</VirtualHost>
````

# Konfigurieren von Nginx

Dieser Befehl darf nur verwendet werden, wenn Sie einen Nginx-Webserver haben.

``./letsencrypt-auto certonly --email email@domaine.com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/``

Sie müssen die E-Mail- und Domänenparameter sowie den Pfad zum Serverstamm durch Ihre Werte ersetzen. Sie müssen die beiden HTTPS-Konfigurationszeilen in der nginx-Konfiguration hinzufügen :

``vi /etc/nginx/sites-enabled/default``

Fügen Sie die folgenden Zeilen zwischen den Zeilen hinzu ``server {`` und ``root /usr/share/nginx/www ;`` :

````
listen 80;
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/ jeedom.chezmoi.fr.crt;
ssl_certificate_key /etc/nginx/ssl/ jeedom.chezmoi.fr.key;
ssl_session_timeout 5m;
````

Und starten Sie schließlich den Nginx-Server neu.

``service nginx restart``

# Renouvellement

Die Verlängerung erfolgt mit der Bestellung :

``/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d mondomaine.fr``

Sie erhalten automatisch eine E-Mail, wenn das Zertifikat abläuft, die Sie daran erinnert, diesen Befehl zu starten.

## Automatische Methode

Es ist immer noch besser, wenn es automatisch ist. Um dies zu tun, sind hier die folgenden Schritte zu befolgen :

-   Installieren **v. Chr**, Wird im le-renew-Skript verwendet : ``apt-gund install -y bc``
-   Erstellen Sie eine Datei, in die das Skript geschrieben werden soll (der Speicherort ist frei) : ``nano /bin/certletsencryptrenew.sh``
-   Geben Sie die folgenden Zeilen in die zuvor erstellte Datei ein. Kopieren/Einfügen funktioniert über Putty. Dieses Skript prüft den Ablauf des Zertifikats und erneuert es automatisch, wenn das Ablaufdatum weniger als 30 Tage entfernt ist. Sie müssen den Domänenparameter überschreiben.com durch Ihren Wert :
````
    curl -L -o /usr/local/sbin/le-renew https://raw.githubusercontent.com/frixo3190/le-renew/main/le-renew
    chmod +x /usr/local/sbin/le-renew
    le-renew domaine.com
````
-   Speichern Sie die Datei und beenden Sie dann den Texteditor, z. B. mit nano :
````
    ctrl+o -> Entrée     (permund de sauvegarder)
    ctrl+x -> Entrée     (permund de quitter)
````
-   Bearbeiten Sie die Crontab. Sie müssen als root angemeldet sein ``crontab -e``
-   Fügen Sie die folgende Zeile hinzu : ``0 5 * * 1 /bin/certletsencryptrenew.sh``
> **Wichtig**
>
> Achten Sie darauf, den Pfad an das Skript anzupassen.

> **Tipp**
>
> Planung verstehen ``0 5 * * 1``, Sehen Sie hier nach und passen Sie es bei Bedarf an Ihre Bedürfnisse an :
-   Speichern Sie die Datei und beenden Sie den Texteditor durch Speichern :
````
    ctrl+o -> Entrée
    ctrl+x -> Entrée
````

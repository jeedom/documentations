 
===========================


 :

    
    
    :
    
    .


.

 
======================


 :

 ! 

-   .

-    .

-   
    .

 
------------------------------------------

> **Notiz**
>
> .

    
    
    

> **Notiz**
>
> 
> .

    .

.
. Normalerweise die Parameter zum Hinzufügen des HTTPS-Protokolls
werden vom Skript in Apache hinzugefügt.

> **Notiz**
>
> Wenn Sie die unten stehende automatische Erneuerungsmethode verwenden,
> Sie können virtualHost deaktivieren **default-ssl.conf** mit dem
> Befehl **a2dissite default-ssl.conf** Denken Sie daran, den Code bis zu melden
> Standard unten in dem vom Skript erstellten virtualHost
> Erneuerung :
> /etc/apache2/sites-available/000-default-le-ssl.conf\`

    <FilesMatch "\.(cgi|shtml|phtml|php)$">
       SSLOptions + StdEnvVars
    </FilesMatch>
    <Directory /usr/lib/cgi-bin>
       SSLOptions + StdEnvVars
    </Directory>
    </VirtualHost>

Konfiguration von Nginx 
======================

Dieser Befehl darf nur verwendet werden, wenn Sie einen Webserver haben
Nginx.

    ./ letsencrypt-auto certonly - E-Mail email @ domain. -a webroot --webroot-path / usr / share / nginx / www /

Sie müssen die E-Mail- und Domain-Parameter durch Ihre Werte ersetzen,
sowie den Pfad zum Stammverzeichnis des Servers. Sie müssen das hinzufügen
zwei HTTPS-Konfigurationszeilen in der Nginx-Konfiguration :

    vi / etc / nginx / sites-enabled / default

Fügen Sie die folgenden Zeilen zwischen den Zeilen `server {` und ein
`root /usr/share/nginx/www ;` :

    höre 80;

    höre 443 ssl;

    ssl_certificate / etc / nginx / ssl / jeedom.chezmoi.fr.crt;

    ssl_certificate_key / etc / nginx / ssl / jeedom.chezmoi.fr.key;

    ssl_session_timeout 5m;

Und schließlich starten Sie den Nginx-Server neu.

    Service Nginx Neustart

Erneuerung 
==============

Die Verlängerung erfolgt mit der Bestellung :

    / opt / letsencrypt / letsencrypt-auto --apache --renew-by-default -d mondomaine.fr

Sie erhalten automatisch eine E-Mail, wenn die Frist abgelaufen ist.
Zertifikat, das Sie daran erinnert, diesen Befehl zu starten.

Automatische Methode 
-------------------

Es ist immer noch besser, wenn es automatisch ist. Um dies zu tun, hier sind die
Schritte zu folgen :

-   Installieren **bc**, wird im Skript le-erneuern verwendet :

<!-- -->

    apt-get install -y bc

-   Erstellen Sie eine Datei, um das Skript zu schreiben (der Speicherort ist frei).
    :

<!-- -->

    nano /bin/certletsencryptrenew.sh

-   Geben Sie die folgenden Zeilen in die zuvor erstellte Datei ein.
    Kopieren / Einfügen funktioniert über Kitt. Dieses Skript prüft
    Das Zertifikat läuft ab und erneuert es automatisch, wenn das
    Das Ablaufdatum liegt innerhalb von 30 Tagen. Sie müssen die ersetzen
    Domäneneinstellung.com nach Ihrem Wert :

<!-- -->

    curl -L -o / usr / local / sbin / le-erneuern http://do.co/le-renew
    chmod + x / usr / local / sbin / le-erneuern
    le-erneuere domaine.com

-   Speichern Sie die Datei und beenden Sie beispielsweise den Texteditor,
    mit nano :

<!-- -->

    Strg + o -> Eingabetaste (ermöglicht das Speichern)
    Strg + x -> Eingabe (Beenden)

-   Bearbeiten Sie die Crontab. Sie müssen als root angemeldet sein :

<!-- -->

    crontab -e

-   Wir fügen die folgende Zeile hinzu :

<!-- -->

    0 5 * * 1 /bin/certletsencryptrenew.sh

> **Wichtig**
>
> Passen Sie den Pfad unbedingt an das Skript an.

> **Spitze**
>
> Um die Planung 0 5 \ * \ * 1 zu verstehen, siehe hier und
> Passen Sie es bei Bedarf an Ihre Bedürfnisse an :
> <https://crontab.guru/#0_5_*_*_1>

-   Speichern Sie die Datei und beenden Sie den Texteditor mit
    Sichern :

<!-- -->

    Strg + o -> Eingabe
    Strg + x -> Eingabetaste

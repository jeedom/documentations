Installation von Letsencrypt 
===========================

Hier sind die Befehle, die gestartet werden müssen, um letsencrypt vor dem zu installieren
Generation :

    apt-get install -y git
    cd / opt
    git clone https://github.com/letsencrypt/letsencrypt
    cd letsencrypt
    ./ letsencrypt-auto --help

Um ein Zertifikat anzufordern, müssen Sie den Namen haben
Domain, für die es generiert wird.

Apache-Konfiguration 
======================

Damit der Let'sEncrypt-Prozess erfolgreich abgeschlossen werden kann, ist dies der Fall
notwendig, um die drei folgenden Schritte vorher auszuführen :

Achtung Es ist notwendig, Port 80 am Router (ISP) zu öffnen ! 

-   Aktivieren Sie das Apache-SSL-Modul der Jeedom-Box.

-   Aktivieren Sie das Apache VirtualHost HTTPS über die Jeedom-Box .

-   Konfigurieren Sie eine Portweiterleitung von HTTPS-Anforderungen auf Ihrer Box
    Internet, um sie auf Ihre Jeedom Box umzuleiten.

Aktivierung des virtualHost- und SSL-Moduls 
------------------------------------------

> **Note**
>
> Schließen Sie SSH an der Jeedom-Box an.

    a2enmod ssl
    a2ensite default-ssl.conf
    apache2 Neustartdienst

> **Note**
>
> Solange Ihre Site vorhanden ist, wird von LetsEncrypt kein Zertifikat ausgestellt
> in HTTPS ist von außen nicht erreichbar.

    / opt / letsencrypt / letsencrypt-auto --apache --email email @ domaine.com -d domaine.com

Sie müssen die Einstellungen ersetzen <email@domaine.com> und domaine.com
durch Ihre Werte. Normalerweise die Parameter zum Hinzufügen des HTTPS-Protokolls
werden vom Skript in Apache hinzugefügt.

> **Note**
>
> Wenn Sie die unten stehende automatische Erneuerungsmethode verwenden,
> Sie können virtualHost deaktivieren **default-ssl.conf** mit dem
> Befehl**a2dissite default-ssl.conf** Denken Sie daran, den Code bis zu melden
> Standard unten in dem vom Skript erstellten virtualHost
> Erneuerung:
> /etc/apache2/sites-available/000-default-le-ssl.conf \ `

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

    ./ letsencrypt-auto certonly - E-Mail email @ domain.com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/

Sie müssen die E-Mail- und Domain-Parameter durch Ihre Werte ersetzen,
sowie den Pfad zum Stammverzeichnis des Servers. Sie müssen das hinzufügen
zwei HTTPS-Konfigurationszeilen in der Nginx-Konfiguration :

    vi / etc / nginx / sites-enabled / default

Fügen Sie die folgenden Zeilen zwischen den Zeilen `server {` und ein
`root / usr / share / nginx / www;` :

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

Sie erhalten automatisch eine E-Mail, wenn die Frist abgelaufen ist
Zertifikat, das Sie daran erinnert, diesen Befehl zu starten.

Automatische Methode 
-------------------

Es ist immer noch besser, wenn es automatisch ist. Um dies zu tun, hier sind die
Schritte zu folgen :

-   Installieren**bc**, wird im Skript le-erneuern verwendet :

<!-- -->

    apt-get install -y bc

-   Erstellen Sie eine Datei, um das Skript zu schreiben (der Speicherort ist frei)
    :

<!-- -->

    nano /bin/certletsencryptrenew.sh

-   Geben Sie die folgenden Zeilen in die zuvor erstellte Datei ein.
    Kopieren / Einfügen funktioniert über Kitt. Dieses Skript prüft
    Das Zertifikat läuft ab und erneuert es automatisch, wenn das
    Das Ablaufdatum liegt innerhalb von 30 Tagen. Sie müssen die ersetzen
    Domäneneinstellung.com nach Ihrem Wert :

<!-- -->

    curl -L -o /usr/local/sbin/le-renew http://do.co/le-renew
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

> **Important**
>
> Passen Sie den Pfad unbedingt an das Skript an.

> **Tip**
>
> Um die Planung zu verstehen 0 5 \* \* 1, schauen Sie hier und
> Passen Sie es bei Bedarf an Ihre Bedürfnisse an :
> <https://crontab.guru/#0_5_*_*_1>

-   Speichern Sie die Datei und beenden Sie den Texteditor mit
    Sichern:

<!-- -->

    Strg + o -> Eingabe
    Strg + x -> Eingabetaste

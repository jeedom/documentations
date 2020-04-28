Shellinabox ist eine Konsole, auf die über einen Browser zugegriffen werden kann.

Dies erfolgt in Form eines Abhördienstes an Port 4200 in
https. Wir werden die Installation und dann die Konfigurationen von beschreiben
Reverse Proxy

Shellinabox-Installation 
===========================

Hier ist der Befehl zum Starten, um Shellinabox zu installieren :

    

Apache Reverse Proxy 
====================

Sie müssen eine Datei in erstellen
/etc/apache2/sites-enabled/shellinabox.conf mit dem folgenden Inhalt
und starten Sie dann Apache neu

    <Location /jeedom/shellinabox>
    Proxypass  http://localhost:4200/
    #ProxyPassReverse  http://localhost:4200/
    Erlaube von allen
    </Location>

 
===================

Sie müssen eine Datei in /etc/nginx/sites-enabled/shellinabox.conf erstellen
mit dem Inhalt unten und starten Sie dann Nginx neu

    Ort / Jeedom / Shellinabox / {
    proxy_pass http://127.0.0.1:4200;
    proxy_set_header Host $ host;
    
    
    
    }

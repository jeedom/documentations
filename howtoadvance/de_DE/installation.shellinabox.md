# Installation von Shellinabox

Shellinabox ist eine über einen Browser zugängliche Konsole.

Es handelt sich um einen Dienst, der über HTTPS auf Port 4200 lauscht. Wir werden zunächst die Installation und anschließend die Konfiguration des Reverse-Proxys beschreiben.

Hier ist der Befehl, den Sie ausführen müssen, um Shellinabox zu installieren:

``sudo apt-get -y shellinabox``

# Apache-Reverse-Proxy

Es muss eine Datei in ``/etc/apache2/sites-enabled/shellinabox.conf`` mit dem folgenden Inhalt und starte anschließend Apache neu

````
<Location /jeedom/shellinabox>
Proxypass  http://localhost:4200/
#ProxyPassReverse  http://localhost:4200/
Allow from all
</Location>
````

# Nginx-Reverse-Proxy

Es muss eine Datei in ``/etc/nginx/sites-enabled/shellinabox.conf`` mit dem folgenden Inhalt und starte anschließend Nginx neu

````
location /jeedom/shellinabox/ {
proxy_pass http://127.0.0.1:4200;
proxy_set_header Host $host;
proxy_buffering off;
tcp_nodelay on;
access_log off;
}
````

# Shellinabox-Installation

Shellinabox ist eine Konsole, auf die über einen Browser zugegriffen werden kann.

Dies erfolgt in Form eines Dienstes, der Port 4200 in https überwacht. Wir werden die Installation und anschließend die Reverse-Proxy-Konfigurationen beschreiben

Hier ist der Befehl zum Starten, um Shellinabox zu installieren :

``sudo apt-get -y shellinabox``

# Apache Reverse Proxy

Sie müssen eine Datei in erstellen ``/etc/apache2/sites-enabled/shellinabox.conf`` mit dem Inhalt unten und starten Sie dann Apache neu

````
<Location /jeedom/shellinabox>
Proxypass  http://localhost:4200/
#ProxyPassReverse  http://localhost:4200/
Allow from all
</Location>
````

# Reverse Proxy Nginx

Sie müssen eine Datei in erstellen ``/etc/nginx/sites-enabled/shellinabox.conf`` mit dem Inhalt unten und starten Sie dann Nginx neu

````
location /jeedom/shellinabox/ {
proxy_pass http://127.0.0.1:4200;
proxy_set_header Host $host;
proxy_buffering off;
tcp_nodelay on;
access_log off;
}
````

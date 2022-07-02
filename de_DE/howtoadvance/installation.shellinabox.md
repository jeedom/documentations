# Shellinabox-Installation

Shellinabox ist eine Konsole, auf die über einen Browser zugegriffen werden kann.

Dies geschieht in Form eines Dienstes, der Port 4200 in https abhört. Wir beschreiben die Installation und dann die Reverse-Proxy-Konfigurationen

Hier ist der Befehl, der ausgeführt werden muss, um Shellinabox zu installieren :

``sudo apt-get -y shellinabox``

# Apache-Reverse-Proxy

Sie müssen eine Datei erstellen in ``/etc/apache2/sites-enabled/shellinabox.conf`` mit dem folgenden Inhalt und starten Sie dann Apache neu

````
<Location /jeedom/shellinabox>
Proxypass  http://localhost:4200/
#ProxyPassReverse  http://localhost:4200/
Allow from all
</Location>
````

# Nginx-Reverse-Proxy

Sie müssen eine Datei erstellen in ``/etc/nginx/sites-enabled/shellinabox.conf`` mit dem folgenden Inhalt und starten Sie dann Nginx neu

````
location /jeedom/shellinabox/ {
proxy_pass http://127.0.0.1:4200;
proxy_set_header Host $host;
proxy_buffering off;
tcp_nodelay on;
access_log off;
}
````

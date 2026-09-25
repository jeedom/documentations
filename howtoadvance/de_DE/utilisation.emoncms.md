# Verwendung von EmonCMS

EmonCMS ist eine PHP-Anwendung zur Energieüberwachung (Emon: Energy Monitor)

Was den Datenaustausch zwischen Jeedom und EmonCMS (in beide Richtungen) betrifft, finden Sie in dieser Dokumentation Informationen zur Umsetzung.

Außerdem wird eine kurze Anleitung zur Installation von emoncms bereitgestellt (diese Installation wird derzeit nicht nativ in Jeedom angeboten).

EmonCMS kann parallel zu Jeedom oder an einem anderen Ort installiert werden. Sie können sogar die Instanz emoncms.org nutzen.

# Einen Wert von Jeedom an EmonCMS senden

Um einen Wert von Jeedom an EmonCMS zu senden, ist die einfachste Lösung – da sie nativ verfügbar ist – die Verwendung der Push-URL einer Information.

In Jeedom gelangt man zu den erweiterten Einstellungen, indem man auf das Zahnrad-Symbol auf der rechten Seite klickt.

Anschließend findet man unter „Erweiterte Konfiguration“ die letzte Einstellung „Push-URL“. Diese muss mit der EmonCMS-API-Adresse für den Feed ausgefüllt werden, den man befüllen möchte.

Die Push-URL hat folgende Form:

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

Mit folgenden Einstellungen:

-   id: Die ID des Feeds, die man auf emoncms findet
-   apikey: Der API-Schlüssel von Read&Write für emoncms
-   value: Man muss *value* unbedingt stehen lassen, damit Jeedom den Wert der Information sendet
-   Strom: Dies muss geändert werden in

# Benachrichtigung an Jeedom oder Abruf aus Jeedom

Um Daten aus emoncms in Jeedom zu übernehmen, gibt es zwei Möglichkeiten:

-   Die erste Möglichkeit besteht darin, über das Skript-Plugin in Jeedom eine Information zu erstellen und die API-URL des Feeds zu verwenden. Bei dieser Methode muss der Wert regelmäßig oder beispielsweise über ein Szenario abgerufen werden, was in der Regel nicht sinnvoll ist, da die Daten aus ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   Die zweite Möglichkeit besteht darin, das Event-Plugin von emoncms zu verwenden, um unter bestimmten Bedingungen eine Aktion auszulösen. Diese Methode könnte nützlich sein, wenn man über Daten verfügt, die von emoncms berechnet oder direkt abgerufen werden (z. B. OpenBEM). Der Vorteil dabei ist, dass nur bei Bedarf eine Benachrichtigung erfolgt. Allerdings ermöglicht das Event-Plugin keine Push-Benachrichtigungen, sodass für die Verbindung zu Jeedom MQTT verwendet werden muss.

# Anleitung zur Installation von EmonCMS

Die Installation wird auf dieser GitHub-Seite beschrieben [hier](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md)

Bitte beachten Sie, dass einige Plugins mit der neuesten Version von EmonCMS (v9, Stand Ende 2015) veraltet zu sein scheinen.

Wenn man sie installiert, treten Probleme mit den Menüs auf. Jedenfalls benötigt man zunächst einmal nur:

````
git clone https://github.com/emoncms/event.git # C’est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C’est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# Nginx-Konfiguration

Hier ist eine Beispielkonfiguration für Nginx. Für Apache ist keine spezielle Konfiguration erforderlich, ein klassisches Verzeichnis reicht aus.

````
location /emoncms {
       alias /var/www/emoncms/;
       index index.php;
        try_files = $uri $uri/ @missing;

   location ~ [^/]\.php(/|$) {
           fastcgi_split_path_info ^(.+?\.php)(/.*)$;
           fastcgi_pass unix:/var/run/php5-fpm.sock;
           fastcgi_index index.php;
           include fastcgi_params;
           fastcgi_param   REMOTE_USER   $remote_user;
           fastcgi_param  PATH_INFO $fastcgi_path_info;
           fastcgi_param SCRIPT_FILENAME /var/www/emoncms/index.php;
       }

}

location @missing {
        rewrite ^/emoncms/(.*)$ /emoncms/index.php?q=$1&$args last;
}
````

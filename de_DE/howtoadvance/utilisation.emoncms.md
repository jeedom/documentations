# Verwendung von EmonCMS

EmonCMS ist eine PHP-Anwendung zur Energieüberwachung (Emon : Energiemonitor)

Bezüglich des Datenaustauschs zwischen Jeedom und EmonCMS (in beide Richtungen) finden Sie die Implementierungsmethoden in dieser Dokumentation.

Eine kurze Anleitung zur Installation von emoncms wird ebenfalls bereitgestellt (diese Installation wird derzeit nicht nativ in Jeedom angeboten))

EmonCMS kann zusammen mit Jeedom oder an anderer Stelle installiert werden. Sie können sogar die emoncms.org-Instanz verwenden

# Senden eines Wertes von Jeedom an EmonCMS

Um einen Wert von Jeedom an EmonCMS zu senden, ist die einfachste Lösung, da sie nativ verfügbar ist, die Verwendung der Push-URL der Information

In Jeedom können Sie die erweiterten Einstellungen aufrufen, indem Sie auf das Zahnradsymbol auf der rechten Seite klicken.

Unter „Erweiterte Konfiguration“ finden Sie den letzten Parameter, die Push-URL. Hier müssen Sie die EmonCMS-API-Adresse für den Feed eintragen, den Sie befüllen möchten

Die Push-URL hat folgendes Format: :

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

Mit den Einstellungen :

-   Ausweis : die Feed-ID, die auf emoncms gefunden wurde
-   API-Schlüssel : der Lese- und Schreib-API-Schlüssel für emoncms
-   Wert : Wir müssen gehen *Wert* damit Jeedom den Wert der Information senden kann
-   Leistung : Dies muss geändert werden für

# Benachrichtigung an Jeedom oder Abholung von Jeedom

Um Daten aus emoncms in Jeedom abzurufen, gibt es zwei Möglichkeiten :

-   Die erste Methode besteht darin, über das Skript-Plugin in Jeedom einen Informationseintrag zu erstellen und die API-URL des Feeds zu verwenden. Diese Methode erfordert das regelmäßige Abrufen des Werts oder beispielsweise über ein Szenario und ist normalerweise unnötig, da die Daten aus dem Inneren stammen ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   Die zweite Möglichkeit besteht darin, das EmonCMS Event-Plugin zu verwenden, um eine Aktion basierend auf bestimmten Bedingungen auszulösen. Diese Methode kann nützlich sein, wenn Ihre Daten von emoncms berechnet oder direkt abgerufen werden (z. B. OpenBEM). Sie hat den Vorteil, dass Benachrichtigungen nur bei Bedarf versendet werden. Allerdings unterstützt das Ereignis-Plugin keine Push-Benachrichtigungen, weshalb Sie für die Jeedom-Verbindung MQTT verwenden müssen

# EmonCMS Installationsanleitung

Die Installation wird auf dieser GitHub-Seite beschrieben [Hier](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md)

Beachten Sie, dass einige Plugins mit der neuesten Version von EmonCMS (Version 9, Stand Ende 2015) veraltet zu sein scheinen)

Wenn wir sie installieren, wird es Probleme mit den Menüs geben. In jedem Fall müssen wir im Prinzip nur :

````
git clone https://github.com/emoncms/event.git # C'est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C'est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# Nginx-Konfiguration

Hier ist eine Beispielkonfiguration für Nginx. Für Apache ist keine spezielle Konfiguration erforderlich; ein Standardverzeichnis genügt

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

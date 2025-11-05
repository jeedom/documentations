# Emoncms verwenden

EmonCMS ist eine PHP-Energieüberwachungsanwendung (Emon : Energiemonitor)

In Bezug auf den Datenaustausch zwischen Jeedom und EmonCMS (auf die eine oder andere Weise) finden Sie in dieser Dokumentation die Mittel zur Implementierung.

Ein kurzes Memo zur Installation von Emoncms ist ebenfalls verfügbar (diese Installation wird derzeit in Jeedom nicht nativ angeboten)

EmonCMS kann neben Jeedom oder anderswo installiert werden. Sie können sogar die Instanz emoncms.org verwenden

# Senden Sie einen Wert von Jeedom an EmonCMS

Um einen Wert von Jeedom an EmonCMS zu senden, besteht die einfachste Lösung, da er nativ verfügbar ist, darin, die Push-URL einer Information zu verwenden

In Jeedom können Sie auf die erweiterten Parameter zugreifen, indem Sie auf das Zahnrad rechts klicken.

Dann finden wir in "Erweiterte Konfiguration" den letzten Push-URL-Parameter, der mit der EmonCMS-API-Adresse für den Feed gefüllt werden muss, den wir füllen möchten

Die URL von Push hat die Form :

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

Mit Parametern :

-   Identifikation : Die auf Emoncms gefundene Feed-ID
-   apikey : der API-Schlüssel zum Lesen und Schreiben für Emoncms
-   Wert : wir müssen gehen *Wert* damit Jeedom den Wert der Info sendet
-   Macht : zu ändern für

# Benachrichtigung an Jeedom oder Wiederherstellung von Jeedom

Um Daten von Emoncms in Jeedom zu nehmen, gibt es zwei Möglichkeiten :

-   Die erste besteht darin, Informationen über das Skript-Plugin in Jeedom zu erstellen und die API-URL des Feeds zu verwenden. Diese Methode erfordert die regelmäßige Wiederherstellung des Werts beispielsweise oder über ein Szenario und ist normalerweise nicht nützlich, da die Daten ihre Quelle haben ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   Die zweite Möglichkeit besteht darin, das emoncms-Ereignis-Plugin zu verwenden, um unter bestimmten Bedingungen eine Aktion auszulösen. Diese Methode kann nützlich sein, wenn wir Daten haben, die von emoncms berechnet oder direkt wiederhergestellt werden (zum Beispiel OpenBEM). Mit dem Vorteil, dass nur bei Bedarf benachrichtigt wird, erlaubt das Ereignis-Plugin andererseits nicht, pushen und Sie müssen MQTT für die Jeedom-Verbindung durchlaufen

# Memo für die EmonCMS-Installation

Die Installation wird auf dieser Github-Seite beschrieben [hier](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md)

Beachten Sie, dass einige Plugins mit der neuesten EmonCMS-Version (Version 9 Ende 2015) veraltet zu sein scheinen)

Wenn wir sie installieren, gibt es Probleme mit den Menüs. Jedenfalls brauchen wir nur a priori :

````
git clone https://github.com/emoncms/event.git # C'est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C'est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# Nginx-Konfiguration

Hier ist eine Beispielkonfiguration für Nginx. Für Apache ist kein bestimmtes conf classic-Verzeichnis erforderlich

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

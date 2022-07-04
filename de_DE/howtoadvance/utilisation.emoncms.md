# Verwendung von EmonCMS

EmonCMS ist eine PHP-Energieüberwachungsanwendung (Emon : Energiemonitor)

In Bezug auf den Datenaustausch zwischen Jeedom und EmonCMS (in die eine oder andere Richtung) finden Sie in dieser Dokumentation die Mittel, um dies zu implementieren.

Ein kurzes Memo zur Installation von emoncms wird ebenfalls angeboten (diese Installation wird derzeit nicht nativ in Jeedom angeboten)

EmonCMS kann neben Jeedom oder anderswo installiert werden. Sie können sogar die emoncms.org-Instanz verwenden

# Senden Sie einen Wert von Jeedom an EmonCMS

Um einen Wert von Jeedom an EmonCMS zu senden, ist die einfachste Lösung, da sie nativ verfügbar ist, die Push-URL einer Information zu verwenden

In Jeedom können Sie auf die erweiterten Einstellungen zugreifen, indem Sie rechts auf das Zahnrad klicken.

Dann finden wir in "Erweiterte Konfiguration" den letzten Push-URL-Parameter, wir müssen ihn mit der EmonCMS-API-Adresse für den Feed füllen, den wir füllen möchten

Die Push-URL hat die Form :

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

Mit Einstellungen :

-   Ich würde : die ID des auf emoncms gefundenen Feeds
-   API-Schlüssel : der Lese- und Schreib-API-Schlüssel für emoncms
-   Wert : du musst gehen *Wert* damit Jeedom den Wert der Informationen sendet
-   Energie : es soll modifiziert werden für

# Benachrichtigung an Jeedom oder Wiederherstellung von Jeedom

Um Daten von emoncms in Jeedom zu übernehmen, gibt es zwei Möglichkeiten :

-   Die erste besteht darin, eine Info über das Skript-Plugin in Jeedom zu erstellen und die API-URL des Feeds zu verwenden. Diese Methode zwingt dazu, den Wert beispielsweise regelmäßig oder über ein Szenario abzurufen, und ist normalerweise nicht sinnvoll, da die Daten ihre Quelle in haben ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   Die zweite Möglichkeit besteht darin, das emoncms Event-Plugin zu verwenden, um unter bestimmten Bedingungen eine Aktion auszulösen. Diese Methode könnte nützlich sein, wenn wir Daten haben, die von emoncms berechnet oder direkt abgerufen werden (z. B. OpenBEM). Mit dem Vorteil, nur bei Bedarf zu benachrichtigen, andererseits erlaubt das Ereignis-Plugin kein Push und Sie müssen MQTT durchlaufen für die Jeedom-Verbindung

# Memo für die Installation von EmonCMS

Die Installation ist auf dieser Github-Seite beschrieben [hier](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md)

Beachten Sie, dass einige Plugins mit der neuesten EmonCMS-Version (v9 Ende 2015) veraltet zu sein scheinen)

Wenn sie installiert sind, gibt es Probleme mit den Menüs. Wie auch immer, wir brauchen nur a priori :

````
git clone https://github.com/emoncms/event.git # C'est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C'est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# Nginx-Setup

Hier ist eine Beispielkonfiguration für Nginx. Für Apache ist kein bestimmtes conf a classic-Verzeichnis erforderlich

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

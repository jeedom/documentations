EmonCMS ist eine PHP-Energieüberwachungsanwendung (Emon :
Energiemonitor)

In Bezug auf den Datenaustausch zwischen Jeedom und EmonCMS (in
So oder so) finden Sie in dieser Dokumentation die Mittel
um es umzusetzen.

Ein kurzes Memo zur Installation von Emoncms ist ebenfalls verfügbar (dies
Die Installation wird derzeit in Jeedom nicht nativ angeboten

EmonCMS kann neben Jeedom oder anderswo installiert werden. Du kannst
Verwenden Sie sogar die Instanz emoncms.org

Senden Sie einen Wert von Jeedom an EmonCMS 
=========================================

Um einen Wert von Jeedom an EmonCMS zu senden, ist dies die einfachste Lösung
da es nativ verfügbar ist, ist die Push-URL von a zu verwenden
information

In Jeedom können Sie auf die erweiterten Einstellungen zugreifen, indem Sie auf klicken
Zahnrad rechts.

Dann finden wir in "Erweiterte Konfiguration" den letzten Parameter
Push-URL, muss mit der EmonCMS-API-Adresse für den Feed gefüllt sein
wir wollen füllen

Die URL von Push hat die Form :

[https://serveur/emoncms/input/post.json?json = {power:\.#value\.#}&apikey=xxx](https://serveur/emoncms/input/post.json?json = {power:#value#}& apikey = xxx)

Mit Parametern :

-   Identifikation : Die auf Emoncms gefundene Feed-ID

-   apikey : der API-Schlüssel zum Lesen und Schreiben für Emoncms

-   Wert : wir müssen gehen *Wert* für Jeedom, um die zu senden
    Wert der Info

-   Macht : zu ändern für

Benachrichtigung an Jeedom oder Wiederherstellung von Jeedom 
======================================================

Um Daten von Emoncms in Jeedom zu nehmen, gibt es zwei Möglichkeiten
:

-   Die erste besteht darin, Informationen über das Skript-Plugin in Jeedom zu erstellen
    und verwenden Sie die API-URL des Feeds. Diese Methode erfordert eine Wiederherstellung
    der Wert regelmäßig oder über Szenario zum Beispiel und normal
    nicht nützlich, da die Daten ihre Quelle in jeedom\_setting haben

        https://serveur/emoncms/feed/value.json?id=1&apikey=xxx

-   Die zweite Möglichkeit ist die Verwendung des emoncms Event Plugins
    unter bestimmten Bedingungen eine Aktion auslösen. Diese Methode
    könnte nützlich sein, wenn wir Daten haben, die berechnet werden oder
    direkt von emoncms abgerufen (zum Beispiel OpenBEM) Mit
    der Vorteil, nur bei Bedarf zu benachrichtigen, jedoch das Plugin
    Das Ereignis erlaubt Ihnen nicht zu pushen und Sie müssen MQTT durchlaufen
    für Jeedom Verbindung

Memo für die EmonCMS-Installation 
================================

Die Installation wird auf dieser Github-Seite beschrieben :

<https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md>

Beachten Sie, dass einige Plugins mit der neuesten Version veraltet zu sein scheinen
EmonCMS (v9 Ende 2015)

Wenn wir sie installieren, gibt es Probleme mit den Menüs. Jedenfalls,
wir brauchen nur a priori :

git clone <https://github.com/emoncms/event.git> (Er ist derjenige, der kann
erlauben, Reaktionen auf Ereignisse in Emoncms für zu erstellen
Jeedom benachrichtigen)

git clone <https://github.com/emoncms/openbem.git> (Dies ist ein Plugin für
den Energieverbrauch des Hauses überwachen)

git clone <https://github.com/emoncms/energy.git>

git clone <https://github.com/emoncms/report.git>

git clone <https://github.com/elyobelyob/mqtt.git>

Nginx-Konfiguration 
===================

Hier ist eine Beispielkonfiguration für Nginx. Für Apache gibt es keine
Special Conf brauchen ein klassisches Repertoire

    Ort / Emoncms {
           alias / var / www / emoncms /;
           index index.php;
            try_files = $ uri $ uri / @missing;

       Ort ~ [^ /] \.php(/|$) {
               fastcgi_split_path_info ^ (. +?\ .php) (/.*) $;
               fastcgi_pass unix:/var/run/php5-fpm.sock;
               fastcgi_index index.php;
               include fastcgi_params;
               fastcgi_param REMOTE_USER $ remote_user;
               fastcgi_param PATH_INFO $ fastcgi_path_info;
               fastcgi_param SCRIPT_FILENAME /var/www/emoncms/index.php;
           }

    }

    location @missing {
            schreibe um ^ / emoncms / (.*) $ /emoncms/index.php?q = $ 1 & $ args last;
    }

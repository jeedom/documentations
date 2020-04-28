EmonCMS ist eine PHP-Energieüberwachungsanwendung (Emon :
Energiemonitor)

In Bezug auf den Datenaustausch zwischen Jeedom und EmonCMS (in
So oder so) finden Sie in dieser Dokumentation die Mittel
um es umzusetzen.

Ein kurzes Memo zur Installation von Emoncms ist ebenfalls verfügbar (dies
Die Installation wird derzeit in Jeedom nicht nativ angeboten.

EmonCMS kann neben Jeedom oder anderswo installiert werden. Du kannst
Verwenden Sie sogar die Instanz emoncms.org

Senden Sie einen Wert von Jeedom an EmonCMS 
=========================================

Um einen Wert von Jeedom an EmonCMS zu senden, ist dies die einfachste Lösung
da es nativ verfügbar ist, ist die Push-URL von a zu verwenden
Informationen

In Jeedom können Sie auf die erweiterten Einstellungen zugreifen, indem Sie auf klicken
Zahnrad rechts.

Dann finden wir in "Erweiterte Konfiguration" den letzten Parameter
Push-URL, muss mit der EmonCMS-API-Adresse für den Feed gefüllt sein
wir wollen füllen

Die URL von Push hat die Form :

[https://serveur/emoncms/input/post.json?json={Macht:\#Wert\#}&apikey=xxx](https://serveur/emoncms/input/post.json?json={Macht:#Wert#}&apikey=xxx)

Mit Parametern :

-   Identifikation : Die auf Emoncms gefundene Feed-ID

-   apikey : der API-Schlüssel zum Lesen und Schreiben für Emoncms

-   Wert : Sie müssen * Wert * für Jeedom hinterlassen, um die zu senden
    Wert der Info

-   Macht : zu ändern für

Benachrichtigung an Jeedom oder Wiederherstellung von Jeedom 
======================================================

Um Daten von Emoncms in Jeedom zu nehmen, gibt es zwei Möglichkeiten
:

-   Die erste besteht darin, Informationen über das Skript-Plugin in Jeedom zu erstellen
    und verwenden Sie die API-URL des Feeds. Diese Methode erfordert eine Wiederherstellung
    der Wert regelmäßig oder über Szenario zum Beispiel und normal
    nicht nützlich, da die Daten ihre Quelle in jeedom \ _setting haben

        https://serveur/emoncms/feed/Wert.json?Identifikation=1&apikey=xxx

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
 :

:.



:.


:>

:>

:>

 
===================

. 


     {
           
           
            

       .PHP (/|$) {
               ?
               :
               
               
               
               
               
           }

    }

     {
            .*?
    }

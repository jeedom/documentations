Warum ? 
==========

-   Apache wird mit Jeedom allmählich zur Norm

-   Ermöglicht Ihnen die neuesten Sicherheitsupdates unter
    Zugriff auf Dateien (dank .htaccess) bei Updates von
    Jeedom

-   Korrigiert einige Zugangs- und Stabilitätsprobleme (insbesondere für diese
    die viele Kameras haben)

-   Verbessert die Gesamtleistung von Jeedom.

Voraussetzungen 
=========

-   Wissen, wie man in SSH auf der Box verbindet (Sie finden die
    Kennungen in der Installationsdokumentation)

-   Mit dem Internet verbunden sein.

> **Wichtig**
>
> Bei Bedenken kann das Jeedom-Team nicht zur Verantwortung gezogen werden und
> kann jede Supportanfrage ablehnen. Die Handhabung liegt bei Ihnen
> Risiken und Gefahren.

> **Wichtig**
>
> Bitte beachten Sie, dass einige inoffizielle Plugins nicht kompatibel sind
> Apache, finde es schon lange heraus.

Wie es geht 
=============

Deaktivierung von Jeedom- und Nginx-Diensten 
------------------------------------------

In Jeedom müssen Sie dann mit einem Daemon zu jedem Plugin gehen
Deaktivieren Sie die automatische Verwaltung des Dämons und schneiden Sie ihn ab. Du musst
Deaktivieren Sie dann in der Task-Engine alle Aufgaben (es gibt eine
allgemeine Deaktivierungsschaltfläche) und in den Szenarien alle deaktivieren
die Szenarien (es gibt eine allgemeine Deaktivierungsschaltfläche).

    systemctl stop cron
    systemctl stop nginx
    

 
--------------------------------------

    
    
    
    
    wget https:.
    
    .
    
    
    
    

> **Notiz**
>
> 
>  : "
> ".

 
---------------

    
    .]* 
    
    
    :

 
------------

    



.

 
-------------------------

MAKE :

    crontab -e

 :

    * * * * * .

Von :

    * * * * * .

 
---------------------------------

    *
    
    
    

 
------------------------

    
    


. .

> **Wichtig**
>
> 
> .

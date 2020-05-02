Wir werden hier sehen, wie man manuell aktualisiert
Jeedom, über SSH-Konsole.

Voraussetzungen 
=========

-   weiß, wie man in SSH eine Verbindung zu Jeedom herstellt

-   kennen die SSH-Kennungen (siehe Installationsdokumentation)

-   haben Internetzugang von der Jeedom Box

> **Important**
>
> Denken Sie daran, vor jedem Update ein Backup zu erstellen und zu exportieren
> Handbuch.

Herunterladen und entpacken 
===============================

In SSH tun :

    sudo su -
    cd / root
    wget https://github.com/jeedom/core/archive/master.zip
    entpacke master.zip
    cp -R Core-Master / * / var / www / html
    cp -R Core-Master /.[^.]* / var / www / html

Update 
===========

Immer noch in SSH:

    sudo su -
    php / var / www / html / install / update.PHP-Modus = Kraft
    chmod 775 -R / var / www / html
    www-data chown:www-data -R / var / www / html

> **Important**
>
> Wenn Ihre Installation von Jeedom etwas alt ist, muss sie ersetzt werden
> all / var / www / html von / usr / share / nginx / www / jeedom

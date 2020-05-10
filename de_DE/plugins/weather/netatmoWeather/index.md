Plugin permettant de récupérer les informations des stations météo
Netatmo.

Plugin-Konfiguration
=======================

Nach der Installation des Plugin, müssen Sie Ihre Netatmo Zugangsdaten
eingeben :

![netatmoWeather2](./images/netatmoWeather2.png)

-   **Kunden ID** : Ihre Kunden-ID (siehe Konfigurationsabschnitt)

-   **Kunden Schlüssel** : Ihr Kunden Schlüssel (siehe Konfigurationsabschnitt)

-   **Benutzername** : Benutzername Ihres Netatmo Kontos 

-   **Mot de passe** : mot de passe de votre compte Netatmo

-   **Synchronisieren** : ermöglicht das Synchronisieren von Jeedom mit Ihrem 
    Netamo-Konto, um Ihre Netamo-Geräte automatisch zu erkennen.
    Erst ausführen, nachdem Sie die vorherigen Einstellungen gespeichert haben.

Verbindungsdaten abrufen
==========================================

Pour intégrer votre station, vous devez posséder un client\_id et un
client\_secret généré sur le site <http://dev.netatmo.com>.

Klicken sie einmal auf Start :

![netatmoWeather10](./images/netatmoWeather10.png)

Anschließend auf "create an app"

![netatmoWeather11](./images/netatmoWeather11.png)

Melden Sie sich mit Ihrer E-Mail und Passwort an

![netatmoWeather12](./images/netatmoWeather12.png)

Füllen Sie die Felder "Name" und "Description" aus (was Sie hineinschreiben
spielt keine Rolle) :

![netatmoWeather13](./images/netatmoWeather13.png)

Dann am Ende der Seite wählen Sie "I accept the terms of use" und
klicken Sie auf "Create"

![netatmoWeather14](./images/netatmoWeather14.png)

Sie erhalten dann die Kunden_ID="Client-ID" und Kunden_Schlüssel="Secret
Client" zurück. Kopieren Sie die diese dann im Konfigurations Teil des
Jeedom Plugin hinein (siehe vorheriges Kapitel)

![netatmoWeather15](./images/netatmoWeather15.png)

> **Important**
>
> Attention il faut bien que l’url de callback soit à "None" sinon ca ne
> marchera pas.

Gerätekonfiguration
=============================

La configuration des équipements Netatmo est accessible à partir du menu
plugin :

![netatmoWeather3](./images/netatmoWeather3.png)

Voilà à quoi ressemble la page du plugin Netatmo (ici avec déjà 2
équipement) :

![netatmoWeather4](./images/netatmoWeather4.png)

> **Tip**
>
> Wie an vielen Stellen in Jeedom kann mit dem Mauszeiger ganz links, ein
> Menü mit Schnellzugriff aufgerufen werden (Sie können in Ihrem Profil
> immer sichtbar einstellen).  

Une fois que vous cliquez sur un équipement vous obtenez :

![netatmoWeather5](./images/netatmoWeather5.png)

Sie werden hier alle die Konfiguration Ihrer Geräte finden:

-   **Name des Netatmo Gerätes** : Name Ihrer Netatmo Geräte 

-   **Übergeordnete Objekt** zeigt das übergeordnete Objekt gehört
    Ausrüstung

-   **Aktivieren**: auf Ihre aktiven Geräte machen

-   Visible ** **: macht es sichtbar auf dem Armaturenbrett

-   **Kennung** : eindeutige Kennung des Geräts

-   **Typ** : Ihr Geräte Typ (Station, interne Sonde,
    externe Sonde...)

Im unteren Bereich finden sie eine Liste der Befehle :

-   Der Name, der auf dem Armaturenbrett angezeigt wird

-   Chronik : erlaubt das Archivieren der Daten

-   Erweiterte Konfiguration (kleine Zahnräder) : Erlaubt die erweiterte
    Konfiguration des Befehls anzuzeigen (Methode der
    Archivierung, Widget ...)

-   Test: prüft den Befehl

Widget 
======

Voici le widget standard pour une station sur le dashboard :

![netatmoWeather6](./images/netatmoWeather6.png)

Et en mobile :

![netatmoWeather7](./images/netatmoWeather7.png)

FAQ
===

Quelle est la fréquence de rafraîchissement ?

:   Le systeme recupère les informations toutes les 15 min.



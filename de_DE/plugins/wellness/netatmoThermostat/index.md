Plugin, um Netatmo Thermostate zu steuern 

Plugin-Konfiguration
=======================

Nach der Installation des Plugin, müssen Sie Ihre Netatmo Zugangsdaten
eingeben :

-   **Kunden ID** : Ihre Kunden-ID (siehe Konfigurationsabschnitt)

-   **Kunden Schlüssel** : Ihr Kunden Schlüssel (siehe Konfigurationsabschnitt)

-   **Benutzername** : Benutzername Ihres Netatmo Kontos 

-   **Passwort** : Passwort Ihres Netatmo Kontos

-   **Alternatives Design verwenden** : ermöglicht ein individuelles
    Design zu benutzen (siehe Widget Teil)

-   **Synchronisieren** : ermöglicht das Synchronisieren von Jeedom mit Ihrem 
    Netamo-Konto, um Ihre Netamo-Geräte automatisch zu erkennen.
    Erst ausführen, nachdem Sie die vorherigen Einstellungen gespeichert haben.

Verbindungsdaten abrufen
==========================================

Um Ihre Station zu integrieren, benötigen sie eine Kunden_ID und einen
Kunden_Schlüssel, der auf der Website <http://dev.netatmo.com> erzeugt wird.

Klicken sie einmal auf Start :

![netatmoWeather10](../images/netatmoWeather10.png)

Anschließend auf "create an app"

![netatmoWeather11](../images/netatmoWeather11.png)

Melden Sie sich mit Ihrer E-Mail und Passwort an

![netatmoWeather12](../images/netatmoWeather12.png)

Füllen Sie die Felder "Name" und "Description" aus (was Sie hineinschreiben
spielt keine Rolle) :

![netatmoWeather13](../images/netatmoWeather13.png)

Dann am Ende der Seite wählen Sie "I accept the terms of use" und
klicken Sie auf "Create"

![netatmoWeather14](../images/netatmoWeather14.png)

Sie erhalten dann die Kunden_ID="Client-ID" und Kunden_Schlüssel="Secret
Client" zurück. Kopieren Sie die diese dann im Konfigurations Teil des
Jeedom Plugin hinein (siehe vorheriges Kapitel)

![netatmoWeather15](../images/netatmoWeather15.png)

Gerätekonfiguration
=============================

Die Netatmo Gerätekonfiguration ist über das Menü Plugins erreichbar.

> **Tip**
>
> Wie an vielen Stellen in Jeedom kann mit dem Mauszeiger ganz links, ein
> Menü mit Schnellzugriff aufgerufen werden (Sie können in Ihrem Profil
> immer sichtbar einstellen).  

Sie werden hier alle die Konfiguration Ihrer Geräte finden:

-   **Name des Netatmo Gerätes** : Name Ihrer Netatmo Geräte 

-   **Eltern Objekt** : gibt das übergeordnete Objekt an, zu dem das
    Gerät gehört

-   **Aktivieren** : ermöglicht es Ihnen, Ihre Gereäte zu aktivieren

-   **Sichtbar** : macht es auf dem Armaturenbrett sichtbar

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

> **Tip**
>
> Wenn sie den Widget Modus ändern, ist es empfehlenswert, auf
> Synchronisieren zu klicken, um das Ergebnis sofort zu sehen.

FAQ
===

Wie häufig werden Informationen aktualisiert ?
Das System ruft alle 15 Minuten die Informationen ab.  



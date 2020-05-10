Plugin um den Nabaztag zu bestellen.

Konfiguration 
=============

Gerätekonfiguration 
=============================

Sobald das Plugin über den Markt installiert und aktiviert ist, greifen Sie auf das zu
Nabaztag Plugin Seite von :

![nabaztag1](../images/nabaztag1.png)

Hier finden Sie alle Ihre Nabaztag-Geräte :

![nabaztag2](../images/nabaztag2.png)

> **Spitze**
>
> Platzieren Sie wie an vielen Stellen in Jeedom die Maus ganz links
> ruft ein Schnellzugriffsmenü auf (Sie können
> von deinem Profil immer sichtbar lassen).

Sobald ein Gerät ausgewählt ist, erhalten Sie :

![nabaztag3](../images/nabaztag3.png)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name der Nabaztag-Ausrüstung** : Name Ihrer Nabaztag-Ausrüstung

-   **Übergeordnetes Objekt** : gibt das übergeordnete Objekt an, zu dem es gehört
    Ausrüstung

-   **Kategorie** : Gerätekategorien (es kann gehören
    mehrere Kategorien)

-   **Aktivieren** : macht Ihre Ausrüstung aktiv

-   **Sichtbar** : macht es auf dem Dashboard sichtbar

-   **Adresse (openjabnab.fr oder @IP)** : Openjabnab oder IP-Adresse (DNS)
    Ihr Openjabnab, wenn Sie es selbst hosten

-   **MAC-Adresse** : Mac-Adresse Ihres Kaninchens (siehe unten)

-   **API-Token Lila** : API-Token (siehe unten)

Nachfolgend finden Sie die Liste der Bestellungen :

-   Der im Dashboard angezeigte Name

-   Anzeige : ermöglicht die Anzeige der Daten im Dashboard

-   erweiterte Konfiguration (kleine gekerbte Räder) : Anzeigen
    die erweiterte Konfiguration des Befehls (Methode
    Geschichte, Widget…)

-   Test : Wird zum Testen des Befehls verwendet

Die Liste der Befehle lautet wie folgt :

-   **Stehend** : Weckt das Kaninchen auf

-   **Neu starten** : Starten Sie das Kaninchen neu

-   **Schlafenszeit** : Sagen wir dem Kaninchen, er soll ins Bett gehen

-   **Luftqualität** : Gibt Luftqualität (erfordert
    Aktivierung des entsprechenden Plugins in openjabnab)

-   **Ephemeride** : Geben Sie Ephemeride (erfordert Aktivierung von
    entsprechendes Plugin in openjabnab)

-   **Sprechende Uhr** : Gibt die Zeit an (erfordert die Aktivierung des
    entsprechendes Plugin in openjabnab)

-   **Wetter** : Gibt Wetter (erfordert Plugin-Aktivierung
    Korrespondent in openjabnab)

-   **Sagen** : Geben Sie ein Sprichwort (erfordert Plugin-Aktivierung
    Korrespondent in openjabnab)

-   **Linkes Ohr** : Hier können Sie die Position des Ohrs auswählen
    links (16 Positionen möglich)

-   **Rechtes Ohr** : Hier können Sie die Position des Ohrs auswählen
    rechts (16 Positionen möglich)

-   **Sprich** : Sagen wir dem Kaninchen einen Satz

Maximale Adresse und Token abrufen 
===================================

Gehen Sie zur Website [openjabnab] (http://openjabnab.fr/ojn_admin/index.php)
Melden Sie sich dann in Ihrem Konto an :

![nabaztag4](../images/nabaztag4.png)

Klicken Sie auf Kaninchen :

![nabaztag5](../images/nabaztag5.png)

Klicken Sie dann auf API :

![nabaztag6](../images/nabaztag6.png)

Aktivieren Sie hier die lila und öffentliche API und erhalten Sie die Mac-Adresse sowie
den lila API-Schlüssel, um ihn in die Konfiguration Ihres Kaninchens zu integrieren
auf Jeedom

Widget 
======

Hier ist das Widget, das nach dem Erstellen der Ausrüstung erhalten wurde :

![nabaztag7](../images/nabaztag7.png)

Changelog detailliert :
<https://github.com/jeedom/plugin-nabaztag/commits/stable>

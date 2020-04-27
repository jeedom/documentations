Plugin zu erstellen und verwalten Wireless-Kameras (Anzeige und
Registrierung)

Configuration du plugin
=======================

Nach der Installation des Plugin, müssen Sie nur um es zu aktivieren, ist es jedoch
Einige erweiterte Konfigurationseinstellungen:

-   ** ** Datensätze Pfad: Gibt den Pfad, in dem Jeedom muss
    Speichern von Bildern, die Ihre Kameras erfassen (es wird nicht empfohlen
    zu berühren). Wenn Ihr Weg ist nicht im Weg
    Installation Jeedom dann können Sie die Ansicht
    Fänge in Jeedom.

-   **Maximale Größe des Aufnahmeordner (MB)** zeigt die
    maximale Größe für den Ordner erlaubt, wo der Haken ist,
    aufgezeichnet (es sollte nicht berührt werden). Wird diese Quote
    erreicht Jeedom die ältesten Fänge löschen.

-   **Le plugin caméra doit réagir aux interactions** : mots clés /
    phrases auxquel(le)s le plugin réagira via les interactions de Jeedom.

-   ** ** Panel: Hier können Sie das Panel sehen (Menü
    Accueil -> Caméra) et d’avoir une vue sur l’ensemble de vos
    caméras (voir plus bas). N'oubliez pas d'activer le panel dans la configuration du plugin pour y avoir accès plus tard.


Configuration des équipements
=============================

Equipement
----------

Hier haben Sie die grundlegenden Informationen der Kamera:

-   **Name der Kameraausrüstung**: Ihre Kameraausrüstung Name

-   **Übergeordnete Objekt** zeigt das übergeordnete Objekt gehört
    Ausrüstung

-   **Aktivieren**: auf Ihre aktiven Geräte machen

-   Visible ** **: macht es sichtbar auf dem Armaturenbrett

-   ** ** IP: die lokale IP-Adresse Ihrer Kamera

-   ** ** Port: Der Port, an dem die Kamera befestigen

-   **Protokoll**: Ihre Kamera-Kommunikationsprotokoll (http
    oder https)

-   ** ** Benutzername: Benutzername auf die verbinden
    caméra (si nécessaire). Attention le plugin ne supporte pas les caractères
    spéciaux (il faut donc se limiter aux chiffres, lettres minuscule/majuscule)

-   ** ** Passwort: Passwort an die Kamera anschließen
    (si nécessaire).Attention le plugin ne supporte pas les caractères
    spéciaux (il faut donc se limiter aux chiffres, lettres minuscule/majuscule)

-   **URL de snapshot** : URL de "snapshot" de la caméra. Change en
    basierte Kameras. Achten Sie darauf, eine Stream-URL zu setzen unter
    Jeedom Strafe Pflanze. Sie können Tags hinzufügen \ #benutzername \ #
    et \#password\#, qui seront automatiquement remplacés par le nom
    Benutzer und Kennwort ein, wenn diese mit
    bestellen

-   **URL du flux** : url du flux video de la caméra de type rtsp://#username#:#password#@#ip#:554/videoMain (exemple pour les caméras Foscam)

-   ** ** Modell: wählt das Kameramodell. Hüten Sie sich vor, wenn
    ändern Sie die Konfigurationseinstellungen überschreiben

Images
------

Cette partie vous permet de configurer la qualité de l’image. En effet
Jeedom diminue la taille de l’image ou la compresse avant de l’envoyer à
votre navigateur. Cela permet de gagner en fluidité des images (car
elles sont moins lourdes). C’est aussi dans cette partie que vous pouvez
configurer le nombre d’images par seconde à afficher. Tous les réglages
sont déclinés en : mobile/desktop et miniature/normal.

-   Aktualisieren (e): Zeit in Sekunden zwischen dem Display 2
    images (vous pouvez ici mettre des chiffres inférieurs à 1)

-   Kompression (%): je niedriger desto weniger wird das Bild komprimiert
    100 % aucune compression n’est faite

-   Größe (% - 0: Automatik): Je höher das%, desto höher ist
    proche de la taille d’origine de l’image. A 100 % aucun
    Ändern der Bildgröße auftritt

> **Note**
>
> Si vous mettez une compression de 0% et une taille de 100%, Jeedom ne
> touchera pas à l’image en mode normal. Cela n’est pas valable en mode
> miniature où il y a une taille maximum de l’image de 360px.

Capture
-------

-   Durée maximum d’un enregistrement : durée maximum des
    Aufnahmen

-   Toujours faire une vidéo : force Jeedom à toujours transformer les
    enregistrements en vidéo avant l’enregistrement

-   Anzahl der Bilder pro Sekunde des Videos: Bildrate
    Sekunden-Videos

-   Bewegungserfassungsschwelle (0-100): Detektionsschwelle
    Bewegung (es wird empfohlen 2 zu setzen). Da der Wert ist groß
    mehr Empfindlichkeit erhöht.

-   Löschen Sie alle Fänge der Kamera: löscht alle
    Rasten und zeichnet die Kamera

Alimentation
------------

-   Commande ON : Commande permettant de mettre en marche l’alimentation
    die Kamera

-   Commande OFF : Commande permettant de couper l’alimentation de la
    Kamera

Commandes
---------

-   Bestell-ID (Verwendung mit Info-Typ-Befehlen durch
    zB Kamera Bewegungsinformation zu Jeedom
    von API, siehe unten)

-   Nom de la commande avec la possibilité de mettre une icône à la
    place (pour la supprimer il faut double-cliquer sur l’icône
    in Frage)

-   Type et sous-type de la commande

-   Fordern Sie die Kamera senden eine Aktion (Modus Übertragung zu tun
    Nacht PTZ, etc.). Sie können die \ Tags #benutzername \ # verwenden und
    \#password\#, qui seront automatiquement remplacés par le nom
    Benutzer und Kennwort ein, wenn diese mit
    bestellen

-   Commande stop : pour les caméras PTZ, il existe souvent une commande
    die die Bewegung anhält, ist dies, wenn Sie die angeben

-   Ausblick: Zeigt den Auftrag oder nicht auf dem Armaturenbrett

-   Advanced Configuration (kleine Zahnräder): Zeigt
    Die erweiterte Steuerung der Konfiguration (Methode der Protokollierung,
    Widget, etc.)

-   Test: prüft den Befehl

-   Löschen (- Zeichen): Löschen-Befehl

Le widget
=========

Wir finden auf sie das Bild der Kamera, definierte Befehle
in der Konfiguration, nimmt der Befehl eine Momentaufnahme, die Kontrolle
zu starten mehrere Snapshots und Befehl nehmen zu
sehen diese Fänge.

> **Tipp**
>
> Auf dem Armaturenbrett und die Platte ist es möglich, die Größe
> Widget seine Bedürfnisse anzupassen

Un clic sur l’image permet d’afficher celle-ci dans une fenêtre et
dans un format plus grand.

Un clic sur la dernière commande pour parcourir les captures vous
affichera celle-ci.

Sie werden hier alle Fänge von Tag organisiert finden und durch
Datum, das Sie für jede Dose:

-   mehr groß, indem Sie auf das Bild klicken

-   Download

-   entfernen

En mobile le widget est un peu différent : si vous cliquez sur l’image de
la caméra vous obtenez celle-ci en plus grande avec les commandes
possibles.

Les panels
==========

Die Kamera-Plugin stellt auch ein Panel, das Ihnen erlaubt,
sehen sofort alle Ihre Kameras, ist es zugänglich Startseite →
Kamera.

> **Hinweis**
>
> Es haben Sie die Plugin-Konfigurationsseite aktivieren

Es ist natürlich auch in mobiler Plugin → Kamera:

Enregistrement et envoi de capture
==================================

Cette commande un peu spécifique permet suite à la prise de capture de
faire l’envoi de celle-ci (compatible avec le plugin slack, mail et
transfert).

La configuration est assez simple vous appelez l’action d’envoi de
capture (dénommée "Enregistrement") dans un scénario. Dans la partie titre vous passez les options.

Par défaut il suffit de mettre le nombre de captures voulues dans le champ "nombre captures ou options", mais vous pouvez aller plus
loin avec des options (voir détail ci-dessous "options avancées des captures"). Dans la partie message, vous n'avez plus qu'à renseigner la commande du plugin (actuellement slack, mail ou transfert) qui fait l’envoi des captures. Vous pouvez en mettre plusieurs séparés par des &&.

Options avancées des captures
---------------------------

-   nbSnap: Anzahl der Erfassung, wenn nicht anders angegeben, dann ist der Haken
    faites jusqu’à une demande d’arrêt d’enregistrement ou d’arrêt de la
    Kamera

-   delay : délai entre 2 captures, si non précisé alors le délai est de
    1s

-   warten: Wartezeit vor dem Fang beginnen, wenn nicht
    précié dann wird keine Sendung gemacht

-   sendPacket : nombre de captures déclenchant l’envoi de paquet de captures, si non
    précisé alors les captures ne seront envoyées qu’à la fin

-   detectMove=1 : envoi les captures que s'il y a un changement supérieur au
    seuil de détection (voir configuration de la caméra)

-   Film = 1: Nach der Aufnahme beendet ist, werden die Bilder
    converties en vidéo

-   sendFirstSnap=1 : envoi la première capture de l’enregistrement

> **Exemples**
>
> nbSnap=3 delay=5 ==> envoi 3 captures faites à 5 secondes d'intervalle (envoi déclenché via le scénario)
> movie=1 sendFirstSnap=1 detectMove=1 ==> envoi la première capture, puis envoi d'une capture à chaque détection de mouvement et enregistre une vidéo jusqu'à la commande "Arrêter Enregistrement" à insérer dans le scénario. Le film sera stocké sur votre Jeedom.


Envoi de la détection de mouvement à Jeedom
===========================================

Wenn Sie eine Kamera, die Bewegungserkennung hat und
setzen Sie es auf die URL Jeedom hier zu vermitteln, auf dem
Kamera:

    http: //#IP_JEEDOM#/core/api/jeeApi.php apikey APIKEY = # # & type = Kamera & id = # ID # & value = # Wert #

Es muss verstanden werden, bevor Sie eine Art von Befehl info erstellen
Ihre Kamera

FAQ
===

>**Où sont les enregistrements ?**
>
>Les enregistrements se trouvent par défaut dans plugins/camera/data/records/*ID\_CAM*, attention cela peut varier si vous avez demandé à Jeedom de les enregistrer ailleurs

>**Les dépendances n'arrivents pas à s'installer ?**
>
>En ssh ou dans administration -> OS/DB -> Système faire : dpkg --configure -a

>**Quelles sont les conditions pour que ma caméra soit compatible Jeedom (si elle n'est pas dans la liste de compatibilité) ?**
>
> La seule condition c'est que la caméra possède une url qui renvoi une image (et bien une image pas un flux video)

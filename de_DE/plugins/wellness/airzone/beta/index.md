# Airzone-Plugin


# Description

Plugin zur Verwaltung Ihrer AirzoneWeb-Systeme


# Voraussetzungen

 - Jeedom v4.1.22
 - Finden Sie die IP-Adresse Ihres AirzoneWeb Servers heraus


# Installation

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es zuerst aktivieren, wie jedes Jeedom-Plugin.


# Configuration

Gehen Sie zum Menü Plugins / Plugin-Verwaltung

![config](../images/airzoneConfig.png)

Klicken Sie auf Ihr Plugin und konfigurieren Sie es mit der IP-Adresse Ihres AirzoneWebServers sowie dem Port (standardmäßig haben Airzone-Systeme einen Port auf 3000 . konfiguriert))
Die Anzahl der Systeme wird automatisch erkannt, wenn neue Geräte hinzugefügt werden.

Wählen Sie den gewünschten Cron für die Aktualisierung der Werte :  5, 10, 15, 30, stündlich oder täglich.

Wählen Sie die Wartezeit zwischen Anfragen für jede Zone; standardmäßig 10 Sekunden, wenn das Feld leer ist.

Durch Klicken auf die Schaltfläche Add DriverName können Sie den Namen des Fahrers auf Ihrem Airzone-System ändern.

Sauvegardez


# Ausrüstung hinzufügen

Gehen Sie zum Menü Plugins / Komfort / AirzoneJeedom


Klicken Sie auf Hinzufügen.

![config](../images/airzoneEquip.png)

Die auf Ihrem System verfügbaren Zonen sind im Dropdown-Menü verfügbar.
Wählen Sie eine Zone für eine Ausrüstung


Denken Sie daran, Ihre Ausrüstung zu aktivieren und sichtbar zu machen, und weisen Sie ihr einen Elternteil zu, um sie auf Ihrem Dashboard zu finden.

WICHTIG : Wenn Sie einen Bereich haben, der Sonderzeichen enthält, kann dies einen SystemOut of Range-Fehler verursachen.


# Zonenscan

Wenn Ihr Gerät erstellt und aktiviert ist, können Sie oben auf dem Gerät auf „Zonen scannen“ klicken
Dadurch wird eine Anfrage an den Webserver gesendet, um alle Informationen Ihrer Installation abzurufen

Die Seite wird aktualisiert und ein Auswahlmenü wird angezeigt, in dem Sie die mit diesem Gerät verknüpfte Zone auswählen können



# Dashboard


Nachdem Sie Ihre Ausrüstung erstellt haben, finden Sie sie auf dem Dashboard.

Die Modussymbole ändern sich je nach ausgewähltem Modus: Kalt, heiß, Belüftung, Trocken und Stopp.

Um von den farbigen Symbolen zu profitieren, denken Sie daran, zu den Einstellungen Ihres Jeedoms (Einstellungen / System / Konfiguration / Schnittstelle) zu gehen und "Farbige Widget-Symbole" zu aktivieren"

Nur die Master-Zonen verfügen über das Dropdown-Menü zum Ändern des Modus in den zugehörigen Zonen, die in Ihrem System konfiguriert sind

Die Infosymbole Sollwert und Temperatur ändern sich entsprechend den Wertfenstern : -20 ° C, zwischen 20 und 25 ° C, mehr als 25 ° C (und das Äquivalent, wenn die Zone in Fahrenheit eingestellt ist)

Die in den Modi verfügbaren Auswahlmöglichkeiten oder die Lüftergeschwindigkeiten werden entsprechend den Möglichkeiten Ihres Systems erkannt.



Typische Ausstattung :

![config](../images/airzoneNoMaster.png)


Ausstattung einer Masterzone; Wir sehen einen zusätzlichen Befehl, um den gleichen Modus in allen zugeordneten Zonen des Systems zu aktivieren


![config](../images/airzoneMaster.png)

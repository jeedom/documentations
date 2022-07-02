# Installation auf Synology

Hier finden Sie die Schritt-für-Schritt-Anleitung zur Installation von Jeedom auf einer Synology (DSM 5.2 oder mehr).

## Docker installieren

Gehen Sie zum Paketzentrum :

![install synology 1](images/install_synology_1.PNG)

Klicken Sie auf alle und installieren Sie dann das Docker-Paket

![install synology 2](images/install_synology_2.PNG)

Warten Sie, bis die Installation abgeschlossen ist :

![install synology 3](images/install_synology_3.PNG)

> **Wichtig**
>
> Um auf das Docker-Paket zugreifen zu können, ist DSM 5 unbedingt erforderlich.2 und ein kompatibles NAS

## Jeedom-Image-Wiederherstellung

Starten Sie die Docker-Anwendung :

![install synology 4](images/install_synology_4.PNG)

Klicken Sie auf „Registrieren" :

![install synology 5](images/install_synology_5.PNG)

Geben Sie im Suchfeld "jeedom" ein, wählen Sie jeedom/jeedom (nehmen Sie die neueste Version) und klicken Sie auf "Download" :

![install synology 20](images/install_synology_20.PNG)

Dann validieren Sie die Versionsanfrage, am besten nehmen Sie die neueste.

Klicken Sie dann auf das Bild, hier können Sie den Fortschritt des Downloads verfolgen (kann mehrere zehn Minuten dauern) :

![install synology 21](images/install_synology_21.PNG)

## Containerkonfiguration

Wenn Sie fertig sind, klicken Sie auf das Bild und starten Sie es :

![install synology 22](images/install_synology_22.PNG)

Geben Sie Ihrem Jeedom einen Namen, aktivieren Sie das Kontrollkästchen "Container mit erhöhten Rechten ausführen", klicken Sie dann auf Erweiterte Einstellungen und leiten Sie in den Porteinstellungen Port 80 um (hier auf 9080) :

![install synology 26](images/install_synology_23.PNG)

Fügen Sie dann auf "Volume" die folgenden 2 Volumes hinzu :

![install synology 26](images/install_synology_24.PNG)

Aktivieren Sie „Container mit erhöhten Rechten ausführen“ und validieren Sie dann alles.

> **WICHTIG**
>
> Einige Plugins müssen den Netzwerk-Broadcast haben (Xioami-Plugin-Typ), dazu müssen Sie UNBEDINGT auf das Netzwerk im Host-Modus wechseln (nur während der Erstellung möglich), den Standard-Listening-Port des Webservers ändern (Typ 9080 für Webserver)

Nach einer mehr oder weniger langen 1. Startphase muss man nur noch auf IP_NAS gehen:9080

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)

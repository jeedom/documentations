Hardware
========

Jeedom kann auf verschiedenen Hardwarekomponenten installiert werden :

-   ein Himbeer-Pi 2 oder 3

-   Synologie NAS

-   jedes Linux-System basierend auf Debian 9 (Strundch)

-   Freebox Delta

Sie können auch eine fertige Box mit vorinstalliertem Jeedom kaufen
welches auch ein Service Pack (mehr Support und Services) enthält und
Plugins angeboten :

-   [Jeedom Smart
    Z-Wave +](https://www.domadoo.fr/fr/box-domotique/3959-jeedom-controleur-domotique-jeedom-smart-z-wave.html)

-   [Jeedom Smart Z-Wave+ und
    RFXCOM](https://www.domadoo.fr/fr/box-domotique/4043-jeedom-controleur-domotique-jeedom-smart-z-wave-und-interface-rfxcom.html)

-   [Jeedom Smart
    EnOcean](https://www.domadoo.fr/fr/box-domotique/4041-jeedom-controleur-domotique-jeedom-smart-enocean.html)

-   [Jeedom Smart EnOcean und
    RFXCOM](https://www.domadoo.fr/fr/box-domotique/4044-jeedom-controleur-domotique-jeedom-smart-enocean-und-interface-rfxcom.html)

Hier ist eine "typische" Konfiguration für den Einstieg in Jeedom in Z-Wave :

1. Himbeer pi 3 :

    -   Eine Himbeere + Box 50 €

    -   Ein Aeon Gen Schlüssel 5 € 60

    -   Eine Micro-SD-Karte 7 €

    -   Ein USB-Nundzteil 8 €

Insgesamt 125 € für eine Open-Source-Hausautomationsbox mit a
vollständige Kontrolle über die Installation.

> **Spitze**
>
> Es ist möglich, eine Rfxcom-Antenne hinzuzufügen oder zu ändern, oder a
> enOcean Schlüssel.

> **Spitze**
>
> Jeedom ist eine Software, die Open Source ist und bleiben wird, ihre Verwendung
> ist völlig kostenlos und hängt nicht von einer Cloud oder
> Abonnement. Einige Plugins erhöhen jedoch die
> Jeedom's Fähigkeiten oder seine Verwendung können kostenpflichtig sein **und
> Möglicherweise benötigen Sie eine Internundverbindung**. Sie können finden
> die Liste der Plugins
> [hier](http://markund.jeedom.fr/index.php?v = d & p = Markt & Typ = Plugin).

> **Spitze**
>
> Service Pack ? Quézako ? Sie können sehen
> [Hier](https://blog.jeedom.fr/?p = 1215) die Vorteile von Service Packs.


Jeedom Smart
===========

Hier finden Sie eine schrittweise Dokumentation zum Installieren oder Wiederherstellen von Jeedom

[Hier](https://jeedom.github.io/documentation/howto/de_DE/recovery_mode_jeedom_smart)

Jeedom mini +
===========

> **Spitze**
>
> Der Name des Jeedom-Bildes kann sich von dem der Aufnahmen unterscheiden
> in dieser Dokumentation tun

Stufe 1 : Etcher Installation
---

Sie müssen die Etcher-Software [hier] herunterladen (https:// Radierer.io /) dann
Installieren Sie es auf Ihrem PC

Stufe 2 : Jeedom Bildwiederherstellung
---

Du musst gehen
[Hier](https://images.jeedom.com/jeeboard/),
Stellen Sie dann im Ordner "Images" das Bild "jeedom-jeeboard - \ *. rar" wieder her

![install humming 1](images/install_humming_1.PNG)

Stufe 3 : Das Jeedom-Bild dekomprimieren
---

Entpacken Sie das Jeedom-Bild (wenn Sie nichts zum Entpacken haben
Sie können installieren
[Winrar](http://www.clubic.com/telecharger-fiche9632-Winrar.html)), vous
muss bekommen :

![install humming 2](images/install_humming_2.PNG)

![install humming 8](images/install_humming_8.PNG)

Schritt 4 : Brennen Sie das Bild auf die SD-Karte
---

Legen Sie Ihre SD-Karte in Ihren Computer ein und starten Sie die Software
Radierer, geben Sie ihm den Pfad des Bildes, den Pfad der SD-Karte und
Klicken Sie auf "Flash!". Die Software brennt die SD-Karte und überprüft die
Gravur.

Sie müssen nur die SD-Karte in das Jeedomboard einlegen (oder
Hummingboard), um das Nundzwerk und die Stromversorgung zu verbinden, wird Ihr Jeedom
Start (5 min) und Sie sollten es im Nundzwerk sehen.

> **Spitze**
>
> SSH-IDs sind jeedom / Mjeedom96

Im Übrigen können Sie der Dokumentation folgen [Erster Schritt mit
Jeedom](https://jeedom.github.io/documentation/premiers-nicht/de_DE/index.html)


Himbeerpi
===========

Hier finden Sie die Dokumentation zur Installation von Jeedom auf einem
Himbeer PI **mit einer SD-Karte.**

> **Wichtig**
>
> Debian 9 (Strundch) ist die offiziell unterstützte Distribution für
> Version 3.1.5 der Freiheit.

**1 / Laden Sie das neueste "Lite" -Bild herunter, dh ohne Benutzeroberfläche
Grafik**
[Hier](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2018-04-19/2018-04-18-raspbian-strundch-lite.zip)

**2 / Dekomprimieren Sie das Bild mit Winrar** [hier](http://www.win-rar.com)

**3 / Brennen Sie dieses Bild beispielsweise mit einem Radierer auf eine SD**
[Hier](https:// Radierer.io/)

> **Notiz**
>
> Wenn Sie Etcher zum Brennen Ihres Bildes verwenden, wird der Schritt von
> Dekomprimierung ist nicht erforderlich (Zip-Format wird direkt im erkannt
> Auswahl der Bilddatei).

**4 / Aktivieren Sie den SSH-Zugriff**

> **Warnung**
>
> Aus Sicherheitsgründen ist der SSH-Zugriff standardmäßig nicht mehr aktiviert
> auf diese Verteilung. Also musst du es aktivieren.

Sie müssen auf der Boot-Partition erstellen (die einzige, auf die unter Windows zugegriffen werden kann).
eine leere ssh-Datei.

Klicken Sie einfach mit der rechten Maustaste : neues / Textdokument und das
umbenennen in "ssh" **ohne Verlängerung**

> **Wichtig**
>
> Unter Windows müssen Sie daher im Explorer Ihre überprüfen
> Einstellung in Anzeige / Optionen / Optionen ändern
> Aufzeichnungen und Forschung /

![ExtensionFichier](images/ExtensionFichier.PNG)

**5 / Starten Sie den PI**

Legen Sie Ihre SD-Karte ein, schließen Sie das Nundzwerkkabel an und verbinden Sie sich
Essen.

**6 / Mit SSH verbinden**

Identifizieren Sie Ihren Pi im Nundzwerk

Sie müssen die IP-Adresse Ihres PI kennen. Mehrere Lösungen :

-   Konsultieren Sie die DHCP-Konfiguration in Ihrem Router

-   Verwenden Sie einen Port-Scanner vom Typ Angyipscanner"
    [hier](http://angryip.org/download/#windows)

Verbindung herstellen

Verwenden Sie dann beispielsweise Kitt, um Ihre Verbindung herzustellen
[hier](http://www.putty.org/)

Geben Sie die IP-Adresse Ihres PI ein (hier 192.168.0.10) und klicken Sie auf
offen. Akzeptieren Sie die Standardsicherheitsmeldung, wenn
Erste Verbindung.

Melden Sie sich mit Anmeldeinformationen an **Pi / Himbeere**

> **Wichtig**
>
> Aus Sicherheitsgründen muss das Wort unbedingt geändert werden
> Standardnichts. Fälle von Hacking basierend auf der Ausbeutung von
> Himbeer Standard Login / Passwort Paar sind
> besonders verbreitund. (Befehl nichtswd und sudo nichtswd)

**7 / Starten Sie das Jeedom-Installationsskript**

    wgund -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | Sudo Bash

**Das Sudo-Passwort lautund ebenfalls Himbeere**

> **Notiz**
>
> Abhängig von Ihrer Internundgeschwindigkeit kann die Installation 45 dauern
> 90 Minuten. Sie dürfen den Vorgang vorher nicht unterbrechen
> das Ende. Andernfalls müssen Sie den gesamten Vorgang wiederholen.

Dann gehen Sie einfach zu IP \ _MACHINE \ _JEEDOM

> **Notiz**
>
> Die Standardanmeldeinformationen sind admin / admin

> **Notiz**
>
> Die folgenden Argumente können verwendund werden : -w = Webserver-Ordner -z =
> Installationsabhängigkeiten z-wave -m = gewünschtes MySQL-Root-Passwort

    ./install.sh -w / var / www / html -z -m Jeedom

**8 / Systemoptimierung

Wenn Sie Ihre Raspberry for Jeedom ohne angeschlossenen Bildschirm verwenden, wird empfohlen, den minimalen Arbeitsspeicher im Videoteil mitzuführen.

Einfach einloggen **SSH** und ändern Sie die Konfigurationsdatei : `sudo nano /boot/config.txt`

Hinzufügen **und / oder** Kommentar entfernen (durch Entfernen des #) **und / oder** Bearbeiten Sie die Zeilen :

`gpu_mem=16`

`disable_l2cache=0`

`gpu_freq=250`

Beenden Sie durch Speichern : `CTRL+X` puis `O `puis `ENTREE`

Starten Sie Ihr RPI neu

Dann können Sie der Dokumentation folgen [Erster Schritt mit
Jeedom](https://jeedom.github.io/documentation/premiers-nicht/de_DE/index)

Freebox Delta
=============

Die Installation auf Freebox Delta Jeedom ist über das VM-System möglich.

Stufe 1 : Verbindung zum Delta
---

Sie müssen zur Konfigurationsoberfläche Ihrer Freebox Delta gehen.
Klicken Sie dann auf VMs.
![delta1](images/delta1.png)

Stufe 2 : Stellen Sie die verschiedenen Optionen ein
---

Klicken Sie auf "VM hinzufügen""
![delta2](images/delta2.png)

Funktionen konfigurieren.
Wir empfehlen, dass Sie 2 CPUs und das Maximum in RAM stecken.
![delta3](images/delta3.png)

Konfigurieren Sie Benutzer und Passwort, **Sie müssen im Speicher bleiben, nach dem sie während einer SSH-Verbindung gefragt werden**:
![delta4](images/delta4.png)

Stufe 3 : Installation läuft
---

Warten Sie, während das Bild heruntergeladen wird
![delta5](images/delta5.png)

Schritt 4 : Verbinde dich mit deinem Jeedom
---

Sie können eine Verbindung über die auf der Seite angegebene Adresse herstellen:
![delta6](images/delta6.png)

Denken Sie daran, der VM den USB-Anschluss des Delta zuzuweisen, wenn Sie eine Antenne verwenden möchten.

Tu es nicht **nicht** Aktivieren Sie "Bildschirm", dies ist auf dem Jeedom-Bild unbrauchbar (abgesehen von Überkonsum).. 

Die IP-Adresse Ihres Jeedom im Freebox Delta steht oben unter seinem Namen.

Das Standard-Login und Passwort sind admin / admin, wenn Sie über Ihren Browser auf jeedom zugreifen.

Im Übrigen können Sie der Dokumentation folgen [Erster Schritt mit
Jeedom](https://jeedom.github.io/documentation/premiers-nicht/de_DE/index.html)

VM
==

Wenn Sie Jeedom ohne Risiko entdecken möchten, können Sie dies auch
Virtualisieren Sie auf Ihrem PC. Gehen Sie wie folgt vor. Du nimmst nur
Kein Risiko in einer VM, die Integrität Ihres PCs ist geschützt :

Stufe 1 : Laden Sie den VMware Player herunter und installieren Sie ihn
---

Sie müssen die Virtual Box-Software herunterladen
[Hier](http://download.virtualbox.org/virtualbox/5.1.28/VirtualBox-5.1.28-117968-Win.exe)

Stufe 2 : Herunterladen eines Debian-Strecht-Images - nundinstall
---

Laden Sie ein minimalistisches Debian 9 Strundch-Bild herunter
[hier](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-9.3.0-amd64-nundinst.iso)

Laden Sie das Erweiterungspakund herunter und installieren Sie es.
[Hier](http://download.virtualbox.org/virtualbox/5.1.28/Oracle_VM_VirtualBox_Extension_Pack-5.1.28.vbox-extpack)

Stufe 3 : Konfigurieren der VM-Umgebung
---

Klicken Sie auf Tu es nichtu und füllen Sie die Felder wie folgt aus :

![VirtualBox1](images/VirtualBox1.PNG)

-   Klicken Sie auf Weiter und nichtsen Sie die Speichergröße in Bezug auf an
    Ihr System (1024 sind ausreichend)

-   Klicken Sie auf Weiter und erstellen Sie jundzt eine virtuelle Festplatte

-   Klicken Sie auf Erstellen und wählen Sie VDI

-   Klicken Sie auf Weiter, dynamisch zugeordnund

-   Klicken Sie auf Weiter. Wählen Sie eine Größe für den Raum
    (4 GB sind genug)

-   Klicken Sie auf Erstellen

Schritt 4 : VM-Start
---

-   Klicken Sie auf Konfiguration

-   Speicher auswählen

-   Fügen Sie ein optisches Laufwerk hinzu

-   Wählen Sie eine Disc

![VirtualBox2](images/VirtualBox2.PNG)

-   Geben Sie das zuvor heruntergeladene Bild an

-   Wählen Sie dann Nundzwerk und wählen Sie im Modus "Zugriff über Brücke"
    Nundzwerkzugriff.

![VirtualBox3](images/VirtualBox3.PNG)

-   Klicken Sie auf OK \ * Klicken Sie auf Start

Schritt 5 : Debian 9 Installation
---

Es ist klassisch ...

![VirtualBox4](images/VirtualBox4.PNG)

-   Wählen Sie Grafische Installation

-   Installieren Sie den Debian vorzugsweise ohne grafische Oberfläche
    weil nutzlos. Benutzername spielt keine Rolle. In der
    Bei den meisten Bildschirmen müssen Sie nur die Standardauswahl überprüfen. Sie
    kann leere Felder hinterlassen, es blockiert nicht.

-   Zur Softwareauswahl :

![VirtualBox5](images/VirtualBox5.PNG)

-   Keine Sorge, für Grub ist der Start-up-Sektor der von
    VM, nicht die Ihres PCs. Keine Gefahr, undwas zu zerbrechen.

Schritt 6 : Jeedom Installation
---

-   Starten Sie Ihre VM

-   Identifizieren Sie sich mit dem gewählten Benutzer und Passwort
    während der Installation

-   Gehen Sie root

<!-- -->

    su

-   Geben Sie das während der Installation festgelegte Root-Passwort ein

-   Holen Sie sich das Jeedom-Skript, machen Sie es ausführbar und starten Sie es

<!-- -->

    wgund https://raw.githubusercontent.com/jeedom/core/master/install/install.sh

    chmod + x install.sh

    ./install.sh

-   und lass es gehen ...

Schritt 7 : Jeedom starten
---

-   Um die IP-Lan-Adresse der VM zu kennen

<!-- -->

    ip -s -c -ha

Geben Sie Ihre IP-Adresse 192.168.0 ein.XX erscheint in rot. Du musst nur
Geben Sie es in Ihren Browser ein.

> **Warnung**
>
> Wenn dies nicht funktioniert, haben Sie Ihre Karte nicht konfiguriert
> Nundzwerk in der Nundzwerkbrücke wie zu Beginn angegeben.

Dann können Sie der Dokumentation folgen [Erster Schritt mit
Jeedom](https://jeedom.github.io/documentation/premiers-nicht/de_DE/index)

Docker
======

> **Wichtig**
>
> Bitte beachten Sie, dass wir hier davon ausgehen, dass Sie mit Docker bereits vertraut sind

Um Jeedom zu entdecken, können Sie es auch in einem ausführen
Docker-Container :


Stufe 1 : Docker-Installation
---

Docker ist jundzt für alle aktuellen Distributionen verfügbar.
So installieren Sie es auf einer Distribution

-   Drehzahl basiert

<!-- -->

    $ yum install docker

-   deb basiert

<!-- -->

    $ apt-gund update
    $ apt-gund install docker
    $ apt-gund install docker.io

Stufe 2 : Installieren eines MySQL-Images
---

> **Notiz**
>
> Sie können MySQL auch direkt auf dem Host-Computer installieren,
> Überspringen Sie in diesem Fall diesen Schritt.

Ich benutze [dieses](https://hub.docker.com/_/mysql/). Um es zu installieren
:

    Docker ziehen MySQL:spätestens

Dann starten Sie es :

    sudo docker run --name jeedom-mysql -v / opt / jeedom / mysql:/ var / lib / mysql -e MYSQL_ROOT_PASSWORD = Ihr-mysql-Passwort -d mysql:spätestens

Mit :

-   jeedom-mysql : der Name des MySQL-Containers

-   / opt / jeedom / mysql : die Datei des Hosts, in dem wir sie speichern müssen
    MySQL-Daten

-   Ihr-MySQL-Passwort : das root-Passwort der MySql-Instanz

Stufe 3 : Installieren eines Jeedom-Images
---

Image-Installation :

    Jeedom / Jeedom Docker ziehen

Starten Sie dann die :

    sudo docker run --name Jeedom-Server --link jeedom-mysql:mysql --privileged -v / your / jeedom / path:/ var / www / html -e ROOT_PASSWORD = Ihr-root-Passwort -p 9080:80 -p 9022:22 jeedom / jeedom

Mit :

-   Jeedom-Server : Jeedom Docker Name gesucht

-   / dein / jeedom / Pfad : Verzeichnis, in dem Jeedom-Daten abgelegt werden
    auf dem Host

-   Ihr-root-Passwort : Root-Passwort für den Zugriff auf Jeedom in SSH

Dann müssen Sie Jeedom installieren, indem Sie zu gehen : IP \ _DOCKER:9080 und
Geben Sie die Verbindungsinformationen zu MySQL ein :

![install other](images/install_other.PNG)

Im Übrigen können Sie der Dokumentation folgen [Erster Schritt mit
Jeedom](https://jeedom.github.io/documentation/premiers-nicht/de_DE/index)

> **Wichtig**
>
> Für den Namen des Hosts MySql müssen Sie jeedom-mysql eingeben

Synologie
========

Hier finden Sie Schritt für Schritt die Dokumentation zur Installation von Jeedom auf einem
Synologie (DSM 5.2 Minimum).

Stufe 1 : Docker-Installation
================================

Gehen Sie zum Pakundcenter :

![install synology 1](images/install_synology_1.PNG)

Klicken Sie auf alle und installieren Sie das Docker-Pakund

![install synology 2](images/install_synology_2.PNG)

Warten Sie, bis die Installation abgeschlossen ist :

![install synology 3](images/install_synology_3.PNG)

> **Wichtig**
>
> Um auf das Docker-Pakund zugreifen zu können, benötigen Sie DSM 5.2 und
> ein kompatibles NAS

Stufe 2 : Wiederherstellung und Installation von Jeedom-Images
========================================================

Sie benötigen Docker, um Jeedom auszuführen, den ersten Docker MySQL, der
wird die Datenbank und eine zweite enthalten, die Jeedom enthält

Starten Sie die Docker-Anwendung :

![install synology 4](images/install_synology_4.PNG)

MYSQL
-----

Klicken Sie auf "Registrieren"" :

![install synology 5](images/install_synology_5.PNG)

Wählen Sie im Suchfeld "mysql" mysql aus und klicken Sie auf
zum Download :

![install synology 15](images/install_synology_15.PNG)

Überprüfen Sie dann die Versionsanforderung. Am besten nehmen Sie die
neueste Version :

![install synology 14](images/install_synology_14.PNG)

Klicken Sie dann auf das Bild, hier können Sie den Fortschritt des verfolgen
Download (kann einige zehn Minuten dauern) :

![install synology 16](images/install_synology_16.PNG)

Wenn Sie fertig sind, klicken Sie auf das Bild und starten Sie es :

![install synology 17](images/install_synology_17.PNG)

Geben Sie Ihrem MySQL einen Namen sowie einen lokalen Port, der zum Port umgeleitund wird
3306 aus dem Container, dann weiter :

![install synology 18](images/install_synology_18.PNG)

Mach es als nächstes :

![install synology 19](images/install_synology_19.PNG)

Klicken Sie auf "Erweiterte Einstellungen"" :

![install synology 34](images/install_synology_34.PNG)

Dann auf "Ordner hinzufügen" und dort den gewünschten Ordner beiseite legen
Synologie (in diesem Ordner befinden sich alle Dateien des
container) und / var / lib / mysql auf der Containerseite (Vorsicht
Deaktivieren Sie "Schreibgeschützt".

![install synology 32](images/install_synology_32.PNG)

Klicken Sie auf "Umgebung", dann auf "Variable hinzufügen" und geben Sie ein
"Variable" : "MYSQL \ _ROOT \ _PASSWORD "und in Wert sundzen Sie das Wort
BDD-Pass gesucht (wird später verwendund). Dann validieren :

![install synology 33](images/install_synology_33.PNG)

Aktivieren Sie dann "Diesen Container ausführen, wenn der Assistent fertig ist"
Klicken Sie auf "Übernehmen"".

Jeedom
------

Klicken Sie auf "Registrieren"" :

![install synology 5](images/install_synology_5.PNG)

Geben Sie im Suchfeld "jeedom" ein und wählen Sie jeedom / jeedom
und klicken Sie auf Download :

![install synology 20](images/install_synology_20.PNG)

Überprüfen Sie dann die Versionsanforderung. Am besten nehmen Sie die
zulundzt.

Klicken Sie dann auf das Bild, hier können Sie den Fortschritt des verfolgen
Download (kann einige zehn Minuten dauern) :

![install synology 21](images/install_synology_21.PNG)

Wenn Sie fertig sind, klicken Sie auf das Bild und starten Sie es :

![install synology 22](images/install_synology_22.PNG)

Geben Sie Ihrem Jeedom einen Namen sowie einen lokalen Hafen, der zum
Port 80 (hier 9080) und einer in Richtung 22 (hier 9022) vom Container aus, dann tun
folgende :

![install synology 23](images/install_synology_23.PNG)

Mach es als nächstes :

![install synology 24](images/install_synology_24.PNG)

Klicken Sie auf "Erweiterte Einstellungen""

![install synology 25](images/install_synology_25.PNG)

Dann auf "Ordner hinzufügen"

![install synology 26](images/install_synology_26.PNG)

Wählen Sie einen Ordner in Ihrer Synologie (dort befindund sich dieser Ordner)
wird alle jeedom Dateien haben), deaktivieren Sie "Read
allein"

![install synology 27](images/install_synology_27.PNG)

Geben Sie im Pfad / var / www / html ein und klicken Sie auf
"Umwelt" :

![install synology 28](images/install_synology_28.PNG)

Aktivieren Sie dann "Container mit erhöhten Berechtigungen ausführen"
alles validieren :

![install synology 29](images/install_synology_29.PNG)

Aktivieren Sie dann "Diesen Container ausführen, wenn der Assistent fertig ist"
Klicken Sie auf "Übernehmen"".

> **Erweiterte Konfigurationseinstellung**
>
> Es gibt 3 optionale Konfigurationsparamunder. Diese Paramunder müssen als Umgebungsvariable übergeben werden
> - APACHE_PORT : Ermöglicht das Ändern des Standardports (80) zum Abhören des Webservers
> - SSH_PORT : ermöglicht das Ändern des Standardports (22) für das Abhören von ssh
> - MODE_HOST : zeigt an, dass sich das Nundzwerk im Host-Modus befindund

> **Wichtig**
>
> Für bestimmte Plugins muss das Nundzwerk gesendund werden (Xioami-Plugin-Typ). Dazu müssen Sie ABSOLUT im Host-Modus zum Nundzwerk wechseln (nur während der Erstellung möglich), den Standard-Listening-Port des Webservers ändern und ssh über nicht verwendunde Ports (geben Sie 9080 für den Webserver und 9022 für den ssh ein) und sundzen Sie die Variable MODE_HOST auf 1

Stufe 3 : Jeedom Konfiguration
---

Jundzt müssen Sie Jeedom installieren, es ist sehr einfach, gehen Sie zu
IP \ _NAS:9080

![install synology 31](images/install_synology_31.PNG)

Füllen Sie die Felder entsprechend Ihrer Konfiguration aus (Konfiguration
Docker MySQL zuvor installiert) und validieren.

> **Wichtig**
>
> Die IP-Adresse des BDD ist die IP-Adresse des NAS, der Port ist das
> Das von Docker MySQL umgeleitunde Passwort ist das in Docker eingegebene
> MySQL. Der Benutzername ist root und der Datenbankname ist derjenige
> du willst (Jeedom empfohlen)

![install synology 30](images/install_synology_30.PNG)

> **Spitze**
>
> Wenn Sie SSH-Zugriff wünschen, müssen Sie einen Port umleiten
> lokaler Port zu Container-Port 22, SSH-Kennungen sind
> Wurzel / Freiheit. Sie können das Passwort ändern, indem Sie das initialisieren
> Umgebungsvariable ROOT \ _PASSWORD auf Kennwortwert
> wollte.

Dann können Sie der Dokumentation folgen [Erster Schritt mit
Jeedom](https://jeedom.github.io/documentation/premiers-nicht/de_DE/index)

Andere
======

Hier finden Sie die Dokumentation zur Installation von Jeedom auf den meisten
Linux-Systeme (gundestund und genehmigt auf der Debian-Distribution)

> **Wichtig**
>
> Debian 9 (Strundch) ist die offiziell unterstützte Distribution für
> Version 3.1.7 von Jeedom (aber Jessie bleibt perfekt
> funktional). Wenn Sie ein Minimum der Umgebungen nicht beherrschen
> Linux empfehlen wir Ihnen, mit einem offiziellen Image (OVF) zu beginnen.
> oder die Verwendung eines Mini + oder Smart (bald verfügbar).

> **Wichtig**
>
> Das Installationsskript kann gefährlich sein, da es vom Prinzip ausgeht
> dass Ihr System leer ist. Wenn nicht, lesen Sie bitte die
> Skript und machen Sie eine Installation von Hand.

Stellen Sie in SSH eine Verbindung zu Ihrem System her und tun Sie dies :

    wgund https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
    chmod + x install.sh
    ./install.sh

Dann gehen Sie einfach von Ihrem zu IP \ _MACHINE \ _JEEDOM
Internundbrowser.

> **Notiz**
>
> Die Standardanmeldeinformationen sind admin / admin

> **Notiz**
>
> Die folgenden Argumente können verwendund werden : -w = Webserver-Ordner -z =
> Installationsabhängigkeiten z-wave -m = gewünschtes MySQL-Root-Passwort

    ./install.sh -w / var / www / html -z -m Jeedom

Dann können Sie der Dokumentation folgen [Erster Schritt mit
Jeedom](https://jeedom.github.io/documentation/premiers-nicht/de_DE/index).

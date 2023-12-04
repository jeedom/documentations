# Installation auf einer VM

Wenn Sie Jeedom ohne Risiko entdecken möchten, können Sie es auch auf Ihrem PC virtualisieren. Gehen Sie wie folgt vor. Sie gehen in einer VM kein Risiko ein, die Integrität Ihres PCs ist geschützt :

## Laden Sie VirtualBox herunter und installieren Sie es

Sie müssen die Virtual Box-Software herunterladen [hier](https://www.virtualbox.org/wiki/Downloads)

# Automatische Installation

Laden Sie die Jeedom ISO herunter [hier](https://images.jeedom.com/x86-64/).

## Konfigurieren der VM-Umgebung

Klicken Sie auf Neu und füllen Sie die Felder wie folgt aus :

![VirtualBox1](images/VirtualBox1.PNG)

-   Klicken Sie auf Weiter und passen Sie die Speichergröße an Ihr System an (1024 sind ausreichend)
-   Klicken Sie auf Weiter und erstellen Sie jetzt eine virtuelle Festplatte
-   Klicken Sie auf Erstellen und wählen Sie VDI
-   Klicken Sie auf Weiter, dynamisch zugeordnet
-   Klicken Sie auf Weiter. Wählen Sie eine Größe für den Speicherplatz (4 GB sind ausreichend)
-   Klicken Sie auf Erstellen

## VM-Start

-   Klicken Sie auf Konfiguration
-   Speicher auswählen
-   Fügen Sie ein optisches Laufwerk hinzu
-   Wählen Sie eine Disc
![VirtualBox2](images/VirtualBox2.PNG)
-   Geben Sie das zuvor heruntergeladene Bild an
-   Wählen Sie dann Netzwerk und im Netzwerkzugriffsmodus "Bridge-Zugriff".
![VirtualBox3](images/VirtualBox3.PNG)
-   Klicken Sie auf OK
-   Klicken Sie auf Start

Wählen Sie "Auf Festplatte installieren" (Eingabetaste auf der Tastatur), bestätigen Sie mit Ja (Abwärtspfeiltaste und geben Sie dann ein). Der Rest wird automatisch erledigt (10 bis 30 Minuten). Sobald der VM neu gestartet wurde, warten Sie 5 Minuten. Sie sollten Zugriff auf Jeedom haben, indem Sie einfach die IP von Jeedom in einen Browser einfügen.

>**Tipps**
>
>Um die IP der VM herauszufinden (sobald sie mit ihr verbunden ist, werden die Kennungen auf dem Verbindungsbildschirm angezeigt) ``ip -s -c -h a``

> **Informationen**
>
> Die Standard-SSH-Verbindungs-IDs sind : jeedom und Mjeedom96 für das Passwort 

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)

# Manuelle Installation

## Herunterladen eines Debian 11-Images – netinstall

Laden Sie ein minimalistisches Debian 11-Image herunter [hier](https://www.debian.org/releases/bullseye/debian-installer/), indem Sie „CD-Images über das Netzwerk installieren“ -> AMD64 wählen

## Konfigurieren der VM-Umgebung

Klicken Sie auf Neu und füllen Sie die Felder wie folgt aus :

![VirtualBox1](images/VirtualBox1.PNG)

-   Klicken Sie auf Weiter und passen Sie die Speichergröße an Ihr System an (1024 sind ausreichend)
-   Klicken Sie auf Weiter und erstellen Sie jetzt eine virtuelle Festplatte
-   Klicken Sie auf Erstellen und wählen Sie VDI
-   Klicken Sie auf Weiter, dynamisch zugeordnet
-   Klicken Sie auf Weiter. Wählen Sie eine Größe für den Speicherplatz (4 GB sind ausreichend)
-   Klicken Sie auf Erstellen

## VM-Start

-   Klicken Sie auf Konfiguration
-   Speicher auswählen
-   Fügen Sie ein optisches Laufwerk hinzu
-   Wählen Sie eine Disc
![VirtualBox2](images/VirtualBox2.PNG)
-   Geben Sie das zuvor heruntergeladene Bild an
-   Wählen Sie dann Netzwerk und im Netzwerkzugriffsmodus "Bridge-Zugriff".

![VirtualBox3](images/VirtualBox3.PNG)

-   Klicken Sie auf OK \* Klicken Sie auf Start

## Debian 11 installieren

Es ist klassisch

![VirtualBox4](images/VirtualBox4.PNG)

-   Wählen Sie Grafische Installation
-   Installieren Sie den Debian vorzugsweise ohne grafische Oberfläche, da er unbrauchbar ist. Benutzername spielt keine Rolle. In den meisten Bildschirmen müssen Sie nur die Standardauswahl überprüfen. Sie können leere Felder lassen, es wird nicht blockiert.
-   Zur Softwareauswahl :
![VirtualBox5](images/VirtualBox5.PNG)
-   Machen Sie sich für Grub keine Sorgen, der Bootsektor ist der der VM, nicht der Ihres PCs. Keine Gefahr, etwas zu zerbrechen.

## Jeedom Installation

-   Starten Sie Ihre VM
-   Identifizieren Sie sich mit dem Benutzer und dem Kennwort, die Sie während der Installation ausgewählt haben
-   Gehen Sie root

``su -``

-   Geben Sie das während der Installation festgelegte Root-Passwort ein
-   Holen Sie sich das Jeedom-Skript, machen Sie es ausführbar und starten Sie es

````
wget https://raw.githubusercontent.com/jeedom/core/V4-stable/install/install.sh
chmod +x install.sh
./install.sh
````

-   und lass es gehen

## Jeedom starten

-   Um die IP-Lan-Adresse der VM zu kennen

````
ip -s -c -h a
````

Geben Sie Ihre IP-Adresse 192.168.0 ein.XX erscheint in rot. Geben Sie es einfach in Ihren Browser ein.

> **Warnung**
>
> Wenn dies nicht funktioniert, haben Sie Ihre Netzwerkkarte nicht wie zu Beginn angegeben als Netzwerkbrücke konfiguriert.

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)

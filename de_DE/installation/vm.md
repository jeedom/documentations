# Installation auf einer VM

Wenn Sie Jeedom ohne Risiko entdecken möchten, können Sie es auch auf Ihrem PC virtualisieren, hier ist das zu befolgende Verfahren. In einer VM gehen Sie kein Risiko ein, die Integrität Ihres PCs ist geschützt :

## Herunterladen und Installieren von VirtualBox

Sie müssen die Virtual Box-Software herunterladen [hier](https://download.virtualbox.org/virtualbox/6.1.6/VirtualBox-6.1.6-137129-Win.exe)

# Automatische Installation

Jeedom iso herunterladen [hier](https://images.jeedom.com/x86-64/).

## Konfigurieren der VM-Umgebung

Klicken Sie auf Neu und füllen Sie die Felder wie folgt aus :

![VirtualBox1](images/VirtualBox1.PNG)

-   Klicken Sie auf Weiter, passen Sie die Speichergröße an Ihr System an (1024 sind ausreichend)
-   Klicken Sie auf Weiter, erstellen Sie jetzt eine virtuelle Festplatte
-   Klicken Sie auf Erstellen, wählen Sie VDI
-   Klicken Sie auf Weiter, dynamisch zugewiesen
-   Klicken Sie auf Weiter, wählen Sie eine Größe für den Speicherplatz (4 GB reichen aus)
-   Klicken Sie auf Erstellen

## Starten der VM

-   Klicken Sie auf Einrichtung
-   Speicher auswählen
-   Fügen Sie ein optisches Laufwerk hinzu
-   Wählen Sie eine Disc
![VirtualBox2](images/VirtualBox2.PNG)
-   Geben Sie das zuvor hochgeladene Bild an
-   Wählen Sie dann Netzwerk und im Netzwerkzugriffsmodus "Bridge-Zugriff".
![VirtualBox3](images/VirtualBox3.PNG)
-   OK klicken
-   Klicken Sie auf Start

Wählen Sie „Install on disk“ (Eingabetaste auf der Tastatur), bestätigen Sie mit „Yes“ (Pfeiltaste nach unten, dann Enter). Der Rest wird automatisch erledigt (10 bis 30 Minuten). Sobald die VM neu gestartet wurde, warten Sie 5 Minuten und Sie sollten Zugriff auf Jeedom haben, indem Sie einfach die Jeedom-IP in einen Browser eingeben.

>**TIPPS**
>
>Um die IP der VM zu kennen (sobald sie verbunden ist, werden die Kennungen auf dem Verbindungsbildschirm angezeigt) ``ip -s -c -h a``

> **Information**
>
> Die Standard-SSH-Anmeldeinformationen sind : jeedom und Mjeedom96 für das Passwort 

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)

# Manuelle Installation

## Herunterladen eines Debian-Strecht-Images - netinstall

Laden Sie ein minimalistisches Debian-10-Buster-Image herunter [hier](https://www.debian.org/CD/http-ftp/), indem Sie CD -> AMD64 wählen

## Konfigurieren der VM-Umgebung

Klicken Sie auf Neu und füllen Sie die Felder wie folgt aus :

![VirtualBox1](images/VirtualBox1.PNG)

-   Klicken Sie auf Weiter, passen Sie die Speichergröße an Ihr System an (1024 sind ausreichend)
-   Klicken Sie auf Weiter, erstellen Sie jetzt eine virtuelle Festplatte
-   Klicken Sie auf Erstellen, wählen Sie VDI
-   Klicken Sie auf Weiter, dynamisch zugewiesen
-   Klicken Sie auf Weiter, wählen Sie eine Größe für den Speicherplatz (4 GB reichen aus)
-   Klicken Sie auf Erstellen

## Starten der VM

-   Klicken Sie auf Einrichtung
-   Speicher auswählen
-   Fügen Sie ein optisches Laufwerk hinzu
-   Wählen Sie eine Disc
![VirtualBox2](images/VirtualBox2.PNG)
-   Geben Sie das zuvor hochgeladene Bild an
-   Wählen Sie dann Netzwerk und im Netzwerkzugriffsmodus "Bridge-Zugriff".

![VirtualBox3](images/VirtualBox3.PNG)

-   Klicken Sie auf OK \*Klicken Sie auf Start

## Debian 9 installieren

Es ist klassisch

![VirtualBox4](images/VirtualBox4.PNG)

-   Wählen Sie Grafische Installation
-   Installieren Sie das Debian vorzugsweise ohne grafische Oberfläche, weil es nutzlos ist. Benutzername spielt keine Rolle. In den meisten Bildschirmen müssen Sie lediglich die Standardauswahl bestätigen. Sie können Felder leer lassen, es blockiert nicht.
-   Zur Softwareauswahl :
![VirtualBox5](images/VirtualBox5.PNG)
-   Für Grub, keine Sorge, der Bootsektor ist der der VM, nicht der Ihres PCs. Keine Gefahr etwas kaputt zu machen.

## Jeedom installieren

-   Starten Sie Ihre VM
-   Identifizieren Sie sich mit dem bei der Installation gewählten Benutzer und Passwort
-   Wurzel werden

``su -``

-   Geben Sie das während der Installation festgelegte Root-Passwort ein
-   Holen Sie sich das Jeedom-Skript, machen Sie es ausführbar und starten Sie es

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

-   und lass es sein

## Start von jeedom

-   Um die IP-LAN-Adresse der VM zu kennen

````
ip -s -c -h a
````

Ihre IP-Adresse, geben Sie 192.168.0.XX erscheint rot. Geben Sie es einfach in Ihren Browser ein.

> **Warnung**
>
> Wenn dies nicht funktioniert, haben Sie Ihre Netzwerkkarte in Network Bridge nicht wie eingangs angegeben konfiguriert.

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)

Hardware
========

 :

-   

-   

-   

-   



 :

-   [
    :

-   [ Z-Wave+ und
    :

-   [
    :

-   [ EnOcean und
    :

 :

 :

    -   

    -   

    -   

    -   


.

> **Spitze**
>
> 
> .

> **Spitze**
>
> 
> 
> . 
>  **und
> **. 
> 
> [ici](http:?.

> **Spitze**
>
> Service Pack ?  ? 
> [ici](https:?.



===========



[ici](https://jeedom.github.io/documentation/howto/de_DE/recovery_mode_jeedom_smart)


===========

> **Spitze**
>
> 
> 

Stufe 1 : 
---

:.


Stufe 2 : 
---


[ici](https://images.jeedom.com/jeeboard/),


![install humming 1](images/install_humming_1.PNG)

Stufe 3 : 
---



[winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html)), vous
 :

![install humming 2](images/install_humming_2.PNG)

![install humming 8](images/install_humming_8.PNG)

Schritt 4 : 
---



!". 
.



.

> **Spitze**
>
> 


:



===========


 **.**

> **Wichtig**
>
> 
> ..

**
Grafik**
[ICI](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2018-04-19/2018-04-18-raspbian-strundch-lite.zip)

**** [Ici](http:

****
[ici](https:.io/)

> **Notiz**
>
> 
> 
> .

****

> **Warnung**
>
> 
> . .


.

 : 
" ****

> **Wichtig**
>
> 
> 
> 

![ExtensionFichier](images/ExtensionFichier.PNG)

****


.

****



 :

-   

-   "
    [ici](http://angryip.org/download/#windows)




[Ici](http://www.putty.org/)

.

.

 ****

> **Wichtig**
>
> 
> . 
> 
> . 

****

    :. | 

****

> **Notiz**
>
> 
> . 
> . .



> **Notiz**
>
> 

> **Notiz**
>
>  : - =
> 

    .

**

.

 ****  : `sudo nano /boot/config.txt`

 ****  ****  :

`gpu_mem=16`

`disable_l2cache=0`

`gpu_freq=250`

 : `CTRL+X` puis `O `puis `ENTREE`




:


=============

.

Stufe 1 : 
---

.
.
![delta1](images/delta1.png)

Stufe 2 : 
---

"
![delta2](images/delta2.png)

.
.
![delta3](images/delta3.png)

, ****:
![delta4](images/delta4.png)

Stufe 3 : Installation läuft
---


![delta5](images/delta5.png)

Schritt 4 : 
---

:
![delta6](images/delta6.png)

.

 **nicht** . 

.

.


:


==


. 
 :

Stufe 1 : 
---


[ICI](http://download.virtualbox.org/virtualbox/5.1.28/VirtualBox-5.1.28-117968-Win.exe)

Stufe 2 : 
---


[Ici](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-9.3.0-amd64-nundinst.iso)

.
[ICI](http://download.virtualbox.org/virtualbox/5.1.28/Oracle__VirtualBox_Extension_Pack-5.1.28.vbox-extpack)

Stufe 3 : 
---

 :

![VirtualBox1](images/VirtualBox1.PNG)

-   
    

-   

-   

-   

-   
    

-   Klicken Sie auf Erstellen

Schritt 4 : 
---

-   

-   

-   

-   

![VirtualBox2](images/VirtualBox2.PNG)

-   

-   
    .

![VirtualBox3](images/VirtualBox3.PNG)

-   

Schritt 5 : 
---



![VirtualBox4](images/VirtualBox4.PNG)

-   

-   
    . . In der
    Bei den meisten Bildschirmen müssen Sie nur die Standardauswahl überprüfen. Sie
    kann leere Felder hinterlassen, es blockiert nicht.

-   Zur Softwareauswahl :

![VirtualBox5](images/VirtualBox5.PNG)

-   Keine Sorge, für Grub ist der Start-up-Sektor der von
    , nicht die Ihres PCs. Keine Gefahr, undwas zu zerbrechen.

Schritt 6 : Jeedom Installation
---

-   Starten Sie Ihre 

-   Identifizieren Sie sich mit dem gewählten Benutzer und Passwort
    während der Installation

-   Gehen Sie root

<!-- -->

    su

-   Geben Sie das während der Installation festgelegte Root-Passwort ein

-   Holen Sie sich das Jeedom-Skript, machen Sie es ausführbar und starten Sie es

<!-- -->

    wgund https:.

    chmod + x install.

    ./install.

-   und lass es gehen ...

Schritt 7 : Jeedom starten
---

-   Um die IP-Lan-Adresse der  zu kennen

<!-- -->

    ip -s -c -ha

Geben Sie Ihre IP-Adresse 192.168.0 ein.XX erscheint in rot. Du musst nur
Geben Sie es in Ihren Browser ein.

> **Warnung**
>
> Wenn dies nicht funktioniert, haben Sie Ihre Karte nicht konfiguriert
> tzwerk in der tzwerkbrücke wie zu Beginn angegeben.


:

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

Ich benutze [dieses] (https://hub.docker.com/_/mysql/). Um es zu installieren
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

-   Ihr-root-Passwort : Root-Passwort für den Zugriff auf Jeedom in 

Dann müssen Sie Jeedom installieren, indem Sie zu gehen : IP \ _DOCKER:9080 und
Geben Sie die Verbindungsinformationen zu MySQL ein :

![install other](images/install_other.PNG)


:

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

Sie benötigen Docker, um Jeedom auszuführen, den ersten Docker , der
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
 :

![install synology 18](images/install_synology_18.PNG)

 :

![install synology 19](images/install_synology_19.PNG)

" :

![install synology 34](images/install_synology_34.PNG)






![install synology 32](images/install_synology_32.PNG)


"Variable" : "
.  :

![install synology 33](images/install_synology_33.PNG)


".

Jeedom
------

Klicken Sie auf "Registrieren"" :

![install synology 5](images/install_synology_5.PNG)


 :

![install synology 20](images/install_synology_20.PNG)

Überprüfen Sie dann die Versionsanforderung. Am besten nehmen Sie die
.

Klicken Sie dann auf das Bild, hier können Sie den Fortschritt des verfolgen
Download (kann einige zehn Minuten dauern) :

![install synology 21](images/install_synology_21.PNG)

 :

![install synology 22](images/install_synology_22.PNG)



folgende :

![install synology 23](images/install_synology_23.PNG)

 :

![install synology 24](images/install_synology_24.PNG)

"

![install synology 25](images/install_synology_25.PNG)

"

![install synology 26](images/install_synology_26.PNG)



allein"

![install synology 27](images/install_synology_27.PNG)


"" :

![install synology 28](images/install_synology_28.PNG)


 :

![install synology 29](images/install_synology_29.PNG)


".

> ****
>
> 
> -  : 
> -  : 
> -  : 

> **Wichtig**
>
> 

Stufe 3 : 
---


:9080

![install synology 31](images/install_synology_31.PNG)


.

> **Wichtig**
>
> 
> 
> . 
> 

![install synology 30](images/install_synology_30.PNG)

> **Spitze**
>
> 
> 
> . 
> 
> .


:

Andere
======




> **Wichtig**
>
> 
> .
> . 
> 
> .

> **Wichtig**
>
> 
> . 
> .

 :

    wgund https:.
    chmod + x install.
    ./install.


.

> **Notiz**
>
> 

> **Notiz**
>
>  : - =
> 

    .


:.

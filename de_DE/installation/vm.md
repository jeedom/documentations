# 

.  :

## 

 [](https://download.virtualbox.org/virtualbox/6.1.6/VirtualBox-6.1.6-137129-Win.exe)

# 

 [](https://images.jeedom.com/x86-64/).

## 

 :

![VirtualBox1](images/VirtualBox1.PNG)

-   )
-   
-   
-   
-   )
-   

## 

-   
-   
-   
-   
![VirtualBox2](images/VirtualBox2.PNG)
-   
-   .
![VirtualBox3](images/VirtualBox3.PNG)
-   
-   

). .

>****
>
> ``ip -s -c -h a``

> ****
>
>  :  

 [](https://doc.jeedom.com/de_DE/premiers-pas/index)

# 

## 

 [](https://www.debian.org/CD/http-ftp/), indem Sie CD -> AMD64 auswählen

## 

 :

![VirtualBox1](images/VirtualBox1.PNG)

-   )
-   
-   
-   
-   )
-   

## 

-   
-   
-   
-   
![VirtualBox2](images/VirtualBox2.PNG)
-   
-   .

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

 [](https://doc.jeedom.com/de_DE/premiers-pas/index)

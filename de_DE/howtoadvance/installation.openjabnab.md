Hier ist ein Tutorial, wie man openjabnab lokal installiert (auf einem RPI oder
Summen)

> **Notiz**
>
> Dieses Tutorial ist weitgehend inspiriert von
> [celui-ci](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

Installation von Abhängigkeiten 
============================

Sobald das in SSH installierte System fertig ist :

    apt-get update
    apt-get dist-upgrade
    apt-get install ssh
    apt-get install apache2 php5 php5-mysql libapache2-mod-php5
    a2enmod umschreiben
    apt-get install 
    apt-get install build-essential
    apt-get install libqt4-dev --fix-fehlt
    apt-get installiere qt4-dev-tools
    apt-get install bind9
    apt-get install git

Netzwerkkonfiguration 
=======================

Dann müssen Sie die IP-Adresse des Systems wiederherstellen :

    ifconfig

Das Ergebnis ist :

    eth0 Link encap:Ethernet HWaddr d0:63:b4:00:54:98
              inet addr:  Bcast:192.168.0.255 Maske:255.255.255.0
              inet6 addr: fe80::d263:b4ff:fe00:5498/64 Geltungsbereich:Link
              UP BROADAST RUNNING MULTIAST MTU:1500 metrisch:1
              RX-Pakete:10721 Fehler:0 fiel:0 Überläufe:0 Frame:0
              TX-Pakete:6477 Fehler:0 fiel:0 Überläufe:0 Träger:0
              Kollisionen:0 txqueuelen:1000
              RX-Bytes:2032942 (1.9 MiB) TX-Bytes:1230703 (1.1 MiB)

Hier lautet die IP-Adresse .

> **Notiz**
>
> Für den Rest des Tutorials werde ich diese IP verwenden, das ist es natürlich
> Ersetzen Sie je nachdem, welche Sie tatsächlich

Bearbeiten Sie dann die Datei /etc/resolv.conf

    vim /etc/resolv.conf

Und hinzufügen :

    Nameserver 

DNS-Konfiguration 
====================

Bearbeiten Sie die Datei /etc/bind/named.conf.local

    cd / etc / bind /
    vim named.conf.local

Und hinzufügen :

    Bereich "raspberry.pi""{
     Mastertyp;;
     Datei "/etc/bind/db.raspberry.pi";;
    };;
    Zone "0.168.192.in-addr.arpa"{
     Mastertyp;;
     Datei "/etc/bind/db.192.168.0.inv";;
    };;

Erstellen Sie die Datei db.raspberry.pi

vim db.raspberry.pi ---

Und steck es ein :

    $TTL 604800
    @ IN SOA ojn.raspberry.pi. root.raspberry.pi. (
     1;; Seriennummer
     604800;; Aktualisieren
     86400;; Wiederholen Sie den Vorgang
     2419200;; Läuft ab
     604800);; Negative ache-TTL
    ;;
    @ IN NS ojn.raspberry.pi.
    ojn IN A 
     IN A 

Erstellen Sie dann diese Datei db.192.168.0.inv

    vim db.192.168.0.inv

Und setzen :

    $TTL 604800
    @ IN SOA ojn.raspberry.pi. root.localhost. (
     2;; Seriennummer
     604800;; Aktualisieren
     86400;; Wiederholen Sie den Vorgang
     2419200;; Läuft ab
     604800);; Negative ache-TTL
    ;;
    @ IN NS ojn.raspberry.pi.
    162 IN PTR ojn.raspberry.pi.

> **Wichtig**
>
> Denken Sie daran, die 162 in der letzten Zeile durch die letzte zu ersetzen
> Teil Ihres Systems IP

Starten Sie DNS :

    /etc/init.d/bind9 start

Testen Sie, ob es gut ist :

    ping ojn.raspberry.pi

Das solltest du haben :

    root @ cubox-i:/ home / ojn # ping ojn.raspberry.pi
    PING ojn.raspberry.ft () 56 (84) Datenbytes.
    64 Bytes von ojn.raspberry.ft (): icmp_seq = 1 ttl = 64 time = 0.069 ms
    64 Bytes von ojn.raspberry.ft (): icmp_seq = 2 ttl = 64 time = 0.067 ms
    64 Bytes von ojn.raspberry.ft (): icmp_seq = 3 ttl = 64 time = 0.059 ms
    64 Bytes von ojn.raspberry.ft (): icmp_seq = 4 ttl = 64 time = 0.068 ms
    ^ .
    --- ojn.raspberry.pi ping-Statistiken ---
    4 Pakete gesendet, 4 empfangen, 0% Paketverlust, Zeit 3000ms
    rtt min / avg / max / mdev = 0,059 / 0,065 / 0,069 / 0.010 ms

> **Notiz**
>
> Sie müssen Strg +  drücken, um den Ping zu beenden

Aus Sicherheitsgründen werden wir auch die Auflösung in / etc / hosts hinzufügen :

    vim / etc / hosts

Und hinzufügen :

     ojn.raspberry.pi

Openjabnab-Wiederherstellung 
=========================

Wir werden zuerst den Benutzer erstellen :

    Adduser ojn
    cd / home / ojn

Dann klone openjabnab :

    Git-Klon https://github.com/OpenJabNab/OpenJabNab.git
    chown -R ojn:
    

 
============================

Tun :

    
    

Und hinzufügen :

    <VirtualHost *:80>
            
            
             <Directory />
                     
                    
             </Directory>
             <Directory /home/ojn/OpenJabNab/http-wrapper/>
                     
                     
                    
                     
             </Directory>
    </VirtualHost>

 :

    

 :

    

Und hinzufügen :

    <Directory /home/ojn/>
            
            
            
    </Directory>

 :

    

 
=========================

Tun :

    
    
    
    

> **Notiz**
>
> 

 
==========================

Tun :

    .
    

 :

    
    
    
    

.*

 
=======================================


: :

     ojn.raspberry.pi

 :

    http://ojn.raspberry.pi/ojn_admin/install.php



 
====================

 :

    
    
    .

 :

    http://ojn.raspberry.pi/ojn_admin/index.php

> **Notiz**
>
> 
> Niedrig

 
======================


. 
.


.


 :

     : 
     : 255.255.255.0
     : 192.168.0..
     : 

 
====================================================


. 
. Tun :

    cd / home / ojn
    

 :

    if [$ (ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0];; dann
         .
    fi

Dann mach es :

    


 :

    crontab -e

Und hinzufügen :

    @reboot /home/ojn/checkojn.sh
    *

> **Wichtig**
>
> 
> 

 
============================================

Weiter :

    http://ojn.raspberry.pi/ojn_admin/index.php

Sie müssen haben :

![installation.openjabnab](images/installation.openjabnab.PNG)


Benutzer :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

 :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

 :

![installation.openjabnab4](images/installation.openjabnab4.PNG)


 :

![installation.openjabnab5](images/installation.openjabnab5.PNG)


 :

![installation.openjabnab6](images/installation.openjabnab6.PNG)


 :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

,

 :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

Unten finden Sie die Liste der Plugins. Vergessen Sie nicht, sie hinzuzufügen
aktivieren (TTS-Typ oder Ohrsteuerung) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

Jeedom Konfiguration 
=======================

Die Konfiguration in Jeedom ist recht einfach, Sie müssen zunächst einmal
Verbinden Sie in SSH mit Jeedom (wenn Sie eine Jeedom-Box haben, geben Sie die Kennungen an
sind im Installationsdokument). Bearbeiten Sie dann die Datei / etc / hosts

    vim / etc / hosts

Und fügen Sie die folgende Zeile hinzu :

     ojn.raspberry.pi

Dann passiert alles in Jeedom, nachdem Sie hier Ihr Kaninchen erstellt haben
die Konfiguration zu setzen:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

Hier hat Ihr Kaninchen jetzt einen eigenen Bau !!!!!

Setzen Sie das TTS lokal ein 
======================

Alles ist lokal, außer dem TTS, das durch die Acapela-Site geht, aber es ist
möglich, indem einige Dateien so geändert werden, dass sie lokal übergeben werden

> **Notiz**
>
> Ich werde in Betracht ziehen, dass Oenjabnab in installiert ist
> / home / ojn / OpenJabNab und Sie sind als angemeldet
> der openjabnab Benutzer, hier ojn

Schaffung von tts jeedom 
----------------------

Sie müssen einen jeedom-Ordner in servver / tts erstellen :

    mkdir / home / ojn / OpenJabNab / server / tts / jeedom

Dann müssen Sie 3 Dateien erstellen :

-   jeedom.pro

<!-- -->

    ######################################################################
    # Automatisch generiert von q (2.01a) Sa Jan.. 19 19:10:01 2008
    ######################################################################

    TEMPLATE = lib
    ONFIG - = Debug
    ONFIG + = qt Release Plugin
    QT + = Netzwerk-XML
    QT - = Mistel
    INLUDEPATH += . ../../server ../../lib
    ZIEL = tts_jeedom
    DESTDIR = ../../bin/tts
    DEPENDPATH += . ../../server ../../lib
    LIBS + = -L ../../ bin / -lcommon
    MO_DIR = ./tmp/moc
    OBJETS_DIR = ./tmp/obj
    win32 {
      QMAKE_XXFLAGS_WARN_ON + = -WX
    }
    Unix {
      QMAKE_LFLAGS + = -Wl, -rpath, \ '\ $$ ORIGIN \'
      QMAKE_XXFLAGS + = -Fehler
    }

    # Eingabe
    HEADERS + = tts_jeedom.h
    QUELLEN + = tts_jeedom.cpp

-   tts \ _jeedom.h

<!-- -->

    #ifndef _TTSAAPELA_H_
    #definiere _TTSAAPELA_H_

    #einschließen <QHttp>
    #einschließen <QMultiMap>
    #einschließen <QTextStream>
    #einschließen <QThread>
    #include "ttsinterface.h"

    Klasse TTSJeedom : öffentliches TTSInterface
    {
      Q_OBJET
      Q_INTERFAES (TTSInterface)

    Öffentlichkeit:
      TTSJeedom ();;
      virtual ~ TTSJeedom ();;
      QByteArray reateNewSound (QString, QString, bool);;

    privat:
    };;

    #endif

-   tts \ _jeedom.cpp

<!-- -->

    #einschließen <QDateTime>
    #einschließen <QUrl>
    #einschließen <QryptographicHash>
    #einschließen <QMapIterator>
    #include "tts_jeedom.h"
    #include "log.h."
    #einschließen <QNetworkReply>
    #einschließen <QNetworkRequest>
    #einschließen <QNetworkAccessManager>

    Q_EXPORT_PLUGIN2 (tts_jeedom, TTSJeedom)

    TTSJeedom::TTSJeedom ():TTSInterface ("jeedom", "Jeedom")
    {
      voiceList.insert ("fr", "fr");;
    }

    TTSJeedom::~ TTSJeedom ()
    {
    }

    QByteArray TTSJeedom::reateNewSound (QString-Text, QString-Stimme, bool forceOverwrite)
    {
      QEventLoop-Schleife;;
      if (!voiceList.contains (Stimme))
        Stimme = "fr";;
      // Ausgabeordner prüfen (und ggf. erstellen)
      QDir outputFolder = ttsFolder;;
      if (!outputFolder.exists (voice))
        outputFolder.mkdir (Stimme);;

      if (!outputFolder.cd (Stimme))
      {
        LogError (QString ("TTS-Ordner kann nicht erstellt werden : % 1 "). Arg (ttsFolder.absoluteFilePath (voice)));;
        return QByteArray ();;
      }

      // Dateiname berechnen
      QString fileName = QryptographicHash::Hash (Text.toAscii (), QryptographicHash::Md5) .toHex (). Append (". Mp3");;
      QString filePath = outputFolder.absoluteFilePath (Dateiname);;

      if (!forceOverwrite && QFile::existiert (filePath))
        return ttsHTTPUrl.arg (voice, fileName) .toAscii ();;

      // MP3 holen
      QHttp http ("TODO_IP_JEEDOM");;
      QObject::connect (& http, SIGNAL (erledigt (bool)), & loop, SLOT (quit ()));;

      QByteArray ontentData;;
      ontentData + = "apikey = TODO_API_JEEDOM & text =" + QUrl::toPercentEncoding (Text);;

      QHttpRequestHeader Header;;
      Header.addValue ("Host", "TODO_IP_JEEDOM");;

      Header.setontentLength (ontentData.length ());;
      Header.setRequest ("GET", "/core/api/tts.php?apikey = TODO_API_JEEDOM & text = "+ QUrl::toPercentEncoding (Text), 1, 1);;

      http.request (Header, ontentData);;
      loop.exec ();;

      QFile-Datei (filePath);;
      if (!file.open (QIODevice::WriteOnly))
      {
        LogError ("Sounddatei kann nicht zum Schreiben geöffnet werden : "+ filePath);;
        return QByteArray ();;
      }
      file.write (http.readAll ());;
      file.close ();;
      return ttsHTTPUrl.arg (voice, fileName) .toAscii ();;
    }

> **Notiz**
>
> Vergessen Sie nicht, die TODOs zu ersetzen

Aktivieren Sie dann die tts jeedom, indem Sie die Datei ändern
/home/ojn/OpenJabNab/server/tts/tts.pro durch Hinzufügen von jeedom zu SUBDIRS :

    TEMPLATE = Unterverzeichnisse
    SUBDIRS = acapela google jeedom

Neu kompilieren 
-------------

    
    
    

Änderung des tts-Dienstes 
------------------------------

Bearbeiten Sie die Datei /home/ojn/OpenJabNab/server/bin.ini
und ändern :

    TTS = Acapela

Von

    TTS = Jeedom

Relaunch von Openjabnab 
--------------------

Am einfachsten ist es, den omputer neu zu starten, um openjabnab neu zu starten

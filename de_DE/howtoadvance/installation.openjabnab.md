Hier ist ein Tutorial, wie man openjabnab lokal installiert (auf einem RPI oder
Summen)

> **Notiz**
>
> Dieses Tutorial ist weitgehend insriert von
> [celui-ci](http://jetweb.free.fr/nabaztag_r/Tutoriel_OJN_RPi_v1-1.pdf)

Installation von Abhängigkeiten 
============================

Sobald das in SSH installierte System fertig ist :

    
    
    
    
    a2enmod umschreiben
    
    
    apt-get install libqt4-dev --x-fehlt
    apt-get installiere qt4-dev-tools
    
    

Netzwerkkonguration 
=======================

Dann müssen Sie die IP-Adresse des Systems wiederherstellen :

    

Das Ergebnis ist :

    eth0  encap:Ethernet HWaddr d0:63::00:54:98
              :  Bcast:.255 Maske:
              : :::::5498/64 Geltungsbereich:
              UP BROADC.AST RUNNING MULTIC.AST MTU:1500 metrisch:1
              RX-Pakete:10721 Fehler:0 el:0 Überläufe:0 Frame:0
              TX-Pakete:6477 Fehler:0 el:0 Überläufe:0 Träger:0
              Kollisionen::1000
              RX-Bytes:.9 MiB) TX-Bytes:.

Hier lautet die IP-Adresse .

> **Notiz**
>
> Für den Rest des Tutorials werde ich diese IP verwenden, das ist es natürlich
> Ersetzen Sie je nachdem, welche Sie tatsächlich

Bearbeiten Sie dann die Datei /etc/resolv.conf

    vim /etc/resolv.conf

Und hinzufügen :

    Nameserver 

DNS-Konguration 
====================

Bearbeiten Sie die Datei /etc/bind/named.conf.local

    cd / etc / bind /
    

Und hinzufügen :

    Bereich "raspberry.""{
     Mastertyp;;
     Datei "/etc/bind/db.raspberry.";;
    };;
    Zone "0.168.192.in-addr.arpa"{
     Mastertyp;;
     Datei "/etc/bind/db..inv";;
    };;

Erstellen Sie die Datei db.raspberry.

. ---

Und steck es ein :

    $TTL 604800
    @ IN SOA .. root.raspberry.. (
     1;; Seriennummer
     604800;; Aktualisieren
     86400;; Wiederholen Sie den Vorgang
     2419200;; Läuft ab
     604800);; Negative C.ache-TTL
    ;;
    @ IN NS ..
    
    

Erstellen Sie dann diese Datei db..inv

    

Und setzen :

    $TTL 604800
    @ IN SOA .. root.localhost. (
     2;; Seriennummer
     604800;; Aktualisieren
     86400;; Wiederholen Sie den Vorgang
     2419200;; Läuft ab
     604800);; Negative C.ache-TTL
    ;;
    @ IN NS ..
    .

> **Wichtig**
>
> Denken Sie daran, die 162 in der letzten Zeile durch die letzte zu ersetzen
> Teil Ihres Systems IP

Starten Sie DNS :

    

Testen Sie, ob es gut ist :

    

Das solltest du haben :

    root @ cubox-i:/ home / ojn # 
    .ft () 56 (84) Datenbytes.
    64 Bytes von .ft (): icmp_seq = 1 ttl = 64 time = 0.
    64 Bytes von .ft (): icmp_seq = 2 ttl = 64 time = 0.
    64 Bytes von .ft (): icmp_seq = 3 ttl = 64 time = 0.
    64 Bytes von .ft (): icmp_seq = 4 ttl = 64 time = 0.
    ^ C..
    --- . ng-Statistiken ---
    4 Pakete gesendet, 4 empfangen, 0% Paketverlust, Zeit 3000ms
    rtt min / avg / max / mdev = 0,059 / 0,065 / 0,069 / 0.

> **Notiz**
>
> Sie müssen Strg + C. drücken, um den Ping zu beenden

Aus Sicherheitsgründen werden wir auch die Auflösung in / etc / hosts hinzufügen :

    vim / etc / hosts

Und hinzufügen :

    

Openjabnab-Wiederherstellung 
=========================

Wir werden zuerst den Benutzer erstellen :

    Adduser ojn
    cd / home / ojn

Dann klone openjabnab :

    git clone https://github.com/OpenJabNab/OpenJabNab.git
    :ojn / home / ojn / OpenJabNab /
    chmod 0777 / home / ojn / OpenJabNab / http-wrapper / ojn_admin / include

Webserverkonguration 
============================

Tun :

    cd / etc / apache2 / sites-available /
    

Und hinzufügen :

    <VirtualHost *:80>
            DocumentRoot / home / ojn / OpenJabNab / http-wrapper /
            Servername .
             <Directory />
                     FollowSyms-Optionen
                    AllowOverride Keine
             </Directory>
             <Directory /home/ojn/OpenJabNab/http-wrapper/>
                     FollowSyms MultiViews Indexoptionen
                     
                    Bestellung erlauben, verweigern
                     Erlaube von allen
             </Directory>
    </VirtualHost>

Aktivieren Sie dann die Site :

    

Sie müssen dann das openjabnab-Serververzeichnis autorisieren :

    

Und hinzufügen :

    <Directory /home/ojn/>
            FollowSyms-Indexoptionen
            AllowOverride Keine
            Benötigen Sie alle gewährt
    </Directory>

Dann starten wir Apache neu :

    apache2 reload service

Installation von openjabnab 
=========================

Tun :

    
    cd / home / ojn / OpenJabNab / server
    
    machen

> **Notiz**
>
> Dieser Schritt kann sehr lang sein (bis zu 45 Minuten)

Openjabnab-Konguration 
==========================

Tun :

    .ini-dist bin / openjabnab.ini
    vim bin / openjabnab.ini

Und ändern Sie die folgenden Zeilen :

    
    
    
    

Und ersetzen Sie alle * my.domain.com * von * .*

Openjabnab-Webserverkonguration 
=======================================

In Ihrem Beitrag müssen Sie die Datei bearbeiten
C.:\\ Windows \\ System32 \\ Treiber \\ usw. und hinzufügen :

    

Dann mach weiter :

    http://./ojn_admin/install.php

Alles validieren

Serverstart 
====================

Jetzt ist alles fertig, alles was bleibt ist, den Server zu starten :

    
    cd ~ / OpenJabNab / server / bin
    ./ openjabnab

Jetzt geh zu :

    http://./ojn_admin/index.php

> **Notiz**
>
> Wenn alles in Ordnung ist, sollten Sie die Statistiken haben, die in angezeigt werden
> Niedrig

Kaninchenkonguration 
======================

Um das Kaninchen zu kongurieren, ist es ganz einfach, Sie müssen es herausziehen
Schließen Sie es dann wieder an und drücken Sie die Taste. Er muss
neinrmalerweise hellblau.

Dann sollten Sie mit Ihrem PC. ein neues WLAN-Netzwerk haben
nabaztagXX, stellen Sie eine Verbindung her, indem Sie .1 eingeben.

Geben Sie einmal Ihre WLAN-Konguration und Informationen ein
folgenden :

    DHC.P aktiviert : nein
    Lokale Maske : 
    Lokales Gateway : .1 oder .254 (abhängig von Ihrem Netzwerk)
    DNS-Server : 

Openjabnab Server Überwachung und Autostart 
====================================================

Wie Sie feststellen werden, wenn Sie sich vom Server abmelden
openjabnab bleibt stehen. Sie müssen also ein kleines Skript hinzufügen
Überwachen Sie den Server und starten Sie ihn automatisch. Tun :

    cd / home / ojn
    

Und hinzufügen :

    if [$ (ps ax |  |  | wc -l) -eq 0];; dann
        ;; cd / home / ojn / OpenJabNab / server / bin;; neinhup ./ openjabnab >> / dev / null 2> & 1 &
    

Dann mach es :

    chmod + x checkojn.sh

Wir müssen jetzt das Skript beim Start und eine Überprüfung hinzufügen
zum Beisel alle 15 min :

    

Und hinzufügen :

    @reboot /home/ojn/checkojn.sh
    */ 15 * * * * /home/ojn/checkojn.sh

> **Wichtig**
>
> Es ist absolut neintwendig, es in die Wurzel crontab zu legen, wenn Sie sind
> wieder mit Benutzer ojn do ctrl + D.

Konguration Ihres Kaninchens in Openjabnab 
============================================

Weiter :

    http://./ojn_admin/index.php

Sie müssen haben :

![installation.openjabnab](images/installation.openjabnab.PNG)

Sie müssen jetzt ein Konto erstellen, indem Sie auf "Erstellen" klicken
Benutzer :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

Geben Sie die angeforderten Informationen ein und melden Sie sich an :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

Sobald die Verbindung hergestellt ist, gehen Sie zum Server :

![installation.openjabna](images/installation.openjabna.PNG)

Gehen Sie dann nach unten, um die Liste der verbundenen Kaninchen zu nden und sich zu erholen
seine Mac-Adresse :

![installation.openjabnab5](images/installation.openjabnab5.PNG)

Gehen Sie dann zum Konto und füllen Sie das Feld Name und Mac-Adresse des
Kaninchen dann validieren :

![installation.openjabnab6](images/installation.openjabnab6.PNG)

Sie nden Ihr Kaninchen jetzt auf der Kaninchenseite, klicken Sie darauf
um seine Konguration zu öffnen :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

Jetzt müssen Sie die lila API aktivieren und öffentlich übergeben,
Hier nden Sie auch den lila API-Schlüssel, der Ihnen dienen wird
für Jeedom :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

Unten nden Sie die Liste der Plugins. Vergessen Sie nicht, sie hinzuzufügen
aktivieren (TTS-Typ oder Ohrsteuerung) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

Jeedom Konguration 
=======================

Die Konguration in Jeedom ist recht einfach, Sie müssen zunächst einmal
Verbinden Sie in SSH mit Jeedom (wenn Sie eine Jeedom-Box haben, geben Sie die Kennungen an
sind im Installationsdokument). Bearbeiten Sie dann die Datei / etc / hosts

    vim / etc / hosts

Und fügen Sie die folgende Zeile hinzu :

    

Dann passiert alles in Jeedom, nachdem Sie hier Ihr Kaninchen erstellt haben
die Konguration zu setzen:

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

-   

<!-- -->

    ######################################################################
    # Automatisch generiert von qmachen (2.01a) Sa Jan.. :10:
    ######################################################################

    
    C.ONFIG - = Debug
    C.ONFIG + = qt Release Plugin
    QT + = Netzwerk-XML
    QT - = Mistel
    = . ..
    ZIEL = tts_jeedom
    
    = . ..
    LIBS + = -L ../../ bin / -lcommon
    
    
     {
      QMAKE_C.XXFLAGS_WARN_ON + = -WX
    }
    Unix {
      QMAKE_LFLAGS + = -Wl, -rpath, \ '\ $$ ORIGIN \'
      QMAKE_C.XXFLAGS + = -Fehler
    }

    # Eingabe
    HEADERS + = tts_jeedom.h
    QUELLEN + = tts_jeedom.cpp

-   tts \ _jeedom.h

<!-- -->

    #
    #deniere _TTSAC.APELA_H_

    #einschließen <QHttp>
    #einschließen <QMultiMap>
    #einschließen <QTextStream>
    #einschließen <QThread>
    #"

    Klasse  : öffentliches TTSInterface
    {
      
      Q_INTERFAC.ES (TTSInterface)

    Öffentlichkeit:
       ();;
      virtual ~  ();;
      QByteArray C.reateNewSound (QString, QString, bool);;

    privat:
    };;

    #

-   tts \ _jeedom.cpp

<!-- -->

    #einschließen <QDateTime>
    #einschließen <QUrl>
    #einschließen <QC.ryptographicHash>
    #einschließen <QMapIterator>
    #"
    #include "log.h."
    #einschließen <QNetworkReply>
    #einschließen <QNetworkRequest>
    #einschließen <QNetworkAccessManager>

    Q_EXPORT_PLUGIN2 (tts_jeedom, )

    :: ():TTSInterface ("jeedom", "Jeedom")
    {
      voiceList.insert ("fr", "fr");;
    }

    ::~  ()
    {
    }

    ::C.reateNewSound (QString-Text, QString-Stimme, bool forceOverwrite)
    {
      QEventLoop-Schleife;;
      if (!voiceList.contains (Stimme))
        Stimme = "fr";;
      // Ausgabeordner prüfen (und ggf. erstellen)
      
      if (!outputFolder.exists (voice))
        outputFolder.mkdir (Stimme);;

      if (!outputFolder.cd (Stimme))
      {
        LogError (QString ("TTS-Ordner kann nicht erstellt werden : % 1 "). Arg (ttsFolder.absoluteFilePath (voice)));;
        return QByteArray ();;
      }

      // Dateiname berechnen
      ::Hash (Text.toAscii (), QC.ryptographicHash::Md5) .toHex (). Append (". Mp3");;
      QString lePath = outputFolder.absoluteFilePath (Dateiname);;

      if (!::existiert (lePath))
        .arg (voice, leName) .toAscii ();;

      // MP3 holen
      QHttp http ("TODO_IP_JEEDOM");;
      ::connect (& http, SIGNAL (erledigt (bool)), & loop, SLOT (quit ()));;

      
      C.ontentData + = "akey = TODO_API_JEEDOM & text =" + QUrl::toPercentEncoding (Text);;

      
      Header.addValue ("Host", "TODO_IP_JEEDOM");;

      Header.setC.ontentLength (C.ontentData.length ());;
      Header.setRequest ("GET", "/core/a/tts.php?akey = TODO_API_JEEDOM & text = "+ QUrl::toPercentEncoding (Text), 1, 1);;

      http.request (Header, C.ontentData);;
      loop.exec ();;

      QFile-Datei (lePath);;
      !le.open (QIODevice::
      {
        LogError ("Sounddatei kann nicht zum Schreiben geöffnet werden : "+ lePath);;
        return QByteArray ();;
      }
      le.write (http.readAll ());;
      le.close ();;
      .arg (voice, leName) .toAscii ();;
    }

> **Notiz**
>
> Vergessen Sie nicht, die TODOs zu ersetzen

Aktivieren Sie dann die tts jeedom, indem Sie die Datei ändern
/home/ojn/OpenJabNab/server/tts/tts.pro durch Hinzufügen von jeedom zu SUBDIRS :

    TEMPLATE = Unterverzeichnisse
    

Neu komlieren 
-------------

    cd / home / ojn / OpenJabNab / server
    
    machen

Änderung des tts-Dienstes 
------------------------------

Bearbeiten Sie die Datei /home/ojn/OpenJabNab/server/bin/ openjabnab.ini
und ändern :

    TTS = Acapela

Von

    TTS = Jeedom

Relaunch von Openjabnab 
--------------------

Am einfachsten ist es, den C.omputer neu zu starten, um openjabnab neu zu starten

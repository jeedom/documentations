Hier ist ein Tutorial, wie man openjabnab lokal installiert (auf einem RPI oder
humming)

> **Notiz**
>
> Dieses Tutorial ist weitgehend inspiriert von
> [dieser hier](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

Installation von Abhängigkeiten 
============================

Sobald das in SSH installierte System fertig ist :

    apt-get update
    apt-get dist-upgrade
    apt-get install ssh
    apt-get install apache2 php5 php5-mysql libapache2-mod-php5
    a2enmod umschreiben
    apt-get install make
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
              inet addr:192.168.0.162  Bcast:192.168.0.255 Maske:255.255.255.0
              inet6 addr: fe80::d263:b4ff:fe00:5498/64 Geltungsbereich:Link
              UP BROADCAST RUNNING MULTICAST MTU:1500 metrisch:1
              RX-Pakete:10721 Fehler:0 fiel:0 Überläufe:0 Frame:0
              TX-Pakete:6477 Fehler:0 fiel:0 Überläufe:0 Träger:0
              collisions:0 txqueuelen:1000
              RX-Bytes:2032942 (1.9 MiB) TX-Bytes:1230703 (1.1 MiB)

Hier lautet die IP-Adresse 192.168.0.162.

> **Notiz**
>
> Für den Rest des Tutorials werde ich diese IP verwenden, das ist es natürlich
> Ersetzen Sie je nachdem, welche Sie tatsächlich

Bearbeiten Sie dann die Datei /etc/resolv.conf

    vim /etc/resolv.conf

Und hinzufügen :

    Nameserver 192.168.0.162

DNS-Konfiguration 
====================

Bearbeiten Sie die Datei /etc/bind/named.conf.local

    cd / etc / bind /
    vim named.conf.local

Und hinzufügen :

    Bereich "raspberry.pi""{
     Mastertyp;
     Datei "/etc/bind/db.raspberry.pi";
    };;
    Zone "0.168.192.in-addr.arpa"{
     Mastertyp;
     Datei "/etc/bind/db.192.168.0.inv";
    };;

Erstellen Sie die Datei db.raspberry.pi

vim db.raspberry.pi ---

Und steck es ein :

    $TTL 604800
    @ IN SOA ojn.raspberry.pi. root.raspberry.pi. (
     1; Seriennummer
     604800; Aktualisieren
     86400; Wiederholen Sie den Vorgang
     2419200; Läuft ab
     604800); Negative Cache-TTL
    ;;
    @ IN NS ojn.raspberry.pi.
    ojn IN A 192.168.0.162
    192.168.0.162 IN A 192.168.0.162

Erstellen Sie dann diese Datei db.192.168.0.inv

    vim db.192.168.0.inv

Und setzen :

    $TTL 604800
    @ IN SOA ojn.raspberry.pi. root.localhost. (
     2; Seriennummer
     604800; Aktualisieren
     86400; Wiederholen Sie den Vorgang
     2419200; Läuft ab
     604800); Negative Cache-TTL
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
    PING ojn.raspberry.ft (192.168.0.162) 56 (84) Datenbytes.
    64 Bytes von ojn.raspberry.ft (192.168.0.162): icmp_seq = 1 ttl = 64 time = 0.069 ms
    64 Bytes von ojn.raspberry.ft (192.168.0.162): icmp_seq = 2 ttl = 64 time = 0.067 ms
    64 Bytes von ojn.raspberry.ft (192.168.0.162): icmp_seq = 3 ttl = 64 time = 0.059 ms
    64 Bytes von ojn.raspberry.ft (192.168.0.162): icmp_seq = 4 ttl = 64 time = 0.068 ms
    ^C
    --- ojn.raspberry.pi ping statistics ---
    4 Pakete gesendet, 4 empfangen, 0% Paketverlust, Zeit 3000ms
    rtt min / avg / max / mdev = 0,059 / 0,065 / 0,069 / 0.010 ms

> **Notiz**
>
> Sie müssen Strg + C drücken, um den Ping zu beenden

Aus Sicherheitsgründen werden wir auch die Auflösung in / etc / hosts hinzufügen :

    vim / etc / hosts

Und hinzufügen :

    192.168.0.162 ojn.raspberry.pi

Openjabnab-Wiederherstellung 
=========================

Wir werden zuerst den Benutzer erstellen :

    Adduser ojn
    cd / home / ojn

Dann klone openjabnab :

    git clone https://github.com/OpenJabNab/OpenJabNab.git
    chown -R ojn:ojn / home / ojn / OpenJabNab /
    chmod 0777 / home / ojn / OpenJabNab / http-wrapper / ojn_admin / include

Webserverkonfiguration 
============================

Tun :

    cd / etc / apache2 / sites-available /
    vim ojn.conf

Und hinzufügen :

    <VirtualHost *:80>
            DocumentRoot / home / ojn / OpenJabNab / http-wrapper /
            Servername ojn.raspberry.pi
             <Directory />
                     FollowSymLinks-Optionen
                    AllowOverride Keine
             </Directory>
             <Directory /home/ojn/OpenJabNab/http-wrapper/>
                     FollowSymLinks MultiViews Indexoptionen
                     AllowOverride all
                    Bestellung erlauben, verweigern
                     Erlaube von allen
             </Directory>
    </VirtualHost>

Aktivieren Sie dann die Site :

    a2ensite ojn

Sie müssen dann das openjabnab-Serververzeichnis autorisieren :

    vim /etc/apache2/apache2.conf

Und hinzufügen :

    <Directory /home/ojn/>
            FollowSymLinks-Indexoptionen
            AllowOverride Keine
            Benötigen Sie alle gewährt
    </Directory>

Dann starten wir Apache neu :

    apache2 reload service

Installation von openjabnab 
=========================

Tun :

    su ojn
    cd / home / ojn / OpenJabNab / server
    qmake -r
    make

> **Notiz**
>
> Dieser Schritt kann sehr lang sein (bis zu 45 Minuten)

Openjabnab-Konfiguration 
==========================

Tun :

    cp openjabnab.ini-dist bin / openjabnab.ini
    vim bin / openjabnab.ini

Und ändern Sie die folgenden Zeilen :

    StandAloneAuthBypass = true
    AllowAnonymousRegistration = true
    AllowUserManageBunny = true
    AllowUserManageZtamp = true

Und alle ersetzen *my.domain.com* Von *ojn.raspberry.pi*

Openjabnab-Webserverkonfiguration 
=======================================

In Ihrem Beitrag müssen Sie die Datei bearbeiten
C:\\ Windows \\ System32 \\ Treiber \\ usw. und hinzufügen :

    192.168.0.162 ojn.raspberry.pi

Dann mach weiter :

    http://ojn.raspberry.pi/ojn_admin/install.php

Alles validieren

Serverstart 
====================

Jetzt ist alles fertig, alles was bleibt ist, den Server zu starten :

    su ojn
    cd ~ / OpenJabNab / server / bin
    ./openjabnab

Jetzt geh zu :

    http://ojn.raspberry.pi/ojn_admin/index.php

> **Notiz**
>
> Wenn alles in Ordnung ist, sollten Sie die Statistiken haben, die in angezeigt werden
> bas

Kaninchenkonfiguration 
======================

Um das Kaninchen zu konfigurieren, ist es ganz einfach, Sie müssen es herausziehen
Schließen Sie es dann wieder an und drücken Sie die Taste. Er muss
normalerweise hellblau.

Dann sollten Sie mit Ihrem PC ein neues WLAN-Netzwerk haben
nabaztagXX, stellen Sie eine Verbindung her, indem Sie 192.168.0.1 eingeben.

Geben Sie einmal Ihre WLAN-Konfiguration und Informationen ein
folgenden :

    DHCP aktiviert : no
    Lokale Maske : 255.255.255.0
    Lokales Gateway : 192.168.0.1 oder 192.168.0.254 (abhängig von Ihrem Netzwerk)
    DNS-Server : 192.168.0.162

Openjabnab Server Überwachung und Autostart 
====================================================

Wie Sie feststellen werden, wenn Sie sich vom Server abmelden
openjabnab bleibt stehen. Sie müssen also ein kleines Skript hinzufügen
Überwachen Sie den Server und starten Sie ihn automatisch. Tun :

    cd / home / ojn
    vim checkojn.sh

Und hinzufügen :

    if [$ (ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0]; dann
        su ojn; cd / home / ojn / OpenJabNab / server / bin; nohup ./ openjabnab >> / dev / null 2> & 1 &
    fi

Dann mach es :

    chmod + x checkojn.sh

Wir müssen jetzt das Skript beim Start und eine Überprüfung hinzufügen
zum Beispiel alle 15 min :

    crontab -e

Und hinzufügen :

    @reboot /home/ojn/checkojn.sh
    */ 15 * * * * /home/ojn/checkojn.sh

> **Wichtig**
>
> Es ist absolut notwendig, es in die Wurzel crontab zu legen, wenn Sie sind
> wieder mit Benutzer ojn do ctrl + D

Konfiguration Ihres Kaninchens in Openjabnab 
============================================

Weiter :

    http://ojn.raspberry.pi/ojn_admin/index.php

Sie müssen haben :

![installation.openjabnab](images/installation.openjabnab.PNG)

Sie müssen jetzt ein Konto erstellen, indem Sie auf "Erstellen" klicken
Benutzer :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

Geben Sie die angeforderten Informationen ein und melden Sie sich an :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

Sobald die Verbindung hergestellt ist, gehen Sie zum Server :

![installation.openjabnab4](images/installation.openjabnab4.PNG)

Gehen Sie dann nach unten, um die Liste der verbundenen Kaninchen zu finden und sich zu erholen
seine Mac-Adresse :

![installation.openjabnab5](images/installation.openjabnab5.PNG)

Gehen Sie dann zum Konto und füllen Sie das Feld Name und Mac-Adresse des
Kaninchen dann validieren :

![installation.openjabnab6](images/installation.openjabnab6.PNG)

Sie finden Ihr Kaninchen jetzt auf der Kaninchenseite, klicken Sie darauf
um seine Konfiguration zu öffnen :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

Jetzt müssen Sie die lila API aktivieren und öffentlich übergeben,
Hier finden Sie auch den lila API-Schlüssel, der Ihnen dienen wird
für Jeedom :

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

    192.168.0.162 ojn.raspberry.pi

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
    # Automatisch generiert von qmake (2.01a) Sa Jan. 19 19:10:01 2008
    ######################################################################

    TEMPLATE = lib
    CONFIG - = Debug
    CONFIG + = qt Release Plugin
    QT + = Netzwerk-XML
    QT - = Mistel
    INCLUDEPATH += . ../../server ../../lib
    ZIEL = tts_jeedom
    DESTDIR = ../../bin/tts
    DEPENDPATH += . ../../server ../../lib
    LIBS + = -L ../../ bin / -lcommon
    MOC_DIR = ./tmp/moc
    OBJECTS_DIR = ./tmp/obj
    win32 {
      QMAKE_CXXFLAGS_WARN_ON + = -WX
    }
    Unix {
      QMAKE_LFLAGS + = -Wl, -rpath, \ '\ $$ ORIGIN \'
      QMAKE_CXXFLAGS + = -Fehler
    }

    # Input
    HEADERS + = tts_jeedom.h
    QUELLEN + = tts_jeedom.cpp

-   tts\_jeedom.h

<!-- -->

    #ifndef _TTSACAPELA_H_
    #definiere _TTSACAPELA_H_

    #einschließen <QHttp>
    #einschließen <QMultiMap>
    #einschließen <QTextStream>
    #einschließen <QThread>
    #include "ttsinterface.h"

    Klasse TTSJeedom : öffentliches TTSInterface
    {
      Q_OBJECT
      Q_INTERFACES (TTSInterface)

    public:
      TTSJeedom();;
      virtual ~ TTSJeedom ();
      QByteArray CreateNewSound (QString, QString, bool);

    private:
    };;

    #endif

-   tts\_jeedom.cpp

<!-- -->

    #einschließen <QDateTime>
    #einschließen <QUrl>
    #einschließen <QCryptographicHash>
    #einschließen <QMapIterator>
    #include "tts_jeedom.h"
    #include "log.h"
    #einschließen <QNetworkReply>
    #einschließen <QNetworkRequest>
    #einschließen <QNetworkAccessManager>

    Q_EXPORT_PLUGIN2 (tts_jeedom, TTSJeedom)

    TTSJeedom::TTSJeedom():TTSInterface ("jeedom", "Jeedom")
    {
      voiceList.insert ("fr", "fr");
    }

    TTSJeedom::~TTSJeedom()
    {
    }

    QByteArray TTSJeedom::CreateNewSound (QString-Text, QString-Stimme, bool forceOverwrite)
    {
      QEventLoop-Schleife;
      if(!voiceList.contains (Stimme))
        Stimme = "fr";
      // Ausgabeordner prüfen (und ggf. erstellen)
      QDir outputFolder = ttsFolder;
      if(!outputFolder.exists (voice))
        outputFolder.mkdir (Stimme);

      if(!outputFolder.cd (Stimme))
      {
        LogError (QString ("TTS-Ordner kann nicht erstellt werden : % 1 "). Arg (ttsFolder.absoluteFilePath (voice)));
        return QByteArray ();
      }

      // Dateiname berechnen
      QString fileName = QCryptographicHash::Hash (Text.toAscii (), QCryptographicHash::Md5) .toHex (). Append (". Mp3");
      QString filePath = outputFolder.absoluteFilePath (Dateiname);

      if(!forceOverwrite && QFile::existiert (filePath))
        return ttsHTTPUrl.arg (voice, fileName) .toAscii ();

      // MP3 holen
      QHttp http ("TODO_IP_JEEDOM");
      QObject::connect (& http, SIGNAL (erledigt (bool)), & loop, SLOT (quit ()));

      QByteArray ContentData;
      ContentData + = "apikey = TODO_API_JEEDOM & text =" + QUrl::toPercentEncoding (Text);

      QHttpRequestHeader Header;
      Header.addValue ("Host", "TODO_IP_JEEDOM");

      Header.setContentLength (ContentData.length ());
      Header.setRequest ("GET", "/core/api/tts.php?apikey = TODO_API_JEEDOM & text = "+ QUrl::toPercentEncoding (Text), 1, 1);

      http.request (Header, ContentData);
      loop.exec ();

      QFile-Datei (filePath);
      if (!file.open (QIODevice::WriteOnly))
      {
        LogError ("Sounddatei kann nicht zum Schreiben geöffnet werden : "+filePath);;
        return QByteArray ();
      }
      file.write (http.readAll ());
      file.close ();
      return ttsHTTPUrl.arg (voice, fileName) .toAscii ();
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

    cd / home / ojn / OpenJabNab / server
    qmake -r
    make

Änderung des tts-Dienstes 
------------------------------

Bearbeiten Sie die Datei /home/ojn/OpenJabNab/server/bin/openjabnab.ini
und ändern :

    TTS = Acapela

Par

    TTS = Jeedom

Relaunch von Openjabnab 
--------------------

Am einfachsten ist es, den Computer neu zu starten, um openjabnab neu zu starten

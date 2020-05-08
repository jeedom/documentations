Here is a tutorial on how to install openjabnab locally (on an rpi or
humming)

> **Note**
>
> This tutorial is largely inspired by
> [this one](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

Installation of dependencies 
============================

Once the system installed in SSH done :

    apt-get update
    apt-get dist-upgrade
    apt-get install ssh
    apt-get install apache2 php5 php5-mysql libapache2-mod-php5
    a2enmod rewrite
    apt-get install make
    apt-get install build-essential
    apt-get install libqt4-dev --fix-missing
    apt-get install qt4-dev-tools
    apt-get install bind9
    apt-get install git

Network configuration 
=======================

Then you need to get the system's IP address :

    ifconfig

The result is :

    eth0 Link encap:Ethernet HWaddr d0:63:b4:00:54:98
              inet addr:  Bcast:192.168.0.255 Mask:255.255.255.0
              inet6 addr: fe80::d263:b4ff:fe00:5498/64 Scope:Link
              UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
              RX packets:10721 errors:0 dropped:0 overruns:0 frame:0
              TX packets:6477 errors:0 dropped:0 overruns:0 carrier:0
              collisions:0 txqueuelen:1000
              RX bytes:2032942 (1.9 MiB) TX bytes:1230703 (1.1 MiB)

Here the IP address is 192.168.0.162.

> **Note**
>
> For the rest of the tutorial I will use this IP, it is of course
> 



    

 :

    

 
====================



    
    

 :

    "{
     
     
    }
    "{
     
     
    }



. ---

 :

    $TTL 604800
    @ IN SOA . root.raspberry.pi. (
     
     
     
     
     
    
    @ IN NS .
    
    



    

 :

    $TTL 604800
    @ IN SOA . root.localhost. (
     
     
     
     
     
    
    @ IN NS .
    .

> **Important**
>
> 
> 

 :

    

 :

    

 :

    :
    ...
    ..: .
    ..: .
    ..: .
    ..: .
    ^C
    ---  ping statistics ---
    
    .

> **Note**
>
> 

 :

    

 :

    

 
=========================

 :

    
    

 :

    git clone https://github.com/OpenJabNab/OpenJabNab.git
    :
    

 
============================

 :

    
    

 :

    <VirtualHost *:80>
            
            
             <Directory />
                     
                    
             </Directory>
             <Directory /home/ojn/OpenJabNab/http-wrapper/>
                     
                     
                    
                     
             </Directory>
    </VirtualHost>

 :

    

 :

    

 :

    <Directory /home/ojn/>
            
            
            
    </Directory>

 :

    

 
=========================

 :

    
    
    
    make

> **Note**
>
> 

 
==========================

 :

    .
    

 :

    
    
    
    

 **  **

 
=======================================


C: :

    

 :

    http:///ojn_admin/install.php



 
====================

 :

    
    
    ./openjabnab

 :

    http:///ojn_admin/index.php

> **Note**
>
> 
> bas

 
======================


. 
.


.


 :

     : no
     : 255.255.255.0
     : 192.168.0..
     : 

 
====================================================


. 
.  :

    
    

 :

    if [$ (ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0]; then
         .
    fi

Then do :

    


 :

    crontab -e

 :

    @reboot 
    * * * * * 

> **Important**
>
> 
> 

 
============================================

Go to :

    http:///ojn_admin/index.php

You must have :

![installation.openjabnab](images/installation.openjabnab.PNG)


 :

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


 :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

 
=======================



. 

    

 :

    


:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

 !!!!!

 
======================




> **Note**
>
> 
> 
> 

 
----------------------

 :

    

 :

-   

<!-- -->

    ######################################################################
    # .. 19 19:10:01 2008
    ######################################################################

    TEMPLATE = lib
    CONFIG - = debug
    CONFIG + = qt release plugin
    QT + = network xml
    QT - = mistletoe
    INCLUDEPATH += . ../../server ../../lib
    TARGET = tts_jeedom
    DESTDIR = ../../bin/tts
    DEPENDPATH += . ../../server ../../lib
    LIBS + = -L ../../ bin / -lcommon
    MOC_DIR = ./tmp/moc
    OBJECTS_DIR = ./tmp/obj
    win32 {
      QMAKE_CXXFLAGS_WARN_ON + = -WX
    }
    unix {
      QMAKE_LFLAGS + = -Wl, -rpath, \ '\ $$ ORIGIN \'
      QMAKE_CXXFLAGS + = -Werror
    }

    # Input
    HEADERS + = tts_jeedom.h
    SOURCES + = tts_jeedom.cpp

-   tts\_jeedom.h

<!-- -->

    #ifndef _TTSACAPELA_H_
    #define _TTSACAPELA_H_

    #include <QHttp>
    #include <QMultiMap>
    #include <QTextStream>
    #include <QThread>
    #include "ttsinterface.h"

    class TTSJeedom : public TTSInterface
    {
      Q_OBJECT
      Q_INTERFACES (TTSInterface)

    public:
      TTSJeedom()
      virtual ~ TTSJeedom ();
      QByteArray CreateNewSound (QString, QString, bool);

    private:
    }

    #endif

-   tts\_jeedom.cpp

<!-- -->

    #include <QDateTime>
    #include <QUrl>
    #include <QCryptographicHash>
    #include <QMapIterator>
    #include "tts_jeedom.h"
    #include "log.h"
    #include <QNetworkReply>
    #include <QNetworkRequest>
    #include <QNetworkAccessManager>

    Q_EXPORT_PLUGIN2 (tts_jeedom, TTSJeedom)

    TTSJeedom::TTSJeedom():TTSInterface ("jeedom", "Jeedom")
    {
      voiceList.insert ("fr", "fr");
    }

    TTSJeedom::~TTSJeedom()
    {
    }

    QByteArray TTSJeedom::CreateNewSound (QString text, QString voice, bool forceOverwrite)
    {
      QEventLoop loop;
      if(!voiceList.contains (voice))
        voice = "fr";
      // Check (and create if needed) output folder
      QDir outputFolder = ttsFolder;
      if(!outputFolder.exists (voice))
        outputFolder.mkdir (voice);

      if(!outputFolder.cd (voice))
      {
        LogError (QString ("Cant create TTS Folder : % 1 "). Arg (ttsFolder.absoluteFilePath (voice)));
        return QByteArray ();
      }

      // Compute fileName
      QString fileName = QCryptographicHash::hash (text.toAscii (), QCryptographicHash::Md5) .toHex (). Append (". Mp3");
      QString filePath = outputFolder.absoluteFilePath (fileName);

      if(!forceOverwrite && QFile::exists (filePath))
        return ttsHTTPUrl.arg (voice, fileName) .toAscii ();

      // Fetch MP3
      QHttp http ("TODO_IP_JEEDOM");
      QObject::connect (& http, SIGNAL (done (bool)), & loop, SLOT (quit ()));

      QByteArray ContentData;
      ContentData + = "apikey = TODO_API_JEEDOM & text =" + QUrl::toPercentEncoding (text);

      QHttpRequestHeader Header;
      Header.addValue ("Host", "TODO_IP_JEEDOM");

      Header.setContentLength (ContentData.length ());
      Header.setRequest ("GET", "/core/api/tts.php?apikey = TODO_API_JEEDOM & text = "+ QUrl::toPercentEncoding (text), 1, 1);

      http.request (Header, ContentData);
      loop.exec ();

      QFile file (filePath);
      if (!file.open (QIODevice::WriteOnly))
      {
        LogError ("Cannot open sound file for writing : "+filePath)
        return QByteArray ();
      }
      file.write (http.readAll ());
      file.close ();
      return ttsHTTPUrl.arg (voice, fileName) .toAscii ();
    }

> **Note**
>
> Don't forget to replace the TODOs

Then activate the tts jeedom by modifying the file
/home/ojn/OpenJabNab/server/tts/tts.pro by adding jeedom to SUBDIRS :

    TEMPLATE = subdirs
    SUBDIRS = acapela google jeedom

Recompile 
-------------

    
    
    make

Modification of the tts service 
------------------------------

Edit the file /home/ojn/OpenJabNab/server/bin/openjabnab.ini
and change :

    TTS = acapela

Par

    TTS = jeedom

Relaunch of openjabnab 
--------------------

The easiest way is to restart the machine to restart openjabnab

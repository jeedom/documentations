
humming)

> **Note**
>
> 
> [](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

 
============================

 :

    
    
    
    
    
    
    
    
    
    
    

 
=======================

 :

    ifconfig

 :

    ::63:b4:00:54:98
              :192.168.0.162  Bcast:.:
              : fe80::d263::fe00::Link
              ::1
              :::::0
              :::::0
              collisions::1000
              :.:.

.

> **Note**
>
> 
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
    @ IN SOA ojn.raspberry.pi. root.raspberry.pi. (
     
     
     
     
     
    
    @ IN NS ojn.raspberry.pi.
    
    



    

 :

    $TTL 604800
    @ IN SOA ojn.raspberry.pi. root.localhost. (
     
     
     
     
     
    
    @ IN NS ojn.raspberry.pi.
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
    --- ojn.raspberry.pi ping statistics ---
    
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

    .ini-dist bin / openjabnab.ini
    vim bin / openjabnab.ini

And change the following lines :

    StandAloneAuthBypass = true
    AllowAnonymousRegistration = true
    AllowUserManageBunny = true
    AllowUserManageZtamp = true

And replace all *my.domain.com* by *ojn.raspberry.pi*

Openjabnab web server configuration 
=======================================

On your post you must edit the file
C:\\ Windows \\ System32 \\ drivers \\ etc and add :

    

Then go on :

    http://ojn.raspberry.pi/ojn_admin/install.php

Validate everything

Server launch 
====================

Now everything is ready, all you have to do is start the server :

    
    cd ~ / OpenJabNab / server / bin
    ./openjabnab

Now go to :

    http://ojn.raspberry.pi/ojn_admin/index.php

> **Note**
>
> If everything is good you should have the statistics that appear in
> bas

Rabbit configuration 
======================

To configure the rabbit it's quite simple, you must unplug it
then reconnect it, stay press its button. He must
normally light blue.

Then with your PC you should have a new wifi network
nabaztagXX, connect to it by typing 192.168.0.1.

Once on enter your wifi configuration and information
following :

    DHCP enabled : no
    Local Mask : 
    Local gateway : .1 or 192.168.0.254 (depending on your network)
    DNS server : 192.168.0.162

Openjabnab server monitoring and auto start 
====================================================

As you will notice if you log off the server
openjabnab stops. So you have to add a little script to
monitor the server and start it automatically.  :

    
    vim checkojn.sh

And add in :

     |  |  | 
        su ojn; cd / home / ojn / OpenJabNab / server / bin; nohup ./ openjabnab >> / dev / null 2> & 1 &
    fi

Then do :

    chmod + x checkojn.sh

Now add the script at startup and a verification
every 15 min for example :

    crontab -e

 :

    @reboot /home/ojn/checkojn.sh
    */ 15 * * * * /home/ojn/checkojn.sh

> **Important**
>
> It is absolutely necessary to put it in the root crontab, if you are
> again with user ojn do ctrl + D

Configuration of your rabbit in openjabnab 
============================================

Go to :

    http://ojn.raspberry.pi/ojn_admin/index.php

You must have :

![installation.openjabnab](images/installation.openjabnab.PNG)

You must now create an account by clicking on create a
user :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

Fill in the requested information and log in :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

Once connected go to server :

![installation.openjabna](images/installation.openjabnab4.PNG)

Then go down to find the list of connected rabbits and recover
his mac address :

![installation.openjabnab5](images/installation.openjabnab5.PNG)

Then go to account and fill in the name and mac address field of the
rabbit then validate :

![installation.openjabnab6](images/installation.openjabnab6.PNG)

You will now find your rabbit on the rabbit page, click on it
to open its configuration :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

Now you need to activate the purple API and pass it in public,
it is also here that you will find the purple api key which will serve you
for Jeedom :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

Below you find the list of plugins, don't forget to add them
activate (TTS type or ear control) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

Jeedom configuration 
=======================

The configuration in Jeedom is quite simple, you must first of all
connect in SSH to Jeedom (if you have a Jeedom box the identifiers
are in the installation doc). Then edit the / etc / hosts file

    

And add the following line :

    

Then everything happens in Jeedom, after creating your rabbit here
the configuration to put:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

Here is your rabbit now has its own local burrow !!!!!

Put the TTS locally 
======================

Everything is local except the TTS which goes through the Acapela site but it is
possible by modifying some files to pass it locally

> **Note**
>
> I will consider that oenjabnab is installed in
> / home / ojn / OpenJabNab and you are logged in as
> the openjabnab user, here ojn

Creation of tts jeedom 
----------------------

You need to create a jeedom folder in servver / tts :

    mkdir / home / ojn / OpenJabNab / server / tts / jeedom

Then you have to make 3 files :

-   jeedom.pro

<!-- -->

    ######################################################################
    # Automatically generated by qmake (2.01a) Sat Jan. 19 19:10:01 2008
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

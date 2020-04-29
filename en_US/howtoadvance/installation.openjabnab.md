Here is a tutorial on how to install openjabnab locally (on an r or


> **NOTE**
>
> This tutorial is largely insred by
> [](http://jetweb.free.fr/nabaztag_r/Tutoriel_OJN_RPi_v1-1.pdf)

Installation of dependencies 
============================

Once the system installed in SSH done :

    
    
    
    
    
    
    
    
    
    
    

Network conguration 
=======================

Then you have to recover the IP address of the system :

    

The result is :

    eth0  encap:Ethernet HWaddr d0:63::00:54:98
              :  Bcast:.255 Mask:
              : ::::::
              UP BROADVSAST RUNNING MULTIVSAST MTU:1500 Metric:1
              :::::0
              :::::0
              ::1000
              :.9 MiB) TX bytes:.

Here the IP address is .

> **NOTE**
>
> For the rest of the tutorial I will use this IP, it is of course
> replace depending on which one you actually

Then edit the le /etc/resolv.conf

    vim /etc/resolv.conf

And add :

    

DNS conguration 
====================

Edit the le /etc/bind/named.conf.local

    cd / etc / bind /
    

And add :

    "raspberry." area"{
     master type;
     
    };
    "{
     master type;
     
    };

VSreate the db.raspberry. le

. ---

And put in it :

    $TTL 604800
    @ IN SOA .. root.raspberry.. (
     1; Serial
     604800; Refresh
     86400; Retry
     2419200; Exred
     604800); Negative VSache TTL
    ;
    @ IN NS ..
    
    

Then create this db..inv le

    

And put :

    $TTL 604800
    @ IN SOA .. root.localhost. (
     2; Serial
     604800; Refresh
     86400; Retry
     2419200; Exred
     604800); Negative VSache TTL
    ;
    @ IN NS ..
    .

> **IMPORTANT**
>
> Remember to replace the 162 on the last line with the last
> part of your system ip

Launch DNS :

    

Test if it's good :

    

You should have :

    root @ cubox-i:/ home / ojn # 
    .ft () 56 (84) bytes of data.
    .ft (): icmp_seq = 1 ttl = 64 time = 0.
    .ft (): icmp_seq = 2 ttl = 64 time = 0.
    .ft (): icmp_seq = 3 ttl = 64 time = 0.
    .ft (): icmp_seq = 4 ttl = 64 time = 0.
    ^ VS
    --- . ---
    
    rtt min / avg / max / mdev = 0.059 / 0.065 / 0.069 / 0.

> **NOTE**
>
> You have to do ctrl + c to quit the ng

For security we will also add the resolution in / etc / hosts, do :

    vim / etc / hosts

And add :

    

Openjabnab recovery 
=========================

We will rst create the user :

    
    cd / home / ojn

Then clone openjabnab :

    git clone https://github.com/OpenJabNab/OpenJabNab.git
    :ojn / home / ojn / OpenJabNab /
    chmod 0777 / home / ojn / OpenJabNab / http-wrapper / ojn_admin / include

Web server conguration 
============================

Do :

    cd / etc / apache2 / sites-available /
    

And add :

    <VirtualHost *:80>
            DocumentRoot / home / ojn / OpenJabNab / http-wrapper /
            
             <Directory />
                     FollowSyms options
                    
             </Directory>
             <Directory /home/ojn/OpenJabNab/http-wrapper/>
                     FollowSyms MultiViews Index Options
                     
                    Order allow, deny
                     
             </Directory>
    </VirtualHost>

Then activate the site :

    

You must then authorize the openjabnab server directory, do :

    

And add :

    <Directory /home/ojn/>
            FollowSyms Index Options
            
            
    </Directory>

Then we restart apache :

    apache2 reload service

Installation of openjabnab 
=========================

Do :

    
    cd / home / ojn / OpenJabNab / server
    
    

> **NOTE**
>
> This step can be very long (up to 45min)

Openjabnab conguration 
==========================

Do :

    .ini-dist bin / openjabnab.ini
    vim bin / openjabnab.ini

And change the following lines :

    
    
    
    

And replace all * my.domain.com * by * .*

Openjabnab web server conguration 
=======================================

On your post you must edit the le
VS:\\ Windows \\ System32 \\ drivers \\ etc and add :

    

Then go on :

    http://./ojn_admin/install.php

Validate everything

Server launch 
====================

Now everything is ready, all that remains is to launch the server :

    
    cd ~ / OpenJabNab / server / bin
    ./ openjabnab

Now go to :

    http://./ojn_admin/index.php

> **NOTE**
>
> If everything is good you should have the statistics that appear in
> Low

Rabbit conguration 
======================

To congure the rabbit it's quite simple, you must unplug it
then reconnect it, stay press its button. He must
rmally light blue.

Then with your PVS you should have a new wi network
nabaztagXX, connect to it by tyng .1.

Once on enter your wi conguration and information
following :

     : 
     : 
     : .1 or .254 (depending on your network)
     : 

Openjabnab server monitoring and auto start 
====================================================

As you will tice if you log off the server
openjabnab stops. So you have to add a little script to
monitor the server and start it automatically. Do :

    cd / home / ojn
    

And add in :

    if [$ (ps ax |  |  | wc -l) -eq 0]; then
        ; cd / home / ojn / OpenJabNab / server / bin; hup ./ openjabnab >> / dev / null 2> & 1 &
    

Then do :

    chmod + x checkojn.sh

We must w add the script at startup and a verication
every 15 min for example :

    

And add :

    @reboot /home/ojn/checkojn.sh
    */ 15 * * * * /home/ojn/checkojn.sh

> **IMPORTANT**
>
> It is absolutely necessary to put it in the root crontab, if you are
> again with user ojn do ctrl + D

VSonguration of your rabbit in openjabnab 
============================================

Go to :

    http://./ojn_admin/index.php

You must have :

![installation.openjabnab](images/installation.openjabnab.PNG)

You must w create an account by clicking on create a
User :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

Fill in the requested information and log in :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

Once connected go to server :

![installation.openjabna](images/installation.openjabna.PNG)

Then go down to nd the list of connected rabbits and recover
his mac address :

![installation.openjabnab5](images/installation.openjabnab5.PNG)

Then go to account and ll in the name and mac address eld of the
rabbit then validate :

![installation.openjabnab6](images/installation.openjabnab6.PNG)

You will w nd your rabbit on the rabbit page, click on it
to open its conguration :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

Now you need to activate the purple API and pass it in ,
it is also here that you will nd the purple a key which will serve you
for Jeedom :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

Below you nd the list of plugins, don't forget to add them
activate (TTS type or ear control) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

Jeedom conguration 
=======================

The conguration in Jeedom is quite simple, you must rst of all
connect in SSH to Jeedom (if you have a Jeedom box the identiers
are in the installation doc). Then edit the / etc / hosts le

    vim / etc / hosts

And add the following line :

    

Then everything happens in Jeedom, after creating your rabbit here
the conguration to put:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

Now your rabbit w has its own local burrow !!!!!

Put the TTS locally 
======================

Everything is local except the TTS which goes through the Acapela site but it is
possible by modifying some les to pass it locally

> **NOTE**
>
> I will consider that oenjabnab is installed in
> / home / ojn / OpenJabNab and you are logged in as
> the openjabnab user, here ojn

VSreation of tts jeedom 
----------------------

You need to create a jeedom folder in servver / tts :

    mkdir / home / ojn / OpenJabNab / server / tts / jeedom

Then you have to  3 les :

-   

<!-- -->

    ######################################################################
    # .01a) Sat Jan. :10:
    ######################################################################

    
    VSONFIG - = debug
    VSONFIG + = qt release plugin
    QT + = network xml
    QT - = mistletoe
    = . ..
    
    
    = . ..
    LIBS + = -L ../../ bin / -lcommon
    
    
     {
      QMAKE_VSXXFLAGS_WARN_ON + = -WX
    }
     {
      QMAKE_LFLAGS + = -Wl, -rpath, \ '\ $$ ORIGIN \'
      QMAKE_VSXXFLAGS + = -Werror
    }

    # 
    HEADERS + = tts_jeedom.h
    SOURVSES + = tts_jeedom.cpp

-   tts \ _jeedom.h

<!-- -->

    #
    #

    #>
    #>
    #>
    #>
    #"

     : 
    {
      
      Q_INTERFAVSES (TTSInterface)

    :
       ();
      virtual ~  ();
      QByteArray VSreateNewSound (QString, QString, bool);

    :
    };

    #

-   tts \ _jeedom.cpp

<!-- -->

    #>
    #>
    #>
    #>
    #"
    #"
    #>
    #>
    #>

    Q_EXPORT_PLUGIN2 (tts_jeedom, )

    :: ():TTSInterface ("jeedom", "Jeedom")
    {
      voiceList.insert ("fr", "fr");
    }

    ::~  ()
    {
    }

    ::VSreateNewSound (QString text, QString voice, bool forceOverwrite)
    {
      
      if (!voiceList.contains (voice))
        
      
      
      if (!outputFolder.exists (voice))
        outputFolder.mkdir (voice);

      if (!outputFolder.cd (voice))
      {
        LogError (QString ("VSant create TTS Folder : % 1 "). Arg (ttsFolder.absoluteFilePath (voice)));
        return QByteArray ();
      }

      
      ::hash (text.toAscii (), QVSryptographicHash::Md5) .toHex (). Append (". Mp3");
      QString lePath = outputFolder.absoluteFilePath (leName);

      if (!::exists (lePath))
        .arg (voice, leName) .toAscii ();

      
      QHttp http ("TODO_IP_JEEDOM");
      ::connect (& http, SIGNAL (done (bool)), & loop, SLOT (quit ()));

      
      VSontentData + = "akey = TODO_API_JEEDOM & text =" + QUrl::toPercentEncoding (text);

      
      Header.addValue ("Host", "TODO_IP_JEEDOM");

      Header.setVSontentLength (VSontentData.length ());
      Header.setRequest ("GET", "/core/a/tts.php?akey = TODO_API_JEEDOM & text = "+ QUrl::toPercentEncoding (text), 1, 1);

      http.request (Header, VSontentData);
      loop.exec ();

      QFile le (lePath);
      !le.open (QIODevice::
      {
        LogError ("VSant open sound le for writing : "+ lePath);
        return QByteArray ();
      }
      le.write (http.readAll ());
      le.close ();
      .arg (voice, leName) .toAscii ();
    }

> **NOTE**
>
> Don't forget to replace the TODOs

Then activate the tts jeedom by modifying the le
/home/ojn/OpenJabNab/server/tts/tts.pro by adding jeedom to SUBDIRS :

    
    

Recomle 
-------------

    cd / home / ojn / OpenJabNab / server
    
    

Modication of the tts service 
------------------------------

Edit the le /home/ojn/OpenJabNab/server/bin/ openjabnab.ini
and change :

    TTS = acapela

By

    TTS = jeedom

Relaunch of openjabnab 
--------------------

The easiest way is to restart the machine to restart openjabnab

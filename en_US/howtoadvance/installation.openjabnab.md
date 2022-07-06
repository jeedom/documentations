# Openjabnab installation

Here is a tutorial on how to install openjabnab locally (on an rpi or humming)

> **NOTE**
>
> This tutorial is largely inspired by [this one](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

# Installation of dependencies

Once the system installed in SSH done :

````
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
````

# Network configuration

Then you have to recover the IP address of the system :

``ifconfig``

The result is :

````
eth0      Link encap:Ethernet  HWaddr d0:63:b4:00:54:98
          inet addr:192.168.0.162  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::d263:b4ff:fe00:5498/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:10721 errors:0 dropped:0 overruns:0 frame:0
          TX packets:6477 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:2032942 (1.9 MiB)  TX bytes:1230703 (1.1 MiB)
````

Here the IP address is 192.168.0.162.

> **NOTE**
>
> For the rest of the tutorial I will use this IP, it is of course to be replaced according to the one you actually have

Then edit the file ``/etc/resolv.conf``

``vim  /etc/resolv.conf``

And add :

``nameserver 192.168.0.162``

# DNS configuration

Edit the file ``/etc/bind/named.conf.local``

````
cd /etc/bind/
vim named.conf.local
````

And add :

````
zone "raspberry.pi"{
 type master;
 file "/etc/bind/db.raspberry.pi";
};
zone "0.168.192.in-addr.arpa"{
 type master;
 file "/etc/bind/db.192.168.0.inv";
};
````

Create the file ``db.raspberry.pi``

``vim db.raspberry.pi ---``

And put in it :

````
$TTL 604800
@ IN SOA ojn.raspberry.pi. root.raspberry.pi. (
 1 ; Serial
 604800 ; Refresh
 86400 ; Retry
 2419200 ; Expire
 604800 ) ; Negative Cache TTL
;
@ IN NS ojn.raspberry.pi.
ojn IN A 192.168.0.162
192.168.0.162 IN A 192.168.0.162
````

Then create this file ``db.192.168.0.inv``

``vim db.192.168.0.inv``

And put :

````
$TTL 604800
@ IN SOA ojn.raspberry.pi. root.localhost. (
 2 ; Serial
 604800 ; Refresh
 86400 ; Retry
 2419200 ; Expire
 604800 ) ; Negative Cache TTL
;
@ IN NS ojn.raspberry.pi.
162 IN PTR ojn.raspberry.pi.
````

> **IMPORTANT**
>
> Remember to replace the 162 on the last line with the last part of your system's ip

Launch DNS :

``/etc/init.d/bind9 start``

Test if it's good :

``ping ojn.raspberry.pi``

You should have :

````
root@cubox-i:/home/ojn# ping ojn.raspberry.pi
PING ojn.raspberry.pi (192.168.0.162) 56(84) bytes of data.
64 bytes from ojn.raspberry.pi (192.168.0.162): icmp_seq=1 ttl=64 time=0.069 ms
64 bytes from ojn.raspberry.pi (192.168.0.162): icmp_seq=2 ttl=64 time=0.067 ms
64 bytes from ojn.raspberry.pi (192.168.0.162): icmp_seq=3 ttl=64 time=0.059 ms
64 bytes from ojn.raspberry.pi (192.168.0.162): icmp_seq=4 ttl=64 time=0.068 ms
^C
--- ojn.raspberry.pi ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3000ms
rtt min/avg/max/mdev = 0.059/0.065/0.069/0.010 ms
````

> **NOTE**
>
> You have to do ctrl + c to quit the ping

For security we will also add the resolution in / etc / hosts, do :

``vim /etc/hosts``

And add :

``192.168.0.162 ojn.raspberry.pi``

# Openjabnab recovery

We will first create the user :

````
adduser ojn
cd /home/ojn
````

Then clone openjabnab :

````
git clone https://github.com/OpenJabNab/OpenJabNab.git
chown -R ojn:ojn /home/ojn/OpenJabNab/
chmod 0777 /home/ojn/OpenJabNab/http-wrapper/ojn_admin/include
````

# Web server configuration

Do :

````
cd /etc/apache2/sites-available/
vim ojn.conf
````

And add :

````
<VirtualHost *:80>
        DocumentRoot /home/ojn/OpenJabNab/http-wrapper/
        ServerName ojn.raspberry.pi
         <Directory />
                 Options FollowSymLinks
                AllowOverride None
         </Directory>
         <Directory /home/ojn/OpenJabNab/http-wrapper/>
                 Options Indexes FollowSymLinks MultiViews
                 AllowOverride all
                Order allow,deny
                 allow from all
         </Directory>
</VirtualHost>
````

Then activate the site :

``a2ensite ojn``

You must then authorize the openjabnab server directory, do :

``vim /etc/apache2/apache2.conf``

And add :

````
<Directory /home/ojn/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
````

Then we restart apache :

``service apache2 reload``

# Installation of openjabnab

Do :

````
su ojn
cd /home/ojn/OpenJabNab/server
qmake -r
make
````

> **NOTE**
>
> This step can be very long (up to 45min)

# Openjabnab configuration

Do :

````
cp openjabnab.ini-dist bin/openjabnab.ini
vim bin/openjabnab.ini
````

And change the following lines :

````
StandAloneAuthBypass = true
AllowAnonymousRegistration = true
AllowUserManageBunny = true
AllowUserManageZtamp = true
````

And replace all *my.domain.com* by *ojn.raspberry.pi*

# Openjabnab web server configuration

On your post you must edit the file ``C:\Windows\System32\drivers\etc`` and add :

``192.168.0.162 ojn.raspberry.pi``

Then go on :

``http://ojn.raspberry.pi/ojn_admin/install.php``

Validate everything

# Server launch

Now everything is ready, all that remains is to launch the server :

````
su ojn
cd ~/OpenJabNab/server/bin
./openjabnab
````

Now go to :

``http://ojn.raspberry.pi/ojn_admin/index.php``

> **NOTE**
>
> If everything is good you should have the statistics that appear below

# Rabbit configuration

To configure the rabbit it's quite simple, you have to unplug it then plug it back in, keep pressing its button. It should normally light up blue.

Then with your PC you should have a new nabaztagXX wifi network, connect to it by typing 192.168.0.1.

Once on enter your wifi configuration and the following information :

````
DHCP enabled : no
Local Mask : 255.255.255.0
Local gateway : 192.168.0.1 ou 192.168.0.254 (en fonction de votre réseau)
DNS server : 192.168.0.162
````

# Openjabnab server monitoring and auto start

As you will notice if you close your session the openjabnab server stops. So add a small script to monitor the server and start it automatically. Do :

````
cd /home/ojn
vim checkojn.sh
````

And add in :

````
if [ $(ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0 ]; then
    su ojn; cd /home/ojn/OpenJabNab/server/bin;nohup ./openjabnab >> /dev/null 2>&1 &
fi
````

Then do :

``chmod +x checkojn.sh``

We must now add the script at startup and a verification every 15 minutes for example :

``crontab -e``

And add :

````
@reboot /home/ojn/checkojn.sh
*/15 * * * * /home/ojn/checkojn.sh
````

> **IMPORTANT**
>
> It is absolutely necessary to put it in the root crontab, if you are still with the user ojn do ctrl + D

# Configuration of your rabbit in openjabnab

Go to :

``http://ojn.raspberry.pi/ojn_admin/index.php``

You must have :

![installation.openjabnab](images/installation.openjabnab.PNG)

You must now create an account by clicking on create user :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

Fill in the requested information and log in :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

Once connected go to server :

![installation.openjabnab4](images/installation.openjabnab4.PNG)

Then go down to find the list of connected rabbits and get their mac address :

![installation.openjabnab5](images/installation.openjabnab5.PNG)

Then go to account and fill in the name and mac field of the rabbit and confirm :

![installation.openjabnab6](images/installation.openjabnab6.PNG)

You will now find your rabbit on the rabbit page, click on it to open its configuration :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

You must now activate the purple API and pass it in public, it is also here that you find the purple API key that will be used for Jeedom :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

Below you find the list of plugins, do not forget to activate them (TTS type or ear control) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

# Jeedom configuration

The configuration in Jeedom is quite simple, you must first connect in SSH to Jeedom (if you have a Jeedom box the identifiers are in the installation doc). Then edit the / etc / hosts file

``vim /etc/hosts``

And add the following line :

``192.168.0.162 ojn.raspberry.pi``

Then everything happens in Jeedom, after creating your rabbit here is the configuration to put:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

Now your rabbit now has its own local burrow !!!!!

# Put the TTS locally

Everything is local except the TTS which passes through the Acapela site but it is possible by modifying some files to pass it locally

> **NOTE**
>
> I will consider that oenjabnab is installed in / home / ojn / OpenJabNab and that you are logged in as the user of openjabnab, here ojn

## Creation of tts jeedom

You need to create a jeedom folder in servver / tts :

``mkdir /home/ojn/OpenJabNab/server/tts/jeedom``

Then you have to make 3 files :

-   ``jeedom.pro``

````
######################################################################
# Automatically generated by qmake (2.01a) sam. janv. 19 19:10:01 2008
######################################################################

TEMPLATE = lib
CONFIG -= debug
CONFIG += plugin qt release
QT += network xml
QT -= gui
INCLUDEPATH += . ../../server ../../lib
TARGET = tts_jeedom
DESTDIR = ../../bin/tts
DEPENDPATH += . ../../server ../../lib
LIBS += -L../../bin/ -lcommon
MOC_DIR = ./tmp/moc
OBJECTS_DIR = ./tmp/obj
win32 {
  QMAKE_CXXFLAGS_WARN_ON += -WX
}
unix {
  QMAKE_LFLAGS += -Wl,-rpath,\'\$$ORIGIN\'
  QMAKE_CXXFLAGS += -Werror
}

# Input
HEADERS += tts_jeedom.h
SOURCES += tts_jeedom.cpp
````

-   ``tts\jeedom.h``

````
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
  Q_INTERFACES(TTSInterface)

public:
  TTSJeedom();
  virtual ~TTSJeedom();
  QByteArray CreateNewSound(QString, QString, bool);

private:
};

#endif
````

-   ``tts\jeedom.cpp``

````
#include <QDateTime>
#include <QUrl>
#include <QCryptographicHash>
#include <QMapIterator>
#include "tts_jeedom.h"
#include "log.h"
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QNetworkAccessManager>

Q_EXPORT_PLUGIN2(tts_jeedom, TTSJeedom)

TTSJeedom::TTSJeedom():TTSInterface("jeedom", "Jeedom")
{
  voiceList.insert("fr", "fr");
}

TTSJeedom::~TTSJeedom()
{
}

QByteArray TTSJeedom::CreateNewSound(QString text, QString voice, bool forceOverwrite)
{
  QEventLoop loop;
  if(!voiceList.contains(voice))
    voice = "fr";
  // Check (and create if needed) output folder
  QDir outputFolder = ttsFolder;
  if(!outputFolder.exists(voice))
    outputFolder.mkdir(voice);

  if(!outputFolder.cd(voice))
  {
    LogError(QString("Cant create TTS Folder : %1").arg(ttsFolder.absoluteFilePath(voice)));
    return QByteArray();
  }

  // Compute fileName
  QString fileName = QCryptographicHash::hash(text.toAscii(), QCryptographicHash::Md5).toHex().append(".mp3");
  QString filePath = outputFolder.absoluteFilePath(fileName);

  if(!forceOverwrite && QFile::exists(filePath))
    return ttsHTTPUrl.arg(voice, fileName).toAscii();

  // Fetch MP3
  QHttp http("TODO_IP_JEEDOM");
  QObject::connect(&http, SIGNAL(done(bool)), &loop, SLOT(quit()));

  QByteArray ContentData;
  ContentData += "apikey=TODO_API_JEEDOM&text="+QUrl::toPercentEncoding(text);

  QHttpRequestHeader Header;
  Header.addValue("Host", "TODO_IP_JEEDOM");

  Header.setContentLength(ContentData.length());
  Header.setRequest("GET", "/core/api/tts.php?apikey=TODO_API_JEEDOM&text="+QUrl::toPercentEncoding(text), 1, 1);

  http.request(Header, ContentData);
  loop.exec();

  QFile file(filePath);
  if (!file.open(QIODevice::WriteOnly))
  {
    LogError("Cannot open sound file for writing : "+filePath);
    return QByteArray();
  }
  file.write(http.readAll());
  file.close();
  return ttsHTTPUrl.arg(voice, fileName).toAscii();
}
````

> **NOTE**
>
> Don't forget to replace the TODOs

Then activate the tts jeedom by modifying the file ``/home/ojn/OpenJabNab/server/tts/tts.pro`` by adding jeedom to ``SUBDIRS`` :

````
TEMPLATE = subdirs
SUBDIRS = acapela google jeedom
````

## Recompilation

````
cd /home/ojn/OpenJabNab/server
qmake -r
make
````

## Modification of the tts service

Edit the file ``/home/ojn/OpenJabNab/server/bin/openjabnab.ini`` and change ``TTS=acapela`` by ``TTS=jeedom``

## Relaunch of openjabnab

The easiest way is to restart the machine to restart openjabnab

# Openjabnab installation

Here's a tutorial on how to install OpenJabNab locally (on a Raspberry Pi or Humming)

> **Note**
>
> This tutorial is largely inspired by [this one](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

# Installation of outbuildings

Once the system is installed via SSH, run the following command:

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

# Network Configuration

Next, you need to retrieve the system's IP address:

``ifconfig``

The result is:

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

Here, the IP address is 192.168.0.162.

> **Note**
>
> For the rest of this tutorial, I’ll be using this IP address; of course, you’ll need to replace it with your actual IP address.

Then edit the file ``/etc/resolv.conf``

``vim  /etc/resolv.conf``

And add:

``nameserver 192.168.0.162``

# DNS Configuration

Edit the file ``/etc/bind/named.conf.local``

````
cd /etc/bind/
vim named.conf.local
````

And add:

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

And put the following inside:

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

And replace it with:

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

> **Important**
>
> Be sure to replace the 162 in the last line with the last part of your system's IP address

Start the DNS:

``/etc/init.d/bind9 start``

Test to see if it works:

``ping ojn.raspberry.pi``

You should have:

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

> **Note**
>
> Press Ctrl+C to exit ping

For security reasons, we'll also add the resolution to /etc/hosts. Do the following:

``vim /etc/hosts``

And add:

``192.168.0.162 ojn.raspberry.pi``

# Recovery of openjabnab

First, let's create the user:

````
adduser ojn
cd /home/ojn
````

Then clone openjabnab:

````
git clone https://github.com/OpenJabNab/OpenJabNab.git
chown -R ojn:ojn /home/ojn/OpenJabNab/
chmod 0777 /home/ojn/OpenJabNab/http-wrapper/ojn_admin/include
````

# Web Server Configuration

Do:

````
cd /etc/apache2/sites-available/
vim ojn.conf
````

And add:

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

Then go to the website:

``a2ensite ojn``

Next, you need to grant access to the openjabnab server directory. Do the following:

``vim /etc/apache2/apache2.conf``

And add:

````
<Directory /home/ojn/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
````

Then restart Apache:

``service apache2 reload``

# Installing openjabnab

Do:

````
su ojn
cd /home/ojn/OpenJabNab/server
qmake -r
make
````

> **Note**
>
> This step can take a long time (up to 45 minutes)

# Configuring openjabnab

Do:

````
cp openjabnab.ini-dist bin/openjabnab.ini
vim bin/openjabnab.ini
````

And change the following lines:

````
StandAloneAuthBypass = true
AllowAnonymousRegistration = true
AllowUserManageBunny = true
AllowUserManageZtamp = true
````

And replace all instances of *my.domain.com* with *ojn.raspberry.pi*

# Configuring the openjabnab web server

In your post, you need to edit the file ``C:\Windows\System32\drivers\etc`` and add:

``192.168.0.162 ojn.raspberry.pi``

Then go to:

``http://ojn.raspberry.pi/ojn_admin/install.php``

Confirm everything

# Server launch

That's it—everything is ready. All that's left is to start the server:

````
su ojn
cd ~/OpenJabNab/server/bin
./openjabnab
````

Now go to:

``http://ojn.raspberry.pi/ojn_admin/index.php``

> **Note**
>
> If everything is working properly, you should see the statistics appear at the bottom

# Setting up the Rabbit

Setting up the rabbit is pretty simple: unplug it, then plug it back in while holding down its button. It should light up blue.

Next, on your PC, you should see a new "nabaztagXX" Wi-Fi network. Connect to it by entering 192.168.0.1.

Once there, enter your Wi-Fi settings and the following information:

````
DHCP enabled : no
Local Mask : 255.255.255.0
Local gateway : 192.168.0.1 ou 192.168.0.254 (en fonction de votre réseau)
DNS server : 192.168.0.162
````

# Monitoring the openjabnab server and automatic startup

As you'll notice, if you log out, the openjabnab server stops running. So you'll need to add a small script to monitor the server and start it automatically. Do the following:

````
cd /home/ojn
vim checkojn.sh
````

And add the following:

````
if [ $(ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0 ]; then
    su ojn; cd /home/ojn/OpenJabNab/server/bin;nohup ./openjabnab >> /dev/null 2>&1 &
fi
````

Then do the following:

``chmod +x checkojn.sh``

Now you need to add the script to startup and set it to check every 15 minutes, for example:

``crontab -e``

And add:

````
@reboot /home/ojn/checkojn.sh
*/15 * * * * /home/ojn/checkojn.sh
````

> **Important**
>
> You must add this to root's crontab; if you're still logged in as the ojn user, press Ctrl+D.

# Configuring Your Rabbit in OpenJabNab

Go to:

``http://ojn.raspberry.pi/ojn_admin/index.php``

You must have:

![installation.openjabnab](../images/installation.openjabnab.PNG)

Now you need to create an account by clicking on "Create a User":

![installation.openjabnab2](../images/installation.openjabnab2.PNG)

Enter the requested information and log in:

![installation.openjabnab3](../images/installation.openjabnab3.PNG)

Once logged in, go to the server:

![installation.openjabnab4](../images/installation.openjabnab4.PNG)

Then scroll down to find the list of connected devices and retrieve its MAC address:

![installation.openjabnab5](../images/installation.openjabnab5.PNG)

Next, go to "Account," fill in the "Name" and "MAC Address" fields for the rabbit, and then click "Submit":

![installation.openjabnab6](../images/installation.openjabnab6.PNG)

You can now find your rabbit on the rabbit page; click on it to open its settings:

![installation.openjabnab7](../images/installation.openjabnab7.PNG)

You now need to activate the Violet API and set it to public. This is also where you’ll find the Violet API key you’ll need for Jeedom:

![installation.openjabnab8](../images/installation.openjabnab8.PNG)

Below is a list of plugins; don't forget to enable them (for example, TTS or ear controls):

![installation.openjabnab9](../images/installation.openjabnab9.PNG)

# Jeedom Configuration

The configuration in Jeedom is fairly simple. First, you need to connect to Jeedom via SSH (if you have a Jeedom box, the login credentials are in the installation documentation). Then edit the /etc/hosts file

``vim /etc/hosts``

And add the following line:

``192.168.0.162 ojn.raspberry.pi``

Then everything happens in Jeedom. After creating your rabbit, here’s the configuration you need to set up:

![installation.openjabnab10](../images/installation.openjabnab10.PNG)

There you go—your rabbit now has its very own burrow right here at home!!!!!

# Set up TTS locally

Everything is local except for the TTS, which goes through the Acapela website, but it is possible to run it locally by modifying a few files

> **Note**
>
> I'll assume that OpenJabNab is installed in /home/ojn/OpenJabNab and that you're logged in as the OpenJabNab user, here ojn

## Creating the Jeedom TTS

You need to create a Jeedom folder in server/tts:

``mkdir /home/ojn/OpenJabNab/server/tts/jeedom``

Next, you need to create 3 files:

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

> **Note**
>
> Don't forget to replace the TODOs

Next, you need to enable Jeedom TTS by editing the file ``/home/ojn/OpenJabNab/server/tts/tts.pro`` by adding Jeedom to ``SUBDIRS`` :

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

## Changes to the TTS service

You need to edit the file ``/home/ojn/OpenJabNab/server/bin/openjabnab.ini`` and change ``TTS=acapela`` by ``TTS=jeedom``

## Relaunch of openjabnab

The easiest thing to do here is to restart the machine to relaunch openjabnab

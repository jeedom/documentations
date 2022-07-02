# 

)

> ****
>
>  [](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

# 

 :

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

# 

 :

``ifconfig``

 :

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

.

> ****
>
> 

 ``/etc/resolv.conf``

``vim  /etc/resolv.conf``

 :

``nameserver 192.168.0.162``

# 

 ``/etc/bind/named.conf.local``

````
cd /etc/bind/
vim named.conf.local
````

 :

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

 ``db.raspberry.pi``

``vim db.raspberry.pi ---``

 :

````
$TTL 604800
@ IN SOA . root.raspberry.pi. (
 1 ; Serial
 604800 ; Refresh
 86400 ; Retry
 2419200 ; Expire
 604800 ) ; Negative Cache TTL
;
@ IN NS .
ojn IN A 192.168.0.162
192.168.0.162 IN A 192.168.0.162
````

 ``db.192.168.0.inv``

``vim db.192.168.0.inv``

 :

````
$TTL 604800
@ IN SOA . root.localhost. (
 2 ; Serial
 604800 ; Refresh
 86400 ; Retry
 2419200 ; Expire
 604800 ) ; Negative Cache TTL
;
@ IN NS .
162 IN PTR .
````

> ****
>
> 

 :

``/etc/init.d/bind9 start``

 :

``ping ``

 :

````
root@cubox-i:/home/ojn# ping 
PING  (192.168.0.162) 56(84) bytes of data.
64 bytes from  (192.168.0.162): icmp_seq=1 ttl=64 time=0.069 ms
64 bytes from  (192.168.0.162): icmp_seq=2 ttl=64 time=0.067 ms
64 bytes from  (192.168.0.162): icmp_seq=3 ttl=64 time=0.059 ms
64 bytes from  (192.168.0.162): icmp_seq=4 ttl=64 time=0.068 ms
^C
---  ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3000ms
rtt min/avg/max/mdev = 0.059/0.065/0.069/0.010 ms
````

> ****
>
> 

 :

``vim /etc/hosts``

 :

``192.168.0.162 ``

# 

 :

````
adduser ojn
cd /home/ojn
````

 :

````
git clone https://github.com/OpenJabNab/OpenJabNab.git
chown -R ojn:ojn /home/ojn/OpenJabNab/
chmod 0777 /home/ojn/OpenJabNab/http-wrapper/ojn_admin/include
````

# 

 :

````
cd /etc/apache2/sites-available/
vim ojn.conf
````

 :

````
<VirtualHost *:80>
        DocumentRoot /home/ojn/OpenJabNab/http-wrapper/
        ServerName 
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

 :

``a2ensite ojn``

 :

``vim /etc/apache2/apache2.conf``

 :

````
<Directory /home/ojn/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
````

 :

``service apache2 reload``

# 

 :

````
su ojn
cd /home/ojn/OpenJabNab/server
qmake -r
make
````

> ****
>
> )

# 

 :

````
cp openjabnab.ini-dist bin/openjabnab.ini
vim bin/openjabnab.ini
````

 :

````
StandAloneAuthBypass = true
AllowAnonymousRegistration = true
AllowUserManageBunny = true
AllowUserManageZtamp = true
````

 **  **

# 

 ``C:\Windows\System32\drivers\etc``  :

``192.168.0.162 ``

 :

``http:///ojn_admin/install.php``



# 

 :

````
su ojn
cd ~/OpenJabNab/server/bin
./openjabnab
````

 :

``http:///ojn_admin/index.php``

> ****
>
> 

# 

. .

.

 :

````
DHCP enabled : no
Local Mask : 255.255.255.0
Local gateway : 192.168.0.1 ou 192.168.0.254 (en fonction de votre réseau)
DNS server : 192.168.0.162
````

# 

. .  :

````
cd /home/ojn
vim checkojn.sh
````

 :

````
if [ $(ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0 ]; then
    su ojn; cd /home/ojn/OpenJabNab/server/bin;nohup ./openjabnab >> /dev/null 2>&1 &
fi
````

 :

``chmod +x checkojn.sh``

 :

``crontab -e``

 :

````
@reboot /home/ojn/checkojn.sh
*/15 * * * * /home/ojn/checkojn.sh
````

> ****
>
> 

# 

 :

``http:///ojn_admin/index.php``

 :

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

 :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

# 

). 

``vim /etc/hosts``

 :

``192.168.0.162 ``

:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

 !!!!!

# 



> ****
>
> 

## 

 :

``mkdir /home/ojn/OpenJabNab/server/tts/jeedom``

 :

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

> ****
>
> 

 ``/home/ojn/OpenJabNab/server/tts/tts.pro``  ``SUBDIRS`` :

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

## 

 ``/home/ojn/OpenJabNab/server/bin/openjabnab.ini``  ``TTS=acapela``  ``TTS=jeedom``

## 



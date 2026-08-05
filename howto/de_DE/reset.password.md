# Vorgehensweise bei Verlust des Passworts zur Verbindung mit Jeedom

# > 4.2

Das erste, was Sie tun müssen, ist, in SSH eine Verbindung zu Jeedom herzustellen (mit einem Software-Typ Kitty oder Putty).

>**Erinnerungen**
>
>Standardmäßig sind die SSH-Verbindungsanmeldeinformationen auf Jeedom (Luna, Atlas, Smart, Mini und Mini+) entweder :
>- Benutzername : jeedom, Passwort Mjeedom96
>- Benutzername : root, Passwort Mjeedom96

Dann müssen Sie nur noch tippen :

````
php /var/www/html/core/php/jeecli.php user list
````

## Da keine Benutzer vorhanden sind, müssen Sie einen erstellen

````
php /var/www/html/core/php/jeecli.php user add [username] [password]
````

Mit : 
- ``[username]`` : Nutzername
- ``[password]`` : Seien Sie beim neuen Passwort vorsichtig, es sind keine Leerzeichen erforderlich und eine Mindestlänge von 8 Zeichen

## Es existiert ein Benutzer, Sie müssen lediglich dessen Passwort ändern 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Mit : 
- ``[username]`` : Nutzername
- ``[password]`` : Seien Sie beim neuen Passwort vorsichtig, es sind keine Leerzeichen erforderlich und eine Mindestlänge von 8 Zeichen


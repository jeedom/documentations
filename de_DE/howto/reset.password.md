# Vorgehensweise bei Verlust des Jeedom-Verbindungspassworts

# > 4.2

Das erste, was Sie tun müssen, ist, sich in SSH mit Jeedom zu verbinden (mit kitty- oder putty-artiger Software).

>**Erinnerungen**
>
>Standardmäßig sind die SSH-Anmeldedaten für jeedom (smart, mini und mini+) entweder :
>- Nutzername : jeedom, Passwort Mjeedom96
>- Nutzername : root, Passwort Mjeedom96

Dann einfach tippen :

````
php /var/www/html/core/php/jeecli.php user list
````

Sobald Sie den Namen des Benutzers gefunden haben, dessen Passwort Sie ändern möchten, tun Sie es : 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Mit : 
- ``[username]`` : der Nutzername
- ``[password]`` : das neue Passwort, achten Sie darauf, dass Sie keine Leerzeichen und eine Mindestlänge von 8 Zeichen benötigen

# > 3.3.50

Das erste, was Sie tun müssen, ist, sich in SSH mit Jeedom zu verbinden (mit kitty- oder putty-artiger Software).

>**Erinnerungen**
>
>Standardmäßig sind die SSH-Anmeldedaten auf jeedom (Atlas, Smart, Mini und Mini+) entweder :
>- Nutzername : jeedom, Passwort Mjeedom96
>- Nutzername : root, Passwort Mjeedom96

Dann einfach tippen :

````
php /var/www/html/install/reset_password.php
````

Das System wird Sie nach dem Benutzernamen fragen, für den Sie das Passwort verloren haben (Sie haben die Liste aller Benutzer, falls erforderlich). Drücken Sie nach der Eingabe (achten Sie auf Groß- / Kleinschreibung) die Eingabetaste. Und Sie haben Ihr neues Passwort.

Beispiel :

````
php /var/www/html/install/reset_password.php
Reset user password
List of user :
- toto
- plop
Please type login :
toto
Operation successfull, your new password for user toto is : 9ULB5RUr3VGHxBD8tYVSMeWPvOKILQbs
````

# < 3.3.50

Wir werden hier sehen, wie Sie das Jeedom-Passwort direkt ändern können, indem Sie es in der Datenbank ändern, falls Sie es vergessen haben

Das erste, was Sie tun müssen, ist, sich in SSH mit Jeedom zu verbinden (mit kitty- oder putty-artiger Software).

Sobald die Verbindung hergestellt ist, müssen Sie die Kennungen aus der Datenbank abrufen :

````
cat /var/www/html/core/config/common.config.php
````

Hier finden Sie das Passwort für den Zugriff auf die Jeedom-Datenbank, dann müssen Sie es tun :

````
mysql -ujeedom -p
````

Dort fragt es Sie nach dem oben abgerufenen Passwort (das Passwort wird nicht angezeigt : es ist normal). Dann tippen (oder besser kopieren/einfügen. Sie müssen unter Putty mit der rechten Maustaste klicken, um "einzufügen") :

````
Jeedom verwenden;
REPLACE INTO user SET `login`='adminTmp',password='c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec',profils='admin', enable='1';
````

So. Sie können die Verbindung zu Ihrem Jeedom mit den adminTmp / admin-Anmeldeinformationen trennen / wiederherstellen, wodurch Sie auch das Passwort anderer Konten ändern können.

>**WICHTIG**
>
>Vergessen Sie nicht, den adminTmp-Benutzer zu löschen, nachdem Ihre Zugriffe wiederhergestellt wurden, da dies eine potenzielle Sicherheitsverletzung darstellen könnte, für die Sie allein verantwortlich wären.

>**WICHTIG**
>
> Wenn Sie die AD/LDAP-Authentifizierung aktiviert haben, funktioniert diese Rücksetzmethode nur, wenn Sie den AD/LDAP-Modus deaktivieren. Sie können dies tun, indem Sie dies tun :
>````
>Jeedom verwenden;
>REPLACE INTO `config` SET `value`='0',`key`='ldap:enable',`plugin`='core';
>````

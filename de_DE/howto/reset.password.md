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

Wenn Sie den Namen des Benutzers gefunden haben, dessen Passwort Sie ändern möchten, gehen Sie : 

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Mit : 
- ``[username]`` : Nutzername
- ``[password]`` : Seien Sie beim neuen Passwort vorsichtig, es sind keine Leerzeichen erforderlich und eine Mindestlänge von 8 Zeichen

# > 3.3.50

Das erste, was Sie tun müssen, ist, in SSH eine Verbindung zu Jeedom herzustellen (mit einem Software-Typ Kitty oder Putty).

>**Erinnerungen**
>
>Standardmäßig sind die SSH-Verbindungsanmeldeinformationen auf Jeedom (Luna, Atlas, Smart, Mini und Mini+) entweder :
>- Benutzername : jeedom, Passwort Mjeedom96
>- Benutzername : root, Passwort Mjeedom96

Dann müssen Sie nur noch tippen :

````
php /var/www/html/install/reset_password.php
````

Das System fragt Sie nach dem Benutzernamen, für den Sie das Passwort verloren haben (für alle Fälle haben Sie die Liste aller Benutzer). Drücken Sie nach der Eingabe (achten Sie auf die Groß-/Kleinschreibung) die Eingabetaste. Und Sie haben Ihr neues Passwort.

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

Das erste, was Sie tun müssen, ist, in SSH eine Verbindung zu Jeedom herzustellen (mit einem Software-Typ Kitty oder Putty).

Sobald die Verbindung hergestellt ist, müssen Sie die Kennungen aus der Datenbank abrufen :

````
cat /var/www/html/core/config/common.config.php
````

Hier finden Sie das Passwort für den Zugriff auf die Jeedom-Datenbank, das Sie dann tun müssen :

````
mysql -ujeedom -p
````

Dort fragt er Sie nach dem oben wiederhergestellten Passwort (das Passwort wird nicht angezeigt : es ist normal). Geben Sie dann ein (oder besser kopieren / einfügen). Sie müssen unter Putty mit der rechten Maustaste klicken, um "einzufügen"") :

````
benutze Jeedom;
REPLACE INTO user SET `login`='adminTmp',password='c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec',profils='admin', enable='1';
````

Hier. Sie können die Verbindung zu Ihrem Jeedom mit den Kennungen adminTmp / admin trennen / wieder herstellen, sodass Sie auch das Kennwort anderer Konten ändern können.

>**Wichtig**
>
>Vergessen Sie nicht, den adminTmp-Benutzer zu löschen, sobald Sie Ihren Zugriff wiedererlangt haben. Das Verlassen könnte eine potenzielle Sicherheitsverletzung darstellen, für die Sie allein verantwortlich wären.

>**Wichtig**
>
> Wenn Sie die AD / LDAP-Authentifizierung aktiviert haben, funktioniert diese Rücksetzmethode nur, wenn Sie den AD / LDAP-Modus deaktivieren. Sie können dies tun, indem Sie dies tun :
>````
>benutze Jeedom;
>REPLACE IN `config` SET` value` = '0',` key` = 'ldap:enable ', `plugin` =' core ';
>````

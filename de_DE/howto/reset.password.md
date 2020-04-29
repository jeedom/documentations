Wir werden hier sehen, wie Sie das Jeedom-Passwort direkt ändern können
indem Sie es in der Datenbank ändern, falls Sie es vergessen haben 

Das erste, was zu tun ist, ist in SSH eine Verbindung zu Jeedom herzustellen (mit a
Kitty- oder Kitt-Software).

Sobald die Verbindung hergestellt ist, müssen Sie die Kennungen aus der Datenbank abrufen
Daten :

``` {.bash}
cat /var/www/html/core/config/common.config.php
```

Hier finden Sie das Passwort für den Zugriff auf die Datenbank
Jeedom, dann musst du tun :

``` {.bash}
mysql -ujeedom -p
```

Dort fragt er Sie nach dem oben abgerufenen Passwort (dem Passwort
nicht angezeigt : das ist normal). Dann tippe (oder besser),
Kopieren / Einfügen. Sie müssen unter Putty mit der rechten Maustaste klicken, um "einzufügen") :

``` {.bash}
benutze Jeedom;
IN Benutzer-SET ERSETZEN `login` = 'adminTmp', password = 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81fc
```

Los geht's. Sie können die Verbindung zu Ihrem Jeedom mit dem trennen / wieder herstellen
adminTmp / admin-IDs, mit denen Sie das Kennwort ändern können
Übergeben Sie auch andere Konten.

>**Wichtig**
>
>Denken Sie daran, dass nach dem Wiederherstellen Ihres Zugriffs der Benutzer adminTmp möglicherweise gelöscht wird
Sicherheitsverletzung, für die Sie allein verantwortlich sind.

>**Wichtig**
>
> Wenn Sie die AD / LDAP-Authentifizierung aktiviert haben, funktioniert diese Rücksetzmethode nur, wenn Sie den AD / LDAP-Modus deaktivieren. Sie können dies tun, indem Sie dies tun : 
>``` {.bash}
>benutze Jeedom;
>REPLACE IN `config` SET` value` = '0',` key` = 'ldap:enable ', `plugin` =' core ';
>```

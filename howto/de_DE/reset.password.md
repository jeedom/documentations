# Vorgehensweise bei Verlust des Passworts für die Anmeldung bei Jeedom

# > 4.2

Als Erstes müssen Sie eine SSH-Verbindung zu Jeedom herstellen (mit einer Software wie Kitty oder PuTTY).

>**Erinnerungen**
>
>Standardmäßig lauten die Anmeldedaten für SSH auf Jeedom (Luna, Atlas, Smart, Mini und Mini+) entweder:
>- Benutzername: jeedom, Passwort: Mjeedom96
>- Benutzername: root, Passwort: Mjeedom96

Anschließend müssen Sie nur noch Folgendes eingeben:

````
php /var/www/html/core/php/jeecli.php user list
````

## Es ist kein Benutzer vorhanden, daher muss ein Benutzer angelegt werden

````
php /var/www/html/core/php/jeecli.php user add [username] [password]
````

Mit:
- ``[username]`` : Benutzername
- ``[password]`` : Das neue Passwort – bitte beachten Sie, dass es keine Leerzeichen enthalten darf und mindestens 8 Zeichen lang sein muss

## Ein Benutzer ist bereits vorhanden, Sie müssen lediglich sein Passwort ändern.

````
php /var/www/html/core/php/jeecli.php user password [username] [password]
````

Mit:
- ``[username]`` : Benutzername
- ``[password]`` : Das neue Passwort – bitte beachten Sie, dass es keine Leerzeichen enthalten darf und mindestens 8 Zeichen lang sein muss


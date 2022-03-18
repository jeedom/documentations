# Mail Plugin

Plugin zum Versenden von E-Mails.

# Plugin Konfiguration 

Nach der Installation des Plugins müssen Sie es nur noch aktivieren. Dieses Plugin hat keine bestimmte Konfiguration :

![mail1](../images/mail1.PNG)

# Gerätekonfiguration 

Auf die Konfiguration der Mail-Geräte kann über das Plugin-Menü zugegriffen werden :

![mail2](../images/mail2.PNG)

So sieht die Mail-Plugin-Seite aus (hier mit bereits 1 E-Mail können Sie mit "Hinzufügen" beliebig viele hinzufügen") :

![mail3](../images/mail3.PNG)

Sobald Sie auf eine davon klicken, erhalten Sie :

![mail4](../images/mail4.PNG)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name der Postausrüstung** : Name Ihrer Gerätepost
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört
-   **Aktivieren** : macht Ihre Ausrüstung aktiv
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar
-   **Absendername** : Name des Absenders der E-Mail (z : Jeedom)
-   **Mail-Absender** : E-Mail des Absenders (z : <jeedom@moi.fr>)
-   **Versandart** : Methode zum Senden der E-Mail :
    -   Jeedom Wolke : Derzeit keine Konfiguration zum Senden von E-Mails durch die Jeedom-Cloud-Dienste in der Beta-Phase, begrenzt auf 5 E-Mails pro Tag
    -   SMTP : häufigster Modus zum Senden von E-Mails
    -   Sendmail
    -   Qmail
    -   Mail()\[PHP-Funktion \] : Verwenden Sie die [Standard-Sendefunktion von PHP, window = "\_ blank"](http://fr.php.net/manual/fr/function.mail.php), erfordert die Konfiguration des Betriebssystems

Abgesehen von der SMTP-Option erfordern die anderen Optionen die Konfiguration des Betriebssystems (Linux), um funktionieren zu können. Mit anderen Worten, im Grunde funktioniert nur die SMTP-Funktion, die anderen sind Experten vorbehalten, die diese Optionen auf Wunsch selbst konfigurieren können.

Auf der Registerkarte SMTP-Konfiguration können Sie die Informationen des E-Mail-Servers eingeben, den Sie verwenden möchten.

![mail screenshot3](../images/mail_screenshot3.jpg)

Hier einige Beispiele für die wichtigsten E-Mail-Dienstanbieter :

-   **Google Mail**
    -   SMTP-Server : smtp.gmail.com
    -   SMTP-Port : 587
    -   SMTP-Sicherheit : TLS
-   **Hotmail**
    -   SMTP-Server : smtp.live.com
    -   SMTP-Port : 587
    -   SMTP-Sicherheit : TLS
-   **iCloud**
    -   SMTP-Server : smtp.me.com
    -   SMTP-Port : 25
-   **Yahoo.com**
    -   SMTP-Server : smtp.mail.yahoo.com
    -   SMTP-Port : 465
    -   SMTP-Sicherheit : SSL

Les champs « Utilisateur SMTP » et « Mot de passe SMTP » correspondent aux identifiants de votre compte E-Mail.

Auf der Registerkarte "Bestellungen" können Sie Bestellungen hinzufügen, die den E-Mail-Adressen entsprechen, an die Sie E-Mails mit Jeedom senden möchten :

![mail screenshot4](../images/mail_screenshot4.jpg)

-   **Name** : Name der Bestellung
-   **E-Mail** : die E-Mail-Adresse, an die die Nachricht gesendet werden soll. Sie können mehrere setzen, indem Sie sie mit trennen ,
-   **Erweiterte Konfiguration** (kleine gekerbte Räder) : wird verwendet, um die erweiterte Konfiguration des Befehls anzuzeigen (Verlaufsmethode, Widget usw.).)
-   **Test** : Wird zum Testen des Befehls verwendet,
-   **Löschen** (Schild -) : ermöglicht das Löschen des Befehls.

Dieses Plugin funktioniert wie ein Modul, dh es wird nach dem Speichern in der Liste der Aktionen oder Befehle angezeigt. Es ist daher sehr einfach, es beispielsweise beim Erstellen von Szenarien zu verwenden.

In einem Szenario müssen Sie nach Auswahl in einer Aktion den Titel und die Nachricht eingeben.

![mail5](../images/mail5.jpg)

> **Wichtig**
>
> Wenn Sie sich bei Google Mail doppelt authentifizieren, müssen Sie ein bestimmtes Kennwort für die Anwendung angeben : Mein Konto ⇒ Login und Sicherheit ⇒ Verbindung zu Google herstellen ⇒ Anwendungskennwörter. Wenn dies nicht der Fall ist, müssen Sie Ihr übliches Google Mail-Kennwort eingeben.

> **Spitze**
>
> Das HTML-Format wird vom Szenario-Editor für den Nachrichtentext unterstützt.

> **Spitze**
>
> Denken Sie daran, alle Änderungen zu speichern.

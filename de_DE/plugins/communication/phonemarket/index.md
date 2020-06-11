# Telefon Markt Plugin

Plugin zum Senden von SMS und Telefonieren mit automatischen Nachrichten von Jeedom.

> **Wichtig**
>
> Dieses Plugin geht durch den Markt, es ist also ein Cloud-Dienst, für dessen Funktion eine Internetverbindung erforderlich ist.

> **Spitze**
>
> Das Plugin arbeitet mit einem Kreditsystem, 1 SMS = 1 Kredit für Frankreich, sonst 2 Credits, 1 Anruf = 2 Credits für Frankreich, sonst 4 Credits. Sie können Ihr Guthaben überprüfen [hier](https://market.jeedom.com/index.php?v=d&p=profils#services). Bei niedrigen Credits (weniger als 5) wird eine E-Mail an Sie gesendet.

> **Wichtig**
>
> Textnachrichten sind auf 140 Zeichen und Anrufe auf 450 Zeichen begrenzt.

# Plugin Konfiguration 

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es nur noch aktivieren. Auf dieser Ebene gibt es keine Konfiguration.

![phonemarket1](./images/phonemarket1.PNG)

# Gerätekonfiguration 

Auf die Konfiguration der Phonemarket-Geräte kann über das Plugin-Menü zugegriffen werden :

![phonemarket2](./images/phonemarket2.PNG)

So sieht die Phonemarket-Plugin-Seite aus (hier mit bereits 1 Gerät)) :

![phonemarket3](./images/phonemarket3.PNG)

Sobald Sie auf eine davon klicken, erhalten Sie :

![phonemarket4](./images/phonemarket4.PNG)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des Telefonmarktgeräts** : Name Ihrer Telefonmarktausrüstung,
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
-   **Aktivieren** : macht Ihre Ausrüstung aktiv,
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar.

Nachfolgend finden Sie die Liste der Bestellungen :

-   **Name** : Der im Dashboard angezeigte Name,
-   **Typ** : Art des Befehls (Anrufe oder SMS),
-   **Anzahl** : Telefonnummer, die angerufen werden soll oder an die eine SMS gesendet werden soll (je nach Typ),
-   **Test** : Wird zum Testen des Befehls verwendet,
-   **Löschen** (Schild -) : ermöglicht das Löschen des Befehls.

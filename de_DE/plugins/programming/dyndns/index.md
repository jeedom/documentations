# DynDNS-Plugin

Mit diesem Plugin können Sie einen dynamischen DNS-Dienst aktualisieren (Dyndns, Noip, Duckdns,…)

# Plugin Konfiguration 

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es nur noch aktivieren. Auf dieser Ebene gibt es keine Konfiguration.

![dyndns](./images/dyndns.PNG)

# Gerätekonfiguration 

Auf die Konfiguration der Dyndns-Geräte kann über das Plugin-Menü zugegriffen werden :

![dyndns2](./images/dyndns2.PNG)

So sieht die Dyndns-Plugin-Seite aus (hier mit bereits 1 Gerät) :

![dyndns3](./images/dyndns3.PNG)

Sobald Sie auf eine davon klicken, erhalten Sie :

![dyndns4](./images/dyndns4.PNG)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name de l'équipement DynDNS** : Name Ihres DynDns-Geräts,
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
-   **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören),
-   **Aktivieren** : macht Ihre Ausrüstung aktiv,
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,
-   **Service** : Der Name des verwendeten Dienstes (dyndns.org, noip.com)
-   **Host-Namen** : vollständiger zu aktualisierender DNS-Name (z. B. toto.ddns.net)
-   **Name d'utilisateur** : Benutzername des betreffenden Dienstes
-   **Passwort** : Passwort für den betreffenden Dienst
-   **Zeichen** : Token für Enten

Nachfolgend finden Sie die Liste der Bestellungen :

-   **Name** : Der im Dashboard angezeigte Name,
-   **Anzeige** : ermöglicht die Anzeige der Daten im Dashboard,
-   **Test** : Wird zum Testen des Befehls verwendet

> **Notiz**
>
> Jeedom überprüft die externe IP alle 15 Minuten. Wenn sie sich geändert hat, wird der DNS aktualisiert

> **Wichtig**
>
> Das Plugin bietet einen Befehl zum Erzwingen der Aktualisierung. Achten Sie darauf, es nicht zu missbrauchen, da Sie vorübergehend vom DNS-Dienst ausgeschlossen werden können

> **Notiz**
>
> Wenn Sie OVH verwenden, achten Sie darauf, dass der Benutzername in der Weltform vorliegt.com-ID, während die Domain die Form my-dynHost.mmondomaine.com hat

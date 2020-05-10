Plugin permettant de récupérer les informations des équipements Netatmo Security

# Plugin Konfiguration

Nach der Installation des Plugin, müssen Sie Ihre Netatmo Zugangsdaten
eingeben :

-   **Kunden ID** : Ihre Kunden-ID (siehe Konfigurationsabschnitt)

-   **Kunden Schlüssel** : Ihr Kunden Schlüssel (siehe Konfigurationsabschnitt)

-   **Benutzername** : Benutzername Ihres Netatmo Kontos 

-   **Passwort** : Passwort Ihres Netatmo Kontos

-   **Synchronisieren** : ermöglicht das Synchronisieren von Jeedom mit Ihrem 
    Netamo-Konto, um Ihre Netamo-Geräte automatisch zu erkennen.
    Erst ausführen, nachdem Sie die vorherigen Einstellungen gespeichert haben.

# Recupération des informations de connexion

Pour intégrer votre Welcome, vous devez posséder un client\_id et un
client\_secret généré sur le site <http://dev.netatmo.com>.

Klicken sie einmal auf Start :

![netatmoWelcome10](../images/netatmoWelcome10.png)

Anschließend auf "create an app"

![netatmoWelcome11](../images/netatmoWelcome11.png)

Melden Sie sich mit Ihrer E-Mail und Passwort an

![netatmoWelcome12](../images/netatmoWelcome12.png)

Füllen Sie die Felder "Name" und "Description" aus (was Sie hineinschreiben
spielt keine Rolle) :

![netatmoWelcome13](../images/netatmoWelcome13.png)

Dann am Ende der Seite wählen Sie "I accept the terms of use" und
klicken Sie auf "Create"

![netatmoWelcome14](../images/netatmoWelcome14.png)

Sie erhalten dann die Kunden_ID="Client-ID" und Kunden_Schlüssel="Secret
Client" zurück. Kopieren Sie die diese dann im Konfigurations Teil des
Jeedom Plugin hinein (siehe vorheriges Kapitel)

![netatmoWelcome15](../images/netatmoWelcome15.png)

# Configuration des équipements

La configuration des équipements Netatmo est accessible à partir du menu
plugin -> Securité -> Netatmo Security

Une fois que vous cliquez sur un équipement vous retrouvez ici toute la configuration de votre équipement :

-   **Name des Netatmo Gerätes** : Name Ihrer Netatmo Geräte 
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement
-   **Aktivieren** : ermöglicht es Ihnen, Ihre Gereäte zu aktivieren
-   **Sichtbar** : macht es auf dem Armaturenbrett sichtbar

Im unteren Bereich finden sie eine Liste der Befehle :

-   le nom de la commande
-   Chronik : erlaubt das Archivieren der Daten
-   Erweiterte Konfiguration (kleine Zahnräder) : Erlaubt die erweiterte
    la configuration avancée de la commande (méthode d’historisation, widget…​)
-   Test: prüft den Befehl

# FAQ

>**Je n'ai pas les évenements en temps réel mais au bout de 15min**
>
>Pour avoir un retour en temps réel des évenements (déclenchement alarme incendie, personne qui passe devant la camera..) il faut ABSOLUMENT que votre jeedom ait une URL externe en https avec un certificat valide sur le port 443 (et uniquement ce port la). C'est une obligation imposé par netatmo

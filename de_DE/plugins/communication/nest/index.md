Le plugin Nest permet de piloter le thermostat Nest et de récupérer les
informations du Nest Protect.

> **IMPORTANT**
>
>Il n'y a pas d'API pour le Nest E en europe. Ce plugin ne permet donc pas de piloter un thermostat Nest E en europe.

> **IMPORTANT**
>
> Il n'y a pas de remonté en temps réel (juste une synchronisation toute les 15min), ce plugin ne peut donc etre utilisé pour avoir une alerte en temps réel en cas d'incendie (nest protect)

Plugin-Konfiguration
=======================

Une fois le plugin installé, il vous faut renseigner vos informations de
connexion Nest :

-   **Nom d’utilisateur** : votre nom d’utilisateur Nest (souvent c’est
    votre adresse mail)

-   **Mot de passe** : mot de passe de votre compte Nest

-   **Synchronisieren** : ermöglicht das Synchronisieren von Jeedom mit Ihrem 
    Nest pour découvrir automatiquement vos équipements Nest. A faire
    après avoir sauvegardé les paramètres précedent.

Gerätekonfiguration
=============================

La configuration des équipements Nest est accessible à partir du menu
plugin puis communication :

Sie finden hier die ganze Konfiguration von ihrem Gerät :

-   **Nom de l’équipement Nest** : nom de votre équipement Nest

-   **Eltern Objekt** : gibt das übergeordnete Objekt an, zu dem das
    Gerät gehört

-   **Aktivieren** : ermöglicht es Ihnen, Ihre Gereäte zu aktivieren

-   **Sichtbar** : macht es auf dem Armaturenbrett sichtbar

-   ** ** Kategorie: Gerätekategorien (es kann gehören
    plusieurs catégories)

Sur la gauche vous retrouvez :

-   **Type** : le type de votre Nest

-   **ID** : l’ID de votre équipement chez Nest

-   **IP** : l’IP de votre équipement Nest

-   **MAC** : l’adresse MAC de votre équipement Nest

-   **Batterie** : la batterie (en mV)

-   **Santé** : santé de votre Nest (0 ⇒ OK, 1 ⇒ NOK (pas OK))

-   **Remplacer le** : date de remplacement des piles

-   **Dernière mise à jour** : date de dernière mise à jour des info
    (sur un Protect c’est une fois toutes les 24h)

-   **Dernier test** : date de dernier test (Protect seulement)

Im unteren Bereich finden sie eine Liste der Befehle :

-   Der Name, der auf dem Armaturenbrett angezeigt wird

-   Chronik : erlaubt das Archivieren der Daten

-   Erweiterte Konfiguration (kleine Zahnräder) : Erlaubt die erweiterte
    Konfiguration des Befehls anzuzeigen (Methode der
    Archivierung, Widget ...)

-   Test: prüft den Befehl

-   supprimer (signe -) : permet de supprimer la commande



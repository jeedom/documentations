Ce plugin permet de mettre à jour un service de DNS dynamique
(dyndns,noip,duckdns,…​)

Plugin-Konfiguration
=======================

Nachdem das Plugin herunterzuladen, müssen Sie nur um es zu aktivieren,
gibt es auf dieser Ebene keine Konfiguration.

![dyndns](../images/dyndns.PNG)

Gerätekonfiguration
=============================

La configuration des équipements Dyndns est accessible à partir du menu
plugin :

![dyndns2](../images/dyndns2.PNG)

Voilà à quoi ressemble la page du plugin Dyndns (ici avec déjà 1
équipement) :

![dyndns3](../images/dyndns3.PNG)

> **Tip**
>
> Wie an vielen Stellen in Jeedom kann mit dem Mauszeiger ganz links, ein
> Menü mit Schnellzugriff aufgerufen werden (Sie können in Ihrem Profil
> immer sichtbar einstellen).  

Sobald Sie eines davon anklicken, erhalten Sie :

![dyndns4](../images/dyndns4.PNG)

Sie werden hier alle die Konfiguration Ihrer Geräte finden:

-   **Nom de l’équipement Ambilight** : nom de votre équipement
    Ambilight,

-   **Übergeordnete Objekt** zeigt das übergeordnete Objekt gehört
    Ausrüstung,

-   ** ** Kategorie: Gerätekategorien (es kann gehören
    plusieurs catégories),

-   **Aktivieren**: auf Ihre aktive Ausrüstung zu machen,

-   Visible ** ** macht Ihr Gerät sichtbar auf dem Armaturenbrett,

-   **Service** : Le nom du service utilisé (dyndns.org, noip.com)

-   **Hostname** : nom complet du DNS à mettre à jour (ex toto.ddns.net)

-   **Nom d’utilisateur** : nom d’utilisateur sur le service en question

-   **Mot de passer** : mot de passe sur le service en question

-   **Token** : token utilisé pour duckdns

En-dessous vous retrouvez la liste des commandes :

-   **Nom** : le nom affiché sur le dashboard,

-   **Afficher** : permet d’afficher la donnée sur le dashboard,

-   **Tester** : permet de tester la commande

> **Note**
>
> Jeedom va vérifier toute les 15 minutes l’ip externe, si celle-ci a
> changé alors le DNS sera mise à jour

> **Important**
>
> Le plugin fournit une commande pour forcer la mise à jour. Attention à
> ne pas en abuser car vous pouvez être banni temporairement du service
> de DNS

> **Note**
>
> Si vous utilisez OVH, attention le nom d’utilisateur est de la forme
> mondomaine.com-identificant alors que le domaine est bien sous la
> forme mon-dynHost.mmondomaine.com

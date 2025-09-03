# Premier pas avec Jeedom

Cette documentation présente les étapes à suivre après la mise en service de votre box Jeedom.

## Interface

Votre instance Jeedom est accessible par son interface web à son adresse sur le réseau local.

### Accès local

Pour accéder à l’interface Jeedom, il est nécessaire de connaître l’adresse IP ou le nom d’hôte de la machine sur le réseau local. Voici trois méthodes pour l’obtenir :

#### Découverte automatique

Le market Jeedom propose [**un outil de découverte permettant de récupérer les adresses IP des instances Jeedom connectées au même réseau local**](https://www.jeedom.com/market/index.php?v=d&p=find){:target="_blank"}.

>**IMPORTANT**
>
>Il est nécessaire que la box soit démarrée depuis plusieurs minutes pour que la découverte Jeedom fonctionne.\
>De plus, cette fonctionnalité dépend de la configuration réseau appliquée localement et peut être inutilisable dans certaines conditions.

#### Routeur

Vous pouvez retrouver l’adresse IP de votre box Jeedom en accédant à l’interface d’administration de votre routeur ou box internet.

La plupart propose une liste des appareils/périphériques connectés, avec leur nom d’hôte, adresse MAC et adresse IP. Recherchez un périphérique nommé “Jeedom” ou identifiez-le via son adresse MAC.

>**IMPORTANT**
>
>Se référer au manuel du fabricant en cas de difficulté à atteindre l'interface d’administration du routeur.

#### Nom d'hôte

L'interface Jeedom est également accessible par le nom d'hôte de la machine.

- En cas d'utilisation d'une image système officielle pour déployer Jeedom, le nom d'hôte est connu et Jeedom doit être accessible sur :

  | Machine            | Interface Jeedom   |
  |--------------------|--------------------|
  | [Luna](https://images.jeedom.com/luna/){:target="_blank"} | http://jeedomluna.local{:target="_blank"} |
  | [Atlas](https://images.jeedom.com/atlas/){:target="_blank"} | http://jeedomatlas.local{:target="_blank"} |
  | [Smart](https://images.jeedom.com/smart/){:target="_blank"} | http://jeedomsmart.local{:target="_blank"} |
  | [Ordinateur *(installation automatique)*](https://images.jeedom.com/x86-64/){:target="_blank"} | http://jeedom.local{:target="_blank"} |
  | [Freebox](https://images.jeedom.com/freebox/){:target="_blank"} | http://jeedomfreebox.local{:target="_blank"} |

- Si vous avez vous-même procédé à l’installation de Debian, le nom d’hôte correspond au nom de la machine défini lors de l’installation. L’interface est alors accessible via :
  ```text
  http://MACHINE.DOMAIN
  ```
  >**INFORMATION**
  >
  >`DOMAIN = local` par défaut, sauf si un nom de domaine spécifique a été défini à l’installation.

### Première connexion

[Une fois l'adresse de Jeedom connue](#accès-local), saisissez-la dans votre navigateur internet pour accéder à la page de connexion :

{% include lightbox.html src="images/FirstStep_box_connect.jpg" data="FirstStep_box_connect" title="Connexion Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

>**IMPORTANT**
>
>Les identifiants par défaut sont : `admin/admin`.

Lorsque vous vous connectez avec les identifiants par défaut, Jeedom vous invite à modifier le mot de passe `admin`. **Saisissez simplement 2 fois le nouveau mot de passe pour sécuriser l'accès de cet utilisateur**.

Il est également possible de modifier le mot de passe de l'utilisateur `admin` en cliquant sur le bouton **Mot de passe** de la page de gestion des utilisateurs *(accessible par le menu **Réglages → Système → Utilisateurs**)* :

{% include lightbox.html src="images/FirstStep_boxPassword.jpg" data="FirstStep_boxPassword" title="Mot de passe admin" imgstyle="width:75%;display:block;margin:0 auto;" %}

>**IMPORTANT**
>
>Mémorisez bien le nouveau mot de passe, il permet de se connecter à l'interface Jeedom.

## Market

Le market permet de consulter, installer et même publier des plugins facilement, d'enregistrer ses instances Jeedom ou de bénéficier des services Jeedom notamment.

### Inscription

Pour créer un compte sur le market Jeedom, il n'y a qu'à [**remplir les champs requis par la page d'enregistrement**](https://www.jeedom.com/market/index.php?v=d&p=register){:target="_blank"} :

{% include lightbox.html src="images/FirstStep_market1.jpg" data="FirstStep_market1" title="Inscription Market Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

Après validation, vous êtes connectés à votre compte et redirigés vers l'accueil :

{% include lightbox.html src="images/FirstStep_market2.jpg" data="FirstStep_market2" title="Accueil Market Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

### Service Pack

Les boxes officielles Jeedom sont accompagnées d'un code **Service Pack**, reçu par email, qui permet de bénéficier de plugins et de services gratuitement.

Pour activer votre Service Pack, il faut saisir ce code lorsque demandé après avoir cliqué sur le bouton **Je dispose d'un code** de l'onglet [**Mes services de votre profil market**](https://www.jeedom.com/market/index.php?v=d&p=profils#services){:target="_blank"}.

>**INFORMATION**
>
>Veuillez vous rapprocher de votre revendeur si vous n'avez pas reçu de code Service Pack suite à l'acquisition d'une box officielle Jeedom.

### Lien avec Jeedom

Afin que votre instance Jeedom puisse communiquer avec le market, il faut renseigner les identifiants de votre profil dans la configuration générale en passant par le menu **Réglages → Système → Configuration**.

Rendez-vous ensuite à l'onglet **Mises à jour/Market**, sous-onglet **Configuration des dépôts : Market** et renseignez les champs suivants avant de sauvegarder :

- Activer Market : cocher la case
- Adresse : `https://market.jeedom.com`
- Nom d'utilisateur : identifiant de votre profil market
- Mot de passe : mot de passe de votre profil market

>**INFORMATION**
>
>Vous pouvez cliquer sur le bouton **Tester** pour vérifier que la connexion s’effectue correctement.

### Accès à distance

Que vous disposiez d'un Service Pack ou que vous ayez souscrit au service **Accès à distance facilité** *(DNS Jeedom)*, Jeedom génère une adresse d'accès à distance permettant de s'y connecter hors du réseau local.

Pour activer ce service, il faut simplement se rendre dans le menu **Réglages → Système → Configuration**, onglet **Réseaux** :

{% include lightbox.html src="images/FirstStep_dns.jpg" data="FirstStep_dns" title="Réseaux Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

Cochez la case **Activer DNS Jeedom**, puis cliquez sur le bouton **(Re)démarrer**. Après un bref instant et une fois le service démarré, l'adresse d'accès à distance s'affiche à l'écran.

>**INFORMATION**
>
>Selon les circonstances, l'accès à distance peut prendre plusieurs heures pour être totalement fonctionnel.

Vous pouvez personnaliser l'adresse d'accès à distance en cliquant le bouton **Configuration** du service depuis [**votre profil market**](https://www.jeedom.com/market/index.php?v=d&p=profils#services){:target="_blank"}.

Retrouvez tous les détails dans [la documentation dédiée au service Accès à distance - DNS Jeedom](../howto/mise_en_place_dns_jeedom).

## Créer mon premier objet

Vous allez créer votre premier objet, mais d’abord il faut savoir ce qu’est un objet.

Dans Jeedom, cela peut être tout et n’importe quoi, mais il est recommandé de le faire en fonction de vos pièces.

> **Tip**
>
> Il est possible de définir des relations entre les objets. Exemple : le salon appartient à l’objet rez-de-chaussée qui appartient lui-même à l’objet maison.

Pour créer un objet, rien de plus simple :

-   Allez sur Outils → Objets.
-   Cliquez sur le bouton Ajouter.
-   Jeedom va vous demander le nom de celui-ci. Validez. Voilà votre premier objet créé :

![Objet](images/FirstStep_object.jpg)

Pour plus d’informations sur cette partie, voir *Manuel d'utilisation -> Objet*.

## Installer mon premier plugin

Un plugin permet d’ajouter des fonctionnalités à Jeedom. Il en existe des centaines. Beaucoup sont gratuits, d’autres peuvent être payants. Pour accéder à la page des plugins, aller sur Plugins → Gestion des plugins.

Il vous suffit ensuite de cliquer sur Market :

Vous allez alors avoir la liste de tous les plugins qu’il est possible d’installer.

> **Important**
>
> Attention, certains sont officiels et d’autres non. En cas de souci avec un plugin non officiel, l’équipe Jeedom ne pourra être tenue pour responsable.

![Liste des Plugins](images/FirstStep_plugin1.jpg)

En cliquant sur un plugin, vous obtenez sa fiche :

![Fiche Plugins](images/FirstStep_plugin2.jpg)

Vous retrouvez alors :

- Des boutons pour installer le plugin : la version stable est fortement recommandée,
- Un bouton pour supprimer le plugin,
- Une brève description,
- Un lien vers la documentation du plugin,
- Un lien vers le changelog (les dernières modifications apportées),
- La compatibilité avec les différentes plateformes,
- Les avis des utilisateurs,
- La façon d’utiliser le plugin,
- Des informations complémentaires comme l’auteur, le lien vers la discussion du forum concernant ce plugin, la date de dernière mise à jour, etc.

Pour plus d’informations sur les plugins, *Manuel d'utilisation -> Plugin*.

# Support

Jeedom aborde des champs très vastes et évoluant de jour en jour.
Cependant, de nombreux moyens sont mis à votre disposition pour trouver de l’aide et poser vos questions.

## Le forum

Vous le trouverez [ici](https://community.jeedom.com/).

Le forum est très actif et contient énormément d’informations. Si vous avez une question, n’hésitez pas à la poser. Vous aurez une réponse en moins d’une heure (en moyenne). Attention cependant, le forum est maintenu par la communauté Jeedom, composée de bénévoles, et non par la société Jeedom.

## Les demandes de support (ou tickets)

> **Important**
>
> Attention, toute demande de support nécessite obligatoirement d’avoir un compte sur le Market.

Si vous n’avez pas trouvé de solution à votre problème, en dernier recours, vous pouvez faire une demande de support à l’équipe Jeedom. Cette demande passe par un ticket. Il est possible d’en ouvrir un de plusieurs façons :

-   Directement à partir de Jeedom (méthode conseillée) : Menu Réglages → Demande de support.
-   Si pour une raison ou pour une autre vous n’avez pas accès à votre Jeedom, vous pouvez toujours ouvrir un ticket à partir du Market :
    -   soit en cliquant sur votre nom puis sur *Demande de support*,
    -   soit en allant sur votre profil, puis dans la partie **Tickets**, utilisez le bouton "Ouvrir une demande de support".

![Demande de support](images/FirstStep_support.jpg)

Toute la suite des échanges se fera par mail.

> **Tip**
>
> Si, lors de l’ouverture d’un ticket, vous obtenez une erreur indiquant que vous avez atteint votre quota, c’est que vous êtes limité à un certain nombre de demandes de support par mois, en fonction de votre Service Pack.

Les différents Services Packs sont :
- Community (gratuit) : 2 tickets/mois (sur plugins payants uniquement)
- Power : 10 tickets/mois
- Pro : 100 tickets/mois

Vous pouvez retrouver le détail des services packs [ici](https://www.jeedom.com/site/fr/soft.html#obtenir).

>**IMPORTANT**
>
>Attention on voit beaucoup d'utilisateurs avec des boites mail "mailinblack", qui lors du 1er échange demande à l'expédideur de valider un lien pour prouver que c'est bien un humain. Ce système n'est pas compatible avec notre systeme de ticketing, donc meme si on vous répond, vous ne receverez jamais la réponse dans votre boite mail car celle-ci nous bloque. Merci donc sur votre page profil du market de mettre une addresse mail n'utilisant pas ce système, sinon vous ne receverez jamais notre réponse.

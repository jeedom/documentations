# Premiers pas avec Jeedom

Cette documentation présente les étapes à suivre après la mise en service de votre box Jeedom.

## Interface

Votre instance Jeedom est accessible par son interface web à son adresse sur le réseau local.

### Accès local

Pour accéder à l'interface Jeedom, il est nécessaire de connaître l'adresse IP ou le nom d'hôte de la machine sur le réseau local.  :

#### Découverte automatique

Le market Jeedom propose [**un outil de découverte permettant de récupérer les adresses IP des instances Jeedom connectées au même réseau local**](https://www.jeedom.com/market/index.php?v=d&p=find){:target="_blank"}.

>**IMPORTANT**
>
>Il est nécessaire que la box soit démarrée depuis plusieurs minutes pour que la découverte Jeedom fonctionne.\
>De plus, cette fonctionnalité dépend de la configuration réseau appliquée localement et peut être inutilisable dans certaines conditions.

#### Routeur

Vous pouvez retrouver l'adresse IP de votre box Jeedom en accédant à l'interface d'administration de votre routeur ou box internet.

La plupart propose une liste des appareils/périphériques connectés, avec leur nom d'hôte, adresse MAC et adresse IP. Recherchez un périphérique nommé “Jeedom” ou identifiez-le via son adresse MAC.

>**IMPORTANT**
>
>Se référer au manuel du fabricant en cas de difficulté à atteindre l'interface d'administration du routeur.

#### Nom d'hôte

L'interface Jeedom est également accessible par le nom d'hôte de la machine.

-  [](../compatibility/#Images%20système%20officielles)  :

  | Machine            | Interface Jeedom   |
  |--------------------|--------------------|
  | **Luna** | [http://jeedomluna.local](http://jeedomluna.local){:target="_blank"} |
  | **Atlas** | [http://jeedomatlas.local](http://jeedomatlas.local){:target="_blank"} |
  | **Smart** | [http://jeedomsmart.local](http://jeedomsmart.local){:target="_blank"} |
  | **** *()* | [http://jeedom.local](http://jeedom.local){:target="_blank"} |
  | **Freebox** | [http://jeedomfreebox.local](http://jeedomfreebox.local){:target="_blank"} |

- Si vous avez vous-même procédé à l'installation de Debian, le nom d'hôte correspond au nom de la machine défini lors de l'installation (`MACHINE`). `DOMAIN = local` par défaut, ou le nom de domaine spécifique renseigné à l'installation si c'est le cas.

  L'adresse de l'interface Jeedom doit normalement correspondre à : `http://MACHINE.DOMAIN`.

#### 

 [](../compatibility/#Images%20système%20officielles),  *()*  :

{% include lightbox.html src="images/shell_ip.jpg" data="shell_ip" title=" : IP Jeedom" imgstyle="display:block;margin:0 auto;" %}

 :
sh
 |  ' | 


### First connection

[Une fois l'adresse de Jeedom connue](#Accès%20local), saisissez-la dans votre navigateur internet pour accéder à la page de connexion :

{% include lightbox.html src="images/FirstStep_box_connect.jpg" data="FirstStep_box_connect" title="Connexion Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

>**IMPORTANT**
>
>Les identifiants par défaut sont : `admin/admin`.

Lorsque vous vous connectez avec les identifiants par défaut, Jeedom vous invite à modifier le mot de passe `admin`. **Saisissez simplement 2 fois le nouveau mot de passe pour sécuriser l'accès de cet utilisateur**.

Il est également possible de modifier le mot de passe de l'utilisateur `admin` en cliquant sur le bouton **Password** de la page de gestion des utilisateurs *(accessible par le menu **Réglages → Système → Utilisateurs**)* :

{% include lightbox.html src="images/FirstStep_boxPassword.jpg" data="FirstStep_boxPassword" title="Password admin" imgstyle="width:75%;display:block;margin:0 auto;" %}

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

Afin que votre instance Jeedom puisse communiquer avec le market, il faut renseigner les identifiants de votre profil dans la configuration générale en passant par le menu **Settings → System → Configuration**.

Rendez-vous ensuite à l'onglet **Updates / Market**, sous-onglet **Configuration des dépôts : Market** et renseignez les champs suivants avant de sauvegarder :

- Activer Market : cocher la case
- Adresse : `https://market.jeedom.com`
- Username : identifiant de votre profil market
- Password : mot de passe de votre profil market

>**INFORMATION**
>
>Vous pouvez cliquer sur le bouton **Tester** pour vérifier que la connexion s'effectue correctement.

### Accès à distance

Que vous disposiez d'un Service Pack ou que vous ayez souscrit au service **Accès à distance facilité** *(DNS Jeedom)*, Jeedom génère une adresse d'accès à distance permettant de s'y connecter hors du réseau local.

Pour activer ce service, il faut simplement se rendre dans le menu **Réglages → Système → Configuration**, onglet **Réseaux** :

{% include lightbox.html src="images/FirstStep_dns.jpg" data="FirstStep_dns" title="Réseaux Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

Check the box **Activer DNS Jeedom**, puis cliquez sur le bouton **(Re)démarrer**. Après un bref instant et une fois le service démarré, l'adresse d'accès à distance s'affiche à l'écran.

>**INFORMATION**
>
>Selon les circonstances, l'accès à distance peut prendre plusieurs heures pour être totalement fonctionnel.

Vous pouvez personnaliser l'adresse d'accès à distance en cliquant le bouton **Configuration** du service depuis [**votre profil market**](https://www.jeedom.com/market/index.php?v=d&p=profils#services){:target="_blank"}.

Retrouvez tous les détails dans [la documentation dédiée au service Accès à distance - DNS Jeedom](../howto/mise_en_place_dns_jeedom).

## Create my first object

You will create your first object, but first you need to know what an object is.

In Jeedom, it can be anything and everything, but it is recommended to do it according to your rooms.

> **Tip**
>
> It is possible to define relationships between objects. Exemple : the living room belongs to the ground floor object which itself belongs to the house object.

Nothing could be simpler to create an object :

-   Go to Tools → Objects.
-   Click on the Add button.
-   Jeedom will ask you the name of it. Validate. This is your first object created :

![Objet](images/FirstStep_object.jpg)

For more information on this part, see *User manual -> Object*.

## Install my first plugin

A plugin allows to add functionality to Jeedom. There are hundreds. Many are free, others may be chargeable. To access the plugins page, go to Plugins → Plugins management.

Then just click on Market:

You will then have the list of all plugins that can be installed.

> **IMPORTANT**
>
> Please note, some are official and others are not. In the event of a problem with an unofficial plugin, the Jeedom team cannot be held responsible.

![Liste des Plugins](images/FirstStep_plugin1.jpg)

By clicking on a plugin, you get its file:

![Fiche Plugins](images/FirstStep_plugin2.jpg)

You then find :

- Buttons to install the plugin : the stable version is highly recommended,
- A button to remove the plugin,
- A brief description,
- A link to the plugin documentation,
- A link to the changelog (the latest changes),
- Compatibility with different platforms,
- User reviews,
- How to use the plugin,
- Additional information like the author, the link to the forum discussion regarding this plugin, the date of the last update, etc.

For more information on plugins, *User manual -> Plugin*.

# Support

Jeedom tackles very wide fields and evolving from day to day.
However, there are many ways to find help and ask your questions.

## The forum

You will find it [here](https://community.jeedom.com/).

The forum is very active and contains a lot of information. If you have a question, don't hesitate to ask it. You will have an answer in less than an hour (on average). Please note, the forum is maintained by the Jeedom community, made up of volunteers, and not by the Jeedom company.

## Support requests (or tickets)

> **IMPORTANT**
>
> Please note, all support requests must have an account on the Market.

If you have not found a solution to your problem, as a last resort, you can request support from the Jeedom team. This request goes through a ticket. There are several ways to open one:

-   Directly from Jeedom (recommended method): Settings menu → Support request.
-   If for some reason you do not have access to your Jeedom, you can always open a ticket from the Market :
    -   Either by clicking on your name and then on *Support request*,
    -   either by going to your profile, then in the section **Tickets**, use the button "Open a support request".

![Support request](images/FirstStep_support.jpg)

All further exchanges will be by email.

> **Tip**
>
> If, when opening a ticket, you get an error indicating that you have reached your quota, then you are limited to a certain number of support requests per month, depending on your service pack.

The different service packs are :
- Community (free): 2 tickets / month (on paid plugins only)
- Power : 10 tickets / month
- Pro : 100 tickets / month

You can find the detail of the service packs [here](https://www.jeedom.com/site/fr/soft.html#obtenir).

>**IMPORTANT**
>
>Be careful, we see a lot of users with "mailinblack" mailboxes, who during the first exchange ask the sender to validate a link to prove that it is indeed a human. This system is not compatible with our ticketing system, so even if we answer you, you will never receive the answer in your mailbox because it blocks us. So please put an email address on your market profile page that does not use this system, otherwise you will never receive our response.

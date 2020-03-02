# Mise en place du DNS Jeedom

## Objectif

Mettre en place le DNS Jeedom pour avoir un accès à son Jeedom en externe par une URL en HTTPS

> **IMPORTANT**
>
>Le DNS Jeedom agis comme un reverse proxy il ne donne donc accès qu'a votre Jeedom en https, il ne sera donc pas possible d'acceder à votre jeedom en SSH a distance avec le DNS Jeedom

## Pré-requis

Pour avoir accès aux DNS Jeedom il faut absolument avoir un service pack power ou plus.

## Principe

Le principe du DNS Jeedom est très simple, votre Jeedom va se connecter sur un de nos serveurs en VPN (connexion cryptée). Ensuite ce serveur en question chez nous fait du "reverse proxy" lors de la demande : il prend votre demande de connexion à votre jeedom et la transfert vers celui-ci.

Ce principe a l'avantage de ne pas exposer votre Jeedom sur internet, pas d'ouverture de port à faire.

> **IMPORTANT**
>
> Pour que cela fonctionne il faut que votre box autorise une connexion sortante sur les ports 1194,1195,1996,1997,1198,1199,2000 et 2001 en UDP. En particulier pour les Livebox et routeur 4g Huawei il faut baisser le niveau du firewall, pour les Freebox Delta il faut désactiver le contrôle parental

Nous avons actuellement 6 serveurs DNS répartis sur 2 machines physiques différentes, ayant chacun une connexion 500Mbit/s. 

## Mise en place

### Jeedom

Là c'est super simple, vous devez connecter votre Jeedom au market (voir documentation premier-pas). 

### Market

Une fois votre Jeedom lié au market, vous allez sur le market; puis sur votre profils (https://www.jeedom.com/market/index.php?v=d&p=profils) et enfin sur l'onglet "Mes Jeedoms".

### Retour à Jeedom

Une fois le status du market à "Connexion possible", allez sur votre Jeedom, dans l'administration de celui-ci allez sur l'onglet Réseaux et cochez "Utiliser les DNS Jeedom" puis sauvegardez.

Jeedom va démarrer le DNS et vous donner votre url d'accès à votre Jeedom

> **IMPORTANT**
>
> Vous pouvez changer cette url en allant sur votre page profils du market puis partie mes Jeedoms. Attention tout changement prend 24h avant d'être effectif

Voilà votre Jeedom est accessible de l'exterieure en https

## FAQ

> **Y a-t-il besoin d'ouvrir des ports sur ma box**
>
> Non il n'y a pas besoin d'ouvrir de port de votre box internet vers votre Jeedom. La connexion est dans le sens Jeedom -> VPN, c'est donc une connexion sortante (sur les ports 1194,1195,1996 et 1997) et non une connexion entrante.

> **Pourquoi le DNS Jeedom protège mon accès à celui-ci**
>
> Les DNS Jeedom permettent de mettre en place quelque chose de très important, un accès HTTPS, celui-ci garantit que la connexion entre votre navigateur et votre Jeedom est cryptée, de plus le certificat étant valide personne ne pourra se faire passer pour votre Jeedom. Enfin la connexion VPN en votre Jeedom et nos serveurs est elle aussi cryptée.

> **J'ai changé le port d'écoute interne de mon Jeedom et les DNS Jeedom ne fonctionnent plus**
>
> Effectivement le DNS Jeedom ne fonctionne que si votre Jeedom écoute sur le port local 80 (tous les autres ports sont fermés sur l'interface du VPN lors de la connexion). Cela ne pose pas de soucis de sécurité car le VPN crée un tunnel crypté, donc même si le flux est en clair sur le port 80 il est crypté dans le tunnel du VPN.

> **Je n'ai pas la page de connexion mais impossible de me connecter**
>
> Vérifiez que vous avez bien changé les identifiants par défaut de jeedom (admin/admin) et que votre utilisateur n'est pas restreint en local seulement.

> **Ma configuration est bonne mais impossible d'avoir une page ça tourne à l'infini**
>
> Si votre configuration est bonne (Initialization Sequence Completed dans le log openvpn_DNS_Jeedom) mais que vous n'arrivez pas à avoir la page de connexion qui marche avec l'application mobile de manière aléatoire et vous êtes en 4g ou en fin de ligne ADSL. Il faut dans ce cas cocher la case dans la configuration réseaux jeedom comme quoi vous etes en 4g et relancer le dns comme ca jeedom va changer le mtu de votre connexion pour reduire la taille des packets.

# Mise en place du DNS jeedom

## Objectif

Mettre en place le DNS jeedom pour avoir un accès à son jeedom en externe par une URL en HTTPS

> **importante**
>
>Le DNS jeedom agis comme un reverse proxy il ne donne donc accès qu'a votre jeedom en https, il ne sera donc pas possible d'acceder à votre jeedom en SSH a distance avec le DNS jeedom

## Requisitos previos

Pour avoir accès aux DNS jeedom il faut absolument avoir un service pack power ou plus.

## Principe

Le principe du DNS jeedom est très simple, votre jeedom va se connecter sur un de nos serveurs en VPN (connexion cryptée). Ensuite ce serveur en question chez nous fait du "reverse proxy" lors de la demande : il prend votre demande de connexion à votre jeedom et la transfert vers celui-ci.

Ce principe a l'avantage de ne pas exposer votre jeedom sur internet, pas d'ouverture de port à faire.

> **importante**
>
> Pour que cela fonctionne il faut que votre box autorise une connexion sortante sur les ports 1194,1195,1996,1997,1198,1199,2000 et 2001 en UDP. En particulier pour les Livebox et routeur 4g Huawei il faut baisser le niveau du firewall, pour les Freebox Delta il faut désactiver le contrôle parental

Nous avons actuellement 6 serveurs DNS répartis sur 2 machines physiques différentes, ayant chacun une connexion 500Mbit/s. 

## Mise en place

### jeedom

Là c'est super simple, vous devez connecter votre jeedom au market (voir documentation premier-pas). 

### mercado

Une fois votre jeedom lié au market, vous allez sur le market; puis sur votre profils (https://www.jeedom.com/market/index.php?v=d&p=profils) et enfin sur l'onglet "Mes jeedoms".

### Retour à jeedom

Une fois le status du market à "Connexion possible", allez sur votre jeedom, dans l'administration de celui-ci allez sur l'onglet Réseaux et cochez "Utiliser les DNS jeedom" puis sauvegardez.

jeedom va démarrer le DNS et vous donner votre url d'accès à votre jeedom

> **importante**
>
> Vous pouvez changer cette url en allant sur votre page profils du market puis partie mes jeedoms. Attention tout changement prend 24h avant d'être effectif

Voilà votre jeedom est accessible de l'exterieure en https

## Preguntas frecuentes

> **Y a-t-il besoin d'ouvrir des ports sur ma box**
>
> Non il n'y a pas besoin d'ouvrir de port de votre box internet vers votre jeedom. La connexion est dans le sens jeedom -> VPN, c'est donc une connexion sortante (sur les ports 1194,1195,1996 et 1997) et non une connexion entrante.

> **Pourquoi le DNS jeedom protège mon accès à celui-ci**
>
> Les DNS jeedom permettent de mettre en place quelque chose de très important, un accès HTTPS, celui-ci garantit que la connexion entre votre navigateur et votre jeedom est cryptée, de plus le certificat étant valide personne ne pourra se faire passer pour votre jeedom. Enfin la connexion VPN en votre jeedom et nos serveurs est elle aussi cryptée.

> **J'ai changé le port d'écoute interne de mon jeedom et les DNS jeedom ne fonctionnent plus**
>
> Effectivement le DNS jeedom ne fonctionne que si votre jeedom écoute sur le port local 80 (tous les autres ports sont fermés sur l'interface du VPN lors de la connexion). Cela ne pose pas de soucis de sécurité car le VPN crée un tunnel crypté, donc même si le flux est en clair sur le port 80 il est crypté dans le tunnel du VPN.

> **Je n'ai pas la page de connexion mais impossible de me connecter**
>
> Vérifiez que vous avez bien changé les identifiants par défaut de jeedom (admin/admin) et que votre utilisateur n'est pas restreint en local seulement.

> **Ma configuration est bonne mais impossible d'avoir une page ça tourne à l'infini**
>
> Si votre configuration est bonne (Initialization Sequence Completed dans le log openvpn_DNS_jeedom) mais que vous n'arrivez pas à avoir la page de connexion qui marche avec l'application mobile de manière aléatoire et vous êtes en 4g ou en fin de ligne ADSL. Il faut dans ce cas cocher la case dans la configuration réseaux jeedom comme quoi vous etes en 4g et relancer le dns comme ca jeedom va changer le mtu de votre connexion pour reduire la taille des packets.

# Mise en place du DNS Jeedom

## Objectif

Mettre en place le DNS Jeedom pour avoir un accès à son Jeedom en externe par une URL en HTTPS

> **IMPORTANT**
>
>Le DNS Jeedom agit comme un reverse proxy il ne donne donc accès qu'à votre Jeedom en https, il ne sera donc pas possible d'accéder à votre Jeedom en SSH à distance avec le DNS Jeedom

## Pré-requis

Pour avoir accès aux DNS Jeedom il faut absolument avoir un service pack power ou plus.

## Principe

Le principe du DNS Jeedom est très simple, votre Jeedom va se connecter sur un de nos serveurs en VPN (connexion cryptée). Ensuite ce serveur en question chez nous fait du "reverse proxy" lors de la demande : il prend votre demande de connexion à votre jeedom et la transfert vers celui-ci.

Ce principe a l'avantage de ne pas exposer votre Jeedom sur internet, pas d'ouverture de port à faire.

> **IMPORTANT**
>
> Pour que cela fonctionne il faut que votre box autorise une connexion sortante sur les ports 1194,1195,1196,1197,1198,1199,2000 et 2001 en UDP. En particulier pour les Livebox et routeur 4g Huawei il faut baisser le niveau du firewall, pour les personnes chez free il faut aussi parfois passer en ip fixe (sinon free partage votre ip entre plusieurs utilisateurs ce qui pose soucis au DNS) de plus pour les Freebox Delta il faut désactiver le contrôle parental 

## Mise en place

### Jeedom

Là c'est super simple, vous devez connecter votre Jeedom au market (voir documentation premier-pas). 

Puis sur votre Jeedom, dans l'administration de celui-ci allez sur l'onglet Réseaux et cochez "Utiliser les DNS Jeedom" puis sauvegardez.

Jeedom va démarrer le DNS et vous donner votre url d'accès à votre Jeedom

> **IMPORTANT**
>
> Vous pouvez changer cette url en allant sur votre page profil du market puis onglet mes services et cliquer sur configuration dans "Accès à distance facilité", la dans le champs DNS vous pouvez le personaliser. Après enregistrement il faut dans Jeedom redémarrer le DNS (Réglages -> Système -> Configuration puis onglet Réseaux et redémarrer dans la partie "DNS (proxy) Market"). Il est conseillé de faire cette manipulation avec un accès local à votre box.

Voilà votre Jeedom est accessible de l'extérieur en https

## FAQ

> **Y a-t-il besoin d'ouvrir des ports sur ma box**
>
> Non il n'y a pas besoin d'ouvrir de port sur votre box internet vers votre Jeedom. La connexion est dans le sens Jeedom -> VPN, c'est donc une connexion sortante (sur les ports 1194,1195,1996,1997,1198,1199,2000 et 2001) et non une connexion entrante.

> **Pourquoi le DNS Jeedom protège mon accès à celui-ci**
>
> Les DNS Jeedom permettent de mettre en place quelque chose de très important, un accès HTTPS, celui-ci garantit que la connexion entre votre navigateur et votre Jeedom est cryptée, de plus le certificat étant valide personne ne pourra se faire passer pour votre Jeedom. Enfin la connexion VPN entre votre Jeedom et nos serveurs est elle aussi cryptée.

> **J'ai changé le port d'écoute interne de mon Jeedom et les DNS Jeedom ne fonctionnent plus**
>
> Effectivement le DNS Jeedom ne fonctionne que si votre Jeedom écoute sur le port local 80 (tous les autres ports sont fermés sur l'interface du VPN lors de la connexion). Cela ne pose pas de soucis de sécurité car le VPN crée un tunnel crypté, donc même si le flux est en clair sur le port 80 il est crypté dans le tunnel du VPN.

> **Je n'ai pas la page de connexion mais impossible de me connecter**
>
> Vérifiez que vous avez bien changé les identifiants par défaut de jeedom (admin/admin) et que votre utilisateur n'est pas restreint en local seulement.

> **Ma configuration est bonne mais impossible d'avoir une page ça tourne à l'infini**
>

> **J'ai l'erreur "ERROR: Cannot open TUN/TAP dev /dev/net/tun: No such file or directory (errno=2)"**
>
> Cette erreur se produit en général sur les installations de type docker, comme indiqué dans la documentation de [compatibilité](https://doc.jeedom.com/fr_FR/compatibility/) le support de docker est beta justement à cause de ce genre de soucis. La solution est en général l'installation openvpn sur l'hôte (quand cela est possible)

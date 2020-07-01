# Plugin Deconz

Ce plugin permet par l'intermediaire d'une clef conbee (1 ou 2), de piloter l'outil deconz qui permet de faire du zigbee (module xiaomi, philips hue, ikea...).

Ce plugin est totalement cloudless, il ne fait donc aucune communication vers l'exterieure (serveur tierce) et fonction 100% en local !!!!

Attention le Zigbee ne marche pas du tout comme le Zwave, la liste des modules inclus n'est pas du tout sauvegardé dans la clef (rien n'est sauvegardé dans la clef). Donc il est facile de remplacer la clef (par backup/restaure, le backup peut etre récupéré depuis jeedom mais pas restauré depuis jeedom, il faut pour la restauration passer par Deconz, si vous etes en installation local c'est IP_JEEDOM:8484). Par contre en cas de déplacement de la clef d'un systeme à un autre il faut aussi faire un backup /restaure.

>**IMPORTANT**
>
> Ce plugin nécessite une clé USB [CONBEE](http://bit.ly/2n4VyWc)

>**IMPORTANT**
>
> Il faut absolument Debian Strech (debian 9) ou plus pour que le plugin puisse fonctionner

>**IMPORTANT**
>
> Le plugin n'est pas compatible avec une architecture 32bits (les vieux hardware). Le module est compatible avec tous les Raspberry Pi

>**IMPORTANT**
>
> Sur RPI il faut désactiver les options serial pour que la clef conbee fonctionne correctement (ca se passe en ssh dans raspi-config)

# Module compatible

Vous trouvez ici la liste des modules compatible deconz [ici](https://phoscon.de/en/conbee/compatible)

>**NOTE**
>
> L'ajout de module n'est pas geré directement pas Jeedom SAS mais par la societé editrice de la gataway Deconz. Donc nous ne pouvons garantir qu'une demande de support d'un nouveau module aboutisse. Il est donc fortement conseillé d'acheter un module compatible

>**NOTE**
>
> En cas d'un module dit compatible non supporté ou partiellement supporté la soceité Jeedom SAS ne pourra etre tenu responsable et n'a aucune obligatoire de résultat sur la correction du soucis

# Configuration du plugins

Le plugin support plusieurs gateway deconz (1 clef conbee par gateway). Une gateway conbee peut etre installer sur :

- jeedom lui meme (smart, rpi  et x64_86 supporté)
- un rpi deporté
- ou tout autre carte compatible avec deconz.

Pour l'installation en deporté voici la [documentation](https://phoscon.de/en/conbee/install)

Pour l'installation sur jeedom vous avez juste à cliquer sur le bouton pour installer deconz en local.

>**IMPORTANT**
>
> Il ne faut SURTOUT PAS faire les 2 methodes d'installation sur le meme système c'est l'un ou l'autre

>**NOTE**
>
>Pour mettre à jour deconz en local il vous suffit de recliquer sur le bouton d'installation de deconz en local

## Ajout des gateways

Pour ajouter de nouvelles gateway au plugin il faut soit sur la page de configuration du plugin (Plugin -> Gestion de plugins puis deconz), cliquer sur decouverte (ca ne marche pas toujours) ou alors a la main ajouter au moins l'ip de la gateway et le port.

Ensuite dans deconz (Phoscon, si vous l'avez installé en local il faut aller sur IPJEEDOM:8484) puis dans le menu en haut a gauche (les 3 petits trait) il faut aller sur "gateway" puis "advanced" et cliquer "Authenticate App" et enfin dans les 60s aller sur la configuration du plugin dans Jeedom, bien sauvegarder la liste des gateway si vous l'avez changer puis cliquer sur "Récuperer clef API".

# Réseaux deconz

Attention en haut a droite vous avez un bouton de selection pour choisir la gateway à regarder

## Résumé

Ici vous allez retrouver les informations principal de votre réseaux deconz (en particulier la version de deconz et de firmware).

## Action

La vous allez pouvoir :

- mettre à jour le firmware (ne marche que si il n'y a aucune autre clef USB de branché sur la machine)
- faire un reset (attention ca oblige à tout réassocier)
- changer la source de mise à jour du firmware (il est déconseillé d'y touché)
- changer le channel

## Noeuds

Vous avez ici un résumé des noeuds connu de la clef, avec la date de derniere communication, la version du firmware, le niveau de batterie et en cliquant sur le bouton info le details du noeud.

>**NOTE**
>
>Ici les noeuds sont découpé par type, donc un module peut aparaitre plusieurs fois en fonction du nombre de type

# Inclusion

Pour l'inclusion vous avez juste à cliquer sur le bouton inclusion, le systeme vous demande la gateway une fois validé vous avez 3min pour faire celle-ci.

Pour passer le module en mode inclusion il faut aller voir la documentation du module en question

>**IMPORTANT**
>
> Le réseaux Zigbee est très different du réseaux Zwave, le zigbee peut passer par un repeteur mais il faut que ca soit le cas dès l'inclusion. Il faut donc lors de l'inclusion du module le faire soit au plus pres de la clef si vous ne voulez pas que la communication passe par un repeteur (attention vous pouvez avoir au maximum 32 modules en direct sur la clef conbee).Ou au plus pres du repeteur (tout module alimenté peut etre un repeteur).

# Synchronisation

Une fois l'inclusion faite Jeedom devrait vous envoyer directement sur la page du nouveau module. Si la decouverte n'a pas marché cliquez simplement sur synchroniser

# Equipement

Vous retrouvez dans le premier onglet toute la configuration de votre équipement :

- Nom de l’équipement : nom de votre équipement Simulation,
- Objet parent : indique l’objet parent auquel appartient l’équipement,
- Activer : permet de rendre votre équipement actif,
- Visible : rend votre équipement visible sur le dashboard.
- Un bouton de configuration qui en fonction du module vous proposera les options possible (attention ici jeedom vous affiche les options tel que le module les proposes desfois cela n'a pas beaucoup de sens en fonction du module)
- les informations général sur le module
- le choix du visuel

>**IMPORTANT**
>
> Ici la gestion des commandes n'est pas du tout comme le zwave. Lors de l'inclusion d'un module il y a plusieurs cas possible :
> - le module a une configuration spécifique : dans ce cas vous avez le visuel du module ainsi qu'une configuration adaptée (c'est rarement le cas car peut necessaire en zigbee)
> - le module a une configuration generique en fonction des types  : vous avez un visuel generique et les commande correspondant aux types du module (c'est le cas le plus courant)
> - le module et les types sont inconnus de jeedom : dans ce cas il faut ouvrir une demande de support pour qu'on l'ajoute dans la mise à jour suivante du plugin

# Sauvegarde

Le plugin effectue une sauvegarde du réseau contenu dans la clé dans un fichier local, vous pouvez la télécharger depuis la page configuration.

# Restauration

Lors d’une restauration d’une sauvegarde Jeedom, les équipements sont restaurées mais pas rattaché à la clé, vous pouvez être amené à devoir réinstallé la clé. Pour ce faire vous aurez besoin de la sauvegarde cité plus haut. Ce fichier sera à inclure dans dans Phoscon mais il faut au préalable changer l’extension du fichier .dat en .tar.gz

Ensuite rendes-vous dans l’interface de Phoscon. Menu => Gateway => Backup Option => Load Backup.

Il ne vous reste plus qu’à faire une découverte de clé API, Sauvegarder et enfin une synchronisation depuis la page du plugin.

# Mise à jour firmware

## Conbee II

Vous pouvez le faire directement depuis jeedom si la clef est branchée sur celui-ci, à partir de la configuration du plugin

## Conbee

Aller sur [ici](https://www.dresden-elektronik.de/rpi/deconz-firmware/?C=M;O=D) et verifiez si il y a un nouveau firmware, si oui le récuperer

````
wget https://www.dresden-elektronik.de/rpi/deconz-firmware/deCONZ_Rpi_0x26300500.bin.GCF
sudo GCFFlasher_internal -d 0 -f deCONZ_Rpi_0x26300500.bin.GCF
````

>**IMPORTANT**
>
>Attention pour pouvoir flasher il faut absolument que tous les démon sur clef USb (zwave,enocean,rfxcom...) soit coupé et verifiez que la clef est bien en 0 avec ``GCFFlasher_internal -l``. Il est conseillé de debrancher les autres clef

# FAQ

>**Le démon démarre et se coupe tout seul au bout d'une minute**
>
>Si vous etes sous RPI le serial n'a pas du etre coupé (ca se passe dans raspi-config)

>**J'ai un équipement daylight dans liste des noeuds mais pas dans Jeedom**
>
>C'est normalement c'est un équipement virtuel non supprimable créé par Deconz. Vu que c'est pas un "vrai" équipement Jeedom ne le remonte pas

>**J'ai l'erreur "Erreur lors de la requete : 127.0.0.1:8484/api/931559A482/sensors(POST), data : null erreur : 1 => unauthorized user"**
>
>Vous n'avez pas autorisé Jeedom a se connecter à Deconz, il faut dans deconz (Phoscon, si vous l'avez installé en local il faut aller sur IPJEEDOM:8484) puis dans le menu en haut a gauche (les 3 petits trait) il faut aller sur "gateway" puis "advanced" et cliquer Authenticate App et enfin dans les 60s aller sur la configuration du plugin dans Jeedom, bien sauvegarder la liste des gateway si vous l'avez changer puis cliquer sur "Récuperer clef API"

>**Mon rpi (4) ne voit pas la clef deconz**
>
>Il faut mettre a jour le firmware de clef a l'aide d'un autre systeme (windows)

>**J'arrive a piloter mes équipements mais je n'ai pas de retour sur les commandes d'informations**
>
>Cela vient surement d'un soucis sur les fuseaux horaires (deconz est très pointilleux la dessus). Il faut :
>- vérifier dans "Réseaux deconz" que la timezone et l'heure sont correcte si non vous pouvez soit le configurer dans deconz soit cocher la case "Fuseaux horaire" sur la gateway dans la configuration du plugin deconz (si vous faite cette derniere méthode il faut attendre 1h avant que la correction soit effective)
>- vérifier le fuseau horaire de votre OS (en particulier sur les rpi) qui doit absolument etre bon

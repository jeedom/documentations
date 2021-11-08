# Plugin IPX800v5

>**IMPORTANT**
>
> Ce plugin est une ébauche, au vu de l'api mise à disposition par le fabricant nous ne pouvons faire que peu de chose

## Description

>**IMPORTANT**
>
> Attention du à la complexité de l'api mise à disposition par le fabricant ce plugin n'est pas recommandé pour les débuts. Si vous pouvez partez plutot sur un ipx800v4 bien plus simple.

Ce plugin permet de connexion Jeedom à un ipx800v5.

## Configuration

Sur la configuration du plugin vous pouvez choisir les api a appeller ainsi que la fréquence

>**NOTE**
>
> Il semble que l'api core/io soit suffisante pour tous ce qui est pilotage/recuperation d'information binaire

## Equipements

Sur les équipements vous avez juste à configurer la partie IP et clef API (se genere depuis l'interface de l'ipx800 partie System puis "APIKEY")

### Commandes

La c'est plus compliqué... Pour la recuperation d'infomations il faut dans le champs "Clef" mettre le chemin vers l'information sous la forme `xxx::yyy::yyy` ou `xxx::yyyy`.

>**NOTE**
>
>Pour le numéro de l'éxtension nous ne savons pas comment la trouver depuis l'interface... Le plus simple il faut dans votre navigateur faire `#IP_IPX#/api/ebx/x4vR?ApiKey=#apikey#` en remplacant bien l'ip et l'apikey et vous allez avoir la liste de toute les extension x4vr ainsi que leur id. Pour les x8r il suffit de remplacer x4vr par x8r 

#### Informations

- `65536::on` : permet de recuperer le status (on/off) de la variable 65536 qui représente l'état de la sortie relais 1 (ou c'est complique je confirme mais c'est le fabricant qui décide). Pour trouver les numéros des variables il faut aller dans "Links" puis "Variables" et la a gauche cliquer sur l'IO voulu, dans le cadre au milieu vous avez alors l'id de la variable
- `ipx::ioRelayState::0` : donne l'état du relai 0 (le 1 en réel sur l'ipx, pour ce type de commande il faut ajouter 1 à chaque fois) de l'ipx
- `ipx::ioRelayState::7` : donne l'état du relai 7 (le 8 en réel sur l'ipx, pour ce type de commande il faut ajouter 1 à chaque fois) de l'ipx
- `ipx::ana_IPX_Input::0` : donne la valeur de l'entrée analogique 0 (le 1 en réel sur l'ipx, pour ce type de commande il faut ajouter 1 à chaque fois)
- `ipx::ioDInput::3` : donne la valeur de l'entrée binaire 3 (le 4 en réel sur l'ipx, pour ce type de commande il faut ajouter 1 à chaque fois)
- `4456448::anaCommand::2` :  donne la position (en %) du volet 3 relié à une extension x4vr ayant pour numéro `4456448`
- `4259841::ioOutputState::2` :  donne l'état de sortie 3 (toujours le +1 à faire) de l'extension x8r ayant pour numéro `4259841`
- `4259841::ioLongPush::2` :  donne l'état l'entrée 3 (toujours le +1 à faire) lors d'un appui long de l'extension x8r ayant pour numéro `4259841`

#### Actions

- `core::io::65536::{"on":true}` : permet d'activer la variable 65536 qui représente la sortie relais 1. Pour trouver les numéros des variables il faut aller dans "Links" puis "Variables" et la a gauche cliquer sur l'IO voulu, dans le cadre au milieu vous avez alors l'id de la variable
- `core::io::65536::{"on":false}` : idem pour mettre à off

>**NOTE**
>
>Pour le moment nous ne savons pas piloter les extensions. Le soucis vient de l'api qui oblige à renvoyer l'état voulu de toute les sortie de l'extension d'un coup. Probleme si vous etes en train de fermer un volet puis vous voulez en fermer un autre le 1er à de grand chance de s'arreter si vous n'attendez pas qu'il finisse de se fermer... 

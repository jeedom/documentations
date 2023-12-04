# Plugin Luna

# depuis le 27/03/2023 nouvelle image Jeedom Luna (dit V2)

Vous pouvez faire une maj sans perte de backup etc en cliquant sur "Mise à jour du module de Recovery". cela redémarrera votre Jeedom Luna mais vous ne perdrez pas vos configurations. Cela fera des changements dans le module de recovery et de boot de la box ce qui permettra une meilleure stabilité de celle-ci.

# Attention souci de Flashage des Luna

Nous avons eu un retour sur une erreur de flashage de certaines boxs Jeedom Luna. (uniquement celles expédiées avant 2023)
Nous sommes désolé pour ceci et avons prévenu notre revendeur Domadoo.

Si vous arrivez à vous connecter à votre Jeedom, merci de lancer le plugin Luna (Plugins/Passerelle domotique/luna) et d'aller dans :

- Mise à jour du module de Recovery
Puis faire le recovery dans :
- Recovery (Reset Factory)
Cela mettra a jour votre Box complètement.

Si vous n'avez pas d'accès à votre box, merci de laisser appuyé le bouton reset de la box pendant plus de 10 secondes; au relâchement de ce dernier, la box devrait clignoter.
Laissez-la finir le processus. Jeedom devrait redevenir opérationnel. Vous pourrez faire la procedure ci-dessus pour une mise à jour complète.

Si elle ne clignote pas :

- Veuillez contacter Domadoo via le lien suivant; l'équipe Domadoo vous fournira une étiquette de retour et vous réexpédiera une Luna correctement flashée :
<https://www.domadoo.fr/rma>

# Les fonctionnalités du plugin Luna

> USB Fix

Dans la version du plugin Luna du 02/05/2023, le port Zigbee a été fixé, vous devez utiliser le port ttyUSBLUNA-Zigbee.
Pour les usb externes, cela ce fixe aussi automatiquement avec le nom et ou numero de série.

> Mise à jour du module de Recovery

La mise à jour permet de mettre la dernière image en place sur la Luna; celle-ci utilisera cette image lors d’un recovery (bouton reset de la box ou bouton recovery sur le plugin).
Cliquer sur le bouton recovery; la Luna téléchargera la dernière version de son image et redémarrera, les leds vertes sur le boîtier de la Luna vont clignoter.
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via <http://jeedomluna.local>; le logiciel de recovery sera à jour.

> Recovery (Reset Factory)

Lors d’un reset factory la box est rétablie en configuration d’usine selon l’image mise a jour via le bouton donné ci-dessus.
ATTENTION : Il faut faire un backup de votre box avant cette opération car vous allez perdre les données de votre box (excepté le backup sur la carte SD).

> LED

Vous pouvez via la commande de type select changer la couleur et l’animation de la led (peut être éteinte).

> Batterie

Vous pouvez, via deux retours d’informations, avoir le pourcentage de batterie ainsi que le type d’alimentation de votre box. (`Charging`, `Discharging`, `Full` etc).

> SD

Permet la gestion (formatage) de la carte micro-SD que vous pouvez ajouter à la box, ainsi que le transfert vers cette carte SD des backups Jeedom.

> Les boutons Alimentation et Reset (v1) Plugin Luna pas à jour

- Reset : moins de 1 seconde pour un reboot forcé de la box.
- Reset : plus de 10 secondes pour un Reset Factory de la box.
- Alimentation : plus de 10 secondes pour un arrêt de la fox forcé avec arrêt de la batterie (il faut préalablement enlever l'alimentation électrique pour le faire).

> Les boutons Alimentation et Reset (v2 nouvelle image)

- Bouton Reset : moins de 1 seconde pour un redémarrage materiel de la box Luna.

- Bouton Alimentation : entre 1 et 4 secondes pour un arrêt ou allumage de la batterie (Orange = éteint, Vert = Allumé).
- Bouton Alimentation : entre 5 et 9 secondes redémarrage de la box (clignotement bleu au relâchement).
- Bouton Alimentation : entre 10 et 20 secondes pour un arrêt de la box (clignotement orange au relâchement).
- Bouton Alimentation : plus de 30 secondes pour Reset Factory de la box (clignotement rouge au relâchement).

> Lora (uniquement pour les boxs Jeedom Luna vendues avec le module Lora de Jeedom)

- Détection automatique du module et lancement du packet forwarder, sur le localhost de la Jeedom. Utiliser le plugin LNS pour installation de l'applicatif; rien est à faire depuis le plugin Luna, tout est automatique.
- possibilité de le désactiver dans la partie LTE

> Hotspot (plugin Luna BETA)

Dans la partie Wifi du plugin vous pouvez cocher la case Hotspot ce qui vous permettra de créer un point d'accès wifi sur votre Box luna. (DNS et forwarding IP (pont entre Ethernet et wifi) fonctionnels dessus).

> Fixer une IP

- vous pouvez dans la page Ethernet ou wifi du plugin luna fixer les adresses ip de celle-ci, pour fixer l'Ethernet vous devez au préalable avoir une connexion wifi activer.

> Prioriser les connexions

Vous pouvez dans la page d'accueil du plugin priorisé les connexions pour que la box passe de l'Ethernet au wifi si pas de connexion ou l'inverse.

> Le plugin luna vous permet de vous connecter depuis votre luna à un réseau Wifi (avec ou sans mot de passe).

Pour ce faire, aller dans le plugin luna, puis sélectionner l’équipement Luna. A cet endroit vous pouvez activer puis sélectionner le wifi que vous souhaitez (2.4Ghz et 5Ghz), puis taper le mot de passe et sauvegarder.

Pour le moment, le plugin prend en compte uniquement les accès avec DHCP.

> 4G (uniquement compatible avec les boxs Jeedom Luna 4G)

Détection automatique de la 4G interne à la box. Merci de bien vouloir passer par le plugin Luna et cliquer sur 'Détecter le module LTE' Demande code pin et APN dans la page LTE du plugin Luna.
si 4G détectée, lancement d'un module de connexion en arrière plan qui passe automatiquement de l'Ethernet ou wifi à la 4G au besoin.
Le plugin SMS fonctionne en meme temps que la 4G sur la Luna 4G.
Les paramétrages se font dans la page LTE du plugin.

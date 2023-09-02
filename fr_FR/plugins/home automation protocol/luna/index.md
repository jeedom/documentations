# Plugin luna

# depuis le 27/03/2023 nouvelle image Jeedom Luna
Vous pouvez faire une maj sans perte de backup etc en cliquant sur "Mise à jour du module de Recovery". cela redemarera votre jeedom Luna mais vous ne perdrai pas vos configuration. cela fera des changement dans le module de recovery et de boot de la box ce qui permettra une meilleur stabilité de celle-ci.

# Attention souci de Flashage des Luna

Nous avons eu un retour sur une erreur de flashage de certaines Lunas. (uniquement celles expediées avant 2023)
Nous sommes désolé pour ceci et avons prévenu notre revendeur Domadoo.

Si vous arrivez à vous connecter à votre Jeedom, merci de lancer le plugin Luna (Plugins/Passerelle domotique/luna) et d'aller dans : 
  - Mise à jour du module de Recovery
Puis faire le recovery dans :
  - Recovery (Reset Factory)
Cela mettra a jour votre Box completement.

Si vous n'avez pas d'accés à votre box, merci de laisser appuyé le bouton reset de la box pendant plus de 10 secondes; au relachement de ce dernier, la box devrait clignotée;laissez-la finir le processus. Jeedom devrait redevenir operationnel. Vous pourrez faire la procedure ci-dessus pour une mise à jour complete.

Si elle ne clignote pas : 
 - Veuillez contacter Domadoo via le lien suivant; l'équipe Domadoo vous fournira une étiquette de retour et vous réexpédiera une Luna correctement flashée :
https://www.domadoo.fr/rma

# Les fonctionnalités du plugin Luna :

> USB Fixe

Dans le plugin Luna du 02/05/2023, le zigbee a été fixé, vous devez utiliser le port ttyUSBLUNA-Zigbee. pour les usb externe cela ce fixe aussi automatiquement avec le nom et ou numero de série.

> Mise à jour du module de Recovery

La mise à jour permet de mettre la dernière image en place sur la Luna; celle-ci utilisera cette image lors d’un recovery (bouton reset de la box ou bouton recovery sur le plugin).
Cliquer sur le bouton recovery; la Luna téléchargera la dernière version de son image et redémarrera, les leds vertes sur le boitier de la Luna vont clignoter. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; le logiciel de recovery sera à jour.

> Recovery (Reset Factory)

Lors d’un reset factory la box est rétablie en configuration d’usine selon l’image mise a jour via le bouton donné ci-dessus. ATTENTION : il faut faire un backup de votre box avant cette opération car vous allez perdre les données de votre box (excepté backup sur la SD).

> LED

Vous pouvez via la commande de type select changer la couleur et l’animation de la led (peut être éteinte).

> Batterie

Vous pouvez,via deux retours d’informations, avoir le pourcentage de batterie ainsi que le type d’alimentation de votre box. (charging, decharging, Full etc…).

> SD

Permet la gestion (formatage) de la carte micro-SD que vous pouvez ajouter à la box, ainsi que le transfert vers cette carte SD des backups Jeedom.

> Les boutons Alimentation et Reset (v1)

- Reset : moins de 1 secondes reboot forcer de la box.
- Reset : plus de 10 secondes Reset Factory de la box.
- Alimentation : plus de 10 secondes arret de la fox forcer avec arret de la batterie (il faut avoir enlever l'alimentation electrique pour le faire)

> Les boutons Alimentation et Reset (v2 nouvelle image)

- Reset : redemarrage materiel de la Luna
- Alimentation : plus de 5 secondes arret ou allumage de la batterie (Orange > eteind, Vert Allumé)
- Alimentation : plus de 15 secondes redemmarage de la box. (cligontement bleu au relacher)
- Alimentation : plus de 40 secondes Arret de la box. (clignotement Orange au relacher)
- Alimentation : plus de 60 secondes reset factory de la box. (clignotement Rouge au relacher)

> Lora (uniquement pour les luna vendu avec me lodule lora de Jeedom)

- detection automatique du module et lancement du packet forwarder, sur le localhost de la jeedom. utiliser le plugin LNS pour installation de l'applicatif. (rien est a faire depuis le plugin Luna tout est automatique)

# Bientôt Disponible : Hotspot, 4G (pour les Luna 4G), LORA (pour les Luna Lora)

> Hotspot (ALPHA)

Dans la partie Wifi du plugin vous pouvez cocher la case Hotspot ce qui vous permettra de créer un point d'accès wifi sur votre Box luna. (DNS et forwarding IP (pont entre ethernet et wifi) fonctionnel dessus).

> Le plugin luna vous permet de vous connecter depuis votre luna à un réseau Wifi (avec ou sans mot de passe).

Pour ce faire, aller dans le plugin luna, puis sélectionner l’équipement Luna. A cet endroit vous pouvez activer puis sélectionner le wifi que vous souhaitez (2.4Ghz et 5Ghz), puis taper le mot de passe et sauvegarder.

Pour le moment, le plugin prend en compte uniquement les accès avec DHCP.

> 4G (uniquement compatible avec les Luna 4G)

Detection automatique de la 4G interne a la box merci de bien vouloir passer par le plugin pour cliquer sur detecter le module LTE si vous ne voyer pas les parametres dans la partie configuration, demande code pin et APN dans la configuration du plugin Luna.
si 4G detecter lancement d'un module de connexion en arriere plan qui passe automatiquement de l'ethernet a la 4G si besoin (ping vers 8.8.8.8), le plugin SMS fonctionne en meme temps que la 4G sur la Luna 4G.
Les parametrages ce font dans la configuration du plugin.

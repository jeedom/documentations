# Plugin luna

# Bientôt Disponible : Hotspot

> Le plugin luna vous permet de vous connecter depuis votre luna à un réseau Wifi (avec ou sans mot de passe).

Pour ce faire, aller dans le plugin luna, puis sélectionner l’équipement Luna. A cet endroit vous pouvez activer puis sélectionner le wifi que vous souhaitez (2.4Ghz et 5Ghz), puis taper le mot de passe et sauvegarder.

Pour le moment, le plugin prend en compte uniquement les accès avec DHCP.

> Mise à jour du module de Recovery

La mise à jour permet de mettre la dernière image en place sur la Luna; celle-ci utilisera cette image lors d’un recovery (bouton reset de la box ou bouton recovery sur le plugin).
Cliquer sur le bouton recovery; la Luna téléchargera la dernière version de son image et redémarrera, les leds vertes sur le boitier de la Luna vont clignoter. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; le logiciel de recovery sera à jour.

> Recovery (Reset Factory)

Lors d’un reset factory la box est rétablie en configuration d’usine selon l’image mise a jour via le bouton donné ci-dessus. ATTENTION : il faut faire un backup de votre box avant cette opération car vous allez tout perdre lors de cette phase. (sauf backup sur la SD).

> LED

Vous pouvez via la commande de type select changer la couleur et l’animation de la led (peut être éteinte).

> Batterie

Vous pouvez via deux retours d’informations avoir le pourcentage de batterie ainsi que le type d’alimentation de votre box. (charging, decharging, Full etc…).

> SD

Permet la gestion (formatage) de la carte micro-SD que vous pouvez ajouter à la box, ainsi que le transfert vers cette carte SD des backups Jeedom.

> Hotspot (ALPHA)

Dans la partie Wifi du plugin vous pouvez cocher la case Hotspot ce qui vous permettra de créer un point d'accès wifi sur votre Box luna. (DNS et forwarding IP (pont entre ethernet et wifi) fonctionnel dessus).
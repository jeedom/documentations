# Plugin luna

# Bientôt Disponible : Hotspot, SD (transfert backup automatique)

> Le plugin luna vous permet de vous connecter depuis votre luna à un réseau Wifi (avec ou sans mot de passe).

Pour ce faire, allez dans le plugin luna, puis sélectionnez l'équipement Luna.
A cet endroit vous pouvez activer puis sélectionner le wifi que vous souhaitez (2.4Ghz et 5Ghz), puis tapez le mot de passe et sauvegarder.

Pour le moment, le plugin prend en compte uniquement les accès avec DHCP.

> Mise à jour du module de Recovery

La mise à jour permet de mettre la derniere image en place sur le la Luna, celle-ci utilisera cette image lors d'un recovery (bouton reset de la box ou bouton recovery sur le plugin)
Cliquez sur le bouton recovery, La luna telechargera la derniere version de son image et reboutera, les led verte dessus celle-ci vont clignotées une fois fixe vous pourrez y acceder de nouveau via sont adresse ip ou via http://jeedomluna.local, le logiciel de recovery sera à jour.

> Recovery (Reset Factory)

Lors d'un reset factory la box est retabli en configuration d'usine celon l'image mise a jour via le bouton donné ci-dessus. ATTENTION il faut faire un backup de votre box avant cette opertation car vous allez tout perdre lors de cette phase. (sauf backup sur la SD).

> LED

Vous pouvez via la commande de type select changer la couleur et l'annimation de la led (peut-etre eteinte).

> Batterie

Vous pouvez via deux retour d'information avec le pourcentage de batterie ainsi que le type d'alimentation de votre box. (charging, decharging etc...).

> Hotspot (ALPHA)

dans la partie Wifi du plugin vous pouvez cocher la case Hotspot ce qui vous permettra de créer un point d'accès wifi sur votre Box luna. (DNS et forwarding IP (pont entre ethernet et wifi) fonctionnel dessus).

> SD (ALPHA)

Permet la gestion (formatage) de la carte micro-SD que vous pouvez ajouter a la box. ainsi que le transfert vers cette carte SD des backups Jeedom.
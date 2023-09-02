# Plugin Nut

Ce plugin permet de récupérer les informations en provenance d’un serveur NUT (Network UPS Tools)

## Configuration du plugin

Après téléchargement du plugin, il suffit juste de l’activer et d’installer les dépendances en cliquant sur "Relancer"

## Configuration des équipements

La configuration des équipements NUT est accessible à partir du menu plugin :

![nut2](./images/nut2.PNG)

Voilà à quoi ressemble la page du plugin NUT (ici avec déjà 1 équipement) :

![nut3](./images/nut3.PNG)

Une fois que vous cliquez sur l’un d’eux, vous obtenez :

![nut4](./images/nut4.PNG)

Vous retrouvez ici toute la configuration de votre équipement :

- **Nom de l’équipement** : nom de votre équipement NUT,
- **Objet parent** : indique l’objet parent auquel appartient l’équipement,
- **Catégorie** : catégorie de votre équipement NUT
- **Activer** : permet de rendre votre équipement actif,
- **Visible** : rend votre équipement visible sur le dashboard,
- **Adresse IP NUT** : L’adresse IP du serveur NUT
- **Nom d’utilisateur** : nom d’utilisateur du serveur NUT (laisser vide si il n’y en a pas)
- **Mot de passe** : Mot de passe du serveur NUT (laisser vide si il n’y en a pas)
- **ID de l’ups** : ID de l’UPS

> **Notes**
>
> Un serveur NUT peut gérer plusieurs UPS, c’est alors l’ID de l’UPS qui permet d’indiquer à Jeedom à quel UPS l’équipement fait référence
>
> Si vous ne connaissez pas l’ID de votre/vos UPS laissez le champs vide puis enregistrez l’équipement, Jeedom va automatiquement remplir le champs ID de l’UPS et créer autant d’équipement que vous avez d’UPS sur votre serveur NUT.
>
> Si votre serveur NUT est sur un NAS Synology, le nom utilisateur est 'monuser', le mot de passe 'secret' et l’ID 'ups'. Bien qu’en laissant la zone vide le plugin la rempli dans la plupart des cas.

## Configuration des commandes

Dans le deuxième onglet vous retrouvez la liste des commandes, le plugin créera la plupart des commandes automatiquement selon les informations reçues du serveur NUT.

> **Important**
>
> Les commandes créées peuvent être différentes en fonction des installations, cela dépend de ce que renvoi le serveur NUT

Si votre UPS retourne une information qui n'est pas (encore) prise en charge par le plugin, vous pouvez manuellement ajouter une commande à votre équipement.

- Cliquez sur le bouton *Ajouter une commande*
- Entrez un nom
- Choisissez le sous-type (Numérique, binaire ou autre)
- Dans le champ *Config* vous devez entrer le nom de la valeur tel que retourné par le serveur NUT, l'information est visible dans le log en mode DEBUG.

> **Important**
>
> Ne modifiez pas la configuration des commandes créées automatiquement par le plugin.

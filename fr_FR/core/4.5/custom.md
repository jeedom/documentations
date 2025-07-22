# Personnalisation Avancée
**Réglages → Système → Personnalisation avancée**

Vous pouvez ici gérer des fonctions **javascript** et des règles **CSS** appliqués en desktop ou en mobile.

> **Attention**
>
> L'utilisation de règles CSS inappropriées peu casser l'affichage de votre Jeedom. Des fonctions js non correctement utilisées peuvent créer des dommages importants à différents composants de votre installation. Pensez à générer et externaliser une sauvegarde avant d'utiliser ces fonctions.

Cette fonction utilise un mode particulier de l'éditeur de fichier du Core avec deux emplacements :

- desktop / custom : Peut contenir les deux fichiers **custom.js** et **custom.css** qui seront chargés par le Core en version Desktop.
- mobile / custom : Peut contenir les deux fichiers **custom.js** et **custom.css** qui seront chargés par le Core en version Mobile.

Dans la barre de menu de l'éditeur de fichier du Core, un bouton **Activé** ou **Désactivé** vous indique si le Core doit les charger ou non. Cette option est également disponible dans **Réglages → Système → Configuration** onglet Interface.

> **Remarque**
>
> Au lancement de cette page, l'arborescence est créée automatiquement, ainsi que les 4 fichiers avec un commentaire en 1ère ligne comprenant la version du Core qui les a créés.

## Ressources

[CSS: Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS)

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Astuces pour la personnalisation de l'interface](https://kiboost.github.io/jeedom_docs/jeedomV4Tips/Interface/)

## En cas de problème

Injecter du JS et/ou du CSS peut rendre Jeedom inopérant.

Dans ce cas, deux solutions :

- Ouvrez un navigateur en mode rescue : `IP/index.php?rescue=1`
- Se connecter en SSH et supprimer les fichiers de customisation : `desktop/custom` et `mobile/custom`

## Exemple de personalisation avancée dans le CSS

Tous ces exemples sont à mettre dans le fichier CSS (n'oubliez pas d'activer la personnalisation avancée en haut)

### Suppression des barres de défilement sur les widgets

```
.eqLogic-widget .cmds{
 overflow-x: hidden !important;
 overflow-y: hidden !important;
}
```

### Supprimer la largeur/hauteur minimal des widgets

Ça permet d'avoir des widgets plus petits (largeur [min-width], hauteur [min-height]) mais attention cela peut rendre l'affichage moins joli.

```
div.cmd-widget .content,
div.cmd-widget .content-sm,
div.cmd-widget .content-lg,
div.cmd-widget .content-xs {
  min-width: unset !important;
  min-height: unset !important;
}
```

### Ajout de marges entre le nom des objets et les équipements sur le dashboard 

```
.div_object legend .objectDashLegend {
  margin-bottom: 5px;
}
```

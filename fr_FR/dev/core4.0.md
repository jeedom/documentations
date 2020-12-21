### Core v4.0 | Développeurs de plugin

#### Compatibilité V4 sur le market

La v3 qui sortira en Novembre 2020 aura un module de migration permettant de passer de la V3 à la V4.

Lors de la phase de migration des v3 vers la v4, les plugins sans compatibilité v4 dans leur info.json alerteront l’utilisateur final avant la mise à jour.


Si votre plugin est compatible v4, indiquez le dans le info.json de cotre plugin.

Exemple **info.json**: `"compatibility" : ["miniplus","smart","rpi","docker","diy","v4"],`

Vous pouvez tester depuis un scénario / bloc Code si vos plugins ont bien la compatibilité renseignée:

<details><summary markdown="span">scénario / bloc Code</summary>

~~~ php
/* Auteur des plugins à contrôler */
$author = 'Jeedom SAS';
/**********************************/
$plugins = repo_market::byFilter(['author' => $author]);
$pluginsArray = utils::o2a($plugins);
$countPlugins = 0;
$countIncompatibles = 0;
foreach ($pluginsArray as $plugin) {
  if ($plugin['author'] == $author) {
    $countPlugins++;
	if ($plugin['hardwareCompatibility']['v4'] != '1') {
      $countIncompatibles++;
	  $scenario->setLog('Le plugin ' . $plugin['name'] . ' n\'est pas indiqué compatible V4');
	}
  }
}
if ($countPlugins > 0) {
  if($countIncompatibles == 1) {
  	$scenario->setLog($author . ' : 1 plugin potentiellement incompatible Jeedom V4 sur ' . $countPlugins . ' plugin(s) réalisé(s)');
  } else if ($countIncompatibles > 1) {
	$scenario->setLog($author . ' : ' . $countIncompatibles . ' plugins potentiellements incompatibles Jeedom V4 sur ' . $countPlugins . ' plugins réalisés');
  } else {
  	$scenario->setLog('Les ' . $countPlugins . ' plugins développés par ' . $author . ' sont tous compatibles Jeedom V4. Félicitations !');
  }
} else {
  $scenario->setLog('Aucun plugin trouvé pour ' . $author);
}
~~~

</details>

#### Adaptation des plugins pour le Core v4

- Nettoyer au maximum les inline style (cf plugin template).
- span affichage de commande : class `state`
- Bouton de commande : a class `action`
- Sur les input-group:
	- class `roundedLeft` sur le premier élément (a input, button etc)
    - class `roundedRight` sur le dernier élément (a input, button etc)
- Sur la div eqLogicThumbnailContainer:
    - Supprimer tous les styles!
    - Sur les divs parents, ajouter une class de couleur:
    	- couleurs de logo: `logoPrimary` et `logoSecondary`
        - vert : `success`
        - bleu: `info`
        - orange: `warning`
        - rouge : `danger`
- Attention pour les plugins ayant des templates: l’icône refresh a changé (font-awesome 5) :
- Attention aux class des boutons, input etc:
    - btn : 32px de haut
    - btn-sm / input-sm : 28px de haut
    - btn-xs : 22px de haut
- Fichier desktop/php/pluginid.php : remplacer object::all() par jeeObject::all()

- Tester les plugins sur les trois thèmes 2019 Light / Dark / Legacy.

- Images en png avec alpha si nécessaire, afin d’éviter les carrés blancs disgracieux en thème Dark.

Au final les pages du plugin doivent être cohérentes avec les pages du core objets/scénarios/interactions (tailles, couleurs, dispositions etc). Pas d’effet de style, mais de la cohérence.

> Remarque :
>
> La sidebar n’a pas survécu à la v4 ! Pour la remplacer, un menu contextuel est disponible sur les onglets pour les scénarios, objets, interactions, plugins.
> Font-Awesome 4 n'est plus intégré au Core, remplacé par Font-Awesome 5.

> Mises à jour :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test’ sur la branche. Ce qui évite d’attendre le passage du robot, et met l’update à disposition immédiatement.

> Rappel :
>
> Les images affichées dans les pages de plugins ne doivent pas être chargées depuis le net, mais doivent être parmi les fichiers locaux du plugin.

> Attention :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer’ est passé à droite ! C’est le plus dangereux donc le plus loin.


#### Nettoyeur de fichier

La v4 et la nouvelle v3 ont un nettoyage automatique des fichiers non présents sur votre mise à jour de plugin automatique.

Le core efface automatiquement les fichiers de plus de 7 jours qui n’ont pas eu de mise à jour.

- Il efface les fichiers qui sont plus vieux de 7 jours selon l’update de votre plugin.
- Il touche uniquement les dossiers > `3rdparty`, `3rparty`, `desktop`, `mobile`, `core`, `docs`, `install`, `script`, `vendor`, `plugin_info`.
- `ressource(s)` et `data` ne sont pas touchés, mais nous vous invitons à utiliser `data` pour tout custom.
- Les fichiers dont le nom commence par `custom` ne sont également pas touchés.

Si vous souhaitez faire une modification avant le nettoyage vous pouvez utiliser `pre_install.php` (dans plugin_info).
Voir [plugin template](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

#### GitHub liaison market

Changement de nom github pour les accès à vos repos privés.

Il faut maintenant utiliser jeedom-market au lieu de celui de zoic.

#### La documentation

Le site de documentation a également changé d’aspect.

Désormais des liens renvoient directement vers vos documentations.

#### La traduction

Nous sommes en cours de développement d’un nouvel outil de traduction. Nous le testons actuellement en interne et nous reviendrons vers vous prochainement afin de vous proposer d’intégrer vos plugins dedans.
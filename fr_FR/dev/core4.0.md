# Évolutions du Core | développeurs de plugin

### Core v4.0

**-- rédaction en cours --**

#### Compatibilité V4 sur le market

La v3 qui sortira en Novembre 2020 aura un module de migration permettant de passer de la V3 à la V4.

Lors de la phase de migration des v3 vers la v4, les plugins sans compatibilité v4 dans leur info.json alerteront l’utilisateur final avant la mise à jour.


Si votre plugin est compatible v4, indiquez le dans le info.json de cotre plugin.

Exemple: `"compatibility" : ["miniplus","smart","rpi","docker","diy","v4"],`

Vous pouvez tester depuis un scénario / bloc Code si vos plugins ont bien la compatibilité renseignée:


<details>
<summary>scénario / bloc Code</summary>

```
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
```

</details>

#### Adaptation des plugins pour le Core v4

https://community.jeedom.com/t/arrivee-de-la-stable-v4-migration-facile-v3-a-v4/33481


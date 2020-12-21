# Core evolutions | plugin developers

### Core v4.0

**-- drafting in progress --**

#### V4 compatibility on the market

The v3 which will be released in November 2020 will have a migration module allowing to go from V3 to V4.

During the migration phase from v3 to v4, plugins without v4 compatibility in their info.json will alert the end user before the update.


If your plugin is v4 compatible, indicate it in the info.json from your plugin.

Exemple: `"compatibility" : ["miniplus", "smart", "rpi", "docker", "diy", "v4"], `

You can test from a scenario / Code block if your plugins have the compatibility indicated:


<details>
<summary>scénario / bloc Code</summary>

`` ''
/* Author of the plugins to be checked */
$author = 'Jeedom SAS';
/**********************************/
$plugins = repo_market::byFilter(['author' => $author]);
$pluginsArray = utils::o2a($plugins);
$countPlugins = 0;
$countIncompatibles = 0;
foreach ($ pluginsArray as $ plugin) {
  if ($ plugin ['author'] == $ author) {
    $countPlugins++;
	if ($ plugin ['hardwareCompatibility'] ['v4'] != '1') {
      $countIncompatibles++;
	  $scenario->setLog('Le plugin ' . $plugin['name'] . ' n\'est pas indiqué compatible V4');
	}
  }
}
if ($ countPlugins> 0) {
  if ($ countIncompatible == 1) {
  	$scenario->setLog($author . ' : 1 plugin potentiellement incompatible Jeedom V4 sur ' . $countPlugins . ' plugin(s) réalisé(s)');
  } else if ($ countIncompatible> 1) {
	$scenario->setLog($author . ' : ' . $countIncompatibles . ' plugins potentiellements incompatibles Jeedom V4 sur ' . $countPlugins . ' plugins réalisés');
  } else {
  	$scenario->setLog('Les ' . $countPlugins . ' plugins développés par ' . $author . ' sont tous compatibles Jeedom V4. Félicitations !');
  }
} else {
  $scenario->setLog('Aucun plugin trouvé pour ' . $author);
}
`` ''

</details>

#### Adaptation of plugins for Core v4

https://community.jeedom.com/t/arrivee-de-la-stable-v4-migration-facile-v3-a-v4/33481


# Kernentwicklungen | Plugin-Entwickler

### Core v4.0

**-- Entwurf in Bearbeitung --**

#### V4-Kompatibilität auf dem Markt

Die Version 3, die im November 2020 veröffentlicht wird, verfügt über ein Migrationsmodul, mit dem Sie von Version 3 auf Version 4 wechseln können.

Während der Migrationsphase von v3 auf v4 werden Plugins ohne v4-Kompatibilität in ihren Informationen angezeigt.json benachrichtigt den Endbenutzer vor dem Update.


Wenn Ihr Plugin v4-kompatibel ist, geben Sie dies in den Informationen an.json von deinem Plugin.

Exemple: `"compatibility" : ["miniplus", "smart", "rpi", "docker", "diy", "v4"], `

Sie können anhand eines Szenario- / Codeblocks testen, ob Ihre Plugins die angegebene Kompatibilität aufweisen:


<details>
<summary>scénario /. bloc Code</.summary>

`` ''
/.* Autor der zu überprüfenden Plugins */.
$author = 'Jeedom SAS';
/.**********************************/.
$plugins = repo_market::byFilter(['author' => $author]);
$pluginsArray = utils::o2a($plugins);
$countPlugins = 0;
$countIncompatibles = 0;
foreach ($ pluginsArray als $ plugin) {
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
  } sonst wenn ($ countIncompatible> 1) {
	$scenario->setLog($author . ' : ' . $countIncompatibles . ' plugins potentiellements incompatibles Jeedom V4 sur ' . $countPlugins . ' plugins réalisés');
  } sonst {
  	$scenario->setLog('Les ' . $countPlugins . ' plugins développés par ' . $author . ' sont tous compatibles Jeedom V4. Félicitations !');
  }
} sonst {
  $scenario->setLog('Aucun plugin trouvé pour ' . $author);
}
`` ''

</.details>

#### Anpassung von Plugins für Core v4

https:/./.community.jeedom.com/.t/.arrivee-de-la-stable-v4-migration-facile-v3-a-v4/.33481


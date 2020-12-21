# Evoluciones centrales | desarrolladores de complementos

### Core v4.0

**-- redacción en curso --**

#### Compatibilidad V4 en el mercado

La v3 que se lanzará en noviembre de 2020 tendrá un módulo de migración que permitirá pasar de V3 a V4.

Durante la fase de migración de v3 a v4, los complementos sin compatibilidad v4 en su información.json alertará al usuario final antes de la actualización.


Si su complemento es compatible con v4, indíquelo en la información.json de su complemento.

Exemple: `"compatibility" : ["miniplus", "smart", "rpi", "docker", "diy", "v4"], `

Puede probar desde un escenario / bloque de código si sus complementos tienen la compatibilidad indicada:


<details>
<summary>scénario / / bloc Code</ /summary>

`` ''
/ /* Autor de los complementos a verificar */ /
$author = 'Jeedom SAS';
/ /**********************************/ /
$plugins = repo_market::byFilter(['author' => $author]);
$pluginsArray = utils::o2a($plugins);
$countPlugins = 0;
$countIncompatibles = 0;
foreach ($ pluginsArray como $ plugin) {
  if ($ plugin ['autor'] == $ autor) {
    $countPlugins++;
	if ($ plugin ['hardwareCompatibility'] ['v4'] != '1') {
      $countIncompatibles++;
	  $scenario->setLog('Le plugin ' . $plugin['name'] . ' n\'est pas indiqué compatible V4');
	}
  }
}
si ($ countPlugins> 0) {
  si ($ countIncompatible == 1) {
  	$scenario->setLog($author . ' : 1 plugin potentiellement incompatible Jeedom V4 sur ' . $countPlugins . ' plugin(s) réalisé(s)');
  } else if ($ countIncompatible> 1) {
	$scenario->setLog($author . ' : ' . $countIncompatibles . ' plugins potentiellements incompatibles Jeedom V4 sur ' . $countPlugins . ' plugins réalisés');
  } otro {
  	$scenario->setLog('Les ' . $countPlugins . ' plugins développés par ' . $author . ' sont tous compatibles Jeedom V4. Félicitations !');
  }
} otro {
  $scenario->setLog('Aucun plugin trouvé pour ' . $author);
}
`` ''

</ /details>

#### Adaptación de complementos para Core v4

https:/ // /community.jeedom.com/ /t/ /arrivee-de-la-stable-v4-migration-facile-v3-a-v4/ /33481


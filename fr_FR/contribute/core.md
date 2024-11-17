# Contribuer au développement du Core

Vous souhaitez contribuer au développement du Core de Jeedom ?

- Vous pouvez faire des PRs (*Pull requests*) sur le *repository* du Core.
- Si vous avez des idées d'évolutions et souhaitez participer sur le long terme, n'hésitez pas à [contacter l'équipe du projet](mailto:contact@jeedom.com).

Voici les notions de bases à connaître :

> Avant de proposer un PR, mettez à jour votre alpha pour vérifier que le bug n'a pas déjà été corrigé. Et synchronisez votre dépôt github.

> Vérifiez que ce que vous corrigez ne cause pas d'autres bugs. La plupart des fonctions du Core sont appellées par différentes pages du Front-End ou par d'autres fonctions du Core et par les plugins. Faites une recherche sur le Core pour voir/comprendre où les fonctions sont utilisées et, dans le doute, exposez le soucis et votre correction sur [Community](https://community.jeedom.com/).

## Branches Github

Pour participer au développement de Jeedom, vous devez avoir un compte [Github](https://github.com/).

Le code du Core est Open-Source est disponible [ici](https://github.com/jeedom/core).

- **alpha** :  Branche de la version V4 alpha. Principalement destinée aux développeurs pour la version suivante de Jeedom.
- **beta** : Branche de la version V4 beta. Principalement destinée aux beta-testeurs, pour tester avant passage en Stable.
- **master** : Branche stable de V4.

Les mises à jour se font sur ces branches en fonction de la configuration de Jeedom **Réglages → Système → Configuration / Mises à jour/Market**.

Les PRs (*Pull requests*) doivent toujours être faits sur la branche alpha.

De même, afin de participer aux discussions sur [Community](https://community.jeedom.com/), inscrivez-vous en tant que développeur : [Jeedom dev](https://www.jeedom.com/fr/dev.html).

## Développement

Pour aider au développement du Core, vous devez maîtriser un ou plusieurs des langages suivants:

- PHP : Développement des classes php, des appels ajax depuis le front-end.
- javascript : Développement des classes js et du front-end.
- CSS : Développement de l'interface.

Des connaissances de l’environnent Linux sont également souhaitables.

## Arborescence du Core

Le code est réparti dans différents répertoires à la racine de Jeedom (par défaut : /var/www/html) :

- **3rdparty** : Dossier comprenant les bibliothèques externes utilisées par Jeedom (jQuery, CodeMirror, etc).
- **backup** : Dossier des sauvegardes de Jeedom.
- **core** : Dossier comprenant les fonctions internes du Core:
	- **ajax** : Fichiers php d'interface entre les classes js et les classes php.
	- **api** : Fichiers php des API.
	- **class** : Fichiers des classes php (*eqLogic, cmd, jeeObject, history, cron, etc.*).
	- **com** : Fichiers des classes php de communication (*http, shell*).
	- **config** : Fichiers php de configuration du Core et *default.config.ini* comprenant les paramètres de configuration par défaut. Fichier version pour la version du Core.
	- **css** : Icônes disponibles avec le Core et leur CSS.
	- **i18n** : Fichiers json comprenant les chaînes de caractères traduites.
	- **img** : Images (logos, fonds, etc.) du Core.
	- **js** : Fichiers des class js, appelées notamment depuis les pages de Jeedom.
	- **php** : Fichiers php nécessaires au Core (hors classes).
	- **repo** : Fichiers php propres au market, samba, etc.
	- **template** : Fichiers html (*Dashboard et Mobile*) pour l'affichage des eqLogics (Tuile), commandes (Widgets) et scenarios.
	- **themes** : Fichiers CSS des trois thèmes du Core (Dark, Light, Legacy), pour Dashboard et Mobile.
- **data** : Dossier comprenant les données utilisateur (Rapports, Vues, css/js de Personnalisation Avancée, Design 3D, etc).
- **desktop** : Dossier comprenant toutes les pages affichées (l'interface) en desktop et leurs fonctions.
	- **common** : Fichiers js/php communs à plusieurs pages. Regroupe des fonctions pouvant être appelées depuis plusieurs pages, notamment le *utils.js*, présent sur toutes les pages en Desktop.
	- **css** : Fichiers css propres à l'affichage Desktop.
	- **img** : Images propres à l'affichage Desktop.
	- **js** : Fichiers js correspondant à chaque page (*administration, dashboard, scenario, etc.*).
	- **modal** : Fichiers php des modales, comprenant le code php/html et le code js.
	- **php** : Fichiers php correspondant à chaque page (*administration, dashboard, scenario, etc.*).
- **docs** : Documentation.
- **install** : Fichiers d'installation de Jeedom.
- **log** : Dossier comprenant tous les logs (http.error, update, etc) et ceux des scénarios (sous-dossier scenarioLog, nommés par id).
- **mobile** : Dossier comprenant toutes les pages affichées (l'interface webapp) en mobile et leurs fonctions.
	- **css** : Fichiers css propres à l'affichage Mobile.
	- **html** : Fichiers html correspondant à chaque page (*home, equipment, timeline, etc.*).
	- **js** : Fichiers js correspondant à chaque page (*home, equipment, timeline, etc.*).
	- **modal** : Fichiers html correspondant aux modales en Mobile.
- **plugins** : Dossier comprenant tous les plugins installés.
- **script** : Script de déploiement, certificats.
- **support** : Dossier utilisé en cas de demande de support.
- **vendor** : Dossier comprenant des bibliothèques tierces php.


## Front-end

L'interface de Jeedom fonctionne comme un site web, à partir de php interfacé avec SQL et de js / CSS.

Au départ, le browser charge le fichier `/index.php` :
- Vérification de l'installation de Jeedom, renvoi vers `install/setup.php` si nécessaire.
- Vérification de la provenance Desktop ou Mobile.
- Chargement des fichiers et classes nécessaires avec `/core/php/core.inc.php`.
- Vérification de l'authentification de l'utilisateur.
- Vérification de paramètres dans l'url pour charger directement le bon contenu.
- Redirige vers la version Desktop `/desktop/php/index.php` ou Mobile `mobile/html/home.html` en fonction des paramètres de l'url.

### Desktop

L'interface de Jeedom fonctionne sur le principe du One-Page. Une fois chargée, les différentes pages sont affichées en changeant le contenu d'un container.

Le fichier principal en Desktop est `/desktop/php/index.php`.

Chaque page possède au minimum deux paramètres dans l'url. Exemple :

`https://my.dns1.jeedom.com/index.php?v=d&p=dashboard` :
- **v** : Version de l'interface : d pour Desktop, m pour mobile.
- **p** : Page à afficher. Ici, `dashboard`.

Dans ce cas, le fichier `/desktop/php/index.php` va charger le fichier `/desktop/php/dashboard.php` dans la div `div_pageContainer`. Celui-ci va également charger le fichier `/desktop/js/dashboard.js` comprenant les fonctions js propres à l'affichage de cette page (ici, le Dashboard).

Le fichier `/desktop/php/index.php` se charge aussi de :
- Vérifier le mode *rescue*
- Vérifier l'authentification de l'utilisateur.
- Vérifier si nécessaire la page à charger en fonction de la configuration (page par défaut de l'utilisateur).
- Créer la structure html (*head, body, div_pageContainer, etc*).
- Charger les CSS, bibliothèques etc.
- Charger le thème de l’utilisateur.
- Créer la barre de menu.
- Renseigner certaines variables php/js globales.
- Charger le fichier js `desktop/common/js/utils.js`

Le fichier `desktop/common/js/utils.js` est donc toujours présent, et chargé une fois. Il permet de :
- Gérer les events js du menu.
- Gérer les paramètres d'url en fonction de la page demandée.
- Charger la page demandée dans la div `div_pageContainer`.
- Gérer les ouverture/fermeture des modales (fenêtre de dialogue).
- Gérer une éventuelle bascule de thème en fonction de l'heure.
- Permettre aux différents fichiers js d'accéder à des fonctions communes.

Ainsi, les fichiers index.php et utils.js fournissent la structure et les fonctions de base de l'interface.
Ensuite, le contenu de la page appelée est chargé depuis desktop/php/page.php et desktop/js/page.js.
Ces fichiers de contenu, purement orientés interface, peuvent accéder aux fonctions du Core (les classes `/core/class`) directement en php, ou en js grâce aux classes js (`/core/js`) en passant par des appels ajax (`/core/ajax`).

Les fonctions internes du Core sont ainsi bien séparées, pour le fonctionnement interne (Back-end), mais sont accessibles par l'interface. De même, chaque page possède sont propre code php et js. Ceci permet de mieux faire évoluer et maintenir le code, mais aussi d'optimiser les performances en chargeant uniquement les classes et fonctions nécessaires.

#### Core v4.2
Depuis le Core v4.2, toutes les fonctions js du fichier `desktop/common/js/utils.js` sont isolées dans un namespace `jeedomUtils{}`.
Par exemple, la fonction précédemment dans le root window `loadPage()` devient `jeedomUtils.loadPage()`.

Pour des raisons de rétro-compatibilité pour les plugins, les anciennes fonctions sont toujours déclarées et seront dépréciées dans une version ultérieure. [Voir la liste ici](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Core v4.3
Dans la continuité de la version 4.2, les pages du front-end en desktop on été isolées afin d'éviter de référencer des variables et fonctions dans le root window. Ceci sécurise de possible collision de déclaration et facilite la lecture et la compréhension du code ainsi que son debuggage.

Le fichier `core/js/jeedom.class.js`déclare deux nouveaux namespaces :
##### jeeFrontEnd[}

Certaines variables globales sont maintenant dans ce namespace :

```js
jeeFrontEnd = {
  __description: 'Global object where each Core page register its own functions and variable in its sub-object name.',
  jeedom_firstUse: '',
  language: '',
  userProfils: {},
  planEditOption: {state: false, snap: false, grid: false, gridSize: false, highlight: true},
  //loadPage history:
  PREVIOUS_PAGE: null,
  PREVIOUS_LOCATION: null,
  NO_POPSTAT: false,
  modifyWithoutSave: false,
  //@index.php
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}
```

Exemple type pour desktop/js/corepage.js :

```js
"use strict"

if (!jeeFrontEnd.corepage) {
	jeeFrontEnd.corepage = {
		myVar: 'oneVar',
		init: function() {
			window.jeeP = this //root shortcut
		},
		postInit: function() {
			//Do stuff once page loaded
		},
		myFunction: function(_var) {
			var myFuncContextVar = this.myVar + ' -> ' + _var
			console.log(myFuncContextVar)
		}
	}
}

jeeFrontEnd.corepage.init()

$(function() {
  jeeFrontEnd.corepage.postInit()
})

$('#myButton').on('click', function() {
	jeeP.myFunction('test')
})
```

> Le namespace de la page ne sera donc pas recréé au retour sur cette même page. De plus, la variable `jeeP` permet d'utiliser `jeeFrontEnd.corepage` avec une syntaxe courte, elle correspond à un `self` propre à la page.

##### jeephp2js[}

Utilisé pour passer les variables d'un script php vers le front-end js. Par exemple :

```php
sendVarToJS([
  'jeephp2js.myjsvar1' => init('type', ''),
  'jeephp2js.myjsvar2' => config::byKey('enableCustomCss')
]);
```

Puis

```js
$(function() {
  if (jeephp2js.myjsvar1 == '1') { ... }
})
```

> Le namespace jeephp2js{} est vidé au changement de page pour éviter toute variable résiduelle non attendue.

### Mobile

L'interface Desktop est responsive et s'adapte à la taille du navigateur. Toutefois, certaines choses, comme l'édition d'un scénario, seraient compliquées sur un petit écran. De plus, sur un smartphone à l’extérieur, en 3G ou même 4G, il est important d'optimiser la rapidité de l'affichage. C'est pourquoi Jeedom possède une interface Mobile, plus légère et adaptée aux petits écrans.

La page de référence est `/mobile/html/index.html`, qui se charge de :
- Vérifier l'authentification de l'utilisateur.
- Créer la structure html (*head, body, div_pageContainer, etc*).
- Charger les CSS, bibliothèques etc.
- Charger le thème de l’utilisateur.
- Renseigner certaines variables php/js globales.
- Charger le fichier js `mobile/js/application.js`

Le fichier `mobile/js/application.js` contient les fonctions communes à toutes les pages.

Comme pour l'interface Desktop, la page appelée est constituée de deux fichiers :
- `/mobile/html/home.html` : le code html.
- `/mobile/js/home.js` : les fonctions js propres à cette page.

Une différence notable en Mobile est l'absence de pages php. La génération du code repose donc sur les classes js, qui peuvent toujours appeler les fonctions du Core avec des appels ajax.

### Fichiers CSS

Les CSS du Core reposent principalement sur ces fichiers :
- En Desktop :
	- desktop/css/boostrap.css : Version nettoyée par l'équipe du CSS Bootstrap v3.3.7.
	- desktop/css/desktop.main.css : CSS principal de l'interface.
	- desktop/css/coreWidgets.css : CSS propres aux widgets du Core.

- En Mobile :
	- mobiles/css/mobile.main.css : CSS principal de l'interface.
	- mobiles/css/coreWidgets.css : CSS propres aux widgets du Core.

Les thèmes contiennent des CSS propres à chaque thème, notamment les colors.css.

Ordre de chargement des CSS en Desktop :
- 3rdParty css (CodeMirror, etc.).
- Fonts (roboto, camingocode, text-security-disc).
- coreWidgets.css
- desktop.main.css
- colors.css (variables de couleurs du thème).
- core2019_xx.css (fichier principal du thème).
- shadows.css (si activé en configuration).
- custom.css (fichier css de personnalisation avancée).


## Back-end

*en cours*

L'interface est une chose, mais bien sûr votre Jeedom est toujours actif, afin de faire tourner les scénarios, les crons, les logs, les historiques etc.

Le Back-end s’appuie sur les mêmes classes php que le Front-end, présentes dans `/core/class/`. Chaque partie de Jeedom possède sa classe php, notamment :

- jeeObject.class.php : Regroupe les fonctions concernant les objets de Jeedom.
- eqLogic.class.php : Regroupe les fonctions concernant les équipements de Jeedom.
- cmd.class.php : Regroupe les fonctions concernant les commandes de Jeedom.
- cron.class.php : Regroupe les fonctions concernant les tâches planifiées de Jeedom.
- config.class.php : Regroupe les fonctions concernant les paramètres de configuration de Jeedom.
- scenario.class.php : Regroupe les fonctions concernant les scénarios de Jeedom.
- DB.class.php : Regroupe toutes les fonctions d'accès à la base de données de Jeedom. Tous les accès SQL requis par les autres classes sont gérés par celle-ci.

etc.


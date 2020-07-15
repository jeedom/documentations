# Contribuer au développement du Core

*EN COURS*

Vous souhaitez contribuer au développement du Core de Jeedom ?

- Vous pouvez faire des PRs (*Pull requests*) sur le *repository* du Core.
- Si vous avez des idées d'évolutions et souhaitez participer sur le long terme, n'hésitez pas à [contacter l'équipe du projet](mailto:contact@jeedom.com).

Voici les notions de bases à connaître.

## Branches Github

Pour participer au développement de Jeedom, vous devez avoir un compte Github.
Le code du Core est Open-Source et disponible [ici](https://github.com/jeedom/core) au travers de plusieurs branches :

- **alpha** :  Branche de la version V4 alpha. Principalement destinée aux développeurs pour la version suivant de Jeedom.
- **beta** : Branche de la version V4 beta. Principalement destinée aux beta-testeurs.
- **V4-stable** : Branche stable de V4
- **release** : Branche Release Candidate de la V3. Uniquement pour des bugfixs.
- **master** : Branche de la version stable V3. Uniquement pour des bugfixs.

Les mises à jour ce font sur ces branches en fonction de la configuration de Jeedom **Réglages → Système → Configuration / Mises à jour/Market**

Les PRs (*Pull requests*) doivent toujours être fait sur la branche alpha.

De même, afin de participer aux discussions sur [Community](https://community.jeedom.com/), inscrivez vous en tant que développeur : [Jeedom dev](https://www.jeedom.com/fr/dev.html).

## Développement

Pour aider au développement du Core, vous devez maîtriser :

- php : Développement des classes php, des appels ajax depuis le front-end.
- javascript : Développement des classes js et du front-end.
- css : Développement de l'interface.

Des connaissances de l’environnent Linux sont également souhaitable.

## Arborescence du Core

Le code est réparti dans différents répertoires à la racine de Jeedom (par défaut : var/www/html) :

<details>
<summary>Arborescence du Core</summary>

- 3rdparty : Dossier comprenant les librairies externe utilisées par Jeedom (jQuery, CodeMirror, etc).
- backup : Dossier des sauvegardes de Jeedom.
- **core** : Dossier comprenant les fonctions internes du Core:
	- **ajax** : Fichiers php d'interface entre les classes js et les classes php.
	- api : Fichiers php des API.
	- **class** : Fichiers des classes php (*eqLogic, cmd, jeeObject, history, cron, etc.*).
	- com : Fichiers des classes php de communication (*http, shell*).
	- config : Fichiers php de configuration du Core et *default.config.ini* comprenant les paramètres de configuration par défaut.
	- css : Icônes disponibles avec le Core et leur CSS.
	- i18n : Fichiers json comprenant les chaînes de caractères traduites.
	- img : Images (logos, fonds, etc.) du Core.
	- **js** : Fichiers des class js, appelées notamment depuis les pages de Jeedom.
	- php : Fichiers php nécessaires au Core (hors classes).
	- repo : Fichiers php propre au market, samba, etc.
	- **template** : Fichiers html (*Dashboard et Mobile*) pour l'affichage des eqLogics (Tuile), commandes (Widgets) et scenarios.
	- **themes** : Fichiers CSS des trois thèmes du Core (Dark, Light, Legacy), pour Dashboard et Mobile.
- data : Dossier comprenant les données utilisateur (Rapports, Vues, css/js de Personnalisation Avancée, Design 3D, etc).
- **desktop** : Dossier comprenant toutes les pages affichées (l'interface) en desktop et leurs fonctions.
	- common : Fichiers js/php communs à toutes ou plusieurs pages. Regroupe des fonctions pouvant être appelées depuis plusieurs pages, notamment le *utils.js*, présent sur toutes les pages en Desktop.
	- css : Fichiers css propre à l'affichage Desktop.
	- img : Images propre à l'affichage Desktop.
	- js : Fichiers js correspondant à chaque page (*administration, dashboard, scenario, etc.*).
	- modal : Fichiers php des modales, comprenant le code php/html et le code js.
	- php : Fichiers php correspondant à chaque page (*administration, dashboard, scenario, etc.*).
- docs : Documentation.
- install : Fichiers d'installation de Jeedom.
- log : Dossier comprenant tous les logs (http.error, update, etc) et ceux des scénarios (sous-dossier scenarioLog, nommés par id).
- **mobile** : Dossier comprenant toutes les pages affichées (l'interface webapp) en mobile et leurs fonctions.
	- css : Fichiers css propre à l'affichage Mobile.
	- html : Fichiers html correspondant à chaque page (*home, equipment, timeline, etc.*).
	- js : Fichiers js correspondant à chaque page (*home, equipment, timeline, etc.*).
	- modal : Fichiers html correspondant aux modale en Mobile.
- plugins : Dossier comprenant tout les plugins installés.
- script : Sript de déploiement, certificats.
- support : Dossier utilisé en cas de demande de support.
- vendor : Dossier comprenant des librairies tierces php.

</details>


## Front-end

L'interface de Jeedom fonctionne comme un site web, à partir de php interfacé avec SQL, et de js / CSS.

Au départ, le browser charge le fichier `/index.php` :
- Vérification de l'installation de Jeedom, renvoi vers `install/setup.php` si nécessaire.
- Vérification de la provenance Desktop ou Mobile.
- Chargement des fichiers et classes nécessaires avec `/core/php/core.inc.php`.
- Vérification de l'authentification de l'utilisateur.
- Vérification de paramètres dans l'url pour charger directement le bon contenu.
- Redirige vers la version Desktop `/desktop/php/index.php` ou Mobile `mobile/html/home.html` ou autre en fonction des paramètres de l'url.

### Desktop

L'interface de Jeedom fonctionne sur le principe du One-Page. Une fois chargée, les différentes pages sont affichées en changeant le contenu d'un container.

Le fichier principal en Desktop est `/desktop/php/index.php`.

Chaque page possède au minimum deux paramètres dans l'url. Exemple :

`https://my.dns1.jeedom.com/index.php?v=d&p=dashboard` :
- **v** : Version de l'interface. d pour Desktop, m pour mobile.
- **p** : Page à afficher. Ici, `dashboard`.

Dans ce cas, le fichier `/desktop/php/index.php` va charger le fichier `/desktop/php/dashboard.php` dans la div `div_pageContainer`. Celui-ci va également charger le fichier `/desktop/js/dashboard.js` comprenant les fonctions js propres à l'affichage de cette page (ici, le Dashboard).

Le fichier `/desktop/php/index.php` se charge aussi de :
- Vérifier le mode *rescue*
- Vérifier l'authentification de l'utilisateur.
- Vérifier si nécessaire la page à charger en fonction de la configuration (page par défaut de l'utilisateur).
- Créer la structure html (*head, body, div_pageContainer, etc*).
- Charger les CSS, librairies etc.
- Charger le thème de l’utilisateur.
- Créer la barre de menu.
- Renseigner certaines variables php/js globales.
- Charger le fichier js `desktop/common/js/utils.js`

Le fichier `desktop/common/js/utils.js` est donc toujours présent, et chargé une fois. Il permet de :
- Gérer les events js du menu.
- Gérer les paramètres d'url en fonction de la page demander.
- Charger la page demandée dans la div `div_pageContainer`.
- Gérer les ouverture/fermeture des modales (fenêtre de dialogue).
- Gérer une éventuelle bascule de thème en fonction de l'heure.
- Permettre aux différents fichiers js d'accéder à des fonctions communes.

Ainsi, l'index.php et le utils.js fournissent la structure et les fonctions de bases de l'interface.
Ensuite, le contenu de la page appelée est chargé depuis desktop/php/page.php et desktop/js/page.js.
Ces fichiers de contenu, purement orientés interface, peuvent accéder aux fonctions du Core (les classes `/core/class`) directement en php, ou en js grâce aux classes js (`/core/js`) en passant par des appels ajax (`/core/ajax`).

Les fonctions internes du Core sont ainsi bien séparées, pour le fonctionnement interne (Back-end), mais sont accessible par l'interface. De même, chaque page possède sont propre code php et js. Ceci permet de mieux faire évoluer et maintenir le code, mais aussi d'optimiser les performances en chargeant uniquement les classes et fonctions nécessaires.

### Mobile

L'interface Desktop est responsive et s'adapte à la taille du navigateur. Toutefois, certaines choses, comme l'édition d'un scénario, serait compliqué sur une petit écran. De plus, sur un smartphone à l’extérieur, en 3G ou même 4G, il est important d'optimiser la rapidité de l'affichage. C'est pourquoi Jeedom possède une interface Mobile, plus légère et adaptée aux petits écrans.

*EN COURS*

## Back-end

*EN COURS*

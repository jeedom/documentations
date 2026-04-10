# Contribuer à la documentation

La documentation Jeedom est centralisée sur ce site à travers plusieurs mécanismes. Comme le core de Jeedom, [la documentation est consultable sur Github](https://github.com/jeedom/documentations){:target="_blank"} et est Open-Source *(licence MIT)*.

Celle-ci se découpe en trois grandes catégories :
- [La documentation générale](#Documentation%20générale)
- [La documentation du core Jeedom](#Documentation%20du%20core%20Jeedom)
- [La documentation des plugins](#Documentation%20des%20plugins)

>**INFORMATION**
>
>Si vous souhaitez revoir un grand nombre de fichiers, il est préférable de le faire par étape *(par rubrique par exemple)* plutôt que soumettre de nombreuses modifications en une seule fois.

## Prérequis

Pour contribuer à la documentation, quelques prérequis sont à connaître et à prendre en compte :
- Tout d'abord, il faut disposer d'[un compte utilisateur sur GitHub](https://github.com/){:target="_blank"},
- Savoir faire [une *Pull Request* sur Github](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request){:target="_blank"},
- Connaître [le langage `Markdown`](https://fr.wikipedia.org/wiki/Markdown){:target="_blank"} utilisé pour la mise en forme du texte,
- Les traductions étant générées depuis le français, les contributions doivent impérativement être soumises en français *(dossier `fr_FR`)*,
- Enfin, les traductions étant générées automatiquement, aucune modification ne doit être apportée aux fichiers `i18n/*.json`.

>**INFORMATION**
>
>Si vous n'êtes pas à l'aise à l'idée d'intervenir directement sur les fichiers de documentation, vous pouvez également contribuer en créant un sujet sur [le forum](https://community.jeedom.com/){:target="_blank"} avec l'étiquette `documentation-jeedom`.

## Documentation générale

Les pages de documentation générale concernent toutes les pages, hormis celles relatives aux **Manuels** et aux **Plugins**. Les fichiers sont accessibles sur [le dépôt de la documentation](https://github.com/jeedom/documentations/tree/master/fr_FR){:target="_blank"}. L'adresse du site de documentation correspondant à un fichier `Markdown` *(.md)* sur Github, par exemple :

- **Compatibilité** (https://doc.jeedom.com/#LANG#/compatibility/) → https://github.com/jeedom/documentations/blob/master/fr_FR/compatibility/index.md
- **Installation sur Raspberry Pi** (https://doc.jeedom.com/#LANG#/installation/rpi) → https://github.com/jeedom/documentations/blob/master/fr_FR/installation/rpi.md
- **Développement de plugin** (https://doc.jeedom.com/#LANG#/dev) → https://github.com/jeedom/documentations/blob/master/fr_FR/dev/index.md

>**IMPORTANT**
>
>Les documentations du core et des plugins étant gérées à part, aucune contribution ne pourra être acceptée dans les dossiers `core`, `plugins` et `plugins_contributor` *(voir paragraphes suivants)*.

## Documentation du core Jeedom

La documentation du core Jeedom correspond aux rubriques **Manuel d'utilisation** et **Manuel de configuration**, accessibles en cliquant sur le bouton "❔" en haut à droite sur l'interface Jeedom. Les fichiers se situent sur [le dépôt du core](https://github.com/jeedom/core/tree/develop/docs/fr_FR){:target="_blank"}, dans le répertoire `docs/fr_FR`.

Chaque page de manuel correspond à un fichier `Markdown` *(.md)* sur Github, par exemple :
- **Manuel d'utilisation - Changelog** (https://doc.jeedom.com/#LANG#/core/#VERSION#/changelog) → https://github.com/jeedom/core/tree/develop/docs/fr_FR/changelog.md
- **Manuel d'utilisation - Scénarios** (https://doc.jeedom.com/#LANG#/core/#VERSION#/scenario) → https://github.com/jeedom/core/tree/develop/docs/fr_FR/scenario.md
- **Manuel de configuration - Personnalisation Avancée** (https://doc.jeedom.com/#LANG#/core/#VERSION#/custom) → https://github.com/jeedom/core/tree/develop/docs/fr_FR/custom.md

>**IMPORTANT**
>
>Les contributions doivent être soumises sur la branche `develop` du core.

## Documentation des plugins

La documentation des plugins correspond aux rubriques **Plugins Officiels** et **Plugins Tiers**. Comme leur nom l'indique, les plugins officiels sont développés par l'équipe Jeedom, les plugins tiers étant le travail de développeurs externes et indépendants.

Comme le core Jeedom, la documentation de chaque plugin est récupérée depuis son dépôt Github. Prenons **le plugin ZwaveJS** par exemple :
- **Changelog** (https://doc.jeedom.com/#LANG#/plugins/automation%20protocol/zwavejs/beta/changelog) → https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/changelog.md
- **Documentation** (https://doc.jeedom.com/#LANG#/plugins/automation%20protocol/zwavejs/beta/) → https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/index.md

>**INFORMATION**
>
>Certains dépôts de plugins ne sont pas accessibles publiquement. Dans ce cas, vous pouvez toujours contribuer en créant un sujet sur [le forum](https://community.jeedom.com/c/plugins/46){:target="_blank"} avec l'étiquette `documentation-jeedom` et celle du plugin concerné.

## Gestion des traductions

Brièvement abordé dans [les prérequis](#Prérequis), les traductions sont générées automatiquement dans des fichiers `i18n/*.json`. Il est inutile de modifier ces fichiers car ils sont réécris régulièrement par un robot.

Concernant le core et les plugins officiels *(la documentation générale n'est pas concernée)*, pour que le système de traduction fonctionne il faut respecter un certain formalisme selon le langage utilisé :
- En `PHP`, hors dossier `desktop/php` :
```php
$myString = __('Ma phrase qui sera traduite', __FILE__);
```
- En `PHP`, dans le dossier `desktop/php` :
```php
$myString = '{{Ma phrase qui sera traduite}}';
```
- En `JavaScript`:
```js
var myString = '{{Ma phrase qui sera traduite}}'
```

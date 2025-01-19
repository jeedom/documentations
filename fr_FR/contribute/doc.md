# Contribuer à la documentation

La documentation de Jeedom est centralisée sur ce site, par plusieurs mécanismes. Comme le Core de Jeedom, la documentation est accessible sur Github et est Open-Source (licence MIT).

Pour participer à la documentation, vous devez donc avoir un compte [Github](https://github.com/).

Bien sûr, vous pouvez toujours faire un message sur le [forum](https://community.jeedom.com/), en mettant le tag documentation-jeedom sur votre message.

Celle-ci est différenciée en trois catégories :

## La documentation générale

Les pages de documentation générale sont celles qui ne proviennent pas directement du Core.

Par exemple :

- [Présentation](../presentation/)
- [Concepts](../concept/)
- [Contribuer à la documentation](../contribute/doc)

Ces pages sont disponibles sur le [dépôt de la documentation](https://github.com/jeedom/documentations/tree/master/fr_FR)

Suivant l'url sur le site de documentation, vous pouvez retrouver le fichier md correspondant. Exemples :

- Présentation -> https://github.com/jeedom/documentations/blob/master/fr_FR/presentation/index.md
- Concepts -> https://github.com/jeedom/documentations/blob/master/fr_FR/concept/index.md
- Contribuer à la documentation -> https://github.com/jeedom/documentations/blob/master/fr_FR/contribute/doc.md

Vous pouvez donc faire des PRs (*Pull requests*) sur ces fichiers `.md`.

Vous pouvez voir dans ce répertoire, les répertoires core, plugins, etc. Ceux-ci sont gérés automatiquement, donc inutile de faire des PRs ici (lire la suite).


## La documentation du Core de Jeedom

La documentation du Core est sur le dépôt du Core, dans le répertoire doc : [https://github.com/jeedom/core/tree/alpha/docs/fr_FR](https://github.com/jeedom/core/tree/alpha/docs/fr_FR)

Pour chaque page de Jeedom, il existe un fichier page.md correspondant.

Ce sont les pages accessibles par le (?) en haut à droite sur l'interface de votre Jeedom, et situées dans les rubriques :

- Manuel d'utilisation
- Manuel de configuration

Vous pouvez donc faire des PRs (*Pull requests*) sur les fichiers .md, de préférence sur la branche alpha.


## La documentation des plugins

Sur le même principe que la documentation du Core, celle des plugins est récupérée automatiquement depuis le dépôt du plugin.

Par exemple, pour le plugin OpenZWave

- Accès à la doc ici : [../plugins/automation%20protocol/openzwave/](https://doc.jeedom.com/fr_FR/plugins/automation%20protocol/openzwave/)
- dépôt du plugin : https://github.com/jeedom/plugin-openzwave/blob/beta/docs/fr_FR/index.md

Là il faut trouver le dépôt du plugin en question, puis aller dans son répertoire doc/fr_FR. Tout en distinguant les [plugins officiels](https://github.com/jeedom) des plugins tiers. De plus, les plugins payants (officiels ou tiers) ne sont pas accessibles, car sur des dépôt privés. Dans ce cas, vous pouvez toujours faire un message sur le [forum](https://community.jeedom.com/), avec le tag documentation-jeedom ou du plugin.


## Les traductions

Les traductions sont présentes dans les autres dossiers de langues. Le répertoire `docs/i18n/` comprend des fichiers .json par langue pour la traduction des chaînes de caractères de l'interface du Core lui-même.

Celles-ci sont générées automatiquement par un système de traduction propre à Jeedom. Il est donc inutile de faire des modifications dessus, car elle seront écrasées par le système. Si vous souhaitez améliorer les traductions, vous pouvez le signaler sur [Community](https://community.jeedom.com/). Si vous maîtrisez une des langues de Jeedom et souhaitez aller plus loin, vous pouvez demander un accès au système de traduction, qui permet de corriger toutes les traductions de chaque langue des différentes versions du Core et des plugins officiels : [contacter l'équipe du projet](mailto:contact@jeedom.com).

Dans le code vous pouvez spécifier des chaînes à traduire comme cela :

En PHP : `$myString = __('Ma phrase qui sera traduite', __FILE__);`

En JavaScript : ``{% raw %}var myString = '{{Ma phrase qui sera traduite}}'{% endraw %}``

Le système de traduction se chargera alors de leur traduction et de leur référencement dans les fichiers json (`docs/i18n/`) et le Core de leur remplacement dans l'interface.

Si vous souhaitez faire un lien vers une autre page de documentation, vous pouvez ajouter `/fr_FR/contribute/doc`. A la traduction, la partie fr_FR sera automatiquement adaptée. Les liens relatifs fonctionnent également, `/fr_FR/contribute/doc` peut être remplacé par `../contribute/doc` en fonction du répertoire dans lequel le document édité se trouve.

# Contribuer aux documentations

La documentation Jeedom est centralisée sur ce site à travers plusieurs mécanismes. Comme le core de Jeedom, [la documentation est consultable sur GitHub](https://github.com/jeedom/documentations){:target="_blank"} et est Open-Source *(licence MIT)*.

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
- Savoir faire [une *Pull Request* sur GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request){:target="_blank"},
- Connaître [le langage `Markdown`](https://fr.wikipedia.org/wiki/Markdown){:target="_blank"} utilisé pour la mise en forme du texte,
- Les traductions étant générées depuis le français, **les contributions doivent impérativement être soumises en français *(dossier `fr_FR`)***,
- Enfin, les traductions étant générées automatiquement, **aucune modification ne doit être apportée aux fichiers `.translation_memory/*.json`**.

>**INFORMATION**
>
>Si vous n'êtes pas à l'aise à l'idée d'intervenir directement sur les fichiers de documentation, vous pouvez également contribuer en créant un sujet sur [le forum](https://community.jeedom.com/){:target="_blank"} avec l'étiquette `documentation-jeedom`.

## Documentation générale

Les pages de documentation générale concernent toutes les sections, hormis celles relatives aux **Manuels** *(core Jeedom)* et aux **Plugins**. Les fichiers sont accessibles sur [le dépôt de la documentation](https://github.com/jeedom/documentations/tree/master){:target="_blank"}.

Chaque page du site de documentation correspond à un fichier `Markdown` *(\*.md)* sur GitHub, par exemple :
- La présente page, **Contribuer à la documentation** ([doc.jeedom.com/contribute/#LANG#/doc](/contribute/doc)) correspond au fichier [contribute/fr_FR/doc.md](https://github.com/jeedom/documentations/blob/master/contribute/fr_FR/doc.md){:target="_blank"}.
- La page **Compatibilité** ([doc.jeedom.com/compatibility/#LANG#/](/compatibility)) correspond au fichier [compatibility/fr_FR/index.md](https://github.com/jeedom/documentations/blob/master/compatibility/fr_FR/index.md){:target="_blank"}.
- La page **Installation sur Raspberry Pi** ([doc.jeedom.com/installation/#LANG#/rpi](/installation/rpi)) correspond au fichier [installation/fr_FR/rpi.md](https://github.com/jeedom/documentations/blob/master/installation/fr_FR/rpi.md){:target="_blank"}.
- La page **Développement de plugin** ([doc.jeedom.com/dev/#LANG#/](/dev)) correspond au fichier [dev/fr_FR/index.md](https://github.com/jeedom/documentations/blob/master/dev/fr_FR/index.md){:target="_blank"}.
- Et ainsi de suite...

>**IMPORTANT**
>
>Les documentations du core et des plugins étant génerées depuis leur propre dépôt, aucune contribution ne pourra être acceptée dans les dossiers `core`, `plugins` et `plugins_contributor` *(voir paragraphes suivants)*. La documentation `PHPDoc` est également générée automatiquement et ne doit donc pas être modifiée manuellement non plus.

## Documentation du core Jeedom

La documentation du core Jeedom correspond aux rubriques **Manuel d'utilisation** et **Manuel de configuration**, accessibles en cliquant sur le bouton ❔ en haut à droite sur l'interface Jeedom. Les fichiers se situent sur [le dépôt du core](https://github.com/jeedom/core/tree/develop/docs/fr_FR){:target="_blank"}, dans le répertoire `docs/fr_FR`.

Chaque page de manuel correspond à un fichier `Markdown` *(\*.md)* sur GitHub, par exemple :
- **Manuel d'utilisation - Dashboard** ([doc.jeedom.com/core/#VERSION#/#LANG#/dashboard](/core/dashboard)) correspond au fichier [docs/fr_FR/dashboard.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/dashboard.md){:target="_blank"}.
- **Manuel d'utilisation - Scénarios** ([doc.jeedom.com/core/#VERSION#/#LANG#/scenario](/core/scenario)) correspond au fichier [docs/fr_FR/scenario.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/scenario.md){:target="_blank"}.
- **Manuel de configuration - Personnalisation Avancée** ([doc.jeedom.com/core/#VERSION#/#LANG#/custom](/core/custom)) correspond au fichier [docs/fr_FR/custom.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/custom.md){:target="_blank"}.

>**IMPORTANT**
>
>Les contributions doivent être soumises sur la branche `develop` du core.

## Documentation des plugins

La documentation des plugins correspond aux rubriques **Plugins Officiels** et **Plugins Tiers**. Comme leur nom l'indique, les plugins officiels sont développés par l'équipe Jeedom, les plugins tiers étant le travail de développeurs externes et indépendants.

Les plugins tiers s'occupent de générer leurs pages de documentation et de changelog par eux-mêmes, le site de documentation Jeedom recense et offre un lien d'accès direct à ces pages.

La documentation des plugins officiels est quant à elle directement récupérée depuis leurs dépôts GitHub.

>**INFORMATION**
>
>Certains dépôts de plugins ne sont pas accessibles publiquement. Dans ce cas, vous pouvez toujours contribuer en créant un sujet sur [le forum](https://community.jeedom.com/c/plugins/46){:target="_blank"} avec l'étiquette `documentation-jeedom` et celle du plugin.

Comme pour le core, chaque page de documentation d'un plugin officiel correspond à un fichier `Markdown` *(\*.md)* sur GitHub. Prenons **le plugin ZwaveJS** pour exemple :
- **Documentation du plugin Z-Wave JS** ([doc.jeedom.com/plugins/automation%20protocol/zwavejs/beta/#LANG#/](/plugins/automation%20protocol/zwavejs/beta/)) correspond au fichier [docs/fr_FR/index.md](https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/index.md){:target="_blank"}.
- **Changelog du plugin Z-Wave JS** ([doc.jeedom.com/plugins/automation%20protocol/zwavejs/beta/#LANG#/changelog](/plugins/automation%20protocol/zwavejs/beta/changelog)) correspond au fichier [docs/fr_FR/changelog.md](https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/changelog.md){:target="_blank"}.

>**IMPORTANT**
>
>Les contributions doivent être soumises sur la branche `beta` des plugins dans la grande majorité des cas.

# Contribute to the documentation

Jeedom documentation is centralized on this site through several mechanisms. Like the Jeedom core, [The documentation is available on GitHub](https://github.com/jeedom/documentations){:target="_blank"} and is open source *(MIT license)*.

This can be divided into three main categories:
- [General Documentation](#Documentation%20générale)
- [Jeedom Core Documentation](#Documentation%20du%20core%20Jeedom)
- [Plugin Documentation](#Documentation%20des%20plugins)

>**INFORMATION**
>
>If you want to review a large number of files, it’s best to do so in stages *(by section, for example)* rather than submitting many changes all at once.

## Prerequisites

To contribute to the documentation, there are a few prerequisites you should be aware of and take into account:
- First of all, you need to have[a GitHub user account](https://github.com/){:target="_blank"},
- Expertise [a *Pull Request* on GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request){:target="_blank"},
- Learn about [the `Markdown` language](https://fr.wikipedia.org/wiki/Markdown){:target="_blank"} used for formatting text,
- Since translations are generated from French, **contributions must be submitted in French *(folder `fr_FR`)***,
- Finally, since the translations are generated automatically, **no changes should be made to the files** `.translation_memory/*.json`**.

>**INFORMATION**
>
>If you're not comfortable editing the documentation files directly, you can also contribute by creating a topic on [the forum](https://community.jeedom.com/){:target="_blank"} with the tag `documentation-jeedom`.

## General Documentation

The general documentation pages cover all sections except those related to **Manuals** *(Jeedom core)* and **Plugins**. The files are available at [the documentation repository](https://github.com/jeedom/documentations/tree/master){:target="_blank"}.

Each page of the documentation site corresponds to a file `Markdown` *(\*.md)* on GitHub, for example:
- This page, **Contribute to the documentation** ([doc.jeedom.com/contribute/#LANG#/doc](/contribute/doc)) corresponds to the file [contribute/fr_FR/doc.md](https://github.com/jeedom/documentations/blob/master/contribute/fr_FR/doc.md){:target="_blank"}.
- The **Compatibility** page ([doc.jeedom.com/compatibility/#LANG#/](/compatibility)) corresponds to the file [compatibility/fr_FR/index.md](https://github.com/jeedom/documentations/blob/master/compatibility/fr_FR/index.md){:target="_blank"}.
- The **Installation on Raspberry Pi** page ([doc.jeedom.com/installation/#LANG#/rpi](/installation/rpi)) corresponds to the file [installation/fr_FR/rpi.md](https://github.com/jeedom/documentations/blob/master/installation/fr_FR/rpi.md){:target="_blank"}.
- The **Plugin Development** page ([doc.jeedom.com/dev/#LANG#/](/dev)) corresponds to the file [dev/fr_FR/index.md](https://github.com/jeedom/documentations/blob/master/dev/fr_FR/index.md){:target="_blank"}.
- And so on...

>**IMPORTANT**
>
>Since the core and plugin documentation is generated from their own repositories, no contributions can be accepted in those folders `core`, `plugins` and `plugins_contributor` *(see following paragraphs)*. The documentation `PHPDoc` is also generated automatically and therefore does not need to be modified manually either.

## Jeedom Core Documentation

The Jeedom core documentation consists of the **User Manual** and **Configuration Manual** sections, which can be accessed by clicking the ❔ button in the upper-right corner of the Jeedom interface. The files are located at [the core repository](https://github.com/jeedom/core/tree/develop/docs/fr_FR){:target="_blank"}, in the directory `docs/fr_FR`.

Each page of the manual corresponds to a file `Markdown` *(\*.md)* on GitHub, for example:
- **User Manual - Dashboard** ([doc.jeedom.com/core/#VERSION#/#LANG#/dashboard](/core/dashboard)) corresponds to the file [docs/fr_FR/dashboard.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/dashboard.md){:target="_blank"}.
- **User Manual - Scenarios** ([doc.jeedom.com/core/#VERSION#/#LANG#/scenario](/core/scenario)) corresponds to the file [docs/fr_FR/scenario.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/scenario.md){:target="_blank"}.
- **Setup Guide - Advanced Customization** ([doc.jeedom.com/core/#VERSION#/#LANG#/custom](/core/custom)) corresponds to the file [docs/fr_FR/custom.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/custom.md){:target="_blank"}.

>**IMPORTANT**
>
>Contributions must be submitted to the branch `develop` at its core.

## Plugin Documentation

The plugin documentation is organized into the sections **Official Plugins** and **Third-Party Plugins**. As their names suggest, official plugins are developed by the Jeedom team, while third-party plugins are created by external, independent developers.

Third-party plugins generate their own documentation and changelog pages; the Jeedom documentation site lists these pages and provides direct links to them.

The documentation for official plugins is retrieved directly from their GitHub repositories.

>**INFORMATION**
>
>Some plugin repositories are not publicly accessible. In that case, you can still contribute by creating a thread on [the forum](https://community.jeedom.com/c/plugins/46){:target="_blank"} with the tag `documentation-jeedom` and the plugin's.

As with the core, each documentation page for an official plugin corresponds to a file `Markdown` *(\*.md)* on GitHub. Let's take **the ZwaveJS plugin** as an example:
- **Z-Wave JS Plugin Documentation** ([doc.jeedom.com/plugins/automation%20protocol/zwavejs/beta/#LANG#/](/plugins/automation%20protocol/zwavejs/beta/)) corresponds to the file [docs/fr_FR/index.md](https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/index.md){:target="_blank"}.
- **Z-Wave JS Plugin Changelog** ([doc.jeedom.com/plugins/automation%20protocol/zwavejs/beta/#LANG#/changelog](/plugins/automation%20protocol/zwavejs/beta/changelog)) corresponds to the file [docs/fr_FR/changelog.md](https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/changelog.md){:target="_blank"}.

>**IMPORTANT**
>
>Contributions must be submitted to the branch `beta` plugins in the vast majority of cases.

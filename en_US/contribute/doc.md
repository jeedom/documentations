# Contribute to documentation

Jeedom documentation is centralized on this site, by several mechanisms. Like Jeedom's Core, the documentation is accessible on Github and is Open-Source (MIT license).

To participate in the documentation, you must therefore have an account [Github](https://github.com/).

Of course, you can always make a message on the [Forum](https://community.jeedom.com/), by putting the documentation-jeedom tag on your message.

This is differentiated into three categories :

## General documentation

General documentation pages are those that do not come directly from the Core.

For example :

- [Presentation](https://doc.jeedom.com/en_US/presentation/)
- [Concepts](https://doc.jeedom.com/en_US/concept/)
- [Contribute to documentation](https://doc.jeedom.com/en_US/contribute/doc)

These pages are available on the [filing of documentation](https://github.com/jeedom/documentations/tree/master/fr_FR)

Following the url on the documentation site, you can find the corresponding md file. Examples :

- Presentation -> https://github.com/jeedom/documentations/blob/master/en_US/presentation/index.md
- Concepts -> https://github.com/jeedom/documentations/blob/master/en_US/concept/index.md
- Contribute to documentation -> https://github.com/jeedom/documentations/blob/master/en_US/contribute/doc.md

So you can do PRs (*Pull requests*) on these `.md` files.

You can see in this directory, the core directories, plugins, etc. These are managed automatically, so no need to do PRs here (read more).


## Jeedom Core documentation

The Core documentation is on the Core repository, in the doc directory : [https://github.com/jeedom/core/tree/alpha/docs/fr_FR](https://github.com/jeedom/core/tree/alpha/docs/fr_FR)

For each Jeedom page, there is a page file.md corresponding.

These are the pages accessible by the (?) At the top right on the interface of your Jeedom, and located in the sections :

- User Manual
- Configuration manual

So you can do PRs (*Pull requests*) on files .md, preferably on the alpha branch.


## Plugins documentation

On the same principle as the Core documentation, that of the plugins is automatically retrieved from the plugin repository.

For example, for the OpenZWave plugin

- Accès à la doc ici : https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/
- dépôt du plugin : https://github.com/jeedom/plugin-openzwave/blob/beta/docs/en_US/index.md

There you have to find the repository of the plugin in question, then go to its doc/fr_FR directory. While distinguishing between [official plugins](https://github.com/jeedom) third-party plugins. In addition, paid plugins (official or third-party) are not accessible, because they are on private repositories. In this case, you can always make a message on the [Forum](https://community.jeedom.com/), with the documentation-jeedom tag or the plugin.


## The translations

The translations are present in the other language files. The `docs / i18n /` directory contains files .json per language for the translation of the character strings of the Core interface itself.

These are generated automatically by a translation system specific to Jeedom. It is therefore unnecessary to make any changes to it, because it will be overwritten by the system. If you want to improve the translations, you can report it on [Community](https://community.jeedom.com/). If you master one of the Jeedom languages and wish to go further, you can request access to the translation system, which allows you to correct all the translations of each language of the different versions of the Core and of the official plugins : [contact the project team](mailto:contact@jeedom.com).

In the code you can specify strings to translate like this :

In php : `$ myString = __ ('My sentence that will be translated', __FILE __);`

In JavaScript : ``{% raw %}var myString = '{{My sentence that will be translated}}'{% endraw %}``

The translation system will then take care of their translation and their referencing in the json files (`docs/i18n/`) and the Core of their replacement in the interface.

If you want to link to another documentation page, you can add `/ fr_FR / contribute / doc`. When translating, the fr_FR part will be automatically adapted.



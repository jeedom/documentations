# Comment faire la documentation d'un plugin

## Introduction

Nous allons voir dans cette documentation comment faire la documentation de votre plugin.

## Principe

Le principe est très simple la documentation du plugin doit etre un simple lien web a indiquer dans votre fichier info.json (voir le détail [ici](https://doc.jeedom.com/fr_FR/dev/structure_info_json) ) dans le champs documentation.

A noter que vous avez aussi un champs changelog qui doit fonctionne de la meme maniere que le champs documentation.

## Comment faire ?

Comme vu plus haut vous devez juste indiquer dans le fichier info.json le lien http(s) vers votre documentation vous etes donc libre sur la présentation, l'hébergeur ou meme le mode :

- un blog
- un simple serveur web
- github (seul méthode que nous verrons ici)

## Github

Le plus simple pour votre documentation est d'utiliser le systeme de page de github qui à l'avantage d'etre très facile à utiliser.

### Langage de la documentation

Github support asciidoc et markedown (md) pour les pages, nous ne verrons ici que le markedown.

On ne va pas vous decrire la syntaxe complete du markdown, d'autre site le font déja très bien dont [celui-ci](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

Nous vous recommandons dans votre plugin (hebergé sur github) de faire un dossier et d'y copier les fichiers et repertoire du dossier docs dans le plugin template (voir [ici](https://doc.jeedom.com/fr_FR/dev/plugin_template) )

Une fois cela fait vous allez avoir dans le dossier docs un dossier fr_FR (le seul à modifier). Dans ce dossier nous vous conseillons de faire 2 fichiers :

- ``changelog.md`` => votre changelog
- ``index.md`` => votre documentation

### Mise en ligne

La mise en ligne est assez simple il suffit dans sur votre dépot github puis "Settings" et dans la partie "GitHub Pages" d'activer celle sur "master branch /docs folder" (comme l'indique le libellé seul les fichiers dans le dossier /docs de la branche master de votre plugin seront en ligne).

![doc-github](images/tutoDoc.png)

Github va ensuite vous fournir un lien de type "https://jeedom.github.io/plugin-template/" (au bout de quelques minutes en allant dessus vous devriez voir votre documentation mise en page correctement).

Il vous faut maintenant mettre les liens de votre documentation dans le fichier info.json de votre plugin pour cela il faut :

- ajouter ``#language#/`` pour le lien vers la documentation, cela donne donc sur notre exemple ``https://jeedom.github.io/plugin-template/#language#/``
- ajouter ``#language#/changelog`` pour le lien vers votre changement, cela donne donc sur notre exemple ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Note**
>
> Vous l'aurez compris lorsque l'utilisateur va demander à voir votre doc jeedom ou le market vont automatiquement remplacer #language# par la langue de l'utilisateur pour pointer vers la bonne langue (si votre documentation n'est pas disponible dans la langue de l'utilisateur alors automatiquement cela renverra vers le Français)

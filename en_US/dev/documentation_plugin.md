# How to document a plugin

## Introduction

We will see in this documentation how to document your plugin.

## Principe

The principle is very simple, the plugin documentation must be a simple web link to indicate in your info file.json (see the detail [here](https://doc.jeedom.com/en_US/dev/structure_info_json) ) in the documentation field.

Note that you also have a changelog field which must work the same way as the documentation field.

## How to do ?

As seen above, you just have to indicate in the info file.json the http (s) link to your documentation, so you are free on the presentation, the host or even the mode :

- a blog
- a simple web server
- github (only method we will see here)

## Github

The easiest for your documentation is to use the github page system which has the advantage of being very easy to use.

### Documentation language

Github support asciidoc and markedown (md) for pages, we will only see the markdown here.

We will not describe the complete markdown syntax to you, other sites already do it very well, including [this one](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

We recommend you in your plugin (hosted on github) to make a folder and copy the files and directories from the / docs folder into the plugin template (see [here](https://doc.jeedom.com/en_US/dev/plugin_template) )

Once done, you will have in the / docs folder an fr_FR folder (the only one to modify). In this folder, we advise you to make 2 files :

- ``changelog.md`` => your changelog
- ``index.md`` => your documentation

### On-line

Uploading is quite simple, just go to your github repository then "Settings" and in the "GitHub Pages" part to activate the one on "master branch / docs folder" (as indicated by the caption, only the files in the / docs folder of the master branch of your plugin will be online).

![doc-github](images/tutoDoc.png)

Github will then provide you with a link of type ``https://jeedom.github.io/plugin-template/`` (after a few minutes, by going over it, you should see your documentation layout correctly).

You must now put the links of your documentation in the info file.json of your plugin for this you need :

- add ``#language#/`` for the link to the documentation, so it gives on our example ``https://jeedom.github.io/plugin-template/#language#/``
- add ``#language#/changelog`` for the link to your change, so this gives on our example ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Note**
>
> As you can see, when the user asks to see your doc, Jeedom or the market will automatically replace #language# by the user's language to point to the correct language (if your documentation is not available in the user's language then automatically, this will refer to French)

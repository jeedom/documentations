# How to document a plugin

## Introduction

We will see in this documentation how to document your plugin.

## Principe

The principle is very simple, the documentation of the plugin must be a simple web link to indicate in your info file.json (see detail [here](https://doc.jeedom.com/en_US/dev/structure_info_json) ) in the documentation field.

Note that you also have a changelog field which must work in the same way as the documentation field.

## How to do ?

As seen above, you just have to indicate in the info file.json the http(s) link to your documentation, so you are free on the presentation, the host or even the mode :

- a blog
- a simple web server
- github (only method we will see here)

## Github

The easiest way for your documentation is to use the github page system which has the advantage of being very easy to use.

### Documentation language

Github support asciidoc and markedown (md) for pages, here we will only see markdown.

We are not going to describe the complete markdown syntax to you, other sites already do it very well, including [this one](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

We recommend you in your plugin (hosted on github) to make a folder and copy the files and directories from the /docs folder in the template plugin (see [here](https://doc.jeedom.com/en_US/dev/plugin_template) )

Once this is done, you will have in the /docs folder a fr_FR folder (the only one to modify). In this folder, we advise you to make 2 files :

- ``changelog.md`` => your changelog
- ``index.md`` => your documents

### On-line

Putting it online is quite simple, just go to your github repository then "Settings" and in the "GitHub Pages" section activate the one on "master branch /docs folder" (as the wording indicates, only files in the /docs folder of your plugin's master branch will be online).

![doc-github](images/tutoDoc.png)

Github will then provide you with a link like ``https://jeedom.github.io/plugin-template/`` (after a few minutes, by going over it, you should see your documentation formatted correctly).

Now you need to put the links of your documentation in the info file.json of your plugin for this you need :

- to add ``#language#/`` for the link to the documentation, so this gives on our example ``https://jeedom.github.io/plugin-template/#language#/``
- to add ``#language#/changelog`` for the link to your change, so this gives on our example ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Note**
>
> You will understand, when the user asks to see your doc, Jeedom or the market will automatically replace #language# by the language of the user to point to the correct language (if your documentation is not available in the language of the user then automatically, it will return to French)

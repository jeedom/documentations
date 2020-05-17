# How to do the documentation of a plugin

## Introduction

We will see in this documentation how to do the documentation of your plugin.

## Principle

The principle is very simple the documentation of the plugin must be a simple web link to indicate in your info file.json (see details [here](https://doc.jeedom.com/en_US/dev/structure_info_json) ) in the documentation field.

Note that you also have a changelog field which should work in the same way as the documentation field.

## How to do ?

As seen above you just have to indicate in the info file.json the link http (s) to your documentation you are therefore free on the presentation, the host or even the mode :

- a blog
- a simple web server
- github (only method we will see here)

## Github

The easiest way for your documentation is to use the github page system which has the advantage of being very easy to use.

### Documentation language

Github asciidoc and markedown (md) support for pages, we will only see markedown here.

We will not describe the complete markdown syntax to you, other sites already do this very well, [this one](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Location

We recommend in your plugin (hosted on github) to make a folder and copy the files and directory from the docs folder into the template plugin (see [here](https://doc.jeedom.com/en_US/dev/plugin_template) )

Once done you will have in the docs folder a folder fr_FR (the only one to modify). In this folder we advise you to make 2 files :

- ``changelog.md`` => your changelog
- ``index.md`` => your documentation

### On-line

Getting online is quite simple, in your github repository then "Settings" and in the "GitHub Pages" part, activate that on "master branch / docs folder" (as indicated by the wording only the files in the folder / docs of the master branch of your plugin will be online).

![doc-github](images/tutoDoc.png)

Github will then provide you with a type link ``https://jeedom.github.io/plugin-template/`` (after a few minutes going over it you should see your documentation layout correctly).

Now you need to put the links of your documentation in the info file.json of your plugin for that it is necessary :

- Add ``#language#/`` for the link to the documentation, this gives us our example ``https://jeedom.github.io/plugin-template/#language#/``
- Add ``#language#/changelog`` for the link to your change, so this looks at our example ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **NOTE**
>
> You will understand when the user will ask to see your jeedom doc or the market will automatically replace #language# by the user's language to point to the correct language (if your documentation is not available in the user's language then this will automatically return to French)

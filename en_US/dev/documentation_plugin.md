# How to do the documentation of a plugin

## 

We will see in this documentation how to do the documentation of your plugin.

## Principle

The principle is very simple the documentation of the plugin must be a simple web link to indicate in your info file. [here](https://doc.jeedom.com/en_US/dev/structure_info_json) .

NOTE that you also have a Changelog field which should work in the same way as the documentation field.

## How to do ?

As seen above you just have to indicate in the info file.json the link http (s) to your documentation you are therefore free on the presentation, the host or even the mode : 

- a blog
- a simple web server
- github (only method we will see here)

## Github

The easiest way for your documentation is to use the github page system which has the advantage of being very easy to use.

### Documentation language

Github asciidoc and markedown (md) support for pages, we will only see markedown here.

 [](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Location

 [here](https://github.com/jeedom/plugin-template/tree/master/docs) )

Once done you will have in the docs folder a folder fr_FR (the only one to modify). In this folder we advise you to make 2 files : 

- Changelog.md => your Changelog
- Index.md => your documentation

### On-line

Getting online is quite simple, in your github repository then "Settings" and in the "GitHub Pages" part, activate that on "master branch / docs folder" (as indicated by the wording only the files in the folder / docs of the master branch of your plugin will be online). 

![doc-github](images/tutoDoc.png)

Github va ensuite vous fournir un lien de type "https://jeedom.github.io / plugin-template / "(after a few minutes going over it you should see your documentation layout correctly).

Now you need to put the links of your documentation in the info file.json of your plugin for that it is necessary : 

- ajouter #language#/ pour le lien vers la documentation, cela donne donc sur notre exemple "https://jeedom.github.io/plugin-template/#language#/"
- ajouter #language#/Changelog pour le lien vers votre changement, cela donne donc sur notre exemple "https://jeedom.github.io/plugin-template/#language#/Changelog"

> **NOTE**
>
> You will understand when the user will ask to see your jeedom doc or the market will automatically replace # language # with the user's language to point to the correct language (if your documentation is not available in the language of the user then automatically it will return to French)

### Translation management

If your plugin is structured as advice above then the translation management is very simple to set up in addition to being automatic, just authorize the user github zoic21 to push / pull on your repository and in the market on the edition page of your plugin in the github tab to check "Activate the generation of documentation and translation". The robot goes every day at 12 noon (more or less 2 hours depending on the workload) to retrieve the French documentation of your plugin and the Changelog (beta branch) push it on transiflex (community translation system), retrieve the news translation and push it on your github repository in the right folders.


> **IMPORTANT**
>
> For the translation management part to work automatically, your plugin must be hosted on Github

> **NOTE**
>
> NOTE that once your info file.json renseigné et pousser en version stable le site de documentation Jeedom (https://doc.jeedom.com) will automatically add your plugin.

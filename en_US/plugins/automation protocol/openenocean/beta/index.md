# Open Enocean plugin

This plugin is a plugin allowing Enocean compatibility

# Configuration

## Plugin configuration

> ****
>
> In order to use the plugin, you must download, install and activate it like any Jeedom plugin.

> ****
>
> The most important thing here is to select your USB Controller (you can choose Auto it will work for the Enocean USB300 key). For any other model it is better to choose it from the list :

-    : 
-    : 
-    : ttyS1

The other option available on this page is : **Automatically delete excluded devices**. This removes Jeedom equipment when it is excluded.

You can also check the status of dependencies and relaunch them. In case of problems with the plugin always relaunch the dependencies even if OK when in doubt.

## Compatibilité

You can find [](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=openenocean) the list of modules compatible with the plugin

# The plugin

Go to the plugins / protocol menu to find the plugin.

On this page you can see the modules already included.

On the upper part of this page you have several buttons (visible depending on whether you are in expert mode or not)

-   Add button : Allows you to add certain modules that have no notions of pairing or that require sending commands from Jeedom
-   Inclusion button : This button allows to put Jeedom in Inclusion (several modes, only the first is available at the moment)
-   Exclusion button : This button allows to put Jeedom in Exclusion
-   Configuation button : This button opens the plugin configuration window
-   Health button : This button allows you to have a Health overview of all your modules

# Equipement

When you click on one of your modules, you arrive on the configuration page of that module :

-   Give a name to the module
-   Activate / make it visible or not
-   Choose your parent object
-   Assign a category
-   Define a communication monitoring delay for certain modules
-   Post a comment

On the right side you will find :

-   The profile of the equipment (generally auto detected if the module allows it)
-   Choose a model if for this profile several models are available
-   See the visual

# Equipment with configuration

For some modules it is possible to have a configure button, by clicking on it you will arrive on a page allowing to configure it

> ****
>
> Here you just have to choose all the options and click on apply. ( : there all the parameters are sent, so validate the whole)

# Compatibility list

You will find [](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) a compatibility list of modules with their inclusion procedure if they are specific.

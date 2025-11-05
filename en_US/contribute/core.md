# Contribute to the development of the Core

You want to contribute to the development of the Jeedom Core ?

- You can do PRs (*Pull requests*) On the *repository* from Core.
- If you have ideas for developments and want to participate in the long term, do not hesitate to [contact the project team](mailto:contact@jeedom.com).

Here are the basics to know :

> Before submitting a PR, update your alpha to verify that the bug has not already been fixed. And sync your github repository.

> Check that what you are fixing does not cause other bugs. Most of the Core functions are called by different Front-End pages or by other Core functions and plugins. Do a search on the Core to see/understand where the functions are used and, if in doubt, expose the problem and your correction on [Community](https://community.jeedom.com/).

## Github branches

To participate in the development of Jeedom, you must have an account [Github](https://github.com/).

The Core code is Open-Source and available [here](https://github.com/jeedom/core).

- **alpha** :  Branch of version V4 alpha. Mainly intended for developers for the next version of Jeedom.
- **Beta** : Branch of version V4 beta. Mainly intended for beta testers, to test before switching to Stable.
- **Master** : Stable branch of V4.

The updates are made on these branches according to the configuration of Jeedom **Settings → System → Configuration / Updates / Market**.

PRs (*Pull requests*) should always be done on the alpha branch.

Likewise, in order to participate in discussions on [Community](https://community.jeedom.com/), register as a developer : [Jeedom dev](https://www.jeedom.com/fr/dev.html).

## Development

To help the development of the Core, you must master one or more of the following languages:

- Php : Development of php classes, ajax calls from the front-end.
- JavaScript : Development of js classes and front-end.
- Css : Interface development.

Knowledge of the Linux environment is also desirable.

## Core tree

The code is distributed in different directories at the root of Jeedom (by default : /var/www/html) :

- **3rdparty** : Folder including the external libraries used by Jeedom (jQuery, CodeMirror, etc).
- **Backup** : Jeedom backup folder.
- **core** : File including the internal functions of the Core:
	- **ajax** : Interface php files between js classes and php classes.
	- **API** : API php files.
	- **class** : PHP class files (*eqLogic, cmd, jeeObject, history, cron, etc.*).
	- **com** : Communication php class files (*http, shell*).
	- **config** : Core configuration php files and *default.config.ini* including default configuration settings. Version file for the Core version.
	- **css** : Icons available with Core and their CSS.
	- **i18n** : Json files including translated strings.
	- **img** : Core images (logos, backgrounds, etc.).
	- **js** : Class js files, called in particular from the Jeedom pages.
	- **php** : Php files required by Core (excluding classes).
	- **repo** : PHP files specific to the market, samba, etc.
	- **Template** : Html files (*Dashboard and Mobile*) for displaying eqLogics (Tile), commands (Widgets) and scenarios.
	- **Themes** : CSS files of the three Core themes (Dark, Light, Legacy), for Dashboard and Mobile.
- **data** : Folder including user data (Reports, Views, Advanced Personalization css / js, 3D Design, etc).
- **Desktop** : Folder including all the pages displayed (the interface) in desktop and their functions.
	- **common** : Js/php files common to multiple pages. Groups functions that can be called up from several pages, in particular the *utils.js*, present on all pages in Desktop.
	- **css** : Desktop view specific css files.
	- **img** : Images specific to Desktop view.
	- **js** : Js files corresponding to each page (*administration, dashboard, scenario, etc.*).
	- **modal** : Modal php files, including php / html code and js code.
	- **php** : Php files corresponding to each page (*administration, dashboard, scenario, etc.*).
- **docs** : Documentation.
- **install** : Jeedom installation files.
- **Log** : Folder including all logs (http.error, update, etc) and those of the scenarios (scenarioLog sub-folder, named by id).
- **Mobile** : Folder including all the pages displayed (webapp interface) on mobile and their functions.
	- **css** : Mobile view specific css files.
	- **l'opération à mener** : HTML files corresponding to each page (*home, equipment, timeline, etc.*).
	- **js** : Js files corresponding to each page (*home, equipment, timeline, etc.*).
	- **modal** : HTML files corresponding to the modals in Mobile.
- **Plugins** : Folder including all installed plugins.
- **script** : Deployment script, certificates.
- **Support** : Folder used in case of support request.
- **vendor** : Folder including third party php libraries.


## Front-end

Jeedom's interface works like a website, from php interfaced with SQL and js / CSS.

Initially, the browser loads the file `/ index.php :
- Checking the installation of Jeedom, referral to ʻinstall / setup.php` if necessary.
- Verification of the Desktop or Mobile origin.
- Loading the necessary files and classes with `/ core / php / core.inc.php`.
- Verifying user authentication.
- Checking parameters in the url to directly load the right content.
- Redirect to Desktop version `/ desktop / php / index.php` or Mobile `mobile / html / home.html` according to url parameters.

### Desktop

Jeedom's interface works on the One-Page principle. Once loaded, the different pages are displayed by changing the content of a container.

The main file in Desktop is `/ desktop / php / index.php`.

Each page has at least two parameters in the url. Example :

`https://my.dns1.jeedom.com/index.php?v = d & p = dashboard` :
- **v** : Interface version : d for Desktop, m for mobile.
- **p** : Page to display. Here, `dashboard`.

In this case, the file `/ desktop / php / index.php` will load the file `/ desktop / php / dashboard.php` in the `div_pageContainer` div. This will also load the file `/ desktop / js / dashboard.js` including the js functions specific to the display of this page (here, the Dashboard).

The `/ desktop / php / index file.php` also takes care of :
- Check mode *rescue*
- Verify user authentication.
- Check if necessary the page to load according to the configuration (user default page).
- Create the html structure (*head, body, div_pageContainer, etc*).
- Load CSS, libraries etc.
- Load user theme.
- Create the menu bar.
- Enter some global php / js variables.
- Load the js file `desktop / common / js / utils.js`

The `desktop / common / js / utils.js` is therefore always present, and loaded once. It allows to :
- Manage menu js events.
- Manage url parameters according to the requested page.
- Load the requested page in the `div_pageContainer` div.
- Manage the opening / closing of modals (dialog window).
- Manage a possible theme switch depending on the time.
- Allow different js files to access common functions.

So, the index files.php and utils.js provide the basic structure and functions of the interface.
Then the content of the called page is loaded from desktop / php / page.php and desktop / js / page.js.
These content files, purely interface oriented, can access Core functions (`/ core / class` classes) directly in php, or in js thanks to js classes (` / core / js`) through ajax calls (`/ core / ajax`).

The internal functions of the Core are thus well separated, for internal operation (Back-end), but are accessible through the interface. Likewise, each page has its own php and js code. This allows you to better develop and maintain the code, but also to optimize performance by loading only the necessary classes and functions.

#### Core v4.2
Since Core v4.2, all js functions from `desktop/common/js/utils file.js` are isolated in a namespace `jeedomUtils{}`.
For example, the function previously in the root window `loadPage()` becomes `jeedomUtils.loadPage()`.

For reasons of backward compatibility for plugins, old functions are still declared and will be deprecated in a later version. [See the list here](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Core v4.3
Continuing from version 4.2, the desktop front-end pages have been isolated to avoid referencing variables and functions in the root window. This secures against possible declaration collisions and makes the code easier to read, understand and debug.

The `core/js/jeedom.class file.js` declares two new namespaces :
##### jeeFrontEnd[}

Some global variables are now in this namespace :

```js
jeeFrontEnd = {
  __description: 'Global object where each Core page register its own functions and variable in its sub-object name.',
  jeedom_firstUse: '',
  language: '',
  userProfils: {},
  planEditOption: {state: false, snap: false, grid: false, gridSize: false, highlight: true},
  //loadPage history:
  PREVIOUS_PAGE: null,
  PREVIOUS_LOCATION: null,
  NO_POPSTAT: false,
  modifyWithoutSave: false,
  //@index.php
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}
```

Typical example for desktop/js/corepage.js :

```js
"strict use"

if (!jeeFrontEnd.corepage) {
	jeeFrontEnd.corepage = {
		myVar: 'oneVar',
		init: function() {
			window.jeeP = this //root shortcut
		},
		postInit: function() {
			//Do stuff once page loaded
		},
		myFunction: function(_var) {
			var myFuncContextVar = this.myVar + ' -> ' + _var
			console.log(myFuncContextVar)
		}
	}
}

jeeFrontEnd.corepage.init()

$(function() {
  jeeFrontEnd.corepage.postInit()
})

$('#myButton').on('click', function() {
	jeeP.myFunction('test')
})
```

> The namespace of the page will therefore not be recreated on return to this same page. Moreover, the variable `jeeP` allows to use `jeeFrontEnd.corepage` with a short syntax, it corresponds to a page-specific `self`.

##### jeephp2js[}

Used to pass variables from a php script to the js front-end. For example :

```php
sendVarToJS([
  'jeephp2js.myjsvar1' => init('type', ''),
  'jeephp2js.myjsvar2' => config::byKey('enableCustomCss')
]);
```

Puis

```js
$(function() {
  if (jeephp2js.myjsvar1 == '1') { ... }
})
```

> The jeephp2js{} namespace is emptied on page change to avoid any unexpected residual variable.

### Mobile

The Desktop interface is responsive and adapts to the size of the browser. However, some things, like editing a scenario, would be complicated on a small screen. In addition, on a smartphone outdoors, in 3G or even 4G, it is important to optimize the speed of the display. This is why Jeedom has a Mobile interface, lighter and adapted to small screens.

The referring page is `/ mobile / html / index.html`, which takes care of :
- Verify user authentication.
- Create the html structure (*head, body, div_pageContainer, etc*).
- Load CSS, libraries etc.
- Load user theme.
- Enter some global php / js variables.
- Load js file `mobile / js / application.js`

The file `mobile / js / application.js` contains functions common to all pages.

As for the Desktop interface, the page called consists of two files :
- `/ mobile / html / home.html` : the html code.
- `/ mobile / js / home.js` : the js functions specific to this page.

A notable difference in Mobile is the absence of php pages. The code generation is therefore based on the js classes, which can always call Core functions with ajax calls.

### CSS files

Core CSS is mainly based on these files :
- In Desktop :
	- desktop / css / boostrap.css : Version cleaned by the CSS Bootstrap v3.3.7 team.
	- desktop / css / desktop.main.css : Main interface CSS.
	- desktop / css / coreWidgets.css : CSS specific to Core widgets.

- In Mobile :
	- mobiles / css / mobile.main.css : Main interface CSS.
	- mobiles / css / coreWidgets.css : CSS specific to Core widgets.

Themes contain CSS specific to each theme, including colors.css.

CSS loading order in Desktop :
- 3rdParty css (CodeMirror, etc.).
- Fonts (roboto, camingocode, text-security-disc).
- coreWidgets.css
- Desktop.main.css
- colors.css (theme color variables).
- core2019_xx.css (main theme file).
- shadows.css (if enabled in configuration).
- custom.css (advanced customization css file).


## Back-end

*Running*

The interface is one thing, but of course your Jeedom is always active, in order to run scenarios, crons, logs, histories etc.

The Back-end is based on the same php classes as the Front-end, present in `/ core / class /`. Each part of Jeedom has its own php class, in particular :

- jeeObject.class.php : Regroups the functions concerning Jeedom objects.
- eqLogic.class.php : Groups the functions concerning Jeedom equipment.
- cmd.class.php : Groups the functions concerning Jeedom controls.
- cron.class.php : Groups the functions concerning the scheduled tasks of Jeedom.
- config.class.php : Groups the functions concerning the configuration parameters of Jeedom.
- scenario.class.php : Gathers the functions concerning the Jeedom scenarios.
- DB.class.php : Brings together all the functions for accessing the Jeedom database. All SQL access required by other classes are managed by this one.

etc.


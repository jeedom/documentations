

# Contribute to Core development

You want to contribute to the development of the Core of Jeedom ?

- You can do PRs (*Pull requests*) on the *repository* of Core.
- If you have ideas for developments and wish to participate in the long term, do not hesitate to [contact the project team](mailto:contact@jeedom.com).

Here are the basics you need to know :

## Github Branches

To participate in the development of Jeedom, you must have an account [Github](https://github.com/).

The Core code is Open-Source and available [here](https://github.com/jeedom/core).

- **alpha** :  V4 alpha branch. Mainly intended for developers for the next version of Jeedom.
- **beta** : V4 beta version branch. Mainly intended for beta testers, to test before switching to Stable.
- **V4-stable** : Stable branch of V4.
- **release** : Release Candidate branch of V3. Only for bugfixes.
- **Master** : V3 stable release branch.

Updates are made on these branches according to the configuration of Jeedom **Settings → System → Configuration / Updates / Market**.

The PRs (*Pull requests*) must always be done on the alpha branch.

Similarly, in order to participate in discussions on [Community](https://community.jeedom.com/), register as a developer : [Jeedom dev](https://www.jeedom.com/fr/dev.html).

## Development

To help with Core development, you must be proficient in one or more of the following languages:

- PHP : Development of php classes, ajax calls from the front-end.
- javascript : Development of js classes and front-end.
- CSS : Interface development.

Knowledge of the Linux environment is also desirable.

## Core Tree

The code is distributed in different directories at the root of Jeedom (by default : var/www/html) :

- 3rd party : Folder including the external libraries used by Jeedom (jQuery, CodeMirror, etc).
- backup : Jeedom backups folder.
- **core** : Folder including Core internal functions:
	- **ajax** : Interface php files between js classes and php classes.
	- api : API php files.
	- **class** : Php class files (*eqLogic, cmd, jeeObject, history, cron, etc.*).
	- com : Communication php class files (*http, shell*).
	- config : Core configuration php files and *default.config.ini* including default configuration settings. version file for Core version.
	- css : Icons available with the Core and their CSS.
	- i18n : Json files including translated character strings.
	- image : Images (logos, backgrounds, etc.) of Core.
	- **js** : Class js files, called in particular from Jeedom pages.
	- php : PHP files necessary for the Core (excluding classes).
	- repos : PHP files specific to market, samba, etc.
	- **template** : Html files (*Dashboard and Mobile*) for displaying eqLogics (Tile), commands (Widgets) and scenarios.
	- **topics** : CSS files of the three Core themes (Dark, Light, Legacy), for Dashboard and Mobile.
- data : Folder containing user data (Reports, Views, Advanced Customization css/js, 3D Design, etc).
- **desktop** : Folder including all the pages displayed (the interface) in desktop and their functions.
	- common : Js/php files common to all or several pages. Groups together functions that can be called from several pages, in particular the *utils.js*, present on all pages in Desktop.
	- css : Css files specific to desktop display.
	- image : Images specific to Desktop display.
	- js : Js files corresponding to each page (*administration, dashboard, scenarios, etc.*).
	- modal : Modal php files, including php/html code and js code.
	- php : Php files corresponding to each page (*administration, dashboard, scenarios, etc.*).
- documents : Documentation.
- install : Jeedom installation files.
- log : Folder including all the logs (http.error, update, etc) and those of the scenarios (subfolder scenarioLog, named by id).
- **mobile** : File including all the pages displayed (the webapp interface) on mobile and their functions.
	- css : Css files specific to mobile view.
	- html : Html files corresponding to each page (*home, equipment, timeline, etc.*).
	- js : Js files corresponding to each page (*home, equipment, timeline, etc.*).
	- modal : Html files corresponding to modals in Mobile.
- plugins : Folder including all installed plugins.
- script : Deployment script, certificates.
- support : Folder used in case of support request.
- vendor : Folder including third-party php libraries.


## Front-end

The Jeedom interface works like a website, from php interfaced with SQL, and js / CSS.

Initially, the browser loads the file `/index.php` :
- Verification of Jeedom installation, referral to `install/setup.php` if needed.
- Desktop or Mobile Provenance Verification.
- Loading necessary files and classes with `/core/php/core.inc.php`.
- User Authentication Verification.
- Verification of parameters in the url to directly load the correct content.
- Redirect to Desktop version `/desktop/php/index.php` or Mobile `mobile/html/home.html` depending on url parameters.

### Desktop

The Jeedom interface works on the principle of One-Page. Once loaded, the different pages are displayed by changing the content of a container.

The main file in Desktop is `/desktop/php/index.php`.

Each page has at least two parameters in the url. Example :

`https://my.dns1.jeedom.com/index.php?v=d&p=dashboard` :
- **v** : Interface version. d for desktop, m for mobile.
- **p** : Page to display. Here, `dashboard`.

In this case, the file `/desktop/php/index.php` will load the file `/desktop/php/dashboard.php` in the div `div_pageContainer`. This will also load the file `/desktop/js/dashboard.js` including the js functions specific to the display of this page (here, the Dashboard).

The file `/desktop/php/index.php` also takes care of :
- Check mode *rescue*
- Verify User Authentication.
- Check if necessary the page to load according to the configuration (default page of the user).
- Create the html structure (*head, body, div_pageContainer, etc*).
- Load CSS, libraries etc.
- Load user theme.
- Create the menu bar.
- Fill in some global php/js variables.
- Load js file `desktop/common/js/utils.js`

The `desktop/common/js/utils file.js` is therefore always present, and loaded once. It allows to :
- Manage menu js events.
- Manage url parameters according to the requested page.
- Load the requested page into the div `div_pageContainer`.
- Manage opening/closing of modals (dialog window).
- Manage a possible theme switch depending on the time.
- Allow different js files to access common functions.

So the index.php and the utils.js provide the basic structure and functions of the interface.
Then the called page content is loaded from desktop/php/page.php and desktop/js/page.js.
These purely interface-oriented content files can access Core functions (`/core/class` classes) directly in php, or in js using js classes (`/core/js`) via ajax calls (`/core/ajax`).

The internal functions of the Core are thus well separated, for the internal functioning (Back-end), but are accessible by the interface. Similarly, each page has its own php and js code. This allows to better evolve and maintain the code, but also to optimize performance by loading only the necessary classes and functions.

#### Core v4.2
Since Core v4.2, all js functions from `desktop/common/js/utils file.js` are isolated in a namespace `jeedomUtils{}`.
For example, the function previously in the root window `loadPage()` becomes `jeedomUtils.loadPage()`.

For reasons of backward compatibility for plugins, old functions are still declared and will be deprecated in a later version. [See the list here](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Core v4.3
Continuing from version 4.2, the desktop front-end pages have been isolated to avoid referencing variables and functions in the root window. This secures possible collision of declaration, facilitates the reading and understanding of the code, as well as its debugging.

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

Used to pass variables from a php script to the js front-end. For instance:

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

The Desktop interface is responsive and adapts to the size of the browser. However, some things, such as editing a scenario, would be complicated on a small screen. In addition, on a smartphone outside, in 3G or even 4G, it is important to optimize the speed of the display. This is why Jeedom has a Mobile interface, lighter and adapted to small screens.

The referring page is `/mobile/html/index.html`, which takes care of :
- Verify User Authentication.
- Create the html structure (*head, body, div_pageContainer, etc*).
- Load CSS, libraries etc.
- Load user theme.
- Fill in some global php/js variables.
- Load js file `mobile/js/application.js`

The file `mobile/js/application.js` contains functions common to all pages.

As for the Desktop interface, the page called consists of two files :
- `/mobile/html/home.html` : the html code.
- `/mobile/js/home.js` : the js functions specific to this page.

A noticeable difference in Mobile is the absence of php pages. Code generation therefore relies on js classes, which can still call Core functions with ajax calls.

### CSS files

Core CSS relies mostly on these files:
- In Desktop :
	- desktop/css/boostrap.css : Team-cleaned version of CSS Bootstrap v3.3.7.
	- desktop/css/desktop.main.css : Main interface CSS.
	- desktop/css/coreWidgets.css : CSS specific to Core widgets.

- Mobile :
	- mobiles/css/mobile.main.css : Main interface CSS.
	- mobiles/css/coreWidgets.css : CSS specific to Core widgets.

Themes contain theme-specific CSS, including colors.css.

Desktop CSS Load Order :
- 3rdParty css (CodeMirror, etc.).).
- Fonts (roboto, camingocode, text-security-disc).
- coreWidgets.css
- desktop.main.css
- colors.css (theme color variables).
- core2019_xx.css (theme main file)).
- shadows.css (if activated in configuration).
- custom.css (advanced customization css file).


## Back-end

*In progress*

The interface is one thing, but of course your Jeedom is always active, in order to run scenarios, crons, logs, histories, etc.

The Back-end relies on the same php classes as the Front-end, present in `/core/class/`. Each part of Jeedom has its php class, in particular :

- jeeObject.class.php : Groups the functions concerning Jeedom objects.
- eqLogic.class.php : Combines the functions concerning Jeedom equipment.
- cmd.class.php : Groups the functions concerning Jeedom commands.
- cron.class.php : Groups the functions concerning the scheduled tasks of Jeedom.
- config.class.php : Groups the functions concerning the configuration parameters of Jeedom.
- scenario.class.php : Groups the functions concerning Jeedom scenarios.
- DB.class.php : Includes all Jeedom database access functions. All SQL access required by other classes is handled by this one.

etc.


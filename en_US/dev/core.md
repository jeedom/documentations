# Core development

## Arborescence

The code is distributed across different directories at the root of Jeedom *(`/var/www/html` by default)* :

- **3rdparty** : Folder containing the external libraries used by Jeedom *(jQuery, CodeMirror, etc)*.
- **backup** : Jeedom backup folder.
- **core** : Folder containing the internal functions of the Core:
	- **ajax** : PHP files that interface between JS classes and PHP classes.
	- **API** : PHP files for the APIs.
	- **class** : PHP class files *(eqLogic, cmd, jeeObject, history, cron, etc.)*.
	- **com** : PHP communication class files *(http, shell)*.
	- **config** : Core configuration PHP files and *default.config.ini* including default configuration settings. Version file for the Core version.
	- **CSS** : Icons available with the Core and their CSS.
	- **i18n** : JSON files containing the translated strings.
	- **image** : Images (logos, backgrounds, etc.) of the Core.
	- **js** : JS class files, called in particular from Jeedom pages.
	- **php** : PHP files required for the Core (excluding classes)).
	- **repo** : Market-specific PHP files, Samba, etc.
	- **template** : HTML files *(Dashboard and Mobile)* for displaying eqLogics (Tile), commands (Widgets) and scenarios.
	- **themes** : CSS files for the three Core themes (Dark, Light, Legacy), for Dashboard and Mobile.
- **data** : Folder containing user data (Reports, Views, Advanced Customization CSS/JS, 3D Design, etc.)).
- **desktop** : A folder containing all the pages displayed (the interface) on the desktop and their functions.
	- **common** : JS/PHP files common to multiple pages. Groups together functions that can be called from multiple pages, including the *utils.js*, present on all desktop pages.
	- **CSS** : Desktop-specific CSS files.
	- **image** : Images specific to desktop display.
	- **js** : JavaScript files corresponding to each page *(administration, dashboard, scenario, etc.)*.
	- **modal** : Modal PHP files, including PHP/HTML and JS code.
	- **php** : PHP files corresponding to each page *(administration, dashboard, scenario, etc.)*.
- **docs** : Documentation.
- **install** : Jeedom installation files.
- **log** : Folder containing all logs (http.error, update, etc.) and those of the scenarios (subfolder scenarioLog, named by id)).
- **mobile** : A folder containing all the pages displayed (the web app interface) on mobile and their functions.
	- **CSS** : CSS files specific to mobile display.
	- **html** : HTML files corresponding to each page *(home, equipment, timeline, etc.)*.
	- **js** : JavaScript files corresponding to each page *(home, equipment, timeline, etc.)*.
	- **modal** : HTML files corresponding to the modals on Mobile.
- **plugins** : Folder containing all installed plugins.
- **script** : Deployment script, certificates.
- **support** : Folder used in case of support request.
- **vendor** : Folder containing third-party PHP libraries.

## Front-end

Jeedom's interface functions like a website, using PHP interfaced with SQL and JS/CSS.

Initially, the browser loads the `/index` file.php` :
- Checking the Jeedom installation, redirect to `install/setup`.php` if necessary.
- Verification of origin: Desktop or Mobile.
- Loading the necessary files and classes with `/core/php/core.inc.php`.
- User authentication verification.
- Checking parameters in the URL to load the correct content directly.
- Redirects to the Desktop version `/desktop/php/index`.php` or Mobile `mobile/html/home.html` depending on the URL parameters.

### Desktop

The Jeedom interface operates on a one-page principle. Once loaded, the different pages are displayed by changing the content of a container.

The main file on the desktop is `/desktop/php/index.php`.

Each page has at least two parameters in the URL. Example :

`https://my.dns1.jeedom.com/index.php?v=d&p=dashboard` :
- **v** : Interface version : `d` for Desktop, `m` for mobile.
- **p** : Page to display. Here, `dashboard`.

In this case, the file `/desktop/php/index`.php` will load the file `/desktop/php/dashboard.php` in the div `div_pageContainer`. This will also load the file `/desktop/js/dashboard`.js` including the js functions specific to the display of this page (here, the Dashboard).

The file `/desktop/php/index`.php` also takes care of :
- Check the mode *rescue*
- Verify user authentication.
- Check if necessary the page to load according to the configuration (user's default page)).
- Create the HTML structure *(head, body, div_pageContainer, etc)*.
- Load CSS, libraries etc.
- Load user theme.
- Create the menu bar.
- Enter certain global PHP/JS variables.
- Load the js file `desktop/common/js/utils.js`

The file `desktop/common/js/utils`.js` is therefore always present, and loaded once. It allows :
- Manage JavaScript events for the menu.
- Manage URL parameters based on the requested page.
- Load the requested page into the div `div_pageContainer`.
- Manage the opening/closing of modals (dialog window)).
- Manage a possible theme switch based on the time.
- Allow different JavaScript files to access common functions.

Thus, the index files.PHP and utilities.JavaScript provides the basic structure and functions of the interface.
Next, the content of the called page is loaded from desktop/php/page.php and desktop/js/page.js.
These content files, purely interface-oriented, can access the functions of the Core (the `/core/class` classes) directly in PHP, or in JS via the JS classes (`/core/js`) using AJAX calls (`/core/ajax`)).

The internal functions of the Core are thus well separated for internal operation (Back-end), but are accessible via the interface. Similarly, each page has its own PHP and JavaScript code. This allows for better code development and maintenance, but also optimizes performance by loading only the necessary classes and functions.

#### Core v4.2
Since Core v4.2. All the JavaScript functions in the file `desktop/common/js/utils`.js` are isolated in a namespace `jeedomUtils{}`.
For example, the function previously in the root window `loadPage()` becomes `jeedomUtils.loadPage()`.

For backward compatibility reasons for plugins, the old functions are still declared and will be deprecated in a later version. [See the list here](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Core v4.3
Continuing from version 4.2. The desktop front-end pages have been isolated to avoid referencing variables and functions in the root window. This prevents potential declaration collisions and facilitates code reading, understanding, and debugging.

The file `core/js/jeedom.class`.js`declares two new namespaces :
##### jeeFrontEnd

Some global variables are now in this namespace :

```js
jeeFrontEnd = {
  __description: 'Global object where each Core page registers its own functions and variable in its sub-object name.',
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

Typical example for `desktop/js/corepage`.js` :

```js
"use strict"

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

> The page's namespace will therefore not be recreated upon returning to the same page. Furthermore, the variable `jeeP` allows the use of `jeeFrontEnd`.`corepage` with a short syntax, it corresponds to a `self` specific to the page.

##### jeephp2js

Used to pass variables from a PHP script to the front-end JavaScript. For example :

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

> The jeephp2js{} namespace is cleared on page change to avoid any unexpected residual variables.

### Mobile

The desktop interface is responsive and adapts to the browser size. However, some things, like editing a script, would be complicated on a small screen. Furthermore, on a smartphone outdoors, using 3G or even 4G, it is important to optimize display speed. That's why Jeedom has a mobile interface, which is lighter and better suited to small screens.

The reference page is `/mobile/html/index`.html`, which takes care of :
- Verify user authentication.
- Create the HTML structure *(head, body, div_pageContainer, etc)*.
- Load CSS, libraries etc.
- Load user theme.
- Enter certain global PHP/JS variables.
- Load the js file `mobile/js/application.js`

The file `mobile/js/application`.js` contains the functions common to all pages.

As with the Desktop interface, the page being called consists of two files :
- `/mobile/html/home.html` : the HTML code.
- `/mobile/js/home.js` : the JavaScript functions specific to this page.

A notable difference in mobile is the absence of PHP pages. Code generation therefore relies on JS classes, which can still call Core functions using AJAX calls.

### CSS files

The core CSS relies primarily on these files :
- Desktop :
	- `desktop/css/boostrap.css` : Cleaned version by the Bootstrap CSS team v3.3.7.
	- `desktop/css/desktop.main.css` : Main CSS of the interface.
	- `desktop/css/coreWidgets.css` : CSS specific to Core widgets.

- On Mobile :
	- `mobile/css/mobile.main.css` : Main CSS of the interface.
	- `mobile/css/coreWidgets.css` : CSS specific to Core widgets.

Themes contain CSS specific to each theme, including the colors.css file.

CSS loading order on desktop :
- 3rdParty CSS (CodeMirror, etc.).).
- Fonts (roboto, camingocode, text-security-disc).
- coreWidgets.css
- desktop.main.css
- colors.CSS (theme color variables)).
- core2019_xx.CSS (main theme file)).
- shadows.CSS (if enabled in the configuration)).
- custom.CSS (advanced customization CSS file)).


## Back-end

*in progress*

The interface is one thing, but of course your Jeedom is still active, in order to run the scenarios, cron jobs, logs, history, etc.

The back-end relies on the same PHP classes as the front-end, located in `/core/class/`. Each part of Jeedom has its own PHP class, in particular :

- `jeeObject.class.php` : Groups together the functions related to Jeedom objects.
- `eqLogic.class.php` : Groups together the functions related to Jeedom equipment.
- `cmd.class.php` : Groups together the functions related to Jeedom commands.
- `cron.class.php` : Groups together the functions related to scheduled tasks in Jeedom.
- `config.class.php` : Groups together the functions related to Jeedom configuration parameters.
- `scenario.class.php` : Groups together the functions related to Jeedom scenarios.
- `DB.class.php` : This section groups together all the functions for accessing the Jeedom database. All SQL accesses required by other classes are handled by this one.

etc.

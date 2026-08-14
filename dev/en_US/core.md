# Core development

## Tree structure

The code is spread across various directories in the Jeedom root directory *(`/var/www/html` (default)*:

- **3rdparty**: Folder containing the external libraries used by Jeedom *(jQuery, CodeMirror, etc.)*.
- **backup**: Jeedom backup folder.
- **core**: Folder containing the Core's internal functions:
	- **AJAX**: PHP files that serve as an interface between JavaScript classes and PHP classes.
	- **API**: PHP files for the APIs.
	- **class**: PHP class files *(eqLogic, cmd, jeeObject, history, cron, etc.)*.
	- **com**: PHP class files for communication *(http, shell)*.
	- **config**: Core configuration PHP files and *default.config.ini*, which contains the default configuration settings. Version file for the Core version.
	- **css**: Icons available with the Core and their CSS.
	- **i18n**: JSON files containing the translated strings.
	- **img**: Images (logos, backgrounds, etc.) from the Core.
	- **js**: JavaScript class files, called in particular from Jeedom pages.
	- **php**: PHP files required by the Core (excluding classes).
	- **repo**: PHP files specific to the market, Samba, etc.
	- **template**: HTML files *(Dashboard and Mobile)* for displaying eqLogics (Tiles), commands (Widgets), and scenarios.
	- **Themes**: CSS files for the three Core themes (Dark, Light, Legacy), for Dashboard and Mobile.
- **data**: Folder containing user data (Reports, Views, CSS/JS files for Advanced Customization, 3D Design, etc.).
- **Desktop**: A folder containing all the pages displayed (the interface) on the desktop and their functions.
	- **common**: JS/PHP files shared across multiple pages. Contains functions that can be called from multiple pages, notably *utils.js*, which is present on all desktop pages.
	- **css**: CSS files specific to the desktop display.
	- **img**: Images specific to the desktop view.
	- **js**: JS files corresponding to each page *(administration, dashboard, scenario, etc.)*.
	- **modal**: PHP files for modals, including PHP/HTML code and JavaScript code.
	- **php**: PHP files corresponding to each page *(administration, dashboard, scenario, etc.)*.
- **docs**: Documentation.
- **install**: Jeedom installation files.
- **log**: Folder containing all logs (http.error, update, etc.) and scenario logs (in the "scenarioLog" subfolder, named by ID).
- **Mobile**: A document containing all the pages displayed (the web app interface) on mobile devices and their functions.
	- **css**: CSS files specific to mobile display.
	- **html**: HTML files corresponding to each page *(home, equipment, timeline, etc.)*.
	- **js**: JS files corresponding to each page *(home, equipment, timeline, etc.)*.
	- **modal**: HTML files corresponding to the modals on mobile devices.
- **plugins**: Folder containing all installed plugins.
- **script**: Deployment script, certificates.
- **Support**: File used when submitting a support request.
- **vendor**: Folder containing third-party PHP libraries.

## Front-end

The Jeedom interface works like a website, built using PHP integrated with SQL and JavaScript/CSS.

Initially, the browser loads the file `/index.php` :
- Verifying the Jeedom installation, redirect to `install/setup.php` if necessary.
- Verifying whether the device is a desktop or mobile device.
- Loading the necessary files and classes with `/core/php/core.inc.php`.
- Verifying user authentication.
- Checking parameters in the URL to load the correct content directly.
- Redirects to the desktop version `/desktop/php/index.php` or Mobile `mobile/html/home.html` based on the URL parameters.

### Desktop

The Jeedom interface operates on the "One-Page" principle. Once loaded, the various pages are displayed by changing the content of a container.

The main file in Desktop is `/desktop/php/index.php`.

Each page has at least two parameters in the URL. Example:

`https://my.dns1.jeedom.com/index.php?v=d&p=dashboard` :
- **v**: Interface version: `d` for Desktop, `m` for mobile.
- **p**: Page to display. Here, `dashboard`.

In this case, the file `/desktop/php/index.php` will load the file `/desktop/php/dashboard.php` in the div `div_pageContainer`. This will also load the file `/desktop/js/dashboard.js` including the JavaScript functions specific to the display of this page (in this case, the Dashboard).

The file `/desktop/php/index.php` also handles:
- Check *rescue* mode
- Verify the user's authentication.
- If necessary, check which page to load based on the configuration (the user's default page).
- Create the HTML structure *(head, body, div_pageContainer, etc.)*.
- Load CSS, libraries, etc.
- Load the user's theme.
- Create the menu bar.
- Set certain global PHP/JS variables.
- Load the js file `desktop/common/js/utils.js`

The file `desktop/common/js/utils.js` is therefore always present and loaded once. It allows you to:
- Manage the menu's JavaScript events.
- Manage URL parameters based on the requested page.
- Load the requested page into the div `div_pageContainer`.
- Manage the opening and closing of modal windows (dialog boxes).
- Handle a potential theme switch based on the time of day.
- Allow different JavaScript files to access shared functions.

Thus, the index.php and utils.js files provide the basic structure and functions of the interface.
Next, the content of the requested page is loaded from desktop/php/page.php and desktop/js/page.js.
These content files, which are purely interface-oriented, can access the Core's functions (the classes `/core/class`) directly in PHP, or in JavaScript using JavaScript classes (`/core/js`) using AJAX calls (`/core/ajax`).

The Core’s internal functions are thus clearly separated for internal operations (back-end) but are accessible via the interface. Similarly, each page has its own PHP and JavaScript code. This makes it easier to develop and maintain the code, while also optimizing performance by loading only the necessary classes and functions.

#### Core v4.2
Starting with Core v4.2, all JavaScript functions in the file `desktop/common/js/utils.js` are isolated in a namespace `jeedomUtils{}`.
For example, the function previously in the root window `loadPage()` is becoming `jeedomUtils.loadPage()`.

For plugin backward compatibility, the old functions are still declared and will be deprecated in a future version. [View the list here](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Core v4.3
Following on from version 4.2, the desktop front-end pages have been isolated to avoid referencing variables and functions in the root window. This prevents potential declaration conflicts and makes the code easier to read, understand, and debug.

The file `core/js/jeedom.class.js`declares two new namespaces:
##### jeeFrontEnd

Some global variables are now in this namespace:

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

Typical type for `desktop/js/corepage.js` :

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

> The page's namespace will therefore not be recreated when returning to this same page. Additionally, the variable `jeeP` allows you to use `jeeFrontEnd.corepage` with a short syntax; it corresponds to a `self` specific to this page.

##### jeephp2js

Used to pass variables from a PHP script to the front-end JavaScript. For example:

```php
sendVarToJS([
  'jeephp2js.myjsvar1' => init('type', ''),
  'jeephp2js.myjsvar2' => config::byKey('enableCustomCss')
]);
```

Then

```js
$(function() {
  if (jeephp2js.myjsvar1 == '1') { ... }
})
```

> The jeephp2js{} namespace is cleared when the page is refreshed to prevent any unexpected residual variables.

### Mobile

The Desktop interface is responsive and adapts to the browser window size. However, certain tasks, such as editing a scenario, would be difficult on a small screen. Additionally, when using a smartphone outdoors on a 3G or even 4G connection, it’s important to optimize loading speed. That’s why Jeedom has a Mobile interface, which is lighter and optimized for small screens.

The reference page is `/mobile/html/index.html`, which handles:
- Verify the user's authentication.
- Create the HTML structure *(head, body, div_pageContainer, etc.)*.
- Load CSS, libraries, etc.
- Load the user's theme.
- Set certain global PHP/JS variables.
- Load the js file `mobile/js/application.js`

The file `mobile/js/application.js` contains the functions common to all pages.

As with the desktop interface, the page being called consists of two files:
- `/mobile/html/home.html` : the HTML code.
- `/mobile/js/home.js` : JavaScript functions specific to this page.

One notable difference in the mobile version is the absence of PHP pages. Code generation therefore relies on JavaScript classes, which can still call Core functions using AJAX requests.

### CSS files

The Core's CSS files are primarily based on these files:
- On Desktop:
	- `desktop/css/boostrap.css` : Cleaned-up version by the CSS Bootstrap v3.3.7 team.
	- `desktop/css/desktop.main.css` : Main CSS file for the interface.
	- `desktop/css/coreWidgets.css` : CSS specific to Core widgets.

- On mobile:
	- `mobile/css/mobile.main.css` : Main CSS file for the interface.
	- `mobile/css/coreWidgets.css` : CSS specific to Core widgets.

The themes contain CSS files specific to each theme, including colors.css.

CSS loading order on desktop:
- Third-party CSS (CodeMirror, etc.).
- Fonts (Roboto, Camingocode, Text-Security-Disc).
- coreWidgets.css
- desktop.main.css
- colors.css (theme color variables).
- core2019_xx.css (theme's main file).
- shadows.css (if enabled in the settings).
- custom.css (advanced customization CSS file).


## Back-end

*in progress*

The interface is one thing, but of course your Jeedom is always active to handle scenarios, cron jobs, logs, history, and so on.

The back end uses the same PHP classes as the front end, located in `/core/class/`. Each part of Jeedom has its own PHP class, including:

- `jeeObject.class.php` : Groups together functions related to Jeedom objects.
- `eqLogic.class.php` : Groups together functions related to Jeedom devices.
- `cmd.class.php` : Groups together functions related to Jeedom commands.
- `cron.class.php` : Groups together functions related to Jeedom's scheduled tasks.
- `config.class.php` : Contains functions related to Jeedom's configuration settings.
- `scenario.class.php` : Includes functions related to Jeedom scenarios.
- `DB.class.php` : Contains all functions for accessing the Jeedom database. All SQL operations required by other classes are handled by this class.

etc.

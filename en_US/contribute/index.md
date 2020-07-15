# Contribute to the development of the Core

You wish to contribute to the development of the Jeedom Core ?

- You can do PRs (*Pull requests*) On the *repository* from Core.
- If you have ideas for development and wish to participate over the long term, do not hesitate to [contact the project team](mailto:contact@jeedom.com).

Here are the basics to know.

## Github branches

To participate in the development of Jeedom, you must have a Github account.
Core code is Open-Source and available [here](https://github.com/jeedom/core) through several branches :

- **alpha** :  V4 alpha branch. Mainly for developers for the next version of Jeedom.
- **Beta** : V4 beta branch. Mainly for beta testers.
- **V4-stable** : Stable branch of V4
- **Release** : Release Candidate branch of V3. Only for bugfixes.
- **Master** : Branch of the stable version V3. Only for bugfixes.

Updates are done on these branches depending on the configuration of Jeedom **Settings → System → Configuration / Updates / Market**.

PRs (*Pull requests*) should always be done on the alpha branch.

Similarly, in order to participate in discussions on [Community](https://community.jeedom.com/), register as a developer : [Jeedom dev](https://www.jeedom.com/fr/dev.html).

## Development

To help the development of the Core, you must master :

- php : Development of php classes, ajax calls from the front-end.
- JavaScript : Development of js classes and front-end.
- css : Interface development.

Knowledge of the Linux environment is also desirable.

## Core tree

The code is distributed in different directories at the root of Jeedom (by default : var / www / html) :

- 3rdparty : File including the external libraries used by Jeedom (jQuery, CodeMirror, etc).
- Backup : Jeedom backups folder.
- **core** : File containing the internal functions of the Core:
	- **ajax** : Interface php files between js classes and php classes.
	- API : API php files.
	- **class** : Php class files (*eqLogic, cmd, jeeObject, history, cron, etc.*).
	- com : Communication php class files (*http, shell*).
	- config : Core configuration php files and *default.config.ini* including default configuration settings.
	- css : Icons available with Core and their CSS.
	- i18n : Json files including translated strings.
	- img : Core images (logos, backgrounds, etc.).
	- **js** : Class js files, called in particular from Jeedom pages.
	- php : Php files necessary for Core (except classes).
	- repo : Market-specific php files, samba, etc.
	- **Template** : Html files (*Dashboard and Mobile*) for displaying eqLogics (Tile), commands (Widgets) and scenarios.
	- **Themes** : CSS files of the three Core themes (Dark, Light, Legacy), for Dashboard and Mobile.
- data : File including user data (Reports, Views, css / js of Advanced Personalization, 3D Design, etc).
- **Desktop** : File including all pages displayed (interface) in desktop and their functions.
	- common : Js / php files common to all or several pages. Groups functions that can be called from several pages, in particular the *utils.js*, present on all pages in Desktop.
	- css : Desktop View Specific CSS Files.
	- img : Desktop-specific images.
	- js : Js files corresponding to each page (*administration, dashboard, scenario, etc.*).
	- modal : Modal php files, including php / html code and js code.
	- php : Php files corresponding to each page (*administration, dashboard, scenario, etc.*).
- docs : Documentation.
- install : Jeedom installation files.
- Log : File including all logs (http.error, update, etc) and those of scenarios (scenarioLog sub-folder, named by id).
- **Mobile** : File including all pages displayed (webapp interface) in mobile and their functions.
	- css : Mobile view specific css files.
	- l'opération à mener : Html files corresponding to each page (*home, equipment, timeline, etc.*).
	- js : Js files corresponding to each page (*home, equipment, timeline, etc.*).
	- modal : HTML files corresponding to modal in Mobile.
- Plugins : File including all installed plugins.
- script : Deployment script, certificates.
- Support : File used when requesting support.
- vendor : File including third party php libraries.


## Front-end

Jeedom interface works like a website, from php interfaced with SQL, and from js / CSS.

Initially, the browser loads the `/ index file.php` :
- Verification of the installation of Jeedom, reference to `install / setup.php` if necessary.
- Desktop or Mobile provenance check.
- Load necessary files and classes with `/ core / php / core.inc.php`.
- User authentication verification.
- Checking parameters in the url to load the right content directly.
- Redirect to Desktop version `/ desktop / php / index.php` or Mobile `mobile / html / home.html` or other depending on the parameters of the url.

### Desktop

Jeedom interface works on the One-Page principle. Once loaded, the different pages are displayed by changing the content of a container.

The main file in Desktop is `/ desktop / php / index.php`.

Each page has at least two parameters in the url. Example :

`https://my.dns1.jeedom.com/index.php?v = d & p = dashboard` :
- **v** : Interface version. d for Desktop, m for mobile.
- **p** : Page to display. Here, `dashboard`.

In this case, the file `/ desktop / php / index.php` will load the file `/ desktop / php / dashboard.php` in the div `div_pageContainer`. This will also load the file `/ desktop / js / dashboard.js` including the js functions specific to the display of this page (here, the Dashboard).

The file `/ desktop / php / index.php` also takes care of :
- Check mode *rescue*
- Verify user authentication.
- Check if necessary the page to load according to the configuration (user default page).
- Create the html structure (*head, body, div_pageContainer, etc*).
- Load CSS, libraries, etc.
- Load user theme.
- Create the menu bar.
- Enter some global php / js variables.
- Load the js file `desktop / common / js / utils.js`

The file `desktop / common / js / utils.js` is therefore always present, and loaded once. It allows to :
- Manage js events from the menu.
- Manage url parameters according to the requested page.
- Load the requested page into the div `div_pageContainer`.
- Manage the opening / closing of modals (dialog window).
- Manage a possible theme switch according to the time.
- Allow different js files to access common functions.

So the index.php and the utils.js provide the basic interface structure and functions.
Then, the content of the called page is loaded from desktop / php / page.php and desktop / js / page.js.
These purely interface-oriented content files can access Core functions (the `/ core / class` classes) directly in php, or in js thanks to the js classes (` / core / js`) via ajax calls (`/ core / ajax`).

The internal functions of the Core are thus well separated, for internal operation (Back-end), but are accessible via the interface. Likewise, each page has its own php and js code. This makes it possible to better develop and maintain the code, but also to optimize performance by loading only the necessary classes and functions.

### Mobile

The Desktop interface is responsive and adapts to the size of the browser. However, some things, such as editing a script, would be complicated on a small screen. In addition, on a smartphone outside, in 3G or even 4G, it is important to optimize the speed of the display. This is why Jeedom has a lighter mobile interface suitable for small screens.

The reference page is `/ mobile / html / index.html`, which takes care of :
- Verify user authentication.
- Create the html structure (*head, body, div_pageContainer, etc*).
- Load CSS, libraries, etc.
- Load user theme.
- Enter some global php / js variables.
- Load the js file `mobile / js / application.js`

The `mobile / js / application file.js` contains the functions common to all pages.

As for the Desktop interface, the page called consists of two files :
- `/ mobile / html / home.html` : html code.
- `/ mobile / js / home.js` : the js functions specific to this page.

A notable difference in Mobile is the absence of php pages. The generation of the code is therefore based on the js classes, which can always call the Core functions with ajax calls.

### References

*Running*



## Back-end

*Running*

The interface is one thing, but of course your Jeedom is always active, in order to run the scenarios, the crons, the logs, the histories etc.

The Back-end is based on the same php classes as the Front-end, present in `/ core / class /`. Each part of Jeedom has its php class, in particular :

- jeeObject.class.php : Groups functions relating to Jeedom objects.
- eqLogic.class.php : Combines functions relating to Jeedom equipment.
- cmd.class.php : Combines functions relating to Jeedom commands.
- cron.class.php : Combines functions relating to Jeedom's scheduled tasks.
- config.class.php : Groups functions relating to Jeedom configuration parameters.
- scenario.class.php : Combines the functions relating to Jeedom scenarios.
- DB.class.php : Combines all the Jeedom database access functions. All SQL access required by the other classes is managed by this one.

etc.

## Documentation

Beyond the pure development of the Core, you can also participate in the documentation of Jeedom.

This can be found in `docs / fr_FR /`. You can do PRs (*Pull requests*) on files .md, preferably on the alpha branch.

The translations are present in the other language files. The `docs / i18n /` directory contains files .json by language for the translation of the character strings of the Core interface itself.

These are automatically generated by a Jeedom-specific translation system. There is therefore no need to make changes to it, as they will be overwritten by the system. If you want to improve translations you can report it on [Community](https://community.jeedom.com/). If you are proficient in one of the languages of Jeedom and wish to go further, you can request access to the translation system, which allows you to correct all translations of each language from the different versions of Core and official plugins : [contact the project team](mailto:contact@jeedom.com).

In the code you can specify strings to translate like this :

In php : `$ $ myString = __ ('My sentence to be translated', __FILE __);`

In js : ``{% raw %}var myString = '{{My sentence to be translated}}'{% endraw %}``

The translation system will then take care of their translation and their referencing in the json files (`docs / i18n /`), and the Core of their replacement in the interface.


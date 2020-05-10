Setup 
=============

Intro 
=====

The WIdget plugin is a bit special because it does not allow
to create equipment but to modify the rendering (display) of a
ordered. The objective of this plugin is therefore to allow personalization
simply how to display a value, info, or action Lowed
of his tastes and desires.

Since version 1.112 from Jeedom, it is possible to customize
WIdgets with specific options (created by the developer of the
WIdget). So we can have a WIdget that will display differently from a
order to the other.

Thus, we can have the same WIdget written in blue on an order and in
green on another.

> **NOTE**
>
> WIdget and Tile, not to be confused.
>
> The WIdget is the part that will take care of formatting and
> display an info or order. A WIdget should only handle one
> single order or info.
>
> La Tuile is a grouping of WIdgets for a module. It's here
> area in which the different applied WIdgets will be displayed
> module commands and info.

Installing the WIdget plugin 
=============================

As with any plugin, the WIdget plugin is installed from the interface
Jeedom, "General" menu ⇒ "Plugins"

![capture001](../images/capture001.png)

Click on the green icon to go directly to the Market. In this
window click on "Official" and in the search field put
"WIdget".

![capture002](../images/capture002.png)

Click on the plugin icon. This opens the plugin sheet in
which contains several pieces of information.

![capture003](../images/capture003.png)

Click on the "Install stable" button". Once installed, Jeedom will
ask if you want to go to the plugin configuration page.
Answer yes. On the configuration page of the WIdget plugin, we
we only have one option for this plugin : activate or deactivate.

By default the plugin is disabled. I invite you to click on the
green button "activate".

As of now the plugin is active and operational.

Presentation and Lowic function of the WIdget Plugin 
=================================================

In order to go to the WIdget plugin, go to the menu
"Plugins "⇒" Programming "⇒" WIdget".

![capture005](../images/capture005.png)

So we are on the main plugin page. The latter has
by default a range of WIdgets upon installation It is possible
download others via the market or create your own WIdgets
(see below).

![capture006](../images/capture006.png)

By clicking on one of the WIdgets in the list on the right menu or
left you will open the WIdget configuration page, in
which you can modify, see a preview of the WIdget (if Jeedom
find a compatible command) and lots of configuration info
like WIdget source code

![capture007](../images/capture007.png)

> **Warning**
>
> If you modify a WIdget that is not one of your creations, it is
> better to duplicate it to avoId losing your changes if the
> original WIdget is updated.

For more info on configuration and WIdget creation see more
Low.

Apply the WIdget on an order 
------------------------------------

To apply a WIdget on a single command or modify the one
applied, you must go to the module configuration page. The
path to access the module differs according to the type of the latter.
Here are some examples :

For Z-Wave modules, "Plugins" ⇒ "Home automation protocol" ⇒ "Z-wave", then
choose the order module you wish to modify.

![capture024](../images/capture024.png)

On the module configuration page, go to the order and
click on the notched wheels. In the new window, go to
"Advanced View" tab"

![capture025](../images/capture025.png)

Here you can change the WIdget applied for computers and
mobiles with dedicated drop-down lists.

![capture014](../images/capture014.png)

> **NOTE**
>
> The drop-down lists are self-filtering. They only provIde
> WIdgets compatible with the type of command.

Apply the WIdget on several commands {# anchor-1}
-------------------------------------------

En cliquant sur le bouton “Appliquer sur des commandes” vous ouvrez une
window which lists all the commands compatible with the type of
WIdget. So you can simply apply or remove the WIdget from
many orders at one time.

![capture008](../images/capture008.png)

Just check the orders on which you wish
apply WIdget

### Various examples for the same order 

![WIdget : badge-transparent](../images/capture009.png)

![WIdget : badge](../images/capture010.png)

![WIdget : ConsoIMG](../images/capture011.png)

WIdget customization options 
---------------------------------------

Since version 1.112 from Jeedom, it is possible to customize
WIdgets with specific options (created by the developer of the
WIdget) and common to all WIdgets. So we can have a WIdget that
will display differently from one command to another.

There are 2 ways to access these options. Either by the home automation tree
which can be found in the "General" menu ⇒ "Home Automation Summary"

![capture012](../images/capture012.png)

On this page you find all your home automation elements, objects,
modules, commands. Click on the small notched wheel to
access the configuration page.

![capture013](../images/capture013.png)

Either from the module configuration page.

![capture015](../images/capture015.png)

### Add a custom option 

In the "Advanced display" tab, there are 2 drop-down lists which
allow to change for the command the WIdget used on a
computer and the other for mobile. There are also other options,
to display or not names and stats, force a line break
before / after the WIdget if there are several commands in a module
(line breaks in the tile). Finally the list of parameters
optional WIdget applied (the list available is on the forum
or Wiki, a doc system is under study)

![capture014](../images/capture014.png)

![exemple 1 de valeur pour afficher un compteur
specific] (../ images / capture016.png)

![exemple 2 de valeur pour afficher un autre
counter] (../ images / capture017.png)

> **NOTE**
>
> To add an option just click on the button
> "Add ", enter the name of the option with the correct lower case
> and capital letters, as well as the value to be assigned to the option. For
> find the options, consult the forum and / or the Wiki

Advanced configuration 
---------------------

See the doc on the Home automation summary ⇒
[ICI](https://jeedom.github.io/core/fr_FR/display)

WIdget creation / modification 
---------------------------------

The plugin offers 2 possibilities for the creation of WIdgets, the mode
easy which allows to make Lowic WIdgets easily with a
creation assistant, and the advanced mode which also allows
subsequent modification of all WIdgets.

> **NOTE**
>
> Advanced mode provIdes limitless flexibility. However, you
> must have some knowledge of Lowic programming language
> such as HTML and CSS for the Lowe and JavaScript to be able to realize
> slightly more complex things.

### Easy creation mode 

To make a WIdget with the wizard, you just have to go
in the plugin : "Plugins" menu ⇒ "Programming" ⇒ "WIdget". From
this page, click on the "Easy creation mode" button at the top
Left.

![capture026](../images/capture026.png)

On the new page, you can in the right part, view
Jeedom Lowic icons, images you imported, and
imported packs. On the left sIde, first a button for
import packs or images, then 3 buttons for WIdget creation.

![capture027](../images/capture027.png)

-   On / Off WIdget ⇒ Intended for button commands for on / off

-   Simple State WIdget ⇒ Intended for commands which have a status feedback

-   Digital WIdget ⇒ Intended for commands that send a value
    digital (example : Temperature, brightness… etc)

#### Example with the creation of a status WIdget 

> **NOTE**
>
> This example remains applicable for the 2 other types of creation

Click on the button "Simple State WIdget". We arrive on the page of
assisted configuration. You have to give a name to the WIdget (unique name), the
interface type, if the WIdget is for the PC (Dashboard) or mobile,
then the library to use (Jeedom, Personal image or packs).

![capture028](../images/capture028.png)

Then you have to choose the icon for State 0 and 1, as well as the
icon size (value in "EM" =% of the original size of the
browser font, 1 = 100%). This done, the source code appears in
below the configuration area.

> **Warning**
>
> Do not modify this information if you do not know what you
> do.

It only remains to valIdate to finalize the creation of the WIdget. You
will be automatically redirected to the advanced configuration page which
allows you to apply the WIdget to multiple commands (see the
chapter [Apply the WIdget to several commands] (# anchor-1))

### Creation / modification in advanced mode 

In advanced mode, you must have knowledge of the language of
"HTML", "CSS" and "JavaScript" programming to be able to modify
correctly a WIdget.

> **NOTE**
>
> There are several sites in FR on the web to learn these
> languages, I recommend OpenClassRoom which explains everything from the
> Start.

To access the advanced mode, simply go to the
WIdget plugin, choose the WIdget to modify or click on the
"Add WIdget" button"

#### Creating a WIdget 

From the main plugin page, click on "Add a WIdget".
Jeedom asks you some info on the future WIdget.

![capture029](../images/capture029.png)

-   Name must be a unique name. Check that this name does not exist
    not already.

-   Version, corresponds to the type of device for which it is intended
    (PC or Mobile).

-   Type, corresponds to the type of command that will use the WIdget: None,
    info or action.

-   Sub-type, gives precision to the type chosen previously.

You can change the name, type and subtype later. However, this
may have implications if the WIdget is already applied to one or
multiple orders. It is therefore better to avoId it.

##### Type Info 

The type "info" is used for commands that return a value,
for example, a module state, a numerical value (temperature,
brightness, humIdity etc), a text or any other information.

-   Digital : for numbers

-   Binary : for on / off states (0/1)

-   Other : for all other types of info like texts

##### The action type 

The "action" type is used for commands that will have a
action in Jeedom or on external equipment.

-   Default : used to create action buttons

-   Cursor : used to create slIders for editing
    numerical values

-   Message : Used to create a text entry area with a button
    sending

-   Color : used to create a color choice button

Once configured, click on "Add". Jeedom redirects you to the
main page of WIdget configuration / modification. From
there, the WIdget is created in Jeedom but does not currently contain
code for displaying the command.

![capture030](../images/capture030.png)

#### Editing a WIdget 

Once on the main config page of a WIdget, it is in the
"source code" part that changes in appearance apply.

> **Warning**
>
> To modify this info you need to have some programming Lowes
> HTML, CSS and JavaScript. Changes can have an impact
> important on the display of the WIdget and on the display of other
> WIdgets, or even block the display of all WIdgets.

The Lowe (skeleton) of a WIdget is in HTML. This allows to
structure the display and find information more simply.

In Jeedom for WIdgets, the first piece of code to create is a
"div "which will act as main container for all the code of our
WIdget.

In this "div", you can find up to 3 distinct sub-parts :

-   The HTML part which will display the information

-   The CSS part which will make it more attractive by formatting the part
    HTML (Optional part)

-   The JavaScript part which allows you to work on various actions,
    calculations and animations

##### HTML Code 

Rather than long speeches, here is an example of Lowic code for a
WIdget

**Basic HTML structure.**

``` {.html}
<div>
    <center>
        <span></span>
    </center>

    <style>

    </style>

    <script>

    </script>
</div>
```

The Lowic structure which schematizes the different locations in
our WIdget is now created. However, we have nothing that
is displayed, it's normal.

div

:   relatively versatile multifunction container with return to
    line after him

center

:   tag that centers its content

span

:   relatively versatile multifunction container without return to the
    line after him

style

:   Container for CSS code that will be applied generally
    (attention its content can affect all the elements of the page)

script

:   tag that will contain JavaScript

As it stands, it's hard to do anything with this bit of
coded. This is why we will add some options (called Attribute
in HTML) in our tags.

**Addition of Lowic attributes.**

``` {.html}
<div class="Doc-#Id# cmd tooltips cmd-WIdget #history#" title="" data-type="info" data-subtype="numeric" data-cmd_Id="#Id#" >

    <center>
        <span></span>
    </center>

    <style>

    </style>

    <script>

    </script>
</div>
```

In our main "div" we added several attributes :

Id

:   The "Id" attribute is not recommended on Jeedom

> **Important**
>
> To be sure to avoId a conflict in IDs (which can
> plant the whole web page), under Jeedom we use class-Ids and
> "data" attributes-". This makes it possible to be sure that in the event of a collision,
> the whole web page is not crashed.

class

:   Classes unlike Ids are not unique. They are used to
    apply a style defined in the style part (the tag). We can
    so simply reproduce the same formatting that we create a
    times and that we reuse by keyword (class). Here we add
    several Lowic defined and available classes in Jeedom (see
    lower Jeedom class).

        Jeedom uses instead of the Id attribute, a class like Id, this makes it possible to make an element unique on the page in order to find it and target it more easily. It is imperative that its value is unique on the page. For this I advise you to use a word that represents our element. In our example the div represents the whole of our WIdget, so we can use the name of our WIdget or an abbreviation (here I chose Doc-). Then, to ensure that the class-Id is unique, we will put a tag "# Id #" (for more info on Jeedom tags see below), which gives "Doc- # Id#".

data-type

:   this attribute allows to store the type of the command on which
    the WIdget will be applied. Its value must therefore correspond
    to the type parameter above the code area.

data-subtype

:   this attribute allows to store the subtype of the command on
    which WIdget will be applied. So its value
    matches the subtype parameter above the code area.

data-cmd \ _Id

:   This attribute takes as value the Tag \ #Id \#. It is used by
    Jeedom for the Dashboard update.

From there, we have a Lowe which corresponds to the Jeedom standard. It is
the minimalist code it takes to have a WIdget that respects the
Jeedom charter / rule

> **Important**
>
> Don't forget to modify the data-type and data-subtype attribute if
> you change these values in the WIdget config.

##### CSS code 

This part which is added between the 2 "style" tags, allows to
declare formatting rules. This part is optional because
you can add the formatting directly in the style attribute
a tag or using JavaScript. The use of this part
is therefore a matter of preference to properly separate HTML and CSS

> **Warning**
>
> Any code declared in style tags, applies to the whole page.
> So be careful with the CSS selector you choose
> to use in order not to alter the other WIdgets.

In order not to unintentionally impact other WIdgets by code
CSS that you are going to put there, I advise you to use the selector
Id that targets your WIdget.

Example, if I want to put in red the text located in the tag
"Span ", we would tend to write :

**Code put in the Style tag.**

``` {.CSS}
span{
    color: red;
}
```

But it would change the color of the text of all
page span. So to avoId this, add an Id selector which aims
your WIdget to define its action :

**Code put in the Style tag and delimited.**

``` {.CSS}
.Doc- # Id # span{
    color: red;
}
```

By adding .Doc - \ # Id \ # in front of the span selector, we delimit the
modification insIde our WIdget.

##### JavaScript code 

JavaScript is put between the tags "Script". We use the
JavaScript to do calculations, convert data, animate the
WIdget, format the WIdget, perform actions on the WIdget by
event function. In addition to the Lowic JavaScript, Jeedom integrates by
default several Frameworks which allow to simplify the code
JavaScript. We can therefore use without initializing them :

-   Jquery

-   Jquery UI

-   Bootstrap

> **Warning**
>
> In case of error in JS code, it can block all JS codes
> that could follow, whether in the WIdget or other WIdgets.
> So be careful when making changes.

> **Tip**
>
> If after saving a WIdget modification, the toothed wheel
> contained to rotate indefinitely, you may have made a
> JS error causing the continuation of the JS execution to crash on the page.
> To be able to correct it, you just need to pass the div
> Id = jqueryLoadingDiv in display none using the console
> browser, correct code and save. You also have to do F5
> to refresh the page.

### Jeedom tags 

In Jeedom you will often come across tags which are names
Surrounded by "\#". The principle of operation of these tags is simple :
Jeedom will replace them with the value that corresponds to the tag. Tags
are kinds of variables (boxes) in which are stored
values that we do not know at the time of writing the code. It is
a bit as if we were making a text with blanks to put more
late words that would give variable meaning to the text.

Not all tags are available with all types of orders,
so here is the list and their detail :

\ #Id \#

:   Order ID created by Jeedom when the order was created
    (unique numeric value).

        Use as text, in JS or in HTML attributes

\ #logicalId \#

:   Logical order ID (may be empty).

        Use as text or in JS

\ #name \#

:   Name of the order.

        Use as text or in JS

\ #name \ _display \#

:   Name of the order. To be used for displaying the name of the
    WIdget level command.

        Use as text or in JS

\ #hIdeCmdName \#

:   Empty if the name of the command must be displayed. And "display:none;"
    if the name of the command should not be displayed.

        Use in HTML style (CSS) attributes

\ #maxValue \#

:   Maximum value that can take the order.

        Use as text, in JS or in HTML attributes

<!-- -->

\ #valueName \#

:   Name of the linked info command, if the action command is linked to a
    info command, name of the action command otherwise.

        Use as text or in JS

\ #lastValue \#

:   Last value of the order (can be empty).

        Use as text or in JS

<!-- -->

\#unit\#

:   Control unit

        Use as text or in JS

\ #collectDate \#

:   Returns the date and time of the last WIdget update on
    format "yyyy-mm-dd hh:min:ss"

        Use as text, in JS, or in the title attribute

\ #state \#

:   Order value

        Use as text or in JS

\ #displayHistory \#

:   Allows you to take into account the option "Display statistics on
    WIdgets "in the" General "menu ⇒" Administration "⇒" Setup"
    "Command Setup" tab". If the option is on yes, the
    tag will return a blank otherwise 'display : none;'

        To be used in the "style" attribute of an html tag to display if logging is activated in the Jeedom config

\ #averageHistoryValue \#

:   Average value over the last x hours of the order

        Use as text or in JS

\ #minHistoryValue \#

:   Minimum over the last x hours of the order

        Use as text or in JS

\ #maxHistoryValue \#

:   Maximum over the last x hours of the order

        Use as text or in JS

\#trend\#

:   Allows if the value history is activated to return the
    class : 'fa fa-minus', 'fa fa-arrow-up' or 'fa fa-arrow-down' (icon
    line, down arrow, up arrow), related to the value trend

        To be used in the "class" attribute of an "i tag"

\ #history \#

:   Allows if the value history is activated to return the
    class : 'history cursor '(See Jeedom CSS class), otherwise it will
    replaced by a vacuum. The tag therefore allows to display or not the
    history graph on the dashboard.

        To be used in the "class" attribute of the main div

![Exemple de retour de valeur](../images/capture031.png)

### Jeedom CSS Classes 

cmd:   
    - Must be added to the "class" attribute of the div
    main, this class allows the update of the WIdget. Without this
    class WIdget only updates by refreshing the page.

cmd-WIdget:   
    - This class is recommended because it allows to add some
    default CSS settings for the WIdget for good behavior.

cursor:   
    - Allows you to change the pointer in hand.

history:
    - This class allows you to change the pointer in hand, and when clicking
    display the WIdget value history.

tooltips:   
    - It is for the title of an element instead of being yellow it becomes
    translucent black with white text

Faq 
===

How to learn to make a WIdget ?

:   The WIdget system is Lowed on the HTML and Javascript languages,
    it is therefore advisable to watch the courses (very numerous) on
    these languages. In addition, it is also interesting to read courses on
    Jquery (and Jquery mobile for the mobile version of WIdgets).

Another way is to make an "easy creation" WIdget, so the
plugin will automatically generate your WIdgets code.

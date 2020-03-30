Plugin allowing to execute scripts (shell, php, ruby…),
HTTP requests, to retrieve information in XML or JSON.

Plugin configuration 
=======================

The configuration is very simple, after downloading the Plugin, it
you just activate it and that&#39;s it.

![script1](../images/script1.PNG)

The only option is where jeedom puts the default scripts, it
is advised not to touch it.

Equipment configuration 
=============================

Configuration of Script equipment is accessible from the menu
Plugin :

![script2](../images/script2.PNG)

This is what the Script Plugin page looks like (here with already 1
equipment) :

![script3](../images/script3.PNG)

Here is the list of your Scripts. Once you click
on equipment you get :

![script4](../images/script4.PNG)

> **Tip**
>
> As in many places on Jeedom, put the mouse on the far left
> brings up a quick access menu (you can
> from your profile always leave it visible).

Here you find all the configuration of your equipment :

-   **Script equipment name** : name of your script equipment

-   **Category** : equipment categories (it may belong to
    multiple categories)

-   **Activate** : makes your equipment active

-   **Visible** : makes it visible on the dashboard

-   **Parent object** : indicates the parent object to which belongs
    equipment

-   **Self-actualization** : allows to specify a refresh cron
    automatic for all info type commands.

Below you find the list of orders :

-   **Name** : This field contains the name you want to give to
    your order / information.

-   **Icon** : This field allows you to associate an icon with your name (in
    this Jeedom case replaces the name with the icon in the dashboard).

-   **Script type** :

    -   The HTTP type : allows to send a request to a device
        external without necessarily waiting for a return of this command.
        The example which will serve as support for the HTTP type will be the
        configuration of a request to a Vera to switch on
        a light.

    -   The script type : mainly used to run scripts
        internal to Jeedom. The example that will support the type
        script will be the configuration of the temperature monitoring script
        raspberry available on the market.

    -   XML type : allows to retrieve information encoded in
        XML from remote equipment. The example that will serve as
        XML type support will be the script configuration for
        interrogate an Eco-Device.

    -   The JSON type : allows to retrieve information encoded in
        JSON from a remote device. The example that will serve as
        support for type JSON will be the script configuration for
        interrogate Sickbeard (or XBMC).

-   **the type** and the **Sub-type**

-   Field **Request**

    -   This field must contain the query itself, or the path of the
        script if the field "type of script" is script. The button
        "Browse" : allows you to select the file contained in the
        internal file at Jeedom.

        > **Tip**
        >
        > This file is accessible in SSH
        > in / usr / share / nginx / www / jeedom / Plugins / script / core / resources /.
        > FYI, the SSH command to assign www-data rights
        > to a file is : sudo chown
        > www-data:www-data NOMDUSCRIPT.EXTENSION. NOTE that for
        > execute a script, it must have www-data rights.

    -   The button **Edit** : allows you to edit using an editor
        internal code one of the files contained in the directory
        allowing access to the file code.

    -   The button **New** : allows to create a command file.

        > **Tip**
        >
        > Do not forget to enter the name of the file as well as its
        > full extension on pain of seeing your superb script not
        > not work. Without extension Jeedom will not know
        > recognize the language associated with your file. CF :
        > Generality

    -   The button **Delete** : allows to delete a file
        control.

    -   The button **Share** : one of the most important, and after
        validated the CGU developers in your profile on the market,
        allows you to share your creation with the community.

-   Field **Options** : Field with variable options depending on the choice
    script type.

-   **Unit** : data unit (can be empty).

-   **min / max** : data bounds (may be empty).

-   **Historize** : allows to historize the data.

-   **Pin up** : allows to display the data on the dashboard.

-   **Event** : return in case of events. In the case of RFXcom
    this box must always be checked because you cannot query
    an RFXcom module.

-   **Allow memcache** : allows Jeedom to use cache for
    value (default 5 min) before re-executing the script to have to
    new value.

-   **Lifetime cache** : allows to modify the lifetime of the cache
    (default 5 min).

> **Important**
>
> Avoid as much as possible in the script path or in
> the parameters of it special characters. The characters
> allowed being : numbers, letters (upper or lower case)

![script5](../images/script5.PNG)

Allows you to call a url or retrieve the return of a URL.

-   a checkbox "Do not check SSL" : if checked, allows Jeedom
    not to send the "User" and "Password" fields to
    the request. Jeedom will not seek to identify with
    remote site / machine.

-   a checkbox "Allow blank response" : if checked, allows
    Jeedom not to wait for a response, or to ignore any response to
    the transmitted frame. In general, we check if Jeedom sends us a "Curl
    error : Empty reply from server".

-   a check box "Never report errors" : lets not
    not raise an alert in case of error.

-   a timeout field" : without being informed, the timeout of the request
    defaults to 2 seconds, otherwise it is worth the value entered.

-   a field "Maximum trials" : Maximum 4 tests by default.

-   a "User" field" : to enter a username.

-   a "Password" field" : to enter a password.

The HTML choice 
=============

![script8](../images/script8.PNG)

Parse a web page (HTML file) to retrieve a value
above. The syntax is the same as for jquery.

The option field has a "HTML file URL" field" : this field
therefore contains the link to the machine hosting the HTML file in
Question.

The XML choice 
============

![script6](../images/script6.PNG)

Allows you to retrieve xml and specifically look for a value
in.

The option field has a "URL of the XML file" field" : this field
therefore contains the link to the machine hosting the XML file in
Question.

> **Important**
>
> It is only possible to retrieve values, attributes do not
> can be recovered.

The JSON choice 
=============

![script7](../images/script7.PNG)

Allows to recover json and to specifically seek a
value in.

The option field has a "JSON file URL" field" : this field
therefore contains the link to the machine hosting the JSON file in
Question.

HTTP example : Piloting a Vera 
==================================

The example is based on a Vera and consists in driving a bulb
dimmable. I&#39;m not going to dwell on how to drive a Vera
by HTTP request, the TLD forum is filled with responses. Moreover,
the example corresponds to my type of material and will have to be adapted to
your.

> **Tip**
>
> A method for those who are groping for writing HTTP requests,
> first validate the syntax in your browser and only then
> go to configuration under Jeedom. When an Action script doesn&#39;t
> not working, switch to Info / Other script allows you to see the error
> returned.

Let&#39;s go :

-   We create equipment : for example LUM CUISINE (I think we have
    all a kitchen on hand)

-   We associate it with a parent object : for example VERA, it allows me
    centralize all orders related to VERA on a
    single parent.

-   Choose your category.

-   Activate your equipment, do not check visible, we will see a little
    later how to associate it with a virtual one (sexier, more WAF)

-   For self-updating, do not put anything, it is a command
    impulse linked to pressing a button or a scenario !

-   Add a script command

-   Remember to save

Explanations :

-   Name : 100% because we will turn on a light at full power

-   Script type : HTTP

-   Type : Action (it&#39;s an order)

-   Sub type : Default

-   Request :

````
HTTP://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=100
````

> **Tip**
>
> the "100" at the end of the request corresponds to the power percentage
> to assign so put "0" at the end of the request corresponds to
> turn off the bulb.

The "test" button allows you to test your order !

You can therefore multiply orders in the same equipment by
for example putting a 60% order for a dim light, create
a third at 30% for night trips to be combined in a
scenario,…

It is also possible to create a slider type command by putting the
tag \ #slider \ # in the request :

````
HTTP://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=#slider#
````

> **Tip**
>
> If your order is of message type you can use tags
> \ #message \ # and \ #title \ #, same for a color order with
> the tag \ #color \ #, or of type slider with # slider # or list with #select#

HTTP example : Send notification to XBMC 
==============================================

Goal : Send notification to XBMC when opening a door
input.

-   Name : PUSH XBMC

-   Script type : HTTP

-   Type : Action (it&#39;s an order)

-   Sub-type : Default

-   Request :

````
HTTP://IP_DE_XBMC:8080/jsonrpc?request={ %22jsonrpc%22:%222.0%22,%22method%22:%22GUI.ShowNotification%22,%22params%22:{ %22title%22:%22Mouvement%20Detecté%22,%22message%22:%22Porte%20Entrée%22},%22id%22:1}
````

It&#39;s up to you to test this in a scenario for example !

XBMC API [here] (HTTP://wiki.xbmc.org/index.php?title = JSON-RPC_API / v6)
(only the fields marked "required" are compulsory)

Goal : Send a notification to XBMC when the temperature drops
below a certain threshold

Take the example above :

-   replace "Movement% 20Detected" with "Risk% 20of% 20gel"

-   replace "Porte% 20Entrée" by
    "Temperature%% 20 20extérieur:% 20 \ # \ [OUTER \] \ [OUTER \] \ [TEMPERATURE \] \% # 20"

Testez sur un scénario *\[EXTERIEUR\]\[EXTERIEUR\]\[TEMPERATURE\]* &lt;
15 for example

Action : Launch the script, via virtual equipment, linked to your script
!

SCRIPT example 
==============

The nicest but not the easiest to explain.

Prerequisites : know how to develop a script in php, python or ruby.

>**Important**
>
> The extension of your script must absolutely match its type. Ex .php for a php type. Indeed Jeedom is based on the extension of the script for the executable to launch (php if .php, python if .py ....)

The Raspberry temperature monitoring script will serve as an example
for using the script type : Script

After downloading the script from the market, the "Browse" button"
allows you to select the temp \ _rasp.php file.

Out of curiosity, you can go and see the contents of the file by pressing
on the "Edit" button, you should get the following code :

This is a php script that can be reused outside Jeedom !

````
 <?php
    $temp = shell_exec("cat /sys/class/thermal/thermal_zone0/temp");
    $temp = $temp / 1000;
    $temp = round($temp,1);
    echo $temp
 ?>
 ````

NOTE : concretely, it is the php "echo" function which will give the
value to Jeedom

The settings 
--------------

Get Jeedom&#39;s info to use it in a script. The
recovery depends on the type of script used :

Example :

-   In the line :
    /usr/share/nginx/www/jeedom/Plugins/script/core/ressources/MON\_SCRIPT\_PHP.php
    list, the argument "list" is a character string (fixed)
    retrieved from the php script using the following function
    \ $ argv \ [1 \] cf. : Google for more details on retrieving
    parameters in PHP.

-   We have previously seen that it was possible to recover
    dynamic values from Jeedom.

-   In the line :
    /usr/share/nginx/www/jeedom/Plugins/script/core/ressources/radio.py
    VOL * slider *, the argument "* slider *" is retrieved from this
    argv \ [2 \]. When jeedom runs the script, it
    will automatically replace * slider * with the value (numeric)
    slider. cf. : Google for more details on retrieving
    parameters in Python.

-   Stronger : Potentially, all the variables accessible by
    Jeedom can be used by the script Plugin :

    -   You want to recover the value of the kitchen temperature
        to historicize it outside of Jeedom ?

    -   Pass * \ [KITCHEN \] \ [KITCHEN \] \ [Temperature \] * as parameter
        to the script and Jeedom will replace it with the value read during
        of the shipment.

Recommendation to test the parameters in the php script :

````
if (isset($argv)) {
 foreach ($argv as $arg) {
     $argList = explode('=', $arg);
     if (isset($argList[0]) && isset($argList[1])) {
         $_GET[$argList[0]] = $argList[1];
     }
 }
}
````

Simple XML example 
==================

Here is the format of the standard xml :

````
<root>
    <led0>1</led0>
    <leds>
      <led1>toto</led1>
    </leds>
</root>
````

If you want the value of led0 in the query, you put led0. Yes
you want the value of led1 which is the son of leds you put
leds &gt; led1.

NOTEz que l'élément racine &lt;root&gt; n'est pas à préciser dans le
request field.

Complex XML example 
====================

````
 <root>
   <led0>1</led0>
   <leds>
     <led1>toto</led1>
   </leds>
   <leds>
     <led1>tata</led1>
   </leds>
 </root>
 ````

The syntax is :

leds &gt; 1 &gt; led1 qui donne en réponse tata, 1 étant le numéro de
array row !

More complex XML example 
=========================

````
<AKT_Data ID="SMS-Liste" ZeitSt="01.05.2017 18:55">
 <MesPar DH="HBCHa" StrNr="2167" Typ="02" Var="02">
   <Name>Tresa - Ponte Tresa, Rocchetta</Name>
   <Datum>01.05.2017</Datum>
   <Zeit>18:50</Zeit>
   <Wert>268.56</Wert>
   <Wert dt="-24h">268.51</Wert>
   <Wert Typ="delta24">0.051</Wert>
   <Wert Typ="m24">268.52</Wert>
   <Wert Typ="max24">268.56</Wert>
   <Wert Typ="min24">268.50</Wert>
 </MesPar>
 <MesPar DH="HBCHa" StrNr="2265" Typ="03" Var="02">
  <Name>Inn - Tarasp</Name>
  <Datum>01.05.2017</Datum>
  <Zeit>18:50</Zeit>
  <Wert>4.85</Wert>
  <Wert dt="-24h">7.98</Wert>
  <Wert Typ="delta24">-3.130</Wert>
  <Wert Typ="m24">6.15</Wert>
  <Wert Typ="max24">7.98</Wert>
  <Wert Typ="min24">4.85</Wert>
 </MesPar>
 <MesPar DH="HBCHa" StrNr="2270" Typ="02" Var="32">
  <Name>Doubs - Combe des Sarrasins</Name>
  <Datum>01.05.2017</Datum>
  <Zeit>18:00</Zeit>
  <Wert>500.65</Wert>
  <Wert dt="-24h">500.65</Wert>
  <Wert Typ="delta24">0.000</Wert>
  <Wert Typ="m24">500.65</Wert>
  <Wert Typ="max24">500.65</Wert>
  <Wert Typ="min24">500.64</Wert>
 </MesPar>
</AKT_Data>
````

To retrieve information from the Wert field of the 1st block:

``MesPar>0>Wert>0 qui retourne donc "268.56 "``

To return the following element in the Wert "structure", you must
simply indicate the order number in the structure. Which give
pour l'élément '&lt;Wert Typ="delta24"&gt;0.051&lt;/Wert&gt;' le code
next :

``MesPar>1>Wert>2``

To move to the next "MyPar" block, you must therefore change the index to
result : the 1 by 2, for example.

ATTENTION : If in the XML file the order changes, the request does not
does not work anymore. It will be necessary to readjust the request according to the order
return.

JSON example 
============

Like the XML type, it is possible to read information from
a JSON return.

To explain, I will base myself on JSON information with
the Sickbeard application (boo… cpasbien) but here only the technique
premium, not the tool !

Access to this file is possible using the following URL :

``HTTP://<IP_DELAMACHINEQUIEBERGESICKBEARD>:8083/api/XXXX/?cmd=history&limit=3``

NOTE : XXXX is the API key number specific to each SICKBEARD.

First of all, before launching into the configuration of the script Plugin
JSON, it is a Question of correctly identifying the infos to recover., because
here we will integrate a notion of array in the returns.

Validate the display of information from your browser (test
under Chrome).

Example of return :

````
 {
     "data": [
         {
             "date": "2014-09-10 01:37",
             "episode": 4,
             "provider": "RNT",
             "quality": "SD TV",
             "resource": "XXX",
             "resource_path": "XXXX",
             "season": 2,
             "show_name": "Totovaalaplage S2E4",
             "status": "Downloaded",
             "tvdbid": XXXXX
         },
         {
             "date": "2014-09-10 01:36",
             "episode": 3,
             "provider": "RNT",
             "quality": "SD TV",
             "resource": "XXXX",
             "resource_path": "XXX",
             "season": 2,
             "show_name": "Totovaalaplage S2E3",
             "status": "Downloaded",
             "tvdbid": XXXXX
         },
         {
             "date": "2014-09-10 01:21",
             "episode": 1,
             "provider": "Cpasbien",
             "quality": "SD TV",
             "resource": "XXXX",
             "resource_path": "XXXX",
             "season": 1,
 ICI -->     "show_name": "Totovaplusauski but Totovaalaplage S1E1",
             "status": "Snatched",
             "tvdbid": XXXX
         }
     ],
     "message": "",
     "result": "success"
 }
 ````

In the event that we would like to return the show \ _name of the 3rd
element in php (marked HERE), it would be necessary to do : data &gt; 2
&gt;show \ _name, the return array index starting at Zero.

In this example, the "Test" button will return "Totovaplusauski
but Totovaalaplage S1E1".

Clarifications :

NOTE the syntax of the Request command, it is of type element0 &gt;
index du tableau &gt; élément1

Disadvantages :

-   this method only allows to recover one element at a time.

-   If we want to return all the values of "show \ _name", this
    is unfortunately not possible, you will have to duplicate the script
    as many times as necessary.

HTML example 
============

Here we will try to retrieve the last FML.

First of all you have to configure the url :

``HTTP://www.viedemerde.fr``

Then you have to find the "path" of the last FML. To do this,
you have to go to the site then right click on the desired item then
inspect the item, we get :

![script9](../images/script9.PNG)

Here it is the most complex part and which requires a little analysis. Here
my text is in an "a" tag which is in a p-type element
which is a class div "post article". So I have to select
the first div element of class "post" and "article" then the first
element p and that I get everything in the "a" tags that it
contains. So I have : "div.post.article:first p:first a".

So we get :

![script10](../images/script10.PNG)

For a real-time update, it is possible to put a cron
update.

> **Tip**
>
> When installing an update cron, Jeedom will
> automatically check the Event box, this is completely normal.

Here then you can imagine a scenario which sends you by SMS
the last FML.

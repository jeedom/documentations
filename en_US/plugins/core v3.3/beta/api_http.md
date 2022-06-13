Jeedom provides developers and users with an API
complete so you can control Jeedom from any object
connecté.

Two APIs are available : a developer oriented pilot
.0 and another via URL and HTTP request.

This API is very easily used by simple HTTP requests via
URL.

> ****
>
> For all of this documentation, \#IP\_JEEDOM\# matches your url
> access to Jeedom. This is (unless you are connected to your network
> local) of the internet address you use to access Jeedom
> from the outside.

> ****
>
> For all of this documentation, \#API\_KEY\# matches your key
> API, specific to your installation. To find it, you have to go to
> the "General" menu → "Configuration" → "General" tab".

Scenario 
========

Here is the URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = scenario & id = \#ID\#&action=\#ACTION\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = scenario & id=#ID#&action=#ACTION#)

-   **** : matches your scenario id. The ID is on the
    page of the scenario concerned, in &quot;tools&quot; → &quot;Scenarios&quot;, once the
    selected scenario, next to the name of the &quot;General&quot; tab. Other
    way to find it : in &quot;Tools&quot; → &quot;Scenarios&quot;, click on
    "Overview".

-   **** : corresponds to the action you want to apply. The
    available orders are : "start "," stop "," deactivate "and
    "activate "to start, stop, deactivate or
    activate the scenario.

-   **** \[optional\] : if the action is &quot;start&quot;, you can skip
    tags to the scenario (see documentation on scenarios) under
    the form tags = toto% 3D1% 20tata% 3D2 (note that% 20 corresponds to a
    space and% 3D to = )

Info / Action command 
====================

Here is the URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = cmd & id = \#ID\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = cmd & id=#ID#)

-   **** : corresponds to the id of what you want to drive or from which
    you wish to receive information

The easiest way to get this URL is to go to the Tools page →
Home automation summary, to search for the command then to open its configuration
advanced (the &quot;gear&quot; icon) and there you will see a URL that contains
already all you need depending on the type and subtype of the
commande.

> ****
>
> It is possible for the field \#ID\# to place multiple orders
> at once. To do this, you must pass an array in json (ex
> % 5B12,58,23% 5D, note that \ [and \] must be encoded, hence the% 5B
> and% 5D). Jeedom&#39;s return will be a json

> ****
>
> Parameters must be encoded for url, You can use
> a tool, [](https://meyerweb.com/eric/tools/dencoder/)

 
===========

Here is the URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = interact & query = \#QUERY\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = interact & query=#QUERY#)

-   **** : question to ask Jeedom

-   **** \[optional\] : tells Jeedom whether to encode query
    in utf8 before trying to answer

-   **** \[optional\] : 0 for Jeedom to respond even if it
    did not understand, 1 otherwise

-   **** \[optional\] : person&#39;s username
    triggering interaction

-   **** \[optional\] : Command ID to use for
    respond to the request

 
=======

Here is the URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = message & category = \#CATEGORY\#&message=\#MESSAGE\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = message & category=#CATEGORY#&message=#MESSAGE#)

-   **** : message category to add to message center

-   **** : message in question, be careful to think about encoding
    the message (space becomes% 20, =% 3D…). You can use a
    outil, [](https://meyerweb.com/eric/tools/dencoder/)

 
=====

Here is the URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = object](http://#IP_JEEDOM#?apikey=#APIKEY#& type = object)

Returns in json the list of all Jeedom objects

 
==========

Here is the URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = eqLogic & object\_id = \#OBJECT\_ID\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = eqLogic & object_id=#OBJECT_ID#)

-   **** : ID of the object from which we want to retrieve
    équipements

 
========

Here is the URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = command & eqLogic\_id = \#EQLOGIC\_ID\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = command & eqLogic_id=#EQLOGIC_ID#)

-   **** : ID of the equipment from which we want to recover
    commandes

 
=========

Here is the URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = fullData](http://#IP_JEEDOM#?apikey=#APIKEY#& type = fullData)

Returns all objects, equipment, commands (and their value if this
are infos) in json

 
========

Here is the URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = variable & name = \#NAME\#&value=](http://#IP_JEEDOM#?apikey=#APIKEY#& type = variable & name=#NAME#&value=)**

-   **** : name of the variable whose value is wanted (reading of
    the value)

-   **** \[optional\] : if &quot;value&quot; is specified then the variable
    will take this value (writing a value)



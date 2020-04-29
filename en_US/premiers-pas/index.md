Welcome to this documentation of first steps, this one will
help set up your Jeedom.

> **Tip**
>
> This guide is not intended to replace the complete documentation
>  [here](https://jeedom.fr/doc).

Registration on the market 
=========================

The first thing to do is to create an account on the Market for
be able to register your Jeedom on this one, click
[here](https://www.jeedom.com/market) 

![premier market](images/premier-market.png)

Click on the "Register" button at the top right:

![premier market2](images/premier-market2.png)

Fill in the different fields and validate. You will then come across
this page:

![premier market3](images/premier-market3.png)

Here is your Market account is created, for more details on the market
click
[here](https://www.jeedom.fr/doc/documentation/core/en_US/doc-core-market.html)

Adding your Service pack code 
================================

If you bought a Jeedom box then you should have received an email
containing a code for your Service pack.

> **IMPORTANT**
>
> It is important to fill it in because this code gives you access to
> certain plugins for free, as well as exclusive services.

> **IMPORTANT**
>
> If you buy a Service pack from the Jeedom Market you don't have
> nothing to do, it is automatically assigned to you.

Once the code is retrieved in the mail, you just need to go to the
[Jeedom Market](https://market.jeedom.fr) .

Then go to your profile page:

![premier servicepack](images/premier-servicepack.png)

Then click on the "My Jeedoms" tab"

![premier servicepack2](images/premier-servicepack2.png)

Enter your Service pack number and validate:

![premier servicepack3](images/premier-servicepack3.png)

Here is your Service pack is registered. For more details on the
Market click
[here](https://github.com/jeedom/core/blob/stable/doc/en_US/market.asciidoc)

> **Tip**
>
> If you bought an offhereal Jeedom box, the service number
> pack should have been emailed to you. If you have not received anything, thank you
> to contact the store where you bought your box.

Find your Jeedom on the network 
==================================

Once Jeedom is electrically connected and connected to your local network,
here's how to connect to it.

Find Jeedom 
--------------

### Through the market 

Simplest solution (but does not work in 100% of cases in
depending on the configuration of your internet access), you must start
the box, wait about 10 minutes (be careful if you use a
netinstallation type image, it will be rather 30min) and go
[here](https://www.jeedom.com/market/index.php?v=d&p=find)

> **Tip**
>
> Attention, you must be on the same network as the Jeedom box for
> this method works.

> **IMPORTANT**
>
> Depending on your ADSL box this functionality may not work.
> If so, nothing serious, just log in to
> your ADSL box and find the jeedom IP in it. This step
> does nothing but give you the local IP of your Jeedom.
> It is not then that adding your Jeedom to your account
> market is done.

### By your internet box 

-   Go to the administration interface of your internet box and
    search Jeedom in your network devices.

-   Get his IP.

-   Put this IP in your internet browser. You should be
    on the Jeedom interface.

First connection 
------------------

Whichever method is used, you will then arrive on the page of
login. By default the login and password are "admin".

![premier jeedomfinder6](images/premier-jeedomfinder6.png)

Link my Jeedom to my market account 
===================================

We will see here how to link your Jeedom to your Market account.

-   Once connected to your jeedom, you must go to
    Administration → Configuration

-   Click on the tab **Updates**

-   Below, click on the tab **Market**

-   Check the box **Activate**

-   Remplissez l'adresse : `https://www.jeedom.com/market`

-   Also fill in the "Username" and "Password" fields."
    based on your identifiers (Market identifiers and not
    Jeedom)

-   You can test to verify that the connection
    is done correctly.

-   Don&#39;t forget to save !

For more details on the configuration page click
[here](https://github.com/jeedom/core/blob/stable/doc/en_US/administration.asciidoc)
.

Get my direct access URL 
==============================

If you have a Service Pack, Jeedom will provide you with a URL
direct access to your Jeedom without having to open the ports on
your box or other.

To configure it, just go to
General → Administration → Configuration

Then go to the "Network configuration" section"

![premier dns2](images/premier-dns2.png)

Once here, you just need to activate "Use Jeedom DNS" then
on the "Management" line to do "Restart" and your URL will appear at
HTTP status level, you can of course customize it from
the Market profile page

> **IMPORTANT**
>
> If you have just linked your Jeedom to your Market account, you must
> wait 24 to 48 hours before you can use the DNS service

Change Jeedom's default password 
============================================

One of the important steps is to change the default password from
your Jeedom account, for that click on Administration → Users
(top right):

Once on it you just have to choose the line with the user
**admin** and click on **To change the password**:

![premier changeuser2](images/premier-changeuser2.png)

A window will ask you for the password. Pay attention to the
remember, otherwise you will no longer be able to access your Jeedom :

![premier changeuser3](images/premier-changeuser3.png)

Here you have changed the password for the admin account, for more
information on this page click
[here](https://github.com/jeedom/core/blob/stable/doc/en_US/user.asciidoc).

Create my first object 
=======================

You are going to create your first object, but first you have to know what
what is an object.

In Jeedom, it can be anything and everything, but it's
recommended to do it according to your parts.

> **Tip**
>
> It is possible to define relationships between objects, example:
> the living room belongs to the ground floor object which itself belongs
> to the house object.

Nothing could be simpler to create an object :

-   Go to Tools → Objects

-   Click on the add button:

![premier objet2](images/premier-objet2.png)

-   Jeedom will ask you the name of it:

![premier objet3](images/premier-objet3.png)

-   Validate. This is your first object created :

![premier objet4](images/premier-objet4.png)

For more information on this part click
[here](https://github.com/jeedom/core/blob/stable/doc/en_US/object.asciidoc)

Install my first plugin 
============================

A plugin allows to add functionality to Jeedom. There are
hundreds. Many are free, others may be chargeable.
To access the plugins page go to Plugins → Manage
plugins.

Then just click on Market:

![premier plugin2](images/premier-plugin2.png)

You will then have the list of all possible plugins
to install.

> **IMPORTANT**
>
> Please note, some are offhereal and others are not. In case of concern
> with an unoffhereal plugin, the Jeedom team cannot be held to
> responsible.

![premier plugin3](images/premier-plugin3.png)

By clicking on a plugin you get its file:

![premier plugin4](images/premier-plugin4.png)

You then find : 

- buttons to install the plugin : the stable version is highly recommended, 
- a button to remove the plugin, 
- a brief description, 
- a link to the plugin documentation, 
- a link to the changelog (the last modifications made), 
- compatibility with different platforms, 
- user reviews, 
- how to use the plugin, 
- additional information like the author, the link to the forum discussion regarding this plugin, the date of the last update, etc..

 [here](https://jeedom.github.io/core/en_US/plugin).

Support 
=======

Jeedom tackles very wide fields and evolving from day to day.
However, there are many ways you can find
help and ask your questions.

Jeedom documentation 
--------------------------

 [here](https://jeedom.fr/doc):

This consists of several categories:

-   Core : a part for the "heart" of Jeedom,

-   First steps : A section (where you are currently) for
    first things to know,

-   Setup : Everything about installing Jeedom,

-    : Tutorials to progress in various fields,

-   Plugins : The documentation of the different offhereal plugins from
    Jeedom,

-   others : various pages on the different protocols used
    in Jeedom, the presentation of Jeedom, lists of
    compatibility, etc.

You will also find below the list of documentation for
third party plugins.

Feel free to use the function **Search** top right of
page to find pages based on a specific word.

The forum 
--------

 [here](https://jeedom.com/forum) .

The forum is very active and contains a lot of information. If you
have a question, feel free to ask it. You will have an answer in
less than an hour (on average). Please note, the forum is
maintained by the Jeedom community, made up of volunteers, and not by the
Jeedom company.

![premier support3](images/premier-support3.png)

Support requests (or tickets) 
------------------------------------

> **IMPORTANT**
>
> Please note, any support request must have
> an account on the Market.

If you haven't found a solution to your problem, last
recourse, you can request support from the Jeedom team.
This request goes through a ticket. It is possible to open one of
many ways:

-   Directly from Jeedom (recommended method): wherever you
    be in Jeedom, there is an exclamation mark at the top right
    which allows you to request support :

![premier support4](images/premier-support4.png)

-   If for some reason you do not have access to your
    Jeedom, you can always open a ticket from the Market :

    -   either with the exclamation mark at the top right,

    -   either by going to your profile (then click on the button
        "Open a support request ").

![premier support5](images/premier-support5.png)

All further exchanges will be by email.

> **Tip**
>
> If, when opening a ticket, you get an error stating
> that you have reached your quota is that you are limited to one
> number of support requests per month, depending on your
> Service pack.

The different Service packs are : \* Community (free): 2
tickets / month (on paid plugins only) \* Power: 10 tickets / month
\* Pro: 100 tickets / month

You can find the detail of the Service packs
[here](https://www.jeedom.com/site/fr/soft.html#obtenir)

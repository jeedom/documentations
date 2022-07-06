# First step

Welcome to this first steps documentation, it will help you to commission your Jeedom.

## Registration on the Market

The first thing to do is to create an account on the Market to be able to register your Jeedom on it. Click [here](https://market.jeedom.com/).

Click on the "Register" button at the top left:

![S'enregistrer sur le Market](images/FirstStep_market1.jpg)

Fill in the different fields and validate. You should then be in your Market account:

![Market](images/FirstStep_market2.jpg)


## Adding your service pack code

If you bought a Jeedom box then you must have received an email containing a code for your service pack.

> **Important**
>
> It is important to fill it in because this code gives you access to certain plugins for free, as well as to exclusive services.

> **Important**
>
> If you buy a service pack from the Jeedom Market you have nothing to do, it is automatically assigned to you.

Once the code has been retrieved from the email, all you have to do is go to the [Market Jeedom](https://market.jeedom.com/) and identify yourself.

Then go to your profile page:

![Profil Market](images/FirstStep_market_sp1.jpg)

Then click on the "My services" tab, and enter your service pack number and validate.

> **Tip**
>
> If you purchased an official Jeedom box, the service pack number should have been sent to you by email. If you haven't received anything, please contact the store where you bought your box.

## Find your Jeedom on the network

Once Jeedom is electrically connected and connected to your local network, here is how to connect to it.

### Find Jeedom

#### By the market

The simplest solution (but does not work in 100% of cases depending on the configuration of your internet access), you have to start the box, wait about 10 minutes (be careful if you use a netinstallation type image, it will be more like 30min) and go [here](https://www.jeedom.com/market/index.php?v=d&p=find)

> **Tip**
>
> Please note, you must be on the same network as the Jeedom box for this method to work.

> **Important**
>
> Depending on your ADSL box, this feature may not work. If so, nothing serious, you just need to connect to your ADSL box and find the Jeedom IP in it. This step does nothing but give you the local IP of your Jeedom. This is not when adding your Jeedom to your Market account is done.

#### By your internet box

-   Go to the administration interface of your internet box and look for Jeedom in your network devices.
-   Get its IP.
-   Put this IP in your internet browser. You should be on the Jeedom interface.

## First connection

Whatever the method used, you then arrive on the Login page. By default the login and password are "admin".

![Connexion à votre Jeedom](images/FirstStep_box_connect.jpg)

## Link my Jeedom to my Market account

We will see here how to link your Jeedom to your Market account.

-   Once connected to your Jeedom, you must go to **Settings → System → Configuration**
-   Click on the tab **Updates/Market**
-   Below, click on the tab **Market**
-   Check the box **enable**
-   Remplissez l'adresse : `https://market.jeedom.com`
-   Also fill in the fields **Username** and **Password** according to your identifiers (identifiers of the Market and not of Jeedom)
-   You can test to verify that the connection is successful.
-   Don't forget to save !

For more details on the configuration page, see *Configuration manual -> Administration*.

## Get my direct access URL

If you have a Service Pack, Jeedom provides you with a direct access URL to your Jeedom without you having to open the ports on your box or other.

To configure it, you just have to go to Settings → System → Configuration

Then go to the "Networks" section"

![Réseaux](images/FirstStep_dns.jpg)

Once here, you just need to activate **Use Jeedom DNS** then on the line **Management** to do **To restart** and your URL will appear at HTTP status level, you can of course customize it from Market profile page

> **Important**
>
> If you have just linked your Jeedom to your Market account, you must wait 24 to 48 hours before you can use the DNS service

## Change Jeedom default password

One of the important steps is to change the default password of your Jeedom account, to do this click on Settings → System → Users:

Once there, you just have to choose the line with the user **admin** and click on **Password** :

![Password](images/FirstStep_boxPassword.jpg)

A window will ask you for the password. Be careful to remember it, or you will no longer be able to access your Jeedom.

## Create my first object

You are going to create your first object, but first you have to know what an object is.

In Jeedom, it can be anything and everything, but it is recommended to do it according to your coins.

> **Tip**
>
> It is possible to define relationships between objects. Exemple : the living room belongs to the ground floor object which itself belongs to the house object.

To create an object, nothing could be simpler :

-   Go to Tools → Objects
-   Click the Add button
-   Jeedom will ask you for the name of it. Validate. This is your first object created :

![Objet](images/FirstStep_object.jpg)

For more information on this part, see *User Manual -> Object*.

## Install my first plugin

A plugin allows you to add functionality to Jeedom. There are hundreds of them. Many are free, others may be paid. To access the plugins page, go to Plugins → Plugin Management.

Then just click on Market:

You will then have the list of all the plugins that can be installed.

> **Important**
>
> Be careful, some are official and others are not. In the event of a problem with an unofficial plugin, the Jeedom team cannot be held responsible.

![Liste des Plugins](images/FirstStep_plugin1.jpg)

By clicking on a plugin, you get its file:

![Fiche Plugins](images/FirstStep_plugin2.jpg)

You then find :

- Buttons to install the plugin : the stable version is strongly recommended,
- A button to delete the plugin,
- A brief description,
- A link to the plugin documentation,
- A link to the changelog (the latest changes made),
- Compatibility with different platforms,
- User reviews,
- The way to use the plugin,
- Additional information like author, link to forum discussion about this plugin, date of last update, etc.

For more information on plugins, *User Manual -> Plugin*.

# Support

Jeedom addresses very large and evolving fields day by day.
However, there are many ways for you to find help and ask your questions.

## The forum

You will find it [here](https://community.jeedom.com/).

The forum is very active and contains a lot of information. If you have a question, don't hesitate to ask. You will have an answer in less than an hour (on average). Be careful though, the forum is maintained by the Jeedom community, made up of volunteers, and not by the Jeedom company.

## Support requests (or tickets)

> **Important**
>
> Please note that any support request requires you to have an account on the Market.

If you have not found a solution to your problem, as a last resort, you can request support from the Jeedom team. This request goes through a ticket. It is possible to open one in several ways:

-   Directly from Jeedom (recommended method): Settings menu → Support request.
-   If for some reason you do not have access to your Jeedom, you can always open a ticket from the Market :
    -   Either by clicking on your name then on *Support request*,
    -   either by going to your profile, then in the part **Tickets**, use the "Open a support request" button".

![Support request](images/FirstStep_support.jpg)

All the rest of the exchanges will be done by email.

> **Tip**
>
> If, when opening a ticket, you get an error indicating that you have reached your quota, you are limited to a certain number of support requests per month, depending on your service pack.

The different service packs are :
- Community (free): 2 tickets/month (on paid plugins only))
- Power : 10 tickets/month
- Pro : 100 tickets/month

You can find the details of the service packs [here](https://www.jeedom.com/site/fr/soft.html#obtenir)

>**IMPORTANT**
>
>Be careful, we see a lot of users with "mailinblack" mailboxes, which during the 1st exchange ask the sender to validate a link to prove that it is indeed a human. This system is not compatible with our ticketing system, so even if we answer you you will never receive the answer in your mailbox because it blocks us. So thank you on your market profiles page to put an email address that does not use this system otherwise you will never receive our response.

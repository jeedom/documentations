# Phone Market plugin

Plugin for sending SMS and making calls with automatic messages from Jeedom.

> **Important**
>
> This plugin goes through the market so it is a cloud service that requires an internet connection to function.

> **Tip**
>
> The plugin works on a credit system, 1 SMS = 1 credit for France otherwise 2 credits, 1 call = 2 credits for France otherwise 4 credits. You can check your credit [here](https://market.jeedom.com/index.php?v=d&p=profils#services). In case of low credits (less than 5), an email will be sent to you.

> **Important**
>
> Text messages are limited to 140 characters and calls to 450 characters.

# Plugin configuration

After downloading the plugin, you just need to activate it, there is no configuration at this level.

# Equipment configuration

The configuration of Phone market equipment is accessible from the Plugins → Communication menu.

Once a piece of equipment is added you end up with :

- **Equipment Name** : name of your Phone market equipment,
- **Parent object** : indicates the parent object to which the equipment belongs,
- **Category** : equipment category,
- **Activate** : makes your equipment active,
- **Visible** : makes your equipment visible on the dashboard.

By clicking on the Orders tab, you find the list of orders:

- **Name** : the name displayed on the dashboard,
- **Type** : type of command (calls or sms),
- **Number** : telephone number to be called or to whom an SMS should be sent (depending on the type),
- **Display** : allows you to display the order on the dashboard,
- **Test** : Used to test the command,
- **Delete** (sign -) : allows to delete the command.

  >**Important**
  >It is absolutely necessary to add commands (add button at the top right) to be able to make calls or send text messages.

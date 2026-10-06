# Openvpn plugin

This plugin allows you to connect Jeedom to an OpenVPN server. It is also used—and therefore required—for the Jeedom DNS service, which lets you access your Jeedom from the internet.

# Plugin configuration

After downloading the plugin, simply enable it and install the OpenVPN dependencies (click the **Install/Update** button)

# Equipment configuration

Here you'll find all the settings for your equipment:

-   **OpenVPN device name**: the name of your OpenVPN device,
-   **Parent object**: specifies the parent object to which the device belongs,
-   **Category**: the device's categories (it may belong to multiple categories),
-   **Activate**: turns your device active,
-   **Visible**: makes your equipment visible on the dashboard,

> **Note**
>
> The other options will not be discussed in detail here; for more information, please refer to the [openvpn documentation](https://openvpn.net/index.php/open-source/documentation.html)

> **Note**
>
> Regarding shell commands executed after startup, there is the tag `#interface#` that retrieves the name of the current interface.

Below is a list of commands:

-   **Name**: the name displayed on the dashboard,
-   **Display**: displays the data on the dashboard,
-   **Test**: allows you to test the command

> **Note**
>
> Jeedom will check every 5 minutes to see if the VPN is running or stopped, and take appropriate action if it isn't.

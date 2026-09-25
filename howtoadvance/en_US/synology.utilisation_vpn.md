# Synology VPN usage

From a web browser on a computer connected to the same network as the Synology

Go to the DSM interface, log in with an admin account, then go to the main menu and select Package Center

In the upper-left corner of the window, search for the term "VPN." "VPN Server" should appear; then click "Install."

![Synology: Using VPN1](../images/synology.utilisation_vpn1.png)

Go back to the main menu and select VPN Server

![Synology: Using VPN2](../images/synology.utilisation_vpn2.png)

When the window opens, go to L2TP/IPSEC

Select the "Enable L2TP/IPsec VPN server" option

In the "Dynamic IP Address" field, enter a number that corresponds to the subnet assigned to the IP addresses of your devices connected via VPN to your home network. Note: Do not choose the same subnet as your router’s default subnet. For example, with Free, the subnet for devices is 192.168.1.0, so in this example, enter 2.

Next, enter the maximum number of connections you want to allow on the VPN server, followed by the maximum number of simultaneous connections per user

Finally, enter a sharing key. Note: This is a password that you’ll need to enter when configuring the VPN on your phone or tablet.

Then click "Apply"

![Synology: Using VPN3](../images/synology.utilisation_vpn3.png)

A message will then appear indicating which ports need to be forwarded from your internet router to your NAS.

![Synology: Using VPN4](../images/synology.utilisation_vpn4.png)

# Allow users to use the VPN service on the NAS

Go back to the main menu and select VPN Server

![Synology: Using VPN2](../images/synology.utilisation_vpn2.png)

On the left side, select "Privilege"

Uncheck all the boxes under PPTP OpenVPN and L2TP

Check only the box next to the user you want to authorize to use the VPN.

> **Tip**
>
> We recommend that you create a user account specifically for the VPN, with no other rights or permissions beyond using the VPN.

![Synology.Using VPN5](../images/synology.utilisation_vpn5.png)

# Forward Ports on Your Router

In your browser, enter 192.168.1.1. Click on Freebox settings

![Synology.Using VPN6](../images/synology.utilisation_vpn6.png)

Select Advanced Mode

![Synology.Using VPN7](../images/synology.utilisation_vpn7.png)

Select Port Management

![Synology.Using VPN8](../images/synology.utilisation_vpn8.png)

Add a redirect

![Synology.Using VPN9](../images/synology.utilisation_vpn9.png)

Enter the settings as follows.

> **Tip**
>
> The destination ID is the only thing that depends on your setup; you need to enter the IP address of your Synology NAS there

Back up

![Synology.Using VPN10](../images/synology.utilisation_vpn10.png)

We can then see that the settings have been applied

![Synology.Using VPN11](../images/synology.utilisation_vpn11.png)

Repeat the process with UDP ports 500 and 4500

# Set up the VPN on your phone

Go to the app and select Settings

![Synology.Using VPN12](../images/synology.utilisation_vpn12.png)

Click on … More

![Synology.Using VPN13](../images/synology.utilisation_vpn13.png)

Click on VPN

![Synology.Using VPN14](../images/synology.utilisation_vpn14.png)

Click the + in the upper right corner

![Synology.Using VPN15](../images/synology.utilisation_vpn15.png)

Give the VPN connection a name, set the type to L2TP/IPSec PSK, enter the public IP address of your internet router (or a DNS name if you have one), and enter the shared key specified in the “Configure a VPN Server” section:

![Synology.Using VPN16](../images/synology.utilisation_vpn16.png)

Now, to start the VPN, simply click on the new line that has appeared with the name of your VPN tunnel

![Synology.Using VPN17](../images/synology.utilisation_vpn17.png)

Then enter the username and password for the user who was configured in the "Configure a VPN Server" section

![Synology.Using VPN18](../images/synology.utilisation_vpn18.png)

And that's it—everything you do on your phone is just like being connected to your home Wi-Fi!

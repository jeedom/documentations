# Synology use vpn

From a web browser on a computer connected to the same network as Synology

Go to the DSM interface and log in with an admin account then go to the main menu and select Package Center

At the top left of the window do a search with the word VPN. VPN Server should appear, then click on install.

![synology.utilisation vpn1](images/synology.utilisation_vpn1.png)

Go back to the main menu and select VPN Server

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

When the window opens, go to L2TP/IPSEC

Choose the Enable L2TP/IPsec VPN server option

In Dynamic IP Address, enter a number that will correspond to the subnet of assignment of the IPs of your devices in VPN on the internal network of your home. NB : you must not choose the same thing as the default subnet of your box ex at free the subnet of the machines is 192.168.1.0 so in the example we put 2

Then enter the maximum number of connections you want to allow on the VPN server, then the maximum number of simultaneous connections for a user

Finally enter a sharing key NB : this is a password that must be entered when configuring the VPN on the mobile or tablet.

Then do apply

![synology.utilisation vpn3](images/synology.utilisation_vpn3.png)

A message then indicates the ports that must be redirected on your Internet Box to your NAS.

![synology.utilisation vpn4](images/synology.utilisation_vpn4.png)

# Allow Users to Use the VPN Service on the NAS

Go back to the main menu and select VPN Server

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

In the left part select Privilege

Uncheck all boxes under PPTP Open VPN and L2TP

Only check the box in front of the user you want to allow to use the VPN .

> **Tip**
>
> It is advisable to create a user only for the VPN and without any other rights / authorizations than doing the VPN.

![synology.utilisation vpn5](images/synology.utilisation_vpn5.png)

# Forward the ports of your BOX 

In the browser enter 192.168.1.1. Click on Freebox settings

![synology.utilisation vpn6](images/synology.utilisation_vpn6.png)

Select advanced mode

![synology.utilisation vpn7](images/synology.utilisation_vpn7.png)

Select Port Management

![synology.utilisation vpn8](images/synology.utilisation_vpn8.png)

Add a redirect

![synology.utilisation vpn9](images/synology.utilisation_vpn9.png)

Enter the parameters as follows.

> **Tip**
>
> Destination ID is the only thing that depends on your installation, you have to put the IP of your Synology NAS there

Save

![synology.utilisation vpn10](images/synology.utilisation_vpn10.png)

It is then noted that the parameterization is taken into account

![synology.utilisation vpn11](images/synology.utilisation_vpn11.png)

Repeat the operation with UDP ports 500 and 4500

# Configure the VPN on your mobile

Go to application and select Settings

![synology.utilisation vpn12](images/synology.utilisation_vpn12.png)

Click on … more

![synology.utilisation vpn13](images/synology.utilisation_vpn13.png)

Click on VPN

![synology.utilisation vpn14](images/synology.utilisation_vpn14.png)

Click on the + at the top right

![synology.utilisation vpn15](images/synology.utilisation_vpn15.png)

Give a name to the VPN access, set the L2TP/IPSec PSK type, enter the public address of your internet box (or a DNS name if you have one) and enter the shared key entered in the Configure a VPN server section :

![synology.utilisation vpn16](images/synology.utilisation_vpn16.png)

Now to start the VPN, just click on the new line that appeared with the name of your VPN tunnel

![synology.utilisation vpn17](images/synology.utilisation_vpn17.png)

Then enter the login and password of the user that was configured in the Configure a VPN server section

![synology.utilisation vpn18](images/synology.utilisation_vpn18.png)

And that's all you do on your phone it's as if you were on Wifi at home !

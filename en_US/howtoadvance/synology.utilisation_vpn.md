# Synology use vpn

From a web browser on a computer connected to the same network as the Synology

Go to the DSM interface and log in with an admin account then go to the main menu and select Package Center

Top left in the window do a search with the word VPN. VPN Server should appear, then click install.

![synology.utilisation vpn1](images/synology.utilisation_vpn1.png)

Go back to the main menu and select VPN Server

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

When the window opens, go to L2TP / IPSEC

Choose the option Enable L2TP / IPsec VPN server

In Dynamic IP Address, enter a number which will correspond to the sub-network for assigning the IPs of your VPN devices on the internal network of your home. NB : do not choose the same thing as the default subnet of your box ex at free the machines subnet is 192.168.1.0 so in the example we put 2

Then enter the maximum number of connections you want to allow on the VPN server, then the maximum number of simultaneous connections for a user

Finally enter a sharing key NB : it is a password that must be entered in the VPN configuration on the mobile or tablet.

Then apply

![synology.utilisation vpn3](images/synology.utilisation_vpn3.png)

A message then indicates the ports which must be redirected on your Internet Box to your NAS.

![synology.utilisation vpn4](images/synology.utilisation_vpn4.png)

# Allow users to use the VPN service on the NAS

Go back to the main menu and select VPN Server

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

In the left part select Privilege

Uncheck all boxes under PPTP Open VPN and L2TP

Check only the box in front of the user you want to authorize to use the VPN .

> **Tip**
>
> It is advisable to create a user only for the VPN and without any other rights / authorization than doing the VPN.

![synology.utilisation vpn5](images/synology.utilisation_vpn5.png)

# Redirect the ports of your BOX 

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
> Destination ID is the only thing that depends on your installation, you must put the IP of your Synology NAS

Save

![synology.utilisation vpn10](images/synology.utilisation_vpn10.png)

We then note that the configuration is taken into account

![synology.utilisation vpn11](images/synology.utilisation_vpn11.png)

Repeat the operation with UDP ports 500 and 4500

# Configure the VPN on your mobile

Go to application and select Settings

![synology.utilisation vpn12](images/synology.utilisation_vpn12.png)

Click on… More

![synology.utilisation vpn13](images/synology.utilisation_vpn13.png)

Click on VPN

![synology.utilisation vpn14](images/synology.utilisation_vpn14.png)

Click on the + at the top right

![synology.utilisation vpn15](images/synology.utilisation_vpn15.png)

Give a name to the VPN access, set as L2TP / IPSec PSK type, enter the public address of your internet box (or a DNS name if you have one) and enter the shared key entered in the section Configure a VPN server :

![synology.utilisation vpn16](images/synology.utilisation_vpn16.png)

Now to launch the VPN, just click on the new line that appeared with the name of your VPN tunnel

![synology.utilisation vpn17](images/synology.utilisation_vpn17.png)

Then enter the login and password of the user who has been configured in the section Configure a VPN server

![synology.utilisation vpn18](images/synology.utilisation_vpn18.png)

And that's all you do on your phone, it's like being on WiFi from home !

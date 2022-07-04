# Setting up the Jeedom DNS

## Objectif

Set up the Jeedom DNS to have access to your Jeedom externally by an HTTPS URL

> **IMPORTANT**
>
>The Jeedom DNS acts as a reverse proxy so it only gives access to your Jeedom in https, so it will not be possible to access your jeedom in SSH remotely with the Jeedom DNS

## Prerequisites

To have access to Jeedom DNS it is absolutely necessary to have a power service pack or more.

## Principe

The principle of Jeedom DNS is very simple, your Jeedom will connect to one of our VPN servers (encrypted connection). Then this server in question with us makes the "reverse proxy" during the request : it takes your connection request to your jeedom and transfers it to it.

This principle has the advantage of not exposing your Jeedom on the internet, no port opening to do.

> **IMPORTANT**
>
> For this to work, your box must authorize an outgoing connection on ports 1194,1195,1996,1997,1198,1199,2000 and 2001 in UDP. In particular for Huawei Liveboxes and 4g routers, the level of the firewall must be lowered, for people at free you also sometimes have to switch to a fixed ip (otherwise free shares your ip between several users, which causes problems for the DNS) moreover for the Freebox Delta you have to deactivate parental control 

## Establishment

### Jeedom

It's super simple, you have to connect your Jeedom to the market (see first-step documentation). 

Then on your Jeedom, in the administration of it go to the Networks tab and check "Use Jeedom DNS" then save.

Jeedom will start the DNS and give you your access url to your Jeedom

> **IMPORTANT**
>
> You can change this url by going to your market profiles page then tab my services and click on configuration in "Easy remote access", in the DNS field you can personalize it. After registration it is necessary in Jeedom to restart the DNS (System -> setting -> configuration then Networks tab and restart in the "DNS (proxy) Market" part"). It is advisable to do this manipulation with local access to your box.

Here is your Jeedom is accessible from the outside in https

## FAQ

> **Do I need to open ports on my box**
>
> No, there is no need to open a port from your internet box to your Jeedom. The connection is in the Jeedom -> VPN direction, so it is an outgoing connection (on ports 1194,1195,1996,1997,1198,1199,2000 and 2001) and not an incoming connection.

> **Why Jeedom DNS protects my access to it**
>
> The Jeedom DNS allow you to set up something very important, HTTPS access, this guarantees that the connection between your browser and your Jeedom is encrypted, moreover the certificate being valid no one will be able to impersonate your Jeedom. Finally the VPN connection in your Jeedom and our servers is also encrypted.

> **I changed the internal listening port of my Jeedom and the Jeedom DNS no longer work**
>
> Indeed the Jeedom DNS only works if your Jeedom listens on local port 80 (all other ports are closed on the VPN interface when connecting). This poses no security concerns because the VPN creates an encrypted tunnel, so even if the flow is in the clear on port 80 it is encrypted in the VPN tunnel.

> **I don't have the login page but cannot login**
>
> Check that you have changed the default jeedom credentials (admin/admin) and that your user is not restricted to local only.

> **My configuration is good but impossible to have a page that turns to infinity**
>
> If your configuration is good (Initialization Sequence Completed in the openvpn_DNS_Jeedom log) but you cannot get the login page to work with the mobile application randomly and you are on 4g or at the end of the ADSL line. In this case, you must check the box in the jeedom network configuration that you are on 4g and restart the dns like that jeedom will change the mtu of your connection to reduce the size of the packets. Depending on the versions of Jeedom this option is automatically managed by the core (and therefore does not appear) just restart the DNS.

> **I have the error "ERROR: Cannot open TUN/TAP dev /dev/net/tun: No such file or directory (errno=2)"**
>
> This error usually occurs on docker-like installations, as noted in the documentation for [compatibility](https://doc.jeedom.com/en_US/compatibility/) docker support is in beta precisely because of this kind of problem. The solution is usually to install openvpn on the host (when possible)

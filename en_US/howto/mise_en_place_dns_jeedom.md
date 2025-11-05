# Implementation of Jeedom DNS

## Objectif

Set up Jeedom DNS to have access to your Jeedom externally via a HTTPS URL

> **IMPORTANT**
>
>The Jeedom DNS acts as a reverse proxy so it only gives access to your Jeedom in https, it will therefore not be possible to access your Jeedom in SSH remotely with the Jeedom DNS

## Prerequisites

To have access to Jeedom DNS it is absolutely necessary to have a service pack power or more.

## Principe

The principle of Jeedom DNS is very simple, your Jeedom will connect to one of our VPN servers (encrypted connection). Then this server in question with us makes "reverse proxy" during the request : it takes your request to connect to your jeedom and transfers it to it.

This principle has the advantage of not exposing your Jeedom on the internet, no port opening to do.

> **IMPORTANT**
>
> For this to work, your box must authorize an outgoing connection on ports 1194,1195,1196,1197,1198,1199,2000 and 2001 in UDP. In particular for Liveboxes and Huawei 4G routers you have to lower the level of the firewall, for people at free you also sometimes have to switch to a fixed IP (otherwise free shares your IP between several users which poses problems for the DNS) moreover for Freebox Delta you need to deactivate parental controls 

## Set up

### Jeedom

There it is super simple, you must connect your Jeedom to the market (see documentation first-step). 

Then on your Jeedom, in its administration go to the Networks tab and check "Use Jeedom DNS" then save.

Jeedom will start the DNS and give you your access url to your Jeedom

> **IMPORTANT**
>
> You can change this url by going to your market profile page then my services tab and clicking on configuration in "Easy remote access", in the DNS field you can personalize it. After registration, you must restart the DNS in Jeedom (Settings -> System -> Configuration then Networks tab and restart in the "DNS (proxy) Market" section"). It is advisable to do this manipulation with local access to your box.

Here your Jeedom is accessible from the outside in https

## FAQ

> **Is there a need to open ports on my box**
>
> No, there is no need to open a port on your internet box to your Jeedom. The connection is in the Jeedom -> VPN direction, so it is an outgoing connection (on ports 1194,1195,1996,1997,1198,1199,2000 and 2001) and not an incoming connection.

> **Why Jeedom DNS protects my access to it**
>
> Jeedom DNS allows you to set up something very important, HTTPS access, this guarantees that the connection between your browser and your Jeedom is encrypted, moreover the certificate being valid nobody will be able to impersonate your Jeedom. Finally, the VPN connection between your Jeedom and our servers is also encrypted.

> **I changed the internal listening port of my Jeedom and the Jeedom DNS no longer work**
>
> Indeed the Jeedom DNS only works if your Jeedom listens on local port 80 (all the other ports are closed on the VPN interface when connecting). This does not pose security concerns because the VPN creates an encrypted tunnel, so even if the flow is in clear on port 80 it is encrypted in the VPN tunnel.

> **I don't have the login page but can't login**
>
> Check that you have changed the default jeedom credentials (admin / admin) and that your user is not restricted locally only.

> **My configuration is good but impossible to have a page it turns endlessly**
>

> **I have the error "ERROR: Cannot open TUN / TAP dev / dev / net / tun: No such file or directory (errno = 2)"**
>
> This error usually occurs on docker type installations, as indicated in the documentation for [compatibility](https://doc.jeedom.com/en_US/compatibility/) docker support is beta precisely because of this kind of problem. The solution is usually to install openvpn on the host (when possible))

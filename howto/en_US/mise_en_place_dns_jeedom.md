# Setting Up the Jeedom DNS

## Objective

Set up the Jeedom DNS to access your Jeedom externally via an HTTPS URL

> **IMPORTANT**
>
>The Jeedom DNS acts as a reverse proxy, so it only provides access to your Jeedom via HTTPS; therefore, it will not be possible to remotely access your Jeedom via SSH using the Jeedom DNS

## Prerequisites

To access Jeedom DNS, you must have at least the Power service pack.

## Principle

The principle behind Jeedom DNS is very simple: your Jeedom device connects to one of our servers via VPN (an encrypted connection). Then, that specific server acts as a "reverse proxy" when a request is made: it takes your request to connect to your Jeedom device and forwards it to the device itself.

The advantage of this approach is that it doesn't expose your Jeedom to the internet—no ports need to be opened.

> **IMPORTANT**
>
> For this to work, your router must allow outbound connections on UDP ports 1194, 1195, 1196, 1197, 1198, 1199, 2000, and 2001. In particular, for Livebox devices and Huawei 4G routers, you’ll need to lower the firewall settings. For Free subscribers, you may also need to switch to a static IP address (otherwise, Free shares your IP address among multiple users, which can cause DNS issues). Additionally, for Freebox Delta devices, you’ll need to disable parental controls.

## Setup

### Jeedom

It's really simple—just connect your Jeedom to the market (see the "Getting Started" documentation).

Next, on your Jeedom, go to the "Networks" tab in the administration panel, check the box next to "Use Jeedom DNS," and then save.

Jeedom will start the DNS service and provide you with the URL to access your Jeedom

> **IMPORTANT**
>
> You can change this URL by going to your Market profile page, then to the "My Services" tab, and clicking "Configuration" under "Easy Remote Access." There, in the DNS field, you can customize it. After saving, you’ll need to restart the DNS in Jeedom (Settings -> System -> Configuration, then the “Networks” tab, and restart in the “DNS (proxy) Market” section). It’s recommended that you perform this step while connected to your router locally.

Now your Jeedom is accessible from outside via HTTPS

## FAQ

> **Do I need to open any ports on my router?**
>
> No, you don't need to open any ports on your internet router for your Jeedom. The connection goes from Jeedom to the VPN, so it's an outbound connection (on ports 1194, 1195, 1996, 1997, 1198, 1199, 2000, and 2001) and not an inbound connection.

> **Why does the Jeedom DNS protect my access to it?**
>
> Jeedom DNS allows you to set up something very important: HTTPS access. This ensures that the connection between your browser and your Jeedom is encrypted. Furthermore, since the certificate is valid, no one will be able to impersonate your Jeedom. Finally, the VPN connection between your Jeedom and our servers is also encrypted.

> **I changed the internal listening port on my Jeedom, and the Jeedom DNS no longer works**
>
> In fact, the Jeedom DNS only works if your Jeedom is listening on local port 80 (all other ports are closed on the VPN interface during connection). This does not pose a security risk because the VPN creates an encrypted tunnel; therefore, even if the traffic is unencrypted on port 80, it is encrypted within the VPN tunnel.

> **I don't have the login page, but I can't log in**
>
> Make sure you have changed the default Jeedom credentials (admin/admin) and that your user account is not restricted to local access only.

> **My configuration is correct, but I can't load a page—it just keeps reloading indefinitely**
>

> **I'm getting the error "ERROR: Cannot open TUN/TAP dev /dev/net/tun: No such file or directory (errno=2)"**
>
> This error generally occurs on Docker installations of type docker, as noted in the documentation for [Compatibility](/compatibility) Docker support is in beta precisely because of these kinds of issues. The solution is usually to install OpenVPN on the host (when possible).

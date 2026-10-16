# Broadlink plug-in

Plugin that allows Jeedom to interface with Broadlink devices.

# Plugin configuration

After installing the plugin, you need to activate it and make sure the dependencies are installed correctly.

>**IMPORTANT**
>
>Changing the internal port is not recommended.

# Inclusion of equipment

Go to the Plugins menu => Home Automation Protocol => Broadlink. Once on the page, click the INCLUSION button. Logically, all Broadlink products on your network will be recognized.

# Equipment configuration

Select one of your devices. If the devices are of the infrared type, a “Learn Command” button will appear at the top. Simply click it, and you’ll have 5 seconds to teach your Broadlink an infrared or 433 MHz command. After that, the plugin will confirm that the operation was successful and create the corresponding command, which you can then name.

>**INFORMATION**
>
>To prevent it from picking up signals from the environment *(such as a neighbor’s remote control or similar)*, the Broadlink, when in learning mode, INTENTIONALLY sets its reception sensitivity to a very low level. You must therefore be VERY close to the Broadlink to program a command, especially if it’s a 433 MHz command.

# Synchronize

On the "Commands" tab for a device, you'll find the "Synchronize" button. If you have multiple Broadlink devices, you can transfer the learned commands from one Broadlink to another.

>**INFORMATION**
>
>It works from an RM-Pro to a Mini or vice versa.

You can choose which commands to transfer and the Broadlink devices to which you want to transfer them. (The command name will, of course, be preserved—e.g., "TV ON," "fan off," etc.)

>**INFORMATION**
>
>If you manually add your device because it wasn't automatically detected, the MAC address you need to enter is the MAC address reversed in pairs of two, in lowercase, without the colons *(for example, AA:BB:CC:DD:EE becomes eeddccbbaa)*.

# FAQ

## RF Command Logging

(May 2021)

So, here's how to register RF commands using the Broadlink mobile app and the Broadlink Jeedom plugin:

Install the official Broadlink app, then add your Broadlink gateway (I’ve read that you should stop the process as soon as the gateway is added to the Wi-Fi network and definitely not continue—but my method works by completing the entire process!). You can then add your devices to test them with the app.

Before switching to the Jeedom plugin, you need to unlock the gateway in the app. I actually had a pretty hard time figuring this out—I couldn’t get the plugin to learn the RF commands… In the app, select your gateway, then tap “…” in the top-right corner, and uncheck “Lock Device.” You’ll then be able to use the app and the plugin at the same time.

In the plugin, you add the gateway using the "Inclusion Mode" button (see the plugin documentation for the "Equipment" tab). "Commands" tab: You can click "Learn Advanced RF Command" to verify that the gateway's indicator light turns red, but the learning process will not work.

Here's how to do it:

- Start the setup process using the app first
- Select equipment
- Tap "…" in the upper-right corner, then select "Relearn Buttons"
- Tap "Start Learning," then "Learn Simple RF Code"
- Press the button you want to reprogram, then OK
- Enter the remote control frequency (433.92 for me)
- You have 30 seconds to click on “Learn Advanced RF Command” (Jeedom plugin) and then press the button on the remote control (repeat until it’s detected)
- Confirm detection in the app

A new command should now appear in Jeedom (it might not work right away, but be sure to follow these steps in order without rushing).
Please note: If you rename the command, you must keep the last 10 characters that are also in the command; otherwise, the command will not work. (Depends on the version)

Don't forget to save!

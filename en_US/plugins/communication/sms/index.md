# SMS plugin

The SMS plugin allows you to communicate with Jeedom via SMS, it also allows Jeedom to send you an SMS in the event of an alert (alarm plugin, scenario, etc.)

> **Important**
>
> To interact with Jeedom you must have configured interactions.

# Plugin configuration 

After downloading the plugin, you just need to activate it and configure the port. After saving the demon should launch. The plugin is already configured by default; you don't have to do anything more. However you can modify this configuration. Here is the detail (some parameters may only be visible in expert mode) :

-   *SMS port* : the USB port on which your GSM key is connected.

> **Tip**
>
> If you do not know which USB port is used, you can simply indicate "Auto". Please note the auto mode only works with Huawai E220 keys.

> **Important**
>
> Please note that some 3G keys are by default in modem mode and not GSM. Using the software of your key manufacturer, you must change the key mode on GSM (or text, or serial). 

-   **Pin code** : Allows you to indicate the pin code of the SIM card, to leave empty if you do not have one. 
-   **Text mode** : Extended compatibility mode, to be used only if sending and / or receiving messages does not work.
-   **Cut messages by character packet** : Indicates the maximum number of characters per text.
-   **SMS / SMS Gateway (modify in case of error : CMS 330 SMSC number not set)** : Note that if you have the error "CMS 330 SMSC number not set", in this case you must indicate the SMS gateway number of your telephone operator. 
-   **Signal strength** : Signal reception strength of your GSM key.
-   **Network** : Telephone network of your GSM key (can be "None" if Jeedom cannot recover it). 
-   **internal socket (dangerous modification)** : allows to modify the internal communication port of the daemon.
-   **Cycle (s)** : daemon scan cycle for sending and receiving SMS. Too low a number can cause instability

# Equipment configuration 

The configuration of SMS equipment is accessible from the plugin menu then communication

Here you find all the configuration of your equipment :

-   **Name de l'équipement SMS** : name of your SMS equipment,
-   **Activate** : makes your equipment active,
-   **Visible** : makes your equipment visible on the dashboard,
-   **Parent object** : indicates the parent object to which the equipment belongs.

Below you find the list of orders :

-   **Name** : the name displayed on the dashboard,
-   **User** : corresponding user in Jeedom (allows to restrict certain interactions to certain users),
-   **Number** : phone number to send messages to. You can put several numbers by separating them with; (ex: 0612345678; 0698765432).
    > **Important**
    >
    > Only the telephone numbers declared in a device will be able to use the interactions because only they will be authorized.
-   **Show** : allows to display the data on the dashboard,
-   **Advanced configuration** (small notched wheels) : displays the advanced configuration of the command (logging method, widget, etc.),
-   **Test** : Used to test the command,
-   **Delete** (sign -) : allows to delete the command.

# Using the plugin 

This is fairly standard in its operation, on the General → Plugin page then by selecting the SMS plugin :

-   The port (path) to the device that serves as a modem (for example it can be / dev / ttyUSB0, to see it just launch ``dmesg`` then plug in the modem)
-   The pin code of the sim card

So you have to add new equipment and then configure it :

-   The name of it,
-   If it is active or not,

Then you must add the commands which will be composed of a name and a number, only the numbers listed in the command list can receive a response from Jeedom (this allows to secure, while avoiding to put a password at each start of SMS sent to Jeedom). You can also indicate which user is linked to this number (for managing rights at the interaction level).

To communicate with Jeedom, it will then suffice to send him a message from an authorized number, all interactions coming from the interaction system.

Small example of interaction : Question : "What is the temperature of the room ?" Reply : "16.3 C"

# List of compatible keys 

-   HUAWEI E220
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G Wireless
-   HUAWEI E3372

# FAQ 

> **I don't get anything with a huwaei e160 key.**
>
>You have to install minicom (sudo apt-get install -y minicom), launch it and connect to the modem, then do :
>
>`` `{.bash}
>AT ^ CURC = 0
>AT ^ u2diag = 0
>`` ''
>
>And on the plugin do :
>
>-   Choose first USB port and not the second
>-   Speed : 9600
>-   Text mode off

> **I can't see the USB port on my key**
>
>Make sure you don't have brltty to install (`sudo apt-get remove brltty` to remove it)

> **After a few hours / days I no longer receive an SMS and can no longer send one, a reminder from the demon corrects**
>
>Check your USB cable (a bad USB cable often causes this kind of problem, it should not be too long either), also check your power supply, a USB hub is strongly recommended

> **I have a CME error XX**
>
>You can find [here](:http://www.micromedia-int.com/fr/gsm-2/669-cme-error-gsm-equipment-related-errors) description of the different CME errors

> **Configuration of the Alcatel one touch X220L key**
>
>When we insert the key, we have this :
>
>`` ''`
>root @ jeedom:# lsusb
>Bus 002 Device 003: ID 1bbb:f000 T & A Mobile Phones
>`` ''`
>
>Be careful if you don't have ``1bbb:f000`` above all, do not follow this documentation, add the following lines to the end of the file ``/etc/usb\_modeswitch.conf`` :
>
>`` ''`
>########################################################
># Alcatel X220L
>DefaultVendor = 0x1bbb
>DefaultProduct = 0xf000
>MessageContent = "55534243123456788000000080000606f50402527000000000000000000000"
>########################################################
>`` ''`
>
>Then run the following command to test :
>
>`` ''`
>/ usr / sbin / usb_modeswitch -c
>/etc/usb_modeswitch.conf
>`` ''`
>
>We get this :
>
>`` ''`
>root @ jeedom:~ # lsusb
>Bus 002 Device 003: ID 1bbb:0017 T & A Mobile Phones
>`` ''`
>
>and the links under / dev are added :
>
>`` ''`
>root @ jeedom:~ # ls / dev / ttyUSB*
>/ dev / ttyUSB0 / dev / ttyUSB1 / dev / ttyUSB2 / dev / ttyUSB3 / dev / ttyUSB4
>`` ''`
>
>Now you have to automate the launch of the previous command via udev :
>
>`` ''`
>root @ jeedom:# vi /etc/udev/rules.d99-usb_modeswitch.rules
>SUBSYSTEM == "usb", ATTRS {idVendor} == "1bbb", ATTRS {idProduct} == "f000", RUN + = "/ usr / sbin / usb_modeswitch -c /etc/usb_modeswitch.conf"
>`` ''`
>
>Under jeedom in the SMS plugin, you must (in my case) use the following "SMS port" : ``/dev/ttyUSB3``. Basically you have to try each port to find the right one…

> **The SMS daemon is started, but you do not receive any SMS**
>
>One of the probable causes is the wrong network configuration. In "General" -> "Configuration" -> "Administration" -> "Network configuration", check the content of the "URL or IP address field". The latter must not be localhost or 127.0.0.1 but the IP address of your Jeedom or its DNS name.

> **In debug mode I have the error "timeout" which appears**
>
>This error occurs when the key does not respond within 10 seconds of a request. Known causes may be :
>
>-   incompatibility of the GSM key,
>-   problem with the firmware version of the stick.

> **When starting in debug mode I have : "socket already in use"**
>
>This means that the demon is started but that Jeedom cannot stop it. You can either restart the whole system, or in SSH do "killall -9 refxcmd.py".

> **The demon refuses to start**
>
>Try to start it in debug mode to see the error.

> **I have several USB ports for my GSM key while I only have one**
>
>This is normal, for some unknown reason GSM keys create 2 (and even more) USB ports at the system level. Just choose one, no matter which one.

> **Jeedom does not send or receive SMS anymore**
>
>This usually happens if the GSM key can no longer connect to the network. Try moving it around and see if it comes back> after a few minutes.

>**I have reception concerns that work for a few hours then nothing**
>
>Put the SIM card on a mobile phone and empty all sms (sent and received) from the card.

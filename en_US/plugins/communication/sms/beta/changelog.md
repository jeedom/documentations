# Changelog SMS

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 10/01/2024

- Added a new command **Send message to** allowing you to send an SMS to a personalized number without having to create the contact's order. This allows you to send an sms to a number obtained via an info command from another device under Jeedom for example. Attention, no verification of the number is carried out, you must provide the numbers in international format.
- Disabling flow control when connecting to the modem to avoid problems with certain modems (for example lixee modem)
- Added two new options: **Allow messages from unknown numbers** & **Automatically add unknown numbers**; see docs.
- Fix an issue with some gsm keys returning incorrect characters when starting the daemon.

# 10/18/2022

- Update command list for Jeedom v4.3

# 07/20/2022

- Migrating daemon to python3

# 11/17/2020

- General optimizations
- New presentation of the list of objects
- Addition of the tag "V4 compatibility"

# 09/25/2019

- Switching to the jeedom v4 interface

# 08/11/2019

- Support for PHP 7.3

# 10/18/2018

- Improved verification of the sender number
- Correction of a bug if the log level is none

# 04/26/2018

- Documentation update

# 04/25/2018

- Fixed documentation link

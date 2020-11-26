# Changelog RFXcom

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 11/26/2020

- Complete overhaul of the plugin daemon
- Passage in python3
- Full support of all RFXcom modules

Be careful : This update is important and requires restarting the installation of dependencies. It is also possible that it is necessary to redo the inclusion of certain sensors.

# 05/27/2019

- Bugfix

# 10/02/2019

- Improvement of the rfxcom port detection function

# 05/16/2019

- Correction bug interface

# 05/03/2019

- Remove the fan MCZ 3 fan

# 04/30/2019

- Bug fix

# 04/29/2019

- Correction of a bug if the log level is none
- MCZ 3 fan support
- Updating the doc

# 10/08/2018

- Fix comparison expected and wanted protocols in lowercase

# 10/08/2018

- Demon startup review (by Sarakha)
- Compatible with the latest RFXCOM (by Sarakha)
- Separation in thread of listening socket and RFXCOM key (by Sarakha)

# 04/14/2018

- Correction of a bug or the demon can miss certain message if these arrived before sending to Jeedom at the same time with the same packet type

# 03/17/2018

- Updating the doc

# 02/28/2018

- Correction of a bug on the battery change

# 2017-12-01

-   The action commands for the remote control type modules are
    automatically created

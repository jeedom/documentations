# Changelog RFXcom

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 09/26/2022

- Fixed a problem if the user has hard-coded the activation of the protocols in the rfxcom rom

# 02/07/2022

- Fixed issue installing dependencies under jeedom 4.2


# 02/03/2022

- Fixed issue installing dependencies under jeedom 4.2
- Bug fix on 0x71 type modules (thanks @Doubledom)

# 02/08/2021

- Possibility of authorizing only a certain type of packet in the processing of equipment information (rare case)
- Correction of a bug on conf 0x1A : Somfy RTS Motor which may not appear in certain cases.

# 01/07/2020

- Bug fixes and optimization (thanks @Doubledom)

# 07/12/2020

- Correction of a bug on Somfy equipment (ID of 8 instead of 6)

# 03/12/2020

- Fixed bugs on the update process
- Correction of wind direction (division by 10 too much)


# 12/01/2020

- Bug fixes

# 11/29/2020

- Correction of bugs on battery recovery
- Bug fixing on mcz 2 fan stove control
- Bug fixes

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

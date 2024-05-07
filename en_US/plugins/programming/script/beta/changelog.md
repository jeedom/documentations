# Changelog script

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 05/06/2024

- Internal change to avoid unwanted side effects. The "refresh" function of the class *script* was renamed "refreshAllInfo" and that of the class *scriptCmd* was renamed "refreshInfo". If you used these methods in your code block scenarios you need to correct them.

# 01/11/2024

- Fixed a bug when updating info commands during an action

# 10/01/2024

- Fixed a bug on get http type requests

# 01/08/2024

- Preparing for jeedom 4.4
- Removal of the integrated script editor to switch to the core one
- Support for tags in URLs of xml, json & html type commands as it was already on http commands
- Better json support in http, json and xml type actions (read the documentation carefully to know how to do this))

# 10/17/2022

- Update command list for Jeedom v4.3

# 6/24/2020

- Correction of the interface

# 05/14/2020

- Correction of a bug on the update of the info commands following an action
- Moving core / resource scripts in data (important update to do and if not done could cause the loss of all scripts in future core updates)

# 05/12/2020

- Possibility of adding a delay to update information commands following an action

# 31/03/2020

- Bugfix

# 08/01/2019

- Support for php 7.3

# 06/05/2018

- Improved security of the resource directory

# 05/25/2018

- Improved interface
- Adding a message if the json is invalid or not decodable
- Addition of a field to configure select type commands

# 04/25/2018

- Updating the doc
- Saving the script no longer closes its editing window

# 03/30/2018

- Correction of the loss of the icon

# 03/13/2018

- Correction of bugs on the automatic refresh of orders

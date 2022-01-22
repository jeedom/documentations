# How to publish the plugin on the market

## Prerequisites

- Register as a dev, see [here](https://www.jeedom.com/site/fr/dev.html).
- Waiting for validation of the market account as a developer.
- Check on Community that you have access to "Developers' Lounge".
- Have your plugin on github (private deposit or not).
- Present your plugin in the "Developers show" and "Plugin presentation"

## Configuration

Once connected with your dev account on the market you must :

- Click on market then add
- Fill in the information on your plugin :
  - Main :
    - Price.
    - Id (the one in the info.json file).
    - Name.
    - Category.
    - Whether it's private or not.
  - Documentation and links
    - Description (be sure to make the important points, most users will not see the documentation before purchasing).
    - Languages.
    - Compatible hardware
    - A note on use if necessary.
  - Github : this is where you will put the information between the market and Github.
    - The token (to put only if your plugin is on a private deposit).
    - Your github username.
    - The name of the repository on github.
    - Check the box so that the market manages the translation of your plugin and the documentation (be careful in this case to give all the rights to the user `jeedom-market` of github on your github repository).

   Once saved, by returning to the github tab, you can indicate the branches of your github that correspond to the market versions :

   - Beta (eg: beta)
   - Stable (eg: master)
   - V3 (only if you have a different branch for Jeedom v3 support).

   Synchronization is done either automatically every day at 12.10 p.m. (beware given the number of plugins and call restrictions api the update starts at 12.10 p.m). You can also launch a manual synchronization of a branch from the plugin file.
   
   
   > **Note**
   > You have a market account with a name different from community and you want to publish under the name of community.
   > Go to your market account in "My profile".  In the "For developers" area, you can indicate in the author field your community name. 

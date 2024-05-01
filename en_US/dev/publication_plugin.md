# How to publish the plugin on the market

## Prerequisites

- Register as a dev, see [here](https://www.jeedom.com/site/fr/dev.html).
- Waiting for validation of the market account as a developer.
- Check on Community that you have access to "Developers' Lounge".
- Have your plugin on github (private deposit or not).
- Present your plugin in the "Developers show" and "Plugin presentation"

## Plug-in presentation

Why present your plugin !

To avoid working in your corner and seeing another dev come out with the same thing at the end.  
For help with designing this.  
To allow the Jeedom team during a ToStable to know what your Plugin is for and how it is coded.  
To share your ideas and comments :wink:  

We do not ask you for a dissertation on your plugins but just information :

- Name and id > Z-Wave (openzwave) // you can put this in your topic title.
- what your plugin does
- type of languages used
- Does he use a demon ? specific dependencies ? crons ?
- Does it have a dedicated panel ?
- Paid | free ? (if you already have an idea)
- GitHub link or other repository site (if desired)
- Link to documentation
From there a tag will be assigned by a moderator to your Plugin

You also have several tags at your disposal, for the Jeedom team to warn you more easily :

demon (if you have a demon)  
dependency_intall (if you have dependency installs)  
nodejs or python (language used in your daemon)  
cron (if you use Jeedom's cron engine)  
jsonrpc (if you use Jeedom's jsonrpc API)  
idea, beta, stable, private (depending on how your plugin is)  
free, paid  
panel-dash, panel-mob (if you have a panel in your plugin)  

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
  - Documentation and links (This information is based on the info file.json of your plugin)
    - Description (be sure to make the important points, most users will not see the documentation before purchasing).
    - Languages.
    - Compatible hardware
    - A note on use if necessary.
  - Github : this is where you will put the information between the market and Github.
    - The token (this allows you to retrieve the plugin information in the jeedom documentation). Vous pouvez le créer sur la page Github suivante : https://github.com/settings/tokens, choose `token classic`, `no expiration` and check the `repo` part.
    - Your github username.
    - The name of the repository on github.
    - Check the box so that the market manages the translation of your plugin and the documentation (be careful in this case to give all the rights to the user `jeedom-market` of github on your github repository).

   Once saved, by returning to the github tab, you can indicate the branches of your github that correspond to the market versions (remember to click on `Validate` before clicking on `Test/Synchronize`) :

   - Beta (eg: beta)
   - Stable (eg: master)
   - V3 (only if you have a different branch for Jeedom v3 support).

   Synchronization is done either automatically every day at 12:10 p.m. (be careful due to the number of plugins and API call restrictions, the update starts at 12:10 p.m. but can take several dozen hours), or via manual synchronization of 'a branch from the plugin form.
   
   
   > **Note**
   > You have a market account with a name different from community and you want to publish under the name of community.
   > Go to your market account in "My profile".  In the "For developers" area, you can indicate in the author field your community name. 

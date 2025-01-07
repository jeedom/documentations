# How to publish the plugin on the market

## Prerequisites

- Having registered as a dev, see [here](https://www.jeedom.com/site/fr/dev.html).
- Having waited for the validation of the market account as a developer.
- Check on Community that you have access to "Developer Lounge"".
- Have put your plugin on github (private repository or not)).
- Present your plugin in the "Developer Lounge" and "Plugin Showcase""

## Plugin Presentation

Why present your plugin !

To avoid working in a corner and seeing another developer come out with the same thing at the end.  
For help designing this.  
To allow the Jeedom team during a ToStable to know what your Plugin is used for and how it is coded.  
To share your ideas and comments :wink:  

We are not asking you for an essay on your plugins, just some information :

- Name and id > Z-Wave (openzwave) // you can put this in the title of your topic.
- what your plugin does
- type of languages used
- Is he using a demon? ? special dependencies ? crons ?
- Does it have a dedicated panel ?
- Paid | free ? (if you already have an idea)
- GitHub link or other repository site (if desired))
- Link to documentation
From there a tag will be assigned by a moderator to your Plugin

You also have several tags at your disposal, so that the Jeedom team can warn you more easily :

demon (if you have a demon)  
dependance_intall (if you have dependency installations)  
nodejs or python (language used in your daemon)  
cron (if you use the Jeedom cron engine)  
jsonrpc (if you use the Jeedom jsonrpc api)  
idea, beta, stable, private (depending on where your plugin is at)  
free, paid  
panel-dash, panel-mob (if you have a panel in your plugin)  

## Configuration

Once connected with your dev account on the market you must :

- Click on market then on add
- Fill in the information about your plugin :
  - General :
    - Price.
    - Id (the one in the info.json file).
    - Name.
    - Category.
    - Whether it is private or not.
  - Documentation and links (This information is based on the info file.json of your plugin)
    - The description (put the important points clearly, most users will not see the documentation before purchasing)).
    - Languages.
    - Compatible hardware
    - A note on usage if needed.
  - Github : This is where you will put the information between the market and Github.
    - The token (this allows you to retrieve plugin information in the jeedom documentation). Vous pouvez le créer sur la page Github suivante : https://github.com/settings/tokens, choose `token classic`, `no expiration` and check the `repo` part.
    - Your github username.
    - The name of the repository on github.
    - Check the box so that the market manages the translation of your plugin and documentation (be careful in this case to give all rights to the github user `jeedom-market` on your github repository).

   Once saved, by returning to the github tab, you will be able to indicate the branches of your github that correspond to the market versions (remember to click on `Validate` before clicking on `Test/Synchronize`) :

   - Beta (eg: beta)
   - Stable (eg: master)
   - V3 (only if you have a different branch for Jeedom v3 support).

   Synchronization is done either automatically every day at 12:10 p.m. (be careful, due to the number of plugins and API call restrictions, the update starts at 12:10 p.m. but can take several dozen hours), or via manual synchronization of a branch from the plugin sheet.
   
   
   > **Note**
   > You have a market account with a name other than community and you want to publish under the community name.
   > Go to your market account in “My profile".  In the "For developers" area, you can indicate your community name in the author field. 

# How to publish the plugin on the market

## Prerequisites

- Have registered as a dev, see [here](https://www.jeedom.com/site/fr/dev.html).
- Have waited for validation of the market account as a developer.
- Check on Community that you have access to "Developers' Lounge".
- Have put your plugin on github (private repository or not)).
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
- Paid || free ? (if you already have an idea)
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

Once connected with your dev account on the market, you must :

- Click on market then on add
- Fill in the information about your plugin :
  - General :
    - Price.
    - Id (the one in the info.json file).
    - Last name.
    - Category.
    - Whether it's private or not.
  - Documentation and links
    - The description (put the important points well, most users will not see the documentation before the purchase).
    - Languages.
    - Compatible hardware
    - A note on use if necessary.
  - Github : this is where you will put the information between the market and Github.
    - The token (to be put only if your plugin is on a private repository).
    - Your github username.
    - The name of the repository on github.
    - Check the box so that the market manages the translation of your plugin and documentation (be careful in this case to give all the rights to the `jeedom-market` user of github on your github repository).

   Once saved, by returning to the github tab, you can indicate the branches of your github that correspond to the market versions :

   - Beta (eg: beta)
   - Stable (eg: master)
   - V3 (only if you have a different branch for Jeedom v3 support).

   Synchronization is done either automatically every day at 12:10 p.m. (be careful given the number of plugins and API call restrictions the update starts at 12:10 p.m). You can also launch a manual synchronization of a branch from the plugin file.
   
   
   > **Note**
   > You have a market account with a name different from community and you want to publish under the name of community.
   > Go to your market account in "My profile".  In the "For developers" area, you can indicate in the author field your community name. 

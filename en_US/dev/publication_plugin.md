# How to publish the plugin on the marketplace

## Prerequisites

- Having registered as a developer, see [here](https://doc.jeedom.com/en_US/dev/).
- Having waited for the developer account to be validated.
- Check on the Community page that you have access to "Developer Lounge"".
- Having put your plugin on GitHub (private repository or not)).
- Present your plugin in the "Developer Lounge" and "Plugin Presentation" sections"

## Plugin overview

Why present your plugin? !

To avoid working in isolation and then seeing another developer release the same thing.  
To get help with its design.  
To allow the Jeedom team, during a ToStable request, to know what your plugin does and how it is coded.  
To share your ideas and comments :wink:  

We're not asking you for an essay on your plugins, just some information :

- Name and ID > Z-Wave (openzwave) // You can put this in your topic title.
- what your plugin does
- types of languages used
- Is he using a demon? ? specific dependencies ? crons ?
- Does it have a dedicated panel? ?
- Paid | free ? (if you already have an idea)
- GitHub link or other repository site (if you wish))
- Link to documentation
From there, a moderator will assign a tag to your plugin

You also have several tags at your disposal, so the Jeedom team can notify you more easily :

demon (if you have a demon))  
dependency_install (if you have dependency installations))  
Node.js or Python (language used in your daemon))  
cron (if you are using the Jeedom cron engine))  
jsonrpc (if you are using the Jeedom jsonrpc API))  
idea, beta, stable, private (depending on the stage of your plugin))  
free, paid  
panel-dash, panel-mob (if you have a panel in your plugin))  

## Configuration

Once logged in with your dev account on the marketplace, you need to :

- Click on market and then on add
- Enter the information about your plugin :
  - General :
    - Price.
    - ID (the one in the info.json file)).
    - Name.
    - Category.
    - Whether it is private or not.
  - Documentation and links (This information is based on the info file).json of your plugin)
    - The description (be sure to highlight the important points, most users won't read the documentation before buying)).
    - Languages.
    - Compatible equipment
    - A note on usage if necessary.
  - Github : This is where you will put the information between the marketplace and GitHub.
    - The token (this allows the plugin information to be retrieved in the Jeedom documentation)). Vous pouvez le créer sur la page Github suivante : https://github.Go to com/settings/tokens, choose `token classic` or `fine-grained` (in which case read-only is sufficient), `no expiration` and check the `repo` box.
    - Your GitHub username.
    - The name of the repository on GitHub.
    - Check the box to allow the marketplace to handle the translation of your plugin and documentation (in this case, be sure to grant full permissions to the `jeedom-market` user on your GitHub repository)).

   Once saved, by returning to the GitHub tab, you can specify the branches of your GitHub repository that correspond to the versions on the marketplace (remember to click on `Validate` before clicking on `Test/Synchronize`)) :

   - Beta (for example: beta)
   - Stable (for example: master)
   - V3 (only if you have a different branch for Jeedom v3 support)).

   Synchronization occurs either automatically every day at 12:10 PM (note that due to the number of plugins and API call restrictions, the update starts at 12:10 PM but may take several tens of hours), or via manual synchronization of a branch from the plugin's settings page.
   
   
   > **Note**
   > You have a marketplace account with a different name than "community" and you want to publish under the name "community".
   > Go to your marketplace account in "My Profile"".  In the "For developers" section, you can enter your community name in the author field. 

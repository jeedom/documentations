# How to publish the plugin on the market

## Prerequisites

- Register as a dev, see [here](https://www.jeedom.com/site/fr/dev.html)
- Waiting for validation of the market account as a developer
- Have your plugin on github (private deposit or not)

## Configuration

Once connected with your dev account on the market you must : 

- click on market then add
- fill in the information on your plugin : 
  - Main : 
    - Prix
    - Id (the one in the info.json file)
    - Nom
    - Category
    - Whether it is private or not to start
  - Documentation and links
    - the description (well put the important point, most users will not see the documentation before the purchase)
    - languages
    - compatible hardware
    - a note on use if necessary
  - Github : this is where you will put the information between the market and Github
    - the token (only put if your plugin is on a private deposit)
    - your github username
    - the name of the repository on github
    - tick the box for the market to manage the translation of your plugin and documentation (be careful in this case to give all rights to the user zoic21 of github on your github repository)
    
   Once saved by returning to the github tab you will have 3-4 fields to indicate the branches : 
   
   - beta
   - stable
   - pro (is useless in 99% of cases)
   - stablev3 (coming soon)
   
   Synchronization is done either automatically every day at 12.10 p.m. (beware given the number of plugins and call restrictions api the update starts at 12.10 p.m. but take several ten hours). You can also start a manual synchronization of a branch from the plugin file

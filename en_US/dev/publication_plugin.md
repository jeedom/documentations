# How to publish the plugin on the market

## Prerequisites

- Signed up as a dev, see [here](https://www.jeedom.com/site/fr/dev.html)
- Have waited for the validation of the market account as a developer
- Have put your plugin on github (private repository or not)

## Configuration

Once connected with your dev account on the market, you must : 

- click on market then on add
- fill in the information about your plugin : 
  - General : 
    - Prix
    - Id (the one in the info.json file)
    - Nom
    - Category
    - Whether it's private or not to begin with
  - Documentation and links
    - the description (be sure to make sure that the point is, most users will not see the documentation before purchasing)
    - languages
    - compatible hardware
    - a note on the use if necessary
  - Github : this is where you will put the information between the market and Github
    - the token (only put if your plugin is in a private repository)
    - your github username
    - the name of the repository on github
    - check the box so that the market manages the translation of your plugin and the documentation (be careful in this case to give all the rights to the zoic21 user of github on your github repository)
    
   Once saved by returning to the github tab you will have 3-4 fields to indicate the branches : 
   
   - beta
   - stable
   - pro (is useless in 99% of cases)
   - stablev3 (soon)
   
   The synchronization is done either automatically every day at 12:10 (be careful given the number of plugins and the API call restrictions, the update starts at 12:10 but take several ten hours). You can also launch a manual synchronization of a branch from the plugin file

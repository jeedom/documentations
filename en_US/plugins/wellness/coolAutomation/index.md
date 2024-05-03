# CoolAutomation plugin




# Auto discovery of CoolAutomation equipment


Simply click on Network Scan to start detecting equipment on your network


![scanNetwok](./images/scanNetwork.png)


Once found, the corresponding eqlogics will be created




# Detail Equipment


The equipment page brings together the information necessary for the creation of equipment dependent on the latter

** All information on this page is refreshed when arriving on this page.


![eqlogicMain](./images/eqlogicMain.png)

On the right side, you can find the equipment parameters : firmware version, maximum number of lines on the device, maximum number of units etc.
This data is for informational purposes only, and cannot be modified



On the left side, we find the IP address of the equipment, as well as its serial number : these 2 pieces of information are very important because they are used to send requests to the device's API. 


Below this information, we find the state of the REST Server : this is the device's web server, which is used to communicate with the plugin. You must therefore activate it if it is not already activated. 
It can be activated via the plugin, by simply clicking on the corresponding button

![activateRestServer](./images/activateRestServer.png)

> ATTENTION

> This will cause the equipment to restart


Finally, under the Active Line Management section, you will find the units connected to the equipment, and available for creation.



# Change Equipment image

By going to the Cool Automation equipment, you can choose the corresponding image, then save

![chooseImg](./images/chooseImg.png)


# Creation of Units and their Master Equipment

To create the equipment controlling the connected units, simply check them in the Active Line Management section, then save

![checkboxLines](./images/checkboxLines.png)

This will create the corresponding eqlogics, as well as Master equipment, allowing you to control an entire line.

> ATTENTION

> If you uncheck a unit that has already been created, and save, this will delete the equipment. 
> If all the boxes of a line are unchecked, the Master equipment of the line will also be deleted


# Overview of Equipment and its units

![linesCreated](./images/linesCreated.png)


![detailsChilds](./images/detailsChilds.png)





# Assigning units to an object


Dozens of units may have been created, and it is tedious to have to go to each one to assign a parent object to them. 

![attribuateObjects](./images/attribuateObjects.png)

A system has been provided to facilitate this : you just need to check the units in a line, then click on Assign selection to an object, to choose the parent object to which the units will be attached



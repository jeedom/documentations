# Installation on Synology

Here you will find the documentation step by step to install Jeedom on a Synology (DSM 5.2 minimum).

## Docker installation

Go to the package center :

![install synology 1](images/install_synology_1.PNG)

Click all, then install the Docker package

![install synology 2](images/install_synology_2.PNG)

Wait until the installation is finished :

![install synology 3](images/install_synology_3.PNG)

> **Important**
>
> To access the Docker package, you must have DSM 5.2 and a compatible NAS

## Recovery and installation of Jeedom images

Launch the Docker application :

![install synology 4](images/install_synology_4.PNG)

Click on "Register" :

![install synology 5](images/install_synology_5.PNG)

In the search field, type "jeedom", select jeedom / jeedom and click on download :

![install synology 20](images/install_synology_20.PNG)

Then validate the version request, the best being to take the last.

Then click on image, here you can follow the progress of the download (can take several tens of minutes) :

![install synology 21](images/install_synology_21.PNG)

Once finished, click on the image then launch :

![install synology 22](images/install_synology_22.PNG)

Give a name to your jeedom as well as a local port redirected to port 80 (here 9080) then do the following :

![install synology 23](images/install_synology_23.PNG)

Do next :

![install synology 24](images/install_synology_24.PNG)

Click on "Advanced settings"

![install synology 25](images/install_synology_25.PNG)

Then on "Add a folder"

![install synology 26](images/install_synology_26.PNG)

Choose a folder on your Synology (it is in this folder that there will be all jeedom files), be careful to uncheck "Read only"

![install synology 27](images/install_synology_27.PNG)

In path, put / var / www / html then click on "Environment" :

![install synology 28](images/install_synology_28.PNG)

Repeat this operation for the / var / lib / mysql folder

Check "Run the container using elevated privileges" then validate everything :

![install synology 29](images/install_synology_29.PNG)

Check "Run this container when the wizard has finished" then click on "Apply".

> **Advanced configuration setting**
>
> There are 3 optional configuration parameters, these parameters must be passed as an environment variable
> - APACHE_PORT : allows to change the default port (80) for listening to the web server
> - MODE_HOST : indicates that the network is in host mode

> **IMPORTANT**
>
> Certain plugin you need to have the network broadcast (Xioami plugin type), for that you must ABSOLUTELY switch to the network in host mode (only possible during creation), change the default listening port of the web server and ssh by unused ports (type 9080 for the web server and 9022 for the ssh), and set the variable MODE_HOST to 1

Now you need to install Jeedom, it's very simple, go to IP\_NAS:9080

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)

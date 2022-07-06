# Installation on Freebox Delta

It is possible to install on Freebox Delta Jeedom via the VM system.

## Connection to the Delta

You must go to the configuration interface of your Freebox Delta. Then click on VMs.

![delta1](images/delta1.png)

## Set the different options

Click on "Add a VM"
![delta2](images/delta2.png)

Configure features. We recommend that you put 2 CPUs and the maximum in RAM.

![delta3](images/delta3.png)

Configure user and password, **they must be kept in memory they will be asked for during an SSH connection**:
![delta4](images/delta4.png)

## Loading installation

Wait while the image downloads
![delta5](images/delta5.png)

## Connect to your Jeedom

You can connect using the address indicated on the page:
![delta6](images/delta6.png)

Remember to assign the Delta's USB port to the VM if you want to use an antenna.

Born **not** check "Screen", this is useless on the Jeedom image (apart from overconsumption).

The IP address of your Jeedom on the Freebox Delta is written at the top, under its name.

The default login and password are admin / admin when you access jeedom via your browser.

For the rest, you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index.html)

.


 :

-   .
    
    

-   



.
.




.

 
===========================

 :

![vmware.createvm3](images/vmware.createvm3.PNG)

> **NOTE**
>
> 
> 
> [ici](https:

 :

![vmware.createvm4](images/vmware.createvm4.PNG)



 :

-   

-   

-   ,
    

-   

-   
    
    
    

 
=============================


:
.
.

 :

![vmware.createvm18](images/vmware.createvm18.PNG)

 :

![vmware.createvm19](images/vmware.createvm19.PNG)

" :

![vmware.createvm20](images/vmware.createvm20.PNG)

 :

![vmware.createvm21](images/vmware.createvm21.PNG)

 :

![vmware.createvm22](images/vmware.createvm22.PNG)

 :

![vmware.createvm23](images/vmware.createvm23.PNG)


datastore :

![vmware.createvm24](images/vmware.createvm24.PNG)

 
=============================

" :

![vmware.createvm5](images/vmware.createvm5.PNG)

 :

![vmware.createvm6](images/vmware.createvm6.PNG)


 :

![vmware.createvm7](images/vmware.createvm7.PNG)

 :

![vmware.createvm8](images/vmware.createvm8.PNG)


 :

![vmware.createvm9](images/vmware.createvm9.PNG)

> **NOTE**
>
> 
> 
> a hard drive, you can increase it (but you have to know how to manage it
> OS level next) but not reduce it.

In the CD / DVD drive, select "ISO file bank of
Data" :

![vmware.createvm10](images/vmware.createvm10.PNG)

Then select the location where your ISO is stored (see
previous chapter) and validate :

![vmware.createvm11](images/vmware.createvm11.PNG)

Then do next :

![vmware.createvm12](images/vmware.createvm12.PNG)

You then have a summary of your configuration, click on
"Finish" :

![vmware.createvm13](images/vmware.createvm13.PNG)

A message at the top will tell you that it's good, then click on
"Virtual machines" :

![vmware.createvm14](images/vmware.createvm14.PNG)

You should see your virtual machine (if not click
on "Refresh") click on it :

![vmware.createvm15](images/vmware.createvm15.PNG)

You must have a page of this type, click on the play button :

![vmware.createvm16](images/vmware.createvm16.PNG)

Your machine will launch and you will be able to install
your OS :

![vmware.createvm17](images/vmware.createvm17.PNG)

> **IMPORTANT**
>
> Once your machine is installed you MUST install the
> VMware tools (this allows VMware to have information about your VM
> and turn it off properly). Under debian just do
> "sudo apt-get -y install open-vm-tools".

For the rest of the installation I invite you to read this
[tutoriel](https://jeedom.github.io/documentation/howto/en_US/doc-howto-debian.installation.html#_installation)

Mount USB devices in the VM 
=======================================

> **NOTE**
>
> If you do not have the options below it is necessary to update
> the ESXi Embedded Host Client, all information
> [ici](https:

It's a fairly rare need, but I had to use it for Jeedom, in
indeed I have on my ESXi the keys Zwave, RFXcom, edisio, enOcean and GSM
connected and I had to connect them to my Jeedom VM to be able to
use it.

> **NOTE**
>
> For Zwave, RFXcom, edisio and enOcean there is no problem, for
> GSM keys you must follow this
> [tutoriel](https://jeedom.github.io/documentation/howto/en_US/doc-howto-gsm.huawei_mode_modem.html)
> before to force the key in modem mode only otherwise it is not
> not seen correctly on the ESXi.

Go to your VM then do "Change settings" :

![vmware.createvm25](images/vmware.createvm25.PNG)

Click on "Add another device" then USB controller :

![vmware.createvm26](images/vmware.createvm26.PNG)

> **NOTE**
>
> The following step should be repeated for each USB device that
> you want to connect

Save, redo "Change settings", then "Add another
device "and" USB device" :

![vmware.createvm27](images/vmware.createvm27.PNG)

Choose your USB device from the drop-down list :

![vmware.createvm28](images/vmware.createvm28.PNG)

And now your device is plugged into your VM. Every
restart it will be automatically reconnected to the VM and if you
physically disconnect / connect then it will be reconnected to
your VM. In other words the use is now totally
transparent.

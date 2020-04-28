Here is a tutorial to install VMware on an Intel NUC (gen6). We
will see later how to add Jeedom on it

Equipment 
===========

Intel NUC 
---------

The Intel NUC is a small PC, not the most powerful, but very economical
energy and small dimensions. This makes it a perfect little waiter
virtualization based on VMware.

There are currently 2 6th generation NUCs (the others work
also for VMware but require additional drivers on the
VMware kernel):

-   Intel Core i3-6100U (Dual-Core 2.3 GHz - - 4 threads - Cache 3 MB -
    TDP 15W)

-   Intel Core i5-6260U (Dual-Core 1.8 GHz - Turbo 2.9 GHz - 4 threads -
    Cache 4 MB)

The i5 is significantly more powerful because it has a little more cache memory
and especially a turbo mode which allows it to climb much higher in
Frequency.

In addition, there are 2 types of case :

-   A thin case that can only contain one type M2 disc

-   A thicker case that can contain an M2 type disc and a
    disc 2.5 inch

That makes 4 references :

-   i3 M2 : [Intel NUC
    NUC6I3SYK] (http://www.ldlc.com/fiche/PB00203086.html) 320 €

-   i3 M2 + 2.5inch : [Intel NUC
    NUC6I3SYH] (http://www.ldlc.com/fiche/PB00203148.html) 320 €

-   i5 M2 : [Intel NUC
    NUC6I5SYK] (http://www.ldlc.com/fiche/PB00203084.html) 460 €

-   i5 M2 + 2.5inch : [Intel NUC
    NUC6I5SYH] (http://www.ldlc.com/fiche/PB00202760.html) 430 €

SSD 
---

You have to add an SSD and memory. SSD level I you
recommend 240GB or more, unless you take the model with a
location 2.5 inches (which allows you to put additional hard drive)
or to have a Synology NAS to make the iSCSI LUN. Do not forget
that a basic VM (no storage) is between 20 to 40GB, add to
this 40GB for VMware itself it fills up quickly.

> **IMPORTANT**
>
> VMware does not support adding USB disk, so it is difficult
> to extend the available space

-   [LDLC SSD M.2 2280 F6 PLUS 120
    GB] (http://www.ldlc.com/fiche/PB00203635.html) 55 €

-   [Samsung SSD 850 EVO 120 Go
    M.2] (http://www.ldlc.com/fiche/PB00185923.html) 100 €

-   [LDLC SSD M.2 2280 F6 PLUS 240
    GB] (http:

-   [Samsung SSD 850 EVO 250 Go
    M.2] (http:

-   [LDLC SSD M.2 2280 F6 PLUS 480
    GB] (http:

 
-------



,
. 

 :

-   [Crucial SO-DIMM DDR4 8 Go (2 x 4 Go) 2133 MHz CL15 SR
    X:

-   [Crucial SO-DIMM DDR4 16 Go (2 x 8 Go) 2133 MHz CL15 DR
    X:

-   [Crucial SO-DIMM DDR4 32 Go (2 x 16 Go) 2133 MHz CL15 DR
    X:

 
=============================


.

 
------------------------

> **IMPORTANT**
>
> .
> 
> [KB](https:?


:

-   
    [ici](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6)
    

-   

-   
    [ici](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6)
    
    

-   
    [là](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2)
    "

-   
    [ici](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6)
    
    

![installation.vmware.nuc](images/installation.vmware.nuc.PNG)


.

 
-----------------------


[la](http://rufus.akeo.ie/downloads/rufus-2.9.exe). Il vous faut ensuite


 
--------------------------------

 :

![installation.vmware.nuc2](images/installation.vmware.nuc2.PNG)

.

 
==============================

 :

-   

-   

-   

![installation.vmware.nuc3](images/installation.vmware.nuc3.jpg)

 :

![installation.vmware.nuc4](images/installation.vmware.nuc4.jpg)

 :

![installation.vmware.nuc5](images/installation.vmware.nuc5.jpg)

 :

![installation.vmware.nuc6](images/installation.vmware.nuc6.jpg)




:

![installation.vmware.nuc7](images/installation.vmware.nuc7.jpg)




![installation.vmware.nuc8](images/installation.vmware.nuc8.jpg)

 :

![installation.vmware.nuc10](images/installation.vmware.nuc10.jpg)


..

 
======================




 :

![installation.vmware.nuc11](images/installation.vmware.nuc11.jpg)

> **NOTE**
>
> 
> 




![installation.vmware.nuc13](images/installation.vmware.nuc13.jpg)

" :

![installation.vmware.nuc14](images/installation.vmware.nuc14.jpg)


 :

![installation.vmware.nuc15](images/installation.vmware.nuc15.jpg)

 :

![installation.vmware.nuc16](images/installation.vmware.nuc16.jpg)




![installation.vmware.nuc17](images/installation.vmware.nuc17.jpg)

 :

![installation.vmware.nuc18](images/installation.vmware.nuc18.jpg)

 ,
 !!!


[tutoriel](https://jeedom.github.io/documentation/howto/en_US/doc-howto-vmware.creer_une_vm.html)

[ici](https://jeedom.github.io/documentation/howto/en_US/doc-howto-vmware.trucs_et_astuces.html)



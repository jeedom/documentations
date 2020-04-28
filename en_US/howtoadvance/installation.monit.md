Monit is a service supervision service. He takes care of
check that a service is still started.

For this we indicate the evaluation criteria and the actions to
to take.

Installation of Monit 
=====================

Here are the commands to launch to install monit :

    

Examples of conf 
================

Here are configuration examples for Monit with Jeedom.

Apache supervision 
==================

    # Apache (test on port 80)
    
        start program = "/ etc / init.d / apache2 start"
        stop program = "/ etc / init.d / apache2 stop"
           

Nginx supervision (including ) 
=====================================

    # 
    
       start program = "/ etc / init.d / php5-fpm start"
       stop program = "/ etc / init.d / php5-fpm stop"
       
              
              

    # Nginx (test on port 80)
    
       start program = "/ etc / init.d / nginx start"
       stop program = "/ etc / init.d / nginx stop"
          

MySQL supervision 
=================

    # MySQL (connection)
    
       start program = "/ etc / init.d / mysql start"
       stop program = "/ etc / init.d / mysql stop"
           
           
           

APCupsd supervision 
===================

    # apcups (if you have an inverter with this service, otherwise delete / adapt)
    
       start program = "/ etc / init.d / apcupsd start"
       stop program = "/ etc / init.d / apcupsd stop"
          

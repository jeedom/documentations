Not really a howto here but more a collection of tips and tricks on
MYSQL

Disable schema performance 
================================

Edit the file /etc/mysql/mysql.conf.d/mysqld.cnf and add in :

    [mysqld]
    performance_schema = OFF

Optimizing MYSQL 
===============

> **IMPORTANT**
>
> This method is at your own risk. In case of any worries
> support will only be possible.

-   Stop the MYSQL daemon and delete the log files :

<!-- -->

    mysql stop service
    rm / var / lib / mysql / ib_logfile*

-   Then do :

<!-- -->

    
    
    
    
    
    
    echo "query_cache_type = 1" >> /etc/mysql/conf.d/jeedom_my.cnf
    
    
    echo "query_cache_min_res_unit = 3K" >> /etc/mysql/conf.d/jeedom_my.cnf
    
    
    

-   Relaunch MYSQL :

<!-- -->

    mysql start service

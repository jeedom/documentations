Nicht wirklich ein Howto hier, sondern eher eine Sammlung von Tipps und Tricks


Deaktivieren Sie die Schemaleistung 
================================

Bearbeiten Sie die Datei /etc/mysql/mysql.conf.d/mysqld.cnf und hinzufügen :

    [mysqld]
    Leistungsschema = AUS

 optimieren 
===============

> **Wichtig**
>
> Diese Methode erfolgt auf eigenes Risiko. Im Falle von Sorgen
> Support wird nur möglich sein.

-   Stoppen Sie den -Daemon und löschen Sie die Protokolldateien :

<!-- -->

     Stop Service
    rm / var / lib / mysql / ib_logfile*

-   Dann mach es :

<!-- -->

    Berühren Sie /etc/mysql/conf.d/jeedom_my.cnf
    
    
    
    
    
    echo "query_cache_type = 1" >> /etc/mysql/conf.d/jeedom_my.cnf
    
    
    echo "query_cache_min_res_unit = 3K" >> /etc/mysql/conf.d/jeedom_my.cnf
    
    
    

-   Starten Sie  neu :

<!-- -->

     starten Service

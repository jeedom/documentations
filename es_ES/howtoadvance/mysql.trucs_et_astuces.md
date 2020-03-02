Pas vraiment un howto ici mais plus un recueil de trucs et astuces sur
MySQL

Désactiver le performance schéma 
================================

Editez le fichier /etc/mysql/mysql.conf.d/mysqld.cnf et ajoutez dedans :

    [mysqld]
    performance_schema=OFF

Optimiser MySQL 
===============

> **Important**
>
> Cette méthode est à vos risques et périls. En cas de soucis aucun
> support ne sera possible.

-   Arrêtez le démon MySQL et supprimez les fichiers de log :

<!-- -->

    service mysql stop
    rm /var/lib/mysql/ib_logfile*

-   Puis faites :

<!-- -->

    touch /etc/mysql/conf.d/jeedom_my.cnf
    echo "[mysqld]" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "key_buffer_size = 16M" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "thread_cache_size = 16" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "tmp_table_size = 48M" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "max_heap_table_size = 48M" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "query_cache_type =1" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "query_cache_size = 16M" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "query_cache_limit = 2M" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "query_cache_min_res_unit=3K" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "innodb_flush_method = O_DIRECT" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "innodb_flush_log_at_trx_commit = 2" >> /etc/mysql/conf.d/jeedom_my.cnf
    echo "innodb_log_file_size = 32M" >> /etc/mysql/conf.d/jeedom_my.cnf

-   Relancez MySQL :

<!-- -->

    service mysql start

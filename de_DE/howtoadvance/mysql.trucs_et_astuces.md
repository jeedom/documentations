# MySQL-Tipps und Tricks

Nicht wirklich ein Howto hier, sondern eher eine Sammlung von Tipps und Tricks zu MySQL

# Deaktivieren Sie die Schemaleistung

Bearbeiten Sie die Datei ``/etc/mysql/mysql.conf.d/mysqld.cnf`` Und hinzufügen :

````
[mysqld]
performance_schema=OFF
````

# MySQL optimieren

> **Wichtig**
>
> Diese Methode erfolgt auf eigenes Risiko. Bei Bedenken ist keine Unterstützung möglich.

-   Stoppen Sie den MySQL-Daemon und löschen Sie die Protokolldateien :
````
service mysql stop
rm /var/lib/mysql/ib_logfile*
````
-   Dann mach es :
````
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
````
-   Starten Sie MySQL neu : ``service mysql start``

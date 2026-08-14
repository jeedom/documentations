# MySQL Tips and Tricks

This isn't really a true how-to guide, but more of a collection of tips and tricks for MySQL

# Disable the performance scheme

Edit the file ``/etc/mysql/mysql.conf.d/mysqld.cnf`` and add the following:

````
[mysqld]
performance_schema=OFF
````

# Optimizing MySQL

> **Important**
>
> Use this method at your own risk. If you encounter any issues, no support will be available.

-   Stop the MySQL daemon and delete the log files:
````
service mysql stop
rm /var/lib/mysql/ib_logfile*
````
-   Then do the following:
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
-   Restart MySQL: ``service mysql start``

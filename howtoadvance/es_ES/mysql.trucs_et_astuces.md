# Consejos y trucos de MySQL

No es exactamente un tutorial, sino más bien una recopilación de consejos y trucos sobre MySQL

# Desactivar el esquema de rendimiento

Edita el archivo ``/etc/mysql/mysql.conf.d/mysqld.cnf`` y añade lo siguiente:

````
[mysqld]
performance_schema=OFF
````

# Optimizar MySQL

> **Importante**
>
> Este método es bajo tu propia responsabilidad. En caso de problemas, no se ofrecerá ningún tipo de asistencia.

-   Detén el servicio MySQL y elimina los archivos de registro:
````
service mysql stop
rm /var/lib/mysql/ib_logfile*
````
-   A continuación, haz lo siguiente:
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
-   Reinicia MySQL: ``service mysql start``

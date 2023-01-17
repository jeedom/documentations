# Mysql consejos y trucos

No es realmente un tutorial aquí, sino más bien una colección de consejos y trucos en MySQL

# Deshabilitar el rendimiento del esquema

Edite el archivo ``/etc/mysql/mysql.conf.d/mysqld.cnf`` Y agrega :

````
[mysqld]
performance_schema=OFF
````

# Optimizando MySQL

> **Importante**
>
> Este método es bajo su propio riesgo. En caso de inquietud no será posible el apoyo.

-   Detenga el demonio MySQL y elimine los archivos de registro :
````
service mysql stop
rm /var/lib/mysql/ib_logfile*
````
-   Entonces haz :
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
-   Relanzar MySQL : ``service mysql start``

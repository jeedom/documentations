No es realmente un tutorial aquí, sino más bien una colección de consejos y trucos sobre
MySQL

Deshabilitar el rendimiento del esquema 
================================

Edite el archivo /etc/mysql/mysql.conf.d/mysqld.cnf y agregar :

    [mysqld]
    performance_schema = OFF

Optimizando MySQL 
===============

> **Importante**
>
> Este método es bajo su propio riesgo.. En caso de preocupaciones
> el apoyo solo será posible.

-   Detenga el demonio MySQL y elimine los archivos de registro :

<!-- -->

    servicio de parada mysql
    rm / var / lib / mysql / ib_logfile*

-   Entonces haz :

<!-- -->

    toque /etc/mysql/conf.d/jeedom_my.cnf
    
    
    
    
    
    echo "query_cache_type = 1" >> /etc/mysql/conf.d/jeedom_my.cnf
    
    
    echo "query_cache_min_res_unit = 3K" >> /etc/mysql/conf.d/jeedom_my.cnf
    
    
    

-   Relanzar MySQL :

<!-- -->

    servicio de inicio mysql

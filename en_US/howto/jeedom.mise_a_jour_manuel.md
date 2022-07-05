# 



## 

-   
-   )
-   

> ****
>
> .

## 

 :

````
sudo su -
cd /root
wget https://github.com/jeedom/core/archive/master.zip
unzip master.zip
cp -R core-master/* /var/www/html
cp -R core-master/.[^.]* /var/www/html
````

## 

:

````
sudo su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> ****
>
>  ``/var/www/html``  ``/usr/share/nginx/www/jeedom``

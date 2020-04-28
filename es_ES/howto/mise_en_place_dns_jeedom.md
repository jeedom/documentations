# Implementación de Jeedom DNS

## Objetivo

Configure Jeedom DNS para que tenga acceso a su Jeedom externamente a través de una URL HTTPS

> **Importante**
>
>El Jeedom DNS actúa como un proxy inverso, por lo que solo le da acceso a su Jeedom en https, por lo tanto, no será posible acceder a su jeedom en SSH de forma remota con el Jeedom DNS

## Requisitos previos

Para tener acceso a Jeedom DNS es absolutamente necesario tener un paquete de servicio de energía o más.

## Principio

El principio de DNS de Jeedom es muy simple, su Jeedom se conectará a uno de nuestros servidores VPN (conexión cifrada). Entonces este servidor en cuestión con nosotros hace "proxy inverso" durante la solicitud : toma su solicitud para conectarse a su libertad y se la transfiere.

Este principio tiene la ventaja de no exponer su Jeedom en Internet, no hay apertura de puerto para hacer.

> **Importante**
>
> Para que esto funcione, su caja debe permitir una conexión saliente en los puertos 1194,1195,1996,1997,1198,1199,2000 y 2001 en UDP. En particular, para el Huawei Livebox y el enrutador 4g, se debe bajar el nivel del firewall, para los Delta Freeboxes, se debe desactivar el control parental.

Actualmente tenemos 6 servidores DNS distribuidos en 2 máquinas físicas diferentes, cada una con una conexión de 500Mbit / s. 

## Configurar

### Jeedom

Ahí es muy simple, debe conectar su Jeedom al mercado (consulte la documentación del primer paso). 

### Mercado

Una vez que su Jeedom está vinculado al mercado, usted va al mercado; luego en sus perfiles (https://www.jeedom.com/market/index.php?v = d & p = perfiles) y finalmente en la pestaña "Mis Jeedoms".

### Regreso a Jeedom

Una vez que el estado del mercado en "Conexión posible", vaya a su Jeedom, en la administración de la misma vaya a la pestaña Redes y marque "Usar Jeedom DNS" y luego guarde.



> **Importante**
>
> . 



## Preguntas frecuentes

> ****
>
> . .

> ****
>
> . .

> ****
>
> . .

> ****
>
> .

> ****
>
> . .

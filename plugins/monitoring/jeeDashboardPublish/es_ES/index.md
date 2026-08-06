# Complemento JeeDashboardPublish

## Introduction

El complemento JeeDashboardPublish le permite publicar valores de Jeedom utilizando el complemento jMQTT.

## Configuración del complemento

Es necesario ingresar los parámetros del Broker MQTT.

![Configuración del complemento](../images/configuration_plugin.png)

## Configuración del equipo

Es posible crear tanto equipo como quieras : 

![Liste des équipements](../images/liste_equipement.png)

Se recomienda ingresar un prefijo para tener nombres únicos con dos métodos :

![Configuración del equipo - 1](../images/configuration_equipement_1.png)

1. Un prefijo duro.

2. Usando una variable Jeedom. Es necesario marcar la casilla “Es una variable Jeedom” e ingresar el nombre de la variable : variable(xxx)

## Utilisation

![Configuración del equipo - 2](../images/configuration_equipement_2.png)

Es posible ingresar los nombres de los comandos a publicar seleccionando una lista de comandos con el botón "Elegir comandos" o agregándolos manualmente con el botón "Agregar telemetría"".

Es posible exportar los historiales de uno o más pedidos especificando una fecha de inicio.


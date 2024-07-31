# Complemento LNS

## Description

Este complemento le permite instalar y configurar un Chirpstack V3 en la caja Jeedom.

## Fonctionnement
1- Inicie las dependencias - para instalar los paquetes necesarios.

2- El puerto predeterminado es 8081. Es posible cambiarlo a través de la interfaz del complemento LNS.

3- Importe la configuración de MQTT2: siempre que los cuatro campos dirección IP del intermediario, puerto del intermediario, identificador de conexión y contraseña de MQTT no estén completos, las dependencias de MQTT2 aún se están instalando.

4- Instale el Puente Gateway (opcional): marque y guarde si es necesaria la instalación del Puente Gateway.

5- Modifique la configuración del CS: una vez completados los cuatro campos, podrá modificar los archivos de configuración.

6- Consulta el estado de los servicios.

7- Pila de chirridos abierta.

8- Creación automática en CS: ingrese los identificadores de CS para crear en Chirpstack el servidor de red, perfil de servicio, puerta de enlace, perfil de dispositivo (clase A y clase C)).

# Debian 11

## Introduction

Aquí encontrará un informe de nuestras pruebas de Jeedom en Debian 11. Como recordatorio, Debian 11 se lanzó oficialmente en versión estable el 15 de agosto de 2021 e implica muchos cambios en particular : 

- Pasaje de PHP 7.3 hasta 7,4
- Inicio de la eliminación de Python 2
- Actualización de muchos paquetes

## Core

### 4.1.X

Aún no hemos detectado ningún impacto.

### 4.2.X

Hay un problema con el nuevo sistema de instalación de dependencias para el que usa pip3 (pip3 ya no existe y es reemplazado por pip)

## Plugins

No podemos probar todos los complementos, por lo que solo estamos poniendo los comentarios de los probados por el momento (esta lista se actualizará a medida que avancemos en nuestras pruebas)

- Openvpn (DNS jeedom) => Aceptar
- Cámara => Aceptar
- Zigbee => Aceptar
- Openzwave => NOK (problema con la instalación de dependencias)
- móvil => ok
- gcast => ok
- red => ok
- rfxcom => ok
- sonos => ok


>**IMPORTANTE**
>
>Estas pruebas se realizaron en un entorno virtual sin ningún equipo detrás, por el momento acabamos de comprobar que las dependencias están bien instaladas y que los demonios logran lanzarse

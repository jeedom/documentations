# Complemento Nuki

Este complemento permite controlar las cerraduras conectadas de Nuki mediante el puente.

## Configuración del plugin

Una vez descargado el complemento, solo tienes que activarlo y, a continuación, configurar los datos del puente.

Esta información está disponible en la aplicación móvil durante la configuración del puente, una vez que se haya activado el acceso a la API en el mismo.

![nuki1](../images/nuki1.png)

A continuación, hay que hacer clic en el botón «Configurar el bridge» para indicar al bridge la dirección de Jeedom para la respuesta.

## Configuración del equipo

Se puede acceder a la sincronización de las cerraduras desde el menú Complementos > Seguridad > Nuki:

![nuki2](../images/nuki2.png)

> **Nota**
>
> Los comandos se crean automáticamente, no es necesario añadirlos manualmente.

## Valores posibles para el comando *Estado*

|     | **cerradura inteligente** | **abridor**  | **sensor de puerta** |
|-----|---------------------------|-------------|----------------|
| 0   | Sin calibrar | Sin calibrar | - |
| 1   | Bloqueada | En línea    | Desactivada     |
| 2   | Desbloqueo | - | Cerrada |
| 3   | Desbloqueada | RTO activa  | Abierta |
| 4   | Cierre | - | Desconocido |
| 5   | Desbloqueado (pestillo)    | Abierto | Calibración |
| 6   | Desbloqueada (lock n go) | - | - |
| 7   | Desbloqueo (pestillo)   | Apertura   | - |
| 16  | - | - | Sin calibrar    |
| 240 | - | - | Eliminado |
| 253 | - | Inicio   | - |
| 254 | Motor bloqueado | - | - |
| 255 | Desconocido | Desconocido     | - |

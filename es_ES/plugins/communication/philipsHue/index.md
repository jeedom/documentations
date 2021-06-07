# Complemento Philips Hue

# Description

Este complemento le permitirá integrar su ecosistema Philips Hue en Jeedom. El complemento ofrece la posibilidad de conducir hasta 2 puentes Philips Hue simultáneamente.

# Configuration

## Configuración del plugin

Como cualquier complemento de Jeedom, el complemento **Philips Hue** debe activarse después de la instalación.

Una vez que se activa el complemento, deberá ingresar la dirección IP en la que se puede acceder a su puente Philips Hue.

>**TRUCO**
>
>Puede ingresar hasta 2 puentes Philips Hue que podrán comunicarse con Jeedom simultáneamente.

El complemento **Philips Hue** utiliza su propio demonio para mantenerse en contacto constante con los puentes Philips Hue. Puede verificar el estado en la página de configuración del complemento.

>**INFORMACIÓN**
>    
>Normalmente no es necesario iniciar el demonio manualmente, es administrado automáticamente por el complemento.

## Configuración del equipo

Para acceder a los diferentes equipos **Philips Hue**, ir al menú **Complementos → Comunicación → Philips Hue**.

>**INFORMACIÓN**
>    
>El botón **+ Agregar** le permite agregar nuevos equipos Philips Hue.

Al hacer clic en un elemento de equipo ya creado en la lista, se le dirige a su página de configuración :

- **Nombre del equipo** : nombre de su equipo Hue.
- **Objeto padre** : indica el objeto padre al que pertenece el equipo.
- **Categoría** : categorías de equipos (puede pertenecer a varias categorías).
- **Activar** : permite activar el equipo.
- **Visible** : hace que el equipo sea visible en el tablero.

- **Modelo** : ingrese el modelo de su equipo Philips Hue.
- **Puente** : indica el puente en el que está conectado el equipo.
- **Siempre en** : le dice a Jeedom que nunca marque la lámpara como inalcanzable.

>**A SABER**
>
>Siempre habrá un dispositivo llamado "Todas las lámparas" que corresponde al grupo 0 que existe en todos los casos.

Al hacer clic en la segunda pestaña, encontramos la lista de pedidos :

- **Nombre** : el nombre que se muestra en el tablero.
- **Icono** : le permite asignar un icono al comando.
- **Opciones** : le permite mostrar u ocultar ciertos comandos y / o registrar sus valores.
- **Configuraciones** : permite definir parámetros opcionales en los comandos info / numéricos.
- **Configuración avanzada** *(rueda dentada)* : muestra la ventana de configuración avanzada del comando.
- **Probar** : Se usa para probar el comando.
- **Botón -** : te permite borrar el comando.


# Grupo 0 (todas las lámparas)

El grupo 0 no se puede eliminar ni modificar. Él necesariamente controla todas las luces y también es él quien lleva las escenas.

De hecho, puedes crear "escenas" con Philips Hue. Estos deben hacerse absolutamente desde la aplicación móvil (imposible de hacer desde Jeedom). Después de agregar una escena, debe sincronizar absolutamente Jeedom con el puente *(simplemente guardando la configuración del complemento)*.

# Transition

Un pequeño comando peculiar que está diseñado para usarse en un escenario. Permite definir la duración en segundos de la transición entre el estado actual y el siguiente comando.

Por ejemplo, por la mañana, es posible que desee simular el amanecer en 3 minutos. En su escenario, solo tiene que llamar al comando de transición con ``180`` en el parámetro, luego llame al comando de color al color deseado.

# Animation

Las animaciones son secuencias de transición, actualmente hay :

- **amanecer** : te permite simular un amanecer. Puede tomar como parámetro :
    - **duración** : establecer duración, 720 s por defecto. Durante 5 minutos será necesario indicar ``duration=300``.
- **puesta de sol** : para simular una puesta de sol. Puede tomar como parámetro :
    - **duración** : establecer duración, 720 s por defecto. Durante 5 minutos será necesario indicar ``duration=300``.
- **luz_adaptativa** : te permite sincronizar la temperatura de color y el brillo con el sol (también cambian durante el día). Tenga cuidado de ingresar su latitud / longitud en jeedom

# Botón de control remoto

Aquí está la lista de códigos para los botones :

- 1002 para el botón de encendido
- 2002 para el botón de aumento
- 3002 para el botón minimizar
- 4002 para el botón de apagado

Lo mismo con XXX0 para la tecla presionada, XXX1 para la tecla mantenida y XXX2 para la tecla liberada.

Aquí están las secuencias para el botón de encendido, por ejemplo :

- Prensa corta : Cuando lo presionamos vamos a 1000 y cuando lo soltamos vamos a 1002
- Pulsación larga : Durante la prensa pasamos 1000, durante la prensa pasamos 1001, cuando lanzamos pasamos 1002

# FAQ

> **Tengo la impresión de que hay una diferencia en determinados colores entre lo que pido y el color de la bombilla.**
>
> Parece que la cuadrícula de colores de las bombillas tiene un desplazamiento, estamos buscando cómo corregir.

> **¿Cuál es la frecuencia de actualización? ?**
>
> El sistema recupera información cada 2 segundos.

> **Mi equipo (lámpara, interruptor, etc.) no es reconocido por el complemento, cómo hacerlo ?**
>
> Hay que :
> - describe el equipo que quieres que agreguemos con fotos y sus posibilidades y envíanos el debug log de la sincronización con el puente, todo mientras nos contactas con una solicitud de soporte

>**Agregué la historización de un pedido pero no funciona**
>
>Para problemas de rendimiento, debe reiniciar el demonio Philips Hue para que tenga en cuenta este cambio.

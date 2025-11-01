# Changelog Sonos controller

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto

- 
- 

# 26-04-2025

> Attention
> Rediseño significativo del complemento : 
>
> Requiere Jeedom 4.4.8
>
> Compatible con Debian 11 y 12!
>
> Ver también [este tema en la comunidad](https://community.jeedom.com/t/erreur-you-cannot-create-a-controller-instance-from-a-speaker-that-is-not-the-coordinator-of-its-group/128862) para más detalles

- Reescritura casi total del complemento, el demonio ha sido reescrito completamente en Python (en lugar de PHP))
- Compatible con Debian 11 y 12!
- .
- También es posible solicitar (re)sincronizar equipos, favoritos y listas de reproducción sin reiniciar el demonio desde el panel del equipo.
- 
- )
- Rediseño de la gestión de grupos (se eliminarán los comandos antiguos y se agregarán otros nuevos, consulte la documentación)). Es posible unirse o salir de un grupo, controlar la reproducción del grupo desde cualquier dispositivo del grupo sin preocuparse de quién es el controlador. .
- Adaptation sur la fonction Text-to-Speech (TTS), **il sera nécessaire d'adapter la configuration du partage SAMBA**.
- Mejoramiento : .
- Se optimizó la visualización de la portada que se está reproduciendo actualmente
- Optimización en la lectura de favoritos
- Ajout de la possibilité de désactiver la tuile pré-configurée : ...

- Agregar un comando de acción **TELEVISOR** para cambiar a la entrada *TELEVISOR* en equipos compatibles
- Agregar un comando de información **Modo de lectura** y acción **Elige el modo de lectura** que le permite seleccionar el modo de lectura entre las siguientes posibilidades: *Normal*, *Repite todo*, *Aleatorio y repetir todo*, *Aleatorio sin repetición*, *Repetir canción*, *Canción aleatoria y repetida*
- Agregar un pedido **Estado de lectura** que da el valor "bruto" del estado de lectura (el comando existente **Estado** da un valor traducido basado en el idioma configurado en Jeedom)
- Agregar comandos **Estado del grupo** (indica si el equipo está agrupado o no) y **Nombre del grupo** en el caso de que el equipo esté agrupado
- Agregar comandos **El don**, **Llevar afuera** Y **LED de estado** para comprobar el indicador de estado
- Agregar un pedido **Reproducir radio mp3** reproducir una radio mp3 directamente a través de una URL (accesible en Internet, por ejemplo))
- Agregar comandos **Sube el volumen** Y **Disminuir el volumen** de 1%
- Agregar un pedido **Transición de volumen** lo cual es muy útil para gestionar las transiciones de niveles de volumen. 3 modos posibles: *LINEAL*, *ALARMA*, *AUTO-REPRODUCCIÓN*. Ver documentación para más información.
- Agregar comandos **Estado de sonoridad**, **Volumen encendido**, **Volumen apagado**
- Agregar comandos **Estado de desvanecimiento**, **Desvanecerse**, **Desaparecer**
- Agregar comandos **Controles táctiles de estado**, **Controles táctiles activados**, **Controles táctiles desactivados**
- Agregar comandos **Balance** (acción/cursor) y **Estado del saldo** que gestiona el saldo según un valor entre -100 (extremo izquierdo) y 100 (extremo derecho))
- Agregar comandos **Tumbas** (acción/cursor) y **Estado serio** que gestiona los graves según un valor entre -10 y 10
- Agregar comandos **Triplicar** (acción/cursor) y **Estado de agudos** 
- Agregando el comando **Moda de fiesta** que te permite agrupar todos los Sonos juntos
- Agregando el comando **Estado del micrófono** 
- Agregar un comando de información **Batería** en Sonos equipado con una batería que muestra el porcentaje de carga de la batería
- Agregar un comando de información **Cargando** 
- Agregar un comando de información **Próxima alarma** en cada Sonos indicando la fecha de la próxima alarma programada en este altavoz

# 25/04/2024

- Actualización de documentación
- )
- )
- Se agregó Sonos Beam Gen 2

# 15/01/2024

- Preparándose para Jeedom 4.4
- Se agregó Sonos Move 2

# 24/08/2023

- Lámpara de pie Symfonisk de Ikea añadida

# 25/05/2023

- Se agregó la era de Sonos

# 18/10/2022

- Lista de comandos de actualización para Jeedom v4.3
- Añadido Sonos Ray

# 22/03/2022

- Soporte para el nuevo altavoz SYMFONISK

# 02/01/2022

- Se corrigió un error en el TTS

# 27/01/2022

- Optimizaciones V4.2

# 14/01/2022

- 

# 27/12/2021

- 

# 10/09/2021

- Adición de Sonos Five
- Agregar Sonos Roam
- Añadiendo Symfonisk Framework
- Actualización de volumen inmediata en caso de cambio por parte de Jeedom, gracias @Domochip

# 24/11/2020

- Nueva presentación de la lista de objetos
- Adición de la etiqueta "compatibilidad V4"

# 07/08/2020

- Compatibilidad con Sonos ARC

# 24/01/2020

- Soporte para Sonos One S22

# 01/11/2020

- Soporte para Sonos Move
- Optimización de código en caso de que Sonos no esté conectado

# 16/12/2019

- Corrección de errores si no se puede alcanzar un sistema de sonido

# 21/10/2017

- Mejora en la recuperación de TTS

# 15/10/2019

- Soporte de puerto de Sonos
- Script de instalación de dependencia mejorado

# 10/07/2019

- Mejora del script de instalación de dependencias (puede permitir corregir en algunos casos los problemas de TTS)

# 09/23/2019

- Optimisations

# 01/09/2019

- Soporte de altavoz de lámpara Ikea SYMFONISK

# 08/12/2019

- Soporte para altavoz de estantería Ikea SYMFONISK

# 23/04/2019

- Soporte para un sonos gen2

# 17/01/2019

- Se corrigieron errores en caso de que los sistemas de sonido se agregaran manualmente

# 01/15/2019

**IMPORTANTE SOLO FUNCIONA CON PHP7, VEA LA PÁGINA DE SALUD DE JEEDOM PARA SU VERSIÓN**

- Completa reescritura del complemento
- Soporte para la nueva API de Sonos
- Soporte para sistemas de sonido Beam y One
- 
- Optimizaciones globales

**Importante**

- Solo PHP7 compatible
- Algunas características tuvieron que ser eliminadas

# 2018

- Administración agregada de favoritos de sonos
- Soporte para Sonos One y Playbase
- Corrección de lengua con picotts
- Agregar un comando de "entrada de línea""
- 
- Carga optimizada de listas de reproducción
- Adición de picotts para la generación local de TTS
- Corrección del botón de reproducción / pausa al actualizar el widget.

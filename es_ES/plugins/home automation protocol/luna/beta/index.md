# Luna-complemento

# desde el 27/03/2023 nueva imagen Jeedom Luna
Puede realizar una actualización sin perder la copia de seguridad, etc. haciendo clic en "Actualizar módulo de recuperación"". Esto reiniciará tu Jeedom Luna pero no perderás tus configuraciones. Esto realizará cambios en el módulo de recuperación y arranque de la caja, lo que permitirá una mejor estabilidad de la caja.

# Preocupación de atención de Luna intermitente

Recibimos comentarios sobre un error al mostrar ciertas cajas de Jeedom Luna. (solo los enviados antes de 2023)
Lo sentimos y hemos informado a nuestro distribuidor de Domadoo.

Si logra conectarse a su Jeedom, inicie el complemento Luna (Complementos/Puerta de enlace de automatización del hogar/luna) y vaya a : 
  - Actualización del módulo de recuperación
Luego haz la recuperación en :
  - Recuperación (restablecimiento de fábrica)
Esto actualizará su Box completamente.

Si no tiene acceso a su caja, deje presionado el botón de reinicio de la caja durante más de 10 segundos; cuando este último se suelta, la caja debe parpadear, dejar que termine el proceso. Jeedom debería volver a estar operativo. Puede realizar el procedimiento anterior para una actualización completa.

Si no parpadea : 
 - Póngase en contacto con Domadoo a través del siguiente enlace; el equipo de Domadoo te proporcionará una etiqueta de devolución y te enviará un Luna correctamente flasheado :
https://www.domadoo.fr/rma

# Las características del complemento Luna :

> Reparación USB

En la versión del plugin Luna del 05/02/2023 se ha arreglado el puerto Zigbee, debes usar el puerto ttyUSBLUNA-Zigbee.
Para USB externos, esto también se soluciona automáticamente con el nombre o el número de serie.

> Actualización del módulo de recuperación

La actualización trae la última imagen en su lugar en el Luna; utilizará esta imagen durante una recuperación (botón de reinicio en el cuadro o botón de recuperación en el complemento).
Haga clic en el botón de recuperación; Luna descargará la última versión de su imagen y se reiniciará, los LED verdes en la carcasa de Luna parpadearán. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; el software de recuperación estará actualizado.

> Recuperación (restablecimiento de fábrica)

Durante un restablecimiento de fábrica, la caja se restaura a la configuración de fábrica de acuerdo con la imagen actualizada a través del botón que se muestra arriba. 
ATENCIÓN : Debes hacer una copia de seguridad de tu caja antes de esta operación porque perderás los datos de tu caja (excepto la copia de seguridad en la tarjeta SD)).

> LED

Puede a través del comando seleccionar tipo cambiar el color y la animación del LED (se puede apagar).

> Batterie

Puedes, a través de dos comentarios, conocer el porcentaje de batería y el tipo de alimentación de tu caja. (Carga, descarga, completa, etc).

> SD

Permite la gestión (formateo) de la tarjeta micro-SD que puede agregar a la caja, así como la transferencia a esta tarjeta SD de las copias de seguridad de Jeedom.

> Botones de encendido y reinicio (v1) El complemento Luna no está actualizado

- Reiniciar : menos de 1 segundo para un reinicio forzado de la caja.
- Reiniciar : más de 10 segundos para un restablecimiento de fábrica de la caja.
- Comida : más de 10 segundos para un apagado forzado del zorro con apagado de batería (primero debes quitar la fuente de alimentación para hacer esto).

> Botones de encendido y reinicio (v2 nueva imagen)

- Botón de reinicio : menos de 1 segundo para reiniciar el hardware de la caja Luna.

  
- Botón de encendido : entre 1 y 4 segundos para que la batería se apague o encienda (Naranja = apagado, Verde = Encendido).
- Botón de encendido : entre 5 y 9 segundos reinicio de la caja (azul intermitente al soltarla)).
- Botón de encendido : entre 10 y 20 segundos para que la caja se detenga (naranja intermitente al soltarse)).
- Botón de encendido : Más de 30 segundos para restablecer los valores de fábrica de la caja (rojo parpadeante cuando se suelta)).

> Lora (solo para cajas Jeedom Luna vendidas con el módulo Jeedom Lora)

- Detección automática del módulo y lanzamiento del reenviador de paquetes, en el host local de jeedom. Utilice el complemento LNS para instalar la aplicación; no es necesario hacer nada desde el complemento Luna, todo es automático.

# Próximamente, en breve, pronto : Punto de acceso, 4G (para Luna 4G), LORA (para Luna Lora)

> Punto de acceso (complemento Luna ALPHA))

En la parte Wifi del complemento, puede marcar la casilla Hotspot que le permitirá crear un punto de acceso wifi en su Box luna. (Funcionalmente el reenvío de DNS e IP (puente entre Ethernet y wifi)).

> El complemento luna le permite conectarse desde su luna a una red Wifi (con o sin contraseña).

Para hacer esto, vaya al complemento luna, luego seleccione el equipo Luna. Aquí puede activar y luego seleccionar el wifi que desea (2.4Ghz y 5Ghz), luego escriba la contraseña y guarde.

Por el momento, el complemento solo tiene en cuenta el acceso con DHCP.

> 4G (solo compatible con cajas Jeedom Luna 4G)

Detección automática de 4G interno a la caja. Vaya al complemento Luna y haga clic en 'Detectar el módulo LTE' si no ve los parámetros en la parte de configuración, solicite el código PIN y APN en la configuración del complemento Luna.
si se detecta 4G, se inicia un módulo de conexión en segundo plano que cambia automáticamente de Ethernet a 4G si es necesario (ping a 8.8.8.8), el complemento de SMS funciona al mismo tiempo que 4G en el Luna 4G.
Los ajustes se realizan en la configuración del complemento.

# Luna-complemento

# desde el 27/03/2023 nueva imagen Jeedom Luna
Puede realizar una actualización sin perder la copia de seguridad, etc. haciendo clic en "Actualizar módulo de recuperación"". esto reiniciará tu jeedom Luna pero no perderás tu configuración. esto hará cambios en el módulo de recuperación y arranque de la caja lo que permitirá una mejor estabilidad de esta.

# Preocupación de atención de Luna intermitente

Recibimos comentarios sobre un error de flasheo de algunos Lunas. (solo los enviados antes de 2023)
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

> USB fijo

En el plugin Luna del 02/05/2023 se ha arreglado el zigbee, debes usar el puerto ttyUSBLUNA-Zigbee. para usb externo, esto también se soluciona automáticamente con el nombre o el número de serie.

> Actualización del módulo de recuperación

La actualización trae la última imagen en su lugar en el Luna; utilizará esta imagen durante una recuperación (botón de reinicio en el cuadro o botón de recuperación en el complemento).
Haga clic en el botón de recuperación; el Luna descargará la última versión de su imagen y se reiniciará, los LED verdes en la caja del Luna parpadearán. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; el software de recuperación estará actualizado.

> Recuperación (restablecimiento de fábrica)

Durante un restablecimiento de fábrica, la caja se restaura a la configuración de fábrica de acuerdo con la imagen actualizada a través del botón que se muestra arriba. ATENCIÓN : debe hacer una copia de seguridad de su caja antes de esta operación porque perderá los datos de su caja (excepto la copia de seguridad en la SD).

> LED

Puede a través del comando seleccionar tipo cambiar el color y la animación del LED (se puede apagar).

> Batterie

Puede, a través de dos comentarios, tener el porcentaje de batería y el tipo de fuente de alimentación de su caja. (cargando, descargando, Lleno etc…).

> SD

Permite la gestión (formateo) de la tarjeta micro-SD que puede agregar a la caja, así como la transferencia a esta tarjeta SD de las copias de seguridad de Jeedom.

> Los botones de encendido y reinicio (v1)

- Reiniciar : Menos de 1 segundo reiniciar la caja de fuerza.
- Reiniciar : más de 10 segundos Reset Factory de la caja.
- Comida : más de 10 segundos apagado del fox force con apagado de la batería (debe haber quitado la fuente de alimentación para hacerlo)

> Botones de encendido y reinicio (v2 nueva imagen)

- Reiniciar : reinicio completo de la Luna
- Comida : más de 5 segundos apagado de la batería o encendido (naranja > apagado, verde encendido)
- Comida : más de 15 segundos reiniciando la caja. (destello azul al soltar)
- Comida : más de 40 segundos Parada de la caja. (Parpadeo naranja al soltar)
- Comida : más de 60 segundos reinicio de fábrica de la caja. (Flash rojo al soltar)

> Lora (solo para luna vendido conmigo Lodule lora de Jeedom)

- detección automática del módulo y lanzamiento del reenviador de paquetes, en el host local de jeedom. use el complemento LNS para instalar la aplicación. (no hay que hacer nada desde el plugin Luna todo es automatico)

# Próximamente, en breve, pronto : Punto de acceso, 4G (para Luna 4G), LORA (para Luna Lora)

> Punto de acceso (ALFA))

En la parte Wifi del complemento, puede marcar la casilla Hotspot que le permitirá crear un punto de acceso wifi en su Box luna. (El reenvío de DNS e IP (puente entre ethernet y wifi) funciona en él).

> El complemento luna le permite conectarse desde su luna a una red Wifi (con o sin contraseña).

Para hacer esto, vaya al complemento luna, luego seleccione el equipo Luna. Aquí puede activar y luego seleccionar el wifi que desea (2.4Ghz y 5Ghz), luego escriba la contraseña y guarde.

Por el momento, el complemento solo tiene en cuenta el acceso con DHCP.

> 4G (solo compatible con Luna 4G)

Detección automática de 4G interno a la caja, vaya al complemento para hacer clic en detectar el módulo LTE si no ve los parámetros en la parte de configuración, solicite el código pin y APN en la configuración del complemento Luna.
si 4G detecta el lanzamiento de un módulo de conexión en segundo plano que cambia automáticamente de ethernet a 4G si es necesario (ping a 8.8.8.8), el complemento de SMS funciona al mismo tiempo que 4G en el Luna 4G.
Los ajustes se realizan en la configuración del plugin.

# Luna-complemento

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

# Próximamente, en breve, pronto : Hotspot

> El complemento luna le permite conectarse desde su luna a una red Wifi (con o sin contraseña).

Para hacer esto, vaya al complemento luna, luego seleccione el equipo Luna. Aquí puede activar y luego seleccionar el wifi que desea (2.4Ghz y 5Ghz), luego escriba la contraseña y guarde.

Por el momento, el complemento solo tiene en cuenta el acceso con DHCP.

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

> Botones de encendido y reinicio

- Reiniciar : Menos de 1 segundo reiniciar la caja de fuerza.
- Reiniciar : más de 10 segundos Reset Factory de la caja.
- Comida : más de 10 segundos apagado del fox force con apagado de la batería (debe haber quitado la fuente de alimentación para hacerlo)

> Punto de acceso (ALFA))

En la parte Wifi del complemento, puede marcar la casilla Hotspot que le permitirá crear un punto de acceso wifi en su Box luna. (El reenvío de DNS e IP (puente entre ethernet y wifi) funciona en él).

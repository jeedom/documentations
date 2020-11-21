Complemento para interactuar con equipos de enlace ancho

Configuración del plugin 
=======================

Después de instalar el complemento, debe activarlo y asegurarse de que
buena instalación de dependencias.

> **Importante**
>
> No se recomienda cambiar el puerto

Inclusión de equipos 
=========================

Aller dans le menu Plugins &gt; Protocole Domotique &gt; Broadlink. Une
Una vez en la página, haga clic en MODO DE INCLUSIÓN. Lógicamente todo
Los productos Broadlink en su red serán reconocidos.

Configuración del equipo 
=============================

Selecciona uno de tus equipos. Si estos son productos tipo
Infrarrojo, un botón para aprender un comando aparece en la parte superior. Ahi tu
simplemente haga clic en él, luego tiene 5 segundos para aprender
un comando infrarrojo o 433 a su broadlink. Después de esto, el complemento
confirmará el éxito de la operación y creará el pedido asociado
solo necesitas nombrar. También hay un modo avanzado 
para detectar frecuencias Rf ligeramente diferentes.
Este modo funciona en dos etapas, una etapa de detección de frecuencia 
(o tienes que seguir presionando el botón o presionándolo varias veces).
Y un segundo paso similar al modo clásico.

> **Punta**
>
> Para evitar aprender lo que podría venir del medio ambiente
> (control remoto desde un vecino u otro), el broadlink en
> aprender VOLUNTARIAMENTE entra en un nivel de recepción muy
> débil, por lo que debes estar MUY cerca del broadlink para aprender un
> ordene especialmente si es una orden de 433Mhz.

Sincronizar 
============

En la pestaña Controles del equipo encontrarás el botón
Sincronizar Si tiene más de un Broadlink, puede
transferir comandos aprendidos de un enlace ancho a otro.

> **Punta**
>
> Funciona desde un rm-pro a un mini o viceversa.

Puede elegir los pedidos para transferir, así como los enlaces generales
a la que quieres transferirlos. (El nombre del pedido será
obviamente convergente (TV ENCENDIDO, ventilador apagado, etc.)

> **Punta**
>
> Si agregó manualmente su dispositivo porque no se detectó automáticamente. El MAC para informar es 
> invertir la dirección MAC en paquete de dos en minúsculas sin : ejemplo AA:BB:CC:DD:EE
> se convierte en eeddccbbaa

> **Punta**
>
> Para algunos RM Pro, incluidas las versiones 4. El dispositivo no debe estar vinculado a la nube.
> De lo contrario, ya no se puede controlar localmente. Para hacer esto, debe agregar el dispositivo usando la aplicación.
> Pero no continúe una vez que se haya agregado a su wifi (no lo agregue a una habitación ni a nada). Tiene que parar
> en ese momento.

Registro de cambios detallado :
<https://github.com/jeedom/plugin-broadlink/commits/stable>

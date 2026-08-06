Presentación 
============

Este complemento le permite administrar tarjetas GCE IPX800.
Inicialmente, este complemento se creó para conectar GCE IPX800s.

Datos visibles en el Tablero : 
-----------------------------------

-   ''entradas analógicas''

-   ''entradas digitales''

-   ''los relevos''

-   ''contadores de pulso''

Instalación / Configuración 
========================

Ahora configuraremos un dispositivo. Para hacerlo, haga clic en
en '' Complementos / Protocolo de automatización del hogar / IPX800''

Luego haga clic en el botón en la esquina superior izquierda '' Agregar equipo''

Luego ingrese el nombre del equipo (ej. IPX 1).

Luego defina :

-   ''Objeto padre''

-   ''Categoría '' (opcional)

-   ''Activar '' (marca, de lo contrario el equipo no será utilizable)

-   ''Visible '' (opcional si no desea que sea visible en
    el tablero de instrumentos)

-   ''Dirección IP''

-   ''Port''

-   ''Compte''

-   ''Contraseña''

Frecuencia de actualización 
-----------------------------

Para entradas y contadores analógicos, los datos son
recuperado por el complemento cada minuto. No es possible
tener una frecuencia más alta. Por lo demás, si el modo push es
activado, la actualización es casi instantánea.

Para activar el empuje, haga clic en

![bouton config push](../images/bouton_config_push.jpg)

Luego baja y haz clic en Aplicar.

Comportamiento con la aplicación móvil 
--------------------------------------

Por defecto, aquí está el comportamiento :

-   ''L'ip800''

Todos los comandos están configurados.

-   ''entradas analógicas''

Todos los comandos son visibles por defecto y el tipo depende de
sonda elegida.

-   ''entradas digitales''

Los pedidos se consideran luces.

-   ''los relevos''

Los pedidos se consideran luces.

-   ''contadores de pulso''

Los pedidos se consideran tipos genéricos.

Cabe señalar que encontraremos en la aplicación los comandos para
desde el momento en que están configurados, incluso si no lo están
marcado como visible. Para ocultarlos, debes elegir en
"Configuración de comando "⇒" Tipo genérico "⇒" Desprecio
este comando".

Algunas capturas de pantalla 
=======================

![ipx800 screenshot1](../images/ipx800_screenshot1.jpg)

![ipx800 screenshot2](../images/ipx800_screenshot2.jpg)

![ipx800 screenshot3](../images/ipx800_screenshot3.jpg)

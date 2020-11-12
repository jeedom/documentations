Presentación 
============

Este complemento le permite administrar tarjetas GCE Ecodevice.

Inicialmente, este complemento se creó para conectar dispositivos ecológicos GCE.

Datos visibles en el Tablero : 
-----------------------------------

-   '''Contadores de teleinformación '''

![ecodevice screenshot2](./images/ecodevice_screenshot2.jpg)

-   '''contadores de pulso'''

![ecodevice screenshot3](./images/ecodevice_screenshot3.jpg)

Frecuencia de actualización 
-----------------------------

El complemento actualiza estos datos de 2 maneras :

El complemento recupera los datos cada minuto para todos
los contadores. No es posible tener una frecuencia más alta.

Para caudales, consumo instantáneo y potencia aparente a
la recolección es realizada por un demonio de acuerdo con la frecuencia establecida
nivel de complemento. Tenga en cuenta que una gran disminución genera una gran
sobrecargando su servidor jeedom.

Instalación / Configuración 
========================

Ahora configuraremos un dispositivo. Para hacerlo, haga clic en
en '' 'Complementos / Protocolo de automatización del hogar / Eco-dispositivo'''.

Luego haga clic en el botón en la esquina superior izquierda "'' 'Agregar un
équipement'''".

Luego ingrese el nombre del equipo (ej. Ecodevice 1).

Luego defina :

-   '''Objeto padre'''

-   '''Categoría '' '(opcional)

-   '''Active '' '(verifique, de lo contrario el equipo no será utilizable)

-   '''Visible '' '(opcional si no desea que sea visible en
    el tablero de instrumentos)

-   '''Dirección IP'''

-   '''Port'''

-   '''Compte'''

-   '''Contraseña'''

![ecodevice screenshot1](./images/ecodevice_screenshot1.jpg)

Encontrará todos los elementos de la tarjeta en el menú en
izquierda haciendo clic en el icono.

Aquí está la página de configuración del contador. Mientras el tipo de contador
no está definido, no se crean comandos.

![ecodevice screenshot4](./images/ecodevice_screenshot4.jpg)

Aquí está la página de configuración para una entrada de teleinformación. Mientras el
tipo de contrato no está definido, no se crean pedidos.

![ecodevice screenshot5](./images/ecodevice_screenshot5.jpg)

Instalación / Configuración 
========================

Este complemento no requiere ningún requisito previo de instalación.

Preguntas frecuentes 
===

En el menú de la izquierda, haga clic en el siguiente icono para tener
acceso : ![el](./images/acces_sous_indicateur.jpg)

Por defecto es cada minuto. Es posible configurar
empujar manualmente el dispositivo ecológico. Para débitos, consumo
el poder instantáneo y aparente se puede recoger más
con frecuencia dependiendo del demonio.

Haga clic en el icono a la izquierda del nombre de la tarjeta en la lista de
gauche.

Este complemento es gratuito para que todos puedan simplemente disfrutarlo. Si
aún quieres donar al desarrollador del complemento, gracias
mandame un mensaje
privé](https://www.jeedom.com/forum/memberlist.php?mode = viewprofile & u = 698)
en el foro.

Es completamente posible a través de
[Github](https://github.com/guenneguezt/plugin-ecodevice)

Para calcular el flujo de combustible en una hora de operación,
saber la marca de su inyector de combustible. Por eso, tu
encuentre la información en [el documento
suivant](http://fr.cd.danfoss.com/PCMPDF/DKBDPD060A204.pdf).

El valor dado está en USgal / Hora con la correspondencia en Kg / H.

Para la densidad del combustible, podemos tomar 820 Kg / m³ y una presión de 7
bar.

Entonces, si tiene una boquilla marcada 0.65S : 2,67 kg / h (dependiendo de
Mesa Danfoss). 2.67x0.82 = 2.1894 litros por hora. Esto le da un
Indicación "aproximada" de su consumo.

Sí, no fue escrito por mí, pero tiene el mérito de existir.
Gracias al editor.
<http://blog.domadoo.fr/guides/jeedom-guide-dutilisation-plugin-ecodevice/>

Cambios 
=========

> **Advertencia**
>
> Detalles completos de las actualizaciones en [Historial
> Commit](https://github.com/guenneguezt/plugin-ecodevice/commits/master)

Lista de cambios importantes en la versión actual :

-   Eliminación del enlace de Paypal para cumplir con Jeedom V3.1

Desarrollos antiguos :

-   Adición de una clave API específica al complemento

-   Modificación para compatibilidad con Jeedom V3

-   No más seguimiento de versiones

-   Corrección para firmware 1.04.82

-   Corrección trifásica

-   Demonio

-   Adición de la generación automática e inteligente de los comandos de
    Teleinfo

-   Cambiar la unidad de amperios a A

-   Agregar demonio para un valor rápidamente variable

-   Ordenar por tipo de medidor (agua, gas, electricidad, combustible)

-   Adición de max y min para widget

-   Widget predeterminado

-   Mejora de preguntas frecuentes

-   Comando de reinicio de corrección.

-   Modificación para recrear los subcomandos si
    ya no existe.

-   Corrección del comando de reinicio

-   Adición de comando para reiniciar

-   Detección de xml corrupto.

-   Actualización de entradas analógicas, incluso si el valor no cambia
    para gráficos.

-   Adición de intensidad suscrita.

-   Intensidad máxima.

-   Adición del contador diario en el mundo sin combustible.

-   Modificación de Cron para mayor autonomía.

-   Modificación de la extensión del logo.

-   Compatibilidad Imperihome

-   Retiro del retiro del equipo durante la desactivación
    plugin

-   Corrección en comparación con el nuevo núcleo.

-   Eliminación de la información `updatetime`.

-   Adición de datos de evolución (variación por minuto).

-   Agregar una opción de precios para presentar solo los pedidos
    correspondiente a ella.

-   Agregar enlace para mostrar opciones.

-   Corrección cron doble.

-   Suma del número de pulsos por minuto.

-   Reactivar hasta 3 veces en caso de indisponibilidad
    del ecodispositivo.

-   Adición de información de `estado`.

-   No actualice los datos si no cambia.

-   Problema ZIP.

-   Inicialización.



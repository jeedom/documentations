Presentación
============

Este complemento le permite administrar tarjetas GCE Ecodevice.

Inicialmente, este complemento se creó para conectar dispositivos ecológicos GCE.

Datos visibles en el Tablero :
-----------------------------------

-   '''Contadores de teleinformación '''

![ecodevice screenshot2](../images/ecodevice_screenshot2.jpg)

-   '''contadores de pulso'''

![ecodevice screenshot3](../images/ecodevice_screenshot3.jpg)

Frecuencia de actualización
-----------------------------

El complemento actualiza estos datos de 2 maneras :

El complemento recupera los datos cada minuto para todos
los contadores. No es posible tener una frecuencia más alta.

Para caudales, consumo instantáneo y potencia aparente a
la recopilación la realiza un demonio de acuerdo con la frecuencia configurada
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

![ecodevice screenshot1](../images/ecodevice_screenshot1.jpg)

Encontrará todos los elementos de la tarjeta en el menú en
izquierda haciendo clic en el icono.

Aquí está la página de configuración del contador. Mientras el tipo de contador
no está definido, los pedidos no se crean.

![ecodevice screenshot4](../images/ecodevice_screenshot4.jpg)

Aquí está la página de configuración para una entrada de teleinformación. Mientras el
el tipo de contrato no está definido, los pedidos no se crean.

![ecodevice screenshot5](../images/ecodevice_screenshot5.jpg)

FAQ
===

En el menú de la izquierda, haga clic en el siguiente icono para tener
acceso : ![el](../images/acces_sous_indicateur.jpg)

Por defecto es cada minuto. Es posible configurar
empujar manualmente el dispositivo ecológico. Para débitos, consumo
el poder instantáneo y aparente se puede recoger más
con frecuencia dependiendo del demonio.

Haga clic en el icono a la izquierda del nombre de la tarjeta en la lista de
gauche.

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

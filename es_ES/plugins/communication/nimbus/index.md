Nimbus 
======

Descripción 
-----------

Este complemento permite controlar y tener toda la información de su
Nimbus.

![nimbus screenshot1](./images/nimbus_screenshot1.jpg) ![nimbus
screenshot2] (../ images / nimbus_screenshot2.jpg) ![nimbus
screenshot3] (../ images / nimbus_screenshot3.jpg)

Configuración 
-------------

### Configuración del complemento Jeedom : 

a. Instalación / Creación


Para usar el complemento, debe descargar, instalar y
activarlo como cualquier complemento de Jeedom.

Después de eso, deberá ingresar sus credenciales (guiño + cuenta
api):


![config plugin](./images/config_plugin.jpg)



Vaya al menú de complementos / Comunicación, **encontrarás el
complemento de nimbus :**

Llegará a la página que enumerará su equipo (puede
tener varios nimbos) y que te permitirán crearlos


![nimbus screenshot4](./images/nimbus_screenshot4.jpg)


**Haga clic en el botón Agregar :**

Luego llegará a la página de configuración de su nimbus :

![config nimbus](./images/config_nimbus.jpg)

En esta página encontrarás varias secciones. :


-   **Principal**


En esta sección encontrará todas las configuraciones de jeedom. Un
conoce el nombre de tu equipo, el objeto que deseas
asócielo, la categoría (preferiblemente multimedia), si lo desea
el equipo está activo o no, y finalmente si quieres que esté
visible en el tablero.

-   **Configuración**

Esta sección es útil si y solo si tiene varias
nimbo Deberá ingresar el número de equipo (1, 2 o 3 por
ejemplo). Puede dejar este campo en blanco si solo tiene uno
nimbus que seguramente será tu caso.


-   **Diseño**

Esta sección le permitirá personalizar la visualización de su nimbus
en el tablero. Puedes elegir entre varios fondos. Vosotras
También puede elegir el color de la aguja y el color del texto.


![nimbus screenshot6](./images/nimbus_screenshot6.jpg)

-   **Información**

![infonimb](./images/infonimb.jpg)


Esta sección se completará cuando guarde su
equipo Encontrará información real en su nimbus
(número de serie, dirección mac, nombre, id)

-   **Comandos**

No tienes nada que hacer en esta sección.. Se crearán pedidos
automáticamente.

-   Refrescar: botón para actualizar el widget si es necesario

-   Pantalla 1 : Información mostrada en la pantalla 1

-   Pantalla 2 : Información mostrada en la pantalla 2

-   Pantalla 3 : Información mostrada en la pantalla 3

-   Pantalla 4 : Información mostrada en la pantalla 4

-   Posición 1 : Información sobre la posición de la
    pantalla 1

-   Posición 2 : Información sobre la posición de la
    pantalla 2

-   Posición 3 : Información sobre la posición de la
    pantalla 3

-   Posición 4 : Información sobre la posición de la
    pantalla 4

-   Acción de pantalla 1 : Comando de acción que permite en un escenario de
    elige la posición y / o el texto de la pantalla 1

-   Acción de pantalla 2 : Comando de acción que permite en un escenario de
    elija la posición y / o el texto de la pantalla 2

-   Acción de pantalla 3 : Comando de acción que permite en un escenario de
    elija la posición y / o el texto de la pantalla 3

-   Acción de pantalla 4 : Comando de acción que permite en un escenario de
    elige la posición y / o el texto de la pantalla 1

-   Screen Action All : Comando de acción que permite en un escenario de
    elija la posición y / o el texto de todas las pantallas

-   Acción de pantalla de frase : Comando de acción que permite en un escenario de
    elija la posición y / o el texto de todas las pantallas (una oración de
    Máximo 4 palabras divididas en las 4 pantallas)

-   Demo : Acción para lanzar una demostración técnica en su
    nimbus

...

Las informaciones 
----------------

### Información en el tablero : 

![nimbus screenshot1](./images/nimbus_screenshot1.jpg)

El widget se divide en 4 diales que representan los 4 diales de su
nimbus.

-   La aguja indica la posición de la aguja de la pantalla.
    corresponsal de tu nimbo

-   El texto es el texto que se muestra en tu nimbus. Este texto es
    se puede hacer clic para llegar a esta pantalla :


![nimbus screenshot5](./images/nimbus_screenshot5.jpg)


Esta pantalla le permite cambiar manualmente el texto, la posición de
la aguja o ambas. Te permite ver cuándo cambias el valor
ya se muestra.

...

Las acciones 
-----------

### Acciones accesibles a través del escenario : 

Se puede acceder a varias acciones a través del escenario :

![commandes](./images/commandes.jpg)

La acción de demostración es independiente y lanza la demostración técnica..

Todas las demás acciones funcionan de la misma manera según el principio.

**Este es un comando de mensaje que le permite pasar dos parámetros:**

-   Título : un número entre 0 y 360 correspondiente a la posición de
    la aguja

-   Mensaje : el mensaje a mostrar

**Los dos son separables, lo que significa que puedes :**

-   Envíe una posición dejando el campo de mensaje vacío o
    dejando * mensaje*

-   Enviar un mensaje dejando el campo de título en blanco o dejando
    *titulo*

-   Envíe una posición y un mensaje completando ambos

**Hay un pedido por pantalla, un pedido de todos, un pedido
Frase :**

-   Pantalla : permite actuar en la pantalla correspondiente

-   Todos : hagamos lo mismo en todas las pantallas

-   Frase : comando especial que dividirá el mensaje en 4 palabras
    que se mostrará en cada pantalla (si una palabra excede 8
    caracteres se cortarán si la oración tiene más de 4 palabras
    será cortado)

![Scenario](./images/Scenario.jpg)


![Scenario2](./images/Scenario2.jpg)


![Scenario3](./images/Scenario3.jpg)


**¿CÓMO PUEDO MOSTRAR PERMANENTEMENTE INFORMACIÓN DE MI
Automatización**

Si desea mostrar continuamente información de su domótica.
Cree un escenario programado cada 5 minutos (por ejemplo).

![Scenario4](./images/Scenario4.jpg)

En este ejemplo solo tienes que reemplazar lo que hay entre gancho
por sus ordenes. Y cada 5 minutos tus pantallas se actualizarán
con los valores correctos

...

Preguntas frecuentes 
---

El sistema recupera información cada hora.. Usted puede
haga clic en el comando Actualizar para actualizar manualmente.

Asegúrese de haber creado el archivo de configuración guardando su información en
la configuración general del complemento.

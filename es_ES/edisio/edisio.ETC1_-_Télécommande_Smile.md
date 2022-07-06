# Edisio ETC1

**El módulo**

![etc1.module 1](images/etc1/etc1.module-1.jpg)

![etc1.module 2](images/etc1/etc1.module-2.png)

**El visual de Jeedom**

![etc1.vue default](images/etc1/etc1.vue-default.jpg)

## Resumen 

Les télécommandes “Smile” ont un canal, elles sont idéales pour la table de chevet, salle de bain et surtout pour les enfants, car celles-ci sont très robustes grâce au matériau utilisé. Ultra simples et à la fois “fun” elles ont pour but d'être pratiques dans l'habitat. Existen en tres colores diferentes.

Se conectan fácilmente a los diferentes receptores y, por lo tanto, pueden controlar las luces de encendido / apagado, luces variables, persianas, puertas, puertas de garaje. Disponible en 3 colores.

Además, es posible la interacción con otros protocolos, puede interactuar con los receptores de la marca Edisio, con Jeedom, pero también con cualquier receptor Z-Wave en su red.

## Fonctions

-   Modo de uso : Iluminación, dimmer
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de módulo : Transmisor Edisio
-   Suministro : 3VDC (batería de litio CR2032)
-   Canales : 1
-   Protocolo de radio : 868.3 MHz
-   Rango en campo libre : 100 millones
-   Temperatura de funcionamiento : -10 ° C + 50 ° C
-   Dimensiones : 65x18mm
-   Grado de protección : IP64

![etc1.dimmension](images/etc1/etc1.dimmension.png)

## Datos del módulo

-   Hacer : Edisio Smart Home
-   Nombre : ETC1
-   Referencia : P01 / Y01 / L01

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

### Diagrama de funciones

Así es como funciona el control remoto :

![etc1.diagramme](images/etc1/etc1.diagramme.jpg)

### Reemplazo de la batería

Para reemplazar la batería de su control remoto, este es el procedimiento a seguir :

![etc1.remplacement pile](images/etc1/etc1.remplacement-pile.jpg)

## Asociación del control remoto con Jeedom

La asociación de un transmisor Edisio es simple y automática. Simplemente presione el botón en su control remoto.

![Comandos](images/etc1/etc1.touche-c.jpg)

Una vez, su equipo asociado, debería obtener esto :

![etc1.general](images/etc1/etc1.general.jpg)

### Commandes

Una vez que se crea su equipo, debe obtener los comandos asociados con el módulo :

![Comandos](images/etc1/etc1.commandes.jpg)

Aquí está la lista de comandos :

-   bt01 : Es el comando que te permite interactuar con el botón 1
-   Batería : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, habrá diversa información disponible :

![Comandos](images/etc1/etc1.informations.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micro-módulo
-   Batería : Indica el estado de la batería de los módulos de batería
-   Estado : Devuelve el estado del módulo

### Utilisation

Una vez que su control remoto está configurado, puede con el plugin Jeedom Scenario, interactuar con su control remoto en Jeedom y su equipo.

> **Nota**
>
> El control remoto con retroalimentación de estado binario.

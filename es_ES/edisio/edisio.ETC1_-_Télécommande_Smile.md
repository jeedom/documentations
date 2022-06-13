# Edisio ETC1

**El módulo**

![etc1.module 1](images/etc1/etc1.module-1.jpg)

![etc1.module 2](images/etc1/etc1.module-2.png)

**La imagen de Jeedom**

![etc1.vue default](images/etc1/etc1.vue-default.jpg)

## Resumen 

Les télécommandes “Smile” ont un canal, elles sont idéales pour la table de chevet, salle de bain et surtout pour les enfants, car celles-ci sont très robustes grâce au matériau utilisé. Ultra simples et à la fois “fun” elles ont pour but d'être pratiques dans l'habitat. Vienen en tres colores diferentes.

Se conectan fácilmente a los distintos receptores y, por lo tanto, pueden controlar la iluminación On/Off, la iluminación variable, las persianas, las cancelas, las puertas de garaje. Disponible en 3 colores.

Además, es posible la interacción con otros protocolos, puede interactuar con receptores de la marca Edisio, con Jeedom, pero también con cualquier receptor Z-Wave de su red.

## Fonctions

-   Modo de uso : Iluminación, Atenuador
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de mod : Transmisor Edisio
-   Alimento : 3VDC (batería de litio CR2032)
-   Canales : 1
-   Protocolo de radio : 868,3 MHz
-   Alcance en campo abierto : 100M
-   Temperatura de funcionamiento : -10°C +50°C
-   Dimensiones : 65x18mm
-   Grado de protección : IP64

![etc1.dimmension](images/etc1/etc1.dimmension.png)

## Datos del módulo

-   Marca : Hogar inteligente Edisio
-   Apellido : ETC1
-   Referencia : P01/Y01/L01

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

### Diagrama de operación

Así es como funciona el control remoto :

![etc1.diagramme](images/etc1/etc1.diagramme.jpg)

### Cambio de batería

Para reemplazar la batería en su control remoto, este es el procedimiento a seguir :

![etc1.remplacement pile](images/etc1/etc1.remplacement-pile.jpg)

## Asociación del control remoto a Jeedom

La asociación de un transmisor Edisio se realiza de forma sencilla y automática. Simplemente presione el botón en su control remoto.

![Pedidos](images/etc1/etc1.touche-c.jpg)

Una vez que su equipo esté asociado, debería obtener esto :

![etc1.general](images/etc1/etc1.general.jpg)

### Commandes

Una vez creado su equipo, debe obtener los comandos asociados con el módulo :

![Pedidos](images/etc1/etc1.commandes.jpg)

Aquí está la lista de comandos :

-   bt01 : Este es el comando que te permite interactuar con el botón 1
-   Batería : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, estará disponible diversa información :

![Pedidos](images/etc1/etc1.informations.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micromódulo
-   Batería : Indica el estado de la batería de los módulos de batería
-   Estado : Devuelve el estado del módulo

### Utilisation

Una vez que su control remoto esté configurado, puede con el complemento Jeedom Scenario, interactuar con su control remoto en Jeedom y su equipo.

> **Nota**
>
> El control remoto tiene una retroalimentación de estado binaria.

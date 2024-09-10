# Complemento LaMetric

Complemento para mostrar notificaciones / información en LaMetric.

# Configuración del plugin

Una vez que se instala el complemento, es necesario crear una "aplicación indicadora" en el sitio de LaMetric :

-   1 \. Se rendre à l'adresse : <https://developer.lametric.com>
-   2 \. Crear una "APLICACIÓN INDICADORA" :

![lametric1](./images/lametric1.png)

-   3 \. Configure un icono, un nombre y seleccione **Empuje** en "Comunicación típica" :

![lametric2](./images/lametric2.png)

-   4 \. Dé un nombre y una descripción a su aplicación y marque "Aplicación privada" y luego haga clic en "Guardar" :

![lametric3](./images/lametric3.png)

-   5 \. Publique la aplicación y luego instálela en su LaMetric usando la aplicación móvil.

Una vez que se publica la aplicación, tiene información esencial para configurar el complemento.

![lametric4](./images/lametric4.png)

A continuación, puede crear nuevos equipos en Jeedom y completar los campos solicitados :

![lametric5](./images/lametric5.png)

# Usando el complemento

2 pedidos se crean automáticamente al agregar equipo :

-   **Mensaje** : Permite el envío de mensajes. El comando de tipo de mensaje contiene 2 campos :
    - **ID de icono** : Corresponde al número del icono deseado (no poner el hash ``#``). La liste des icônes disponibles est consultable à cette adresse : <https://developer.lametric.com/icons>).
    - **Texto** : Corresponde al texto que desea mostrar.
-   **Vaciar** : Se utiliza para restablecer la pantalla a vacía ("JEEDOM" se registra).

Es posible enviar más mensajes en un solo envío separando los iconos y los textos por el carácter : ``|``.

Aquí hay, por ejemplo, un escenario que envía 4 información diferente a la vez :

![lametric6](./images/lametric6.png)

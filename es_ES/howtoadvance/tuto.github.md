Este tutorial te presenta :

-   Crea una cuenta de GitHub

-   Jeedom Core Fork o Documentación

-   Editar uno o más archivos

-   Enviar un cambio

-   Actualizando tu tenedor

Para permitirle contribuir a Jeedom, deberá
proponer cambios (PR : Solicitud de extracción).

Crea una cuenta de GitHub 
===========================

Discutiremos en este tutorial cómo crear una cuenta de GitHub,
para poder informar errores (problema en el lenguaje GitHub), incluso
incluso proponer correcciones (Pull Request o PR en lenguaje github)
para todo el proyecto Jeedom, incluidos sus complementos gratuitos o el
documentación o cualquier otro proyecto github que
quisiera participar.

Se rendre sur <https://github.com> y haga clic en el botón Registrarse.
Por lo tanto, debe estar en una página como la siguiente y
por lo tanto, debe ingresar un apodo, un correo electrónico y una contraseña y luego
haga clic en **Crear una cuenta**

![tuto.github1](images/tuto.github1.png)

Entonces llega a la segunda página como se muestra a continuación y no cambia
nada, haces clic **Continúa**

![tuto.github2](images/tuto.github2.png)

Está registrado y en la página de configuración de opciones de su
cuenta Te aconsejo que compruebes la dirección de correo electrónico para que puedas
recupere su cuenta si olvida su contraseña, por ejemplo, pero
también para poder enviar cambios. Os dejo
descubra también las otras opciones si tiene curiosidad.

![tuto.github3](images/tuto.github3.png)

Jeedom Core Fork o Documentación 
==========================================

**Tenedor - Por qué - Cómo**

Fork está copiando un proyecto en su espacio github, para que pueda
modificar el código y los archivos de documentación y luego enviar
una solicitud de extracción para el proyecto original, que luego será estudiado por el
desarrollador (s) de dicho proyecto

Ahora que tiene una cuenta de Github y ha iniciado sesión
con tu dirección de correo electrónico verificada, si vas aquí
<https://github.com/jeedom/core> vous êtes sur le projet jeedom, à
a la derecha hay un botón de horquilla que le permite copiarlo en su
espacio github.

![tuto.github4](images/tuto.github4.png)

Editar uno o más archivos 
---------------------------------------

En mi caso, por lo tanto, quiero insertar una modificación en el archivo
*history.class.php* Este archivo se encuentra en el núcleo de Jeedom y más
precisamente aqui : núcleo / clase /

1. Así que estamos en mi depósito (TaGGoU91 / core) que se indica como
    ser un tenedor de Jeedom / core

2. Entonces vamos a / core / class (el primer núcleo está en negrita, es
    el repositorio donde estoy (núcleo, ver Pequeño 1)

3. Entonces tenemos nuestro archivo *history.class.php* - Hacemos clic en el
    fichier

![tuto.github5](images/tuto.github5.png)

1. Entonces estamos en nuestro archivo

2. Haga clic en el lápiz para ingresar la modificación

![tuto.github6](images/tuto.github6.png)

Para buscar el archivo, colóquese en el bloque
texto del archivo que acabamos de abrir en modo edición con el lápiz y
hacemos un "Ctrl + F" para activar la búsqueda. Te pegas o
especifique el texto que está buscando (un elemento significativo y un
solo línea, no un bloque completo a la vez). Confirme con "Enter" para
comenzar la búsqueda.

> **Punta**
>
> Si no hace clic en la ventana que contiene el texto o el código
> que está buscando, se abrirá la búsqueda del navegador y
> en mi caso, en Google Chrome, no sabe cómo hacer la investigación
> en código o documentación directamente.

1. El campo de investigación, sí, es bastante escaso como la información, el
    la línea copiada es mucho más grande;).

![tuto.github7](images/tuto.github7.png)

1. En amarillo, este es el resultado de la investigación

2. En azul, lo que acabo de seleccionar y lo que quiero
    modificar / reemplazar con mi código. Mi modificacion

![tuto.github14](images/tuto.github14.png)

Entonces borro el bloque y lo reemplazo.

Luego en la parte inferior encontramos esto : 1. Indicamos un título
explícito si es posible 2. Ingresamos una descripción un poco más precisa
(en mi caso, sería demasiado largo, el enlace al foro será más
hablando) 3. Nos aseguramos de que esté marcado así 4. Nos comprometemos =
Envía el cambio

![tuto.github8](images/tuto.github8.png)

Enviar un cambio 
--------------------------

El **cometer** hecho arriba solo se refiere a la bifurcación del proyecto en
tu espacio GitHub. Para enviar cambios al proyecto original,
debe realizar una PR (solicitud de extracción)

1. Hacemos clic en la pestaña Solicitud de extracción

2. Nueva solicitud de extracción (relaciones públicas para amigos)

![tuto.github9](images/tuto.github9.png)

1. El RP lanzará una comparación entre la base de libertad con su
    repositorio (el tenedor).

2. Esto indica las modificaciones (la primera es porque yo
    estoy actualizado desde la libertad, el segundo en relación con el
    Cambio de la última función de cambio de estado, ¡perfecto!)

3. El viejo código

4. El nuevo código

5. Creamos la solicitud de extracción (PR)

![tuto.github10](images/tuto.github10.png)

Es importante explicar claramente los cambios presentados para que el
los desarrolladores originales del proyecto entienden y pueden validar su
demande.

1. Hacemos clic en los tres puntos pequeños

2. Copiamos la información que ingresamos previamente

3. Lo mismo, copiamos (de ahí el uso de ... en el paso 1 para
    evitar reescribir)

4. Hacemos clic en Crear solicitud de extracción

![tuto.github11](images/tuto.github11.png)

**Se acabó.** Tienes que esperar hasta que tu RP sea validado.

NB: Solo usuarios que presionan directamente a Jeedom que
puede validar el PR.

Para asegurarse de que su cambio esté en la lista, usted
puede hacer clic en Solicitudes de extracción

![tuto.github12](images/tuto.github12.png)

Obtenemos la lista de PR en espera de validación. Podemos ver el
la nuestra

![tuto.github13](images/tuto.github13.png)

Actualizando tu tenedor 
============================

Para completar

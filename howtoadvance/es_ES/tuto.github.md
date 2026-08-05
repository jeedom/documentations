# Tutorial de Github

Este tutorial te presenta :

-   Crea una cuenta de GitHub
-   Jeedom Core Fork o Documentación
-   Editar uno o más archivos
-   Enviar un cambio
-   Actualizando tu tenedor

Para permitirle contribuir a Jeedom, deberá proponer las modificaciones (PR : Solicitud de extracción).

# Crea una cuenta de GitHub

Discutiremos en este tutorial cómo crear una cuenta de GitHub, para poder informar errores (problema en el idioma de GitHub), o incluso proponer correcciones (Solicitud de extracción o PR en el lenguaje de Github) para todo el proyecto Jeedom, incluidos sus complementos o documentación gratuitos, o cualquier otro proyecto de github en el que le gustaría participar.

Ir [Github](https://github.com) y haga clic en el botón de registro. Por lo tanto, debe estar en una página similar a la siguiente y, por lo tanto, debe ingresar un apodo, un correo electrónico y una contraseña y luego hacer clic en **Crear una cuenta**

![tuto.github1](images/tuto.github1.png)

Entonces llega a una segunda página como se muestra a continuación y no cambia nada, hace clic en **Continúa**

![tuto.github2](images/tuto.github2.png)

Estás registrado y en la página de configuración de las opciones de tu cuenta. Le aconsejo que verifique la dirección de correo electrónico para poder recuperar su cuenta si olvida su contraseña, por ejemplo, pero también para poder enviar modificaciones. También te dejo descubrir las otras opciones si tienes curiosidad.

![tuto.github3](images/tuto.github3.png)

# Jeedom Core Fork o Documentación

**Tenedor - Por qué - Cómo**

Fork es copiar un proyecto en su espacio github, para poder modificar el código y los archivos de documentación, luego enviar una solicitud de extracción al proyecto original, que luego será estudiado por el desarrollador (s) de dicho proyecto

Ahora que tiene una cuenta de Github y está identificado con su dirección de correo electrónico verificada, si va [aquí](https://github.com/jeedom/core) estás en el proyecto jeedom, a la derecha hay un botón de horquilla que te permite copiarlo en tu espacio github.

![tuto.github4](images/tuto.github4.png)

## Editar uno o más archivos

En mi caso, por lo tanto, quiero insertar una modificación en el archivo *history.class.php* Este archivo se encuentra en el núcleo de la libertad y más precisamente aquí : núcleo / clase /

- Así que estamos en mi repositorio (TaGGoU91 / core) que se indica como una bifurcación de Jeedom / core
- Entonces vamos a / core / class (el primer núcleo está en negrita, es el repositorio donde estoy (core, vea Small 1))
- Entonces tenemos nuestro archivo *history.class.php* - Hacemos clic en el archivo

![tuto.github5](images/tuto.github5.png)

- Entonces estamos en nuestro archivo
- Hacemos clic en el lápiz para ingresar la modificación

![tuto.github6](images/tuto.github6.png)

Para buscar el archivo, colóquese en el bloque de texto del archivo que acaba de abrir en modo de edición con el lápiz y presione "Ctrl + F" para activar la búsqueda. Pega o especifica el texto que está buscando (un elemento significativo y una línea solamente, no un bloque completo de una vez). Valide con "Enter" para comenzar la búsqueda.
> **Punta**
>
> Si no hace clic en la ventana que contiene el texto o el código que está buscando, se abrirá la búsqueda del navegador y, en mi caso, en Google Chrome, no sabrá cómo buscar en el código o documentación directamente.

- El campo de búsqueda, sí, es bastante delgado como información, la línea copiada es mucho más grande;).

![tuto.github7](images/tuto.github7.png)

- En amarillo, este es el resultado de la investigación
- En azul, lo que acabo de seleccionar y que deseo modificar / reemplazar con mi código. Mi modificacion

![tuto.github14](images/tuto.github14.png)

Entonces borro el bloque y lo reemplazo.

Luego en la parte inferior encontramos esto : 1. El título explícito se indica si es posible 2. Ingresamos una descripción un poco más precisa (en mi caso, sería demasiado largo, el enlace al foro será más significativo) 3. Nos aseguramos de que esté marcado así 4. En commit = Enviar cambio

![tuto.github8](images/tuto.github8.png)

## Enviar un cambio

El **cometer** hecho arriba solo se refiere a la bifurcación del proyecto en su espacio de GitHub. Para enviar cambios al proyecto original, debe realizar un PR (Solicitud de extracción)

- Hacemos clic en la pestaña Solicitud de extracción
- Nueva solicitud de extracción (relaciones públicas para amigos))

![tuto.github9](images/tuto.github9.png)

- El RP lanzará una comparación entre la base de datos jeedom y su repositorio (la bifurcación).
- Esto indica las modificaciones (la primera es porque me actualicé desde jeedom, la segunda precisamente sobre el cambio de la última función de cambio de estado, perfecto !!!)
- El viejo código
- El nuevo código
- Creamos la solicitud de extracción (PR)

![tuto.github10](images/tuto.github10.png)

Es importante explicar claramente los cambios enviados para que los desarrolladores del proyecto original comprendan y puedan validar su solicitud.

- Hacemos clic en los tres pequeños puntos
- Copiamos la información que ingresamos previamente
- Lo mismo, copiamos (de ahí el uso de ... en el paso 1 para evitar reescribir)
- Hacemos clic en Crear solicitud de extracción

![tuto.github11](images/tuto.github11.png)

**Se acabó.** Tienes que esperar hasta que tu RP sea validado.

NB: Solo los usuarios que presionan directamente a Jeedom pueden validar el PR.

Para asegurarse de que su modificación esté en la lista, puede hacer clic en Solicitudes de extracción

![tuto.github12](images/tuto.github12.png)

Obtenemos la lista de PR en espera de validación. Podemos ver claramente el nuestro

![tuto.github13](images/tuto.github13.png)

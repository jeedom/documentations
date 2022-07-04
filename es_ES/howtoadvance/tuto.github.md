# Tutorial de GitHub

Este tutorial te presenta :

-   Crear una cuenta de GitHub
-   Bifurcación de Jeedom Core o documentación
-   Edición de uno o más archivos
-   Enviar un cambio
-   Actualizando tu bifurcación

Para permitirle contribuir a Jeedom, deberá proponer las modificaciones (PR : Solicitud de extracción).

# Crear una cuenta de GitHub

Discutiremos en este tutorial cómo crear una cuenta de GitHub, para poder informar errores (problema en el lenguaje GitHub), o incluso proponer correcciones (Pull Request o PR en lenguaje github) para todo el proyecto Jeedom, incluido su complementos o documentación gratuitos, o cualquier otro proyecto de github en el que le gustaría participar.

Ir [github](https://github.com) y haga clic en el botón de registro. Por lo tanto, debe estar en una página similar a la siguiente y, por lo tanto, debe ingresar un nombre de usuario, un correo electrónico y una contraseña y luego hacer clic en **Crea una cuenta**

![tuto.github1](images/tuto.github1.png)

Por lo tanto, llega a una segunda página como se muestra a continuación y no cambia nada, hace clic en **Continúa**

![tuto.github2](images/tuto.github2.png)

Ya está registrado y en la página de configuración de las opciones de su cuenta. Le aconsejo que verifique la dirección de correo electrónico para poder recuperar su cuenta en caso de olvido de su contraseña, por ejemplo, pero también para poder enviar modificaciones. También te dejo descubrir las otras opciones si tienes curiosidad.

![tuto.github3](images/tuto.github3.png)

# Bifurcación de Jeedom Core o documentación

**Tenedor - Por qué - Cómo**

Fork es copiar un proyecto en su espacio de github, para poder modificar los archivos de código y documentación y luego enviar una solicitud de extracción al proyecto original, que luego será estudiado por los desarrolladores de dicho proyecto

Ahora que tiene una cuenta de Github y ha iniciado sesión con su dirección de correo electrónico verificada, si visita [aquí](https://github.com/jeedom/core) estás en el proyecto jeedom, a la derecha hay un botón de bifurcación que te permite copiarlo en tu espacio de github.

![tuto.github4](images/tuto.github4.png)

## Edición de uno o más archivos

Entonces, en mi caso, quiero enviar un cambio al archivo *historia.clase.php* Este archivo se encuentra en el núcleo de jeedom y más precisamente aquí : núcleo/clase/

- Por lo tanto, estamos en mi repositorio (TaGGoU91/core) que se indica como una bifurcación de Jeedom/core
- Vamos pues a /core/class (el primer core está en negrita, este es el repositorio donde estoy (core, ver Petit 1)
- Entonces tenemos nuestro archivo *historia.clase.php* - Haga clic en el archivo

![tuto.github5](images/tuto.github5.png)

- Por lo tanto, estamos en nuestro archivo
- Hacemos clic en el lápiz para entrar en modificación

![tuto.github6](images/tuto.github6.png)

Para buscar en el archivo, posicionate en el bloque de texto del archivo que acabas de abrir en modo edición con el lápiz y haces un "Ctrl + F" para activar la búsqueda. Pegue o especifique el texto que está buscando (un elemento significativo y una sola línea, no un bloque completo a la vez)). Validar con "Enter" para lanzar la búsqueda.
> **Consejo**
>
> Si no haces click en la ventana que contiene el texto o código que buscas se abre el buscador del navegador y en mi caso en google chrome no sabe buscar en el código o documentación directamente.

- El campo de búsqueda, sí, es bastante delgado como información, la línea copiada es mucho más grande;).

![tuto.github7](images/tuto.github7.png)

- En amarillo, es el resultado de la búsqueda
- En azul, lo que acabo de seleccionar y quiero modificar/reemplazar con mi código. Mi edición

![tuto.github14](images/tuto.github14.png)

Así que elimino el bloque y luego lo reemplazo.

Luego, en la parte inferior encontramos esto : 1. Indicar un título explícito si es posible 2. Ingresamos una descripción un poco más precisa (en mi caso, sería demasiado larga, el enlace al foro será más significativo) 3. Nos aseguramos de que esté marcado así 4. Al confirmar = Enviar cambio

![tuto.github8](images/tuto.github8.png)

## Enviar un cambio

La **comprometerse** lo hecho arriba solo se refiere a la bifurcación del proyecto en su espacio de GitHub. Para enviar los cambios al proyecto original, debe hacer un PR (Pull Request)

- Haga clic en la pestaña Solicitud de extracción
- Nueva solicitud de extracción (PR para amigos))

![tuto.github9](images/tuto.github9.png)

- El PR lanzará una comparación entre la base de jeedom con su repositorio (el tenedor).
- Esto indica las modificaciones (la primera es porque actualicé desde jeedom, la segunda es precisamente por el cambio en la función lastchangestateduration, perfecto !!!)
- El viejo codigo
- El nuevo codigo
- Creamos el Pull Request (PR)

![tuto.github10](images/tuto.github10.png)

Es importante explicar claramente los cambios enviados para que los desarrolladores del proyecto original entiendan y puedan validar su solicitud.

- Hacemos click en los tres puntitos
- Copiamos la información que ingresamos anteriormente
- Lo mismo, copiamos (de ahí el uso de... en el paso 1 para evitar reescribir)
- Damos clic en Create Pull Request

![tuto.github11](images/tuto.github11.png)

**Se acabó.** Tienes que esperar a que tu PR sea validado.

NB: Solo los usuarios con un botón derecho en Jeedom pueden validar el PR.

Para asegurarse de que su modificación esté en la lista, puede hacer clic en Solicitudes de extracción

![tuto.github12](images/tuto.github12.png)

Obtenemos la lista de PR en espera de validación. Podemos ver el nuestro

![tuto.github13](images/tuto.github13.png)

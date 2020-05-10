Plugin que permite ejecutar scripts (shell, php, ruby ​​...),
solicitudes Http, para recuperar información en XML o JSON.

Configuración del Plugin 
=======================

La configuración es muy simple, después de descochegar el complemento,
simplemente lo activas y eso es todo.

![script1](../images/script1.PNG)

La única opción es donde jeedom pone los scripts predeterminados,
se aconseja no tocochelo.

Configuración del equipo 
=============================

Se puede acceder a la configuración del equipo Guión desde el menú
Plugin :

![script2](../images/script2.PNG)

Así es como se ve la página del complemento de Guión (aquí ya con 1
equipos) :

![script3](../images/script3.PNG)

Aquí está la lista de sus guiones. Una vez que hagas clic
en el equipo que obtienes :

![script4](../images/script4.PNG)

> **Punta**
>
> Como en muchos lugares de Jeedom, coloca el mouse en el extremo izquierdo
> abre un menú de acceso rápido (puedes
> desde tu perfil siempre déjalo visible).

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombrebre del equipo de script** : nombre de su equipo de script

-   **Categoría** : categorías de equipos (puede pertenecer a
    categorías múltiples)

-   **Activar** : activa su equipo

-   **Visible** : lo hace visible en el tablero

-   **Objeto padre** : indica el objeto padre al que pertenece
    equipo

-   **Autorrealización** : permite especificoche un cron de actualización
    automático para todos los comandos de tipo de información.

A continuación encontrará la lista de pedidos. :

-   **Nombre** : Este campo contiene el nombre que desea dar a
    su pedido / información.

-   **Icono** : Este campo le permite asociar un icono con su nombre (en
    este caso Jeedom reemplaza el nombre con el ícono en el tablero).

-   **Puntao de script** :

    -   El tipo Http : permite enviar una solicitud a un dispositivo
        externo sin necesariamente esperar el regreso de este comando.
        El ejemplo que servirá de soporte para el tipo Http será el
        configuración de una solicitud a un Vera para encender
        una luz.

    -   El tipo de script : utilizado principalmente para ejecutar scripts
        interno a Jeedom. El ejemplo que admitirá el tipo
        el script será la configuración del script de monitoreo de temperatura
        frambuesa disponible en el mercado.

    -   Puntao XML : permite recuperar información codificada en
        XML desde equipos remotos. El ejemplo que servirá como
        El soporte de tipo XML será la configuración del script para
        interrogar un dispositivo ecológico.

    -   El tipo JSON : permite recuperar información codificada en
        JSON desde un dispositivo remoto. El ejemplo que servirá como
        la compatibilidad con el tipo JSON será la configuración del script para
        interrogar a Sickbeard (o XBMC).

-   **el tipo** y el **Sub-tipo**

-   El campo **Petición**

    -   Este campo debe contener la consulta en sí o la ruta de acceso de
        script si el campo "tipo de script" es script. El botón
        "Recorrer" : le permite seleccionar el archivo contenido en el
        archivo interno en Jeedom.

        > **Punta**
        >
        > Este archivo es accesible en SSH
        > en / usr / share / nginx / www / jeedom / Plugins / script / core / resources /.
        > FYI, el comando SSH para asignar derechos de datos www
        > a un archivo es : vestido de sudo
        > www-data:www-data NOMDUSCRIPT.EXTENSION. Tenga en cuenta que para
        > ejecutar un script, debe tener derechos de www-data.

    -   El botón **Editar** : le permite editar usando un editor
        código interno uno de los archivos contenidos en el directorio
        permitiendo el acceso al código del archivo.

    -   El botón **Nuevo** : permite crear un archivo de comando.

        > **Punta**
        >
        > No olvide ingresar el nombre del archivo, así como su
        > extensión completa bajo pena de ver su excelente script no
        > no trabajo. Sin extensión, Jeedom no sabrá
        > reconocer el idioma asociado con su archivo. CF :
        > Generalidad

    -   El botón **Borrar** : permite eliminar un archivo
        de encochego.

    -   El botón **Compartir, repartir** : uno de los más importantes, y después
        Validado los desarrolladores de CGU en su perfil en el mercado,
        le permite compartir su creación con la comunidad.

-   El campo **Opciones** : Campo con opciones variables dependiendo de la elección.
    tipo de script.

-   **Unidad** : unidad de datos (puede estar vacía).

-   **min / max** : límites de datos (pueden estar vacíos).

-   **Guardar historial** : permite historizar los datos.

-   **Mostrar** : permite mostrar los datos en el tablero.

-   **Evento** : volver en caso de eventos. En el caso de RFXcom
    esta casilla siempre debe estar marcada porque no puede consultar
    un módulo RFXcom.

-   **Permitir memcache** : permite a Jeedom usar caché para
    valor (predeterminado 5 min) antes de volver a ejecutar el script para tener que
    nuevo valor.

-   **Caché de por vida** : permite modificoche la vida útil del caché
    (predeterminado 5 min).

> **Importante**
>
> Evite tanto como sea posible en la ruta del script o en
> los parámetros de sus cocheacteres especiales. Los cocheacteres
> ser permitido : números, letras (mayúsculas o minúsculas)

![script5](../images/script5.PNG)

Le permite llamar a una url o recuperar el retorno de una URL.

-   una casilla de verificación "No marque SSL" : si está marcado, permite Jeedom
    no enviar los campos "Usuario" y "Contraseña" a
    la solicitud. Jeedom no buscocheá identificochese con
    sitio remoto / máquina.

-   una casilla de verificación "Permitir respuesta en blanco" : si está marcado, permite
    Jeedom no esperar una respuesta, o ignorar cualquier respuesta a
    la trama transmitida. En general, verificamos si Jeedom nos envía un "Curl
    error : Respuesta vacía del servidor".

-   una casilla de verificación "Nunca informar errores" : no lo hagamos
    no levantar una alerta en caso de error.

-   un campo de tiempo de espera" : sin ser informado, el tiempo de espera de la solicitud
    el valor predeterminado es 2 segundos, de lo contrario, vale el valor ingresado.

-   un campo "Pruebas máximas" : Máximo 4 pruebas por defecto.

-   un campo "Usuario"" : para ingresar un nombre de usuario.

-   un campo "Contraseña"" : para ingresar una contraseña.

La elección de HTML 
=============

![script8](../images/script8.PNG)

Analiza una página web (archivo HTML) para recuperar un valor
anteriormente. La sintaxis es la misma que para jquery.

El campo de opción tiene un campo "URL de archivo HTML"" : este campo
por lo tanto contiene el enlace a la máquina que aloja el archivo HTML en
Pregunta.

La elección XML 
============

![script6](../images/script6.PNG)

Le permite recuperar xml y buscoche específicamente un valor
en.

El campo de opción tiene un campo "URL del archivo XML"" : este campo
por lo tanto contiene el enlace a la máquina que aloja el archivo XML en
Pregunta.

> **Importante**
>
> Solo es posible recuperar valores, los atributos no
> puede ser recuperado.

La elección de JSON 
=============

![script7](../images/script7.PNG)

Permite recuperar json y buscoche específicamente un
valor en.

El campo de opción tiene un campo "URL de archivo JSON"" : este campo
por lo tanto contiene el enlace a la máquina que aloja el archivo JSON en
Pregunta.

Ejemplo HTTP : Pilotando una Vera 
==================================

El ejemplo se basa en una Vera y consiste en conducir una bombilla.
regulable. No me detendré en cómo conducir un Vera
por solicitud Http, el foro de TLD está lleno de respuestas. De más,
el ejemplo corresponde a mi tipo de material y tendrá que adaptarse a
suyo.

> **Punta**
>
> Un método para quienes buscan a tientas escribir solicitudes Http,
> primero valide la sintaxis en su navegador y solo entonces
> ir a la configuración bajo Jeedom. Cuando un script de acción no lo hace
> no funciona, cambiar a Info / Otro script le permite ver el error
> devuelto.

Vamos a ir :

-   Creamos equipos : por ejemplo, LUM COISINE (creo que tenemos
    toda una cocina a mano)

-   Lo asociamos con un objeto padre : por ejemplo VERA, me permite
    centralice todos los pedidos relacionados con VERA en un
    padre soltero.

-   Elige tu categoría.

-   Active su equipo, no verifique visible, veremos un poco
    más tarde cómo asociarlo con uno virtual (más sexy, más WAF)

-   Para la actualización automática, no coloque nada, es un comando
    impulso vinculado a presionar un botón o un escenario !

-   Agregar un comando de script

-   Recuerda guardar

Explicaciones :

-   Nombre : 100% porque prenderemos una luz a plena potencia

-   Puntao de script : Http

-   Puntao : Acción (es una orden)

-   Subtipo : Por defecto

-   Petición :

````
Http://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=100
````

> **Punta**
>
> el "100" al final de la solicitud corresponde al porcentaje de potencia
> para asignar, así que ponga "0" al final de la solicitud corresponde a
> apaga la bombilla.

El botón "probar" le permite probar su pedido !

Por lo tanto, puede multiplicoche pedidos en el mismo equipo por
por ejemplo, al hacer un pedido del 60% para una luz tenue, cree
un tercio al 30% para viajes nocturnos que se combinarán en un
escenario, ...

También es posible crear un comando de tipo deslizador colocando el
etiqueta \ #slider \ # en la solicitud :

````
Http://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=#slider#
````

> **Punta**
>
> Si su orden es del tipo de mensaje, puede usar etiquetas
> \ #message \ # y \ #title \ #, lo mismo para un pedido de color con
> la etiqueta \ #color \ #, o de tipo deslizador con # deslizador # o lista con #seleccionar#

Ejemplo HTTP : Enviar notificación a XBMC 
==============================================

Objetivo : Enviar notificación a XBMC al abrir una puerta
entrada.

-   Nombre : EMPUJE XBMC

-   Puntao de script : Http

-   Puntao : Acción (es una orden)

-   Sub-tipo : Por defecto

-   Petición :

````
Http://IP_DE_XBMC:8080/jsonrpc?request={ %22jsonrpc%22:%222.0%22,%22method%22:%22GUI.ShowNotification%22,%22params%22:{ %22title%22:%22Mouvement%20Detecté%22,%22message%22:%22Porte%20Entrée%22},%22id%22:1}
````

Depende de usted probar esto en un escenario, por ejemplo !

API XBMC [aquí] (Http://wiki.xbmc.org/index.php?title = JSON-RPC_API / v6)
(solo los campos marcados como "obligatorios" son obligatorios)

Objetivo : Enviar una notificación a XBMC cuando la temperatura baje
debajo de cierto umbral

Toma el ejemplo de arriba :

-   reemplace "Movimiento% 20Detectado" con "Riesgo% 20de% 20gel"

-   reemplazar "Porte% 20Entrée" por
    "Temperatura %% 20 20extérieur:% 20 \ # \ [EXTERIOR \] \ [EXTERIOR \] \ [TEMPERATURA \] \% # 20"

Testez sur un scénario *\[EXTERIEUR\]\[EXTERIEUR\]\[TEMPERATURE\]* &lt;
15 por ejemplo

Acción : Inicie el script, a través de un equipo virtual, vinculado a su script
!

Ejemplo SCRIPT 
==============

El más bonito pero no el más fácil de explicoche..

Requisitos previos : saber desarrollar un script en php, python o ruby.

>**Importantee**
>
> La extensión de su script debe coincidir absolutamente con su tipo. Ex .php para un tipo php. De hecho, Jeedom se basa en la extensión del script para que se ejecute el ejecutable (php if .php, python si .py ....)

El script de monitoreo de temperatura de frambuesa servirá como ejemplo
para usar el tipo de script : Guión

Después de descochegar el script del mercado, el botón "Examinar""
le permite seleccionar el archivo temp \ _rasp.php.

Por curiosidad, puede ir y ver el contenido del archivo presionando
en el botón "Editar", debería obtener el siguiente código :

Este es un script php que se puede reutilizar fuera de Jeedom !

````
 <?php
    $temp = shell_exec("cat /sys/class/thermal/thermal_zone0/temp");
    $temp = $temp / 1000;
    $temp = round($temp,1);
    echo $temp
 ?>
 ````

Nota : concretamente, es la función php "echo" la que le dará al
valor para Jeedom

Los parámetros 
--------------

Obtenga la información de Jeedom para usarla en un script. la
la recuperación depende del tipo de script utilizado :

Ejemplo :

-   En la linea :
    /usr/share/nginx/www/jeedom/Plugins/script/core/ressources/MON\_SCRIPT\_PHP.php
    lista, el argumento "lista" es una cadena de cocheacteres (fija)
    recuperado del script php usando la siguiente función
    \ $ argv \ [1 \] CF : Google para más detalles sobre la recuperación
    parámetros en PHP.

-   Anteriormente hemos visto que era posible recuperar
    valores dinámicos de Jeedom.

-   En la linea :
    /usr/share/nginx/www/jeedom/Plugins/script/core/ressources/radio.py
    VOL * slider *, el argumento "* slider *" se recupera de este
    argv \ [2 \]. Cuando jeedom ejecuta el script,
    reemplazará automáticamente * deslizador * con el valor (numérico)
    control deslizante. CF : Google para más detalles sobre la recuperación
    parámetros en Python.

-   Más fuerte : Potencialmente, todas las variables accesibles por
    Jeedom puede ser utilizado por el complemento de script :

    -   Desea recuperar el valor de la temperatura de la cocina.
        para historizarlo fuera de Jeedom ?

    -   Pase * \ [COCINA \] \ [COCINA \] \ [Temperatura \] * como parámetro
        al script y Jeedom lo reemplazará con el valor leído durante
        del envío.

Recomendación para probar los parámetros en el script php :

````
if (isset($argv)) {
 foreach ($argv as $arg) {
     $argList = explode('=', $arg);
     if (isset($argList[0]) && isset($argList[1])) {
         $_GET[$argList[0]] = $argList[1];
     }
 }
}
````

Ejemplo XML simple 
==================

Aquí está el formato del xml estándar :

````
<root>
    <led0>1</led0>
    <leds>
      <led1>toto</led1>
    </leds>
</root>
````

Si desea el valor de led0 en la consulta, coloque led0. si
quieres el valor de led1 que es el hijo de leds que pones
leds &gt; led1.

Notaz que l'élément racine &lt;root&gt; n'est pas à préciser dans le
campo de solicitud.

Ejemplo complejo de XML 
====================

````
 <root>
   <led0>1</led0>
   <leds>
     <led1>toto</led1>
   </leds>
   <leds>
     <led1>tata</led1>
   </leds>
 </root>
 ````

La sintaxis es :

leds &gt; 1 &gt; led1 qui donne en réponse tata, 1 étant le numéro de
fila de matriz !

Ejemplo XML más complejo 
=========================

````
<AKT_Data ID="SMS-Liste" ZeitSt="01.05.2017 18:55">
 <MesPar DH="HBCHa" StrNr="2167" Typ="02" Var="02">
   <Name>Tresa - Ponte Tresa, Rocchetta</Name>
   <Datum>01.05.2017</Datum>
   <Zeit>18:50</Zeit>
   <Wert>268.56</Wert>
   <Wert dt="-24h">268.51</Wert>
   <Wert Typ="delta24">0.051</Wert>
   <Wert Typ="m24">268.52</Wert>
   <Wert Typ="max24">268.56</Wert>
   <Wert Typ="min24">268.50</Wert>
 </MesPar>
 <MesPar DH="HBCHa" StrNr="2265" Typ="03" Var="02">
  <Name>Inn - Tarasp</Name>
  <Datum>01.05.2017</Datum>
  <Zeit>18:50</Zeit>
  <Wert>4.85</Wert>
  <Wert dt="-24h">7.98</Wert>
  <Wert Typ="delta24">-3.130</Wert>
  <Wert Typ="m24">6.15</Wert>
  <Wert Typ="max24">7.98</Wert>
  <Wert Typ="min24">4.85</Wert>
 </MesPar>
 <MesPar DH="HBCHa" StrNr="2270" Typ="02" Var="32">
  <Name>Doubs - Combe des Sarrasins</Name>
  <Datum>01.05.2017</Datum>
  <Zeit>18:00</Zeit>
  <Wert>500.65</Wert>
  <Wert dt="-24h">500.65</Wert>
  <Wert Typ="delta24">0.000</Wert>
  <Wert Typ="m24">500.65</Wert>
  <Wert Typ="max24">500.65</Wert>
  <Wert Typ="min24">500.64</Wert>
 </MesPar>
</AKT_Data>
````

Para recuperar información del campo Wert del primer bloque:

``MesPar>0>Wert>0 qui retourne donc "268.56 "``

Para devolver el siguiente elemento en la "estructura" de Wert, debe
simplemente indique el número de orden en la estructura. Que da
pour l'élément '&lt;Wert Typ="delta24"&gt;0.051&lt;/Wert&gt;' le code
Próximo :

``MesPar>1>Wert>2``

Para pasar al siguiente bloque "MyPar", debe cambiar el índice a
resultar : el 1 por 2, por ejemplo.

ATENCIÓN : Si en el archivo XML el orden cambia, la solicitud no cambia
trabaja más. Será necesario reajustar la solicitud según el pedido.
devuelto.

Ejemplo JSON 
============

Al igual que el tipo XML, es posible leer información de
un regreso JSON.

Para explicoche, me basaré en información JSON con
la aplicación Sickbeard (boo ... cpasbien) pero aquí solo la técnica
premium, no la herramienta !

El acceso a este archivo es posible utilizando la siguiente URL :

``Http://<IP_DELAMACHINEQUIEBERGESICKBEARD>:8083/api/XXXX/?cmd=history&limit=3``

Nota : XXXX es el número de clave API específico de cada SICKBEARD.

En primer lugar, antes de iniciar la configuración del complemento de script
JSON, se trata de identificoche correctamente la información para recuperar., coche
aquí integraremos una noción de matriz en los retornos.

Valide la visualización de información desde su navegador (prueba
bajo Chrome).

Ejemplo de devolución :

````
 {
     "data": [
         {
             "date": "2014-09-10 01:37",
             "episode": 4,
             "provider": "RNT",
             "quality": "SD TV",
             "resource": "XXX",
             "resource_path": "XXXX",
             "season": 2,
             "show_name": "Totovaalaplage S2E4",
             "status": "Downloaded",
             "tvdbid": XXXXX
         },
         {
             "date": "2014-09-10 01:36",
             "episode": 3,
             "provider": "RNT",
             "quality": "SD TV",
             "resource": "XXXX",
             "resource_path": "XXX",
             "season": 2,
             "show_name": "Totovaalaplage S2E3",
             "status": "Downloaded",
             "tvdbid": XXXXX
         },
         {
             "date": "2014-09-10 01:21",
             "episode": 1,
             "provider": "Cpasbien",
             "quality": "SD TV",
             "resource": "XXXX",
             "resource_path": "XXXX",
             "season": 1,
 ICI -->     "show_name": "Totovaplusauski pero Totovaalaplage S1E1",
             "status": "Snatched",
             "tvdbid": XXXX
         }
     ],
     "message": "",
     "result": "success"
 }
 ````

En el caso de que nos gustaría devolver el show \ _name del 3er
elemento en php (marcado AQUÍ), sería necesario hacer : data &gt; 2
&gt;show \ _name, el índice de matriz de retorno que comienza en Cero.

En este ejemplo, el botón "Prueba" devolverá "Totovaplusauski
pero Totovaalaplage S1E1".

Aclaraciones :

Tenga en cuenta la sintaxis del comando Solicitud, es de tipo element0 &gt;
index du tableau &gt; élément1

Desventajas :

-   este método solo permite recuperar un elemento a la vez.

-   Si queremos devolver todos los valores de "show \ _name", esto
    desafortunadamente no es posible, tendrás que duplicoche el script
    tantas veces como sea necesario.

Ejemplo HTML 
============

Aquí intentaremos recuperar el último FML.

Primero que nada tienes que configurar la url :

``Http://www.viedemerde.fr``

Entonces tienes que encontrar el "camino" de la última FML. Para hacer esto,
tienes que ir al sitio y luego hacer clic derecho en el elemento deseado y luego
inspeccionar el artículo, obtenemos :

![script9](../images/script9.PNG)

Aquí es la parte más compleja y que requiere un pequeño análisis. aquí
mi texto está en una etiqueta "a" que está en un elemento tipo p
que es una clase div "publicoche artículo". Entonces tengo que seleccionar
el primer elemento div de la clase "post" y "artículo" y luego el primer
elemento p y que obtengo todo en las etiquetas "a" que
contiene. Entonces tengo : "div.post.artículo:primero p:primero un".

Entonces obtenemos :

![script10](../images/script10.PNG)

Para una actualización en tiempo real, es posible poner un cron
actualizar.

> **Punta**
>
> Al instalar una actualización cron, Jeedom
> marca automáticamente la casilla Evento, esto es completamente normal.

Aquí puedes imaginar un escenario que te envía por SMS
la última FML.

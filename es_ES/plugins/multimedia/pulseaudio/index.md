Plugin que permite conectar un altavoz Bluetooth a su Jeedom. El
El complemento también le permite controlar el volumen de su altavoz a través de
paquete pulseaudio.

Description : 
=============

Este complemento permite la gestión del servicio PulseAudio. Este servicio gestiona todo
con respecto a las entradas y salidas de audio y micrófono, como las salidas
ya sea por cable, a través de bluetooth o en la red.

También hace que el servicio PulseAudio sea visible en su red
interno, puede controlarlo desde una PC en ejecución
GNU / Linux y obtén la música que suena en tu PC
enviado en salida de sonido Jeedom.

Este complemento también permite agregar altavoces Bluetooth al servicio
Jeedom PulseAudio y lo ofrece como salida estándar. Entonces, vía
Jeedom y este complemento PulseAudio puedes ejecutar Deezer en tu PC
bajo GNU / Linux (o Windows con el cliente PulseAudio compatible) y
recibe el sonido enviado a los altavoces bluetooth
conectado a Jeedom así como a la salida de sonido (HDMI / Jack) de Jeedom
para completar con un amplificador.

Este modo simultáneo llegará pronto con la posibilidad de configurar
latencia, evitando el retraso entre salidas de sonido
HDMI / Jack / Bluetooth, perfecto para el modo nocturno a la fe en el
terraza con altavoces Bluetooth y en la sala con amplificador !

Configuración 
=============

Instalación de complementos 
----------------------

Después de descargar el complemento, simplemente deberá activar el
plugin :

![image](index_html_6e0dcff06783d142.png)

Iniciar la instalación de dependencias:

![image](index_html_ee255917648caafe.png)

La instalación puede llevar tiempo

![image](index_html_8f5ac294e319722b.png)

Una vez que se instalan las dependencias, la fecha de la última instalación
está registrado:

![image](index_html_ae07628d0d9cf23c.png)

Allez dans les logs puis vérifiez le log « pulseaudio\_dep » afin de
verificar si hay errores

![image](index_html_1857092a331f01.png)

Configuración del plugin 
-----------------------

De vuelta en la configuración del complemento Pulseaudio, en la sección
« Plugin PulseAudio », sélectionner le port de clé Bluetooth :

![image](index_html_a5211f99cfeafe53.png)

Finalmente, guarda los cambios.

Configuración del equipo 
=============================

Para acceder a la configuración del equipo PulseAudio, vaya a
l'onglet « Plugins », « Multimédia » puis « PulseAudio » :

![image](index_html_6144037f2a656556.png)

Cliquez sur « Ajouter » pour ajouter une Altavoz bluetooth :

![image](index_html_a952e7310171feda.png)

Agregue un nombre a su equipo:

![image](index_html_5a766711e205ad3.png)

Rellene los diferentes campos:

![image](index_html_59ce8e4aed01a0ef.png)

-   **Nombre del altavoz Bluetooth** : el nombre de tu equipo

-   **Objeto padre** : indica el objeto padre al que pertenece
    equipo

-   **Puerto de llave Bluetooth** : selección del puerto de su transmisor
    Bluetooth utilizado para este perfil

-   **Categoría** : categorías de equipos

-   **Comentario** : permite agregar un comentario

-   **Activar** : activa su equipo

Haga clic en el asistente de emparejamiento:

![image](index_html_b11a463a181fee2c.png)

Cliquez sur le bouton « suivant » :

![image](index_html_74cfef6547af4c77.png)

El asistente escanea los dispositivos Bluetooth ubicados alrededor
tu caja Jeedom:

![image](index_html_fe41bb846a95a14d.png)

Ingrese la dirección MAC de su altavoz Bluetooth, luego haga clic
« suivant » :

![image](index_html_dc20199f96adebcf.png)

El asistente conecta su altavoz Bluetooth a Jeedom:

![image](index_html_775afe588b6090f6.png)

Une fois terminé, cliquez sur « suivant » .

Ingrese un nombre de servicio.

**Atención** : no debe haber espacios ni caracteres especiales en este nombre
de servicio

Cliquez sur « suivant » une fois terminé :

![image](index_html_d15cbd674d21a3e7.png)

Cierra el asistente:

![image](index_html_34ceb59a4191f244.png)

La dirección MAC de su altavoz Bluetooth y el nombre del servicio asociado
están informados:

![image](index_html_2f0531b2fa9ff325.png)

Activar, luego registrar equipo:

![image](index_html_b314d3c57bca2c32.png)

Preguntas frecuentes 
===

**Cómo verificar el estado de mi servicio asociado con mi gabinete ?.**

Cliquez sur le bouton « Status » :

![image](index_html_44f3633e34fd5c50.png)

Verificar el estado del servicio. Esto debe comenzar con
éxito (ÉXITO):

![image](index_html_fa551e46a49f58af.png)

**Cómo probar el envío de un archivo de sonido a mi altavoz ?.**

Cliquez sur le bouton « Tester » :

![image](index_html_bcb212ce18487be2.png)

Comienza la reproducción de un archivo de audio de prueba. El sonido sale de tu
Altavoz bluetooth.

Pour arrêter le test, cliquez sur « Arrêter le test ». El proceso de
la lectura se detiene.

![image](index_html_d2e914b1c2572539.png)

**Cómo ajustar el volumen de mis salidas de sonido?.**

Vaya a la configuración del complemento Pulseaudio, en la sección
« Plugin PulseAudio » :

![image](index_html_5ba2b0d4b358e723.png)

**El volumen de su altavoz se puede ajustar. También puedes consultar
las salidas de audio para desactivar**

Solucionar problemas 
==============

**No tengo sonido!!!.**

Recuerde verificar todos los registros para detectar un posible problema

![image](index_html_672321a0b40ba4c5.png)

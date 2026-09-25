# Actualizar el entorno Debian de un Smart

A continuación, detallaremos el procedimiento de **migración del entorno Debian del dispositivo Smart** para que puedas hacerte una idea de los distintos pasos antes de ponerlo en práctica. Ten en cuenta que todos los pasos también se explican en pantalla a medida que avanza la migración.

## Requisitos previos

La migración del entorno Debian y del núcleo de la Smart es un proceso largo y complejo, por lo que hay que tener en cuenta varios requisitos previos imprescindibles antes de iniciar la operación.

En particular, es necesario:

- poder **permanecer en la página de migración** durante todo el proceso *(hay que contar con aproximadamente 1 h 30 min)*,
- preparar [una memoria USB formateada en **FAT32**](https://fr.wikihow.com/formater-en-FAT32){:target="\_blank"} y que cuente con **más de 8 GB de espacio libre**,
- estar en la **misma red local** que el router Smart y acceder a él a través de su **dirección interna**.

>**IMPORTANTE**
>
>Como siempre, se recomienda encarecidamente que tengas a mano una **copia de seguridad reciente** de tu Jeedom antes de continuar.

## Migración

### Iniciar la migración

Tienes la posibilidad de iniciar el proceso de migración de dos maneras:

- Accede al menú **Ajustes → Sistema → Restauración de imagen**:
![Menú Restauración Imagen](../images/migrateos-smart01.png)

- Cuando sea necesario, se te redirigirá al **centro de actualizaciones**:
![Actualizar el centro de actualizaciones](../images/migrateos-smart02.png)

### Paso 1

El primer paso de la migración consiste en preparar y comprobar el hardware. Los requisitos previos mencionados anteriormente se muestran en una ventana emergente y se te pide que insertes una memoria USB *(formateada en FAT32)* con más de 8 GB de espacio libre en el dispositivo Smart.

Una vez insertada la memoria USB, puedes hacer clic en la flecha para iniciar el proceso:

![Insertar una memoria USB](../images/migrateos-smart03.png)

Una vez comprobados los requisitos previos, podemos pasar a la etapa 2:

![Memoria USB verificada](../images/migrateos-smart04.png)

>**INFORMACIÓN**
>
>No es necesario permanecer delante de la pantalla durante todo el proceso. Este se llevará a cabo automáticamente hasta que se te proponga restaurar una copia de seguridad.

### Paso 2

El segundo paso se encargará de generar una copia de seguridad de tu Jeedom, de la que se guardará una copia en la memoria USB. Esta copia de seguridad se restaurará al final del proceso de migración si así lo deseas. En caso de que la necesites, la copia de seguridad se encuentra en un directorio llamado ``Backup`` en la memoria USB.

No obstante, te recomendamos que te asegures de disponer de una copia de seguridad reciente de Jeedom por si acaso.

![Copia de seguridad de Jeedom](../images/migrateos-smart05.png)

La duración de la fase de copia de seguridad dependerá del tamaño de tu instalación y de las opciones de copia de seguridad remota configuradas. Tienes la posibilidad de acelerar el proceso desactivando previamente el envío de copias de seguridad a Market y/o Samba.

![Copia de la copia de seguridad en la memoria USB](../images/migrateos-smart06.png)

### Paso 3

El tercer paso permitirá descargar la imagen que contiene la nueva versión del entorno Debian y comprobar su validez una vez descargada:

![Descarga de la imagen](../images/migrateos-smart07.png)

Este paso puede tardar un tiempo y dependerá de la velocidad de tu conexión a Internet, así como del rendimiento de lectura y escritura de la memoria USB:

![Verificación de la imagen](../images/migrateos-smart08.png)

### Paso 4

Sin duda, esta es la etapa más importante, ya que se trata de la migración efectiva del hardware. ¡Es fundamental no desconectar la memoria USB ni cortar la alimentación eléctrica del Smart durante esta fase!

![Migración del Smart](../images/migrateos-smart09.png)

Este paso dura unos treinta minutos, tras los cuales el dispositivo Smart se reiniciará. Es posible que este primer reinicio tarde un rato:

![Reinicio del Smart](../images/migrateos-smart10.png)

### Finalización de la migración

Una vez finalizado el proceso de migración, el dispositivo Smart se encuentra ahora en un entorno actualizado, pero con un Jeedom sin datos. Por lo tanto, para completar el procedimiento habrá que elegir entre empezar desde cero o restaurar la copia de seguridad generada en la primera etapa:

![Finalización de la migración](../images/migrateos-smart11.png)

>**IMPORTANTE**
>
>**Asegúrate de retirar la memoria USB del dispositivo Smart al finalizar la operación.**

¡Enhorabuena, **tu dispositivo Smart ya está actualizado y listo para funcionar**!

## Preguntas frecuentes

>**¿El proceso de migración se está llevando a cabo correctamente, pero parece que no se ha producido ningún cambio tras reiniciar el router?**
>Esto significa que la herramienta de migración no reconoce correctamente la memoria USB utilizada. Vuelve a realizar la operación con otra memoria USB o [Reorganizar tu memoria USB](https://fr.wikihow.com/partitionner-une-cl%C3%A9-USB){:target="\_blank"} asegurándote de **crear solo una partición** *(Single partition)*.

>**Ya no puedo iniciar sesión en Jeedom tras la migración del entorno.**
>Dado que Jeedom se ha reinstalado tras la actualización del entorno Debian, mientras no hayas restaurado una copia de seguridad o creado un nuevo usuario, las credenciales predeterminadas son ***admin/admin***.

>**Ya no puedo acceder a mi caja tras la migración del entorno.**
>Comprueba si el dispositivo Jeedom está conectado y cuál es su dirección IP desde la interfaz de tu router, por si acaso haya cambiado de dirección IP.

>**Algunos complementos han dejado de funcionar tras la migración.**
>Asegúrate de haber reinstalado las dependencias de los plugins que las requieran *(consulta la página de configuración del plugin)*.

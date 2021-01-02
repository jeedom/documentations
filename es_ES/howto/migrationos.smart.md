# Actualice el entorno Debian de un Smart

Detallaremos el procedimiento de **migración del entorno Debian de la caja inteligente** para que pueda tener una visión general de los diferentes pasos antes de la práctica. Tenga en cuenta que todos los pasos también se explican en la pantalla a medida que avanza la migración.

## Prerrequisitos

La migración del entorno Debian y el kernel inteligente es un proceso largo y complejo, por lo que se deben tener en cuenta varios requisitos previos antes de iniciar la operación.

Es necesario en particular :

- poder **permanecer en la página de migración** durante todo el proceso *(tarda alrededor de 1h30)*,
- preparar una llave USB formateada en **FAT32** y tener **más de 8GB de espacio libre**,
- estar en el **misma red local** que la Smart Box y acceder a ella desde su **dirección interna**.

>**Importante**
>
>Como de costumbre, se recomienda encarecidamente mantener un **copia de seguridad reciente** de tu libertad de antemano.

## Migration

### Iniciar la migración

Tiene la posibilidad de iniciar el procedimiento de migración de 2 formas :

- Ir al menú **Configuración → Sistema → Restaurar imagen** :
![Menu Restauration Image](images/migrateos-smart01.png)

- Al ser invitado a la **Centro de actualizaciones** cuando sea necesario :
![Mettre à niveau centre de MAJ](images/migrateos-smart02.png)

### Etapa 1

El primer paso de la migración es preparar y verificar el hardware. Los requisitos previos mencionados anteriormente se recuperan mediante una ventana emergente y se le solicita que inserte una llave USB *(formateado en FAT32)* con más de 8 GB de espacio libre en la caja inteligente.

![Insérer clé USB](images/migrateos-smart03.png)

Cuando se validan los prerrequisitos, podemos ir al paso 2 :

![Clé USB vérifiée](images/migrateos-smart04.png)

### Etapa 2

El segundo paso se encargará de generar una copia de seguridad de su Jeedom, una copia de la cual se guardará en la llave USB. Esta copia de seguridad se restaurará al final del proceso de migración si lo desea. Si es necesario, la copia de seguridad se encuentra en un directorio llamado ``Backup`` en la memoria USB.

Aún así, le recomendamos que se asegure de tener una copia de seguridad reciente de Jeedom disponible en otro lugar.

![Sauvegarde de Jeedom](images/migrateos-smart05.png)

La duración de la fase de respaldo dependerá del tamaño de su instalación y de las opciones de respaldo remoto implementadas. Puede acelerar el proceso desactivando el envío de copias de seguridad de Market o Samba de antemano.

![Copie de la sauvegarde en la memoria USB](images/migrateos-smart06.png)

### Etapa 3

El tercer paso le permitirá descargar la imagen que contiene la nueva versión del entorno Debian y comprobar su validez después de la descarga :

![Téléchargement de l'image](images/migrateos-smart07.png)

Este paso puede llevar un tiempo y dependerá de la velocidad de su conexión a Internet, así como del rendimiento de lectura / escritura de la llave USB :

![Vérification de l'image](images/migrateos-smart08.png)

### Paso 4

Con mucho, el paso más importante porque es la migración real del hardware. Sobre todo, no desconecte la llave USB ni corte la alimentación del Smart durante esta fase !

![Migración de la Smart](images/migrateos-smart09.png)

Este paso dura unos treinta minutos, después de los cuales se reiniciará la caja inteligente. Es probable que este primer reinicio lleve algún tiempo :

![Redémarrage de la Smart](images/migrateos-smart10.png)

### Finalización de la migración

Al final del proceso de migración, la caja inteligente se encuentra ahora en un entorno actualizado pero con un Jeedom virgen. Por tanto, la finalización del procedimiento consistirá en partir de una instalación limpia o en restaurar la copia de seguridad generada durante el primer paso :

![Finalisation migration](images/migrateos-smart11.png)

Felicitaciones, su Smart Box ahora está actualizado y operativo !

## Preguntas frecuentes

>**El proceso de migración se lleva a cabo correctamente, sin embargo, no parece que se hayan producido cambios después de reiniciar la caja ?**
>
>Repita la operación con otra memoria USB o reformatee completamente su memoria USB *(recreando la tabla de particiones con GParted por ejemplo)*.

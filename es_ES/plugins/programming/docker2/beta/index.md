# Complemento de administración de Docker

# Description

Este complemento permite instalar, administrar y crear contenedores Docker directamente desde Jeedom.

>**IMPORTANTE**
>
>Este complemento no pretende reemplazar el software dedicado como Portainer, solo está hecho para ejecutar comandos simples y administrar Docker sin dejar de ser básico.

# Configuration

Una vez instaladas las dependencias se debe activar "Docker 1" localmente (por el momento es posible agregar la conexión a un docker remoto). También puede configurar el cron para la frecuencia de actualización, le recomendamos que ponga ``*/5 * * * *``.

# Equipements

Si ya tiene Dockers en Jeedom, puede hacer clic en el botón "Sincronizar" para recuperar los acopladores existentes y crear el equipo Jeedom correspondiente.

También puede, desde Jeedom, crear nuevos Dockers. Para hacer esto, simplemente cree equipos Jeedom.

## Configuración general

- **Nombre del equipo** : Nombre de su equipo en Jeedom
- **Objeto padre** : Objeto padre del equipo
- **Categoría** : categoría de equipo
- **Activar** : activar o no el equipo
- **Visible** : hace que el equipo sea visible en el tablero
- **Host de Docker** : ventana acoplable que ejecuta el equipo *(Solo la habitación está disponible en este momento)*
- **Nombre del contenedor** : si realiza la creación a través de Jeedom, es importante que el nombre del contenedor sea el mismo que se menciona en ``docker compose`` Donde ``docker run`` de lo contrario, el contenedor Docker no se puede conectar al equipo Jeedom.
- **Salva las monturas** : le dice a Jeedom si debe guardar las carpetas montadas del contenedor Docker. Tenga cuidado de no activar la opción en todos los Dockers, especialmente si el tamaño de estos es grande.
- **Modo de creación** : pueden ser cualquiera de los dos ``Manuel``, es ``Jeedom Docker run`` *(creación usando un comando de ejecución docker hecho por Jeedom)*, es ``Jeedom docker composer`` *(creación usando un docker composer hecho por Jeedom)*.
- **Orden de creación** : solo aparece si está en modo ``Jeedom Docker run``. El comando para completar se refiere a todo lo que sigue ``docker run``.
- **Docker compone** : solo aparece si está en modo ``Jeedom Docker componer``. debe indicar aquí el contenido de su ``Docker compone``.

## Action

- **Guardar la ventana acoplable** : ejecutar una copia de seguridad de Docker. Atención Jeedom solo guarda la última copia de seguridad *(una copia de seguridad se realiza automáticamente al mismo tiempo que la copia de seguridad de Jeedom)*
- **Restaurar ventana acoplable** : le permite restaurar la última copia de seguridad de Docker
- **Descargar copia de seguridad** : le permite descargar la última copia de seguridad de Docker
- **Enviar copia de seguridad** : le permite enviar una copia de seguridad de Docker * (recuperada de una copia de seguridad de Jeedom en ``plugins/dockers/data/backup`` por ejemplo)*
- **Registros de Docker** : mostrar registros de Docker

## Informations

Muestra diversa información sobre el contenedor Docker :

- ID
- Commande
- Fecha de creación
- Taille
- Puertos asignados de host
- Redes
- Montage
- Image

## Commandes

Aquí tienes acceso a los siguientes comandos :

- **Comenzar**
- **Parar**
- **Para reiniciar**
- **Recrear** *(solo si la creación fue hecha por Jeedom)*
- **Borrar**
- **UPC** : carga de la CPU
- **Memoria** : carga de memoria
- **IO en** : escritura en disco
- **IO fuera** : lectura de disco
- **Redes en** : uso de la red en la conexión entrante
- **Redes fuera** : uso de red saliente
- **Estado** : estado de la ventana acoplable


# Assistant

Tiene la posibilidad, después de la creación de un equipo, de llamar a un **Asistente** *(botón superior derecho)* que te permitirá, a través de unas preguntas, generar un contenedor Docker específico. La lista se irá ampliando con el tiempo pero ya están disponibles para la creación de los siguientes contenedores :

- **Inicio de AdGuard**
- **Nodado**
- **Guardián de la bóveda**
- **Protector de alambre** *(wg-easy)*

# Code

En la página general del complemento que agrupa todos los equipos de Docker, tiene acceso a un botón **Codificado** que lo llevará directamente a un directorio Jeedom provisto para recibir los archivos de configuración de sus Dockers si es necesario.

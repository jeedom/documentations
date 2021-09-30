# Complemento de administración de Docker

## Description

Este complemento le permite instalar y administrar la ventana acoplable directamente desde Jeedom

>**IMPORTANTE**
>
>Este complemento no está destinado a reemplazar un software de tipo Portainer dedicado, solo está ahí para ejecutar comandos básicos y administrar (de manera básica) Docker

>**IMPORTANTE**
>
>Debido a los requisitos previos para instalar Docker, no es compatible con todo el hardware (incluido el Smart). Para que funcione, es absolutamente necesario una plataforma x86-64, rpi (3 o 4) o una caja Atlas

## Configuration

Una vez instaladas las dependencias, debes activar "Docker 1" localmente (por el momento es posible que agreguemos la conexión en un docker remoto). También puede configurar el cron para la frecuencia de actualización, le recomendamos que ponga "*/ 5 * * * *"

## Equipement

Si ya tiene Dockers en Jeedom, puede hacer clic en el botón sincronizar que recupera los Dockers existentes y crea el equipo Jeedom que corresponda.

También puede crear una nueva ventana acoplable de Jeedom, para eso simplemente necesita crear el equipo de Jeedom.

### Configuración general

- Nombre del equipo : Nombre de su equipo en Jeedom
- Objeto padre : Objeto padre del equipo
- Categoría : categoría de equipo
- Activar : activar o no el equipo
- Visible : hace que el equipo sea visible en el tablero
- Host de Docker : Docker que maneja el equipo (solo el local está disponible por el momento)
- Nombre del contenedor : nombre del contenedor en la ventana acoplable. Es muy importante que sea lo mismo que el docker compose o docker run si pasas por la creación a través de Jeedom. De lo contrario, el que no podrá conectar su equipo a la ventana acoplable que crea
- Salva las monturas : le dice a Jeedom si debe guardar los archivos de la ventana acoplable montados. Tenga cuidado de no activarlo en todas las ventanas acoplables, especialmente si su tamaño es grande
- Modo de creación : modo de creación, puede ser manual o "Jeedom Docker run" (creación con un comando de ejecución de Docker realizado por Jeedom), "Jeedom docker composer" (creación con un docker composer creado por Jeedom)
- Orden de creación : solo aparece si está en "Jeedom Docker run", el comando para dar es todo lo que está después de "Docker run"
- Docker compone : solo aparece si estás en "Jeedom Docker composer", debes poner tu Docker compuesto aquí

### Action

- Guardar la ventana acoplable : inicie una copia de seguridad de Docker, tenga cuidado Jeedom solo conserva la última copia de seguridad (una copia de seguridad se realiza automáticamente al mismo tiempo que la copia de seguridad de Jeedom)
- Restaurar ventana acoplable : le permite restaurar la última copia de seguridad de Docker
- Descargar copia de seguridad : le permite descargar la última copia de seguridad de Docker
- Enviar copia de seguridad : le permite devolver una copia de seguridad de Docker (recuperarse de una copia de seguridad de Jeedom en complementos / ventanas acoplables / datos / copia de seguridad, por ejemplo)
- Registros de Docker : mostrar registros de Docker

### Informations

Muestra información diversa sobre su ventana acoplable : 

- ID
- Commande
- Fecha de creación
- Taille
- Puertos asignados al host
- Redes
- Montage
- Image

## Commande

Aquí tienes los siguientes comandos : 

- Comenzar
- Arreter
- Para reiniciar
- Recreador (solo disponible si la creación fue realizada por Jeedom)
- Supprimer
- UPC : Uso de la CPU de Docker
- Memoria : Uso de la memoria de Docker
- IO en : uso de disco entrante
- IO fuera : uso de disco saliente
- Redes en : uso de la red entrante
- Redes fuera : uso de la red saliente
- Estado : estado de la ventana acoplable


## Assistant

También tienes la posibilidad, tras la creación de un dispositivo, de llamar a un asistente (arriba a la derecha) que contiene algún tipo de Docker (la lista crecerá con el tiempo) y te hará solo unas pocas preguntas para poner en ruta tu Docker

## Code

En la página principal del plugin también tienes un botón de código que te llevará directamente a un directorio de Jeedom, aquí es donde te aconsejamos que pongas los archivos de configuración de tus Dockers (si es necesario).
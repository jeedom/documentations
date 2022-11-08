# Complemento Z-Wave JS

El complemento Z-wave JS permite **control total del protocolo de automatización del hogar Z-Wave en Jeedom** basado en el trabajo realizado alrededor de la muy famosa librería **Interfaz de usuario de Z-Wave JS**.

El complemento Z-wave JS hace que las transmisiones sean más confiables y seguras al usar el **Protocolo MQTT**, ofreciendo, al mismo tiempo, posibilidades avanzadas de gestión de su red Z-Wave a los usuarios más expertos.

>**IMPORTANTE**
>
>Este complemento es compatible con Debian 11 "Bullseye" y, por lo tanto, es el complemento oficial preferido para administrar su red Z-Wave en Jeedom.

# Configuration

Después de instalar y activar el complemento, la instalación de dependencias debería comenzar a menos que la administración automática haya sido deshabilitada de antemano. En este caso, tendrás que hacer clic en el botón **Reanimar** para iniciar esta fase de instalación. El complemento oficial **Administrador de MQTT** siendo parte de las dependencias necesarias, se instalará y activará automáticamente durante la operación si aún no es el caso.

El resto de dependencias consiste en descargar, compilar y configurar la librería **Interfaz de usuario de Z-Wave JS**.

>**IMPORTANTE**
>
>La primera instalación de dependencias que incluye una fase de compilación, es probable que dure varias decenas de minutos dependiendo de la configuración de su hardware. Las actualizaciones de dependencia serán mucho más rápidas de instalar más adelante.

## Configuración del complemento

Respecto a la configuración del plugin, el punto esencial es la correcta selección del **Puerto del controlador Z-Wave** correspondiente a la interfaz física en la que está conectado el controlador.

Otros ajustes posibles son :

- **Aplicar el conjunto de configuración recomendado al incluir** : aplica directamente el conjunto de configuración recomendado por el equipo de Jeedom al incluir un nuevo módulo *(conseillé)*.

- **Eliminación automática de dispositivos excluidos** : elimina automáticamente los dispositivos excluidos de la red Z-Wave si está marcado. De lo contrario, el equipo se mantiene en Jeedom incluso si se ha excluido de la red. El equipo deberá entonces ser borrado manualmente o reutilizado asignándole un nuevo identificador Z-Wave.

- **Prefijo** : permite especificar el prefijo a usar en MQTT *(por defecto `zwave`)*.

### Llaves de seguridad

Las llaves de seguridad deben guardarse en un lugar seguro. Si pierde estas claves, los dispositivos incluidos en el modo seguro deberán emparejarse nuevamente. Las claves se pueden especificar, si los campos están vacíos o no son válidos, el complemento los generará y podrá verlos más tarde.

>**INFORMACIÓN**
>
>Si su controlador se usó con el complemento Openzwave y había incluido módulos en modo seguro, la clave S0 es : `0102030405060708090A0B0C0D0E0F10`.

## Administrador de MQTT

Como se explica en el preámbulo, el complemento Z-Wave JS requiere compatibilidad con el protocolo MQTT para comunicarse, el complemento oficial **Administrador de MQTT** servirá pues de soporte a estas comunicaciones.

Varios escenarios son posibles :

- **Todavía no está utilizando un corredor MQTT** : En este caso no tienes nada que hacer. Complementos **Z-Wave JS** y **Administrador de MQTT** intercambiará la información necesaria y las configuraciones automáticamente *(se instalará localmente un agente `Mosquitto` en la máquina)*.

- **Ya está utilizando el complemento Z-Wave JS** : No es necesaria ninguna intervención, el complemento Z-Wave JS recuperará automáticamente la información de conexión al corredor MQTT.

- **Ya está utilizando un corredor MQTT a través de un complemento que no es MQTT Manager** : En esta situación, debe seleccionar el modo **corredor remoto** y proporcionar información de inicio de sesión *(dirección y autenticación)* en la configuración del complemento MQTT Manager.

- **Quiere usar un corredor MQTT bajo Docker** : Todo lo que tienes que hacer es seleccionar el modo **ventana acoplable de intermediario local** en la configuración del complemento MQTT Manager antes de instalar `Mosquitto`.

En cualquier caso, el daemon del complemento MQTT Manager debe iniciarse antes de poder continuar. De lo contrario, un mensaje le advertirá, impidiendo el inicio del demonio Z-Wave JS.

## Abrir el complemento Zwave

También es importante abordar el caso de la presencia del complemento OpenZwave en paralelo con el complemento Z-Wave JS, el momento de cambiar de uno a otro por ejemplo *(Ver párrafo [**Migración desde OpenZwave**](#migration-depuis-openzwave))*.

En primer lugar, debe saber que no existe absolutamente ningún riesgo al usar los complementos Z-Wave JS y OpenZwave en paralelo. Incluso en caso de dificultad con el complemento Z-Wave JS, bastará con detener su daemon y reiniciar el del complemento OpenZwave para encontrar una red Z-Wave exactamente idéntica y funcional.

Por lo tanto, es necesario detener la gestión automática y luego detener el demonio del complemento OpenZwave para poder iniciar el demonio del complemento Z-Wave JS. Nuevamente, si no, un mensaje le advertirá, impidiendo el inicio del demonio Z-Wave JS.

>**IMPORTANTE**
>
>No elimine ningún equipo del complemento OpenZwave prematuramente, incluso si está deshabilitado durante la prueba!

## 1er inicio del daemon

A menos que se indique lo contrario, ahora se puede iniciar el demonio Z-Wave JS. De lo contrario, debería aparecer un mensaje en la página de configuración del complemento para identificar el motivo del bloqueo.

Si usa el complemento Z-Wave JS con un controlador en blanco, la red Z-Wave se inicia inmediatamente y está disponible, lista para las inclusiones de módulos.

En el caso de uso con un controlador ya incluido en una red Z-Wave, se debe dejar funcionando el plugin, el cual irá cargando automáticamente el equipo en Jeedom a medida que se entrevisten los módulos. Por lo tanto, es probable que el primer descubrimiento total de una red Z-Wave lleve mucho tiempo, según el tipo de módulos utilizados y su frecuencia de comunicación.

Los módulos aparecen en dos etapas :
- Primero con su `nodo id` sin imagen y sin identificación.
- Luego son identificados en una segunda vez.

Una vez que todos los módulos de la red eléctrica están iniciados y, por lo tanto, identificados, es importante despertar los módulos de las baterías o esperar a que se despierten. Solo a partir de este momento podemos considerar que la red está completamente iniciada.

>**INFORMACIÓN**
>
>A diferencia del complemento OpenZwave, después de esta primera fase de entrevista, los reinicios de la red son instantáneos a partir de entonces.

## Configuración del módulo

### Noeud

### Valeurs

### Groupe

# Outils

## Inclusion

## Exclusion

## Synchroniser

## Red Z-Wave

### Resumen

### Actions

### Statistiques

### Gráfico de red

### Tabla de ruteo

## Santé

## Statistiques

# Compatibilité

# Solución de problemas y diagnóstico

## Migración desde OpenZwave

Antes de considerar cambiar permanentemente del complemento OpenZwave al complemento Z-Wave JS, es esencial asegurarse de que todos los módulos de red sean totalmente compatibles. Este paso puede tomar fácilmente varios días para validar todas las posibilidades y escenarios.

Luego, una vez que esté seguro de que el complemento OpenZwave ya no es esencial, puede usar el [**reemplazo de equipos y controles**](https://doc.jeedom.com/es_ES/core/4.3/replace){:target="\_blank"} del núcleo para migrar rápida y fácilmente su equipo existente al nuevo complemento.

## Módulo no o mal reconocido

## Reemplace un módulo defectuoso

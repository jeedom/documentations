# Complemento de monitoreo

El complemento permite monitorear sistemas, tiene varios motores CLI (bash), SNMP, ping y URL

> **Importante**
>
> Este complemento es bastante complejo y, por lo tanto, necesita leer la documentación y algunos conocimientos. NO ES ENCHUFE Y JUEGA

# Configuration

Después de descargar el complemento, simplemente deberá activar el complemento

# Equipements

Se puede acceder a la configuración del equipo de Monitoreo desde el menú Complementos y luego Monitoreo

- Nombre del equipo
- Objeto padre
- Categoría
- Activer
- Visible
- Frecuencia de actualización : en formato cron (ex \*/ 15 \* \* \* \*)
- Motor : motor para activar el equipo en cuestión.
- Configuración de Bash / Shell
		- Modo : local o remoto (si es local, no hay nada más que llenar)
		- IP
		- Nombre de usuario
		- Contraseña
- Configuración de SNMP
		- IP
		- Protocole
		- Nombre de usuario
		- Contraseña
		- Autenticación de moda
		- Seguridad
		- Protocolo privado
		- Frase de contraseña Priv
- Configuración de ping
		- IP

# Moteur

SNMP
----

El motor SNMP le permite conectarse a máquinas en SNMP y recuperar valores. Debajo del ejemplo de SNMP OID

### OID generales

#### Load

| OID                                  | Datos                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.10.1.3.1           | 1 minuto de carga                        |
| .1.3.6.1.4.1.2021.10.1.3.2           | 5 minutos de carga                        |
| .1.3.6.1.4.1.2021.10.1.3.3           | 15 minutos de carga                       |

#### CPU

| OID                                  | Datos                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.11.9.0             | Porcentaje de tiempo de CPU del usuario          |
| .1.3.6.1.4.1.2021.11.50.0            | Tiempo de CPU de usuario sin procesar                    |
| .1.3.6.1.4.1.2021.11.10.0            | Porcentajes de tiempo de CPU del sistema       |
| .1.3.6.1.4.1.2021.11.52.0            | Tiempo de CPU del sistema sin procesar                  |
| .1.3.6.1.4.1.2021.11.11.0            | Porcentajes de tiempo de CPU inactivo         |
| .1.3.6.1.4.1.2021.11.53.0            | Tiempo de CPU inactivo sin procesar                    |
| .1.3.6.1.4.1.2021.11.51.0            | Tiempo agradable agradable de la CPU                    |

#### Estadísticas de memoria

| OID                                  | Datos                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.4.3.0              | Tamaño total de intercambio                      |
| .1.3.6.1.4.1.2021.4.4.0              | Espacio de intercambio disponible                 |
| .1.3.6.1.4.1.2021.4.5.0              | RAM total en la máquina                 |
| .1.3.6.1.4.1.2021.4.6.0              | RAM total libre                       |
| .1.3.6.1.4.1.2021.4.11.0             | RAM total utilizada                       |
| .1.3.6.1.4.1.2021.4.13.0             | RAM total compartida                     |
| .1.3.6.1.4.1.2021.4.14.0             | RAM total almacenada                   |
| .1.3.6.1.4.1.2021.4.15.0             | Memoria total en caché                  |

#### Disk

| OID                                  | Datos                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.9.1.2.X            | Ruta donde se monta el disco       |
| .1.3.6.1.4.1.2021.9.1.3.X            | Ruta del dispositivo para la partición |
| .1.3.6.1.4.1.2021.9.1.6.X            | Tamaño total del disco / partición (kBytes)                             |
| .1.3.6.1.4.1.2021.9.1.7.X            | Espacio disponible en el disco          |
| .1.3.6.1.4.1.2021.9.1.8.X            | Espacio usado en el disco               |
| .1.3.6.1.4.1.2021.9.1.9.X            | Porcentaje de espacio utilizado en el disco     |
| .1.3.6.1.4.1.2021.9.1.10.X           | Porcentaje de inodes utilizados en el disco    |

#### System

| OID                                  | Datos                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.1.3.0                   | Tiempo de actividad del sistema                        |

### OID de VMware

| OID                                  | Datos                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.25.2.3.1.6.6            | Uso de la memoria                  |
| .1.3.6.1.4.1.6876.1.2.0              | Versión de VMware                    |

### OID Synology

| OID                                  | Datos                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.1.5.1.0            | Modelo                               |
| .1.3.6.1.4.1.6574.1.5.3.0            | Versión DSM                          |
| .1.3.6.1.4.1.6574.1.1.0              | Estado del sistema                       |
| .1.3.6.1.4.1.6574.3.1.1.2.0          | Muestra el estado RAID               |
| .1.3.6.1.4.1.6574.1.4.2.0            | Ventilador de la CPU                              |
| .1.3.6.1.4.1.6574.1.4.1.0            | Sistema de ventilador                          |
| .1.3.6.1.4.1.2021.11.9.0             | Carga de la CPU                           |
| .1.3.6.1.4.1.6574.1.2.0              | Temperatura del sistema                         |
| .1.3.6.1.4.1.6574.2.1.1.5.X          | Estado del disco X (comienza en 0)    |
| .1.3.6.1.4.1.6574.2.1.1.6.X          | Temperatura de disco X (comienza en 0)                                   |
| .1.3.6.1.4.1.6574.3.1.1.2.X          | Estado de la incursión X (comienza en 0)      |
| .1.3.6.1.4.1.6574.6.1.1.3.1          | Número de usuarios conectados en CIFS                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.2          | Número de usuarios registrados en AFP |
| .1.3.6.1.4.1.6574.6.1.1.3.3          | Número de usuarios registrados en NFS |
| .1.3.6.1.4.1.6574.6.1.1.3.4          | Número de usuarios conectados a través de FTP |
| .1.3.6.1.4.1.6574.6.1.1.3.5          | Número de usuarios conectados en SFTP                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.6          | Número de usuarios registrados en HTTP / HTTPS                           |
| .1.3.6.1.4.1.6574.6.1.1.3.7          | Número de usuarios conectados en TELNET                               |
| .1.3.6.1.4.1.6574.6.1.1.3.8          | Número de usuarios registrados en SSH |
| .1.3.6.1.4.1.6574.6.1.1.3.9          | Número de usuarios conectados OTROS                                |

### OID Synology UPS

| OID                                  | Datos                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.4.1.1.0            | Modelo                               |
| .1.3.6.1.4.1.6574.4.2.1.0            | Estado                               |
| .1.3.6.1.4.1.6574.4.2.12.1.0         | Carga                               |
| .1.3.6.1.4.1.6574.4.3.1.1.0          | Estado de la batería                        |
| .1.3.6.1.4.1.6574.4.3.6.1.0          | Autonomía                            |

### OID calculados por el complemento

| OID                                  | Datos                              |
|--------------------------------------|--------------------------------------|
| sysuptime                            | Tiempo de actividad del sistema formateado            |
| memoria utilizada                           | Uso de memoria real       |
| cpuused                              | Uso promedio de CPU bajo VMware                               |
| vmwarerunvm                          | Número de máquinas virtuales iniciadas en vmware     |
| diskused::X                          | Velocidad de llenado del disco X      |
| networkin::X                         | Interfaz de salida promedio X rendimiento                               |
| networkout::X                        | Flujo promedio de la interfaz de entrada X                               |
| runprocess::X                        | Da el número de procesos X que se están ejecutando                               |

Ping
----

Para ping hay 2 comandos posibles :

| Comando                             | Datos                              |
|--------------------------------------|--------------------------------------|
| de ping                                 | Resultado de ping                     |
| latencia                              | prueba de latencia                      |

CLI
---

Aquí puede usar todos los comandos bash o comandos creados previamente por el complemento :

| Comando                             | Datos                              |
|--------------------------------------|--------------------------------------|
| cpufreq                              | Frecuencia de la CPU                        |
| cputemp                              | Temperatura de la CPU                      |
| uso de CPU                             | Uso de CPU en%                 |
| memuse                               | % de memoria utilizada                 |
| intercambiar                                 | % de intercambio utilizado                    |
| loadavg15                            | Carga más de 15 minutos                     |
| tiempo de actividad                               | Tiempo de actividad de la máquina                 |
| hdduse::\#mount\#                    | % de uso del punto de montaje *montar*                              |

URL
---

| Comando                             | Datos                              |
|--------------------------------------|--------------------------------------|
| access::\#url\#::\#username\#::\#password\# | Probar el acceso a una URL con *URL* : URL à tester (ex <http://www.google.fr>), *Nombre de usuario*: nombre de usuario (si es necesario),*Contraseña* : contraseña de usuario (puede estar vacía)       |

# Instalación en una máquina virtual

El siguiente procedimiento se basa en el uso de una imagen del sistema que incluye Debian y Jeedom preinstalados.

>**INFORMACIÓN**
>
>Para instalar Jeedom manualmente en una máquina virtual con Debian, consulta la documentación sobre [la instalación mediante la línea de comandos](cli).

## Creación de la máquina virtual

Seguramente ya dispones de un hipervisor para leer esta documentación. Aunque el proceso de creación de una máquina virtual *(VM)* es bastante similar en todas las soluciones, es imprescindible, por supuesto, seguir la documentación específica de la plataforma que utilices.

Por citar algunos hipervisores conocidos a modo de ejemplo:

- [**VirtualBox**](https://www.virtualbox.org/){:target="_blank"} : Hipervisor de tipo 2, gratuito y de código abierto, ideal para entornos de prueba o puestos de trabajo. Compatible con Windows, macOS y Linux.
- [**VMware**](https://www.vmware.com/){:target="_blank"} : Amplia gama de hipervisores, entre los que se incluyen VMware Workstation (tipo 2) para estaciones de trabajo y VMware ESXi (tipo 1) para servidores. Solución robusta y muy utilizada en el ámbito empresarial.
- [**Proxmox**](https://www.proxmox.com/en/){:target="_blank"} : Plataforma de código abierto basada en KVM (tipo 1), que combina virtualización completa y contenedores LXC. Muy adecuada para servidores y entornos profesionales o «homelabs».
- [**Hyper-V**](https://learn.microsoft.com/fr-fr/windows-server/virtualization/hyper-v/get-started/Install-Hyper-V){:target="_blank"} : Hipervisor nativo de Microsoft integrado en Windows Server y en las ediciones Pro y Enterprise de Windows.

## Configuración de la máquina virtual

En realidad, no hay una configuración recomendada para Jeedom, ya que dependerá de la carga de cada instancia.

Para conseguir un equipo robusto sin que resulte desproporcionado, se puede considerar que los siguientes valores son suficientes en la mayoría de los casos:

| CPU | Memoria | Disco |
|----------------|----------------|----------------|
| 2 núcleos | 2048 MiB | 16 GiB |

## Arranque desde la imagen del sistema

El equipo de Jeedom ofrece imágenes del sistema optimizadas para ordenadores de 64 bits.

Antes de iniciar la máquina virtual, hay que descargar la imagen del sistema que quieras instalar *(algunos hipervisores permiten descargar el archivo directamente desde su enlace URL)*:

- [**Imagen(es) del sistema Jeedom x86-64**](https://images.jeedom.com/x86-64/){:target="_blank"}

>**INFORMACIÓN**
>
>Consultar [**documentación específica**](/compatibility/#Images%20système%20officielles) Para obtener más información sobre las imágenes del sistema Jeedom.

El archivo de imagen en formato `iso` A continuación, debe cargarse en la unidad óptica *(CD/DVD)* emulada por la máquina virtual, que a su vez debe estar en primera posición en el orden de arranque.

>**IMPORTANTE**
>
>En caso de dificultades, consulta la documentación del hipervisor.

## Opciones de instalación

Tras iniciar la máquina virtual con la imagen del sistema cargada en la unidad óptica, aparecen en pantalla diferentes opciones de instalación:

{% include lightbox.html src="../images/install-menu-amd64.jpg" data="InstallMenuAMD64" title="Menu d'installation Jeedom (AMD64)" imgstyle="width:75%;display:block;margin:0 auto;" %}

- **Instalar Jeedom (modo automático)**: **instala el sistema automáticamente** sin necesidad de intervención alguna. El equipo se apaga al finalizar la operación.
>**IMPORTANTE**
>
>Este modo se ejecuta de forma predeterminada al cabo de 60 segundos, **por lo que la instalación puede realizarse sin conectarse a la pantalla virtual**.

- **Instalación de Jeedom (modo manual)**: en este modo, debes **introducir manualmente la configuración del sistema que vas a instalar** *(idioma, país, red, dispositivo de almacenamiento, etc.)*.

- **Jeedom Live**: permite **probar Jeedom en un entorno no persistente** sin necesidad de instalar el sistema.
>**INFORMACIÓN**
>
>Esta función está disponible a partir de Debian 12 Bookworm.

## Compatibilidad de hardware

La lista, no exhaustiva, de hipervisores compatibles con Jeedom se puede consultar en [Documentación **Compatibilidad**](/compatibility/#Matériels%20supportés)

## Primera conexión

Consulta la documentación relativa a la [**Primera conexión**](/premiers-pas/#Première%20connexion) para acceder a la interfaz de Jeedom tras la instalación.

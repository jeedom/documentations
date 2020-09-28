# Instalación en una máquina física

El propósito de esta documentación es describir la instalación de jeedom en una máquina física x86-64 (tipo Intel NUC)

# Instalación automática

Descargar la iso de jeedom [aquí](https://images.jeedom.com/x86-64/).

## Grabación en llave USB

Puede utilizar la herramienta UNetbootin (descargable [aquí](https://unetbootin.github.io/) ).

Una vez lanzado : 

- Seleccione "Imagen de disco" (en la parte inferior)
- Haga clic en ... y seleccione el archivo iso de Jeedom descargado en el paso anterior
- Seleccione su llave USB en "Lector"
- Haga clic en Aceptar

## Installation

Inserte la llave USB en su máquina física, configure el arranque en la unidad USB, luego : 

- Seleccione "Opciones avanzadas"
- Y finalmente "Instalar en modo texto"

>**Nota**
>
>Todas las demás opciones darán lugar a error solo la descrita en esta documentación y válida

Espere a que la instalación se lleve a cabo por sí sola hasta el final

>**Nota**
>
>Es absolutamente necesario una conexión a Internet durante la instalación

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

# Instalación manual

Una vez que el sistema operativo está instalado (se prefiere la última versión de Debian) siga este [Documentación](https://doc.jeedom.com/es_ES/installation/cli)




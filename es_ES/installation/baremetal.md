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

Entonces solo tienes que ``booter`` en la llave USB. Las placas base generalmente tienen 2 modos de arranque : UEFI (más reciente, la opción predeterminada) y BIOS (el historial). Te recomendamos que lleves BIOS (la opción de cambiar según cada placa base y no siempre es fácil de encontrar, por lo que no podemos darte un procedimiento general)

## Instalación en modo Bios (recomendado)

- Seleccione "Instalar Jeedom"
- Y finalmente "si"

## Instalación en modo UEFI (no recomendado)

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

Una vez que el sistema operativo está instalado (se prefiere la última versión de Debian) siga este [documentación](https://doc.jeedom.com/es_ES/installation/cli)




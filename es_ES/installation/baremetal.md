# Instalación en una máquina física

El propósito de esta documentación es describir la instalación de jeedom en una máquina física x86-64 (tipo Intel NUC)

# Instalación automática

Descargar jeedom iso [aquí](https://images.jeedom.com/x86-64/).

## Grabado en llave USB

Puede utilizar la herramienta UNetbootin (descargable [aquí](https://unetbootin.github.io/) ).

Una vez lanzado : 

- Seleccione "Imagen de disco" (en la parte inferior)
- Haga clic en ... y seleccione el archivo iso de Jeedom descargado en el paso anterior
- Seleccione su llave USB en "Drive"
- Haga clic en Aceptar

Entonces solo tienes que ``booter`` en la memoria USB. Las placas base suelen tener 2 modos de arranque : UEFI (más reciente, la opción predeterminada) y BIOS (el historial). Te recomendamos que lleves BIOS (la opción cambia según cada placa base y no siempre es fácil de encontrar, por lo que no podemos darte un procedimiento general)

## Instalación en modo Bios (recomendado)

- Seleccione "Instalar Jeedom"
- Y finalmente "sí"

## Instalación en modo UEFI (no recomendado)

- Seleccione "Opciones avanzadas"
- Y finalmente "Instalar en modo texto"

>**NOTA**
>
>Todas las demas opciones saldran por error solo la descrita en esta documentacion y valida

Espere a que la instalación proceda por sí sola hasta el final

>**NOTA**
>
>Necesita absolutamente una conexión a Internet durante la instalación

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

# Instalación manual

Una vez que el sistema operativo esté instalado (preferentemente, la última versión de Debian), siga este [documentación](https://doc.jeedom.com/es_ES/installation/cli)




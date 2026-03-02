# Instalación en Raspberry Pi

Encontrará aquí la documentación para instalar Jeedom en una PI de frambuesa **con una tarjeta MiroSD.**. 

# Instalación de línea de comando

## Descargue la última imagen "lite""

[Generador de imágenes Raspberry Pi](https://www.raspberrypi.com/software/)  .

## Habilitar acceso SSH

> **Advertencia**
>
> Por razones de seguridad, el acceso SSH ya no está habilitado de forma predeterminada en esta distribución. .

## Inicie la Raspberry Pi

Inserte su tarjeta MicroSD, conecte el cable de red y conecte la alimentación.

## Conectarse en SSH

Identifica tu Raspberry Pi en la red

Necesita saber la dirección IP de su Raspberry PI. Muchas soluciones :

-   Consulte la configuración de DHCP en su enrutador
-   Utilice un escáner de puertos como "Angry IP Scanner" [aquí](http://angryip.org/download/#windows)

Establecer conexión

Luego use, por ejemplo, PuTTY para establecer su conexión [Aquí](http://www.putty.org/)

Ingrese la dirección IP de su Raspberry Pi (aquí 192.168.0.10) y haga clic en abrir. Acepte el mensaje de seguridad predeterminado en el primer inicio de sesión.

.

> **Importante**
>
> Por razones de seguridad, es imprescindible cambiar la contraseña predeterminada. Los casos de piratería basados en el uso del par de inicio de sesión / contraseña predeterminado de Raspberry Pi están particularmente extendidos. (Comando : passwd y sudo passwd)

## Inicie el script de instalación de jeedom

```
wget https://raw.githubusercontent.com/jeedom/core/master/install/instalar.sh
chmod +x instalar.sh
./instalar.sh
```

> **Nota**
>
> Dependiendo de su velocidad de internet, la instalación puede tomar de 45 a 90 minutos. No debe interrumpir el proceso antes del final. De lo contrario, tendrá que repetir todo el procedimiento.

Luego solo vaya a IP\_MACHINE\_JEEDOM

> **Nota**
>
> Las credenciales predeterminadas son admin / admin

Para obtener más información sobre la instalación de Jeedom, consulte esto [documentación](https://doc.jeedom.com/es_ES/installation/cli)

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

# Configuración del DNS de Jeedom

## Objectif

Configure el DNS de Jeedom para tener acceso a su Jeedom externamente mediante una URL HTTPS

> **IMPORTANTE**
>
>Jeedom DNS actúa como un proxy inverso, por lo que solo da acceso a su Jeedom en https, por lo que no será posible acceder a su jeedom en SSH de forma remota con Jeedom DNS

## Requisitos previos

Para tener acceso a Jeedom DNS, es absolutamente necesario tener un paquete de servicio de energía o más.

## Principe

El principio de Jeedom DNS es muy simple, su Jeedom se conectará a uno de nuestros servidores VPN (conexión cifrada). Entonces este servidor en cuestión con nosotros hace el "proxy inverso" durante la solicitud : toma su solicitud de conexión a su gusto y se la transfiere.

Este principio tiene la ventaja de no exponer su Jeedom en Internet, no hay que abrir puertos para hacer.

> **IMPORTANTE**
>
> Para que esto funcione, su caja debe autorizar una conexión saliente en los puertos 1194,1195,1996,1997,1198,1199,2000 y 2001 en UDP. En particular, para Huawei Liveboxes y enrutadores 4g, el nivel del firewall debe reducirse, para las personas libres, a veces también debe cambiar a una IP fija (de lo contrario, Free comparte su IP entre varios usuarios, lo que causa problemas para el DNS) además para el Freebox Delta tienes que desactivar el control parental 

## Establecimiento

### Jeedom

Es súper simple, debe conectar su Jeedom al mercado (consulte la documentación del primer paso). 

Luego, en su Jeedom, en la administración, vaya a la pestaña Redes y marque "Usar Jeedom DNS" y luego guarde.

Jeedom iniciará el DNS y le dará su URL de acceso a su Jeedom

> **IMPORTANTE**
>
> Puede cambiar esta URL yendo a la página de perfiles de su mercado, luego en la pestaña Mis servicios y haciendo clic en configuración en "Acceso remoto fácil", en el campo DNS puede personalizarlo. Después del registro, es necesario en Jeedom reiniciar el DNS (Sistema -> configuración -> configuración, luego pestaña Redes y reiniciar en la parte "DNS (proxy) Market""). Es recomendable hacer esta manipulación con acceso local a su caja.

Aquí está su Jeedom accesible desde el exterior en https

## FAQ

> **¿Necesito abrir puertos en mi caja?**
>
> No, no es necesario abrir un puerto desde su caja de Internet a su Jeedom. La conexión está en la dirección Jeedom -> VPN, por lo que es una conexión saliente (en los puertos 1194,1195,1996,1997,1198,1199,2000 y 2001) y no una conexión entrante.

> **Por qué Jeedom DNS protege mi acceso a él**
>
> El DNS de Jeedom le permite configurar algo muy importante, el acceso HTTPS, esto garantiza que la conexión entre su navegador y su Jeedom esté encriptada, además, el certificado es válido, nadie podrá suplantar su Jeedom. Finalmente, la conexión VPN en su Jeedom y nuestros servidores también está encriptada.

> **Cambié el puerto de escucha interno de mi Jeedom y el DNS de Jeedom ya no funciona**
>
> De hecho, el DNS de Jeedom solo funciona si su Jeedom escucha en el puerto local 80 (todos los demás puertos están cerrados en la interfaz VPN cuando se conecta). Esto no plantea problemas de seguridad porque la VPN crea un túnel encriptado, por lo que incluso si el flujo está libre en el puerto 80, está encriptado en el túnel VPN.

> **No tengo la página de inicio de sesión pero no puedo iniciar sesión**
>
> Verifique que haya cambiado las credenciales predeterminadas de jeedom (admin/admin) y que su usuario no esté restringido solo a local.

> **Mi configuracion es buena pero imposible tener una pagina que da vuelta al infinito**
>
> Si su configuración es buena (secuencia de inicialización completada en el registro de openvpn_DNS_Jeedom) pero no puede hacer que la página de inicio de sesión funcione con la aplicación móvil aleatoriamente y está en 4g o al final de la línea ADSL. En este caso, debe marcar la casilla en la configuración de red de jeedom que está en 4g y reiniciar el dns así jeedom cambiará el mtu de su conexión para reducir el tamaño de los paquetes. Dependiendo de las versiones de Jeedom, esta opción es administrada automáticamente por el núcleo (y, por lo tanto, no aparece), simplemente reinicie el DNS.

> **Tengo el error "ERROR: No se puede abrir TUN/TAP dev/dev/net/tun: No existe tal archivo o directorio (errno=2)"**
>
> Este error generalmente ocurre en instalaciones tipo docker, como se indica en la documentación de [compatibilidad](https://doc.jeedom.com/es_ES/compatibility/) el soporte de docker está en beta precisamente por este tipo de problema. La solución suele ser instalar openvpn en el host (cuando sea posible)

# Implementación de Jeedom DNS

## Objectif

Configure Jeedom DNS para que tenga acceso a su Jeedom externamente a través de una URL HTTPS

> **Importante**
>
>El DNS de Jeedom actúa como un proxy inverso por lo que solo da acceso a su Jeedom en https, por lo tanto no será posible acceder a su Jeedom en SSH de forma remota con el DNS de Jeedom

## Requisitos previos

Para tener acceso a Jeedom DNS es absolutamente necesario tener un paquete de servicio de energía o más.

## Principe

El principio de DNS de Jeedom es muy simple, su Jeedom se conectará a uno de nuestros servidores VPN (conexión cifrada). Entonces este servidor en cuestión con nosotros hace "proxy inverso" durante la solicitud : toma su solicitud para conectarse a su libertad y se la transfiere.

Este principio tiene la ventaja de no exponer su Jeedom en Internet, no hay apertura de puerto para hacer.

> **Importante**
>
> Para que esto funcione, su caja debe permitir una conexión saliente en los puertos 1194,1195,1996,1997,1198,1199,2000 y 2001 en UDP. En particular, para Liveboxes y enrutadores Huawei 4G, debe reducir el nivel del firewall; para las personas gratuitas, a veces también debe cambiar a una IP fija (de lo contrario, la gratuita comparte su IP entre varios usuarios, lo que plantea problemas para el DNS). Freebox Delta necesitas desactivar los controles parentales 

## Configurar

### Jeedom

Ahí es súper simple, debe conectar su Jeedom al mercado (consulte la documentación del primer paso). 

Luego, en su Jeedom, en su administración, vaya a la pestaña Redes y marque "Usar DNS de Jeedom" y luego guarde.

Jeedom iniciará el DNS y le dará su URL de acceso a su Jeedom

> **Importante**
>
> Puedes cambiar esta URL yendo a tu página de perfil de mercado, luego a la pestaña de mis servicios y haciendo clic en configuración en "Fácil acceso remoto", en el campo DNS puedes personalizarla. Después del registro, debe reiniciar el DNS en Jeedom (Configuración -> Sistema -> Configuración, luego la pestaña Redes y reiniciar en la sección "DNS (proxy) Market""). Es recomendable hacer esta manipulación con acceso local a su caja.

Aquí se puede acceder a su Jeedom desde el exterior en https

## FAQ

> **¿Hay necesidad de abrir puertos en mi caja?**
>
> No, no es necesario abrir un puerto en su caja de Internet a su Jeedom. La conexión está en la dirección Jeedom -> VPN, por lo que es una conexión saliente (en los puertos 1194,1195,1996,1997,1198,1199,2000 y 2001) y no una conexión entrante.

> **¿Por qué Jeedom DNS protege mi acceso?**
>
> Jeedom DNS le permite configurar algo muy importante, el acceso HTTPS, esto garantiza que la conexión entre su navegador y su Jeedom esté encriptada, además el certificado es válido, nadie podrá suplantar su Jeedom. Finalmente, la conexión VPN entre tu Jeedom y nuestros servidores también está encriptada.

> **Cambié el puerto de escucha interno de mi Jeedom y el Jeedom DNS ya no funciona**
>
> De hecho, el DNS de Jeedom solo funciona si su Jeedom escucha en el puerto local 80 (todos los demás puertos están cerrados en la interfaz VPN cuando se conecta). Esto no plantea problemas de seguridad porque la VPN crea un túnel encriptado, por lo que incluso si el flujo está libre en el puerto 80, está encriptado en el túnel VPN.

> **No tengo la página de inicio de sesión pero no puedo iniciar sesión**
>
> Compruebe que ha cambiado las credenciales predeterminadas de jeedom (admin / admin) y que su usuario no está restringido solo localmente.

> **Mi configuración es buena pero imposible tener una página que da vuelta infinitamente**
>

> **Tengo el error "ERROR: No se puede abrir TUN / TAP dev / dev / net / tun: No existe tal archivo o directorio (errno = 2)"**
>
> Este error generalmente ocurre en instalaciones de tipo acoplador, como se indica en la documentación para [compatibilidad](https://doc.jeedom.com/es_ES/compatibility/) el soporte de Docker es beta precisamente por este tipo de problema. La solución suele ser instalar openvpn en el host (cuando sea posible))

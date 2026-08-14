# Configuración del DNS de Jeedom

## Objetivo

Configurar el DNS de Jeedom para poder acceder a Jeedom desde el exterior mediante una URL HTTPS

> **IMPORTANTE**
>
>El DNS de Jeedom actúa como un proxy inverso, por lo que solo permite el acceso a tu Jeedom a través de HTTPS; por lo tanto, no será posible acceder a tu Jeedom de forma remota mediante SSH con el DNS de Jeedom

## Requisitos previos

Para poder acceder al DNS de Jeedom, es imprescindible disponer de un paquete Power o superior.

## Principio

El principio del DNS de Jeedom es muy sencillo: tu Jeedom se conectará a uno de nuestros servidores a través de una VPN (conexión cifrada). A continuación, dicho servidor actúa como «proxy inverso» al recibir la solicitud: recoge tu solicitud de conexión a tu Jeedom y la reenvía a este.

Esta forma de hacerlo tiene la ventaja de que tu Jeedom no queda expuesto en Internet, por lo que no es necesario abrir ningún puerto.

> **IMPORTANTE**
>
> Para que esto funcione, es necesario que tu router permita una conexión saliente en los puertos 1194, 1195, 1196, 1197, 1198, 1199, 2000 y 2001 en UDP. En concreto, en el caso de las Livebox y los routers 4G de Huawei, hay que reducir el nivel del cortafuegos; para los usuarios de Free, a veces también es necesario cambiar a una IP fija (ya que, de lo contrario, Free comparte tu IP entre varios usuarios, lo que provoca problemas con el DNS); además, en el caso de las Freebox Delta, hay que desactivar el control parental.

## Instalación

### Jeedom

Es muy sencillo: solo tienes que conectar tu Jeedom al Market (consulta la documentación de primeros pasos).

A continuación, en tu Jeedom, en la sección de administración, ve a la pestaña «Redes» y marca la casilla «Utilizar los DNS de Jeedom»; después, guarda los cambios.

Jeedom iniciará el DNS y te proporcionará la URL de acceso a tu Jeedom

> **IMPORTANTE**
>
> Puedes cambiar esta URL accediendo a tu página de perfil del Market, yendo a la pestaña «Mis servicios» y haciendo clic en «Configuración» en «Acceso remoto simplificado»; allí, en el campo «DNS», puedes personalizarla. Tras guardar los cambios, hay que reiniciar el DNS en Jeedom (Ajustes -> Sistema -> Configuración, luego en la pestaña «Redes» y reiniciar en la sección «DNS (proxy) Market»). Se recomienda realizar esta operación con acceso local a tu router.

Ya está, ahora puedes acceder a tu Jeedom desde fuera a través de https

## Preguntas frecuentes

> **¿Es necesario abrir puertos en mi router?**
>
> No, no es necesario abrir ningún puerto en tu router de Internet hacia tu Jeedom. La conexión se establece en el sentido Jeedom -> VPN, por lo que se trata de una conexión saliente (en los puertos 1194, 1195, 1996, 1997, 1198, 1199, 2000 y 2001) y no de una conexión entrante.

> **¿Por qué el DNS de Jeedom protege mi acceso al mismo?**
>
> Los DNS de Jeedom permiten configurar algo muy importante: el acceso HTTPS, que garantiza que la conexión entre tu navegador y tu Jeedom esté cifrada; además, al ser el certificado válido, nadie podrá suplantar a tu Jeedom. Por último, la conexión VPN entre tu Jeedom y nuestros servidores también está cifrada.

> **He cambiado el puerto de escucha interno de mi Jeedom y los DNS de Jeedom ya no funcionan**
>
> Efectivamente, el DNS de Jeedom solo funciona si tu Jeedom escucha en el puerto local 80 (todos los demás puertos están cerrados en la interfaz de la VPN durante la conexión). Esto no supone ningún problema de seguridad, ya que la VPN crea un túnel cifrado, por lo que, aunque el tráfico sea en claro en el puerto 80, queda cifrado dentro del túnel de la VPN.

> **No tengo la página de inicio de sesión, pero no puedo iniciar sesión**
>
> Comprueba que has cambiado correctamente las credenciales predeterminadas de Jeedom (admin/admin) y que tu usuario no tiene restricciones para acceder únicamente de forma local.

> **Mi configuración es correcta, pero no consigo que se cargue la página; se queda cargando indefinidamente**
>

> **Me aparece el error «ERROR: No se puede abrir el dispositivo TUN/TAP /dev/net/tun: No existe tal archivo o directorio (errno=2)»**
>
> Este error suele producirse en instalaciones de tipo Docker, tal y como se indica en la documentación de [compatibilidad](/compatibility) La compatibilidad con Docker está en fase beta precisamente debido a este tipo de problemas. La solución suele ser instalar OpenVPN en el servidor (cuando sea posible).

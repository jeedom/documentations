# Instalación en Freebox Delta

Es posible instalar en Freebox Delta Jeedom a través del sistema VM.

## Conexión con el Delta

Debes ir a la interfaz de configuración de tu Freebox Delta. Luego haga clic en máquinas virtuales.

![delta1](images/delta1.png)

## Configura las diferentes opciones

Haga clic en "Agregar una máquina virtual"
![delta2](images/delta2.png)

Configurar características. Te recomendamos poner 2 CPUs y el máximo en RAM.

![delta3](images/delta3.png)

Configurar usuario y contraseña, **debe mantenerlos en la memoria, se le preguntarán durante una conexión SSH**:
![delta4](images/delta4.png)

## Instalación de carga

Espera mientras se descarga la imagen
![delta5](images/delta5.png)

## Conéctese a su Jeedom

Puedes conectarte usando la dirección indicada en la página:
![delta6](images/delta6.png)

Recuerde asignar el puerto USB de Delta a la VM si desea utilizar una antena.

No **no** marque "Pantalla", esto es inútil en la imagen de Jeedom (aparte del consumo excesivo).

La dirección IP de su Jeedom en Freebox Delta está escrita en la parte superior, debajo de su nombre.

El nombre de usuario y la contraseña predeterminados son admin/admin cuando accede a jeedom a través de su navegador.

Para el resto, puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index.html)

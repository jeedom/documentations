# Instalación en Freebox Delta

Es posible instalar Jeedom en Freebox Delta a través del sistema de máquinas virtuales.

## Conexión a Delta

Debes acceder a la interfaz de configuración de tu Freebox Delta. A continuación, haz clic en «VMs».

![delta1](../images/delta1.png)

## Configurar las distintas opciones

Haz clic en «Añadir una máquina virtual»
![delta2](../images/delta2.png)

Configura las especificaciones. Te recomendamos que elijas 2 CPU y la máxima cantidad de RAM.

![delta3](../images/delta3.png)

Configura el nombre de usuario y la contraseña; **es importante que los recuerdes bien, ya que te los pedirán al iniciar sesión por SSH**:
![delta4](../images/delta4.png)

## Instalación en curso

Por favor, espera mientras se descarga la imagen
![delta5](../images/delta5.png)

## Inicia sesión en tu Jeedom

Puede iniciar sesión utilizando la dirección que aparece en la página:
![delta6](../images/delta6.png)

Recuerda asignar el puerto USB de la Delta a la máquina virtual si quieres utilizar una antena.

**No** marques «Pantalla», ya que no sirve para nada en la imagen de Jeedom (aparte de un consumo excesivo).

La dirección IP de tu Jeedom en la Freebox Delta aparece en la parte superior, debajo de su nombre.

El nombre de usuario y la contraseña predeterminados son «admin/admin» cuando accedes a Jeedom a través de tu navegador.

A continuación, puedes consultar la documentación [Primeros pasos con Jeedom](/premiers-pas)
